import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaMedium, FaBlog, FaInstagram } from "react-icons/fa";
import { FaHashnode, FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="text-center mt-12">
      <h2 className="text-2xl font-bold mb-4">Find Me Online</h2>
      <p className="text-gray-300 mb-4">Follow me for tutorials, updates, and open-source work:</p>

      <div className="flex justify-center flex-wrap gap-6 text-3xl text-white">
        <a href="https://youtube.com/@datasciencevision" target="_blank" rel="noopener noreferrer" title="YouTube">
          <FaYoutube className="hover:text-violet-500 transition" />
        </a>
        <a href="https://github.com/ravi18kumar2021" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="hover:text-violet-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/programmerravi/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="hover:text-violet-500 transition" />
        </a>
        <a href="https://www.instagram.com/programmer.ravi/" target="_blank" rel="noopener noreferrer" title="Medium">
          <FaInstagram className="hover:text-violet-500 transition" />
        </a>
        {/* Optional */}
        <a href="https://x.com/ProgrammerRavi9" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaXTwitter className="hover:text-violet-500 transition" />
        </a>
        <a href="https://datasciencevision.hashnode.dev" target="_blank" rel="noopener noreferrer" title="Blog">
          <FaHashnode className="hover:text-violet-500 transition" />
        </a>
      </div>
      {/* <div className="text-center text-gray-400 space-y-2">
        
        <p className="flex items-center justify-center gap-2">
    <FiGlobe className="text-xl" /> Connect with me:</p>
        <div className="flex justify-center gap-4 text-2xl">
          <a href="" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        </div>
      </div> */}
    </div>
  );
}
