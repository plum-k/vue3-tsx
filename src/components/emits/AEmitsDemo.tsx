import {defineComponent} from 'vue';

export default defineComponent({
    name: "AEmitsDemo",
    emits: ['click', 'getData'],
    setup(props, {emit}) {
        const click = () => {
            console.log('点击++++++++')
            emit("click")
        }
        return () => (
            <>
                <div onClick={click}>点击</div>
                <div onClick={() => emit("getData", 10)}>获取数据</div>
            </>
        )
    }
})