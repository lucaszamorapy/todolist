import Vue from "vue";
import VueRouter from "vue-router";
import TarefasView from "../views/TarefasView.vue";
import SobreView from "../views/SobreView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Tarefas",
    component: TarefasView,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: SobreView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
