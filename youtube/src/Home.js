import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Button,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Grid,
    Hidden,
    Switch,
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
import { useTheme } from '@material-ui/core/styles';



//Classes de estilização
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        backgroundColor: theme.palette.background.dark,
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

const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
];

function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar >
                    <IconButton
                        edge="start"
                        className={classes.icons.menuIcon}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <Switch onChange={() => setDarkMode(!darkMode)} value={darkMode} className={classes.icons} />
                    <IconButton
                        className={classes.icons}

                    >
                        <VideoCall />
                    </IconButton>
                    <IconButton
                        className={classes.icons}

                    >
                        <Apps />
                    </IconButton>
                    <IconButton
                        className={classes.icons}

                    >
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
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
                </Hidden>
                <Box p={4} >
                    <Toolbar />
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                </Typography>

                    <Grid container spacing={3}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Box>
            </Box>
        </div>
    )
}

export default Home