<template>
  <h1>{{ oneCategory }}</h1>

  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "OneCategory",
  props: {
    oneCategory: String,
  },
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
  computed: {
    items() {
      const storeName = this.$route.params.storename;
      const allItems = [];
      for (const store of this.liststore.stores) {
        //When categories are empty, it gives an error. So making it check if there are categories
        if (store.storename === storeName && store.categories) {
          for (let i = 0; i < store.categories.length; i++) {
            if (store.categories[i].category === this.oneCategory) {
              for (const item of store.categories[i].items) {
                allItems.push(item);
              }
            }
          }
        }
      }
      console.log("allItems", allItems);
      return allItems;
    },
  },

  // components: {

  // },
  // methods: {

  // },
};
</script>

<style scoped lang="scss">
* {
  color: red;
}
</style>
