-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(10) NOT NULL,
    "libraryId" INTEGER NOT NULL,
    "lastBookId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Library" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "author" VARCHAR(20),
    "name" VARCHAR(50) NOT NULL,
    "content" TEXT NOT NULL,
    "lastPosition" INTEGER,
    "length" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_libraryId_key" ON "User"("libraryId");

-- CreateIndex
CREATE UNIQUE INDEX "User_lastBookId_key" ON "User"("lastBookId");

-- CreateIndex
CREATE UNIQUE INDEX "Library_bookId_key" ON "Library"("bookId");

