CREATE DATABASE likeme;
\c likeme ;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY UNIQUE, 
    titulo VARCHAR(25) NOT NULL, 
    img VARCHAR(1000) NOT NULL ,
    descripcion VARCHAR(255), 
    likes INT
);
