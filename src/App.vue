<template>
  <div>
    <HeaderPage :arr-menu-header="arrMenuHeader" />
    <MainPage />
    <FooterPage :arr-restaurant="arrRestaurant" />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
  data() {
    return {
      arrMenuHeader: [
        'home',
        'pages',
        'menu',
        'event',
        'blog',
        'landing',
      ],
      arrRestaurant: [
        {
          street: '1614 E.Bell Rd #104',
          town: 'Salerno, AZ 85022',
          phone: '(602) 867-1010',
        },
        {
          street: '204 E. Pizzetta Tommaso',
          town: 'Sorrento, AZ 85022',
          phone: '(358) 867-1010',
        },
        {
          street: 'Vale Puglia 54',
          town: 'Torre Del Greco, AZ 85022',
          phone: '(359) 867-1010',
        },
        {
          street: 'Corso Itali AA',
          town: 'Naples, AZ 85022',
          phone: '(989) 867-1010',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>
