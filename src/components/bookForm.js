import React, { useState } from 'react';
import './bookStore.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  // useDispatch is used to handle all actions from store.
  const dispatch = useDispatch();

  // Using useState in order to make input fields mutable/liable to state change.
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // functions to handle input value changes
  const onChangeTitle = (e) => {
    setTitle(e.target.value.trim());
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value.trim());
  };

  // Function to hundle inputs
  const addNewBook = () => {
    // variable to store book details in object
    const newBook = {
      item_id: uuidv4(), // Use uuid to generate unique id
      title,
      author,
      category: 'Action',
    };

    // Calling useDispatch through dispatch variable to send action to store.
    // Also passing new book as argument to addBooks action in books/books.js created earlier.
    dispatch(addBook(newBook));
  };

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    addNewBook(); // Calling addNewBook declared above.

    // Changing values back to blank after submission.
    setAuthor('');
    setTitle('');
  };

  // JSX syntax to render
  return (
    <div className="form container">
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form id="bookForm" className="row justify-content-between gx-5" onSubmit={onSubmit}>
        <input required type="text" id="titleInput" placeholder="Title" onChange={onChangeTitle} value={title} />
        <input required type="text" id="authorInput" placeholder="Author" onChange={onChangeAuthor} value={author} />
        <select className="col-2" id="categoryList">
          <option value="" disabled hidden>Category</option>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economy</option>
          <option value="">N/A</option>
        </select>
        <button type="submit" className="px-5">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
