<template>
  <h1>InputStore</h1>
  <form @submit.prevent="sendStoreToDB">
    <label for="storename">Store Name</label>
    <input type="text" id="storename" required />
    <input id="submit" type="submit" value="Add store" />
  </form>

  {{ liststore.stores }}
  <!-- if there are no same store -->
</template>

<script>
// import ***** from "./*****/*******";
import { useListStore } from "@/store/storelist";

export default {
  name: "InputStore",
  setup() {
    const liststore = useListStore();
    return { liststore };
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
        });
    },
  },
  created() {
    fetch("https://reimagined-eureka-7qvqxw66r4w3pww9-3000.app.github.dev/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.liststore.stores = json;
      });
  },
};
</script>

<style scoped lang="scss">
* {
  color: green;
}
</style>
