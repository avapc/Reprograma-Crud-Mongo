const mongoose = require('mongoose') 


const livroSchema = new mongoose.Schema({ 
    
    nome: {
        type: String,
        required: true
    },
    autora: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }
})

module.exports = mongoose.model('livro', livroSchema)