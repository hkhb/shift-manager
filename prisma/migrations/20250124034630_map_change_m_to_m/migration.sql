/*
  Warnings:

  - You are about to drop the `Apis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Monthly_work_hours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Apis" DROP CONSTRAINT "Apis_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Monthly_work_hours" DROP CONSTRAINT "Monthly_work_hours_user_id_fkey";

-- DropTable
DROP TABLE "Apis";

-- DropTable
DROP TABLE "Monthly_work_hours";

-- CreateTable
CREATE TABLE "monthly_work_hours" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "year_month" TEXT NOT NULL,
    "total_work_hours" DOUBLE PRECISION NOT NULL,
    "monthly_salary" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "monthly_work_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apis" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "apis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monthly_work_hours" ADD CONSTRAINT "monthly_work_hours_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apis" ADD CONSTRAINT "apis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
