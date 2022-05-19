import {  Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { makeStyles } from '@mui/styles';
import { UserContext } from '../../router';

const useStyles = makeStyles(theme => ({
    active:{
        position: "absolute",
        top: "28px",
        left: "32px",
        fontSize: "medium !important",
        color: "#31a24c"
    },
    parent:{
        position: "relative"
    }
}))


const RightSideBar = () => {
    const {otherUsers} = useContext(UserContext);
    const classes = useStyles();
    return (
        <Grid container direction="column" className="side-container" rowSpacing={2}>
            <Grid item>
                <Typography variant="body1">Chats</Typography>
            </Grid>
            {otherUsers.map((item,key) => {
                return <Grid item key={item.name+key} /*onClick={()=> navigate(item.path)}*/>
                    <Grid container alignItems="center" columnSpacing={1} className={classes.parent}>
                        <Grid item>{item.icon}</Grid>
                        <Grid item><Typography variant="body1">{item.name}</Typography></Grid>
                        {item.isActive && <FiberManualRecordIcon className={classes.active} />}
                    </Grid>
                </Grid>
            })}
        </Grid>
    )
}

export default RightSideBar
