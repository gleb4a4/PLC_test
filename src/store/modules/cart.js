import SeasonsDataService from "@/services/SeasonsDataService.js";
const state = {
    Episodes: [],
    Series: [],
};
const mutations = {
    setSeasons(state, payload) {
        state.Episodes = payload;
        state.Episodes.forEach((element) => {
            state.Series.push(element.series);
        });
    },
};
const actions = {
    getSeasons(context) {
        SeasonsDataService.getEpisodes().then((response) => {
            context.commit("setSeasons", response.data);
        });
    },
};
const getters = {
    getAllEpisodes(state) {
        return state.Episodes;
    },
    getAllSeries(state) {
        return state.Series;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};