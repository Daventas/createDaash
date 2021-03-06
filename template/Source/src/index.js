import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Redux
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
//Firebase
import { reduxFirestore, getFirestore} from 'redux-firestore'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbconfig'

const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

