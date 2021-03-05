BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Boro', 'test1@gmail.com', 2, '2021-03-01');
INSERT into login (hash, email) values ('$2a$10$bPh90KLsO15hPp7wwpkgfOI73wL6Get4DupNZJEcjdVfwsEa81ZVO', 'test1@gmail.com');

COMMIT;