<template>
  <button
    class="userButton"
    @click="currentUser()"
    :class="{ chosenUser: oneUser === listuser.currentUser }"
  >
    {{ oneUser }}
  </button>
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
    isItChosenButton() {
      for (let i = 0; i < this.listuser.users.length; i++) {
        if (this.users[i].username === this.listuser.currentUser) {
          if (this.users[i].role === "Admin") {
            this.listuser.isItAdmin = true;
          } else {
            this.listuser.isItAdmin = false;
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.userButton {
  cursor: pointer;
}
.chosenUser {
  border: 3px solid pink;
}
</style>
