import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useState } from "react";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import NavBar from "../components/navBar/NavBar";
import Home from "../pages/home/Home";
import Memories from "../pages/memories/Memories";
import Events from "../pages/events/Events";
import Watch from "../pages/watch/Watch";
import Friends from "../pages/friends/Friends";
import View from "../pages/view/View";
import { otherUserDetails } from "../data";

export const UserContext = createContext(null);

function Routers() {
  const [otherUsers, setOtherUsers] = useState(otherUserDetails)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{otherUsers, setOtherUsers}}>
        <Grid className="App" container>
          <NavBar />
          <Grid container>
            <LeftSideBar />
            <Grid item className="main-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="watch" element={<Watch />} />
                <Route path="events" element={<Events />} />
                <Route path="friends" element={<Friends />} />
                <Route path="views" element={<View />} />
                <Route path="memories" element={<Memories />} />
              </Routes>
            </Grid>
            <RightSideBar />
          </Grid>
        </Grid>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default Routers;
