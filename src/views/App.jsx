import React, { useState } from 'react';

import { BrowserRouter as Router } from  'react-router-dom';
 
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

import { DataContext, data } from '../data/DataContext';

import Store from '../data/Store';

import './App.css';

export default function App(props) {
    const [ state, setState ] = useState(data);

    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                <div className="app">
                    <Router> 
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    );
}