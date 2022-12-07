<template>
  <main>
    <ScheckMain />
    <CarouselMain />
    <SpecialsMain />
  </main>
</template>

<script>
import ScheckMain from '@/components/ScheckMain.vue';
import CarouselMain from '@/components/CarouselMain.vue';
import SpecialsMain from '@/components/SpecialsMain.vue';

export default {
  name: 'MainPage',
  components: {
    ScheckMain,
    CarouselMain,
    SpecialsMain,
  },
};
</script>

<style lang="scss" scoped>

</style>
