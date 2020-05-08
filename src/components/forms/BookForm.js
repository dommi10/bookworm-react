import React, { Component } from "react"
import { Form, Button, Message, Segment, Grid, Image } from "semantic-ui-react"
import InlineError from "../messages/InlineError"
import PropTypes from "prop-types"

export class BookForm extends Component {
  state = {
    data: {
      goodreadsId: this.props.book.goodreadsId,
      title: this.props.book.title,
      authors: this.props.book.authors,
      cover: this.props.book.covers[0],
      pages: this.props.book.pages ?? 0,
    },
    covers: this.props.book.covers,
    index: 0,
    loading: false,
    errors: {},
  }

  static getDerivedStateFromProps({ book }, state) {
    return book.goodreadsId !== state.data.goodreadsId
      ? {
          data: {
            goodreadsId: book.goodreadsId,
            title: book.title,
            authors: book.authors,
            cover: book.covers[0],
            pages: book.pages,
          },
          covers: book.covers,
          index: 0,
          loading: false,
          errors: {},
        }
      : null
  }

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    })

  onChangeNumber = (e) =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10),
      },
    })

  changeCover = () => {
    const { index, covers } = this.state
    const newIndex = index + 1 >= covers.length ? 0 : index + 1
    this.setState({
      index: newIndex,
      data: { ...this.state.data, cover: covers[newIndex] },
    })
  }

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
    if (!data.title) errors.title = "Can't be blank"
    if (!data.auhors) errors.auhors = "Can't be blank"
    if (!data.pages) errors.pages = "Can't be blank"

    return errors
  }

  render() {
    const { data, errors, loading, covers } = this.state
    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid="true" stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="title">New Tite</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={this.onChange}
                    placeholder="book title"
                  />
                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field>
                <Form.Field error={!!errors.authors}>
                  <label htmlFor="authors">Book Authors</label>
                  <input
                    type="text"
                    id="authors"
                    name="authors"
                    value={data.authors}
                    onChange={this.onChange}
                    placeholder="book authors"
                  />
                  {errors.authors && <InlineError text={errors.authors} />}
                </Form.Field>
                <Form.Field error={errors.pages}>
                  <label htmlFor="pages">Pages</label>
                  <input
                    type="text"
                    id="pages"
                    name="pages"
                    value={data.pages}
                    onChange={this.onChangeNumber}
                    placeholder="book pages"
                  />
                  {errors.pages && <InlineError text={errors.pages} />}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" src={data.cover} />
                <br />
                {covers.length > 1 && (
                  <Button primary tabIndex={0} onClick={this.changeCover}>
                    Change Cover
                  </Button>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid.Row>
            {errors.global && (
              <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{errors.global}</p>
              </Message>
            )}
          </Grid.Row>
          <br />
          <Button primary>Save</Button>
        </Form>
      </Segment>
    )
  }
}
BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    goodreadsId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    pages: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
}
export default BookForm
