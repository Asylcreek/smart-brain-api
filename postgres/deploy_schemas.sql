-- Deploy fresh database tables and seed data

\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'