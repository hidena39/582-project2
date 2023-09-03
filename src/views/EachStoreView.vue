<template>
  <nav>
    <router-link to="/"><button id="homeButton">Home</button></router-link>
  </nav>
  <p>{{ this.$route.params }}</p>
  <h2>{{ storename }}</h2>
  <InputCategoryAndList />
  <AllCategories />
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

<style lang="scss">
div#homeButton {
  display: block;
}
</style>
