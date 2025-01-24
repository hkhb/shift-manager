/*
  Warnings:

  - Added the required column `comment` to the `monthly_work_hours` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `year_month` on the `monthly_work_hours` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `total_work_hours` on the `monthly_work_hours` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "monthly_work_hours" ADD COLUMN     "comment" TEXT NOT NULL,
DROP COLUMN "year_month",
ADD COLUMN     "year_month" TIMESTAMP(3) NOT NULL,
DROP COLUMN "total_work_hours",
ADD COLUMN     "total_work_hours" TIMESTAMP(3) NOT NULL;
