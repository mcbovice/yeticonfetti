var DataBaseMySQL = require("../DB/DataBaseMySQL");
var Server = require("../Model/Server");

class ServerRepository{
    constructor(){
        this.tableName = "server";
        this.db = new DataBaseMySQL();
    }

    async findAll(){
        const servers = await this.db.findAll(this.tableName);
        return servers.map(server => new Server(server));
    }
}

module.exports = ServerRepository;