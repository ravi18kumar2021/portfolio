import { NavLink } from "react-router";
import Logo from "../assets/logo.webp";

export default function Navbar() {
    return (
        <nav className="bg-violet-600 py-2 shadow">
            <div className="sm:container sm:px-0 px-6 mx-auto flex justify-between items-center">
                <img src={Logo} alt="Ravi Kumar" className="size-16 rounded-full border-3 border-violet-800"/>
                <div className="md:space-x-6 sm:space-x-4 space-x-2 text-sm md:text-lg">
                    <NavLink to="/"
                    className={({isActive}) => (
                        isActive ? 'text-yellow-300' : 'hover:text-yellow-200 transition'
                    )}
                    >Home</NavLink>
                    <NavLink to="/projects"
                    className={({isActive}) => (
                        isActive ? 'text-yellow-300' : 'hover:text-yellow-200 transition'
                    )}
                    >Projects</NavLink>
                    <NavLink to="/about"
                    className={({isActive}) => (
                        isActive ? 'text-yellow-300' : 'hover:text-yellow-200 transition'
                    )}
                    >About</NavLink>
                    <NavLink to="/contact"
                    className={({isActive}) => (
                        isActive ? 'text-yellow-300' : 'hover:text-yellow-200 transition'
                    )}
                    >Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}