import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <h1>Ravi Kumar</h1>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}