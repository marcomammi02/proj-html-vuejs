<template>
  <div class="menu-container">
    <p class="up-title">
      CHOOSE YOUR FAVOURITE
    </p>
    <h2>THE BEST PIZZA MENU IN TOWN</h2>
    <!-- eslint-disable-next-line -->
    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, veritatis aperiam at cumque consequuntur iste deserunt voluptates molestiae tenetur maxime autem vitae. Et obcaecati natus autem repudiandae quasi eligendi porro!</p>
    <Carousel
      :per-page-custom="[[1024, 4.5]]"
      class="carousel"
    >
      <Slide
        v-for="objMenu in arrMenu"
        :key="objMenu.pizza"
        class="slide"
      >
        <img
          :src="require(`@/img/${objMenu.img}`)"
          alt=""
        >
        <div
          v-if="objMenu.sold"
          class="sold-icon"
        >
          SOLD
        </div>
        <p class="pizza-name">
          {{ objMenu.pizza.toUpperCase() }}
        </p>
        <p class="price">
          <span
            v-if="objMenu.discount"
            class="discount"
          >{{ objMenu.discount }}</span>
          {{ objMenu.price }}
        </p>
      </Slide>
    </Carousel>
    <div class="hider" />
    <PizzaSliceIcon class="pizza-slice-icon" />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import PizzaSliceIcon from '@/components/PizzaSliceIcon.vue';

export default {
  name: 'PizzaMenuMain',
  components: {
    Carousel,
    Slide,
    PizzaSliceIcon,
  },
  data() {
    return {
      arrMenu: [
        {
          pizza: 'bismarck',
          price: '$30.00',
          img: 'h3-product-img-1a-100x100.png',
          sold: false,
          discount: '$35.00',
        },
        {
          pizza: 'fiori di zucca',
          price: '$7.00 - $50.00',
          img: 'h3-product-img-2a-150x150.png',
          sold: false,
          discount: false,
        },
        {
          pizza: 'valdostana',
          price: '$55.00',
          img: 'h3-product-img-3a-150x150.png',
          sold: true,
          discount: false,
        },
        {
          pizza: 'pizza tartufata',
          price: '$45.00',
          img: 'h3-product-img-4a-150x150.png',
          sold: false,
          discount: false,
        },
        {
          pizza: 'francescana',
          price: '$25.00',
          img: 'h3-product-img-5a-150x150.png',
          sold: false,
          discount: '$30.00',
        },
        {
          pizza: 'campagnola',
          price: '$50.00 - $95.00',
          img: 'h3-product-img-6a-100x100.png',
          sold: true,
          discount: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .menu-container {
    text-align: center;
    padding-top: 3rem;
    position: relative;
  }

  .up-title {
    color: #d2401e;
    font-weight: bold;
    font-size: .8rem;
    margin-bottom: 5px;
  }

  .description {
    max-width: 700px;
    margin: 10px auto;
    color: #888888;
    margin-bottom: 5rem;
  }

  .carousel {
    cursor: grab;
  }

  .slide {
    position: relative;
  }

  img {
    width: 150px;
  }

  .sold-icon {
    background-color: #d2401e;
    color: #ffffff;
    width: fit-content;
    border-radius: 100px;
    font-size: .7rem;
    padding: 11px 5px;
    position: absolute;
    top: 0;
    right: 25%;
  }

  .pizza-name {
    color: #b7903c;
    margin: 5px 0;
  }

  .discount {
    color: #888888;
    text-decoration: line-through;
    margin-right: 5px;
  }

  .price {
    color: #d2401e;
    font-size: .9rem;
  }

  .hider {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
  }

  .pizza-slice-icon {
    position: absolute;
    top: 30%;
    right: 1rem;
  }
</style>
