import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem('ID')) || []
  },
  reducers: {
    setItemInCart: (state, action) => {
      if(!state.itemsInCart.find(el => el.id === action.payload.id))
      state.itemsInCart.push({...action.payload, quantity: 1, activeSize: action.payload.activeSize, activeColor: action.payload.activeColor,
        activeCapacity: action.payload.activeCapacity, activeUSB: action.payload.activeUSB, activeID: action.payload.activeID})
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    setNewActiveSize: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload.itemId) {
          item.activeSize = action.payload.sizeId
        }
        return item
      }
    )},

    setNewActiveColor: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload.itemId) {
          item.activeColor = action.payload.colorId
        }
        return item
      })
    },

    setNewActiveCapacity: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload.itemId) {
          item.activeCapacity = action.payload.capId
        }
        return item
      })
    },

    setNewActiveUSB: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload.itemId) {
          item.activeUSB = action.payload.USBId
        }
        return item
      })
    },

    setNewActiveID: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload.itemId) {
          item.activeID = action.payload.IDId
        }
        return item
      })
    },

    removeItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload.id)
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    deleteItemsFromCart: (state, action) => {
      state.itemsInCart = []
      localStorage.removeItem('ID')
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

export const {setItemInCart, setNewActiveSize, setNewActiveColor, setNewActiveCapacity, setNewActiveUSB, setNewActiveID, removeItemFromCart, deleteItemsFromCart, increaseCount, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
