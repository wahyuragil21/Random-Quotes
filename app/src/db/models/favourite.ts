import { ObjectId } from "mongodb"
import { getCollection } from "../config/mongoDb"


export type Favourite = {
    _id: ObjectId
    userId: string
    quoteId: string
    anime: string
    character: string
    quote: string
    createdAt: Date
    updatedAt: Date
}


class FavouriteModel {

    static collection() {
        return getCollection('favourites')
    }
    static async create(quote : object) {
        try {
            const newFavourite = {
                ...quote,
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

    static async findWishlist({userId} : {userId : string}){
        try {
            return await this.collection().find({userId}).sort({createdAt: -1}).toArray()
        }catch(error){
            console.log(error);
        }
    }
    
    static async delete(id : string){
        try {
            return await this.collection().deleteOne({_id: new ObjectId(id)})
        } catch (error) {
            console.log(error);
        }
    }

 
}

export default FavouriteModel