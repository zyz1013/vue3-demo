<template>
  <el-row>
    <el-space>
      <span>vuex里的值username:{{ userState.username }}</span>
      <el-button @click="updateUserName">同步修改store的username</el-button>
      <el-button @click="updateUserNameAsync"
        >异步修改store的username</el-button
      >
    </el-space>
  </el-row>
</template>

<script setup lang="ts">
// ------------ store --------------

import { computed } from "vue";
import { mapState, useStore } from "vuex";

let store = useStore();

const storeFns: any = mapState("user", ["username"]);

let userState: any = {};
Object.keys(storeFns).forEach((fnKey: string) => {
  const fn = storeFns[fnKey].bind({ $store: store });
  userState[fnKey] = computed(fn);
});

function updateUserName() {
  store.commit("user/UPDATE_USERNAME", "郑大仙");
}

function updateUserNameAsync() {
  store.dispatch("user/UPDATE_USERNAME_ASYNC", "郑大仙2.0");
}
</script>

<style scoped></style>
