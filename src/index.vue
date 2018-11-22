<template>

  <div class="wrapper">

    <scroller class="mian-scroller">
      <refresh @refresh="onrefresh" class="refresh" :display="refreshing ? 'show' : 'hide'">
        <loading-indicator class="indicator"></loading-indicator>
        <text class="indicator-text">{{refreshtext}}</text>
      </refresh>
      <topnav></topnav>
      <marketlist></marketlist>
      <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
        <loading-indicator class="indicator"></loading-indicator>
        <text class="indicator-text">{{loadingtext}}</text>
      </loading>
    </scroller>
    <router-view></router-view>
    <div class="pencil-box">
      <image class="pencil" src="http://192.168.1.14:8081/src/assets/images/icon_write.png"></image>
    </div>
  </div>
</template>

<script>
import topnav from './components/TopNav.vue'
import marketlist from './components/MarketItem.vue'
const modal = weex.requireModule('modal')
export default {
  name: 'App',
  components:{
    topnav,
    marketlist
  },
  data () {
    return {
      refreshing: false,
      refreshtext:'释放即可刷新',
      loadinging:false,
      loadingtext:'释放立即加载'
    }
  },
  methods:{
    onrefresh(event){
      var self = this;
      self.refreshing = true;
      setTimeout(function(){
        self.refreshing = false;
        modal.toast({message:"刷新成功",duration:1})
      },1E3)
    },
    onloading(event){
      var self = this;
      self.loadinging = true;
      setTimeout(function(){
        self.loadinging = false;
        modal.toast({message:"加载成功",duration:1})
      },1E3)
    }
  }
}
</script>

<style scoped>
  .mian-scroller{
    margin-top: 82px;
  }
  .refresh {
    width: 750px;
    height: 100px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
  }
  .loading{
    width: 750px;
    height: 100px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    background-color: #fff;
  }
  .indicator {
    height: 40px;
    width: 40px;
    color: #47a6ef;
  }
  .indicator-text {
    color: #47a6ef;
    font-size: 26px;
    text-align: center;
  }
  .pencil-box{
    position: fixed;
    right: 30px;
    bottom: 124px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: rgba(24,115,185,0.6);
    justify-content: center;
    align-items: center;
  }
  .pencil{
    width: 28px;
    height: 28px;
  }
</style>

