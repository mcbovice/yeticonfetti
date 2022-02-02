var DataBaseMySQL = require("../DB/DataBaseMySQL");

class ServerRepository{
    constructor(){
        this.tableName = "server";
        this.db = new DataBaseMySQL();
    }
}

module.exports = ServerRepository;