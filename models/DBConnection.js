class DBConnection {
    constructor() {
        console.log('new db connection.')
    }

    connect(){
        console.log('connect.')
    }

    disconnect(){
        console.log('disconnect.')
    }
}

module.exports = DBConnection