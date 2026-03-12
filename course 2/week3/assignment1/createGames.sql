CREATE TABLE playstation(
id SERIAL PRIMARY KEY,
title VARCHAR NOT NULL,
year INTEGER,
developer VARCHAR,
genre VARCHAR
)

SELECT * FROM playstation

INSERT INTO playstation(title, year, developer, genre) 
VALUES
	('hogwarts legacy', 2023, 'Avalanche Software', 'Action role-playing'),
	('minecraft', 2011, 'Mojang Studios', 'Sandbox, survival'),
	('GTA 5', 2013, 'Rockstar North', 'Action-adventure');

SELECT * FROM playstation WHERE id = 2

UPDATE playstation SET year = 2012 WHERE id = 2

DELETE FROM playstation WHERE id = 3

DROP TABLE playstation