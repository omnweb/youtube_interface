import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';


//Classes de estilização
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    icons: {
        marginRight: theme.spacing(3)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    appBar: {
        boxShadow: 'none'
    },
    grow: {
        flexGrow: 1
    },
    logo: {
        height: 25,
    },
}))

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar >
                    <IconButton
                        edge="start"
                        className={classes.icons.menuIcon}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <VideoCall />
                    </IconButton>
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <Apps />
                    </IconButton>
                    <IconButton
                        className={classes.Notificações}
                        color="inherit"
                    >
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home