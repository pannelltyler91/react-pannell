import Merch1 from './images/cherryblossom.jpg';
import Merch2 from './images/japanesemaple.jpg';
import Merch3 from './images/chineseelm.jpg';
import Merch4 from './images/moneytree.jpg';
import Merch5 from './images/fig.jpg';
import Merch6 from './images/holly.jpeg';
import Merch7 from './images/juniper.jpg';
import Merch8 from './images/spruce.jpg';
import Merch9 from './images/cedar.jpg';
import Merch10 from './images/hinokicypress.webp';
import {ADD_TO_CART,removeItem,addQuantity,subtractQuantity,coupon} from '../actions/cartactions';

const initState ={
    items:[
     

        {id:1,title:'Japanese Cherry Blossom', description:'(Prunus) Less Common', price:250, image:Merch1},
        {id:2,title:'Japanese Maple', description:'(Acer Palmatum) Less Common', price:200, image:Merch2},
        {id:3,title:'Chinese Elm', description:'(Ulmus parvifolia) Less Common', price:250, image:Merch3},    
        {id:4,title:'Moneytree', description:'(Pachira aquatica) Very Common', price:50, image:Merch4},
        {id:5,title:'Figtree', description:'(Ficus Bonsai) Very Common', price:50, image:Merch5},
        {id:6,title:'Japanese Holly', description:'(Ilex crenata) Common', price:150, image:Merch6}, 
        {id:7,title:'Juniper', description:'(Juniperus) Common', price:125, image:Merch7}, 
        {id:8,title:'Spruce', description:'(Picea) Common', price:100, image:Merch8}, 
        {id:9,title:'Cedar', description:'(Cedrus) Common', price:85, image:Merch9}, 
        {id:10,title:'Hinoki Cypress', description:'(Chamaecyparis obtusa) Rare', price:450, image:Merch10} 
        


    ],
    addedItems:[],
    total:0,
    coupons:[]
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
            let NewTotal = state.total + addedItem.price
            return{
                ...state,
                addedItems:[...state.addedItems, addedItem],
                total:NewTotal
            }
        }
    } 
    if (action.type === removeItem){
        let removeTarget = state.addedItems.find(item => action.id === item.id);
        let new_items = state.addedItems.filter(item => action.id !== item.id );
        let newTotal = state.total - (removeTarget.price * removeTarget.quantity);
        console.log(removeTarget);
        return{
            ...state,
            addedItems:new_items,
            total:newTotal
        }
    }
    if(action.type === addQuantity){
        let addedItem = state.addedItems.find(item => action.id === item.id);
        addedItem.quantity+=1
        let newTotal = state.total + addedItem.price;
        return{
            ...state,
            total:newTotal
        }
    }
    if (action.type === subtractQuantity){
        let removeTarget = state.addedItems.find(item => action.id === item.id);
        let newItems = state.addedItems.find(item => action.id !== item.id);
        let newTotal  = state.total - removeTarget.price;
        if(removeTarget.quantity === 1){
            return{
                ...state,
                addedItems:newItems,
                total:newTotal
            }
        } else{
            removeTarget.quantity -= 1
            return{
                ...state,
                total:newTotal
            }
        }
       
    } else{
        if (action.type === coupon){
        let newTotal  = state.total - state.total * 0.10;
        
                    return{
                        ...state,
                        total:newTotal,
                        
                    }
               
    }else{
        return state
    }
}

}
export default cartReducer;