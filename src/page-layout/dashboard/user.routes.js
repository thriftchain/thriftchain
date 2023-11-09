import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { TbSettings } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";

export const sideBarLinks = [
  {
    path: "/user/",
    icon: <CgHomeAlt size={22} />,
    text: "Home",
    alt: "home",
  },
  {
    path: "/user/message",
    icon: <BiBox size={22} />,
    text: "Message",
    alt: "message",
  },
  {
    path: "/user/overview",
    icon: <AiOutlineTeam size={22} />,
    text: "Overview",
    alt: "overview",
  },
  {
    path: "/user/profile",
    icon: <RxPerson  size={22} />,
    text: "Profile",
    alt: "profile",
  },
  {
    path: "/user/setting",
    icon: <TbSettings size={22} />,
    text: "Setting",
    alt: "setting-icon",
  },
];