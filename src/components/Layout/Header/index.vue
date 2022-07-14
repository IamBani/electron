<template>
  <div class="header">
    <div class="header-left">
      <a-space size="middle">
        <left-outlined class="cursor-pointer" />
        <right-outlined class="cursor-pointer" />
        <Search />
      </a-space>
    </div>
    <div class="header-right">
      <a-space size="middle">
        <minus-outlined class="cursor-pointer" />
        <expand-outlined class="cursor-pointer" />
        <close-outlined class="cursor-pointer" />
      </a-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
</script>

<style lang="scss" scoped>
.header {
  @include flex;
  .header-left,
  .header-right {
    flex: 1;
  }
  .header-right{
     @include flex;
     justify-content: flex-end;
  }
}
</style>
