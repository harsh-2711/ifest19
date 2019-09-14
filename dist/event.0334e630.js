// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"event/event.js":[function(require,module,exports) {
// var e1 = document.querySelector("#e-1");
// var e2 = document.querySelector("#e-2");
// var e3 = document.querySelector("#e-3");
// var e4 = document.querySelector("#e-4");
// var e5 = document.querySelector("#e-5");
// var e6 = document.querySelector("#e-6");
// var e7 = document.querySelector("#e-7");
// var e8 = document.querySelector("#e-8");
// var e9 = document.querySelector("#e-9");
// var e10 = document.querySelector("#e-10");
// var e11 = document.querySelector("#e-11");
// var e12 = document.querySelector("#e-12");
// var e13 = document.querySelector("#e-13");
// var e14 = document.querySelector("#e-14");
// var e15 = document.querySelector("#e-15");
// var e16 = document.querySelector("#e-16");
// var e17 = document.querySelector("#e-17");
// var e18 = document.querySelector("#e-18");
// var e19 = document.querySelector("#e-19");
// var e20 = document.querySelector("#e-20");
// var e21 = document.querySelector("#e-21");
// var e22 = document.querySelector("#e-22");
// var e23 = document.querySelector("#e-23");
// var d1 = document.querySelector(".content-1");
// var d2 = document.querySelector(".content-2");
// var d3 = document.querySelector(".content-3");
// var d4 = document.querySelector(".content-4");
// var d5 = document.querySelector(".content-5");
// var d6 = document.querySelector(".content-6");
// var d7 = document.querySelector(".content-7");
// var d8 = document.querySelector(".content-8");
// var d9 = document.querySelector(".content-9");
// var d10 = document.querySelector(".content-10");
// var d11 = document.querySelector(".content-11");
// var d12 = document.querySelector(".content-12");
// var d13 = document.querySelector(".content-13");
// var d14 = document.querySelector(".content-14");
// var d15 = document.querySelector(".content-15");
// var d16 = document.querySelector(".content-16");
// var d17 = document.querySelector(".content-17");
// var d18 = document.querySelector(".content-18");
// var d19 = document.querySelector(".content-19");
// var d20 = document.querySelector(".content-20");
// var d21 = document.querySelector(".content-21");
// var d22 = document.querySelector(".content-22");
// var d23 = document.querySelector(".content-23");
// var e = [e1,e2,e3,e4,e5,e6];
// var e = [e1,e2,e3,'e4','e5','e6','e7','e8','e9','e10','e11','e12','e13','e14','e15','e16','e17','e18','e19','e20','e21','e22','e23'];
// var d = ['d1','d2','d3','d4','d5','d6'];
// var d = ['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','d16','d17','d18','d19','d20','d21','d22','d23'];
function init() {
  var e = document.querySelectorAll('li');
  var d = document.querySelectorAll('p'); // for(var i=0;i<23;i++) { 
  //     e[i]= document.querySelector('#e-' + i+1);
  //     d[i]=document.querySelector('.content-' + i+1);
  //     console.log(typeof(e[i]));
  // }

  for (var i = 0; i < 23; i++) {
    console.log(e[i]);
    $("#e-" + (i + 1)).click(function () {
      var content = $(this).attr('data');
      $(".show").removeClass("show");
      $("." + content).addClass("show");
    }); // e[i].addEventListener("click", function() {
    //     for(var j=0;j<23;j++) {
    //         console.log(i);
    //         if(j!=i) {
    //             d[j].classList.remove('show');
    //         } else {
    //             console.log(d[1].classList[0])
    //             d[j].classList.add('show');
    //         }
    //     }
    // })
  }
}

init(); // e1.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d1.classList.add('show');
// });
// e2.addEventListener("click", function() {
//     d1.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d2.classList.add('show');
// });
// e3.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d1.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d3.classList.add('show');
// });
// e4.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d1.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d4.classList.add('show');
// });
// e5.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d1.classList.remove('show');
//     d6.classList.remove('show');
//     d5.classList.add('show');
// });
// e6.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d1.classList.remove('show');
//     d6.classList.add('show');
// });
},{}],"C:/Users/kotha/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61391" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/kotha/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","event/event.js"], null)
//# sourceMappingURL=/event.0334e630.js.map