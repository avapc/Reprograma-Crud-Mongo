const express = require('express')

const router = express.Router()

const controller = require('../controllers/livrosController')

router.post('/', controller.criaLivro)

router.get('/', controller.listaLivros)

router.get('/:id', controller.listaUmLivro)

router.patch('/:id', controller.atualizaLivro)

router.delete('/:id', controller.deletaLivro)

module.exports = router