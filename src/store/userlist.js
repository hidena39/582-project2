import { defineStore } from "pinia";

export const useUserStore = defineStore("userlist", {
  state: () => ({
    users: [],
    currentUser: {},
    currentUserColor: {},
    isAuthorized: false,
  }),
  actions: {
    checkUserColor() {
      let findColor = "";
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].username === this.currentUser) {
          findColor = this.users[i].color;
        }
      }
      this.currentUserColor = findColor;
    },

    isItAuthorised() {
      let isItAdmin = false;
      console.log("currentusernameinpinia", this.currentUser);
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].username === this.currentUser) {
          if (this.users[i].role === "Admin") {
            isItAdmin = true;
          } else {
            isItAdmin = false;
          }
        }
      }
      console.log("pinia", isItAdmin);
      this.isAuthorized = isItAdmin;
    },
  },
});
