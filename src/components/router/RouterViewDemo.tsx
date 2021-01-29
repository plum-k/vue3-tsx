import {defineComponent} from 'vue';
import {RouterView} from 'vue-router'

export default defineComponent({
    name:"RouterViewDemo",
    setup() {
        return () => <RouterView/>
    }
})