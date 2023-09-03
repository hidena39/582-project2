<template>
  <div class="storeCard">
    <div
      id="storeCardRouter"
      @click="
        this.$router.push({
          name: 'each-store',
          params: { storename: storeName },
        })
      "
    >
      <div class="cardTextBox">
        <span>visit</span>
        <h3>{{ storeName }}</h3>
        <span>list</span>
      </div>
    </div>
    <button
      class="deleteButton"
      v-if="this.listuser.isAuthorized"
      @click="deleteStore"
    >
      delete store
    </button>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";

export default {
  name: "OneStore",
  props: {
    //definitng the param storename: storeName is a string
    storeName: String,
    //receiving from StoreList.vue to show {{ storeName }}}
  },
  setup() {
    const liststore = useListStore();
    const listuser = useUserStore();
    return { liststore, listuser };
  },
  methods: {
    deleteStore() {
      console.log("submitted");
      const storename = this.storeName;
      fetch(
        `https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/deleteOneStore`,
        {
          method: "post",
          body: JSON.stringify({ storename: storename }),
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
div#storeCardRouter {
  width: 100%;
  border-radius: 1rem;
  background: rgb(250, 250, 190);
  border: black 2px solid;
  cursor: pointer;
  div.cardTextBox {
    margin: 1rem 0 1rem 0;
  }
}
button.deleteButton {
  margin: 0.2rem auto 1rem auto;
}
</style>
