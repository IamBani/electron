<template>
  <a-layout class="layout">
    <a-layout-sider>
      <Logo />
      <Sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <sHeader></sHeader>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import sHeader from './header/index.vue'
import { useThemeStore } from '@/store/theme'
const store = useThemeStore()
const centerBg = store.theme.centerBg
const siderBg = store.theme.siderBg
</script>

<style lang="scss" scoped>
.layout {
   background: transparent !important;
   height: 100%;
   width: 100%;
  :deep(.ant-layout-header) {
    background: transparent !important;
    -webkit-app-region: drag;
    padding: 0 30px;
    height: $header-height;
    line-height: 85px;
  }
  :deep(.ant-layout) {
    background: v-bind('centerBg');
  }
  :deep(.ant-layout-sider){
    background: v-bind('siderBg');
  }
  :deep(.ant-layout-content){
    margin-top: 20px;
    padding: 0 30px;
  }
}
</style>
