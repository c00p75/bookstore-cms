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
  const [category, setCategory] = useState('No category');

  // functions to handle input value changes
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onSelectCategory = (e) => {
    setCategory(e.target.value);
  };

  // Function to hundle inputs
  const addNewBook = () => {
    // variable to store book details in object
    const newBook = {
      item_id: uuidv4(), // Use uuid to generate unique id
      title: title.trim(),
      author: author.trim(),
      category,
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
    // Changimg category back to default
    document.querySelector('#categoryList').childNodes[0].selected = true;
    setCategory(category);
  };

  // JSX syntax to render
  return (
    <div className="form container">
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form id="bookForm" className="row justify-content-between gap-3" onSubmit={onSubmit}>
        <input className="col-4" required type="text" id="titleInput" placeholder="Title" onChange={onChangeTitle} value={title} />
        <input className="col-4" required type="text" id="authorInput" placeholder="Author" onChange={onChangeAuthor} value={author} />
        <select className="col" id="categoryList" onClick={onSelectCategory}>
          <option value={category} hidden>Category</option>
          <option>Adventure fiction</option>
          <option>Economy</option>
          <option>Science Fiction</option>
          <option>Non-fiction</option>
          <option>Novel</option>
          <option>Mystery</option>
          <option>Graphic novel</option>
          <option>Romance</option>
          <option>Thriller</option>
          <option>Poetry</option>
          <option>Fantasy Fiction</option>
        </select>
        <button type="submit" className="col">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
