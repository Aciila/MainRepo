import React from 'react';
import './Game.css';
import CardView from './CardView';
import { useDispatch, useSelector } from 'react-redux'
import { flipUpCard, checkMatchedPair, initGame } from './actions';

const GameView = () => {
    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards);
    const turnNo = useSelector(state => state.turnNo); 
    const gameComplete = useSelector(state => state.gameComplete);
    const pairsFound = useSelector(state => state.pairsFound);
    const numClicksWithinTurn = useSelector(state => state.numClicksWithinTurn);

    if (pairsFound === 7 && numClicksWithinTurn === 2) {
        dispatch(checkMatchedPair())
    }

    const getCardViews = () => {
        let cardViews = [];
        cards.forEach(c => {
            let cardView = <CardView key={c.id}
                id={c.id}
                image={c.image}
                imageUp={c.imageUp}
                matched={c.matched}
                onClick={(id) => dispatch(flipUpCard(id))} />
            cardViews.push(cardView);
        });
        return cardViews;
    }

        let cardViews = getCardViews();
        let gameStatus = <div className='Game-status'>
            <div>Turn: {turnNo}</div>
            <div>Pairs found: {pairsFound}</div>
        </div>;

        if (gameComplete) {
            gameStatus = <div className='Game-status'>
                <div>GAME COMPLETE!</div>
                <div>You used {turnNo - 1} turns</div>
                <div><button onClick={() => dispatch(initGame())}>Play again?</button></div></div>;
        }

        return (
            <div className='Game'>
                <div>
                    {gameStatus}
                </div>
                <div className='CardContainer'>
                    {cardViews}
                </div>
            </div>
        );
}

export default GameView;

