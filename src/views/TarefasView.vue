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
        <div v-for="(tarefa, index) in tarefas" :key="index">
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
      tarefas: [
        {
          titulo: "Ir ao mercado",
          concluido: false,
        },
        {
          titulo: "Comprar ração",
          concluido: false,
        },
      ],
    };
  },
  methods: {
    handleAddTarefa() {
      if (this.campoInput) {
        this.tarefas.push({ titulo: this.campoInput, concluido: false });
        this.campoInput = null; // Limpar o campo de input após adicionar
      }
    },
    updateTarefaConcluido(index) {
      this.tarefas[index].concluido = !this.tarefas[index].concluido;
    },
  },
};
</script>

<style>
</style>
