<template>
  <a-input v-model:value="keywords" placeholder="请搜索音乐">
    <template #suffix>
      <a-tooltip title="搜索">
        <search-outlined style="color: rgba(0, 0, 0, 0.45)" />
      </a-tooltip>
    </template>
  </a-input>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
const keywords = ref("")
</script>


<style></style>
