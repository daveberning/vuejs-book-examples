<template>
<div class="row">
  <p><strong>Select your favorite SpaceX rocket.</strong></p>
  <div class="col" v-for="rocket in rockets"
  @click="selectFavorite(rocket.name)"
  :key="rocket.name">
    <item-card :rocket="rocket">
      <h3>Something, something, something, dark side.</h3>
    </item-card>
  </div>
  <div class="row" v-if="favoriteRocket">
    <div class="favorite">
      <h3>Your Favorite Rocket is the {{ favoriteRocket }}!</h3>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'home',
  components: {
    ItemCard,
  },
  methods: {
    ...mapActions(['addRocketsToState', 'addFavoriteRocketsToState']),
    selectFavorite(rocket) {
      this.addFavoriteRocketsToState(rocket);
    },
  },
  computed: {
    ...mapState([
      'rockets',
      'favoriteRocket',
    ]),
  },
  mounted() {
    axios.get('https://api.spacexdata.com/v2/rockets/').then((response) => {
      console.log(response.data);
      this.addRocketsToState(response.data);
    });
  },
};
</script>

<style lang="scss" scoped>
  .row {
    overflow: hidden;
    width: 100%;
  }

  .col {
    width: 33.33%;
    float: left;

    &:hover { cursor: pointer; }
  }

  .favorite {
    margin: 15px;
    text-align: left;
  }
</style>
