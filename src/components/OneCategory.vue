<template>
  <h1>{{ oneCategory }}</h1>
  <div></div>
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
    Items() {
      const storeName = this.$route.params.storename;
      const allItems = [];
      for (const store of this.liststore.stores) {
        //Ehnr categories are empty, it gives an error. So making it check if there are categories
        if (store.storename === storeName && store.categories) {
          if (categories.cateory === this.oneCategory) {
            for (let i = 0; i < store.categories.length; i++) {
              allItems.push(store.categories[i].items);
            }
          }
        }
      }
      console.log("allItems", allItems);
      return allItems;
    },
  },
  // data() {
  //     return {

  //     };
  // },
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
