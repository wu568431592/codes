<template>
  <div class="flex">
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
.container{
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
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
