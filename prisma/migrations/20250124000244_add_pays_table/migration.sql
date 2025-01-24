/*
  Warnings:

  - You are about to drop the column `employment_type` on the `Pays` table. All the data in the column will be lost.
  - You are about to drop the column `fixed_salary` on the `Pays` table. All the data in the column will be lost.
  - You are about to drop the column `hour_wage` on the `Pays` table. All the data in the column will be lost.
  - You are about to drop the column `is_deleted` on the `Pays` table. All the data in the column will be lost.
  - You are about to drop the column `overtime_pay` on the `Pays` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date` on the `Pays` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Pays` table. All the data in the column will be lost.
  - Added the required column `employmentType` to the `Pays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Pays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pays" DROP COLUMN "employment_type",
DROP COLUMN "fixed_salary",
DROP COLUMN "hour_wage",
DROP COLUMN "is_deleted",
DROP COLUMN "overtime_pay",
DROP COLUMN "payment_date",
DROP COLUMN "user_id",
ADD COLUMN     "employmentType" TEXT NOT NULL,
ADD COLUMN     "fixedSalary" INTEGER,
ADD COLUMN     "hourWage" INTEGER,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "overtimePay" INTEGER,
ADD COLUMN     "paymentDate" TIMESTAMP(3),
ADD COLUMN     "userId" INTEGER NOT NULL;
