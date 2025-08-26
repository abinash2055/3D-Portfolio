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
  robust,
  tesla,
  shopify,
  pose,
  music,
  Estore,
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
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Laravel Developer",
    icon: mobile,
  },
  {
    title: "Full Stack MERN Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    title: "Laravel Developer",
    company_name: "Robust Information Technology",
    icon: robust,
    iconBg: "#383E56",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using Laravel and related PHP technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility with Blade templates and front-end frameworks.",
      "Participating in code reviews, optimizing queries, and providing constructive feedback to other developers.",
    ],
  },

  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sushil Subedi",
    designation: "Founder",
    company: "Robust InfoTech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38q24-mOA8IBBrOStB750OwqQK-ifcBYU5w&s",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Rick does with Machine Learning projects.",
    name: "Mahesh Singh Khathayat",
    designation: "HOD",
    company: "Department Head",
    image:
      "https://scontent.fktm19-1.fna.fbcdn.net/v/t1.6435-9/118857422_608024453229613_7639125901357469173_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oy_cnuq3GCMQ7kNvwGEY29K&_nc_oc=AdlIYOvMQFADEa7wWt_JgJtvJCK_foaTw4MsHTh9fAjiJDYNnAkc_a5Dtyu8dCXAC04cfL7REzUUreEVSux5ldHb&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=nnj4fqqJNI_Uy8xJ2qPOvw&oh=00_AfUKYuscIVSvBqfb2krKFkikzn03iCGAJwjPs2Rrw4xOFg&oe=68D4E926",
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
    name: "Personal Trainer Human Pose Visualization",
    description:
      "ML project that uses AI, Mediapipe, OpenCV, Numpy, etc that chects bicep curl, Push-up, Sit Up, Squat ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Python ",
        color: "pink-text-gradient",
      },
    ],
    image: pose,
    source_code_link:
      "https://github.com/abinash2055/Personal_Trainer_using_Human_Pose_Visualization",
  },
  {
    name: "Music Text Player",
    description:
      "A Django-based web application built with Python that allows users to play local MP3 music files with a simple text-based interface.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Virtual Environment",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/abinash2055/MusicTextPlayer",
  },
  {
    name: "E-store",
    description:
      "An e-commerce platform that allows users to browse products, order item to a shopping cart, place orders, and manage their account with a secure checkout process.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Estore,
    source_code_link: "https://github.com/abinash2055/E-Commerce-MERN",
  },
];

export { services, technologies, experiences, testimonials, projects };
