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
    oneCategory: String,
  },
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
  methods: {
    deleteItem() {
      console.log(this.oneItem, this.$route.params.storename, this.oneCategory);
      console.log("submitted");
      const oneItem = this.oneItem;
      const oneCategory = this.oneCategory;
      const storename = this.$route.params.storename;
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}/deleteitem`,
        {
          method: "post",
          body: JSON.stringify({ category: oneCategory, item: oneItem }),
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          console.log(data);
          document.querySelector("#category").value = "";
          fetch(
            `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}/deleteitem`
          )
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              this.liststore.stores = json;
            });
        });
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
