import {fetchCartItems} from "~/api";

export const state = () => ({
  cartItems : []
})

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      // http://placeimg.com
      imageUrl : `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  setCartItem(state, cartItems){
    state.cartItems = cartItems
  }
}


export const actions = {
  async [FETCH_CART_ITEMS]( {commit} ){
     const { data } = await fetchCartItems();
     commit('setCartItem', data);

  }
}
