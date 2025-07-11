export default function ProjectCard({title, description, github, demo, thumbnail}) {
    const fallBackThumbnail = "https://raw.githubusercontent.com/ravi18kumar2021/30DaysOfReact/refs/heads/main/Day14/screenshot.png"
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    
    return (
        <div className="bg-yellow-200 text-gray-800 rounded-md shadow-yellow-200 hover:shadow-md transition-shadow duration-500 ease-in-out border-2 border-yellow-400 overflow-hidden">
            <div className="bg-yellow-400 overflow-hidden">
                <img src={thumbnail || fallBackThumbnail} alt=""
                    onError={(e) => e.target.src = (fallBackThumbnail)}
                    className="w-full h-48 hover:scale-110 transition-transform object-cover duration-600 ease-in-out"/>
            </div>
            <div className="p-3">
                <h3 className="xl:text-lg font-bold mb-2 pb-1 border-b border-gray-500 truncate">{title}</h3>
                <p className="text-sm mb-4 sm:h-15 h-12">{truncateText(description, 76)}</p>
                <div className="flex justify-evenly gap-3">
                    <a href={github} target="_blank" className="bg-orange-400 px-4 py-1 rounded-sm" rel="noopener noreferrer">Github</a>
                    <a href={demo} target="_blank" className="bg-sky-300 px-4 py-1 rounded-sm" rel="noopener noreferrer">Demo</a>
                </div>
            </div>
        </div>
    )
}