<template>
  <UserList />
  <router-view />
</template>

<script>
import UserList from "@/components/UserList.vue";
export default {
  name: "App",
  components: {
    UserList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,600;0,700;0,900;0,1000;1,400;1,600;1,700;1,900;1,1000&family=Short+Stack&display=swap");

html {
  font-size: 16px;
}
* {
  font-family: "Mulish", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  font-family: "Short Stack";
  font-size: 3rem;
  text-align: center;
}
h2 {
  font-family: "Short Stack";
  font-size: 1.5em;
  text-align: center;
}
.deleteButton {
  background: red;
  color: white;
  cursor: pointer;
  color: #f7f7c7;
}
input.submit {
  background: white;
  cursor: pointer;
  &:hover {
    background: green;
    color: white;
  }
}
</style>
