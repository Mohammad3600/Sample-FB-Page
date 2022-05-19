import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
    buttonStyles: {
        textTransform: "none !important",
        color: theme.palette.primary.text,
        background: theme.palette.primary.menu
    }
}))
const StyledButton = ({children}) => {
    const classes = useStyles();
    return (
        <Button fullWidth className={classes.buttonStyles} variant="contained">{children}</Button>
    )
}

export default StyledButton
