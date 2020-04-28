import { USER_LOGGED_IN } from "./types"
import api from "../api"

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user,
})


export const signup = (user) => (dispatch) =>
  api.user.signup(user).then((user) => {
    
  })
