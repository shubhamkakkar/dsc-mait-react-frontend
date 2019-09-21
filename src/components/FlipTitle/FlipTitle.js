import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import Grid from "@material-ui/core/Grid"

export default function FlipTitle({ title, borderColor, src }) {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <div
            style={{
                border: "2px solid " + "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "blue"
            }}
            onMouseEnter={() => set(state => false)} onMouseLeave={() => set(sate => false)}
        >
            <animated.div style={{
                position: "absolute",
                willChange: "transform, opacity",
                opacity: opacity.interpolate(op => 1 - op),
                transform,
                padding: "5px",
                background: "violet"

            }}>
                {title}
            </animated.div>
            <animated.div
                style={{
                    position: "absolute",
                    willChange: "transform, opacity",
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                }}>
                <img  {...{ src }} alt={`${title} logo`} style={{ objectFit: "cover" }} />
            </animated.div>
        </div>
    )
}


{/*  */ }