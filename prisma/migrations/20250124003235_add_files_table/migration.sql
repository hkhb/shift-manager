-- CreateTable
CREATE TABLE "Pays" (
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

    CONSTRAINT "Pays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
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

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);
