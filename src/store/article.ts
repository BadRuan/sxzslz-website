import { reactive } from "vue";
import { defineStore } from "pinia";
import { getArticle } from "@/api/article";
import type { ArticleInter } from "@/model";

export const useArticleStore = defineStore("article", () => {
  const article_data = reactive<ArticleInter[]>([]);
  const get_article = async () => {
    let data = await getArticle();
    article_data.splice(0, article_data.length, ...data);
  };
  return { article_data, get_article };
});
