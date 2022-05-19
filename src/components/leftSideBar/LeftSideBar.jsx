import { Avatar, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { loggerUserDetails, leftBarContents, shortcuts } from '../../data'
import {useNavigate} from 'react-router-dom';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import StyledButton from '../utilities/styledButton';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


const LeftSideBar = () => {
    const navigate = useNavigate();
    return (
        <Grid container direction="column" className="side-container" rowSpacing={2}>
            <Grid item>
                <Grid container alignItems="center" columnSpacing={1}>
                    <Grid item><Avatar alt={loggerUserDetails.firstName} src={loggerUserDetails.profilePic} /></Grid>
                    <Grid item><Typography variant="body1">{loggerUserDetails.firstName} {loggerUserDetails.lastName}</Typography></Grid>
                </Grid>
            </Grid>
            {leftBarContents.map((item,key) => {
                return <Grid className="cursor-pointer" item key={item.name+key} onClick={()=> navigate(item.path)}>
                    <Grid container alignItems="center" columnSpacing={3}>
                        <Grid item>{item.icon}</Grid>
                        <Grid item><Typography variant="body1">{item.name}</Typography></Grid>
                    </Grid>
                </Grid>
            })}
            <Grid item>
                <StyledButton>See More <KeyboardArrowDownRoundedIcon /></StyledButton>
            </Grid>   
            <Grid item>
                <Divider sx={{background:"#fff"}} />        
            </Grid>
            <Grid item>
                <Grid container justifyContent={"space-between"}>
                    <Grid item><Typography variant="body1">Shortcuts</Typography></Grid>
                    <Grid item><MoreHorizRoundedIcon /></Grid>
                </Grid>
            </Grid>
            {shortcuts.map((item,key) => {
                return <Grid item key={item.name+key}>
                    <Grid container alignItems="center" columnSpacing={3}>
                        <Grid item>{item.img}</Grid>
                        <Grid item><Typography variant="body1">{item.name}</Typography></Grid>
                    </Grid>
                </Grid>
            })}
            <Grid item>
                <StyledButton>See More <KeyboardArrowDownRoundedIcon /></StyledButton>
            </Grid>  
        </Grid>
    )
}

export default LeftSideBar
