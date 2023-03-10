import React from 'react';
import './bookStore.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const property = props;
  const bookItem = property.book;

  // useDispatch is used to handle all actions from store.
  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    dispatch(removeBook(bookItem.item_id));
  };

  const userAppData = {
    progress: '0',
    chapter: 'Introduction',
  };

  return (
    <li className="container d-flex justify-content-between align-items-center">
      <div className="details d-flex flex-column">
        <span className="bookCategory">{bookItem.category}</span>
        <span className="bookTitle">{bookItem.title}</span>
        <span className="bookAuthor">{bookItem.author}</span>
        <div className="d-flex justify-between mt-2">
          <button type="button" className="bookBtn">Comment</button>
          <span className="divider">|</span>
          <button type="button" className="bookBtn px-2" onClick={handleRemoveButton}>Remove</button>
          <span className="divider">|</span>
          <button type="button" className="bookBtn px-2">Edit</button>
        </div>
      </div>
      <div className="bookProgress d-flex justify-content-end align-items-center px-2">
        <div className="progress-container">
          <div className="progress"> </div>
        </div>
        <div style={{ fontSize: '2rem' }} className="d-flex flex-column">
          <span>
            {userAppData.progress}
            %
          </span>
          <span style={{ fontSize: '0.875rem', opacity: '0.5' }}>Completed</span>
        </div>
      </div>
      <div className="largeDivider"> </div>
      <div className="d-flex flex-column" style={{ width: '14rem' }}>
        <span style={{ fontSize: '0.813rem', opacity: '0.5' }}>CURRENT CHAPTER</span>
        <span className="bookChapter">{userAppData.chapter}</span>
        <button type="button" className="updateBtn mt-3">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;
