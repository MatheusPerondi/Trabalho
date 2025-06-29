/*
  Warnings:

  - You are about to drop the `people` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "people";

-- DropEnum
DROP TYPE "Gender";

-- CreateTable
CREATE TABLE "model" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "model_pkey" PRIMARY KEY ("id")
);
