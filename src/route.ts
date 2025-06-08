import { createWebHistory, createRouter } from "vue-router";
import Home from "@/page/Home.vue";
import NotFound from "@/page/NotFound.vue";
import NewsList from "@/page/news/list.vue";
import NewsContent from "@/page/news/content.vue";
import About from "@/page/About.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/news",
    name: "news",
    children: [
      {
        path: "",
        name: "list",
        component: NewsList,
      },
      {
        path: ":article_id",
        name: "content",
        component: NewsContent,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
