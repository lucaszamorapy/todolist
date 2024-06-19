<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Editar </v-card-title>
      <v-card-text class="mt-2">Informe o novo título</v-card-text>
      <v-text-field
        class="px-5"
        label="Título"
        placeholder="Informe o título da tarefa"
        outlined
        v-model="titulo"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('fechaModal')">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="handleEditar()">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["tarefa"],
  data() {
    return {
      dialog: true,
      titulo: "",
    };
  },
  created() {
    if (this.tarefa) {
      this.titulo = this.tarefa.titulo;
    }
  },
  methods: {
    handleEditar() {
      let novaTarefa = {
        titulo: this.titulo,
        id: this.tarefa.id,
      };
      this.$store.dispatch("updateTarefa", novaTarefa);
      this.$emit("fechaModal");
    },
  },
};
</script>

<style>
</style>
