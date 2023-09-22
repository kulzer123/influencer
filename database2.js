import js from 'node.js/promises":

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
}
