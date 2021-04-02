import Merch1 from './images/hunterxhunter.jpg';
import Merch2 from './images/kaisen.jpg';
import Merch3 from './images/tanjiro.jpg';
import Merch4 from './images/saitama.jpg';
import Merch5 from './images/psycho.jpg';
import {ADD_TO_CART} from '../actions/cartactions';

const initState ={
    items:[
        {id:1,title:'Item1', description:'This is Item1', price:50, image:Merch1},
        {id:2,title:'Item2', description:'This is Item1', price:50, image:Merch2},
        {id:3,title:'Item3', description:'This is Item1', price:50, image:Merch3},
        {id:4,title:'Item4', description:'This is Item1', price:50, image:Merch4},
        {id:5,title:'Item5', description:'This is Item1', price:50, image:Merch5}

    ],
    addedItems:[],
    total:0
}

const cartReducer = (state = initState,action) => {
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item => item.id === action.id)
        let existingItem = state.addedItems.find(item => action.id === item.id)
        if (existingItem){
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        } else{
            addedItem.quantity = 1;
            let NewTotal = state.total = addedItem.price
            return{
                ...state,
                addedItems:[...state.addedItems, addedItem],
                total:NewTotal
            }
        }
    } else{
        return state
    }
}

export default cartReducer;