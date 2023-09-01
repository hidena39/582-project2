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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.deleteButton {
  background: red;
  color: white;
  cursor: pointer;
}
</style>
