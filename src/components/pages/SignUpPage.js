import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { signup } from "../../actions/users"
import SignupForm from "../forms/SignupForm"

class SignUpPage extends Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"))

  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    )
  }
}

SignUpPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(null, { signup })(SignUpPage)
