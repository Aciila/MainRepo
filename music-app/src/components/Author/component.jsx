import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    author: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
        fontSize: 21,
    },
    photo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
    },
    tags: {
        marginRight: 5,
        color: 'orange',
        textDecoration: 'none',
    },
    descr: {
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    wrapper: {
        margin: 15,
        border: '3px solid orange',
        padding: 10,
    },
}));

const ClickedPage = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props?.fetchArtist(props.authorId);
    }, []);

    return (
        <div className='wrapper'>
            <div className={classes.author}>{props?.artist?.name}</div>
            <div className={classes.photo}>
                <img src={props?.artist?.image?.[3]?.['#text']} />
            </div>
            {props?.artist?.tags?.tag?.map((el) => (
                <div key={el.url}>
                    <a className={classes.tags} href={el.url}>
                        #{el.name}
                    </a>
                </div>
            ))}
            <div className={classes.wrapper}>
                <div className={classes.descr}>
                    {props?.artist?.bio?.content}
                </div>
            </div>
        </div>
    );
};

export default ClickedPage;
