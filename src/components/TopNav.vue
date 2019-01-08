<template>
	<div class="nav-wraper">
		<div class="nav-item" @click="jump(index,'market')" :key="index" v-for="(item,index) in navs">
			<image class="nav-icon" :src="item.icon"></image>
			<text class="icon-txt">{{item.text}}</text>
		</div>
	</div>
</template>

<style scoped>
	.nav-wraper{
		padding-top: 32px;
		flex-direction: row;
		justify-content: space-around;
		width: 750px;
		flex-wrap: wrap;
		background-color: #ffffff;
	}
	.nav-item{
		align-items: center;
		margin-bottom:32px;
		width: 187.5px;
	}
	.nav-icon{
		width: 76px;
		height: 76px;
	}
	.icon-txt{
		margin-top: 10px;
		font-size: 23px;
		color: #333333;
	}
</style>

<script>
	const modal = weex.requireModule('modal')
	module.exports = {
		props:{
			navs:{type:Array,default:function(){return []}}
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