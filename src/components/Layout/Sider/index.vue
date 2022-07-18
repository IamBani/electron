<template>
  <a-menu class="menu">
    <a-menu-item-group>
      <template #title>在线音乐</template>
      <a-menu-item key="1">音乐馆</a-menu-item>
      <a-menu-item key="2">视频</a-menu-item>
      <a-menu-item key="3">电台</a-menu-item>
    </a-menu-item-group>

    <a-menu-item-group key="g2">
      <template #title><div class="group">我的音乐</div></template>
      <a-menu-item key="4">本地和下载</a-menu-item>
      <a-menu-item key="5">最近播放</a-menu-item>
      <a-menu-item key="6">试听列表</a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
</script>

<style lang="scss" scoped>
.menu {
  background: transparent;
  margin-top: 20px;
  :deep(.ant-menu-item-group) {
    width: 80%;
    margin: auto;
    .ant-menu-item-group-title {
      padding: 0 16px 0 28px;
    }
    .ant-menu-item {
      margin-top: 8px;
      border-radius: 8px;
      &.ant-menu-item-selected {
        background: linear-gradient(to bottom right, #1fd4ae, #1ecc95);
        color: #fff;
      }
    }
  }
}
.group {
  margin-top: 30px;
}
</style>
