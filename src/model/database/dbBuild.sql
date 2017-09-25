BEGIN;

DROP TABLE IF EXISTS users,posts,comments,skills,accounts CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(1000) NOT NULL UNIQUE,
  name VARCHAR(1000),
  email VARCHAR(1000),
  bio VARCHAR(2000),
  campus VARCHAR(10),
  cohortnum INT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(50) NOT NULL,
  context VARCHAR(5000) NOT NULL
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id),
  user_id INTEGER REFERENCES users(id),
  context VARCHAR(2000) NOT NULL
);

CREATE TABLE skills(
  id SERIAL PRIMARY KEY,
  skill VARCHAR(30) NOT NULL,
  skillvalue INTEGER,
  user_id INTEGER REFERENCES users(id)
);


CREATE TABLE accounts(
  id SERIAL PRIMARY key,
  user_id INTEGER REFERENCES users(id),
  socail_network VARCHAR(20),
  link VARCHAR(1000)
);

INSERT INTO users (username,name,email,bio,campus,cohortnum) VALUES
('abd','Abdullah','abd@halees.com', 'halees bio','gaza', 2),
('madhoun','Mahmoud','mahmoud@madhoun.com', 'madhoun bio','gaza', 2),
('wadia','Mwadia','mahmoud@wadia.com', 'wadia bio','gaza', 2);


INSERT INTO posts (user_id,title,context) VALUES
(1,'firstPost','firstPostContext'),
(2,'secondPost','secondPostContext'),
(3,'thirdPost','thirdPostContext');


INSERT INTO comments (post_id,user_id,context) VALUES
(1,1,'firstContextComment'),
(2,2,'secondContextComment'),
(3,3,'thirdContextComment');


INSERT INTO skills (skill,skillvalue,user_id) VALUES
('JS',90, 1),
('CSS',40, 1),
('HTML',80, 1);


INSERT INTO accounts (user_id,socail_network,link) VALUES
(1,'facebook','www.facebook.com/1'),
(2,'facebook','www.facebook.com/2'),
(3,'facebook','www.facebook.com/3');


COMMIT;