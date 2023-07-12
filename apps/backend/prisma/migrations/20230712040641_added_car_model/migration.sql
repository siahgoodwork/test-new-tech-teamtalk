-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "year" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_id_key" ON "Car"("id");
