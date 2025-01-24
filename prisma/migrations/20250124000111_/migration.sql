-- CreateTable
CREATE TABLE "Pays" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "employment_type" TEXT NOT NULL,
    "fixed_salary" INTEGER,
    "hour_wage" INTEGER,
    "overtime_pay" INTEGER,
    "payment_date" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pays_pkey" PRIMARY KEY ("id")
);
