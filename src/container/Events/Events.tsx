import React from "react";
import Grid from "@material-ui/core/Grid"
import s from './events.module.css'

const Event: React.FC = () => {
    return (
        <Grid container
              style={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  justifyContent: "center",
                  alignItems: "center",
              }}
        >
            <Grid item xs={12} sm={4} style={{textAlign: "center"}}>
                <div style={{fontSize: 20, fontWeight: "bold", textAlign: "center", paddingBottom: "1.5%",}}>
                    Events
                </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{textAlign: "center"}}>
                <img
                    className={s.img}
                    alt={"events"}
                    src={"https://cdn.dribbble.com/users/1355613/screenshots/7083798/media/8199bdcf2aca122e9acf6035c8179de4.jpg"}/>
            </Grid>
            <Grid item xs={12} sm={4} style={{textAlign: "center"}}>
                <div style={{fontSize: 20, fontWeight: "bold", textAlign: "center", paddingBottom: "1.5%",}}>
                    Coming Soon
                </div>
            </Grid>
        </Grid>
    )
};
export default Event
