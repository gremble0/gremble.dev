import Project from "./project";
import { ProjectProps } from "./types";
import "./projects.css";
import { useWindowSize } from "../../utils/usewindowsize";

type Props = {
    items: Array<ProjectProps>;
}

function Projects({ items }: Props) {
    let dimensions = useWindowSize();
    let displayImg = false;
    if (dimensions[0] > 1000) {
        displayImg = true;
    }
    return (
        <div className="projects">
            <h1 className="title-projects">My projects</h1>
            <div className="projects-list">
                {items.map((item, i) => (
                    <Project key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Projects
