<template>
  <div class="listPageContainer">
    <nav>
      <router-link to="/"
        ><img id="homeImage" src="@/assets/looking-at-home.png" alt="" />
        <div id="textHome">home</div></router-link
      >
    </nav>
    <h2>{{ storename }}</h2>
    <img id="listImage" src="@/assets/list.png" alt="" />
    <InputCategoryAndList />
    <AllCategories />
  </div>
</template>

<script>
import InputCategoryAndList from "@/components/InputCategoryAndList.vue";
import AllCategories from "@/components/AllCategories.vue";
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";

export default {
  name: "EachStoreView",
  props: {
    storename: String,
    //for params
  },
  setup() {
    const listuser = useUserStore();
    const liststore = useListStore();
    return { listuser, liststore };
  },
  data() {
    return {};
  },
  components: {
    InputCategoryAndList,
    AllCategories,
  },
  methods: {},
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
div.listPageContainer {
  max-width: 1000px;
  margin: 0 auto;
}
nav {
  position: relative;
  width: 110px;
  margin-left: 1rem;
}
img#homeImage {
  width: 110px;
  height: auto;
}
div#textHome {
  position: absolute;
  top: 70px;
  left: 30px;
  color: white;
}
img#listImage {
  display: block;
  margin: 0 auto;
  width: 50vw;
  max-width: 200px;
}
div#homeButton {
  display: block;
}
</style>
