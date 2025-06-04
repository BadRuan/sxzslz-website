import { $get } from "@/utils/requests";

export const getArticle = async () => {
  let data = await $get("/api/article", "");
  return data.data;
};
