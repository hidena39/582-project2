<template>
  <div id="titleBox">
    <div id="iconTeam"><img src="@/assets/family.png" alt="" /></div>
    <h1>Team Shop!!</h1>
  </div>
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

<style scoped lang="scss">
div#titleBox {
  min-width: 300px;
  background-color: rgb(248, 199, 199);
  border-radius: 2rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div#iconTeam {
    width: 100%;
    height: auto;
    img {
      display: block;
      margin: 0 auto;
      width: 300px;
      height: auto;
    }
  }
}
</style>
