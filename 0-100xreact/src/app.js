import React from 'react';
import StateSharing from './components/stateSharing';
import Lists from './components/importExportComponents'; 
import JSXScripts from './components/javaScript-in-JSX';

const App = ()=> {
    return(
        <div>   
            <StateSharing />
            State Sharing and Working Individually.
            <Lists />
            <hr />
            <h3>JavaScript in JSX</h3>
            <JSXScripts />
            <hr />
        </div>
    )
}


export default App;
