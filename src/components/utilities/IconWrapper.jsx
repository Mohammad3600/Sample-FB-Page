import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        color: theme.palette.primary.text,
        background: theme.palette.primary.iconBg,
    }
}))

const IconWrapper = ({icon}) => {
    const classes = useStyles();
    return (
        <Avatar className={classes.container}>
            {icon}
        </Avatar>
    )
}

export default IconWrapper