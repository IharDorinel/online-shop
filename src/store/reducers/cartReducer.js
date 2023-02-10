import {createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem('ID')) || []
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push({...action.payload, quantity: 1, activeSize: action.payload.activeSize, activeColor: action.payload.activeColor,
        activeCapacity: action.payload.activeCapacity, activeUSB: action.payload.activeUSB, activeID: action.payload.activeID})
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    removeItemFromCart: (state, action) => {
      console.log(action.payload)
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
      state.itemsInCart = current(state).itemsInCart
          .filter(item => !((item.id === action.payload.id) && (
                    (item.activeSize && item.activeSize === action.payload.activeSize)
                    || (item.activeColor && item.activeCapacity && item.activeColor === action.payload.activeColor && item.activeCapacity === action.payload.activeCapacity)
                    || (item.activeCapacity && item.activeUSB && item.activeID && item.activeCapacity === action.payload.activeCapacity && item.activeUSB === action.payload.activeUSB && item.activeID === action.payload.activeID)
                    || (!item.activeSize && !item.activeColor && !item.activeCapacity && !item.activeUSB && !item.activeID)
              )
          ))
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    deleteItemsFromCart: (state, action) => {
      state.itemsInCart = []
      localStorage.removeItem('ID')
    },

    increaseCount: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if((item.id === action.payload.id) && (
        (item.activeSize && item.activeSize === action.payload.activeSize)
        || (item.activeColor && item.activeCapacity && item.activeColor === action.payload.activeColor && item.activeCapacity === action.payload.activeCapacity)
        || (item.activeCapacity && item.activeUSB && item.activeID && item.activeCapacity === action.payload.activeCapacity && item.activeUSB === action.payload.activeUSB && item.activeID === action.payload.activeID)
        || (!item.activeSize && !item.activeColor && !item.activeCapacity && !item.activeUSB && !item.activeID)
        )
        ) {
          item.quantity += 1
        }
        return item
      })
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    decreaseCount: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if((item.id === action.payload.id && item.quantity > 1) && (
            (item.activeSize && item.activeSize === action.payload.activeSize)
            || (item.activeColor && item.activeCapacity && item.activeColor === action.payload.activeColor && item.activeCapacity === action.payload.activeCapacity)
            || (item.activeCapacity && item.activeUSB && item.activeID && item.activeCapacity === action.payload.activeCapacity && item.activeUSB === action.payload.activeUSB && item.activeID === action.payload.activeID)
            || (!item.activeSize && !item.activeColor && !item.activeCapacity && !item.activeUSB && !item.activeID)
        )
        ) {
          item.quantity -= 1
        }
        return item
      })
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    }
  }
})

export const {setItemInCart, removeItemFromCart, deleteItemsFromCart, increaseCount, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
