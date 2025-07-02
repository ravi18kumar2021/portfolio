import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Category from "../components/Category";

export default function Projects() {
    const grouped = {};
    projects.forEach((project) => {
        const category = project.category || "Other";
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(project);
    })
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
            <div className="max-w-6xl mx-auto">
                {Object.entries(grouped).map(([category, group]) => (
                    <Category key={category} category={category} projects={group}/>
                ))}
            </div>
        </section>
    );
}