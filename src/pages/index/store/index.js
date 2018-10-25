import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import login_info from "./user/login_info";
import authorize from "./user/authorize";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    login_info,
    authorize
  }
});

export default store;
