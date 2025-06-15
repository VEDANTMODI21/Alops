var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/namespace-emitter/index.js
var require_namespace_emitter = __commonJS({
  "node_modules/namespace-emitter/index.js"(exports, module) {
    module.exports = function createNamespaceEmitter() {
      var emitter = {};
      var _fns = emitter._fns = {};
      emitter.emit = function emit(event2, arg1, arg2, arg3, arg4, arg5, arg6) {
        var toEmit = getListeners(event2);
        if (toEmit.length) {
          emitAll(event2, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6]);
        }
      };
      emitter.on = function on(event2, fn) {
        if (!_fns[event2]) {
          _fns[event2] = [];
        }
        _fns[event2].push(fn);
      };
      emitter.once = function once(event2, fn) {
        function one() {
          fn.apply(this, arguments);
          emitter.off(event2, one);
        }
        this.on(event2, one);
      };
      emitter.off = function off(event2, fn) {
        var keep = [];
        if (event2 && fn) {
          var fns = this._fns[event2];
          var i = 0;
          var l = fns ? fns.length : 0;
          for (i; i < l; i++) {
            if (fns[i] !== fn) {
              keep.push(fns[i]);
            }
          }
        }
        keep.length ? this._fns[event2] = keep : delete this._fns[event2];
      };
      function getListeners(e) {
        var out = _fns[e] ? _fns[e] : [];
        var idx = e.indexOf(":");
        var args = idx === -1 ? [e] : [e.substring(0, idx), e.substring(idx + 1)];
        var keys = Object.keys(_fns);
        var i = 0;
        var l = keys.length;
        for (i; i < l; i++) {
          var key = keys[i];
          if (key === "*") {
            out = out.concat(_fns[key]);
          }
          if (args.length === 2 && args[0] === key) {
            out = out.concat(_fns[key]);
            break;
          }
        }
        return out;
      }
      function emitAll(e, fns, args) {
        var i = 0;
        var l = fns.length;
        for (i; i < l; i++) {
          if (!fns[i]) break;
          fns[i].event = e;
          fns[i].apply(fns[i], args);
        }
      }
      return emitter;
    };
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce3(func, wait, options3) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options3)) {
        leading = !!options3.leading;
        maxing = "maxWait" in options3;
        maxWait = maxing ? nativeMax(toNumber(options3.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options3 ? !!options3.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce3;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce3 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options3) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options3)) {
        leading = "leading" in options3 ? !!options3.leading : leading;
        trailing = "trailing" in options3 ? !!options3.trailing : trailing;
      }
      return debounce3(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// node_modules/@transloadit/prettier-bytes/dist/prettierBytes.js
var require_prettierBytes = __commonJS({
  "node_modules/@transloadit/prettier-bytes/dist/prettierBytes.js"(exports, module) {
    "use strict";
    module.exports = function prettierBytes4(input) {
      if (typeof input !== "number" || Number.isNaN(input)) {
        throw new TypeError(`Expected a number, got ${typeof input}`);
      }
      const neg = input < 0;
      let num = Math.abs(input);
      if (neg) {
        num = -num;
      }
      if (num === 0) {
        return "0 B";
      }
      const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      const value = Number(num / 1024 ** exponent);
      const unit = units[exponent];
      return `${value >= 10 || value % 1 === 0 ? Math.round(value) : value.toFixed(1)} ${unit}`;
    };
  }
});

// node_modules/wildcard/index.js
var require_wildcard = __commonJS({
  "node_modules/wildcard/index.js"(exports, module) {
    "use strict";
    function WildcardMatcher(text, separator2) {
      this.text = text = text || "";
      this.hasWild = ~text.indexOf("*");
      this.separator = separator2;
      this.parts = text.split(separator2);
    }
    WildcardMatcher.prototype.match = function(input) {
      var matches = true;
      var parts = this.parts;
      var ii;
      var partsCount = parts.length;
      var testParts;
      if (typeof input == "string" || input instanceof String) {
        if (!this.hasWild && this.text != input) {
          matches = false;
        } else {
          testParts = (input || "").split(this.separator);
          for (ii = 0; matches && ii < partsCount; ii++) {
            if (parts[ii] === "*") {
              continue;
            } else if (ii < testParts.length) {
              matches = parts[ii] === testParts[ii];
            } else {
              matches = false;
            }
          }
          matches = matches && testParts;
        }
      } else if (typeof input.splice == "function") {
        matches = [];
        for (ii = input.length; ii--; ) {
          if (this.match(input[ii])) {
            matches[matches.length] = input[ii];
          }
        }
      } else if (typeof input == "object") {
        matches = {};
        for (var key in input) {
          if (this.match(key)) {
            matches[key] = input[key];
          }
        }
      }
      return matches;
    };
    module.exports = function(text, test, separator2) {
      var matcher = new WildcardMatcher(text, separator2 || /[\/\.]/);
      if (typeof test != "undefined") {
        return matcher.match(test);
      }
      return matcher;
    };
  }
});

// node_modules/mime-match/index.js
var require_mime_match = __commonJS({
  "node_modules/mime-match/index.js"(exports, module) {
    var wildcard = require_wildcard();
    var reMimePartSplit = /[\/\+\.]/;
    module.exports = function(target, pattern) {
      function test(pattern2) {
        var result = wildcard(pattern2, target, reMimePartSplit);
        return result && result.length >= 2;
      }
      return pattern ? test(pattern.split(";")[0]) : test;
    };
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames15() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames15.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames15.default = classNames15;
        module.exports = classNames15;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames15;
        });
      } else {
        window.classNames = classNames15;
      }
    })();
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event2, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event2 : event2;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event2) {
      var evt = prefix ? prefix + event2 : event2, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee2 = new Array(l); i < l; i++) {
        ee2[i] = handlers[i].fn;
      }
      return ee2;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event2) {
      var evt = prefix ? prefix + event2 : event2, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event2, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event2 : event2;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event2, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event2, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event2, fn, context) {
      return addListener(this, event2, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event2, fn, context) {
      return addListener(this, event2, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event2, fn, context, once) {
      var evt = prefix ? prefix + event2 : event2;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event2) {
      var evt;
      if (event2) {
        evt = prefix ? prefix + event2 : event2;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _4.defaults(root.Object(), context, _4.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer3 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer3 ? Buffer3.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray2(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity2;
          }
          if (typeof value == "object") {
            return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray2(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray2(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity2];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity2), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity2 : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity2 : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity2, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray2(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity2;
        }
        function castPath(value, object) {
          if (isArray2(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id12) {
          return root.clearTimeout(id12);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray2(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop2 : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match2 = source.match(reWrapDetails);
          return match2 ? match2[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray2(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize2(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match2, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator2) {
          return array == null ? "" : nativeJoin.call(array, separator2);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice2(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray2(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy2 = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray2(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray2(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray2(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray2(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray2(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray2(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce3(func, wait, options3) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options3)) {
            leading = !!options3.leading;
            maxing = "maxWait" in options3;
            maxWait = maxing ? nativeMax(toNumber(options3.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options3 ? !!options3.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer2 = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize2(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize2.Cache || MapCache)();
          return memoized;
        }
        memoize2.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle2(func, wait, options3) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options3)) {
            leading = "leading" in options3 ? !!options3.leading : leading;
            trailing = "trailing" in options3 ? !!options3.trailing : trailing;
          }
          return debounce3(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray2(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray2 = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty2(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual2(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray2(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign3 = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults2 = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity2));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray2(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape2(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad2(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator2, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator2, limit)) {
            separator2 = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator2 == "string" || separator2 != null && !isRegExp(separator2))) {
            separator2 = baseToString(separator2);
            if (!separator2 && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator2, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options3, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options3, guard)) {
            options3 = undefined2;
          }
          string = toString(string);
          options3 = assignInWith({}, options3, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options3.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate2 = options3.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options3.escape || reNoMatch).source + "|" + interpolate2.source + "|" + (interpolate2 === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options3.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options3, "sourceURL") ? (options3.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match2, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match2.length;
            return match2;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options3, "variable") && options3.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options3) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options3)) {
            var separator2 = "separator" in options3 ? options3.separator : separator2;
            length = "length" in options3 ? toInteger(options3.length) : length;
            omission = "omission" in options3 ? baseToString(options3.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator2 === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator2)) {
            if (string.slice(end).search(separator2)) {
              var match2, substring = result2;
              if (!separator2.global) {
                separator2 = RegExp2(separator2.source, toString(reFlags.exec(separator2)) + "g");
              }
              separator2.lastIndex = 0;
              while (match2 = separator2.exec(substring)) {
                var newEnd = match2.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator2), end) != end) {
            var index = result2.lastIndexOf(separator2);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity2(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options3) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options3 == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options3 = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options3) && "chain" in options3) || !!options3.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop2() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray2(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id12 = ++idCounter;
          return toString(prefix) + id12;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity2, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity2);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity2, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity2) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign3;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce3;
        lodash.defaults = defaults2;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer2;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy2;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize2;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice2;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle2;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape2;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity2;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray2;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty2;
        lodash.isEqual = isEqual2;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop2;
        lodash.now = now;
        lodash.pad = pad2;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity2);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray2(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray2(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _4 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _4;
        define(function() {
          return _4;
        });
      } else if (freeModule) {
        (freeModule.exports = _4)._ = _4;
        freeExports._ = _4;
      } else {
        root._ = _4;
      }
    }).call(exports);
  }
});

// node_modules/clipboard/dist/clipboard.js
var require_clipboard = __commonJS({
  "node_modules/clipboard/dist/clipboard.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["ClipboardJS"] = factory();
      else
        root["ClipboardJS"] = factory();
    })(exports, function() {
      return (
        /******/
        function() {
          var __webpack_modules__ = {
            /***/
            686: (
              /***/
              function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                "use strict";
                __webpack_require__2.d(__webpack_exports__, {
                  "default": function() {
                    return (
                      /* binding */
                      clipboard
                    );
                  }
                });
                var tiny_emitter = __webpack_require__2(279);
                var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                var listen = __webpack_require__2(370);
                var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                var src_select = __webpack_require__2(817);
                var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                ;
                function command(type) {
                  try {
                    return document.execCommand(type);
                  } catch (err) {
                    return false;
                  }
                }
                ;
                var ClipboardActionCut = function ClipboardActionCut2(target) {
                  var selectedText = select_default()(target);
                  command("cut");
                  return selectedText;
                };
                var actions_cut = ClipboardActionCut;
                ;
                function createFakeElement(value) {
                  var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                  var fakeElement = document.createElement("textarea");
                  fakeElement.style.fontSize = "12pt";
                  fakeElement.style.border = "0";
                  fakeElement.style.padding = "0";
                  fakeElement.style.margin = "0";
                  fakeElement.style.position = "absolute";
                  fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                  fakeElement.style.top = "".concat(yPosition, "px");
                  fakeElement.setAttribute("readonly", "");
                  fakeElement.value = value;
                  return fakeElement;
                }
                ;
                var fakeCopyAction = function fakeCopyAction2(value, options3) {
                  var fakeElement = createFakeElement(value);
                  options3.container.appendChild(fakeElement);
                  var selectedText = select_default()(fakeElement);
                  command("copy");
                  fakeElement.remove();
                  return selectedText;
                };
                var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                  var options3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  };
                  var selectedText = "";
                  if (typeof target === "string") {
                    selectedText = fakeCopyAction(target, options3);
                  } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                    selectedText = fakeCopyAction(target.value, options3);
                  } else {
                    selectedText = select_default()(target);
                    command("copy");
                  }
                  return selectedText;
                };
                var actions_copy = ClipboardActionCopy;
                ;
                function _typeof(obj) {
                  "@babel/helpers - typeof";
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    _typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return _typeof(obj);
                }
                var ClipboardActionDefault = function ClipboardActionDefault2() {
                  var options3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  var _options$action = options3.action, action = _options$action === void 0 ? "copy" : _options$action, container = options3.container, target = options3.target, text = options3.text;
                  if (action !== "copy" && action !== "cut") {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  }
                  if (target !== void 0) {
                    if (target && _typeof(target) === "object" && target.nodeType === 1) {
                      if (action === "copy" && target.hasAttribute("disabled")) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      }
                      if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                      }
                    } else {
                      throw new Error('Invalid "target" value, use a valid Element');
                    }
                  }
                  if (text) {
                    return actions_copy(text, {
                      container
                    });
                  }
                  if (target) {
                    return action === "cut" ? actions_cut(target) : actions_copy(target, {
                      container
                    });
                  }
                };
                var actions_default = ClipboardActionDefault;
                ;
                function clipboard_typeof(obj) {
                  "@babel/helpers - typeof";
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    clipboard_typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    clipboard_typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return clipboard_typeof(obj);
                }
                function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }
                function _defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                  if (staticProps) _defineProperties(Constructor, staticProps);
                  return Constructor;
                }
                function _inherits(subClass, superClass) {
                  if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                  if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o, p) {
                  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                    o2.__proto__ = p2;
                    return o2;
                  };
                  return _setPrototypeOf(o, p);
                }
                function _createSuper(Derived) {
                  var hasNativeReflectConstruct = _isNativeReflectConstruct();
                  return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                      var NewTarget = _getPrototypeOf(this).constructor;
                      result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                      result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                  };
                }
                function _possibleConstructorReturn(self2, call) {
                  if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                  }
                  return _assertThisInitialized(self2);
                }
                function _assertThisInitialized(self2) {
                  if (self2 === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  }
                  return self2;
                }
                function _isNativeReflectConstruct() {
                  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                  if (Reflect.construct.sham) return false;
                  if (typeof Proxy === "function") return true;
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    }));
                    return true;
                  } catch (e) {
                    return false;
                  }
                }
                function _getPrototypeOf(o) {
                  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                    return o2.__proto__ || Object.getPrototypeOf(o2);
                  };
                  return _getPrototypeOf(o);
                }
                function getAttributeValue(suffix, element) {
                  var attribute = "data-clipboard-".concat(suffix);
                  if (!element.hasAttribute(attribute)) {
                    return;
                  }
                  return element.getAttribute(attribute);
                }
                var Clipboard = /* @__PURE__ */ function(_Emitter) {
                  _inherits(Clipboard2, _Emitter);
                  var _super = _createSuper(Clipboard2);
                  function Clipboard2(trigger, options3) {
                    var _this;
                    _classCallCheck(this, Clipboard2);
                    _this = _super.call(this);
                    _this.resolveOptions(options3);
                    _this.listenClick(trigger);
                    return _this;
                  }
                  _createClass(Clipboard2, [{
                    key: "resolveOptions",
                    value: function resolveOptions() {
                      var options3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof options3.action === "function" ? options3.action : this.defaultAction;
                      this.target = typeof options3.target === "function" ? options3.target : this.defaultTarget;
                      this.text = typeof options3.text === "function" ? options3.text : this.defaultText;
                      this.container = clipboard_typeof(options3.container) === "object" ? options3.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function listenClick(trigger) {
                      var _this2 = this;
                      this.listener = listen_default()(trigger, "click", function(e) {
                        return _this2.onClick(e);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function onClick(e) {
                      var trigger = e.delegateTarget || e.currentTarget;
                      var action = this.action(trigger) || "copy";
                      var text = actions_default({
                        action,
                        container: this.container,
                        target: this.target(trigger),
                        text: this.text(trigger)
                      });
                      this.emit(text ? "success" : "error", {
                        action,
                        text,
                        trigger,
                        clearSelection: function clearSelection() {
                          if (trigger) {
                            trigger.focus();
                          }
                          window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function defaultAction(trigger) {
                      return getAttributeValue("action", trigger);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function defaultTarget(trigger) {
                      var selector = getAttributeValue("target", trigger);
                      if (selector) {
                        return document.querySelector(selector);
                      }
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function defaultText(trigger) {
                      return getAttributeValue("text", trigger);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function destroy() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function copy(target) {
                      var options3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return actions_copy(target, options3);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function cut(target) {
                      return actions_cut(target);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function isSupported() {
                      var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                      var actions = typeof action === "string" ? [action] : action;
                      var support = !!document.queryCommandSupported;
                      actions.forEach(function(action2) {
                        support = support && !!document.queryCommandSupported(action2);
                      });
                      return support;
                    }
                  }]);
                  return Clipboard2;
                }(tiny_emitter_default());
                var clipboard = Clipboard;
              }
            ),
            /***/
            828: (
              /***/
              function(module2) {
                var DOCUMENT_NODE_TYPE = 9;
                if (typeof Element !== "undefined" && !Element.prototype.matches) {
                  var proto = Element.prototype;
                  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                }
                function closest(element, selector) {
                  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                    if (typeof element.matches === "function" && element.matches(selector)) {
                      return element;
                    }
                    element = element.parentNode;
                  }
                }
                module2.exports = closest;
              }
            ),
            /***/
            438: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var closest = __webpack_require__2(828);
                function _delegate(element, selector, type, callback, useCapture) {
                  var listenerFn = listener.apply(this, arguments);
                  element.addEventListener(type, listenerFn, useCapture);
                  return {
                    destroy: function() {
                      element.removeEventListener(type, listenerFn, useCapture);
                    }
                  };
                }
                function delegate(elements, selector, type, callback, useCapture) {
                  if (typeof elements.addEventListener === "function") {
                    return _delegate.apply(null, arguments);
                  }
                  if (typeof type === "function") {
                    return _delegate.bind(null, document).apply(null, arguments);
                  }
                  if (typeof elements === "string") {
                    elements = document.querySelectorAll(elements);
                  }
                  return Array.prototype.map.call(elements, function(element) {
                    return _delegate(element, selector, type, callback, useCapture);
                  });
                }
                function listener(element, selector, type, callback) {
                  return function(e) {
                    e.delegateTarget = closest(e.target, selector);
                    if (e.delegateTarget) {
                      callback.call(element, e);
                    }
                  };
                }
                module2.exports = delegate;
              }
            ),
            /***/
            879: (
              /***/
              function(__unused_webpack_module, exports2) {
                exports2.node = function(value) {
                  return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                };
                exports2.nodeList = function(value) {
                  var type = Object.prototype.toString.call(value);
                  return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
                };
                exports2.string = function(value) {
                  return typeof value === "string" || value instanceof String;
                };
                exports2.fn = function(value) {
                  var type = Object.prototype.toString.call(value);
                  return type === "[object Function]";
                };
              }
            ),
            /***/
            370: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var is = __webpack_require__2(879);
                var delegate = __webpack_require__2(438);
                function listen(target, type, callback) {
                  if (!target && !type && !callback) {
                    throw new Error("Missing required arguments");
                  }
                  if (!is.string(type)) {
                    throw new TypeError("Second argument must be a String");
                  }
                  if (!is.fn(callback)) {
                    throw new TypeError("Third argument must be a Function");
                  }
                  if (is.node(target)) {
                    return listenNode(target, type, callback);
                  } else if (is.nodeList(target)) {
                    return listenNodeList(target, type, callback);
                  } else if (is.string(target)) {
                    return listenSelector(target, type, callback);
                  } else {
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                  }
                }
                function listenNode(node2, type, callback) {
                  node2.addEventListener(type, callback);
                  return {
                    destroy: function() {
                      node2.removeEventListener(type, callback);
                    }
                  };
                }
                function listenNodeList(nodeList, type, callback) {
                  Array.prototype.forEach.call(nodeList, function(node2) {
                    node2.addEventListener(type, callback);
                  });
                  return {
                    destroy: function() {
                      Array.prototype.forEach.call(nodeList, function(node2) {
                        node2.removeEventListener(type, callback);
                      });
                    }
                  };
                }
                function listenSelector(selector, type, callback) {
                  return delegate(document.body, selector, type, callback);
                }
                module2.exports = listen;
              }
            ),
            /***/
            817: (
              /***/
              function(module2) {
                function select(element) {
                  var selectedText;
                  if (element.nodeName === "SELECT") {
                    element.focus();
                    selectedText = element.value;
                  } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                    var isReadOnly = element.hasAttribute("readonly");
                    if (!isReadOnly) {
                      element.setAttribute("readonly", "");
                    }
                    element.select();
                    element.setSelectionRange(0, element.value.length);
                    if (!isReadOnly) {
                      element.removeAttribute("readonly");
                    }
                    selectedText = element.value;
                  } else {
                    if (element.hasAttribute("contenteditable")) {
                      element.focus();
                    }
                    var selection = window.getSelection();
                    var range = document.createRange();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    selectedText = selection.toString();
                  }
                  return selectedText;
                }
                module2.exports = select;
              }
            ),
            /***/
            279: (
              /***/
              function(module2) {
                function E() {
                }
                E.prototype = {
                  on: function(name, callback, ctx) {
                    var e = this.e || (this.e = {});
                    (e[name] || (e[name] = [])).push({
                      fn: callback,
                      ctx
                    });
                    return this;
                  },
                  once: function(name, callback, ctx) {
                    var self2 = this;
                    function listener() {
                      self2.off(name, listener);
                      callback.apply(ctx, arguments);
                    }
                    ;
                    listener._ = callback;
                    return this.on(name, listener, ctx);
                  },
                  emit: function(name) {
                    var data = [].slice.call(arguments, 1);
                    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                    var i = 0;
                    var len = evtArr.length;
                    for (i; i < len; i++) {
                      evtArr[i].fn.apply(evtArr[i].ctx, data);
                    }
                    return this;
                  },
                  off: function(name, callback) {
                    var e = this.e || (this.e = {});
                    var evts = e[name];
                    var liveEvents = [];
                    if (evts && callback) {
                      for (var i = 0, len = evts.length; i < len; i++) {
                        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                          liveEvents.push(evts[i]);
                      }
                    }
                    liveEvents.length ? e[name] = liveEvents : delete e[name];
                    return this;
                  }
                };
                module2.exports = E;
                module2.exports.TinyEmitter = E;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            if (__webpack_module_cache__[moduleId]) {
              return __webpack_module_cache__[moduleId].exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          !function() {
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function() {
                  return module2["default"];
                }
              ) : (
                /******/
                function() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          }();
          !function() {
            __webpack_require__.d = function(exports2, definition) {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          }();
          !function() {
            __webpack_require__.o = function(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
          }();
          return __webpack_require__(686);
        }().default
      );
    });
  }
});

// node_modules/@uppy/utils/lib/Translator.js
function _classPrivateFieldLooseBase(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id = 0;
function _classPrivateFieldLooseKey(e) {
  return "__private_" + id++ + "_" + e;
}
function insertReplacement(source, rx, replacement) {
  const newParts = [];
  source.forEach((chunk) => {
    if (typeof chunk !== "string") {
      return newParts.push(chunk);
    }
    return rx[Symbol.split](chunk).forEach((raw, i, list) => {
      if (raw !== "") {
        newParts.push(raw);
      }
      if (i < list.length - 1) {
        newParts.push(replacement);
      }
    });
  });
  return newParts;
}
function interpolate(phrase, options3) {
  const dollarRegex = /\$/g;
  const dollarBillsYall = "$$$$";
  let interpolated = [phrase];
  if (options3 == null) return interpolated;
  for (const arg of Object.keys(options3)) {
    if (arg !== "_") {
      let replacement = options3[arg];
      if (typeof replacement === "string") {
        replacement = dollarRegex[Symbol.replace](replacement, dollarBillsYall);
      }
      interpolated = insertReplacement(interpolated, new RegExp(`%\\{${arg}\\}`, "g"), replacement);
    }
  }
  return interpolated;
}
var defaultOnMissingKey = (key) => {
  throw new Error(`missing string: ${key}`);
};
var _onMissingKey = /* @__PURE__ */ _classPrivateFieldLooseKey("onMissingKey");
var _apply = /* @__PURE__ */ _classPrivateFieldLooseKey("apply");
var Translator = class {
  constructor(locales, _temp) {
    let {
      onMissingKey = defaultOnMissingKey
    } = _temp === void 0 ? {} : _temp;
    Object.defineProperty(this, _apply, {
      value: _apply2
    });
    Object.defineProperty(this, _onMissingKey, {
      writable: true,
      value: void 0
    });
    this.locale = {
      strings: {},
      pluralize(n) {
        if (n === 1) {
          return 0;
        }
        return 1;
      }
    };
    if (Array.isArray(locales)) {
      locales.forEach(_classPrivateFieldLooseBase(this, _apply)[_apply], this);
    } else {
      _classPrivateFieldLooseBase(this, _apply)[_apply](locales);
    }
    _classPrivateFieldLooseBase(this, _onMissingKey)[_onMissingKey] = onMissingKey;
  }
  /**
   * Public translate method
   *
   * @param key
   * @param options with values that will be used later to replace placeholders in string
   * @returns string translated (and interpolated)
   */
  translate(key, options3) {
    return this.translateArray(key, options3).join("");
  }
  /**
   * Get a translation and return the translated and interpolated parts as an array.
   *
   * @returns The translated and interpolated parts, in order.
   */
  translateArray(key, options3) {
    let string = this.locale.strings[key];
    if (string == null) {
      _classPrivateFieldLooseBase(this, _onMissingKey)[_onMissingKey](key);
      string = key;
    }
    const hasPluralForms = typeof string === "object";
    if (hasPluralForms) {
      if (options3 && typeof options3.smart_count !== "undefined") {
        const plural = this.locale.pluralize(options3.smart_count);
        return interpolate(string[plural], options3);
      }
      throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
    }
    if (typeof string !== "string") {
      throw new Error(`string was not a string`);
    }
    return interpolate(string, options3);
  }
};
function _apply2(locale) {
  if (!(locale != null && locale.strings)) {
    return;
  }
  const prevLocale = this.locale;
  Object.assign(this.locale, {
    strings: {
      ...prevLocale.strings,
      ...locale.strings
    },
    pluralize: locale.pluralize || prevLocale.pluralize
  });
}

// node_modules/@uppy/core/lib/Uppy.js
var import_namespace_emitter = __toESM(require_namespace_emitter(), 1);

// node_modules/nanoid/non-secure/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var nanoid = (size = 21) => {
  let id12 = "";
  let i = size | 0;
  while (i--) {
    id12 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id12;
};

// node_modules/@uppy/core/lib/Uppy.js
var import_throttle = __toESM(require_throttle(), 1);

// node_modules/@uppy/store-default/lib/index.js
function _classPrivateFieldLooseBase2(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id2 = 0;
function _classPrivateFieldLooseKey2(e) {
  return "__private_" + id2++ + "_" + e;
}
var packageJson = {
  "version": "4.2.0"
};
var _callbacks = /* @__PURE__ */ _classPrivateFieldLooseKey2("callbacks");
var _publish = /* @__PURE__ */ _classPrivateFieldLooseKey2("publish");
var DefaultStore = class {
  constructor() {
    Object.defineProperty(this, _publish, {
      value: _publish2
    });
    this.state = {};
    Object.defineProperty(this, _callbacks, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
  }
  getState() {
    return this.state;
  }
  setState(patch) {
    const prevState = {
      ...this.state
    };
    const nextState = {
      ...this.state,
      ...patch
    };
    this.state = nextState;
    _classPrivateFieldLooseBase2(this, _publish)[_publish](prevState, nextState, patch);
  }
  subscribe(listener) {
    _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].add(listener);
    return () => {
      _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].delete(listener);
    };
  }
};
function _publish2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].forEach((listener) => {
    listener(...args);
  });
}
DefaultStore.VERSION = packageJson.version;
var lib_default = DefaultStore;

// node_modules/@uppy/utils/lib/getFileNameAndExtension.js
function getFileNameAndExtension(fullFileName) {
  const lastDot = fullFileName.lastIndexOf(".");
  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
    return {
      name: fullFileName,
      extension: void 0
    };
  }
  return {
    name: fullFileName.slice(0, lastDot),
    extension: fullFileName.slice(lastDot + 1)
  };
}

// node_modules/@uppy/utils/lib/mimeTypes.js
var mimeTypes_default = {
  __proto__: null,
  md: "text/markdown",
  markdown: "text/markdown",
  mp4: "video/mp4",
  mp3: "audio/mp3",
  svg: "image/svg+xml",
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  heic: "image/heic",
  heif: "image/heif",
  yaml: "text/yaml",
  yml: "text/yaml",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  tab: "text/tab-separated-values",
  avi: "video/x-msvideo",
  mks: "video/x-matroska",
  mkv: "video/x-matroska",
  mov: "video/quicktime",
  dicom: "application/dicom",
  doc: "application/msword",
  msg: "application/vnd.ms-outlook",
  docm: "application/vnd.ms-word.document.macroenabled.12",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dot: "application/msword",
  dotm: "application/vnd.ms-word.template.macroenabled.12",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  xla: "application/vnd.ms-excel",
  xlam: "application/vnd.ms-excel.addin.macroenabled.12",
  xlc: "application/vnd.ms-excel",
  xlf: "application/x-xliff+xml",
  xlm: "application/vnd.ms-excel",
  xls: "application/vnd.ms-excel",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xlt: "application/vnd.ms-excel",
  xltm: "application/vnd.ms-excel.template.macroenabled.12",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xlw: "application/vnd.ms-excel",
  txt: "text/plain",
  text: "text/plain",
  conf: "text/plain",
  log: "text/plain",
  pdf: "application/pdf",
  zip: "application/zip",
  "7z": "application/x-7z-compressed",
  rar: "application/x-rar-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  dmg: "application/x-apple-diskimage"
};

// node_modules/@uppy/utils/lib/getFileType.js
function getFileType(file) {
  var _getFileNameAndExtens;
  if (file.type) return file.type;
  const fileExtension = file.name ? (_getFileNameAndExtens = getFileNameAndExtension(file.name).extension) == null ? void 0 : _getFileNameAndExtens.toLowerCase() : null;
  if (fileExtension && fileExtension in mimeTypes_default) {
    return mimeTypes_default[fileExtension];
  }
  return "application/octet-stream";
}

// node_modules/@uppy/utils/lib/generateFileID.js
function encodeCharacter(character) {
  return character.charCodeAt(0).toString(32);
}
function encodeFilename(name) {
  let suffix = "";
  return name.replace(/[^A-Z0-9]/gi, (character) => {
    suffix += `-${encodeCharacter(character)}`;
    return "/";
  }) + suffix;
}
function generateFileID(file, instanceId) {
  let id12 = instanceId || "uppy";
  if (typeof file.name === "string") {
    id12 += `-${encodeFilename(file.name.toLowerCase())}`;
  }
  if (file.type !== void 0) {
    id12 += `-${file.type}`;
  }
  if (file.meta && typeof file.meta.relativePath === "string") {
    id12 += `-${encodeFilename(file.meta.relativePath.toLowerCase())}`;
  }
  if (file.data.size !== void 0) {
    id12 += `-${file.data.size}`;
  }
  if (file.data.lastModified !== void 0) {
    id12 += `-${file.data.lastModified}`;
  }
  return id12;
}
function hasFileStableId(file) {
  if (!file.isRemote || !file.remote) return false;
  const stableIdProviders = /* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"]);
  return stableIdProviders.has(file.remote.provider);
}
function getSafeFileId(file, instanceId) {
  if (hasFileStableId(file)) return file.id;
  const fileType = getFileType(file);
  return generateFileID({
    ...file,
    type: fileType
  }, instanceId);
}

// node_modules/@uppy/core/lib/supportsUploadProgress.js
function supportsUploadProgress(userAgent) {
  if (userAgent == null && typeof navigator !== "undefined") {
    userAgent = navigator.userAgent;
  }
  if (!userAgent) return true;
  const m = /Edge\/(\d+\.\d+)/.exec(userAgent);
  if (!m) return true;
  const edgeVersion = m[1];
  const version = edgeVersion.split(".", 2);
  const major = parseInt(version[0], 10);
  const minor = parseInt(version[1], 10);
  if (major < 15 || major === 15 && minor < 15063) {
    return true;
  }
  if (major > 18 || major === 18 && minor >= 18218) {
    return true;
  }
  return false;
}

// node_modules/@uppy/core/lib/getFileName.js
function getFileName(fileType, fileDescriptor) {
  if (fileDescriptor.name) {
    return fileDescriptor.name;
  }
  if (fileType.split("/")[0] === "image") {
    return `${fileType.split("/")[0]}.${fileType.split("/")[1]}`;
  }
  return "noname";
}

// node_modules/@uppy/utils/lib/getTimeStamp.js
function pad(number) {
  return number < 10 ? `0${number}` : number.toString();
}
function getTimeStamp() {
  const date = /* @__PURE__ */ new Date();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

// node_modules/@uppy/core/lib/loggers.js
var justErrorsLogger = {
  debug: () => {
  },
  warn: () => {
  },
  error: function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
  }
};
var debugLogger = {
  debug: function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return console.debug(`[Uppy] [${getTimeStamp()}]`, ...args);
  },
  warn: function() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
  },
  error: function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
  }
};

// node_modules/@uppy/core/lib/Restricter.js
var import_prettier_bytes = __toESM(require_prettierBytes(), 1);
var import_mime_match = __toESM(require_mime_match(), 1);
var defaultOptions = {
  maxFileSize: null,
  minFileSize: null,
  maxTotalFileSize: null,
  maxNumberOfFiles: null,
  minNumberOfFiles: null,
  allowedFileTypes: null,
  requiredMetaFields: []
};
var RestrictionError = class extends Error {
  constructor(message, opts) {
    var _opts$isUserFacing;
    super(message);
    this.isRestriction = true;
    this.isUserFacing = (_opts$isUserFacing = opts == null ? void 0 : opts.isUserFacing) != null ? _opts$isUserFacing : true;
    if (opts != null && opts.file) {
      this.file = opts.file;
    }
  }
};
var Restricter = class {
  constructor(getOpts, getI18n) {
    this.getI18n = getI18n;
    this.getOpts = () => {
      var _opts$restrictions;
      const opts = getOpts();
      if (((_opts$restrictions = opts.restrictions) == null ? void 0 : _opts$restrictions.allowedFileTypes) != null && !Array.isArray(opts.restrictions.allowedFileTypes)) {
        throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      }
      return opts;
    };
  }
  // Because these operations are slow, we cannot run them for every file (if we are adding multiple files)
  validateAggregateRestrictions(existingFiles, addingFiles) {
    const {
      maxTotalFileSize,
      maxNumberOfFiles
    } = this.getOpts().restrictions;
    if (maxNumberOfFiles) {
      const nonGhostFiles = existingFiles.filter((f) => !f.isGhost);
      if (nonGhostFiles.length + addingFiles.length > maxNumberOfFiles) {
        throw new RestrictionError(`${this.getI18n()("youCanOnlyUploadX", {
          smart_count: maxNumberOfFiles
        })}`);
      }
    }
    if (maxTotalFileSize) {
      const totalFilesSize = [...existingFiles, ...addingFiles].reduce((total, f) => {
        var _f$size;
        return total + ((_f$size = f.size) != null ? _f$size : 0);
      }, 0);
      if (totalFilesSize > maxTotalFileSize) {
        throw new RestrictionError(this.getI18n()("aggregateExceedsSize", {
          sizeAllowed: (0, import_prettier_bytes.default)(maxTotalFileSize),
          size: (0, import_prettier_bytes.default)(totalFilesSize)
        }));
      }
    }
  }
  validateSingleFile(file) {
    const {
      maxFileSize: maxFileSize2,
      minFileSize,
      allowedFileTypes
    } = this.getOpts().restrictions;
    if (allowedFileTypes) {
      const isCorrectFileType = allowedFileTypes.some((type) => {
        if (type.includes("/")) {
          if (!file.type) return false;
          return (0, import_mime_match.default)(file.type.replace(/;.*?$/, ""), type);
        }
        if (type[0] === "." && file.extension) {
          return file.extension.toLowerCase() === type.slice(1).toLowerCase();
        }
        return false;
      });
      if (!isCorrectFileType) {
        const allowedFileTypesString = allowedFileTypes.join(", ");
        throw new RestrictionError(this.getI18n()("youCanOnlyUploadFileTypes", {
          types: allowedFileTypesString
        }), {
          file
        });
      }
    }
    if (maxFileSize2 && file.size != null && file.size > maxFileSize2) {
      var _file$name;
      throw new RestrictionError(this.getI18n()("exceedsSize", {
        size: (0, import_prettier_bytes.default)(maxFileSize2),
        file: (_file$name = file.name) != null ? _file$name : this.getI18n()("unnamed")
      }), {
        file
      });
    }
    if (minFileSize && file.size != null && file.size < minFileSize) {
      throw new RestrictionError(this.getI18n()("inferiorSize", {
        size: (0, import_prettier_bytes.default)(minFileSize)
      }), {
        file
      });
    }
  }
  validate(existingFiles, addingFiles) {
    addingFiles.forEach((addingFile) => {
      this.validateSingleFile(addingFile);
    });
    this.validateAggregateRestrictions(existingFiles, addingFiles);
  }
  validateMinNumberOfFiles(files) {
    const {
      minNumberOfFiles
    } = this.getOpts().restrictions;
    if (minNumberOfFiles && Object.keys(files).length < minNumberOfFiles) {
      throw new RestrictionError(this.getI18n()("youHaveToAtLeastSelectX", {
        smart_count: minNumberOfFiles
      }));
    }
  }
  getMissingRequiredMetaFields(file) {
    var _file$name2;
    const error = new RestrictionError(this.getI18n()("missingRequiredMetaFieldOnFile", {
      fileName: (_file$name2 = file.name) != null ? _file$name2 : this.getI18n()("unnamed")
    }));
    const {
      requiredMetaFields
    } = this.getOpts().restrictions;
    const missingFields = [];
    for (const field of requiredMetaFields) {
      if (!Object.hasOwn(file.meta, field) || file.meta[field] === "") {
        missingFields.push(field);
      }
    }
    return {
      missingFields,
      error
    };
  }
};

// node_modules/@uppy/core/lib/locale.js
var locale_default = {
  strings: {
    addBulkFilesFailed: {
      0: "Failed to add %{smart_count} file due to an internal error",
      1: "Failed to add %{smart_count} files due to internal errors"
    },
    youCanOnlyUploadX: {
      0: "You can only upload %{smart_count} file",
      1: "You can only upload %{smart_count} files"
    },
    youHaveToAtLeastSelectX: {
      0: "You have to select at least %{smart_count} file",
      1: "You have to select at least %{smart_count} files"
    },
    aggregateExceedsSize: "You selected %{size} of files, but maximum allowed size is %{sizeAllowed}",
    exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
    missingRequiredMetaField: "Missing required meta fields",
    missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
    inferiorSize: "This file is smaller than the allowed size of %{size}",
    youCanOnlyUploadFileTypes: "You can only upload: %{types}",
    noMoreFilesAllowed: "Cannot add more files",
    noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
    companionError: "Connection with Companion failed",
    authAborted: "Authentication aborted",
    companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
    failedToUpload: "Failed to upload %{file}",
    noInternetConnection: "No Internet connection",
    connectedToInternet: "Connected to the Internet",
    // Strings for remote providers
    noFilesFound: "You have no files or folders here",
    noSearchResults: "Unfortunately, there are no results for this search",
    selectX: {
      0: "Select %{smart_count}",
      1: "Select %{smart_count}"
    },
    allFilesFromFolderNamed: "All files from folder %{name}",
    openFolderNamed: "Open folder %{name}",
    cancel: "Cancel",
    logOut: "Log out",
    logIn: "Log in",
    pickFiles: "Pick files",
    pickPhotos: "Pick photos",
    filter: "Filter",
    resetFilter: "Reset filter",
    loading: "Loading...",
    loadedXFiles: "Loaded %{numFiles} files",
    authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
    authenticateWith: "Connect to %{pluginName}",
    signInWithGoogle: "Sign in with Google",
    searchImages: "Search for images",
    enterTextToSearch: "Enter text to search for images",
    search: "Search",
    resetSearch: "Reset search",
    emptyFolderAdded: "No files were added from empty folder",
    addedNumFiles: "Added %{numFiles} file(s)",
    folderAlreadyAdded: 'The folder "%{folder}" was already added',
    folderAdded: {
      0: "Added %{smart_count} file from %{folder}",
      1: "Added %{smart_count} files from %{folder}"
    },
    additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled",
    unnamed: "Unnamed",
    pleaseWait: "Please wait"
  }
};

// node_modules/@uppy/core/lib/Uppy.js
function _classPrivateFieldLooseBase3(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id3 = 0;
function _classPrivateFieldLooseKey3(e) {
  return "__private_" + id3++ + "_" + e;
}
var packageJson2 = {
  "version": "4.4.5"
};
var defaultUploadState = {
  totalProgress: 0,
  allowNewUpload: true,
  error: null,
  recoveredState: null
};
var _plugins = /* @__PURE__ */ _classPrivateFieldLooseKey3("plugins");
var _restricter = /* @__PURE__ */ _classPrivateFieldLooseKey3("restricter");
var _storeUnsubscribe = /* @__PURE__ */ _classPrivateFieldLooseKey3("storeUnsubscribe");
var _emitter = /* @__PURE__ */ _classPrivateFieldLooseKey3("emitter");
var _preProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey3("preProcessors");
var _uploaders = /* @__PURE__ */ _classPrivateFieldLooseKey3("uploaders");
var _postProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey3("postProcessors");
var _informAndEmit = /* @__PURE__ */ _classPrivateFieldLooseKey3("informAndEmit");
var _checkRequiredMetaFieldsOnFile = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkRequiredMetaFieldsOnFile");
var _checkRequiredMetaFields = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkRequiredMetaFields");
var _assertNewUploadAllowed = /* @__PURE__ */ _classPrivateFieldLooseKey3("assertNewUploadAllowed");
var _transformFile = /* @__PURE__ */ _classPrivateFieldLooseKey3("transformFile");
var _startIfAutoProceed = /* @__PURE__ */ _classPrivateFieldLooseKey3("startIfAutoProceed");
var _checkAndUpdateFileState = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkAndUpdateFileState");
var _getFilesToRetry = /* @__PURE__ */ _classPrivateFieldLooseKey3("getFilesToRetry");
var _doRetryAll = /* @__PURE__ */ _classPrivateFieldLooseKey3("doRetryAll");
var _handleUploadProgress = /* @__PURE__ */ _classPrivateFieldLooseKey3("handleUploadProgress");
var _updateTotalProgress = /* @__PURE__ */ _classPrivateFieldLooseKey3("updateTotalProgress");
var _updateTotalProgressThrottled = /* @__PURE__ */ _classPrivateFieldLooseKey3("updateTotalProgressThrottled");
var _calculateTotalProgress = /* @__PURE__ */ _classPrivateFieldLooseKey3("calculateTotalProgress");
var _addListeners = /* @__PURE__ */ _classPrivateFieldLooseKey3("addListeners");
var _updateOnlineStatus = /* @__PURE__ */ _classPrivateFieldLooseKey3("updateOnlineStatus");
var _requestClientById = /* @__PURE__ */ _classPrivateFieldLooseKey3("requestClientById");
var _createUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("createUpload");
var _getUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("getUpload");
var _removeUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("removeUpload");
var _runUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("runUpload");
var Uppy = class _Uppy {
  /**
   * Instantiate Uppy
   */
  constructor(_opts) {
    Object.defineProperty(this, _runUpload, {
      value: _runUpload2
    });
    Object.defineProperty(this, _removeUpload, {
      value: _removeUpload2
    });
    Object.defineProperty(this, _getUpload, {
      value: _getUpload2
    });
    Object.defineProperty(this, _createUpload, {
      value: _createUpload2
    });
    Object.defineProperty(this, _addListeners, {
      value: _addListeners2
    });
    Object.defineProperty(this, _calculateTotalProgress, {
      value: _calculateTotalProgress2
    });
    Object.defineProperty(this, _updateTotalProgress, {
      value: _updateTotalProgress2
    });
    Object.defineProperty(this, _doRetryAll, {
      value: _doRetryAll2
    });
    Object.defineProperty(this, _getFilesToRetry, {
      value: _getFilesToRetry2
    });
    Object.defineProperty(this, _checkAndUpdateFileState, {
      value: _checkAndUpdateFileState2
    });
    Object.defineProperty(this, _startIfAutoProceed, {
      value: _startIfAutoProceed2
    });
    Object.defineProperty(this, _transformFile, {
      value: _transformFile2
    });
    Object.defineProperty(this, _assertNewUploadAllowed, {
      value: _assertNewUploadAllowed2
    });
    Object.defineProperty(this, _checkRequiredMetaFields, {
      value: _checkRequiredMetaFields2
    });
    Object.defineProperty(this, _checkRequiredMetaFieldsOnFile, {
      value: _checkRequiredMetaFieldsOnFile2
    });
    Object.defineProperty(this, _informAndEmit, {
      value: _informAndEmit2
    });
    Object.defineProperty(this, _plugins, {
      writable: true,
      value: /* @__PURE__ */ Object.create(null)
    });
    Object.defineProperty(this, _restricter, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _storeUnsubscribe, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _emitter, {
      writable: true,
      value: (0, import_namespace_emitter.default)()
    });
    Object.defineProperty(this, _preProcessors, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, _uploaders, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, _postProcessors, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    this.scheduledAutoProceed = null;
    this.wasOffline = false;
    Object.defineProperty(this, _handleUploadProgress, {
      writable: true,
      value: (file, progress) => {
        const fileInState = file ? this.getFile(file.id) : void 0;
        if (file == null || !fileInState) {
          this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
          return;
        }
        if (fileInState.progress.percentage === 100) {
          this.log(`Not setting progress for a file that has been already uploaded: ${file.id}`);
          return;
        }
        const newProgress = {
          bytesTotal: progress.bytesTotal,
          // bytesTotal may be null or zero; in that case we can't divide by it
          percentage: progress.bytesTotal != null && Number.isFinite(progress.bytesTotal) && progress.bytesTotal > 0 ? Math.round(progress.bytesUploaded / progress.bytesTotal * 100) : void 0
        };
        if (fileInState.progress.uploadStarted != null) {
          this.setFileState(file.id, {
            progress: {
              ...fileInState.progress,
              ...newProgress,
              bytesUploaded: progress.bytesUploaded
            }
          });
        } else {
          this.setFileState(file.id, {
            progress: {
              ...fileInState.progress,
              ...newProgress
            }
          });
        }
        _classPrivateFieldLooseBase3(this, _updateTotalProgressThrottled)[_updateTotalProgressThrottled]();
      }
    });
    Object.defineProperty(this, _updateTotalProgressThrottled, {
      writable: true,
      value: (0, import_throttle.default)(() => _classPrivateFieldLooseBase3(this, _updateTotalProgress)[_updateTotalProgress](), 500, {
        leading: true,
        trailing: true
      })
    });
    Object.defineProperty(this, _updateOnlineStatus, {
      writable: true,
      value: this.updateOnlineStatus.bind(this)
    });
    Object.defineProperty(this, _requestClientById, {
      writable: true,
      value: /* @__PURE__ */ new Map()
    });
    this.defaultLocale = locale_default;
    const defaultOptions7 = {
      id: "uppy",
      autoProceed: false,
      allowMultipleUploadBatches: true,
      debug: false,
      restrictions: defaultOptions,
      meta: {},
      onBeforeFileAdded: (file, files) => !Object.hasOwn(files, file.id),
      onBeforeUpload: (files) => files,
      store: new lib_default(),
      logger: justErrorsLogger,
      infoTimeout: 5e3
    };
    const merged = {
      ...defaultOptions7,
      ..._opts
    };
    this.opts = {
      ...merged,
      restrictions: {
        ...defaultOptions7.restrictions,
        ..._opts && _opts.restrictions
      }
    };
    if (_opts && _opts.logger && _opts.debug) {
      this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning");
    } else if (_opts && _opts.debug) {
      this.opts.logger = debugLogger;
    }
    this.log(`Using Core v${_Uppy.VERSION}`);
    this.i18nInit();
    this.store = this.opts.store;
    this.setState({
      ...defaultUploadState,
      plugins: {},
      files: {},
      currentUploads: {},
      capabilities: {
        uploadProgress: supportsUploadProgress(),
        individualCancellation: true,
        resumableUploads: false
      },
      meta: {
        ...this.opts.meta
      },
      info: []
    });
    _classPrivateFieldLooseBase3(this, _restricter)[_restricter] = new Restricter(() => this.opts, () => this.i18n);
    _classPrivateFieldLooseBase3(this, _storeUnsubscribe)[_storeUnsubscribe] = this.store.subscribe((prevState, nextState, patch) => {
      this.emit("state-update", prevState, nextState, patch);
      this.updateAll(nextState);
    });
    if (this.opts.debug && typeof window !== "undefined") {
      window[this.opts.id] = this;
    }
    _classPrivateFieldLooseBase3(this, _addListeners)[_addListeners]();
  }
  emit(event2) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].emit(event2, ...args);
  }
  on(event2, callback) {
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].on(event2, callback);
    return this;
  }
  once(event2, callback) {
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].once(event2, callback);
    return this;
  }
  off(event2, callback) {
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].off(event2, callback);
    return this;
  }
  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */
  updateAll(state) {
    this.iteratePlugins((plugin) => {
      plugin.update(state);
    });
  }
  /**
   * Updates state with a patch
   */
  setState(patch) {
    this.store.setState(patch);
  }
  /**
   * Returns current state.
   */
  getState() {
    return this.store.getState();
  }
  patchFilesState(filesWithNewState) {
    const existingFilesState = this.getState().files;
    this.setState({
      files: {
        ...existingFilesState,
        ...Object.fromEntries(Object.entries(filesWithNewState).map((_ref) => {
          let [fileID, newFileState] = _ref;
          return [fileID, {
            ...existingFilesState[fileID],
            ...newFileState
          }];
        }))
      }
    });
  }
  /**
   * Shorthand to set state for a specific file.
   */
  setFileState(fileID, state) {
    if (!this.getState().files[fileID]) {
      throw new Error(`Can\u2019t set state for ${fileID} (the file could have been removed)`);
    }
    this.patchFilesState({
      [fileID]: state
    });
  }
  i18nInit() {
    const onMissingKey = (key) => this.log(`Missing i18n string: ${key}`, "error");
    const translator = new Translator([this.defaultLocale, this.opts.locale], {
      onMissingKey
    });
    this.i18n = translator.translate.bind(translator);
    this.i18nArray = translator.translateArray.bind(translator);
    this.locale = translator.locale;
  }
  setOptions(newOpts) {
    this.opts = {
      ...this.opts,
      ...newOpts,
      restrictions: {
        ...this.opts.restrictions,
        ...newOpts == null ? void 0 : newOpts.restrictions
      }
    };
    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }
    this.i18nInit();
    if (newOpts.locale) {
      this.iteratePlugins((plugin) => {
        plugin.setOptions(newOpts);
      });
    }
    this.setState(void 0);
  }
  resetProgress() {
    const defaultProgress = {
      percentage: 0,
      bytesUploaded: false,
      uploadComplete: false,
      uploadStarted: null
    };
    const files = {
      ...this.getState().files
    };
    const updatedFiles = /* @__PURE__ */ Object.create(null);
    Object.keys(files).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...files[fileID],
        progress: {
          ...files[fileID].progress,
          ...defaultProgress
        },
        // @ts-expect-error these typed are inserted
        // into the namespace in their respective packages
        // but core isn't ware of those
        tus: void 0,
        transloadit: void 0
      };
    });
    this.setState({
      files: updatedFiles,
      ...defaultUploadState
    });
  }
  clear() {
    const {
      capabilities,
      currentUploads
    } = this.getState();
    if (Object.keys(currentUploads).length > 0 && !capabilities.individualCancellation) {
      throw new Error("The installed uploader plugin does not allow removing files during an upload.");
    }
    this.setState({
      ...defaultUploadState,
      files: {}
    });
  }
  addPreProcessor(fn) {
    _classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors].add(fn);
  }
  removePreProcessor(fn) {
    return _classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors].delete(fn);
  }
  addPostProcessor(fn) {
    _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].add(fn);
  }
  removePostProcessor(fn) {
    return _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].delete(fn);
  }
  addUploader(fn) {
    _classPrivateFieldLooseBase3(this, _uploaders)[_uploaders].add(fn);
  }
  removeUploader(fn) {
    return _classPrivateFieldLooseBase3(this, _uploaders)[_uploaders].delete(fn);
  }
  setMeta(data) {
    const updatedMeta = {
      ...this.getState().meta,
      ...data
    };
    const updatedFiles = {
      ...this.getState().files
    };
    Object.keys(updatedFiles).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...updatedFiles[fileID],
        meta: {
          ...updatedFiles[fileID].meta,
          ...data
        }
      };
    });
    this.log("Adding metadata:");
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
  }
  setFileMeta(fileID, data) {
    const updatedFiles = {
      ...this.getState().files
    };
    if (!updatedFiles[fileID]) {
      this.log(`Was trying to set metadata for a file that has been removed: ${fileID}`);
      return;
    }
    const newMeta = {
      ...updatedFiles[fileID].meta,
      ...data
    };
    updatedFiles[fileID] = {
      ...updatedFiles[fileID],
      meta: newMeta
    };
    this.setState({
      files: updatedFiles
    });
  }
  /**
   * Get a file object.
   */
  getFile(fileID) {
    return this.getState().files[fileID];
  }
  /**
   * Get all files in an array.
   */
  getFiles() {
    const {
      files
    } = this.getState();
    return Object.values(files);
  }
  getFilesByIds(ids) {
    return ids.map((id12) => this.getFile(id12));
  }
  getObjectOfFilesPerState() {
    const {
      files: filesObject,
      totalProgress,
      error
    } = this.getState();
    const files = Object.values(filesObject);
    const inProgressFiles = [];
    const newFiles = [];
    const startedFiles = [];
    const uploadStartedFiles = [];
    const pausedFiles = [];
    const completeFiles = [];
    const erroredFiles = [];
    const inProgressNotPausedFiles = [];
    const processingFiles = [];
    for (const file of files) {
      const {
        progress
      } = file;
      if (!progress.uploadComplete && progress.uploadStarted) {
        inProgressFiles.push(file);
        if (!file.isPaused) {
          inProgressNotPausedFiles.push(file);
        }
      }
      if (!progress.uploadStarted) {
        newFiles.push(file);
      }
      if (progress.uploadStarted || progress.preprocess || progress.postprocess) {
        startedFiles.push(file);
      }
      if (progress.uploadStarted) {
        uploadStartedFiles.push(file);
      }
      if (file.isPaused) {
        pausedFiles.push(file);
      }
      if (progress.uploadComplete) {
        completeFiles.push(file);
      }
      if (file.error) {
        erroredFiles.push(file);
      }
      if (progress.preprocess || progress.postprocess) {
        processingFiles.push(file);
      }
    }
    return {
      newFiles,
      startedFiles,
      uploadStartedFiles,
      pausedFiles,
      completeFiles,
      erroredFiles,
      inProgressFiles,
      inProgressNotPausedFiles,
      processingFiles,
      isUploadStarted: uploadStartedFiles.length > 0,
      isAllComplete: totalProgress === 100 && completeFiles.length === files.length && processingFiles.length === 0,
      isAllErrored: !!error && erroredFiles.length === files.length,
      isAllPaused: inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length,
      isUploadInProgress: inProgressFiles.length > 0,
      isSomeGhost: files.some((file) => file.isGhost)
    };
  }
  validateRestrictions(file, files) {
    if (files === void 0) {
      files = this.getFiles();
    }
    try {
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validate(files, [file]);
    } catch (err) {
      return err;
    }
    return null;
  }
  validateSingleFile(file) {
    try {
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateSingleFile(file);
    } catch (err) {
      return err.message;
    }
    return null;
  }
  validateAggregateRestrictions(files) {
    const existingFiles = this.getFiles();
    try {
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateAggregateRestrictions(existingFiles, files);
    } catch (err) {
      return err.message;
    }
    return null;
  }
  checkIfFileAlreadyExists(fileID) {
    const {
      files
    } = this.getState();
    if (files[fileID] && !files[fileID].isGhost) {
      return true;
    }
    return false;
  }
  /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   */
  addFile(file) {
    _classPrivateFieldLooseBase3(this, _assertNewUploadAllowed)[_assertNewUploadAllowed](file);
    const {
      nextFilesState,
      validFilesToAdd,
      errors
    } = _classPrivateFieldLooseBase3(this, _checkAndUpdateFileState)[_checkAndUpdateFileState]([file]);
    const restrictionErrors = errors.filter((error) => error.isRestriction);
    _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit](restrictionErrors);
    if (errors.length > 0) throw errors[0];
    this.setState({
      files: nextFilesState
    });
    const [firstValidFileToAdd] = validFilesToAdd;
    this.emit("file-added", firstValidFileToAdd);
    this.emit("files-added", validFilesToAdd);
    this.log(`Added file: ${firstValidFileToAdd.name}, ${firstValidFileToAdd.id}, mime type: ${firstValidFileToAdd.type}`);
    _classPrivateFieldLooseBase3(this, _startIfAutoProceed)[_startIfAutoProceed]();
    return firstValidFileToAdd.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */
  addFiles(fileDescriptors) {
    _classPrivateFieldLooseBase3(this, _assertNewUploadAllowed)[_assertNewUploadAllowed]();
    const {
      nextFilesState,
      validFilesToAdd,
      errors
    } = _classPrivateFieldLooseBase3(this, _checkAndUpdateFileState)[_checkAndUpdateFileState](fileDescriptors);
    const restrictionErrors = errors.filter((error) => error.isRestriction);
    _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit](restrictionErrors);
    const nonRestrictionErrors = errors.filter((error) => !error.isRestriction);
    if (nonRestrictionErrors.length > 0) {
      let message = "Multiple errors occurred while adding files:\n";
      nonRestrictionErrors.forEach((subError) => {
        message += `
 * ${subError.message}`;
      });
      this.info({
        message: this.i18n("addBulkFilesFailed", {
          smart_count: nonRestrictionErrors.length
        }),
        details: message
      }, "error", this.opts.infoTimeout);
      if (typeof AggregateError === "function") {
        throw new AggregateError(nonRestrictionErrors, message);
      } else {
        const err = new Error(message);
        err.errors = nonRestrictionErrors;
        throw err;
      }
    }
    this.setState({
      files: nextFilesState
    });
    validFilesToAdd.forEach((file) => {
      this.emit("file-added", file);
    });
    this.emit("files-added", validFilesToAdd);
    if (validFilesToAdd.length > 5) {
      this.log(`Added batch of ${validFilesToAdd.length} files`);
    } else {
      Object.values(validFilesToAdd).forEach((file) => {
        this.log(`Added file: ${file.name}
 id: ${file.id}
 type: ${file.type}`);
      });
    }
    if (validFilesToAdd.length > 0) {
      _classPrivateFieldLooseBase3(this, _startIfAutoProceed)[_startIfAutoProceed]();
    }
  }
  removeFiles(fileIDs) {
    const {
      files,
      currentUploads
    } = this.getState();
    const updatedFiles = {
      ...files
    };
    const updatedUploads = {
      ...currentUploads
    };
    const removedFiles = /* @__PURE__ */ Object.create(null);
    fileIDs.forEach((fileID) => {
      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
    });
    function fileIsNotRemoved(uploadFileID) {
      return removedFiles[uploadFileID] === void 0;
    }
    Object.keys(updatedUploads).forEach((uploadID) => {
      const newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
      if (newFileIDs.length === 0) {
        delete updatedUploads[uploadID];
        return;
      }
      const {
        capabilities
      } = this.getState();
      if (newFileIDs.length !== currentUploads[uploadID].fileIDs.length && !capabilities.individualCancellation) {
        throw new Error("The installed uploader plugin does not allow removing files during an upload.");
      }
      updatedUploads[uploadID] = {
        ...currentUploads[uploadID],
        fileIDs: newFileIDs
      };
    });
    const stateUpdate = {
      currentUploads: updatedUploads,
      files: updatedFiles
    };
    if (Object.keys(updatedFiles).length === 0) {
      stateUpdate.allowNewUpload = true;
      stateUpdate.error = null;
      stateUpdate.recoveredState = null;
    }
    this.setState(stateUpdate);
    _classPrivateFieldLooseBase3(this, _updateTotalProgressThrottled)[_updateTotalProgressThrottled]();
    const removedFileIDs = Object.keys(removedFiles);
    removedFileIDs.forEach((fileID) => {
      this.emit("file-removed", removedFiles[fileID]);
    });
    if (removedFileIDs.length > 5) {
      this.log(`Removed ${removedFileIDs.length} files`);
    } else {
      this.log(`Removed files: ${removedFileIDs.join(", ")}`);
    }
  }
  removeFile(fileID) {
    this.removeFiles([fileID]);
  }
  pauseResume(fileID) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).progress.uploadComplete) {
      return void 0;
    }
    const file = this.getFile(fileID);
    const wasPaused = file.isPaused || false;
    const isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused
    });
    this.emit("upload-pause", file, isPaused);
    return isPaused;
  }
  pauseAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: true
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit("pause-all");
  }
  resumeAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: false,
        error: null
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit("resume-all");
  }
  async retryAll() {
    const result = await _classPrivateFieldLooseBase3(this, _doRetryAll)[_doRetryAll]();
    this.emit("complete", result);
    return result;
  }
  cancelAll() {
    this.emit("cancel-all");
    const {
      files
    } = this.getState();
    const fileIDs = Object.keys(files);
    if (fileIDs.length) {
      this.removeFiles(fileIDs);
    }
    this.setState(defaultUploadState);
  }
  retryUpload(fileID) {
    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit("upload-retry", this.getFile(fileID));
    const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload]([fileID], {
      forceAllowNewUpload: true
      // create new upload even if allowNewUpload: false
    });
    return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
  }
  logout() {
    this.iteratePlugins((plugin) => {
      var _provider;
      ;
      (_provider = plugin.provider) == null || _provider.logout == null || _provider.logout();
    });
  }
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-module-boundary-types
  [Symbol.for("uppy test: updateTotalProgress")]() {
    return _classPrivateFieldLooseBase3(this, _updateTotalProgress)[_updateTotalProgress]();
  }
  updateOnlineStatus() {
    var _window$navigator$onL;
    const online = (_window$navigator$onL = window.navigator.onLine) != null ? _window$navigator$onL : true;
    if (!online) {
      this.emit("is-offline");
      this.info(this.i18n("noInternetConnection"), "error", 0);
      this.wasOffline = true;
    } else {
      this.emit("is-online");
      if (this.wasOffline) {
        this.emit("back-online");
        this.info(this.i18n("connectedToInternet"), "success", 3e3);
        this.wasOffline = false;
      }
    }
  }
  getID() {
    return this.opts.id;
  }
  /**
   * Registers a plugin with Core.
   */
  use(Plugin) {
    if (typeof Plugin !== "function") {
      const msg = `Expected a plugin class, but got ${Plugin === null ? "null" : typeof Plugin}. Please verify that the plugin was imported and spelled correctly.`;
      throw new TypeError(msg);
    }
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    const plugin = new Plugin(this, ...args);
    const pluginId = plugin.id;
    if (!pluginId) {
      throw new Error("Your plugin must have an id");
    }
    if (!plugin.type) {
      throw new Error("Your plugin must have a type");
    }
    const existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      const msg = `Already found a plugin named '${existsPluginAlready.id}'. Tried to use: '${pluginId}'.
Uppy plugins must have unique \`id\` options.`;
      throw new Error(msg);
    }
    if (Plugin.VERSION) {
      this.log(`Using ${pluginId} v${Plugin.VERSION}`);
    }
    if (plugin.type in _classPrivateFieldLooseBase3(this, _plugins)[_plugins]) {
      _classPrivateFieldLooseBase3(this, _plugins)[_plugins][plugin.type].push(plugin);
    } else {
      _classPrivateFieldLooseBase3(this, _plugins)[_plugins][plugin.type] = [plugin];
    }
    plugin.install();
    this.emit("plugin-added", plugin);
    return this;
  }
  /**
   * Find one Plugin by name.
   */
  getPlugin(id12) {
    for (const plugins of Object.values(_classPrivateFieldLooseBase3(this, _plugins)[_plugins])) {
      const foundPlugin = plugins.find((plugin) => plugin.id === id12);
      if (foundPlugin != null) return foundPlugin;
    }
    return void 0;
  }
  [Symbol.for("uppy test: getPlugins")](type) {
    return _classPrivateFieldLooseBase3(this, _plugins)[_plugins][type];
  }
  /**
   * Iterate through all `use`d plugins.
   *
   */
  iteratePlugins(method) {
    Object.values(_classPrivateFieldLooseBase3(this, _plugins)[_plugins]).flat(1).forEach(method);
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  removePlugin(instance) {
    this.log(`Removing plugin ${instance.id}`);
    this.emit("plugin-remove", instance);
    if (instance.uninstall) {
      instance.uninstall();
    }
    const list = _classPrivateFieldLooseBase3(this, _plugins)[_plugins][instance.type];
    const index = list.findIndex((item) => item.id === instance.id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    const state = this.getState();
    const updatedState = {
      plugins: {
        ...state.plugins,
        [instance.id]: void 0
      }
    };
    this.setState(updatedState);
  }
  /**
   * Uninstall all plugins and close down this Uppy instance.
   */
  destroy() {
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`);
    this.cancelAll();
    _classPrivateFieldLooseBase3(this, _storeUnsubscribe)[_storeUnsubscribe]();
    this.iteratePlugins((plugin) => {
      this.removePlugin(plugin);
    });
    if (typeof window !== "undefined" && window.removeEventListener) {
      window.removeEventListener("online", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
      window.removeEventListener("offline", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
    }
  }
  hideInfo() {
    const {
      info
    } = this.getState();
    this.setState({
      info: info.slice(1)
    });
    this.emit("info-hidden");
  }
  /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   */
  info(message, type, duration2) {
    if (type === void 0) {
      type = "info";
    }
    if (duration2 === void 0) {
      duration2 = 3e3;
    }
    const isComplexMessage = typeof message === "object";
    this.setState({
      info: [...this.getState().info, {
        type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }]
    });
    setTimeout(() => this.hideInfo(), duration2);
    this.emit("info-visible");
  }
  /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   */
  log(message, type) {
    const {
      logger
    } = this.opts;
    switch (type) {
      case "error":
        logger.error(message);
        break;
      case "warning":
        logger.warn(message);
        break;
      default:
        logger.debug(message);
        break;
    }
  }
  registerRequestClient(id12, client) {
    _classPrivateFieldLooseBase3(this, _requestClientById)[_requestClientById].set(id12, client);
  }
  /** @protected */
  getRequestClientForFile(file) {
    if (!file.remote) throw new Error(`Tried to get RequestClient for a non-remote file ${file.id}`);
    const requestClient = _classPrivateFieldLooseBase3(this, _requestClientById)[_requestClientById].get(file.remote.requestClientId);
    if (requestClient == null) throw new Error(`requestClientId "${file.remote.requestClientId}" not registered for file "${file.id}"`);
    return requestClient;
  }
  /**
   * Restore an upload by its ID.
   */
  restore(uploadID) {
    this.log(`Core: attempting to restore upload "${uploadID}"`);
    if (!this.getState().currentUploads[uploadID]) {
      _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
      return Promise.reject(new Error("Nonexistent upload"));
    }
    return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
  }
  [Symbol.for("uppy test: createUpload")]() {
    return _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](...arguments);
  }
  /**
   * Add data to an upload's result object.
   */
  addResultData(uploadID, data) {
    if (!_classPrivateFieldLooseBase3(this, _getUpload)[_getUpload](uploadID)) {
      this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
      return;
    }
    const {
      currentUploads
    } = this.getState();
    const currentUpload = {
      ...currentUploads[uploadID],
      result: {
        ...currentUploads[uploadID].result,
        ...data
      }
    };
    this.setState({
      currentUploads: {
        ...currentUploads,
        [uploadID]: currentUpload
      }
    });
  }
  /**
   * Start an upload for all the files that are not currently being uploaded.
   */
  async upload() {
    var _classPrivateFieldLoo;
    if (!((_classPrivateFieldLoo = _classPrivateFieldLooseBase3(this, _plugins)[_plugins]["uploader"]) != null && _classPrivateFieldLoo.length)) {
      this.log("No uploader type plugins are used", "warning");
    }
    let {
      files
    } = this.getState();
    const filesToRetry = _classPrivateFieldLooseBase3(this, _getFilesToRetry)[_getFilesToRetry]();
    if (filesToRetry.length > 0) {
      const retryResult = await _classPrivateFieldLooseBase3(this, _doRetryAll)[_doRetryAll]();
      const hasNewFiles = this.getFiles().filter((file) => file.progress.uploadStarted == null).length > 0;
      if (!hasNewFiles) {
        this.emit("complete", retryResult);
        return retryResult;
      }
      ;
      ({
        files
      } = this.getState());
    }
    const onBeforeUploadResult = this.opts.onBeforeUpload(files);
    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false"));
    }
    if (onBeforeUploadResult && typeof onBeforeUploadResult === "object") {
      files = onBeforeUploadResult;
      this.setState({
        files
      });
    }
    return Promise.resolve().then(() => _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateMinNumberOfFiles(files)).catch((err) => {
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([err]);
      throw err;
    }).then(() => {
      if (!_classPrivateFieldLooseBase3(this, _checkRequiredMetaFields)[_checkRequiredMetaFields](files)) {
        throw new RestrictionError(this.i18n("missingRequiredMetaField"));
      }
    }).catch((err) => {
      throw err;
    }).then(async () => {
      const {
        currentUploads
      } = this.getState();
      const currentlyUploadingFiles = Object.values(currentUploads).flatMap((curr) => curr.fileIDs);
      const waitingFileIDs = [];
      Object.keys(files).forEach((fileID) => {
        const file = this.getFile(fileID);
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
      });
      const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](waitingFileIDs);
      const result = await _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
      this.emit("complete", result);
      return result;
    }).catch((err) => {
      this.emit("error", err);
      this.log(err, "error");
      throw err;
    });
  }
};
function _informAndEmit2(errors) {
  for (const error of errors) {
    if (error.isRestriction) {
      this.emit("restriction-failed", error.file, error);
    } else {
      this.emit("error", error, error.file);
    }
    this.log(error, "warning");
  }
  const userFacingErrors = errors.filter((error) => error.isUserFacing);
  const maxNumToShow = 4;
  const firstErrors = userFacingErrors.slice(0, maxNumToShow);
  const additionalErrors = userFacingErrors.slice(maxNumToShow);
  firstErrors.forEach((_ref2) => {
    let {
      message,
      details = ""
    } = _ref2;
    this.info({
      message,
      details
    }, "error", this.opts.infoTimeout);
  });
  if (additionalErrors.length > 0) {
    this.info({
      message: this.i18n("additionalRestrictionsFailed", {
        count: additionalErrors.length
      })
    });
  }
}
function _checkRequiredMetaFieldsOnFile2(file) {
  const {
    missingFields,
    error
  } = _classPrivateFieldLooseBase3(this, _restricter)[_restricter].getMissingRequiredMetaFields(file);
  if (missingFields.length > 0) {
    this.setFileState(file.id, {
      missingRequiredMetaFields: missingFields
    });
    this.log(error.message);
    this.emit("restriction-failed", file, error);
    return false;
  }
  return true;
}
function _checkRequiredMetaFields2(files) {
  let success = true;
  for (const file of Object.values(files)) {
    if (!_classPrivateFieldLooseBase3(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file)) {
      success = false;
    }
  }
  return success;
}
function _assertNewUploadAllowed2(file) {
  const {
    allowNewUpload
  } = this.getState();
  if (allowNewUpload === false) {
    const error = new RestrictionError(this.i18n("noMoreFilesAllowed"), {
      file
    });
    _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([error]);
    throw error;
  }
}
function _transformFile2(fileDescriptorOrFile) {
  const file = fileDescriptorOrFile instanceof File ? {
    name: fileDescriptorOrFile.name,
    type: fileDescriptorOrFile.type,
    size: fileDescriptorOrFile.size,
    data: fileDescriptorOrFile
  } : fileDescriptorOrFile;
  const fileType = getFileType(file);
  const fileName = getFileName(fileType, file);
  const fileExtension = getFileNameAndExtension(fileName).extension;
  const id12 = getSafeFileId(file, this.getID());
  const meta = file.meta || {};
  meta.name = fileName;
  meta.type = fileType;
  const size = Number.isFinite(file.data.size) ? file.data.size : null;
  return {
    source: file.source || "",
    id: id12,
    name: fileName,
    extension: fileExtension || "",
    meta: {
      ...this.getState().meta,
      ...meta
    },
    type: fileType,
    data: file.data,
    progress: {
      percentage: 0,
      bytesUploaded: false,
      bytesTotal: size,
      uploadComplete: false,
      uploadStarted: null
    },
    size,
    isGhost: false,
    isRemote: file.isRemote || false,
    remote: file.remote,
    preview: file.preview
  };
}
function _startIfAutoProceed2() {
  if (this.opts.autoProceed && !this.scheduledAutoProceed) {
    this.scheduledAutoProceed = setTimeout(() => {
      this.scheduledAutoProceed = null;
      this.upload().catch((err) => {
        if (!err.isRestriction) {
          this.log(err.stack || err.message || err);
        }
      });
    }, 4);
  }
}
function _checkAndUpdateFileState2(filesToAdd) {
  const {
    files: existingFiles
  } = this.getState();
  const nextFilesState = {
    ...existingFiles
  };
  const validFilesToAdd = [];
  const errors = [];
  for (const fileToAdd of filesToAdd) {
    try {
      var _existingFiles$newFil;
      let newFile = _classPrivateFieldLooseBase3(this, _transformFile)[_transformFile](fileToAdd);
      const isGhost = (_existingFiles$newFil = existingFiles[newFile.id]) == null ? void 0 : _existingFiles$newFil.isGhost;
      if (isGhost) {
        const existingFileState = existingFiles[newFile.id];
        newFile = {
          ...existingFileState,
          isGhost: false,
          data: fileToAdd.data
        };
        this.log(`Replaced the blob in the restored ghost file: ${newFile.name}, ${newFile.id}`);
      }
      const onBeforeFileAddedResult = this.opts.onBeforeFileAdded(newFile, nextFilesState);
      if (!onBeforeFileAddedResult && this.checkIfFileAlreadyExists(newFile.id)) {
        var _newFile$name;
        throw new RestrictionError(this.i18n("noDuplicates", {
          fileName: (_newFile$name = newFile.name) != null ? _newFile$name : this.i18n("unnamed")
        }), {
          file: fileToAdd
        });
      }
      if (onBeforeFileAddedResult === false && !isGhost) {
        throw new RestrictionError("Cannot add the file because onBeforeFileAdded returned false.", {
          isUserFacing: false,
          file: fileToAdd
        });
      } else if (typeof onBeforeFileAddedResult === "object" && onBeforeFileAddedResult !== null) {
        newFile = onBeforeFileAddedResult;
      }
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateSingleFile(newFile);
      nextFilesState[newFile.id] = newFile;
      validFilesToAdd.push(newFile);
    } catch (err) {
      errors.push(err);
    }
  }
  try {
    _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateAggregateRestrictions(Object.values(existingFiles), validFilesToAdd);
  } catch (err) {
    errors.push(err);
    return {
      nextFilesState: existingFiles,
      validFilesToAdd: [],
      errors
    };
  }
  return {
    nextFilesState,
    validFilesToAdd,
    errors
  };
}
function _getFilesToRetry2() {
  const {
    files
  } = this.getState();
  return Object.keys(files).filter((file) => {
    return files[file].error;
  });
}
async function _doRetryAll2() {
  const filesToRetry = _classPrivateFieldLooseBase3(this, _getFilesToRetry)[_getFilesToRetry]();
  const updatedFiles = {
    ...this.getState().files
  };
  filesToRetry.forEach((fileID) => {
    updatedFiles[fileID] = {
      ...updatedFiles[fileID],
      isPaused: false,
      error: null
    };
  });
  this.setState({
    files: updatedFiles,
    error: null
  });
  this.emit("retry-all", this.getFilesByIds(filesToRetry));
  if (filesToRetry.length === 0) {
    return {
      successful: [],
      failed: []
    };
  }
  const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](filesToRetry, {
    forceAllowNewUpload: true
    // create new upload even if allowNewUpload: false
  });
  return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
}
function _updateTotalProgress2() {
  var _totalProgressPercent, _totalProgressPercent2;
  const totalProgress = _classPrivateFieldLooseBase3(this, _calculateTotalProgress)[_calculateTotalProgress]();
  let totalProgressPercent = null;
  if (totalProgress != null) {
    totalProgressPercent = Math.round(totalProgress * 100);
    if (totalProgressPercent > 100) totalProgressPercent = 100;
    else if (totalProgressPercent < 0) totalProgressPercent = 0;
  }
  this.emit("progress", (_totalProgressPercent = totalProgressPercent) != null ? _totalProgressPercent : 0);
  this.setState({
    totalProgress: (_totalProgressPercent2 = totalProgressPercent) != null ? _totalProgressPercent2 : 0
  });
}
function _calculateTotalProgress2() {
  const files = this.getFiles();
  const filesInProgress = files.filter((file) => {
    return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
  });
  if (filesInProgress.length === 0) {
    return 0;
  }
  if (filesInProgress.every((file) => file.progress.uploadComplete)) {
    return 1;
  }
  const isSizedFile = (file) => file.progress.bytesTotal != null && file.progress.bytesTotal !== 0;
  const sizedFilesInProgress = filesInProgress.filter(isSizedFile);
  const unsizedFilesInProgress = filesInProgress.filter((file) => !isSizedFile(file));
  if (sizedFilesInProgress.every((file) => file.progress.uploadComplete) && unsizedFilesInProgress.length > 0 && !unsizedFilesInProgress.every((file) => file.progress.uploadComplete)) {
    return null;
  }
  const totalFilesSize = sizedFilesInProgress.reduce((acc, file) => {
    var _file$progress$bytesT;
    return acc + ((_file$progress$bytesT = file.progress.bytesTotal) != null ? _file$progress$bytesT : 0);
  }, 0);
  const totalUploadedSize = sizedFilesInProgress.reduce((acc, file) => acc + (file.progress.bytesUploaded || 0), 0);
  return totalFilesSize === 0 ? 0 : totalUploadedSize / totalFilesSize;
}
function _addListeners2() {
  const errorHandler = (error, file, response) => {
    let errorMsg = error.message || "Unknown error";
    if (error.details) {
      errorMsg += ` ${error.details}`;
    }
    this.setState({
      error: errorMsg
    });
    if (file != null && file.id in this.getState().files) {
      this.setFileState(file.id, {
        error: errorMsg,
        response
      });
    }
  };
  this.on("error", errorHandler);
  this.on("upload-error", (file, error, response) => {
    errorHandler(error, file, response);
    if (typeof error === "object" && error.message) {
      var _file$name;
      this.log(error.message, "error");
      const newError = new Error(this.i18n("failedToUpload", {
        file: (_file$name = file == null ? void 0 : file.name) != null ? _file$name : ""
      }));
      newError.isUserFacing = true;
      newError.details = error.message;
      if (error.details) {
        newError.details += ` ${error.details}`;
      }
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([newError]);
    } else {
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([error]);
    }
  });
  let uploadStalledWarningRecentlyEmitted = null;
  this.on("upload-stalled", (error, files) => {
    const {
      message
    } = error;
    const details = files.map((file) => file.meta.name).join(", ");
    if (!uploadStalledWarningRecentlyEmitted) {
      this.info({
        message,
        details
      }, "warning", this.opts.infoTimeout);
      uploadStalledWarningRecentlyEmitted = setTimeout(() => {
        uploadStalledWarningRecentlyEmitted = null;
      }, this.opts.infoTimeout);
    }
    this.log(`${message} ${details}`.trim(), "warning");
  });
  this.on("upload", () => {
    this.setState({
      error: null
    });
  });
  const onUploadStarted = (files) => {
    const filesFiltered = files.filter((file) => {
      const exists = file != null && this.getFile(file.id);
      if (!exists) this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return exists;
    });
    const filesState = Object.fromEntries(filesFiltered.map((file) => [file.id, {
      progress: {
        uploadStarted: Date.now(),
        uploadComplete: false,
        bytesUploaded: 0,
        bytesTotal: file.size
      }
    }]));
    this.patchFilesState(filesState);
  };
  this.on("upload-start", onUploadStarted);
  this.on("upload-progress", _classPrivateFieldLooseBase3(this, _handleUploadProgress)[_handleUploadProgress]);
  this.on("upload-success", (file, uploadResp) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const currentProgress = this.getFile(file.id).progress;
    this.setFileState(file.id, {
      progress: {
        ...currentProgress,
        postprocess: _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].size > 0 ? {
          mode: "indeterminate"
        } : void 0,
        uploadComplete: true,
        percentage: 100,
        bytesUploaded: currentProgress.bytesTotal
      },
      response: uploadResp,
      uploadURL: uploadResp.uploadURL,
      isPaused: false
    });
    if (file.size == null) {
      this.setFileState(file.id, {
        size: uploadResp.bytesUploaded || currentProgress.bytesTotal
      });
    }
    _classPrivateFieldLooseBase3(this, _updateTotalProgressThrottled)[_updateTotalProgressThrottled]();
  });
  this.on("preprocess-progress", (file, progress) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    this.setFileState(file.id, {
      progress: {
        ...this.getFile(file.id).progress,
        preprocess: progress
      }
    });
  });
  this.on("preprocess-complete", (file) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const files = {
      ...this.getState().files
    };
    files[file.id] = {
      ...files[file.id],
      progress: {
        ...files[file.id].progress
      }
    };
    delete files[file.id].progress.preprocess;
    this.setState({
      files
    });
  });
  this.on("postprocess-progress", (file, progress) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    this.setFileState(file.id, {
      progress: {
        ...this.getState().files[file.id].progress,
        postprocess: progress
      }
    });
  });
  this.on("postprocess-complete", (file) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const files = {
      ...this.getState().files
    };
    files[file.id] = {
      ...files[file.id],
      progress: {
        ...files[file.id].progress
      }
    };
    delete files[file.id].progress.postprocess;
    this.setState({
      files
    });
  });
  this.on("restored", () => {
    _classPrivateFieldLooseBase3(this, _updateTotalProgressThrottled)[_updateTotalProgressThrottled]();
  });
  this.on("dashboard:file-edit-complete", (file) => {
    if (file) {
      _classPrivateFieldLooseBase3(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file);
    }
  });
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("online", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
    window.addEventListener("offline", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
    setTimeout(_classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus], 3e3);
  }
}
function _createUpload2(fileIDs, opts) {
  if (opts === void 0) {
    opts = {};
  }
  const {
    forceAllowNewUpload = false
  } = opts;
  const {
    allowNewUpload,
    currentUploads
  } = this.getState();
  if (!allowNewUpload && !forceAllowNewUpload) {
    throw new Error("Cannot create a new upload: already uploading.");
  }
  const uploadID = nanoid();
  this.emit("upload", uploadID, this.getFilesByIds(fileIDs));
  this.setState({
    allowNewUpload: this.opts.allowMultipleUploadBatches !== false && this.opts.allowMultipleUploads !== false,
    currentUploads: {
      ...currentUploads,
      [uploadID]: {
        fileIDs,
        step: 0,
        result: {}
      }
    }
  });
  return uploadID;
}
function _getUpload2(uploadID) {
  const {
    currentUploads
  } = this.getState();
  return currentUploads[uploadID];
}
function _removeUpload2(uploadID) {
  const currentUploads = {
    ...this.getState().currentUploads
  };
  delete currentUploads[uploadID];
  this.setState({
    currentUploads
  });
}
async function _runUpload2(uploadID) {
  const getCurrentUpload = () => {
    const {
      currentUploads
    } = this.getState();
    return currentUploads[uploadID];
  };
  let currentUpload = getCurrentUpload();
  const steps = [..._classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors], ..._classPrivateFieldLooseBase3(this, _uploaders)[_uploaders], ..._classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors]];
  try {
    for (let step = currentUpload.step || 0; step < steps.length; step++) {
      if (!currentUpload) {
        break;
      }
      const fn = steps[step];
      this.setState({
        currentUploads: {
          ...this.getState().currentUploads,
          [uploadID]: {
            ...currentUpload,
            step
          }
        }
      });
      const {
        fileIDs
      } = currentUpload;
      await fn(fileIDs, uploadID);
      currentUpload = getCurrentUpload();
    }
  } catch (err) {
    _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
    throw err;
  }
  if (currentUpload) {
    currentUpload.fileIDs.forEach((fileID) => {
      const file = this.getFile(fileID);
      if (file && file.progress.postprocess) {
        this.emit("postprocess-complete", file);
      }
    });
    const files = currentUpload.fileIDs.map((fileID) => this.getFile(fileID));
    const successful = files.filter((file) => !file.error);
    const failed = files.filter((file) => file.error);
    this.addResultData(uploadID, {
      successful,
      failed,
      uploadID
    });
    currentUpload = getCurrentUpload();
  }
  let result;
  if (currentUpload) {
    result = currentUpload.result;
    _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
  }
  if (result == null) {
    this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
    result = {
      successful: [],
      failed: [],
      uploadID
    };
  }
  return result;
}
Uppy.VERSION = packageJson2.version;
var Uppy_default = Uppy;

// node_modules/preact/src/constants.js
var MODE_HYDRATE = 1 << 5;
var MODE_SUSPENDED = 1 << 7;
var INSERT_VNODE = 1 << 2;
var MATCHED = 1 << 1;
var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
var XHTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
var NULL = null;
var UNDEFINED = void 0;
var EMPTY_OBJ = (
  /** @type {any} */
  {}
);
var EMPTY_ARR = [];
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

// node_modules/preact/src/util.js
var isArray = Array.isArray;
function assign(obj, props) {
  for (let i in props) obj[i] = props[i];
  return (
    /** @type {O & P} */
    obj
  );
}
function removeNode(node2) {
  if (node2 && node2.parentNode) node2.parentNode.removeChild(node2);
}
var slice = EMPTY_ARR.slice;

// node_modules/preact/src/diff/catch-error.js
function _catchError(error, vnode, oldVNode, errorInfo) {
  let component, ctor, handled;
  for (; vnode = vnode._parent; ) {
    if ((component = vnode._component) && !component._processingException) {
      try {
        ctor = component.constructor;
        if (ctor && ctor.getDerivedStateFromError != NULL) {
          component.setState(ctor.getDerivedStateFromError(error));
          handled = component._dirty;
        }
        if (component.componentDidCatch != NULL) {
          component.componentDidCatch(error, errorInfo || {});
          handled = component._dirty;
        }
        if (handled) {
          return component._pendingError = component;
        }
      } catch (e) {
        error = e;
      }
    }
  }
  throw error;
}

// node_modules/preact/src/options.js
var options = {
  _catchError
};
var options_default = options;

// node_modules/preact/src/create-element.js
var vnodeId = 0;
function createElement(type, props, children) {
  let normalizedProps = {}, key, ref, i;
  for (i in props) {
    if (i == "key") key = props[i];
    else if (i == "ref") ref = props[i];
    else normalizedProps[i] = props[i];
  }
  if (arguments.length > 2) {
    normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
  }
  if (typeof type == "function" && type.defaultProps != NULL) {
    for (i in type.defaultProps) {
      if (normalizedProps[i] === UNDEFINED) {
        normalizedProps[i] = type.defaultProps[i];
      }
    }
  }
  return createVNode(type, normalizedProps, key, ref, NULL);
}
function createVNode(type, props, key, ref, original) {
  const vnode = {
    type,
    props,
    key,
    ref,
    _children: NULL,
    _parent: NULL,
    _depth: 0,
    _dom: NULL,
    _component: NULL,
    constructor: UNDEFINED,
    _original: original == NULL ? ++vnodeId : original,
    _index: -1,
    _flags: 0
  };
  if (original == NULL && options_default.vnode != NULL) options_default.vnode(vnode);
  return vnode;
}
function createRef() {
  return { current: NULL };
}
function Fragment2(props) {
  return props.children;
}

// node_modules/preact/src/component.js
function BaseComponent(props, context) {
  this.props = props;
  this.context = context;
}
BaseComponent.prototype.setState = function(update, callback) {
  let s;
  if (this._nextState != NULL && this._nextState != this.state) {
    s = this._nextState;
  } else {
    s = this._nextState = assign({}, this.state);
  }
  if (typeof update == "function") {
    update = update(assign({}, s), this.props);
  }
  if (update) {
    assign(s, update);
  }
  if (update == NULL) return;
  if (this._vnode) {
    if (callback) {
      this._stateCallbacks.push(callback);
    }
    enqueueRender(this);
  }
};
BaseComponent.prototype.forceUpdate = function(callback) {
  if (this._vnode) {
    this._force = true;
    if (callback) this._renderCallbacks.push(callback);
    enqueueRender(this);
  }
};
BaseComponent.prototype.render = Fragment2;
function getDomSibling(vnode, childIndex) {
  if (childIndex == NULL) {
    return vnode._parent ? getDomSibling(vnode._parent, vnode._index + 1) : NULL;
  }
  let sibling;
  for (; childIndex < vnode._children.length; childIndex++) {
    sibling = vnode._children[childIndex];
    if (sibling != NULL && sibling._dom != NULL) {
      return sibling._dom;
    }
  }
  return typeof vnode.type == "function" ? getDomSibling(vnode) : NULL;
}
function renderComponent(component) {
  let oldVNode = component._vnode, oldDom = oldVNode._dom, commitQueue = [], refQueue = [];
  if (component._parentDom) {
    const newVNode = assign({}, oldVNode);
    newVNode._original = oldVNode._original + 1;
    if (options_default.vnode) options_default.vnode(newVNode);
    diff(
      component._parentDom,
      newVNode,
      oldVNode,
      component._globalContext,
      component._parentDom.namespaceURI,
      oldVNode._flags & MODE_HYDRATE ? [oldDom] : NULL,
      commitQueue,
      oldDom == NULL ? getDomSibling(oldVNode) : oldDom,
      !!(oldVNode._flags & MODE_HYDRATE),
      refQueue
    );
    newVNode._original = oldVNode._original;
    newVNode._parent._children[newVNode._index] = newVNode;
    commitRoot(commitQueue, newVNode, refQueue);
    if (newVNode._dom != oldDom) {
      updateParentDomPointers(newVNode);
    }
  }
}
function updateParentDomPointers(vnode) {
  if ((vnode = vnode._parent) != NULL && vnode._component != NULL) {
    vnode._dom = vnode._component.base = NULL;
    for (let i = 0; i < vnode._children.length; i++) {
      let child = vnode._children[i];
      if (child != NULL && child._dom != NULL) {
        vnode._dom = vnode._component.base = child._dom;
        break;
      }
    }
    return updateParentDomPointers(vnode);
  }
}
var rerenderQueue = [];
var prevDebounce;
var defer = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function enqueueRender(c) {
  if (!c._dirty && (c._dirty = true) && rerenderQueue.push(c) && !process2._rerenderCount++ || prevDebounce != options_default.debounceRendering) {
    prevDebounce = options_default.debounceRendering;
    (prevDebounce || defer)(process2);
  }
}
var depthSort = (a, b) => a._vnode._depth - b._vnode._depth;
function process2() {
  let c, l = 1;
  while (rerenderQueue.length) {
    if (rerenderQueue.length > l) {
      rerenderQueue.sort(depthSort);
    }
    c = rerenderQueue.shift();
    l = rerenderQueue.length;
    if (c._dirty) {
      renderComponent(c);
    }
  }
  process2._rerenderCount = 0;
}
process2._rerenderCount = 0;

// node_modules/preact/src/diff/children.js
function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
  let i, oldVNode, childVNode, newDom, firstChildDom;
  let oldChildren = oldParentVNode && oldParentVNode._children || EMPTY_ARR;
  let newChildrenLength = renderResult.length;
  oldDom = constructNewChildrenArray(
    newParentVNode,
    renderResult,
    oldChildren,
    oldDom,
    newChildrenLength
  );
  for (i = 0; i < newChildrenLength; i++) {
    childVNode = newParentVNode._children[i];
    if (childVNode == NULL) continue;
    if (childVNode._index == -1) {
      oldVNode = EMPTY_OBJ;
    } else {
      oldVNode = oldChildren[childVNode._index] || EMPTY_OBJ;
    }
    childVNode._index = i;
    let result = diff(
      parentDom,
      childVNode,
      oldVNode,
      globalContext,
      namespace,
      excessDomChildren,
      commitQueue,
      oldDom,
      isHydrating,
      refQueue
    );
    newDom = childVNode._dom;
    if (childVNode.ref && oldVNode.ref != childVNode.ref) {
      if (oldVNode.ref) {
        applyRef(oldVNode.ref, NULL, childVNode);
      }
      refQueue.push(
        childVNode.ref,
        childVNode._component || newDom,
        childVNode
      );
    }
    if (firstChildDom == NULL && newDom != NULL) {
      firstChildDom = newDom;
    }
    if (childVNode._flags & INSERT_VNODE || oldVNode._children === childVNode._children) {
      oldDom = insert(childVNode, oldDom, parentDom);
    } else if (typeof childVNode.type == "function" && result !== UNDEFINED) {
      oldDom = result;
    } else if (newDom) {
      oldDom = newDom.nextSibling;
    }
    childVNode._flags &= ~(INSERT_VNODE | MATCHED);
  }
  newParentVNode._dom = firstChildDom;
  return oldDom;
}
function constructNewChildrenArray(newParentVNode, renderResult, oldChildren, oldDom, newChildrenLength) {
  let i;
  let childVNode;
  let oldVNode;
  let oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
  let skew = 0;
  newParentVNode._children = new Array(newChildrenLength);
  for (i = 0; i < newChildrenLength; i++) {
    childVNode = renderResult[i];
    if (childVNode == NULL || typeof childVNode == "boolean" || typeof childVNode == "function") {
      newParentVNode._children[i] = NULL;
      continue;
    } else if (typeof childVNode == "string" || typeof childVNode == "number" || // eslint-disable-next-line valid-typeof
    typeof childVNode == "bigint" || childVNode.constructor == String) {
      childVNode = newParentVNode._children[i] = createVNode(
        NULL,
        childVNode,
        NULL,
        NULL,
        NULL
      );
    } else if (isArray(childVNode)) {
      childVNode = newParentVNode._children[i] = createVNode(
        Fragment2,
        { children: childVNode },
        NULL,
        NULL,
        NULL
      );
    } else if (childVNode.constructor == UNDEFINED && childVNode._depth > 0) {
      childVNode = newParentVNode._children[i] = createVNode(
        childVNode.type,
        childVNode.props,
        childVNode.key,
        childVNode.ref ? childVNode.ref : NULL,
        childVNode._original
      );
    } else {
      childVNode = newParentVNode._children[i] = childVNode;
    }
    const skewedIndex = i + skew;
    childVNode._parent = newParentVNode;
    childVNode._depth = newParentVNode._depth + 1;
    const matchingIndex = childVNode._index = findMatchingIndex(
      childVNode,
      oldChildren,
      skewedIndex,
      remainingOldChildren
    );
    oldVNode = NULL;
    if (matchingIndex != -1) {
      oldVNode = oldChildren[matchingIndex];
      remainingOldChildren--;
      if (oldVNode) {
        oldVNode._flags |= MATCHED;
      }
    }
    const isMounting = oldVNode == NULL || oldVNode._original == NULL;
    if (isMounting) {
      if (matchingIndex == -1) {
        if (newChildrenLength > oldChildrenLength) {
          skew--;
        } else if (newChildrenLength < oldChildrenLength) {
          skew++;
        }
      }
      if (typeof childVNode.type != "function") {
        childVNode._flags |= INSERT_VNODE;
      }
    } else if (matchingIndex != skewedIndex) {
      if (matchingIndex == skewedIndex - 1) {
        skew--;
      } else if (matchingIndex == skewedIndex + 1) {
        skew++;
      } else {
        if (matchingIndex > skewedIndex) {
          skew--;
        } else {
          skew++;
        }
        childVNode._flags |= INSERT_VNODE;
      }
    }
  }
  if (remainingOldChildren) {
    for (i = 0; i < oldChildrenLength; i++) {
      oldVNode = oldChildren[i];
      if (oldVNode != NULL && (oldVNode._flags & MATCHED) == 0) {
        if (oldVNode._dom == oldDom) {
          oldDom = getDomSibling(oldVNode);
        }
        unmount(oldVNode, oldVNode);
      }
    }
  }
  return oldDom;
}
function insert(parentVNode, oldDom, parentDom) {
  if (typeof parentVNode.type == "function") {
    let children = parentVNode._children;
    for (let i = 0; children && i < children.length; i++) {
      if (children[i]) {
        children[i]._parent = parentVNode;
        oldDom = insert(children[i], oldDom, parentDom);
      }
    }
    return oldDom;
  } else if (parentVNode._dom != oldDom) {
    if (oldDom && parentVNode.type && !parentDom.contains(oldDom)) {
      oldDom = getDomSibling(parentVNode);
    }
    parentDom.insertBefore(parentVNode._dom, oldDom || NULL);
    oldDom = parentVNode._dom;
  }
  do {
    oldDom = oldDom && oldDom.nextSibling;
  } while (oldDom != NULL && oldDom.nodeType == 8);
  return oldDom;
}
function toChildArray(children, out) {
  out = out || [];
  if (children == NULL || typeof children == "boolean") {
  } else if (isArray(children)) {
    children.some((child) => {
      toChildArray(child, out);
    });
  } else {
    out.push(children);
  }
  return out;
}
function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
  const key = childVNode.key;
  const type = childVNode.type;
  let oldVNode = oldChildren[skewedIndex];
  let shouldSearch = (
    // (typeof type != 'function' || type === Fragment || key) &&
    remainingOldChildren > (oldVNode != NULL && (oldVNode._flags & MATCHED) == 0 ? 1 : 0)
  );
  if (oldVNode === NULL && childVNode.key == null || oldVNode && key == oldVNode.key && type == oldVNode.type && (oldVNode._flags & MATCHED) == 0) {
    return skewedIndex;
  } else if (shouldSearch) {
    let x = skewedIndex - 1;
    let y = skewedIndex + 1;
    while (x >= 0 || y < oldChildren.length) {
      if (x >= 0) {
        oldVNode = oldChildren[x];
        if (oldVNode && (oldVNode._flags & MATCHED) == 0 && key == oldVNode.key && type == oldVNode.type) {
          return x;
        }
        x--;
      }
      if (y < oldChildren.length) {
        oldVNode = oldChildren[y];
        if (oldVNode && (oldVNode._flags & MATCHED) == 0 && key == oldVNode.key && type == oldVNode.type) {
          return y;
        }
        y++;
      }
    }
  }
  return -1;
}

// node_modules/preact/src/diff/props.js
function setStyle(style, key, value) {
  if (key[0] == "-") {
    style.setProperty(key, value == NULL ? "" : value);
  } else if (value == NULL) {
    style[key] = "";
  } else if (typeof value != "number" || IS_NON_DIMENSIONAL.test(key)) {
    style[key] = value;
  } else {
    style[key] = value + "px";
  }
}
var CAPTURE_REGEX = /(PointerCapture)$|Capture$/i;
var eventClock = 0;
function setProperty(dom, name, value, oldValue, namespace) {
  let useCapture;
  o: if (name == "style") {
    if (typeof value == "string") {
      dom.style.cssText = value;
    } else {
      if (typeof oldValue == "string") {
        dom.style.cssText = oldValue = "";
      }
      if (oldValue) {
        for (name in oldValue) {
          if (!(value && name in value)) {
            setStyle(dom.style, name, "");
          }
        }
      }
      if (value) {
        for (name in value) {
          if (!oldValue || value[name] != oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  } else if (name[0] == "o" && name[1] == "n") {
    useCapture = name != (name = name.replace(CAPTURE_REGEX, "$1"));
    const lowerCaseName = name.toLowerCase();
    if (lowerCaseName in dom || name == "onFocusOut" || name == "onFocusIn")
      name = lowerCaseName.slice(2);
    else name = name.slice(2);
    if (!dom._listeners) dom._listeners = {};
    dom._listeners[name + useCapture] = value;
    if (value) {
      if (!oldValue) {
        value._attached = eventClock;
        dom.addEventListener(
          name,
          useCapture ? eventProxyCapture : eventProxy,
          useCapture
        );
      } else {
        value._attached = oldValue._attached;
      }
    } else {
      dom.removeEventListener(
        name,
        useCapture ? eventProxyCapture : eventProxy,
        useCapture
      );
    }
  } else {
    if (namespace == SVG_NAMESPACE) {
      name = name.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    } else if (name != "width" && name != "height" && name != "href" && name != "list" && name != "form" && // Default value in browsers is `-1` and an empty string is
    // cast to `0` instead
    name != "tabIndex" && name != "download" && name != "rowSpan" && name != "colSpan" && name != "role" && name != "popover" && name in dom) {
      try {
        dom[name] = value == NULL ? "" : value;
        break o;
      } catch (e) {
      }
    }
    if (typeof value == "function") {
    } else if (value != NULL && (value !== false || name[4] == "-")) {
      dom.setAttribute(name, name == "popover" && value == true ? "" : value);
    } else {
      dom.removeAttribute(name);
    }
  }
}
function createEventProxy(useCapture) {
  return function(e) {
    if (this._listeners) {
      const eventHandler = this._listeners[e.type + useCapture];
      if (e._dispatched == NULL) {
        e._dispatched = eventClock++;
      } else if (e._dispatched < eventHandler._attached) {
        return;
      }
      return eventHandler(options_default.event ? options_default.event(e) : e);
    }
  };
}
var eventProxy = createEventProxy(false);
var eventProxyCapture = createEventProxy(true);

// node_modules/preact/src/diff/index.js
function diff(parentDom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
  let tmp, newType = newVNode.type;
  if (newVNode.constructor != UNDEFINED) return NULL;
  if (oldVNode._flags & MODE_SUSPENDED) {
    isHydrating = !!(oldVNode._flags & MODE_HYDRATE);
    oldDom = newVNode._dom = oldVNode._dom;
    excessDomChildren = [oldDom];
  }
  if (tmp = options_default._diff) tmp(newVNode);
  outer: if (typeof newType == "function") {
    try {
      let c, isNew, oldProps, oldState, snapshot, clearProcessingException;
      let newProps = newVNode.props;
      const isClassComponent = "prototype" in newType && newType.prototype.render;
      tmp = newType.contextType;
      let provider = tmp && globalContext[tmp._id];
      let componentContext = tmp ? provider ? provider.props.value : tmp._defaultValue : globalContext;
      if (oldVNode._component) {
        c = newVNode._component = oldVNode._component;
        clearProcessingException = c._processingException = c._pendingError;
      } else {
        if (isClassComponent) {
          newVNode._component = c = new newType(newProps, componentContext);
        } else {
          newVNode._component = c = new BaseComponent(
            newProps,
            componentContext
          );
          c.constructor = newType;
          c.render = doRender;
        }
        if (provider) provider.sub(c);
        c.props = newProps;
        if (!c.state) c.state = {};
        c.context = componentContext;
        c._globalContext = globalContext;
        isNew = c._dirty = true;
        c._renderCallbacks = [];
        c._stateCallbacks = [];
      }
      if (isClassComponent && c._nextState == NULL) {
        c._nextState = c.state;
      }
      if (isClassComponent && newType.getDerivedStateFromProps != NULL) {
        if (c._nextState == c.state) {
          c._nextState = assign({}, c._nextState);
        }
        assign(
          c._nextState,
          newType.getDerivedStateFromProps(newProps, c._nextState)
        );
      }
      oldProps = c.props;
      oldState = c.state;
      c._vnode = newVNode;
      if (isNew) {
        if (isClassComponent && newType.getDerivedStateFromProps == NULL && c.componentWillMount != NULL) {
          c.componentWillMount();
        }
        if (isClassComponent && c.componentDidMount != NULL) {
          c._renderCallbacks.push(c.componentDidMount);
        }
      } else {
        if (isClassComponent && newType.getDerivedStateFromProps == NULL && newProps !== oldProps && c.componentWillReceiveProps != NULL) {
          c.componentWillReceiveProps(newProps, componentContext);
        }
        if (!c._force && c.shouldComponentUpdate != NULL && c.shouldComponentUpdate(
          newProps,
          c._nextState,
          componentContext
        ) === false || newVNode._original == oldVNode._original) {
          if (newVNode._original != oldVNode._original) {
            c.props = newProps;
            c.state = c._nextState;
            c._dirty = false;
          }
          newVNode._dom = oldVNode._dom;
          newVNode._children = oldVNode._children;
          newVNode._children.some((vnode) => {
            if (vnode) vnode._parent = newVNode;
          });
          for (let i = 0; i < c._stateCallbacks.length; i++) {
            c._renderCallbacks.push(c._stateCallbacks[i]);
          }
          c._stateCallbacks = [];
          if (c._renderCallbacks.length) {
            commitQueue.push(c);
          }
          break outer;
        }
        if (c.componentWillUpdate != NULL) {
          c.componentWillUpdate(newProps, c._nextState, componentContext);
        }
        if (isClassComponent && c.componentDidUpdate != NULL) {
          c._renderCallbacks.push(() => {
            c.componentDidUpdate(oldProps, oldState, snapshot);
          });
        }
      }
      c.context = componentContext;
      c.props = newProps;
      c._parentDom = parentDom;
      c._force = false;
      let renderHook = options_default._render, count = 0;
      if (isClassComponent) {
        c.state = c._nextState;
        c._dirty = false;
        if (renderHook) renderHook(newVNode);
        tmp = c.render(c.props, c.state, c.context);
        for (let i = 0; i < c._stateCallbacks.length; i++) {
          c._renderCallbacks.push(c._stateCallbacks[i]);
        }
        c._stateCallbacks = [];
      } else {
        do {
          c._dirty = false;
          if (renderHook) renderHook(newVNode);
          tmp = c.render(c.props, c.state, c.context);
          c.state = c._nextState;
        } while (c._dirty && ++count < 25);
      }
      c.state = c._nextState;
      if (c.getChildContext != NULL) {
        globalContext = assign(assign({}, globalContext), c.getChildContext());
      }
      if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != NULL) {
        snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
      }
      let isTopLevelFragment = tmp != NULL && tmp.type === Fragment2 && tmp.key == NULL;
      let renderResult = tmp;
      if (isTopLevelFragment) {
        renderResult = cloneNode(tmp.props.children);
      }
      oldDom = diffChildren(
        parentDom,
        isArray(renderResult) ? renderResult : [renderResult],
        newVNode,
        oldVNode,
        globalContext,
        namespace,
        excessDomChildren,
        commitQueue,
        oldDom,
        isHydrating,
        refQueue
      );
      c.base = newVNode._dom;
      newVNode._flags &= RESET_MODE;
      if (c._renderCallbacks.length) {
        commitQueue.push(c);
      }
      if (clearProcessingException) {
        c._pendingError = c._processingException = NULL;
      }
    } catch (e) {
      newVNode._original = NULL;
      if (isHydrating || excessDomChildren != NULL) {
        if (e.then) {
          newVNode._flags |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_SUSPENDED;
          while (oldDom && oldDom.nodeType == 8 && oldDom.nextSibling) {
            oldDom = oldDom.nextSibling;
          }
          excessDomChildren[excessDomChildren.indexOf(oldDom)] = NULL;
          newVNode._dom = oldDom;
        } else {
          for (let i = excessDomChildren.length; i--; ) {
            removeNode(excessDomChildren[i]);
          }
        }
      } else {
        newVNode._dom = oldVNode._dom;
        newVNode._children = oldVNode._children;
      }
      options_default._catchError(e, newVNode, oldVNode);
    }
  } else if (excessDomChildren == NULL && newVNode._original == oldVNode._original) {
    newVNode._children = oldVNode._children;
    newVNode._dom = oldVNode._dom;
  } else {
    oldDom = newVNode._dom = diffElementNodes(
      oldVNode._dom,
      newVNode,
      oldVNode,
      globalContext,
      namespace,
      excessDomChildren,
      commitQueue,
      isHydrating,
      refQueue
    );
  }
  if (tmp = options_default.diffed) tmp(newVNode);
  return newVNode._flags & MODE_SUSPENDED ? void 0 : oldDom;
}
function commitRoot(commitQueue, root, refQueue) {
  for (let i = 0; i < refQueue.length; i++) {
    applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
  }
  if (options_default._commit) options_default._commit(root, commitQueue);
  commitQueue.some((c) => {
    try {
      commitQueue = c._renderCallbacks;
      c._renderCallbacks = [];
      commitQueue.some((cb) => {
        cb.call(c);
      });
    } catch (e) {
      options_default._catchError(e, c._vnode);
    }
  });
}
function cloneNode(node2) {
  if (typeof node2 != "object" || node2 == NULL || node2._depth && node2._depth > 0) {
    return node2;
  }
  if (isArray(node2)) {
    return node2.map(cloneNode);
  }
  return assign({}, node2);
}
function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue) {
  let oldProps = oldVNode.props;
  let newProps = newVNode.props;
  let nodeType = (
    /** @type {string} */
    newVNode.type
  );
  let i;
  let newHtml;
  let oldHtml;
  let newChildren;
  let value;
  let inputValue;
  let checked;
  if (nodeType == "svg") namespace = SVG_NAMESPACE;
  else if (nodeType == "math") namespace = MATH_NAMESPACE;
  else if (!namespace) namespace = XHTML_NAMESPACE;
  if (excessDomChildren != NULL) {
    for (i = 0; i < excessDomChildren.length; i++) {
      value = excessDomChildren[i];
      if (value && "setAttribute" in value == !!nodeType && (nodeType ? value.localName == nodeType : value.nodeType == 3)) {
        dom = value;
        excessDomChildren[i] = NULL;
        break;
      }
    }
  }
  if (dom == NULL) {
    if (nodeType == NULL) {
      return document.createTextNode(newProps);
    }
    dom = document.createElementNS(
      namespace,
      nodeType,
      newProps.is && newProps
    );
    if (isHydrating) {
      if (options_default._hydrationMismatch)
        options_default._hydrationMismatch(newVNode, excessDomChildren);
      isHydrating = false;
    }
    excessDomChildren = NULL;
  }
  if (nodeType == NULL) {
    if (oldProps !== newProps && (!isHydrating || dom.data != newProps)) {
      dom.data = newProps;
    }
  } else {
    excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
    oldProps = oldVNode.props || EMPTY_OBJ;
    if (!isHydrating && excessDomChildren != NULL) {
      oldProps = {};
      for (i = 0; i < dom.attributes.length; i++) {
        value = dom.attributes[i];
        oldProps[value.name] = value.value;
      }
    }
    for (i in oldProps) {
      value = oldProps[i];
      if (i == "children") {
      } else if (i == "dangerouslySetInnerHTML") {
        oldHtml = value;
      } else if (!(i in newProps)) {
        if (i == "value" && "defaultValue" in newProps || i == "checked" && "defaultChecked" in newProps) {
          continue;
        }
        setProperty(dom, i, NULL, value, namespace);
      }
    }
    for (i in newProps) {
      value = newProps[i];
      if (i == "children") {
        newChildren = value;
      } else if (i == "dangerouslySetInnerHTML") {
        newHtml = value;
      } else if (i == "value") {
        inputValue = value;
      } else if (i == "checked") {
        checked = value;
      } else if ((!isHydrating || typeof value == "function") && oldProps[i] !== value) {
        setProperty(dom, i, value, oldProps[i], namespace);
      }
    }
    if (newHtml) {
      if (!isHydrating && (!oldHtml || newHtml.__html != oldHtml.__html && newHtml.__html != dom.innerHTML)) {
        dom.innerHTML = newHtml.__html;
      }
      newVNode._children = [];
    } else {
      if (oldHtml) dom.innerHTML = "";
      diffChildren(
        // @ts-expect-error
        newVNode.type == "template" ? dom.content : dom,
        isArray(newChildren) ? newChildren : [newChildren],
        newVNode,
        oldVNode,
        globalContext,
        nodeType == "foreignObject" ? XHTML_NAMESPACE : namespace,
        excessDomChildren,
        commitQueue,
        excessDomChildren ? excessDomChildren[0] : oldVNode._children && getDomSibling(oldVNode, 0),
        isHydrating,
        refQueue
      );
      if (excessDomChildren != NULL) {
        for (i = excessDomChildren.length; i--; ) {
          removeNode(excessDomChildren[i]);
        }
      }
    }
    if (!isHydrating) {
      i = "value";
      if (nodeType == "progress" && inputValue == NULL) {
        dom.removeAttribute("value");
      } else if (inputValue != UNDEFINED && // #2756 For the <progress>-element the initial value is 0,
      // despite the attribute not being present. When the attribute
      // is missing the progress bar is treated as indeterminate.
      // To fix that we'll always update it when it is 0 for progress elements
      (inputValue !== dom[i] || nodeType == "progress" && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
      // To avoid a stale select value we need to set the option.value
      // again, which triggers IE11 to re-evaluate the select value
      nodeType == "option" && inputValue != oldProps[i])) {
        setProperty(dom, i, inputValue, oldProps[i], namespace);
      }
      i = "checked";
      if (checked != UNDEFINED && checked != dom[i]) {
        setProperty(dom, i, checked, oldProps[i], namespace);
      }
    }
  }
  return dom;
}
function applyRef(ref, value, vnode) {
  try {
    if (typeof ref == "function") {
      let hasRefUnmount = typeof ref._unmount == "function";
      if (hasRefUnmount) {
        ref._unmount();
      }
      if (!hasRefUnmount || value != NULL) {
        ref._unmount = ref(value);
      }
    } else ref.current = value;
  } catch (e) {
    options_default._catchError(e, vnode);
  }
}
function unmount(vnode, parentVNode, skipRemove) {
  let r;
  if (options_default.unmount) options_default.unmount(vnode);
  if (r = vnode.ref) {
    if (!r.current || r.current == vnode._dom) {
      applyRef(r, NULL, parentVNode);
    }
  }
  if ((r = vnode._component) != NULL) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (e) {
        options_default._catchError(e, parentVNode);
      }
    }
    r.base = r._parentDom = NULL;
  }
  if (r = vnode._children) {
    for (let i = 0; i < r.length; i++) {
      if (r[i]) {
        unmount(
          r[i],
          parentVNode,
          skipRemove || typeof vnode.type != "function"
        );
      }
    }
  }
  if (!skipRemove) {
    removeNode(vnode._dom);
  }
  vnode._component = vnode._parent = vnode._dom = UNDEFINED;
}
function doRender(props, state, context) {
  return this.constructor(props, context);
}

// node_modules/preact/src/render.js
function render(vnode, parentDom, replaceNode) {
  if (parentDom == document) {
    parentDom = document.documentElement;
  }
  if (options_default._root) options_default._root(vnode, parentDom);
  let isHydrating = typeof replaceNode == "function";
  let oldVNode = isHydrating ? NULL : replaceNode && replaceNode._children || parentDom._children;
  vnode = (!isHydrating && replaceNode || parentDom)._children = createElement(Fragment2, NULL, [vnode]);
  let commitQueue = [], refQueue = [];
  diff(
    parentDom,
    // Determine the new vnode tree and store it on the DOM element on
    // our custom `_children` property.
    vnode,
    oldVNode || EMPTY_OBJ,
    EMPTY_OBJ,
    parentDom.namespaceURI,
    !isHydrating && replaceNode ? [replaceNode] : oldVNode ? NULL : parentDom.firstChild ? slice.call(parentDom.childNodes) : NULL,
    commitQueue,
    !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode._dom : parentDom.firstChild,
    isHydrating,
    refQueue
  );
  commitRoot(commitQueue, vnode, refQueue);
}

// node_modules/preact/src/clone-element.js
function cloneElement(vnode, props, children) {
  let normalizedProps = assign({}, vnode.props), key, ref, i;
  let defaultProps;
  if (vnode.type && vnode.type.defaultProps) {
    defaultProps = vnode.type.defaultProps;
  }
  for (i in props) {
    if (i == "key") key = props[i];
    else if (i == "ref") ref = props[i];
    else if (props[i] === UNDEFINED && defaultProps != UNDEFINED) {
      normalizedProps[i] = defaultProps[i];
    } else {
      normalizedProps[i] = props[i];
    }
  }
  if (arguments.length > 2) {
    normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
  }
  return createVNode(
    vnode.type,
    normalizedProps,
    key || vnode.key,
    ref || vnode.ref,
    NULL
  );
}

// node_modules/@uppy/utils/lib/isDOMElement.js
function isDOMElement(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  if (!("nodeType" in obj)) return false;
  return obj.nodeType === Node.ELEMENT_NODE;
}

// node_modules/@uppy/utils/lib/findDOMElement.js
function findDOMElement(element, context) {
  if (context === void 0) {
    context = document;
  }
  if (typeof element === "string") {
    return context.querySelector(element);
  }
  if (isDOMElement(element)) {
    return element;
  }
  return null;
}
var findDOMElement_default = findDOMElement;

// node_modules/@uppy/utils/lib/getTextDirection.js
function getTextDirection(element) {
  var _element;
  while (element && !element.dir) {
    element = element.parentNode;
  }
  return (_element = element) == null ? void 0 : _element.dir;
}
var getTextDirection_default = getTextDirection;

// node_modules/@uppy/core/lib/BasePlugin.js
var BasePlugin = class {
  constructor(uppy2, opts) {
    this.uppy = uppy2;
    this.opts = opts != null ? opts : {};
  }
  getPluginState() {
    const {
      plugins
    } = this.uppy.getState();
    return (plugins == null ? void 0 : plugins[this.id]) || {};
  }
  setPluginState(update) {
    const {
      plugins
    } = this.uppy.getState();
    this.uppy.setState({
      plugins: {
        ...plugins,
        [this.id]: {
          ...plugins[this.id],
          ...update
        }
      }
    });
  }
  setOptions(newOpts) {
    this.opts = {
      ...this.opts,
      ...newOpts
    };
    this.setPluginState(void 0);
    this.i18nInit();
  }
  i18nInit() {
    const translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = translator.translate.bind(translator);
    this.i18nArray = translator.translateArray.bind(translator);
    this.setPluginState(void 0);
  }
  /**
   * Extendable methods
   * ==================
   * These methods are here to serve as an overview of the extendable methods as well as
   * making them not conditional in use, such as `if (this.afterUpdate)`.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addTarget(plugin) {
    throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
  }
  install() {
  }
  uninstall() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(state) {
  }
  // Called after every state update, after everything's mounted. Debounced.
  afterUpdate() {
  }
};

// node_modules/@uppy/core/lib/UIPlugin.js
function _classPrivateFieldLooseBase4(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id4 = 0;
function _classPrivateFieldLooseKey4(e) {
  return "__private_" + id4++ + "_" + e;
}
function debounce(fn) {
  let calling = null;
  let latestArgs;
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(() => {
        calling = null;
        return fn(...latestArgs);
      });
    }
    return calling;
  };
}
var _updateUI = /* @__PURE__ */ _classPrivateFieldLooseKey4("updateUI");
var UIPlugin = class _UIPlugin extends BasePlugin {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, _updateUI, {
      writable: true,
      value: void 0
    });
  }
  getTargetPlugin(target) {
    let targetPlugin;
    if (typeof (target == null ? void 0 : target.addTarget) === "function") {
      targetPlugin = target;
      if (!(targetPlugin instanceof _UIPlugin)) {
        console.warn(new Error("The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.", {
          cause: {
            targetPlugin,
            UIPlugin: _UIPlugin
          }
        }));
      }
    } else if (typeof target === "function") {
      const Target = target;
      this.uppy.iteratePlugins((p) => {
        if (p instanceof Target) {
          targetPlugin = p;
        }
      });
    }
    return targetPlugin;
  }
  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   */
  mount(target, plugin) {
    const callerPluginName = plugin.id;
    const targetElement = findDOMElement_default(target);
    if (targetElement) {
      this.isTargetDOMEl = true;
      const uppyRootElement = document.createElement("div");
      uppyRootElement.classList.add("uppy-Root");
      _classPrivateFieldLooseBase4(this, _updateUI)[_updateUI] = debounce((state) => {
        if (!this.uppy.getPlugin(this.id)) return;
        render(this.render(state, uppyRootElement), uppyRootElement);
        this.afterUpdate();
      });
      this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = "";
      }
      render(this.render(this.uppy.getState(), uppyRootElement), uppyRootElement);
      this.el = uppyRootElement;
      targetElement.appendChild(uppyRootElement);
      uppyRootElement.dir = this.opts.direction || getTextDirection_default(uppyRootElement) || "ltr";
      this.onMount();
      return this.el;
    }
    const targetPlugin = this.getTargetPlugin(target);
    if (targetPlugin) {
      this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
      return this.el;
    }
    this.uppy.log(`Not installing ${callerPluginName}`);
    let message = `Invalid target option given to ${callerPluginName}.`;
    if (typeof target === "function") {
      message += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.";
    } else {
      message += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.";
    }
    throw new Error(message);
  }
  /**
   * Called when plugin is mounted, whether in DOM or into another plugin.
   * Needed because sometimes plugins are mounted separately/after `install`,
   * so this.el and this.parent might not be available in `install`.
   * This is the case with @uppy/react plugins, for example.
   */
  render(state, container) {
    throw new Error("Extend the render method to add your plugin to a DOM element");
  }
  update(state) {
    if (this.el != null) {
      var _classPrivateFieldLoo, _classPrivateFieldLoo2;
      (_classPrivateFieldLoo = (_classPrivateFieldLoo2 = _classPrivateFieldLooseBase4(this, _updateUI))[_updateUI]) == null || _classPrivateFieldLoo.call(_classPrivateFieldLoo2, state);
    }
  }
  unmount() {
    if (this.isTargetDOMEl) {
      var _this$el;
      (_this$el = this.el) == null || _this$el.remove();
    }
    this.onUnmount();
  }
  onMount() {
  }
  onUnmount() {
  }
};
var UIPlugin_default = UIPlugin;

// node_modules/@uppy/utils/lib/emaFilter.js
function emaFilter(newValue, previousSmoothedValue, halfLife, dt) {
  if (halfLife === 0 || newValue === previousSmoothedValue) return newValue;
  if (dt === 0) return previousSmoothedValue;
  return newValue + (previousSmoothedValue - newValue) * 2 ** (-dt / halfLife);
}

// node_modules/@uppy/status-bar/lib/StatusBarStates.js
var StatusBarStates_default = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete"
};

// node_modules/@uppy/status-bar/lib/StatusBarUI.js
var import_classnames2 = __toESM(require_classnames(), 1);

// node_modules/@uppy/status-bar/lib/calculateProcessingProgress.js
function calculateProcessingProgress(files) {
  const values = [];
  let mode = "indeterminate";
  let message;
  for (const {
    progress
  } of Object.values(files)) {
    const {
      preprocess,
      postprocess
    } = progress;
    if (message == null && (preprocess || postprocess)) {
      ;
      ({
        mode,
        message
      } = preprocess || postprocess);
    }
    if ((preprocess == null ? void 0 : preprocess.mode) === "determinate") values.push(preprocess.value);
    if ((postprocess == null ? void 0 : postprocess.mode) === "determinate") values.push(postprocess.value);
  }
  const value = values.reduce((total, progressValue) => {
    return total + progressValue / values.length;
  }, 0);
  return {
    mode,
    message,
    value
  };
}

// node_modules/@uppy/status-bar/lib/Components.js
var import_classnames = __toESM(require_classnames(), 1);
var import_prettier_bytes2 = __toESM(require_prettierBytes(), 1);

// node_modules/@uppy/utils/lib/secondsToTime.js
function secondsToTime(rawSeconds) {
  const hours = Math.floor(rawSeconds / 3600) % 24;
  const minutes = Math.floor(rawSeconds / 60) % 60;
  const seconds = Math.floor(rawSeconds % 60);
  return {
    hours,
    minutes,
    seconds
  };
}

// node_modules/@uppy/utils/lib/prettyETA.js
function prettyETA(seconds) {
  const time = secondsToTime(seconds);
  const hoursStr = time.hours === 0 ? "" : `${time.hours}h`;
  const minutesStr = time.minutes === 0 ? "" : `${time.hours === 0 ? time.minutes : ` ${time.minutes.toString(10).padStart(2, "0")}`}m`;
  const secondsStr = time.hours !== 0 ? "" : `${time.minutes === 0 ? time.seconds : ` ${time.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${hoursStr}${minutesStr}${secondsStr}`;
}

// node_modules/@uppy/status-bar/lib/Components.js
var DOT = `\xB7`;
var renderDot = () => ` ${DOT} `;
function UploadBtn(props) {
  const {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    uploadState,
    isSomeGhost,
    startUpload
  } = props;
  const uploadBtnClassNames = (0, import_classnames.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
    "uppy-c-btn-primary": uploadState === StatusBarStates_default.STATE_WAITING
  }, {
    "uppy-StatusBar-actionBtn--disabled": isSomeGhost
  });
  const uploadBtnText = newFiles && isUploadStarted && !recoveredState ? i18n("uploadXNewFiles", {
    smart_count: newFiles
  }) : i18n("uploadXFiles", {
    smart_count: newFiles
  });
  return createElement("button", {
    type: "button",
    className: uploadBtnClassNames,
    "aria-label": i18n("uploadXFiles", {
      smart_count: newFiles
    }),
    onClick: startUpload,
    disabled: isSomeGhost,
    "data-uppy-super-focusable": true
  }, uploadBtnText);
}
function RetryBtn(props) {
  const {
    i18n,
    uppy: uppy2
  } = props;
  return createElement("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": i18n("retryUpload"),
    onClick: () => uppy2.retryAll().catch(() => {
    }),
    "data-uppy-super-focusable": true,
    "data-cy": "retry"
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, createElement("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), i18n("retry"));
}
function CancelBtn(props) {
  const {
    i18n,
    uppy: uppy2
  } = props;
  return createElement("button", {
    type: "button",
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: i18n("cancel"),
    "aria-label": i18n("cancel"),
    onClick: () => uppy2.cancelAll(),
    "data-cy": "cancel",
    "data-uppy-super-focusable": true
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, createElement("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), createElement("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
}
function PauseResumeButton(props) {
  const {
    isAllPaused,
    i18n,
    isAllComplete,
    resumableUploads,
    uppy: uppy2
  } = props;
  const title = isAllPaused ? i18n("resume") : i18n("pause");
  function togglePauseResume() {
    if (isAllComplete) return;
    if (!resumableUploads) {
      uppy2.cancelAll();
      return;
    }
    if (isAllPaused) {
      uppy2.resumeAll();
      return;
    }
    uppy2.pauseAll();
  }
  return createElement("button", {
    title,
    "aria-label": title,
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onClick: togglePauseResume,
    "data-cy": "togglePauseResume",
    "data-uppy-super-focusable": true
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, createElement("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), createElement("path", {
    fill: "#FFF",
    d: isAllPaused ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
  }))));
}
function DoneBtn(props) {
  const {
    i18n,
    doneButtonHandler
  } = props;
  return createElement("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
    onClick: doneButtonHandler,
    "data-uppy-super-focusable": true
  }, i18n("done"));
}
function LoadingSpinner() {
  return createElement("svg", {
    className: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, createElement("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    fillRule: "evenodd"
  }));
}
function ProgressBarProcessing(props) {
  const {
    progress
  } = props;
  const {
    value,
    mode,
    message
  } = progress;
  const dot = `\xB7`;
  return createElement("div", {
    className: "uppy-StatusBar-content"
  }, createElement(LoadingSpinner, null), mode === "determinate" ? `${Math.round(value * 100)}% ${dot} ` : "", message);
}
function ProgressDetails(props) {
  const {
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    i18n
  } = props;
  const ifShowFilesUploadedOfTotal = numUploads > 1;
  const totalUploadedSizeStr = (0, import_prettier_bytes2.default)(totalUploadedSize);
  return createElement("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, ifShowFilesUploadedOfTotal && i18n("filesUploadedOfTotal", {
    complete,
    smart_count: numUploads
  }), createElement("span", {
    className: "uppy-StatusBar-additionalInfo"
  }, ifShowFilesUploadedOfTotal && renderDot(), totalSize != null ? i18n("dataUploadedOfTotal", {
    complete: totalUploadedSizeStr,
    total: (0, import_prettier_bytes2.default)(totalSize)
  }) : i18n("dataUploadedOfUnknown", {
    complete: totalUploadedSizeStr
  }), renderDot(), totalETA != null && i18n("xTimeLeft", {
    time: prettyETA(totalETA)
  })));
}
function FileUploadCount(props) {
  const {
    i18n,
    complete,
    numUploads
  } = props;
  return createElement("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, i18n("filesUploadedOfTotal", {
    complete,
    smart_count: numUploads
  }));
}
function UploadNewlyAddedFiles(props) {
  const {
    i18n,
    newFiles,
    startUpload
  } = props;
  const uploadBtnClassNames = (0, import_classnames.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
  return createElement("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, createElement("div", {
    className: "uppy-StatusBar-statusSecondaryHint"
  }, i18n("xMoreFilesAdded", {
    smart_count: newFiles
  })), createElement("button", {
    type: "button",
    className: uploadBtnClassNames,
    "aria-label": i18n("uploadXFiles", {
      smart_count: newFiles
    }),
    onClick: startUpload
  }, i18n("upload")));
}
function ProgressBarUploading(props) {
  const {
    i18n,
    supportsUploadProgress: supportsUploadProgress2,
    totalProgress,
    showProgressDetails,
    isUploadStarted,
    isAllComplete,
    isAllPaused,
    newFiles,
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    startUpload
  } = props;
  const showUploadNewlyAddedFiles = newFiles && isUploadStarted;
  if (!isUploadStarted || isAllComplete) {
    return null;
  }
  const title = isAllPaused ? i18n("paused") : i18n("uploading");
  function renderProgressDetails() {
    if (!isAllPaused && !showUploadNewlyAddedFiles && showProgressDetails) {
      if (supportsUploadProgress2) {
        return createElement(ProgressDetails, {
          numUploads,
          complete,
          totalUploadedSize,
          totalSize,
          totalETA,
          i18n
        });
      }
      return createElement(FileUploadCount, {
        i18n,
        complete,
        numUploads
      });
    }
    return null;
  }
  return createElement("div", {
    className: "uppy-StatusBar-content",
    "aria-label": title,
    title
  }, !isAllPaused ? createElement(LoadingSpinner, null) : null, createElement("div", {
    className: "uppy-StatusBar-status"
  }, createElement("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, supportsUploadProgress2 && totalProgress !== 0 ? `${title}: ${totalProgress}%` : title), renderProgressDetails(), showUploadNewlyAddedFiles ? createElement(UploadNewlyAddedFiles, {
    i18n,
    newFiles,
    startUpload
  }) : null));
}
function ProgressBarComplete(props) {
  const {
    i18n
  } = props;
  return createElement("div", {
    className: "uppy-StatusBar-content",
    role: "status",
    title: i18n("complete")
  }, createElement("div", {
    className: "uppy-StatusBar-status"
  }, createElement("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, createElement("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), i18n("complete"))));
}
function ProgressBarError(props) {
  const {
    error,
    i18n,
    complete,
    numUploads
  } = props;
  function displayErrorAlert() {
    const errorMessage = `${i18n("uploadFailed")} 

 ${error}`;
    alert(errorMessage);
  }
  return createElement("div", {
    className: "uppy-StatusBar-content",
    title: i18n("uploadFailed")
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, createElement("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), createElement("div", {
    className: "uppy-StatusBar-status"
  }, createElement("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, i18n("uploadFailed"), createElement("button", {
    className: "uppy-u-reset uppy-StatusBar-details",
    "aria-label": i18n("showErrorDetails"),
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    onClick: displayErrorAlert,
    type: "button"
  }, "?")), createElement(FileUploadCount, {
    i18n,
    complete,
    numUploads
  })));
}

// node_modules/@uppy/status-bar/lib/StatusBarUI.js
var {
  STATE_ERROR,
  STATE_WAITING,
  STATE_PREPROCESSING,
  STATE_UPLOADING,
  STATE_POSTPROCESSING,
  STATE_COMPLETE
} = StatusBarStates_default;
function StatusBarUI(_ref) {
  let {
    newFiles,
    allowNewUpload,
    isUploadInProgress,
    isAllPaused,
    resumableUploads,
    error,
    hideUploadButton = void 0,
    hidePauseResumeButton = false,
    hideCancelButton = false,
    hideRetryButton = false,
    recoveredState,
    uploadState,
    totalProgress,
    files,
    supportsUploadProgress: supportsUploadProgress2,
    hideAfterFinish = false,
    isSomeGhost,
    doneButtonHandler = void 0,
    isUploadStarted,
    i18n,
    startUpload,
    uppy: uppy2,
    isAllComplete,
    showProgressDetails = void 0,
    numUploads,
    complete,
    totalSize,
    totalETA,
    totalUploadedSize
  } = _ref;
  function getProgressValue() {
    switch (uploadState) {
      case STATE_POSTPROCESSING:
      case STATE_PREPROCESSING: {
        const progress = calculateProcessingProgress(files);
        if (progress.mode === "determinate") {
          return progress.value * 100;
        }
        return totalProgress;
      }
      case STATE_ERROR: {
        return null;
      }
      case STATE_UPLOADING: {
        if (!supportsUploadProgress2) {
          return null;
        }
        return totalProgress;
      }
      default:
        return totalProgress;
    }
  }
  function getIsIndeterminate() {
    switch (uploadState) {
      case STATE_POSTPROCESSING:
      case STATE_PREPROCESSING: {
        const {
          mode
        } = calculateProcessingProgress(files);
        return mode === "indeterminate";
      }
      case STATE_UPLOADING: {
        if (!supportsUploadProgress2) {
          return true;
        }
        return false;
      }
      default:
        return false;
    }
  }
  const progressValue = getProgressValue();
  const width = progressValue != null ? progressValue : 100;
  const showUploadBtn = !error && newFiles && (!isUploadInProgress && !isAllPaused || recoveredState) && allowNewUpload && !hideUploadButton;
  const showCancelBtn = !hideCancelButton && uploadState !== STATE_WAITING && uploadState !== STATE_COMPLETE;
  const showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === STATE_UPLOADING;
  const showRetryBtn = error && !isAllComplete && !hideRetryButton;
  const showDoneBtn = doneButtonHandler && uploadState === STATE_COMPLETE;
  const progressClassNames = (0, import_classnames2.default)("uppy-StatusBar-progress", {
    "is-indeterminate": getIsIndeterminate()
  });
  const statusBarClassNames = (0, import_classnames2.default)("uppy-StatusBar", `is-${uploadState}`, {
    "has-ghosts": isSomeGhost
  });
  const progressBarStateEl = (() => {
    switch (uploadState) {
      case STATE_PREPROCESSING:
      case STATE_POSTPROCESSING:
        return createElement(ProgressBarProcessing, {
          progress: calculateProcessingProgress(files)
        });
      case STATE_COMPLETE:
        return createElement(ProgressBarComplete, {
          i18n
        });
      case STATE_ERROR:
        return createElement(ProgressBarError, {
          error,
          i18n,
          numUploads,
          complete
        });
      case STATE_UPLOADING:
        return createElement(ProgressBarUploading, {
          i18n,
          supportsUploadProgress: supportsUploadProgress2,
          totalProgress,
          showProgressDetails,
          isUploadStarted,
          isAllComplete,
          isAllPaused,
          newFiles,
          numUploads,
          complete,
          totalUploadedSize,
          totalSize,
          totalETA,
          startUpload
        });
      default:
        return null;
    }
  })();
  const atLeastOneAction = showUploadBtn || showRetryBtn || showPauseResumeBtn || showCancelBtn || showDoneBtn;
  const thereIsNothingInside = !atLeastOneAction && !progressBarStateEl;
  const isHidden = thereIsNothingInside || uploadState === STATE_COMPLETE && hideAfterFinish;
  if (isHidden) {
    return null;
  }
  return createElement("div", {
    className: statusBarClassNames
  }, createElement("div", {
    className: progressClassNames,
    style: {
      width: `${width}%`
    },
    role: "progressbar",
    "aria-label": `${width}%`,
    "aria-valuetext": `${width}%`,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": progressValue
  }), progressBarStateEl, createElement("div", {
    className: "uppy-StatusBar-actions"
  }, showUploadBtn ? createElement(UploadBtn, {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    isSomeGhost,
    startUpload,
    uploadState
  }) : null, showRetryBtn ? createElement(RetryBtn, {
    i18n,
    uppy: uppy2
  }) : null, showPauseResumeBtn ? createElement(PauseResumeButton, {
    isAllPaused,
    i18n,
    isAllComplete,
    resumableUploads,
    uppy: uppy2
  }) : null, showCancelBtn ? createElement(CancelBtn, {
    i18n,
    uppy: uppy2
  }) : null, showDoneBtn ? createElement(DoneBtn, {
    i18n,
    doneButtonHandler
  }) : null));
}

// node_modules/@uppy/status-bar/lib/locale.js
var locale_default2 = {
  strings: {
    // Shown in the status bar while files are being uploaded.
    uploading: "Uploading",
    // Shown in the status bar once all files have been uploaded.
    complete: "Complete",
    // Shown in the status bar if an upload failed.
    uploadFailed: "Upload failed",
    // Shown in the status bar while the upload is paused.
    paused: "Paused",
    // Used as the label for the button that retries an upload.
    retry: "Retry",
    // Used as the label for the button that cancels an upload.
    cancel: "Cancel",
    // Used as the label for the button that pauses an upload.
    pause: "Pause",
    // Used as the label for the button that resumes an upload.
    resume: "Resume",
    // Used as the label for the button that resets the upload state after an upload
    done: "Done",
    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.
    filesUploadedOfTotal: {
      0: "%{complete} of %{smart_count} file uploaded",
      1: "%{complete} of %{smart_count} files uploaded"
    },
    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.
    dataUploadedOfTotal: "%{complete} of %{total}",
    dataUploadedOfUnknown: "%{complete} of unknown",
    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.
    xTimeLeft: "%{time} left",
    // Used as the label for the button that starts an upload.
    uploadXFiles: {
      0: "Upload %{smart_count} file",
      1: "Upload %{smart_count} files"
    },
    // Used as the label for the button that starts an upload, if another upload has been started in the past
    // and new files were added later.
    uploadXNewFiles: {
      0: "Upload +%{smart_count} file",
      1: "Upload +%{smart_count} files"
    },
    upload: "Upload",
    retryUpload: "Retry upload",
    xMoreFilesAdded: {
      0: "%{smart_count} more file added",
      1: "%{smart_count} more files added"
    },
    showErrorDetails: "Show error details"
  }
};

// node_modules/@uppy/status-bar/lib/StatusBar.js
function _classPrivateFieldLooseBase5(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id5 = 0;
function _classPrivateFieldLooseKey5(e) {
  return "__private_" + id5++ + "_" + e;
}
var packageJson3 = {
  "version": "4.1.3"
};
var speedFilterHalfLife = 2e3;
var ETAFilterHalfLife = 2e3;
function getUploadingState(error, isAllComplete, recoveredState, files) {
  if (error) {
    return StatusBarStates_default.STATE_ERROR;
  }
  if (isAllComplete) {
    return StatusBarStates_default.STATE_COMPLETE;
  }
  if (recoveredState) {
    return StatusBarStates_default.STATE_WAITING;
  }
  let state = StatusBarStates_default.STATE_WAITING;
  const fileIDs = Object.keys(files);
  for (let i = 0; i < fileIDs.length; i++) {
    const {
      progress
    } = files[fileIDs[i]];
    if (progress.uploadStarted && !progress.uploadComplete) {
      return StatusBarStates_default.STATE_UPLOADING;
    }
    if (progress.preprocess) {
      state = StatusBarStates_default.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== StatusBarStates_default.STATE_PREPROCESSING) {
      state = StatusBarStates_default.STATE_POSTPROCESSING;
    }
  }
  return state;
}
var defaultOptions2 = {
  hideUploadButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideCancelButton: false,
  showProgressDetails: false,
  hideAfterFinish: true,
  doneButtonHandler: null
};
var _lastUpdateTime = /* @__PURE__ */ _classPrivateFieldLooseKey5("lastUpdateTime");
var _previousUploadedBytes = /* @__PURE__ */ _classPrivateFieldLooseKey5("previousUploadedBytes");
var _previousSpeed = /* @__PURE__ */ _classPrivateFieldLooseKey5("previousSpeed");
var _previousETA = /* @__PURE__ */ _classPrivateFieldLooseKey5("previousETA");
var _computeSmoothETA = /* @__PURE__ */ _classPrivateFieldLooseKey5("computeSmoothETA");
var _onUploadStart = /* @__PURE__ */ _classPrivateFieldLooseKey5("onUploadStart");
var StatusBar = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, {
      ...defaultOptions2,
      ...opts
    });
    Object.defineProperty(this, _computeSmoothETA, {
      value: _computeSmoothETA2
    });
    Object.defineProperty(this, _lastUpdateTime, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousUploadedBytes, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousSpeed, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousETA, {
      writable: true,
      value: void 0
    });
    this.startUpload = () => {
      return this.uppy.upload().catch(() => {
      });
    };
    Object.defineProperty(this, _onUploadStart, {
      writable: true,
      value: () => {
        const {
          recoveredState
        } = this.uppy.getState();
        _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed] = null;
        _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] = null;
        if (recoveredState) {
          _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = Object.values(recoveredState.files).reduce((pv, _ref) => {
            let {
              progress
            } = _ref;
            return pv + progress.bytesUploaded;
          }, 0);
          this.uppy.emit("restore-confirmed");
          return;
        }
        _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
        _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = 0;
      }
    });
    this.id = this.opts.id || "StatusBar";
    this.title = "StatusBar";
    this.type = "progressindicator";
    this.defaultLocale = locale_default2;
    this.i18nInit();
    this.render = this.render.bind(this);
    this.install = this.install.bind(this);
  }
  render(state) {
    const {
      capabilities,
      files,
      allowNewUpload,
      totalProgress,
      error,
      recoveredState
    } = state;
    const {
      newFiles,
      startedFiles,
      completeFiles,
      isUploadStarted,
      isAllComplete,
      isAllPaused,
      isUploadInProgress,
      isSomeGhost
    } = this.uppy.getObjectOfFilesPerState();
    const newFilesOrRecovered = recoveredState ? Object.values(files) : newFiles;
    const resumableUploads = !!capabilities.resumableUploads;
    const supportsUploadProgress2 = capabilities.uploadProgress !== false;
    let totalSize = null;
    let totalUploadedSize = 0;
    if (startedFiles.every((f) => f.progress.bytesTotal != null && f.progress.bytesTotal !== 0)) {
      totalSize = 0;
      startedFiles.forEach((file) => {
        totalSize += file.progress.bytesTotal || 0;
        totalUploadedSize += file.progress.bytesUploaded || 0;
      });
    } else {
      startedFiles.forEach((file) => {
        totalUploadedSize += file.progress.bytesUploaded || 0;
      });
    }
    const totalETA = _classPrivateFieldLooseBase5(this, _computeSmoothETA)[_computeSmoothETA]({
      uploaded: totalUploadedSize,
      total: totalSize
    });
    return StatusBarUI({
      error,
      uploadState: getUploadingState(error, isAllComplete, recoveredState, state.files || {}),
      allowNewUpload,
      totalProgress,
      totalSize,
      totalUploadedSize,
      isAllComplete: false,
      isAllPaused,
      isUploadStarted,
      isUploadInProgress,
      isSomeGhost,
      recoveredState,
      complete: completeFiles.length,
      newFiles: newFilesOrRecovered.length,
      numUploads: startedFiles.length,
      totalETA,
      files,
      i18n: this.i18n,
      uppy: this.uppy,
      startUpload: this.startUpload,
      doneButtonHandler: this.opts.doneButtonHandler,
      resumableUploads,
      supportsUploadProgress: supportsUploadProgress2,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish
    });
  }
  onMount() {
    const element = this.el;
    const direction = getTextDirection_default(element);
    if (!direction) {
      element.dir = "ltr";
    }
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
    this.uppy.on("upload", _classPrivateFieldLooseBase5(this, _onUploadStart)[_onUploadStart]);
    _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
    _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = this.uppy.getFiles().reduce((pv, file) => pv + file.progress.bytesUploaded, 0);
  }
  uninstall() {
    this.unmount();
    this.uppy.off("upload", _classPrivateFieldLooseBase5(this, _onUploadStart)[_onUploadStart]);
  }
};
function _computeSmoothETA2(totalBytes) {
  var _classPrivateFieldLoo, _classPrivateFieldLoo2;
  if (totalBytes.total == null || totalBytes.total === 0) {
    return null;
  }
  const remaining = totalBytes.total - totalBytes.uploaded;
  if (remaining <= 0) {
    return null;
  }
  (_classPrivateFieldLoo2 = (_classPrivateFieldLoo = _classPrivateFieldLooseBase5(this, _lastUpdateTime))[_lastUpdateTime]) != null ? _classPrivateFieldLoo2 : _classPrivateFieldLoo[_lastUpdateTime] = performance.now();
  const dt = performance.now() - _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime];
  if (dt === 0) {
    var _classPrivateFieldLoo3;
    return Math.round(((_classPrivateFieldLoo3 = _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo3 : 0) / 100) / 10;
  }
  const uploadedBytesSinceLastTick = totalBytes.uploaded - _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes];
  _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = totalBytes.uploaded;
  if (uploadedBytesSinceLastTick <= 0) {
    var _classPrivateFieldLoo4;
    return Math.round(((_classPrivateFieldLoo4 = _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo4 : 0) / 100) / 10;
  }
  const currentSpeed = uploadedBytesSinceLastTick / dt;
  const filteredSpeed = _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed] == null ? currentSpeed : emaFilter(currentSpeed, _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed], speedFilterHalfLife, dt);
  _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed] = filteredSpeed;
  const instantETA = remaining / filteredSpeed;
  const updatedPreviousETA = Math.max(_classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] - dt, 0);
  const filteredETA = _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] == null ? instantETA : emaFilter(instantETA, updatedPreviousETA, ETAFilterHalfLife, dt);
  _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] = filteredETA;
  _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
  return Math.round(filteredETA / 100) / 10;
}
StatusBar.VERSION = packageJson3.version;

// node_modules/@uppy/informer/lib/FadeIn.js
var TRANSITION_MS = 300;
var FadeIn = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.ref = createRef();
  }
  componentWillEnter(callback) {
    this.ref.current.style.opacity = "1";
    this.ref.current.style.transform = "none";
    setTimeout(callback, TRANSITION_MS);
  }
  componentWillLeave(callback) {
    this.ref.current.style.opacity = "0";
    this.ref.current.style.transform = "translateY(350%)";
    setTimeout(callback, TRANSITION_MS);
  }
  render() {
    const {
      children
    } = this.props;
    return createElement("div", {
      className: "uppy-Informer-animated",
      ref: this.ref
    }, children);
  }
};

// node_modules/@uppy/informer/lib/TransitionGroup.js
function assign2(obj, props) {
  return Object.assign(obj, props);
}
function getKey(vnode, fallback) {
  var _vnode$key;
  return (_vnode$key = vnode == null ? void 0 : vnode.key) != null ? _vnode$key : fallback;
}
function linkRef(component, name) {
  const cache = component._ptgLinkedRefs || (component._ptgLinkedRefs = {});
  return cache[name] || (cache[name] = (c) => {
    component.refs[name] = c;
  });
}
function getChildMapping(children) {
  const out = {};
  for (let i = 0; i < children.length; i++) {
    if (children[i] != null) {
      const key = getKey(children[i], i.toString(36));
      out[key] = children[i];
    }
  }
  return out;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  const getValueForKey = (key) => next.hasOwnProperty(key) ? next[key] : prev[key];
  const nextKeysPending = {};
  let pendingKeys = [];
  for (const prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  const childMapping = {};
  for (const nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (let i = 0; i < nextKeysPending[nextKey].length; i++) {
        const pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (let i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
var identity = (i) => i;
var TransitionGroup = class extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.refs = {};
    this.state = {
      children: getChildMapping(toChildArray(toChildArray(this.props.children)) || [])
    };
    this.performAppear = this.performAppear.bind(this);
    this.performEnter = this.performEnter.bind(this);
    this.performLeave = this.performLeave.bind(this);
  }
  componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToAbortLeave = [];
    this.keysToEnter = [];
    this.keysToLeave = [];
  }
  componentDidMount() {
    const initialChildMapping = this.state.children;
    for (const key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const nextChildMapping = getChildMapping(toChildArray(nextProps.children) || []);
    const prevChildMapping = this.state.children;
    this.setState((prevState) => ({
      children: mergeChildMappings(prevState.children, nextChildMapping)
    }));
    let key;
    for (key in nextChildMapping) {
      if (nextChildMapping.hasOwnProperty(key)) {
        const hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && hasPrev && this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
          this.keysToAbortLeave.push(key);
        } else if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }
    }
    for (key in prevChildMapping) {
      if (prevChildMapping.hasOwnProperty(key)) {
        const hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
        if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
          this.keysToLeave.push(key);
        }
      }
    }
  }
  componentDidUpdate() {
    const {
      keysToEnter
    } = this;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);
    const {
      keysToLeave
    } = this;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  }
  _finishAbort(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      this.keysToAbortLeave.splice(idx, 1);
    }
  }
  performAppear(key) {
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillAppear) {
      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
    } else {
      this._handleDoneAppearing(key);
    }
  }
  _handleDoneAppearing(key) {
    const component = this.refs[key];
    if (component != null && component.componentDidAppear) {
      component.componentDidAppear();
    }
    delete this.currentlyTransitioningKeys[key];
    this._finishAbort(key);
    const currentChildMapping = getChildMapping(toChildArray(this.props.children) || []);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      this.performLeave(key);
    }
  }
  performEnter(key) {
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillEnter) {
      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
    } else {
      this._handleDoneEntering(key);
    }
  }
  _handleDoneEntering(key) {
    const component = this.refs[key];
    if (component != null && component.componentDidEnter) {
      component.componentDidEnter();
    }
    delete this.currentlyTransitioningKeys[key];
    this._finishAbort(key);
    const currentChildMapping = getChildMapping(toChildArray(this.props.children) || []);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      this.performLeave(key);
    }
  }
  performLeave(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      return;
    }
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillLeave) {
      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
    } else {
      this._handleDoneLeaving(key);
    }
  }
  _handleDoneLeaving(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      return;
    }
    const component = this.refs[key];
    if (component != null && component.componentDidLeave) {
      component.componentDidLeave();
    }
    delete this.currentlyTransitioningKeys[key];
    const currentChildMapping = getChildMapping(toChildArray(this.props.children) || []);
    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
      this.performEnter(key);
    } else {
      const children = assign2({}, this.state.children);
      delete children[key];
      this.setState({
        children
      });
    }
  }
  render(_ref, _ref2) {
    let {
      childFactory,
      transitionLeave,
      transitionName: transitionName2,
      transitionAppear,
      transitionEnter,
      transitionLeaveTimeout,
      transitionEnterTimeout,
      transitionAppearTimeout,
      component,
      ...props
    } = _ref;
    let {
      children
    } = _ref2;
    const childrenToRender = Object.entries(children).map((_ref3) => {
      let [key, child] = _ref3;
      if (!child) return void 0;
      const ref = linkRef(this, key);
      return cloneElement(childFactory(child), {
        ref,
        key
      });
    }).filter(Boolean);
    return createElement(component, props, childrenToRender);
  }
};
TransitionGroup.defaultProps = {
  component: "span",
  childFactory: identity
};
var TransitionGroup_default = TransitionGroup;

// node_modules/@uppy/informer/lib/Informer.js
var packageJson4 = {
  "version": "4.2.1"
};
var Informer = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    this.render = (state) => {
      return createElement("div", {
        className: "uppy uppy-Informer"
      }, createElement(TransitionGroup_default, null, state.info.map((info) => createElement(FadeIn, {
        key: info.message
      }, createElement("p", {
        role: "alert"
      }, info.message, " ", info.details && createElement("span", {
        "aria-label": info.details,
        "data-microtip-position": "top-left",
        "data-microtip-size": "medium",
        role: "tooltip",
        onClick: () => (
          // eslint-disable-next-line no-alert
          alert(`${info.message} 

 ${info.details}`)
        )
      }, "?"))))));
    };
    this.type = "progressindicator";
    this.id = this.opts.id || "Informer";
    this.title = "Informer";
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
};
Informer.VERSION = packageJson4.version;

// node_modules/@uppy/utils/lib/dataURItoBlob.js
var DATA_URL_PATTERN = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function dataURItoBlob(dataURI, opts, toFile) {
  var _ref, _opts$mimeType;
  const dataURIData = DATA_URL_PATTERN.exec(dataURI);
  const mimeType = (_ref = (_opts$mimeType = opts.mimeType) != null ? _opts$mimeType : dataURIData == null ? void 0 : dataURIData[1]) != null ? _ref : "plain/text";
  let data;
  if ((dataURIData == null ? void 0 : dataURIData[2]) != null) {
    const binary = atob(decodeURIComponent(dataURIData[3]));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    data = [bytes];
  } else if ((dataURIData == null ? void 0 : dataURIData[3]) != null) {
    data = [decodeURIComponent(dataURIData[3])];
  }
  if (toFile) {
    return new File(data, opts.name || "", {
      type: mimeType
    });
  }
  return new Blob(data, {
    type: mimeType
  });
}
var dataURItoBlob_default = dataURItoBlob;

// node_modules/@uppy/utils/lib/isObjectURL.js
function isObjectURL(url) {
  return url.startsWith("blob:");
}

// node_modules/@uppy/utils/lib/isPreviewSupported.js
function isPreviewSupported(fileType) {
  if (!fileType) return false;
  return /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(fileType);
}

// node_modules/exifr/src/polyfill/global.mjs
var global_default = typeof self !== "undefined" ? self : global;

// node_modules/exifr/src/util/platform.mjs
var browser = typeof navigator !== "undefined";
var worker = browser && typeof HTMLImageElement === "undefined";
var node = !!(typeof global !== "undefined" && typeof process !== "undefined" && process.versions && process.versions.node);
var Buffer2 = global_default.Buffer;
var BigInt = global_default.BigInt;
var hasBuffer = !!Buffer2;

// node_modules/exifr/src/util/helpers.mjs
var TIFF_LITTLE_ENDIAN = 18761;
var TIFF_BIG_ENDIAN = 19789;
var undefinedIfEmpty = (object) => isEmpty(object) ? void 0 : object;
var isDefined = (val) => val !== void 0;
function isEmpty(arg) {
  if (arg === void 0) return true;
  if (arg instanceof Map)
    return arg.size === 0;
  else
    return Object.values(arg).filter(isDefined).length === 0;
}
function throwError(message) {
  let err = new Error(message);
  delete err.stack;
  throw err;
}
function removeNullTermination(string) {
  while (string.endsWith("\0"))
    string = string.slice(0, -1);
  return string;
}
function normalizeString(string) {
  string = removeNullTermination(string).trim();
  return string === "" ? void 0 : string;
}
function estimateTiffSize(options3) {
  let bytes = 0;
  if (options3.ifd0.enabled) bytes += 1024;
  if (options3.exif.enabled) bytes += 2048;
  if (options3.makerNote) bytes += 2048;
  if (options3.userComment) bytes += 1024;
  if (options3.gps.enabled) bytes += 512;
  if (options3.interop.enabled) bytes += 100;
  if (options3.ifd1.enabled) bytes += 1024;
  return bytes + 2048;
}
function estimateMetadataSize(options3) {
  let bytes = estimateTiffSize(options3);
  if (options3.jfif.enabled) bytes += 50;
  if (options3.xmp.enabled) bytes += 2e4;
  if (options3.iptc.enabled) bytes += 14e3;
  if (options3.icc.enabled) bytes += 6e3;
  return bytes;
}

// node_modules/exifr/src/util/BufferView.mjs
var arrayToCharCode = (arr) => String.fromCharCode.apply(null, arr);
var utf8decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8") : void 0;
function uint8ArrayToUtf8String(uint8array) {
  if (utf8decoder)
    return utf8decoder.decode(uint8array);
  else if (hasBuffer)
    return Buffer.from(uint8array).toString("utf8");
  else
    return decodeURIComponent(escape(arrayToCharCode(uint8array)));
}
var BufferView = class _BufferView {
  static from(arg, le) {
    if (arg instanceof this && arg.le === le)
      return arg;
    else
      return new _BufferView(arg, void 0, void 0, le);
  }
  constructor(arg, offset = 0, length, le) {
    if (typeof le === "boolean") this.le = le;
    if (Array.isArray(arg)) arg = new Uint8Array(arg);
    if (arg === 0) {
      this.byteOffset = 0;
      this.byteLength = 0;
    } else if (arg instanceof ArrayBuffer) {
      if (length === void 0) length = arg.byteLength - offset;
      let dataView = new DataView(arg, offset, length);
      this._swapDataView(dataView);
    } else if (arg instanceof Uint8Array || arg instanceof DataView || arg instanceof _BufferView) {
      if (length === void 0) length = arg.byteLength - offset;
      offset += arg.byteOffset;
      if (offset + length > arg.byteOffset + arg.byteLength)
        throwError("Creating view outside of available memory in ArrayBuffer");
      let dataView = new DataView(arg.buffer, offset, length);
      this._swapDataView(dataView);
    } else if (typeof arg === "number") {
      let dataView = new DataView(new ArrayBuffer(arg));
      this._swapDataView(dataView);
    } else {
      throwError("Invalid input argument for BufferView: " + arg);
    }
  }
  _swapArrayBuffer(arrayBuffer) {
    this._swapDataView(new DataView(arrayBuffer));
  }
  _swapBuffer(uint8) {
    this._swapDataView(new DataView(uint8.buffer, uint8.byteOffset, uint8.byteLength));
  }
  _swapDataView(dataView) {
    this.dataView = dataView;
    this.buffer = dataView.buffer;
    this.byteOffset = dataView.byteOffset;
    this.byteLength = dataView.byteLength;
  }
  _lengthToEnd(offset) {
    return this.byteLength - offset;
  }
  set(arg, offset, Class = _BufferView) {
    if (arg instanceof DataView || arg instanceof _BufferView)
      arg = new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    else if (arg instanceof ArrayBuffer)
      arg = new Uint8Array(arg);
    if (!(arg instanceof Uint8Array))
      throwError(`BufferView.set(): Invalid data argument.`);
    let uintView = this.toUint8();
    uintView.set(arg, offset);
    return new Class(this, offset, arg.byteLength);
  }
  // Use this to get BufferView of specific subset of this BufferView.
  subarray(offset, length) {
    length = length || this._lengthToEnd(offset);
    return new _BufferView(this, offset, length);
  }
  // Use this for working with the same memory.
  // Returns Uint8Array view over the same memory of ArrayBuffer as the internal DataView.
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  // Use this for reading data.
  // Returns Uint8Array from given point in the chunk. Properly start at the begining of the chunk,
  // regardles of where the chunk is in the ArrayBuffer.
  getUint8Array(offset, length) {
    return new Uint8Array(this.buffer, this.byteOffset + offset, length);
  }
  getString(offset = 0, length = this.byteLength) {
    let arr = this.getUint8Array(offset, length);
    return uint8ArrayToUtf8String(arr);
  }
  getLatin1String(offset = 0, length = this.byteLength) {
    let arr = this.getUint8Array(offset, length);
    return arrayToCharCode(arr);
  }
  // TODO: refactor
  getUnicodeString(offset = 0, length = this.byteLength) {
    const chars = [];
    for (let i = 0; i < length && offset + i < this.byteLength; i += 2)
      chars.push(this.getUint16(offset + i));
    return arrayToCharCode(chars);
  }
  getInt8(offset) {
    return this.dataView.getInt8(offset);
  }
  getUint8(offset) {
    return this.dataView.getUint8(offset);
  }
  getInt16(offset, le = this.le) {
    return this.dataView.getInt16(offset, le);
  }
  getInt32(offset, le = this.le) {
    return this.dataView.getInt32(offset, le);
  }
  getUint16(offset, le = this.le) {
    return this.dataView.getUint16(offset, le);
  }
  getUint32(offset, le = this.le) {
    return this.dataView.getUint32(offset, le);
  }
  getFloat32(offset, le = this.le) {
    return this.dataView.getFloat32(offset, le);
  }
  getFloat64(offset, le = this.le) {
    return this.dataView.getFloat64(offset, le);
  }
  getFloat(offset, le = this.le) {
    return this.dataView.getFloat32(offset, le);
  }
  getDouble(offset, le = this.le) {
    return this.dataView.getFloat64(offset, le);
  }
  // todo: investiage - can this be removed?
  getUintBytes(offset, bytes, le) {
    switch (bytes) {
      case 1:
        return this.getUint8(offset, le);
      case 2:
        return this.getUint16(offset, le);
      case 4:
        return this.getUint32(offset, le);
      // Extension only required for parsing HEIC, implemented in separate file.
      case 8:
        return this.getUint64 && this.getUint64(offset, le);
    }
  }
  // todo: investiage - can this be removed?
  getUint(offset, size, le) {
    switch (size) {
      case 8:
        return this.getUint8(offset, le);
      case 16:
        return this.getUint16(offset, le);
      case 32:
        return this.getUint32(offset, le);
      // Extension only required for parsing HEIC, implemented in separate file.
      case 64:
        return this.getUint64 && this.getUint64(offset, le);
    }
  }
  toString(arg) {
    return this.dataView.toString(arg, this.constructor.name);
  }
  // do not delete
  ensureChunk() {
  }
};

// node_modules/exifr/src/plugins.mjs
function throwUnknown(kind, key) {
  throwError(`Unknown ${kind} '${key}'.`);
}
function throwNotLoaded(kind, key) {
  throwError(`${kind} '${key}' was not loaded, try using full build of exifr.`);
}
var PluginList = class extends Map {
  constructor(kind) {
    super();
    this.kind = kind;
  }
  // INVESTIGATE: move this check from runtime to options constructor
  get(key, options3) {
    if (!this.has(key))
      throwNotLoaded(this.kind, key);
    if (options3) {
      if (!(key in options3))
        throwUnknown(this.kind, key);
      if (!options3[key].enabled)
        throwNotLoaded(this.kind, key);
    }
    return super.get(key);
  }
  keyList() {
    return Array.from(this.keys());
  }
};
var fileParsers = new PluginList("file parser");
var segmentParsers = new PluginList("segment parser");
var fileReaders = new PluginList("file reader");

// node_modules/exifr/src/polyfill/fetch.mjs
var fetch2 = global_default.fetch;

// node_modules/exifr/src/reader.mjs
var INVALID_INPUT = "Invalid input argument";
function read(arg, options3) {
  if (typeof arg === "string")
    return readString(arg, options3);
  else if (browser && !worker && arg instanceof HTMLImageElement)
    return readString(arg.src, options3);
  else if (arg instanceof Uint8Array || arg instanceof ArrayBuffer || arg instanceof DataView)
    return new BufferView(arg);
  else if (browser && arg instanceof Blob)
    return callReader(arg, options3, "blob", readBlobAsArrayBuffer);
  else
    throwError(INVALID_INPUT);
}
function readString(arg, options3) {
  if (isBase64Url(arg))
    return callReaderClass(arg, options3, "base64");
  else if (node && arg.includes("://"))
    return callReader(arg, options3, "url", fetchUrlAsArrayBuffer);
  else if (node)
    return callReaderClass(arg, options3, "fs");
  else if (browser)
    return callReader(arg, options3, "url", fetchUrlAsArrayBuffer);
  else
    throwError(INVALID_INPUT);
}
async function callReader(url, options3, readerName, readerFn) {
  if (fileReaders.has(readerName))
    return callReaderClass(url, options3, readerName);
  else if (readerFn)
    return callReaderFunction(url, readerFn);
  else
    throwError(`Parser ${readerName} is not loaded`);
}
async function callReaderClass(input, options3, readerName) {
  let Reader = fileReaders.get(readerName);
  let file = new Reader(input, options3);
  await file.read();
  return file;
}
async function callReaderFunction(input, readerFn) {
  let rawData = await readerFn(input);
  return new BufferView(rawData);
}
var fetchUrlAsArrayBuffer = (url) => fetch2(url).then((res) => res.arrayBuffer());
var readBlobAsArrayBuffer = (blob) => new Promise((resolve, reject) => {
  let reader = new FileReader();
  reader.onloadend = () => resolve(reader.result || new ArrayBuffer());
  reader.onerror = reject;
  reader.readAsArrayBuffer(blob);
});
function isBase64Url(string) {
  return string.startsWith("data:") || string.length > 1e4;
}

// node_modules/exifr/src/tags.mjs
var tagKeys = /* @__PURE__ */ new Map();
var tagValues = /* @__PURE__ */ new Map();
var tagRevivers = /* @__PURE__ */ new Map();
var TAG_MAKERNOTE = 37500;
var TAG_USERCOMMENT = 37510;
var TAG_XMP = 700;
var TAG_IPTC = 33723;
var TAG_ICC = 34675;
var TAG_IFD_EXIF = 34665;
var TAG_IFD_GPS = 34853;
var TAG_IFD_INTEROP = 40965;
var TAG_GPS_LATREF = 1;
var TAG_GPS_LAT = 2;
var TAG_GPS_LONREF = 3;
var TAG_GPS_LON = 4;
var TAG_ORIENTATION = 274;

// node_modules/exifr/src/options.mjs
var chunkedProps = [
  "chunked",
  "firstChunkSize",
  "firstChunkSizeNode",
  "firstChunkSizeBrowser",
  "chunkSize",
  "chunkLimit"
];
var otherSegments = ["jfif", "xmp", "icc", "iptc", "ihdr"];
var segments = ["tiff", ...otherSegments];
var tiffBlocks = ["ifd0", "ifd1", "exif", "gps", "interop"];
var segmentsAndBlocks = [...segments, ...tiffBlocks];
var tiffExtractables = ["makerNote", "userComment"];
var inheritables = ["translateKeys", "translateValues", "reviveValues", "multiSegment"];
var allFormatters = [...inheritables, "sanitize", "mergeOutput", "silentErrors"];
var SharedOptions = class {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
};
var SubOptions = class extends SharedOptions {
  enabled = false;
  skip = /* @__PURE__ */ new Set();
  pick = /* @__PURE__ */ new Set();
  deps = /* @__PURE__ */ new Set();
  // tags required by other blocks or segments (IFD pointers, makernotes)
  translateKeys = false;
  translateValues = false;
  reviveValues = false;
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(key, defaultValue, userValue, parent) {
    super();
    this.key = key;
    this.enabled = defaultValue;
    this.parse = this.enabled;
    this.applyInheritables(parent);
    this.canBeFiltered = tiffBlocks.includes(key);
    if (this.canBeFiltered)
      this.dict = tagKeys.get(key);
    if (userValue !== void 0) {
      if (Array.isArray(userValue)) {
        this.parse = this.enabled = true;
        if (this.canBeFiltered && userValue.length > 0)
          this.translateTagSet(userValue, this.pick);
      } else if (typeof userValue === "object") {
        this.enabled = true;
        this.parse = userValue.parse !== false;
        if (this.canBeFiltered) {
          let { pick, skip } = userValue;
          if (pick && pick.length > 0) this.translateTagSet(pick, this.pick);
          if (skip && skip.length > 0) this.translateTagSet(skip, this.skip);
        }
        this.applyInheritables(userValue);
      } else if (userValue === true || userValue === false) {
        this.parse = this.enabled = userValue;
      } else {
        throwError(`Invalid options argument: ${userValue}`);
      }
    }
  }
  applyInheritables(origin) {
    let key, val;
    for (key of inheritables) {
      val = origin[key];
      if (val !== void 0) this[key] = val;
    }
  }
  translateTagSet(inputArray, outputSet) {
    if (this.dict) {
      let { tagKeys: tagKeys2, tagValues: tagValues2 } = this.dict;
      let tag, index;
      for (tag of inputArray) {
        if (typeof tag === "string") {
          index = tagValues2.indexOf(tag);
          if (index === -1) index = tagKeys2.indexOf(Number(tag));
          if (index !== -1) outputSet.add(Number(tagKeys2[index]));
        } else {
          outputSet.add(tag);
        }
      }
    } else {
      for (let tag of inputArray) outputSet.add(tag);
    }
  }
  finalizeFilters() {
    if (!this.enabled && this.deps.size > 0) {
      this.enabled = true;
      addToSet(this.pick, this.deps);
    } else if (this.enabled && this.pick.size > 0) {
      addToSet(this.pick, this.deps);
    }
  }
};
var defaults = {
  // APP Segments
  jfif: false,
  // jpeg only (jpeg file header)
  tiff: true,
  xmp: false,
  icc: false,
  iptc: false,
  // TIFF BLOCKS
  ifd0: true,
  // image
  ifd1: false,
  // thumbnail
  exif: true,
  gps: true,
  interop: false,
  // jpeg only
  // undefined because we don't want Jpeg or Heic file parser to pick it up.
  // Png parser will use Ihdr implicitly unless it's disabled by user.
  ihdr: void 0,
  // png only (png file header)
  // Notable TIFF tags
  makerNote: false,
  userComment: false,
  // TODO: to be developed in future version, this is just a proposal for future api
  multiSegment: false,
  // FILTERS
  // Array of tags that will be excluded when parsing.
  // Saves performance because the tags aren't read at all and thus not further processed.
  // Cannot be used along with 'pick' array.
  skip: [],
  // Array of the only tags that will be parsed. Those that are not specified will be ignored.
  // Extremely saves performance because only selected few tags are processed.
  // Useful for extracting few informations from a batch of many photos.
  // Cannot be used along with 'skip' array.
  pick: [],
  // OUTPUT FORMATTERS
  translateKeys: true,
  translateValues: true,
  reviveValues: true,
  // Removes IFD pointers and other artifacts (useless for user) from output.
  sanitize: true,
  // Changes output format by merging all segments and blocks into single object.
  // NOTE = Causes loss of thumbnail EXIF data.
  mergeOutput: true,
  // Fails silently and logs the file errors in output.errors instead of throwing error.
  silentErrors: true,
  // CHUNKED READER
  // true      - forces reading the whole file
  // undefined - allows reading additional chunks of size `chunkSize` (chunked mode)
  // false     - does not allow reading additional chunks beyond `firstChunkSize` (chunked mode)
  chunked: true,
  // Size of the chunk that can be scanned for EXIF.
  firstChunkSize: void 0,
  // Size of the chunk that can be scanned for EXIF. Used by node.js.
  firstChunkSizeNode: 512,
  // In browser its sometimes better to download larger chunk in hope that it contains the
  // whole EXIF (and not just its begining like in case of firstChunkSizeNode) in prevetion
  // of additional loading and fetching.
  firstChunkSizeBrowser: 65536,
  // 64kb
  // Size of subsequent chunks that are read after first chunk (if needed)
  chunkSize: 65536,
  // 64kb
  // Maximum amount of additional chunks allowed to read in chunk mode.
  // If the requested segments aren't parsed within N chunks (64*3 = 192kb) they probably aren't in the file.
  chunkLimit: 5
};
var existingInstances = /* @__PURE__ */ new Map();
var Options = class extends SharedOptions {
  // exporting for user to change
  static default = defaults;
  static useCached(userOptions) {
    let options3 = existingInstances.get(userOptions);
    if (options3 !== void 0) return options3;
    options3 = new this(userOptions);
    existingInstances.set(userOptions, options3);
    return options3;
  }
  constructor(userOptions) {
    super();
    if (userOptions === true)
      this.setupFromTrue();
    else if (userOptions === void 0)
      this.setupFromUndefined();
    else if (Array.isArray(userOptions))
      this.setupFromArray(userOptions);
    else if (typeof userOptions === "object")
      this.setupFromObject(userOptions);
    else
      throwError(`Invalid options argument ${userOptions}`);
    if (this.firstChunkSize === void 0)
      this.firstChunkSize = browser ? this.firstChunkSizeBrowser : this.firstChunkSizeNode;
    if (this.mergeOutput) this.ifd1.enabled = false;
    this.filterNestedSegmentTags();
    this.traverseTiffDependencyTree();
    this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let key;
    for (key of chunkedProps) this[key] = defaults[key];
    for (key of allFormatters) this[key] = defaults[key];
    for (key of tiffExtractables) this[key] = defaults[key];
    for (key of segmentsAndBlocks) this[key] = new SubOptions(key, defaults[key], void 0, this);
  }
  setupFromTrue() {
    let key;
    for (key of chunkedProps) this[key] = defaults[key];
    for (key of allFormatters) this[key] = defaults[key];
    for (key of tiffExtractables) this[key] = true;
    for (key of segmentsAndBlocks) this[key] = new SubOptions(key, true, void 0, this);
  }
  setupFromArray(userOptions) {
    let key;
    for (key of chunkedProps) this[key] = defaults[key];
    for (key of allFormatters) this[key] = defaults[key];
    for (key of tiffExtractables) this[key] = defaults[key];
    for (key of segmentsAndBlocks) this[key] = new SubOptions(key, false, void 0, this);
    this.setupGlobalFilters(userOptions, void 0, tiffBlocks);
  }
  setupFromObject(userOptions) {
    tiffBlocks.ifd0 = tiffBlocks.ifd0 || tiffBlocks.image;
    tiffBlocks.ifd1 = tiffBlocks.ifd1 || tiffBlocks.thumbnail;
    let key;
    Object.assign(this, userOptions);
    for (key of chunkedProps) this[key] = getDefined(userOptions[key], defaults[key]);
    for (key of allFormatters) this[key] = getDefined(userOptions[key], defaults[key]);
    for (key of tiffExtractables) this[key] = getDefined(userOptions[key], defaults[key]);
    for (key of segments) this[key] = new SubOptions(key, defaults[key], userOptions[key], this);
    for (key of tiffBlocks) this[key] = new SubOptions(key, defaults[key], userOptions[key], this.tiff);
    this.setupGlobalFilters(userOptions.pick, userOptions.skip, tiffBlocks, segmentsAndBlocks);
    if (userOptions.tiff === true)
      this.batchEnableWithBool(tiffBlocks, true);
    else if (userOptions.tiff === false)
      this.batchEnableWithUserValue(tiffBlocks, userOptions);
    else if (Array.isArray(userOptions.tiff))
      this.setupGlobalFilters(userOptions.tiff, void 0, tiffBlocks);
    else if (typeof userOptions.tiff === "object")
      this.setupGlobalFilters(userOptions.tiff.pick, userOptions.tiff.skip, tiffBlocks);
  }
  batchEnableWithBool(keys, value) {
    for (let key of keys)
      this[key].enabled = value;
  }
  batchEnableWithUserValue(keys, userOptions) {
    for (let key of keys) {
      let userOption = userOptions[key];
      this[key].enabled = userOption !== false && userOption !== void 0;
    }
  }
  setupGlobalFilters(pick, skip, dictKeys, disableableSegsAndBlocks = dictKeys) {
    if (pick && pick.length) {
      for (let blockKey of disableableSegsAndBlocks)
        this[blockKey].enabled = false;
      let entries = findScopesForGlobalTagArray(pick, dictKeys);
      for (let [blockKey, tags] of entries) {
        addToSet(this[blockKey].pick, tags);
        this[blockKey].enabled = true;
      }
    } else if (skip && skip.length) {
      let entries = findScopesForGlobalTagArray(skip, dictKeys);
      for (let [segKey, tags] of entries)
        addToSet(this[segKey].skip, tags);
    }
  }
  // XMP, IPTC can ICC can be stored as a tag in TIFF (in .tif files).
  // This method adds them to skip list if these segments are not requested.
  // Also applies to MakerNote and UserComment
  filterNestedSegmentTags() {
    let { ifd0, exif, xmp, iptc, icc } = this;
    if (this.makerNote) exif.deps.add(TAG_MAKERNOTE);
    else exif.skip.add(TAG_MAKERNOTE);
    if (this.userComment) exif.deps.add(TAG_USERCOMMENT);
    else exif.skip.add(TAG_USERCOMMENT);
    if (!xmp.enabled) ifd0.skip.add(TAG_XMP);
    if (!iptc.enabled) ifd0.skip.add(TAG_IPTC);
    if (!icc.enabled) ifd0.skip.add(TAG_ICC);
  }
  // INVESTIGATE: can this be moved to Tiff Segment parser?
  traverseTiffDependencyTree() {
    let { ifd0, exif, gps, interop } = this;
    if (interop.needed) {
      exif.deps.add(TAG_IFD_INTEROP);
      ifd0.deps.add(TAG_IFD_INTEROP);
    }
    if (exif.needed) ifd0.deps.add(TAG_IFD_EXIF);
    if (gps.needed) ifd0.deps.add(TAG_IFD_GPS);
    this.tiff.enabled = tiffBlocks.some((key) => this[key].enabled === true) || this.makerNote || this.userComment;
    for (let key of tiffBlocks) this[key].finalizeFilters();
  }
  get onlyTiff() {
    let bools = otherSegments.map((key) => this[key].enabled);
    if (bools.some((bool) => bool === true)) return false;
    return this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let key of segments)
      if (this[key].enabled && !segmentParsers.has(key))
        throwNotLoaded("segment parser", key);
  }
};
function findScopesForGlobalTagArray(tagArray, dictKeys) {
  let scopes = [];
  let dict, scopedTags, blockKey, tagEntry;
  for (blockKey of dictKeys) {
    dict = tagKeys.get(blockKey);
    scopedTags = [];
    for (tagEntry of dict) {
      if (tagArray.includes(tagEntry[0]) || tagArray.includes(tagEntry[1]))
        scopedTags.push(tagEntry[0]);
    }
    if (scopedTags.length)
      scopes.push([blockKey, scopedTags]);
  }
  return scopes;
}
function getDefined(arg1, arg2) {
  if (arg1 !== void 0) return arg1;
  if (arg2 !== void 0) return arg2;
}
function addToSet(target, source) {
  for (let item of source)
    target.add(item);
}

// node_modules/exifr/src/Exifr.mjs
var Exifr = class {
  parsers = {};
  output = {};
  errors = [];
  pushToErrors = (err) => this.errors.push(err);
  constructor(options3) {
    this.options = Options.useCached(options3);
  }
  async read(arg) {
    this.file = await read(arg, this.options);
  }
  setup() {
    if (this.fileParser) return;
    let { file } = this;
    let marker = file.getUint16(0);
    for (let [type, FileParser] of fileParsers) {
      if (FileParser.canHandle(file, marker)) {
        this.fileParser = new FileParser(this.options, this.file, this.parsers);
        return file[type] = true;
      }
    }
    if (this.file.close) this.file.close();
    throwError(`Unknown file format`);
  }
  async parse() {
    let { output, errors } = this;
    this.setup();
    if (this.options.silentErrors) {
      await this.executeParsers().catch(this.pushToErrors);
      errors.push(...this.fileParser.errors);
    } else {
      await this.executeParsers();
    }
    if (this.file.close) this.file.close();
    if (this.options.silentErrors && errors.length > 0) output.errors = errors;
    return undefinedIfEmpty(output);
  }
  // TODO: Silent error handling needs major rework in order to enable reading 
  //       at least some segments while others are corrupted.
  //       It'd be nice to move more functionality into segment parsers and hollow out
  //       the file parsers. This way each semgnet would be in own (kinda) thread.
  // EXAMPLE1: All the chunk header calculation happens inside file parser.
  //           If something goes wrong (like bug in IPTC's static canHandle() and headerLength)
  //           it crashes right in fileParser.parse().
  //           tldr: file crashes prematurely on IPTC, no other segments are read.
  // EXAMPLE2: PNG file parser does a lot of parsing inside its .parse()
  //           If it crashed, we'd also prematurely close before extracting any data.
  async executeParsers() {
    let { output } = this;
    await this.fileParser.parse();
    let promises = Object.values(this.parsers).map(async (parser) => {
      let parserOutput = await parser.parse();
      parser.assignToOutput(output, parserOutput);
    });
    if (this.options.silentErrors) {
      promises = promises.map((promise) => promise.catch(this.pushToErrors));
    }
    await Promise.all(promises);
  }
  async extractThumbnail() {
    this.setup();
    let { options: options3, file } = this;
    let TiffParser = segmentParsers.get("tiff", options3);
    var seg;
    if (file.tiff)
      seg = { start: 0, type: "tiff" };
    else if (file.jpeg)
      seg = await this.fileParser.getOrFindSegment("tiff");
    if (seg === void 0) return;
    let chunk = await this.fileParser.ensureSegmentChunk(seg);
    let parser = this.parsers.tiff = new TiffParser(chunk, options3, file);
    let thumb = await parser.extractThumbnail();
    if (file.close) file.close();
    return thumb;
  }
};

// node_modules/exifr/src/parser.mjs
var MAX_APP_SIZE = 65536;
var DEFAULT = "DEFAULT";
var FileParserBase = class {
  constructor(options3, file, parsers) {
    if (this.extendOptions)
      this.extendOptions(options3);
    this.options = options3;
    this.file = file;
    this.parsers = parsers;
  }
  errors = [];
  injectSegment(type, chunk) {
    if (this.options[type].enabled)
      this.createParser(type, chunk);
  }
  createParser(type, chunk) {
    let Parser = segmentParsers.get(type);
    let parser = new Parser(chunk, this.options, this.file);
    return this.parsers[type] = parser;
  }
  // NOTE: This method was created to be reusable and not just one off. Mainly due to parsing ifd0 before thumbnail extraction.
  //       But also because we want to enable advanced users selectively add and execute parser on the fly.
  createParsers(segments2) {
    for (let segment of segments2) {
      let { type, chunk } = segment;
      let segOpts = this.options[type];
      if (segOpts && segOpts.enabled) {
        let parser = this.parsers[type];
        if (parser && parser.append) {
        } else if (!parser) {
          this.createParser(type, chunk);
        }
      }
    }
  }
  async readSegments(segments2) {
    let promises = segments2.map(this.ensureSegmentChunk);
    await Promise.all(promises);
  }
  // TODO: deprecate
  ensureSegmentChunk = async (seg) => {
    let start = seg.start;
    let size = seg.size || MAX_APP_SIZE;
    if (this.file.chunked) {
      if (this.file.available(start, size)) {
        seg.chunk = this.file.subarray(start, size);
      } else {
        try {
          seg.chunk = await this.file.readChunk(start, size);
        } catch (err) {
          throwError(`Couldn't read segment: ${JSON.stringify(seg)}. ${err.message}`);
        }
      }
    } else if (this.file.byteLength > start + size) {
      seg.chunk = this.file.subarray(start, size);
    } else if (seg.size === void 0) {
      seg.chunk = this.file.subarray(start);
    } else {
      throwError(`Segment unreachable: ` + JSON.stringify(seg));
    }
    return seg.chunk;
  };
};
var AppSegmentParserBase = class {
  static headerLength = 4;
  // name. Couldn't use static name property because it is used by contructor name
  static type = void 0;
  // The data may span multiple APP segments.
  static multiSegment = false;
  static canHandle = () => false;
  // offset + length === end  |  begining and end of the whole segment, including the segment header 0xFF 0xEn + two lenght bytes.
  // start  + size   === end  |  begining and end of parseable content
  static findPosition(buffer, offset) {
    let length = buffer.getUint16(offset + 2) + 2;
    let headerLength = typeof this.headerLength === "function" ? this.headerLength(buffer, offset, length) : this.headerLength;
    let start = offset + headerLength;
    let size = length - headerLength;
    let end = start + size;
    return { offset, length, headerLength, start, size, end };
  }
  static parse(input, segOptions = {}) {
    let options3 = new Options({ [this.type]: segOptions });
    let instance = new this(input, options3, input);
    return instance.parse();
  }
  normalizeInput(input) {
    return input instanceof BufferView ? input : new BufferView(input);
  }
  errors = [];
  // raw parsed tags
  raw = /* @__PURE__ */ new Map();
  constructor(chunk, options3 = {}, file) {
    this.chunk = this.normalizeInput(chunk);
    this.file = file;
    this.type = this.constructor.type;
    this.globalOptions = this.options = options3;
    this.localOptions = options3[this.type];
    this.canTranslate = this.localOptions && this.localOptions.translate;
  }
  // can be overriden by parses (namely TIFF) that inherits from this base class.
  translate() {
    if (this.canTranslate)
      this.translated = this.translateBlock(this.raw, this.type);
  }
  get output() {
    if (this.translated)
      return this.translated;
    else if (this.raw)
      return Object.fromEntries(this.raw);
  }
  // split into separate function so that it can be used by TIFF but shared with other parsers.
  translateBlock(rawTags, blockKey) {
    let revivers = tagRevivers.get(blockKey);
    let valDict = tagValues.get(blockKey);
    let keyDict = tagKeys.get(blockKey);
    let blockOptions = this.options[blockKey];
    let canRevive = blockOptions.reviveValues && !!revivers;
    let canTranslateVal = blockOptions.translateValues && !!valDict;
    let canTranslateKey = blockOptions.translateKeys && !!keyDict;
    let output = {};
    for (let [key, val] of rawTags) {
      if (canRevive && revivers.has(key))
        val = revivers.get(key)(val);
      else if (canTranslateVal && valDict.has(key))
        val = this.translateValue(val, valDict.get(key));
      if (canTranslateKey && keyDict.has(key))
        key = keyDict.get(key) || key;
      output[key] = val;
    }
    return output;
  }
  // can be overriden by parses (namely ICC) that inherits from this base class.
  translateValue(val, tagEnum) {
    return tagEnum[val] || tagEnum[DEFAULT] || val;
  }
  handleError = (error) => {
    if (this.options.silentErrors)
      this.errors.push(error.message);
    else
      throw error;
  };
  assignToOutput(root, parserOutput) {
    this.assignObjectToOutput(root, this.constructor.type, parserOutput);
  }
  assignObjectToOutput(root, key, parserOutput) {
    if (this.globalOptions.mergeOutput)
      return Object.assign(root, parserOutput);
    if (root[key])
      Object.assign(root[key], parserOutput);
    else
      root[key] = parserOutput;
  }
};

// node_modules/exifr/src/file-parsers/jpeg.mjs
var JPEG_SOI = 65496;
var MARKER_1 = 255;
var MARKER_2_APP0 = 224;
var MARKER_2_APP15 = 239;
var MARKER_2_SOF0 = 192;
var MARKER_2_SOF2 = 194;
var MARKER_2_DHT = 196;
var MARKER_2_DQT = 219;
var MARKER_2_DRI = 221;
var MARKER_2_SOS = 218;
var MARKER_2_COMMENT = 254;
function isJpgMarker(marker2) {
  return marker2 === MARKER_2_SOF0 || marker2 === MARKER_2_SOF2 || marker2 === MARKER_2_DHT || marker2 === MARKER_2_DQT || marker2 === MARKER_2_DRI || marker2 === MARKER_2_SOS || marker2 === MARKER_2_COMMENT;
}
function isAppMarker(marker2) {
  return marker2 >= MARKER_2_APP0 && marker2 <= MARKER_2_APP15;
}
function getSegmentType(buffer, offset, length) {
  for (let [type, Parser] of segmentParsers)
    if (Parser.canHandle(buffer, offset, length))
      return type;
}
var JpegFileParser = class extends FileParserBase {
  static type = "jpeg";
  static canHandle(file, firstTwoBytes) {
    return firstTwoBytes === JPEG_SOI;
  }
  appSegments = [];
  jpegSegments = [];
  unknownSegments = [];
  async parse() {
    await this.findAppSegments();
    await this.readSegments(this.appSegments);
    this.mergeMultiSegments();
    this.createParsers(this.mergedAppSegments || this.appSegments);
  }
  setupSegmentFinderArgs(wanted) {
    if (wanted === true) {
      this.findAll = true;
      this.wanted = new Set(segmentParsers.keyList());
    } else {
      if (wanted === void 0)
        wanted = segmentParsers.keyList().filter((key) => this.options[key].enabled);
      else
        wanted = wanted.filter((key) => this.options[key].enabled && segmentParsers.has(key));
      this.findAll = false;
      this.remaining = new Set(wanted);
      this.wanted = new Set(wanted);
    }
    this.unfinishedMultiSegment = false;
  }
  async findAppSegments(offset = 0, wantedArray) {
    this.setupSegmentFinderArgs(wantedArray);
    let { file, findAll, wanted, remaining } = this;
    if (!findAll && this.file.chunked) {
      findAll = Array.from(wanted).some((type) => {
        let Parser = segmentParsers.get(type);
        let segOpts = this.options[type];
        return Parser.multiSegment && segOpts.multiSegment;
      });
      if (findAll) await this.file.readWhole();
    }
    offset = this.findAppSegmentsInRange(offset, file.byteLength);
    if (this.options.onlyTiff) return;
    if (file.chunked) {
      let eof = false;
      while (remaining.size > 0 && !eof && (file.canReadNextChunk || this.unfinishedMultiSegment)) {
        let { nextChunkOffset } = file;
        let hasIncompleteSegments = this.appSegments.some((seg) => !this.file.available(seg.offset || seg.start, seg.length || seg.size));
        if (offset > nextChunkOffset && !hasIncompleteSegments)
          eof = !await file.readNextChunk(offset);
        else
          eof = !await file.readNextChunk(nextChunkOffset);
        offset = this.findAppSegmentsInRange(offset, file.byteLength);
        if (offset === void 0) return;
      }
    }
  }
  findAppSegmentsInRange(offset, end) {
    end -= 2;
    let { file, findAll, wanted, remaining, options: options3 } = this;
    let marker2, length, type, Parser, seg, segOpts;
    for (; offset < end; offset++) {
      if (file.getUint8(offset) !== MARKER_1) continue;
      marker2 = file.getUint8(offset + 1);
      if (isAppMarker(marker2)) {
        length = file.getUint16(offset + 2);
        type = getSegmentType(file, offset, length);
        if (type && wanted.has(type)) {
          Parser = segmentParsers.get(type);
          seg = Parser.findPosition(file, offset);
          segOpts = options3[type];
          seg.type = type;
          this.appSegments.push(seg);
          if (!findAll) {
            if (Parser.multiSegment && segOpts.multiSegment) {
              this.unfinishedMultiSegment = seg.chunkNumber < seg.chunkCount;
              if (!this.unfinishedMultiSegment) remaining.delete(type);
            } else {
              remaining.delete(type);
            }
            if (remaining.size === 0) break;
          }
        }
        if (options3.recordUnknownSegments) {
          seg = AppSegmentParserBase.findPosition(file, offset);
          seg.marker = marker2;
          this.unknownSegments.push(seg);
        }
        offset += length + 1;
      } else if (isJpgMarker(marker2)) {
        length = file.getUint16(offset + 2);
        if (marker2 === MARKER_2_SOS && options3.stopAfterSos !== false)
          return void 0;
        if (options3.recordJpegSegments)
          this.jpegSegments.push({ offset, length, marker: marker2 });
        offset += length + 1;
      }
    }
    return offset;
  }
  // Goes through this.appSegments and merge all segments that are split between multiple chunks.
  // The processed array is written to this.mergedAppSegments.
  mergeMultiSegments() {
    let hasMultiSegments = this.appSegments.some((seg) => seg.multiSegment);
    if (!hasMultiSegments) return;
    let grouped = groupBy(this.appSegments, "type");
    this.mergedAppSegments = grouped.map(([type, typeSegments]) => {
      let Parser = segmentParsers.get(type, this.options);
      if (Parser.handleMultiSegments) {
        let chunk = Parser.handleMultiSegments(typeSegments);
        return { type, chunk };
      } else {
        return typeSegments[0];
      }
    });
  }
  getSegment(type) {
    return this.appSegments.find((seg) => seg.type === type);
  }
  async getOrFindSegment(type) {
    let seg = this.getSegment(type);
    if (seg === void 0) {
      await this.findAppSegments(0, [type]);
      seg = this.getSegment(type);
    }
    return seg;
  }
};
function groupBy(array, key) {
  let groups = /* @__PURE__ */ new Map();
  let item, groupKey, group;
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    groupKey = item[key];
    if (groups.has(groupKey))
      group = groups.get(groupKey);
    else
      groups.set(groupKey, group = []);
    group.push(item);
  }
  return Array.from(groups);
}
fileParsers.set("jpeg", JpegFileParser);

// node_modules/exifr/src/segment-parsers/tiff-exif.mjs
var MALFORMED = "Malformed EXIF data";
var THUMB_OFFSET = 513;
var THUMB_LENGTH = 514;
var BYTE = 1;
var ASCII = 2;
var SHORT = 3;
var LONG = 4;
var RATIONAL = 5;
var SBYTE = 6;
var UNDEFINED2 = 7;
var SSHORT = 8;
var SLONG = 9;
var SRATIONAL = 10;
var FLOAT = 11;
var DOUBLE = 12;
var IFD = 13;
var SIZE_LOOKUP = [
  void 0,
  // nothing at index 0
  1,
  // BYTE      - 8-bit unsigned integer
  1,
  // ASCII     - 8-bit bytes w/ last byte null
  2,
  // SHORT     - 16-bit unsigned integer
  4,
  // LONG      - 32-bit unsigned integer
  8,
  // RATIONAL  - 64-bit unsigned fraction of two 32-bit unsigned integers
  1,
  // SBYTE     - 8-bit signed integer
  1,
  // UNDEFINED - 8-bit untyped data
  2,
  // SSHORT    - 16-bit signed integer
  4,
  // SLONG     - 32-bit signed integer
  8,
  // SRATIONAL - 64-bit signed fraction of two 32-bit signed integers
  4,
  // FLOAT,    - 32-bit IEEE floating point
  8,
  // DOUBLE    - 64-bit IEEE floating point
  // https://sno.phy.queensu.ca/~phil/exiftool/standards.html
  4
  // IFD (sometimes used instead of 4 LONG)
];
function getTypedArray(type) {
  switch (type) {
    case BYTE:
      return Uint8Array;
    case SHORT:
      return Uint16Array;
    case LONG:
      return Uint32Array;
    case RATIONAL:
      return Array;
    case SBYTE:
      return Int8Array;
    case SSHORT:
      return Int16Array;
    case SLONG:
      return Int32Array;
    case SRATIONAL:
      return Array;
    case FLOAT:
      return Float32Array;
    case DOUBLE:
      return Float64Array;
    default:
      return Array;
  }
}
var TiffCore = class extends AppSegmentParserBase {
  // TODO: future API
  //tagsOutsideChunk = []
  parseHeader() {
    var byteOrder = this.chunk.getUint16();
    if (byteOrder === TIFF_LITTLE_ENDIAN)
      this.le = true;
    else if (byteOrder === TIFF_BIG_ENDIAN)
      this.le = false;
    this.chunk.le = this.le;
    this.headerParsed = true;
  }
  parseTags(offset, blockKey, block = /* @__PURE__ */ new Map()) {
    let { pick, skip } = this.options[blockKey];
    pick = new Set(pick);
    let onlyPick = pick.size > 0;
    let nothingToSkip = skip.size === 0;
    let entriesCount = this.chunk.getUint16(offset);
    offset += 2;
    for (let i = 0; i < entriesCount; i++) {
      let tag = this.chunk.getUint16(offset);
      if (onlyPick) {
        if (pick.has(tag)) {
          block.set(tag, this.parseTag(offset, tag, blockKey));
          pick.delete(tag);
          if (pick.size === 0) break;
        }
      } else if (nothingToSkip || !skip.has(tag)) {
        block.set(tag, this.parseTag(offset, tag, blockKey));
      }
      offset += 12;
    }
    return block;
  }
  parseTag(offset, tag, blockKey) {
    let { chunk } = this;
    let type = chunk.getUint16(offset + 2);
    let valueCount = chunk.getUint32(offset + 4);
    let valueSize = SIZE_LOOKUP[type];
    let totalSize = valueSize * valueCount;
    if (totalSize <= 4)
      offset = offset + 8;
    else
      offset = chunk.getUint32(offset + 8);
    if (type < BYTE || type > IFD)
      throwError(`Invalid TIFF value type. block: ${blockKey.toUpperCase()}, tag: ${tag.toString(16)}, type: ${type}, offset ${offset}`);
    if (offset > chunk.byteLength) {
      throwError(`Invalid TIFF value offset. block: ${blockKey.toUpperCase()}, tag: ${tag.toString(16)}, type: ${type}, offset ${offset} is outside of chunk size ${chunk.byteLength}`);
    }
    if (type === BYTE)
      return chunk.getUint8Array(offset, valueCount);
    if (type === ASCII)
      return normalizeString(chunk.getString(offset, valueCount));
    if (type === UNDEFINED2)
      return chunk.getUint8Array(offset, valueCount);
    if (valueCount === 1) {
      return this.parseTagValue(type, offset);
    } else {
      let ArrayType = getTypedArray(type);
      let arr = new ArrayType(valueCount);
      let offsetIncrement = valueSize;
      for (let i = 0; i < valueCount; i++) {
        arr[i] = this.parseTagValue(type, offset);
        offset += offsetIncrement;
      }
      return arr;
    }
  }
  parseTagValue(type, offset) {
    let { chunk } = this;
    switch (type) {
      case BYTE:
        return chunk.getUint8(offset);
      case SHORT:
        return chunk.getUint16(offset);
      case LONG:
        return chunk.getUint32(offset);
      case RATIONAL:
        return chunk.getUint32(offset) / chunk.getUint32(offset + 4);
      case SBYTE:
        return chunk.getInt8(offset);
      case SSHORT:
        return chunk.getInt16(offset);
      case SLONG:
        return chunk.getInt32(offset);
      case SRATIONAL:
        return chunk.getInt32(offset) / chunk.getInt32(offset + 4);
      case FLOAT:
        return chunk.getFloat(offset);
      case DOUBLE:
        return chunk.getDouble(offset);
      case 13:
        return chunk.getUint32(offset);
      default:
        throwError(`Invalid tiff type ${type}`);
    }
  }
};
var TAG_FILESOURCE = 41728;
var TAG_SCENETYPE = 41729;
var TiffExif = class extends TiffCore {
  static type = "tiff";
  static headerLength = 10;
  // .tif files do no have any APPn segments. and usually start right with TIFF header
  // .jpg files can have multiple APPn segments. They always have APP1 whic is a wrapper for TIFF.
  // We support both jpg and tiff so we're not looking for app1 segment but directly for TIFF
  // because app1 in jpg is only container for tiff.
  static canHandle(view, offset) {
    return view.getUint8(offset + 1) === 225 && view.getUint32(offset + 4) === 1165519206 && view.getUint16(offset + 8) === 0;
  }
  // APP1 includes TIFF formatted values, grouped into IFD blocks (IFD0, Exif, Interop, GPS, IFD1)
  async parse() {
    this.parseHeader();
    let { options: options3 } = this;
    if (options3.ifd0.enabled) await this.parseIfd0Block();
    if (options3.exif.enabled) await this.safeParse("parseExifBlock");
    if (options3.gps.enabled) await this.safeParse("parseGpsBlock");
    if (options3.interop.enabled) await this.safeParse("parseInteropBlock");
    if (options3.ifd1.enabled) await this.safeParse("parseThumbnailBlock");
    return this.createOutput();
  }
  // this is ugly but needed for async-to-promise babel plugin to work
  safeParse(methodName) {
    let result = this[methodName]();
    if (result.catch !== void 0) result = result.catch(this.handleError);
    return result;
  }
  findIfd0Offset() {
    if (this.ifd0Offset === void 0)
      this.ifd0Offset = this.chunk.getUint32(4);
  }
  findIfd1Offset() {
    if (this.ifd1Offset === void 0) {
      this.findIfd0Offset();
      let ifd0Entries = this.chunk.getUint16(this.ifd0Offset);
      let temp = this.ifd0Offset + 2 + ifd0Entries * 12;
      this.ifd1Offset = this.chunk.getUint32(temp);
    }
  }
  parseBlock(offset, blockKey) {
    let block = /* @__PURE__ */ new Map();
    this[blockKey] = block;
    this.parseTags(offset, blockKey, block);
    return block;
  }
  async parseIfd0Block() {
    if (this.ifd0) return;
    let { file } = this;
    this.findIfd0Offset();
    if (this.ifd0Offset < 8)
      throwError(MALFORMED);
    if (!file.chunked && this.ifd0Offset > file.byteLength)
      throwError(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${file.byteLength}`);
    if (file.tiff)
      await file.ensureChunk(this.ifd0Offset, estimateMetadataSize(this.options));
    let ifd0 = this.parseBlock(this.ifd0Offset, "ifd0");
    if (ifd0.size === 0) return;
    this.exifOffset = ifd0.get(TAG_IFD_EXIF);
    this.interopOffset = ifd0.get(TAG_IFD_INTEROP);
    this.gpsOffset = ifd0.get(TAG_IFD_GPS);
    this.xmp = ifd0.get(TAG_XMP);
    this.iptc = ifd0.get(TAG_IPTC);
    this.icc = ifd0.get(TAG_ICC);
    if (this.options.sanitize) {
      ifd0.delete(TAG_IFD_EXIF);
      ifd0.delete(TAG_IFD_INTEROP);
      ifd0.delete(TAG_IFD_GPS);
      ifd0.delete(TAG_XMP);
      ifd0.delete(TAG_IPTC);
      ifd0.delete(TAG_ICC);
    }
    return ifd0;
  }
  // EXIF block of TIFF of APP1 segment
  // 0x8769
  async parseExifBlock() {
    if (this.exif) return;
    if (!this.ifd0) await this.parseIfd0Block();
    if (this.exifOffset === void 0) return;
    if (this.file.tiff)
      await this.file.ensureChunk(this.exifOffset, estimateMetadataSize(this.options));
    let exif = this.parseBlock(this.exifOffset, "exif");
    if (!this.interopOffset) this.interopOffset = exif.get(TAG_IFD_INTEROP);
    this.makerNote = exif.get(TAG_MAKERNOTE);
    this.userComment = exif.get(TAG_USERCOMMENT);
    if (this.options.sanitize) {
      exif.delete(TAG_IFD_INTEROP);
      exif.delete(TAG_MAKERNOTE);
      exif.delete(TAG_USERCOMMENT);
    }
    this.unpack(exif, TAG_FILESOURCE);
    this.unpack(exif, TAG_SCENETYPE);
    return exif;
  }
  unpack(map, key) {
    let value = map.get(key);
    if (value && value.length === 1)
      map.set(key, value[0]);
  }
  // GPS block of TIFF of APP1 segment
  // 0x8825
  async parseGpsBlock() {
    if (this.gps) return;
    if (!this.ifd0) await this.parseIfd0Block();
    if (this.gpsOffset === void 0) return;
    let gps = this.parseBlock(this.gpsOffset, "gps");
    if (gps && gps.has(TAG_GPS_LAT) && gps.has(TAG_GPS_LON)) {
      gps.set("latitude", ConvertDMSToDD(...gps.get(TAG_GPS_LAT), gps.get(TAG_GPS_LATREF)));
      gps.set("longitude", ConvertDMSToDD(...gps.get(TAG_GPS_LON), gps.get(TAG_GPS_LONREF)));
    }
    return gps;
  }
  // INTEROP block of TIFF of APP1 segment
  // 0xA005
  async parseInteropBlock() {
    if (this.interop) return;
    if (!this.ifd0) await this.parseIfd0Block();
    if (this.interopOffset === void 0 && !this.exif) await this.parseExifBlock();
    if (this.interopOffset === void 0) return;
    return this.parseBlock(this.interopOffset, "interop");
  }
  // THUMBNAIL block of TIFF of APP1 segment
  // parsing this block is skipped when mergeOutput is true because thumbnail block contains with the same tags like ifd0 block
  // and one would override the other. 
  async parseThumbnailBlock(force = false) {
    if (this.ifd1 || this.ifd1Parsed) return;
    if (this.options.mergeOutput && !force) return;
    this.findIfd1Offset();
    if (this.ifd1Offset > 0) {
      this.parseBlock(this.ifd1Offset, "ifd1");
      this.ifd1Parsed = true;
    }
    return this.ifd1;
  }
  // THUMBNAIL buffer of TIFF of APP1 segment
  async extractThumbnail() {
    if (!this.headerParsed) this.parseHeader();
    if (!this.ifd1Parsed) await this.parseThumbnailBlock(true);
    if (this.ifd1 === void 0) return;
    let offset = this.ifd1.get(THUMB_OFFSET);
    let length = this.ifd1.get(THUMB_LENGTH);
    return this.chunk.getUint8Array(offset, length);
  }
  get image() {
    return this.ifd0;
  }
  get thumbnail() {
    return this.ifd1;
  }
  createOutput() {
    let tiff = {};
    let block, blockKey, blockOutput;
    for (blockKey of tiffBlocks) {
      block = this[blockKey];
      if (isEmpty(block)) continue;
      if (this.canTranslate)
        blockOutput = this.translateBlock(block, blockKey);
      else
        blockOutput = Object.fromEntries(block);
      if (this.options.mergeOutput) {
        if (blockKey === "ifd1") continue;
        Object.assign(tiff, blockOutput);
      } else {
        tiff[blockKey] = blockOutput;
      }
    }
    if (this.makerNote) tiff.makerNote = this.makerNote;
    if (this.userComment) tiff.userComment = this.userComment;
    return tiff;
  }
  assignToOutput(root, tiff) {
    if (this.globalOptions.mergeOutput) {
      Object.assign(root, tiff);
    } else {
      for (let [blockKey, block] of Object.entries(tiff))
        this.assignObjectToOutput(root, blockKey, block);
    }
  }
};
function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = degrees + minutes / 60 + seconds / (60 * 60);
  if (direction === "S" || direction === "W") dd *= -1;
  return dd;
}
segmentParsers.set("tiff", TiffExif);

// node_modules/exifr/src/highlevel/disableAllOptions.mjs
var disableAllOptions = {
  ifd0: false,
  ifd1: false,
  exif: false,
  gps: false,
  interop: false,
  // turning off all unnecessary steps and transformation to get the needed data ASAP
  sanitize: false,
  reviveValues: true,
  translateKeys: false,
  translateValues: false,
  mergeOutput: false
};

// node_modules/exifr/src/highlevel/gps.mjs
var gpsOnlyOptions = Object.assign({}, disableAllOptions, {
  firstChunkSize: 4e4,
  gps: [TAG_GPS_LATREF, TAG_GPS_LAT, TAG_GPS_LONREF, TAG_GPS_LON]
});

// node_modules/exifr/src/highlevel/thumb.mjs
var thumbnailOnlyOptions = Object.assign({}, disableAllOptions, {
  tiff: false,
  ifd1: true,
  // needed to prevent options from disabling ifd1
  mergeOutput: false
});

// node_modules/exifr/src/highlevel/orientation.mjs
var orientationOnlyOptions = Object.assign({}, disableAllOptions, {
  firstChunkSize: 4e4,
  ifd0: [TAG_ORIENTATION]
});
async function orientation(input) {
  let exr = new Exifr(orientationOnlyOptions);
  await exr.read(input);
  let output = await exr.parse();
  if (output && output.ifd0) {
    return output.ifd0[TAG_ORIENTATION];
  }
}
var rotations = Object.freeze({
  1: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 0, rad: 0 },
  2: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 0, rad: 0 },
  3: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 },
  4: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 },
  5: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 },
  6: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 },
  7: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 },
  8: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 }
});
var rotateCanvas = true;
var rotateCss = true;
if (typeof navigator === "object") {
  let ua = navigator.userAgent;
  if (ua.includes("iPad") || ua.includes("iPhone")) {
    let matchArray = ua.match(/OS (\d+)_(\d+)/);
    if (matchArray) {
      let [, major, minor] = matchArray;
      let version = Number(major) + Number(minor) * 0.1;
      rotateCanvas = version < 13.4;
      rotateCss = false;
    }
  } else if (ua.includes("OS X 10")) {
    let [, version] = ua.match(/OS X 10[_.](\d+)/);
    rotateCanvas = rotateCss = Number(version) < 15;
  }
  if (ua.includes("Chrome/")) {
    let [, version] = ua.match(/Chrome\/(\d+)/);
    rotateCanvas = rotateCss = Number(version) < 81;
  } else if (ua.includes("Firefox/")) {
    let [, version] = ua.match(/Firefox\/(\d+)/);
    rotateCanvas = rotateCss = Number(version) < 77;
  }
}
async function rotation(input) {
  let or = await orientation(input);
  return Object.assign({
    canvas: rotateCanvas,
    css: rotateCss
  }, rotations[or]);
}

// node_modules/exifr/src/util/DynamicBufferView.mjs
var DynamicBufferView = class extends BufferView {
  ranges = new Ranges();
  constructor(...args) {
    super(...args);
    if (this.byteLength !== 0)
      this.ranges.add(0, this.byteLength);
  }
  _tryExtend(offset, length, abChunk) {
    if (offset === 0 && this.byteLength === 0 && abChunk) {
      let dataView = new DataView(abChunk.buffer || abChunk, abChunk.byteOffset, abChunk.byteLength);
      this._swapDataView(dataView);
    } else {
      let end = offset + length;
      if (end > this.byteLength) {
        let { dataView } = this._extend(end);
        this._swapDataView(dataView);
      }
    }
  }
  _extend(newLength) {
    let uintView;
    if (hasBuffer)
      uintView = Buffer2.allocUnsafe(newLength);
    else
      uintView = new Uint8Array(newLength);
    let dataView = new DataView(uintView.buffer, uintView.byteOffset, uintView.byteLength);
    uintView.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0);
    return { uintView, dataView };
  }
  subarray(offset, length, canExtend = false) {
    length = length || this._lengthToEnd(offset);
    if (canExtend) this._tryExtend(offset, length);
    this.ranges.add(offset, length);
    return super.subarray(offset, length);
  }
  // TODO: write tests for extending .set()
  set(arg, offset, canExtend = false) {
    if (canExtend) this._tryExtend(offset, arg.byteLength, arg);
    let chunk = super.set(arg, offset);
    this.ranges.add(offset, chunk.byteLength);
    return chunk;
  }
  async ensureChunk(offset, length) {
    if (!this.chunked) return;
    if (this.ranges.available(offset, length)) return;
    await this.readChunk(offset, length);
  }
  // Returns bool indicating wheter buffer contains useful data (read from file) at given offset/length
  // or if its so far only allocated & unitialized memory ready to be written into.
  available(offset, length) {
    return this.ranges.available(offset, length);
  }
};
var Ranges = class {
  list = [];
  get length() {
    return this.list.length;
  }
  // TODO: add padding - because it's better to do just one disk read instead of two
  //       even though there are a few unused bytes between the two needed ranges
  add(offset, length, padding = 0) {
    let end = offset + length;
    let within = this.list.filter((range) => isBetween(offset, range.offset, end) || isBetween(offset, range.end, end));
    if (within.length > 0) {
      offset = Math.min(offset, ...within.map((range2) => range2.offset));
      end = Math.max(end, ...within.map((range2) => range2.end));
      length = end - offset;
      let range = within.shift();
      range.offset = offset;
      range.length = length;
      range.end = end;
      this.list = this.list.filter((range2) => !within.includes(range2));
    } else {
      this.list.push({ offset, length, end });
    }
  }
  // Returns bool indicating wheter buffer contains useful data (read from file) at given offset/length
  // or if its so far only allocated & unitialized memory ready to be written into.
  available(offset, length) {
    let end = offset + length;
    return this.list.some((range) => range.offset <= offset && end <= range.end);
  }
};
function isBetween(min, val, max) {
  return min <= val && val <= max;
}

// node_modules/exifr/src/file-readers/ChunkedReader.mjs
var ChunkedReader = class extends DynamicBufferView {
  constructor(input, options3) {
    super(0);
    this.input = input;
    this.options = options3;
  }
  chunksRead = 0;
  async readWhole() {
    this.chunked = false;
    await this.readChunk(this.nextChunkOffset);
  }
  async readChunked() {
    this.chunked = true;
    await this.readChunk(0, this.options.firstChunkSize);
  }
  async readNextChunk(offset = this.nextChunkOffset) {
    if (this.fullyRead) {
      this.chunksRead++;
      return false;
    }
    let sizeToRead = this.options.chunkSize;
    let chunk = await this.readChunk(offset, sizeToRead);
    if (chunk) return chunk.byteLength === sizeToRead;
    return false;
  }
  // todo: only read unread bytes. ignore overlaping bytes.
  async readChunk(offset, length) {
    this.chunksRead++;
    length = this.safeWrapAddress(offset, length);
    if (length === 0) return void 0;
    return this._readChunk(offset, length);
  }
  safeWrapAddress(offset, length) {
    if (this.size !== void 0 && offset + length > this.size)
      return Math.max(0, this.size - offset);
    return length;
  }
  get nextChunkOffset() {
    if (this.ranges.list.length !== 0)
      return this.ranges.list[0].length;
  }
  get canReadNextChunk() {
    return this.chunksRead < this.options.chunkLimit;
  }
  get fullyRead() {
    if (this.size === void 0) return false;
    return this.nextChunkOffset === this.size;
  }
  read() {
    if (this.options.chunked)
      return this.readChunked();
    else
      return this.readWhole();
  }
  // DO NOT REMOVE!
  // Some inheriting readers need additional method for cleanup.
  // This dummy method makes sure anyone can safely call exifr.file.close() and not have to worry.
  close() {
  }
};

// node_modules/exifr/src/file-readers/BlobReader.mjs
var BlobReader = class extends ChunkedReader {
  async readWhole() {
    this.chunked = false;
    let arrayBuffer = await readBlobAsArrayBuffer(this.input);
    this._swapArrayBuffer(arrayBuffer);
  }
  readChunked() {
    this.chunked = true;
    this.size = this.input.size;
    return super.readChunked();
  }
  async _readChunk(offset, length) {
    let end = length ? offset + length : void 0;
    let blob = this.input.slice(offset, end);
    let abChunk = await readBlobAsArrayBuffer(blob);
    return this.set(abChunk, offset, true);
  }
};
fileReaders.set("blob", BlobReader);

// node_modules/@uppy/thumbnail-generator/lib/locale.js
var locale_default3 = {
  strings: {
    generatingThumbnails: "Generating thumbnails..."
  }
};

// node_modules/@uppy/thumbnail-generator/lib/index.js
var packageJson5 = {
  "version": "4.1.1"
};
function canvasToBlob(canvas, type, quality) {
  try {
    canvas.getContext("2d").getImageData(0, 0, 1, 1);
  } catch (err) {
    if (err.code === 18) {
      return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
    }
  }
  if (canvas.toBlob) {
    return new Promise((resolve) => {
      canvas.toBlob(resolve, type, quality);
    }).then((blob) => {
      if (blob === null) {
        throw new Error("cannot read image, probably an svg with external resources");
      }
      return blob;
    });
  }
  return Promise.resolve().then(() => {
    return dataURItoBlob_default(canvas.toDataURL(type, quality), {});
  }).then((blob) => {
    if (blob === null) {
      throw new Error("could not extract blob, probably an old browser");
    }
    return blob;
  });
}
function rotateImage(image, translate) {
  let w = image.width;
  let h = image.height;
  if (translate.deg === 90 || translate.deg === 270) {
    w = image.height;
    h = image.width;
  }
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const context = canvas.getContext("2d");
  context.translate(w / 2, h / 2);
  if (translate.canvas) {
    context.rotate(translate.rad);
    context.scale(translate.scaleX, translate.scaleY);
  }
  context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
  return canvas;
}
function protect(image) {
  const ratio = image.width / image.height;
  const maxSquare = 5e6;
  const maxSize = 4096;
  let maxW = Math.floor(Math.sqrt(maxSquare * ratio));
  let maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
  if (maxW > maxSize) {
    maxW = maxSize;
    maxH = Math.round(maxW / ratio);
  }
  if (maxH > maxSize) {
    maxH = maxSize;
    maxW = Math.round(ratio * maxH);
  }
  if (image.width > maxW) {
    const canvas = document.createElement("canvas");
    canvas.width = maxW;
    canvas.height = maxH;
    canvas.getContext("2d").drawImage(image, 0, 0, maxW, maxH);
    return canvas;
  }
  return image;
}
var defaultOptions3 = {
  thumbnailWidth: null,
  thumbnailHeight: null,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: false,
  lazy: false
};
var ThumbnailGenerator = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, {
      ...defaultOptions3,
      ...opts
    });
    this.onFileAdded = (file) => {
      if (!file.preview && file.data && isPreviewSupported(file.type) && !file.isRemote) {
        this.addToQueue(file.id);
      }
    };
    this.onCancelRequest = (file) => {
      const index = this.queue.indexOf(file.id);
      if (index !== -1) {
        this.queue.splice(index, 1);
      }
    };
    this.onFileRemoved = (file) => {
      const index = this.queue.indexOf(file.id);
      if (index !== -1) {
        this.queue.splice(index, 1);
      }
      if (file.preview && isObjectURL(file.preview)) {
        URL.revokeObjectURL(file.preview);
      }
    };
    this.onRestored = () => {
      const restoredFiles = this.uppy.getFiles().filter((file) => file.isRestored);
      restoredFiles.forEach((file) => {
        if (!file.preview || isObjectURL(file.preview)) {
          this.addToQueue(file.id);
        }
      });
    };
    this.onAllFilesRemoved = () => {
      this.queue = [];
    };
    this.waitUntilAllProcessed = (fileIDs) => {
      fileIDs.forEach((fileID) => {
        const file = this.uppy.getFile(fileID);
        this.uppy.emit("preprocess-progress", file, {
          mode: "indeterminate",
          message: this.i18n("generatingThumbnails")
        });
      });
      const emitPreprocessCompleteForAll = () => {
        fileIDs.forEach((fileID) => {
          const file = this.uppy.getFile(fileID);
          this.uppy.emit("preprocess-complete", file);
        });
      };
      return new Promise((resolve) => {
        if (this.queueProcessing) {
          this.uppy.once("thumbnail:all-generated", () => {
            emitPreprocessCompleteForAll();
            resolve();
          });
        } else {
          emitPreprocessCompleteForAll();
          resolve();
        }
      });
    };
    this.type = "modifier";
    this.id = this.opts.id || "ThumbnailGenerator";
    this.title = "Thumbnail Generator";
    this.queue = [];
    this.queueProcessing = false;
    this.defaultThumbnailDimension = 200;
    this.thumbnailType = this.opts.thumbnailType;
    this.defaultLocale = locale_default3;
    this.i18nInit();
    if (this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload) {
      throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
    }
  }
  createThumbnail(file, targetWidth, targetHeight) {
    const originalUrl = URL.createObjectURL(file.data);
    const onload = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = originalUrl;
      image.addEventListener("load", () => {
        URL.revokeObjectURL(originalUrl);
        resolve(image);
      });
      image.addEventListener("error", (event2) => {
        URL.revokeObjectURL(originalUrl);
        reject(event2.error || new Error("Could not create thumbnail"));
      });
    });
    const orientationPromise = rotation(file.data).catch(() => 1);
    return Promise.all([onload, orientationPromise]).then((_ref) => {
      let [image, orientation2] = _ref;
      const dimensions = this.getProportionalDimensions(image, targetWidth, targetHeight, orientation2.deg);
      const rotatedImage = rotateImage(image, orientation2);
      const resizedImage = this.resizeImage(rotatedImage, dimensions.width, dimensions.height);
      return canvasToBlob(resizedImage, this.thumbnailType, 80);
    }).then((blob) => {
      return URL.createObjectURL(blob);
    });
  }
  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */
  getProportionalDimensions(img, width, height, deg) {
    let aspect = img.width / img.height;
    if (deg === 90 || deg === 270) {
      aspect = img.height / img.width;
    }
    if (width != null) {
      return {
        width,
        height: Math.round(width / aspect)
      };
    }
    if (height != null) {
      return {
        width: Math.round(height * aspect),
        height
      };
    }
    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
  }
  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */
  // eslint-disable-next-line class-methods-use-this
  resizeImage(image, targetWidth, targetHeight) {
    let img = protect(image);
    let steps = Math.ceil(Math.log2(img.width / targetWidth));
    if (steps < 1) {
      steps = 1;
    }
    let sW = targetWidth * 2 ** (steps - 1);
    let sH = targetHeight * 2 ** (steps - 1);
    const x = 2;
    while (steps--) {
      const canvas = document.createElement("canvas");
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext("2d").drawImage(img, 0, 0, sW, sH);
      img = canvas;
      sW = Math.round(sW / x);
      sH = Math.round(sH / x);
    }
    return img;
  }
  /**
   * Set the preview URL for a file.
   */
  setPreviewURL(fileID, preview) {
    this.uppy.setFileState(fileID, {
      preview
    });
  }
  addToQueue(fileID) {
    this.queue.push(fileID);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
  }
  processQueue() {
    this.queueProcessing = true;
    if (this.queue.length > 0) {
      const current = this.uppy.getFile(this.queue.shift());
      if (!current) {
        this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error");
        return Promise.resolve();
      }
      return this.requestThumbnail(current).catch(() => {
      }).then(() => this.processQueue());
    }
    this.queueProcessing = false;
    this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue");
    this.uppy.emit("thumbnail:all-generated");
    return Promise.resolve();
  }
  requestThumbnail(file) {
    if (isPreviewSupported(file.type) && !file.isRemote) {
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((preview) => {
        this.setPreviewURL(file.id, preview);
        this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${file.id}`);
        this.uppy.emit("thumbnail:generated", this.uppy.getFile(file.id), preview);
      }).catch((err) => {
        this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${file.id}:`, "warning");
        this.uppy.log(err, "warning");
        this.uppy.emit("thumbnail:error", this.uppy.getFile(file.id), err);
      });
    }
    return Promise.resolve();
  }
  install() {
    this.uppy.on("file-removed", this.onFileRemoved);
    this.uppy.on("cancel-all", this.onAllFilesRemoved);
    if (this.opts.lazy) {
      this.uppy.on("thumbnail:request", this.onFileAdded);
      this.uppy.on("thumbnail:cancel", this.onCancelRequest);
    } else {
      this.uppy.on("thumbnail:request", this.onFileAdded);
      this.uppy.on("file-added", this.onFileAdded);
      this.uppy.on("restored", this.onRestored);
    }
    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.addPreProcessor(this.waitUntilAllProcessed);
    }
  }
  uninstall() {
    this.uppy.off("file-removed", this.onFileRemoved);
    this.uppy.off("cancel-all", this.onAllFilesRemoved);
    if (this.opts.lazy) {
      this.uppy.off("thumbnail:request", this.onFileAdded);
      this.uppy.off("thumbnail:cancel", this.onCancelRequest);
    } else {
      this.uppy.off("thumbnail:request", this.onFileAdded);
      this.uppy.off("file-added", this.onFileAdded);
      this.uppy.off("restored", this.onRestored);
    }
    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.removePreProcessor(this.waitUntilAllProcessed);
    }
  }
};
ThumbnailGenerator.VERSION = packageJson5.version;

// node_modules/@uppy/utils/lib/findAllDOMElements.js
function findAllDOMElements(element) {
  if (typeof element === "string") {
    const elements = document.querySelectorAll(element);
    return elements.length === 0 ? null : Array.from(elements);
  }
  if (typeof element === "object" && isDOMElement(element)) {
    return [element];
  }
  return null;
}
var findAllDOMElements_default = findAllDOMElements;

// node_modules/@uppy/utils/lib/toArray.js
var toArray_default = Array.from;

// node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js
function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  let {
    onSuccess
  } = _ref;
  directoryReader.readEntries(
    (entries) => {
      const newEntries = [...oldEntries, ...entries];
      if (entries.length) {
        queueMicrotask(() => {
          getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
            onSuccess
          });
        });
      } else {
        onSuccess(newEntries);
      }
    },
    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (error) => {
      logDropError(error);
      onSuccess(oldEntries);
    }
  );
}

// node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js
function getAsFileSystemHandleFromEntry(entry, logDropError) {
  if (entry == null) return entry;
  return {
    kind: (
      // eslint-disable-next-line no-nested-ternary
      entry.isFile ? "file" : entry.isDirectory ? "directory" : void 0
    ),
    name: entry.name,
    getFile() {
      return new Promise((resolve, reject) => entry.file(resolve, reject));
    },
    async *values() {
      const directoryReader = entry.createReader();
      const entries = await new Promise((resolve) => {
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: (dirEntries) => resolve(dirEntries.map((file) => getAsFileSystemHandleFromEntry(file, logDropError)))
        });
      });
      yield* entries;
    },
    isSameEntry: void 0
  };
}
function createPromiseToAddFileOrParseDirectory(entry, relativePath, lastResortFile) {
  try {
    if (lastResortFile === void 0) {
      lastResortFile = void 0;
    }
    return async function* () {
      const getNextRelativePath = () => `${relativePath}/${entry.name}`;
      if (entry.kind === "file") {
        const file = await entry.getFile();
        if (file != null) {
          ;
          file.relativePath = relativePath ? getNextRelativePath() : null;
          yield file;
        } else if (lastResortFile != null) yield lastResortFile;
      } else if (entry.kind === "directory") {
        for await (const handle of entry.values()) {
          yield* createPromiseToAddFileOrParseDirectory(handle, relativePath ? getNextRelativePath() : entry.name);
        }
      } else if (lastResortFile != null) yield lastResortFile;
    }();
  } catch (e) {
    return Promise.reject(e);
  }
}
async function* getFilesFromDataTransfer(dataTransfer, logDropError) {
  const fileSystemHandles = await Promise.all(Array.from(dataTransfer.items, async (item) => {
    var _fileSystemHandle;
    let fileSystemHandle;
    const getAsEntry = () => typeof item.getAsEntry === "function" ? item.getAsEntry() : item.webkitGetAsEntry();
    (_fileSystemHandle = fileSystemHandle) != null ? _fileSystemHandle : fileSystemHandle = getAsFileSystemHandleFromEntry(getAsEntry(), logDropError);
    return {
      fileSystemHandle,
      lastResortFile: item.getAsFile()
      // can be used as a fallback in case other methods fail
    };
  }));
  for (const {
    lastResortFile,
    fileSystemHandle
  } of fileSystemHandles) {
    if (fileSystemHandle != null) {
      try {
        yield* createPromiseToAddFileOrParseDirectory(fileSystemHandle, "", lastResortFile);
      } catch (err) {
        if (lastResortFile != null) {
          yield lastResortFile;
        } else {
          logDropError(err);
        }
      }
    } else if (lastResortFile != null) yield lastResortFile;
  }
}

// node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js
function fallbackApi(dataTransfer) {
  const files = toArray_default(dataTransfer.files);
  return Promise.resolve(files);
}

// node_modules/@uppy/utils/lib/getDroppedFiles/index.js
async function getDroppedFiles(dataTransfer, options3) {
  var _options$logDropError;
  const logDropError = (_options$logDropError = options3 == null ? void 0 : options3.logDropError) != null ? _options$logDropError : Function.prototype;
  try {
    const accumulator = [];
    for await (const file of getFilesFromDataTransfer(dataTransfer, logDropError)) {
      accumulator.push(file);
    }
    return accumulator;
  } catch {
    return fallbackApi(dataTransfer);
  }
}

// node_modules/@uppy/provider-views/lib/ProviderView/ProviderView.js
var import_classnames6 = __toESM(require_classnames(), 1);

// node_modules/@uppy/utils/lib/remoteFileObjToLocal.js
function remoteFileObjToLocal(file) {
  return {
    ...file,
    type: file.mimeType,
    extension: file.name ? getFileNameAndExtension(file.name).extension : null
  };
}

// node_modules/preact/hooks/src/index.js
var currentIndex;
var currentComponent;
var previousComponent;
var currentHook = 0;
var afterPaintEffects = [];
var options2 = (
  /** @type {import('./internal').Options} */
  options_default
);
var oldBeforeDiff = options2._diff;
var oldBeforeRender = options2._render;
var oldAfterDiff = options2.diffed;
var oldCommit = options2._commit;
var oldBeforeUnmount = options2.unmount;
var oldRoot = options2._root;
var RAF_TIMEOUT = 35;
var prevRaf;
options2._diff = (vnode) => {
  currentComponent = null;
  if (oldBeforeDiff) oldBeforeDiff(vnode);
};
options2._root = (vnode, parentDom) => {
  if (vnode && parentDom._children && parentDom._children._mask) {
    vnode._mask = parentDom._children._mask;
  }
  if (oldRoot) oldRoot(vnode, parentDom);
};
options2._render = (vnode) => {
  if (oldBeforeRender) oldBeforeRender(vnode);
  currentComponent = vnode._component;
  currentIndex = 0;
  const hooks = currentComponent.__hooks;
  if (hooks) {
    if (previousComponent === currentComponent) {
      hooks._pendingEffects = [];
      currentComponent._renderCallbacks = [];
      hooks._list.forEach((hookItem) => {
        if (hookItem._nextValue) {
          hookItem._value = hookItem._nextValue;
        }
        hookItem._pendingArgs = hookItem._nextValue = void 0;
      });
    } else {
      hooks._pendingEffects.forEach(invokeCleanup);
      hooks._pendingEffects.forEach(invokeEffect);
      hooks._pendingEffects = [];
      currentIndex = 0;
    }
  }
  previousComponent = currentComponent;
};
options2.diffed = (vnode) => {
  if (oldAfterDiff) oldAfterDiff(vnode);
  const c = vnode._component;
  if (c && c.__hooks) {
    if (c.__hooks._pendingEffects.length) afterPaint(afterPaintEffects.push(c));
    c.__hooks._list.forEach((hookItem) => {
      if (hookItem._pendingArgs) {
        hookItem._args = hookItem._pendingArgs;
      }
      hookItem._pendingArgs = void 0;
    });
  }
  previousComponent = currentComponent = null;
};
options2._commit = (vnode, commitQueue) => {
  commitQueue.some((component) => {
    try {
      component._renderCallbacks.forEach(invokeCleanup);
      component._renderCallbacks = component._renderCallbacks.filter(
        (cb) => cb._value ? invokeEffect(cb) : true
      );
    } catch (e) {
      commitQueue.some((c) => {
        if (c._renderCallbacks) c._renderCallbacks = [];
      });
      commitQueue = [];
      options2._catchError(e, component._vnode);
    }
  });
  if (oldCommit) oldCommit(vnode, commitQueue);
};
options2.unmount = (vnode) => {
  if (oldBeforeUnmount) oldBeforeUnmount(vnode);
  const c = vnode._component;
  if (c && c.__hooks) {
    let hasErrored;
    c.__hooks._list.forEach((s) => {
      try {
        invokeCleanup(s);
      } catch (e) {
        hasErrored = e;
      }
    });
    c.__hooks = void 0;
    if (hasErrored) options2._catchError(hasErrored, c._vnode);
  }
};
function getHookState(index, type) {
  if (options2._hook) {
    options2._hook(currentComponent, index, currentHook || type);
  }
  currentHook = 0;
  const hooks = currentComponent.__hooks || (currentComponent.__hooks = {
    _list: [],
    _pendingEffects: []
  });
  if (index >= hooks._list.length) {
    hooks._list.push({});
  }
  return hooks._list[index];
}
function useState(initialState) {
  currentHook = 1;
  return useReducer(invokeOrReturn, initialState);
}
function useReducer(reducer, initialState, init) {
  const hookState = getHookState(currentIndex++, 2);
  hookState._reducer = reducer;
  if (!hookState._component) {
    hookState._value = [
      !init ? invokeOrReturn(void 0, initialState) : init(initialState),
      (action) => {
        const currentValue = hookState._nextValue ? hookState._nextValue[0] : hookState._value[0];
        const nextValue = hookState._reducer(currentValue, action);
        if (currentValue !== nextValue) {
          hookState._nextValue = [nextValue, hookState._value[1]];
          hookState._component.setState({});
        }
      }
    ];
    hookState._component = currentComponent;
    if (!currentComponent._hasScuFromHooks) {
      let updateHookState = function(p, s, c) {
        if (!hookState._component.__hooks) return true;
        const isStateHook = (x) => !!x._component;
        const stateHooks = hookState._component.__hooks._list.filter(isStateHook);
        const allHooksEmpty = stateHooks.every((x) => !x._nextValue);
        if (allHooksEmpty) {
          return prevScu ? prevScu.call(this, p, s, c) : true;
        }
        let shouldUpdate = hookState._component.props !== p;
        stateHooks.forEach((hookItem) => {
          if (hookItem._nextValue) {
            const currentValue = hookItem._value[0];
            hookItem._value = hookItem._nextValue;
            hookItem._nextValue = void 0;
            if (currentValue !== hookItem._value[0]) shouldUpdate = true;
          }
        });
        return prevScu ? prevScu.call(this, p, s, c) || shouldUpdate : shouldUpdate;
      };
      currentComponent._hasScuFromHooks = true;
      let prevScu = currentComponent.shouldComponentUpdate;
      const prevCWU = currentComponent.componentWillUpdate;
      currentComponent.componentWillUpdate = function(p, s, c) {
        if (this._force) {
          let tmp = prevScu;
          prevScu = void 0;
          updateHookState(p, s, c);
          prevScu = tmp;
        }
        if (prevCWU) prevCWU.call(this, p, s, c);
      };
      currentComponent.shouldComponentUpdate = updateHookState;
    }
  }
  return hookState._nextValue || hookState._value;
}
function useEffect(callback, args) {
  const state = getHookState(currentIndex++, 3);
  if (!options2._skipEffects && argsChanged(state._args, args)) {
    state._value = callback;
    state._pendingArgs = args;
    currentComponent.__hooks._pendingEffects.push(state);
  }
}
function useRef(initialValue) {
  currentHook = 5;
  return useMemo(() => ({ current: initialValue }), []);
}
function useMemo(factory, args) {
  const state = getHookState(currentIndex++, 7);
  if (argsChanged(state._args, args)) {
    state._value = factory();
    state._args = args;
    state._factory = factory;
  }
  return state._value;
}
function useCallback(callback, args) {
  currentHook = 8;
  return useMemo(() => callback, args);
}
function flushAfterPaintEffects() {
  let component;
  while (component = afterPaintEffects.shift()) {
    if (!component._parentDom || !component.__hooks) continue;
    try {
      component.__hooks._pendingEffects.forEach(invokeCleanup);
      component.__hooks._pendingEffects.forEach(invokeEffect);
      component.__hooks._pendingEffects = [];
    } catch (e) {
      component.__hooks._pendingEffects = [];
      options2._catchError(e, component._vnode);
    }
  }
}
var HAS_RAF = typeof requestAnimationFrame == "function";
function afterNextFrame(callback) {
  const done = () => {
    clearTimeout(timeout);
    if (HAS_RAF) cancelAnimationFrame(raf);
    setTimeout(callback);
  };
  const timeout = setTimeout(done, RAF_TIMEOUT);
  let raf;
  if (HAS_RAF) {
    raf = requestAnimationFrame(done);
  }
}
function afterPaint(newQueueLength) {
  if (newQueueLength === 1 || prevRaf !== options2.requestAnimationFrame) {
    prevRaf = options2.requestAnimationFrame;
    (prevRaf || afterNextFrame)(flushAfterPaintEffects);
  }
}
function invokeCleanup(hook) {
  const comp = currentComponent;
  let cleanup = hook._cleanup;
  if (typeof cleanup == "function") {
    hook._cleanup = void 0;
    cleanup();
  }
  currentComponent = comp;
}
function invokeEffect(hook) {
  const comp = currentComponent;
  hook._cleanup = hook._value();
  currentComponent = comp;
}
function argsChanged(oldArgs, newArgs) {
  return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some((arg, index) => arg !== oldArgs[index]);
}
function invokeOrReturn(arg, f) {
  return typeof f == "function" ? f(arg) : f;
}

// node_modules/@uppy/provider-views/lib/ProviderView/AuthView.js
function GoogleIcon() {
  return createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, createElement("circle", {
    fill: "#FFF",
    cx: "13",
    cy: "13",
    r: "13"
  }), createElement("path", {
    d: "M21.64 13.205c0-.639-.057-1.252-.164-1.841H13v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",
    fill: "#4285F4",
    "fill-rule": "nonzero"
  }), createElement("path", {
    d: "M13 22c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.957v2.332A8.997 8.997 0 0013 22z",
    fill: "#34A853",
    "fill-rule": "nonzero"
  }), createElement("path", {
    d: "M7.964 14.71A5.41 5.41 0 017.682 13c0-.593.102-1.17.282-1.71V8.958H4.957A8.996 8.996 0 004 13c0 1.452.348 2.827.957 4.042l3.007-2.332z",
    fill: "#FBBC05",
    "fill-rule": "nonzero"
  }), createElement("path", {
    d: "M13 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C17.463 4.891 15.426 4 13 4a8.997 8.997 0 00-8.043 4.958l3.007 2.332C8.672 9.163 10.656 7.58 13 7.58z",
    fill: "#EA4335",
    "fill-rule": "nonzero"
  }), createElement("path", {
    d: "M4 4h18v18H4z"
  })));
}
function DefaultForm(_ref) {
  let {
    pluginName,
    i18n,
    onAuth
  } = _ref;
  const isGoogleDrive = pluginName === "Google Drive";
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onAuth();
  }, [onAuth]);
  return createElement("form", {
    onSubmit
  }, isGoogleDrive ? createElement("button", {
    type: "submit",
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn uppy-Provider-btn-google",
    "data-uppy-super-focusable": true
  }, createElement(GoogleIcon, null), i18n("signInWithGoogle")) : createElement("button", {
    type: "submit",
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
    "data-uppy-super-focusable": true
  }, i18n("authenticateWith", {
    pluginName
  })));
}
var defaultRenderForm = (_ref2) => {
  let {
    pluginName,
    i18n,
    onAuth
  } = _ref2;
  return createElement(DefaultForm, {
    pluginName,
    i18n,
    onAuth
  });
};
function AuthView(_ref3) {
  let {
    loading,
    pluginName,
    pluginIcon,
    i18n,
    handleAuth,
    renderForm = defaultRenderForm
  } = _ref3;
  return createElement("div", {
    className: "uppy-Provider-auth"
  }, createElement("div", {
    className: "uppy-Provider-authIcon"
  }, pluginIcon()), createElement("div", {
    className: "uppy-Provider-authTitle"
  }, i18n("authenticateWithTitle", {
    pluginName
  })), renderForm({
    pluginName,
    i18n,
    loading,
    onAuth: handleAuth
  }));
}

// node_modules/@uppy/provider-views/lib/ProviderView/Header.js
var import_classnames3 = __toESM(require_classnames(), 1);

// node_modules/@uppy/provider-views/lib/ProviderView/User.js
function User(_ref) {
  let {
    i18n,
    logout: logout2,
    username
  } = _ref;
  return createElement(Fragment2, null, username && createElement("span", {
    className: "uppy-ProviderBrowser-user",
    key: "username"
  }, username), createElement("button", {
    type: "button",
    onClick: logout2,
    className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowser-userLogout",
    key: "logout"
  }, i18n("logOut")));
}

// node_modules/@uppy/provider-views/lib/Breadcrumbs.js
function Breadcrumbs(props) {
  const {
    openFolder,
    title,
    breadcrumbsIcon,
    breadcrumbs,
    i18n
  } = props;
  return createElement("div", {
    className: "uppy-Provider-breadcrumbs"
  }, createElement("div", {
    className: "uppy-Provider-breadcrumbsIcon"
  }, breadcrumbsIcon), breadcrumbs.map((folder, index) => {
    var _folder$data$name;
    return createElement(Fragment2, null, createElement("button", {
      key: folder.id,
      type: "button",
      className: "uppy-u-reset uppy-c-btn",
      onClick: () => openFolder(folder.id)
    }, folder.type === "root" ? title : (_folder$data$name = folder.data.name) != null ? _folder$data$name : i18n("unnamed")), breadcrumbs.length === index + 1 ? "" : " / ");
  }));
}

// node_modules/@uppy/provider-views/lib/ProviderView/Header.js
function Header(props) {
  return createElement("div", {
    className: "uppy-ProviderBrowser-header"
  }, createElement("div", {
    className: (0, import_classnames3.default)("uppy-ProviderBrowser-headerBar", !props.showBreadcrumbs && "uppy-ProviderBrowser-headerBar--simple")
  }, props.showBreadcrumbs && createElement(Breadcrumbs, {
    openFolder: props.openFolder,
    breadcrumbs: props.breadcrumbs,
    breadcrumbsIcon: props.pluginIcon && props.pluginIcon(),
    title: props.title,
    i18n: props.i18n
  }), createElement(User, {
    logout: props.logout,
    username: props.username,
    i18n: props.i18n
  })));
}

// node_modules/@uppy/utils/lib/VirtualList.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var STYLE_INNER = {
  position: "relative",
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  //
  // overflow: 'hidden',
  width: "100%",
  minHeight: "100%"
};
var STYLE_CONTENT = {
  position: "absolute",
  top: 0,
  left: 0,
  // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
  // stretch far beyond the content. For our use case, the content div actually can get its height from
  // the elements inside it, so we don't need to specify a `height` property at all.
  //
  // height: '100%',
  width: "100%",
  overflow: "visible"
};
var VirtualList = class extends BaseComponent {
  constructor(props) {
    super(props);
    this.handleScroll = () => {
      this.setState({
        offset: this.base.scrollTop
      });
    };
    this.handleResize = () => {
      this.resize();
    };
    this.focusElement = null;
    this.state = {
      offset: 0,
      height: 0
    };
  }
  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.handleResize);
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate() {
    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }
  }
  componentDidUpdate() {
    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }
    this.focusElement = null;
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  resize() {
    const {
      height
    } = this.state;
    if (height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }
  }
  render(_ref) {
    let {
      data,
      rowHeight,
      renderRow,
      overscanCount = 10,
      ...props
    } = _ref;
    const {
      offset,
      height
    } = this.state;
    let start = Math.floor(offset / rowHeight);
    let visibleRowCount = Math.floor(height / rowHeight);
    if (overscanCount) {
      start = Math.max(0, start - start % overscanCount);
      visibleRowCount += overscanCount;
    }
    const end = start + visibleRowCount + 4;
    const selection = data.slice(start, end);
    const styleInner = {
      ...STYLE_INNER,
      height: data.length * rowHeight
    };
    const styleContent = {
      ...STYLE_CONTENT,
      top: start * rowHeight
    };
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      createElement("div", _extends({
        onScroll: this.handleScroll
      }, props), createElement("div", {
        role: "presentation",
        style: styleInner
      }, createElement("div", {
        role: "presentation",
        style: styleContent
      }, selection.map(renderRow))))
    );
  }
};
var VirtualList_default = VirtualList;

// node_modules/@uppy/provider-views/lib/Item/index.js
var import_classnames4 = __toESM(require_classnames(), 1);

// node_modules/@uppy/provider-views/lib/Item/components/ItemIcon.js
function FileIcon() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: 11,
    height: 14.5,
    viewBox: "0 0 44 58"
  }, createElement("path", {
    d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z"
  }));
}
function FolderIcon() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    style: {
      minWidth: 16,
      marginRight: 3
    },
    viewBox: "0 0 276.157 276.157"
  }, createElement("path", {
    d: "M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z"
  }));
}
function VideoIcon() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    style: {
      width: 16,
      marginRight: 4
    },
    viewBox: "0 0 58 58"
  }, createElement("path", {
    d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z"
  }), createElement("path", {
    d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z"
  }));
}
function ItemIcon(_ref) {
  let {
    itemIconString,
    alt = void 0
  } = _ref;
  if (itemIconString === null) return null;
  switch (itemIconString) {
    case "file":
      return createElement(FileIcon, null);
    case "folder":
      return createElement(FolderIcon, null);
    case "video":
      return createElement(VideoIcon, null);
    default: {
      return createElement("img", {
        src: itemIconString,
        alt,
        referrerPolicy: "no-referrer",
        loading: "lazy",
        width: 16,
        height: 16
      });
    }
  }
}

// node_modules/@uppy/provider-views/lib/Item/components/GridItem.js
function GridItem(_ref) {
  var _file$data$name, _file$data$name2;
  let {
    file,
    toggleCheckbox,
    className,
    isDisabled,
    restrictionError,
    showTitles,
    children = null,
    i18n
  } = _ref;
  return createElement("li", {
    className,
    title: isDisabled && restrictionError ? restrictionError : void 0
  }, createElement("input", {
    type: "checkbox",
    className: "uppy-u-reset uppy-ProviderBrowserItem-checkbox uppy-ProviderBrowserItem-checkbox--grid",
    onChange: toggleCheckbox,
    name: "listitem",
    id: file.id,
    checked: file.status === "checked",
    disabled: isDisabled,
    "data-uppy-super-focusable": true
  }), createElement("label", {
    htmlFor: file.id,
    "aria-label": (_file$data$name = file.data.name) != null ? _file$data$name : i18n("unnamed"),
    className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
  }, createElement(ItemIcon, {
    itemIconString: file.data.thumbnail || file.data.icon
  }), showTitles && ((_file$data$name2 = file.data.name) != null ? _file$data$name2 : i18n("unnamed")), children));
}
var GridItem_default = GridItem;

// node_modules/@uppy/provider-views/lib/Item/components/ListItem.js
function ListItem(_ref) {
  var _file$data$name, _file$data$name2, _file$data$name3;
  let {
    file,
    openFolder,
    className,
    isDisabled,
    restrictionError,
    toggleCheckbox,
    showTitles,
    i18n
  } = _ref;
  return createElement("li", {
    className,
    title: file.status !== "checked" && restrictionError ? restrictionError : void 0
  }, createElement("input", {
    type: "checkbox",
    className: "uppy-u-reset uppy-ProviderBrowserItem-checkbox",
    onChange: toggleCheckbox,
    name: "listitem",
    id: file.id,
    checked: file.status === "checked",
    "aria-label": file.data.isFolder ? i18n("allFilesFromFolderNamed", {
      name: (_file$data$name = file.data.name) != null ? _file$data$name : i18n("unnamed")
    }) : null,
    disabled: isDisabled,
    "data-uppy-super-focusable": true
  }), file.data.isFolder ? (
    // button to open a folder
    createElement("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowserItem-inner",
      onClick: () => openFolder(file.id),
      "aria-label": i18n("openFolderNamed", {
        name: (_file$data$name2 = file.data.name) != null ? _file$data$name2 : i18n("unnamed")
      })
    }, createElement("div", {
      className: "uppy-ProviderBrowserItem-iconWrap"
    }, createElement(ItemIcon, {
      itemIconString: file.data.icon
    })), showTitles && file.data.name ? createElement("span", null, file.data.name) : i18n("unnamed"))
  ) : createElement("label", {
    htmlFor: file.id,
    className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
  }, createElement("div", {
    className: "uppy-ProviderBrowserItem-iconWrap"
  }, createElement(ItemIcon, {
    itemIconString: file.data.icon
  })), showTitles && ((_file$data$name3 = file.data.name) != null ? _file$data$name3 : i18n("unnamed"))));
}

// node_modules/@uppy/provider-views/lib/Item/index.js
function Item(props) {
  const {
    viewType,
    toggleCheckbox,
    showTitles,
    i18n,
    openFolder,
    file,
    utmSource
  } = props;
  const restrictionError = file.type === "folder" ? null : file.restrictionError;
  const isDisabled = !!restrictionError && file.status !== "checked";
  const ourProps = {
    file,
    openFolder,
    toggleCheckbox,
    utmSource,
    i18n,
    viewType,
    showTitles,
    className: (0, import_classnames4.default)("uppy-ProviderBrowserItem", {
      "uppy-ProviderBrowserItem--disabled": isDisabled
    }, {
      "uppy-ProviderBrowserItem--noPreview": file.data.icon === "video"
    }, {
      "uppy-ProviderBrowserItem--is-checked": file.status === "checked"
    }, {
      "uppy-ProviderBrowserItem--is-partial": file.status === "partial"
    }),
    isDisabled,
    restrictionError
  };
  switch (viewType) {
    case "grid":
      return createElement(GridItem_default, ourProps);
    case "list":
      return createElement(ListItem, ourProps);
    case "unsplash":
      return createElement(GridItem_default, ourProps, createElement("a", {
        href: `${file.data.author.url}?utm_source=${utmSource}&utm_medium=referral`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "uppy-ProviderBrowserItem-author",
        tabIndex: -1
      }, file.data.author.name));
    default:
      throw new Error(`There is no such type ${viewType}`);
  }
}

// node_modules/@uppy/provider-views/lib/Browser.js
function Browser(props) {
  const {
    displayedPartialTree,
    viewType,
    toggleCheckbox,
    handleScroll,
    showTitles,
    i18n,
    isLoading,
    openFolder,
    noResultsLabel,
    virtualList,
    utmSource
  } = props;
  const [isShiftKeyPressed, setIsShiftKeyPressed] = useState(false);
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Shift") setIsShiftKeyPressed(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Shift") setIsShiftKeyPressed(true);
    };
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  if (isLoading) {
    return createElement("div", {
      className: "uppy-Provider-loading"
    }, typeof isLoading === "string" ? isLoading : i18n("loading"));
  }
  if (displayedPartialTree.length === 0) {
    return createElement("div", {
      className: "uppy-Provider-empty"
    }, noResultsLabel);
  }
  const renderItem = (item) => createElement(Item, {
    viewType,
    toggleCheckbox: (event2) => {
      var _document$getSelectio;
      event2.stopPropagation();
      event2.preventDefault();
      (_document$getSelectio = document.getSelection()) == null || _document$getSelectio.removeAllRanges();
      toggleCheckbox(item, isShiftKeyPressed);
    },
    showTitles,
    i18n,
    openFolder,
    file: item,
    utmSource
  });
  if (virtualList) {
    return createElement("div", {
      className: "uppy-ProviderBrowser-body"
    }, createElement("ul", {
      className: "uppy-ProviderBrowser-list"
    }, createElement(VirtualList_default, {
      data: displayedPartialTree,
      renderRow: renderItem,
      rowHeight: 31
    })));
  }
  return createElement("div", {
    className: "uppy-ProviderBrowser-body"
  }, createElement("ul", {
    className: "uppy-ProviderBrowser-list",
    onScroll: handleScroll,
    role: "listbox",
    tabIndex: -1
  }, displayedPartialTree.map(renderItem)));
}
var Browser_default = Browser;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/afterOpenFolder.js
var afterOpenFolder = (oldPartialTree, discoveredItems, clickedFolder, currentPagePath, validateSingleFile) => {
  const discoveredFolders = discoveredItems.filter((i) => i.isFolder === true);
  const discoveredFiles = discoveredItems.filter((i) => i.isFolder === false);
  const isParentFolderChecked = clickedFolder.type === "folder" && clickedFolder.status === "checked";
  const folders = discoveredFolders.map((folder) => ({
    type: "folder",
    id: folder.requestPath,
    cached: false,
    nextPagePath: null,
    status: isParentFolderChecked ? "checked" : "unchecked",
    parentId: clickedFolder.id,
    data: folder
  }));
  const files = discoveredFiles.map((file) => {
    const restrictionError = validateSingleFile(file);
    return {
      type: "file",
      id: file.requestPath,
      restrictionError,
      status: isParentFolderChecked && !restrictionError ? "checked" : "unchecked",
      parentId: clickedFolder.id,
      data: file
    };
  });
  const updatedClickedFolder = {
    ...clickedFolder,
    cached: true,
    nextPagePath: currentPagePath
  };
  const partialTreeWithUpdatedClickedFolder = oldPartialTree.map((folder) => folder.id === updatedClickedFolder.id ? updatedClickedFolder : folder);
  const newPartialTree = [...partialTreeWithUpdatedClickedFolder, ...folders, ...files];
  return newPartialTree;
};
var afterOpenFolder_default = afterOpenFolder;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/afterScrollFolder.js
var afterScrollFolder = (oldPartialTree, currentFolderId, items, nextPagePath, validateSingleFile) => {
  const currentFolder = oldPartialTree.find((i) => i.id === currentFolderId);
  const newFolders = items.filter((i) => i.isFolder === true);
  const newFiles = items.filter((i) => i.isFolder === false);
  const scrolledFolder = {
    ...currentFolder,
    nextPagePath
  };
  const partialTreeWithUpdatedScrolledFolder = oldPartialTree.map((folder) => folder.id === scrolledFolder.id ? scrolledFolder : folder);
  const isParentFolderChecked = scrolledFolder.type === "folder" && scrolledFolder.status === "checked";
  const folders = newFolders.map((folder) => ({
    type: "folder",
    id: folder.requestPath,
    cached: false,
    nextPagePath: null,
    status: isParentFolderChecked ? "checked" : "unchecked",
    parentId: scrolledFolder.id,
    data: folder
  }));
  const files = newFiles.map((file) => {
    const restrictionError = validateSingleFile(file);
    return {
      type: "file",
      id: file.requestPath,
      restrictionError,
      status: isParentFolderChecked && !restrictionError ? "checked" : "unchecked",
      parentId: scrolledFolder.id,
      data: file
    };
  });
  const newPartialTree = [...partialTreeWithUpdatedScrolledFolder, ...folders, ...files];
  return newPartialTree;
};
var afterScrollFolder_default = afterScrollFolder;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/shallowClone.js
var shallowClone = (partialTree) => {
  return partialTree.map((item) => ({
    ...item
  }));
};
var shallowClone_default = shallowClone;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/afterToggleCheckbox.js
var percolateDown = (tree, id12, shouldMarkAsChecked) => {
  const children = tree.filter((item) => item.type !== "root" && item.parentId === id12);
  children.forEach((item) => {
    item.status = shouldMarkAsChecked && !(item.type === "file" && item.restrictionError) ? "checked" : "unchecked";
    percolateDown(tree, item.id, shouldMarkAsChecked);
  });
};
var percolateUp = (tree, id12) => {
  const folder = tree.find((item) => item.id === id12);
  if (folder.type === "root") return;
  const validChildren = tree.filter((item) => (
    // is a child
    item.type !== "root" && item.parentId === folder.id && // does pass validations
    !(item.type === "file" && item.restrictionError)
  ));
  const areAllChildrenChecked = validChildren.every((item) => item.status === "checked");
  const areAllChildrenUnchecked = validChildren.every((item) => item.status === "unchecked");
  if (areAllChildrenChecked) {
    folder.status = "checked";
  } else if (areAllChildrenUnchecked) {
    folder.status = "unchecked";
  } else {
    folder.status = "partial";
  }
  percolateUp(tree, folder.parentId);
};
var afterToggleCheckbox = (oldTree, clickedRange) => {
  const tree = shallowClone_default(oldTree);
  if (clickedRange.length >= 2) {
    const newlyCheckedItems = tree.filter((item) => item.type !== "root" && clickedRange.includes(item.id));
    newlyCheckedItems.forEach((item) => {
      if (item.type === "file") {
        item.status = item.restrictionError ? "unchecked" : "checked";
      } else {
        item.status = "checked";
      }
    });
    newlyCheckedItems.forEach((item) => {
      percolateDown(tree, item.id, true);
    });
    percolateUp(tree, newlyCheckedItems[0].parentId);
  } else {
    const clickedItem = tree.find((item) => item.id === clickedRange[0]);
    clickedItem.status = clickedItem.status === "checked" ? "unchecked" : "checked";
    percolateDown(tree, clickedItem.id, clickedItem.status === "checked");
    percolateUp(tree, clickedItem.parentId);
  }
  return tree;
};
var afterToggleCheckbox_default = afterToggleCheckbox;

// node_modules/eventemitter3/index.mjs
var import_index2 = __toESM(require_eventemitter3(), 1);

// node_modules/p-timeout/index.js
var TimeoutError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
};
var AbortError = class extends Error {
  constructor(message) {
    super();
    this.name = "AbortError";
    this.message = message;
  }
};
var getDOMException = (errorMessage) => globalThis.DOMException === void 0 ? new AbortError(errorMessage) : new DOMException(errorMessage);
var getAbortedReason = (signal) => {
  const reason = signal.reason === void 0 ? getDOMException("This operation was aborted.") : signal.reason;
  return reason instanceof Error ? reason : getDOMException(reason);
};
function pTimeout(promise, options3) {
  const {
    milliseconds,
    fallback,
    message,
    customTimers = { setTimeout, clearTimeout }
  } = options3;
  let timer;
  let abortHandler;
  const wrappedPromise = new Promise((resolve, reject) => {
    if (typeof milliseconds !== "number" || Math.sign(milliseconds) !== 1) {
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
    }
    if (options3.signal) {
      const { signal } = options3;
      if (signal.aborted) {
        reject(getAbortedReason(signal));
      }
      abortHandler = () => {
        reject(getAbortedReason(signal));
      };
      signal.addEventListener("abort", abortHandler, { once: true });
    }
    if (milliseconds === Number.POSITIVE_INFINITY) {
      promise.then(resolve, reject);
      return;
    }
    const timeoutError = new TimeoutError();
    timer = customTimers.setTimeout.call(void 0, () => {
      if (fallback) {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }
        return;
      }
      if (typeof promise.cancel === "function") {
        promise.cancel();
      }
      if (message === false) {
        resolve();
      } else if (message instanceof Error) {
        reject(message);
      } else {
        timeoutError.message = message ?? `Promise timed out after ${milliseconds} milliseconds`;
        reject(timeoutError);
      }
    }, milliseconds);
    (async () => {
      try {
        resolve(await promise);
      } catch (error) {
        reject(error);
      }
    })();
  });
  const cancelablePromise = wrappedPromise.finally(() => {
    cancelablePromise.clear();
    if (abortHandler && options3.signal) {
      options3.signal.removeEventListener("abort", abortHandler);
    }
  });
  cancelablePromise.clear = () => {
    customTimers.clearTimeout.call(void 0, timer);
    timer = void 0;
  };
  return cancelablePromise;
}

// node_modules/p-queue/dist/lower-bound.js
function lowerBound(array, value, comparator) {
  let first = 0;
  let count = array.length;
  while (count > 0) {
    const step = Math.trunc(count / 2);
    let it = first + step;
    if (comparator(array[it], value) <= 0) {
      first = ++it;
      count -= step + 1;
    } else {
      count = step;
    }
  }
  return first;
}

// node_modules/p-queue/dist/priority-queue.js
var PriorityQueue = class {
  #queue = [];
  enqueue(run, options3) {
    options3 = {
      priority: 0,
      ...options3
    };
    const element = {
      priority: options3.priority,
      id: options3.id,
      run
    };
    if (this.size === 0 || this.#queue[this.size - 1].priority >= options3.priority) {
      this.#queue.push(element);
      return;
    }
    const index = lowerBound(this.#queue, element, (a, b) => b.priority - a.priority);
    this.#queue.splice(index, 0, element);
  }
  setPriority(id12, priority) {
    const index = this.#queue.findIndex((element) => element.id === id12);
    if (index === -1) {
      throw new ReferenceError(`No promise function with the id "${id12}" exists in the queue.`);
    }
    const [item] = this.#queue.splice(index, 1);
    this.enqueue(item.run, { priority, id: id12 });
  }
  dequeue() {
    const item = this.#queue.shift();
    return item?.run;
  }
  filter(options3) {
    return this.#queue.filter((element) => element.priority === options3.priority).map((element) => element.run);
  }
  get size() {
    return this.#queue.length;
  }
};

// node_modules/p-queue/dist/index.js
var PQueue = class extends import_index2.default {
  #carryoverConcurrencyCount;
  #isIntervalIgnored;
  #intervalCount = 0;
  #intervalCap;
  #interval;
  #intervalEnd = 0;
  #intervalId;
  #timeoutId;
  #queue;
  #queueClass;
  #pending = 0;
  // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
  #concurrency;
  #isPaused;
  #throwOnTimeout;
  // Use to assign a unique identifier to a promise function, if not explicitly specified
  #idAssigner = 1n;
  /**
      Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.
  
      Applies to each future operation.
      */
  timeout;
  // TODO: The `throwOnTimeout` option should affect the return types of `add()` and `addAll()`
  constructor(options3) {
    super();
    options3 = {
      carryoverConcurrencyCount: false,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: true,
      queueClass: PriorityQueue,
      ...options3
    };
    if (!(typeof options3.intervalCap === "number" && options3.intervalCap >= 1)) {
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${options3.intervalCap?.toString() ?? ""}\` (${typeof options3.intervalCap})`);
    }
    if (options3.interval === void 0 || !(Number.isFinite(options3.interval) && options3.interval >= 0)) {
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${options3.interval?.toString() ?? ""}\` (${typeof options3.interval})`);
    }
    this.#carryoverConcurrencyCount = options3.carryoverConcurrencyCount;
    this.#isIntervalIgnored = options3.intervalCap === Number.POSITIVE_INFINITY || options3.interval === 0;
    this.#intervalCap = options3.intervalCap;
    this.#interval = options3.interval;
    this.#queue = new options3.queueClass();
    this.#queueClass = options3.queueClass;
    this.concurrency = options3.concurrency;
    this.timeout = options3.timeout;
    this.#throwOnTimeout = options3.throwOnTimeout === true;
    this.#isPaused = options3.autoStart === false;
  }
  get #doesIntervalAllowAnother() {
    return this.#isIntervalIgnored || this.#intervalCount < this.#intervalCap;
  }
  get #doesConcurrentAllowAnother() {
    return this.#pending < this.#concurrency;
  }
  #next() {
    this.#pending--;
    this.#tryToStartAnother();
    this.emit("next");
  }
  #onResumeInterval() {
    this.#onInterval();
    this.#initializeIntervalIfNeeded();
    this.#timeoutId = void 0;
  }
  get #isIntervalPaused() {
    const now = Date.now();
    if (this.#intervalId === void 0) {
      const delay = this.#intervalEnd - now;
      if (delay < 0) {
        this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0;
      } else {
        if (this.#timeoutId === void 0) {
          this.#timeoutId = setTimeout(() => {
            this.#onResumeInterval();
          }, delay);
        }
        return true;
      }
    }
    return false;
  }
  #tryToStartAnother() {
    if (this.#queue.size === 0) {
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
      }
      this.#intervalId = void 0;
      this.emit("empty");
      if (this.#pending === 0) {
        this.emit("idle");
      }
      return false;
    }
    if (!this.#isPaused) {
      const canInitializeInterval = !this.#isIntervalPaused;
      if (this.#doesIntervalAllowAnother && this.#doesConcurrentAllowAnother) {
        const job = this.#queue.dequeue();
        if (!job) {
          return false;
        }
        this.emit("active");
        job();
        if (canInitializeInterval) {
          this.#initializeIntervalIfNeeded();
        }
        return true;
      }
    }
    return false;
  }
  #initializeIntervalIfNeeded() {
    if (this.#isIntervalIgnored || this.#intervalId !== void 0) {
      return;
    }
    this.#intervalId = setInterval(() => {
      this.#onInterval();
    }, this.#interval);
    this.#intervalEnd = Date.now() + this.#interval;
  }
  #onInterval() {
    if (this.#intervalCount === 0 && this.#pending === 0 && this.#intervalId) {
      clearInterval(this.#intervalId);
      this.#intervalId = void 0;
    }
    this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0;
    this.#processQueue();
  }
  /**
  Executes all queued functions until it reaches the limit.
  */
  #processQueue() {
    while (this.#tryToStartAnother()) {
    }
  }
  get concurrency() {
    return this.#concurrency;
  }
  set concurrency(newConcurrency) {
    if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
    }
    this.#concurrency = newConcurrency;
    this.#processQueue();
  }
  async #throwOnAbort(signal) {
    return new Promise((_resolve, reject) => {
      signal.addEventListener("abort", () => {
        reject(signal.reason);
      }, { once: true });
    });
  }
  /**
      Updates the priority of a promise function by its id, affecting its execution order. Requires a defined concurrency limit to take effect.
  
      For example, this can be used to prioritize a promise function to run earlier.
  
      ```js
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 1});
  
      queue.add(async () => '🦄', {priority: 1});
      queue.add(async () => '🦀', {priority: 0, id: '🦀'});
      queue.add(async () => '🦄', {priority: 1});
      queue.add(async () => '🦄', {priority: 1});
  
      queue.setPriority('🦀', 2);
      ```
  
      In this case, the promise function with `id: '🦀'` runs second.
  
      You can also deprioritize a promise function to delay its execution:
  
      ```js
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 1});
  
      queue.add(async () => '🦄', {priority: 1});
      queue.add(async () => '🦀', {priority: 1, id: '🦀'});
      queue.add(async () => '🦄');
      queue.add(async () => '🦄', {priority: 0});
  
      queue.setPriority('🦀', -1);
      ```
      Here, the promise function with `id: '🦀'` executes last.
      */
  setPriority(id12, priority) {
    this.#queue.setPriority(id12, priority);
  }
  async add(function_, options3 = {}) {
    options3.id ??= (this.#idAssigner++).toString();
    options3 = {
      timeout: this.timeout,
      throwOnTimeout: this.#throwOnTimeout,
      ...options3
    };
    return new Promise((resolve, reject) => {
      this.#queue.enqueue(async () => {
        this.#pending++;
        this.#intervalCount++;
        try {
          options3.signal?.throwIfAborted();
          let operation = function_({ signal: options3.signal });
          if (options3.timeout) {
            operation = pTimeout(Promise.resolve(operation), { milliseconds: options3.timeout });
          }
          if (options3.signal) {
            operation = Promise.race([operation, this.#throwOnAbort(options3.signal)]);
          }
          const result = await operation;
          resolve(result);
          this.emit("completed", result);
        } catch (error) {
          if (error instanceof TimeoutError && !options3.throwOnTimeout) {
            resolve();
            return;
          }
          reject(error);
          this.emit("error", error);
        } finally {
          this.#next();
        }
      }, options3);
      this.emit("add");
      this.#tryToStartAnother();
    });
  }
  async addAll(functions, options3) {
    return Promise.all(functions.map(async (function_) => this.add(function_, options3)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    if (!this.#isPaused) {
      return this;
    }
    this.#isPaused = false;
    this.#processQueue();
    return this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    this.#isPaused = true;
  }
  /**
  Clear the queue.
  */
  clear() {
    this.#queue = new this.#queueClass();
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    if (this.#queue.size === 0) {
      return;
    }
    await this.#onEvent("empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(limit) {
    if (this.#queue.size < limit) {
      return;
    }
    await this.#onEvent("next", () => this.#queue.size < limit);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    if (this.#pending === 0 && this.#queue.size === 0) {
      return;
    }
    await this.#onEvent("idle");
  }
  async #onEvent(event2, filter) {
    return new Promise((resolve) => {
      const listener = () => {
        if (filter && !filter()) {
          return;
        }
        this.off(event2, listener);
        resolve();
      };
      this.on(event2, listener);
    });
  }
  /**
  Size of the queue, the number of queued items waiting to run.
  */
  get size() {
    return this.#queue.size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(options3) {
    return this.#queue.filter(options3).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return this.#pending;
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return this.#isPaused;
  }
};

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/afterFill.js
var recursivelyFetch = async (queue, poorTree, poorFolder, apiList, validateSingleFile) => {
  let items = [];
  let currentPath = poorFolder.cached ? poorFolder.nextPagePath : poorFolder.id;
  while (currentPath) {
    const response = await apiList(currentPath);
    items = items.concat(response.items);
    currentPath = response.nextPagePath;
  }
  const newFolders = items.filter((i) => i.isFolder === true);
  const newFiles = items.filter((i) => i.isFolder === false);
  const folders = newFolders.map((folder) => ({
    type: "folder",
    id: folder.requestPath,
    cached: false,
    nextPagePath: null,
    status: "checked",
    parentId: poorFolder.id,
    data: folder
  }));
  const files = newFiles.map((file) => {
    const restrictionError = validateSingleFile(file);
    return {
      type: "file",
      id: file.requestPath,
      restrictionError,
      status: restrictionError ? "unchecked" : "checked",
      parentId: poorFolder.id,
      data: file
    };
  });
  poorFolder.cached = true;
  poorFolder.nextPagePath = null;
  poorTree.push(...files, ...folders);
  folders.forEach(async (folder) => {
    queue.add(() => recursivelyFetch(queue, poorTree, folder, apiList, validateSingleFile));
  });
};
var afterFill = async (partialTree, apiList, validateSingleFile, reportProgress) => {
  const queue = new PQueue({
    concurrency: 6
  });
  const poorTree = shallowClone_default(partialTree);
  const poorFolders = poorTree.filter((item) => item.type === "folder" && item.status === "checked" && // either "not yet cached at all" or "some pages are left to fetch"
  (item.cached === false || item.nextPagePath));
  poorFolders.forEach((poorFolder) => {
    queue.add(() => recursivelyFetch(queue, poorTree, poorFolder, apiList, validateSingleFile));
  });
  queue.on("completed", () => {
    const nOfFilesChecked = poorTree.filter((i) => i.type === "file" && i.status === "checked").length;
    reportProgress(nOfFilesChecked);
  });
  await queue.onIdle();
  return poorTree;
};
var afterFill_default = afterFill;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/index.js
var PartialTreeUtils_default = {
  afterOpenFolder: afterOpenFolder_default,
  afterScrollFolder: afterScrollFolder_default,
  afterToggleCheckbox: afterToggleCheckbox_default,
  afterFill: afterFill_default
};

// node_modules/@uppy/provider-views/lib/utils/shouldHandleScroll.js
var shouldHandleScroll = (event2) => {
  const {
    scrollHeight,
    scrollTop,
    offsetHeight
  } = event2.target;
  const scrollPosition = scrollHeight - (scrollTop + offsetHeight);
  return scrollPosition < 50;
};
var shouldHandleScroll_default = shouldHandleScroll;

// node_modules/@uppy/provider-views/lib/utils/handleError.js
var handleError = (uppy2) => (error) => {
  if (error.isAuthError) {
    return;
  }
  if (error.name === "AbortError") {
    uppy2.log("Aborting request", "warning");
    return;
  }
  uppy2.log(error, "error");
  if (error.name === "UserFacingApiError") {
    uppy2.info({
      message: uppy2.i18n("companionError"),
      details: uppy2.i18n(error.message)
    }, "warning", 5e3);
  }
};
var handleError_default = handleError;

// node_modules/@uppy/provider-views/lib/utils/getClickedRange.js
var getClickedRange = (clickedId, displayedPartialTree, isShiftKeyPressed, lastCheckbox) => {
  const lastCheckboxIndex = displayedPartialTree.findIndex((item) => item.id === lastCheckbox);
  if (lastCheckboxIndex !== -1 && isShiftKeyPressed) {
    const newCheckboxIndex = displayedPartialTree.findIndex((item) => item.id === clickedId);
    const clickedRange = displayedPartialTree.slice(Math.min(lastCheckboxIndex, newCheckboxIndex), Math.max(lastCheckboxIndex, newCheckboxIndex) + 1);
    return clickedRange.map((item) => item.id);
  }
  return [clickedId];
};
var getClickedRange_default = getClickedRange;

// node_modules/@uppy/provider-views/lib/SearchInput.js
function SearchInput(_ref) {
  let {
    searchString,
    setSearchString,
    submitSearchString,
    wrapperClassName,
    inputClassName,
    inputLabel,
    clearSearchLabel = "",
    showButton = false,
    buttonLabel = "",
    buttonCSSClassName = ""
  } = _ref;
  const onInput = (e) => {
    setSearchString(e.target.value);
  };
  const submit = useCallback((ev) => {
    ev.preventDefault();
    submitSearchString();
  }, [submitSearchString]);
  const [form] = useState(() => {
    const formEl = document.createElement("form");
    formEl.setAttribute("tabindex", "-1");
    formEl.id = nanoid();
    return formEl;
  });
  useEffect(() => {
    document.body.appendChild(form);
    form.addEventListener("submit", submit);
    return () => {
      form.removeEventListener("submit", submit);
      document.body.removeChild(form);
    };
  }, [form, submit]);
  return createElement("section", {
    className: wrapperClassName
  }, createElement("input", {
    className: `uppy-u-reset ${inputClassName}`,
    type: "search",
    "aria-label": inputLabel,
    placeholder: inputLabel,
    value: searchString,
    onInput,
    form: form.id,
    "data-uppy-super-focusable": true
  }), !showButton && // 🔍
  createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon uppy-ProviderBrowser-searchFilterIcon",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, createElement("path", {
    d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"
  })), !showButton && searchString && // ❌
  createElement("button", {
    className: "uppy-u-reset uppy-ProviderBrowser-searchFilterReset",
    type: "button",
    "aria-label": clearSearchLabel,
    title: clearSearchLabel,
    onClick: () => setSearchString("")
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    viewBox: "0 0 19 19"
  }, createElement("path", {
    d: "M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"
  }))), showButton && createElement("button", {
    className: `uppy-u-reset uppy-c-btn uppy-c-btn-primary ${buttonCSSClassName}`,
    type: "submit",
    form: form.id
  }, buttonLabel));
}
var SearchInput_default = SearchInput;

// node_modules/@uppy/provider-views/lib/FooterActions.js
var import_classnames5 = __toESM(require_classnames(), 1);

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/getNumberOfSelectedFiles.js
var getNumberOfSelectedFiles = (partialTree) => {
  const checkedLeaves = partialTree.filter((item) => {
    if (item.type === "file" && item.status === "checked") {
      return true;
    }
    if (item.type === "folder" && item.status === "checked") {
      const doesItHaveChildren = partialTree.some((i) => i.type !== "root" && i.parentId === item.id);
      return !doesItHaveChildren;
    }
    return false;
  });
  return checkedLeaves.length;
};
var getNumberOfSelectedFiles_default = getNumberOfSelectedFiles;

// node_modules/@uppy/provider-views/lib/FooterActions.js
function FooterActions(_ref) {
  let {
    cancelSelection,
    donePicking,
    i18n,
    partialTree,
    validateAggregateRestrictions
  } = _ref;
  const aggregateRestrictionError = useMemo(() => {
    return validateAggregateRestrictions(partialTree);
  }, [partialTree, validateAggregateRestrictions]);
  const nOfSelectedFiles = useMemo(() => {
    return getNumberOfSelectedFiles_default(partialTree);
  }, [partialTree]);
  if (nOfSelectedFiles === 0) {
    return null;
  }
  return createElement("div", {
    className: "uppy-ProviderBrowser-footer"
  }, createElement("div", {
    className: "uppy-ProviderBrowser-footer-buttons"
  }, createElement("button", {
    className: (0, import_classnames5.default)("uppy-u-reset uppy-c-btn uppy-c-btn-primary", {
      "uppy-c-btn--disabled": aggregateRestrictionError
    }),
    disabled: !!aggregateRestrictionError,
    onClick: donePicking,
    type: "button"
  }, i18n("selectX", {
    smart_count: nOfSelectedFiles
  })), createElement("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
    onClick: cancelSelection,
    type: "button"
  }, i18n("cancel"))), aggregateRestrictionError && createElement("div", {
    className: "uppy-ProviderBrowser-footer-error"
  }, aggregateRestrictionError));
}

// node_modules/@uppy/provider-views/lib/utils/getTagFile.js
var getTagFile = (file, plugin, provider) => {
  var _file$author, _file$author2;
  const tagFile = {
    id: file.id,
    source: plugin.id,
    name: file.name || file.id,
    type: file.mimeType,
    isRemote: true,
    data: file,
    preview: file.thumbnail || void 0,
    meta: {
      authorName: (_file$author = file.author) == null ? void 0 : _file$author.name,
      authorUrl: (_file$author2 = file.author) == null ? void 0 : _file$author2.url,
      // We need to do this `|| null` check, because null value
      // for .relDirPath is `undefined` and for .relativePath is `null`.
      // I do think we should just use `null` everywhere.
      relativePath: file.relDirPath || null,
      absolutePath: file.absDirPath
    },
    body: {
      fileId: file.id
    },
    remote: {
      companionUrl: plugin.opts.companionUrl,
      url: `${provider.fileUrl(file.requestPath)}`,
      body: {
        fileId: file.id
      },
      providerName: provider.name,
      provider: provider.provider,
      requestClientId: provider.provider
    }
  };
  return tagFile;
};
var getTagFile_default = getTagFile;

// node_modules/@uppy/provider-views/lib/utils/addFiles.js
var addFiles = (companionFiles, plugin, provider) => {
  const tagFiles = companionFiles.map((f) => getTagFile_default(f, plugin, provider));
  const filesToAdd = [];
  const filesAlreadyAdded = [];
  tagFiles.forEach((tagFile) => {
    if (plugin.uppy.checkIfFileAlreadyExists(getSafeFileId(tagFile, plugin.uppy.getID()))) {
      filesAlreadyAdded.push(tagFile);
    } else {
      filesToAdd.push(tagFile);
    }
  });
  if (filesToAdd.length > 0) {
    plugin.uppy.info(plugin.uppy.i18n("addedNumFiles", {
      numFiles: filesToAdd.length
    }));
  }
  if (filesAlreadyAdded.length > 0) {
    plugin.uppy.info(`Not adding ${filesAlreadyAdded.length} files because they already exist`);
  }
  plugin.uppy.addFiles(filesToAdd);
};
var addFiles_default = addFiles;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/getCheckedFilesWithPaths.js
var getPath = (partialTree, id12, cache) => {
  const sId = id12 === null ? "null" : id12;
  if (cache[sId]) return cache[sId];
  const file = partialTree.find((f) => f.id === id12);
  if (file.type === "root") return [];
  const meAndParentPath = [...getPath(partialTree, file.parentId, cache), file];
  cache[sId] = meAndParentPath;
  return meAndParentPath;
};
var getCheckedFilesWithPaths = (partialTree) => {
  const cache = /* @__PURE__ */ Object.create(null);
  const checkedFiles = partialTree.filter((item) => item.type === "file" && item.status === "checked");
  const companionFilesWithInjectedPaths = checkedFiles.map((file) => {
    const absFolders = getPath(partialTree, file.id, cache);
    const firstCheckedFolderIndex = absFolders.findIndex((i) => i.type === "folder" && i.status === "checked");
    const relFolders = absFolders.slice(firstCheckedFolderIndex);
    const absDirPath = `/${absFolders.map((i) => i.data.name).join("/")}`;
    const relDirPath = relFolders.length === 1 ? (
      // Must return `undefined` (which later turns into `null` in `.getTagFile()`)
      // (https://github.com/transloadit/uppy/pull/4537#issuecomment-1629136652)
      void 0
    ) : relFolders.map((i) => i.data.name).join("/");
    return {
      ...file.data,
      absDirPath,
      relDirPath
    };
  });
  return companionFilesWithInjectedPaths;
};
var getCheckedFilesWithPaths_default = getCheckedFilesWithPaths;

// node_modules/@uppy/provider-views/lib/utils/PartialTreeUtils/getBreadcrumbs.js
var getBreadcrumbs = (partialTree, currentFolderId) => {
  let folder = partialTree.find((f) => f.id === currentFolderId);
  let breadcrumbs = [];
  while (true) {
    breadcrumbs = [folder, ...breadcrumbs];
    if (folder.type === "root") break;
    const currentParentId = folder.parentId;
    folder = partialTree.find((f) => f.id === currentParentId);
  }
  return breadcrumbs;
};
var getBreadcrumbs_default = getBreadcrumbs;

// node_modules/@uppy/provider-views/lib/ProviderView/ProviderView.js
function _classPrivateFieldLooseBase6(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id6 = 0;
function _classPrivateFieldLooseKey6(e) {
  return "__private_" + id6++ + "_" + e;
}
var packageJson6 = {
  "version": "4.4.3"
};
function defaultPickerIcon() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, createElement("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}
var getDefaultState = (rootFolderId) => ({
  authenticated: void 0,
  // we don't know yet
  partialTree: [{
    type: "root",
    id: rootFolderId,
    cached: false,
    nextPagePath: null
  }],
  currentFolderId: rootFolderId,
  searchString: "",
  didFirstRender: false,
  username: null,
  loading: false
});
var _abortController = /* @__PURE__ */ _classPrivateFieldLooseKey6("abortController");
var _withAbort = /* @__PURE__ */ _classPrivateFieldLooseKey6("withAbort");
var ProviderView = class {
  constructor(plugin, opts) {
    Object.defineProperty(this, _withAbort, {
      value: _withAbort2
    });
    this.isHandlingScroll = false;
    this.lastCheckbox = null;
    Object.defineProperty(this, _abortController, {
      writable: true,
      value: void 0
    });
    this.validateSingleFile = (file) => {
      const companionFile = remoteFileObjToLocal(file);
      const result = this.plugin.uppy.validateSingleFile(companionFile);
      return result;
    };
    this.getDisplayedPartialTree = () => {
      const {
        partialTree,
        currentFolderId,
        searchString
      } = this.plugin.getPluginState();
      const inThisFolder = partialTree.filter((item) => item.type !== "root" && item.parentId === currentFolderId);
      const filtered = searchString === "" ? inThisFolder : inThisFolder.filter((item) => {
        var _item$data$name;
        return ((_item$data$name = item.data.name) != null ? _item$data$name : this.plugin.uppy.i18n("unnamed")).toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
      return filtered;
    };
    this.validateAggregateRestrictions = (partialTree) => {
      const checkedFiles = partialTree.filter((item) => item.type === "file" && item.status === "checked");
      const uppyFiles = checkedFiles.map((file) => file.data);
      return this.plugin.uppy.validateAggregateRestrictions(uppyFiles);
    };
    this.plugin = plugin;
    this.provider = opts.provider;
    const defaultOptions7 = {
      viewType: "list",
      showTitles: true,
      showFilter: true,
      showBreadcrumbs: true,
      loadAllFiles: false,
      virtualList: false
    };
    this.opts = {
      ...defaultOptions7,
      ...opts
    };
    this.openFolder = this.openFolder.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.resetPluginState = this.resetPluginState.bind(this);
    this.donePicking = this.donePicking.bind(this);
    this.render = this.render.bind(this);
    this.cancelSelection = this.cancelSelection.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.resetPluginState();
    this.plugin.uppy.on("dashboard:close-panel", this.resetPluginState);
    this.plugin.uppy.registerRequestClient(this.provider.provider, this.provider);
  }
  resetPluginState() {
    this.plugin.setPluginState(getDefaultState(this.plugin.rootFolderId));
  }
  // eslint-disable-next-line class-methods-use-this
  tearDown() {
  }
  setLoading(loading) {
    this.plugin.setPluginState({
      loading
    });
  }
  cancelSelection() {
    const {
      partialTree
    } = this.plugin.getPluginState();
    const newPartialTree = partialTree.map((item) => item.type === "root" ? item : {
      ...item,
      status: "unchecked"
    });
    this.plugin.setPluginState({
      partialTree: newPartialTree
    });
  }
  async openFolder(folderId) {
    this.lastCheckbox = null;
    const {
      partialTree
    } = this.plugin.getPluginState();
    const clickedFolder = partialTree.find((folder) => folder.id === folderId);
    if (clickedFolder.cached) {
      this.plugin.setPluginState({
        currentFolderId: folderId,
        searchString: ""
      });
      return;
    }
    this.setLoading(true);
    await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
      let currentPagePath = folderId;
      let currentItems = [];
      do {
        const {
          username,
          nextPagePath,
          items
        } = await this.provider.list(currentPagePath, {
          signal
        });
        this.plugin.setPluginState({
          username
        });
        currentPagePath = nextPagePath;
        currentItems = currentItems.concat(items);
        this.setLoading(this.plugin.uppy.i18n("loadedXFiles", {
          numFiles: currentItems.length
        }));
      } while (this.opts.loadAllFiles && currentPagePath);
      const newPartialTree = PartialTreeUtils_default.afterOpenFolder(partialTree, currentItems, clickedFolder, currentPagePath, this.validateSingleFile);
      this.plugin.setPluginState({
        partialTree: newPartialTree,
        currentFolderId: folderId,
        searchString: ""
      });
    }).catch(handleError_default(this.plugin.uppy));
    this.setLoading(false);
  }
  /**
   * Removes session token on client side.
   */
  async logout() {
    await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
      const res = await this.provider.logout({
        signal
      });
      if (res.ok) {
        if (!res.revoked) {
          const message = this.plugin.uppy.i18n("companionUnauthorizeHint", {
            provider: this.plugin.title,
            url: res.manual_revoke_url
          });
          this.plugin.uppy.info(message, "info", 7e3);
        }
        this.plugin.setPluginState({
          ...getDefaultState(this.plugin.rootFolderId),
          authenticated: false
        });
      }
    }).catch(handleError_default(this.plugin.uppy));
  }
  async handleAuth(authFormData) {
    await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
      this.setLoading(true);
      await this.provider.login({
        authFormData,
        signal
      });
      this.plugin.setPluginState({
        authenticated: true
      });
      await Promise.all([this.provider.fetchPreAuthToken(), this.openFolder(this.plugin.rootFolderId)]);
    }).catch(handleError_default(this.plugin.uppy));
    this.setLoading(false);
  }
  async handleScroll(event2) {
    const {
      partialTree,
      currentFolderId
    } = this.plugin.getPluginState();
    const currentFolder = partialTree.find((i) => i.id === currentFolderId);
    if (shouldHandleScroll_default(event2) && !this.isHandlingScroll && currentFolder.nextPagePath) {
      this.isHandlingScroll = true;
      await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
        const {
          nextPagePath,
          items
        } = await this.provider.list(currentFolder.nextPagePath, {
          signal
        });
        const newPartialTree = PartialTreeUtils_default.afterScrollFolder(partialTree, currentFolderId, items, nextPagePath, this.validateSingleFile);
        this.plugin.setPluginState({
          partialTree: newPartialTree
        });
      }).catch(handleError_default(this.plugin.uppy));
      this.isHandlingScroll = false;
    }
  }
  async donePicking() {
    const {
      partialTree
    } = this.plugin.getPluginState();
    this.setLoading(true);
    await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
      const enrichedTree = await PartialTreeUtils_default.afterFill(partialTree, (path) => this.provider.list(path, {
        signal
      }), this.validateSingleFile, (n) => {
        this.setLoading(this.plugin.uppy.i18n("addedNumFiles", {
          numFiles: n
        }));
      });
      const aggregateRestrictionError = this.validateAggregateRestrictions(enrichedTree);
      if (aggregateRestrictionError) {
        this.plugin.setPluginState({
          partialTree: enrichedTree
        });
        return;
      }
      const companionFiles = getCheckedFilesWithPaths_default(enrichedTree);
      addFiles_default(companionFiles, this.plugin, this.provider);
      this.resetPluginState();
    }).catch(handleError_default(this.plugin.uppy));
    this.setLoading(false);
  }
  toggleCheckbox(ourItem, isShiftKeyPressed) {
    const {
      partialTree
    } = this.plugin.getPluginState();
    const clickedRange = getClickedRange_default(ourItem.id, this.getDisplayedPartialTree(), isShiftKeyPressed, this.lastCheckbox);
    const newPartialTree = PartialTreeUtils_default.afterToggleCheckbox(partialTree, clickedRange);
    this.plugin.setPluginState({
      partialTree: newPartialTree
    });
    this.lastCheckbox = ourItem.id;
  }
  render(state, viewOptions) {
    if (viewOptions === void 0) {
      viewOptions = {};
    }
    const {
      didFirstRender
    } = this.plugin.getPluginState();
    const {
      i18n
    } = this.plugin.uppy;
    if (!didFirstRender) {
      this.plugin.setPluginState({
        didFirstRender: true
      });
      this.provider.fetchPreAuthToken();
      this.openFolder(this.plugin.rootFolderId);
    }
    const opts = {
      ...this.opts,
      ...viewOptions
    };
    const {
      authenticated,
      loading
    } = this.plugin.getPluginState();
    const pluginIcon = this.plugin.icon || defaultPickerIcon;
    if (authenticated === false) {
      return createElement(AuthView, {
        pluginName: this.plugin.title,
        pluginIcon,
        handleAuth: this.handleAuth,
        i18n: this.plugin.uppy.i18n,
        renderForm: opts.renderAuthForm,
        loading
      });
    }
    const {
      partialTree,
      currentFolderId,
      username,
      searchString
    } = this.plugin.getPluginState();
    const breadcrumbs = getBreadcrumbs_default(partialTree, currentFolderId);
    return createElement("div", {
      className: (0, import_classnames6.default)("uppy-ProviderBrowser", `uppy-ProviderBrowser-viewType--${opts.viewType}`)
    }, createElement(Header, {
      showBreadcrumbs: opts.showBreadcrumbs,
      openFolder: this.openFolder,
      breadcrumbs,
      pluginIcon,
      title: this.plugin.title,
      logout: this.logout,
      username,
      i18n
    }), opts.showFilter && createElement(SearchInput_default, {
      searchString,
      setSearchString: (s) => {
        this.plugin.setPluginState({
          searchString: s
        });
      },
      submitSearchString: () => {
      },
      inputLabel: i18n("filter"),
      clearSearchLabel: i18n("resetFilter"),
      wrapperClassName: "uppy-ProviderBrowser-searchFilter",
      inputClassName: "uppy-ProviderBrowser-searchFilterInput"
    }), createElement(Browser_default, {
      toggleCheckbox: this.toggleCheckbox,
      displayedPartialTree: this.getDisplayedPartialTree(),
      openFolder: this.openFolder,
      virtualList: opts.virtualList,
      noResultsLabel: i18n("noFilesFound"),
      handleScroll: this.handleScroll,
      viewType: opts.viewType,
      showTitles: opts.showTitles,
      i18n: this.plugin.uppy.i18n,
      isLoading: loading,
      utmSource: "Companion"
    }), createElement(FooterActions, {
      partialTree,
      donePicking: this.donePicking,
      cancelSelection: this.cancelSelection,
      i18n,
      validateAggregateRestrictions: this.validateAggregateRestrictions
    }));
  }
};
async function _withAbort2(op) {
  var _classPrivateFieldLoo;
  (_classPrivateFieldLoo = _classPrivateFieldLooseBase6(this, _abortController)[_abortController]) == null || _classPrivateFieldLoo.abort();
  const abortController = new AbortController();
  _classPrivateFieldLooseBase6(this, _abortController)[_abortController] = abortController;
  const cancelRequest = () => {
    abortController.abort();
  };
  try {
    this.plugin.uppy.on("dashboard:close-panel", cancelRequest);
    this.plugin.uppy.on("cancel-all", cancelRequest);
    await op(abortController.signal);
  } finally {
    this.plugin.uppy.off("dashboard:close-panel", cancelRequest);
    this.plugin.uppy.off("cancel-all", cancelRequest);
    _classPrivateFieldLooseBase6(this, _abortController)[_abortController] = void 0;
  }
}
ProviderView.VERSION = packageJson6.version;

// node_modules/@uppy/provider-views/lib/SearchProviderView/SearchProviderView.js
var import_classnames7 = __toESM(require_classnames(), 1);
var packageJson7 = {
  "version": "4.4.3"
};
var defaultState = {
  loading: false,
  searchString: "",
  partialTree: [{
    type: "root",
    id: null,
    cached: false,
    nextPagePath: null
  }],
  currentFolderId: null,
  isInputMode: true
};
var defaultOptions4 = {
  viewType: "grid",
  showTitles: true,
  showFilter: true,
  utmSource: "Companion"
};
var SearchProviderView = class {
  constructor(plugin, opts) {
    this.isHandlingScroll = false;
    this.lastCheckbox = null;
    this.validateSingleFile = (file) => {
      const companionFile = remoteFileObjToLocal(file);
      const result = this.plugin.uppy.validateSingleFile(companionFile);
      return result;
    };
    this.getDisplayedPartialTree = () => {
      const {
        partialTree
      } = this.plugin.getPluginState();
      return partialTree.filter((item) => item.type !== "root");
    };
    this.setSearchString = (searchString) => {
      this.plugin.setPluginState({
        searchString
      });
      if (searchString === "") {
        this.plugin.setPluginState({
          partialTree: []
        });
      }
    };
    this.validateAggregateRestrictions = (partialTree) => {
      const checkedFiles = partialTree.filter((item) => item.type === "file" && item.status === "checked");
      const uppyFiles = checkedFiles.map((file) => file.data);
      return this.plugin.uppy.validateAggregateRestrictions(uppyFiles);
    };
    this.plugin = plugin;
    this.provider = opts.provider;
    this.opts = {
      ...defaultOptions4,
      ...opts
    };
    this.setSearchString = this.setSearchString.bind(this);
    this.search = this.search.bind(this);
    this.resetPluginState = this.resetPluginState.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.donePicking = this.donePicking.bind(this);
    this.cancelSelection = this.cancelSelection.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.render = this.render.bind(this);
    this.resetPluginState();
    this.plugin.uppy.on("dashboard:close-panel", this.resetPluginState);
    this.plugin.uppy.registerRequestClient(this.provider.provider, this.provider);
  }
  // eslint-disable-next-line class-methods-use-this
  tearDown() {
  }
  setLoading(loading) {
    this.plugin.setPluginState({
      loading
    });
  }
  resetPluginState() {
    this.plugin.setPluginState(defaultState);
  }
  cancelSelection() {
    const {
      partialTree
    } = this.plugin.getPluginState();
    const newPartialTree = partialTree.map((item) => item.type === "root" ? item : {
      ...item,
      status: "unchecked"
    });
    this.plugin.setPluginState({
      partialTree: newPartialTree
    });
  }
  async search() {
    const {
      searchString
    } = this.plugin.getPluginState();
    if (searchString === "") return;
    this.setLoading(true);
    try {
      const response = await this.provider.search(searchString);
      const newPartialTree = [{
        type: "root",
        id: null,
        cached: false,
        nextPagePath: response.nextPageQuery
      }, ...response.items.map((item) => ({
        type: "file",
        id: item.requestPath,
        status: "unchecked",
        parentId: null,
        data: item
      }))];
      this.plugin.setPluginState({
        partialTree: newPartialTree,
        isInputMode: false
      });
    } catch (error) {
      handleError_default(this.plugin.uppy)(error);
    }
    this.setLoading(false);
  }
  async handleScroll(event2) {
    const {
      partialTree,
      searchString
    } = this.plugin.getPluginState();
    const root = partialTree.find((i) => i.type === "root");
    if (shouldHandleScroll_default(event2) && !this.isHandlingScroll && root.nextPagePath) {
      this.isHandlingScroll = true;
      try {
        const response = await this.provider.search(searchString, root.nextPagePath);
        const newRoot = {
          ...root,
          nextPagePath: response.nextPageQuery
        };
        const oldItems = partialTree.filter((i) => i.type !== "root");
        const newPartialTree = [newRoot, ...oldItems, ...response.items.map((item) => ({
          type: "file",
          id: item.requestPath,
          status: "unchecked",
          parentId: null,
          data: item
        }))];
        this.plugin.setPluginState({
          partialTree: newPartialTree
        });
      } catch (error) {
        handleError_default(this.plugin.uppy)(error);
      }
      this.isHandlingScroll = false;
    }
  }
  async donePicking() {
    const {
      partialTree
    } = this.plugin.getPluginState();
    const companionFiles = getCheckedFilesWithPaths_default(partialTree);
    addFiles_default(companionFiles, this.plugin, this.provider);
    this.resetPluginState();
  }
  toggleCheckbox(ourItem, isShiftKeyPressed) {
    const {
      partialTree
    } = this.plugin.getPluginState();
    const clickedRange = getClickedRange_default(ourItem.id, this.getDisplayedPartialTree(), isShiftKeyPressed, this.lastCheckbox);
    const newPartialTree = PartialTreeUtils_default.afterToggleCheckbox(partialTree, clickedRange);
    this.plugin.setPluginState({
      partialTree: newPartialTree
    });
    this.lastCheckbox = ourItem.id;
  }
  render(state, viewOptions) {
    if (viewOptions === void 0) {
      viewOptions = {};
    }
    const {
      isInputMode,
      searchString,
      loading,
      partialTree
    } = this.plugin.getPluginState();
    const {
      i18n
    } = this.plugin.uppy;
    const opts = {
      ...this.opts,
      ...viewOptions
    };
    if (isInputMode) {
      return createElement(SearchInput_default, {
        searchString,
        setSearchString: this.setSearchString,
        submitSearchString: this.search,
        inputLabel: i18n("enterTextToSearch"),
        buttonLabel: i18n("searchImages"),
        wrapperClassName: "uppy-SearchProvider",
        inputClassName: "uppy-c-textInput uppy-SearchProvider-input",
        showButton: true,
        buttonCSSClassName: "uppy-SearchProvider-searchButton"
      });
    }
    return createElement("div", {
      className: (0, import_classnames7.default)("uppy-ProviderBrowser", `uppy-ProviderBrowser-viewType--${opts.viewType}`)
    }, opts.showFilter && createElement(SearchInput_default, {
      searchString,
      setSearchString: this.setSearchString,
      submitSearchString: this.search,
      inputLabel: i18n("search"),
      clearSearchLabel: i18n("resetSearch"),
      wrapperClassName: "uppy-ProviderBrowser-searchFilter",
      inputClassName: "uppy-ProviderBrowser-searchFilterInput"
    }), createElement(Browser_default, {
      toggleCheckbox: this.toggleCheckbox,
      displayedPartialTree: this.getDisplayedPartialTree(),
      handleScroll: this.handleScroll,
      openFolder: async () => {
      },
      noResultsLabel: i18n("noSearchResults"),
      viewType: opts.viewType,
      showTitles: opts.showTitles,
      isLoading: loading,
      i18n,
      virtualList: false,
      utmSource: this.opts.utmSource
    }), createElement(FooterActions, {
      partialTree,
      donePicking: this.donePicking,
      cancelSelection: this.cancelSelection,
      i18n,
      validateAggregateRestrictions: this.validateAggregateRestrictions
    }));
  }
};
SearchProviderView.VERSION = packageJson7.version;

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js
var FOCUSABLE_ELEMENTS_default = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

// node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js
function getActiveOverlayEl(dashboardEl, activeOverlayType) {
  if (activeOverlayType) {
    const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
    if (overlayEl) return overlayEl;
  }
  return dashboardEl;
}

// node_modules/@uppy/dashboard/lib/utils/trapFocus.js
function focusOnFirstNode(event2, nodes) {
  const node2 = nodes[0];
  if (node2) {
    node2.focus();
    event2.preventDefault();
  }
}
function focusOnLastNode(event2, nodes) {
  const node2 = nodes[nodes.length - 1];
  if (node2) {
    node2.focus();
    event2.preventDefault();
  }
}
function isFocusInOverlay(activeOverlayEl) {
  return activeOverlayEl.contains(document.activeElement);
}
function trapFocus(event2, activeOverlayType, dashboardEl) {
  const activeOverlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
  const focusableNodes = toArray_default(activeOverlayEl.querySelectorAll(FOCUSABLE_ELEMENTS_default));
  const focusedItemIndex = focusableNodes.indexOf(document.activeElement);
  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event2, focusableNodes);
  } else if (event2.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event2, focusableNodes);
  } else if (!event2.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event2, focusableNodes);
  }
}
function forInline(event2, activeOverlayType, dashboardEl) {
  if (activeOverlayType === null) {
  } else {
    trapFocus(event2, activeOverlayType, dashboardEl);
  }
}

// node_modules/@uppy/dashboard/lib/utils/createSuperFocus.js
var import_debounce = __toESM(require_debounce(), 1);
function createSuperFocus() {
  let lastFocusWasOnSuperFocusableEl = false;
  const superFocus = (dashboardEl, activeOverlayType) => {
    const overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    const isFocusInOverlay2 = overlayEl.contains(document.activeElement);
    if (isFocusInOverlay2 && lastFocusWasOnSuperFocusableEl) return;
    const superFocusableEl = overlayEl.querySelector("[data-uppy-super-focusable]");
    if (isFocusInOverlay2 && !superFocusableEl) return;
    if (superFocusableEl) {
      superFocusableEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = true;
    } else {
      const firstEl = overlayEl.querySelector(FOCUSABLE_ELEMENTS_default);
      firstEl == null || firstEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = false;
    }
  };
  return (0, import_debounce.default)(superFocus, 260);
}

// node_modules/@uppy/dashboard/lib/components/Dashboard.js
var import_classnames14 = __toESM(require_classnames(), 1);

// node_modules/@uppy/utils/lib/isDragDropSupported.js
function isDragDropSupported() {
  const div = document.body;
  if (!("draggable" in div) || !("ondragstart" in div && "ondrop" in div)) {
    return false;
  }
  if (!("FormData" in window)) {
    return false;
  }
  if (!("FileReader" in window)) {
    return false;
  }
  return true;
}

// node_modules/@uppy/dashboard/lib/components/FileItem/index.js
var import_classnames8 = __toESM(require_classnames(), 1);

// node_modules/shallow-equal/dist/index.modern.mjs
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    const key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}

// node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js
function iconImage() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("g", {
    fill: "#686DE0",
    fillRule: "evenodd"
  }, createElement("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    fillRule: "nonzero"
  }), createElement("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    fillRule: "nonzero"
  }), createElement("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}
function iconAudio() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    fillRule: "nonzero"
  }));
}
function iconVideo() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    fillRule: "nonzero"
  }));
}
function iconPDF() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    fillRule: "nonzero"
  }));
}
function iconArchive() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    fillRule: "nonzero"
  }));
}
function iconFile() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("g", {
    fill: "#A7AFB7",
    fillRule: "nonzero"
  }, createElement("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), createElement("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}
function iconText() {
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, createElement("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    fillRule: "nonzero"
  }));
}
function getIconByMime(fileType) {
  const defaultChoice = {
    color: "#838999",
    icon: iconFile()
  };
  if (!fileType) return defaultChoice;
  const fileTypeGeneral = fileType.split("/")[0];
  const fileTypeSpecific = fileType.split("/")[1];
  if (fileTypeGeneral === "text") {
    return {
      color: "#5a5e69",
      icon: iconText()
    };
  }
  if (fileTypeGeneral === "image") {
    return {
      color: "#686de0",
      icon: iconImage()
    };
  }
  if (fileTypeGeneral === "audio") {
    return {
      color: "#068dbb",
      icon: iconAudio()
    };
  }
  if (fileTypeGeneral === "video") {
    return {
      color: "#19af67",
      icon: iconVideo()
    };
  }
  if (fileTypeGeneral === "application" && fileTypeSpecific === "pdf") {
    return {
      color: "#e25149",
      icon: iconPDF()
    };
  }
  const archiveTypes = ["zip", "x-7z-compressed", "x-zip-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"];
  if (fileTypeGeneral === "application" && archiveTypes.indexOf(fileTypeSpecific) !== -1) {
    return {
      color: "#00C469",
      icon: iconArchive()
    };
  }
  return defaultChoice;
}

// node_modules/@uppy/dashboard/lib/components/FilePreview.js
function FilePreview(props) {
  const {
    file
  } = props;
  if (file.preview) {
    return createElement("img", {
      draggable: false,
      className: "uppy-Dashboard-Item-previewImg",
      alt: file.name,
      src: file.preview
    });
  }
  const {
    color,
    icon
  } = getIconByMime(file.type);
  return createElement("div", {
    className: "uppy-Dashboard-Item-previewIconWrap"
  }, createElement("span", {
    className: "uppy-Dashboard-Item-previewIcon",
    style: {
      color
    }
  }, icon), createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-Dashboard-Item-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, createElement("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    fillRule: "evenodd"
  })));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/MetaErrorMessage.js
var metaFieldIdToName = (metaFieldId, metaFields) => {
  const fields = typeof metaFields === "function" ? metaFields() : metaFields;
  const field = fields.filter((f) => f.id === metaFieldId);
  return field[0].name;
};
function MetaErrorMessage(props) {
  const {
    file,
    toggleFileCard,
    i18n,
    metaFields
  } = props;
  const {
    missingRequiredMetaFields
  } = file;
  if (!(missingRequiredMetaFields != null && missingRequiredMetaFields.length)) {
    return null;
  }
  const metaFieldsString = missingRequiredMetaFields.map((missingMetaField) => metaFieldIdToName(missingMetaField, metaFields)).join(", ");
  return createElement("div", {
    className: "uppy-Dashboard-Item-errorMessage"
  }, i18n("missingRequiredMetaFields", {
    smart_count: missingRequiredMetaFields.length,
    fields: metaFieldsString
  }), " ", createElement("button", {
    type: "button",
    class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
    onClick: () => toggleFileCard(true, file.id)
  }, i18n("editFile")));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FilePreviewAndLink/index.js
function FilePreviewAndLink(props) {
  const {
    file,
    i18n,
    toggleFileCard,
    metaFields,
    showLinkToFileUploadResult
  } = props;
  const white = "rgba(255, 255, 255, 0.5)";
  const previewBackgroundColor = file.preview ? white : getIconByMime(file.type).color;
  return createElement("div", {
    className: "uppy-Dashboard-Item-previewInnerWrap",
    style: {
      backgroundColor: previewBackgroundColor
    }
  }, showLinkToFileUploadResult && file.uploadURL && createElement("a", {
    className: "uppy-Dashboard-Item-previewLink",
    href: file.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": file.meta.name
  }, createElement("span", {
    hidden: true
  }, file.meta.name)), createElement(FilePreview, {
    file
  }), createElement(MetaErrorMessage, {
    file,
    i18n,
    toggleFileCard,
    metaFields
  }));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/index.js
function onPauseResumeCancelRetry(props) {
  if (props.isUploaded) return;
  if (props.error && !props.hideRetryButton) {
    props.uppy.retryUpload(props.file.id);
    return;
  }
  if (props.resumableUploads && !props.hidePauseResumeButton) {
    props.uppy.pauseResume(props.file.id);
  } else if (props.individualCancellation && !props.hideCancelButton) {
    props.uppy.removeFile(props.file.id);
  }
}
function progressIndicatorTitle(props) {
  if (props.isUploaded) {
    return props.i18n("uploadComplete");
  }
  if (props.error) {
    return props.i18n("retryUpload");
  }
  if (props.resumableUploads) {
    if (props.file.isPaused) {
      return props.i18n("resumeUpload");
    }
    return props.i18n("pauseUpload");
  }
  if (props.individualCancellation) {
    return props.i18n("cancelUpload");
  }
  return "";
}
function ProgressIndicatorButton(props) {
  return createElement("div", {
    className: "uppy-Dashboard-Item-progress"
  }, createElement("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": progressIndicatorTitle(props),
    title: progressIndicatorTitle(props),
    onClick: () => onPauseResumeCancelRetry(props)
  }, props.children));
}
function ProgressCircleContainer(_ref) {
  let {
    children
  } = _ref;
  return createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, children);
}
function ProgressCircle(_ref2) {
  let {
    progress
  } = _ref2;
  const circleLength = 2 * Math.PI * 15;
  return createElement("g", null, createElement("circle", {
    className: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), createElement("circle", {
    className: "uppy-Dashboard-Item-progressIcon--progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    fill: "none",
    "stroke-width": "2",
    "stroke-dasharray": circleLength,
    "stroke-dashoffset": circleLength - circleLength / 100 * progress
  }));
}
function FileProgress(props) {
  if (!props.file.progress.uploadStarted) {
    return null;
  }
  if (props.file.progress.percentage === void 0) {
    return null;
  }
  if (props.isUploaded) {
    return createElement("div", {
      className: "uppy-Dashboard-Item-progress"
    }, createElement("div", {
      className: "uppy-Dashboard-Item-progressIndicator"
    }, createElement(ProgressCircleContainer, null, createElement("circle", {
      r: "15",
      cx: "18",
      cy: "18",
      fill: "#1bb240"
    }), createElement("polygon", {
      className: "uppy-Dashboard-Item-progressIcon--check",
      transform: "translate(2, 3)",
      points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }))));
  }
  if (props.recoveredState) {
    return null;
  }
  if (props.error && !props.hideRetryButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      createElement(ProgressIndicatorButton, props, createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
        width: "28",
        height: "31",
        viewBox: "0 0 16 19"
      }, createElement("path", {
        d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
      }), createElement("path", {
        d: "M7.9 3H10v2H7.9z"
      }), createElement("path", {
        d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
      }), createElement("path", {
        d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
      })))
    );
  }
  if (props.resumableUploads && !props.hidePauseResumeButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      createElement(ProgressIndicatorButton, props, createElement(ProgressCircleContainer, null, createElement(ProgressCircle, {
        progress: props.file.progress.percentage
      }), props.file.isPaused ? createElement("polygon", {
        className: "uppy-Dashboard-Item-progressIcon--play",
        transform: "translate(3, 3)",
        points: "12 20 12 10 20 15"
      }) : createElement("g", {
        className: "uppy-Dashboard-Item-progressIcon--pause",
        transform: "translate(14.5, 13)"
      }, createElement("rect", {
        x: "0",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }), createElement("rect", {
        x: "5",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }))))
    );
  }
  if (!props.resumableUploads && props.individualCancellation && !props.hideCancelButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      createElement(ProgressIndicatorButton, props, createElement(ProgressCircleContainer, null, createElement(ProgressCircle, {
        progress: props.file.progress.percentage
      }), createElement("polygon", {
        className: "cancel",
        transform: "translate(2, 2)",
        points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
      })))
    );
  }
  return createElement("div", {
    className: "uppy-Dashboard-Item-progress"
  }, createElement("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, createElement(ProgressCircleContainer, null, createElement(ProgressCircle, {
    progress: props.file.progress.percentage
  }))));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js
var import_prettier_bytes3 = __toESM(require_prettierBytes(), 1);

// node_modules/@uppy/utils/lib/truncateString.js
var separator = "...";
function truncateString(string, maxLength) {
  if (maxLength === 0) return "";
  if (string.length <= maxLength) return string;
  if (maxLength <= separator.length + 1) return `${string.slice(0, maxLength - 1)}\u2026`;
  const charsToShow = maxLength - separator.length;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  return string.slice(0, frontChars) + separator + string.slice(-backChars);
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js
var renderFileName = (props) => {
  const {
    author,
    name
  } = props.file.meta;
  function getMaxNameLength() {
    if (props.isSingleFile && props.containerHeight >= 350) {
      return 90;
    }
    if (props.containerWidth <= 352) {
      return 35;
    }
    if (props.containerWidth <= 576) {
      return 60;
    }
    return author ? 20 : 30;
  }
  return createElement("div", {
    className: "uppy-Dashboard-Item-name",
    title: name
  }, truncateString(name, getMaxNameLength()));
};
var renderAuthor = (props) => {
  var _props$file$remote;
  const {
    author
  } = props.file.meta;
  const providerName = (_props$file$remote = props.file.remote) == null ? void 0 : _props$file$remote.providerName;
  const dot = `\xB7`;
  if (!author) {
    return null;
  }
  return createElement("div", {
    className: "uppy-Dashboard-Item-author"
  }, createElement("a", {
    href: `${author.url}?utm_source=Companion&utm_medium=referral`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, truncateString(author.name, 13)), providerName ? createElement(Fragment, null, ` ${dot} `, providerName, ` ${dot} `) : null);
};
var renderFileSize = (props) => props.file.size && createElement("div", {
  className: "uppy-Dashboard-Item-statusSize"
}, (0, import_prettier_bytes3.default)(props.file.size));
var ReSelectButton = (props) => props.file.isGhost && createElement("span", null, " \u2022 ", createElement("button", {
  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
  type: "button",
  onClick: () => props.toggleAddFilesPanel(true)
}, props.i18n("reSelect")));
var ErrorButton = (_ref) => {
  let {
    file,
    onClick
  } = _ref;
  if (file.error) {
    return createElement("button", {
      className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
      "aria-label": file.error,
      "data-microtip-position": "bottom",
      "data-microtip-size": "medium",
      onClick,
      type: "button"
    }, "?");
  }
  return null;
};
function FileInfo(props) {
  const {
    file,
    i18n,
    toggleFileCard,
    metaFields,
    toggleAddFilesPanel,
    isSingleFile,
    containerHeight,
    containerWidth
  } = props;
  return createElement("div", {
    className: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": file.source
  }, createElement("div", {
    className: "uppy-Dashboard-Item-fileName"
  }, renderFileName({
    file,
    isSingleFile,
    containerHeight,
    containerWidth
  }), createElement(ErrorButton, {
    file,
    onClick: () => alert(file.error)
  })), createElement("div", {
    className: "uppy-Dashboard-Item-status"
  }, renderAuthor({
    file
  }), renderFileSize({
    file
  }), ReSelectButton({
    file,
    toggleAddFilesPanel,
    i18n
  })), createElement(MetaErrorMessage, {
    file,
    i18n,
    toggleFileCard,
    metaFields
  }));
}

// node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js
function copyToClipboard(textToCopy, fallbackString) {
  if (fallbackString === void 0) {
    fallbackString = "Copy the URL below";
  }
  return new Promise((resolve) => {
    const textArea = document.createElement("textarea");
    textArea.setAttribute("style", {
      position: "fixed",
      top: 0,
      left: 0,
      width: "2em",
      height: "2em",
      padding: 0,
      border: "none",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    });
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    const magicCopyFailed = () => {
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
    };
    try {
      const successful = document.execCommand("copy");
      if (!successful) {
        return magicCopyFailed();
      }
      document.body.removeChild(textArea);
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return magicCopyFailed();
    }
  });
}

// node_modules/@uppy/dashboard/lib/components/FileItem/Buttons/index.js
function EditButton(_ref) {
  let {
    file,
    uploadInProgressOrComplete,
    metaFields,
    canEditFile,
    i18n,
    onClick
  } = _ref;
  if (!uploadInProgressOrComplete && metaFields && metaFields.length > 0 || !uploadInProgressOrComplete && canEditFile(file)) {
    return createElement("button", {
      className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
      type: "button",
      "aria-label": i18n("editFileWithFilename", {
        file: file.meta.name
      }),
      title: i18n("editFileWithFilename", {
        file: file.meta.name
      }),
      onClick: () => onClick()
    }, createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, createElement("g", {
      fillRule: "evenodd"
    }, createElement("path", {
      d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
      fillRule: "nonzero"
    }), createElement("rect", {
      x: "1",
      y: "12.293",
      width: "11",
      height: "1",
      rx: ".5"
    }), createElement("path", {
      fillRule: "nonzero",
      d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
    }))));
  }
  return null;
}
function RemoveButton(_ref2) {
  let {
    i18n,
    onClick,
    file
  } = _ref2;
  return createElement("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
    type: "button",
    "aria-label": i18n("removeFile", {
      file: file.meta.name
    }),
    title: i18n("removeFile", {
      file: file.meta.name
    }),
    onClick: () => onClick()
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, createElement("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), createElement("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  })));
}
function CopyLinkButton(_ref3) {
  let {
    file,
    uppy: uppy2,
    i18n
  } = _ref3;
  const copyLinkToClipboard = (event2) => {
    copyToClipboard(file.uploadURL, i18n("copyLinkToClipboardFallback")).then(() => {
      uppy2.log("Link copied to clipboard.");
      uppy2.info(i18n("copyLinkToClipboardSuccess"), "info", 3e3);
    }).catch(uppy2.log).then(() => event2.target.focus({
      preventScroll: true
    }));
  };
  return createElement("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
    type: "button",
    "aria-label": i18n("copyLink"),
    title: i18n("copyLink"),
    onClick: (event2) => copyLinkToClipboard(event2)
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, createElement("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  })));
}
function Buttons(props) {
  const {
    uppy: uppy2,
    file,
    uploadInProgressOrComplete,
    canEditFile,
    metaFields,
    showLinkToFileUploadResult,
    showRemoveButton,
    i18n,
    toggleFileCard,
    openFileEditor
  } = props;
  const editAction = () => {
    if (metaFields && metaFields.length > 0) {
      toggleFileCard(true, file.id);
    } else {
      openFileEditor(file);
    }
  };
  return createElement("div", {
    className: "uppy-Dashboard-Item-actionWrapper"
  }, createElement(EditButton, {
    i18n,
    file,
    uploadInProgressOrComplete,
    canEditFile,
    metaFields,
    onClick: editAction
  }), showLinkToFileUploadResult && file.uploadURL ? createElement(CopyLinkButton, {
    file,
    uppy: uppy2,
    i18n
  }) : null, showRemoveButton ? createElement(RemoveButton, {
    i18n,
    file,
    onClick: () => uppy2.removeFile(file.id)
  }) : null);
}

// node_modules/@uppy/dashboard/lib/components/FileItem/index.js
var FileItem = class extends BaseComponent {
  componentDidMount() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqualObjects(this.props, nextProps);
  }
  // VirtualList mounts FileItems again and they emit `thumbnail:request`
  // Otherwise thumbnails are broken or missing after Golden Retriever restores files
  componentDidUpdate() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
  }
  componentWillUnmount() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleCancelThumbnail(file);
    }
  }
  render() {
    const {
      file
    } = this.props;
    const isProcessing = file.progress.preprocess || file.progress.postprocess;
    const isUploaded = !!file.progress.uploadComplete && !isProcessing && !file.error;
    const uploadInProgressOrComplete = !!file.progress.uploadStarted || !!isProcessing;
    const uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    const error = file.error || false;
    const {
      isGhost
    } = file;
    let showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
    if (isUploaded && this.props.showRemoveButtonAfterComplete) {
      showRemoveButton = true;
    }
    const dashboardItemClass = (0, import_classnames8.default)({
      "uppy-Dashboard-Item": true,
      "is-inprogress": uploadInProgress && !this.props.recoveredState,
      "is-processing": isProcessing,
      "is-complete": isUploaded,
      "is-error": !!error,
      "is-resumable": this.props.resumableUploads,
      "is-noIndividualCancellation": !this.props.individualCancellation,
      "is-ghost": isGhost
    });
    return createElement("div", {
      className: dashboardItemClass,
      id: `uppy_${file.id}`,
      role: this.props.role
    }, createElement("div", {
      className: "uppy-Dashboard-Item-preview"
    }, createElement(FilePreviewAndLink, {
      file,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      i18n: this.props.i18n,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields
    }), createElement(FileProgress, {
      uppy: this.props.uppy,
      file,
      error,
      isUploaded,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      recoveredState: this.props.recoveredState,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      i18n: this.props.i18n
    })), createElement("div", {
      className: "uppy-Dashboard-Item-fileInfoAndButtons"
    }, createElement(FileInfo, {
      file,
      containerWidth: this.props.containerWidth,
      containerHeight: this.props.containerHeight,
      i18n: this.props.i18n,
      toggleAddFilesPanel: this.props.toggleAddFilesPanel,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields,
      isSingleFile: this.props.isSingleFile
    }), createElement(Buttons, {
      file,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton,
      canEditFile: this.props.canEditFile,
      uploadInProgressOrComplete,
      toggleFileCard: this.props.toggleFileCard,
      openFileEditor: this.props.openFileEditor,
      uppy: this.props.uppy,
      i18n: this.props.i18n
    })));
  }
};

// node_modules/@uppy/dashboard/lib/components/FileList.js
function chunks(list, size) {
  const chunked = [];
  let currentChunk = [];
  list.forEach((item) => {
    if (currentChunk.length < size) {
      currentChunk.push(item);
    } else {
      chunked.push(currentChunk);
      currentChunk = [item];
    }
  });
  if (currentChunk.length) chunked.push(currentChunk);
  return chunked;
}
function FileList(_ref) {
  let {
    id: id12,
    i18n,
    uppy: uppy2,
    files,
    resumableUploads,
    hideRetryButton,
    hidePauseResumeButton,
    hideCancelButton,
    showLinkToFileUploadResult,
    showRemoveButtonAfterComplete,
    metaFields,
    isSingleFile,
    toggleFileCard,
    handleRequestThumbnail,
    handleCancelThumbnail,
    recoveredState,
    individualCancellation,
    itemsPerRow,
    openFileEditor,
    canEditFile,
    toggleAddFilesPanel,
    containerWidth,
    containerHeight
  } = _ref;
  const rowHeight = itemsPerRow === 1 ? (
    // Mobile
    71
  ) : 200;
  const rows = useMemo(() => {
    const sortByGhostComesFirst = (file1, file2) => Number(files[file2].isGhost) - Number(files[file1].isGhost);
    const fileIds = Object.keys(files);
    if (recoveredState) fileIds.sort(sortByGhostComesFirst);
    return chunks(fileIds, itemsPerRow);
  }, [files, itemsPerRow, recoveredState]);
  const renderRow = (row) => createElement("div", {
    class: "uppy-Dashboard-filesInner",
    role: "presentation",
    key: row[0]
  }, row.map((fileID) => createElement(FileItem, {
    key: fileID,
    uppy: uppy2,
    id: id12,
    i18n,
    resumableUploads,
    individualCancellation,
    hideRetryButton,
    hidePauseResumeButton,
    hideCancelButton,
    showLinkToFileUploadResult,
    showRemoveButtonAfterComplete,
    metaFields,
    recoveredState,
    isSingleFile,
    containerWidth,
    containerHeight,
    toggleFileCard,
    handleRequestThumbnail,
    handleCancelThumbnail,
    role: "listitem",
    openFileEditor,
    canEditFile,
    toggleAddFilesPanel,
    file: files[fileID]
  })));
  if (isSingleFile) {
    return createElement("div", {
      class: "uppy-Dashboard-files"
    }, renderRow(rows[0]));
  }
  return createElement(VirtualList_default, {
    class: "uppy-Dashboard-files",
    role: "list",
    data: rows,
    renderRow,
    rowHeight
  });
}

// node_modules/@uppy/dashboard/lib/components/AddFiles.js
var AddFiles = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.fileInput = null;
    this.folderInput = null;
    this.mobilePhotoFileInput = null;
    this.mobileVideoFileInput = null;
    this.triggerFileInputClick = () => {
      var _this$fileInput;
      (_this$fileInput = this.fileInput) == null || _this$fileInput.click();
    };
    this.triggerFolderInputClick = () => {
      var _this$folderInput;
      (_this$folderInput = this.folderInput) == null || _this$folderInput.click();
    };
    this.triggerVideoCameraInputClick = () => {
      var _this$mobileVideoFile;
      (_this$mobileVideoFile = this.mobileVideoFileInput) == null || _this$mobileVideoFile.click();
    };
    this.triggerPhotoCameraInputClick = () => {
      var _this$mobilePhotoFile;
      (_this$mobilePhotoFile = this.mobilePhotoFileInput) == null || _this$mobilePhotoFile.click();
    };
    this.onFileInputChange = (event2) => {
      this.props.handleInputChange(event2);
      event2.currentTarget.value = "";
    };
    this.renderHiddenInput = (isFolder, refCallback) => {
      var _this$props$allowedFi;
      return createElement("input", {
        className: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabIndex: -1,
        webkitdirectory: isFolder,
        type: "file",
        name: "files[]",
        multiple: this.props.maxNumberOfFiles !== 1,
        onChange: this.onFileInputChange,
        accept: (_this$props$allowedFi = this.props.allowedFileTypes) == null ? void 0 : _this$props$allowedFi.join(", "),
        ref: refCallback
      });
    };
    this.renderHiddenCameraInput = (type, nativeCameraFacingMode, refCallback) => {
      const typeToAccept = {
        photo: "image/*",
        video: "video/*"
      };
      const accept = typeToAccept[type];
      return createElement("input", {
        className: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabIndex: -1,
        type: "file",
        name: `camera-${type}`,
        onChange: this.onFileInputChange,
        capture: nativeCameraFacingMode,
        accept,
        ref: refCallback
      });
    };
    this.renderMyDeviceAcquirer = () => {
      return createElement("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MyDevice"
      }, createElement("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerFileInputClick
      }, createElement("div", {
        className: "uppy-DashboardTab-inner"
      }, createElement("svg", {
        className: "uppy-DashboardTab-iconMyDevice",
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, createElement("path", {
        d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
        fill: "currentcolor",
        "fill-rule": "evenodd"
      }))), createElement("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("myDevice"))));
    };
    this.renderPhotoCamera = () => {
      return createElement("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MobilePhotoCamera"
      }, createElement("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerPhotoCameraInputClick
      }, createElement("div", {
        className: "uppy-DashboardTab-inner"
      }, createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, createElement("path", {
        d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
        fill: "#02B383",
        "fill-rule": "nonzero"
      }))), createElement("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("takePictureBtn"))));
    };
    this.renderVideoCamera = () => {
      return createElement("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MobileVideoCamera"
      }, createElement("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerVideoCameraInputClick
      }, createElement("div", {
        className: "uppy-DashboardTab-inner"
      }, createElement("svg", {
        "aria-hidden": "true",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, createElement("path", {
        fill: "#FF675E",
        fillRule: "nonzero",
        d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
      }))), createElement("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("recordVideoBtn"))));
    };
    this.renderBrowseButton = (text, onClickFn) => {
      const numberOfAcquirers = this.props.acquirers.length;
      return createElement("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
        onClick: onClickFn,
        "data-uppy-super-focusable": numberOfAcquirers === 0
      }, text);
    };
    this.renderDropPasteBrowseTagline = (numberOfAcquirers) => {
      const browseFiles = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick);
      const browseFolders = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick);
      const lowerFMSelectionType = this.props.fileManagerSelectionType;
      const camelFMSelectionType = lowerFMSelectionType.charAt(0).toUpperCase() + lowerFMSelectionType.slice(1);
      return createElement(
        "div",
        {
          class: "uppy-Dashboard-AddFiles-title"
        },
        // eslint-disable-next-line no-nested-ternary
        this.props.disableLocalFiles ? this.props.i18n("importFiles") : numberOfAcquirers > 0 ? this.props.i18nArray(`dropPasteImport${camelFMSelectionType}`, {
          browseFiles,
          browseFolders,
          browse: browseFiles
        }) : this.props.i18nArray(`dropPaste${camelFMSelectionType}`, {
          browseFiles,
          browseFolders,
          browse: browseFiles
        })
      );
    };
    this.renderAcquirer = (acquirer) => {
      var _this$props$activePic;
      return createElement("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": acquirer.id
      }, createElement("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-cy": acquirer.id,
        "aria-controls": `uppy-DashboardContent-panel--${acquirer.id}`,
        "aria-selected": ((_this$props$activePic = this.props.activePickerPanel) == null ? void 0 : _this$props$activePic.id) === acquirer.id,
        "data-uppy-super-focusable": true,
        onClick: () => this.props.showPanel(acquirer.id)
      }, createElement("div", {
        className: "uppy-DashboardTab-inner"
      }, acquirer.icon()), createElement("div", {
        className: "uppy-DashboardTab-name"
      }, acquirer.name)));
    };
    this.renderAcquirers = (acquirers) => {
      const acquirersWithoutLastTwo = [...acquirers];
      const lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
      return createElement(Fragment2, null, acquirersWithoutLastTwo.map((acquirer) => this.renderAcquirer(acquirer)), createElement("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, lastTwoAcquirers.map((acquirer) => this.renderAcquirer(acquirer))));
    };
    this.renderSourcesList = (acquirers, disableLocalFiles) => {
      const {
        showNativePhotoCameraButton,
        showNativeVideoCameraButton
      } = this.props;
      let list = [];
      const myDeviceKey = "myDevice";
      if (!disableLocalFiles) list.push({
        key: myDeviceKey,
        elements: this.renderMyDeviceAcquirer()
      });
      if (showNativePhotoCameraButton) list.push({
        key: "nativePhotoCameraButton",
        elements: this.renderPhotoCamera()
      });
      if (showNativeVideoCameraButton) list.push({
        key: "nativePhotoCameraButton",
        elements: this.renderVideoCamera()
      });
      list.push(...acquirers.map((acquirer) => ({
        key: acquirer.id,
        elements: this.renderAcquirer(acquirer)
      })));
      const hasOnlyMyDevice = list.length === 1 && list[0].key === myDeviceKey;
      if (hasOnlyMyDevice) list = [];
      const listWithoutLastTwo = [...list];
      const lastTwo = listWithoutLastTwo.splice(list.length - 2, list.length);
      return createElement(Fragment2, null, this.renderDropPasteBrowseTagline(list.length), createElement("div", {
        className: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, listWithoutLastTwo.map((_ref) => {
        let {
          key,
          elements
        } = _ref;
        return createElement(Fragment2, {
          key
        }, elements);
      }), createElement("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, lastTwo.map((_ref2) => {
        let {
          key,
          elements
        } = _ref2;
        return createElement(Fragment2, {
          key
        }, elements);
      }))));
    };
  }
  [Symbol.for("uppy test: disable unused locale key warning")]() {
    this.props.i18nArray("dropPasteBoth");
    this.props.i18nArray("dropPasteFiles");
    this.props.i18nArray("dropPasteFolders");
    this.props.i18nArray("dropPasteImportBoth");
    this.props.i18nArray("dropPasteImportFiles");
    this.props.i18nArray("dropPasteImportFolders");
  }
  renderPoweredByUppy() {
    const {
      i18nArray
    } = this.props;
    const uppyBranding = createElement("span", null, createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, createElement("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      fillRule: "evenodd"
    })), createElement("span", {
      className: "uppy-Dashboard-poweredByUppy"
    }, "Uppy"));
    const linkText = i18nArray("poweredBy", {
      uppy: uppyBranding
    });
    return createElement("a", {
      tabIndex: -1,
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "uppy-Dashboard-poweredBy"
    }, linkText);
  }
  render() {
    const {
      showNativePhotoCameraButton,
      showNativeVideoCameraButton,
      nativeCameraFacingMode
    } = this.props;
    return createElement("div", {
      className: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenInput(false, (ref) => {
      this.fileInput = ref;
    }), this.renderHiddenInput(true, (ref) => {
      this.folderInput = ref;
    }), showNativePhotoCameraButton && this.renderHiddenCameraInput("photo", nativeCameraFacingMode, (ref) => {
      this.mobilePhotoFileInput = ref;
    }), showNativeVideoCameraButton && this.renderHiddenCameraInput("video", nativeCameraFacingMode, (ref) => {
      this.mobileVideoFileInput = ref;
    }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), createElement("div", {
      className: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && createElement("div", {
      className: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy()));
  }
};
var AddFiles_default = AddFiles;

// node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js
var import_classnames9 = __toESM(require_classnames(), 1);
var AddFilesPanel = (props) => {
  return createElement("div", {
    className: (0, import_classnames9.default)("uppy-Dashboard-AddFilesPanel", props.className),
    "data-uppy-panelType": "AddFiles",
    "aria-hidden": !props.showAddFilesPanel
  }, createElement("div", {
    className: "uppy-DashboardContent-bar"
  }, createElement("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n("addingMoreFiles")), createElement("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => props.toggleAddFilesPanel(false)
  }, props.i18n("back"))), createElement(AddFiles_default, props));
};
var AddFilesPanel_default = AddFilesPanel;

// node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js
var import_classnames10 = __toESM(require_classnames(), 1);

// node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js
function ignoreEvent(ev) {
  const {
    tagName
  } = ev.target;
  if (tagName === "INPUT" || tagName === "TEXTAREA") {
    ev.stopPropagation();
    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
}
var ignoreEvent_default = ignoreEvent;

// node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js
function PickerPanelContent(_ref) {
  let {
    activePickerPanel,
    className,
    hideAllPanels,
    i18n,
    state,
    uppy: uppy2
  } = _ref;
  const ref = useRef(null);
  return createElement("div", {
    className: (0, import_classnames10.default)("uppy-DashboardContent-panel", className),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${activePickerPanel.id}`,
    onDragOver: ignoreEvent_default,
    onDragLeave: ignoreEvent_default,
    onDrop: ignoreEvent_default,
    onPaste: ignoreEvent_default
  }, createElement("div", {
    className: "uppy-DashboardContent-bar"
  }, createElement("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18n("importFrom", {
    name: activePickerPanel.name
  })), createElement("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: hideAllPanels
  }, i18n("cancel"))), createElement("div", {
    ref,
    className: "uppy-DashboardContent-panelBody"
  }, uppy2.getPlugin(activePickerPanel.id).render(state, ref.current)));
}
var PickerPanelContent_default = PickerPanelContent;

// node_modules/@uppy/dashboard/lib/components/EditorPanel.js
var import_classnames11 = __toESM(require_classnames(), 1);
function EditorPanel(props) {
  const file = props.files[props.fileCardFor];
  const handleCancel = () => {
    props.uppy.emit("file-editor:cancel", file);
    props.closeFileEditor();
  };
  return createElement("div", {
    className: (0, import_classnames11.default)("uppy-DashboardContent-panel", props.className),
    role: "tabpanel",
    "data-uppy-panelType": "FileEditor",
    id: "uppy-DashboardContent-panel--editor"
  }, createElement("div", {
    className: "uppy-DashboardContent-bar"
  }, createElement("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18nArray("editing", {
    file: createElement("span", {
      className: "uppy-DashboardContent-titleFile"
    }, file.meta ? file.meta.name : file.name)
  })), createElement("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: handleCancel
  }, props.i18n("cancel")), createElement("button", {
    className: "uppy-DashboardContent-save",
    type: "button",
    onClick: props.saveFileEditor
  }, props.i18n("save"))), createElement("div", {
    className: "uppy-DashboardContent-panelBody"
  }, props.editors.map((target) => {
    return props.uppy.getPlugin(target.id).render(props.state);
  })));
}
var EditorPanel_default = EditorPanel;

// node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js
var uploadStates = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete",
  STATE_PAUSED: "paused"
};
function getUploadingState2(isAllErrored, isAllComplete, isAllPaused, files) {
  if (files === void 0) {
    files = {};
  }
  if (isAllErrored) {
    return uploadStates.STATE_ERROR;
  }
  if (isAllComplete) {
    return uploadStates.STATE_COMPLETE;
  }
  if (isAllPaused) {
    return uploadStates.STATE_PAUSED;
  }
  let state = uploadStates.STATE_WAITING;
  const fileIDs = Object.keys(files);
  for (let i = 0; i < fileIDs.length; i++) {
    const {
      progress
    } = files[fileIDs[i]];
    if (progress.uploadStarted && !progress.uploadComplete) {
      return uploadStates.STATE_UPLOADING;
    }
    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }
  return state;
}
function UploadStatus(_ref) {
  let {
    files,
    i18n,
    isAllComplete,
    isAllErrored,
    isAllPaused,
    inProgressNotPausedFiles,
    newFiles,
    processingFiles
  } = _ref;
  const uploadingState = getUploadingState2(isAllErrored, isAllComplete, isAllPaused, files);
  switch (uploadingState) {
    case "uploading":
      return i18n("uploadingXFiles", {
        smart_count: inProgressNotPausedFiles.length
      });
    case "preprocessing":
    case "postprocessing":
      return i18n("processingXFiles", {
        smart_count: processingFiles.length
      });
    case "paused":
      return i18n("uploadPaused");
    case "waiting":
      return i18n("xFilesSelected", {
        smart_count: newFiles.length
      });
    case "complete":
      return i18n("uploadComplete");
    case "error":
      return i18n("error");
    default:
  }
}
function PanelTopBar(props) {
  const {
    i18n,
    isAllComplete,
    hideCancelButton,
    maxNumberOfFiles,
    toggleAddFilesPanel,
    uppy: uppy2
  } = props;
  let {
    allowNewUpload
  } = props;
  if (allowNewUpload && maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }
  return createElement("div", {
    className: "uppy-DashboardContent-bar"
  }, !isAllComplete && !hideCancelButton ? createElement("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => uppy2.cancelAll()
  }, i18n("cancel")) : createElement("div", null), createElement("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, createElement(UploadStatus, props)), allowNewUpload ? createElement("button", {
    className: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": i18n("addMoreFiles"),
    title: i18n("addMoreFiles"),
    onClick: () => toggleAddFilesPanel(true)
  }, createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, createElement("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), createElement("span", {
    className: "uppy-DashboardContent-addMoreCaption"
  }, i18n("addMore"))) : createElement("div", null));
}
var PickerPanelTopBar_default = PanelTopBar;

// node_modules/@uppy/dashboard/lib/components/FileCard/index.js
var import_classnames12 = __toESM(require_classnames(), 1);

// node_modules/@uppy/dashboard/lib/components/FileCard/RenderMetaFields.js
function RenderMetaFields(props) {
  const {
    computedMetaFields,
    requiredMetaFields,
    updateMeta,
    form,
    formState
  } = props;
  const fieldCSSClasses = {
    text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
  };
  return computedMetaFields.map((field) => {
    const id12 = `uppy-Dashboard-FileCard-input-${field.id}`;
    const required = requiredMetaFields.includes(field.id);
    return createElement("fieldset", {
      key: field.id,
      className: "uppy-Dashboard-FileCard-fieldset"
    }, createElement("label", {
      className: "uppy-Dashboard-FileCard-label",
      htmlFor: id12
    }, field.name), field.render !== void 0 ? field.render({
      value: formState[field.id],
      onChange: (newVal) => updateMeta(newVal, field.id),
      fieldCSSClasses,
      required,
      form: form.id
    }, createElement) : createElement("input", {
      className: fieldCSSClasses.text,
      id: id12,
      form: form.id,
      type: field.type || "text",
      required,
      value: formState[field.id],
      placeholder: field.placeholder,
      onInput: (ev) => updateMeta(ev.target.value, field.id),
      "data-uppy-super-focusable": true
    }));
  });
}

// node_modules/@uppy/dashboard/lib/components/FileCard/index.js
function FileCard(props) {
  var _getMetaFields;
  const {
    files,
    fileCardFor,
    toggleFileCard,
    saveFileCard,
    metaFields,
    requiredMetaFields,
    openFileEditor,
    i18n,
    i18nArray,
    className,
    canEditFile
  } = props;
  const getMetaFields = () => {
    return typeof metaFields === "function" ? metaFields(files[fileCardFor]) : metaFields;
  };
  const file = files[fileCardFor];
  const computedMetaFields = (_getMetaFields = getMetaFields()) != null ? _getMetaFields : [];
  const showEditButton = canEditFile(file);
  const storedMetaData = {};
  computedMetaFields.forEach((field) => {
    var _file$meta$field$id;
    storedMetaData[field.id] = (_file$meta$field$id = file.meta[field.id]) != null ? _file$meta$field$id : "";
  });
  const [formState, setFormState] = useState(storedMetaData);
  const handleSave = useCallback((ev) => {
    ev.preventDefault();
    saveFileCard(formState, fileCardFor);
  }, [saveFileCard, formState, fileCardFor]);
  const updateMeta = (newVal, name) => {
    setFormState({
      ...formState,
      [name]: newVal
    });
  };
  const handleCancel = () => {
    toggleFileCard(false);
  };
  const [form] = useState(() => {
    const formEl = document.createElement("form");
    formEl.setAttribute("tabindex", "-1");
    formEl.id = nanoid();
    return formEl;
  });
  useEffect(() => {
    document.body.appendChild(form);
    form.addEventListener("submit", handleSave);
    return () => {
      form.removeEventListener("submit", handleSave);
      document.body.removeChild(form);
    };
  }, [form, handleSave]);
  return createElement("div", {
    className: (0, import_classnames12.default)("uppy-Dashboard-FileCard", className),
    "data-uppy-panelType": "FileCard",
    onDragOver: ignoreEvent_default,
    onDragLeave: ignoreEvent_default,
    onDrop: ignoreEvent_default,
    onPaste: ignoreEvent_default
  }, createElement("div", {
    className: "uppy-DashboardContent-bar"
  }, createElement("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18nArray("editing", {
    file: createElement("span", {
      className: "uppy-DashboardContent-titleFile"
    }, file.meta ? file.meta.name : file.name)
  })), createElement("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    form: form.id,
    title: i18n("finishEditingFile"),
    onClick: handleCancel
  }, i18n("cancel"))), createElement("div", {
    className: "uppy-Dashboard-FileCard-inner"
  }, createElement("div", {
    className: "uppy-Dashboard-FileCard-preview",
    style: {
      backgroundColor: getIconByMime(file.type).color
    }
  }, createElement(FilePreview, {
    file
  }), showEditButton && createElement("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
    onClick: (event2) => {
      handleSave(event2);
      openFileEditor(file);
    }
  }, i18n("editImage"))), createElement("div", {
    className: "uppy-Dashboard-FileCard-info"
  }, createElement(RenderMetaFields, {
    computedMetaFields,
    requiredMetaFields,
    updateMeta,
    form,
    formState
  })), createElement("div", {
    className: "uppy-Dashboard-FileCard-actions"
  }, createElement("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
    type: "submit",
    form: form.id
  }, i18n("saveChanges")), createElement("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
    type: "button",
    onClick: handleCancel,
    form: form.id
  }, i18n("cancel")))));
}

// node_modules/@uppy/dashboard/lib/components/Slide.js
var import_classnames13 = __toESM(require_classnames(), 1);
var transitionName = "uppy-transition-slideDownUp";
var duration = 250;
function Slide(_ref) {
  let {
    children
  } = _ref;
  const [cachedChildren, setCachedChildren] = useState(null);
  const [className, setClassName] = useState("");
  const enterTimeoutRef = useRef();
  const leaveTimeoutRef = useRef();
  const animationFrameRef = useRef();
  const handleEnterTransition = () => {
    setClassName(`${transitionName}-enter`);
    cancelAnimationFrame(animationFrameRef.current);
    clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = void 0;
    animationFrameRef.current = requestAnimationFrame(() => {
      setClassName(`${transitionName}-enter ${transitionName}-enter-active`);
      enterTimeoutRef.current = setTimeout(() => {
        setClassName("");
      }, duration);
    });
  };
  const handleLeaveTransition = () => {
    setClassName(`${transitionName}-leave`);
    cancelAnimationFrame(animationFrameRef.current);
    clearTimeout(enterTimeoutRef.current);
    enterTimeoutRef.current = void 0;
    animationFrameRef.current = requestAnimationFrame(() => {
      setClassName(`${transitionName}-leave ${transitionName}-leave-active`);
      leaveTimeoutRef.current = setTimeout(() => {
        setCachedChildren(null);
        setClassName("");
      }, duration);
    });
  };
  useEffect(() => {
    const child = toChildArray(children)[0];
    if (cachedChildren === child) return;
    if (child && !cachedChildren) {
      handleEnterTransition();
    } else if (cachedChildren && !child && !leaveTimeoutRef.current) {
      handleLeaveTransition();
    }
    setCachedChildren(child);
  }, [children, cachedChildren]);
  useEffect(() => {
    return () => {
      clearTimeout(enterTimeoutRef.current);
      clearTimeout(leaveTimeoutRef.current);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  if (!cachedChildren) return null;
  return cloneElement(cachedChildren, {
    className: (0, import_classnames13.default)(className, cachedChildren.props.className)
  });
}
var Slide_default = Slide;

// node_modules/@uppy/dashboard/lib/components/Dashboard.js
function _extends2() {
  return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends2.apply(null, arguments);
}
var WIDTH_XL = 900;
var WIDTH_LG = 700;
var WIDTH_MD = 576;
var HEIGHT_MD = 330;
function Dashboard(props) {
  const isNoFiles = props.totalFileCount === 0;
  const isSingleFile = props.totalFileCount === 1;
  const isSizeMD = props.containerWidth > WIDTH_MD;
  const isSizeHeightMD = props.containerHeight > HEIGHT_MD;
  const dashboardClassName = (0, import_classnames14.default)({
    "uppy-Dashboard": true,
    "uppy-Dashboard--isDisabled": props.disabled,
    "uppy-Dashboard--animateOpenClose": props.animateOpenClose,
    "uppy-Dashboard--isClosing": props.isClosing,
    "uppy-Dashboard--isDraggingOver": props.isDraggingOver,
    "uppy-Dashboard--modal": !props.inline,
    "uppy-size--md": props.containerWidth > WIDTH_MD,
    "uppy-size--lg": props.containerWidth > WIDTH_LG,
    "uppy-size--xl": props.containerWidth > WIDTH_XL,
    "uppy-size--height-md": props.containerHeight > HEIGHT_MD,
    // We might want to enable this in the future
    // 'uppy-size--height-lg': props.containerHeight > HEIGHT_LG,
    // 'uppy-size--height-xl': props.containerHeight > HEIGHT_XL,
    "uppy-Dashboard--isAddFilesPanelVisible": props.showAddFilesPanel,
    "uppy-Dashboard--isInnerWrapVisible": props.areInsidesReadyToBeVisible,
    // Only enable “centered single file” mode when Dashboard is tall enough
    "uppy-Dashboard--singleFile": props.singleFileFullScreen && isSingleFile && isSizeHeightMD
  });
  let itemsPerRow = 1;
  if (props.containerWidth > WIDTH_XL) {
    itemsPerRow = 5;
  } else if (props.containerWidth > WIDTH_LG) {
    itemsPerRow = 4;
  } else if (props.containerWidth > WIDTH_MD) {
    itemsPerRow = 3;
  }
  const showFileList = props.showSelectedFiles && !isNoFiles;
  const numberOfFilesForRecovery = props.recoveredState ? Object.keys(props.recoveredState.files).length : null;
  const numberOfGhosts = props.files ? Object.keys(props.files).filter((fileID) => props.files[fileID].isGhost).length : 0;
  const renderRestoredText = () => {
    if (numberOfGhosts > 0) {
      return props.i18n("recoveredXFiles", {
        smart_count: numberOfGhosts
      });
    }
    return props.i18n("recoveredAllFiles");
  };
  const dashboard = createElement("div", {
    className: dashboardClassName,
    "data-uppy-theme": props.theme,
    "data-uppy-num-acquirers": props.acquirers.length,
    "data-uppy-drag-drop-supported": !props.disableLocalFiles && isDragDropSupported(),
    "aria-hidden": props.inline ? "false" : props.isHidden,
    "aria-disabled": props.disabled,
    "aria-label": !props.inline ? props.i18n("dashboardWindowTitle") : props.i18n("dashboardTitle"),
    onPaste: props.handlePaste,
    onDragOver: props.handleDragOver,
    onDragLeave: props.handleDragLeave,
    onDrop: props.handleDrop
  }, createElement("div", {
    "aria-hidden": "true",
    className: "uppy-Dashboard-overlay",
    tabIndex: -1,
    onClick: props.handleClickOutside
  }), createElement("div", {
    className: "uppy-Dashboard-inner",
    "aria-modal": !props.inline && "true",
    role: props.inline ? void 0 : "dialog",
    style: {
      width: props.inline && props.width ? props.width : "",
      height: props.inline && props.height ? props.height : ""
    }
  }, !props.inline ? createElement("button", {
    className: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": props.i18n("closeModal"),
    title: props.i18n("closeModal"),
    onClick: props.closeModal
  }, createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, createElement("div", {
    className: "uppy-Dashboard-innerWrap"
  }, createElement("div", {
    className: "uppy-Dashboard-dropFilesHereHint"
  }, props.i18n("dropHint")), showFileList && createElement(PickerPanelTopBar_default, props), numberOfFilesForRecovery && createElement("div", {
    className: "uppy-Dashboard-serviceMsg"
  }, createElement("svg", {
    className: "uppy-Dashboard-serviceMsg-icon",
    "aria-hidden": "true",
    focusable: "false",
    width: "21",
    height: "16",
    viewBox: "0 0 24 19"
  }, createElement("g", {
    transform: "translate(0 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, createElement("path", {
    d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
    fill: "#FFD300"
  }), createElement("path", {
    fill: "#000",
    d: "M11 6h2l-.3 8h-1.4z"
  }), createElement("circle", {
    fill: "#000",
    cx: "12",
    cy: "17",
    r: "1"
  }))), createElement("strong", {
    className: "uppy-Dashboard-serviceMsg-title"
  }, props.i18n("sessionRestored")), createElement("div", {
    className: "uppy-Dashboard-serviceMsg-text"
  }, renderRestoredText())), showFileList ? createElement(FileList, {
    id: props.id,
    i18n: props.i18n,
    uppy: props.uppy,
    files: props.files,
    resumableUploads: props.resumableUploads,
    hideRetryButton: props.hideRetryButton,
    hidePauseResumeButton: props.hidePauseResumeButton,
    hideCancelButton: props.hideCancelButton,
    showLinkToFileUploadResult: props.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: props.showRemoveButtonAfterComplete,
    metaFields: props.metaFields,
    toggleFileCard: props.toggleFileCard,
    handleRequestThumbnail: props.handleRequestThumbnail,
    handleCancelThumbnail: props.handleCancelThumbnail,
    recoveredState: props.recoveredState,
    individualCancellation: props.individualCancellation,
    openFileEditor: props.openFileEditor,
    canEditFile: props.canEditFile,
    toggleAddFilesPanel: props.toggleAddFilesPanel,
    isSingleFile,
    itemsPerRow,
    containerWidth: props.containerWidth,
    containerHeight: props.containerHeight
  }) : createElement(AddFiles_default, {
    i18n: props.i18n,
    i18nArray: props.i18nArray,
    acquirers: props.acquirers,
    handleInputChange: props.handleInputChange,
    maxNumberOfFiles: props.maxNumberOfFiles,
    allowedFileTypes: props.allowedFileTypes,
    showNativePhotoCameraButton: props.showNativePhotoCameraButton,
    showNativeVideoCameraButton: props.showNativeVideoCameraButton,
    nativeCameraFacingMode: props.nativeCameraFacingMode,
    showPanel: props.showPanel,
    activePickerPanel: props.activePickerPanel,
    disableLocalFiles: props.disableLocalFiles,
    fileManagerSelectionType: props.fileManagerSelectionType,
    note: props.note,
    proudlyDisplayPoweredByUppy: props.proudlyDisplayPoweredByUppy
  }), createElement(Slide_default, null, props.showAddFilesPanel ? createElement(AddFilesPanel_default, _extends2({
    key: "AddFiles"
  }, props, {
    isSizeMD
  })) : null), createElement(Slide_default, null, props.fileCardFor ? createElement(FileCard, _extends2({
    key: "FileCard"
  }, props)) : null), createElement(Slide_default, null, props.activePickerPanel ? createElement(PickerPanelContent_default, _extends2({
    key: "Picker"
  }, props)) : null), createElement(Slide_default, null, props.showFileEditor ? createElement(EditorPanel_default, _extends2({
    key: "Editor"
  }, props)) : null), createElement("div", {
    className: "uppy-Dashboard-progressindicators"
  }, props.progressindicators.map((target) => {
    return props.uppy.getPlugin(target.id).render(props.state);
  })))));
  return dashboard;
}

// node_modules/@uppy/dashboard/lib/locale.js
var locale_default4 = {
  strings: {
    // When `inline: false`, used as the screen reader label for the button that closes the modal.
    closeModal: "Close Modal",
    // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
    addMoreFiles: "Add more files",
    addingMoreFiles: "Adding more files",
    // Used as the header for import panels, e.g., “Import from Google Drive”.
    importFrom: "Import from %{name}",
    // When `inline: false`, used as the screen reader label for the dashboard modal.
    dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
    // When `inline: true`, used as the screen reader label for the dashboard area.
    dashboardTitle: "Uppy Dashboard",
    // Shown in the Informer when a link to a file was copied to the clipboard.
    copyLinkToClipboardSuccess: "Link copied to clipboard.",
    // Used when a link cannot be copied automatically — the user has to select the text from the
    // input element below this string.
    copyLinkToClipboardFallback: "Copy the URL below",
    // Used as the hover title and screen reader label for buttons that copy a file link.
    copyLink: "Copy link",
    back: "Back",
    // Used as the screen reader label for buttons that remove a file.
    removeFile: "Remove file",
    // Used as the screen reader label for buttons that open the metadata editor panel for a file.
    editFile: "Edit file",
    editImage: "Edit image",
    // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
    editing: "Editing %{file}",
    // Shown on the main upload screen when an upload error occurs
    error: "Error",
    // Used as the screen reader label for the button that saves metadata edits and returns to the
    // file list view.
    finishEditingFile: "Finish editing file",
    saveChanges: "Save changes",
    // Used as the label for the tab button that opens the system file selection dialog.
    myDevice: "My Device",
    dropHint: "Drop your files here",
    // Used as the hover text and screen reader label for file progress indicators when
    // they have been fully uploaded.
    uploadComplete: "Upload complete",
    uploadPaused: "Upload paused",
    // Used as the hover text and screen reader label for the buttons to resume paused uploads.
    resumeUpload: "Resume upload",
    // Used as the hover text and screen reader label for the buttons to pause uploads.
    pauseUpload: "Pause upload",
    // Used as the hover text and screen reader label for the buttons to retry failed uploads.
    retryUpload: "Retry upload",
    // Used as the hover text and screen reader label for the buttons to cancel uploads.
    cancelUpload: "Cancel upload",
    // Used in a title, how many files are currently selected
    xFilesSelected: {
      0: "%{smart_count} file selected",
      1: "%{smart_count} files selected"
    },
    uploadingXFiles: {
      0: "Uploading %{smart_count} file",
      1: "Uploading %{smart_count} files"
    },
    processingXFiles: {
      0: "Processing %{smart_count} file",
      1: "Processing %{smart_count} files"
    },
    // The "powered by Uppy" link at the bottom of the Dashboard.
    poweredBy: "Powered by %{uppy}",
    addMore: "Add more",
    editFileWithFilename: "Edit file %{file}",
    save: "Save",
    cancel: "Cancel",
    dropPasteFiles: "Drop files here or %{browseFiles}",
    dropPasteFolders: "Drop files here or %{browseFolders}",
    dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
    dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
    dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
    dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
    importFiles: "Import files from:",
    browseFiles: "browse files",
    browseFolders: "browse folders",
    recoveredXFiles: {
      0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
      1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
    },
    recoveredAllFiles: "We restored all files. You can now resume the upload.",
    sessionRestored: "Session restored",
    reSelect: "Re-select",
    missingRequiredMetaFields: {
      0: "Missing required meta field: %{fields}.",
      1: "Missing required meta fields: %{fields}."
    },
    // Used for native device camera buttons on mobile
    takePictureBtn: "Take Picture",
    recordVideoBtn: "Record Video"
  }
};

// node_modules/@uppy/dashboard/lib/Dashboard.js
function _classPrivateFieldLooseBase7(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id7 = 0;
function _classPrivateFieldLooseKey7(e) {
  return "__private_" + id7++ + "_" + e;
}
var packageJson8 = {
  "version": "4.3.4"
};
var memoize = memoizeOne.default || memoizeOne;
var TAB_KEY = 9;
var ESC_KEY = 27;
function createPromise() {
  const o = {};
  o.promise = new Promise((resolve, reject) => {
    o.resolve = resolve;
    o.reject = reject;
  });
  return o;
}
var defaultOptions5 = {
  target: "body",
  metaFields: [],
  thumbnailWidth: 280,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: false,
  defaultPickerIcon,
  showLinkToFileUploadResult: false,
  showProgressDetails: false,
  hideUploadButton: false,
  hideCancelButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideProgressAfterFinish: false,
  note: null,
  singleFileFullScreen: true,
  disableStatusBar: false,
  disableInformer: false,
  disableThumbnailGenerator: false,
  fileManagerSelectionType: "files",
  proudlyDisplayPoweredByUppy: true,
  showSelectedFiles: true,
  showRemoveButtonAfterComplete: false,
  showNativePhotoCameraButton: false,
  showNativeVideoCameraButton: false,
  theme: "light",
  autoOpen: null,
  disabled: false,
  disableLocalFiles: false,
  nativeCameraFacingMode: "",
  onDragLeave: () => {
  },
  onDragOver: () => {
  },
  onDrop: () => {
  },
  plugins: [],
  // Dynamic default options, they have to be defined in the constructor (because
  // they require access to the `this` keyword), but we still want them to
  // appear in the default options so TS knows they'll be defined.
  doneButtonHandler: void 0,
  onRequestCloseModal: null,
  // defaultModalOptions
  inline: false,
  animateOpenClose: true,
  browserBackButtonClose: false,
  closeAfterFinish: false,
  closeModalOnClickOutside: false,
  disablePageScrollWhenModalOpen: true,
  trigger: null,
  // defaultInlineOptions
  width: 750,
  height: 550
};
var _disabledNodes = /* @__PURE__ */ _classPrivateFieldLooseKey7("disabledNodes");
var _generateLargeThumbnailIfSingleFile = /* @__PURE__ */ _classPrivateFieldLooseKey7("generateLargeThumbnailIfSingleFile");
var _openFileEditorWhenFilesAdded = /* @__PURE__ */ _classPrivateFieldLooseKey7("openFileEditorWhenFilesAdded");
var _attachRenderFunctionToTarget = /* @__PURE__ */ _classPrivateFieldLooseKey7("attachRenderFunctionToTarget");
var _isTargetSupported = /* @__PURE__ */ _classPrivateFieldLooseKey7("isTargetSupported");
var _getAcquirers = /* @__PURE__ */ _classPrivateFieldLooseKey7("getAcquirers");
var _getProgressIndicators = /* @__PURE__ */ _classPrivateFieldLooseKey7("getProgressIndicators");
var _getEditors = /* @__PURE__ */ _classPrivateFieldLooseKey7("getEditors");
var _addSpecifiedPluginsFromOptions = /* @__PURE__ */ _classPrivateFieldLooseKey7("addSpecifiedPluginsFromOptions");
var _autoDiscoverPlugins = /* @__PURE__ */ _classPrivateFieldLooseKey7("autoDiscoverPlugins");
var _addSupportedPluginIfNoTarget = /* @__PURE__ */ _classPrivateFieldLooseKey7("addSupportedPluginIfNoTarget");
var _getStatusBarOpts = /* @__PURE__ */ _classPrivateFieldLooseKey7("getStatusBarOpts");
var _getThumbnailGeneratorOpts = /* @__PURE__ */ _classPrivateFieldLooseKey7("getThumbnailGeneratorOpts");
var _getInformerOpts = /* @__PURE__ */ _classPrivateFieldLooseKey7("getInformerOpts");
var _getStatusBarId = /* @__PURE__ */ _classPrivateFieldLooseKey7("getStatusBarId");
var _getThumbnailGeneratorId = /* @__PURE__ */ _classPrivateFieldLooseKey7("getThumbnailGeneratorId");
var _getInformerId = /* @__PURE__ */ _classPrivateFieldLooseKey7("getInformerId");
var Dashboard2 = class extends UIPlugin_default {
  // Timeouts
  constructor(uppy2, _opts) {
    var _opts$autoOpen, _this$opts, _this$opts$onRequestC;
    const autoOpen = (_opts$autoOpen = _opts == null ? void 0 : _opts.autoOpen) != null ? _opts$autoOpen : null;
    super(uppy2, {
      ...defaultOptions5,
      ..._opts,
      autoOpen
    });
    Object.defineProperty(this, _getInformerId, {
      value: _getInformerId2
    });
    Object.defineProperty(this, _getThumbnailGeneratorId, {
      value: _getThumbnailGeneratorId2
    });
    Object.defineProperty(this, _getStatusBarId, {
      value: _getStatusBarId2
    });
    Object.defineProperty(this, _getInformerOpts, {
      value: _getInformerOpts2
    });
    Object.defineProperty(this, _getThumbnailGeneratorOpts, {
      value: _getThumbnailGeneratorOpts2
    });
    Object.defineProperty(this, _getStatusBarOpts, {
      value: _getStatusBarOpts2
    });
    Object.defineProperty(this, _disabledNodes, {
      writable: true,
      value: void 0
    });
    this.modalName = `uppy-Dashboard-${nanoid()}`;
    this.superFocus = createSuperFocus();
    this.ifFocusedOnUppyRecently = false;
    this.removeTarget = (plugin) => {
      const pluginState = this.getPluginState();
      const newTargets = pluginState.targets.filter((target) => target.id !== plugin.id);
      this.setPluginState({
        targets: newTargets
      });
    };
    this.addTarget = (plugin) => {
      const callerPluginId = plugin.id || plugin.constructor.name;
      const callerPluginName = plugin.title || callerPluginId;
      const callerPluginType = plugin.type;
      if (callerPluginType !== "acquirer" && callerPluginType !== "progressindicator" && callerPluginType !== "editor") {
        const msg = "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor";
        this.uppy.log(msg, "error");
        return null;
      }
      const target = {
        id: callerPluginId,
        name: callerPluginName,
        type: callerPluginType
      };
      const state = this.getPluginState();
      const newTargets = state.targets.slice();
      newTargets.push(target);
      this.setPluginState({
        targets: newTargets
      });
      return this.el;
    };
    this.hideAllPanels = () => {
      var _state$activePickerPa;
      const state = this.getPluginState();
      const update = {
        activePickerPanel: void 0,
        showAddFilesPanel: false,
        activeOverlayType: null,
        fileCardFor: null,
        showFileEditor: false
      };
      if (state.activePickerPanel === update.activePickerPanel && state.showAddFilesPanel === update.showAddFilesPanel && state.showFileEditor === update.showFileEditor && state.activeOverlayType === update.activeOverlayType) {
        return;
      }
      this.setPluginState(update);
      this.uppy.emit("dashboard:close-panel", (_state$activePickerPa = state.activePickerPanel) == null ? void 0 : _state$activePickerPa.id);
    };
    this.showPanel = (id12) => {
      const {
        targets
      } = this.getPluginState();
      const activePickerPanel = targets.find((target) => {
        return target.type === "acquirer" && target.id === id12;
      });
      this.setPluginState({
        activePickerPanel,
        activeOverlayType: "PickerPanel"
      });
      this.uppy.emit("dashboard:show-panel", id12);
    };
    this.canEditFile = (file) => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase7(this, _getEditors)[_getEditors](targets);
      return editors.some((target) => this.uppy.getPlugin(target.id).canEditFile(file));
    };
    this.openFileEditor = (file) => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase7(this, _getEditors)[_getEditors](targets);
      this.setPluginState({
        showFileEditor: true,
        fileCardFor: file.id || null,
        activeOverlayType: "FileEditor"
      });
      editors.forEach((editor) => {
        ;
        this.uppy.getPlugin(editor.id).selectFile(file);
      });
    };
    this.closeFileEditor = () => {
      const {
        metaFields
      } = this.getPluginState();
      const isMetaEditorEnabled = metaFields && metaFields.length > 0;
      if (isMetaEditorEnabled) {
        this.setPluginState({
          showFileEditor: false,
          activeOverlayType: "FileCard"
        });
      } else {
        this.setPluginState({
          showFileEditor: false,
          fileCardFor: null,
          activeOverlayType: "AddFiles"
        });
      }
    };
    this.saveFileEditor = () => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase7(this, _getEditors)[_getEditors](targets);
      editors.forEach((editor) => {
        ;
        this.uppy.getPlugin(editor.id).save();
      });
      this.closeFileEditor();
    };
    this.openModal = () => {
      const {
        promise,
        resolve
      } = createPromise();
      this.savedScrollPosition = window.pageYOffset;
      this.savedActiveElement = document.activeElement;
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.add("uppy-Dashboard-isFixed");
      }
      if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
        const handler = () => {
          this.setPluginState({
            isHidden: false
          });
          this.el.removeEventListener("animationend", handler, false);
          resolve();
        };
        this.el.addEventListener("animationend", handler, false);
      } else {
        this.setPluginState({
          isHidden: false
        });
        resolve();
      }
      if (this.opts.browserBackButtonClose) {
        this.updateBrowserHistory();
      }
      document.addEventListener("keydown", this.handleKeyDownInModal);
      this.uppy.emit("dashboard:modal-open");
      return promise;
    };
    this.closeModal = (opts) => {
      var _opts$manualClose;
      const manualClose = (_opts$manualClose = opts == null ? void 0 : opts.manualClose) != null ? _opts$manualClose : true;
      const {
        isHidden,
        isClosing
      } = this.getPluginState();
      if (isHidden || isClosing) {
        return void 0;
      }
      const {
        promise,
        resolve
      } = createPromise();
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove("uppy-Dashboard-isFixed");
      }
      if (this.opts.animateOpenClose) {
        this.setPluginState({
          isClosing: true
        });
        const handler = () => {
          this.setPluginState({
            isHidden: true,
            isClosing: false
          });
          this.superFocus.cancel();
          this.savedActiveElement.focus();
          this.el.removeEventListener("animationend", handler, false);
          resolve();
        };
        this.el.addEventListener("animationend", handler, false);
      } else {
        this.setPluginState({
          isHidden: true
        });
        this.superFocus.cancel();
        this.savedActiveElement.focus();
        resolve();
      }
      document.removeEventListener("keydown", this.handleKeyDownInModal);
      if (manualClose) {
        if (this.opts.browserBackButtonClose) {
          var _history$state;
          if ((_history$state = history.state) != null && _history$state[this.modalName]) {
            history.back();
          }
        }
      }
      this.uppy.emit("dashboard:modal-closed");
      return promise;
    };
    this.isModalOpen = () => {
      return !this.getPluginState().isHidden || false;
    };
    this.requestCloseModal = () => {
      if (this.opts.onRequestCloseModal) {
        return this.opts.onRequestCloseModal();
      }
      return this.closeModal();
    };
    this.setDarkModeCapability = (isDarkModeOn) => {
      const {
        capabilities
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          darkMode: isDarkModeOn
        }
      });
    };
    this.handleSystemDarkModeChange = (event2) => {
      const isDarkModeOnNow = event2.matches;
      this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnNow ? "on" : "off"}`);
      this.setDarkModeCapability(isDarkModeOnNow);
    };
    this.toggleFileCard = (show, fileID) => {
      const file = this.uppy.getFile(fileID);
      if (show) {
        this.uppy.emit("dashboard:file-edit-start", file);
      } else {
        this.uppy.emit("dashboard:file-edit-complete", file);
      }
      this.setPluginState({
        fileCardFor: show ? fileID : null,
        activeOverlayType: show ? "FileCard" : null
      });
    };
    this.toggleAddFilesPanel = (show) => {
      this.setPluginState({
        showAddFilesPanel: show,
        activeOverlayType: show ? "AddFiles" : null
      });
    };
    this.addFiles = (files) => {
      const descriptors = files.map((file) => ({
        source: this.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: file.relativePath || file.webkitRelativePath || null
        }
      }));
      try {
        this.uppy.addFiles(descriptors);
      } catch (err) {
        this.uppy.log(err);
      }
    };
    this.startListeningToResize = () => {
      this.resizeObserver = new ResizeObserver((entries) => {
        const uppyDashboardInnerEl = entries[0];
        const {
          width,
          height
        } = uppyDashboardInnerEl.contentRect;
        this.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });
      });
      this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner"));
      this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
        const pluginState = this.getPluginState();
        const isModalAndClosed = !this.opts.inline && pluginState.isHidden;
        if (
          // We might want to enable this in the future
          // if ResizeObserver hasn't yet fired,
          !pluginState.areInsidesReadyToBeVisible && // and it's not due to the modal being closed
          !isModalAndClosed
        ) {
          this.uppy.log("[Dashboard] resize event didn\u2019t fire on time: defaulted to mobile layout", "warning");
          this.setPluginState({
            areInsidesReadyToBeVisible: true
          });
        }
      }, 1e3);
    };
    this.stopListeningToResize = () => {
      this.resizeObserver.disconnect();
      clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
    };
    this.recordIfFocusedOnUppyRecently = (event2) => {
      if (this.el.contains(event2.target)) {
        this.ifFocusedOnUppyRecently = true;
      } else {
        this.ifFocusedOnUppyRecently = false;
        this.superFocus.cancel();
      }
    };
    this.disableInteractiveElements = (disable) => {
      var _classPrivateFieldLoo;
      const NODES_TO_DISABLE = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'];
      const nodesToDisable = (_classPrivateFieldLoo = _classPrivateFieldLooseBase7(this, _disabledNodes)[_disabledNodes]) != null ? _classPrivateFieldLoo : toArray_default(this.el.querySelectorAll(NODES_TO_DISABLE)).filter((node2) => !node2.classList.contains("uppy-Dashboard-close"));
      for (const node2 of nodesToDisable) {
        if (node2.tagName === "A") {
          node2.setAttribute("aria-disabled", disable);
        } else {
          node2.disabled = disable;
        }
      }
      if (disable) {
        _classPrivateFieldLooseBase7(this, _disabledNodes)[_disabledNodes] = nodesToDisable;
      } else {
        _classPrivateFieldLooseBase7(this, _disabledNodes)[_disabledNodes] = null;
      }
      this.dashboardIsDisabled = disable;
    };
    this.updateBrowserHistory = () => {
      var _history$state2;
      if (!((_history$state2 = history.state) != null && _history$state2[this.modalName])) {
        history.pushState({
          // eslint-disable-next-line no-restricted-globals
          ...history.state,
          [this.modalName]: true
        }, "");
      }
      window.addEventListener("popstate", this.handlePopState, false);
    };
    this.handlePopState = (event2) => {
      var _event$state;
      if (this.isModalOpen() && (!event2.state || !event2.state[this.modalName])) {
        this.closeModal({
          manualClose: false
        });
      }
      if (!this.isModalOpen() && (_event$state = event2.state) != null && _event$state[this.modalName]) {
        history.back();
      }
    };
    this.handleKeyDownInModal = (event2) => {
      if (event2.keyCode === ESC_KEY) this.requestCloseModal();
      if (event2.keyCode === TAB_KEY) trapFocus(event2, this.getPluginState().activeOverlayType, this.el);
    };
    this.handleClickOutside = () => {
      if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
    };
    this.handlePaste = (event2) => {
      this.uppy.iteratePlugins((plugin) => {
        if (plugin.type === "acquirer") {
          ;
          plugin.handleRootPaste == null || plugin.handleRootPaste(event2);
        }
      });
      const files = toArray_default(event2.clipboardData.files);
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files pasted");
        this.addFiles(files);
      }
    };
    this.handleInputChange = (event2) => {
      event2.preventDefault();
      const files = toArray_default(event2.currentTarget.files || []);
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files selected through input");
        this.addFiles(files);
      }
    };
    this.handleDragOver = (event2) => {
      event2.preventDefault();
      event2.stopPropagation();
      const canSomePluginHandleRootDrop = () => {
        let somePluginCanHandleRootDrop2 = true;
        this.uppy.iteratePlugins((plugin) => {
          if (plugin.canHandleRootDrop != null && plugin.canHandleRootDrop(event2)) {
            somePluginCanHandleRootDrop2 = true;
          }
        });
        return somePluginCanHandleRootDrop2;
      };
      const doesEventHaveFiles = () => {
        const {
          types
        } = event2.dataTransfer;
        return types.some((type) => type === "Files");
      };
      const somePluginCanHandleRootDrop = canSomePluginHandleRootDrop();
      const hasFiles = doesEventHaveFiles();
      if (!somePluginCanHandleRootDrop && !hasFiles || this.opts.disabled || // opts.disableLocalFiles should only be taken into account if no plugins
      // can handle the datatransfer
      this.opts.disableLocalFiles && (hasFiles || !somePluginCanHandleRootDrop) || !this.uppy.getState().allowNewUpload) {
        event2.dataTransfer.dropEffect = "none";
        return;
      }
      event2.dataTransfer.dropEffect = "copy";
      this.setPluginState({
        isDraggingOver: true
      });
      this.opts.onDragOver(event2);
    };
    this.handleDragLeave = (event2) => {
      event2.preventDefault();
      event2.stopPropagation();
      this.setPluginState({
        isDraggingOver: false
      });
      this.opts.onDragLeave(event2);
    };
    this.handleDrop = async (event2) => {
      event2.preventDefault();
      event2.stopPropagation();
      this.setPluginState({
        isDraggingOver: false
      });
      this.uppy.iteratePlugins((plugin) => {
        if (plugin.type === "acquirer") {
          ;
          plugin.handleRootDrop == null || plugin.handleRootDrop(event2);
        }
      });
      let executedDropErrorOnce = false;
      const logDropError = (error) => {
        this.uppy.log(error, "error");
        if (!executedDropErrorOnce) {
          this.uppy.info(error.message, "error");
          executedDropErrorOnce = true;
        }
      };
      this.uppy.log("[Dashboard] Processing dropped files");
      const files = await getDroppedFiles(event2.dataTransfer, {
        logDropError
      });
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files dropped");
        this.addFiles(files);
      }
      this.opts.onDrop(event2);
    };
    this.handleRequestThumbnail = (file) => {
      if (!this.opts.waitForThumbnailsBeforeUpload) {
        this.uppy.emit("thumbnail:request", file);
      }
    };
    this.handleCancelThumbnail = (file) => {
      if (!this.opts.waitForThumbnailsBeforeUpload) {
        this.uppy.emit("thumbnail:cancel", file);
      }
    };
    this.handleKeyDownInInline = (event2) => {
      if (event2.keyCode === TAB_KEY) forInline(event2, this.getPluginState().activeOverlayType, this.el);
    };
    this.handlePasteOnBody = (event2) => {
      const isFocusInOverlay2 = this.el.contains(document.activeElement);
      if (isFocusInOverlay2) {
        this.handlePaste(event2);
      }
    };
    this.handleComplete = (_ref) => {
      let {
        failed
      } = _ref;
      if (this.opts.closeAfterFinish && !(failed != null && failed.length)) {
        this.requestCloseModal();
      }
    };
    this.handleCancelRestore = () => {
      this.uppy.emit("restore-canceled");
    };
    Object.defineProperty(this, _generateLargeThumbnailIfSingleFile, {
      writable: true,
      value: () => {
        if (this.opts.disableThumbnailGenerator) {
          return;
        }
        const LARGE_THUMBNAIL = 600;
        const files = this.uppy.getFiles();
        if (files.length === 1) {
          const thumbnailGenerator = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
          thumbnailGenerator == null || thumbnailGenerator.setOptions({
            thumbnailWidth: LARGE_THUMBNAIL
          });
          const fileForThumbnail = {
            ...files[0],
            preview: void 0
          };
          thumbnailGenerator == null || thumbnailGenerator.requestThumbnail(fileForThumbnail).then(() => {
            thumbnailGenerator == null || thumbnailGenerator.setOptions({
              thumbnailWidth: this.opts.thumbnailWidth
            });
          });
        }
      }
    });
    Object.defineProperty(this, _openFileEditorWhenFilesAdded, {
      writable: true,
      value: (files) => {
        const firstFile = files[0];
        const {
          metaFields
        } = this.getPluginState();
        const isMetaEditorEnabled = metaFields && metaFields.length > 0;
        const isImageEditorEnabled = this.canEditFile(firstFile);
        if (isMetaEditorEnabled && this.opts.autoOpen === "metaEditor") {
          this.toggleFileCard(true, firstFile.id);
        } else if (isImageEditorEnabled && this.opts.autoOpen === "imageEditor") {
          this.openFileEditor(firstFile);
        }
      }
    });
    this.initEvents = () => {
      if (this.opts.trigger && !this.opts.inline) {
        const showModalTrigger = findAllDOMElements_default(this.opts.trigger);
        if (showModalTrigger) {
          showModalTrigger.forEach((trigger) => trigger.addEventListener("click", this.openModal));
        } else {
          this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
        }
      }
      this.startListeningToResize();
      document.addEventListener("paste", this.handlePasteOnBody);
      this.uppy.on("plugin-added", _classPrivateFieldLooseBase7(this, _addSupportedPluginIfNoTarget)[_addSupportedPluginIfNoTarget]);
      this.uppy.on("plugin-remove", this.removeTarget);
      this.uppy.on("file-added", this.hideAllPanels);
      this.uppy.on("dashboard:modal-closed", this.hideAllPanels);
      this.uppy.on("complete", this.handleComplete);
      this.uppy.on("files-added", _classPrivateFieldLooseBase7(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      this.uppy.on("file-removed", _classPrivateFieldLooseBase7(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, true);
      document.addEventListener("click", this.recordIfFocusedOnUppyRecently, true);
      if (this.opts.inline) {
        this.el.addEventListener("keydown", this.handleKeyDownInInline);
      }
      if (this.opts.autoOpen) {
        this.uppy.on("files-added", _classPrivateFieldLooseBase7(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
      }
    };
    this.removeEvents = () => {
      const showModalTrigger = findAllDOMElements_default(this.opts.trigger);
      if (!this.opts.inline && showModalTrigger) {
        showModalTrigger.forEach((trigger) => trigger.removeEventListener("click", this.openModal));
      }
      this.stopListeningToResize();
      document.removeEventListener("paste", this.handlePasteOnBody);
      window.removeEventListener("popstate", this.handlePopState, false);
      this.uppy.off("plugin-added", _classPrivateFieldLooseBase7(this, _addSupportedPluginIfNoTarget)[_addSupportedPluginIfNoTarget]);
      this.uppy.off("plugin-remove", this.removeTarget);
      this.uppy.off("file-added", this.hideAllPanels);
      this.uppy.off("dashboard:modal-closed", this.hideAllPanels);
      this.uppy.off("complete", this.handleComplete);
      this.uppy.off("files-added", _classPrivateFieldLooseBase7(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      this.uppy.off("file-removed", _classPrivateFieldLooseBase7(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently);
      document.removeEventListener("click", this.recordIfFocusedOnUppyRecently);
      if (this.opts.inline) {
        this.el.removeEventListener("keydown", this.handleKeyDownInInline);
      }
      if (this.opts.autoOpen) {
        this.uppy.off("files-added", _classPrivateFieldLooseBase7(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
      }
    };
    this.superFocusOnEachUpdate = () => {
      const isFocusInUppy = this.el.contains(document.activeElement);
      const isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
      const isInformerHidden = this.uppy.getState().info.length === 0;
      const isModal = !this.opts.inline;
      if (
        // If update is connected to showing the Informer - let the screen reader calmly read it.
        isInformerHidden && // If we are in a modal - always superfocus without concern for other elements
        // on the page (user is unlikely to want to interact with the rest of the page)
        (isModal || // If we are already inside of Uppy, or
        isFocusInUppy || // If we are not focused on anything BUT we have already, at least once, focused on uppy
        //   1. We focus when isFocusNowhere, because when the element we were focused
        //      on disappears (e.g. an overlay), - focus gets lost. If user is typing
        //      something somewhere else on the page, - focus won't be 'nowhere'.
        //   2. We only focus when focus is nowhere AND this.ifFocusedOnUppyRecently,
        //      to avoid focus jumps if we do something else on the page.
        //   [Practical check] Without '&& this.ifFocusedOnUppyRecently', in Safari, in inline mode,
        //                     when file is uploading, - navigate via tab to the checkbox,
        //                     try to press space multiple times. Focus will jump to Uppy.
        isFocusNowhere && this.ifFocusedOnUppyRecently)
      ) {
        this.superFocus(this.el, this.getPluginState().activeOverlayType);
      } else {
        this.superFocus.cancel();
      }
    };
    this.afterUpdate = () => {
      if (this.opts.disabled && !this.dashboardIsDisabled) {
        this.disableInteractiveElements(true);
        return;
      }
      if (!this.opts.disabled && this.dashboardIsDisabled) {
        this.disableInteractiveElements(false);
      }
      this.superFocusOnEachUpdate();
    };
    this.saveFileCard = (meta, fileID) => {
      this.uppy.setFileMeta(fileID, meta);
      this.toggleFileCard(false, fileID);
    };
    Object.defineProperty(this, _attachRenderFunctionToTarget, {
      writable: true,
      value: (target) => {
        const plugin = this.uppy.getPlugin(target.id);
        return {
          ...target,
          icon: plugin.icon || this.opts.defaultPickerIcon,
          render: plugin.render
        };
      }
    });
    Object.defineProperty(this, _isTargetSupported, {
      writable: true,
      value: (target) => {
        const plugin = this.uppy.getPlugin(target.id);
        if (typeof plugin.isSupported !== "function") {
          return true;
        }
        return plugin.isSupported();
      }
    });
    Object.defineProperty(this, _getAcquirers, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "acquirer" && _classPrivateFieldLooseBase7(this, _isTargetSupported)[_isTargetSupported](target)).map(_classPrivateFieldLooseBase7(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    Object.defineProperty(this, _getProgressIndicators, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "progressindicator").map(_classPrivateFieldLooseBase7(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    Object.defineProperty(this, _getEditors, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "editor").map(_classPrivateFieldLooseBase7(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    this.render = (state) => {
      const pluginState = this.getPluginState();
      const {
        files,
        capabilities,
        allowNewUpload
      } = state;
      const {
        newFiles,
        uploadStartedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted,
        isAllComplete,
        isAllPaused
      } = this.uppy.getObjectOfFilesPerState();
      const acquirers = _classPrivateFieldLooseBase7(this, _getAcquirers)[_getAcquirers](pluginState.targets);
      const progressindicators = _classPrivateFieldLooseBase7(this, _getProgressIndicators)[_getProgressIndicators](pluginState.targets);
      const editors = _classPrivateFieldLooseBase7(this, _getEditors)[_getEditors](pluginState.targets);
      let theme;
      if (this.opts.theme === "auto") {
        theme = capabilities.darkMode ? "dark" : "light";
      } else {
        theme = this.opts.theme;
      }
      if (["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0) {
        this.opts.fileManagerSelectionType = "files";
        console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`);
      }
      return Dashboard({
        state,
        isHidden: pluginState.isHidden,
        files,
        newFiles,
        uploadStartedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted,
        isAllComplete,
        isAllPaused,
        totalFileCount: Object.keys(files).length,
        totalProgress: state.totalProgress,
        allowNewUpload,
        acquirers,
        theme,
        disabled: this.opts.disabled,
        disableLocalFiles: this.opts.disableLocalFiles,
        direction: this.opts.direction,
        activePickerPanel: pluginState.activePickerPanel,
        showFileEditor: pluginState.showFileEditor,
        saveFileEditor: this.saveFileEditor,
        closeFileEditor: this.closeFileEditor,
        disableInteractiveElements: this.disableInteractiveElements,
        animateOpenClose: this.opts.animateOpenClose,
        isClosing: pluginState.isClosing,
        progressindicators,
        editors,
        autoProceed: this.uppy.opts.autoProceed,
        id: this.id,
        closeModal: this.requestCloseModal,
        handleClickOutside: this.handleClickOutside,
        handleInputChange: this.handleInputChange,
        handlePaste: this.handlePaste,
        inline: this.opts.inline,
        showPanel: this.showPanel,
        hideAllPanels: this.hideAllPanels,
        i18n: this.i18n,
        i18nArray: this.i18nArray,
        uppy: this.uppy,
        note: this.opts.note,
        recoveredState: state.recoveredState,
        metaFields: pluginState.metaFields,
        resumableUploads: capabilities.resumableUploads || false,
        individualCancellation: capabilities.individualCancellation,
        isMobileDevice: capabilities.isMobileDevice,
        fileCardFor: pluginState.fileCardFor,
        toggleFileCard: this.toggleFileCard,
        toggleAddFilesPanel: this.toggleAddFilesPanel,
        showAddFilesPanel: pluginState.showAddFilesPanel,
        saveFileCard: this.saveFileCard,
        openFileEditor: this.openFileEditor,
        canEditFile: this.canEditFile,
        width: this.opts.width,
        height: this.opts.height,
        showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
        fileManagerSelectionType: this.opts.fileManagerSelectionType,
        proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
        hideCancelButton: this.opts.hideCancelButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
        containerWidth: pluginState.containerWidth,
        containerHeight: pluginState.containerHeight,
        areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
        parentElement: this.el,
        allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
        maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
        requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
        showSelectedFiles: this.opts.showSelectedFiles,
        showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
        showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
        nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
        singleFileFullScreen: this.opts.singleFileFullScreen,
        handleCancelRestore: this.handleCancelRestore,
        handleRequestThumbnail: this.handleRequestThumbnail,
        handleCancelThumbnail: this.handleCancelThumbnail,
        // drag props
        isDraggingOver: pluginState.isDraggingOver,
        handleDragOver: this.handleDragOver,
        handleDragLeave: this.handleDragLeave,
        handleDrop: this.handleDrop
      });
    };
    Object.defineProperty(this, _addSpecifiedPluginsFromOptions, {
      writable: true,
      value: () => {
        const {
          plugins
        } = this.opts;
        plugins.forEach((pluginID) => {
          const plugin = this.uppy.getPlugin(pluginID);
          if (plugin) {
            ;
            plugin.mount(this, plugin);
          } else {
            this.uppy.log(`[Uppy] Dashboard could not find plugin '${pluginID}', make sure to uppy.use() the plugins you are specifying`, "warning");
          }
        });
      }
    });
    Object.defineProperty(this, _autoDiscoverPlugins, {
      writable: true,
      value: () => {
        this.uppy.iteratePlugins(_classPrivateFieldLooseBase7(this, _addSupportedPluginIfNoTarget)[_addSupportedPluginIfNoTarget]);
      }
    });
    Object.defineProperty(this, _addSupportedPluginIfNoTarget, {
      writable: true,
      value: (plugin) => {
        var _plugin$opts;
        const typesAllowed = ["acquirer", "editor"];
        if (plugin && !((_plugin$opts = plugin.opts) != null && _plugin$opts.target) && typesAllowed.includes(plugin.type)) {
          const pluginAlreadyAdded = this.getPluginState().targets.some((installedPlugin) => plugin.id === installedPlugin.id);
          if (!pluginAlreadyAdded) {
            ;
            plugin.mount(this, plugin);
          }
        }
      }
    });
    this.install = () => {
      this.setPluginState({
        isHidden: true,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: false,
        activePickerPanel: void 0,
        showFileEditor: false,
        metaFields: this.opts.metaFields,
        targets: [],
        // We'll make them visible once .containerWidth is determined
        areInsidesReadyToBeVisible: false,
        isDraggingOver: false
      });
      const {
        inline,
        closeAfterFinish
      } = this.opts;
      if (inline && closeAfterFinish) {
        throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
      }
      const {
        allowMultipleUploads,
        allowMultipleUploadBatches
      } = this.uppy.opts;
      if ((allowMultipleUploads || allowMultipleUploadBatches) && closeAfterFinish) {
        this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
      }
      const {
        target
      } = this.opts;
      if (target) {
        this.mount(target, this);
      }
      if (!this.opts.disableStatusBar) {
        this.uppy.use(StatusBar, {
          id: _classPrivateFieldLooseBase7(this, _getStatusBarId)[_getStatusBarId](),
          target: this,
          ..._classPrivateFieldLooseBase7(this, _getStatusBarOpts)[_getStatusBarOpts]()
        });
      }
      if (!this.opts.disableInformer) {
        this.uppy.use(Informer, {
          id: _classPrivateFieldLooseBase7(this, _getInformerId)[_getInformerId](),
          target: this,
          ..._classPrivateFieldLooseBase7(this, _getInformerOpts)[_getInformerOpts]()
        });
      }
      if (!this.opts.disableThumbnailGenerator) {
        this.uppy.use(ThumbnailGenerator, {
          id: _classPrivateFieldLooseBase7(this, _getThumbnailGeneratorId)[_getThumbnailGeneratorId](),
          ..._classPrivateFieldLooseBase7(this, _getThumbnailGeneratorOpts)[_getThumbnailGeneratorOpts]()
        });
      }
      this.darkModeMediaQuery = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
      const isDarkModeOnFromTheStart = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : false;
      this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnFromTheStart ? "on" : "off"}`);
      this.setDarkModeCapability(isDarkModeOnFromTheStart);
      if (this.opts.theme === "auto") {
        var _this$darkModeMediaQu;
        (_this$darkModeMediaQu = this.darkModeMediaQuery) == null || _this$darkModeMediaQu.addListener(this.handleSystemDarkModeChange);
      }
      _classPrivateFieldLooseBase7(this, _addSpecifiedPluginsFromOptions)[_addSpecifiedPluginsFromOptions]();
      _classPrivateFieldLooseBase7(this, _autoDiscoverPlugins)[_autoDiscoverPlugins]();
      this.initEvents();
    };
    this.uninstall = () => {
      if (!this.opts.disableInformer) {
        const informer = this.uppy.getPlugin(`${this.id}:Informer`);
        if (informer) this.uppy.removePlugin(informer);
      }
      if (!this.opts.disableStatusBar) {
        const statusBar = this.uppy.getPlugin(`${this.id}:StatusBar`);
        if (statusBar) this.uppy.removePlugin(statusBar);
      }
      if (!this.opts.disableThumbnailGenerator) {
        const thumbnail = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
        if (thumbnail) this.uppy.removePlugin(thumbnail);
      }
      const {
        plugins
      } = this.opts;
      plugins.forEach((pluginID) => {
        const plugin = this.uppy.getPlugin(pluginID);
        if (plugin) plugin.unmount();
      });
      if (this.opts.theme === "auto") {
        var _this$darkModeMediaQu2;
        (_this$darkModeMediaQu2 = this.darkModeMediaQuery) == null || _this$darkModeMediaQu2.removeListener(this.handleSystemDarkModeChange);
      }
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove("uppy-Dashboard-isFixed");
      }
      this.unmount();
      this.removeEvents();
    };
    this.id = this.opts.id || "Dashboard";
    this.title = "Dashboard";
    this.type = "orchestrator";
    this.defaultLocale = locale_default4;
    if (this.opts.doneButtonHandler === void 0) {
      this.opts.doneButtonHandler = () => {
        this.uppy.clear();
        this.requestCloseModal();
      };
    }
    (_this$opts$onRequestC = (_this$opts = this.opts).onRequestCloseModal) != null ? _this$opts$onRequestC : _this$opts.onRequestCloseModal = () => this.closeModal();
    this.i18nInit();
  }
  setOptions(opts) {
    var _this$uppy$getPlugin, _this$uppy$getPlugin2;
    super.setOptions(opts);
    (_this$uppy$getPlugin = this.uppy.getPlugin(_classPrivateFieldLooseBase7(this, _getStatusBarId)[_getStatusBarId]())) == null || _this$uppy$getPlugin.setOptions(_classPrivateFieldLooseBase7(this, _getStatusBarOpts)[_getStatusBarOpts]());
    (_this$uppy$getPlugin2 = this.uppy.getPlugin(_classPrivateFieldLooseBase7(this, _getThumbnailGeneratorId)[_getThumbnailGeneratorId]())) == null || _this$uppy$getPlugin2.setOptions(_classPrivateFieldLooseBase7(this, _getThumbnailGeneratorOpts)[_getThumbnailGeneratorOpts]());
  }
};
function _getStatusBarOpts2() {
  const {
    hideUploadButton,
    hideRetryButton,
    hidePauseResumeButton,
    hideCancelButton,
    showProgressDetails,
    hideProgressAfterFinish,
    locale: l,
    doneButtonHandler
  } = this.opts;
  return {
    hideUploadButton,
    hideRetryButton,
    hidePauseResumeButton,
    hideCancelButton,
    showProgressDetails,
    hideAfterFinish: hideProgressAfterFinish,
    locale: l,
    doneButtonHandler
  };
}
function _getThumbnailGeneratorOpts2() {
  const {
    thumbnailWidth,
    thumbnailHeight,
    thumbnailType,
    waitForThumbnailsBeforeUpload
  } = this.opts;
  return {
    thumbnailWidth,
    thumbnailHeight,
    thumbnailType,
    waitForThumbnailsBeforeUpload,
    // If we don't block on thumbnails, we can lazily generate them
    lazy: !waitForThumbnailsBeforeUpload
  };
}
function _getInformerOpts2() {
  return {
    // currently no options
  };
}
function _getStatusBarId2() {
  return `${this.id}:StatusBar`;
}
function _getThumbnailGeneratorId2() {
  return `${this.id}:ThumbnailGenerator`;
}
function _getInformerId2() {
  return `${this.id}:Informer`;
}
Dashboard2.VERSION = packageJson8.version;

// node_modules/@uppy/core/lib/EventManager.js
function _classPrivateFieldLooseBase8(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id8 = 0;
function _classPrivateFieldLooseKey8(e) {
  return "__private_" + id8++ + "_" + e;
}
var _uppy = /* @__PURE__ */ _classPrivateFieldLooseKey8("uppy");
var _events = /* @__PURE__ */ _classPrivateFieldLooseKey8("events");
var EventManager = class {
  constructor(uppy2) {
    Object.defineProperty(this, _uppy, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _events, {
      writable: true,
      value: []
    });
    _classPrivateFieldLooseBase8(this, _uppy)[_uppy] = uppy2;
  }
  on(event2, fn) {
    _classPrivateFieldLooseBase8(this, _events)[_events].push([event2, fn]);
    return _classPrivateFieldLooseBase8(this, _uppy)[_uppy].on(event2, fn);
  }
  remove() {
    for (const [event2, fn] of _classPrivateFieldLooseBase8(this, _events)[_events].splice(0)) {
      _classPrivateFieldLooseBase8(this, _uppy)[_uppy].off(event2, fn);
    }
  }
  onFilePause(fileID, cb) {
    this.on("upload-pause", (file, isPaused) => {
      if (fileID === (file == null ? void 0 : file.id)) {
        cb(isPaused);
      }
    });
  }
  onFileRemove(fileID, cb) {
    this.on("file-removed", (file) => {
      if (fileID === file.id) cb(file.id);
    });
  }
  onPause(fileID, cb) {
    this.on("upload-pause", (file, isPaused) => {
      if (fileID === (file == null ? void 0 : file.id)) {
        cb(isPaused);
      }
    });
  }
  onRetry(fileID, cb) {
    this.on("upload-retry", (file) => {
      if (fileID === (file == null ? void 0 : file.id)) {
        cb();
      }
    });
  }
  onRetryAll(fileID, cb) {
    this.on("retry-all", () => {
      if (!_classPrivateFieldLooseBase8(this, _uppy)[_uppy].getFile(fileID)) return;
      cb();
    });
  }
  onPauseAll(fileID, cb) {
    this.on("pause-all", () => {
      if (!_classPrivateFieldLooseBase8(this, _uppy)[_uppy].getFile(fileID)) return;
      cb();
    });
  }
  onCancelAll(fileID, eventHandler) {
    var _this = this;
    this.on("cancel-all", function() {
      if (!_classPrivateFieldLooseBase8(_this, _uppy)[_uppy].getFile(fileID)) return;
      eventHandler(...arguments);
    });
  }
  onResumeAll(fileID, cb) {
    this.on("resume-all", () => {
      if (!_classPrivateFieldLooseBase8(this, _uppy)[_uppy].getFile(fileID)) return;
      cb();
    });
  }
};

// node_modules/@uppy/utils/lib/RateLimitedQueue.js
function _classPrivateFieldLooseBase9(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id9 = 0;
function _classPrivateFieldLooseKey9(e) {
  return "__private_" + id9++ + "_" + e;
}
function createCancelError(cause) {
  return new Error("Cancelled", {
    cause
  });
}
function abortOn(signal) {
  if (signal != null) {
    var _this$then;
    const abortPromise = () => this.abort(signal.reason);
    signal.addEventListener("abort", abortPromise, {
      once: true
    });
    const removeAbortListener = () => {
      signal.removeEventListener("abort", abortPromise);
    };
    (_this$then = this.then) == null || _this$then.call(this, removeAbortListener, removeAbortListener);
  }
  return this;
}
var _activeRequests = /* @__PURE__ */ _classPrivateFieldLooseKey9("activeRequests");
var _queuedHandlers = /* @__PURE__ */ _classPrivateFieldLooseKey9("queuedHandlers");
var _paused = /* @__PURE__ */ _classPrivateFieldLooseKey9("paused");
var _pauseTimer = /* @__PURE__ */ _classPrivateFieldLooseKey9("pauseTimer");
var _downLimit = /* @__PURE__ */ _classPrivateFieldLooseKey9("downLimit");
var _upperLimit = /* @__PURE__ */ _classPrivateFieldLooseKey9("upperLimit");
var _rateLimitingTimer = /* @__PURE__ */ _classPrivateFieldLooseKey9("rateLimitingTimer");
var _call = /* @__PURE__ */ _classPrivateFieldLooseKey9("call");
var _queueNext = /* @__PURE__ */ _classPrivateFieldLooseKey9("queueNext");
var _next = /* @__PURE__ */ _classPrivateFieldLooseKey9("next");
var _queue = /* @__PURE__ */ _classPrivateFieldLooseKey9("queue");
var _dequeue = /* @__PURE__ */ _classPrivateFieldLooseKey9("dequeue");
var _resume = /* @__PURE__ */ _classPrivateFieldLooseKey9("resume");
var _increaseLimit = /* @__PURE__ */ _classPrivateFieldLooseKey9("increaseLimit");
var RateLimitedQueue = class {
  constructor(limit) {
    Object.defineProperty(this, _dequeue, {
      value: _dequeue2
    });
    Object.defineProperty(this, _queue, {
      value: _queue2
    });
    Object.defineProperty(this, _next, {
      value: _next2
    });
    Object.defineProperty(this, _queueNext, {
      value: _queueNext2
    });
    Object.defineProperty(this, _call, {
      value: _call2
    });
    Object.defineProperty(this, _activeRequests, {
      writable: true,
      value: 0
    });
    Object.defineProperty(this, _queuedHandlers, {
      writable: true,
      value: []
    });
    Object.defineProperty(this, _paused, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _pauseTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _downLimit, {
      writable: true,
      value: 1
    });
    Object.defineProperty(this, _upperLimit, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _rateLimitingTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _resume, {
      writable: true,
      value: () => this.resume()
    });
    Object.defineProperty(this, _increaseLimit, {
      writable: true,
      value: () => {
        if (_classPrivateFieldLooseBase9(this, _paused)[_paused]) {
          _classPrivateFieldLooseBase9(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase9(this, _increaseLimit)[_increaseLimit], 0);
          return;
        }
        _classPrivateFieldLooseBase9(this, _downLimit)[_downLimit] = this.limit;
        this.limit = Math.ceil((_classPrivateFieldLooseBase9(this, _upperLimit)[_upperLimit] + _classPrivateFieldLooseBase9(this, _downLimit)[_downLimit]) / 2);
        for (let i = _classPrivateFieldLooseBase9(this, _downLimit)[_downLimit]; i <= this.limit; i++) {
          _classPrivateFieldLooseBase9(this, _queueNext)[_queueNext]();
        }
        if (_classPrivateFieldLooseBase9(this, _upperLimit)[_upperLimit] - _classPrivateFieldLooseBase9(this, _downLimit)[_downLimit] > 3) {
          _classPrivateFieldLooseBase9(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase9(this, _increaseLimit)[_increaseLimit], 2e3);
        } else {
          _classPrivateFieldLooseBase9(this, _downLimit)[_downLimit] = Math.floor(_classPrivateFieldLooseBase9(this, _downLimit)[_downLimit] / 2);
        }
      }
    });
    if (typeof limit !== "number" || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
  }
  run(fn, queueOptions) {
    if (!_classPrivateFieldLooseBase9(this, _paused)[_paused] && _classPrivateFieldLooseBase9(this, _activeRequests)[_activeRequests] < this.limit) {
      return _classPrivateFieldLooseBase9(this, _call)[_call](fn);
    }
    return _classPrivateFieldLooseBase9(this, _queue)[_queue](fn, queueOptions);
  }
  wrapSyncFunction(fn, queueOptions) {
    var _this = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const queuedRequest = _this.run(() => {
        fn(...args);
        queueMicrotask(() => queuedRequest.done());
        return () => {
        };
      }, queueOptions);
      return {
        abortOn,
        abort() {
          queuedRequest.abort();
        }
      };
    };
  }
  wrapPromiseFunction(fn, queueOptions) {
    var _this2 = this;
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      let queuedRequest;
      const outerPromise = new Promise((resolve, reject) => {
        queuedRequest = _this2.run(() => {
          let cancelError;
          let innerPromise;
          try {
            innerPromise = Promise.resolve(fn(...args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then((result) => {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
          }, (err) => {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
          });
          return (cause) => {
            cancelError = createCancelError(cause);
          };
        }, queueOptions);
      });
      outerPromise.abort = (cause) => {
        queuedRequest.abort(cause);
      };
      outerPromise.abortOn = abortOn;
      return outerPromise;
    };
  }
  resume() {
    _classPrivateFieldLooseBase9(this, _paused)[_paused] = false;
    clearTimeout(_classPrivateFieldLooseBase9(this, _pauseTimer)[_pauseTimer]);
    for (let i = 0; i < this.limit; i++) {
      _classPrivateFieldLooseBase9(this, _queueNext)[_queueNext]();
    }
  }
  /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */
  pause(duration2) {
    if (duration2 === void 0) {
      duration2 = null;
    }
    _classPrivateFieldLooseBase9(this, _paused)[_paused] = true;
    clearTimeout(_classPrivateFieldLooseBase9(this, _pauseTimer)[_pauseTimer]);
    if (duration2 != null) {
      _classPrivateFieldLooseBase9(this, _pauseTimer)[_pauseTimer] = setTimeout(_classPrivateFieldLooseBase9(this, _resume)[_resume], duration2);
    }
  }
  /**
   * Pauses the queue for a duration, and lower the limit of concurrent requests
   * when the queue resumes. When the queue resumes, it tries to progressively
   * increase the limit in `this.#increaseLimit` until another call is made to
   * `this.rateLimit`.
   * Call this function when using the RateLimitedQueue for network requests and
   * the remote server responds with 429 HTTP code.
   *
   * @param {number} duration in milliseconds.
   */
  rateLimit(duration2) {
    clearTimeout(_classPrivateFieldLooseBase9(this, _rateLimitingTimer)[_rateLimitingTimer]);
    this.pause(duration2);
    if (this.limit > 1 && Number.isFinite(this.limit)) {
      _classPrivateFieldLooseBase9(this, _upperLimit)[_upperLimit] = this.limit - 1;
      this.limit = _classPrivateFieldLooseBase9(this, _downLimit)[_downLimit];
      _classPrivateFieldLooseBase9(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase9(this, _increaseLimit)[_increaseLimit], duration2);
    }
  }
  get isPaused() {
    return _classPrivateFieldLooseBase9(this, _paused)[_paused];
  }
};
function _call2(fn) {
  _classPrivateFieldLooseBase9(this, _activeRequests)[_activeRequests] += 1;
  let done = false;
  let cancelActive;
  try {
    cancelActive = fn();
  } catch (err) {
    _classPrivateFieldLooseBase9(this, _activeRequests)[_activeRequests] -= 1;
    throw err;
  }
  return {
    abort: (cause) => {
      if (done) return;
      done = true;
      _classPrivateFieldLooseBase9(this, _activeRequests)[_activeRequests] -= 1;
      cancelActive == null || cancelActive(cause);
      _classPrivateFieldLooseBase9(this, _queueNext)[_queueNext]();
    },
    done: () => {
      if (done) return;
      done = true;
      _classPrivateFieldLooseBase9(this, _activeRequests)[_activeRequests] -= 1;
      _classPrivateFieldLooseBase9(this, _queueNext)[_queueNext]();
    }
  };
}
function _queueNext2() {
  queueMicrotask(() => _classPrivateFieldLooseBase9(this, _next)[_next]());
}
function _next2() {
  if (_classPrivateFieldLooseBase9(this, _paused)[_paused] || _classPrivateFieldLooseBase9(this, _activeRequests)[_activeRequests] >= this.limit) {
    return;
  }
  if (_classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].length === 0) {
    return;
  }
  const next = _classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].shift();
  if (next == null) {
    throw new Error("Invariant violation: next is null");
  }
  const handler = _classPrivateFieldLooseBase9(this, _call)[_call](next.fn);
  next.abort = handler.abort;
  next.done = handler.done;
}
function _queue2(fn, options3) {
  const handler = {
    fn,
    priority: (options3 == null ? void 0 : options3.priority) || 0,
    abort: () => {
      _classPrivateFieldLooseBase9(this, _dequeue)[_dequeue](handler);
    },
    done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    }
  };
  const index = _classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].findIndex((other) => {
    return handler.priority > other.priority;
  });
  if (index === -1) {
    _classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].push(handler);
  } else {
    _classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].splice(index, 0, handler);
  }
  return handler;
}
function _dequeue2(handler) {
  const index = _classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].indexOf(handler);
  if (index !== -1) {
    _classPrivateFieldLooseBase9(this, _queuedHandlers)[_queuedHandlers].splice(index, 1);
  }
}
var internalRateLimitedQueue = Symbol("__queue");

// node_modules/@uppy/utils/lib/NetworkError.js
var NetworkError = class extends Error {
  constructor(error, xhr) {
    if (xhr === void 0) {
      xhr = null;
    }
    super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.`);
    this.cause = error;
    this.isNetworkError = true;
    this.request = xhr;
  }
};
var NetworkError_default = NetworkError;

// node_modules/@uppy/utils/lib/isNetworkError.js
function isNetworkError(xhr) {
  if (!xhr) {
    return false;
  }
  return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
}
var isNetworkError_default = isNetworkError;

// node_modules/@uppy/utils/lib/ProgressTimeout.js
function _classPrivateFieldLooseBase10(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id10 = 0;
function _classPrivateFieldLooseKey10(e) {
  return "__private_" + id10++ + "_" + e;
}
var _aliveTimer = /* @__PURE__ */ _classPrivateFieldLooseKey10("aliveTimer");
var _isDone = /* @__PURE__ */ _classPrivateFieldLooseKey10("isDone");
var _onTimedOut = /* @__PURE__ */ _classPrivateFieldLooseKey10("onTimedOut");
var _timeout = /* @__PURE__ */ _classPrivateFieldLooseKey10("timeout");
var ProgressTimeout = class {
  constructor(timeout, timeoutHandler) {
    Object.defineProperty(this, _aliveTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _isDone, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _onTimedOut, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _timeout, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase10(this, _timeout)[_timeout] = timeout;
    _classPrivateFieldLooseBase10(this, _onTimedOut)[_onTimedOut] = () => timeoutHandler(timeout);
  }
  progress() {
    if (_classPrivateFieldLooseBase10(this, _isDone)[_isDone]) return;
    if (_classPrivateFieldLooseBase10(this, _timeout)[_timeout] > 0) {
      clearTimeout(_classPrivateFieldLooseBase10(this, _aliveTimer)[_aliveTimer]);
      _classPrivateFieldLooseBase10(this, _aliveTimer)[_aliveTimer] = setTimeout(_classPrivateFieldLooseBase10(this, _onTimedOut)[_onTimedOut], _classPrivateFieldLooseBase10(this, _timeout)[_timeout]);
    }
  }
  done() {
    if (!_classPrivateFieldLooseBase10(this, _isDone)[_isDone]) {
      clearTimeout(_classPrivateFieldLooseBase10(this, _aliveTimer)[_aliveTimer]);
      _classPrivateFieldLooseBase10(this, _aliveTimer)[_aliveTimer] = void 0;
      _classPrivateFieldLooseBase10(this, _isDone)[_isDone] = true;
    }
  }
};
var ProgressTimeout_default = ProgressTimeout;

// node_modules/@uppy/utils/lib/fetcher.js
var noop = () => {
};
function fetcher(url, options3) {
  if (options3 === void 0) {
    options3 = {};
  }
  const {
    body = null,
    headers = {},
    method = "GET",
    onBeforeRequest = noop,
    onUploadProgress = noop,
    shouldRetry = () => true,
    onAfterResponse = noop,
    onTimeout = noop,
    responseType,
    retries = 3,
    signal = null,
    timeout = 3e4,
    withCredentials = false
  } = options3;
  const delay = (attempt) => 0.3 * 2 ** (attempt - 1) * 1e3;
  const timer = new ProgressTimeout_default(timeout, onTimeout);
  function requestWithRetry(retryCount) {
    if (retryCount === void 0) {
      retryCount = 0;
    }
    return new Promise(async (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const onError = (error) => {
        if (shouldRetry(xhr) && retryCount < retries) {
          setTimeout(() => {
            requestWithRetry(retryCount + 1).then(resolve, reject);
          }, delay(retryCount));
        } else {
          timer.done();
          reject(error);
        }
      };
      xhr.open(method, url, true);
      xhr.withCredentials = withCredentials;
      if (responseType) {
        xhr.responseType = responseType;
      }
      signal == null || signal.addEventListener("abort", () => {
        xhr.abort();
        reject(new DOMException("Aborted", "AbortError"));
      });
      xhr.onload = async () => {
        try {
          await onAfterResponse(xhr, retryCount);
        } catch (err) {
          err.request = xhr;
          onError(err);
          return;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          timer.done();
          resolve(xhr);
        } else if (shouldRetry(xhr) && retryCount < retries) {
          setTimeout(() => {
            requestWithRetry(retryCount + 1).then(resolve, reject);
          }, delay(retryCount));
        } else {
          timer.done();
          reject(new NetworkError_default(xhr.statusText, xhr));
        }
      };
      xhr.onerror = () => onError(new NetworkError_default(xhr.statusText, xhr));
      xhr.upload.onprogress = (event2) => {
        timer.progress();
        onUploadProgress(event2);
      };
      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }
      await onBeforeRequest(xhr, retryCount);
      xhr.send(body);
    });
  }
  return requestWithRetry();
}

// node_modules/@uppy/utils/lib/fileFilters.js
function filterNonFailedFiles(files) {
  const hasError = (file) => "error" in file && !!file.error;
  return files.filter((file) => !hasError(file));
}
function filterFilesToEmitUploadStarted(files) {
  return files.filter((file) => {
    var _file$progress;
    return !((_file$progress = file.progress) != null && _file$progress.uploadStarted) || !file.isRestored;
  });
}

// node_modules/@uppy/utils/lib/getAllowedMetaFields.js
function getAllowedMetaFields(fields, meta) {
  if (fields === true) {
    return Object.keys(meta);
  }
  if (Array.isArray(fields)) {
    return fields;
  }
  return [];
}

// node_modules/@uppy/xhr-upload/lib/locale.js
var locale_default5 = {
  strings: {
    // Shown in the Informer if an upload is being canceled because it stalled for too long.
    uploadStalled: "Upload has not made any progress for %{seconds} seconds. You may want to retry it."
  }
};

// node_modules/@uppy/xhr-upload/lib/index.js
function _classPrivateFieldLooseBase11(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id11 = 0;
function _classPrivateFieldLooseKey11(e) {
  return "__private_" + id11++ + "_" + e;
}
var packageJson9 = {
  "version": "4.3.3"
};
function buildResponseError(xhr, err) {
  let error = err;
  if (!error) error = new Error("Upload error");
  if (typeof error === "string") error = new Error(error);
  if (!(error instanceof Error)) {
    error = Object.assign(new Error("Upload error"), {
      data: error
    });
  }
  if (isNetworkError_default(xhr)) {
    error = new NetworkError_default(error, xhr);
    return error;
  }
  error.request = xhr;
  return error;
}
function setTypeInBlob(file) {
  const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
  return dataWithUpdatedType;
}
var defaultOptions6 = {
  formData: true,
  fieldName: "file",
  method: "post",
  allowedMetaFields: true,
  bundle: false,
  headers: {},
  timeout: 30 * 1e3,
  limit: 5,
  withCredentials: false,
  responseType: ""
};
var _getFetcher = /* @__PURE__ */ _classPrivateFieldLooseKey11("getFetcher");
var _uploadLocalFile = /* @__PURE__ */ _classPrivateFieldLooseKey11("uploadLocalFile");
var _uploadBundle = /* @__PURE__ */ _classPrivateFieldLooseKey11("uploadBundle");
var _getCompanionClientArgs = /* @__PURE__ */ _classPrivateFieldLooseKey11("getCompanionClientArgs");
var _uploadFiles = /* @__PURE__ */ _classPrivateFieldLooseKey11("uploadFiles");
var _handleUpload = /* @__PURE__ */ _classPrivateFieldLooseKey11("handleUpload");
var XHRUpload = class extends BasePlugin {
  constructor(uppy2, _opts) {
    super(uppy2, {
      ...defaultOptions6,
      fieldName: _opts.bundle ? "files[]" : "file",
      ..._opts
    });
    Object.defineProperty(this, _uploadFiles, {
      value: _uploadFiles2
    });
    Object.defineProperty(this, _getCompanionClientArgs, {
      value: _getCompanionClientArgs2
    });
    Object.defineProperty(this, _uploadBundle, {
      value: _uploadBundle2
    });
    Object.defineProperty(this, _uploadLocalFile, {
      value: _uploadLocalFile2
    });
    Object.defineProperty(this, _getFetcher, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _handleUpload, {
      writable: true,
      value: async (fileIDs) => {
        if (fileIDs.length === 0) {
          this.uppy.log("[XHRUpload] No files to upload!");
          return;
        }
        if (this.opts.limit === 0 && !this.opts[internalRateLimitedQueue]) {
          this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0", "warning");
        }
        this.uppy.log("[XHRUpload] Uploading...");
        const files = this.uppy.getFilesByIds(fileIDs);
        const filesFiltered = filterNonFailedFiles(files);
        const filesToEmit = filterFilesToEmitUploadStarted(filesFiltered);
        this.uppy.emit("upload-start", filesToEmit);
        if (this.opts.bundle) {
          const isSomeFileRemote = filesFiltered.some((file) => file.isRemote);
          if (isSomeFileRemote) {
            throw new Error("Can\u2019t upload remote files when the `bundle: true` option is set");
          }
          if (typeof this.opts.headers === "function") {
            throw new TypeError("`headers` may not be a function when the `bundle: true` option is set");
          }
          await _classPrivateFieldLooseBase11(this, _uploadBundle)[_uploadBundle](filesFiltered);
        } else {
          await _classPrivateFieldLooseBase11(this, _uploadFiles)[_uploadFiles](filesFiltered);
        }
      }
    });
    this.type = "uploader";
    this.id = this.opts.id || "XHRUpload";
    this.defaultLocale = locale_default5;
    this.i18nInit();
    if (internalRateLimitedQueue in this.opts) {
      this.requests = this.opts[internalRateLimitedQueue];
    } else {
      this.requests = new RateLimitedQueue(this.opts.limit);
    }
    if (this.opts.bundle && !this.opts.formData) {
      throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.");
    }
    if (this.opts.bundle && typeof this.opts.headers === "function") {
      throw new Error("`opts.headers` can not be a function when the `bundle: true` option is set.");
    }
    if ((_opts == null ? void 0 : _opts.allowedMetaFields) === void 0 && "metaFields" in this.opts) {
      throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
    }
    this.uploaderEvents = /* @__PURE__ */ Object.create(null);
    _classPrivateFieldLooseBase11(this, _getFetcher)[_getFetcher] = (files) => {
      return async (url, options3) => {
        try {
          var _this$opts$getRespons, _this$opts2, _body3;
          const res = await fetcher(url, {
            ...options3,
            onBeforeRequest: (xhr, retryCount) => {
              var _this$opts$onBeforeRe, _this$opts;
              return (_this$opts$onBeforeRe = (_this$opts = this.opts).onBeforeRequest) == null ? void 0 : _this$opts$onBeforeRe.call(_this$opts, xhr, retryCount, files);
            },
            shouldRetry: this.opts.shouldRetry,
            onAfterResponse: this.opts.onAfterResponse,
            onTimeout: (timeout) => {
              const seconds = Math.ceil(timeout / 1e3);
              const error = new Error(this.i18n("uploadStalled", {
                seconds
              }));
              this.uppy.emit("upload-stalled", error, files);
            },
            onUploadProgress: (event2) => {
              if (event2.lengthComputable) {
                for (const {
                  id: id12
                } of files) {
                  var _file$progress$upload;
                  const file = this.uppy.getFile(id12);
                  this.uppy.emit("upload-progress", file, {
                    uploadStarted: (_file$progress$upload = file.progress.uploadStarted) != null ? _file$progress$upload : 0,
                    bytesUploaded: event2.loaded / event2.total * file.size,
                    bytesTotal: file.size
                  });
                }
              }
            }
          });
          let body = await ((_this$opts$getRespons = (_this$opts2 = this.opts).getResponseData) == null ? void 0 : _this$opts$getRespons.call(_this$opts2, res));
          if (res.responseType === "json") {
            var _body;
            (_body = body) != null ? _body : body = res.response;
          } else {
            try {
              var _body2;
              (_body2 = body) != null ? _body2 : body = JSON.parse(res.responseText);
            } catch (cause) {
              throw new Error("@uppy/xhr-upload expects a JSON response (with a `url` property). To parse non-JSON responses, use `getResponseData` to turn your response into JSON.", {
                cause
              });
            }
          }
          const uploadURL = typeof ((_body3 = body) == null ? void 0 : _body3.url) === "string" ? body.url : void 0;
          for (const {
            id: id12
          } of files) {
            this.uppy.emit("upload-success", this.uppy.getFile(id12), {
              status: res.status,
              body,
              uploadURL
            });
          }
          return res;
        } catch (error) {
          if (error.name === "AbortError") {
            return void 0;
          }
          const request = error.request;
          for (const file of files) {
            this.uppy.emit("upload-error", this.uppy.getFile(file.id), buildResponseError(request, error), request);
          }
          throw error;
        }
      };
    };
  }
  getOptions(file) {
    const overrides = this.uppy.getState().xhrUpload;
    const {
      headers
    } = this.opts;
    const opts = {
      ...this.opts,
      ...overrides || {},
      ...file.xhrUpload || {},
      headers: {}
    };
    if (typeof headers === "function") {
      opts.headers = headers(file);
    } else {
      Object.assign(opts.headers, this.opts.headers);
    }
    if (overrides) {
      Object.assign(opts.headers, overrides.headers);
    }
    if (file.xhrUpload) {
      Object.assign(opts.headers, file.xhrUpload.headers);
    }
    return opts;
  }
  // eslint-disable-next-line class-methods-use-this
  addMetadata(formData, meta, opts) {
    const allowedMetaFields = getAllowedMetaFields(opts.allowedMetaFields, meta);
    allowedMetaFields.forEach((item) => {
      const value = meta[item];
      if (Array.isArray(value)) {
        value.forEach((subItem) => formData.append(item, subItem));
      } else {
        formData.append(item, value);
      }
    });
  }
  createFormDataUpload(file, opts) {
    const formPost = new FormData();
    this.addMetadata(formPost, file.meta, opts);
    const dataWithUpdatedType = setTypeInBlob(file);
    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }
    return formPost;
  }
  createBundledUpload(files, opts) {
    const formPost = new FormData();
    const {
      meta
    } = this.uppy.getState();
    this.addMetadata(formPost, meta, opts);
    files.forEach((file) => {
      const options3 = this.getOptions(file);
      const dataWithUpdatedType = setTypeInBlob(file);
      if (file.name) {
        formPost.append(options3.fieldName, dataWithUpdatedType, file.name);
      } else {
        formPost.append(options3.fieldName, dataWithUpdatedType);
      }
    });
    return formPost;
  }
  install() {
    if (this.opts.bundle) {
      const {
        capabilities
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          individualCancellation: false
        }
      });
    }
    this.uppy.addUploader(_classPrivateFieldLooseBase11(this, _handleUpload)[_handleUpload]);
  }
  uninstall() {
    if (this.opts.bundle) {
      const {
        capabilities
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          individualCancellation: true
        }
      });
    }
    this.uppy.removeUploader(_classPrivateFieldLooseBase11(this, _handleUpload)[_handleUpload]);
  }
};
async function _uploadLocalFile2(file) {
  const events = new EventManager(this.uppy);
  const controller = new AbortController();
  const uppyFetch = this.requests.wrapPromiseFunction(async () => {
    const opts = this.getOptions(file);
    const fetch3 = _classPrivateFieldLooseBase11(this, _getFetcher)[_getFetcher]([file]);
    const body = opts.formData ? this.createFormDataUpload(file, opts) : file.data;
    return fetch3(opts.endpoint, {
      ...opts,
      body,
      signal: controller.signal
    });
  });
  events.onFileRemove(file.id, () => controller.abort());
  events.onCancelAll(file.id, () => {
    controller.abort();
  });
  try {
    await uppyFetch().abortOn(controller.signal);
  } catch (error) {
    if (error.message !== "Cancelled") {
      throw error;
    }
  } finally {
    events.remove();
  }
}
async function _uploadBundle2(files) {
  const controller = new AbortController();
  const uppyFetch = this.requests.wrapPromiseFunction(async () => {
    var _this$uppy$getState$x;
    const optsFromState = (_this$uppy$getState$x = this.uppy.getState().xhrUpload) != null ? _this$uppy$getState$x : {};
    const fetch3 = _classPrivateFieldLooseBase11(this, _getFetcher)[_getFetcher](files);
    const body = this.createBundledUpload(files, {
      ...this.opts,
      ...optsFromState
    });
    return fetch3(this.opts.endpoint, {
      // headers can't be a function with bundle: true
      ...this.opts,
      body,
      signal: controller.signal
    });
  });
  function abort() {
    controller.abort();
  }
  this.uppy.once("cancel-all", abort);
  try {
    await uppyFetch().abortOn(controller.signal);
  } catch (error) {
    if (error.message !== "Cancelled") {
      throw error;
    }
  } finally {
    this.uppy.off("cancel-all", abort);
  }
}
function _getCompanionClientArgs2(file) {
  var _file$remote;
  const opts = this.getOptions(file);
  const allowedMetaFields = getAllowedMetaFields(opts.allowedMetaFields, file.meta);
  return {
    ...(_file$remote = file.remote) == null ? void 0 : _file$remote.body,
    protocol: "multipart",
    endpoint: opts.endpoint,
    size: file.data.size,
    fieldname: opts.fieldName,
    metadata: Object.fromEntries(allowedMetaFields.map((name) => [name, file.meta[name]])),
    httpMethod: opts.method,
    useFormData: opts.formData,
    headers: opts.headers
  };
}
async function _uploadFiles2(files) {
  await Promise.allSettled(files.map((file) => {
    if (file.isRemote) {
      const getQueue = () => this.requests;
      const controller = new AbortController();
      const removedHandler = (removedFile) => {
        if (removedFile.id === file.id) controller.abort();
      };
      this.uppy.on("file-removed", removedHandler);
      const uploadPromise = this.uppy.getRequestClientForFile(file).uploadRemoteFile(file, _classPrivateFieldLooseBase11(this, _getCompanionClientArgs)[_getCompanionClientArgs](file), {
        signal: controller.signal,
        getQueue
      });
      this.requests.wrapSyncFunction(() => {
        this.uppy.off("file-removed", removedHandler);
      }, {
        priority: -1
      })();
      return uploadPromise;
    }
    return _classPrivateFieldLooseBase11(this, _uploadLocalFile)[_uploadLocalFile](file);
  }));
}
XHRUpload.VERSION = packageJson9.version;

// app/javascript/files/uppy_ops.js
var import_lodash2 = __toESM(require_lodash());

// app/javascript/alert.js
function OODAlert(message) {
  const div = alertDiv(message);
  const main = document.getElementById("main_container");
  main.prepend(div);
  div.scrollIntoView({ behavior: "smooth" });
}
function alertDiv(message) {
  const span = document.createElement("span");
  span.innerText = message;
  const div = document.createElement("div");
  div.classList.add("alert", "alert-danger", "alert-dismissible");
  div.setAttribute("role", "alert");
  div.appendChild(span);
  div.appendChild(closeButton());
  return div;
}
function closeButton() {
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.dataset.bsDismiss = "alert";
  const span = document.createElement("span");
  span.classList.add("sr-only");
  span.innerText = "Close";
  button.appendChild(span);
  return button;
}

// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function maxFileSize() {
  const cfgData = configData();
  if (cfgData["maxFileSize"].length == 0) {
    return parseInt(1073742e4, 10);
  } else {
    const maxFileSize2 = cfgData["maxFileSize"];
    return parseInt(maxFileSize2, 10);
  }
}
function transfersPath() {
  const cfgData = configData();
  const transfersPath2 = cfgData["transfersPath"];
  return transfersPath2;
}
function csrfToken() {
  const csrf_token = document.querySelector('meta[name="csrf-token"]').content;
  return csrf_token;
}
function uppyLocale() {
  const cfgData = configData();
  return JSON.parse(cfgData["uppyLocale"]);
}
function downloadEnabled() {
  const cfgData = configData();
  return cfgData["downloadEnabled"] == "true";
}

// app/javascript/aria_live_notify.js
function ariaNotify(message) {
  const liveRegion = document.getElementById("aria_live_region");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}

// app/javascript/utils.js
function pageSpin() {
  const ele = document.getElementById("full_page_spinner");
  ele.classList.remove("d-none");
  ariaNotify("Loading.");
}
function stopPageSpin() {
  const ele = document.getElementById("full_page_spinner");
  ele.classList.add("d-none");
  ariaNotify("Loading complete.");
}

// app/javascript/files/sweet_alert.js
var EVENTNAME2 = {
  showError: "showError",
  showInput: "showInput",
  showLoading: "showLoading",
  closeSwal: "closeSwal"
};
function modifyInput(options3) {
  const title = options3.inputOptions.title;
  const titleElement = document.getElementById("files_input_modal_title");
  titleElement.textContent = title;
  const label = options3.inputOptions.inputLabel;
  const labelElement = document.getElementById("files_input_modal_label");
  labelElement.textContent = label;
  const wrapper = document.getElementById("files_input_modal_input_wrapper");
  const span = document.getElementById("files_input_modal_text_span");
  if (options3.inputOptions.input && options3.inputOptions.input == "text") {
    wrapper.classList.remove("d-none");
    span.textContent = "";
  } else {
    wrapper.classList.add("d-none");
    if (options3.inputOptions.text) {
      span.textContent = options3.inputOptions.text;
    }
  }
  if (options3.inputOptions.inputValue) {
    const input = document.getElementById("files_input_modal_input");
    input.value = options3.inputOptions.inputValue;
  }
  attachOKHandler(options3);
}
function attachOKHandler(options3) {
  const button = document.getElementById("files_input_modal_ok_button");
  button.onclick = () => {
    const input = document.getElementById("files_input_modal_input");
    const value = input.value;
    const eventData = {
      files: options3.files ? options3.files : null,
      result: {
        value
      }
    };
    const validator = options3.inputOptions.inputValidator;
    let error = void 0;
    if (validator && typeof validator == "function") {
      error = validator(value);
    }
    if (error) {
      OODAlert(error);
    } else {
      $(CONTENTID).trigger(options3.action, eventData);
    }
    input.value = "";
    $("#files_input_modal").modal("hide");
  };
}
jQuery(function() {
  $(CONTENTID).on(EVENTNAME2.showError, function(e, options3) {
    OODAlert(options3.message);
  });
  $(CONTENTID).on(EVENTNAME2.showInput, function(e, options3) {
    modifyInput(options3);
    $("#files_input_modal").modal("show");
  });
  $(CONTENTID).on(EVENTNAME2.showLoading, function(e, options3) {
    pageSpin();
  });
  $(CONTENTID).on(EVENTNAME2.closeSwal, function() {
    stopPageSpin();
  });
});

// app/javascript/files/globus.js
var globus_endpoints;
$(document).ready(function() {
  globus_endpoints = $("#globus_endpoints").data("globusEndpoints");
});
function getEndpointInfo(directory) {
  for (const endpoint of globus_endpoints) {
    if (directory.startsWith(endpoint["path"])) {
      return endpoint;
    }
  }
}
function getGlobusLink(directory) {
  let info = getEndpointInfo(directory);
  if (info) {
    let origin_path = directory.replace(info.path, info.endpoint_path);
    origin_path = origin_path.replace("//", "/");
    return "https://app.globus.org/file-manager?origin_id=" + info.endpoint + "&origin_path=" + origin_path;
  }
}
function updateGlobusLink(directory, link, wrapper) {
  let info = getEndpointInfo(directory);
  if (info) {
    link.removeClass("disabled");
    wrapper.prop("title", "Open the current directory with Globus");
  } else {
    link.addClass("disabled");
    wrapper.prop("title", "No Globus endpoint associated with this directory");
  }
}

// app/javascript/files/data_table.js
var EVENTNAME = {
  getJsonResponse: "getJsonResponse",
  reloadTable: "reloadTable",
  goto: "goto"
};
var CONTENTID = "#directory-contents";
var SPINNERID = "#tloading_spinner";
var table = null;
jQuery(function() {
  table = new DataTable();
  window.onpopstate = function(event2) {
    table.goto(location.href);
  };
  $(CONTENTID).on(EVENTNAME.reloadTable, function(e, options3) {
    let url = $.isEmptyObject(options3) ? "" : options3.url;
    table.reloadTable(url);
  });
  $(CONTENTID).on(EVENTNAME.getJsonResponse, function(e, options3) {
    table.dataFromJsonResponse(options3.response);
  });
  $(CONTENTID).on(EVENTNAME.goto, function(e, options3) {
    table.goto(options3.path);
  });
  $("#show-dotfiles").on("change", function() {
    table.setShowDotFiles(this.checked);
    table.updateDotFileVisibility();
  });
  $("#show-dotfiles").on("keypress", function(event2) {
    if (event2.which === 13) {
      this.checked = !this.checked;
      this.dispatchEvent(new Event("change"));
    }
  });
  $("#show-owner-mode").on("change", function() {
    table.setShowOwnerMode(this.checked);
    table.updateShowOwnerModeVisibility();
  });
  $("#show-owner-mode").on("keypress", function(event2) {
    if (event2.which === 13) {
      this.checked = !this.checked;
      this.dispatchEvent(new Event("change"));
    }
  });
  $("#select_all").on("click", function() {
    if ($(this).is(":checked")) {
      table.getTable().rows({ search: "applied" }).select();
    } else {
      table.getTable().rows().deselect();
    }
  });
  table.getTable().on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function() {
    table.updateDatatablesStatus();
  });
  table.getTable().on("user-select", function(e, dt, type, cell, originalEvent) {
    var selected_rows = dt.rows({ selected: true });
    if (originalEvent.target.closest(".actions-btn-group")) {
      e.preventDefault();
    } else if (selected_rows.count() == 1 && cell.index().row == selected_rows.indexes()[0]) {
      e.preventDefault();
    } else {
      cell.node().closest("tr").querySelector("input[type=checkbox]").focus();
    }
  });
  table.getTable().on("deselect", function(e, dt, type, indexes) {
    dt.rows(indexes).nodes().toArray().forEach((e2) => $(e2).find("input[type=checkbox]").prop("checked", false));
  });
  table.getTable().on("select", function(e, dt, type, indexes) {
    dt.rows(indexes).nodes().toArray().forEach((e2) => $(e2).find("input[type=checkbox]").prop("checked", true));
  });
  $("#directory-contents tbody").on("click", "tr td:first-child input[type=checkbox]", function() {
    if ($(this).is(":checked")) {
      table.getTable().row(this.closest("tr")).select();
    } else {
      table.getTable().row(this.closest("tr")).deselect();
    }
    this.focus();
  });
  $("#directory-contents tbody").on("keydown", "input, a", function(e) {
    if (e.key == "ArrowDown") {
      e.preventDefault();
      let tr = $(this.closest("tr")).next("tr").get(0);
      if (tr) {
        tr.querySelector("input[type=checkbox]").focus();
        if (!e.shiftKey) {
          table.getTable().rows().deselect();
        }
        table.getTable().row(tr).select();
      }
    } else if (e.key == "ArrowUp") {
      e.preventDefault();
      let tr = $(this.closest("tr")).prev("tr").get(0);
      if (tr) {
        tr.querySelector("input[type=checkbox]").focus();
        if (!e.shiftKey) {
          table.getTable().rows().deselect();
        }
        table.getTable().row(tr).select();
      }
    }
  });
  $.fn.dataTable.ext.search.push(
    function(settings, data, dataIndex) {
      return table.getShowDotFiles() || !data[2].startsWith(".");
    }
  );
});
var DataTable = class {
  _table = null;
  constructor() {
    this.loadDataTable();
    this.reloadTable();
  }
  getTable() {
    return this._table;
  }
  toHumanSize(number) {
    if (number === null) {
      return "-";
    } else {
      const unitIndex = number == 0 ? 0 : Math.floor(Math.log(number) / Math.log(1e3));
      return `${(number / Math.pow(1e3, unitIndex)).toFixed(2)} ${["B", "kB", "MB", "GB", "TB", "PB"][unitIndex]}`;
    }
  }
  loadDataTable() {
    this._table = $(CONTENTID).on("xhr.dt", function(e, settings, json, xhr) {
      if (json && json.time) {
        history.replaceState(_.merge({}, history.state, { currentDirectoryUpdatedAt: json.time }), null);
      }
    }).DataTable({
      autoWidth: false,
      language: {
        search: "Filter:"
      },
      order: [[1, "asc"], [2, "asc"]],
      rowId: "id",
      paging: false,
      scrollCollapse: true,
      select: {
        style: "os",
        className: "selected",
        toggleable: true,
        // don't trigger select checkbox column as select
        // if you need to omit more columns, use a "selectable" class on the columns you want to support selection
        selector: "td:not(:first-child)"
      },
      // https://datatables.net/reference/option/dom
      // dom: '', dataTables_info nowrap
      //
      // put breadcrmbs below filter!!!
      dom: "<'row'<'col-sm-12'f>><'row'<'col-sm-12'<'dt-status-bar'<'datatables-status float-end'><'transfers-status'>>>><'row'<'col-sm-12'tr>>",
      // normally this is <'row'<'col-sm-5'i><'col-sm-7'p>> but we disabled pagination so have info take whole row
      columns: [
        {
          data: null,
          orderable: false,
          defaultContent: '<input type="checkbox">',
          render: (data, type, row, meta) => {
            return `<input type='checkbox' data-dl-url='${row.download_url}'>`;
          }
        },
        { data: "type", render: (data, type, row, meta) => data == "d" ? '<span title="directory" class="fa fa-folder" style="color: gold"><span class="sr-only"> dir</span></span>' : '<span title="file" class="fa fa-file" style="color: lightgrey"><span class="sr-only"> file</span></span>' },
        // type
        { name: "name", data: "name", className: "text-break", render: (data, type, row, meta) => this.renderNameColumn(data, type, row, meta) },
        // name
        { name: "actions", orderable: false, searchable: false, data: null, render: (data, type, row, meta) => this.actionsBtnTemplate({ row_index: meta.row, file: row.type != "d", data: row }) },
        {
          data: "size",
          render: (data, type, row, meta) => {
            return type == "display" ? this.toHumanSize(row.size) : data;
          }
        },
        // human_size
        {
          data: "modified_at",
          render: (data, type, row, meta) => {
            if (type == "display") {
              let date = new Date(data * 1e3);
              return isNaN(data) ? "Invalid Date" : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            } else {
              return data;
            }
          }
        },
        // modified_at
        { name: "owner", data: "owner", visible: this.getShowOwnerMode() },
        // owner
        {
          name: "mode",
          data: "mode",
          visible: this.getShowOwnerMode(),
          render: (data, type, row, meta) => {
            let mode = data.toString(8);
            let chmodDisplay = mode.substring(mode.length - 3);
            return chmodDisplay;
          }
        }
        // mode
      ]
    });
    $("#directory-contents_filter").prepend(`<label style="margin-right: 20px" for="show-dotfiles"><input type="checkbox" id="show-dotfiles" ${this.getShowDotFiles() ? "checked" : ""}> Show Dotfiles</label>`);
    $("#directory-contents_filter").prepend(`<label style="margin-right: 14px" for="show-owner-mode"><input type="checkbox" id="show-owner-mode" ${this.getShowOwnerMode() ? "checked" : ""}> Show Owner/Mode</label>`);
    this.updateGlobus();
  }
  async reloadTable(url) {
    var request_url = url || history.state.currentDirectoryUrl;
    this.toggleSpinner();
    try {
      const response = await fetch(request_url, { headers: { "Accept": "application/json" }, cache: "no-store" });
      const data = await this.dataFromJsonResponse(response);
      history.state.currentFilenames = Array.from(data.files, (x) => x.name);
      $("#shell-wrapper").replaceWith(data.shell_dropdown_html);
      this._table.clear();
      this._table.rows.add(data.files);
      this._table.draw();
      $("#open-in-terminal-btn").attr("href", data.shell_url);
      $("#open-in-terminal-btn").removeClass("disabled");
      if ($("#select_all").is(":checked")) {
        $("#select_all").click();
      }
      let result = await Promise.resolve(data);
      $("td input[type=checkbox]").on("keypress", function(event2) {
        if (event2.which === 13) {
          this.checked = !this.checked;
          this.dispatchEvent(new Event("change"));
          if (this.checked) {
            table.getTable().row(this.closest("tr")).select();
          } else {
            table.getTable().row(this.closest("tr")).deselect();
          }
        }
      });
      this.toggleSpinner();
      return result;
    } catch (e) {
      const eventData = {
        "title": `Error occurred when attempting to access ${request_url}`,
        "message": e.message
      };
      $(CONTENTID).trigger(EVENTNAME2.showError, eventData);
      $("#open-in-terminal-btn").addClass("disabled");
      this.toggleSpinner();
    }
  }
  toggleSpinner() {
    document.querySelector(SPINNERID).classList.toggle("d-none");
    document.querySelector(CONTENTID).classList.toggle("d-none");
  }
  updateDotFileVisibility() {
    this.reloadTable();
  }
  updateGlobus() {
    if ($("#globus-link").length) {
      $("#globus-link").attr("href", getGlobusLink(history.state.currentDirectory));
      updateGlobusLink(history.state.currentDirectory, $("#globus-link"), $("#globus-wrapper"));
    }
  }
  updateShowOwnerModeVisibility() {
    let visible = this.getShowOwnerMode();
    this._table.column("owner:name").visible(visible);
    this._table.column("mode:name").visible(visible);
  }
  setShowOwnerMode(visible) {
    localStorage.setItem("show-owner-mode", new Boolean(visible));
  }
  setShowDotFiles(visible) {
    localStorage.setItem("show-dotfiles", new Boolean(visible));
  }
  getShowDotFiles() {
    return localStorage.getItem("show-dotfiles") == "true";
  }
  getShowOwnerMode() {
    return localStorage.getItem("show-owner-mode") == "true";
  }
  dataFromJsonResponse(response) {
    return new Promise((resolve, reject) => {
      Promise.resolve(response).then((response2) => response2.ok ? Promise.resolve(response2) : Promise.reject(new Error(response2.statusText))).then((response2) => response2.json()).then((data) => data.error_message ? Promise.reject(new Error(data.error_message)) : resolve(data)).catch((e) => reject(e));
    });
  }
  renderNameColumn(data, type, row, meta) {
    let element = void 0;
    if (row.type == "f" && !downloadEnabled()) {
      element = document.createElement("span");
    } else {
      element = document.createElement("a");
      element.href = row.url;
    }
    element.dataset.type = row.type;
    element.classList.add("name");
    element.textContent = data;
    return element.outerHTML;
  }
  actionsBtnTemplate(options3) {
    const rowIndex = options3.row_index;
    const file = options3.file;
    const data = options3.data;
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group", "actions-btn-group");
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("actions-btn", "btn", "btn-outline-dark", "btn-sm", "dropdown-toggle");
    button.setAttribute("data-bs-toggle", "dropdown");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    const icon = document.createElement("span");
    icon.classList.add("fa", "fa-ellipsis-v");
    button.appendChild(icon);
    btnGroup.appendChild(button);
    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("dropdown-menu");
    if (file) {
      if (data.url && downloadEnabled()) {
        const viewItem = document.createElement("li");
        const viewLink = document.createElement("a");
        viewLink.href = data.url;
        viewLink.classList.add("view-file", "dropdown-item");
        viewLink.target = "_blank";
        viewLink.setAttribute("data-row-index", rowIndex);
        viewLink.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i> View';
        viewItem.appendChild(viewLink);
        dropdownMenu.appendChild(viewItem);
      }
      if (data.edit_url) {
        const editItem = document.createElement("li");
        const editLink = document.createElement("a");
        editLink.href = data.edit_url;
        editLink.classList.add("edit-file", "dropdown-item");
        editLink.target = "_blank";
        editLink.setAttribute("data-row-index", rowIndex);
        editLink.innerHTML = '<i class="fas fa-edit" aria-hidden="true"></i> Edit';
        editItem.appendChild(editLink);
        dropdownMenu.appendChild(editItem);
      }
    }
    const renameItem = document.createElement("li");
    const renameLink = document.createElement("a");
    renameLink.href = "#";
    renameLink.classList.add("rename-file", "dropdown-item");
    renameLink.setAttribute("data-row-index", rowIndex);
    renameLink.innerHTML = '<i class="fas fa-font" aria-hidden="true"></i> Rename';
    renameItem.appendChild(renameLink);
    dropdownMenu.appendChild(renameItem);
    if (downloadEnabled() && data.download_url) {
      const downloadItem = document.createElement("li");
      const downloadLink = document.createElement("a");
      downloadLink.href = data.download_url;
      downloadLink.classList.add("download-file", "dropdown-item");
      downloadLink.setAttribute("data-row-index", rowIndex);
      downloadLink.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Download';
      downloadItem.appendChild(downloadLink);
      dropdownMenu.appendChild(downloadItem);
    }
    const dividerItem = document.createElement("li");
    dividerItem.classList.add("dropdown-divider", "mt-4");
    dropdownMenu.appendChild(dividerItem);
    const deleteItem = document.createElement("li");
    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.classList.add("delete-file", "dropdown-item", "text-danger");
    deleteLink.setAttribute("data-row-index", rowIndex);
    deleteLink.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i> Delete';
    deleteItem.appendChild(deleteLink);
    dropdownMenu.appendChild(deleteItem);
    btnGroup.appendChild(dropdownMenu);
    return btnGroup.outerHTML;
  }
  updateDatatablesStatus() {
    let api = this._table;
    let rows = api.rows({ selected: true }).flatten().length, page_info = api.page.info(), msg = page_info.recordsTotal == page_info.recordsDisplay ? `Showing ${page_info.recordsDisplay} rows` : `Showing ${page_info.recordsDisplay} of ${page_info.recordsTotal} rows`;
    $(".datatables-status").html(`${msg} - ${rows} rows selected`);
  }
  goto(url, pushState = true, show_processing_indicator = true) {
    if (url == history.state.currentDirectoryUrl)
      pushState = false;
    this.reloadTable(url).then((data) => {
      if (data) {
        $("#path-breadcrumbs").html(data.breadcrumbs_html);
        if (pushState) {
          this._table.search("").draw();
          history.pushState({
            currentDirectory: data.path,
            currentDirectoryUrl: data.url,
            currentFilesPath: data.files_path,
            currentFilesUploadPath: data.files_upload_path,
            currentFilesystem: data.filesystem,
            currentFilenames: Array.from(data.files, (x) => x.name)
          }, data.name, data.url);
        }
        this.updateGlobus();
      }
    }).finally(() => {
    });
  }
};

// app/javascript/files/clip_board.js
var import_clipboard = __toESM(require_clipboard());
var EVENTNAME4 = {
  clearClipboard: "clearClipboard",
  updateClipboard: "updateClipboard",
  updateClipboardView: "updateClipboardView"
};
jQuery(function() {
  var clipBoard = new ClipBoard();
  $("#copy-move-btn").on("click", function() {
    let table2 = $(CONTENTID).DataTable();
    let selection = table2.rows({ selected: true }).data();
    const eventData = {
      selection
    };
    $(CONTENTID).trigger(EVENTNAME4.updateClipboard, eventData);
  });
  $(CONTENTID).on("success", function(e) {
    $(e.trigger).tooltip({ title: "Copied path to clipboard!", trigger: "manual", placement: "bottom" }).tooltip("show");
    setTimeout(() => $(e.trigger).tooltip("hide"), 2e3);
    e.clearSelection();
  });
  $(CONTENTID).on("error", function(e) {
    e.clearSelection();
  });
  $(CONTENTID).on(EVENTNAME4.clearClipboard, function(e, options3) {
    clipBoard.clearClipboard();
    clipBoard.updateViewForClipboard();
  });
  $(CONTENTID).on(EVENTNAME4.updateClipboard, function(e, options3) {
    if (options3.selection.length == 0) {
      const eventData = {
        "title": "Select a file, files, or directory to copy or move.",
        "message": "You have selected none."
      };
      $(CONTENTID).trigger(EVENTNAME2.showError, eventData);
      $(CONTENTID).trigger(EVENTNAME4.clearClipboard, eventData);
    } else {
      clipBoard.updateClipboardFromSelection(options3.selection);
      clipBoard.updateViewForClipboard();
    }
  });
  $(CONTENTID).on(EVENTNAME4.updateClipboardView, function(e, options3) {
    clipBoard.updateViewForClipboard();
  });
});
var ClipBoard = class {
  _clipBoard = null;
  constructor() {
    this._clipBoard = new import_clipboard.default("#copy-path");
    this.updateViewForClipboard();
  }
  getClipBoard() {
    return this._clipBoard;
  }
  clearClipboard() {
    localStorage.removeItem("filesClipboard");
  }
  updateClipboardFromSelection(selection) {
    if (selection.length == 0) {
      this.clearClipboard();
    } else {
      let clipboardData = {
        from: history.state.currentDirectory,
        from_fs: history.state.currentFilesystem,
        files: selection.toArray().map((f) => {
          return { directory: f.type == "d", name: f.name };
        })
      };
      localStorage.setItem("filesClipboard", JSON.stringify(clipboardData));
    }
  }
  updateViewForClipboard() {
    let clipboard = JSON.parse(localStorage.getItem("filesClipboard") || "{}");
    const clipboardContainer = document.getElementById("clipboard");
    clipboardContainer.innerHTML = "";
    if (clipboard.files && clipboard.files.length > 0) {
      const card = document.createElement("div");
      card.className = "card mb-3";
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      const closeButton2 = document.createElement("button");
      closeButton2.id = "clipboard-clear";
      closeButton2.type = "button";
      closeButton2.className = "btn-close";
      closeButton2.setAttribute("data-bs-dismiss", "alert");
      closeButton2.setAttribute("aria-label", "Close");
      cardBody.appendChild(closeButton2);
      const description = document.createElement("p");
      description.className = "mt-4";
      description.innerHTML = `Copy or move the files below from <code>${clipboard.from}</code> to the current directory:`;
      cardBody.appendChild(description);
      card.appendChild(cardBody);
      const listGroup = document.createElement("ul");
      listGroup.className = "list-group list-group-flush";
      clipboard.files.forEach((file) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        const icon = document.createElement("span");
        icon.title = file.directory ? "directory" : "file";
        icon.className = file.directory ? "fa fa-folder color-gold" : "fa fa-file color-lightgrey";
        listItem.appendChild(icon);
        const fileName = document.createTextNode(` ${file.name}`);
        listItem.appendChild(fileName);
        listGroup.appendChild(listItem);
      });
      card.appendChild(listGroup);
      const actionsBody = document.createElement("div");
      actionsBody.className = "card-body";
      const copyButton = document.createElement("button");
      copyButton.id = "clipboard-copy-to-dir";
      copyButton.className = "btn btn-primary";
      copyButton.textContent = "Copy";
      actionsBody.appendChild(copyButton);
      const moveButton = document.createElement("button");
      moveButton.id = "clipboard-move-to-dir";
      moveButton.className = "btn btn-danger float-end";
      moveButton.textContent = "Move";
      actionsBody.appendChild(moveButton);
      card.appendChild(actionsBody);
      clipboardContainer.appendChild(card);
      this.addClipboardEventListeners();
    }
  }
  addClipboardEventListeners() {
    const clearButton = document.getElementById("clipboard-clear");
    if (clearButton) {
      clearButton.addEventListener("click", () => {
        this.clearClipboard();
        this.updateViewForClipboard();
      });
    }
    const moveButton = document.getElementById("clipboard-move-to-dir");
    if (moveButton) {
      moveButton.addEventListener("click", () => {
        const clipboard = JSON.parse(localStorage.getItem("filesClipboard") || "null");
        if (clipboard) {
          clipboard.to = history.state.currentDirectory;
          clipboard.to_fs = history.state.currentFilesystem;
          if (clipboard.from === clipboard.to) {
            this.clearClipboard();
            this.updateViewForClipboard();
          } else {
            const files = {};
            clipboard.files.forEach((file) => {
              files[`${clipboard.from}/${file.name}`] = `${history.state.currentDirectory}/${file.name}`;
            });
            const eventData = {
              files,
              token: csrfToken(),
              from_fs: clipboard.from_fs,
              to_fs: clipboard.to_fs
            };
            $(CONTENTID).trigger(EVENTNAME3.moveFile, eventData);
          }
        } else {
          console.error("Files clipboard is empty");
        }
      });
    }
    const copyButton = document.getElementById("clipboard-copy-to-dir");
    if (copyButton) {
      copyButton.addEventListener("click", () => {
        const clipboard = JSON.parse(localStorage.getItem("filesClipboard") || "null");
        if (clipboard) {
          clipboard.to = history.state.currentDirectory;
          clipboard.to_fs = history.state.currentFilesystem;
          const files = {};
          clipboard.files.forEach((file) => {
            files[`${clipboard.from}/${file.name}`] = `${clipboard.to}/${file.name}`;
          });
          const eventData = {
            files,
            token: csrfToken(),
            from_fs: clipboard.from_fs,
            to_fs: clipboard.to_fs
          };
          $(CONTENTID).trigger(EVENTNAME3.copyFile, eventData);
        } else {
          console.error("Files clipboard is empty");
        }
      });
    }
  }
};

// app/javascript/files/file_ops.js
var import_lodash = __toESM(require_lodash());
var EVENTNAME3 = {
  changeDirectory: "changeDirectory",
  changeDirectoryPrompt: "changeDirectoryPrompt",
  copyFile: "copyFile",
  createFile: "createFile",
  createDirectory: "createDirectory",
  deleteFile: "deleteFile",
  deletePrompt: "deletePrompt",
  download: "download",
  moveFile: "moveFile",
  newFile: "newFile",
  newFilePrompt: "newFilePrompt",
  newDirectoryPrompt: "newDirectoryPrompt",
  newDirectory: "newDirectory",
  renameFile: "renameFile",
  renameFilePrompt: "renameFilePrompt"
};
var fileOps = null;
jQuery(function() {
  fileOps = new FileOps();
  $("#directory-contents tbody, #path-breadcrumbs, #favorites").on("click", "a.d", function(event2) {
    if (fileOps.clickEventIsSignificant(event2)) {
      event2.preventDefault();
      event2.cancelBubble = true;
      if (event2.stopPropagation) event2.stopPropagation();
      const eventData = {
        "path": this.getAttribute("href")
      };
      $(CONTENTID).trigger(EVENTNAME.goto, eventData);
    }
  });
  $("#directory-contents tbody").on("click", "tr td:first-child input[type=checkbox]", function(e) {
    if (this.dataset["dlUrl"] == "undefined" && this.checked) {
      $("#download-btn").attr("disabled", true);
    } else if ($("input[data-dl-url='undefined']:checked").length == 0) {
      $("#download-btn").attr("disabled", false);
    }
  });
  $("#directory-contents tbody").on("dblclick", "tr td:not(:first-child)", function() {
    let a = this.parentElement.querySelector("a");
    if (a.classList.contains("d")) {
      const eventData = {
        "path": a.getAttribute("href")
      };
      $(CONTENTID).trigger(EVENTNAME.goto, eventData);
    }
  });
  $("#directory-contents tbody").on("click", ".download-file", function(e) {
    e.preventDefault();
    const table2 = $(CONTENTID).DataTable();
    const row = e.currentTarget.dataset.rowIndex;
    const eventData = {
      selection: table2.rows(row).data()
    };
    $(CONTENTID).trigger(EVENTNAME3.download, eventData);
  });
  $("#refresh-btn").on("click", function() {
    $(CONTENTID).trigger(EVENTNAME.reloadTable);
  });
  $("#new-file-btn").on("click", function() {
    $(CONTENTID).trigger(EVENTNAME3.newFilePrompt);
  });
  $("#new-dir-btn").on("click", function() {
    $(CONTENTID).trigger(EVENTNAME3.newDirectoryPrompt);
  });
  $("#download-btn").on("click", function() {
    let table2 = $(CONTENTID).DataTable();
    let selection = table2.rows({ selected: true }).data();
    const eventData = {
      selection
    };
    $(CONTENTID).trigger(EVENTNAME3.download, eventData);
  });
  $("#delete-btn").on("click", function() {
    let table2 = $(CONTENTID).DataTable();
    let files = table2.rows({ selected: true }).data().toArray().map((f) => f.name);
    const eventData = {
      files
    };
    $(CONTENTID).trigger(EVENTNAME3.deletePrompt, eventData);
  });
  $(document).on("click", "#goto-btn", function() {
    $(CONTENTID).trigger(EVENTNAME3.changeDirectoryPrompt);
  });
  $(document).on("click", ".rename-file", function(e) {
    e.preventDefault();
    let table2 = $(CONTENTID).DataTable();
    let rowId = e.currentTarget.dataset.rowIndex;
    let row = table2.row(rowId).data();
    let fileName = $($.parseHTML(row.name)).text();
    const eventData = {
      file: fileName
    };
    $(CONTENTID).trigger(EVENTNAME3.renameFilePrompt, eventData);
  });
  $(document).on("click", ".delete-file", function(e) {
    e.preventDefault();
    let table2 = $(CONTENTID).DataTable();
    let rowId = e.currentTarget.dataset.rowIndex;
    let row = table2.row(rowId).data();
    let fileName = $($.parseHTML(row.name)).text();
    const eventData = {
      files: [fileName]
    };
    $(CONTENTID).trigger(EVENTNAME3.deletePrompt, eventData);
  });
  $(CONTENTID).on(EVENTNAME3.newFilePrompt, function() {
    fileOps.newFilePrompt();
  });
  $(CONTENTID).on(EVENTNAME3.newDirectoryPrompt, function() {
    fileOps.newDirectoryPrompt();
  });
  $(CONTENTID).on(EVENTNAME3.renameFilePrompt, function(e, options3) {
    fileOps.renameFilePrompt(options3.file);
  });
  $(CONTENTID).on(EVENTNAME3.renameFile, function(e, options3) {
    fileOps.renameFile(options3.files, options3.result.value);
  });
  $(CONTENTID).on(EVENTNAME3.createFile, function(e, options3) {
    fileOps.newFile(options3.result.value);
  });
  $(CONTENTID).on(EVENTNAME3.createDirectory, function(e, options3) {
    fileOps.newDirectory(options3.result.value);
  });
  $(CONTENTID).on(EVENTNAME3.download, function(e, options3) {
    if (options3.selection.length == 0) {
      const eventData = {
        "title": "Select a file, files, or directory to download",
        "message": "You have selected none."
      };
      $(CONTENTID).trigger(EVENTNAME2.showError, eventData);
    } else {
      fileOps.download(options3.selection);
    }
  });
  $(CONTENTID).on(EVENTNAME3.deletePrompt, function(e, options3) {
    if (options3.files.length == 0) {
      const eventData = {
        "title": "Select a file, files, or directory to delete.",
        "message": "You have selected none."
      };
      $(CONTENTID).trigger(EVENTNAME2.showError, eventData);
    } else {
      fileOps.deletePrompt(options3.files);
    }
  });
  $(CONTENTID).on(EVENTNAME3.deleteFile, function(e, options3) {
    fileOps.delete(options3.files, options3.from_fs);
  });
  $(CONTENTID).on(EVENTNAME3.moveFile, function(e, options3) {
    fileOps.move(options3.files, options3.token, options3.from_fs, options3.to_fs);
  });
  $(CONTENTID).on(EVENTNAME3.copyFile, function(e, options3) {
    fileOps.copy(options3.files, options3.token, options3.from_fs, options3.to_fs);
  });
  $(CONTENTID).on(EVENTNAME3.changeDirectoryPrompt, function() {
    fileOps.changeDirectoryPrompt();
  });
  $(CONTENTID).on(EVENTNAME3.changeDirectory, function(e, options3) {
    fileOps.changeDirectory(options3.result.value);
  });
});
var FileOps = class _FileOps {
  _timeout = 2e3;
  _failures = 0;
  // this seems to not be used anywhere?
  _filesPath = history.state.currentFilesPath;
  constructor() {
  }
  clickEventIsSignificant(event2) {
    return !// (event.target && (event.target as any).isContentEditable)
    (event2.defaultPrevented || event2.which > 1 || event2.altKey || event2.ctrlKey || event2.metaKey || event2.shiftKey);
  }
  changeDirectory(path) {
    const eventData = {
      "path": history.state.currentFilesPath + path
    };
    $(CONTENTID).trigger(EVENTNAME.goto, eventData);
  }
  changeDirectoryPrompt() {
    const eventData = {
      action: "changeDirectory",
      "inputOptions": {
        title: "Change Directory",
        input: "text",
        inputLabel: "Path",
        inputValue: history.state.currentDirectory,
        inputAttributes: {
          spellcheck: "false"
        },
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value || !value.startsWith("/")) {
            return "Provide an absolute pathname";
          }
        }
      }
    };
    $(CONTENTID).trigger(EVENTNAME2.showInput, eventData);
  }
  deletePrompt(files) {
    const eventData = {
      action: EVENTNAME3.deleteFile,
      files,
      "inputOptions": {
        title: files.length == 1 ? `Delete ${files[0]}?` : `Delete ${files.length} selected files?`,
        text: "Are you sure you want to delete the files: " + files.join(", "),
        showCancelButton: true
      }
    };
    $(CONTENTID).trigger(EVENTNAME2.showInput, eventData);
  }
  removeFiles(files) {
    this.transferFiles(files, "rm", "remove files", history.state.currentFilesystem);
  }
  renameFile(fileName, newFileName) {
    let files = {};
    files[`${history.state.currentDirectory}/${fileName}`] = `${history.state.currentDirectory}/${newFileName}`;
    this.transferFiles(files, "mv", "rename file", history.state.currentFilesystem, history.state.currentFilesystem);
  }
  renameFilePrompt(fileName) {
    const eventData = {
      action: EVENTNAME3.renameFile,
      files: fileName,
      "inputOptions": {
        title: "Rename",
        input: "text",
        inputLabel: "Filename",
        inputValue: fileName,
        inputAttributes: {
          spellcheck: "false"
        },
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Provide a filename to rename this to";
          } else if (value.includes("/") || value.includes("..")) {
            return "Filename cannot include / or ..";
          }
        }
      }
    };
    $(CONTENTID).trigger(EVENTNAME2.showInput, eventData);
  }
  newFilePrompt() {
    const eventData = {
      action: EVENTNAME3.createFile,
      "inputOptions": {
        title: "New File",
        input: "text",
        inputLabel: "Filename",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Provide a non-empty filename.";
          } else if (value.includes("/")) {
            return "Illegal character (/) not allowed in filename.";
          }
        }
      }
    };
    $(CONTENTID).trigger(EVENTNAME2.showInput, eventData);
  }
  newFile(filename) {
    let myFileOp = new _FileOps();
    fetch(`${history.state.currentDirectoryUrl}/${encodeURI(filename)}?touch=true`, { method: "put", headers: { "X-CSRF-Token": csrfToken() } }).then((response) => this.dataFromJsonResponse(response)).then(function() {
      myFileOp.reloadTable();
    }).catch(function(e) {
      myFileOp.alertError("Error occurred when attempting to create new file", e.message);
    });
  }
  newDirectoryPrompt() {
    const eventData = {
      action: EVENTNAME3.createDirectory,
      "inputOptions": {
        title: "New Directory",
        input: "text",
        inputLabel: "Directory name",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value || value.includes("/")) {
            return "Provide a directory name that does not have / in it";
          }
        }
      }
    };
    $(CONTENTID).trigger(EVENTNAME2.showInput, eventData);
  }
  newDirectory(filename) {
    let myFileOp = new _FileOps();
    fetch(`${history.state.currentDirectoryUrl}/${encodeURI(filename)}?dir=true`, { method: "put", headers: { "X-CSRF-Token": csrfToken() } }).then((response) => this.dataFromJsonResponse(response)).then(function() {
      myFileOp.reloadTable();
    }).catch(function(e) {
      myFileOp.alertError("Error occurred when attempting to create new directory", e.message);
    });
  }
  download(selection) {
    selection.toArray().forEach((f) => {
      if (f.type == "d") {
        this.downloadDirectory(f);
      } else if (f.type == "f") {
        this.downloadFile(f);
      }
    });
  }
  downloadDirectory(file) {
    let filename = $($.parseHTML(file.name)).text(), canDownloadReq = `${history.state.currentDirectoryUrl}/${encodeURI(filename)}?can_download=${Date.now().toString()}`;
    this.showSwalLoading("preparing to download directory: " + file.name);
    fetch(canDownloadReq, {
      method: "GET",
      headers: {
        "X-CSRF-Token": csrfToken(),
        "Accept": "application/json"
      }
    }).then((response) => this.dataFromJsonResponse(response)).then((data) => {
      if (data.can_download) {
        this.doneLoading();
        this.downloadFile(file);
      } else {
        this.doneLoading();
        this.alertError("Error while downloading", data.error_message);
      }
    }).catch((e) => {
      this.doneLoading();
      this.alertError("Error while downloading", e.message);
    });
  }
  downloadFile(file) {
    let filename = $($.parseHTML(file.name)).text(), downloadUrl = `${history.state.currentDirectoryUrl}/${encodeURI(filename)}?download=${Date.now().toString()}`, iframe = document.createElement("iframe"), TIME = 30 * 1e3;
    iframe.setAttribute("class", "d-none");
    iframe.setAttribute("src", downloadUrl);
    document.body.appendChild(iframe);
    setTimeout(function() {
      document.body.removeChild(iframe);
    }, TIME);
  }
  dataFromJsonResponse(response) {
    return new Promise((resolve, reject) => {
      Promise.resolve(response).then((response2) => response2.ok ? Promise.resolve(response2) : Promise.reject(new Error(response2.statusText))).then((response2) => response2.json()).then((data) => data.error_message ? Promise.reject(new Error(data.error_message)) : resolve(data)).catch((e) => reject(e));
    });
  }
  delete(files) {
    this.showSwalLoading("Deleting files...: ");
    this.removeFiles(files.map((f) => [history.state.currentDirectory, f].join("/")), csrfToken());
  }
  transferFiles(files, action, summary, from_fs, to_fs) {
    this._failures = 0;
    this.showSwalLoading(import_lodash.default.startCase(summary));
    return fetch(transfersPath(), {
      method: "post",
      body: JSON.stringify({
        command: action,
        files,
        from_fs,
        to_fs
      }),
      headers: { "X-CSRF-Token": csrfToken() }
    }).then((response) => this.dataFromJsonResponse(response)).then((data) => {
      if (!data.completed) {
        this.reportTransfer(data);
        this.findAndUpdateTransferStatus(data);
      } else {
      }
      if (action == "mv" || action == "cp") {
        this.reloadTable();
        this.clearClipboard();
        this.updateClipboard();
      }
      this.fadeOutTransferStatus(data);
      this.doneLoading();
      this.reloadTable();
    }).then(() => this.doneLoading()).catch((e) => {
      this.doneLoading();
      this.alertError("Error occurred when attempting to " + summary, e.message);
    });
  }
  findAndUpdateTransferStatus(data) {
    let id12 = `#${data.id}`;
    if ($(id12).length) {
      $(id12).replaceWith(this.reportTransferTemplate(data));
    } else {
      $(".transfers-status").append(this.reportTransferTemplate(data));
    }
  }
  fadeOutTransferStatus(data) {
    let id12 = `#${data.id}`;
    $(id12).fadeOut(4e3);
  }
  reportTransferTemplate(data) {
    let html = "";
    if (data.completed) {
      if (data.error_summary) {
        html += `
          <div id="${data.id}" class="alert alert-danger alert-dismissible fade show" role="alert">
            <b><i class="fas fa-exclamation-triangle"></i> ${data.error_summary}</b>
            <button class="btn btn-outline-dark btn-sm ms-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${data.id}-error-report" aria-expanded="false" aria-controls="${data.id}-error-report">See details</button>
            <div id="${data.id}-error-report" class="collapse">
              <div class="mt-3 card">
                <pre class="card-body">${data.error_message}</pre>
              </div>
             </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      } else {
        html += `
          <span class="text-${data.bootstrap_class}" id="${data.id}">
            <b><i class="fas ${data.fa_label}"></i> ${data.summary}</b>
          </span>
        `;
      }
    } else {
      html += `
        <span class="text-${data.bootstrap_class}" id="${data.id}">
          <b><i class="fas ${data.fa_label}"></i> ${data.summary}</b>
        </span>
      `;
    }
    return html;
  }
  poll(data) {
    let that = this;
    $.getJSON(data.show_json_url, function(newdata) {
      that.findAndUpdateTransferStatus(newdata);
      if (newdata.completed) {
        if (!newdata.error_message) {
          if (newdata.target_dir == history.state.currentDirectory) {
            that.reloadTable();
          }
          that.fadeOutTransferStatus(newdata);
        }
      } else {
        setTimeout(function() {
          that.poll(data);
        }, that._timeout);
      }
    }).fail(function() {
      if (that._failures >= 3) {
        that.alertError("Operation may not have happened", "Failed to retrieve file operation status.");
      } else {
        setTimeout(function() {
          that._failures++;
          that.poll(data);
        }, that._timeout);
      }
    });
  }
  reportTransfer(data) {
    this.findAndUpdateTransferStatus(data);
    this.poll(data);
  }
  move(files, token, from_fs, to_fs) {
    this.transferFiles(files, "mv", "move files", from_fs, to_fs);
  }
  copy(files, token, from_fs, to_fs) {
    this.transferFiles(files, "cp", "copy files", from_fs, to_fs);
  }
  alertError(title, message) {
    const eventData = {
      "title": title,
      "message": message
    };
    $(CONTENTID).trigger(EVENTNAME2.showError, eventData);
  }
  doneLoading() {
    $(CONTENTID).trigger(EVENTNAME2.closeSwal);
  }
  clearClipboard() {
    $(CONTENTID).trigger(EVENTNAME4.clearClipboard);
  }
  reloadTable(url) {
    const eventData = {
      "url": url
    };
    $(CONTENTID).trigger(EVENTNAME.reloadTable, eventData);
  }
  showSwalLoading(message) {
    const eventData = {
      "message": message
    };
    $(CONTENTID).trigger(EVENTNAME2.showLoading, eventData);
  }
  updateClipboard() {
    $(CONTENTID).trigger(EVENTNAME4.updateClipboardView);
  }
};

// app/javascript/files/uppy_ops.js
var uppy = null;
jQuery(function() {
  class EmptyDirCreator extends BasePlugin {
    constructor(uppy2, opts) {
      super(uppy2, opts);
      this.id = this.opts.id || "EmptyDirUploaderCatcher";
      this.type = "acquirer";
      this.empty_dirs = [];
      this.last_entries = [];
      this.handleRootDrop = this.handleRootDrop.bind(this);
      this.createEmptyDirs = this.createEmptyDirs.bind(this);
      this.uppy = uppy2;
    }
    handleRootDrop(e) {
      if (e.dataTransfer.items && e.dataTransfer.items[0] && "webkitGetAsEntry" in e.dataTransfer.items[0]) {
        let items = Array.prototype.slice.call(e.dataTransfer.items || [], 0);
        let entries = items.map((i) => i.webkitGetAsEntry()).filter((i) => i);
        return Promise.all(entries.map((i) => getEmptyDirs(i))).then((dirs) => {
          this.empty_dirs = this.empty_dirs.concat(import_lodash2.default.flattenDeep(dirs));
        });
      }
    }
    createEmptyDirs(ids) {
      if (!this.uppy.getState().error) {
        return Promise.all(this.empty_dirs.map((d) => {
          let filename = import_lodash2.default.trimStart(d.fullPath, "/");
          return fetch(`${history.state.currentDirectoryUrl}/${encodeURI(filename)}?dir=true`, { method: "put", headers: { "X-CSRF-Token": csrfToken() } });
        })).then(() => this.empty_dirs = []);
      }
    }
    mount(target, plugin) {
      return true;
    }
    unmount() {
      return true;
    }
    install() {
      this.uppy.addPostProcessor(this.createEmptyDirs);
    }
    uninstall() {
      this.uppy.removePostProcessor(this.createEmptyDirs);
    }
  }
  uppy = new Uppy_default({
    restrictions: {
      maxFileSize: maxFileSize()
    },
    onBeforeUpload: updateEndpoint,
    locale: uppyLocale()
  });
  uppy.use(EmptyDirCreator);
  uppy.use(Dashboard2, {
    trigger: "#upload-btn",
    fileManagerSelectionType: "both",
    disableThumbnailGenerator: true,
    showLinkToFileUploadResult: false,
    closeModalOnClickOutside: true,
    closeAfterFinish: true,
    allowMultipleUploads: false,
    onRequestCloseModal: () => closeAndResetUppyModal(uppy),
    note: "Empty directories will be included in the upload only when a directory upload is initiated via drag and drop. This is because the File and Directory Entries API is available only on a drop event, not during an input change event."
  });
  uppy.use(XHRUpload, {
    withCredentials: true,
    fieldName: "file",
    limit: 1,
    headers: { "X-CSRF-Token": csrfToken() },
    timeout: 128 * 1e3
  });
  uppy.on("file-added", (file) => {
    uppy.setFileMeta(file.id, { parent: history.state.currentDirectory });
    if (file.meta.relativePath == null && file.data.webkitRelativePath) {
      uppy.setFileMeta(file.id, { relativePath: file.data.webkitRelativePath });
    }
  });
  uppy.on("complete", (result) => {
    if (result.successful.length > 0) {
      result.successful.forEach(handleUploadSuccess);
      reloadTable();
    }
  });
  window.addEventListener("dragover", function(e) {
    e = e || event;
    e.preventDefault();
  }, false);
  window.addEventListener("drop", function(e) {
    e = e || event;
    e.preventDefault();
  }, false);
  $("#directory-contents").on("drop", function(e) {
    this.classList.remove("dragover");
    uppy.getPlugin("Dashboard").openModal().then(() => uppy.getPlugin("Dashboard").handleDrop(e.originalEvent));
  });
  $("#directory-contents").on("dragover", function(e) {
    this.classList.add("dragover");
    e.preventDefault();
    e.originalEvent.dataTransfer.dropEffect = "copy";
  });
  $("#directory-contents").on("dragleave", function(e) {
    this.classList.remove("dragover");
  });
});
function closeAndResetUppyModal(uppy2) {
  uppy2.getPlugin("Dashboard").closeModal();
  uppy2.getFiles().forEach((file) => {
    uppy2.removeFile(file.id);
  });
}
function getEmptyDirs(entry) {
  return new Promise((resolve) => {
    if (entry.isFile) {
      resolve([]);
    } else {
      let getFilesAndDirectoriesFromDirectory2 = (entry.createReader(), [], function(error) {
        console.error(error);
      }, {
        onSuccess: (entries) => {
          if (entries.length == 0) {
            resolve([entry]);
          } else {
            Promise.all(entries.map((e) => getEmptyDirs(e))).then((dirs) => resolve(import_lodash2.default.flattenDeep(dirs)));
          }
        }
      });
    }
  });
}
function updateEndpoint() {
  uppy.getPlugin("XHRUpload").setOptions({
    endpoint: history.state.currentFilesUploadPath
  });
}
function reloadTable() {
  $(CONTENTID).trigger(EVENTNAME.reloadTable, {});
}
function handleUploadSuccess(result) {
  const body = result?.response?.body;
  if (!body || !(typeof body === "object" && !Array.isArray(body) && body !== null)) {
    return;
  }
  if (Object.keys(body).length > 0 && !body.completed) {
    fileOps.reportTransfer(body);
  }
}
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@uppy/utils/lib/Translator.js:
  (**
   * Takes a string with placeholder variables like `%{smart_count} file selected`
   * and replaces it with values from options `{smart_count: 5}`
   *
   * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
   * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
   *
   * @param phrase that needs interpolation, with placeholders
   * @param options with values that will be used to replace placeholders
   *)
*/
//# sourceMappingURL=/assets/files/uppy_ops.js-787a8b60bbb4204280774a7b8d52f4c2d6534fbc97b5428bfab4780012dbad68.map
//!
;
