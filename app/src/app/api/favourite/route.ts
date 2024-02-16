import FavouriteModel from "@/db/models/favourite"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request : NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const userId: string = searchParams.get("userId") as string 
        const result = await FavouriteModel.findWishlist({userId})
        return NextResponse.json({data: result})
    } catch (error) {
       return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}

export async function POST(request : NextRequest){
    try {
        const body = await request.json()        
        const result = await FavouriteModel.create(body)
        return NextResponse.json({data : result})
    } catch (error) {
       return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}

export async function DELETE(request : NextRequest){
    try {
        const body = await request.json()
        await FavouriteModel.delete(body.id)
        return NextResponse.json({message : 'success delete'})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}