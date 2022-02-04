const ServerRepository = require("../../src/core/Repository/ServerRepository");

test("Table name of Server Repository", ()=>{
    const serverRepository = new ServerRepository();
    expect(serverRepository.tableName).toBe("server");
}); 