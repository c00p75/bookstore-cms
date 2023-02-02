import { v4 as uuidv4 } from 'uuid';

// Initializing constatnt action variables
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    progress: '64',
    chapter: 'Chapter 17',
    id: uuidv4(),
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    progress: '8',
    chapter: 'Chapter 3: "A Lesson Learned"',
    id: uuidv4(),
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    progress: '0',
    chapter: 'Introduction',
    id: uuidv4(),
  },
];

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

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
