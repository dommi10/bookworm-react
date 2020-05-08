import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import decode from "jwt-decode"
import { composeWithDevTools } from "redux-devtools-extension"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import rootReducer from "./rootReducer"
import { userLoggedIn } from "./actions/auth"
import setAuthorizationHeader from "./utils/setAuthorizationHeader"
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

if (localStorage.bookwormJWT) {
  const payload = decode(localStorage.bookwormJWT)
  const user = {
    token: localStorage.bookwormJWT,
    email: payload.email,
    confirmed: payload.confirmed,
  }
  setAuthorizationHeader(localStorage.bookwormJWT)
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
