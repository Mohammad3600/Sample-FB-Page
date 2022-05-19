import { Avatar, Grid, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { loggerUserDetails, myProfileMenu } from "../../data";
import IconWrapper from "../utilities/IconWrapper";

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.primary.menu,
        border: `1px solid ${theme.palette.primary.text}`,
        borderRadius: "5px",
        zIndex: 100,
        right: 0,
        top:55,
        padding: "10px",        
        minWidth: "299px",
        maxWidth: "300px",
        position:"absolute"

    }
}))

const MyProfile = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container rowSpacing={2} direction="column">
      <Grid item style={{padding:"0"}}>
        <Grid container alignItems="center" columnSpacing={1}>
          <Grid item>
            <Avatar
              alt={loggerUserDetails.firstName}
              src={loggerUserDetails.profilePic}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {loggerUserDetails.firstName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
            <Divider sx={{background:"#fff"}} /> 
      </Grid>
      {myProfileMenu.map(item => (
          <Grid item>
              <Grid container justifyContent={"space-between"} alignItems="center">
                  <Grid item>
                      <Grid container columnSpacing={1} alignItems="center">
                          <Grid item><IconWrapper icon={<item.icon />} /></Grid>
                          <Grid item><Typography variant="body1">{item.name}</Typography></Grid>
                      </Grid>
                  </Grid>
                  {item.endIcon && <Grid item>
                    <item.endIcon />
                  </Grid>}
              </Grid>
          </Grid>
      ))}
    </Grid>
  );
};

export default MyProfile;
