import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setItemInCart: (state, action) => {
      state.initialState.push({...action.payload, quantity: 1})
    },

    increaseCount: (state, action) => {
      state.initialState = state.initialState.map(item => {
        if(item.id === action.payload) {
          item.quantity += 1
        }
        return item
      })
    },

    decreaseCount: (state, action) => {
      state.initialState = state.initialState.map(item => {
        if(item.id === action.payload && item.quantity > 1) {
          item.quantity -= 1
        }
        return item
      })
    }


  }
})

export const {setItemInCart, increaseCount, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
