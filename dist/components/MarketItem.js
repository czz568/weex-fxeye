// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "list-box": {
    "width": "750",
    "paddingTop": "20",
    "backgroundColor": "#f5f5f5"
  },
  "list-item": {
    "width": "750",
    "flexDirection": "row",
    "paddingTop": "25",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "justifyContent": "space-between",
    "marginBottom": "20",
    "backgroundColor": "#ffffff"
  },
  "item-l": {
    "flex": 1,
    "marginRight": "25"
  },
  "title-box": {
    "flexDirection": "row",
    "marginBottom": "10",
    "display": "flex"
  },
  "label": {
    "borderRadius": "5",
    "paddingLeft": "8",
    "paddingRight": "8",
    "height": "33",
    "lineHeight": "33",
    "marginRight": "12",
    "fontSize": "27",
    "backgroundColor": "#f7842f",
    "color": "#ffffff",
    "marginTop": "2",
    "justifyContent": "center"
  },
  "title-txt": {
    "fontSize": "29",
    "color": "#333333",
    "flex": 1,
    "height": "72"
  },
  "text": {
    "marginBottom": "2",
    "flexDirection": "row"
  },
  "price": {
    "color": "#666666",
    "fontSize": "26"
  },
  "red": {
    "color": "#fc341a",
    "fontSize": "26"
  },
  "user": {
    "flexDirection": "row",
    "paddingTop": "20",
    "alignItems": "center",
    "height": "45"
  },
  "photo": {
    "width": "25",
    "height": "25",
    "borderRadius": "13",
    "marginRight": "8"
  },
  "name": {
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "12"
  },
  "job": {
    "color": "#47a6ef",
    "paddingLeft": "8",
    "paddingRight": "8",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#47a6ef",
    "borderRadius": "3",
    "fontSize": "19",
    "marginRight": "8",
    "textAlign": "center"
  },
  "icon-pic": {
    "width": "25",
    "height": "25",
    "marginRight": "8"
  },
  "icon-img": {
    "width": "25",
    "height": "25"
  },
  "item-r": {
    "width": "179"
  },
  "poster": {
    "width": "179",
    "height": "134",
    "marginBottom": "24"
  },
  "time": {
    "fontSize": "19",
    "color": "#999999",
    "textAlign": "right"
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
module.exports = {
	data: function data() {
		return {
			marketLists: null
		};
	},
	methods: {
		jump: function jump(event) {
			navigator.push({
				url: this.getJumpBaseUrl('inner'), animated: "true"
			});
		},
		getJumpBaseUrl: function getJumpBaseUrl(toUrl) {
			var bundleUrl = weex.config.bundleUrl;
			bundleUrl = new String(bundleUrl);
			var nativeBase;
			var native;
			if (WXEnvironment.platform.toLowerCase() === 'ios') {
				modal.toast({ message: WXEnvironment.platform, duration: 10 });
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
				if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
					nativeBase = 'http://' + host + '/';
				} else {
					nativeBase = 'http://' + host + '/';
				}

				native = nativeBase + toUrl + ".html";
			}
			return native;
		}
	},
	created: function created() {
		var self = this;
		var marketUrl = 'http://192.168.1.14:8081/src/assets/data/marketlist.json';
		stream.fetch({
			method: 'GET',
			url: marketUrl,
			type: 'json'
		}, function (ret) {
			if (!ret.ok) {
				modal.toast({ message: '加载失败', duration: 1 });
			} else {
				self.marketLists = ret.data;
			}
		});
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list-box"]
  }, _vm._l((_vm.marketLists), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": _vm.jump
      }
    }, [_c('div', {
      staticClass: ["item-l"]
    }, [_c('div', {
      staticClass: ["title-box"]
    }, [_c('text', {
      staticClass: ["label"],
      style: {
        backgroundColor: item.bgcolor
      }
    }, [_vm._v(_vm._s(item.label))]), _c('text', {
      staticClass: ["title-txt"]
    }, [_vm._v(_vm._s(item.title))])]), _c('div', {
      staticClass: ["text"]
    }, [_c('text', {
      staticClass: ["price"]
    }, [_vm._v("监管国家：" + _vm._s(item.country))])]), _c('div', {
      staticClass: ["text"]
    }, [_c('text', {
      staticClass: ["price"]
    }, [_vm._v("出售价格：")]), _c('text', {
      staticClass: ["red"]
    }, [_vm._v(_vm._s(item.salary))])]), _c('div', {
      staticClass: ["user"]
    }, [_c('image', {
      staticClass: ["photo"],
      attrs: {
        "src": item.photo
      }
    }), _c('text', {
      staticClass: ["name"]
    }, [_vm._v(_vm._s(item.nickname))]), (item.isvip) ? _c('div', {
      staticClass: ["icon-pic"]
    }, [_c('image', {
      staticClass: ["icon-img"],
      attrs: {
        "src": "http://192.168.1.14:8081/src/assets/images/icon_vip.png"
      }
    })]) : _vm._e(), _c('text', {
      staticClass: ["job"]
    }, [_vm._v(_vm._s(item.identity))]), (item.isphone) ? _c('div', {
      staticClass: ["icon-pic"]
    }, [_c('image', {
      staticClass: ["icon-img"],
      attrs: {
        "src": "http://192.168.1.14:8081/src/assets/images/icon_phone.png"
      }
    })]) : _vm._e(), (item.iswechat) ? _c('div', {
      staticClass: ["icon-pic"]
    }, [_c('image', {
      staticClass: ["icon-img"],
      attrs: {
        "src": "http://192.168.1.14:8081/src/assets/images/icon_wechat.png"
      }
    })]) : _vm._e(), (item.isqq) ? _c('div', {
      staticClass: ["icon-pic"]
    }, [_c('image', {
      staticClass: ["icon-img"],
      attrs: {
        "src": "http://192.168.1.14:8081/src/assets/images/icon_qq.png"
      }
    })]) : _vm._e()])]), _c('div', {
      staticClass: ["item-r"]
    }, [_c('image', {
      staticClass: ["poster"],
      attrs: {
        "src": item.poster
      }
    }), _c('text', {
      staticClass: ["time"]
    }, [_vm._v(_vm._s(item.time))])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "G:\\Weex\\fxeye-app\\src\\components\\MarketItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4b1a3ef8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);