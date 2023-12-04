interface FeatureDataProps {
  title: string;
  desc: string;
  src: string;
  tech: string[];
  github: string;
  preview: string;
}

export const featureData: FeatureDataProps[] = [
  {
    title: "StartupFuel",
    desc: "A sleek and professional landing page that displays StartupFuels PitchBox benefits and features.",
    src: "/images/pitchbox2.png",
    tech: ["TailwindCSS", "React", "Next.js"],
    github: "/https://github.com/jmski/startupfuel-dev.git",
    preview: "/https://startupfuel-dev.netlify.app",
  },
  {
    title: "Fatherhood Frenzy",
    desc: "A personal blog about parenting, the struggles of being a stay-at-home dad and working from home as a freelance.",
    src: "/images/fatherhoodfrenzy.png",
    tech: ["TailwindCSS", "React", "Sass", "GraphQL"],
    github: "https://github.com/jmski/fatherhood-frenzy.git",
    preview: "https://fatherhoodfrenzy.com",
  },
];
