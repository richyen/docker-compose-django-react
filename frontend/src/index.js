import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';



import {createStore} from 'redux';
const defaultState = {checked: false};
const reducer = function(state= defaultState, action){
    switch (action.type) {
        case 'TOGGLE':
            return {...state, checked: !state.checked};
    }
    return state;
};
const store = createStore(reducer);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
