<template>
  <div class="scheck-container">
    <img
      src="@/img/h3-img-1.jpg"
      alt=""
    ><img
      src="@/img/h3-img-2.jpg"
      alt=""
    ><img
      src="@/img/h3-img-3.jpg"
      alt=""
    ><img
      src="@/img/h3-img-4.jpg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'ScheckMain',
};
</script>

<style lang="scss" scoped>
  .scheck-container {
    padding: .5rem 0;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: calc((100% / 4) - .5rem);
    filter: brightness(.5);
  }

  img:hover {
    filter: brightness(1);
  }
</style>
