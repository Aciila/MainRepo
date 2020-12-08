import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    list: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    link: {
        color: '#000',
        marginLeft: 10,
    },
}));

const SearchPage = (props) => {
    const classes = useStyles();
    const [inputValue, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props?.fetchSearch(inputValue);
        setInput('');
    };

    return (
        <>
            <form
                className={classes.root}
                noValidate
                autoComplete='off'
                onSubmit={onSubmit}>
                <TextField
                    id='standard-secondary'
                    label='Введите название песни'
                    onChange={(e) => setInput(e.target.value)}
                    value={inputValue}
                />
            </form>
            {props?.track
                ? props?.track.map((el) => (
                      <List className={classes.list}>
                          <ListItem alignItems='flex-start'>
                              <ListItemText
                                  primary={el.name}
                                  secondary={
                                      <React.Fragment>
                                          <Typography
                                              component='span'
                                              variant='body2'
                                              className={classes.inline}
                                              color='textPrimary'>
                                              {el.artist}
                                          </Typography>
                                          <a
                                              className={classes.link}
                                              href={el.url}>
                                              Song page
                                          </a>
                                      </React.Fragment>
                                  }
                              />
                          </ListItem>
                          <Divider variant='inset' component='li' />
                      </List>
                  ))
                : null}
        </>
    );
};

export default SearchPage;
