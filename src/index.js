import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/app";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas/fetch-user-details";

import {Provider} from "react-redux";

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
