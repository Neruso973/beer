-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `_BeerToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BeerToUser_AB_unique`(`A`, `B`),
    INDEX `_BeerToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BeerToUser` ADD FOREIGN KEY (`A`) REFERENCES `Beer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BeerToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
