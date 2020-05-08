import axios from "axios"

export default (token = null) => {
  if (token) axios.defaults.headers["authorization"] = `Bearer ${token}`
  else {
    delete axios.defaults.headers["authorization"]
  }
}
