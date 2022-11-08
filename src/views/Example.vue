<template>
  <div class="example">
    <el-divider content-position="left">响应式变量</el-divider>
    <el-row>
      <el-space>
        <span>数量：</span><span>{{ count }}</span>
        <el-button @click="add()">增加</el-button>
      </el-space>
    </el-row>
    <el-divider content-position="left">响应式对象</el-divider>
    <el-row>
      <el-space>
        <span>对象：{{ obj.name }}</span>
        <span>{{ JSON.stringify(obj) }}</span>
      </el-space>
    </el-row>
    <el-divider content-position="left">响应式数组</el-divider>
    <el-row v-for="item in arr.list" :key="item.id">
      <el-col :span="4">姓名:{{ item.name }}</el-col>
      <el-col :span="4">年龄:{{ item.age }}</el-col>
    </el-row>
    <el-divider content-position="left">父子组件传参数</el-divider>
    <EmitDemo :count="count" v-on:update-count="add"></EmitDemo>
    <el-divider content-position="left">vuex的使用</el-divider>
    <VuexDemo></VuexDemo>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import EmitDemo from "../components/EmitDemo.vue";
import VuexDemo from "../components/VuexDemo.vue";

let count = ref(0);
const obj = reactive({
  name: "对象",
  type: "object",
});

const arr = reactive({
  list: [
    {
      name: "姓名1",
      age: 18,
      id: 0,
    },
    {
      name: "姓名2",
      age: 19,
      id: 1,
    },
    {
      name: "姓名3",
      age: 20,
      id: 2,
    },
  ],
});
function add(val?: number) {
  count.value = count.value + (val ?? 1);
}
</script>
<style scoped lang="css">
.example {
  width: 100%;
  height: 100%;
  padding: 0 10px;
}
</style>
