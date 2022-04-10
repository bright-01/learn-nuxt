export const state = () => ({
  cartItems : []
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      // http://placeimg.com
      imageUrl : `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  }
}
