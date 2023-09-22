import React from 'react';
import './assets/style/style.css'
import ReactDOM from 'react-dom/client';
import NotesApps from './components/NotesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NotesApps />
    </React.StrictMode>
);

