const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value:0,
    age:17
}

// Reducer : suatu fungsi utk merubah,memantau setiap update dari store
const rootReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state,
                age:state.age + 1
            }
            break;
        case 'CHANGE_VAL':
            return {
                ...state,
                value:state.value + action.newVal
            }
            break;
        default:
            return state;
            break;
    }
}
// store :  sebuah value menyimpan state secara global,  di reusable secara global yg bisa diupdate
const store = createStore(rootReducer);
console.log(store.getState());

//  Subscription : proses pemanggilan store yg kita perlukan. proses penggunaan store yg dimiliki
store.subscribe(() => {
    console.log('store change: ',store.getState());
})

// dispatching Action : proses pemanggilan sebuah instruksi di dlm reducer, reducer tidak bekerja tanpa pemanggilan 
// agent ( task2 list yg bisa di lakukan)
store.dispatch({type:'ADD_AGE'})
store.dispatch({type:'CHANGE_VAL',newVal:12})
console.log(store.getState());




