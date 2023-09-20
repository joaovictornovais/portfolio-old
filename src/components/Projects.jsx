import { FiBook, FiExternalLink } from "react-icons/fi";

const Projects = ({ repository, description }) => {
  return (
    <li className="flex gap-1">
      <FiBook className="min-w-[100px] pt-1" size={55} />
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{repository}</span>
        <p className="text-gray-800">{description}</p>
        <a
          className="flex gap-1 items-center font-semibold"
          href={`https://github.com/joaovictornovais/${repository}`}
          target="__blank"
        >
          <FiExternalLink />
          <span>Read more</span>
        </a>
      </div>
    </li>
  );
};

export default Projects;
