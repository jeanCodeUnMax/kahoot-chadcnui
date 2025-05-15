/*
  Warnings:

  - Added the required column `endAt` to the `SessionQuizz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `SessionQuizz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SessionQuizz" ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;
