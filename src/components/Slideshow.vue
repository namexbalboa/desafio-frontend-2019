<template>
    <Carousel :scrollPerPage="true" class="slideStyle"> 
            <Slide class="slideProps">
                <div class="slide1">
                  <span class="title">Notebooks</span>
                  <br>
                  <span class="subtitle">As melhores ofertas!</span>
                </div>
            </Slide>    
            <Slide class="slideProps"><div class="slide2"></div></Slide>  
            <Slide class="slideProps"><div class="slide1"></div></Slide>  
            <Slide class="slideProps"><div class="slide2"></div></Slide>
    </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: { "Carousel": Carousel, "Slide": Slide }
};

</script>

<style lang="scss" scoped>

.slide1{
  height:280px;
  width: 100%;
  background: rgba(143,54,184,1);
  background: -moz-linear-gradient(left, rgba(143,54,184,1) 0%, rgba(187,106,219,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(143,54,184,1)), color-stop(100%, rgba(187,106,219,1)));
  background: -webkit-linear-gradient(left, rgba(143,54,184,1) 0%, rgba(187,106,219,1) 100%);
  background: -o-linear-gradient(left, rgba(143,54,184,1) 0%, rgba(187,106,219,1) 100%);
  background: -ms-linear-gradient(left, rgba(143,54,184,1) 0%, rgba(187,106,219,1) 100%);
  background: linear-gradient(to right, rgba(143,54,184,1) 0%, rgba(187,106,219,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8f36b8', endColorstr='#bb6adb', GradientType=1 );
}

.slide2{
  height:280px;
  width: 100%;
  background: rgba(187,106,219,1);
background: -moz-linear-gradient(left, rgba(187,106,219,1) 0%, rgba(215,150,245,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(187,106,219,1)), color-stop(100%, rgba(215,150,245,1)));
background: -webkit-linear-gradient(left, rgba(187,106,219,1) 0%, rgba(215,150,245,1) 100%);
background: -o-linear-gradient(left, rgba(187,106,219,1) 0%, rgba(215,150,245,1) 100%);
background: -ms-linear-gradient(left, rgba(187,106,219,1) 0%, rgba(215,150,245,1) 100%);
background: linear-gradient(to right, rgba(187,106,219,1) 0%, rgba(215,150,245,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bb6adb', endColorstr='#d796f5', GradientType=1 );
}

.slideStyle {
  position: relative;
  min-height: 200px;
  padding: 10px 0px 30px 0px;
}

.slideProps {
  width: 100vw;
}

.title {
  font-family: "sansprobold";
  color: white;
  font-size: 5vw;
  position: absolute;
  text-align: right;
  top: 50%;
  left: 77%;
  transform: translate(-50%, -50%);
}

.subtitle {
  font-family: "sansproblack";
  font-size: 2vw;
  color: white;
  position: absolute;
  text-align: right;
  top: 70%;
  left: 80%;
  transform: translate(-50%, -50%);
}
</style>
