import React from 'react'

const tokenKey = 'token'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(tokenKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
          if(action.payload) {
              return { ...state, validToken: true }
          } else {
              localStorage.removeItem(tokenKey)
              return { ...state, validToken: false, user: null }
          }
        case 'USER_FETCHED':
          localStorage.setItem(tokenKey, JSON.stringify(action.payload))
          return { ...state, user: action.payload, validToken: true }
        default:
          return state
    }
})