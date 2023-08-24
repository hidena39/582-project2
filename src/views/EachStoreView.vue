<template>
  <h1>EachStoreView</h1>
  <InputCategoryAndList />
  <AllCategories />
</template>

<script>
import InputCategoryAndList from "@/components/InputCategoryAndList.vue";
import AllCategories from "@/components/AllCategories.vue";

export default {
  name: "EachStoreView",
  data() {
    return {};
  },
  components: {
    InputCategoryAndList,
    AllCategories,
  },
  methods: {},
};
</script>

<style lang="scss"></style>
