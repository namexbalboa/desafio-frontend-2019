<template>
  <div>
    <b-col>
      <b-card
        :img-src= picture
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 customCard"
      >
        <b-card-text>
          <span class="cardCategory">Eletrônicos</span>
          <br/>
          <span class="cardProductName">{{name}}</span>
          <br/>
          <span class="cardDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          <br/>
          <span class="cardValue">R$ {{price}}</span>
        </b-card-text>

        <button
          v-b-tooltip.hover
          title="Selecionar Produto"
          variant="default"
          class="btnStyle"
           @click="addProductToCart({name, price}), addCartCount()">
            <span class="btnText">ADICIONAR AO CARRINHO</span>
        </button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ["name", "price", "picture"],
  computed: 
    mapState({
      products: state => state.products.all
    }),
    methods: mapActions('cart', [
      'addProductToCart',
      'addCartCount'
    ])
  
};
</script>

<style scoped>
@import "../assets/styles/fonts.scss";

.cardCategory {
  font-size: 14px;
  float: left;
  position: relative;
  font-family: 'sansprobold';
  color: #8E36B7;
} 

.cardProductName {
  font-size: 16px;
  float: left;
  position: relative;
  font-family: 'sansprobold';
  color: black;
  text-align: justify;
}

.cardDescription {
  font-size: 14px;
  float: left;
  position: relative;
  font-family: 'sansproregular';
  color: #909090;
  text-align: justify;
}

.cardValue {
  font-size: 22px;
  float: left;
  position: relative;
  font-family: 'sansprobold';
  color: black;
  padding-top: 16px;
}

.btnStyle{
  width: 115%; 
  position: relative;
  margin: 10% -0% -10% -7.2%; 
  background-color: transparent;
  height: 7vh;
  background: none;
	color: inherit;
	border: none;
  border-top: 1px solid gray;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.btnStyle:hover{
  background-color: #8E36B7;
}

.btnStyle:hover .btnText {
  color: white;
}

.btnStyle:active {
  background-color: gray;
}

.btnText {
  font-family: 'sansprobold';
  font-size: 16px; 
  color: #8E36B7;
}

</style>
