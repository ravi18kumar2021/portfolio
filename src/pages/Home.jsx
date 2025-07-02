import { Link } from "react-router";

export default function Home() {
    return (
        <section className="text-center">
            <h1>Hi, I'm Ravi Kumar 👋</h1>
            <p>A passionate developer on a mission to craft intuitive and dynamic application.</p>
            <div className="mt-6">
                <Link to="/projects" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">View Projects</Link>
                <Link to="/contact" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">Contact Me</Link>
            </div>
        </section>
    )
}