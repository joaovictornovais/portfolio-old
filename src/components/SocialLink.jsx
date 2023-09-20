import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { MdEmail } from "react-icons/md";
import { DiCode } from "react-icons/di";
import { FiLink } from "react-icons/fi";

const SocialLink = ({ name, color, link }) => {
  const handleIcon = () => {
    switch (name) {
      case "Github":
        return <AiFillGithub className={`h-6 w-6`} />;
      case "Twitter":
        return <AiFillTwitterCircle className={`h-6 w-6`} />;
      case "Linkedin":
        return <AiFillLinkedin className={`h-6 w-6`} />;
      case "Email":
        return <MdEmail className={`h-6 w-6`} />;
      default:
        return <DiCode className={`h-6 w-6`} />;
    }
  };

  return (
    <li className="flex items-center gap-2 font-semibold py-2">
      <span className="text-gray-400">~</span>
      <a
        href={link}
        target="__blank"
        className="flex items-center gap-2 hover:underline"
      >
        <span className={`p-1 rounded-md bg-${color} text-zinc-900 p-2`}>
          {handleIcon()}
        </span>
        {name}
        <span>{<FiLink className="h-4 w-4" />}</span>
      </a>
    </li>
  );
};

export default SocialLink;
