<template>
  <div>{{a}}</div>
  <router-link to="/">
    哈哈
  </router-link>
 <router-link to="/about">
    about
  </router-link>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const a = ref(12354767)
</script>

<style>

</style>