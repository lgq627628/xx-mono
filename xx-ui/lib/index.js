(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["XUI"] = factory(require("vue"));
	else
		root["XUI"] = factory(root["vue"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_0__.Button; },
/* harmony export */   "Container": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.Container; }
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
// 文件中转



/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = (_vue) => {
    _vue.component(_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}

// 单独导出 Button 对象
const Button = _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
// 导出默认模块
/* harmony default export */ __webpack_exports__["default"] = (_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _Users_bytedance_Desktop_xx_xx_ui_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);




;
const __exports__ = /*#__PURE__*/(0,_Users_bytedance_Desktop_xx_xx_ui_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/button/Button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["x-button", [$setup.buttonType, $setup.buttonSize]])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
 

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const __default__ = {
  name: "XButton",
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object.assign(__default__, {
  props: {
  type: {
    required: false,
    type: String,
    default: "default",
  },
  size: {
    required: false,
    type: String,
    default: "default",
  },
},
  setup(__props, { expose }) {
  expose();

const props = __props


const buttonType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => "x-button--" + props.type);
const buttonSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => "x-button-" + props.size);

const __returned__ = { props, buttonType, buttonSize, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}));

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _Container_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


_Container_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = (_vue) => {
    _vue.component(_Container_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Container_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}

// 单独导出 Container 对象
const Container = _Container_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
// 导出默认模块
/* harmony default export */ __webpack_exports__["default"] = (_Container_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container_vue_vue_type_template_id_256eee3f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _Users_bytedance_Desktop_xx_xx_ui_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);




;
const __exports__ = /*#__PURE__*/(0,_Users_bytedance_Desktop_xx_xx_ui_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Container_vue_vue_type_template_id_256eee3f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/container/Container.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Container_vue_vue_type_template_id_256eee3f__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Container_vue_vue_type_template_id_256eee3f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "x-container" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ]))
}

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
 

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "XContainer",
});


/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse('{"name":"@xx/ui","version":"1.0.2","description":"","//":"构建后公开的⽂件夹，隐藏开发时的配置信息","main":"lib/index.js","files":["lib","src","packages","example"],"scripts":{"start":"webpack server --config webpack.dev.js --color --progress --hot","build":"webpack --config webpack.prod.js --color --progress && npm run build:style","//":"修改 version 版本","pack":"npm pack","patch":"npm version patch -m","build:style":"gulp","test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":[],"author":"","license":"MIT","peerDependencies":{"vue":"^3.2.38"},"devDependencies":{"autoprefixer":"^10.4.8","css-loader":"^6.7.1","cssnano":"^5.1.13","gulp":"^4.0.2","gulp-cli":"^2.3.0","gulp-postcss":"^9.0.1","gulp-sass":"^5.1.0","gulp-sass-glob":"^1.1.0","html-webpack-plugin":"^5.5.0","node-sass":"^7.0.1","postcss":"^8.4.16","sass":"^1.54.8","sass-loader":"^13.0.2","style-loader":"^3.3.1","vue":"^3.2.38","vue-loader":"^17.0.0","vue-template-compiler":"^2.7.10","webpack":"^5.74.0","webpack-cli":"^4.10.0","webpack-dev-server":"^4.10.1"}}');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* reexport safe */ _packages__WEBPACK_IMPORTED_MODULE_0__.Button; },
/* harmony export */   "Container": function() { return /* reexport safe */ _packages__WEBPACK_IMPORTED_MODULE_0__.Container; }
/* harmony export */ });
/* harmony import */ var _packages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);



console.log(_packages__WEBPACK_IMPORTED_MODULE_0__)

const install = (_vue) => {
    Object.keys(_packages__WEBPACK_IMPORTED_MODULE_0__).forEach(key => {
        _vue.use(_packages__WEBPACK_IMPORTED_MODULE_0__[key])
    })
};
/* harmony default export */ __webpack_exports__["default"] = ({
    install,
    version: (__webpack_require__(16).version),
    name: (__webpack_require__(16).name),
    ..._packages__WEBPACK_IMPORTED_MODULE_0__
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});