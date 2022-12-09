<template>
  <div>
    <img
      src="@/svg/svg-4.svg"
      alt=""
      class="pizza-slice"
    >
  </div>
</template>

<script>
export default {
  name: 'PizzaSliceIcon',
};
</script>

<style lang="scss" scoped>
  div {
    background-color: #f6f7f2;
    padding: 8px 12px;
    border-radius: 50%;
    cursor: pointer;
  }

  img {
    width: 15px;
  }
</style>
