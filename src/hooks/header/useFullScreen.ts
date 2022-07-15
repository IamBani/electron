import { ref } from "vue"
const {ipcRenderer} = require("electron")
function useFullScreen() {
  const isFullScreen = ref(true)
  const openFullScreen = (isFull:boolean) => {
    isFullScreen.value = !isFullScreen.value
    ipcRenderer.send('fullscreen',isFull);
  }
  const miniFullScreen = () => {
    ipcRenderer.send('miniFullScreen')
  }
  return {
    isFullScreen,
    openFullScreen,
    miniFullScreen
  }
}

export default useFullScreen