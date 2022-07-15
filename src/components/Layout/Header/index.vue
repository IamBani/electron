<template>
  <div class="header">
    <div class="header-left">
      <a-space size="middle">
        <left-outlined class="cursor-pointer notdrag icon" />
        <right-outlined class="cursor-pointer notdrag icon" />
        <Search class="search" />
        <a-tooltip color="#fff" placement="bottom">
          <template v-slot:title>
            <span class="tooltipTitleColor">听歌识曲</span>
          </template>
          <svg-icon name="music" class="cursor-pointer notdrag icon" />
        </a-tooltip>
      </a-space>
    </div>
    <div class="header-right">
      <a-space size="middle">
        <template>
          <a-avatar style="background-color: #87d068">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
          <div>点击登陆</div>
        </template>
        <a-tooltip color="#fff" placement="bottom">
          <template v-slot:title>
            <span class="tooltipTitleColor">换肤</span>
          </template>
          <skin-outlined class="cursor-pointer notdrag icon" />
        </a-tooltip>
        <a-tooltip color="#fff" placement="bottom">
          <template v-slot:title>
            <span class="tooltipTitleColor">主菜单</span>
          </template>
          <menu-outlined class="cursor-pointer notdrag icon" />
        </a-tooltip>
        <span>|</span>
        <a-tooltip color="#fff" placement="bottom">
          <template v-slot:title>
            <span class="tooltipTitleColor">最小化</span>
          </template>
          <minus-outlined
            @click="miniFullScreen"
            class="cursor-pointer notdrag icon"
          />
        </a-tooltip>
        <a-tooltip color="#fff" placement="bottom">
          <template v-slot:title>
            <span class="tooltipTitleColor">全屏</span>
          </template>
          <expand-outlined
            v-if="isFullScreen"
            @click="openFullScreen(true)"
            class="cursor-pointer notdrag icon"
          />
          <svg-icon
            v-else
            name="notfull"
            @click="openFullScreen(false)"
            class="cursor-pointer notdrag icon"
          />
        </a-tooltip>
        <a-tooltip color="#fff" placement="bottom">
          <template v-slot:title>
            <span class="tooltipTitleColor">关闭</span>
          </template>
          <close-outlined class="cursor-pointer notdrag icon" />
        </a-tooltip>
      </a-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import useFullScreen from '@/hooks/header/useFullScreen'
const { isFullScreen, openFullScreen, miniFullScreen } = useFullScreen()
</script>

<style lang="scss" scoped>
.header {
  @include flex;
  .icon {
    color: $icon-color;
  }
  .header-left,
  .header-right {
    flex: 1;
  }
  .header-left {
    .search {
      -webkit-app-region: no-drag;
    }
  }
  .header-right {
    @include flex;
    justify-content: flex-end;
  }
}
.tooltipTitleColor {
  color: #000;
}
</style>
