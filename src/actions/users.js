import api from "../api"
import { userLoggedIn } from "./auth"

export const signup = (data) => () =>
  api.user.signup(data).then((user) => userLoggedIn(user))
