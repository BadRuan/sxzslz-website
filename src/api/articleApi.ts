import { $get } from "@/utils/requests";

export const get_article_list = async (
  subset: number,
  page: number,
  limit: number
) => {
  let data = await $get("/api/article", {
    subset: subset,
    page: page,
    limit: limit,
  });
  return data.data;
};

export const get_article_detail = async (article_id: number) => {
  let data = await $get(`/api/article/${article_id}`, "");
  return data.data;
};
