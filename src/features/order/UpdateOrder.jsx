import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiResturant';
import Button from '../../ui/Button';
const UpdateOrder = function ({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button size="primary">Make Priority</Button>;
    </fetcher.Form>
  );
};

export const action = async function ({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrder;
