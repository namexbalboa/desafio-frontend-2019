<template>
  <div class="home">

    <SlideShow class="carousel"/>
    
    <b-container>

      <b-row class="boxSearch">
        <b-col cols="4">
          <span class="titleBoxSearch">
            Encontre seu produto
          </span>
        </b-col>

        <b-col cols="8">
         <b-form @submit.prevent="search" inline>
          <b-form-group id="input-group-1">
            <b-form-input
              id="input"
              v-model="searchText"
              type="text"
              required
              placeholder="Pesquisar..."
              class="inputBoxSearch"
            ></b-form-input>
            <b-button size="sm" type="submit" class="submitBoxSearch">
              <lupa height="20px" width="20px"> </lupa>
            </b-button
            >
          </b-form-group>
         </b-form>
        </b-col>

      </b-row>

      <b-row>
        <product-card
          :name="products.name"
          :id="products.id"
          :price="products.price"  
          :picture="products.picture"
          v-for="products in getProducts"
          :key="products.id"
          class="mx-auto cardAdjust"
        ></product-card>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>

  import ProductCard from "@/components/ProductCard.vue";
  import Slideshow from "@/components/Slideshow.vue";
  import { mapGetters } from "vuex";
  import lupa from '../assets/img/lupa.vue';

  export default {
    name: "home",
    async mounted() {
      this.getRecords();
    },
    data() {
      return {
        searchText: ""
      };
    },
    components: { "product-card": ProductCard, "SlideShow": Slideshow, "lupa":lupa},
    computed: {
      ...mapGetters(["getProducts"])
    },
    methods: {
      search() {
        this.$store.dispatch("search", { text: this.searchText });
      },
      async getRecords() {
        await this.$store.dispatch("fetchData");
      }
    }
  };

</script>

<style lang="scss" scoped>

  .carousel {
    margin:0px; 
    padding:0px;
  }
  .boxSearch{
    padding:30px;
    box-shadow:
      0 1px 1px rgba(0,0,0,0.15),
      0 2px 2px rgba(0,0,0,0.15),
      0 4px 4px rgba(0,0,0,0.15),
      0 8px 8px rgba(0,0,0,0.15)
  }
  .titleBoxSearch {
    font-family: 'sansprobold'; 
    font-size: calc(10px + 0.6vw); 
    padding-left: 0px; 
    color: #909090;
  }
  .inputBoxSearch {
    width: 40vw; 
    max-width: 600px;
  }
  .submitBoxSearch {
    height: 38px;
    width: 44px;
    margin-left: -2vw; 
    background-color: #8E36B7;
    border-radius: 0px;
  }
  .cardAdjust {
    padding-top: 50px;
  }

</style>
