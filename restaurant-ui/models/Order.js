import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    customer:{
        type:String,
        require:true,
        maxLength:60
    },
    address:{
        type:String,
        require:true,
        maxLength:200
    },
    total:{
        type:Number,
        require:true,
    },
    status:{
        type:Number,
        default: 0,
    },
    method:{
        type:Number,
        require: true,
    }
},{timestamps:true}
)

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)