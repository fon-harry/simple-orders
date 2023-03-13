const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Orders = {
  getOrder: async (id) => {
    const url = `${API_BASE_URL}/orders/${id}`;

    const response = await fetch(url);

    const order = await response.json();

    return order;
  },
  getOrders: async () => {
    const url = `${API_BASE_URL}/orders`;

    const response = await fetch(url);

    const orders = await response.json();

    return orders;
  },
  createOrder: async (orderData) => {
    const url = `${API_BASE_URL}/orders`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const orders = await response.json();

    return orders;
  },
  updateOrder: async (id, orderData) => {
    const url = `${API_BASE_URL}/orders/${id}`;

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const orders = await response.json();

    return orders;
  },
};

const Statistics = {
  getOrderStatistic: async () => {
    const url = `${API_BASE_URL}/statistics/orders`;

    const response = await fetch(url);

    const orders = await response.json();

    return orders;
  },
};

export default {
  Orders,
  Statistics,
};
