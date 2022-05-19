import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { loggerUserDetails } from "../../data";
import Stories from "../../components/home/Stories";
import AddPosts from "../../components/home/AddPosts";
import DisplayPosts from "../../components/home/DisplayPosts";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../router";

const useStyles = makeStyles(theme => ({
    innerContainer: {
        background: theme.palette.primary.post,
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px"
    }
}))

const Home = () => {
  const {otherUsers} = useContext(UserContext);
  const stories = otherUsers.filter((item) => item?.story);
  const classes = useStyles();
  const [posts, setPosts] = useState(loggerUserDetails.posts);
  return (
    <Grid container direction="column" rowSpacing={2} p={2}>
      <Grid item>
        {stories.length && <Stories stories={stories} />}
      </Grid>
      <Grid item>
          <AddPosts setPosts={setPosts} className={classes.innerContainer} />
      </Grid>
      {posts.map((post,key) => (
        <Grid item key={post+key}>
          <DisplayPosts className={classes.innerContainer} user={loggerUserDetails} content={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
