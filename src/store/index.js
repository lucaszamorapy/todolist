import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [
      {
        id: 1,
        titulo: "Ir ao mercado",
        concluido: false,
      },
      { id: 2, titulo: "Comprar ração", concluido: false },
    ],
  },
  getters: {},
  mutations: {
    addTarefa(state, titulo) {
      // titulo se torna change do v-model campoInput
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false,
        }); // Limpar o campo de input após adicionar
      }
    },
  },
  actions: {},
  modules: {},
});
