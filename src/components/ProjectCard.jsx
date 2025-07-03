export default function ProjectCard({title, description, github, demo, thumbnail}) {
    const fallBackThumbnail = "https://raw.githubusercontent.com/ravi18kumar2021/30DaysOfReact/refs/heads/main/Day14/screenshot.png"
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    
    return (
        <div className="container mx-auto bg-yellow-200 text-gray-800 rounded shadow-md p4 border-2 border-gray-400">
            <div className="xl:bg-yellow-400 lg:bg-orange-300">
                <img src={thumbnail || fallBackThumbnail} alt=""
                    onError={(e) => e.target.src = (fallBackThumbnail)}
                    className="w-full h-50 object-contain"/>
            </div>
            <div className="p-3">
                <h3 className="xl:text-lg font-bold mb-2 pb-1 border-b border-gray-500 truncate">{title}</h3>
                <p className="text-sm mb-4 md:h-20">{truncateText(description, 70)}</p>
                <div className="flex justify-evenly gap-3">
                    <a href={github} target="_blank" className="bg-orange-300 px-4 py-1 rounded-sm">Github</a>
                    <a href={demo} target="_blank" className="bg-sky-300 px-4 py-1 rounded-sm">Demo</a>
                </div>
            </div>
        </div>
    )
}