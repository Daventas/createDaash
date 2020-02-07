import authReducer from './authReducer'
import botamReducer from './botamReducer'
import { combineReducers} from 'redux'
import { firestoreReducer} from 'redux-firestore'



const rootReducer = combineReducers({
    auth: authReducer,
    botam: botamReducer,
    firestore: firestoreReducer
});

export default rootReducer
