-- CreateTable
CREATE TABLE "time_records" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "yearMonth" TEXT NOT NULL,
    "totalWorkHours" DOUBLE PRECISION NOT NULL,
    "monthlySalary" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "time_records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "time_records" ADD CONSTRAINT "time_records_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
