import {defineComponent} from 'vue';
import {RouterLink} from 'vue-router'

export default defineComponent({
    name: "RouterLinkDemo",
    setup() {
        return () => <RouterLink to={'/home'}/>
    }
})