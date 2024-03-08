import connectDb from "@/db";
import Hotel from "@/models/hotel-model";



export default async function handler(req, res) {
if (req.method === "GET") {
    connectDb();
    if (req.query.id) {
        const hotel = await Hotel.findById(req.query.id);
        if (hotel) {
            res.status(200).json({ msg: "Hotel fetched successfully", hotel });
        }
        else {
            res.status(404).json({ msg: "Hotel not found" });
        }
    }


}
}