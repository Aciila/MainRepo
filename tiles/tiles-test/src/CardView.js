import React from 'react';
import './Game.css';

const CardView = (props) =>  {

    const onClick = () => {
        if (!props.matched && !props.imageUp) {
            props.onClick(props.id);
        }
    }

        let imPath = './images/';
        if (props.imageUp) {
            imPath = imPath + props.image + '.png';
        } else {
            imPath = imPath + 'back.jpg';
        }

        let className = 'Card';
        if (props.matched) {
            className = className + ' Matched';
        }

        return (
            <img className={className} src={require(`${imPath}`)} alt='' onClick={onClick} />
        );
};

export default CardView;
