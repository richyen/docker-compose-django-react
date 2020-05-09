import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import EntireHeader from './components/layout/Header';

ReactDOM.render(<EntireHeader />, document.getElementById('root'));
registerServiceWorker();
