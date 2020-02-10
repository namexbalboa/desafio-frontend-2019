<template>
    <div>
        <b-container>

            <b-row class="titleTab">
                <b-col cols="3" class="titleCol">PRODUTOS</b-col>
                <b-col cols="3" class="titleCol">QUANTIDADE</b-col>
                <b-col cols="3" class="titleCol">VALOR UNITÁRIO</b-col>
                <b-col cols="3" class="titleCol">TOTAL</b-col>
            </b-row>

            <hr/>

            <b-row :key="index" v-for="(item, index) in CartItems" class="rowProduct">
                <b-col>
                    <p class="categoryProduct">Eletrônicos</p>
                    <br/>
                    <button class="btnRemoveItem" @click="removeProductCart(index)">
                      <garbageIcon class="iconGarbageItem" alt="garbage" title="Remover do carrinho"/>
                    </button>
                    <p class="nameProduct">{{item.name.substring(0,50)}}</p>
                </b-col>
                <b-col>
                  <div class="quantityArea">
                    <button class="quantityBtn" @click="minusItemQuantity(item)" variant="default">
                      <span>-</span>
                    </button>
                    <input
                      type="number"
                      id="QtdItemCart"
                      min="1"
                      v-model.number="item.quantity"
                      class="quantityInput"
                    />
                    <button class="quantityBtn" @click="plusItemQuantity(item)" variant="default">
                      <span>+</span>
                    </button>
                  </div>
                </b-col>
                <b-col>
                    <div class="generalFont">
                        <span class="generalBoldFont">R$ {{ ((item.price).toFixed(2)).replace(".",",") }}</span> à vista <br>
                        ou 10x {{ ((item.price/10).toFixed(2)).replace(".",",") }}
                    </div>
                </b-col>
                <b-col>
                    <div class="generalFont">
                        <span class="generalBoldFont">R$ {{ ((item.priceTotal).toFixed(2)).replace(".",",") }}</span> à vista <br>
                        ou 10x {{ ((item.priceTotal / 10).toFixed(2)).replace(".",",") }}
                    </div>
                </b-col>
            </b-row>

            <b-row class="totalRowCart">
                <b-col cols="6"></b-col>
                <b-col cols="3">
                    <div class="generalFont">
                        <strong>TOTAL À VISTA</strong>
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="totalCustom">R$ {{ totalCart.toFixed(2).replace(".",",") }}</div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="6"></b-col>
                <b-col cols="3">
                    <div class="generalFont">
                        <strong>TOTAL PARCELADO</strong>
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="generalFont">
                        em até <span class="generalBoldFont">10x R$ {{ ((totalCart/10).toFixed(2)).replace(".",",") }}</span><br>
                        (Total R$ {{ totalCart.toFixed(2).replace(".",",") }})
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <hr/>

        <b-row>
            <b-col>
                <button @click="clearShoppingCart" class="btnClearCart">
                    <div class="clearCart1">
                        <garbageIcon class="iconGarbage" alt="garbage" title="Remover do carrinho"/>
                    </div>
                    <div class="clearCart2">
                        Limpar Carrinho
                    </div>
                </button>
            </b-col>
            <b-col>
                <router-link to="/" tag="button" id="products"  class="keepBtn">
                      Continuar comprando
                </router-link>
            </b-col>
            <b-col>
                <router-link to="checkout" tag="button" id="checkout" class="submitBtn">
                      Concluir compra
                </router-link>
            </b-col>
        </b-row>
        <br/><br/>
    </div>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex';
  import garbage from '../assets/img/garbage.vue';

  export default {
    data () {
      return {
        result: 0
      }
    },
    mounted () {
    },
    computed: {
      ...mapState({ CartItems: state => state.cart.items, totalCart: state => state.cart.totalCart })
    },
    components: { "garbageIcon":garbage },
    methods: {

      ...mapActions('cart', [
        'plusItemQuantity', 
        'minusItemQuantity',
        'clearShoppingCart',
        'removeProductCart'
      ]),

    }
  }
</script>

<style scoped>
@import "../assets/styles/fonts.scss";

.titleTab {
  margin-top: 15vh;
}

.titleCol {
  font-size: calc(8px + 1vw);
  font-family: "sansprobold"
}

.rowProduct {
  margin-top: 3vh;
  border-bottom: 1px solid silver; 
  padding: 1vw;
}

.categoryProduct {
  position:relative;
  margin: -2vw 0px -2vw -7vw;
  font-family: 'sansprobold';
  font-size: calc(6px + 0.5vw);
  color: #8E36B7;
}

.btnRemoveItem { 
  float: left;
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.iconGarbage{
  height: calc(8px + 0.75vw);
  color: #8E36B7;
}

.iconGarbageItem{
  height: calc(8px + 0.75vw);
  color: #8E36B7;
}

.nameProduct {
  margin: 0px 0px 0px -3vw;
  font-family: 'sansprobold';
  text-align: justify; 
  font-size: calc(8px + 0.5vw);
}

.quantityBtn {
  height: 30px;
  width: 3vw;
  border-radius: 0px;
  margin-bottom: 4px;
  border: 1px solid silver;
}

.quantityBtn > span {
  color: silver;
  font-family: 'sansprobold';
  margin-left: -0.5vw;
}

.quantityInput {
  border-radius: 0px;
  width: calc(8px + 3vw);
  min-height: 30px;
  text-align: right; 
  pointer-events:none;
}

.generalFont {
  font-family: 'sansproregular';
  font-size: calc(10px + 0.5vw);
}

.generalBoldFont {
  font-family: 'sansprobold';
  font-size: calc(10px + 0.5vw);
}

.btnClearCart{
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.clearCart1 {
  float:left;
}

.clearCart2 {
  float:left;
  font-family: 'sansproregular';
}

.totalRowCart{
  padding: 4vh;
}

.keepBtn {
  border-radius: 0px;
  background-color: silver;
  border-width: 0px;
  width: 20vw;
  height: 8vh;
  margin-left: 20vw;
  font-family: 'sansproregular';
  font-size: calc(8px + 0.75vw);
  color: #222;
}

.submitBtn {
  border-radius: 0px;
  background-color: #8E36B7;
  border-width: 0px;
  width: 20vw;
  height: 8vh;
  font-family: 'sansproregular';
  font-size: calc(8px + 0.75vw);
  color: white;
}

.keepBtn:hover{
  background-color: gray;
}

.submitBtn:hover  {
  background-color: purple;
}

.totalCustom {
  font-family: 'sansprobold';
  font-size: calc(14px + 0.75vw);
  color: #8E36B7;
}

</style>