import { USER_LOGGED_IN } from "../actions/types"

export const initialState = {}

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user
    default:
      return state
  }
}
