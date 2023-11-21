interface ServiceDataProps {
  title: string;
  desc: string;
  link: string;
  href: string;
}

const serviceData: ServiceDataProps[] = [
  {
    title: "Code Shop",
    desc: "Built by an expert, I provide high-quality components and support that will help take your website development further.",
    link: "View all plugins",
    href: "/code-shop",
  },
  {
    title: "Site Builds",
    desc: "Looking to have me completely build out a custom and unique site? Learn how I work with all my clients to make this a reality",
    link: "Hire a developer",
    href: "/hire",
  },
  {
    title: "Consulting",
    desc: "Built your own site but need some help? I offer consulting services to help you get unstuck and move forward with your project.",
    link: "Learn more",
    href: "/learn-more",
  },
  {
    title: "My Work",
    desc: "Feel free to take a look at some of the latest projects that i've been working on and the type of clients I typically work with.",
    link: "View projects",
    href: "/projects",
  },
  {
    title: "Online Courses",
    desc: "Take a look at my upcoming self-paced online courses. Developed to get you up and running with the latest versions in Nextjs and TailwindCSS",
    link: "view courses",
    href: "/code-shop",
  },
  {
    title: "Reach Out",
    desc: "Looking to hire a developer, consultant, or you have have a general question that needs to be answered? Reach out.",
    link: "contact Me",
    href: "/contact",
  },
];

export default serviceData;
