import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./LandingPage.module.css"
import BounceArrowAnimation from "../../components/BounceArrowAnimation/BounceArrowAnimation";
import Letter from '../../components/Letter/Letter'
import landingPage from "../../assets/images/landinpage.png"


export default function LandingPage({scrollTo}: { scrollTo: () => void }) {
    const [showArrow, setShowArrow] = React.useState(true);

    function handleScroll() {
        const {
            scrollY,
            innerHeight
        } = window;
        if (scrollY > innerHeight / 2) {
            setShowArrow(false)
        } else {
            setShowArrow(true)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Grid
            container
            alignItems="center"
            style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                height: "100vh"
            }}
        >
            <Grid item xs={12} sm={6}>
                <Grid container>
                    <Grid item xs={12} style={{marginTop: 10}}>
                        <div className={classes.alignMentMediaQuery}
                             style={{fontSize: 40, fontWeight: "bold"}}>Developer Student Club
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: 10}}>
                        <div className={classes.alignMentMediaQuery}
                             style={{fontSize: 30, fontWeight: "bold"}}>Maharaja Aggrasen Institute Of Technology,
                            GGSIPU
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{marginTop: 10, lineHeight: 1.5, color: "rgb(132, 150, 159)"}}
                             className={classes.alignMentMediaQuery}>
                            Developer Student Clubs is a
                            <b>
                                <Letter letter=" G" color="#557DBF"/>
                                <Letter letter="o" color="#E1382B"/>
                                <Letter letter="o" color="#FBBC12"/>
                                <Letter letter="g" color="#557DBF"/>
                                <Letter letter="l" color="#189E59"/>
                                <Letter letter="e " color="#E1382B"/>
                            </b>
                            Developers program for university students to learn
                            <Letter letter=" mobile " color="#E1382B"/>
                            and
                            <Letter letter=" web development " color="#557DBF"/> ,
                            <Letter letter=" design thinking " color="#FBBC12"/>
                            and
                            <Letter letter=" leadership " color="#189E59"/> skills.

                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} justify="center" className={classes.flexContainer}>
                <img  className={classes.scaleAnimation} src={landingPage} alt={"landing page"}
                     style={{width: "80%", height: "80%"}}/>
            </Grid>
            <Grid item xs={12} className={classes.flexContainer} style={{opacity: showArrow ? 1 : 0}}>
                <BounceArrowAnimation {...{scrollTo}} />
            </Grid>
        </Grid>
    )
}
