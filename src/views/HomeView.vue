<template>
  <h1>HomeView</h1>
  <InputStore />
  <StoreList />
</template>

<script>
import InputStore from "@/components/InputStore.vue";
import StoreList from "@/components/StoreList.vue";

export default {
  name: "HomeView",
  components: {
    InputStore,
    StoreList,
  },
};
</script>
