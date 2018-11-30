<template>
    <div class="slid-box">
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" :style="{backgroundColor:bgColor}" v-for="(item, index) in banLists" :key="index" >
                <image class="image" resize="contain" :src="item"></image>
				<text class="index">{{index+1}}</text>
            </div>
        </slider>
        <div class="num-box"><text class="nums">/{{banLists.length}}</text></div>
    </div>
</template>

<style scoped>
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
</style>

<script>
    export default{
        props:{
            banLists:{//ban图片
                type:[Array,Object]
            },
            bgColor:{//自定义背景色
                type:String,
                default:"#333333"
            }
        }
    }
</script>
