# Ranas Security Stack

[![CI/CD](https://github.com/ranas-mukminov/ranas-security-stack/actions/workflows/deploy.yml/badge.svg)](https://github.com/ranas-mukminov/ranas-security-stack/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Комплексный набор инструментов безопасности для российского бизнеса. Интерактивная платформа для анализа и визуализации угроз информационной безопасности.

**Сайт**: [run-as-daemon.ru](https://run-as-daemon.ru)  
**GitHub**: [@ranas-mukminov](https://github.com/ranas-mukminov)

---

## Features / Возможности

- 🛡️ **Анализ угроз**: визуализация и оценка рисков ИБ
- 📊 **Интерактивные дашборды**: мониторинг инцидентов в реальном времени
- 🔐 **Инструменты для аудита**: проверка соответствия стандартам безопасности
- 🌐 **Адаптировано под российский рынок**: учёт национальных регуляторных требований

---

## Quick Start / Быстрый старт

### Local Development

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера на http://localhost:5173
npm run dev

# Production build
npm run build
npm run preview
```

### Production Deployment

Приложение автоматически деплоится в k3s кластер через GitHub Actions при push в `main`.

**Требования**:

- k3s кластер с namespace `ranas-security-stack`
- Self-hosted GitHub Actions runner с label `gha-rss`
- Доступ к GHCR (GitHub Container Registry)

**Доступ к приложению**:

- Internal (k3s NodePort): `http://<k3s-node-ip>:31234`
- External (через Traefik): `https://rss.run-as-daemon.ru`

---

## Configuration / Настройки

### Environment Variables

Приложение использует статическую конфигурацию. Для кастомизации редактируйте:

- `src/lib/repositories.ts` - список репозиториев
- `runtime.config.json` - runtime конфигурация

### Kubernetes Manifests

Все манифесты находятся в директории `k8s/`:

- `deployment.yaml` - Deployment с health probes
- `service.yaml` - Service с NodePort 31234

Для изменения ресурсов или количества реплик редактируйте `k8s/deployment.yaml`.

---

## Production Notes / Замечания по продакшену

### Security

- Контейнер запускается от non-root пользователя (UID 101)
- Все чувствительные данные хранятся в Kubernetes Secrets
- TLS терминация осуществляется на уровне Traefik

### Monitoring

Endpoints для мониторинга:

- `/health` - health check (HTTP 200)

### Firewall

NodePort 31234 защищён firewall правилами и доступен только через WireGuard туннель с edge-сервера.

---

## Commercial Support / Коммерческая поддержка

Нужна помощь с внедрением, настройкой или расширением функционала?

**run-as-daemon.ru** предоставляет следующие услуги:

- ✅ **Аудит и настройка инфраструктуры безопасности**
- ✅ **Внедрение систем мониторинга и резервного копирования**
- ✅ **Сопровождение DevOps / SRE задач**
- ✅ **Консалтинг по информационной безопасности**

📧 Свяжитесь с нами: [run-as-daemon.ru](https://run-as-daemon.ru)

---

## License

MIT License - see [LICENSE](LICENSE) for details.

Copyright © 2024 [ranas-mukminov](https://github.com/ranas-mukminov)
