import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
// Create a component that tracks and displays the number of times it has been rendered.

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);