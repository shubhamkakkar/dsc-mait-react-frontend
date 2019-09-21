import React from "react";
import Grid from "@material-ui/core/Grid"
import FlipTileList from "../../components/FlipTileList/FlipTileList";
import FlipTitle from "../../components/FlipTitle/FlipTitle"
import css from "./Technologies.module.css"

const listA = [
    {
        title: "Web Development",
        borderColor: "#3eccef",
        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
        title: "Machine Learning",
        borderColor: "#FBBC12",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
    },
    {
        title: "Android Development",
        borderColor: "#557DBF",
        src: "https://www.logospng.com/images/55/javacom-userlogosorg-55700.png"
    },
];
const listB = [
    {
        title: "Data Structure & Algo",
        borderColor: "#189E59",
        src: "https://www.logospng.com/images/55/javacom-userlogosorg-55700.png"
    },
    {
        title: "Actions on Google",
        borderColor: "#557DBF",
        src: "https://developers.google.com/actions/assistant.png"
    },
    {
        title: "Google Cloud Platform",
        borderColor: "#E1382B",
        src: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/super_cloud.png"
    }
];


const TechWeTeach: React.FC = () => (
    <Grid container
        style={{
            paddingRight: "10%",
            paddingLeft: "10%",
            paddingTop: "2.5%",
            paddingBottom: "2.5%",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Grid item xs={12}>
            <div style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", paddingBottom: "1.5%", }}>
                Technologies We Will Teach
            </div>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
                <Grid item sm={2} xs={12}>
                    <FlipTileList list={listA} />
                </Grid>
                <Grid item sm={8} xs={12}>
                    <img style={{ objectFit: "contain", width: "100%" }}
                        src={"https://cdn.dribbble.com/users/1788965/screenshots/5376523/1-01-01.png"} alt={"teach"} />
                </Grid>

                <Grid item sm={2} xs={12}>
                    <FlipTileList list={listB} />
                </Grid>
            </Grid>
        </Grid>


    </Grid>
)
// @ts-ignore
export default TechWeTeach;

