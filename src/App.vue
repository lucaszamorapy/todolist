<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="https://picsum.photos/1920/1080?random"
        dark
        class="pt-5 text-center"
      >
        <v-avatar size="100">
          <img src="./assets/perfil.jpg" alt="John" />
        </v-avatar>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Lista de Tarefas Diárias
            </v-list-item-title>
            <v-list-item-subtitle> Minhas Tarefas </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

    <v-app-bar
      color="dark"
      app
      dark
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <InputTarefa />
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from "./components/InputTarefa.vue";
export default {
  components: { InputTarefa },
  data: () => ({
    drawer: null,
    items: [
      { title: "Suas tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-help-box", to: "/sobre" },
    ],
  }),
};
</script>