/* CREATE */

CREATE TABLE Players(
	id INTEGER PRIMARY KEY,
	name VARCHAR,
	join_date DATE
);

CREATE TABLE Games(
	id INTEGER PRIMARY KEY,
	title VARCHAR,
	gerne VARCHAR
);

CREATE TABLE Scores(
	id INTEGER PRIMARY KEY,
	player_id INTEGER,
	game_id INTEGER,
	score INTEGER,
	date_played DATE,
	
	CONSTRAINT fk_user
		FOREIGN KEY (player_id)
		REFERENCES Players(id),
	
	CONSTRAINT fk_game
		FOREIGN KEY (game_id)
		REFERENCES Games(id)
);

ALTER TABLE Players
ALTER COLUMN join_date TYPE TIMESTAMPTZ
USING join_date::timestamp AT TIME ZONE 'Europe/Stockholm';

ALTER TABLE Players
ALTER COLUMN join_date SET DEFAULT CURRENT_TIMESTAMP;

/* SELECT EVERYTHING */

SELECT * FROM Players;

SELECT * FROM Games;

SELECT * FROM Scores;

/* INSERT DATA */

INSERT INTO Players (id, name, join_date) VALUES
(1, 'Alice', '2026-01-10'),
(2, 'Bob', '2026-02-18'),
(3, 'Charlie', '2026-03-02'),
(4, 'Diana', '2025-04-05');

INSERT INTO Players (id, name, join_date) VALUES
(5, 'Agnes', '2025-11-10'),
(6, 'Bobby', '2025-12-15'),
(7, 'Isabelle', '2025-09-02'),
(8, 'Karl', '2025-07-15'),

INSERT INTO Players (id, name, join_date) VALUES
(10, 'Alice', '2016-01-10'),
(20, 'Bob', '2021-02-18'),
(30, 'Charlie', '2023-03-02'),
(40, 'Diana', '2022-04-05');

INSERT INTO Games (id, title, gerne) VALUES
(1, 'Space Invaders', 'Arcade'),
(2, 'Chess Master', 'Strategy'),
(3, 'Speed Racer', 'Racing'),
(4, 'Dungeon Quest', 'RPG');

INSERT INTO Scores (id, player_id, game_id, score, date_played) VALUES
(1, 1, 1, 1500, '2025-01-05'),
(2, 2, 1, 1200, '2025-01-06'),
(3, 1, 2, 900, '2025-01-07'),
(4, 3, 3, 2000, '2025-01-08'),
(5, 4, 4, 1750, '2025-01-09'),
(6, 2, 3, 1600, '2025-01-10'),
(7, 3, 2, 1100, '2025-01-11');

/* JOIN */

SELECT p.name, s.score, g.title
FROM Players AS p
INNER JOIN Scores AS s
ON p.id = s.player_id
INNER JOIN Games AS g
ON g.id = s.game_id;


SELECT p.name, SUM(s.score) AS total_score
FROM Players AS p
INNER JOIN Scores AS s
ON p.id = s.player_id
GROUP BY p.id, p.name
ORDER BY total_score DESC
LIMIT 3;

SELECT p.id, p.name
FROM Players as p
LEFT OUTER JOIN Scores as s
on p.id = s.player_id
WHERE s.player_id IS NULL;

SELECT g.gerne, COUNT(*) AS play_count
FROM Scores AS s
INNER JOIN Games AS g
ON s.game_id = g.id
GROUP BY g.gerne
ORDER BY play_count DESC
LIMIT 1;
