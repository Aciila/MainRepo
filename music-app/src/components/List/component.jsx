import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    gridHeader: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
    },
    author: {
        marginRight: 5,
        color: '#000',
        textDecoration: 'none',
    },
    pagination: {
        marginBottom: 10,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const MusicList = (props) => {
    const classes = useStyles();
    let history = useHistory();

    const [activePage, setPage] = useState(1);

    useEffect(() => {
        props?.fetchTracks(activePage);
    }, [activePage]);

    const onClick = (el) => {
        history.push(`/list/${el.artist.name}`);
    };

    console.log(activePage);
    return props?.isLoading ? (
        <div>Loading...</div>
    ) : (
        <div className={classes.root}>
            <GridList
                cellHeight={250}
                className={classes.gridList}
                cols={5}
                spacing={25}>
                <GridListTile
                    key='Subheader'
                    id='Subheader'
                    cols={5}
                    style={{ height: 'auto' }}>
                    <ListSubheader
                        className={classes.gridHeader}
                        component='h1'>
                        Top Charts
                    </ListSubheader>
                </GridListTile>
                {props?.tracks.map((el) => (
                    <GridListTile key={`${el?.playcount}-${Math.random()}`}>
                        <img
                            src={el?.image?.[2]?.['#text']}
                            alt={el?.artist?.name}
                        />
                        <GridListTileBar
                            title={el?.name}
                            subtitle={
                                <Button onClick={() => onClick(el)}>
                                    by: {el?.artist?.name}
                                </Button>
                            }
                            actionIcon={
                                <IconButton
                                    href={el?.url}
                                    aria-label={`Author page`}
                                    className={classes.icon}>
                                    <AccountCircleIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <Pagination
                className={classes.pagination}
                onChange={(e, page) => setPage(page)}
                count={20}
            />
        </div>
    );
};

export default MusicList;
