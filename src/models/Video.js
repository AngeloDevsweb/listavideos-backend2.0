const {Schema, model} = require('mongoose')

const videoSchema = new Schema({
    titulo: {
        type:String,
        required:true,
        trim:true
    },
    descripcion: String,
    url:String
},   
{
    timestamps:true
})

module.exports=model('Video', videoSchema);