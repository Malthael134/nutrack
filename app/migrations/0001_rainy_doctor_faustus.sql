ALTER TABLE "nutrack_nutrient" DROP CONSTRAINT "nutrack_nutrient_entry_owner_id_nutrack_user_id_fk";
--> statement-breakpoint
ALTER TABLE "nutrack_nutrient" ADD COLUMN "measurement_type" "measurement_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "nutrack_nutrient" DROP COLUMN IF EXISTS "entry_owner_id";