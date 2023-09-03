<template>
  <div class="listcontainer">
    <h3 @click="deleteCategory">{{ oneCategory }}</h3>
    <button
      class="deleteButton"
      v-if="this.listuser.isAuthorized"
      @click="deleteCategory"
    >
      delete category
    </button>
    <div id="itemContainer">
      <OneItem
        v-for="item in items"
        :key="item.item"
        :oneItem="item.item"
        :oneCategory="oneCategory"
      />
    </div>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";
import OneItem from "@/components/OneItem.vue";
export default {
  name: "OneCategory",
  components: {
    OneItem,
  },
  props: {
    oneCategory: String,
  },
  setup() {
    const liststore = useListStore();
    const listuser = useUserStore();
    return { liststore, listuser };
  },
  methods: {
    deleteCategory() {
      console.log("submitted");
      const oneCategory = this.oneCategory;
      const storename = this.$route.params.storename;
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}/deletecategory`,
        {
          method: "post",
          body: JSON.stringify({ category: oneCategory }),
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
  computed: {
    items() {
      const storeName = this.$route.params.storename;
      const allItems = [];
      for (const store of this.liststore.stores) {
        //When categories are empty, it gives an error. So making it check if there are categories
        if (store.storename === storeName && store.categories) {
          for (let i = 0; i < store.categories.length; i++) {
            if (store.categories[i].category === this.oneCategory) {
              for (const item of store.categories[i].items) {
                allItems.push(item);
              }
            }
          }
        }
      }
      console.log("allItems", allItems);
      return allItems;
    },
  },
};
</script>

<style scoped lang="scss">
.listcontainer {
  width: 100%;
  button.deleteButton {
    margin: 0.2rem auto 1rem auto;
  }
}
div#itemContainer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-gap: 10px;
  justify-content: center;
}
</style>
