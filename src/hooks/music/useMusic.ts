import { reactive, ref } from 'vue'
import { musicTitle } from '@/type/music.type'
import type { MenuProps } from 'ant-design-vue'
export function useMusic(callback:Function) {
  const url = '/music/selected'
  const current = ref([url])
  const list = reactive<musicTitle[]>([
    { title: '精选', url },
    { title: '有声电台', url: '/music/audioradio' },
    { title: '排行', url: '' },
    { title: '歌手', url: '' },
    { title: '分类歌单', url: '' },
    { title: '数字专辑', url: '' },
    { title: '手机专享', url: '' },
  ])
  const changeUrl: MenuProps['onClick'] = ({ key }) => {
    callback(key)
  }
  return {
    current,
    list,
    changeUrl
  }
}

