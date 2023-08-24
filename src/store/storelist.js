import { defineStore } from "pinia";

export const useListStore = defineStore("storelist", {
  state: () => ({ stores: [] }),

  actions: {
    addStore(store) {
      this.stores.push(store);
    },
  },
});
