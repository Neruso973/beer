/*
  Warnings:

  - Added the required column `Timer` to the `Houblon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Houblon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Malt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Houblon` ADD COLUMN `Timer` INTEGER NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Malt` ADD COLUMN `quantity` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Other` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `Unity` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
