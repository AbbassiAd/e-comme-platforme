import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;



const ordreShemas = mongoose.Schema({
    id_user :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    status:{
      is_livred : {type:Boolean},
      livred_At : {type:Date},
      is_paid : {type:Boolean},
      paid_At : {type:Date},
    },
    cardInfo : {
      paimentMethode : {type:String, required: true},
      Name_on_card : {type:String ,required: true},
      Card_number : {type:String,required: true},
      Expiry_date : {type:Date,required: true},
      CVV : {type:String,required: true},
    },
    total_price : {type:Number, required: true},
    

},{
    timestamps: true,
  })
 



  const Ordre = mongoose.model("Ordre", ordreShemas);
 
  export default Ordre