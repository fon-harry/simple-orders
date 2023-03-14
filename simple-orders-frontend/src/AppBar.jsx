import { Link } from 'react-router-dom';
import { Box, Typography, MenuItem, Toolbar } from '@mui/material';

import AppBarMUI from '@mui/material/AppBar';

function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="fixed">
        <Toolbar>
          <MenuItem component={Link} to={'/orders'}>
            <Typography textAlign="center">Orders</Typography>
          </MenuItem>
          <MenuItem component={Link} to={'/statistics'}>
            <Typography textAlign="center">Statistics</Typography>
          </MenuItem>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
}

export default AppBar;
