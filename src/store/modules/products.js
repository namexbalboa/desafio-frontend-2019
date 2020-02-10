  import axios from "axios";

    const state = {
      products: [],
      displayProducts: [],
      showSpinner: false
    }

    const mutations = {
      SET_SPINNER: (state, spinner) => state.showSpinner = spinner,
      SET_PRODUCTS: (state, products) => state.products = products,
      SET_DISPLAY_PRODUCTS:(state, displayProducts) => state.displayProducts = displayProducts
    }
  
    const actions = {  
      async fetchData({ commit }) {
        commit("SET_SPINNER", true);
        axios.get('https://api.myjson.com/bins/9e9fl')
        .then((response) => {
          commit("SET_SPINNER", false);
          commit("SET_PRODUCTS", response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error.statusText)
        });
      },
  
      async search({ commit }, { text }) {
  
        commit("SET_SPINNER", true);
        axios.get('https://api.myjson.com/bins/9e9fl')
        .then((response) => {
          commit("SET_SPINNER", false);
          const myJson = response.data;
          const value = myJson.filter(val => {
            return val.name.toLowerCase().includes(text.toLowerCase());
          });
          commit("SET_PRODUCTS", value);
        })
        .catch((error) => {
          console.log(error.statusText)
        });
      }
  
    }

    const getters = {
      getProducts(state) {
        return state.products;
      },
      getDisplayProducts(state) {
        return state.displayProducts;
      },
      getSpinner(state) {
        return state.showSpinner;
      }
    }


    export default {
      state,
      getters,
      actions,
      mutations
    };
