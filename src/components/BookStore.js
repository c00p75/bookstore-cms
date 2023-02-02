import { useSelector } from 'react-redux';
import './bookStore.css';
import BookForm from './bookForm';
import BookList from './BookList';

const BookStore = () => {
  // useSelector is used to select specific state from redux store's combined reducers.
  const bookDetails = useSelector((state) => state.books);
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
