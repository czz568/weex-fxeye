<template>
	<scroller class="detail-wrapper">
		<div class="slid-box">
			<slider class="slider" interval="3000" auto-play="true" :index="0">
		      <div class="frame" v-for="(item, index) in imageList" :key="index">
		        <image class="image" resize="contain" :src="item"></image>
		        <text class="index">{{index+1}}</text>
		      </div>
		    </slider>
		    <div class="num-box"><text class="nums">/{{nums}}</text></div>
	    </div>
	    <div class="tit-box">
	    	<div class="tit-row1">
	    		<text class="label">IB</text>
	    		<text class="tit-tit">百利好，诚招个人和公司代理</text>
	    	</div>
	    	<text class="tit-row2">田先生 | 2018年11月15日 15:09</text>	
	    </div>
	    <div class="con-box">
	    	<div class="row">
	    		<text class="txt1">EA交易：</text>
	    		<text class="txt2">不支持</text>
	    	</div>
	    	<div class="row">
	    		<text class="txt1">外佣：</text>
	    		<text class="txt2 red">支持（0-200美金）</text>
	    	</div>
	    	<div class="row">
	    		<text class="txt1">返佣手续费：</text>
	    		<text class="txt2">支持（0-200美金）</text>
	    	</div>
	    	<div class="row">
	    		<text class="txt1">返佣周期：</text>
	    		<text class="txt2">日结</text>
	    	</div>
	    	<div class="row">
	    		<text class="txt1">商品说明：</text>
	    		<text class="txt2 more-txt">支持刷单秒单，佣金日返，出入金无障，提供跟单社区，和搭建平台 支付通道。</text>
	    	</div>
	    </div>
	    <div class="dealer-box">
	    	<text class="dealer-b">交易商信息</text>
	    	<div class="inner">
		    	<div class="item1">
		    		<image class="logo-pic" src="http://eimgjys.fxeye.com/logo/0001460706/FXT_0001460706_400x226.png_fxeye-template-global"></image>
		    		<text class="supervise">监管中</text>
		    	</div>
		    	<div class="item2">
		    		<text class="dea-tit">ORIGIN ECN</text>
		    		<div class="score-box">
		    			<text class="eye">天眼评分</text>
		    			<text class="score">4.35</text>
		    		</div>
		    		<text class="info">10-15年 | 澳大利亚监管 | 投资咨询</text>
		    	</div>
	    	</div>
	    	<div class="inner">
		    	<div class="item1">
		    		<image class="logo-pic" src="http://eimgjys.fxeye.com/logo/0001460706/FXT_0001460706_400x226.png_fxeye-template-global"></image>
		    		<text class="supervise">监管中</text>
		    	</div>
		    	<div class="item2">
		    		<text class="dea-tit">ORIGIN ECN</text>
		    		<div class="score-box">
		    			<text class="eye">天眼评分</text>
		    			<text class="score">4.35</text>
		    		</div>
		    		<text class="info">10-15年 | 澳大利亚监管 | 投资咨询</text>
		    	</div>
	    	</div>
	    </div>		
	</scroller>
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
				imageList:[
					"http://eimgmarket.fxeye.com/market/2018145154364701/FXM2018145154364701_273081.jpg_tyjs-pic","http://eimgmarket.fxeye.com/market/2018145754189664/FXM2018145754189664_439487.jpg_tyjs-pic","http://eimgmarket.fxeye.com/market/2018149054577498/FXM2018149054577498_324929.jpg_tyjs-pic"
				],
				nums:3
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
	.detail-wrapper{
		width:750px;
	}
	.slid-box{
		width: 750px;
  		height: 372px;
  		position: relative;
	}
  	.slider{
  		width: 750px;
  		height: 372px;
  	}
  	.frame {
	    width: 750px;
  		height: 372px;
	    position: relative;
			background-color: #999;
	 }
  	.image{
  		width: 750px;
  		height: 392px;
  	}
  	.num-box{
  		position: absolute;
  		width: 74px;
  		height: 28px;
  		flex-direction: row;
  		justify-content: flex-end;
  		right: 30px;
  		bottom: 20px;
  		background-color: rgba(0,0,0,0.3);
  		border-radius: 14px;
  		padding-right: 20px
  	}
  	.nums{
  		font-size: 18px;
  		color: #fff;
  		height: 28px;
  		line-height: 28px;
  	}
  	.index{
		font-size: 22px;
		color: #fff;
		position: absolute;bottom: 20px;
		right: 70px;
		height: 28px;
  		line-height: 28px;
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
	.inner{
		flex-direction: row;
		height: 168px;
		padding: 28px 0;
		border-color: #e5e5e5;
		border-style: solid;
		border-bottom-width: 1px;
	}
	.item1{
		margin-right: 20px;
		width: 200px;
		height: 112px;
		border-width: 1px;
		border-color: #e5e5e5;
		border-style: solid;
		position: relative;
	}
	.logo-pic{
		width: 198px;
		height: 110px;
	}
	.supervise{
		position: absolute;
		left: 0;
		top:0;
		padding: 0 6px;
		height: 24px;
		line-height: 24px;
		color: #fff;
		font-size: 18px;
		background-color: #7fb759;
	}
	.dea-tit{
		font-size: 24px;
		color: #43464f;
		margin-bottom: 16px;
	}
	.score-box{
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 16px;
	}
	.eye{
		padding: 0 6px;
		height: 24px;
		line-height: 24px;
		color: #fff;
		font-size: 18px;
		background-color: #f16816;
	}
	.score{
		font-size: 18px;
		color: #f16816;
		padding: 0 6px;
		height: 24px;
		line-height: 24px;
		border-style: solid;
		border-width: 1px;
		border-color: #f16816;
	}
	.info{
		font-size: 20px;
		color: #a3a7b2;
	}
</style>