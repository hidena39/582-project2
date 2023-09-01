import { defineStore } from "pinia";

export const useListStore = defineStore("storelist", {
  state: () => ({ stores: [] }),
});
