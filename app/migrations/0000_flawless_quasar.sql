CREATE TABLE IF NOT EXISTS "nutrack_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	CONSTRAINT "nutrack_user_name_unique" UNIQUE("name")
);
