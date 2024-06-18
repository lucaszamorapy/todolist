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
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false,
        });
      }
    },
    toggleConcluidoMutation(state, index) {
      state.tarefas[index].concluido = !state.tarefas[index].concluido;
    },
    deleteTarefa(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },
    editTarefa(state, novaTarefa) {
      const index = state.tarefas.findIndex(
        (tarefa) => tarefa.id === novaTarefa.id
      );
      console.log(index);
      if (index !== null) {
        state.tarefas[index].titulo = novaTarefa.titulo;
      }
    },
  },
  actions: {},
  modules: {},
});
