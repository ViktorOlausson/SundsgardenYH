/* CREATE */

CREATE TABLE Players(
	id INTEGER PRIMARY KEY,
	name VARCHAR,
	join_date DATE
)

CREATE TABLE Games(
	id INTEGER PRIMARY KEY,
	title VARCHAR,
	gerne VARCHAR
)

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
)

/* SELECT EVERYTHING */

SELECT * FROM Players

SELECT * FROM Games

SELECT * FROM Scores
