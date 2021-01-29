# vue3-tsx

## 简介

vue3 使用 jsx 示例

## 创建项目

1. 使用 vue ui 创建 vue3 项目

2. 安装 `vue-router` `vuex` `@vue/cli-plugin-typescript`, `@vue/babel-plugin-jsx`

3. 修改 babel.config.js 文件

```js
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: ["@vue/babel-plugin-jsx"]
}
```

3. 修改全部 .vue -> .jsx, 模板如下

```jsx
import {defineComponent} from 'vue';

export default defineComponent({
    name: "",
    setup() {
        return () => (
            <>

            </>
        )
    }
})
```

## 路由

### RouterView

和 `<router-view/>` 是一样的用法

```jsx
import {defineComponent} from 'vue';
import {RouterView} from 'vue-router'

export default defineComponent({
    setup() {
        return () => <RouterView/>
    }
})
```

### RouterLink

```jsx
import {defineComponent} from 'vue';
import {RouterLink} from 'vue-router'

export default defineComponent({
    name: "RouterLinkDemo",
    setup() {
        return () => <RouterLink to={'/home'}/>
    }
})
```

## Fragment

一个组件返回多个元素,和 React.Fragment 差不多
短语法 `<></>`

```jsx
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
```

## 插槽

### 带有插槽的组件

创建 ASlotDemo 组件,ASlotDemo 有具名插槽 `header`,范围插槽 `footer`

在模板中定义插槽需要用到 `<slot/>`, jsx 中使用`renderSlot`函数渲染插槽

`renderSlot` 接收 Slots, 插槽名,插槽数据,进行渲染

```jsx
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
```

### 使用

在使用范围插槽时,可以定义个接口,获得语法提示

```jsx
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
```

## emits

在父组件使用时,必须 on + 事件名(事件名第一个字母必须大写)

```jsx
// AEmitsDemo.jsx
import {defineComponent} from 'vue';

export default defineComponent({
    name: "AEmitsDemo",
    emits: ['click', 'getDate'],
    setup(props, {emit}) {
        const click = () => {
            console.log('点击++++++++')
            emit("click")
        }
        return () => (
            <>
                <div onClick={click}>点击</div>
                <div onClick={() => emit("getDate", 10)}>获取数据</div>
            </>
        )
    }
})

// BEmitsDemo.jsx
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
        return () => <AEmitsDemo onClick={click} onGetData={getData}/>
    }
})
```

