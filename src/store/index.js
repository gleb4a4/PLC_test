import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart.js";
import modal from "./modules/modal.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
        modal,
    },
});