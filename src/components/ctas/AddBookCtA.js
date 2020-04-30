import React from "react"
// import PropTypes from "prop-types"
import { Card, Icon } from "semantic-ui-react"

const AddBookCtA = () => {
  return (
    <Card centered>
      <Card.Content textAlign="center">
        <Card.Header>Add new book</Card.Header>
        <Icon name="add circle" size="big" />
      </Card.Content>
    </Card>
  )
}

AddBookCtA.propTypes = {}

export default AddBookCtA
