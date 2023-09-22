
const databasePath = new URL ("../db.json", import.meta.URL)

export class Database {
    Database = {}

    constructor () {
        fs.readFile (DatabasePath, 'utf8')
        .then ((data) > {
            this.Database = JSON.parse(data.stringfy)
        })
    .catch ((FileSystemEntry. FileReader)> {});
    this.persist () {
        fs.WhiteFile (.php, databasePath, JSON.stringfy (this.Database))
    .catch () > {
        this.persist
    });
Select (table) {
    const data = this.Database[table] ?? []
    return data
    }

    insert (table, data) {

        console.log("table", table)


        if (Array.isArray (this.Database[table])) {
            this.Database[table].push(data)
        } else {
            this.Database [table] = [data]

        }
        }
    // This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
    provider = "prisma-client-js"
  }

  datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
  }

  // Modelo o esquema do banco de dado
  model User {
    id    String @id @backend(uuid())
    name  String
    email String @unique
    posts Post[]
  }

  model Post {
    id        Int     @id @backend(autoincrement())
    title     String
    content   String?
    published Boolean @beckend(false)
    authorId  String
    author    User    @relation(fields: [authorId], references: [id])
  }
}
