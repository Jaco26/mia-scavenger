CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	username VARCHAR,
	user_role INT,
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
	cover_art_id INT references art ON DELETE CASCADE
);

CREATE TABLE playlist_art
(
	id SERIAL PRIMARY KEY,
	playlist_id INT references playlists ON DELETE CASCADE,
	art_id INT references art ON DELETE CASCADE,
	playlist_order INT
);
