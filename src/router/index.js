import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EachStoreView from "../views/EachStoreView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/each-store",
    name: "each-store",
    component: EachStoreView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
