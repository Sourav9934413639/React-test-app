import {configureStore,createReducer} from '@reduxjs/toolkit';
const customReducer=createReducer({c:0},{
    increment:(state)=>{
        state.c+=1;
    },
    decrement:(state)=>{
        
        state.c-=1;
        if(state.c<0){
            state.c=0;
        }
    },
    incrementByValue:(state,action)=>{
        state.c=state.c+action.payload;
    },
    decrementByValue:(state,action)=>{
        state.c=state.c-action.payload;
        if(state.c<0){
            state.c+=action.payload;
        }
    }
})
const store=configureStore({
    reducer:{
        red:customReducer,
    }
})
export default store;