
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

// <a-button type="primary">Primary</a-button>
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    let v = ref<string>('gfjhgj')
    let router = useRouter()
    const c = () => {
      router.push({
        path:'/about'
      })
    }
    return () => (
      <>
         <div>123</div>
        <a-button type="primary" onClick={c}>Primary</a-button>
        <a-input v-model={v.value} placeholder="Basic usage" />
      </>
    )
  }
})



  

