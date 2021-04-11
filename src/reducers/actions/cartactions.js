
export const ADD_TO_CART= (id)=>{
    return{
        type:ADD_TO_CART, 
        id
    }
}

export const removeItem =(id) =>{
    return{
        type:removeItem,
        id
    }
}
export const addQuantity =(id) =>{
    return{
        type:addQuantity,
        id
    }
}
export const subtractQuantity =(id) =>{
    return{
        type:subtractQuantity,
        id
    }
}
export const coupon =(id) =>{
    return{
        type:coupon,
        id,
        executed:false
    }
}