<template>
  <main>
    <ScheckMain />
    <CarouselMain />
  </main>
</template>

<script>
import ScheckMain from '@/components/ScheckMain.vue';
import CarouselMain from '@/components/CarouselMain.vue';

export default {
  name: 'MainPage',
  components: {
    ScheckMain,
    CarouselMain,
  },
};
</script>

<style lang="scss" scoped>

</style>
