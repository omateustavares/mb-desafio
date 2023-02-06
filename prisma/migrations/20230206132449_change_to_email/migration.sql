/*
  Warnings:

  - You are about to drop the column `user_id` on the `user_events` table. All the data in the column will be lost.
  - Added the required column `email_user` to the `user_events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_events` DROP COLUMN `user_id`,
    ADD COLUMN `email_user` VARCHAR(191) NOT NULL;
