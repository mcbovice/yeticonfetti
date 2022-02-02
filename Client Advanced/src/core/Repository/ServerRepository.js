var Repository = require("../Lib/Repository/Repository");

class ServerRepository extends Repository{
    constructor(){
        super("server");
    }
}

module.exports = ServerRepository;