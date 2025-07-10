import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-pink-900 p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg md:text-xl font-bold">Ravi Kumar</h1>
                <div className="md:space-x-6 sm:space-x-4 space-x-2 text-sm md:text-lg">
                    <NavLink to="/"
                    className={({isActive}) => (
                        isActive ? 'text-yello-300' : 'hover:text-yellow-300'
                    )}
                    >Home</NavLink>
                    <NavLink to="/projects"
                    className={({isActive}) => (
                        isActive ? 'text-yello-300' : 'hover:text-yellow-300'
                    )}
                    >Projects</NavLink>
                    <NavLink to="/about"
                    className={({isActive}) => (
                        isActive ? 'text-yello-300' : 'hover:text-yellow-300'
                    )}
                    >About</NavLink>
                    <NavLink to="/contact"
                    className={({isActive}) => (
                        isActive ? 'text-yello-300' : 'hover:text-yellow-300'
                    )}
                    >Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}