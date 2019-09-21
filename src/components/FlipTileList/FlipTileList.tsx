import React from "react"
import Grid from "@material-ui/core/Grid"
import FlipTitle from "../FlipTitle/FlipTitle";

type IList = {
    title: string,
    src: string,
    borderColor: string
}

type IFlipTileList = {
    list: IList[]
}

export default function FlipTileList({ list }: IFlipTileList) {
    return (
        <Grid container>
            {
                list.map(({ title, src, borderColor }: IList) => (
                    <Grid item xs={12} style={{ backgroundColor: "yellow" }} >
                        <FlipTitle {...{ title, src, borderColor }} />
                    </Grid>

                ))
            }
        </Grid>
    )

}
