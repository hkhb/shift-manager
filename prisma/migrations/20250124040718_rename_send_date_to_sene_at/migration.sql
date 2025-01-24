/*
  Warnings:

  - You are about to drop the column `send_date` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `send_date` on the `messages` table. All the data in the column will be lost.
  - Added the required column `send_at` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `send_at` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "files" DROP COLUMN "send_date",
ADD COLUMN     "send_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "send_date",
ADD COLUMN     "send_at" TIMESTAMP(3) NOT NULL;
