import { Grid, Modal, Typography } from "@mui/material";
import React from "react";

const Stories = ({ stories }) => {
  const [open, setOpen] = React.useState(false);
  const [clickIndex, setClickIndex] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openStory = (key) => {
    setClickIndex(key);
    handleOpen();
    setTimeout(handleClose, 3000);
  };

  return (
    <Grid container columnSpacing={1}>
      {stories.map((item, key) => {
        return (
          <Grid item key={item.name + key} onClick={() => openStory(key)} className="position-relative">
            <img
              alt={item.name}
              style={{ borderRadius: 10 }}
              width="90"
              height="200"
              src={item.story}
            />
            <Typography style={{position:"absolute", top:"85%", left: 25}} variant="body2">{item.name}</Typography>
          </Grid>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <img
          alt={stories[clickIndex].name}
          style={{ position: "absolute", top: "30%", left: "40%" }}
          width="300"
          src={stories[clickIndex].story}
        />
      </Modal>
    </Grid>
  );
};

export default Stories;
