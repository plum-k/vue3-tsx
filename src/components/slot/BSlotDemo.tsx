import {defineComponent} from "vue";
import ASlotDemo from "@/components/slot/ASlotDemo";

interface IFooterSlotData {
    text: string;
}

export default defineComponent({
    name: "BSlotDemo",
    setup() {
        return () => (
            <>
                <ASlotDemo>
                    我是: BSlotDemo
                </ASlotDemo>
                <ASlotDemo>
                </ASlotDemo>

                <ASlotDemo v-slots={{
                    default: () => <div>slots使用方式1</div>,
                    header: () => <span>header1</span>,
                }}/>
                <ASlotDemo>
                    {{
                        default: () => <div>slots使用方式2</div>,
                        header: () => <span>header2</span>,
                    }}
                </ASlotDemo>

                <ASlotDemo v-slots={{
                    default: () => <div>范围插槽使用</div>,
                    header: () => <span>范围插槽header</span>,
                    footer: (value: IFooterSlotData) => <span>获取范围插槽的值: {value.text}</span>,
                }}/>
            </>
        )
    }
})