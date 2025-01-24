/*
  Warnings:

  - You are about to drop the column `sender` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `files` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `files` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "files" DROP CONSTRAINT "files_userId_fkey";

-- AlterTable
ALTER TABLE "files" DROP COLUMN "sender",
DROP COLUMN "userId",
ADD COLUMN     "receiverId" INTEGER NOT NULL,
ADD COLUMN     "senderId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
