import { createWebHistory, createRouter } from "vue-router";
import Home from "@/page/Home.vue";
import ArticleList from "@/page/NewsList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/newslist",
    name: "newslist",
    component: ArticleList,
  },
  {
    path: "/about",
    name: "about",
    component: import("@/page/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
