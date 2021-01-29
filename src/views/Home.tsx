import {defineComponent} from 'vue';
import BSlotDemo from "@/components/slot/BSlotDemo";
import BEmitsDemo from "@/components/emits/BEmitsDemo";

export default defineComponent({
    name: "Home",
    setup() {
        return () => (
            <>
                <BSlotDemo/>
                <BEmitsDemo/>
            </>
        )
    }
})