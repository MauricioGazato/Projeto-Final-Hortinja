const methods = {
    async list(request, response) {
        response.status(200).json({
            name: 'Diversos - Funcionou'
        })
    }
}

module.exports = methods