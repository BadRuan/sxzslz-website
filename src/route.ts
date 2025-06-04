import { createWebHistory, createRouter } from "vue-router";
import Home from "@/page/Home.vue";
import ArticleList from "@/page/NewsList.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/newslist",
    component: ArticleList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
