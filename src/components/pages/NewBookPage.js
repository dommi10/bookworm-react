import React, { Component } from "react"
import { Segment } from "semantic-ui-react"
import SearchBookForm from "../forms/SearchBookForm"
import BookForm from "../forms/BookForm"
import axios from "axios"

export class NewBookPage extends Component {
  state = {
    book: null,
  }

  onBookSelect = (book) => {
    this.setState({ book })
    axios
      .get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
      .then((res) => res.data.pages)
      .then((pages) => this.setState({ book: { ...book, pages } }))
  }

  addBook = () => console.log("hi")

  render() {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />
        <br />
        {this.state.book && (
          <BookForm submit={this.addBook} book={this.state.book} />
        )}
      </Segment>
    )
  }
}

export default NewBookPage
