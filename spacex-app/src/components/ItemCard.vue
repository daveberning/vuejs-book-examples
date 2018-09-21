<template lang="html">
  <div class="card">
    <h2>{{ rocket.name }}</h2>
    <ul>
      <li>Active: <span v-if="rocket.active">Yes</span><span v-if="!rocket.active">No</span></li>
      <li>Stages: {{ rocket.stages }}</li>
      <li>Boosters: {{ rocket.boosters }}</li>
      <li>First Flight: {{ rocket.first_flight }}</li>
      <li>Height: {{ rocket.height.feet }}</li>
      <li>Diameter: {{ rocket.diameter.feet }}</li>
    </ul>
    <p>{{ rocket.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['rocket'],
};
</script>

<style lang="scss" scoped>
  .card {
    border: 1px solid #ccc;
    margin: 15px;
    padding: 15px;
    border-radius: 2px;

    p {
      text-align: left;
    }
  }

  ul {
    padding: 0;

    li {
      text-align: left;
      list-style: none;
    }
  }
</style>
