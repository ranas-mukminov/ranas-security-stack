# Ranas Security Stack

[![CI/CD](https://github.com/ranas-mukminov/ranas-security-stack/actions/workflows/deploy.yml/badge.svg)](https://github.com/ranas-mukminov/ranas-security-stack/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Made in Russia](https://img.shields.io/badge/Made%20in-Russia-blue.svg)](https://run-as-daemon.ru)

> 🛡️ **Комплексный набор инструментов безопасности для российского бизнеса**

Интерактивная платформа для анализа угроз, защиты персональных данных и соответствия требованиям 152-ФЗ. Бесплатно и с открытым исходным кодом.

🌐 **Demo**: [github.run-as-daemon.ru](https://github.run-as-daemon.ru)  
🏠 **Сайт**: [run-as-daemon.ru](https://run-as-daemon.ru)  
👨‍💻 **GitHub**: [@ranas-mukminov](https://github.com/ranas-mukminov)

---

## Кому полезно / Who is this for

- 🏢 **Малый и средний бизнес** — оценка рисков без дорогих консультантов
- 🔐 **Специалисты по ИБ** — инструменты для аудита и compliance
- 💼 **IT-директора** — визуализация угроз для руководства
- 🏠 **Владельцы серверов/homelab** — базовый анализ безопасности

---

## Features / Возможности

### Анализ и визуализация

- 🛡️ **Анализ угроз**: визуализация и оценка рисков ИБ
- 📊 **Интерактивные дашборды**: мониторинг инцидентов в реальном времени
- 📈 **Трендовый анализ**: исторические данные по инцидентам

### Compliance и аудит

- ✅ **152-ФЗ Compliance**: проверка соответствия закону о персональных данных
- 🔍 **Проверка утечек**: мониторинг данных в публичных базах
- 📋 **Отчётность**: генерация отчётов для регуляторов

### Адаптация под Россию

- 🇷🇺 **Локализация**: полная поддержка русского языка
- ⚖️ **Регуляторные требования**: учёт ФСТЭК, ФСБ, Роскомнадзор
- 🏦 **Отраслевые стандарты**: банки, медицина, госсектор

---

## Quick Start / Быстрый старт

### Local Development

```bash
# Клонировать репозиторий
git clone https://github.com/ranas-mukminov/ranas-security-stack.git
cd ranas-security-stack

# Установка зависимостей
npm install

# Запуск dev-сервера на http://localhost:5173
npm run dev

# Production build
npm run build
npm run preview
```

### Docker / Containerized

```bash
# Сборка образа
podman build -f Containerfile -t ranas-security-stack .

# Запуск
podman run -d -p 8080:8080 ranas-security-stack
```

---

## Production Deployment

Приложение автоматически деплоится в k3s кластер через GitHub Actions при push в `main`.

**Требования**:

- k3s кластер с namespace `ranas-security-stack`
- Self-hosted GitHub Actions runner с label `gha-rss`
- Доступ к GHCR (GitHub Container Registry)

**Доступ к приложению**:

- **Production URL**: <https://github.run-as-daemon.ru>
- Internal NodePort: `http://<k3s-node-ip>:30938`

---

## FAQ / Часто задаваемые вопросы

### Что такое Ranas Security Stack?

Это бесплатный open-source набор инструментов для анализа безопасности и соответствия требованиям 152-ФЗ "О персональных данных". Разработан специально для российского бизнеса.

### Для кого предназначен этот инструмент?

Для малого и среднего бизнеса, IT-специалистов, специалистов по информационной безопасности, которым нужно оценить риски и обеспечить compliance без дорогих консультантов.

### Это бесплатно?

Да, приложение полностью бесплатное и с открытым исходным кодом (MIT License).

### Как связаться с разработчиками?

Через сайт [run-as-daemon.ru](https://run-as-daemon.ru) или GitHub issues.

### Можно ли использовать в коммерческих целях?

Да, лицензия MIT разрешает коммерческое использование.

---

## Security / Безопасность

- 🔒 Контейнер запускается от non-root пользователя (UID 101)
- 🔑 Чувствительные данные хранятся в Kubernetes Secrets
- 🔐 TLS терминация на уровне Traefik с Let's Encrypt
- 🛡️ Health check endpoint: `/health`

---

## Commercial Support / Коммерческая поддержка

Нужна помощь с внедрением, настройкой или расширением функционала?

**[run-as-daemon.ru](https://run-as-daemon.ru)** предоставляет услуги:

| Услуга | Описание |
|--------|----------|
| ✅ Аудит инфраструктуры | Полный анализ безопасности вашей системы |
| ✅ Внедрение мониторинга | Prometheus, Grafana, alerting |
| ✅ DevOps / SRE | CI/CD, Kubernetes, автоматизация |
| ✅ Консалтинг по 152-ФЗ | Подготовка к проверкам Роскомнадзора |

📧 **Контакт**: [run-as-daemon.ru](https://run-as-daemon.ru)

---

## Tech Stack / Технологии

- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS + Radix UI
- 📦 Vite
- 🐳 Podman / Docker
- ☸️ Kubernetes (k3s)
- 🚀 GitHub Actions CI/CD

---

## License

MIT License - see [LICENSE](LICENSE) for details.

Copyright © 2024 [ranas-mukminov](https://github.com/ranas-mukminov)

---

<p align="center">
  <a href="https://run-as-daemon.ru">
    <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-run--as--daemon.ru-green" alt="Made by run-as-daemon.ru"/>
  </a>
</p>
