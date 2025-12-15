#!/bin/bash
# Verification script for ranas-security-stack deployment
# Run as root on vpsrasil

set -e

echo "=== ranas-security-stack Deployment Verification ==="
echo ""

# Configuration
USR=gha-rss
UNIT="actions.runner.ranas-mukminov-ranas-security-stack.vpsrasil-ranas-security-stack-01.service"
U_ID="$(id -u "$USR" 2>/dev/null || echo '')"
NODEPORT=31234
EDGE_IP=10.252.1.1

echo "Step 1: Configure rootless podman for gha-rss runner"
echo "-------------------------------------------------------"

if [ -z "$U_ID" ]; then
    echo "❌ User $USR does not exist"
    exit 1
fi

echo "Enabling loginctl linger for $USR..."
loginctl enable-linger "$USR"

echo "Starting user@${U_ID}.service..."
systemctl start "user@${U_ID}.service"

echo "Checking session bus..."
ls -l "/run/user/${U_ID}/bus" || echo "⚠️  Session bus not ready yet"

echo ""
echo "Step 2: Configure systemd drop-in for runner service"
echo "-------------------------------------------------------"

mkdir -p "/etc/systemd/system/${UNIT}.d"
cat > "/etc/systemd/system/${UNIT}.d/10-userbus.conf" <<EOF
[Service]
Environment=XDG_RUNTIME_DIR=/run/user/${U_ID}
Environment=DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/${U_ID}/bus
Environment=KUBECONFIG=/home/${USR}/.kube/config
EOF

echo "✅ Created drop-in: /etc/systemd/system/${UNIT}.d/10-userbus.conf"

systemctl daemon-reload
systemctl restart "$UNIT"
echo "✅ Restarted runner service"

echo ""
echo "Step 3: Configure cgroupfs for podman"
echo "-------------------------------------------------------"

su - "$USR" -c 'mkdir -p ~/.config/containers && cat > ~/.config/containers/containers.conf <<EOF
[engine]
cgroup_manager="cgroupfs"
EOF'

echo "✅ Created ~/.config/containers/containers.conf for $USR"

echo ""
echo "Step 4: Test podman rootless"
echo "-------------------------------------------------------"

echo -n "Podman cgroup manager: "
su - "$USR" -c 'podman info --format "{{.Host.CgroupManager}}"' || echo "❌ Failed"

echo -n "Podman rootless: "
su - "$USR" -c 'podman info --format "{{.Host.Security.Rootless}}"' || echo "❌ Failed"

echo "Testing basic container run..."
su - "$USR" -c 'podman run --rm docker.io/library/alpine:3.20 echo "✅ Podman works"' || echo "❌ Container test failed"

echo ""
echo "Step 5: Configure firewall for NodePort $NODEPORT"
echo "-------------------------------------------------------"

firewall-cmd --permanent --new-zone=wg 2>/dev/null || echo "Zone wg already exists"
firewall-cmd --permanent --zone=wg --add-interface=wg1
firewall-cmd --permanent --zone=wg \
  --add-rich-rule="rule family=ipv4 source address=${EDGE_IP}/32 port protocol=tcp port=${NODEPORT} accept"

firewall-cmd --reload
echo "✅ Firewall configured"

echo ""
echo "Firewall rules for wg zone:"
firewall-cmd --zone=wg --list-rich-rules

echo ""
echo "Step 6: Verify kubectl access from gha-rss"
echo "-------------------------------------------------------"

su - "$USR" -c 'kubectl auth can-i create deployments -n ranas-security-stack' && \
  echo "✅ Can create deployments" || echo "❌ Cannot create deployments"

su - "$USR" -c 'kubectl auth can-i patch deployments -n ranas-security-stack' && \
  echo "✅ Can patch deployments" || echo "❌ Cannot patch deployments"

echo ""
echo "Step 7: Check k3s namespace and service"
echo "-------------------------------------------------------"

kubectl get namespace ranas-security-stack 2>/dev/null && \
  echo "✅ Namespace exists" || echo "⚠️  Namespace not found (will be created on first deploy)"

kubectl -n ranas-security-stack get svc ranas-security-stack 2>/dev/null && \
  echo "✅ Service exists" || echo "⚠️  Service not found (will be created on first deploy)"

echo ""
echo "=== Verification Complete ==="
echo ""
echo "Next steps:"
echo "1. Commit and push changes to trigger GitHub Actions workflow"
echo "2. Monitor workflow: gh run watch"
echo "3. After deployment, test NodePort from run-as-daemon:"
echo "   curl -sS http://10.252.1.2:${NODEPORT}/"
echo "4. Configure Traefik on run-as-daemon (see implementation_plan.md)"
echo ""
