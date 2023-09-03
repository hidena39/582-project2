<template>
  <div class="boxes" id="inputListBox">
    <h3>Add Category</h3>
    <p>{{ storename }}</p>
    <form
      v-if="this.listuser.isAuthorized"
      @submit.prevent="sendCategoryToDB()"
    >
      <input type="text" id="category" placeholder="Category Name" required />
      <input class="submit" type="submit" value="Add Category" />
    </form>
    <h3 id="addItem">Add item</h3>
    <form v-if="this.listuser.isAuthorized" @submit.prevent="sendItemToDB()">
      <select name="categories" id="categories" required>
        <option value="">Please Select Category</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <input type="text" id="item" placeholder="Item Name" required />
      <input class="submit" type="submit" value="Add Item to the List" />
    </form>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";

export default {
  name: "InputCategoryAndList",
  setup() {
    const liststore = useListStore();
    const listuser = useUserStore();
    return { liststore, listuser };
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
        //Ehnr categories are empty, it gives an error. So making it check if there are categories
        if (store.storename === storeName && store.categories) {
          for (let i = 0; i < store.categories.length; i++) {
            allcategories.push(store.categories[i].category);
          }
        }
      }
      return allcategories;
    },
  },
  methods: {
    sendCategoryToDB() {
      console.log("submitted");
      let categoryToAdd = document.querySelector("#category").value;
      console.log("log", categoryToAdd);
      //storename is now static string so has to be written as so in the fetch
      const storename = this.$route.params.storename;
      console.log("storenamelog", storename);
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}`,
        {
          method: "post",
          body: JSON.stringify({ category: categoryToAdd, items: [] }),
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
            `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/`
          )
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              this.liststore.stores = json;
            });
        });
    },
    sendItemToDB() {
      console.log("submitted");
      let categoryToAddItem = document.querySelector("#categories").value;
      let itemToAdd = document.querySelector("#item").value;
      console.log("log", categoryToAddItem, itemToAdd);
      //storename is now static string so has to be written as so in the fetch
      const storename = this.$route.params.storename;
      console.log("storenamelog", storename);
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}/item`,
        {
          method: "post",
          body: JSON.stringify({
            category: categoryToAddItem,
            item: itemToAdd,
          }),
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
          document.querySelector("#categories").value = "";
          document.querySelector("#item").value = "";
          fetch(
            `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/`
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
h3#addItem {
  margin-top: 3rem;
}
div#inputListBox {
  border: 2px dashed black;
}
</style>
