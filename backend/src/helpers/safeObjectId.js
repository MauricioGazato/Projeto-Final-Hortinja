const ObjectId = require('mongodb').ObjectId
//Função para converter para ObjectId
const safeObjectId = id => {
    try {
        const convertedId = ObjectId(id)

        return convertedId
    } catch (error) {
        return false
    }
}

module.exports = safeObjectId