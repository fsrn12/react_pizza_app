import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './features/cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import CreateUser from './features/user/CreateUser';
import AppError from './ui/AppError';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <AppError />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/createUser',
        element: <CreateUser />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        errorElement: <AppError />,
        loader: orderLoader,
        action: updateOrderAction,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

const App = function () {
  return (
    <RouterProvider router={router}>
      <h1>Snappy Pizza</h1>
    </RouterProvider>
  );
};

export default App;
