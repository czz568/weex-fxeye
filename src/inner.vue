<template>
	<scroller class="detail-wrapper">
		<bannerScroll v-if="marketDetail.imageList" :banLists="marketDetail.imageList" :bgColor="'#666666'"></bannerScroll>
		<div class="tit-box">
	    	<div class="tit-row1">
	    		<text class="label" :style="{backgroundColor:marketDetail.content.color}">{{marketDetail.content.icon}}</text>
	    		<text class="tit-tit">{{marketDetail.content.title}}</text>
	    	</div>
	    	<text class="tit-row2">{{marketDetail.content.descript}}</text>	
	    </div>
	    <div class="con-box">
	    	<div class="row" :key="index" v-for="(value,key,index) in marketDetail.content.character">
	    		<text class="txt1">{{key}}：</text>
	    		<text :class="['txt2',{'red':key == '外佣','more-tx':key == '商品说明'}]" >{{value}}</text>
	    	</div>
	    </div>
	    <div class="dealer-box">
	    	<text class="dealer-b">交易商信息</text>
	    	<dealer :dealers="marketDetail.dealers"></dealer>
	    </div>
	</scroller>
</template>
<script>
	import bannerScroll from './components/bannerScroll.vue'
	import dealer from './components/dealer.vue'
	const stream = weex.requireModule("stream")
	const modal = weex.requireModule('modal')
	export default{
		name:'App',
		components:{
			bannerScroll,
			dealer
		},
		data(){
			return {
				marketDetail:null,
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
		},
		created:function(){
			var self = this;
			var curLocation = 'http://192.168.1.102:8081';
			var detailUrl = curLocation+'/src/assets/data/marketDetail.json';
			stream.fetch({
				method:"GET",
				url:detailUrl,
				type:"json",
			},function(ret){
				if(!ret.ok){
					modal.toast({message:"加载失败",duration:1})
				}else{
					self.marketDetail = ret.data;
				}
			})
		}
	}
</script>
<style scoped>
	.detail-wrapper{
		width:750px;
	}
	
  	.tit-box{
  		padding: 25px 30px;
		border-bottom-width: 20px;
		border-color: #f5f5f5;
		border-style: solid;
  	}
  	.tit-row1{
  		flex-direction: row;
  		margin-bottom: 20px;
  	}
  	.label{
  		padding:0 10px;
  		background-color: #f7842f;
  		color: #fff;
  		font-size: 26px;
  		height: 34px;
  		line-height: 34px;
  		margin-right: 10px;
  		border-radius: 5px;
  	}
  	.tit-tit{
  		flex: 1;
  		font-size: 32px;
  		color: #333333;
  	}
  	.tit-row2{
  		font-size: 20px;
  		color: #999999;
  	}
  	.con-box{
  		padding: 25px 30px 0;
		border-bottom-width: 20px;
		border-color: #f5f5f5;
		border-style: solid;
  	}
  	.row{
  		flex-direction: row;
  		margin-bottom: 26px;
  	}
  	.txt1{
  		width: 172px;
  		font-size: 28px;
  		color: #333333;
  	}
  	.txt2{
  		flex: 1;
  		font-size: 28px;
  		color: #666666;
  	}
  	.red{
  		color: #FC341A;
  	}
  	.more-txt{
  		height: 74px;
  	}
  	.dealer-box{
  		padding: 0 30px;
  		
  	}
	.dealer-b{
		padding-top: 16px;
		height: 46px;
		line-height:30px;
		font-size: 28px;
  		color: #333333;
	}
	
</style>