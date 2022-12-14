import { ADD_TO_CART } from './constant'
import { REMOVE_TO_CART } from './constant'
export const cartData = (data = [], action) => {

    // if(action.type === ADD_TO_CART){
    //     console.warn('call reducer',action)
    //     return action.data
    // }else{
    //     return 'no action matched'
    // }
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('ADD_TO_CART reducer', action)
            return 1 + 1;
            case REMOVE_TO_CART:
                console.warn('REMOVE_TO_CART reducer', action)
                return 1 - 1;
        default:
            return 'no action called'
    }
}