import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
const DeleteItem = function ({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button
      size="small"
      onClick={() => {
        dispatch(deleteItem(pizzaId));
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
