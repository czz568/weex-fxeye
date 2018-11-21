<template>
	<div class="nav-wraper">
		<div class="nav-item" @click="jump" :key="index" v-for="(item,index) in navs">
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
	const stream = weex.requireModule('stream')
	const navigator = weex.requireModule('navigator')
	const modal = weex.requireModule('modal')

	module.exports = {
		data:function(){
			return {
				navs:null
			}
		},
		methods:{
			jump(event){
				navigator.push({
					url:this.getJumpBaseUrl('market'),animated:"true"
				})
			},
			getJumpBaseUrl(toUrl) {  
		        var bundleUrl = weex.config.bundleUrl;  
		        bundleUrl = new String(bundleUrl);  
		        var nativeBase;  
		        var native;
		        if (WXEnvironment.platform.toLowerCase() === 'ios') {  
		        	modal.toast({message:WXEnvironment.platform,duration:10});
		            nativeBase = 'file://assets/dist/';  
		            native = nativeBase + toUrl + ".js";  
		        } else if (WXEnvironment.platform.toLowerCase() === 'android') {  
		            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);  
		            native = nativeBase + toUrl + ".js";
		        } else {  
		            var host = 'localhost:8081';  
		            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);  
		            if (matches && matches.length >= 2) {  
		                host = matches[1];  
		            }  
		            if (typeof window === 'object') {  
		                nativeBase = 'http://' + host + '/';  
		            } else {  
		                nativeBase = 'http://' + host + '/';  
		            }  
		  
		            native = nativeBase + toUrl + ".html";  
		        }  
		        return native;  
		    } 
		},
		created:function(){
			var self = this;
			var dataUrl = 'http://192.168.1.100:8081//src/assets/data/nav.json';
			stream.fetch({
				method:'GET',
				url:dataUrl,
				type:'json',
			},function(ret){
				if(!ret.ok){
					alert("reauest failed");
				}else{
					self.navs = ret.data;
				}
			})
		}
	}
</script>