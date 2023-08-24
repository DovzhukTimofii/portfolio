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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "my story",
    title: "My story",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Typewriter",
    icon: typewriter,
  },
  {
    title: "Programmer",
    icon: programmer,
  },
  {
    title: "Modeling on the site",
    icon: modeling,
  },
  {
    title: "life-long learning",
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
    title: "My start of learning about front-end",
    icon: funny,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Started watching courses on HTML/CSS.",
      'Created the first "hello world" web page.',
      "Started adding the first differently colored shapes to the web page.",
      "made the first animation for colored figures on a web page.",
    ],
  },
  {
    title: "learning JavaScript",
    icon: sadly,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jan 2023",
    points: [
      "I didn't know where to start, it was hard, it was scary.",
      "Started watching the first course on JavaScript.",
      "It was a very long but steady development of skills in javaScript.",
      "Сreated the first pet project, it was a body mass index calculator.",
    ],
  },
  {
    title: "learning React",
    icon: strangely,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jun 2023",
    points: [
      "My first acquaintance with the React framework caused thoughts like 'why do I need it?'.",
      "Out of curiosity, I started studying this framework.",
      "I realized that React is quite useful and comfortable to use.",
      "Сreated the first landing page using all the previously studied technologies.",
    ],
  },
  {
    title: "learning TypeScript",
    icon: norms,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Started studying and watching courses on TypeScript.",
      "Realized the benefits of TypeScript.",
      "Started trying to use TypeScript, but instead got a lot of errors in the code editor.",
      "I was able to typify my old project.",
    ],
  },
];

const skillGainItems = [
  {
    reason:
      "Through this project, I gained insights into website layout using common markup and style languages.",
    headline: "Help with HTML/SCSS",
    project: "Bosch",
  },
  {
    reason:
      "This project helped me to understand how to work with the server and receive data from it.",
    headline: "Help with fetch requests",
    project: "Marvel Portal",
  },
  {
    reason:
      "This project helped me understand how to build a website in React and deploy it to githab pages.",
    headline: "Help with React",
    project: "No-code",
  },
];

const projects = [
  {
    name: "No-code",
    description:
      "One-page landing page, with an existing adaptive, made according to the BEM methodology.",
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
      "The site is an information portal with a description of Marvel characters and comics, interacts with API (note that the site does not have adaptability for mobile devices).",
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
      "A one-page Bosch landing page with an existing responsive design, made using the BEM methodology.",
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
      "The site that provides the weather forecast by contacting the API server, and the site also knows your geolocation (if you provide access) and location.",
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
      "A one-page Fitness-site landing page with an existing responsive design, made using the BEM methodology(note that the site does not have adaptability for mobile devices).",
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
