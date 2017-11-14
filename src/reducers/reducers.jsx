import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'

//import AuthReducer from './authReducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    toastr: toastrReducer
})

export default rootReducer