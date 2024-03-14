import React, { useState } from 'react';

// This will work Individually.
const StateSharing = () => {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    // Take state to the centralized space.
    return (
        <div>
            Individually State Working <br />
            <MyButton />
            <MyButton />
            <hr />
            Sharing State Between Different Components. <br />
            <SharedButton count={count} onClick={handleClick} />
            <SharedButton count={count} onClick={handleClick} />
        </div>
    );
}

const SharedButton = ({ count, onClick }) => {
    return (
        <button onClick={() => onClick()}>
            Clicked {count} times
        </button>
    );
}

const MyButton = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
}

export default StateSharing;
