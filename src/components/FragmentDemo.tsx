import {defineComponent, Fragment} from 'vue';

export default defineComponent({
    name: "FragmentDemo",
    setup() {
        const a = (
            <>
                <div>A</div>
                <div>A</div>
            </>
        )
        return () => (
            <Fragment>
                {a}
                <div>b</div>
            </Fragment>
        )
    }
})