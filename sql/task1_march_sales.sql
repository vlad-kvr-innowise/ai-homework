-- Task 1: Calculate the total sales volume for March 2024
SELECT SUM(amount) as march_sales 
FROM orders 
WHERE strftime('%Y-%m', order_date) = '2024-03'; 