export interface Repository {
  id: string
  name: string
  githubRepo: string
  url: string
  category: string
  description: string
  forWhom: string[]
  tags: string[]
}

export const repositories: Repository[] = [
  {
    id: "pd-anonymizer",
    name: "Анонимизатор персональных данных",
    githubRepo: "ru-smb-pd-anonymizer",
    url: "https://github.com/ranas-mukminov/ru-smb-pd-anonymizer",
    category: "pd-152fz",
    description: "Инструмент для безопасной анонимизации ПДн в тестовых базах, аналитике и отчётах. Помогает не светить реальные данные клиентов при работе с копиями баз.",
    forWhom: ["Владелец бизнеса", "IT-директор", "Ответственный за ПДн"],
    tags: ["152-ФЗ", "ПДн", "Open source", "CLI"]
  },
  {
    id: "152fz-as-code",
    name: "152-ФЗ как код",
    githubRepo: "152fz-compliance-as-code",
    url: "https://github.com/ranas-mukminov/152fz-compliance-as-code",
    category: "pd-152fz",
    description: "Описываем обработку персональных данных в YAML-файлах и автоматически получаем реестр, шаблоны согласий, карту потоков данных и базовый отчёт по рискам.",
    forWhom: ["IT-директор", "Ответственный за ПДн", "Специалист по ИБ"],
    tags: ["152-ФЗ", "Compliance", "Automation", "Open source"]
  },
  {
    id: "it-audit-notebook",
    name: "Блокнот для ИТ-аудита",
    githubRepo: "ru-it-audit-notebook",
    url: "https://github.com/ranas-mukminov/ru-it-audit-notebook",
    category: "devsecops-audit",
    description: "Набор готовых чек-листов и шаблонов для проведения ИТ-аудита инфраструктуры компании. Всё на понятном языке, без перегруза терминологией.",
    forWhom: ["IT-директор", "Специалист по ИБ", "Аудитор"],
    tags: ["Audit", "Checklist", "Open source"]
  },
  {
    id: "devsecops-templates",
    name: "DevSecOps шаблоны для SMB",
    githubRepo: "russian-smb-devsecops-templates",
    url: "https://github.com/ranas-mukminov/russian-smb-devsecops-templates",
    category: "devsecops-audit",
    description: "Готовые шаблоны CI/CD пайплайнов, политик безопасности и артефактов DevSecOps, адаптированные под реалии российского малого и среднего бизнеса.",
    forWhom: ["IT-директор", "DevOps-инженер", "Разработчик"],
    tags: ["DevSecOps", "CI/CD", "Templates", "Open source"]
  },
  {
    id: "incident-timeline",
    name: "Сборщик временной шкалы инцидентов",
    githubRepo: "incident-timeline-extractor",
    url: "https://github.com/ranas-mukminov/incident-timeline-extractor",
    category: "incidents-monitoring",
    description: "Помогает собрать понятную временную шкалу инцидента из логов, тикетов и переписки. Упрощает разбор полётов и составление отчётов после сбоев.",
    forWhom: ["IT-директор", "Специалист по ИБ", "DevOps-инженер"],
    tags: ["Incident", "Monitoring", "Analysis", "Open source"]
  },
  {
    id: "kkt-monitoring",
    name: "Мониторинг онлайн-касс (54-ФЗ)",
    githubRepo: "kkt-54fz-monitoring",
    url: "https://github.com/ranas-mukminov/kkt-54fz-monitoring",
    category: "incidents-monitoring",
    description: "Компоненты и подходы для мониторинга работы онлайн-касс и соблюдения 54-ФЗ. Помогает не терять чеки, выручку и избегать штрафов.",
    forWhom: ["Владелец бизнеса", "IT-директор", "Бухгалтер"],
    tags: ["54-ФЗ", "ККТ", "Monitoring", "Open source"]
  },
  {
    id: "chestny-znak",
    name: "Валидатор потоков «Честный Знак»",
    githubRepo: "chestny-znak-flow-validator",
    url: "https://github.com/ranas-mukminov/chestny-znak-flow-validator",
    category: "incidents-monitoring",
    description: "Инструмент для валидации потоков данных и интеграций с системой «Честный Знак». Снижает риски штрафов, блокировок и проблем с маркировкой.",
    forWhom: ["Владелец бизнеса", "IT-директор", "Логист"],
    tags: ["Честный Знак", "Validation", "Compliance", "Open source"]
  },
  {
    id: "backup-vault",
    name: "ГОСТ-совместимое резервное копирование",
    githubRepo: "gost-backup-vault",
    url: "https://github.com/ranas-mukminov/gost-backup-vault",
    category: "backup",
    description: "Подход к организации резервного копирования с учётом российских требований и стандартов ГОСТ. Обеспечивает сохранность критичных данных компании.",
    forWhom: ["IT-директор", "Системный администратор", "Специалист по ИБ"],
    tags: ["Backup", "ГОСТ", "Security", "Open source"]
  },
  {
    id: "cloud-portability",
    name: "Советник по переносимости облаков",
    githubRepo: "ru-cloud-portability-advisor",
    url: "https://github.com/ranas-mukminov/ru-cloud-portability-advisor",
    category: "cloud-architecture",
    description: "Помогает планировать миграции между облачными провайдерами и избегать vendor lock-in. Анализирует архитектуру и даёт рекомендации по переносимости.",
    forWhom: ["IT-директор", "Архитектор", "DevOps-инженер"],
    tags: ["Cloud", "Architecture", "Migration", "Open source"]
  },
  {
    id: "kii-mapper",
    name: "Карта готовности к КИИ",
    githubRepo: "kii-readiness-mapper",
    url: "https://github.com/ranas-mukminov/kii-readiness-mapper",
    category: "cloud-architecture",
    description: "Инструмент для оценки готовности инфраструктуры к требованиям КИИ. Показывает текущий уровень защищённости и выявляет слабые места.",
    forWhom: ["IT-директор", "Специалист по ИБ", "Владелец бизнеса"],
    tags: ["КИИ", "Security", "Assessment", "Open source"]
  },
  {
    id: "fin-monitoring",
    name: "Помощник по финмониторингу",
    githubRepo: "ru-fin-monitoring-helper",
    url: "https://github.com/ranas-mukminov/ru-fin-monitoring-helper",
    category: "finance-budget",
    description: "Вспомогательный набор для компаний, подпадающих под финансовый мониторинг. Помогает выстроить процессы и документацию без хаоса.",
    forWhom: ["Владелец бизнеса", "Финансовый директор", "Юрист"],
    tags: ["Финмониторинг", "Compliance", "Documentation", "Open source"]
  },
  {
    id: "it-budget-planner",
    name: "Планировщик ИТ-бюджета для SMB",
    githubRepo: "ru-smb-it-budget-planner",
    url: "https://github.com/ranas-mukminov/ru-smb-it-budget-planner",
    category: "finance-budget",
    description: "Помогает структурировать ИТ-бюджет малого бизнеса: серверы, облака, лицензии, поддержка, безопасность. Понятные категории и рекомендации.",
    forWhom: ["Владелец бизнеса", "IT-директор", "Финансовый директор"],
    tags: ["Budget", "Planning", "IT Management", "Open source"]
  },
  {
    id: "remote-work-kit",
    name: "Комплект для безопасной удалёнки",
    githubRepo: "ru-remote-work-compliance-kit",
    url: "https://github.com/ranas-mukminov/ru-remote-work-compliance-kit",
    category: "remote-industries",
    description: "Набор подходов и шаблонов для организации безопасной удалённой работы: VPN, управление доступами, защита ПДн и корпоративных данных.",
    forWhom: ["Владелец бизнеса", "IT-директор", "HR-директор"],
    tags: ["Remote Work", "Security", "VPN", "Open source"]
  },
  {
    id: "edu-safety-kit",
    name: "ИТ-безопасность для образования",
    githubRepo: "ru-edu-it-safety-kit",
    url: "https://github.com/ranas-mukminov/ru-edu-it-safety-kit",
    category: "remote-industries",
    description: "Набор инструментов для защиты образовательных учреждений: безопасность данных учеников, защита сетей, организация удалённых занятий.",
    forWhom: ["Директор школы", "IT-администратор", "Завуч"],
    tags: ["Образование", "Security", "ПДн", "Open source"]
  },
  {
    id: "gost-crypto-lab",
    name: "Лаборатория криптографии по ГОСТ",
    githubRepo: "ru-gost-crypto-lab",
    url: "https://github.com/ranas-mukminov/ru-gost-crypto-lab",
    category: "crypto-gost",
    description: "Лаборатория для работы с российскими криптоалгоритмами по ГОСТ. Примеры, тесты и прототипирование с использованием отечественной криптографии.",
    forWhom: ["IT-директор", "Разработчик", "Специалист по ИБ"],
    tags: ["ГОСТ", "Криптография", "Security", "Open source"]
  }
]

export const categories = [
  { id: "all", name: "Все инструменты", value: "all" },
  { id: "pd-152fz", name: "Персональные данные и 152-ФЗ", value: "pd-152fz" },
  { id: "devsecops-audit", name: "DevSecOps и ИТ-аудит", value: "devsecops-audit" },
  { id: "incidents-monitoring", name: "Инциденты и мониторинг", value: "incidents-monitoring" },
  { id: "backup", name: "Резервное копирование", value: "backup" },
  { id: "cloud-architecture", name: "Облака и архитектура", value: "cloud-architecture" },
  { id: "finance-budget", name: "Финансы и бюджет", value: "finance-budget" },
  { id: "remote-industries", name: "Удалёнка и отрасли", value: "remote-industries" },
  { id: "crypto-gost", name: "Криптография по ГОСТ", value: "crypto-gost" }
]