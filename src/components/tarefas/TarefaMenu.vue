<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleItemClick(item)"
        >
          <v-icon left>{{ item.icone }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Passa a tarefa para ModalEditar -->
    <ModalEditar
      v-if="items[0].modal"
      @fechaModal="items[0].modal = false"
      :tarefa="tarefa"
    />

    <ModalDelete
      v-if="items[1].modal"
      @fechaModal="items[1].modal = false"
      :tarefa="tarefa"
    />
  </div>
</template>

<script>
import ModalDelete from "../modal/ModalDelete.vue";
import ModalEditar from "../modal/ModalEditar.vue";

export default {
  props: ["tarefa"],
  components: { ModalEditar, ModalDelete },
  data() {
    return {
      items: [
        {
          icone: "mdi-pencil",
          title: "Editar",
          modal: false,
        },
        { icone: "mdi-trash-can", title: "Excluir", modal: false },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      if (item.title === "Editar") {
        item.modal = true;
      } else if (item.title === "Excluir") {
        item.modal = true;
      }
    },
  },
};
</script>

<style>
</style>
