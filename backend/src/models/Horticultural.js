const Database = require('./Database')

class Horticultural extends Database{
    constructor(params = {}){
        super()
        this.collection =  'horticulturals'
    }
}

module.exports = Horticultural