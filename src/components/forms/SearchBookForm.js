import React, { Component } from "react"
import axios from "axios"
import { Form, Search, Grid } from "semantic-ui-react"
import PropTypes from "prop-types"

const initialState = { isLoading: false, options: [], query: "" }

export class SearchBookForm extends Component {
  state = {
    query: "",
    loading: false,
    options: [],
    books: {},
  }

  onSearchChange = (e, { value }) => {
    clearTimeout(this.timer)
    this.setState({
      query: value,
    })
    this.timer = setTimeout(this.fetchOptions, 1000)
  }

  onResultSelect = (e, { result }) => {
    this.setState({ query: result.title })
    this.props.onBookSelect(this.state.books[result.value])
  }

  fetchOptions = () => {
    if (this.state.query.length < 1) return this.setState(initialState)
    this.setState({ loading: true })
    axios
      .get(`/api/books/search?q=${this.state.query}`)
      .then((res) => res.data.books)
      .then((books) => {
        const options = []
        const bookHash = {}
        books.forEach((book, i) => {
          bookHash[book.goodreadsId] = book
          options.push({
            key: i,
            value: book.goodreadsId,
            title: book.title,
          })
        })
        this.setState({ loading: false, options, books: bookHash })
      })
  }

  render() {
    return (
      <Form>
        <Grid>
          <Grid.Column width={8}>
            <Search
              fluid
              placeholder="search book"
              value={this.state.query}
              onSearchChange={this.onSearchChange}
              results={this.state.options}
              loading={this.state.loading}
              onResultSelect={this.onResultSelect}
            ></Search>
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}
SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired,
}

export default SearchBookForm
