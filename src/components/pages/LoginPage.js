import React from "react"
import LoginForm from "../forms/LoginForm"

class LoginPage extends React.Component {
  state = {}

  submit = (data) => {
    console.log(data)
  }
  render() {
    return (
      <div className="ui container">
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}



export default LoginPage
