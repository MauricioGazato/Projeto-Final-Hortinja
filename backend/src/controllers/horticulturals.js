const methods = {
    async list(request, response){
        response.status(200).json({
            'name':'Tomate',
            'shade':'Vermelho',
            'image':'https://belezaesaude.com/i/730/56/tomate.jpg',
            'Description':'Isso é um tomate',
            'Category_id':'1',
            'average_price':'5.99',
            'Measurement':'Kg'
        })
    }
}

module.exports = methods