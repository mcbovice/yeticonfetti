class TableNameException extends Error {
    constructor() {
        super("Table name is not defined.");
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = TableNameException;