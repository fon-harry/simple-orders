export default async (fastify, opts) => {
  const { OrdersService, StatisticsService } = opts.services;

  fastify.post(
    '/orders',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            phoneNumber: { type: 'string' },
            address: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
    },
    async function (request, reply) {
      const { body } = request;

      return OrdersService.createOrder(body);
    },
  );

  fastify.get('/orders', async function (request, reply) {
    return OrdersService.getOrders();
  });

  fastify.get(
    '/orders/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'number' },
          },
        },
      },
    },
    async function (request, reply) {
      const { id } = request.params;
      return OrdersService.getOrder(id);
    },
  );

  fastify.patch(
    '/orders/:id',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            phoneNumber: { type: 'string' },
            address: { type: 'string' },
            status: {
              type: 'string',
              enum: ['confirmed', 'canceled', 'postponed'],
            },
          },
          additionalProperties: false,
        },
      },
    },
    async function (request, reply) {
      const { id } = request.params;
      const { body } = request;

      return OrdersService.updateOrder(id, body);
    },
  );

  fastify.get('/statistics/orders', async function (request, reply) {
    return StatisticsService.getOrderStatistic();
  });
};
