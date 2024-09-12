/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Topico` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "icone" TEXT NOT NULL
);
INSERT INTO "new_Topico" ("icone", "id", "nome") SELECT "icone", "id", "nome" FROM "Topico";
DROP TABLE "Topico";
ALTER TABLE "new_Topico" RENAME TO "Topico";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
