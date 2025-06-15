import { reactive } from "vue";
import { defineStore } from "pinia";
import { get_subset } from "@/api/subsetApi";
import type { SubsetInter } from "@/model";

export const useSubsetStore = defineStore("subset", () => {
  const subsets = reactive<SubsetInter[]>([
    {
      subset_id: 0,
      subset_name: "信息",
      subset_type: 1,
      create_time: "",
    },
  ]);
  const getSubsets = async () => {
    let data = await get_subset();
    subsets.splice(0, subsets.length, ...data);
  };
  return { subsets, getSubsets };
});
