# touchtv-wheel

**touchtv-wheel**是一款基于Vue2.6+封装的转盘抽奖组件，支持多种配置选项，灵活适用各种场景，且不依赖任何框架，非常小，开箱即用

移动端、PC端页面都能使用

## 安装

```
npm i touchtv-wheel -S
```

## 使用
直接引用本地组件`import BigWheel from 'packages/BigWheel'`

安装依赖后引用是`import BigWheel from 'touchtv-wheel'`

## API

### Props

| 参数          | 说明                                                         | 类型   | 默认值                 |
| ------------- | ------------------------------------------------------------ | ------ | ---------------------- |
| width         | 转盘的宽度                                                   | String | 无默认值，必填         |
| height        | 转盘的高度                                                   | String | 无默认值，必填         |
| prizeList     | 奖品列表                                                     | Array  | -                      |
| prizeBgColors | 每个奖品扇形的背景色，扇形循环数组填充<br />建议和奖品列表同奇偶，如奖品数组长度是奇数，则背景色长度也要是奇数 | Array  | ['#F47F45', '#FFA468'] |
| borderColor   | 每一块扇形的外边框颜色                                       | String | #ff9800                |
| turnsNumber   | 转动的圈数                                                   | Number | 5                      |
| turnsTime     | 转动持续时间                                                 | Number | 5（单位是秒）          |
| backgroundImage     | 外圈背景图片                                                 | Image |           |
| startBtnImage     | 开始按钮图片                                                 | Image |           |

### Slots

| 名称 | 说明                                               |
| ---- | -------------------------------------------------- |
| item | 自定义每个奖品区域显示，参数为每个奖品信息{ item } |
| default | 自定义开始按钮区域显示 |

### Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| start  | 转盘开始转动回调函数    |             |
| over   | 转盘停止转动后的回调函数 | 中奖的奖品信息 |

### 方法

通过ref拿到组件实例并调用实例方法`this.$refs.bigWheel.rotate(index)`

| 方法名 | 说明         | 参数                              | 返回值 |
| ------ | ------------ | --------------------------------- | ------ |
| rotate | 转盘转动方法 | index：中奖奖品在奖品列表中的下标 | -      |


## Demo

demo是做的手机端页面，电脑查看请用手机模式查看
