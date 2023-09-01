<template>
  <h1>HomeView</h1>
  <InputStore />
  <StoreList />
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";
import InputStore from "@/components/InputStore.vue";
import StoreList from "@/components/StoreList.vue";

export default {
  name: "HomeView",
  components: {
    InputStore,
    StoreList,
  },
  setup() {
    const listuser = useUserStore();
    const liststore = useListStore();
    return { listuser, liststore };
  },
  created() {
    //fetching users
    fetch("https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.liststore.stores = json;
      });
    //fetching stores
    fetch(
      "https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/users"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.listuser.users = json;
      });
  },
};
</script>
