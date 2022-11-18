import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxLength:60
    },
    desc:{
        type:String,
        require:true,
        maxLength:200
    },
    img:{
        type:String,
        require:true,
    },
    prices:{
        type:[Number],
        require:true
    },
    extraOptions:{
        type:[
            {
                text:{type:String, require:true},
                price:{type:Number, require:true}
            }
        ],

    }
},{timestamps:true}
)

export default mongoose.models.Product|| mongoose.model("Product", ProductSchema)