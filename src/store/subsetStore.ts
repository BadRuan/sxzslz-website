import { reactive } from "vue";
import { defineStore } from "pinia";
import { get_subset } from "@/api/subsetApi";
import type { SubsetInter } from "@/model";

export const useSubsetStore = defineStore("subset", () => {
  const subsets = reactive<SubsetInter[]>([]);
  const getSubsets = async () => {
    let data = await get_subset();
    subsets.splice(0, subsets.length, ...data);
  };
  return { subsets, getSubsets };
});
