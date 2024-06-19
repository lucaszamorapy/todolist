<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefa.concluido }"
      @click="toggleConcluido"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluido }"
          >
            {{ tarefa.titulo }}
          </v-list-item-title>
        </v-list-item-content>
        <TarefaMenu :tarefa="tarefa" />
        <v-list-item-action>
          <!-- <v-btn icon @click.stop="handleRemoveTarefa(tarefa.id)">
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn> -->
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from "../tarefas/TarefaMenu.vue";
export default {
  components: { TarefaMenu },
  props: ["tarefa"],
  methods: {
    toggleConcluido() {
      this.$emit("update-concluido");
    },
  },
};
</script>

<style>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
