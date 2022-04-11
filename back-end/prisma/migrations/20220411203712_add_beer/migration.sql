/*
  Warnings:

  - You are about to drop the column `type` on the `Houblon` table. All the data in the column will be lost.
  - You are about to drop the column `origin` on the `Levure` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Houblon` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `Levure` DROP COLUMN `origin`;

-- CreateTable
CREATE TABLE `Beer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `houblon` JSON NOT NULL,
    `malts` JSON NOT NULL,
    `other` JSON NOT NULL,
    `levure` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `etiquette` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
