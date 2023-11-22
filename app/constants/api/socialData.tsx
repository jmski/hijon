import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

interface socialDataProps {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const socialData: socialDataProps[] = [
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://linkedin",
  },
  {
    name: "Email",
    icon: <IoMdContact />,
    link: "mailto:hello@jonmike.co",
  },
];

export default socialData;
