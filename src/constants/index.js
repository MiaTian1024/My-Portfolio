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

} from "../assets"

const projects = [
    {
      title: "3D Product",
      description:
        "3D product customizer",
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
      image: product1,
      image2: product2,
      link: "https://3d-product.website/",
      github: "https://github.com/MiaTian1024/3D-product",
    },
    {
      title: "Imaginator",
      description:
        "AI Image Generator",
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
      image: imaginator1,
      image2: imaginator2,
      link: "/",
      github: "https://github.com/MiaTian1024/Imaginator-AI-Image-Generator",
    },
    {
      title: "Chat Mode",
      description:
        "Chat GPT Clone web app",
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
      image: chatmode1,
      image2: chatmode2,
      link: "/",
      github: "https://github.com/MiaTian1024/Chat-Mode",
    },
    {
      title: "Library System",
      description:
        "A library manage system",
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
      image: library1,
      image2: library2,
      link: "/",
      github: "https://github.com/MiaTian1024/Library-Web-App",
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