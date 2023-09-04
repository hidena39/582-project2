<template>
  <div class="boxes" id="allCategoryBox">
    <div class="storeCardList">
      <OneCategory
        v-for="category in categories"
        :key="category"
        :oneCategory="category"
      />
    </div>
    <img src="@/assets/collecting.png" alt="" />
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
  components: {
    OneCategory,
  },
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
div#allCategoryBox {
  border: 2px dashed black;
  height: fit-content;
}
img {
  display: block;
  margin-left: auto;
  width: 50vw;
  max-width: 200px;
  height: auto;
}
</style>
