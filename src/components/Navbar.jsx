import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Ravi Kumar</h1>
            <div className="space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}