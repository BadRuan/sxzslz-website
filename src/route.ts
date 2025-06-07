import { createWebHistory, createRouter } from "vue-router";
import Home from "@/page/Home.vue";
import NotFound from "@/page/NotFound.vue";
import NewsList from "@/page/news/list.vue";
import NewsContent from "@/page/news/content.vue";
const routes = [
  {
    path: "/",
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
    component: import("@/page/About.vue"),
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
