import React from 'react'
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListSubheader,
    Divider,
    ListItemText,
    Box,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import History from '@material-ui/icons/History';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import MusicNoteRounded from '@material-ui/icons/MusicNoteRounded';
import PoolRounded from '@material-ui/icons/PoolRounded';
import SportsEsportsRounded from '@material-ui/icons/SportsEsportsRounded';
import MovieFilterRounded from '@material-ui/icons/MovieFilterRounded';
import NewReleasesRounded from '@material-ui/icons/NewReleasesRounded';
import LiveTvRounded from '@material-ui/icons/LiveTvRounded';
import HighlightRounded from '@material-ui/icons/HighlightRounded';
import TheatersRounded from '@material-ui/icons/TheatersRounded';
import AddCircleRounded from '@material-ui/icons/AddCircleRounded';
import YouTube from '@material-ui/icons/YouTube';
import Duo from '@material-ui/icons/Duo';
import Settings from '@material-ui/icons/Settings';
import Flag from '@material-ui/icons/Flag';
import Help from '@material-ui/icons/Help';
import SmsFailed from '@material-ui/icons/SmsFailed';


//Classes de estilização
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    drawerContainer: {
        overflow: 'auto',
    },
    ListItem: {
        paddingTop: 4,
        paddingBottom: 4
    },
    listItemText: {
        fontSize: 14,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icons: {
        marginRight: theme.spacing(3)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
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
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText primary={'Início'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<Whatshot />}</ListItemIcon>
                            <ListItemText primary={'Em ALta'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                            <ListItemText primary={'Inscrições'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                            <ListItemText primary={'Biblioteca'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<History />}</ListItemIcon>
                            <ListItemText primary={'História'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <Box p={4}>
                            <Typography variant="body2">
                                Faça login para curtir vídeos, comentar e se inscrever.
                            </Typography>
                            <Box mt={2}>
                                <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
                            </Box>
                        </Box>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemText primary={'O MELHOR DO YOUTUBE'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<MusicNoteRounded />}</ListItemIcon>
                            <ListItemText primary={'Música'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<PoolRounded />}</ListItemIcon>
                            <ListItemText primary={'Esportes'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<SportsEsportsRounded />}</ListItemIcon>
                            <ListItemText primary={'Jogos'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<MovieFilterRounded />}</ListItemIcon>
                            <ListItemText primary={'Filmes'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<NewReleasesRounded />}</ListItemIcon>
                            <ListItemText primary={'Notícias'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<LiveTvRounded />}</ListItemIcon>
                            <ListItemText primary={'Ao Vivo'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<HighlightRounded />}</ListItemIcon>
                            <ListItemText primary={'Destaques'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<TheatersRounded />}</ListItemIcon>
                            <ListItemText primary={'Vídeos 360'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<AddCircleRounded />}</ListItemIcon>
                            <ListItemText primary={'Procurar Canais'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemText primary={'MAIS DO YOUTUBE'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<YouTube />}</ListItemIcon>
                            <ListItemText primary={'Youtube Premium'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<Duo />}</ListItemIcon>
                            <ListItemText primary={'Live'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<Settings />}</ListItemIcon>
                            <ListItemText primary={'Definições'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<Flag />}</ListItemIcon>
                            <ListItemText primary={'Relatórios'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<Help />}</ListItemIcon>
                            <ListItemText primary={'Ajuda'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.ListItem }}>
                            <ListItemIcon>{<SmsFailed />}</ListItemIcon>
                            <ListItemText primary={'Enviar Comentários'} classes={{ primary: classes.listItemText }} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default Home