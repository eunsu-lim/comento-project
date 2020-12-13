import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    ads: [],
    detail: [],
    contentId: 1,
    filter: [],
    page: 1,
    ord: "asc",
  },
  mutations,
  actions,
});
