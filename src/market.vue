<template>
	<div class="market-wrapper">
		<scroller class="market-scroll">
			<refresh @refresh="onrefresh" class="refresh" :display="refreshing ? 'show' : 'hide'">
		        <loading-indicator class="indicator"></loading-indicator>
		        <text class="indicator-text">释放即可刷新</text>
		    </refresh>
		    <div class="banner-wrapper">
		    	<image class="logo" src="http://192.168.1.14:8081/src/assets/images/logo.png"></image>
		    </div>
			<search></search>
			<marketlist></marketlist>
		    <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
		        <loading-indicator class="indicator"></loading-indicator>
		        <text class="indicator-text">释放加载更多</text>
		      </loading>
		</scroller>
		
	</div>
</template>
<script>
	import search from './components/Search.vue'
	import marketlist from './components/MarketItem.vue'
	const modal = weex.requireModule('modal')
	export default{
		name:'App',
		components:{
			search,
			marketlist
		},
		data(){
			return {
				refreshing: false,
			    loadinging:false,
			}
		},
		methods:{
			onrefresh(event){
				this.refreshing = true;
				var self = this;
				setTimeout(function(){
					self.refreshing = false;
					modal.toast({message:'刷新成功',duration:1});
				},1E3)
			},
			onloading(){
				this.loadinging = true;
				var self = this;
				setTimeout(function(){
					self.loadinging = false;
					modal.toast({message:'加载成功',duration:1});
				},1E3)
			}
		}
	}
</script>
<style scoped>
	.market-wrapper{
		width:750px;
		margin-top: 78px;
	}
  	.refresh {
	    width: 750px;
	    height: 100px;
	    display: -ms-flex;
	    display: -webkit-flex;
	    display: flex;
	    flex-direction: row;
	    justify-content:center;
	    align-items:center;
  	}
  	.loading{
	    width: 750px;
	    height: 100px;
	    display: -ms-flex;
	    display: -webkit-flex;
	    display: flex;
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
  	.banner-wrapper{
  		width: 750px;
  		height: 246px;
  		background-color: #0775bb;
  		justify-content: center;
  		align-items: center;
  	}
  	.logo{
  		height: 86px;
  		width: 354px;
  	}
</style>