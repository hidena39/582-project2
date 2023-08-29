<template>
  <h1>AllCategories</h1>
  <div class="storeCardList">
    <OneCategory
      v-for="category in categories"
      :key="category"
      :oneCategory="category"
    />
    <!-- <OneCategory v-for="item in itemToList" :key="item" /> -->
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import OneCategory from "@/components/OneCategory.vue";

export default {
  name: "AllCategories",
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
  // data() {
  //     return {

  //     };
  // },
  components: {
    OneCategory,
  },
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
<!-- 
<style lang="scss">
</style> -->
