import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const statusShemas = mongoose.Schema({
  is_livred : {type:Boolean},
  livred_At : {type:Date},
  is_paid : {type:Boolean},
  paid_At : {type:Date},
},{
  timestamps: true,
}
)

const cardInfoShemas = mongoose.Schema({
  paimentMethode : {type:String, required: true},
 Name_on_card : {type:String ,required: true},
 Card_number : {type:String,required: true},
 Expiry_date : {type:String,required: true},
 CVV : {type:String,required: true},
 
},{
  timestamps: true,
}
)
const ordreShemas = mongoose.Schema({
    id_user :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    status:[statusShemas],
    cardInfo : [cardInfoShemas],
    createdAt:{type:Date, required: true},
    total_price : {type:Number, required: true},
    

},{
    timestamps: true,
  })
 



  const Ordre = mongoose.model("Ordre", ordreShemas);
 
  export default Ordre