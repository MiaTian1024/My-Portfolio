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
} from "../assets"

const projects = [
    {
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals.",
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
      link: "/",
      github: "https://github.com/",
    },
    {
      title: "Job IT",
      description:
        "Web application that enables users to search for job openings",
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
      link: "/",
      github: "https://github.com/",
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
      name: "HTML 5",
      icon: html,
      x: "-25vw" ,
      y: "2vw",
    },
    {
      name: "CSS 3",
      icon: css,
      x: "-5vw",
      y: "-10vw",
    },
    {
      name: "JavaScript",
      icon: javascript,
      x: "20vw",
      y: "-6vw",
    },
    {
      name: "React JS",
      icon: reactjs,
      x: "15vw", 
      y: "-18vw",
    },
    {
      name: "Node JS",
      icon: nodejs,
      x: "10vw", 
      y: "-12vw",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      x: "0vw", 
      y: "12vw",
    },
    {
      name: "Three JS",
      icon: threejs,
      x: "12vw", 
      y: "6vw",
    },
    {
      name: "git",
      icon: git,
      x: "-20vw", 
      y: "10vw",
    },
    {
      name: "figma",
      icon: figma,
      x: "-20vw", 
      y: "-15vw",
    },
  ];

  export { projects, technologies };