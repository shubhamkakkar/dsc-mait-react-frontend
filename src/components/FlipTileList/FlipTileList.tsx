import React from "react"
import FlipTitle from "../FlipTitle/FlipTitle";
import Grid from "@material-ui/core/Grid";

type IList = {
    title: string,
    src: string,
    borderColor: string
}

type IFlipTileList = {
    list: IList[]
}

export default function FlipTileList({list}: IFlipTileList) {
    return (
        <Grid container spacing={3} style={{textAlign: "center", justifyContent: "center"}}>
            {
                list.map(({title, src, borderColor}: IList) => (
                        <FlipTitle {...{title, src, borderColor}} />
                    )
                )
            }
        </Grid>
    )
}
