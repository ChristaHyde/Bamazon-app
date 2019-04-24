DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  item_id INT
  auto_increment NOT NULL,
  product_name VARCHAR
  (100) NULL,
  department_name VARCHAR
  (100) NULL,
  price DECIMAL
  (10,4) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY
  (item_id)
 );

  insert into products
    (product_name, price, stock_quantity)
  values
    ("soap", "5.75", "22");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("paper", "3.25", "78");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("toothbrush", "4.50", "54");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("towel", "12.30", "9");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("shirt", "14.60", "40");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("spoon", "4.15", "95");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("pillow", "8.90", "63");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("blanket", "15.75", "47");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("bread", "3.60", "29");

  insert into products
    (product_name, price, stock_quantity)
  values
    ("ketchup", "4.75", "12");