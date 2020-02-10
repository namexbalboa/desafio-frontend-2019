const state = {
    items: [],
    checkoutStatus: null,
    counter: 0,
    totalCart: 0
  }
  
  const getters = {

    totalItems: (state) => {
      return state.counter;
    }

  }
  
  const actions = {
  
    addProductToCart ({ state, commit }, product) {
      commit('setCheckoutStatus', null)
        const cartItem = state.items.find(item => item.name === product.name)
        console.log(state.items);
        if (!cartItem) {
          commit('pushProductToCart', { product })
        } else {
          commit('incrementItemQuantity', cartItem)
        }
    },

    addCartCount ({ commit }) {
      commit('incrementCount');
    },

    plusItemQuantity ({ commit }, name ) {
      commit('incrementItemQuantity', name);
      commit('incrementCount');
    },

    minusItemQuantity ({ commit }, name ) {
      commit('decrementItemQuantity', name);
    },

    removeProductCart({ commit }, product) {
      commit('removeCartItem', product);
    },

    clearShoppingCart({ commit }) {
      commit('clearCart');
    }

  }
  
  const mutations = {

    pushProductToCart (state, { product }) {

      let convertValue = product.price.replace("R$ ","");
      convertValue = convertValue.replace(",",".");
      convertValue = convertValue.replace(".","");
      let result = parseFloat(convertValue);

      state.items.push({
          name: product.name,
          price: result,
          quantity: 1,
          priceTotal: result
      })

      state.totalCart += result;
    },
    
    incrementItemQuantity (state, { name }) {
      const cartItem = state.items.find(item => item.name === name)
      cartItem.priceTotal += cartItem.price;
      state.totalCart += cartItem.price;
      cartItem.quantity++
    },

    decrementItemQuantity (state, { name }) {
      const cartItem = state.items.find(item => item.name === name)
      if(cartItem.quantity == 1){
        return null
      }else{
        cartItem.priceTotal -= cartItem.price;
        state.totalCart -= cartItem.price;
        cartItem.quantity--
        state.counter--
      }
      
    },
  
    setCartItems (state, { items }) {
      state.items = items
    },
  
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },

    incrementCount (state) {
      state.counter++
    },

    removeCartItem(state, product) {
      let qtdItems = state.items[product].quantity;
      state.counter -= qtdItems;
      return state.items.splice(product, 1);
    },

    clearCart (state) {
      state.counter = 0,
      state.items = [],
      state.totalCart = 0
    }

  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }