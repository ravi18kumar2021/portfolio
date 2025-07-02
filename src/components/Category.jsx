import { useState } from "react"
import ProjectCard from "./ProjectCard";

export default function Category({category, projects}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}
            className="text-left w-full bg-gray-700 text-white rounded hover:bg-gray-600">
                <div>
                    <span>{category}</span>
                    <span>{isOpen ?  "▲" : "▼"}</span>
                </div>
            </button>
            {isOpen && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            )}
        </div>
    )
}