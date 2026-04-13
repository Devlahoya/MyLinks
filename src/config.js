// ============================================================
//  PERSONAL LINKS PAGE — CONFIGURATION FILE
//  Edit this file to customize everything about your page.
// ============================================================

export const config = {
  // --- Profile ---
  name: "Héctor Ramón Martínez de la Hoya",
  bio: "Estudiante de Maestria en Ingenieria · Creador de contenido · Desarrollador · Amante del Monster Blanco ☕",
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQEmmRUNZJE-9A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721872692799?e=1777507200&v=beta&t=BehY3zHkReO565YOODhMD4v8uQ92RzhTkENy4VytTxQ",

  // --- Theme colors (edit freely) ---
  theme: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    // Overlay dots pattern — set to "none" to disable
    patternOpacity: "0.04",
    cardBg: "rgba(255, 255, 255, 0.13)",
    cardBorder: "rgba(255, 255, 255, 0.25)",
    cardHover: "rgba(255, 255, 255, 0.22)",
    cardHoverBorder: "rgba(255, 255, 255, 0.45)",
    textColor: "#ffffff",
    subtextColor: "rgba(255, 255, 255, 0.75)",
    accentColor: "#ffffff",
    avatarBorder: "rgba(255, 255, 255, 0.6)",
    avatarGlow: "rgba(255, 255, 255, 0.35)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },

  // --- Social / custom links ---
  // Supported icon libraries: fa (Font Awesome), si (Simple Icons), bi (Bootstrap Icons)
  // Browse icons at: https://react-icons.github.io/react-icons/
  links: [
    {
      id: 1,
      title: "Instagram",
      url: "https://instagram.com/devlahoya",
      icon: "FaInstagram",
      color: "#E1306C",
    },
    // {
    //   id: 2,
    //   title: "Twitter / X",
    //   url: "https://twitter.com/usuario",
    //   icon: "FaXTwitter",
    //   color: "#000000",
    // },
    // {
    //   id: 3,
    //   title: "YouTube",
    //   url: "https://youtube.com/@usuario",
    //   icon: "FaYoutube",
    //   color: "#FF0000",
    // },
    {
      id: 4,
      title: "GitHub",
      url: "https://github.com/devlahoya",
      icon: "FaGithub",
      color: "#333333",
    },
    {
      id: 5,
      title: "LinkedIn",
      url: "https://linkedin.com/in/devlahoya",
      icon: "FaLinkedinIn",
      color: "#0A66C2",
    },
    {
      id: 6,
      title: "TikTok",
      url: "https://tiktok.com/@devlahoya",
      icon: "FaTiktok",
      color: "#010101",
    },
    // {
    //   id: 7,
    //   title: "Twitch",
    //   url: "https://twitch.tv/usuario",
    //   icon: "FaTwitch",
    //   color: "#9146FF",
    // },
    // {
    //   id: 8,
    //   title: "Discord",
    //   url: "https://discord.gg/tuservidor",
    //   icon: "FaDiscord",
    //   color: "#5865F2",
    // },
    {
      id: 9,
      title: "Mi Sitio Web",
      url: "https://devlahoya.netlify.app/",
      icon: "FaGlobe",
      color: "#10B981",
    },
  ],

  // --- Footer ---
  footer: "© 2026 Devlahoya · Hecho con ❤️",

  // ============================================================
  //  TRANSLATIONS
  //  The site auto-detects the visitor's browser language.
  //  defaultLang is used as fallback when no match is found.
  //  Only translate fields that actually change — anything
  //  omitted falls back to the values above.
  //
  //  Translatable fields per language:
  //    bio     → profile bio text
  //    footer  → footer text
  //    links   → object keyed by link id (only custom titles need translation;
  //               brand names like "Instagram" usually stay the same)
  //
  //  Language codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // ============================================================
  defaultLang: "es",
  translations: {
    es: {
      bio: "Estudiante de Maestría en Ingeniería · Creador de contenido · Desarrollador · Amante del Monster Blanco ⚡",
      footer: "© 2026 Devlahoya · Hecho con ❤️",
      links: {
        9: "Mi Sitio Web",
      },
    },
    en: {
      bio: "Master's student in Engineering · Content creator · Developer · White Monster lover ⚡",
      footer: "© 2026 Devlahoya · Made with ❤️",
      links: {
        9: "My Website",
      },
    },
    fr: {
      bio: "Étudiant en Master d'Ingénierie · Créateur de contenu · Développeur · Amateur de Monster Blanc ⚡",
      footer: "© 2026 Devlahoya · Fait avec ❤️",
      links: {
        9: "Mon Site Web",
      },
    },
    ru: {
      bio: "Магистрант инженерного факультета · Создатель контента · Разработчик · Любитель белого Monster ⚡",
      footer: "© 2026 Devlahoya · Сделано с ❤️",
      links: {
        9: "Мой веб-сайт",
      },
    },
    de: {
      bio: "Masterstudent der Ingenieurwissenschaften · Content Creator · Entwickler · White Monster Liebhaber ⚡",
      footer: "© 2026 Devlahoya · Mit ❤️ gemacht",
      links: {
        9: "Meine Webseite",
      },
    },
    zh: {
      bio: "工程学硕士生 · 内容创作者 · 开发者 · 白色魔爪能量饮料爱好者 ⚡",
      footer: "© 2026 Devlahoya · 用 ❤️ 制作",
      links: {
        9: "我的网站",
      },
    },
    pt: {
      bio: "Mestrando em Engenharia · Criador de conteúdo · Desenvolvedor · Amante de Monster Branco ⚡",
      footer: "© 2026 Devlahoya · Feito com ❤️",
      links: {
        9: "Meu Site",
      },
    },
  },
}
