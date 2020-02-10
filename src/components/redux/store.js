import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import InitialState from './initialState';

import reducer from './PBreducer';

const store = createStore(reducer, InitialState, devToolsEnhancer());

export default store;
