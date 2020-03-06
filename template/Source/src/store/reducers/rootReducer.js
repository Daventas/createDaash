import authReducer from './authReducer'
import botamReducer from './botamReducer'
import { combineReducers} from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import userReducer from './userReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    botam: botamReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

});

export default rootReducer
