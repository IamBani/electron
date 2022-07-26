<template>
  <h3 class="musicTitle">音乐馆</h3>
  <a-menu v-model:selectedKeys="current" mode="horizontal" class="menu" @select="changeUrl">
    <a-menu-item :key="item.url" v-for="item in list"
      >{{ item.title }}
    </a-menu-item>
  </a-menu>
  <router-view />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import {useMusic} from "@/hooks/music/useMusic"
const router = useRouter()
const {current,list,changeUrl} = useMusic((url:string)=>{
  router.push(url)
})
</script>

<style lang="scss" scoped>
.menu {
  background: transparent;
  border-bottom: 1px solid transparent;
  :deep(li) {
    &:first-child{
      margin-left: -20px;
  }}
}
.musicTitle {
  font-size: 30px;
  font-weight: bold;
}
</style>
