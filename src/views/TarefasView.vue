<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa de hoje?"
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <TarefaLista
            :tarefa="tarefa"
            @update-concluido="updateTarefaConcluido(index)"
          />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TarefaLista from "../components/tarefas/TarefaLista.vue";

export default {
  name: "HomeView",
  components: {
    TarefaLista,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit("addTarefa", this.campoInput);
      this.campoInput = null;
    },
    updateTarefaConcluido(index) {
      this.$store.commit("toggleConcluido", index);
    },
  },
};
</script>

<style>
</style>
