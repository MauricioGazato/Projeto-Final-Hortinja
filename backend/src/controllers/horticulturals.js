const httpStatus = require('http-status')
const {Horticultural} = require('../models')
const {safeObject, safeObjectId} = require('../helpers')

const methods = {

    async list(request, response) {
       const horticultural = new Horticultural()

       try {
           const horticulturals = await horticultural.list({deletedAt: {$exists: false}})

           response.status(httpStatus.OK).json(horticulturals)
       } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
       }
    },

    async create(request, response) {
        const {name, shade, image, description, category_id, average_price, measurement} = request.body

        const horticultural = new Horticultural()

        if(!name || !image || !category_id || !average_price || !measurement){ 
            return response.status(httpStatus.BAD_REQUEST).json({error: 'The fields "name", "image", "category_id", "average_price" and "Measurement" are both required'})
        }

        try {
            const insertedObject = await horticultural.insertOne({name, shade, image, description, category_id, average_price,
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
        const {name, shade, image, description, category_id, average_price, measurement} = request.body
        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        if(!name || !shade || !image || !description || !category_id || !average_price || !measurement){ 
            return response.status(httpStatus.BAD_REQUEST).json({error: 'All fields are required'})
        }

        try {
            const updatedObject = await horticultural.updateOne({ _id:convertedObjectId }, {name, shade, image, description, category_id, 
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