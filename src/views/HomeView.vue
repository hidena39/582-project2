<template>
  <div class="homePageContainer">
    <div class="boxes" id="titleBox">
      <div id="iconFamily"><img src="@/assets/family.png" alt="" /></div>
      <h1>Team Shop!!</h1>
    </div>
    <InputStore />
    <StoreList />
    <div id="iconTeam"><img src="@/assets/team-work.png" alt="" /></div>
  </div>
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
div.homePageContainer {
  max-width: 1000px;
  margin: 0 auto;
}
div#titleBox {
  border: 4px black solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div#iconFamily {
    width: 100%;
    height: auto;
    img {
      display: block;
      margin: 0 auto;
      width: 90%;
      max-width: 300px;
      height: auto;
    }
  }
}
div#iconTeam {
  display: flex;
  justify-content: center;
  img {
    margin: 0 auto;
    width: 90%;
    max-width: 500px;
    height: auto;
  }
}
</style>
