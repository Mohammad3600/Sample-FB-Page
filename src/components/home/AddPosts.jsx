import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React, {useState} from "react";
import { loggerUserDetails } from "../../data";
import StyleTextField from "../utilities/StyleTextField";

const AddPosts = ({className, setPosts}) => {
  // const classes = useStyles();
  const [text, setText] = useState("");
  const handleSubmit = (e)=>{
      e.preventDefault();
      setPosts(prev=>([text,...prev]))
      setText("")
  }
  return (
    <Grid className={className} container direction="column" rowSpacing={2}>
      <Grid item style={{padding:"0"}}>
        <Grid container columnSpacing={1} alignItems="center">
          <Grid item>
            <Avatar
              alt={loggerUserDetails.firstName}
              src={loggerUserDetails.profilePic}
            />
          </Grid>
          <Grid item flexBasis={"80%"}>
            <form onSubmit={handleSubmit}>
                <StyleTextField
                value={text}
                onChange={(e)=>setText(e.target.value)}
                InputProps={{
                    disableUnderline: true,
                }}
                fullWidth
                placeholder={`What's on your mind ${loggerUserDetails.firstName}`}
                variant="standard"
                />
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
            <Divider sx={{background:"#fff"}} />        
        </Grid>
      <Grid item>
            <Grid container justifyContent={"space-between"}>
                <Grid item><Typography variant="body1">Photos</Typography></Grid>
                <Grid item><Typography variant="body1">Tag Friends</Typography></Grid>
                <Grid item><Typography variant="body1">Feeling/Activity</Typography></Grid>
            </Grid>       
        </Grid>
    </Grid>
  );
};

export default AddPosts;
