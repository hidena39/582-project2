<template>
  <h1>OneCategory</h1>
  <p>{{ liststore.stores }}</p>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "OneCategory",
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
  // data() {
  //     return {

  //     };
  // },
  // components: {

  // },
  // methods: {

  // },
  computed: {
    categories() {
      const storeName = this.$route.params.storename;
      const allcategories = [];
      for (const store of this.liststore.stores) {
        //Ehnr categories are empty, it gives an error. So making it check if there are categories
        if (store.storename === storeName && store.categories) {
          for (let i = 0; i < store.categories.length; i++) {
            allcategories.push(store.categories[i].category);
          }
        }
      }
      return allcategories;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  color: red;
}
</style>
