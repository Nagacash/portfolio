import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Audio Engineer",
    icon: mobile,
  },
  {
    title: "Junior Cyber Analyst",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graduated Web Developer",
    company_name: "DCI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2021 - September 2022",
    points: [
      "I have completed my studies in web development at Digital Career Institute. Throughout the program", 
      "I gained valuable skills in HTML, CSS, JavaScript, and web design, and learned how to create engaging and dynamic websites.",
      "I am excited to bring my newfound knowledge to my future projects and to continue expanding my skills in the field.", 
      "Follow me as I embark on a new chapter in my career as a web developer and share my passion for creating impactful and innovative digital experiences",
    ],
  },
  {
    title: "Audio Engineer",
    company_name: "Mastering Academy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ok 2022 - March 2023",
    points: [
      "I'm excited to announce that I just completed an audio engineering course at Mastering Academy.", 
      "As an aspiring audio engineer, I've gained extensive knowledge and hands-on experience in mastering and mixing techniques that will take my music production skills to the next level.",
      "I'm now equipped with the technical expertise and artistic vision necessary to create high-quality recordings that capture the essence of each song.",
      "Follow me as I continue to hone my craft and bring my passion for music to life",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Naga Club",
    company_name: "Naga Apparel",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023 - March 2024",
    points: [
      "Naga Club: A Clubbing Project",

      "As the founder and operator of Naga Club, I had the opportunity to share my love for dance and music with the community.", 
      "We offered a diverse range of classes, including salsa, kizomba, house, hip-hop, electro, and afrobeat, throughout the week and on weekends.",

      "Unfortunately, our lease (Zwischennutzung) was only for a year, forcing us to close our doors in March 2024.",  
      "I'm currently actively searching for a new location to continue our dance programs and bring the Naga Club experience back to the community",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cyber Security",
    company_name: "Masterschool",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2024 - Feb 2025",
    points: [
      "Cybersecurity Analyst in Training",

     "I'm currently enrolled in a Master's degree program in Cybersecurity at Masterschool, honing my skills and knowledge in the field.", 
     "With graduation on the horizon", 
     "I'm eager to apply my expertise to real-world challenges and contribute to the protection of digital assets.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
