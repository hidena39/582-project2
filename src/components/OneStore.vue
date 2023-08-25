<template>
  <div class="storeCard">
    <h1>OneStore</h1>
    <p>{{ storeName }}</p>
    <div
      @click="
        this.$router.push({
          name: 'each-store',
          params: { storename: storeName },
        })
      "
    >
      EachStore
    </div>
  </div>
</template>

<script>
// import { useListStore } from "@/store/storelist";

export default {
  name: "OneStore",
  // props: {
  // },
  // setup() {
  //   const liststore = useListStore();
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
