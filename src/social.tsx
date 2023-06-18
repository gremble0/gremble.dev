import { SocialProps } from "./types"
import "./social.css"

function Social({ socialName, imageSrc, url }: SocialProps) {
    return (
        <div className={`social ${socialName}`} onClick = { () => window.open(url, "_blank", "noreferrer") }>
            <p className = "social-link">{socialName.charAt(0).toUpperCase() + socialName.slice(1)}</p>
            <img className = "social-logo" src = {imageSrc} />
        </div>
    )
}

export default Social
