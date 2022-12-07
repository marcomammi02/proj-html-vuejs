<template>
  <div class="specials-container">
    <div class="img-box">
      <img
        src="@/img/h1-img-4.jpg"
        alt=""
      >
      <img
        class="logo"
        src="@/img/h1-img-7n.png"
        alt=""
      >
    </div>
    <div class="specials-box">
      <div class="specials-text">
        <h2>SPECIALS*</h2>
        <p>
          <!-- eslint-disable-next-line -->
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <ul>
          <li>
            <span>$10</span>
            <h3>COMBO PICCOLO</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li>
            <span>$20</span>
            <h3>COMBO MEZZO</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li>
            <span>$30</span>
            <h3>COMBO GRANDE</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialsMain',
};
</script>

<style lang="scss" scoped>
  .specials-container {
    display: flex;
    padding: .5rem 0 .2rem;
  }

  .img-box {
    width: calc(100% / 2);
    position: relative;
  }

  img {
    width: 100%;
  }

  .logo {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .specials-box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .specials-text {
    width: 50%;
  }

  p {
    color: #888888;
    font-size: .8rem;
    margin: .4rem 0 .8rem;
  }

  li {
    list-style: none;
  }

  span {
    color: #d2401e;
    font-weight: bold;
    margin-right: .5rem;
  }

  h3 {
    display: inline;
    font-size: 1rem;
  }

  .description {
    margin-left: 2rem;
  }
</style>
