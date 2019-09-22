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
        <Grid container spacing={3}>
            {
                list.map(({title, src, borderColor}: IList) => (
                        <Grid item xs={6} sm={12}  style={{ display: "flex",justifyContent: "center" }}>
                            <FlipTitle {...{title, src, borderColor}} />
                        </Grid>
                    )
                )
            }
        </Grid>
    )
}
