<template>
  <button
    class="userButton"
    @click="currentUser()"
    :class="{ chosenUser: oneUser === listuser.currentUser }"
    :style="{ backgroundColor: UserColor }"
  >
    {{ oneUser }}
  </button>
</template>

<script>
import { useListStore } from "@/store/storelist";
import { useUserStore } from "@/store/userlist";
export default {
  name: "OneUser",
  setup() {
    const liststore = useListStore();
    const listuser = useUserStore();
    return { liststore, listuser };
  },

  props: {
    oneUser: String,
  },
  computed: {
    UserColor() {
      let theColor = "";
      for (const user of this.listuser.users) {
        if (user.username === this.oneUser) {
          theColor = user.color;
        }
      }
      return theColor;
    },
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
  margin: 0 1rem;
  &:hover {
    border: 3px solid white;
  }
}
.chosenUser {
  border: 4px solid black;
}
</style>
