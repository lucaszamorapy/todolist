<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa de hoje?"
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      this.$store.dispatch("createTarefa", this.campoInput);
      this.campoInput = null;
    },
    updateTarefaConcluido(index) {
      this.$store.commit("toggleConcluidoMutation", index);
    },
  },
};
</script>

<style>
</style>