import { $get } from "@/utils/requests";

export const get_subset = async () => {
  let data = await $get("/api/subset", { page: 1, limit: 20 });
  return data.data;
};
