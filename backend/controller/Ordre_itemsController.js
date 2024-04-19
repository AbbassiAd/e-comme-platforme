import asyncHandler from 'express-async-handler';
import Ordre_items from '../models/Ordre_items';


const createOrdreItem = asyncHandler(async (req, res) => {
    try {
        const { id_product, id_ordre, quantity, price, total_items_price } = req.body;

        const ordreItem = await Ordre_items.create({
            id_product,
            id_ordre,
            quantity,
            price,
            total_items_price
        });

        res.status(201).json({ success: true, ordreItem });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});


const getOrdreItems = asyncHandler(async (req, res) => {
    try {
      
        const ordreItems = await Ordre_items.find();

        res.json({ success: true,  ordreItems});
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export { createOrdreItem, getOrdreItems };
