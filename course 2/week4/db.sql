CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO user (name, email)
VALUES 
('TestUser_1', 'testuser1@gmail.com'),
('TestUser_2', 'testuser2@gmail.com')

CREATE TABLE athletes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    sport VARCHAR(50),
    age INT
);