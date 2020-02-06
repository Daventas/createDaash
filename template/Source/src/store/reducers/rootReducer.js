import authReducer from './authReducer'
import botamReducer from './botamReducer'
import { combineReducers} from 'redux'



const rootReducer = combineReducers({
    auth: authReducer,
    botam: botamReducer
});

export default rootReducer
