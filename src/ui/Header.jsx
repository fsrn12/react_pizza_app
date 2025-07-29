import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from '../features/cart/cartSlice.js';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = function () {
  const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <header className="flex items-center justify-between bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizza Co.
      </Link>
      <SearchOrder />

      <div className="flex items-center gap-4">
        <p>🛒 £{totalCartPrice}</p>
        <Username />
      </div>
    </header>
  );
};

export default Header;
