CREATE TABLE IF NOT EXISTS "nutrack_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"joined_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
