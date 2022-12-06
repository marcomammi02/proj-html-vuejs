<template>
  <div class="carousel-container">
    <div
      v-for="(objSlide, i) in arrImages"
      :key="objSlide.image"
      class="objSlide"
      :class="i == activeIndex ? 'active' : ''"
    >
      <img
        class="img-background"
        alt=""
        :src="require(`@/img/${objSlide.backgroundImage}`)"
      >
      <img
        class="img-front"
        :src="require(`@/img/${objSlide.image}`)"
        alt=""
      >
    </div>
    <div class="comands">
      <div
        class="btn btn-next"
        @click="changeSlide(1)"
        @keyup="''"
      >
        NEXT
      </div>
      <div
        class="btn btn-prev"
        @click="changeSlide(-1)"
        @keyup="''"
      >
        PREV
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselHeader',
  data() {
    return {
      arrImages: [
        {
          image: 'h3-rev-img-2.png',
          backgroundImage: 'h3-rev-img-1.png',
        },
        {
          image: 'h3-rev-img-4.png',
          backgroundImage: 'h3-rev-img-3.png',
        },
        {
          image: 'h3-rev-img-6.png',
          backgroundImage: 'h3-rev-img-5.png',
        },
      ],

      activeIndex: 0,
    };
  },
  methods: {
    changeSlide(direction) {
      if (direction > 0) {
        this.activeIndex += 1;
        if (this.activeIndex === this.arrImages.length) {
          this.activeIndex = 0;
        }
      } else {
        if (this.activeIndex === 0) {
          this.activeIndex = this.arrImages.length;
        }
        this.activeIndex -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .carousel-container {
    height: 350px;
    margin-top: 1.5rem;
    position: relative;
  }

  .objSlide {
    display: none;
  }

  .active {
    display: block;
  }

  .img-background {
    width: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .img-front {
    width: 230px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .comands {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    background-color: #ffffff;
    color: #d2401e;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    font-size: .8rem;
    padding: .5rem .8rem 0;
    margin: 0;
    cursor: pointer;
  }

  .btn-next {
    transform: rotate(-90deg);
    margin-right: -15px;
  }

  .btn-prev {
    transform: rotate(90deg);
    margin-left: -15px;
  }
</style>
