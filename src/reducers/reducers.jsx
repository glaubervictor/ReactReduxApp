import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer