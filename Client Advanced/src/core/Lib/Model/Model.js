class Model{
    constructor(){

    }

    fromJson(json){
        json.forEach(function(element){
            this[element.name] = element.value;
        });
    }

    // make function to hashmap and ignore the property id
    toHashMap(){
        var hashMap = {};
        for(var property in this){
            if(property != "id"){
                hashMap[property] = this[property];
            }
        }
        return hashMap;
    }
}

module.exports = Model;