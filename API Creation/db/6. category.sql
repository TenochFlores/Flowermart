DROP TABLE IF EXISTS category;

CREATE TABLE category(
    category_id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(100) UNIQUE NOT NULL,
    acronym VARCHAR(100) UNIQUE NOT NULL,
    status TINYINT NOT NULL,
    PRIMARY KEY (category_id)
);

INSERT INTO category(category,acronym,status) VALUES("Lentes","Lts",1);
INSERT INTO category(category,acronym,status) VALUES("Relojes","Rls",1);

SELECT * FROM category;