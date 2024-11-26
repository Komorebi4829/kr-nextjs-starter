import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Open-Source / Free",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Freely clone the nextjs landing starter from the GitHub repository.",
    features: [
      "Free",
      "Access to full code",
      "Secondary development",
      "MIT License",
    ],
    buttonText: "Get started",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Standard,
    title: "Standard",
    href: "#",
    description: "Get more features with our standard plan.",
    price: "$49",
    features: [
      "Access to full code",
      "Secondary development",
      "Email support",
      "Monthly updates",
      "Basic customization",
    ],
    buttonText: "Choose Standard",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Customize",
    href: "#",
    description: "Pay to customize an exclusive landing page.",
    price: "$188",
    features: [
      "Access to full code",
      "Secondary development",
      "Exclusive style",
      "One-on-one service",
      "More exquisite pages",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "开源 / 免费",
    price: "免费",
    href: siteConfig.openSourceURL || "#",
    description: "可从GitHub仓库免费克隆落地页模板。",
    features: ["免费", "访问全部代码", "二次开发", "MIT 许可证"],
    buttonText: "开始",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Standard,
    title: "标准版",
    href: "#",
    description: "使用我们的标准计划获得更多功能。",
    price: "$49",
    features: [
      "访问全部代码",
      "二次开发",
      "电子邮件支持",
      "每月更新",
      "基础定制",
    ],
    buttonText: "选择标准版",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "定制",
    href: "#",
    description: "支付定制专属落地页。",
    price: "$188",
    features: [
      "访问全部代码",
      "二次开发",
      "独家风格",
      "一对一服务",
      "更精致的页面",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "オープンソース / 無料",
    price: "無料",
    href: siteConfig.openSourceURL || "#",
    description:
      "GitHubリポジトリからランディングページのボイラープレートを自由にクローンできます。",
    features: ["無料", "全コードへのアクセス", "二次開発", "MITライセンス"],
    buttonText: "始める",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Standard,
    title: "スタンダード",
    href: "#",
    description: "スタンダードプランでより多くの機能を利用できます。",
    price: "¥5,400",
    features: [
      "全コードへのアクセス",
      "二次開発",
      "メールサポート",
      "月次アップデート",
      "基本的なカスタマイズ",
    ],
    buttonText: "スタンダードを選択",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "カスタマイズ",
    href: "#",
    description: "専用のランディングページをカスタマイズするために支払います。",
    price: "$188",
    features: [
      "全コードへのアクセス",
      "二次開発",
      "独占スタイル",
      "1対1のサービス",
      "より精巧なページ",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "مفتوح المصدر / مجاني",
    price: "مجاناً",
    href: siteConfig.openSourceURL || "#",
    description: "يمكنك نسخ قالب صفحة الهبوط من مستودع GitHub بحرية.",
    features: ["مجاني", "الوصول إلى كامل الكود", "التطوير الثانوي", "رخصة MIT"],
    buttonText: "ابدأ الآن",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Standard,
    title: "القياسية",
    href: "#",
    description: "احصل على المزيد من الميزات مع خطتنا القياسية.",
    price: "$49",
    features: [
      "الوصول إلى الكود الكامل",
      "التطوير الثانوي",
      "دعم البريد الإلكتروني",
      "تحديثات شهرية",
      "تخصيص أساسي",
    ],
    buttonText: "اختر القياسية",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "تخصيص",
    href: "#",
    description: "ادفع لتخصيص صفحة هبوط حصرية.",
    price: "$188",
    features: [
      "الوصول إلى كامل الكود",
      "التطوير الثانوي",
      "أسلوب حصري",
      "خدمة فردية",
      "صفحات أكثر دقة",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Código Abierto / Gratuito",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Clona libremente la plantilla de página de aterrizaje desde el repositorio de GitHub.",
    features: [
      "Gratis",
      "Acceso a todo el código",
      "Desarrollo secundario",
      "Licencia MIT",
    ],
    buttonText: "Comenzar",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Standard,
    title: "Estándar",
    href: "#",
    description: "Obtén más funciones con nuestro plan estándar.",
    price: "49€",
    features: [
      "Acceso al código completo",
      "Desarrollo secundario",
      "Soporte por correo electrónico",
      "Actualizaciones mensuales",
      "Personalización básica",
    ],
    buttonText: "Elegir Estándar",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Personalizar",
    href: "#",
    description: "Paga para personalizar una página de aterrizaje exclusiva.",
    price: "$188",
    features: [
      "Acceso a todo el código",
      "Desarrollo secundario",
      "Estilo exclusivo",
      "Servicio personalizado",
      "Páginas más exquisitas",
    ],
    buttonText: "Contáctanos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Открытый Источник / Бесплатно",
    price: "Бесплатно",
    href: siteConfig.openSourceURL || "#",
    description:
      "Свободно клонируйте шаблон лендинга из репозитория на GitHub.",
    features: [
      "Бесплатно",
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Лицензия MIT",
    ],
    buttonText: "Начать",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Standard,
    title: "Стандарт",
    href: "#",
    description: "Получите больше возможностей с нашим стандартным планом.",
    price: "3500₽",
    features: [
      "Доступ к полному коду",
      "Вторичная разработка",
      "Поддержка по электронной почте",
      "Ежемесячные обновления",
      "Базовая настройка",
    ],
    buttonText: "Выбрать Стандарт",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Настройка",
    href: "#",
    description: "Оплатите персонализацию эксклюзивной лендинг страницы.",
    price: "$188",
    features: [
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Эксклюзивный стиль",
      "Индивидуальное обслуживание",
      "Более изысканные страницы",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU,
};

