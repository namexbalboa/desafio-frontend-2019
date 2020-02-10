<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" fixed="top">
      
      <b-navbar-brand to="/" class="logo">
        <span class="logoTextOne">Mkt</span>
        <span class="logoTextTwo">Place</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"/>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto rightLinks" >
          <b-nav-item to="/">Produtos</b-nav-item>
          <b-nav-item to="/cart">
            <img src="../assets/img/shopping-cart.svg" height="20"/>
            <div class="AlertIcon">
              <span class="AlertIconNumber">{{counter}}</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";

 export default {
    computed: {
      ...mapState({
        counter: state => state.cart.counter
      })
    }
  };
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts.scss";

.logo {
  margin-left: 12vw;
}

.logoTextOne {
  font-family: 'sansprobold'; 
  color:#909090;
}

.logoTextTwo {
  font-family: 'sansprobold'; 
  color:#8E36B7;
}

.rightLinks {
  margin-right: 12vw;
}

#nav a.router-link-exact {
  color: silver;
  font-family: "sansproregular"
}

#nav a.router-link-exact-active {
  color: gray;
  font-family: "sansproblack"
}

.AlertIcon {
  background-color: red;
  border-radius: 50%;
  height: 1vw;
  width: 1vw;
  position: relative;
  float: right;
  margin: 10px 0px 0px 0px;
}

.AlertIconNumber {
  font-family: 'sansproblack';
  font-size: 0.6rem;
  color: white;
  position: relative;
  float: left;
  margin-left: 0.3vw;
}

</style>
