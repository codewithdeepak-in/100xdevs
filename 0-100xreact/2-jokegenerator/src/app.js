import { useState } from 'react';
import axios from 'axios';


const App = () => {
    
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateJokes(){
        setLoading(true);
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?type=single');
        const joke = response;
        if(joke){
            setLoading(false);
            setJoke(joke.data.joke);
        }
    }
    return(
        <>
            <div>
                {joke}
            </div>
            <button onClick={generateJokes}>{loading ? "Loading Jokes" : "Generate Jokes"}</button>
        </>
    )
}

export default App;