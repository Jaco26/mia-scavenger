CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	username VARCHAR unique,
	password VARCHAR,
	user_role INT default 1,
	school VARCHAR,
	grade INT
);


CREATE TABLE art
(
	id SERIAL PRIMARY KEY,
	miapi_id VARCHAR,
	user_id INT references users ON DELETE CASCADE
);

CREATE TABLE playlists
(
	id SERIAL PRIMARY KEY,
	playlist_name VARCHAR,
	user_id INT references users ON DELETE CASCADE,
	cover_art_id INT references art ON DELETE CASCADE,
	art_ids TEXT[]
);