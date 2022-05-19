import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const DisplayPosts = ({user, content, className})=> {
    return (
        <Grid className={className} container direction="column" rowSpacing={2}>
            <Grid item style={{padding:"0"}}>
                <Grid container justifyContent={"space-between"}>
                    <Grid item>
                        <Grid container alignItems="center" columnSpacing={1}>
                            <Grid item><Avatar alt={user.firstName} src={user.profilePic} /></Grid>
                            <Grid item><Typography sx={{textAlign: "start"}} variant="body1">{user.firstName} {user.lastName}</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <MoreHorizRoundedIcon />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant='body1'>{content}</Typography>
            </Grid>
        </Grid>
    )
}

export default DisplayPosts
