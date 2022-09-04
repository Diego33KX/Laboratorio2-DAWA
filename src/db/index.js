const data = [];
//Lista todo
export const findAll = () =>{
    return data;
}
//Buscar por id
export const findOne = (id) => {
    return data.find((u) => u.id === Number(id));
}
//Crear
export const store = (user) =>{
    let ultimo = data[data.length-1]
    if(data.length==0){
        user.id = 1
    }else{
        user.id = ultimo.id+1;
    }
    data.push(user);
};

//update

export const update = (id,user) =>{
    //SI NO ENCUENTRA NADA, RETORNA -1
    const index = data.findIndex((u) => u.id === Number(id))
    data[index] = {
        ...data[index],
        ...user,
    }
}

//delete
export const remove = (id) =>{
    const users = data.filter((u) => u.id !== Number(id))
    data.length =0;
    data.push(...users);
}