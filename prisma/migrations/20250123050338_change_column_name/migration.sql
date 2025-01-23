/*
  Warnings:

  - You are about to drop the column `is_deleted` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "is_deleted",
DROP COLUMN "phone_number",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phoneNumber" INTEGER;
