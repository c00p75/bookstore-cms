import React from 'react';
import './bookStore.css';

const BookForm = () => (
  <div className="form">
    <h2 className="formTitle">ADD NEW BOOK</h2>
    <form id="bookForm" className="d-flex justify-content-between">
      <input
        required
        type="text"
        id="titleInput"
        placeholder="Book Title"
      />

      <select
        required
        className="lg:w-2/6 shadow-sm"
        id="categoryList"
      >
        <option>Action</option>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>

      <button type="button" className="px-5">
        ADD BOOK
      </button>

    </form>
  </div>
);

export default BookForm;
