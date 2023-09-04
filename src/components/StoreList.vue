<template>
  <div class="boxes" id="storeListBox">
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
  components: {
    OneStore,
  },
};
</script>
<style scoped lang="scss">
body {
  display: grid;
}
div#storeListBox {
  border: 2px dashed black;
}
div.storeCardList {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 140px);
  grid-gap: 10px;
  justify-content: center;
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(auto-fit, 150px);
    grid-gap: 12px;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, 180px);
    grid-gap: 14px;
  }
}
</style>
