DO $$ BEGIN
 CREATE TYPE "public"."provider" AS ENUM('github');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_session" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"user_id" varchar(100) NOT NULL,
	"expires_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_user" (
	"id" varchar(100) NOT NULL,
	"provider" "provider" NOT NULL,
	"provider_id" varchar(255) NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL,
	"email" varchar(100) NOT NULL,
	CONSTRAINT "nutrack_user_provider_provider_id_pk" PRIMARY KEY("provider","provider_id"),
	CONSTRAINT "nutrack_user_id_unique" UNIQUE("id"),
	CONSTRAINT "nutrack_user_email_unique" UNIQUE("email")
);
