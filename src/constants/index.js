import {
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    aws,
    flask,
    python,
    vitejs,
    mysql,
    chatmode1,
    chatmode2,
    imaginator1,
    imaginator2,
    library1,
    library2,
    product1,
    product2,
    hotel1,
    hotel2,
    runner1,
    runner2,

} from "../assets"

const projects = [
  {
    title: "Mia Vista Hotel",
    description:
      "Hotel management system website",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: hotel1,
    image2: hotel2,
    link: "http://miatian.pythonanywhere.com/",
    github: "https://github.com/MiaTian1024/Hotel-Management-System",
  },

    {
      title: "3D Product",
      description:
        "3D product customize website",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: product1,
      image2: product2,
      link: "https://3d-product.website/",
      github: "https://github.com/MiaTian1024/3D-product",
    },
    {
      title: "Imaginator",
      description:
        "AI image generator website",
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
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: imaginator1,
      image2: imaginator2,
      link: "https://imaginator.website/",
      github: "https://github.com/MiaTian1024/Imaginator-AI-Image-Generator",
    },
    {
      title: "Runner Game",
      description:
        "Runner Game with Pygame",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "pygame",
          color: "pink-text-gradient",
        },
      ],
      image: runner1,
      image2: runner2,
      link: "https://github.com/MiaTian1024/Runner-Game-with-Pygame",
      github: "https://github.com/MiaTian1024/Runner-Game-with-Pygame",
    },  
    {
      title: "Library System",
      description:
        "Library management website",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: library1,
      image2: library2,
      link: "https://github.com/MiaTian1024/Library-Web-App",
      github: "https://github.com/MiaTian1024/Library-Web-App",
    },
    {
      title: "Chat Mode",
      description:
        "Chat GPT clone web app",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: chatmode1,
      image2: chatmode2,
      link: "https://github.com/MiaTian1024/Chat-Mode",
      github: "https://github.com/MiaTian1024/Chat-Mode",
    },      
  ];
  

  const technologies = [
    {
      name: "HTML",
      icon: html,
      x: "-20vw" ,
      y: "8vw",
    },
    {
      name: "CSS",
      icon: css,
      x: "-8vw",
      y: "10vw",
    },
    {
      name: "JavaScript",
      icon: javascript,
      x: "20vw",
      y: "-5vw",
    },
    {
      name: "ReactJS",
      icon: reactjs,
      x: "15vw", 
      y: "-20vw",
    },
    {
      name: "NodeJS",
      icon: nodejs,
      x: "8vw", 
      y: "-10vw",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      x: "5vw", 
      y: "12vw",
    },
    {
      name: "ThreeJS",
      icon: threejs,
      x: "12vw", 
      y: "6vw",
    },
    {
      name: "Git",
      icon: git,
      x: "-5vw", 
      y: "-10vw",
    },
    {
      name: "Figma",
      icon: figma,
      x: "-20vw", 
      y: "-18vw",
    },
    {
      name: "AWS",
      icon: aws,
      x: "-30vw", 
      y: "-5vw",
    },
    {
      name: "MySQL",
      icon: mysql,
      x: "-15vw", 
      y: "-5vw",
    },
    {
      name: "Python",
      icon: python,
      x: "-5vw", 
      y: "-20vw",
    },
    {
      name: "Flask",
      icon: flask,
      x: "25vw", 
      y: "5vw",
    },
    {
      name: "ViteJS",
      icon: vitejs,
      x: "28vw", 
      y: "-12vw",
    },
  ];

  export { projects, technologies };