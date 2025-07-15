import { useState } from "react"
import { SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiFlask, SiDjango, SiStreamlit, SiMysql, SiSqlite, SiSqlalchemy, SiNumpy, SiPandas, SiScikitlearn, SiGit, SiGithub } from "react-icons/si";
import { FaMinus, FaPlus } from "react-icons/fa";
import DefaultSkill from "../assets/default-skill.svg";
import MatplotlibIcon from "../assets/matplotlib.svg";
import SeabornIcon from "../assets/seaborn.svg";
import VSCodeIcon from "../assets/vs code.svg";

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
        GitHub: <SiGithub />,
    }
    const imagesMap = {
        Matplotlib: MatplotlibIcon,
        Seaborn: SeabornIcon,
        "VS Code": VSCodeIcon
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-2 border-yellow-200 bg-violet-600 rounded-md mb-4 p-4 text-left">
            <div className="flex justify-between">
                <button onClick={() => setIsOpen(!isOpen)}
                    className="text-lg font-bold italic flex-1 text-left"
                >{title}</button>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-xl">{isOpen ? <FaMinus/> : <FaPlus />}</button>
            </div>
            {isOpen && (
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 py-3">
                    {skills.map((skill) => (
                        <div key={skill} className="bg-violet-800 p-3 flex flex-col items-center justify-center rounded hover:scale-105 transition duration-200">
                            <div className="text-4xl mb-2">
                                {iconsMap[skill] ? (
                                    iconsMap[skill]
                                ) : (
                                    <img
                                        src={imagesMap[skill] || DefaultSkill}
                                        alt={skill}
                                        className="size-10 object-contain"
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