import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Ravi Kumar</h1>
                <div className="space-x-6">
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