import { ProjectProps } from "./types"

function Project({ projectName, imageSrc, url }: ProjectProps) {
    return (
        <div className = {projectName}>
            <h2 className = "project" onClick = { 
                    () => window.open(url, "_blank", "noreferrer") 
                }>{ projectName.charAt(0).toUpperCase() + projectName.slice(1) }
                <a className="nerdfont"></a>
            </h2>
            <img src = {imageSrc} />
        </div>
    )
}

export default Project
