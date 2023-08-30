<template>
  <div class="listcontainer">
    <h1>{{ oneCategory }}</h1>
    <ul>
      <OneItem
        v-for="item in items"
        :key="item"
        :oneItem="item"
        :oneCategory="oneCategory"
      />
    </ul>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import OneItem from "@/components/OneItem.vue";
export default {
  name: "OneCategory",
  components: {
    OneItem,
  },
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
};
</script>

<style scoped lang="scss">
* {
  color: red;
  padding: 0;
}
.listcontainer {
  max-width: 1000px;
  margin: 0 auto;
}
li {
  list-style: none;
  display: block;
  background-color: yellow;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 1rem;
}
</style>
