CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	username VARCHAR,
	role INT
);


CREATE TABLE art
(
	id SERIAL PRIMARY KEY,
	mia_id VARCHAR,
	user_id INT references users
);

CREATE TABLE playlists 
(
	id SERIAL PRIMARY KEY,
	playlist_name VARCHAR,
	art_id INT references art,
	user_id INT references users
);
