export default async (fastify, opts) => {
  const { OrdersService, StatisticsService } = opts.services;

  fastify.post('/orders', async function (request, reply) {
    const { body } = request;
    return OrdersService.createOrder(body);
  });

  fastify.get('/orders', async function (request, reply) {
    return OrdersService.getOrders();
  });

  fastify.get('/orders/:id', async function (request, reply) {
    const { id } = request.params;
    return OrdersService.getOrder(id);
  });

  fastify.patch('/orders/:id', async function (request, reply) {
    const { id } = request.params;
    const { body } = request;
    return OrdersService.updateOrder(id, body);
  });

  fastify.get('/statistics/orders', async function (request, reply) {
    return StatisticsService.getOrderStatistic();
  });
};
