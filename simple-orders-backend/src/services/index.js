// Services import
import initOrdersService from './OrdersService.js';
import initStatisticsService from './StatisticsService.js';

export default (database) => ({
  OrdersService: initOrdersService(database),
  StatisticsService: initStatisticsService(database),
});
