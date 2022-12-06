<template>
  <header>
    <div class="navbar">
      <button>ORDER ONLINE</button>
      <ul>
        <li
          v-for="(objMenu, i) in menuHeader"
          :key="i"
        >
          <img
            v-if="(i == 0)"
            class="moustache"
            src="@/svg/svg-0.svg"
            alt=""
          >
          <a>{{ objMenu.toUpperCase() }}</a>
        </li>
      </ul>
      <div class="btns">
        <div class="btn cart">
          <img
            src="@/svg/svg-1.svg"
            alt=""
          >
          <div class="cart-number">
            0
          </div>
          <span>CART</span>
        </div>
        <div class="btn search">
          <font-awesome-icon
            class="search-icon"
            icon="fa-solid fa-magnifying-glass"
          />
          <span>SEARCH</span>
        </div>
        <img
          class="logo"
          src="@/img/h5-logo-divided-header.png"
          alt=""
        >
      </div>
    </div>
    <CarouselHeader />
  </header>
</template>

<script>
import CarouselHeader from '@/components/CarouselHeader.vue';

export default {
  name: 'HeaderPage',
  components: {
    CarouselHeader,
  },
  data() {
    return {
      menuHeader: [
        'home',
        'pages',
        'menu',
        'event',
        'blog',
        'landing',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  header {
    background-image: url('@/img/background-header.png');
    padding: 2.5rem 0 1.5rem;
  }
  .navbar {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: .7rem;
    position: relative;
  }

  button {
    color: #ffffff;
    background-color: #d2401e;
    border: none;
    padding: .7rem 1.5rem;
    font-size: .7rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #ffffff;
    color: #000000;
    transition: .5s;
  }

  ul {
    display: flex;
    position: relative;
  }

  .moustache {
    width: 15px;
    margin-right: 3px;
  }

  li {
    list-style: none;
    margin: 10px;
    cursor: pointer;
  }

  li:nth-child(3) {
    margin-right: 6rem;
  }
  li:nth-child(4) {
    margin-left: 6rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  li:hover {
    filter: brightness(50%);
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #ffffff;
  }

  .btn {
    cursor: pointer;
  }

  .cart {
    position: relative;
  }

  .cart-number {
    color: #d2401e;
    background-color: #ffffff;
    border-radius: 50%;
    font-size: .6rem;
    padding: 0 4px;
    position: absolute;
    top: -3px;
    left: -5px;
  }

  span {
    margin-left: 3px;
  }
  .btn:hover {
    filter: brightness(50%);
  }

  .btn img {
    width: 20px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 14px;
  }

  .logo {
    width: 130px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
