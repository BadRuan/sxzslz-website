import { createWebHistory, createRouter } from "vue-router";
import Home from "@/page/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/newslist",
    component: () => import("@/page/NewsList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
