import { Link } from "react-router";

export default function ProjectCard({title, description, thumbnail}) {
    const fallBackThumbnail = "https://raw.githubusercontent.com/ravi18kumar2021/30DaysOfReact/refs/heads/main/Day14/screenshot.png"
    return (
        <div className="bg-white rounded shadow-md p4">
            <img src={thumbnail || fallBackThumbnail} alt=""
                onError={(e) => e.target.src = (fallBackThumbnail)}
                className="w-full h-50"/>
            <h3 className="text-xl font-bold m-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex gap-3">
                <Link >Github</Link>
                <Link >Demo</Link>
            </div>
        </div>
    )
}