import { useState } from "react"
import { SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiFlask, SiDjango, SiStreamlit, SiMysql, SiSqlite, SiSqlalchemy, SiNumpy, SiPandas, SiScikitlearn, SiGit, SiGithub } from "react-icons/si";
// import Matplotlib from '../assets/matplotlib.svg'

export default function TechCategory({ title, skills }) {
    const iconsMap = {
        React: <SiReact />,
        Python: <SiPython />,
        JavaScript: <SiJavascript />,
        HTML: <SiHtml5 />,
        CSS: <SiCss3 />,
        "Tailwind CSS": <SiTailwindcss />,
        Bootstrap: <SiBootstrap />,
        Flask: <SiFlask />,
        Django: <SiDjango />,
        Streamlit: <SiStreamlit />,
        MySQL: <SiMysql />,
        SQLite: <SiSqlite />,
        SQLAlchemy: <SiSqlalchemy />,
        Numpy: <SiNumpy />,
        Pandas: <SiPandas />,
        "Scikit-learn": <SiScikitlearn />,
        Git: <SiGit />,
        GitHub: <SiGithub />
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-2 border-yellow-500 bg-pink-800 rounded-md mb-4 p-4 text-left">
            <button onClick={() => setIsOpen(!isOpen)}
                className="text-lg font-bold italic"
            >{title} {isOpen ? "➖" : "➕"}</button>
            {isOpen && (
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 py-3">
                    {skills.map((skill) => (
                        <div key={skill} className="bg-blue-800 p-3 flex flex-col items-center justify-center rounded hover:scale-105 transition duration-200">
                            <div className="text-4xl mb-2">
                                {iconsMap[skill] ? (
                                    iconsMap[skill]
                                ) : (
                                    <img
                                        src={`src/assets/${skill.toLowerCase()}.svg`}
                                        alt={skill}
                                        className="size-10 object-contain"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.replaceWith(document.createTextNode("🎯"));
                                        }}
                                    />
                                )}
                            </div>
                            <h3 className="font-semibold">{skill}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}