const httpStatus = require('http-status')
const {Horticultural} = require('../models')
const {safeObjectId, safeDouble} = require('../helpers')

const methods = {

    async list(request, response) {
       const horticultural = new Horticultural()

       try {
           const horticulturals = await horticultural.aggregate([
              { $match: { deletedAt: { $exists: false } } },
              {
                  $lookup: {
                      from: 'categories',
                      localField: 'categoryId',
                      foreignField: '_id',
                      as: 'category'
                  }
              },
            ],{createdAt: -1})

           response.status(httpStatus.OK).json(horticulturals)
           console.log(horticulturals.length)
       } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
       }
    },

    async create(request, response) {
        const {name, shade, image, description, categoryId, average_price, measurement} = request.body

        const horticultural = new Horticultural()

        if(!name || !image || !categoryId || !average_price || !measurement){ 
            return response.status(httpStatus.BAD_REQUEST).json({error: 'The fields "name", "image", "categoryId", "average_price" and "Measurement" are both required'})
        }

        try {
            const insertedObject = await horticultural.insertOne({name, shade, image, description, categoryId: safeObjectId(categoryId), average_price: safeDouble(average_price),
                                                                  measurement, createdAt: Date.now(), updatedAt: Date.now()})

            response.status(httpStatus.CREATED).json(insertedObject)
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async show(request, response){
        const {id} = request.params
        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        try {
            const horticulturalToReturn = await horticultural.findOne({ _id: convertedObjectId })
            response.status(httpStatus.OK).json(horticulturalToReturn)
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async update(request, response){
        const {id} = request.params
        const {name, shade, image, description, categoryId, average_price, measurement} = request.body
        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        if(!name || !image || !categoryId || !average_price || !measurement){ 
            return response.status(httpStatus.BAD_REQUEST).json({error: 'The fields "name", "image", "categoryId", "average_price" and "Measurement" are both required'})
        }
        try {
            const updatedObject = await horticultural.updateOne({ _id:convertedObjectId }, {name, shade, image, description, categoryId, 
                                                                  average_price, measurement, updatedAt: Date.now()})

            response.status(httpStatus.OK).json(updatedObject)
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }

    },

    async destroy(request, response){
        const {id} = request.params
        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        try {
            const destroyedObject = await horticultural.updateOne({ _id:convertedObjectId }, {deletedAt: Date.now()})

            response.status(httpStatus.NO_CONTENT).json()
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    }
}

module.exports = methods