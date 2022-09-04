import * as BDP from "../../db/index-producto"

export const findAll = (req,res) =>{
    return res.json({
        ok:true,
        data: BDP.findAll()
    })
}

export const findOne = (req, res) => {
    const { id } = req.params;
    return res.json({
        ok:true,
        data: BDP.findOne(id)
    })
}

export const create = (req, res) =>{
    const { body } = req
    BDP.store(body)
    return res.status(201).json({
        ok:true,
        data: "Producto registrado correctamente"
    })
}

export const update = (req, res) =>{
    const { id } = req.params
    const { body } = req

    BDP.update(id, body)
    return res.json({
        ok:true,
        data: "Producto actualizado correctamente"
    })
}

export const remove = (req,res) => {
    const { id } = req.params
    BDP.remove(id)
    return res.json({
        ok:true,
        data: "Producto eliminado"
    })
}