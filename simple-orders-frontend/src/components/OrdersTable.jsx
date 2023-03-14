import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function OrdersTable({ orders }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell size="small">#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell size="small"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell size="small">{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell size="small">
                <Button
                  variant="contained"
                  component={Link}
                  to={`/orders/${row.id}`}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

OrdersTable.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrdersTable;
