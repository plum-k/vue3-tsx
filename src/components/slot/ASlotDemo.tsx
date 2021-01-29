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
                        // defaultSlot !== undefined ? renderSlot(slots, 'default') : "默认插槽1"
                        slots.default?.() ?? "默认插槽2"
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
