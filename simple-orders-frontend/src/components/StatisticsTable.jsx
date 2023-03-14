import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StatisticsTable({ statistics }) {
  return (
    <TableContainer component={Paper} sx={{ padding: '10px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell size="small">Date</TableCell>
            <TableCell size="small">Confirmed</TableCell>
            <TableCell size="small">Canceled</TableCell>
            <TableCell size="small">Postponed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map((row) => (
            <TableRow key={row.date}>
              <TableCell size="small">{row.date}</TableCell>
              <TableCell size="small">{row.confirmed}</TableCell>
              <TableCell size="small">{row.canceled}</TableCell>
              <TableCell size="small">{row.postponed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

StatisticsTable.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StatisticsTable;
