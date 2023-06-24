import Project from './project';
import { ProjectProps } from './types';
import './projects.css';

type Props = {
    items: Array<ProjectProps>;
}

function Projects({ items }: Props) {
    return (
        <div className = "projects">
            <h1 className = "title-projects">My projects</h1>
            <div className = "projects-list">
                { items.map((item, i) => (
                    <Project key = {i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Projects
