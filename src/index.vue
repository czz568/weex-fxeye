<template>
    <div class="wrapper">
        <!-- 顶部搜索 -->
        <search></search>
        <scroller class="mian-scroller">
            <refresh @refresh="onrefresh" class="refresh" :display="refreshing ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="indicator-text">释放即可刷新</text>
            </refresh>
            <!-- 顶部导航 -->
            <topnav @jump="urlJump" :navs="navs"></topnav>
            <!-- 交易商列表 -->
            <marketlist @jump="urlJump" :marketLists="marketLists"></marketlist>
            <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="indicator-text">释放即可加载</text>
            </loading>
        </scroller>
    </div>
</template>
<script>
  const navigator = weex.requireModule('navigator');
  import util from './assets/util.js';
  import mixins from './mixins/index.js'
  import search from './components/Search.vue'
  import topnav from './components/TopNav.vue'
  import marketlist from './components/MarketItem.vue'
  const modal = weex.requireModule('modal')
  export default {
      name: 'App',
      components: {
          search,
          topnav,
          marketlist
      },
      mixins: [mixins],
      data() {
          return {
              refreshing: false,
              loadinging: false,
              navs:[],
              marketLists:[]
          }
      },
      methods: {
          onrefresh(event) {
              var self = this;
              self.refreshing = true;
              setTimeout(function() {
                  self.refreshing = false;
                  modal.toast({ message: "刷新成功", duration: 1 })
              }, 1E3)
          },
          onloading(event) {
              var self = this;
              self.loadinging = true;
              setTimeout(function() {
                  self.loadinging = false;
                  modal.toast({ message: "加载成功", duration: 1 })
              }, 1E3)
          },
          urlJump(_result){
            var url = util.getJumpBaseUrl(_result.url);
            navigator.push({
              url:url,animated:"true"
            })
          }
      },
      created:function(){
          var self = this;
          this.GET('marketlist.json',res=>{
            if (!res.ok) {
                  modal.toast({ message: '加载失败', duration: 1 });
              } else {
                  self.marketLists = res.data;
              }
          });
          this.GET('nav.json',res=>{
            if (!res.ok) {
                  modal.toast({ message: '加载失败', duration: 1 });
              } else {
                  self.navs = res.data;
              }
          });
      }
  }
</script>
<style scoped>
.mian-scroller {
    margin-top: 82px;
}

.refresh {
    width: 750px;
    height: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}

.loading {
    width: 750px;
    height: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

.pencil-box {
    position: fixed;
    right: 30px;
    bottom: 124px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: rgba(24, 115, 185, 0.6);
    justify-content: center;
    align-items: center;
    text-align: center;
}

.pencil {
    width: 28px;
    height: 28px;
}
</style>