<template>
  <div class="storeCard">
    <h1>OneStore</h1>
    <p>{{ storeName }}</p>
    <button
      @click="
        this.$router.push({
          name: 'each-store',
          params: { storename: storeName },
        })
      "
    >
      EachStore
    </button>
    <button
      class="deleteButton"
      v-if="this.listuser.isAuthorized"
      @click="deleteStore"
    >
      delete
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
  // data() {
  //     return {

  //     };
  // },
  // components: {
  // },
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
* {
  color: blue;
}
div.storeCard {
  width: 200px;
  border: 1px solid blue;
}
</style>
