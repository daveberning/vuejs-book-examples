import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rockets: [],
    favoriteRocket: ''
  },
  mutations: {
    ADD_ROCKETS (state, payload) {
      state.rockets = payload;
    },
    ADD_FAV_ROCKET (state, payload) {
      state.favoriteRocket = payload;
    }
  },
  actions: {
    addRocketsToState ({ commit }, payload) {
      commit('ADD_ROCKETS', payload);
    },
    addFavoriteRocketsToState ({ commit }, payload) {
      commit('ADD_FAV_ROCKET', payload);
    }
  },
});
