import React from "react";

export default function Letter({letter, color}: { letter: string, color: string }) {
    return (
        <span style={{color}}>
            {letter}
        </span>
    )
};
