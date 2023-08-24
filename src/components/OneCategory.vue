<template>
  <h1>OneCategory</h1>
  <p>{{ liststore.stores }}</p>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "OneCategory",
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
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
  color: red;
}
</style>
