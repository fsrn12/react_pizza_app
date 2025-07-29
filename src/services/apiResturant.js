const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export const getMenu = async function () {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) {
    throw new Error('Failed getting menu');
  }
  const { data } = await res.json();
  return data;
};

export const getOrder = async function (id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) {
    throw new Error(`Couldn't find order #${id}`);
  }
  const { data } = await res.json();
  return data;
};

export const createOrder = async function (newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error();
    }
    const { data } = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw Error('Failed creating you order', err);
  }
};

export const updateOrder = async function (id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error();
    }
  } catch (err) {
    throw Error('Failed updating you order');
  }
};
