import { toastr } from 'react-redux-toastr'
import axios from 'axios'

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([{
                    type: 'USER_FECTHED',
                    payload: resp.data
                }])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Error', error)
                )
            })
    }
}