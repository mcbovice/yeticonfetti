var TableNameException = require("../../Exception/TableNameException");

class Repository{
    constructor(tableName = ""){
        this.tableName = tableName;

        this.#_init();
    }

    #_init(){
        this.#_checkTableName();
    }

    #_checkTableName(){
        if(this.#_existTableName()) this.tableName = this.tableName.toLowerCase();
        else this.#_errorToExistTableName();
    }

    #_errorToExistTableName(){
        new TableNameException();
    }

    #_existTableName(){
        return this.tableName !== "";
    }
}

module.exports = Repository;