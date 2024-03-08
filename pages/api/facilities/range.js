import connectDb from "@/db";
import Hotel from "@/models/hotel-model";
export default async function handler(req, res) {
    if (req.method === "GET") {
        connectDb();
      const hotels = await Hotel.find({price : {$lte : req.query.price}});
        res.status(200).json({ msg: "All is well " ,  hotels});
    }
}