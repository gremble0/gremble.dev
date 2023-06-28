import { CSSProperties } from "react";
import { SocialProps } from "./types";
import Social from "./social";
import { useWindowSize } from "../../utils/usewindowsize";
import "./socials.css"

type Props = {
    items: Array<SocialProps>;
}

function Socials({ items }: Props) {
    let dimensions = useWindowSize();
    let socialsStyle: CSSProperties = {
        width: "100%",
        textAlign: "center",
    }
    if (dimensions[0] > 1000) {
        socialsStyle.width = "400px";
        socialsStyle.textAlign = "left";
    }

    return (
        <div className = "socials" style = {socialsStyle}>
            <h1 className = "title-socials">Contact me</h1>
            { items.map((item, i) => (
                <Social key = {i} {...item} />
            ))}
        </div>
    )
}

export default Socials
