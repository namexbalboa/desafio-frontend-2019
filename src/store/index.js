import Vue from "vue";
import Vuex from "vuex";
import cart from './modules/cart'
import products from './modules/products'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [persistedState({storage: window.localStorage})],
  modules: {
    cart,
    products
  }
});
