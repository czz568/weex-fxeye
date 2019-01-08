<template>
	<div class="list-box">
		<div class="list-item" @click="jump(index,'inner')" :key="index" v-for="(item,index) in marketLists">
			<div class="item-l">
				<div class="title-box">
					<text class="label" v-bind:style="{backgroundColor:item.bgcolor}">{{item.label}}</text>
					<text class="title-txt">{{item.title}}</text>
				</div>
				<div class="text"><text class="price">监管国家：{{item.country}}</text></div>	
				<div class="text"><text class="price">出售价格：</text><text class="red">{{item.salary}}</text></div>	
				<div class="user">
					<image class="photo" :src="item.photo"></image>
					<text class="name">{{item.nickname}}</text>
					<div class="icon-pic" v-if="item.isvip"><image class="icon-img" src="http://192.168.1.14:8081/src/assets/images/icon_vip.png"></image></div>
					<text class="job">{{item.identity}}</text>
					<div class="icon-pic" v-if="item.isphone"><image class="icon-img" src="http://192.168.1.14:8081/src/assets/images/icon_phone.png"></image></div>
					<div class="icon-pic" v-if="item.iswechat"><image class="icon-img" src="http://192.168.1.14:8081/src/assets/images/icon_wechat.png"></image></div>
					<div class="icon-pic" v-if="item.isqq"><image class="icon-img" src="http://192.168.1.14:8081/src/assets/images/icon_qq.png"></image></div>
					
				</div>
			</div>
			<div class="item-r">
				<image class="poster" :src="item.poster"></image>
				<text class="time">{{item.time}}</text>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		props:{
			marketLists:{type:Array,default:function(){return []}}
		},
		methods:{
			jump(id,url){
				this.$emit('jump',{
					id:id,
					url:url
				});
			},
		}
	}
</script>
<style scoped>
	.list-box{
		width: 750px;
		padding-top: 20px;
		background-color: #f5f5f5;
	}
	.list-item{
		width: 750px;
		flex-direction: row;
		padding: 25px 30px 30px;
		justify-content: space-between;
		margin-bottom: 20px;
		background-color: #fff;
	}
	.item-l{
		flex: 1;
		margin-right: 25px;
	}
	.title-box{
		flex-direction: row;
		margin-bottom: 10px;
	}
	.label{
		border-radius: 5px;
		padding-left:8px;
		padding-right:8px;
		height: 33px;
		line-height: 35px;
		margin-right: 12px;
		font-size: 27px;
		background-color: #f7842f;
		color: #fff;
		margin-top: 2px;
		justify-content: center;
	}
	.title-txt{
		font-size: 29px;
		color: #333333;
		flex: 1;
		/* height: 72px; */
	}
	.text{
		margin-bottom: 2px;
		flex-direction: row;
	}
	.price{
		color: #666666;
		font-size: 26px;
	}
	.red{
		color: #fc341a;
		font-size: 26px;
	}
	.user{
		flex-direction: row;
		padding-top: 10px;
		align-items: center;
		height: 45px;
	}
	.photo{
		width: 25px;
		height: 25px;
		border-radius: 13px;
		margin-right: 8px;
	}
	.name{
		font-size: 26px;
		color: #666666;
		margin-right: 12px;
	}
	.job{
		color: #47a6ef; 
		padding-left: 8px;
		padding-right: 8px;
		border-width: 1px;
		border-style: solid;
		border-color: #47a6ef;
		border-radius: 3px;
		font-size: 18px;
		margin-right: 8px;
		text-align: center;
		height: 25px;
		line-height: 25px;
	}
	.icon-pic{
		width: 25px;
		height: 25px;
		margin-right: 8px;
	}
	.icon-img{
		width: 25px;
		height: 25px;
	}
	
	.item-r{
		padding-top: 10px;
		width:179px;
		align-self: center;
	}
	.poster{
		width: 179px;
		height: 134px;
		margin-bottom: 15px;
	}
	.time{
		font-size: 19px;
		color: #999999;
		text-align: right;
	}
</style>