<template>
  <div id="storeListBox">
    <h2>StoreList</h2>
    <div class="storeCardList">
      <OneStore
        v-for="(store, index) in liststore.stores"
        :key="store._id"
        :storeName="currentStoreName(index)"
      />
    </div>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import OneStore from "@/components/OneStore.vue";
export default {
  name: "StoreList",
  setup() {
    const liststore = useListStore();
    const currentStoreName = (index) => {
      return liststore.stores[index].storename;
    };
    return { liststore, currentStoreName };
  },
  // data() {
  //     return {
  //     };
  // },
  components: {
    OneStore,
  },
  // method: {
  // },
};
</script>
<style scoped lang="scss">
* {
  display: grid;
}
div#storeListBox {
  min-width: 300px;
  background-color: rgb(199, 202, 248);
  border-radius: 2rem;
  margin: 1rem;
  padding: 2rem;
}
div.storeCardList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
