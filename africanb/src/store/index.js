import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAuthentified : {}, 
    isAuthentified : false,
  },

  getters: {

  },

  mutations: {

    LOGIN_USER(state) {
      state.isAuthentified = true ; 
    },

    UPDATE_USER_PROFIL(state , data) {
      state.userAuthentified = data
    },

    SET_USER_AUTHENTIFIED(state , data) {
      state.userAuthentified = data ; 
    },

    DESTROY_SESSION_USER(state) {
      state.isAuthentified = false ;
    },


  },
  actions: {

  },
  modules: {
    
  }
})
