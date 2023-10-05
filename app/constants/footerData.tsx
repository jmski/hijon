import { FaGithub, FaLinkedin, FaCode, FaFile } from "react-icons/fa";
import { HiOutlineGlobe } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

interface FooterDataProps {
  title: string;
  href: string;
}

interface FooterSocialProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

interface FooterInfoProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

export const footerMenu: FooterDataProps[] = [
  { title: "about", href: "/home" },
  { title: "experience", href: "/blog" },
  { title: "work", href: "/portfolio" },
  { title: "contact", href: "mailto:geluajm@gmail.com" },
];

export const footerSocial: FooterSocialProps[] = [
  {
    title: "Github",
    href: "https://github.com/jmski",
    icon: <FaGithub className="inline-block" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/jmgelua",
    icon: <FaLinkedin className="inline-block" />,
  },
  {
    title: "Leetcode",
    href: "https://leetcode.com/jmgelua",
    icon: <FaCode className="inline-block" />,
  },
  {
    title: "Resume",
    href: "/JonMichaelGeluaResume2022.pdf",
    icon: <FaFile className="inline-block" />,
  },
];

export const footerInfo: FooterInfoProps[] = [
  {
    title: "Toronto, Ontario, Canada",
    href: "#",
    icon: <HiOutlineGlobe className="inline-block" />,
  },
  {
    title: "Call me on my ",
    href: "tel:647-834-1667",
    icon: <AiOutlinePhone className="inline-block" />,
  },
  {
    title: "eluajm@gmail.com",
    href: "mailto:geluajm@gmail.com",
    icon: <AiOutlineMail className="inline-block" />,
  },
];
