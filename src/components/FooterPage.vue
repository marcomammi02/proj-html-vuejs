<template>
  <footer>
    <div class="list-box">
      <ul class="restaurant-list">
        <h3>FIND OUR RESTAURANT</h3>
        <li
          v-for="objRestaurant in arrRestaurant"
          :key="objRestaurant.street"
        >
          <p>{{ objRestaurant.street }}</p>
          <p>{{ objRestaurant.town }}</p>
          <p>{{ objRestaurant.phone }}</p>
        </li>
      </ul>
      <ul class="working-hours">
        <h3>WORKING HOURS</h3>
        <li>
          <h4>MONDAY</h4>
          <p class="closed">
            Kithcen Closed
          </p>
        </li>
        <li>
          <h4>TUESDAY UNTIL FRIDAY</h4>
          <p>9:00 - 22:00</p>
        </li>
        <li>
          <h4>SATURDAY<span class="asterix">*</span></h4>
          <p>Saturday 11am to midnight</p>
        </li>
        <li>
          <h4>SUNDAY</h4>
          <p>9:00 - 22:00</p>
        </li>
        <li class="social">
          <h4>FOLLOW US:</h4>
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-twitter"
          />
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-facebook-f"
          />
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-instagram"
          />
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-linkedin-in"
          />
        </li>
      </ul>
      <p class="text">
        THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.
      </p>
      <p class="copyright">
        Created with &hearts; by <span class="my-name">Marco Mammì</span>
      </p>
      <img
        class="quality-icon"
        src="@/img/footer-icon.png"
        alt=""
      >
    </div>
    <div class="img-box" />
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  props: {
    arrRestaurant: Array,
  },
};
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    height: 475px;
  }

  .list-box {
    width: 50%;
    background-image: url('@/img/background-header.png');
    display: flex;
    justify-content: space-around;
    padding: 5rem 5rem 0 3rem;
    position: relative;
  }

  h3 {
    color: #b7903c;
    font-size: .9rem;
  }

  h4 {
    color: #b7903c;
    font-size: .8rem;
  }

  li {
    list-style: none;
    color: #888888;
    margin-top: 1rem;
  }

  .closed {
    color: #d2401e;
  }

  .asterix {
    color: #d2401e;
    margin-left: 5px;
  }

  .social {
    margin-top: 2rem;
  }

  .social h4 {
    display: inline;
  }

  .icon {
    color: #ffffff;
    margin-left: 8px;
    font-size: .8rem;
  }

  p {
    font-size: .7rem;
  }

  ul {
    width: 33.3%;
  }

  .text {
    width: 33.3%;
    color: #ffffff;
    font-size: 1.2rem;
  }

  .copyright {
    position: absolute;
    bottom: 1.5rem;
    left: 3rem;
    color: #b7903c;
  }

  .my-name {
    color: #888888;
  }

  .quality-icon {
    position: absolute;
    bottom: 1.5rem;
    right: 3rem;
    width: 100px;
  }

  .img-box {
    width: 50%;
    background-image: url('@/img/footer-img-1.jpg');
    background-size: contain;
  }

  .img-box img {
    width: 100%;
  }
</style>
