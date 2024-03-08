import connectDb from "@/db";
import Hotel from "../../../models/hotel-model";





export default async function handler(req, res) {
    connectDb();
    // if (req.method === "POST") {
    //     const newHotel = new Hotel(req.body);
    //     const result =await newHotel.save();
    //     res.status(201).json({msg : "Hotel created successfully", result});   
    // }


    if (req.method === "GET") {
        const hotels = await Hotel.find({location: req.query.city});
        if (hotels.length > 0) {
            res.status(200).json({msg : "Hotels fetched successfully", hotels});
        } else {
            const allHotels = await Hotel.find({});
            res.status(200).json({msg : "Hotels fetched successfully", allHotels});
            
        } 
    }
}