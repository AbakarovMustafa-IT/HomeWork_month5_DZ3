import { types } from "./types"

const initialState = {
  userData: {}
}


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, userData: action.payload }
    default: return state
  }
}