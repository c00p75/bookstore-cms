import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  // useDispatch is used to handle all actions from store.
  const dispatch = useDispatch();

  // useSelector is used to select specific state from redux store's combined reducers.
  const currentStatus = useSelector((state) => state.status);

  // Dispatching status action
  const checkStatus = () => dispatch(status());

  return (
    <div className="categoryBtn d-flex flex-column justify-content-center align-items-center">
      <button type="button" onClick={checkStatus}> Check Status </button>
      <span className="py-3">{currentStatus}</span>
    </div>
  );
};

export default Categories;
