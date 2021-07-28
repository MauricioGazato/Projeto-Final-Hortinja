const Double = require('mongodb').Double
//Função para converter para Double
const safeDouble = valor => {
    try {
        const convertedValue = Double(valor)

        return convertedValue
    } catch (error) {
        return false
    }
}

module.exports = safeDouble