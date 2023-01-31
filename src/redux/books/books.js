// Initializing constatnt action variables
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [];

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];

    default:
      return state;
  }
};

// Reducer actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  id,
});