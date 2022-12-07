<template>
  <div class="carousel-container">
    <div
      v-for="(objSlide, i) in arrText"
      :key="i"
      class="objSlide"
      :class="i == activeIndex ? 'active' : ''"
    >
      <font-awesome-icon
        class="quote"
        icon="fa-solid fa-quote-left"
      />
      <p class="text">
        {{ '"' + objSlide.text.toUpperCase() + '"' }}
      </p>
      <p class="place-date">
        {{ objSlide.place.toUpperCase() + ' POST ' + objSlide.date }}
      </p>
      <div

        class="counter"
      >
        <div
          v-for="(objSlide, i) in arrText"
          :key="i"
          :class="i == activeIndex ? 'active-point' : ''"
          class="point"
        />
      </div>
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
  name: 'CarouselMain',
  data() {
    return {
      arrText: [
        {
          text: 'forget the pizza shops, this hidden spot makes the best new york-style pizza slice in naples',
          place: 'washington',
          date: '2018',
        },
        {
          text: 'happiness is turning around and realizing that there is another piece of pizza on the plate',
          place: 'new york',
          date: '2015',
        },
        {
          text: 'neapolitans have always had their fast food. It\'s called pizza',
          place: 'naples',
          date: '2002',
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    changeSlide(direction) {
      if (direction > 0) {
        this.activeIndex += 1;
        if (this.activeIndex === this.arrText.length) {
          this.activeIndex = 0;
        }
      } else {
        if (this.activeIndex === 0) {
          this.activeIndex = this.arrText.length;
        }
        this.activeIndex -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .carousel-container {
    background-image: url('@/img/h3-testimonials-bckgrnd.jpg');
    height: 300px;
    background-position: center;
    background-size: contain;
    position: relative;
  }

  .objSlide {
    display: none;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .quote {
    font-size: 2.5rem;
    color: #b7903c;
  }

  .text {
    text-align: center;
    font-weight: bold;
    margin: .7rem 0;
  }

  .place-date {
    font-size: .7rem;
    font-weight: bold;
    color: #d2401e;
  }

  .counter {
    display: flex;
    gap: 8px;
    margin-top: .7rem;
  }

  .point {
    padding: 4px;
    background-color: #888888;
    border-radius: 100px;
  }

  .active-point {
    background-color: #b7903c;
  }

  .active {
    display: flex;
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
