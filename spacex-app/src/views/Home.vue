<template>
  <div>
    <div class="row">
      <p><strong>Select your favorite SpaceX rocket.</strong></p>
      <div class="col" v-for="rocket in $store.state.rockets" @click="selectFavorite(rocket.name)">
        <ItemCard :rocket="rocket" />
      </div>
      <div class="row" v-if="$store.state.favoriteRocket">
        <div class="favorite">
          <h3>Your Favorite Rocket is the {{ $store.state.favoriteRocket }}!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'home',
  components: {
    ItemCard
  },
  methods: {
    ...mapActions(['addRocketsToState', 'addFavoriteRocketsToState']),
    selectFavorite (rocket) {
      this.addFavoriteRocketsToState(rocket);
    }
  },
  mounted() {
    axios.get(`https://api.spacexdata.com/v2/rockets/`).then(response => {
      console.log(response.data);
      this.addRocketsToState(response.data);
    });
  }
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
