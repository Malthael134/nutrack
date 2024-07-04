DO $$ BEGIN
 CREATE TYPE "public"."measurement_type" AS ENUM('mass', 'volume', 'quantity');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."user_state" AS ENUM('active', 'deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_account" (
	"user_id" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "nutrack_account_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_authenticator" (
	"credential_id" text NOT NULL,
	"user_id" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"credential_public_key" text NOT NULL,
	"counter" integer NOT NULL,
	"credential_device_type" text NOT NULL,
	"credential_backed_up" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "nutrack_authenticator_user_id_credential_id_pk" PRIMARY KEY("user_id","credential_id"),
	CONSTRAINT "nutrack_authenticator_credential_id_unique" UNIQUE("credential_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_nutrient" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"entry_owner_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_session" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nutrack_user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"email_verified" timestamp,
	"image" text,
	"state" "user_state" DEFAULT 'active' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nutrack_account" ADD CONSTRAINT "nutrack_account_user_id_nutrack_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."nutrack_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nutrack_authenticator" ADD CONSTRAINT "nutrack_authenticator_user_id_nutrack_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."nutrack_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nutrack_nutrient" ADD CONSTRAINT "nutrack_nutrient_entry_owner_id_nutrack_user_id_fk" FOREIGN KEY ("entry_owner_id") REFERENCES "public"."nutrack_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nutrack_session" ADD CONSTRAINT "nutrack_session_user_id_nutrack_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."nutrack_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
