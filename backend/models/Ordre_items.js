import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const ordreItemsSchema = mongoose.Schema({
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    id_ordre: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Ordre"
    },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total_items_price: { type: Number, required: true }
});

const OrdreItems = mongoose.model('Ordre_items', ordreItemsSchema);

export default OrdreItems;
