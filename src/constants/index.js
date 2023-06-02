import {
    carrent,
    jobit,
    tripguide,
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

} from "../assets"

const projects = [
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
      title: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels.",
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
      link: "/",
      github: "https://github.com/",
    },
  ];
  

  const technologies = [
    {
      name: "HTML",
      icon: html,
      x: "-25vw" ,
      y: "2vw",
    },
    {
      name: "CSS",
      icon: css,
      x: "-5vw",
      y: "8vw",
    },
    {
      name: "JavaScript",
      icon: javascript,
      x: "28vw",
      y: "-5vw",
    },
    {
      name: "ReactJS",
      icon: reactjs,
      x: "15vw", 
      y: "-18vw",
    },
    {
      name: "NodeJS",
      icon: nodejs,
      x: "5vw", 
      y: "-10vw",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      x: "0vw", 
      y: "15vw",
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
      x: "-20vw", 
      y: "10vw",
    },
    {
      name: "Figma",
      icon: figma,
      x: "-20vw", 
      y: "-15vw",
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
      x: "-13vw", 
      y: "-3vw",
    },
    {
      name: "Python",
      icon: python,
      x: "-5vw", 
      y: "-15vw",
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
      x: "12vw", 
      y: "-5vw",
    },
  ];

  export { projects, technologies };