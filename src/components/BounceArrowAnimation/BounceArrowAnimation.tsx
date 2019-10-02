import React from "react"
import Icon from '@material-ui/core/Icon';
import css from "./BounceAnimation.module.css"

export default function BounceArrowAnimation({scrollTo}: {scrollTo: () => void}) {
    return (
        <div className={css.arrow && css.bounce} onClick={scrollTo}>
            <Icon style={{color: "#e1382b"}}>keyboard_arrow_down</Icon>
        </div>
    )
}
