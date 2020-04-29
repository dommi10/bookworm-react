import React, { Component } from "react"
import { Form, Button, Message } from "semantic-ui-react"
import InlineError from "../messages/InlineError"
import PropTypes from "prop-types"

export class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: "",
      newpassword: "",
    },
    loading: false,
    errors: {},
  }

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    })

  onSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true })
      this.props
        .submit(this.state.data)
        .catch((error) =>
          this.setState({ errors: error.response.data.errors, loading: false })
        )
    }
  }


  validate = (data) => {
    const errors = {}
    if (!data.password) errors.password = "Can't be blank"
    if (data.password !== data.newpassword)
      errors.password = "password not match"
    return errors
  }

  render() {
    const { data, errors, loading } = this.state
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
            placeholder="make it secure"
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="newpassword">Confirm your password</label>
          <input
            type="password"
            id="newpassword"
            name="newpassword"
            value={data.newpassword}
            onChange={this.onChange}
            placeholder="tape it again please"
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Reset Password</Button>
      </Form>
    )
  }
}
ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}
export default ResetPasswordForm
