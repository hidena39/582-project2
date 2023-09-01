<template>
  <div class="listcontainer">
    <h1 @click="deleteCategory">{{ oneCategory }}</h1>
    <button
      class="deleteButton"
      v-if="this.listuser.isAuthorized"
      @click="deleteCategory"
    >
      delete category
    </button>
    <ul>
      <OneItem
        v-for="item in items"
        :key="item.item"
        :oneItem="item.item"
        :oneCategory="oneCategory"
      />
    </ul>
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
  max-width: 1000px;
  margin: 0 auto;
}
li {
  list-style: none;
  display: block;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 1rem;
}
</style>
