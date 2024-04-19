import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const ordre_itemsShemas = mongoose.Schema({
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
    qunatity: { type: Number, required: true },
    price: { type: Number, required: true },
    total_items_price: { type: Number, required: true },

})
const Ordre_items = mongoose.model('Ordre_items',ordre_itemsShemas)
export default Ordre_items