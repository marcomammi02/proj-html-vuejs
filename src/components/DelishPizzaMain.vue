<template>
  <div class="delish-pizza-container">
    <div class="event-box">
      <p class="up-title">
        MADE WITH LOVE
      </p>
      <h2 class="title">
        DELISH PIZZA DEALS
      </h2>
      <ul>
        <li>
          <div class="date">
            <p class="day">
              02
            </p>
            <p class="month">
              NOV
            </p>
          </div>
          <div class="event">
            <p>TRADITIONAL NEAPOLETAIN PIES IN KYOTO PIZZA MERCATO</p>
            <P class="place">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              204 E. Pizzetta Tommaso
            </P>
          </div>
        </li>
        <li>
          <div class="date">
            <p class="day">
              03
            </p>
            <p class="month">
              NOV
            </p>
          </div>
          <div class="event">
            <p>TERARAZZA PATIO DINING SPACE OPENING THIS WEEKEND</p>
            <P class="place">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              204 E. Pizzetta Tommaso
            </P>
          </div>
        </li>
        <li>
          <div class="date">
            <p class="day">
              05
            </p>
            <p class="month">
              NOV
            </p>
          </div>
          <div class="event">
            <p>SIENNA PRIVATE DINING ROOM WITH STÉPHANE BRUNN</p>
            <P class="place">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              204 E. Pizzetta Tommaso
            </P>
          </div>
        </li>
      </ul>
    </div>
    <div class="img-box">
      <img
        src="@/img/h3-img-5a.jpg"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelishPizzaMain',
};
</script>

<style lang="scss" scoped>

    .delish-pizza-container {
        display: flex;
    }
    .event-box {
        width: 50%;
        background-image: url('@/img/background-header.png');
        padding: 5rem  10rem 3rem 7rem;
        height: fit-content;
    }

    .up-title {
        color: #d2401e;
        font-size: .7rem;
    }

    .title {
        color: #ffffff;
        margin: .3rem 0 0;
    }

    li {
        list-style: none;
        color: #ffffff;
        display: flex;
        align-items: flex-start;
        padding: 2rem 0;
        border-bottom: 1px dotted #b7903c;
    }

    li:nth-child(3) {
        border-bottom: none;
    }

    .date {
        text-align: center;
        margin-right: 2.5rem;
    }

    .day {
        color: #d2401e;
        font-size: 2rem;
        font-weight: bold;
        margin-top: -7px;
    }

    .month {
        margin-top: -3px;
    }

    .place {
        color: #d2401e;
        font-size: .7rem;
        margin-top: 5px;
    }

    .img-box {
        width: 50%;
    }

    .img-box img {
        width: 100%;
    }

</style>
