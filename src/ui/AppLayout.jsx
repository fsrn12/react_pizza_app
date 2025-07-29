import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

const AppLayout = function () {
  const isLoading = useNavigation().state === 'loading';

  return (
    <section className="grid h-screen grid-rows-[auto_auto_1fr]">
      {isLoading && <Loader />}
      <Header />
      <CartOverview />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default AppLayout;
