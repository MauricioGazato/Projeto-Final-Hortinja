const MongoDB = require('mongodb')
const secrets = require('../../secrets.json')

const MongoClient = MongoDB.MongoClient
const MongoOptions = {useNewUrlParser: true, useUnifiedTopology: true}

class Database {
    //Criando Construtor
    constructor() {
        this.collection = ''
    }

    //O que tem o _ significa que sera usado apenas nessa classe
    async _getMongoClientAndCollection() {
        const MongoURI = secrets.mongoURI

        const client = await MongoClient.connect(MongoURI, MongoOptions)
        const database = client.db()
        const collection = database.collection(this.collection)

        //Retornando a conexão que foi aberta e a Collection
        return {client, collection}
    }

    //Criando as Funções do CRUD
    async insertOne(objectToInsert) {
        const {client, collection} = await this._getMongoClientAndCollection()

        try {
            //Inserindo na Collection o objeto recebido
            const document = await collection.insertOne(objectToInsert)

            client.close()

            return document
        } catch (error) {
            throw new Error(error)
        }
    }

    async list(params = {}, sort = {}) {
        const {client, collection} = await this._getMongoClientAndCollection()

        try {
            const documents = await collection.find(params).sort(sort).toArray()

            client.close()

            return documents
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateOne(queryFilter, newValues){
        const {client, collection} = await this._getMongoClientAndCollection()

        try {
            const document = await collection.findOneAndUpdate(queryFilter, {$set: newValues}, {returnDocument: 'after'})

            client.close()

            return document
        } catch (error) {
            throw new Error(error)
        }
    }

    async findOne(queryFilter){
        const {client, collection} = await this._getMongoClientAndCollection()

        try {
            const document = await collection.findOne(queryFilter)

            client.close()

            return document
        } catch (error) {
            throw new Error(error)
        }
    }

    async aggregate(query, sort = {}) {
        const {client, collection} = await this._getMongoClientAndCollection()

        try {
            const documents = await collection.aggregate(query).sort(sort).toArray()

            client.close()

            return documents
        } catch (error) {
            throw new Error(error)
        }
    }

}

module.exports = Database