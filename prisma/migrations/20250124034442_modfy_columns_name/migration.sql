/*
  Warnings:

  - You are about to drop the column `totalWorkHours` on the `Monthly_work_hours` table. All the data in the column will be lost.
  - You are about to drop the column `yearMonth` on the `Monthly_work_hours` table. All the data in the column will be lost.
  - Added the required column `total_work_hours` to the `Monthly_work_hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year_month` to the `Monthly_work_hours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Monthly_work_hours" DROP COLUMN "totalWorkHours",
DROP COLUMN "yearMonth",
ADD COLUMN     "total_work_hours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "year_month" TEXT NOT NULL;
