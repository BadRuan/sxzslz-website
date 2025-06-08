import { reactive, toRef } from "vue";
import { defineStore } from "pinia";
import { get_article_list, get_article_detail } from "@/api/articleApi";
import type { ArticleInter } from "@/model";

export const useArticleStore = defineStore("article", () => {
  const articles = reactive<ArticleInter[]>([]);
  let article: ArticleInter = reactive({
    article_id: 0,
    user_id: 0,
    subset_id: 0,
    title: "",
    content: "",
    state: true,
    create_time: "",
    read_count: 0,
  });

  const getArticles = async (page: number) => {
    let data = await get_article_list(page);
    articles.splice(0, articles.length, ...data);
  };
  const getArticle = async (article_id: number) => {
    let data = await get_article_detail(article_id);
    article.article_id = data["article_id"];
    article.user_id = data["user_id"];
    article.subset_id = data["subset_id"];
    article.title = data["title"];
    article.content = data["content"];
    article.create_time = data["create_time"];
    article.read_count = data["read_count"];
  };

  return { articles, article, getArticles, getArticle };
});
