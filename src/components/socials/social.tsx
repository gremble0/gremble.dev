import { SocialProps } from "./types";

function Social({ socialName, imageSrc, url }: SocialProps) {
    let clipboardIcon;
    if (socialName == "discord") {
        clipboardIcon = <a className="nerdfont">󱓥</a>;
    }

    return (
        <div className={`social ${socialName}`} onClick={() =>
            url ? window.open(url, "_blank", "noreferrer") :
                navigator.clipboard.writeText("gremble")
        }>
            <p className="social-link">{
                socialName.charAt(0).toUpperCase() + socialName.slice(1)
            }
                {clipboardIcon}
            </p>
            <img className="social-logo" src={imageSrc} />
        </div>
    )
}

export default Social
