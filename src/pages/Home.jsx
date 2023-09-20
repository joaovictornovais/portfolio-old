import Aside from "../components/Aside";
import Project from "../components/Projects";
import TextSection from "../components/TextSection";
import { projects } from "../db/GithubProjects";

const Home = () => {
  let aboutMe =
    "My name is João Victor and I am a 20-year-old software engineer passionate about solve real life problems with code. In my free time, I enjoy playing Valorant and working on personal project. I am excited to share my skills and experience with others in the field.";

  let myProjects =
    "I'm passionate about compilers, type theory, the Minecraft protocol, and Hindley Milner! These topics perfectly blend my love for programming and problem-solving. Compilers transform code into machine code, while Hindley Milner adds elegance and safety to the process. Tinkering with the Minecraft protocol to optimize and customize gameplay is a joy. I love pushing the boundaries of programming and seeking new challenges!";

  return (
    <main className="flex flex-col sm:flex-row gap-8 p-6">
      <Aside />
      <div className="flex flex-col gap-14">
        <TextSection
          title={"Hi, I'm João Victor! 👋"}
          text={aboutMe}
          size="text-xl"
        />
        <TextSection
          title={"My projects 🧪"}
          text={myProjects}
          size="text-lg"
        />
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <Project
              key={project.id}
              repository={project.name}
              description={project.description}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
