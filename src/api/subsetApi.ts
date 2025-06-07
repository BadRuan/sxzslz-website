import { $get } from "@/utils/requests";

export const getSubset = async () => {
  let data = await $get("/api/subset", { page: 1, limit: 20 });
  return data.data;
};
