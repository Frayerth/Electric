
const { Router } = require('express')

const { usuariosGet,
        usuariosDelete,
        usuariosPost,
        usuariosPut
} = require('../Controllers/Usuarios')

const router = Router()

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.put('/:id', usuariosPut)
router.delete('/:id', usuariosDelete)

module.exports = router