<template>
  <div class="container" >
    <div class="content">
      <h1>margin纵向重叠? AAA 和 BBB直接的距离 ---- 15px</h1>
      <pre>
        p {
          margin-bottom: 10px;
          margin-top:15px;
          line-height: 1;
        }</pre>
      <p>AAA</p>
      <p></p>
      <p></p>
      <p></p>
      <p>BBB</p>
    </div>
    <div class="content">
      <h1>margin负值问题</h1>
      <p>margin-top: 负值； 元素向上移动</p>
      <p>margin-left: 负值； 元素向左移动</p>
      <p>margin-bottom: 负值； 自身不受影响，下方元素上移</p>
      <p>margin-right: 负值； 自身不受影响，右边元素左移</p>
      <div class="example">
        <ul>
          <li v-for="item in [1,2]" :key="item">{{item}}</li>
        </ul>
        <ul>
          <li v-for="item in [1,2]" :key="item" style="float:none">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h1>实现圣杯布局和双飞翼布局</h1>
      <p>三栏布局，中间一栏最先加载渲染</p>
      <p>两侧内容固定，中间宽度自适应</p>
      <div class="example">
        <h2>圣杯布局</h2>
        <div class="shengbei">
          <div class="center">center</div>
          <div class="left">left</div>
          <div class="right">right</div>
        </div>
      </div>
      <div class="example">
        <h2>双飞翼布局</h2>
        <div class="shuangfeiyi">
          <div class="center">
            <div class="center_box">
              center
            </div>
          </div>
          <div class="left">left</div>
          <div class="right">right</div>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>伪类实现clearfix</h1>
      <pre>
        .clearfix:after{
          content: "";
          display: none;
          clear: both;
        }
      </pre>
    </div>
    <div class="content">
      <h1>line-height如何继承</h1>
      <h2>写具体值，如30px;继承值</h2>
      <div style="line-height:30px">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi culpa vel similique necessitatibus sint incidunt, facilis fugiat numquam placeat labore natus voluptates dolores enim id quidem commodi quas est!</p>
      </div>
      <h2>写比例，如2;继承比例</h2>
      <div style="line-height:2;font-size:20px;">
        <p style="font-size:14px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi culpa vel similique necessitatibus sint incidunt, facilis fugiat numquam placeat labore natus voluptates dolores enim id quidem commodi quas est!</p>
      </div>
      <h2>写百分比，如200%;继承计算出来的值</h2>
      <div style="line-height:200%;font-size:20px;">
        <p style="font-size:14px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi culpa vel similique necessitatibus sint incidunt, facilis fugiat numquam placeat labore natus voluptates dolores enim id quidem commodi quas est!</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
*{
  margin: 0;
  padding:0;
  list-style: none;
}
.content{
  margin-bottom: 10px;
  h1{
    font-size: 24px;
    &::before{
      content: '';
      display: inline-block;
      width:5px;
      height:30px;
      background: green;
      vertical-align: middle;
      margin-right:10px;
    }
  }
}
.content:nth-child(1){
  p{
    margin-bottom: 10px;
    margin-top:15px;
    line-height: 1;
  }
}
.content:nth-child(2){
  ul{
    overflow: hidden;
    border: 1px dashed #ddd;
    padding:10px;
    margin-bottom: 10px;
    li{
      float:left;
      width: 33.3333%;
      line-height: 30px;
      height: 30px;
      text-align: center;
      &:nth-child(even){
        border:1px solid red
      }
      &:nth-child(odd){
        border:1px solid green
      }
    }
    &:nth-child(1){
      li:first-child{
        margin-left:-10px;
        margin-right:-10px;
      }
    }
    &:nth-child(2){
      li:first-child{
        margin-top:-10px;
        margin-bottom: -10px;
      }
    }
  }
}
.content:nth-child(3){
  .example{
    .shengbei{
      padding-left:200px;
      padding-right:150px;
      overflow: hidden;
      .left{
        width:200px;
        background: green;
        float:left;
        margin-left:-100%;
        right:200px;
        position: relative;
      }
      .center{
        width:100%;
        background: red;
        float:left;
      }
      .right{
        width:150px;
        background: yellow;
        float:left;
        margin-right:-150px;
      }
    }
    .shuangfeiyi{
      overflow: hidden;
      .left{
        width:200px;
        background: green;
        float:left;
        margin-left:-100%;
      }
      .center{
        width:100%;
        background: red;
        float:left;
        .center_box{
          margin: 0 150px 0 200px;
        }
      }
      .right{
        width:150px;
        background: yellow;
        float:left;
        margin-left:-150px;
      }
    }
  }
}
</style>
