import { ObjectId } from "mongodb"
import { getCollection } from "../config/mongoDb"


export type Favourite = {
    _id: ObjectId
    userId: ObjectId
    quoteId: ObjectId
    createdAt: Date
    updatedAt: Date
}


class FavouriteModel {

    static collection() {
        return getCollection('wishlists')
    }
    static async create(payload: {userId: string, quoteId: string}) {
        try {
            const newFavourite = {
                userId: new ObjectId(payload.userId),
                quoteId: new ObjectId(payload.quoteId),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            const favourite = await this.collection().insertOne(newFavourite)
            return {
                _id: favourite.insertedId,
                ...newFavourite,
            } as Favourite
        } catch (error) {
            console.log(error);
        }
    }  
    
    static async delete(quoteId : string){
        try {
            return await this.collection().deleteOne({quoteId: new ObjectId(quoteId)})
        } catch (error) {
            console.log(error);
        }
    }

 
}

export default FavouriteModel