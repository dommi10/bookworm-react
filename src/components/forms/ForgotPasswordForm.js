import React, { Component } from "react"
import { Form, Button, Message } from "semantic-ui-react"
import validator from "validator"
import InlineError from "../messages/InlineError"
import PropTypes from "prop-types"

class ForgotPasswordForm extends Component {
  state = {
    data: {
      email: "",
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
    if (!validator.isEmail(data.email)) errors.email = "Invalid email"
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
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
            placeholder="example@example.com"
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Button primary>Reset Password</Button>
      </Form>
    )
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default ForgotPasswordForm
