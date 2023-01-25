import AppContext from "./AppContext";
import {useReducer} from 'react';

const cartReducer = (state,action) => {
    if(action.type === "ADD"){
        return{
            Product: action.product,
            Qty: state.Qty+1,
            Total: state.Total+action.product.price,
        }
    }

    if(action.type === "REMOVE"){
        return{
            Product: action.product,
            Qty: state.Qty-1,
            Total: state.Total+action.product.price,
        }
    }

    return{
        Product: state.Product,
        Qty: state.Qty,
        Total: state.Total,
    }
}

export default function AppState(props){
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        Product: [],
        Qty: 0,
        Total: 0,
    })

    return(
    <AppContext.Provider value={{cartState, cartDispatch}}>
        {props.children}
    </AppContext.Provider>
    );
}