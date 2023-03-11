DROP DATABASE IF EXISTS simple_orders;

DROP USER IF EXISTS simple_orders;

CREATE USER simple_orders_user WITH PASSWORD 'simple_orders_password';

CREATE DATABASE simple_orders OWNER simple_orders_user;
