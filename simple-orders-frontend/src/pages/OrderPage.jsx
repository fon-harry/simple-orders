import { useParams } from 'react-router-dom';

import { Container } from '@mui/system';

import OrderForm from '../components/OrderForm.jsx';

function OrderPage() {
  const params = useParams();
  return (
    <Container sx={{ padding: '10px' }}>
      <OrderForm id={params.id} />
    </Container>
  );
}

export default OrderPage;
