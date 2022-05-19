import React, { useContext, useState } from "react";
import {
  Avatar,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddIcon from "@mui/icons-material/Add";
import { loggerUserDetails, mainMenu, otherUserDetails } from "../../data";
import IconWrapper from "../utilities/IconWrapper";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StyleTextField from "../utilities/StyleTextField";
import { useLocation, useNavigate } from "react-router-dom";
import MyProfile from "../myProfile/MyProfile";
import { UserContext } from "../../router";

const useStyles = makeStyles((theme) => ({
  fbIcon: {
    color: theme.palette.primary.select,
    background: "#fff !important",
    borderRadius: "50%",
    fontSize: "3rem !important",
  },
  selectIcon: {
    color: theme.palette.primary.select,
  },
  tabBotton:{
    borderBottom: `2px Solid ${theme.palette.primary.select}`
  },
  navStyles: {
    padding: "4px 8px",
    background: theme.palette.primary.menu,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const {setOtherUsers} = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTab = mainMenu.findIndex(menu => (menu.path === location.pathname || location.pathname === "/"));
  const handleChange = (e)=>{
    let input = e.target.value;
    setText(input);
      setOtherUsers(otherUserDetails.filter(item=>item.name.toLowerCase().indexOf(input.toLowerCase()) !==-1))
  }
  return (
    <Grid
      className={classes.navStyles}
      container
      alignItems={"center"}
      justifyContent="space-between"
    >
      <Grid item>
        <Grid container columnSpacing={1}>
          <Grid item>
            <FacebookRoundedIcon className={classes.fbIcon} />
          </Grid>
          <Grid item>
            <StyleTextField
              id="input-with-icon-textfield"
              placeholder="Search Facebook"
              value={text}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Tabs value={selectedTab} aria-label="nav tabs" inkBarStyle={{background: 'blue'}} classes={{indicator: classes.tabBotton}}>
          {mainMenu.map((item, key) => (
              <Tab key={key} icon={<item.icon className={selectedTab === key && classes.selectIcon } />} aria-label={item.name} onClick={()=>navigate(item.path)} />
          ))}
        </Tabs>
      </Grid>
      <Grid item>
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
        <Grid container alignItems="center" columnSpacing={2}>
          <Grid item>
            <IconWrapper icon={<AddIcon />} />
          </Grid>
          <Grid item>
            <IconWrapper icon={<ChatRoundedIcon />} />
          </Grid>
          <Grid item>
            <IconWrapper icon={<NotificationsNoneOutlinedIcon />} />
          </Grid>
          <Grid item className="position-relative">
            <IconWrapper icon={<ArrowDropDownIcon onClick={()=>setOpen(!open)} />} />
            {open && <MyProfile />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
