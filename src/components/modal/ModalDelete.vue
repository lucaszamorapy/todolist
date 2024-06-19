<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Excluir </v-card-title>
      <v-card-text class="mt-2"
        >Tem certeza que deseja excluir a tarefa?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('fechaModal')">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="handleDeleta()">
          Tenho certeza
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
    };
  },
  methods: {
    handleDeleta() {
      this.$store.dispatch("deleteTarefa", this.tarefa.id);
      this.$emit("fechaModal");
    },
  },
};
</script>

<style>
</style>
