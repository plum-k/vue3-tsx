import {defineComponent, renderSlot} from "vue";

export default defineComponent({
    name: "ASlotDemo",
    setup(props, {slots}) {
        const {default: defaultSlot, header, footer} = slots;
        const footerData = {
            text: "2020-1-20"
        }
        return () => (
            <>
                <div>
                    {
                        header !== undefined ? renderSlot(slots, 'header') : "默认 header"
                    }
                </div>
                <div>
                    {
                        defaultSlot !== undefined ? renderSlot(slots, 'default') : "没有传递默认插槽"
                    }
                </div>
                <div>
                    {
                        footer !== undefined ? renderSlot(slots, 'footer', footerData) : "默认 footer" + footerData.text
                    }
                </div>
            </>
        )
    }
})