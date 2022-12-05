<template>
  <header>
    <div class="navbar">
      <button>ORDER ONLINE</button>
      <ul>
        <li
          v-for="(objMenu, i) in menuHeader"
          :key="i"
        >
          <a
            v-if="(objMenu[i] == 0)"
            href="#"
          >
            {{ objMenu.toUpperCase() }}</a>
        </li>
      </ul>
      <div class="btns">
        <div class="btn cart">
          CART
        </div>
        <div class="btn search">
          SEARCH
        </div>
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
    padding-bottom: 25rem;
  }
  .navbar {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    font-size: .7rem;
  }

  button {
    color: #ffffff;
    background-color: #d2401e;
    border: none;
    padding: .7rem 1.5rem;
    font-size: .7rem;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin: 10px;
  }

  li:nth-child(3) {
    margin-right: 5rem;
  }
  li:nth-child(4) {
    margin-left: 5rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  .btns {
    display: flex;
    align-items: center;
    color: #ffffff;
  }
</style>
