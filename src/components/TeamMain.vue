<template>
  <div class="cards-container">
    <div
      v-for="objTeam in arrTeam"
      :key="objTeam.name"
      class="card"
    >
      <img
        alt=""
        :src="require(`@/img/${objTeam.img}`)"
      >
      <div
        class="card-detail"
      >
        <p class="name">
          {{ objTeam.name }}
        </p>
        <p class="role">
          {{ objTeam.role }}
        </p>
        <div class="social-box">
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TeamMain',
  data() {
    return {
      arrTeam: [
        {
          name: 'Giacomo Original',
          role: 'Co-founder / Cook',
          img: 'h1-team-1a-700x700.jpg',
        },
        {
          name: 'Silvia Rossi',
          role: 'Waitress',
          img: 'h1-team-2a.jpg',
        },
        {
          name: 'Frank Bailay',
          role: 'Co-founder / Cook',
          img: 'h1-team-3a.jpg',
        },
        {
          name: 'Rita Margherita',
          role: 'Waitress',
          img: 'h1-team-4a.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .cards-container {
    display: flex;
    padding: .5rem 0;
  }

  .card {
    width: 25%;
    position: relative;
  }

  img {
    width: 100%;
  }

  .card-detail {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d2401e;
    border: 1rem solid #ffffff;
    color: #ffffff;
    display: none;
    flex-direction: column;
    gap: .5rem;
    justify-content: center;
    align-items: center;
  }

  .name {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .role {
    font-size: .9rem;
  }

  .social-box{
    display: flex;
    gap: .8rem;
  }

  .card:hover .card-detail{
    display: flex;
  }

</style>
