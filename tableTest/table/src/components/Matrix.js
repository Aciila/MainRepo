import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

const Matrix = ({ M, N }) => {
    const [board, setBoard] = useState(null);

    const getRandomArbitrary = (min, max) => {
        return +Math.round(Math.random() * (max - min) + min);
    };

    const handleFill = () => {
        setBoard(
            Array(M)
                .fill(0)
                .map((row) =>
                    Array.from({ length: N }, () => ({
                        id: uuidv4(),
                        value: getRandomArbitrary(100, 1000),
                    }))
                )
        );
    };

    const handleAvg = (num) => {
        let a = 0;
        board.map(el => a += el[num].value);
        return Math.floor(a / +board.length);
    }

    const handleDelete = (el) => {
        const index = board.findIndex(e=> e == el)
        const newArr = [...board.slice(0, index), ...board.slice(index+1)]
        setBoard(newArr)
    }

    const handleAdd = (id) => {
        const incr = board.map(el=>el.map(e=>e.id == id ? Object.assign({}, e, {value: e.value+1}) : e));
        setBoard(incr)
    }

    const fillTable = () => {
        return <>
            {board.map((el) => (
            <tr>
                <td className='column' onClick={() => handleDelete(el)}>Delete row</td>
                {el.map((e) => (
                    <td onClick={() => handleAdd(e.id)} className='column' key={e.id}>
                        {e.value}
                    </td>
                ))}
                <td key={el.map(e=>e.id)} className='column'>
                    {el.reduce((acc, nV) => {
                        return (acc += nV.value);
                    }, 0)}
                </td>
            </tr>
            ))}
            <tr>
                <td></td>
                <td className='column'>{handleAvg(0)}</td>
                <td className='column'>{handleAvg(1)}</td>
                <td className='column'>{handleAvg(2)}</td>
                <td className='column'>{handleAvg(3)}</td>
                <td className='column'>{handleAvg(4)}</td>
            </tr>
        </>;
    };
    return (
        <>
            <Button variant='dark' className='btn-fill' onClick={() => handleFill()}>Fill Table</Button>
            <Table className='table' variant='dark' bordered>
                <tbody>{board ? fillTable() : null}</tbody>
            </Table>
        </>
    );
};

export default Matrix;
