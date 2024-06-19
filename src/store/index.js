import Vue from "vue";
import Vuex from "vuex";

import Localbase from "localbase";
let db = new Localbase("db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [],
  },
  getters: {},
  mutations: {
    setTarefas(state, tarefas) {
      state.tarefas = tarefas;
    },
    toggleConcluidoMutation(state, index) {
      state.tarefas[index].concluido = !state.tarefas[index].concluido;
    },
  },
  actions: {
    async getTarefa({ commit }) {
      db.collection("tarefas")
        .get()
        .then((tarefasDB) => {
          commit("setTarefas", tarefasDB);
        });
    },
    async createTarefa({ dispatch }, titulo) {
      db.collection("tarefas")
        .add({
          id: new Date().getTime(),
          titulo,
          concluido: false,
        })
        .then(() => {
          dispatch("getTarefa");
        });
    },
    async updateTarefa({ dispatch }, novaTarefa) {
      db.collection("tarefas").doc(
        { id: novaTarefa.id }
          .update({
            titulo: novaTarefa.titulo,
          })
          .then(() => {
            dispatch("getTarefa");
          })
      );
    },
    async deleteTarefa({ dispatch }, id) {
      await db
        .collection("tarefas")
        .doc({ id: id })
        .delete()
        .then(() => {
          dispatch("getTarefa");
        });
    },
  },
  modules: {},
});
