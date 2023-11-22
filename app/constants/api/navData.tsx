import { FaHome, FaTools } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export interface navDataProps {
  title: string;
  href: string;
  subMenu?: { title: string; href: string }[];
  icon?: JSX.Element;
}

const navData: navDataProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <FaHome />,
  },
  {
    title: "About",
    href: "/about",
    icon: <IoMdContact />,
  },
  {
    title: "Services",
    href: "/services",
    icon: <FaTools />,
  },

  {
    title: "Contact",
    href: "/contact",
    icon: <MdEmail />,
  },
  {
    title: "Courses",
    href: "/courses",
    icon: <FaGear />,
    subMenu: [
      {
        title: "Build Your Portfolio",
        href: "/course1",
      },
      {
        title: "Brand Marketing",
        href: "/course2",
      },
      {
        title: "Super Duper Course",
        href: "/course3",
      },
    ],
  },
];

export default navData;
