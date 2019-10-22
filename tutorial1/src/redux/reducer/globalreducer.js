import actionType from './globalActionType';

const globalState = {
    totalOrder:0
}
// reducer
const rootReducer = (state = globalState,action) =>{
    switch(action.type){
        case actionType.ADD_ORDER:
            return {
                ...state,
                totalOrder:state.totalOrder + 1
            }
            break;
        case actionType.SUBTRACT_ORDER:
            if(state.totalOrder > 0 ){
                return {
                    ...state,
                    totalOrder:state.totalOrder - 1
                }
            }
            return {
                ...state,
                totalOrder:state.totalOrder
            }
            break;
    }
    
    return state;
}

export default rootReducer;