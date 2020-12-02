const Admin = require('./models/admin')
const Plus = require('./plus')
const DBConnection = require('./models/DBConnection')

console.log(Admin.showUser)
console.log(Plus.plus(5, 6))

let db = new DBConnection
db.connect()