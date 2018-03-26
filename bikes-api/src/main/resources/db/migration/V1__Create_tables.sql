CREATE TABLE users (
    id serial,
    username VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE cars (
    id serial,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    miles INT NOT NULL,
    description TEXT,
    picture_urls TEXT [],
    owner VARCHAR(100) NOT NULL,
    price FLOAT(2) NOT NULL
);
CREATE TABLE bikes (
    id serial,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    miles INT NOT NULL,
    description TEXT,
    picture_urls TEXT [],
    owner VARCHAR(100) NOT NULL,
    price FLOAT(2) NOT NULL
);