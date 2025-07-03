export default function ProjectCard({title, description, thumbnail}) {
    const fallBackThumbnail = "https://raw.githubusercontent.com/ravi18kumar2021/30DaysOfReact/refs/heads/main/Day14/screenshot.png"
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    
    return (
        <div className="bg-yellow-200 text-gray-800 rounded shadow-md p4">
            <img src={thumbnail || fallBackThumbnail} alt=""
                onError={(e) => e.target.src = (fallBackThumbnail)}
                className="w-full h-50"/>
            <div className="p-3">
                <h3 className="text-xl font-bold mb-2 pb-1 border-b border-gray-500">{truncateText(title, 25)}</h3>
                <p className="text-sm mb-4">{truncateText(description, 80)}</p>
                <div className="flex justify-evenly gap-3 border-t border-gray-500">
                    <a href="" >Github</a>
                    <a href="" >Demo</a>
                </div>
            </div>
        </div>
    )
}