import { useState, useLayoutEffect } from "react";
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
    var alignItems;
    var socialsWidth;
    if (dimensions[0] > 1000) {
        socialsWidth = 30;
        alignItems = "left";
    } else if (dimensions[0] > 600) {
        socialsWidth = 50;
        alignItems = "left";
    } else {
        socialsWidth = 80;
        alignItems = "center";
    }

    return (
        <div className = "socials" style = {{width: `${socialsWidth}%`}}>
            <h1 className = "title-socials">Contact me</h1>
            { items.map((item, i) => (
                <Social key = {i} {...item} />
            ))}
        </div>
    )
}

export default Socials
