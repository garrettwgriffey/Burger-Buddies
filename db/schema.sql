DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger;

USE burger;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("turkey burger");