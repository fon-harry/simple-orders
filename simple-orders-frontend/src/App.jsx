import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/system';

import AppBar from './AppBar.jsx';

import OrdersPage from './pages/OrdersPage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import NewOrderPage from './pages/NewOrderPage.jsx';
import StatisticsPage from './pages/StatisticsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Container sx={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/orders" />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/new-order" element={<NewOrderPage />} />
          <Route path="/orders/:id" element={<OrderPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
