import { CSSProperties } from "react"
import { useWindowSize } from "../../utils/usewindowsize"
import { ProjectProps } from "./types"

function Project({ projectName, imageSrc, url, description }: ProjectProps) {
    let dimensions = useWindowSize();
    let displayImg: CSSProperties = {
        display: "inline-block",
    }
    let centerTitle: CSSProperties = {}
    if (dimensions[0] < 1000) {
        displayImg.display = "none";
        centerTitle.alignItems = "center";
    }

    return (
        <div className={projectName} style={centerTitle}>
            <h2 className="project" onClick={
                () => window.open(url, "_blank", "noreferrer")
                // Capitalize first letter
            }>{projectName.charAt(0).toUpperCase() + projectName.slice(1)}
                <a className="nerdfont"></a>
            </h2>
            <div className={projectName + "-body"}>
                <img src={imageSrc} style={displayImg} />
                {description}
            </div>
        </div>
    )
}

export default Project
