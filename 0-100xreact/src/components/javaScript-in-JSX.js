import React, { useState } from 'react';


const JSXScripts = () => {
    const name = "Piyush Kumar";
    const [isBool, setisBool] = useState(false);

    function handleClick(){
        setisBool(!isBool);    
    }

    return (
        <div>
            <h1>{ name } { isBool ? "" : "is Java Developer"}</h1>
            <button type="button" onClick={handleClick}>Click</button>
        </div>
    );
}

export default JSXScripts;