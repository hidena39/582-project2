<template>
  <UserList />
  <div
    id="mainBackground"
    :style="{ backgroundColor: listuser.currentUserColor }"
  >
    <router-view />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";
export default {
  name: "App",
  components: {
    UserList,
  },
  setup() {
    const listuser = useUserStore();
    const liststore = useListStore();
    return { listuser, liststore };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,600;0,700;0,900;0,1000;1,400;1,600;1,700;1,900;1,1000&family=Short+Stack&display=swap");
* {
  font-family: "Mulish", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
//background
div#mainBackground {
  margin-top: 1rem;
  padding: 1rem 0 1rem 0;
  min-height: calc(100vh - (3.4rem + 6px));
}
//font
html {
  font-size: 16px;
  @media screen and (min-width: 750px) {
    font-size: 17px;
  }
  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
}
h1 {
  font-family: "Short Stack";
  font-size: 3rem;
  text-align: center;
}
h2 {
  font-family: "Short Stack";
  font-size: 1.8em;
  text-align: center;
}
h3 {
  font-family: "Short Stack";
  font-size: 1.2em;
  text-align: center;
}
span {
  display: block;
  text-align: center;
}
//white boxes (each sections)
div.boxes {
  min-width: 300px;
  background-color: white;
  border-radius: 2rem;
  margin: 1rem;
  padding: 1rem;
}
//buttons and inputs
button {
  border-radius: 1rem;
  color: black;
  cursor: pointer;
  padding: 0.1rem 0.5rem;
  margin: 0.5rem auto 0.2rem auto;
  &:hover {
    background: black;
    color: white;
  }
}
.deleteButton {
  display: block;
  background: rgb(245, 181, 181);
  z-index: 2;
}
input,
select {
  display: block;
  width: 100%;
  max-width: 300px;
  border-radius: 1rem;
  padding: 0.2rem 1.5rem;
  margin: 1rem auto;
}
input.submit {
  background: rgb(175, 243, 215);
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
}
</style>
