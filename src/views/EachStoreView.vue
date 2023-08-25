<template>
  <nav>
    <router-link to="/"><button>Home</button></router-link>
  </nav>
  <h1>EachStoreView</h1>
  <p>{{ this.$route.params }}</p>
  <h2>{{ storename }}</h2>
  <InputCategoryAndList />
  <AllCategories />
</template>

<script>
import InputCategoryAndList from "@/components/InputCategoryAndList.vue";
import AllCategories from "@/components/AllCategories.vue";
import { useListStore } from "@/store/storelist";

export default {
  name: "EachStoreView",
  props: {
    storename: String,
    //for params
  },
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
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
