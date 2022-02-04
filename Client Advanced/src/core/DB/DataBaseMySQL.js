require("dotenv").config();

var mysql = require("mysql2/promise");

class DataBaseMySQL{    
    constructor(){
        this.connection = null;
        this.host = process.env.DB_HOST;
        this.user = process.env.DB_USER;
        this.password = process.env.DB_PASSWORD;
        this.database = process.env.DB_DATABASE;
        this.connectionLimit = process.env.DB_CONNECTION_LIMIT; 
        this.connection = mysql.createPool({
            connectionLimit: self.connectionLimit,
            host: self.host,
            user: self.user,
            password: self.password,
            database: self.database,
        });
    }

    async findAll(tableName){
        return this.query("SELECT * FROM " + tableName);
    }

    async findById(tableName, id){
        return this.query("SELECT * FROM " + tableName + " WHERE id = ?", [id]);
    }

    async insert(tableName, data){
        return this.query("INSERT INTO " + tableName + " SET ?", data);
    }

    async update(tableName, data, id){
        return this.query("UPDATE " + tableName + " SET ? WHERE id = ?", [data, id]);
    }

    async delete(tableName, id){
        return this.query("DELETE FROM " + tableName + " WHERE id = ?", [id]);
    }

    async query(query, params = []){
        var self = this;
        return new Promise((resolve, reject) => {
            self.connection
            .getConnection()
            .then(function(connection){
                connection.query(query, params)
                .then(function(results){
                    connection.release();
                    resolve(results);
                })
                .catch(function(error){
                    connection.release();
                    reject(error);
                });
            })
            .catch(function(err){
                reject(err);
            });    
        });
    }
}

module.exports = DataBaseMySQL;