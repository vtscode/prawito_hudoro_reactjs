const initState = {
    popUp : false,
    isLogin:false,
    isLoading:false,
    user:{},
    notes:[]
  }

const reducer = (state=initState,action) =>{
    switch(action.type){
        case 'CHANGE_POPUP':
            return {
                ...state,
                popup:action.value
            }
        case 'CHANGE_ISLOGIN':
            return {
                ...state,
                isLogin:action.value
            }
        case 'CHANGE_USER':
            return {
                ...state,
                user:action.value
            }
        case 'CHANGE_ISLOADING':
            return {
                ...state,
                isLoading:action.value
            }
        case 'SET_NOTES':
            return {
                ...state,
                notes:action.value
            }
        default:
            return {
                ...state
            }
    }
  }

export default reducer;