import {defineComponent} from 'vue';
import AEmitsDemo from "@/components/emits/AEmitsDemo";

export default defineComponent({
    name: "BEmitsDemo",
    setup() {
        const click = () => {
            console.log('点击---------')
        }
        const getData = (value: number) => {
            console.log(value);
        }
        // @ts-ignore
        return () => <AEmitsDemo onClick={click} onGetData={getData}/>
    }
})