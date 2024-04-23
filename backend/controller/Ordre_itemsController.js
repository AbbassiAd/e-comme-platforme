import asyncHandler from 'express-async-handler';
import OrdreItems from '../models/Ordre_items.js';
const createOrdreItem = asyncHandler(async (req, res) => {
    try {
        const { id_product, id_ordre, quantity, price, total_items_price } = req.body;

        // Vérifier si toutes les données nécessaires sont présentes
        if (!id_product || !id_ordre || !quantity || !price || !total_items_price) {
            return res.status(400).json({ success: false, error: "Toutes les données sont requises pour créer un ordreItem." });
        }

        // Vérifier si les valeurs numériques sont valides
        if (isNaN(quantity) || isNaN(price) || isNaN(total_items_price)) {
            return res.status(400).json({ success: false, error: "La quantité, le prix et le prix total des articles doivent être des nombres." });
        }

        // Créer l'ordreItem
        const ordreItem = await OrdreItems.create({
            id_product,
            id_ordre,
            quantity,
            price,
            total_items_price
        });

        // Envoyer la réponse avec succès
        res.status(201).json({ success: true, ordreItem });
    } catch (error) {
        // Gérer les erreurs de manière appropriée
        console.error("Erreur lors de la création de l'ordreItem :", error);
        res.status(409).json({ success: false, error: "Une erreur s'est produite lors de la création de l'ordreItem." });
    }
});


const getOrdreItems = asyncHandler(async (req, res) => {
    try {
        const ordreItems = await OrdreItems.find();
        res.json({ success: true, ordreItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export { createOrdreItem, getOrdreItems };
