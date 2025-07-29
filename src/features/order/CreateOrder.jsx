import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiResturant';
import store from '../../store';
import Button from '../../ui/Button';
import { formatCurrency, isValidPhone } from '../../utils/helpers.js';
import EmptyCart from '../cart/EmptyCart';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
// import { fetchAddress, getUser } from '../user/userSlice';
import { fetchAddress } from '../user/userSlice';
import InputContainer from './InputContainer';

const CreateOrder = function () {
  const [withPriority, setWithPriority] = useState(false);
  const isSubmitting = useNavigation().state === 'submitting';
  const formErrors = useActionData();

  const dispatch = useDispatch();

  const {
    username,
    status: addressStatus,
    position: { latitude, longitude },
    address,
    error: errorAddress,
  } = useSelector((store) => store.user);
  const isLoadingAddress = addressStatus === 'loading';

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const cart = useSelector(getCart);

  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <section className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <InputContainer id="customer" text="First Name">
          <input
            type="text"
            name="customer"
            defaultValue={username}
            className="input grow"
            required
          />
        </InputContainer>
        <InputContainer id="phone" text="Phone Number">
          <input name="phone" type="tel" className="input w-full" required />
          {formErrors?.phone && (
            <p className="mt-2 p-2 text-xs text-red-500">{formErrors.phone}</p>
          )}
        </InputContainer>
        <InputContainer id="address" text="Delivery Address">
          <div className="relative">
            <div className="grow">
              <input
                type="text"
                name="address"
                className="input w-full"
                defaultValue={address}
                disabled={isLoadingAddress}
                required
              />
              {addressStatus === 'error' && (
                <p className="mt-2 rounded-md bg-red-200 to-red-700 p-2 text-xs">
                  {errorAddress}
                </p>
              )}
            </div>
            {/* !position.latitude && !position.longitude  */}
            {!latitude && !longitude && (
              <span className="absolute right-[2.5px] top-[5px] z-10 md:right-[5px]">
                <Button
                  size="small"
                  disabled={isLoadingAddress}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get Address
                </Button>
              </span>
            )}
          </div>
        </InputContainer>
        {/* PRIORITY CHECKBOX */}
        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 rounded-md accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-medium">
            Deliver with Prime
          </label>
        </div>
        <div>
          <input
            type="hidden"
            name="position"
            value={latitude && longitude ? `${latitude},${longitude}` : ''}
          />

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting || isLoadingAddress} size="primary">
            {isSubmitting
              ? 'Placing Order'
              : `Order Now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.table(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please provide your valid phone number. We might need it to contact you.';
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  // console.log(order);
  const newOrder = await createOrder(order);
  // console.log(store.getState());
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
