import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQty = function ({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        size="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        &minus;
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        size="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        &#43;
      </Button>
    </div>
  );
};

export default UpdateItemQty;
