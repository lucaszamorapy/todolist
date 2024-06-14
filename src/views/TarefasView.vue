<template>
  <div>
    <v-list
      flat
      subheader
      
    >
      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <TarefaLista />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import TarefaLista from "../components/tarefas/TarefaLista.vue"
  export default {
    name: 'HomeView',

    components: {
      TarefaLista
    },
  }
</script>
