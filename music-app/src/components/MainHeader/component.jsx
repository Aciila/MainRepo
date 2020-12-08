import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
    },
    appBar: {
        backgroundColor: 'orange',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='static'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            <Link className={classes.link} to='/'>
                                Главная
                            </Link>
                        </Typography>
                        <Typography variant='h6' className={classes.title}>
                            <Link className={classes.link} to='/search'>
                                Поиск
                            </Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
