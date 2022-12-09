<template>
  <div class="form-container">
    <form action="submit">
      <label for="person">
        <input
          name="person"
          type="number"
          placeholder="1 Person"
        >
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-user"
        />
      </label>
      <p>FOR</p>
      <label for="date">
        <input
          name="date"
          type="date"
          placeholder="../../...."
        >
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-calendar"
        />
      </label>
      <p>AT</p>
      <label for="time">
        <input
          name="time"
          type="time"
        >
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-clock"
        />
      </label>
      <button>BOOK A TABLE</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormMain',
};
</script>

<style lang="scss" scoped>
  .form-container {
    background-image: url('@/img/h3-background-img-3.jpg');
    height: 200px;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    align-items: center;
  }

  label {
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 0 5px;
  }

  input {
    width: 120px;
    height: 30px;
    border: none;
    color: #888888;
  }

  button {
    width: 130px;
    height: 34px;
    font-size: .7rem;
    border: 1px solid #000000;
    background-color: #d2401e;
    color: #ffffff;
    margin-left: 3rem;
  }

  input:focus {
    outline: none;
  }

  .icon {
    color: #d2401e;
    font-size: .9rem;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  p {
    margin: 0 1rem;
    color: #ffffff;
  }
</style>
