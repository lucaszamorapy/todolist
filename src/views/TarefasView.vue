<template>
  <div>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div
          v-if="$store.state.tarefas.length === 0"
          class="mt-16 animate__animated animate__bounceInUp"
        >
          <center>
            <v-icon size="100" color="primary">mdi-check</v-icon>
            <p class="text-h6 primary--text">Nenhuma tarefa</p>
          </center>
        </div>
        <div v-else>
          <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
            <TarefaLista
              :tarefa="tarefa"
              @update-concluido="updateTarefaConcluido(index)"
            />
          </div>
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
  created() {
    this.$store.dispatch("getTarefa");
  },
};
</script>

<style>
</style>
