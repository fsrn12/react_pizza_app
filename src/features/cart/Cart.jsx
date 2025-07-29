import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import { getUser } from '../user/userSlice.js';
import CartItem from './CartItem.jsx';
import EmptyCart from './EmptyCart.jsx';
import { clearCart, getCart } from './cartSlice.js';

const Cart = function () {
  const dispatch = useDispatch();
  const { username } = useSelector(getUser);
  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;
  // console.log(cart);
  return (
    <article className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your Cart, {username}</h2>
      {/* CART LIST */}
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" size="primary">
          Order Pizza
        </Button>
        <Button
          size="secondary"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </Button>
      </div>
    </article>
  );
};

export default Cart;
