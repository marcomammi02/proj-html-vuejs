<template>
  <main>
    <ScheckMain />
    <CarouselMain />
    <SpecialsMain />
    <BuildYourPizzaMain />
    <TeamMain />
    <SponsorsMain />
    <PizzaMenuMain />
    <DelishPizzaMain />
    <FormMain />
  </main>
</template>

<script>
import ScheckMain from '@/components/ScheckMain.vue';
import CarouselMain from '@/components/CarouselMain.vue';
import SpecialsMain from '@/components/SpecialsMain.vue';
import BuildYourPizzaMain from '@/components/BuildYourPizzaMain.vue';
import TeamMain from '@/components/TeamMain.vue';
import SponsorsMain from '@/components/SponsorsMain.vue';
import PizzaMenuMain from '@/components/PizzaMenuMain.vue';
import DelishPizzaMain from '@/components/DelishPizzaMain.vue';
import FormMain from '@/components/FormMain.vue';

export default {
  name: 'MainPage',
  components: {
    ScheckMain,
    CarouselMain,
    SpecialsMain,
    BuildYourPizzaMain,
    TeamMain,
    SponsorsMain,
    PizzaMenuMain,
    DelishPizzaMain,
    FormMain,
  },
};
</script>

<style lang="scss" scoped>

</style>
