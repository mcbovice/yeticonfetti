var Model = require("../Lib/Model/Model");

class Server extends Model{
    constructor(id, name, type, port, online, maxPlayer, minRank, maxRank){
        super();

        this.id = id;
        this.name = name;
        this.type = type;
        this.port = port;
        this.online = online;
        this.maxPlayer = maxPlayer;
        this.minRank = minRank;
        this.maxRank = maxRank;
    }
}

module.exports = Server;