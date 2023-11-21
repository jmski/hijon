interface ProjectDataProps {
  title: string;
  dateStart?: string;
  img?: string;
  href: string;
  github: string;
  desc: string;
  techs?: string[];
}

export const projectData: ProjectDataProps[] = [
  {
    title: "StartupFuel Website",
    dateStart: "Dec 18, 2021",
    img: "/images/startupfuel-lp.png",
    href: "http://startupfuel.netlify.app/pitchbox",
    github: "https://github.com/jmski/startupfuel-dev.git",
    desc: "Created a professional landing page with responsive design and animations.",
  },
  {
    title: "Portfolio V2",
    dateStart: "Dec 18, 2021",
    img: "/images/pitchbox2.png",
    href: "http://jmgelua.ca/v2",
    github: "https://github.com/jmski/jmgelua/tree/main/components/v2",
    desc: "Took the opportunity to redo my portfolio website after learning so much about TailwindCSS and Next.js.",
  },
  {
    title: "PitchBox Page 2.0",
    dateStart: "Dec 8, 2021",
    img: "/images/pitchbox2.png",
    href: "http://startupfuel.netlify.app/pitchbox",
    github: "https://github.com/jmski/startupfuel-dev.git",
    desc: "Refactored and updated the existing landing page. Tailwindcss was used instead of styled-components for better response on mobile, faster deployment and better maintenance.",
  },
  {
    title: "Math Champ Credit Card Landing Page",
    dateStart: "Nov 18, 2021",
    img: "/images/mathchamp-creditcard.png",
    href: "https://mathchamp.ca/credit-card",
    github:
      "https://github.com/vithushan19/math/tree/main/components/credit-card",
    desc: "The goal was to take a children's pdf worksheet and digitize it for teachers to share with their students. This project greatly demonstrates my use of state hooks, responsive design and input validation, all within a multi-step user experience.",
  },
  {
    title: "Fatherhood Frenzy",
    dateStart: "Oct 1, 2021",
    img: "/images/fatherhoodfrenzy.png",
    href: "https://fatherhoodfrenzy.com",
    github: "https://github.com/jmski/startupfuel-dev.git",
    desc: "Passion project to help families find their true passion and create a sustainable income online. My goal is to encourage personal growth, financial literacy and skill development.",
  },
  {
    title: "Math Champ Math Components",
    dateStart: "Sept 18, 2021",
    img: "/images/mathchamp.png",
    href: "https://mathchamp.ca/practice/67",
    github: "https://github.com/vithushan19/math/tree/main/components/money",
    desc: "Worked with a small team to create and develop math question components as aids for teachers who teach their students online. This project demonstrates my knowledge of TypeScript, reusable components and tailwindcss.",
  },
  {
    title: "PitchBox Landing Page",
    dateStart: "May 1, 2021",
    img: "/images/pitchbox.png",
    href: "http://startupfuel-pitchbox.netlify.app",
    github: "https://github.com/jmski/startupfuel-pitchbox.git",
    desc: "Created a professional landing page with responsive design and animations. The website was made using styled-components, webgl and react.",
  },
  {
    title: "Portfolio V1",
    dateStart: "April 1, 2021",
    img: "/images/pitchbox.png",
    href: "https://jmgelua.ca/v1",
    github: "https://github.com/jmski/jmgelua/tree/main/components/v1",
    desc: "Created my first portfolio and website using TailwindCSS and Next.js.",
  },
];

export default projectData;
