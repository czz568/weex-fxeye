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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "G:\\Weex\\fxeye-app\\src\\components\\TopNav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3784a4ba"
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


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  "nav-wraper": {
    "paddingTop": "32",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "width": "750",
    "flexWrap": "wrap",
    "backgroundColor": "#ffffff"
  },
  "nav-item": {
    "alignItems": "center",
    "marginBottom": "32",
    "width": "187.5"
  },
  "nav-icon": {
    "width": "76",
    "height": "76"
  },
  "icon-txt": {
    "marginTop": "10",
    "fontSize": "23",
    "color": "#333333"
  }
}

/***/ }),

/***/ 7:
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
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');

module.exports = {
	data: function data() {
		return {
			navs: null
		};
	},
	methods: {
		jump: function jump(event) {
			navigator.push({
				url: this.getJumpBaseUrl('market'), animated: "true"
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
		var dataUrl = 'http://192.168.1.14:8081/src/assets/data/nav.json';
		stream.fetch({
			method: 'GET',
			url: dataUrl,
			type: 'json'
		}, function (ret) {
			if (!ret.ok) {
				alert("reauest failed");
			} else {
				self.navs = ret.data;
			}
		});
	}
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["nav-wraper"]
  }, _vm._l((_vm.navs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["nav-item"],
      on: {
        "click": _vm.jump
      }
    }, [_c('image', {
      staticClass: ["nav-icon"],
      attrs: {
        "src": item.icon
      }
    }), _c('text', {
      staticClass: ["icon-txt"]
    }, [_vm._v(_vm._s(item.text))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });