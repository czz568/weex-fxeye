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
            <marketlist @jump="urlJump" :marketLists="marketLists"></marketlist>
            <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="indicator-text">释放加载更多</text>
            </loading>
        </scroller>
    </div>
</template>
<script>
	const navigator = weex.requireModule('navigator');
	import util from './assets/util.js'
	import mixins from './mixins/index.js'
	import search from './components/Search.vue'
	import marketlist from './components/MarketItem.vue'
	const modal = weex.requireModule('modal')
	export default {
	    name: 'App',
	    components: {
	        search,
	        marketlist
	    },
	    data() {
	        return {
	            refreshing: false,
	            loadinging: false,
	            marketLists:[]
	        }
	    },
	    mixins: [mixins],
	    methods: {
	        onrefresh(event) {
	            this.refreshing = true;
	            var self = this;
	            setTimeout(function() {
	                self.refreshing = false;
	                modal.toast({ message: '刷新成功', duration: 1 });
	            }, 1E3)
	        },
	        onloading() {
	            this.loadinging = true;
	            var self = this;
	            setTimeout(function() {
	                self.loadinging = false;
	                modal.toast({ message: '加载成功', duration: 1 });
	            }, 1E3)
	        },
	        urlJump(_result){
	            var url = util.getJumpBaseUrl(_result.url);
	            navigator.push({
	              url:url,animated:"true"
	            })
	        }
	    },
	    created: function() {
	        var self = this;
	        this.GET('marketlist.json', res => {
	            if (!res.ok) {
	                modal.toast({ message: '加载失败', duration: 1 });
	            } else {
	                self.marketLists = res.data;
	            }
	        });
	    }
	}
</script>
<style scoped>
.market-wrapper {
    width: 750px;
    padding-top: 78px;
}

.refresh {
    width: 750px;
    height: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

.banner-wrapper {
    width: 750px;
    height: 246px;
    background-color: #0775bb;
    justify-content: center;
    align-items: center;
}

.logo {
    height: 86px;
    width: 354px;
}
</style>