<template>
  <div id="userlist">
    <OneUser
      v-for="(store, index) in userstore.users"
      :key="store._id"
      :oneUser="currentUserName(index)"
    />
  </div>
</template>

<script>
import { useUserStore } from "@/store/userlist";
import OneUser from "@/components/OneUser.vue";

export default {
  name: "UserList",
  setup() {
    const userstore = useUserStore();
    const currentUserName = (index) => {
      return userstore.users[index].username;
    };
    return { userstore, currentUserName };
  },

  components: {
    OneUser,
  },
};
</script>

<style scoped lang="scss">
div#userlist {
  width: max-content;
  margin: 1rem auto 0 auto;
}
</style>
