import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem('ID')) || []
  },
  reducers: {
    setItemInCart: (state, action) => {
      if(!state.itemsInCart.find(el => el.id === action.payload.id))
      state.itemsInCart.push({...action.payload, quantity: 1})
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    increaseCount: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload) {
          item.quantity += 1
        }
        return item
      })
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    decreaseCount: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload && item.quantity > 1) {
          item.quantity -= 1
        }
        return item
      })
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    }


  }
})

export const {setItemInCart, increaseCount, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
