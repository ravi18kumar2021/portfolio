import { FaDownload } from "react-icons/fa6";
import MyResume from "../../public/ravi-kumar.pdf";
import SectionHeader from "./SectionHeader";

export default function MyBio() {
    return (
        <div className="lg:w-4xl md:w-3xl sm:w-xl border-2 border-yellow-200 rounded-md py-4 px-6 mb-10">
            <SectionHeader sectionName={"My Bio"} />
            <p className="md:text-lg text-md italic">I'm a self-taught developer with a passion for building modern, intuitive web applications using React, Python, and data science tools. Over the past 3 years, I’ve built 30+ projects ranging from interactive frontends to data-driven dashboards and machine learning models.
            I love solving real-world problems with code and continuously learning new technologies.
            I'm currently seeking opportunities to collaborate on impactful software projects or join a forward-thinking team as a full-time developer.</p>
            <h3 className="md:text-xl text-lg font-bold my-4 text-violet-400">To Get More Info</h3>
            <a href={MyResume} download className="flex md:w-50 w-46 mx-auto justify-between items-center md:text-lg text-md bg-violet-700 p-2 rounded-md">Download Resume <FaDownload/></a>
        </div>
    )
}