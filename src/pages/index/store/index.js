import Vue from "vue";
import Vuex from "vuex";
import login_info from "./user/login_info";
import authorize from "./user/authorize";
import stats from "./layout/stats";
import tabs from "./tab/tabs";
import getters from "./getters";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stats,
    login_info,
    authorize,
    tabs
  },
  getters
});

export default store;
