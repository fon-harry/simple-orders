import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/system';
import { Button } from '@mui/material';

import OrdersTable from '../components/OrdersTable';

import api from '../api/index.js';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      setOrders(await api.Orders.getOrders());
    })();
  }, []);

  return (
    <Container sx={{ padding: '10px' }}>
      <Container sx={{ padding: '10px' }}>
        <Button variant="contained" component={Link} to={`/new-order`}>
          New order
        </Button>
      </Container>
      <Container sx={{ padding: '10px' }}>
        <OrdersTable orders={orders} />
      </Container>
    </Container>
  );
}

export default OrdersPage;
