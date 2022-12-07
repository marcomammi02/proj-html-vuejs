<template>
  <div class="build-your-pizza-container">
    <div class="layer-one" />
    <div class="layer-two" />
    <div class="layer-three" />
    <div class="text">
      GO AHEAD AND <br>
      BUILD YOUR <br>
      OWN PIZZA <br>
      WE WON'T <br>
      JUDGE!
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuildYourPizzaMain',
};
</script>

<style lang="scss" scoped>
  .build-your-pizza-container {
    height: 400px;
    position: relative;
  }

  .layer-one {
    height: 25%;
    background-image: url('@/img/h3-background-img.jpg');
    background-size: 85%;
    background-position-x: center;
    background-position-y: bottom;
  }
  .layer-two {
    height: 50%;
    background-image: url('@/img/h3-background-img.jpg');
    background-size: 85%;
    background-position-x: center;
    background-position-y: top;
  }
  .layer-three {
    height: 25%;
    background-image: url('@/img/h3-background-img.jpg');
    background-size: 85%;
    background-position-x: center;
    background-position-y: 65%;
  }

  .text {
    font-weight: bold;
    color: #ffffff;
    font-size: 2.5rem;
    text-shadow: -3px 3px #888888;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translateY(-50%);
  }
</style>
