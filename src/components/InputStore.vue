<template>
  <h1>InputStore</h1>
  <form v-if="this.listuser.isAuthorized" @submit.prevent="sendStoreToDB">
    <label for="storename">Store Name</label>
    <input type="text" id="storename" required />
    <input id="submit" type="submit" value="Add store" />
  </form>

  {{ liststore.stores }}
  <!-- if there are no same store -->
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";

export default {
  name: "InputStore",
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
    sendStoreToDB() {
      console.log("submitted");
      let storename = document.querySelector("#storename").value;
      const formData = { storename };
      console.log(storename);
      //adding store name to db
      fetch("https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          console.log(data);
          document.querySelector("#storename").value = "";
          fetch(
            "https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/"
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
  color: green;
}
</style>
