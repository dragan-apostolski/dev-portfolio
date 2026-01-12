export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const email = "apostolskidr@gmail.com"


export const gridItems = [
  {
    id: 1,
    title: "About me",
    description: [
      "I am Dragan Apostolski, a 29-year old full-stack engineer, based in Slovenia.",
      "I hold a BsC in Computer Science & Engineering, and 6 years of professional experience in the industry, including a running 4-year tenure at Bitstamp (by Robinhood), one of the leading global crypto exchanges.",
      "I enjoy building web applications end to end, from backend business logic to polished frontends, ensuring seamless and efficient web experiences.",
    ],
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    titleClassName: "justify-end",
    imgClassName: " w-[40rem] h-full object-cover",
    img: "/grid.svg",
  },
  {
    id: 2,
    title: "General knowledge",
    description: [
      "I am the generalist type, and the full-stack engineer is the perfect role for me. But even beyond full-stack development, my interests spread far & wide.",
      "I have a decent academic background in AI & Machine Learning, and working for a crypto exchange for 3+ years, I have gained a lot of knowledge in the blockchain space as well."
    ],
    className: "md:col-span-3 md:row-span-1 lg:col-span-2",
  },
  {
    id: 3,
    title: "Tech stack",
    description: ["I always to try to keep up with the latest technologies."],
    className: " md:col-span-6 lg:col-span-5 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
  },
  {
    id: 4,
    title: "AI driven development",
    description: [
      `I am passionate about AI and its potential to transform the way we develop software.`,
      `Today, I am fully utilizing AI and writing almost 100% of the code with the help of AI agents.`,
      `Also, I have a solid background in AI and Machine Learning, and I can easily implement solutions for automating complex tasks and workflows with the help of AI.`,
    ],
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 top-0 w-full h-full",
    titleClassName: "justify-start",
    img: "/grid.svg",
  },
  {
    id: 5,
    title: "Passion for learning",
    description: [
      "Learning about new technologies, design patterns, and principles, is what gives me the spark and pushes me forward!",
      "I have a lot of general knowledge, and adjusting to new technologies is not a problem to me, as I am a quick learner."
    ],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/footer-grid.svg",
    imgClassName: "absolute right-0 top-0 w-full h-full",
  },
  {
    id: 6,
    title: "Clear & open communication",
    description: ["Communication is one of my best soft-skills. I am a team player, and I love to brainstorm & share ideas with other passionate engineers & product managers. "],
    className: "md:col-span-3 lg:col-span-2 md:row-span-1",
    imgClassName: "absolute right-0 top-0 w-full h-full",
    titleClassName: "justify-center md:justify-start",
    img: "/grid.svg",
  },
  {
    id: 7,
    title: "Interested in hiring me?",
    description: [],
    className: "md:col-span-3 lg:col-span-3",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
  },
];

export const faces = {
  'normal': '/faces/normal.png',
  'up': '/faces/up.png',
  'left-up': '/faces/left-up.png',
  'left': '/faces/left.png',
  'left-down': '/faces/left-down.png',
  'down': '/faces/down.png',
  'right-down': '/faces/right-down.png',
  'right-up': '/faces/right-up.png',
  'right': '/faces/right.png',
}

export const techStack = [
  {
    id: 1,
    title: 'Python',
    icon: '/icons/python.svg',
  },
  {
    id: 2,
    title: 'Django',
    icon: '/icons/django.svg',
    classname: 'w-30 h-30',
  },
  {
    id: 3,
    title: 'Vue.js',
    icon: '/icons/vue.svg',
  },
  {
    id: 4,
    title: 'Nuxt.js',
    icon: '/icons/nuxt.svg',
  },
  {
    id: 5,
    title: 'Next.js',
    icon: '/icons/next.svg',
  },
  {
    id: 6,
    title: 'SCSS',
    icon: '/icons/scss.svg',
  },
  {
    id: 7,
    title: 'PostCSS',
    icon: '/icons/postcss.svg',
  },
  {
    id: 8,
    title: 'Tailwind',
    icon: '/icons/tailwind.svg',
  },
  {
    id: 9,
    title: 'Go',
    icon: '/icons/go.svg',
  },
  {
    id: 10,
    title: 'Git',
    icon: '/icons/git.svg',
  },
  {
    id: 11,
    title: 'AWS',
    icon: '/icons/aws.svg',
  },
  {
    id: 12,
    title: 'Docker',
    icon: '/icons/docker.svg',
  },
]

export const projects = [
  {
    id: 1,
    title: "Photography Portfolio",
    des: "A personal photography portfolio showcasing landscape, travel, and portrait photography, built with Nuxt.js & Tailwind CSS.",
    img: "/projects/photography-portfolio.png",
    iconLists: [
      { icon: "/icons/vue.svg", name: "Vue.js" },
      { icon: "/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/icons/ts.svg", name: "TypeScript" }
    ],
    link: "https://github.com/dragan-apostolski/photography-portfolio",
    liveLink: "https://photography.apostolski-dragan.com/",
  },
  {
    id: 2,
    title: "Natours",
    des: "A demo website for hiking tour agency, built with pure HTML & CSS.",
    img: "/projects/natours.png",
    iconLists: [
      { icon: "/icons/html.svg", name: "HTML" },
      { icon: "/icons/css.svg", name: "CSS" },
      { icon: "/icons/scss.svg", name: "SCSS" }
    ],
    link: "https://github.com/dragan-apostolski/Natours",
    badge: null,
  },
  {
    id: 3,
    title: "Trillo",
    des: "Demo website for an all-in-one booking app, built using HTML & CSS flexbox.",
    img: "/projects/trillo.png",
    iconLists: [
      { icon: "/icons/html.svg", name: "HTML" },
      { icon: "/icons/css.svg", name: "CSS" },
      { icon: "/icons/scss.svg", name: "SCSS" }
    ],
    link: "https://github.com/dragan-apostolski/Trillo",
  },
  {
    id: 4,
    title: "Nexter",
    des: "A website for a real-estate agency, built with the CSS gridbox framework.",
    img: "/projects/nexter.png",
    iconLists: [
      { icon: "/icons/html.svg", name: "HTML" },
      { icon: "/icons/css.svg", name: "CSS" },
      { icon: "/icons/scss.svg", name: "SCSS" }
    ],
    link: "https://github.com/dragan-apostolski/Nexter",
  },
  {
    id: 5,
    title: "Simple Bank",
    des: "A simple microservices that simulates a banking system, written in Go. The app can be also run as a Docker container.",
    img: "/projects/bank.png",
    iconLists: [
      { icon: "/icons/go.svg", name: "Go" },
      { icon: "/icons/docker.svg", name: "Docker" }
    ],
    link: "https://github.com/dragan-apostolski/SimpleBank",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software engineer",
    company: "Bitstamp",
    tenure: "Aug 2021 - Dec 2025",
    desc: "At Bitstamp, I have contributed across the stack: from developing user interfaces, APIs, to backend business logic. "  + 
    "Using modern web technologies and software engineering best practices, I was responsible for building scalable and efficient features across the platform.",
    className: "",
    thumbnail: "/companies/bitstamp.png",
    icons: [
      { icon: "/icons/python.svg", name: "Python" },
      { icon: "/icons/django.svg", name: "Django" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
      { icon: "/icons/vue.svg", name: "Vue.js" },
      { icon: "/icons/postcss.svg", name: "PostCSS" },
      { icon: "/icons/aws.svg", name: "AWS" },
      { icon: "/icons/docker.svg", name: "Docker" },
      { icon: "/icons/go.svg", name: "Go" }
    ],
  },
  {
    id: 2,
    title: "Software developer",
    company: "Informa studio",
    tenure: "Jan 2020 - Jul 2021",
    desc: `
      At Informa Studio I established a solid knowledge in full-stack
      development by implementing a fresh design for their lead-generation application primerjam.si,
      while also working on a Django application for
      storing and maintaining data for service providers, refactoring and
      rewriting an old codebase from Ruby to Django, as well as
      implementing features on their internal CRM using vanilla javascript,
      HTML & CSS, and Python & Django.
    `,
    className: "",
    thumbnail: "/companies/informa.png",
    icons: [
      { icon: "/icons/python.svg", name: "Python" },
      { icon: "/icons/django.svg", name: "Django" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
      { icon: "/icons/html.svg", name: "HTML" },
      { icon: "/icons/css.svg", name: "CSS" }
    ],
  },
  {
    id: 3,
    title: "Android Developer Intern",
    company: 'BMG Universe',
    tenure: 'Jun 2017 - Aug 2017',
    desc: "A 3-month internship in a local software development company - BMG Universe, where I was developing an application for a local taxi company. " + 
    " Here I started getting to know the industry, how do things work in a company, what are client requirements, and how to do some technical planning." ,
    className: "",
    thumbnail: "/companies/bmg.png",
    icons: [
      { icon: "/icons/android.svg", name: "Android" },
      { icon: "/icons/java.svg", name: "Java" }
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "icons/github.svg",
    link: 'https://github.com/dragan-apostolski'
  },
  {
    id: 2,
    img: "icons/x.svg",
    link: 'https://x.com/aposttolski'
  },
  {
    id: 3,
    img: "icons/link.svg",
    link: 'https://linkedin.com/in/dragan-apostolski-9b88ab153'
  },
];