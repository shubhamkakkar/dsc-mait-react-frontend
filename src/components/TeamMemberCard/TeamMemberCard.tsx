import React from "react";
import {Card, CardActions, CardContent, CardHeader, Collapse, Grid, Icon} from "@material-ui/core";
import s from "./team.module.css";
import {TTeamMembers} from "../../container/Team/teamMembersInformation";

const Arrow = ({color, direction, onClick}: { color: string, direction: string, onClick: () => void }) => <div
    className={s.buttonArrow}>
    <Icon style={{color}} {...{onClick}}>keyboard_arrow_{direction}</Icon>
</div>;

export default function TeamMemberCard({role, name, github, linkedIn, email, bio}: TTeamMembers) {
    const [expand, setExpand] = React.useState(false);

    return (
        <Card className={s.cardBackground}>
            <CardHeader
                classes={{
                    title: s.title,
                    root: s.cardHeaderRoot
                }}
                title={role}
                subheader={<div>
                    <div className={s.subheader}>{name}</div>
                    {!expand && <Arrow color={"#189E59"} direction={"down"} onClick={() => setExpand(!expand)}/>}
                </div>}
            />
            <Collapse in={expand} timeout={"auto"} unmountOnExit>
                <CardContent>
                    <div className={s.bio}>{bio}</div>
                </CardContent>
                <CardActions>
                    {expand && <Arrow color={"#557dbf"} direction={"up"} onClick={() => setExpand(!expand)}/>}
                </CardActions>
            </Collapse>
            <CardActions disableSpacing>
                <Grid container>
                    <Grid item xs={github ? 4 : 6}>
                        <a href={"mailto: " + email}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/gmail-512.png"
                                alt="gmail" className={s.img}/>
                        </a>
                    </Grid>
                    <Grid item xs={github ? 4 : 6}>
                        <a href={linkedIn} target={"_blank"}>
                            <img
                                src={"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"}
                                alt="linkedin" className={s.img}/>
                        </a>
                    </Grid>
                    <Grid item xs={github ? 4 : 6}>
                        {
                            github && <a href={github} target={"_blank"}>
                                <img
                                    src={"https://image.flaticon.com/icons/svg/25/25231.svg"}
                                    alt="github" className={s.img}/>
                            </a>
                        }
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}
