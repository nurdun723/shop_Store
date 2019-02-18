<template>
  <div id="app">
    <mt-header class="header" fixed title="OneUSDT"></mt-header>
    <div class="contentDiv">
      <mt-button type="primary" size="small" @click="showWindow()">primary</mt-button>
    </div>
    
    
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'App',
  data:function()
  {
    return {
      windowStatus:null
    }
  },
  methods:{
    showWindow(){
      this.windowStatus = Toast({
        message:"收藏成功",
        duration:3000,
        coniconClass: 'glyphicon glyphicon-ok'
      })
    }
  }
}
</script>

<style>
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
#app .header
{
  background-color: #0000CD;
  height: 60px;
}
.contentDiv
{
  margin-top: 60px
}
</style>
