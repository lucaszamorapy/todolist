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
        <!--Passo para meu component com o @ -->
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
      this.tarefas[index].concluido = !this.tarefas[index].concluido; //Estou pegando pelo index de cada tarefa e dizendo ao contrário dele (como se fosse o !state no react)
    },
  },
};
</script>

<style>
</style>
