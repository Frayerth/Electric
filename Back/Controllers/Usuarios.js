const { response, request} = require('express')

const usuariosGet= (req=request, res=response) =>{
    //const user = req.body
    res.json({
        msg: 'GET'
    })
}

const usuariosDelete= (req=request, res=response) =>{
    //const user = req.body
    res.json({
        msg:'DEL'
    })
}


const usuariosPost= (req, res) =>{
    //const user = req.query
    res.json({
        msg: 'POST'
    })
}


const usuariosPut= (req, res) =>{
    //const user = req.query
    res.json({
        msg: 'PUT'
    })
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}