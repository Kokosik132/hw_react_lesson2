import React from 'react';

const Car = ({car}) => {
    const {id, year, price, model} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>model: {model}</div>
            <br/>
            <button onClick={}>delete</button>
        </div>
    );
};

export {Car};