CREATE TABLE product (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    url_image VARCHAR (255),
    price FLOAT NOT NULL, 
    discount INT, 
    category INT NOT NULL);