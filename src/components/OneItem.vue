<template>
  <li>
    {{ oneItem }}
    <div><p @click="deleteItem">delete</p></div>
  </li>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "OneItem",
  props: {
    oneItem: String,
  },
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
  methods: {
    deleteItem() {
      console.log(this.oneItem, this.$route.params.storename);
    },
  },
};
</script>

<style scoped lang="scss">
div {
  width: 80px;
  margin: 0 auto;
  padding: none;
  background: red;
  color: white;
  cursor: pointer;
}
</style>
