import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAction } from '../redux/books/books';
import './bookStore.css';
import BookForm from './bookForm';
import BookList from './BookList';

const BookStore = () => {
  // useSelector is used to select specific state from redux store's combined reducers.
  const bookDetails = useSelector((state) => state.books);

  // Calling useDispatch through dispatch variable to send action to store.
  const dispatch = useDispatch();

  // Using useEffect to call fetchBooksAction() with every new render.
  useEffect(() => {
    dispatch(fetchBooksAction());
  }, [dispatch]);

  return (
    <div className="container bookListContainer padding">
      <BookList
        className="bookList"
        bookDetails={bookDetails}
      />
      <BookForm />
    </div>
  );
};

export default BookStore;
