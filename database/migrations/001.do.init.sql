CREATE TYPE public.order_status AS ENUM
  ('confirmed', 'canceled', 'postponed');

CREATE TABLE public.orders
(
  id serial NOT NULL,
  name varchar,
  phone_number varchar,
  address varchar,
  status order_status,
  created_at timestamp with time zone NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);
