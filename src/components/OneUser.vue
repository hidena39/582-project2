<template>
  <button @click="currentUser()">{{ oneUser }}</button>
</template>

<script>
import { useUserStore } from "@/store/userlist";
export default {
  name: "OneUser",
  setup() {
    const listuser = useUserStore();
    return { listuser };
  },

  props: {
    oneUser: String,
  },
  methods: {
    currentUser() {
      this.listuser.currentUser = this.oneUser;
      this.listuser.isItAuthorised();
      this.listuser.checkUserColor();
      console.log("users", this.listuser.users);
      console.log("Currentusername", this.listuser.currentUser);
      console.log("color", this.listuser.currentUserColor);
      console.log("Auth", this.listuser.isAuthorized);
    },
  },
  
};
</script>

<!-- <style scoped lang="scss">

</style> -->
