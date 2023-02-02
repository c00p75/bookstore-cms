import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appID = 'G55BGctcj4i26M6d6pQC';

// Initializing constatnt action variables
const BOOK_COLLECTION = 'bookstore/books/BOOK_COLLECTION';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initializing default state as an empty array
const defaultState = [];

// Creating reducer to handle action calls
export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${BOOK_COLLECTION}/fulfilled`: // fulfilled is a default action of thunk sent if funcion call succeeds. Others include pending and rejected.
      return action.payload; // Using payload(result) after executing thunk as state.

    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      // Filter out removed item from DOM's current state.
      return [...state.filter((book) => book.item_id.toString() !== action.payload.toString())];

    default:
      return state;
  }
};

// Create action to fetch data from API.
// createAsyncThunk is used as middleware for every function.
// They allow nested functions to be executed within an action.
export const fetchBooksAction = createAsyncThunk(
  BOOK_COLLECTION, async () => {
    let fetchBooks; // Declaring variable to later store fetched data
    await fetch(`${baseURL}${appID}/books`)
      .then((response) => response.json())
      .then((json) => {
        // Adding id keys to their nested arrays in order to present data in required format.
        fetchBooks = Object.keys(json).map((book) => ({
          item_id: book,
          ...json[book][0],
        }));
      });
    return fetchBooks;
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK, async (book) => {
    fetch(`${baseURL}${appID}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book), // Where book is the object passed from the form
    });
    return book;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK, async (bookId) => {
    await fetch(`${baseURL}${appID}/books/${bookId}`, {
      method: 'DELETE',
    });
    return bookId;
  },
);
