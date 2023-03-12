import initDatabase from './libs/database.js';
import initServices from './services/index.js';

const database = initDatabase();
const services = initServices(database);

(async () => {
  await services.OrdersService.createOrder({
    name: 'Bill Gates',
    phoneNumber: '+123456789',
    address: '1835 73rd Ave NE, Medina, Washington, United States',
  });
  const orders = await services.OrdersService.getOrders();
  console.log(orders);
  const statistics = await services.StatisticsService.getOrderStatistic();
  console.log(statistics);
})();
