<template>
  <div class="BFC nice-content">
    <h1>BFC规则</h1>
    <h2>BFC规则的特点：</h2>
    <ul>
      <li>1.BFC内部的box在垂直方向上，一个接一个的排放</li>
      <li>2.内部的box垂直方向由margin决定，同属于一个BFC的两个box间的margin会重叠</li>
      <li>3.BFC区域不会与float box重叠（可用于排版）</li>
      <li>4.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此</li>
      <li>5.计算BFC的高度时，浮动元素也参与计算（不会浮动坍塌）</li>
    </ul>
    <h2>如何触发BFC？</h2>
    <ul>
      <li>1.根元素</li>
      <li>2.float属性不为none</li>
      <li>3.position为absolute或fixed</li>
      <li>4.display为inline-block, flex, inline-flex，table，table-cell，table-caption</li>
      <li>5.overflow不为visible</li>
    </ul>
    <h2>举例</h2>
    <div class="container example">
      <p>float:left。垂直方向放置；margin重叠；</p>
      <div class="bfc_box fl">
        <div class="bfc_item" v-for="item in list" :key="item">{{item}}</div>
      </div>
    </div>
    <div class="container example">
      <p>overflow:hidden。 不会浮动坍塌</p>
      <div class="bfc_box overflow">
        <div class="bfc_item" v-for="item in list" :key="item">{{item}}</div>
      </div>
    </div>
    <div class="container example">
      <p>BFC区域不会与float box重叠</p>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const list = Array.from({ length: 10 }, (v, k) => k)
    return {
      list
    }
  }
})
</script>
<style lang="less" scoped>
@import url('../../assets/css/nice.css');
.BFC{
  .example{
    border: 2px dashed #ddd;
    padding:10px;
    box-shadow: 0 2px 5px 2px #aaa;
    overflow: hidden;
    margin-bottom:20px;
    .bfc_box{
      .bfc_item{
        margin:10px 0px;
        border:1px solid pink;
        text-align: center;
      }
      &.fl{
        float:left;
      }
      &.overflow{
        overflow: hidden;
        .bfc_item{
          float:left;
        }
      }
    }
    .left{
      float:left;
      width:200px;
      height:200px;
      background: chartreuse;
    }
    .right{
      height:300px;
      background: red;
      overflow: hidden;
    }
  }
}
</style>
