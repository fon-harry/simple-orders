import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TextField, Button, MenuItem, Box } from '@mui/material';

import api from '../api/index.js';

const orderStatuses = [
  {
    value: 'confirmed',
    label: 'Confirmed',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
  {
    value: 'postponed',
    label: 'Postponed',
  },
];

function OrderForm({ id }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    status: '',
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const order = await api.Orders.getOrder(id);
        setFormData({
          name: order.name || '',
          phoneNumber: order.phoneNumber || '',
          address: order.address || '',
          status: order.status || '',
        });
      }
    })();
  }, [id]);

  const handleSave = async () => {
    const order = { ...formData, status: formData.status || undefined };
    id
      ? await api.Orders.updateOrder(id, order)
      : await api.Orders.createOrder(order);
    navigate('/orders');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <TextField
        sx={{ m: 1, minWidth: 300 }}
        label="Name"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        size="small"
      />
      <TextField
        sx={{ m: 1, minWidth: 300 }}
        label="Phone number"
        id="phoneNumber"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        size="small"
      />
      <TextField
        sx={{ m: 1, minWidth: 300 }}
        label="Address"
        id="address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        size="small"
      />
      <TextField
        sx={{ m: 1, minWidth: 300 }}
        label="Status"
        id="status"
        select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        size="small"
      >
        {orderStatuses.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box>
        <Button sx={{ m: 1 }} variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button
          sx={{ m: 1 }}
          variant="contained"
          component={Link}
          to={`/orders`}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

OrderForm.propTypes = {
  id: PropTypes.string,
};
export default OrderForm;
