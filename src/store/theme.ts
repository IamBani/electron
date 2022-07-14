import { defineStore } from "pinia"

const useThemeStore= defineStore('theme',{
  state() {
    return {
      theme: {
        siderBg: '#F6F6F6',
        centerBg: '#FAFAFA',
        imgUrl:''
      }
    }
  },
})

export { useThemeStore }