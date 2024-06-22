import React from 'react';

const Book = (props) => {
    return (
        <div>
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button onClick={props.log}>Click here!</button>
        </div>
    );
}

export default Book;