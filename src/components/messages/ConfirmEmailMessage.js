import React from "react"
import { Message } from "semantic-ui-react"

const ConfirmEmailMessage = () => {
  return (
    <Message info>
      <Message.Header>
        Please, verify your email to unlock awesomeness
      </Message.Header>
    </Message>
  )
}

export default ConfirmEmailMessage
