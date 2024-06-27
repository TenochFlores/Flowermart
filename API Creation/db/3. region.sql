DROP TABLE IF EXISTS region;

CREATE TABLE region(
	region_id INT NOT NULL AUTO_INCREMENT,
    region VARCHAR(100) UNIQUE NOT NULL,
    code VARCHAR(100) UNIQUE NOT NULL,
    status TINYINT NOT NULL,
    PRIMARY KEY (region_id)
);

INSERT INTO region(region,code,status) VALUES("Norte","N",1);
INSERT INTO region(region,code,status) VALUES("Sur","S",1);
INSERT INTO region(region,code,status) VALUES("Noroeste","NE",0);

SELECT * FROM region;