import React from "react";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import {teamMembers, TTeamMembers} from "./teamMembersInformation"
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";

const Team: React.FC = () => {
    const [growOnScroll, setGrowOnScroll] = React.useState(false);

    function handleScroll() {
        const {
            scrollY,
            innerHeight
        } = window;

        if (scrollY > innerHeight - 100) {
            !growOnScroll && setGrowOnScroll(true)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Grid container
              alignItems="center"
              style={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  paddingTop: "5%",
                  paddingBottom: "5%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              }}
        >
            <Grid item xs={12}>
                <div style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: "1.5%",
                }}>
                    Our Team
                </div>
            </Grid>
            {
                teamMembers.map(({name, email, linkedIn, github, bio, role}: TTeamMembers, key: number) => (
                    <Grow {...{key}}
                          in={growOnScroll}
                          style={{transformOrigin: '0 0 0'}}
                          {...(growOnScroll ? {timeout: 450 * (key + 1)} : {})}
                    >
                        <Grid item xs={12} sm={4} style={{
                            padding: 10,
                        }}>

                            <TeamMemberCard {...{role, email, linkedIn, github, bio, name}} />
                        </Grid>
                    </Grow>
                ))
            }
        </Grid>
    )
};
export default Team
