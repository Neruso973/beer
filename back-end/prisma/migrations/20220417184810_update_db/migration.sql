/*
  Warnings:

  - You are about to drop the column `Timer` on the `Houblon` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Houblon` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Malt` table. All the data in the column will be lost.
  - You are about to drop the `Other` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Houblon` DROP COLUMN `Timer`,
    DROP COLUMN `quantity`;

-- AlterTable
ALTER TABLE `Malt` DROP COLUMN `quantity`;

-- DropTable
DROP TABLE `Other`;
