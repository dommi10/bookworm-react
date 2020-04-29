import React from "react"
import LoginForm from "../forms/LoginForm"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {
  state = {}

  submit = (data) =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"))

  render() {
    return (
      <div className="ui container">
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
        <br/>
        <Link to="/forgot_password" >Forgot Password ?</Link>
      </div>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
}

export default connect(null, {login}) (LoginPage)
