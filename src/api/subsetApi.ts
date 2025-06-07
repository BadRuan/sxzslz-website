import { $get } from "@/utils/requests";

export const getSubset = async () => {
  let data = await $get("/api/subset", "");
  return data.data;
};
