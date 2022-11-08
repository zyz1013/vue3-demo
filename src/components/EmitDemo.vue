<script setup lang="ts">
// defineProps<{ count: number }>();

// 如果需要默认值 需要使用withProps
withDefaults(
  defineProps<{
    count: number;
    value?: number;
  }>(),
  { value: 100 }
);

const emit = defineEmits(["updateCount"]);

function updateCount() {
  emit("updateCount", 10);
}
</script>
<template>
  <div>
    <el-row>
      <el-space>
        <span>父组件传的参数count:</span>
        <span>{{ count }}</span>
      </el-space>
    </el-row>
    <el-row>
      <el-space>
        <span>父组件传的参数value(带默认值):</span>
        <span>{{ value }}</span>
      </el-space>
    </el-row>
    <el-row>
      <el-space>子组件通过emit修改父组件参数</el-space>
      <el-space
        ><el-button @click="updateCount">emitToUpdateCount</el-button></el-space
      >
    </el-row>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
