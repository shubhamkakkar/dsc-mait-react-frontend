import React, {useState} from "react";
import {animated, useSpring} from "react-spring";
import Grid from "@material-ui/core/Grid";

export default function FlipTitle({title, borderColor, src}) {
    const [flipped, set] = useState(false);
    const {transform, opacity} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `rotateX(${flipped ? 180 : 0}deg)`,
        config: {mass: 5, tension: 500, friction: 80}
    });

    return (
        <Grid item xs={6} sm={12}
              onMouseEnter={() => set(state => true)}
              onMouseLeave={() => set(sate => false)}
              onClick={() => set(state => !flipped)}
        >
                <animated.div style={{
                    position: "absolute",
                    willChange: "transform, opacity",
                    opacity: opacity.interpolate(op => 1 - op),
                    transform,
                    padding: "5px",
                    backgroundColor: "green"
                }}>
                    <div>
                        <img  {...{src}} alt={`${title} logo`}
                              style={{objectFit: "container", width: 100, height: 100}}/>
                    </div>

                </animated.div>
            <animated.div
                style={{
                    position: "absolute",
                    willChange: "transform, opacity",
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                    backgroundColor: "red"
                }}>
                {title}
            </animated.div>
        </Grid>
    )
}
