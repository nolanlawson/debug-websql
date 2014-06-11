(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global){
'use strict';

var argsarray = require('argsarray');

function createTransaction(db, readonly, args) {
  var prefix = readonly ? 'readTransaction' : 'r/w transaction';
  var transactionMethod = db[readonly ? 'readTransaction' : 'transaction'];
  var callback = args[0];
  if (callback) {
    args[0] = function (tx) {
      var proxyTransaction = {
        executeSql : function (sql, sqlArgs, success, failure) {
          console.log(prefix + ': ' + sql + (sqlArgs ? ' with args ' + JSON.stringify(sqlArgs) : ''));
          tx.executeSql(sql, sqlArgs, success, failure);
        }
      };
      callback(proxyTransaction);
    };
  }
  transactionMethod.apply(db, args);
}
if (process && process.browser && global.openDatabase) {
  var oldOpenDatabase = global.openDatabase;
  global.openDatabase = argsarray(function (args) {
    var db = oldOpenDatabase.apply(null, args);
    return {
      transaction : argsarray(function (args) {
        return createTransaction(db, false, args);
      }),
      readTransaction : argsarray(function (args) {
        return createTransaction(db, true, args);
      })
    };
  });
}

}).call(this,require("FWaASH"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"FWaASH":3,"argsarray":2}],2:[function(require,module,exports){
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;
    if (len) {
      var args = [];
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}
},{}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])