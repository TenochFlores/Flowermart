DROP TABLE IF EXISTS product;

CREATE TABLE product(
    product_id INT NOT NULL AUTO_INCREMENT,
    gtin CHAR(13) UNIQUE NOT NULL,
    product VARCHAR(100) NOT NULL,
    description TEXT,
    price FLOAT NOT NULL,
    stock INT NOT NULL,
    category_id INT NOT NULL,
    status TINYINT NOT NULL,
    PRIMARY KEY (product_id),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

INSERT INTO product VALUES(1,'7506584236987','Ray Ban Aviador color dorado','Lentes de sol Ray-Ban elaborados en metal color dorado con monturas estilo aviador, micas en tono negro, almohadillas ajustables y varillas delgadas con detalles a contraste.',4699.00,100,1,1);
INSERT INTO product VALUES(2,'7503216584688','Ray Ban Nylon color negro','Lentes de sol Ray-Ban elaborados en nylon color negro con monturas cuadradas, micas ahumadas en tono verde y nombre de la marca en varillas; Los lentes de sol icónicos son una declaración de pertenencia, estilo y actitud. Inspírate en las nuevas formas y nuevos conceptos en lentes de sol con diferentes colores, materiales y estilos.',2299.00,100,1,1);

SELECT * FROM product;