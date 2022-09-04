//PRODUCTOS
const productos = [];

export const findAll = () =>{
    return productos;
}

export const findOne = (id) => {
    let producto =  productos.find((e) => e.id === Number(id))
    return producto
}

export const store = (prod)=>{
    let ultimoProducto = productos[productos.length-1]
    //SOLUCIONAMOS EL BUG CON LOS ID
    productos.length == 0? prod.id = 1:  prod.id = ultimoProducto.id + 1
    productos.push(prod)
}

export const update = (id, prod)=>{
    const index = productos.findIndex((e) => e.id === Number(id))
    productos[index] = {
        ...productos[index],
        ...prod,
    }
}

export const remove = (id) =>{
    const data = productos.filter((e) => e.id !== Number(id))
    productos.length = 0
    productos.push(...data)
}
