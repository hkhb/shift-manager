/*
  Warnings:

  - You are about to drop the column `createdAt` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `filePath` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `fileSize` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `fileType` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `sendDate` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `tagId` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `fileId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `sendDate` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `employmentType` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `fixedSalary` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `hourWage` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `overtimePay` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `paymentDate` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `pays` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tags` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tags` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `monthlySalary` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `totalWorkHours` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `yearMonth` on the `time_records` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isInitinalPassword` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `pays` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiver_id` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `send_date` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_id` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag_id` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiver_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `send_date` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment_type` to the `pays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `pays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `pays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `tags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthly_salary` to the `time_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_work_hours` to the `time_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `time_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `time_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year_month` to the `time_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "files" DROP CONSTRAINT "files_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "files" DROP CONSTRAINT "files_senderId_fkey";

-- DropForeignKey
ALTER TABLE "files" DROP CONSTRAINT "files_statusId_fkey";

-- DropForeignKey
ALTER TABLE "files" DROP CONSTRAINT "files_tagId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_fileId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_senderId_fkey";

-- DropForeignKey
ALTER TABLE "pays" DROP CONSTRAINT "pays_userId_fkey";

-- DropForeignKey
ALTER TABLE "time_records" DROP CONSTRAINT "time_records_userId_fkey";

-- DropIndex
DROP INDEX "messages_senderId_key";

-- DropIndex
DROP INDEX "pays_userId_key";

-- AlterTable
ALTER TABLE "files" DROP COLUMN "createdAt",
DROP COLUMN "filePath",
DROP COLUMN "fileSize",
DROP COLUMN "fileType",
DROP COLUMN "isDeleted",
DROP COLUMN "receiverId",
DROP COLUMN "sendDate",
DROP COLUMN "senderId",
DROP COLUMN "statusId",
DROP COLUMN "tagId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "file_path" TEXT,
ADD COLUMN     "file_size" INTEGER,
ADD COLUMN     "file_type" TEXT,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "receiver_id" INTEGER NOT NULL,
ADD COLUMN     "send_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sender_id" INTEGER NOT NULL,
ADD COLUMN     "status_id" INTEGER NOT NULL,
ADD COLUMN     "tag_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "createdAt",
DROP COLUMN "fileId",
DROP COLUMN "isDeleted",
DROP COLUMN "receiverId",
DROP COLUMN "sendDate",
DROP COLUMN "senderId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "file_id" INTEGER NOT NULL,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "receiver_id" INTEGER NOT NULL,
ADD COLUMN     "send_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sender_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pays" DROP COLUMN "createdAt",
DROP COLUMN "employmentType",
DROP COLUMN "fixedSalary",
DROP COLUMN "hourWage",
DROP COLUMN "isDeleted",
DROP COLUMN "overtimePay",
DROP COLUMN "paymentDate",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "employment_type" TEXT NOT NULL,
ADD COLUMN     "fixed_salary" INTEGER,
ADD COLUMN     "hour_wage" INTEGER,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "overtime_pay" INTEGER,
ADD COLUMN     "payment_date" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "status" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "tags" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "time_records" DROP COLUMN "createdAt",
DROP COLUMN "isDeleted",
DROP COLUMN "monthlySalary",
DROP COLUMN "totalWorkHours",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
DROP COLUMN "yearMonth",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "monthly_salary" INTEGER NOT NULL,
ADD COLUMN     "total_work_hours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD COLUMN     "year_month" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "isAdmin",
DROP COLUMN "isDeleted",
DROP COLUMN "isInitinalPassword",
DROP COLUMN "lastName",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_initinal_password" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "phone_number" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Monthly_work_hours" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "yearMonth" TEXT NOT NULL,
    "totalWorkHours" DOUBLE PRECISION NOT NULL,
    "monthly_salary" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Monthly_work_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apis" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pays_user_id_key" ON "pays"("user_id");

-- AddForeignKey
ALTER TABLE "pays" ADD CONSTRAINT "pays_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_records" ADD CONSTRAINT "time_records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monthly_work_hours" ADD CONSTRAINT "Monthly_work_hours_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apis" ADD CONSTRAINT "Apis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
