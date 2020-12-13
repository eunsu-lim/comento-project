import { fecthList, fetchAds, fetchDetail, fetchFilter } from "../api/index.js";

export default {
  async FETCH_LIST({ commit }, pageNum) {
    const res = await fecthList(pageNum);
    commit("SET_LIST", res);
    return res;
  },
  async FETCH_ADS({ commit }) {
    const res = await fetchAds();
    commit("SET_ADS", res);
    return res;
  },
  async FETCH_DETAIL({ commit }, id) {
    const res = await fetchDetail(id);
    commit("SET_DETAIL", res);
    return res;
  },
  async FETCH_FILTER({ commit }) {
    const res = await fetchFilter();
    commit("SET_FILTER", res);
    return res;
  },
};
