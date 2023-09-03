<template>
  <li>
    <div class="oneItem" @click="changeStatus">
      {{ oneItem
      }}<button
        class="deleteButton"
        v-if="this.listuser.isAuthorized"
        @click="deleteItem"
      >
        delete
      </button>
    </div>

    <div
      class="purchased"
      v-if="purchaseStatus"
      @click="changeStatus"
      :style="{ backgroundColor: colorOfThePurchased }"
    ></div>
    <div class="purchasedTime" v-if="purchaseStatus">{{ purchasedTime }}</div>
  </li>
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";
export default {
  name: "OneItem",
  props: {
    oneItem: String,
    oneCategory: String,
  },
  setup() {
    const liststore = useListStore();
    const listuser = useUserStore();
    return { liststore, listuser };
  },
  computed: {
    purchaseStatus() {
      const storeName = this.$route.params.storename;
      let purchased = false;
      for (const store of this.liststore.stores) {
        if (store.storename === storeName) {
          for (const category of store.categories) {
            if (category.category === this.oneCategory) {
              for (const item of category.items) {
                if (item.item === this.oneItem) {
                  purchased = item.purchased;
                }
              }
            }
          }
        }
      }
      return purchased;
    },
    purchasedTime() {
      const storeName = this.$route.params.storename;
      let clickedTime = "";
      for (const store of this.liststore.stores) {
        if (store.storename === storeName) {
          for (const category of store.categories) {
            if (category.category === this.oneCategory) {
              for (const item of category.items) {
                if (item.item === this.oneItem) {
                  clickedTime = item.time;
                }
              }
            }
          }
        }
      }
      return clickedTime;
    },
    purchasedByWho() {
      const storeName = this.$route.params.storename;
      let whoPurchased = "";
      for (const store of this.liststore.stores) {
        if (store.storename === storeName) {
          for (const category of store.categories) {
            if (category.category === this.oneCategory) {
              for (const item of category.items) {
                if (item.item === this.oneItem) {
                  whoPurchased = item.byWho;
                }
              }
            }
          }
        }
      }
      return whoPurchased;
    },
    colorOfThePurchased() {
      let theColor = "";
      for (const user of this.listuser.users) {
        if (user.username === this.purchasedByWho) {
          theColor = user.color;
        }
      }
      return theColor;
    },
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
    changeStatus() {
      console.log(this.purchaseStatus);
      console.log("submitted");
      const storename = this.$route.params.storename;
      const purchaseStatus = this.purchaseStatus;
      const oneCategory = this.oneCategory;
      const oneItem = this.oneItem;
      const changedStatus = !purchaseStatus;
      const personWhoBought = this.listuser.currentUser;
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/each-store/${storename}/changestatus`,
        {
          method: "post",
          body: JSON.stringify({
            category: oneCategory,
            item: oneItem,
            purchased: changedStatus,
            byWho: personWhoBought,
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
li {
  position: relative;
}
.oneItem {
  padding: 1rem;
  border: black solid 2px;
  cursor: pointer;
}
.purchased {
  position: absolute;
  width: 150px;
  height: 40px;
  opacity: 0.5;
  top: 0;
  right: 0;
  cursor: pointer;
}
.displayNone {
  display: none;
}
</style>
