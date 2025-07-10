import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Category from "../components/Category";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader";

const allCategories = ["All", ...new Set(projects.map(project => project.category || "Uncategorized"))];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(9);
    const loaderRef = useRef(null);

    const filteredProjects = (
        selectedCategory === "All"
        ? [...projects].reverse()
        : projects.filter(project => project.category === selectedCategory)
    );
    const visibleProjects = filteredProjects.slice(0, visibleCount);
    useEffect(() => {
        setVisibleCount(9);
    }, [selectedCategory]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && visibleCount < filteredProjects.length) {
                setVisibleCount((prev) => prev + 9);
            }
        }, {
            rootMargin: "0px",
            threshold: 1.0
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [filteredProjects.length, visibleCount]);
    return (
        <section className="py-16 mx-4 sm:mx-0">
            <SectionHeader sectionName={"My Projects"}/>
            <div className="container mx-auto flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <aside className="md:w-1/4 w-full mb-4 md:mb-0">
                    <h3 className="text-xl mb-4">Categories</h3>
                    <ul className="flex flex-wrap md:flex-col gap-3 md:gap-1 md:justify-between">
                        {allCategories.map((category) => (
                            <li key={category}>
                                <button
                                className={`px-4 py-1 my-1 text-white ${category === selectedCategory ? "bg-red-800" : "bg-violet-800"}`}
                                onClick={() => setSelectedCategory(category)}
                                >{category}</button>
                            </li>
                        ))}
                    </ul>
                </aside>
                {/* Project Grid */}
                <div className="md:w-3/4 w-full">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleProjects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                            {visibleProjects.length < filteredProjects.length && (
                                <div ref={loaderRef} className="text-center col-span-full text-gray-400 py-4">
                                Loading more...
                                </div>
                            )}
                        </div>
                    ) : (
                        <p>No Project Available in this Category.</p>
                    )}
                </div>
            </div>
        </section>
    );
}