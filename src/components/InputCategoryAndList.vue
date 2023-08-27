<template>
  <h1>InputCategoryAndList</h1>
  <p>{{ storename }}</p>
  <form @submit.prevent="sendCategoryToDB()">
    <label for="category">Category</label>
    <input type="text" id="category" required />
    <input id="submit" type="submit" value="Add Category" />
  </form>

  <form>
    <label for="categories">Categories</label>
    <select name="categories" id="categories">
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </form>
</template>

<script>
import { useListStore } from "@/store/storelist";

export default {
  name: "InputCategoryAndList",
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
  props: {
    storename: String,
    //for params
  },
  computed: {
    categories() {
      const storeName = this.$route.params.storename;
      const allcategories = [];
      for (const store of this.liststore.stores) {
        if (store.storename === storeName) {
          for (let i = 0; i < store.categories.length; i++) {
            allcategories.push(store.categories[i]);
          }
        }
      }
      return allcategories;
    },
  },
  // data() {
  //     return {

  //     };
  // },
  // components: {

  // },
  methods: {
    sendCategoryToDB() {
      console.log("submitted");
      let categoryToAdd = document.querySelector("#category").value;
      // const formData = { storename };
      console.log("log", categoryToAdd);
      //storename is now static string so has to be written as so in the fetch
      const storename = this.$route.params.storename;
      console.log("storenamelog", storename);
      //adding store name to db
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}`,
        {
          method: "post",
          body: JSON.stringify({ category: categoryToAdd }),
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
            `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}`
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

<!-- <style lang="scss"></style> -->
