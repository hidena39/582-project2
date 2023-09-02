<template>
  <div id="storeListBox">
    <div class="storeCardList">
      <OneStore
        v-for="(store, index) in liststore.stores"
        :key="store._id"
        :storeName="currentStoreName(index)"
      />
    </div>
  </div>
  <div id="iconTeam"><img src="@/assets/team-work.png" alt="" /></div>
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
body {
  display: grid;
}
div#storeListBox {
  min-width: 300px;
  background-color: rgb(199, 202, 248);
  border-radius: 2rem;
  margin: 1rem 1rem 0 1rem;
  padding: 2rem;
  justify-content: center;
}
div.storeCardList {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  
  border: 1px solid black;
}
img {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>
