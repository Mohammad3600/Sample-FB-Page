import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
    textFieldStyles:{
        marginLeft: "5px",
          background: theme.palette.primary.iconBg,
          borderRadius: "25px",
          border: "none !important",
          padding: "10px 20px !important",
          '& .MuiInputBase-root':{
            color: theme.palette.primary.text,
            opacity: 1
          }
      }
}))

const StyleTextField = (props) => {
    const classes = useStyles();
    return (
        <TextField className={classes.textFieldStyles} {...props} />
    )
}

export default StyleTextField
