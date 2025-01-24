-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "address" TEXT,
    "phoneNumber" INTEGER,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "isInitinalPassword" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pays" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "employmentType" TEXT NOT NULL,
    "fixedSalary" INTEGER,
    "hourWage" INTEGER,
    "overtimePay" INTEGER,
    "paymentDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,
    "deadline" TIMESTAMP(3),
    "filePath" TEXT,
    "fileSize" INTEGER,
    "fileType" TEXT,
    "statusId" INTEGER NOT NULL,
    "sendDate" TIMESTAMP(3) NOT NULL,
    "sender" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
