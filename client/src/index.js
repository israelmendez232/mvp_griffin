import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/publicRoutes';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={configureStore()}>
    <Routes />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
