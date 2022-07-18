<template>
  <div class="logo drag">
     <a-image
      width="140px"
    :preview="false"
    :src="src"
    class="notdrag"
  />
  
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import logo from "@/assets/image/logo.png"
const src =ref(logo) 
</script>


<style lang="scss" scoped>
.logo{
  height: $header-height;
  @include flex();
  padding: 10px 0;
  justify-content: center;
}

</style>