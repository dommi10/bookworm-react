import React from "react"
import { Link } from "react-router-dom"
import { Card, Icon } from "semantic-ui-react"

const AddBookCtA = () => {
  return (
    <Card centered>
      <Card.Content textAlign="center">
        <Card.Header>Add new book</Card.Header>
        <Link to="/books/new">
          <Icon name="add circle" size="big" />
        </Link>
      </Card.Content>
    </Card>
  )
}

export default AddBookCtA
