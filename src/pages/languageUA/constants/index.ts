import {
  programmer,
  modeling,
  lifelong,
  typewriter,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  norms,
  funny,
  sadly,
  strangely,
  nocode,
  threejs,
  marvelportal,
  bosch,
  weatherapp,
  fitnessite,
} from "../../../assets";

export const navLinks = [
  {
    id: "about",
    title: "Про це",
  },
  {
    id: "my story",
    title: "Моя історія",
  },
  {
    id: "contact",
    title: "Контакти",
  },
];

const services = [
  {
    title: "Верстка",
    icon: typewriter,
  },
  {
    title: "Програміст",
    icon: programmer,
  },
  {
    title: "Моделювання на сайті",
    icon: modeling,
  },
  {
    title: "Навчання впродовж усього життя",
    icon: lifelong,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Мій початок вивчення фронтенду",
    icon: funny,
    iconBg: "#E6DEDD",
    date: "Червень 2022 - серпень 2022",
    points: [
      "Почав дивитися курси з HTML/CSS.",
      'Створили першу веб-сторінку "hello world".',
      "Почав додавати перші різнокольорові фігури на веб-сторінку.",
      "Зробив першу анімацію для кольорових фігур на веб-сторінці.",
    ],
  },
  {
    title: "Вивчення JavaScript",
    icon: sadly,
    iconBg: "#E6DEDD",
    date: "Вересень 2022 - січень 2023",
    points: [
      "Я не знав, з чого почати, було важко, було страшно.",
      "Почав дивитися перший курс з JavaScript.",
      "Це був дуже довгий, але впевнений розвиток навичок в javaScript.",
      "Створив перший домашній проект - калькулятор індексу маси тіла.",
    ],
  },
  {
    title: "Вивчаємо React",
    icon: strangely,
    iconBg: "#E6DEDD",
    date: "Лютий 2023 - червень 2023",
    points: [
      "Моє перше знайомство з фреймворком React викликало думки на кшталт 'навіщо він мені потрібен?'.",
      "З цікавості я почав вивчати цей фреймворк.",
      "Я зрозумів, що React досить корисний і зручний у використанні.",
      "Створили перший лендінг з використанням усіх вивчених раніше технологій.",
    ],
  },
  {
    title: "Вивчення TypeScript",
    icon: norms,
    iconBg: "#E6DEDD",
    date: "Липень 2023 - серпень 2023",
    points: [
      "Почав вивчати та дивитися курси з TypeScript.",
      "Усвідомив переваги TypeScript.",
      "Почав пробувати використовувати TypeScript, але натомість отримав багато помилок у редакторі коду.",
      "Я зміг типізувати свій старий проект.",
    ],
  },
];

const skillGainItems = [
  {
    reason:
      "Завдяки цьому проекту я отримав уявлення про верстку веб-сайтів з використанням поширених мов розмітки та стилів.",
    headline: "Допомога з HTML/SCSS",
    project: "Bosch",
  },
  {
    reason:
      "Цей проект допоміг мені зрозуміти, як працювати з сервером і отримувати з нього дані.",
    headline: "Допомога із запитами на вибірку",
    project: "Marvel Portal",
  },
  {
    reason:
      "Цей проект допоміг мені зрозуміти, як створити сайт на React і розгорнути його на сторінках githab.",
    headline: "Допомога з React",
    project: "No-code",
  },
];

const projects = [
  {
    name: "No-code",
    description:
      "Односторінковий лендінг, з існуючим адаптивним дизайном, виконаний за методологією BEM.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nocode,
    source_code_link: "https://dovzhuktimofii.github.io/",
  },
  {
    name: "Marvel Portal",
    description:
      "Сайт являє собою інформаційний портал з описом персонажів і коміксів Marvel, взаємодіє з API (зверніть увагу, що сайт не має адаптивності для мобільних пристроїв).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: marvelportal,
    source_code_link: "https://dovzhuktimofii.github.io/MarvelPortal/",
  },
  {
    name: "Bosch",
    description:
      "Односторінковий лендінг Bosch з наявним адаптивним дизайном, виконаним за методологією BEM.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bosch,
    source_code_link: "https://dovzhuktimofii.github.io/boch/",
  },
  {
    name: "Weather-App",
    description:
      "Сайт, який надає прогноз погоди, зв'язуючись із сервером API, а також знає вашу геолокацію (якщо ви надали доступ) і місцезнаходження.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://dovzhuktimofii.github.io/weatherApp/",
  },
  {
    name: "Foot",
    description:
      "Односторінковий лендінг фітнес-сайту з існуючим адаптивним дизайном, виконаний за методикою BEM (зверніть увагу, що сайт не має адаптивності для мобільних пристроїв).",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessite,
    source_code_link: "https://dovzhuktimofii.github.io/Food/",
  },
];

export { services, technologies, experiences, skillGainItems, projects };
