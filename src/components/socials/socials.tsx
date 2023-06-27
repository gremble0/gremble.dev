import { useState, useLayoutEffect, CSSProperties } from "react";
import Social from "./social";
import { SocialProps } from "./types";
import "./socials.css"

type Props = {
    items: Array<SocialProps>;
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}

function Socials({ items }: Props) {
    let dimensions = useWindowSize();
    let socialsStyle: CSSProperties = {
        width: "100%",
        textAlign: "center",
    }
    // if (dimensions[0] > 800) {
    //     socialsStyle.width = "30%";
    //     socialsStyle.textAlign = "left";
    if (dimensions[0] > 1000) {
        socialsStyle.width = "30%";
        socialsStyle.textAlign = "left";
    }
//= {{width: `${socialsWidth}%`, textAlign: `${socialsTextAlign}`}}>
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
