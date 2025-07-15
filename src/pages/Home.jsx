import { Link } from "react-router";
import Mypic from "../assets/mypic.jpeg";
import TechCategory from "../components/TechCategory";
import MyBio from "../components/MyBio";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
    const techStacks = {
        Frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
        Backend: ["Flask", "Django", "Streamlit", "SQLite", "MySQL", "SQLAlchemy"],
        DataScience: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "BeautifulSoup"],
        Tools: ["Git", "GitHub", "VS Code"]
    };
    return (
        <section className="md:container sm:w-2xl mx-auto md:px-0 px-10 text-center flex flex-col gap-4 items-center">
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 py-16">
                <div className="flex flex-col gap-6 items-center justify-center flex-2">
                    <h1 className="lg:text-6xl text-4xl">Hi, I'm <span className="text-yellow-400">Ravi Kumar</span> 👋</h1>
                    <p className="lg:text-3xl md:text-2xl italic">A passionate developer on a mission to craft intuitive and dynamic application.</p>
                    <div className="mt-6 space-x-4">
                        <Link to="/projects" className="bg-violet-600 px-4 py-2 rounded text-white hover:bg-violet-700 transition lg:text-lg text-md">View Projects</Link>
                        <Link to="/contact" className="bg-violet-600 px-4 py-2 rounded text-white hover:bg-violet-700 transition lg:text-lg text-md">Contact Me</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <img src={Mypic} alt="Ravi Kumar" className="rounded-lg border-2 border-yellow-200 hover:scale-105 ease-in-out duration-400 md:w-60 md:h-96 w-44 h-66" />
                </div>
            </div>
            <MyBio />
            <div className="lg:w-4xl mb-10">
                <SectionHeader sectionName={"Featured Projects"} />
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    {projects.filter(p => p.featured).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
            <div className="w-full max-w-4xl">
                <SectionHeader sectionName={"Tech Stacks"} />
                {Object.entries(techStacks).map(([category, items]) => (
                    <TechCategory key={category} title={category} skills={items}/>
                ))}
            </div>
        </section>
    )
}