<template>
  <div class="storeCard">
    <h1>OneStore</h1>
    <p>{{ storeName }}</p>
  </div>
</template>

<script>
// import { useListStore } from "@/store/storelist";

export default {
  name: "OneStore",
  props: {
    storeName: {
      type: String,
    },
  },
  // setup() {
  //   const i = 0;
  //   const liststore = useListStore();
  //   const storeName = liststore.stores[i].storename;
  //   return { storeName };
  // },
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
  color: blue;
}
div.storeCard {
  width: 200px;
  border: 1px solid blue;
}
</style>
