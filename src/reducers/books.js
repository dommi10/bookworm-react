import { createSelector } from "reselect";

const initialState = {}

export default function books(state = initialState, { type }) {
  switch (type) {
    default:
      return state
  }
}

//selector
export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(
    booksSelector,
    booksHash => Object.values(booksHash)
)