import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from './reducer';
import rootSaga from './sagas';

import App from './App';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// REDUX storage INIT + SAGA RUN + REDUX CONSOLE LOGGER + allow inspecting REDUX storage with REDUX DEVTOOLS: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
