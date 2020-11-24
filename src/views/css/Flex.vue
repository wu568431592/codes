<template>
  <div class="flex nice-content">
    <div class="container">
      <h1>学习flex布局</h1>
      <h2>1. 了解flex布局</h2>
      <p>采用flex布局的元素称为容器，而且他的子元素自动称为容器成员。简称项目</p>
      <p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p>
      <h2>2. 容器的属性</h2>
      <p>容器上有6个属性，分别为：</p>
      <ul>
        <li>flex-direction</li>
        <li>flex-wrap</li>
        <li>flex-flow</li>
        <li>justify-content</li>
        <li>align-items</li>
        <li>align-content</li>
      </ul>
      <h3>2-1. flex-direction属性</h3>
      <p>flex-direction属性决定主轴的方向（即项目的排列方向）。</p>
      <pre>
        .box {
          flex-direction: row | row-reverse | column | column-reverse;
        }
      </pre>
      <p>flex-direction: row; （默认）主轴为水平方向，起点在左端</p>
      <ul class="flex-box flex-direction row">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>flex-direction: row-reverse; 主轴为水平方向，起点在右端。</p>
      <ul class="flex-box flex-direction row-reverse">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>flex-direction: column; 主轴为垂直方向，起点在上沿。</p>
      <ul class="flex-box flex-direction column">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>flex-direction: column-reverse; 主轴为垂直方向，起点在下沿。</p>
      <ul class="flex-box flex-direction column-reverse">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <h3>2-2. flex-wrap属性</h3>
      <p>默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p>
      <pre>
        .box{
          flex-wrap: nowrap | wrap | wrap-reverse;
        }
      </pre>
      <p>flex-wrap: nowrap; (默认)不换行</p>
      <ul class="flex-box flex-wrap nowrap">
        <li class="flex-item w-500" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>flex-wrap: wrap; 换行，第一行在上方</p>
      <ul class="flex-box flex-wrap wrap">
        <li class="flex-item w-500" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>flex-wrap: wrap-reverse; 换行，第一行在下方</p>
      <ul class="flex-box flex-wrap wrap-reverse">
        <li class="flex-item w-500" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <h3>2-3. flex-flow</h3>
      <p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p>
      <pre>
        .box {
          flex-flow: flex-direction || flex-wrap;
        }
      </pre>
      <p>flex-flow: row-reverse wrap-reverse</p>
      <ul class="flex-box flex-flow row-reverse-wrap-reverse">
        <li class="flex-item w-500" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <h3>2-4. justify-content</h3>
      <p>justify-content 决定了项目在水平主轴上的对齐方式.有五个不同的值</p>
      <pre>
        .box {
          justify-content: flex-start | flex-end | center | space-between | space-around;
        }
      </pre>
      <p>justify-content: flex-start;(默认) 左对齐</p>
      <ul class="flex-box justify-content flex-start">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>justify-content: flex-end; 右对齐</p>
      <ul class="flex-box justify-content flex-end">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>justify-content: center; 居中</p>
      <ul class="flex-box justify-content center">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>justify-content: space-between; 两端对齐，项目之间的间隔都相等</p>
      <ul class="flex-box justify-content space-between">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <p>justify-content: space-around; 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</p>
      <ul class="flex-box justify-content space-around">
        <li class="flex-item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <h3>2-5. align-items</h3>
      <p>定义项目在交叉轴上如何对齐</p>
      <pre>
        .box {
          align-items: flex-start | flex-end | center | baseline | stretch;
        }
      </pre>
      <p>align-items: flex-start; 交叉轴起点对齐</p>
      <ul class="flex-box" style="align-items: flex-start">
        <li class="flex-item" v-for="item in list" :key="item" :style="{height: `${Math.random()*50 + 50}px`}">{{item}}</li>
      </ul>
      <p>align-items: flex-end; 交叉轴终点对齐</p>
      <ul class="flex-box" style="align-items: flex-end">
        <li class="flex-item" v-for="item in list" :key="item" :style="{height: `${Math.random()*50 + 50}px`}">{{item}}</li>
      </ul>
      <p>align-items: center; 交叉轴中点对齐</p>
      <ul class="flex-box" style="align-items: center">
        <li class="flex-item" v-for="item in list" :key="item" :style="{height: `${Math.random()*50 + 50}px`}">{{item}}</li>
      </ul>
      <p>align-items: baseline; 项目的第一行文字的基线对齐。</p>
      <ul class="flex-box" style="align-items: baseline">
        <li class="flex-item" v-for="item in list" :key="item" :style="{height: `${Math.random()*50 + 50}px`}">{{item}}</li>
      </ul>
      <p>align-items: stretch; （默认值）如果项目未设置高度或设为auto，将占满整个容器的高度。</p>
      <ul class="flex-box" style="align-items: stretch;height:200px">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
      </ul>
      <h3>2.6 align-content: 属性定义了多根x轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</h3>
      <pre>
        .box {
          align-content: flex-start | flex-end | center | space-between | space-around | stretch;
        }
      </pre>
      <p>align-content: flex-start; 与交叉轴的起点对齐</p>
      <ul class="flex-box" style="height:200px; justify-content: flex-start; flex-wrap: wrap;align-content: flex-start">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 10}}</li>
      </ul>
      <p>align-content: flex-end; 与交叉轴的终点对齐</p>
      <ul class="flex-box" style="height:200px; justify-content: flex-start; flex-wrap: wrap;align-content: flex-end">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 10}}</li>
      </ul>
      <p>align-content: center; 与交叉轴的中点对齐</p>
      <ul class="flex-box" style="height:200px; justify-content: flex-start; flex-wrap: wrap;align-content: center">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 10}}</li>
      </ul>
      <p>align-content: space-between;与交叉轴两端对齐，轴线之间的间隔平均分布。</p>
      <ul class="flex-box" style="height:200px; justify-content: flex-start; flex-wrap: wrap;align-content: space-between">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 10}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 20}}</li>
      </ul>
      <p>align-content: space-around; 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</p>
      <ul class="flex-box" style="height:200px; justify-content: flex-start; flex-wrap: wrap;align-content: space-around">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 10}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 20}}</li>
      </ul>
      <p>align-content: stretch; （默认值）：轴线占满整个交叉轴。</p>
      <ul class="flex-box" style="height:200px; justify-content: flex-start; flex-wrap: wrap;align-content: stretch">
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 10}}</li>
        <li class="flex-item" v-for="item in list" :key="item" style="height:auto">{{item + 20}}</li>
      </ul>
      <h2>3. 项目的属性</h2>
      <p>项目上有留个属性</p>
      <ul>
        <li>order</li>
        <li>flex-grow</li>
        <li>flex-shrink</li>
        <li>flex-basis</li>
        <li>flex</li>
        <li>align-self</li>
      </ul>
      <h3>3-1. order: 定义项目的排列顺序，数值越小。排列越靠前。默认为0</h3>
      <pre>
        .item {
          order: integer;
        }
      </pre>
      <ul class="flex-box">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{order: item === 9? -1: 0}">{{item}}</li>
      </ul>
      <h3>3-2. flex-grow: 定义项目的放大比例。默认为0，即如果存在剩余空间也不放大</h3>
      <p>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p>
      <pre>
        .item {
          flex-grow: number ; /* default 0 */
        }
      </pre>
      <ul class="flex-box">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{flexGrow: item%2 ===1 ? 1: 2}">{{item}}</li>
      </ul>
      <h3>3-3. flex-shrink: 定义项目的缩小比例。默认为1，即如果存在剩余空间不足该项目将缩小</h3>
      <p>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
        <br/>负值对该属性无效。
      </p>
      <pre>
        .item {
          flex-shrink: number ; /* default 1 */
        }
      </pre>
      <ul class="flex-box" style="width: 300px">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{flexShrink: item ===0 ? 0: 1}">{{item}}</li>
      </ul>
      <h3>3-4. flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</h3>
      <pre>
        .item {
          flex-basis: length | auto; /* default auto */
        }
      </pre>
      <ul class="flex-box" >
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{flexBasis: item === 0 ? '100px': 'auto'}">{{item}}</li>
      </ul>
      <ul class="flex-box" style="justify-content: space-between; flex-wrap:wrap; overflow:hidden;">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{flexBasis: '30%', flexShrink: 0, flexGrow: 0,display:'block',maxWidth: '30%'}">{{item}}</li>
      </ul>
      <h3>3.5 flex: 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</h3>
      <pre>
        .item {
          flex: none |  'flex-grow' ['flex-shrink' || 'flex-basis']
        }
      </pre>
      <p>
        该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。<br/>
        建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
      </p>
      <p>flex: auto</p>
      <ul class="flex-box" style="">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{flex: '1 1 auto'}">{{item}}</li>
      </ul>
      <p>flex: none</p>
      <ul class="flex-box" style="">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{flex: '0 0 auto'}">{{item}}</li>
      </ul>
      <h3>3-6. align-self:align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</h3>
      <pre>
        .item {
          align-self: auto | flex-start | flex-end | center | baseline | stretch;
        }
      </pre>
      <ul class="flex-box" style="flex-direction: row;align-item: flex-start">
        <li
          class="flex-item"
          v-for="item in list"
          :key="item"
          :style="{alignSelf: item===5? 'flex-end': 'auto',height: `${Math.random()*50 + 50}px`}">{{item}}</li>
      </ul>
      <ul class="flex-box" style="width:300px">
        <li class="flex-item" style="flex:1;width:auto;">1</li>
        <li class="flex-item" style="flex:1;width:auto;">2</li>
        <li class="flex-item" style="width:400px">3</li>
      </ul>
      <h2>使用flex实现一个三点的色子</h2>
      <ul class="saizi_box">
        <li class="saizi">1</li>
        <li class="saizi">2</li>
        <li class="saizi">3</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const list: number[] = Array.from({ length: 10 }, (v, k) => k)
    return {
      list
    }
  }
})
</script>
<style lang="less" scoped>
.saizi_box{
  list-style: none;
  width:300px;
  height:300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding:20px;
  .saizi{
    width:50px;
    height:50px;
    background: #ddd;
    color:#333;
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    &:nth-child(2){
      align-self: center;
    }
    &:nth-child(3){
       align-self: flex-end;
    }
  }
}
ul{
  padding: 0;
}
.container{
  width: 100%;
  min-height: 100vh;
  padding:10px 20px;
  .flex-item{
    width:50px;
    height:50px;
    background: red;
    text-align: center;
    line-height: 50px;
    color:#fff;
    border:2px solid orange;
    &.w-500{
      width:500px;
    }
  }
  .flex-box{
    display: flex;
    margin-bottom: 10px;
    list-style: none;
    border: 2px solid #333;
    background-color: #eee;
    &.flex-direction{
      &.row{
        flex-direction: row;
      }
      &.row-reverse{
        flex-direction: row-reverse;
      }
      &.column{
        flex-direction: column;
      }
      &.column-reverse{
        flex-direction: column-reverse;
      }
    }
    &.flex-wrap{
      &.nowrap{
        flex-wrap: nowrap;
      }
      &.wrap{
        flex-wrap: wrap;
      }
      &.wrap-reverse{
        flex-wrap: wrap-reverse;
      }
    }
    &.flex-flow{
      &.row-reverse-wrap-reverse{
        flex-flow: row-reverse wrap-reverse;
      }
    }
    &.justify-content{
      &.flex-start{
        justify-content: flex-start;
      }
      &.flex-end{
        justify-content: flex-end;
      }
      &.center{
        justify-content: center;
      }
      &.space-between{
        justify-content: space-between;
      }
      &.space-around{
        justify-content: space-around;
      }
    }
  }
}
</style>
