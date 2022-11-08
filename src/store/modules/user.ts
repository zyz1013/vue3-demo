import { ActionTree, MutationTree } from "vuex";

interface UserState {
  username: string;
  userId: number;
}

const state: UserState = {
  username: "admin",
  userId: 0,
};

const mutations: MutationTree<UserState> = {
  UPDATE_USERNAME: (state, newUserName) => {
    state.username = newUserName;
  },
};

const actions: ActionTree<UserState, any> = {
  UPDATE_USERNAME_ASYNC: ({ commit }, newUserName) => {
    setTimeout(() => {
      commit("UPDATE_USERNAME", newUserName);
    }, 2000);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
