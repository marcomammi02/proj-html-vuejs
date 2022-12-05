<template>
  <header>
    <div class="navbar">
      <button>ORDER ONLINE</button>
      <ul>
        <li
          v-for="(objMenu, i) in menuHeader"
          :key="i"
        >
          <a>{{ objMenu.toUpperCase() }}</a>
        </li>
        <img
          class="moustache"
          src="@/svg/svg-0.svg"
          alt=""
        >
      </ul>
      <div class="btns">
        <div class="btn cart">
          <img
            src="@/svg/svg-1.svg"
            alt=""
          >
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
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
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
    padding: 2.5rem 0 25rem;
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
    position: absolute;
    width: 15px;
    top: 35%;
    left: -2%;
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

  li:hover a {
    color: #888888;
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

  span {
    margin-left: 3px;
  }
  .btn:hover span{
    color: #888888;
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
