import { Link } from "react-router";

export default function ProjectCard() {
    return (
        <div>
            <h3>Project Title</h3>
            <p>Project Description</p>
            <div>
                <Link >Github</Link>
                <Link >Demo</Link>
            </div>
        </div>
    )
}