import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
}
const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment:(state,action)=>{
        state.count += 1 ;
    },
    decrement:(state,action)=>{
        state.count -=1 ;
    }
  }
});
// const counter2 = createSlice({
//   name:"counter2",
//   initialState,
//   reducers:{
//     increment:(state,action)=>{
//       state.count +=2
//     }
//   }
// })

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer;
