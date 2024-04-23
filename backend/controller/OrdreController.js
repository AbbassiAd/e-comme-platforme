import asyncHandler from "../middlewares/asyncHandler.js";
import Ordre from "../models/OrdreModel.js";

const createOrdre = asyncHandler(async (req, res) => {
    try {
        const {
             id_user,
            cardInfo: {
                paimentMethode,
                Name_on_card,
                Card_number,
                Expiry_date,
                CVV,
            },
             total_price } = req.body;

        const ordre = await Ordre.create({
            id_user,
            cardInfo: {
                paimentMethode,
                Name_on_card,
                Card_number,
                Expiry_date,
                CVV,
            },
            total_price
        });

        res.status(201).json({ success: true, ordre });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

const getOrdre = asyncHandler(async (req, res) => {
    try {
        const ordres = await Ordre.find();
        res.json({ success: true, ordres });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export {
    createOrdre,
    getOrdre
};
