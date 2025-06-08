import { $get } from "@/utils/requests";

export const get_article_list = async (page: number) => {
  let data = await $get("/api/article", "");
  return data.data;
};

export const get_article_detail = async (article_id: number) => {
  let data = await $get(`/api/article/${article_id}`, "");
  return data.data;
};
