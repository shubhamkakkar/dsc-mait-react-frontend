import React from "react";
import Grid from "@material-ui/core/Grid"
import css from "./Technologies.module.css"
import FlipTitle from "../../components/FlipTitle/FlipTitle.js";
// this file is made JS as a typescript error occurs

const baseNodesArray = [
    {
        title: "Web Development",
        color: "#3eccef",
        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
        title: "Machine Learning",
        color: "#FBBC12",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
    },
    {
        title: "Android Development",
        color: "#557DBF",
        src: "https://www.logospng.com/images/55/javacom-userlogosorg-55700.png"
    },
    {
        title: "Data Structure & Algo",
        color: "#189E59",
        src: "https://www.logospng.com/images/55/javacom-userlogosorg-55700.png"
    }
];


const TechWeTeach: React.FC = () => (
    <Grid container
          style={{
              padding: "10%",
              justifyContent: "center",
              alignItems: "center",
          }}
    >
        <Grid item className={css.hexagonNode} xs={12}>
            <FlipTitle {...{
                title: "Actions on Google", borderColor: "#557DBF",
                src: "https://developers.google.com/actions/assistant.png"
            }} />
        </Grid>
        {
            baseNodesArray.map(({title, color: borderColor, src}, index) => (
                <Grid item className={css.hexagonNode} xs={6} key={index}>
                    <FlipTitle {...{title, borderColor, src}} />
                </Grid>
            ))
        }
        <Grid item className={css.hexagonNode} xs={12}>
            <FlipTitle {...{
                title: "Google Cloud Platform",
                borderColor: "#E1382B",
                src: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/super_cloud.png"
            }} />
        </Grid>
    </Grid>
)
export default TechWeTeach;
