import SocialLink from "./SocialLink";
import { links } from "../db/Links";
import Typewriter from "typewriter-effect";

const Aside = () => {
  return (
    <aside className="flex flex-col items-center gap-3 px-8">
      <img
        src="https://www.github.com/joaovictornovais.png"
        className="rounded-xl sm:w-[500px] w-[240px]"
      />
      <span className="text-center font-semibold">Social links</span>
      <ul className="flex flex-col">
        {links.map((link) => (
          <SocialLink
            key={link.id}
            name={link.name}
            link={link.link}
            color={link.color}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
