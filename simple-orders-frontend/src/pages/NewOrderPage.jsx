import OrderForm from '../components/OrderForm.jsx';

import { Container } from '@mui/system';

function NewOrderPage() {
  return (
    <Container sx={{ padding: '10px' }}>
      <OrderForm />
    </Container>
  );
}

export default NewOrderPage;
