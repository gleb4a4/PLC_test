const state = {
    ModalVisible: false,
};
const mutations = {
    showModal(state) {
        state.ModalVisible = true;
    },
    hideModal(state) {
        state.ModalVisible = false;
    },
};
const actions = {};
const getters = {
    getModalVisible(state) {
        return state.ModalVisible;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};