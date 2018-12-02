<template>
    <div>
        <div class="inner"  v-for="(value, index) in dealers" :key="index">
            <a class="a-link" :href="value.link">
                <div class="item1">
                    <image class="logo-pic" :src="value.logo"></image>
                    <text class="supervise">{{value.status}}</text>
                </div>
                <div class="item2">
                    <text class="dea-tit">{{value.name}}</text>
                    <div class="score-box">
                        <text class="eye">天眼评分</text>
                        <text class="score">{{value.score}}</text>
                    </div>
                    <text class="info">{{value.descript}}</text>
                </div>
            </a>
        </div>
    </div>
</template>
<style scoped>
    .a-link{
        flex-direction: row;
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
		border-width: 1px;
		border-color: #e5e5e5;
		border-style: solid;
		position: relative;
        overflow: hidden;
        justify-content: center;
        align-items: center;
	}
	.logo-pic{
		width: 196px;
		height: 108px;
		resize: contain;
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

<script>
    export default{
        props:{
            dealers:{
                Array
            }
        }
    }
</script>