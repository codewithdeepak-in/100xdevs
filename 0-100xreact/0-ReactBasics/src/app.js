import React from 'react';
import StateSharing from './components/stateSharing';
import Lists from './components/importExportComponents'; 
import JSXScripts from './components/javaScript-in-JSX';
import {Time, PropsComponent, SmallProject, ImageShowCase} from './components/propDrilling';
import ConditionalRendering from './components/conditionalRendering';
import NextQuote from './components/nextState';
import ContactForm from './components/contactform';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const App = ()=> {
    return(
        <div>   
            {/* <StateSharing />
            State Sharing and Working Individually.
            <Lists />
            <hr />
            <h3>JavaScript in JSX</h3>
            <JSXScripts />
            <h3>Props Drilling</h3>
            <PropsComponent />
            <hr />
            <Time />
            <hr />
            <SmallProject />
            <h3>Image Card</h3>
            <ImageShowCase />
            <h3>Conditional Rendering</h3>
            <ConditionalRendering /> */}
            {/* <NextQuote /> */}   

            <ContactForm />
        </div>
    )
}


export default App;
