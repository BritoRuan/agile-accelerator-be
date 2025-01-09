/*
  Warnings:

  - You are about to drop the column `categoria` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `qtdEstoque` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoria",
DROP COLUMN "nome",
DROP COLUMN "preco",
DROP COLUMN "qtdEstoque",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "stockQuantity" INTEGER NOT NULL;
