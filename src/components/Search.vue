<template>
	<div>
	  <div class="search-wrapper">
	  	<text class="page-name">天眼集市</text>
	  	<div class="input-box">
	  		<image class="btn-search" src="http://192.168.1.102:8081/src/assets/images/icon_search.png"></image>
	  		<input class="input-txt" placeholder="外贸届的58同城" type="text" disabled="false" >
	  	</div>
	  	<div class="publish-box">
	  		<image class="btn-write" src="http://192.168.1.102:8081/src/assets/images/icon_write.png"></image>
	  		<text class="publish-txt">发布</text>
	  	</div>
	  </div>
	  <div class="pencil-box">
	    <image class="pencil" src="http://192.168.1.102:8081/src/assets/images/icon_write.png"></image>
	  </div>
	</div>
</template>

<style scoped>
	.search-wrapper{
		position: fixed;
		top: 0;
		width: 750px;
		height: 82px;
		background-color: #1a8ad0;
		flex-direction: row;
		padding: 0 30px;
		justify-content:space-between;
		align-items: center;
	}
	.page-name{
		font-size: 30px;
		color: #ffffff;
		margin-right: 26px;
	}
	.input-box{
		flex: 1;
		height: 46px;
		padding-left: 56px;
		background-color: rgba(0,0,0,0.1);
		position: relative;
		border-radius: 28px;
		justify-content: center;
	}
	.btn-search{
		position: absolute;
		width: 26px;
		height: 26px;
		position: absolute;
		left:16px;
		top:10px;
	}
	.input-txt{
		font-size: 22px;
		color: #fff;
		background-color: rgba(0,0,0,0);
		height: 46px;
		placeholder-color:rgba(255, 255, 255,0.7);
	}
	.publish-box{
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		height: 82px;
		margin-left: 30px;
	}
	.btn-write{
		width: 27px;
		height: 27px;
		margin-right: 8px;
	}
	.publish-txt{
		font-size: 26px;
		color: #ffffff;
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