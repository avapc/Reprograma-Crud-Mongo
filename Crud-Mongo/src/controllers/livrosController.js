const Livro = require('../models/livro')

const criaLivro = async (req, res)=>{
    const livro = new Livro({
        nome: req.body.nome,
        autora: req.body.autora,
        paginas: req.body.paginas,
        criadoEm: req.body.criadoEm
    })
    try {
        const novoLivro = await livro.save() 
        res.status(201).json(novoLivro) 
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const listaLivros = async (req, res)=> {
    const livros = await Livro.find() 
    res.status(200).json(livros)
}

const atualizaLivro = async (req, res)=>{
    try {
        const livro = await Livro.findById(req.params.id)
        if (livro == null) {
            return res.status(404).json({ message: 'livro não encontrado!'})
        }

        if (req.body.nome != null) {
            livro.nome = req.body.nome
        }

        if (req.body.autora != null) {
            livro.autora = req.body.autora
        }

        if (req.body.paginas != null) {
            livro.paginas = req.body.paginas
        }

        if (req.body.criadoEm != null) {
            livro.criadoEm = req.body.criadoEm
        }

        const livroAtualizado = await livro.save()
        res.json(livroAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaLivro = async (req, res)=>{
    try {
        const livro = await Livro.findById(req.params.id)
        if (livro == null) {
        return res.status(404).json({ message: 'livro não encontrado!'})
        }
    
        await livro.remove()
        res.json({ message: 'Livro deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

const listaUmLivro = async (req, res ) => {
    const livro = await Livro.findById(req.params.id)

    if (livro == null) {
        return res.status(404).json({ message: 'livro não encontrado!'})
    }

    res.json(livro)
}

module.exports = { 
    criaLivro,
    listaLivros,
    atualizaLivro,
    deletaLivro,
    listaUmLivro

}