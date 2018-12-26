module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(12)

module.exports = function (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BlHeader_vue__ = __webpack_require__(13);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    BlHeader: __WEBPACK_IMPORTED_MODULE_0__components_BlHeader_vue__["a" /* default */]
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bl-header',

  data: function data() {
    return {};
  },


  methods: {}
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'home',

  data: function data() {
    return {};
  },


  methods: {}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  return new Promise(function (resolve, reject) {
    var _createApp = Object(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* createApp */])(),
        app = _createApp.app,
        router = _createApp.router;

    router.push(context.url);

    router.onReady(function () {
      var matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      resolve(app);
    }, function (error) {
      return reject(error);
    });
  }).catch(function (error) {});
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(18);



function createApp() {
  var router = Object(__WEBPACK_IMPORTED_MODULE_2__router__["a" /* createRouter */])();
  var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    router: router,
    render: function render(h) {
      return h(__WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */]);
    }
  });

  return { app: app, router: router };
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(17);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(10),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "5cbee652"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(1)
module.exports.__inject__ = function (context) {
  add("2fbdf82a", content, false, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\na{\n  text-decoration-line: none;\n  color: #444;\n  background-color: transparent;\n}\n:focus {\n  outline: -webkit-focus-ring-color auto 0;\n}\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n}\n.bl-wrapper{\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 60px;\n}\n", "", {"version":3,"sources":["/Users/chenxuantian/Documents/insaic/_my/vue-ssr-org-demo/src/src/App.vue"],"names":[],"mappings":";AAyBA;;;;;;;;;;;;;CAaA,UAAA;CACA,WAAA;CACA,UAAA;CACA,gBAAA;CACA,cAAA;CACA,yBAAA;CACA;AACA,iDAAA;AACA;;CAEA,eAAA;CACA;AACA;CACA,eAAA;CACA;AACA;CACA,iBAAA;CACA;AACA;CACA,aAAA;CACA;AACA;;CAEA,YAAA;CACA,cAAA;CACA;AACA;CACA,0BAAA;CACA,kBAAA;CACA;AACA;EACA,2BAAA;EACA,YAAA;EACA,8BAAA;CACA;AACA;EACA,yCAAA;CACA;AACA;EACA,oDAAA;CACA;AACA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;CACA","file":"App.vue","sourcesContent":["<template>\n  <div id=\"app\">\n    <div class=\"bl-wrapper\">\n      <bl-header></bl-header>\n      <router-view></router-view>\n    </div>\n  </div>\n</template>\n\n<script>\nimport BlHeader from './components/BlHeader.vue'\n\nexport default {\n  name: 'app',\n  components: {\n    BlHeader\n  },\n  data () {\n    return {\n    }\n  }\n}\n</script>\n\n<style>\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\na{\n  text-decoration-line: none;\n  color: #444;\n  background-color: transparent;\n}\n:focus {\n  outline: -webkit-focus-ring-color auto 0;\n}\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n}\n.bl-wrapper{\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 60px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BlHeader_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5204efb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BlHeader_vue__ = __webpack_require__(16);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(14),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5204efb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "8c885474"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BlHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5204efb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BlHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/BlHeader.vue"

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(1)
module.exports.__inject__ = function (context) {
  add("69fb7f5a", content, false, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.bl-header .menu .item[data-v-5204efb2] {\n  display: inline-block;\n  padding: 3px 20px 3px;\n  line-height: 30px;\n  color: #444;\n  font-size: 13px;\n  border: 1px solid transparent;\n}\n.bl-header .menu .item.current[data-v-5204efb2] {\n    border: 1px solid #ddd;\n    border-bottom-color: #fff;\n}\n.bl-header[data-v-5204efb2] {\n  padding: 58px 0 0;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n}\n.logo[data-v-5204efb2] {\n  margin-bottom: 40px;\n  font: bold 38px/1.12 \"Times New Roman\", Georgia, Times, sans-serif;\n}\n.menu[data-v-5204efb2] {\n  margin: 10px 0 -1px;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n", "", {"version":3,"sources":["/Users/chenxuantian/Documents/insaic/_my/vue-ssr-org-demo/src/components/BlHeader.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,8BAA8B;CAAE;AAChC;IACE,uBAAuB;IACvB,0BAA0B;CAAE;AAEhC;EACE,kBAAkB;EAClB,iBAAiB;EACjB,8BAA8B;EAC9B,mBAAmB;CAAE;AAEvB;EACE,oBAAoB;EACpB,mEAAmE;CAAE;AAEvE;EACE,oBAAoB;EACpB,WAAW;EACX,mBAAmB;EACnB,SAAS;EACT,UAAU;CAAE","file":"BlHeader.vue","sourcesContent":[".bl-header .menu .item {\n  display: inline-block;\n  padding: 3px 20px 3px;\n  line-height: 30px;\n  color: #444;\n  font-size: 13px;\n  border: 1px solid transparent; }\n  .bl-header .menu .item.current {\n    border: 1px solid #ddd;\n    border-bottom-color: #fff; }\n\n.bl-header {\n  padding: 58px 0 0;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n  position: relative; }\n\n.logo {\n  margin-bottom: 40px;\n  font: bold 38px/1.12 \"Times New Roman\", Georgia, Times, sans-serif; }\n\n.menu {\n  margin: 10px 0 -1px;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "bl-header" },
    [
      _vm._ssrNode(
        '<div class="logo" data-v-5204efb2><a href="#" data-v-5204efb2>RyanChenX\'blog</a></div> '
      ),
      _vm._ssrNode(
        '<div class="menu" data-v-5204efb2>',
        "</div>",
        [
          _c(
            "router-link",
            { staticClass: "item current", attrs: { to: "/" } },
            [_vm._v("首页")]
          ),
          _vm._ssrNode(" "),
          _c(
            "router-link",
            { staticClass: "item", attrs: { to: "archives" } },
            [_vm._v("归档")]
          ),
          _vm._ssrNode(" "),
          _c("router-link", { staticClass: "item", attrs: { to: "about" } }, [
            _vm._v("关于")
          ])
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _vm._ssrNode(
      '<div class="bl-wrapper">',
      "</div>",
      [_c("bl-header"), _vm._ssrNode(" "), _c("router-view")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__ = __webpack_require__(20);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);



function createRouter() {
  return new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__["a" /* default */] }, { path: '/archives', component: function component() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 24));
      } }, { path: '/about', component: function component() {
        return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 25));
      } }]
  });
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(23);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(21),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8dc7cce2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "1b280eae"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Home.vue"

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(1)
module.exports.__inject__ = function (context) {
  add("2c5348a8", content, false, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.item[data-v-8dc7cce2] {\n  padding: 25px 0 15px;\n}\n.item .title[data-v-8dc7cce2] {\n    margin: 0;\n    color: #555;\n    text-align: left;\n    font: bold 25px/1.1 \"ff-tisa-web-pro\", Cambria, \"Times New Roman\", Georgia, Times, sans-serif;\n}\n.item .time[data-v-8dc7cce2] {\n    padding: 0;\n    margin: 15px 0 0;\n    color: #6E7173;\n    float: left;\n    display: inline;\n    text-indent: .15em;\n}\n.item .detail[data-v-8dc7cce2] {\n    margin: 0 0 1.234em;\n    clear: left;\n    font-size: 15px;\n    line-height: 1.77;\n    color: #444;\n    padding-top: 15px;\n    text-align: justify;\n    text-justify: distribute;\n    word-break: break-all;\n}\n.item .btn[data-v-8dc7cce2] {\n    font-size: 14px;\n    color: #444;\n    margin: -10px 0;\n    padding: 5px 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    float: right;\n    cursor: pointer;\n    background-color: transparent;\n}\n", "", {"version":3,"sources":["/Users/chenxuantian/Documents/insaic/_my/vue-ssr-org-demo/src/components/Home.vue"],"names":[],"mappings":";AAAA;EACE,qBAAqB;CAAE;AACvB;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,8FAA8F;CAAE;AAClG;IACE,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;CAAE;AACvB;IACE,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;CAAE;AAC1B;IACE,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,8BAA8B;CAAE","file":"Home.vue","sourcesContent":[".item {\n  padding: 25px 0 15px; }\n  .item .title {\n    margin: 0;\n    color: #555;\n    text-align: left;\n    font: bold 25px/1.1 \"ff-tisa-web-pro\", Cambria, \"Times New Roman\", Georgia, Times, sans-serif; }\n  .item .time {\n    padding: 0;\n    margin: 15px 0 0;\n    color: #6E7173;\n    float: left;\n    display: inline;\n    text-indent: .15em; }\n  .item .detail {\n    margin: 0 0 1.234em;\n    clear: left;\n    font-size: 15px;\n    line-height: 1.77;\n    color: #444;\n    padding-top: 15px;\n    text-align: justify;\n    text-justify: distribute;\n    word-break: break-all; }\n  .item .btn {\n    font-size: 14px;\n    color: #444;\n    margin: -10px 0;\n    padding: 5px 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    float: right;\n    cursor: pointer;\n    background-color: transparent; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      '<ul data-v-8dc7cce2><li class="item" data-v-8dc7cce2><h4 class="title" data-v-8dc7cce2>Hello World</h4> <p class="time" data-v-8dc7cce2>2017-10-09</p> <p class="detail" data-v-8dc7cce2>Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub.</p> <button class="btn" data-v-8dc7cce2>阅读全文&gt;&gt;</button></li></ul>'
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
//# sourceMappingURL=main.server.js.map