const httpStatus = require('http-status')
const {Category} = require('../models')

const methods = {
    async list(request, response) {
       const category = new Category()

       try {
           const categories = await category.list()

           response.status(httpStatus.OK).json(categories)
       } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
       }
    },

    async create(request, response) {
        const {name} = request.body

        const category = new Category()

        if(!name){
            return response.status(httpStatus.BAD_REQUEST).json({error: 'The field "name" is required'})
        }

        try {
            const insertedObject = await category.insertOne({name, createdAt: Date.now(), updatedAt: Date.now()})

            response.status(httpStatus.CREATED).json(insertedObject)
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    }
}

module.exports = methods