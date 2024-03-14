import { useState } from "react";

const NextQuote = () => {
    const [quote, setQuote] = useState(0);

    const array = [
        {
            id: 1,
            quote: "I'm not the only one who can't understand what I'm saying.",
            author: "Deepak Chaudhary"
        },
        {
            id: 2,
            quote: "I will definitely win one day.",
            author: "unknown"
        },
        {
            id: 3,
            quote: "I'm not the only one who can't understand what I'm saying.",
            author: "Deepak Chaudhary"
        }
    ]

    function handleQuote() {
        if (quote === array.length - 1) {
            setQuote(0);
        } else {
            setQuote(quote + 1);
        }
    }

    function handleLastQuote() {
        if (quote === 0) {
            setQuote(array.length - 1);
        } else {
            setQuote(quote - 1);
        }
    }

    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: '2px 2px 10px lightgrey'}}>
            <div style={{border: '2px solid lightgrey', padding: "5px"}}>
                <div>{array[quote].id}</div>
                <div>{array[quote].quote}</div>
                <em>{array[quote].author}</em>
            </div>
            <div className="d-flex mt-3">
            <button onClick={handleQuote}>Next Quote</button>
                <button onClick={handleLastQuote}>Last Quote</button>
            </div>
        </div>
    );
}

export default NextQuote;
