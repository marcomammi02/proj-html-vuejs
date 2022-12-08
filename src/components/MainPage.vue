<template>
  <main>
    <ScheckMain />
    <CarouselMain />
    <SpecialsMain />
    <BuildYourPizzaMain />
    <TeamMain />
  </main>
</template>

<script>
import ScheckMain from '@/components/ScheckMain.vue';
import CarouselMain from '@/components/CarouselMain.vue';
import SpecialsMain from '@/components/SpecialsMain.vue';
import BuildYourPizzaMain from '@/components/BuildYourPizzaMain.vue';
import TeamMain from '@/components/TeamMain.vue';

export default {
  name: 'MainPage',
  components: {
    ScheckMain,
    CarouselMain,
    SpecialsMain,
    BuildYourPizzaMain,
    TeamMain,
  },
};
</script>

<style lang="scss" scoped>

</style>
