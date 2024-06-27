DROP TABLE IF EXISTS product_image;

CREATE TABLE product_image(
	product_image_id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    image TEXT NOT NULL,
    status TINYINT NOT NULL,
    PRIMARY KEY (product_image_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

INSERT INTO `product_image` VALUES (1,1,'1\\img_1709330658244.png',1),(2,1,'1\\img_1709330666815.png',1),(3,1,'1\\img_1709330677057.png',1);
INSERT INTO `product_image` VALUES (4,2,'2\\img_1709330695773.png',1),(5,2,'2\\img_1709330702416.png',1),(6,2,'2\\img_1709330708322.png',1);

SELECT * FROM product_image;