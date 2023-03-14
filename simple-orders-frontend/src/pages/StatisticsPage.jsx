import { useState, useEffect } from 'react';

import { Container } from '@mui/system';

import StatisticsTable from '../components/StatisticsTable';

import api from '../api/index.js';

function StatisticsPage() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    (async () => {
      setStatistics(await api.Statistics.getOrderStatistic());
    })();
  }, []);

  return (
    <Container sx={{ padding: '10px' }}>
      <StatisticsTable statistics={statistics} />
    </Container>
  );
}

export default StatisticsPage;
