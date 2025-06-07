import { reactive } from "vue";
import { defineStore } from "pinia";
import { getSubset } from "@/api/subsetApi";
import type { SubsetInter } from "@/model";

export const useSubsetStore = defineStore("subset", () => {
  const subset_data = reactive<SubsetInter[]>([]);
  const get_subset = async () => {
    let data = await getSubset();
    subset_data.splice(0, subset_data.length, ...data);
  };
  return { subset_data, get_subset };
});
