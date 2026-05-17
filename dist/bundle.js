(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __reflectGet = Reflect.get;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __asyncGenerator = (__this, __arguments, generator) => {
    var resume = (k2, v2, yes, no) => {
      try {
        var x2 = generator[k2](v2), isAwait = (v2 = x2.value) instanceof __await, done = x2.done;
        Promise.resolve(isAwait ? v2[0] : v2).then((y2) => isAwait ? resume(k2 === "return" ? k2 : "next", v2[1] ? { done: y2.done, value: y2.value } : y2, yes, no) : yes({ value: y2, done })).catch((e2) => resume("throw", e2, yes, no));
      } catch (e2) {
        no(e2);
      }
    }, method = (k2, call, wait, clear) => it[k2] = (x2) => (call = new Promise((yes, no, run) => (run = () => resume(k2, x2, yes, no), q2 ? q2.then(run) : run())), clear = () => q2 === wait && (q2 = 0), q2 = wait = call.then(clear, clear), call), q2, it = {};
    return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k2) => it[k2] = (x2) => obj[k2](x2);
    } else {
      obj = obj.call(value);
      method = (k2) => it[k2] = (v2) => {
        if (isAwait) {
          isAwait = false;
          if (k2 === "throw") throw v2;
          return v2;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x2 = obj[k2](v2);
            if (!(x2 instanceof Object)) __typeError("Object expected");
            resolve(x2);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x2) => {
      throw x2;
    }, "return" in obj && method("return"), it;
  };
  var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i2 = 0, len = code.length; i2 < len; ++i2) {
        lookup[i2] = code[i2];
        revLookup[code.charCodeAt(i2)] = i2;
      }
      var i2;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i3;
        for (i3 = 0; i3 < len2; i3 += 4) {
          tmp = revLookup[b64.charCodeAt(i3)] << 18 | revLookup[b64.charCodeAt(i3 + 1)] << 12 | revLookup[b64.charCodeAt(i3 + 2)] << 6 | revLookup[b64.charCodeAt(i3 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i3)] << 2 | revLookup[b64.charCodeAt(i3 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i3)] << 10 | revLookup[b64.charCodeAt(i3 + 1)] << 4 | revLookup[b64.charCodeAt(i3 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i3 = start; i3 < end; i3 += 3) {
          tmp = (uint8[i3] << 16 & 16711680) + (uint8[i3 + 1] << 8 & 65280) + (uint8[i3 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i3 = 0, len22 = len2 - extraBytes; i3 < len22; i3 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len22 ? len22 : i3 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e2, m2;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i2 = isLE ? nBytes - 1 : 0;
        var d2 = isLE ? -1 : 1;
        var s2 = buffer[offset + i2];
        i2 += d2;
        e2 = s2 & (1 << -nBits) - 1;
        s2 >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e2 = e2 * 256 + buffer[offset + i2], i2 += d2, nBits -= 8) {
        }
        m2 = e2 & (1 << -nBits) - 1;
        e2 >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m2 = m2 * 256 + buffer[offset + i2], i2 += d2, nBits -= 8) {
        }
        if (e2 === 0) {
          e2 = 1 - eBias;
        } else if (e2 === eMax) {
          return m2 ? NaN : (s2 ? -1 : 1) * Infinity;
        } else {
          m2 = m2 + Math.pow(2, mLen);
          e2 = e2 - eBias;
        }
        return (s2 ? -1 : 1) * m2 * Math.pow(2, e2 - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e2, m2, c2;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i2 = isLE ? 0 : nBytes - 1;
        var d2 = isLE ? 1 : -1;
        var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m2 = isNaN(value) ? 1 : 0;
          e2 = eMax;
        } else {
          e2 = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c2 = Math.pow(2, -e2)) < 1) {
            e2--;
            c2 *= 2;
          }
          if (e2 + eBias >= 1) {
            value += rt / c2;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c2 >= 2) {
            e2++;
            c2 /= 2;
          }
          if (e2 + eBias >= eMax) {
            m2 = 0;
            e2 = eMax;
          } else if (e2 + eBias >= 1) {
            m2 = (value * c2 - 1) * Math.pow(2, mLen);
            e2 = e2 + eBias;
          } else {
            m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e2 = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i2] = m2 & 255, i2 += d2, m2 /= 256, mLen -= 8) {
        }
        e2 = e2 << mLen | m2;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i2] = e2 & 255, i2 += d2, e2 /= 256, eLen -= 8) {
        }
        buffer[offset + i2 - d2] |= s2 * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer3;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e2) {
          return false;
        }
      }
      Object.defineProperty(Buffer3.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer3.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function Buffer3(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer3.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer3.from(valueOf, encodingOrOffset, length);
        }
        const b2 = fromObject(value);
        if (b2) return b2;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer3.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer3, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer3.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer3.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer3.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i2 = 0; i2 < length; i2 += 1) {
          buf[i2] = array[i2] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer3.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer3.alloc(+length);
      }
      Buffer3.isBuffer = function isBuffer(b2) {
        return b2 != null && b2._isBuffer === true && b2 !== Buffer3.prototype;
      };
      Buffer3.compare = function compare(a2, b2) {
        if (isInstance(a2, Uint8Array)) a2 = Buffer3.from(a2, a2.offset, a2.byteLength);
        if (isInstance(b2, Uint8Array)) b2 = Buffer3.from(b2, b2.offset, b2.byteLength);
        if (!Buffer3.isBuffer(a2) || !Buffer3.isBuffer(b2)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a2 === b2) return 0;
        let x2 = a2.length;
        let y2 = b2.length;
        for (let i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
          if (a2[i2] !== b2[i2]) {
            x2 = a2[i2];
            y2 = b2[i2];
            break;
          }
        }
        if (x2 < y2) return -1;
        if (y2 < x2) return 1;
        return 0;
      };
      Buffer3.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer3.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer3.alloc(0);
        }
        let i2;
        if (length === void 0) {
          length = 0;
          for (i2 = 0; i2 < list.length; ++i2) {
            length += list[i2].length;
          }
        }
        const buffer = Buffer3.allocUnsafe(length);
        let pos = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          let buf = list[i2];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer3.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer3.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding) encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.prototype._isBuffer = true;
      function swap(b2, n2, m2) {
        const i2 = b2[n2];
        b2[n2] = b2[m2];
        b2[m2] = i2;
      }
      Buffer3.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i2 = 0; i2 < len; i2 += 2) {
          swap(this, i2, i2 + 1);
        }
        return this;
      };
      Buffer3.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i2 = 0; i2 < len; i2 += 4) {
          swap(this, i2, i2 + 3);
          swap(this, i2 + 1, i2 + 2);
        }
        return this;
      };
      Buffer3.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i2 = 0; i2 < len; i2 += 8) {
          swap(this, i2, i2 + 7);
          swap(this, i2 + 1, i2 + 6);
          swap(this, i2 + 2, i2 + 5);
          swap(this, i2 + 3, i2 + 4);
        }
        return this;
      };
      Buffer3.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
      Buffer3.prototype.equals = function equals(b2) {
        if (!Buffer3.isBuffer(b2)) throw new TypeError("Argument must be a Buffer");
        if (this === b2) return true;
        return Buffer3.compare(this, b2) === 0;
      };
      Buffer3.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
      }
      Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer3.from(target, target.offset, target.byteLength);
        }
        if (!Buffer3.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x2 = thisEnd - thisStart;
        let y2 = end - start;
        const len = Math.min(x2, y2);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i2 = 0; i2 < len; ++i2) {
          if (thisCopy[i2] !== targetCopy[i2]) {
            x2 = thisCopy[i2];
            y2 = targetCopy[i2];
            break;
          }
        }
        if (x2 < y2) return -1;
        if (y2 < x2) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0) return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;
          else return -1;
        }
        if (typeof val === "string") {
          val = Buffer3.from(val, encoding);
        }
        if (Buffer3.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i3) {
          if (indexSize === 1) {
            return buf[i3];
          } else {
            return buf.readUInt16BE(i3 * indexSize);
          }
        }
        let i2;
        if (dir) {
          let foundIndex = -1;
          for (i2 = byteOffset; i2 < arrLength; i2++) {
            if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
              if (foundIndex === -1) foundIndex = i2;
              if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i2 -= i2 - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i2 = byteOffset; i2 >= 0; i2--) {
            let found = true;
            for (let j2 = 0; j2 < valLength; j2++) {
              if (read(arr, i2 + j2) !== read(val, j2)) {
                found = false;
                break;
              }
            }
            if (found) return i2;
          }
        }
        return -1;
      }
      Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i2;
        for (i2 = 0; i2 < length; ++i2) {
          const parsed = parseInt(string.substr(i2 * 2, 2), 16);
          if (numberIsNaN(parsed)) return i2;
          buf[offset + i2] = parsed;
        }
        return i2;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer3.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0) encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer3.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i2 = start;
        while (i2 < end) {
          const firstByte = buf[i2];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i2 + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i2 + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i2 + 1];
                thirdByte = buf[i2 + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i2 + 1];
                thirdByte = buf[i2 + 2];
                fourthByte = buf[i2 + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i2 += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i2 = 0;
        while (i2 < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i2 = start; i2 < end; ++i2) {
          ret += String.fromCharCode(buf[i2] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i2 = start; i2 < end; ++i2) {
          ret += String.fromCharCode(buf[i2]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for (let i2 = start; i2 < end; ++i2) {
          out += hexSliceLookupTable[buf[i2]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
          res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
        }
        return res;
      }
      Buffer3.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer3.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i2 = 0;
        while (++i2 < byteLength2 && (mul *= 256)) {
          val += this[offset + i2] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 24);
        const hi = this[++offset] + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + last * __pow(2, 24);
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + this[++offset];
        const lo = this[++offset] * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i2 = 0;
        while (++i2 < byteLength2 && (mul *= 256)) {
          val += this[offset + i2] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let i2 = byteLength2;
        let mul = 1;
        let val = this[offset + --i2];
        while (i2 > 0 && (mul *= 256)) {
          val += this[offset + --i2] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * __pow(2, 8) + this[offset + 6] * __pow(2, 16) + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 24));
      });
      Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + last);
      });
      Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i2 = 0;
        this[offset] = value & 255;
        while (++i2 < byteLength2 && (mul *= 256)) {
          this[offset + i2] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i2 = byteLength2 - 1;
        let mul = 1;
        this[offset + i2] = value & 255;
        while (--i2 >= 0 && (mul *= 256)) {
          this[offset + i2] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i2 = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i2 < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
            sub = 1;
          }
          this[offset + i2] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i2 = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i2] = value & 255;
        while (--i2 >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
            sub = 1;
          }
          this[offset + i2] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer3.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val) val = 0;
        let i2;
        if (typeof val === "number") {
          for (i2 = start; i2 < end; ++i2) {
            this[i2] = val;
          }
        } else {
          const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i2 = 0; i2 < end - start; ++i2) {
            this[i2 + start] = bytes[i2 % len];
          }
        }
        return this;
      };
      var errors = {};
      function E2(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E2(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E2(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E2(
        "ERR_OUT_OF_RANGE",
        function(str, range2, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > __pow(2, 32)) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > __pow(BigInt(2), BigInt(32)) || input < -__pow(BigInt(2), BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range2}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i2 = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i2 >= start + 4; i2 -= 3) {
          res = `_${val.slice(i2 - 3, i2)}${res}`;
        }
        return `${val.slice(0, i2)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n2 = typeof min === "bigint" ? "n" : "";
          let range2;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range2 = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
            } else {
              range2 = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
            }
          } else {
            range2 = `>= ${min}${n2} and <= ${max}${n2}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range2, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i2 = 0; i2 < length; ++i2) {
          codePoint = string.charCodeAt(i2);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              } else if (i2 + 1 === length) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i2 = 0; i2 < str.length; ++i2) {
          byteArray.push(str.charCodeAt(i2) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c2, hi, lo;
        const byteArray = [];
        for (let i2 = 0; i2 < str.length; ++i2) {
          if ((units -= 2) < 0) break;
          c2 = str.charCodeAt(i2);
          hi = c2 >> 8;
          lo = c2 % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i2;
        for (i2 = 0; i2 < length; ++i2) {
          if (i2 + offset >= dst.length || i2 >= src.length) break;
          dst[i2 + offset] = src[i2];
        }
        return i2;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = (function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i2 = 0; i2 < 16; ++i2) {
          const i16 = i2 * 16;
          for (let j2 = 0; j2 < 16; ++j2) {
            table[i16 + j2] = alphabet[i2] + alphabet[j2];
          }
        }
        return table;
      })();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf8;
  var init_fromUtf8_browser = __esm({
    "node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
      fromUtf8 = (input) => new TextEncoder().encode(input);
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
  var toUint8Array;
  var init_toUint8Array = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
      init_fromUtf8_browser();
      toUint8Array = (data) => {
        if (typeof data === "string") {
          return fromUtf8(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
  var toUtf8;
  var init_toUtf8_browser = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
      toUtf8 = (input) => {
        if (typeof input === "string") {
          return input;
        }
        if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
          throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
        }
        return new TextDecoder("utf-8").decode(input);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/index.js
  var init_dist_es = __esm({
    "node_modules/@smithy/util-utf8/dist-es/index.js"() {
      init_fromUtf8_browser();
      init_toUint8Array();
      init_toUtf8_browser();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
  var EventStreamSerde;
  var init_EventStreamSerde = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
      init_dist_es();
      EventStreamSerde = class {
        constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
          __publicField(this, "marshaller");
          __publicField(this, "serializer");
          __publicField(this, "deserializer");
          __publicField(this, "serdeContext");
          __publicField(this, "defaultContentType");
          this.marshaller = marshaller;
          this.serializer = serializer;
          this.deserializer = deserializer;
          this.serdeContext = serdeContext;
          this.defaultContentType = defaultContentType;
        }
        serializeEventStream(_0) {
          return __async(this, arguments, function* ({ eventStream, requestSchema, initialRequest }) {
            const marshaller = this.marshaller;
            const eventStreamMember = requestSchema.getEventStreamMember();
            const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
            const serializer = this.serializer;
            const defaultContentType = this.defaultContentType;
            const initialRequestMarker = /* @__PURE__ */ Symbol("initialRequestMarker");
            const eventStreamIterable = {
              [Symbol.asyncIterator]() {
                return __asyncGenerator(this, null, function* () {
                  if (initialRequest) {
                    const headers = {
                      ":event-type": { type: "string", value: "initial-request" },
                      ":message-type": { type: "string", value: "event" },
                      ":content-type": { type: "string", value: defaultContentType }
                    };
                    serializer.write(requestSchema, initialRequest);
                    const body = serializer.flush();
                    yield {
                      [initialRequestMarker]: true,
                      headers,
                      body
                    };
                  }
                  try {
                    for (var iter = __forAwait(eventStream), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
                      const page = temp.value;
                      yield page;
                    }
                  } catch (temp) {
                    error = [temp];
                  } finally {
                    try {
                      more && (temp = iter.return) && (yield new __await(temp.call(iter)));
                    } finally {
                      if (error)
                        throw error[0];
                    }
                  }
                });
              }
            };
            return marshaller.serialize(eventStreamIterable, (event) => {
              if (event[initialRequestMarker]) {
                return {
                  headers: event.headers,
                  body: event.body
                };
              }
              let unionMember = "";
              for (const key in event) {
                if (key !== "__type") {
                  unionMember = key;
                  break;
                }
              }
              const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
              const headers = __spreadValues({
                ":event-type": { type: "string", value: eventType },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: explicitPayloadContentType != null ? explicitPayloadContentType : defaultContentType }
              }, additionalHeaders);
              return {
                headers,
                body
              };
            });
          });
        }
        deserializeEventStream(_0) {
          return __async(this, arguments, function* ({ response, responseSchema, initialResponseContainer }) {
            var _a3;
            const marshaller = this.marshaller;
            const eventStreamMember = responseSchema.getEventStreamMember();
            const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
            const memberSchemas = unionSchema.getMemberSchemas();
            const initialResponseMarker = /* @__PURE__ */ Symbol("initialResponseMarker");
            const asyncIterable = marshaller.deserialize(response.body, (event) => __async(this, null, function* () {
              var _a4, _b3, _c2;
              let unionMember = "";
              for (const key in event) {
                if (key !== "__type") {
                  unionMember = key;
                  break;
                }
              }
              const body = event[unionMember].body;
              if (unionMember === "initial-response") {
                const dataObject = yield this.deserializer.read(responseSchema, body);
                delete dataObject[eventStreamMember];
                return __spreadValues({
                  [initialResponseMarker]: true
                }, dataObject);
              } else if (unionMember in memberSchemas) {
                const eventStreamSchema = memberSchemas[unionMember];
                if (eventStreamSchema.isStructSchema()) {
                  const out = {};
                  let hasBindings = false;
                  for (const [name, member2] of eventStreamSchema.structIterator()) {
                    const { eventHeader, eventPayload } = member2.getMergedTraits();
                    hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                    if (eventPayload) {
                      if (member2.isBlobSchema()) {
                        out[name] = body;
                      } else if (member2.isStringSchema()) {
                        out[name] = ((_b3 = (_a4 = this.serdeContext) == null ? void 0 : _a4.utf8Encoder) != null ? _b3 : toUtf8)(body);
                      } else if (member2.isStructSchema()) {
                        out[name] = yield this.deserializer.read(member2, body);
                      }
                    } else if (eventHeader) {
                      const value = (_c2 = event[unionMember].headers[name]) == null ? void 0 : _c2.value;
                      if (value != null) {
                        if (member2.isNumericSchema()) {
                          if (value && typeof value === "object" && "bytes" in value) {
                            out[name] = BigInt(value.toString());
                          } else {
                            out[name] = Number(value);
                          }
                        } else {
                          out[name] = value;
                        }
                      }
                    }
                  }
                  if (hasBindings) {
                    return {
                      [unionMember]: out
                    };
                  }
                  if (body.byteLength === 0) {
                    return {
                      [unionMember]: {}
                    };
                  }
                }
                return {
                  [unionMember]: yield this.deserializer.read(eventStreamSchema, body)
                };
              } else {
                return {
                  $unknown: event
                };
              }
            }));
            const asyncIterator = asyncIterable[Symbol.asyncIterator]();
            const firstEvent = yield asyncIterator.next();
            if (firstEvent.done) {
              return asyncIterable;
            }
            if ((_a3 = firstEvent.value) == null ? void 0 : _a3[initialResponseMarker]) {
              if (!responseSchema) {
                throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
              }
              for (const key in firstEvent.value) {
                initialResponseContainer[key] = firstEvent.value[key];
              }
            }
            return {
              [Symbol.asyncIterator]() {
                return __asyncGenerator(this, null, function* () {
                  var _a4;
                  if (!((_a4 = firstEvent == null ? void 0 : firstEvent.value) == null ? void 0 : _a4[initialResponseMarker])) {
                    yield firstEvent.value;
                  }
                  while (true) {
                    const { done, value } = yield new __await(asyncIterator.next());
                    if (done) {
                      break;
                    }
                    yield value;
                  }
                });
              }
            };
          });
        }
        writeEventBody(unionMember, unionSchema, event) {
          var _a3, _b2, _c2;
          const serializer = this.serializer;
          let eventType = unionMember;
          let explicitPayloadMember = null;
          let explicitPayloadContentType;
          const isKnownSchema = (() => {
            const struct = unionSchema.getSchema();
            return struct[4].includes(unionMember);
          })();
          const additionalHeaders = {};
          if (!isKnownSchema) {
            const [type, value] = event[unionMember];
            eventType = type;
            serializer.write(15, value);
          } else {
            const eventSchema = unionSchema.getMemberSchema(unionMember);
            if (eventSchema.isStructSchema()) {
              for (const [memberName, memberSchema] of eventSchema.structIterator()) {
                const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
                if (eventPayload) {
                  explicitPayloadMember = memberName;
                } else if (eventHeader) {
                  const value = event[unionMember][memberName];
                  let type = "binary";
                  if (memberSchema.isNumericSchema()) {
                    if (__pow(-2, 31) <= value && value <= __pow(2, 31) - 1) {
                      type = "integer";
                    } else {
                      type = "long";
                    }
                  } else if (memberSchema.isTimestampSchema()) {
                    type = "timestamp";
                  } else if (memberSchema.isStringSchema()) {
                    type = "string";
                  } else if (memberSchema.isBooleanSchema()) {
                    type = "boolean";
                  }
                  if (value != null) {
                    additionalHeaders[memberName] = {
                      type,
                      value
                    };
                    delete event[unionMember][memberName];
                  }
                }
              }
              if (explicitPayloadMember !== null) {
                const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
                if (payloadSchema.isBlobSchema()) {
                  explicitPayloadContentType = "application/octet-stream";
                } else if (payloadSchema.isStringSchema()) {
                  explicitPayloadContentType = "text/plain";
                }
                serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
              } else {
                serializer.write(eventSchema, event[unionMember]);
              }
            } else if (eventSchema.isUnitSchema()) {
              serializer.write(eventSchema, {});
            } else {
              throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            }
          }
          const messageSerialization = (_a3 = serializer.flush()) != null ? _a3 : new Uint8Array();
          const body = typeof messageSerialization === "string" ? ((_c2 = (_b2 = this.serdeContext) == null ? void 0 : _b2.utf8Decoder) != null ? _c2 : fromUtf8)(messageSerialization) : messageSerialization;
          return {
            body,
            eventType,
            explicitPayloadContentType,
            additionalHeaders
          };
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/index.js
  var event_streams_exports = {};
  __export(event_streams_exports, {
    EventStreamSerde: () => EventStreamSerde
  });
  var init_event_streams = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/index.js"() {
      init_EventStreamSerde();
    }
  });

  // js/app.js
  var import_buffer = __toESM(require_buffer());

  // node_modules/@smithy/types/dist-es/endpoint.js
  var EndpointURLScheme;
  (function(EndpointURLScheme2) {
    EndpointURLScheme2["HTTP"] = "http";
    EndpointURLScheme2["HTTPS"] = "https";
  })(EndpointURLScheme || (EndpointURLScheme = {}));

  // node_modules/@smithy/types/dist-es/extensions/checksum.js
  var AlgorithmId;
  (function(AlgorithmId2) {
    AlgorithmId2["MD5"] = "md5";
    AlgorithmId2["CRC32"] = "crc32";
    AlgorithmId2["CRC32C"] = "crc32c";
    AlgorithmId2["SHA1"] = "sha1";
    AlgorithmId2["SHA256"] = "sha256";
  })(AlgorithmId || (AlgorithmId = {}));

  // node_modules/@smithy/types/dist-es/middleware.js
  var SMITHY_CONTEXT_KEY = "__smithy_context";

  // node_modules/@aws-sdk/middleware-expect-continue/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
  function addExpectContinueMiddleware(options) {
    return (next) => (args) => __async(null, null, function* () {
      var _a3, _b2, _c2, _d2, _e2, _f;
      const { request } = args;
      if (options.expectContinueHeader !== false && HttpRequest.isInstance(request) && request.body && options.runtime === "node" && ((_b2 = (_a3 = options.requestHandler) == null ? void 0 : _a3.constructor) == null ? void 0 : _b2.name) !== "FetchHttpHandler") {
        let sendHeader = true;
        if (typeof options.expectContinueHeader === "number") {
          try {
            const bodyLength = (_f = (_e2 = Number((_c2 = request.headers) == null ? void 0 : _c2["content-length"])) != null ? _e2 : (_d2 = options.bodyLengthChecker) == null ? void 0 : _d2.call(options, request.body)) != null ? _f : Infinity;
            sendHeader = bodyLength >= options.expectContinueHeader;
          } catch (e2) {
          }
        } else {
          sendHeader = !!options.expectContinueHeader;
        }
        if (sendHeader) {
          request.headers.Expect = "100-continue";
        }
      }
      return next(__spreadProps(__spreadValues({}, args), {
        request
      }));
    });
  }
  var addExpectContinueMiddlewareOptions = {
    step: "build",
    tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
    name: "addExpectContinueMiddleware",
    override: true
  };
  var getAddExpectContinuePlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
  var RequestChecksumCalculation = {
    WHEN_SUPPORTED: "WHEN_SUPPORTED",
    WHEN_REQUIRED: "WHEN_REQUIRED"
  };
  var DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;
  var ResponseChecksumValidation = {
    WHEN_SUPPORTED: "WHEN_SUPPORTED",
    WHEN_REQUIRED: "WHEN_REQUIRED"
  };
  var DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;
  var ChecksumAlgorithm;
  (function(ChecksumAlgorithm2) {
    ChecksumAlgorithm2["MD5"] = "MD5";
    ChecksumAlgorithm2["CRC32"] = "CRC32";
    ChecksumAlgorithm2["CRC32C"] = "CRC32C";
    ChecksumAlgorithm2["CRC64NVME"] = "CRC64NVME";
    ChecksumAlgorithm2["SHA1"] = "SHA1";
    ChecksumAlgorithm2["SHA256"] = "SHA256";
  })(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
  var ChecksumLocation;
  (function(ChecksumLocation2) {
    ChecksumLocation2["HEADER"] = "header";
    ChecksumLocation2["TRAILER"] = "trailer";
  })(ChecksumLocation || (ChecksumLocation = {}));
  var DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;

  // node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
  function setCredentialFeature(credentials, feature, value) {
    if (!credentials.$source) {
      credentials.$source = {};
    }
    credentials.$source[feature] = value;
    return credentials;
  }

  // node_modules/@smithy/util-retry/dist-es/config.js
  var RETRY_MODES;
  (function(RETRY_MODES2) {
    RETRY_MODES2["STANDARD"] = "standard";
    RETRY_MODES2["ADAPTIVE"] = "adaptive";
  })(RETRY_MODES || (RETRY_MODES = {}));
  var DEFAULT_MAX_ATTEMPTS = 3;
  var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

  // node_modules/@smithy/service-error-classification/dist-es/constants.js
  var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
  ];
  var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
  var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];

  // node_modules/@smithy/service-error-classification/dist-es/index.js
  var isRetryableByTrait = (error) => (error == null ? void 0 : error.$retryable) !== void 0;
  var isClockSkewCorrectedError = (error) => {
    var _a3;
    return (_a3 = error.$metadata) == null ? void 0 : _a3.clockSkewCorrected;
  };
  var isBrowserNetworkError = (error) => {
    const errorMessages = /* @__PURE__ */ new Set([
      "Failed to fetch",
      "NetworkError when attempting to fetch resource",
      "The Internet connection appears to be offline",
      "Load failed",
      "Network request failed"
    ]);
    const isValid = error && error instanceof TypeError;
    if (!isValid) {
      return false;
    }
    return errorMessages.has(error.message);
  };
  var isThrottlingError = (error) => {
    var _a3, _b2;
    return ((_a3 = error.$metadata) == null ? void 0 : _a3.httpStatusCode) === 429 || THROTTLING_ERROR_CODES.includes(error.name) || ((_b2 = error.$retryable) == null ? void 0 : _b2.throttling) == true;
  };
  var isTransientError = (error, depth = 0) => {
    var _a3, _b2;
    return isRetryableByTrait(error) || isClockSkewCorrectedError(error) || error.name === "InvalidSignatureException" && ((_a3 = error.message) == null ? void 0 : _a3.includes("Signature expired")) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes((error == null ? void 0 : error.code) || "") || NODEJS_NETWORK_ERROR_CODES.includes((error == null ? void 0 : error.code) || "") || TRANSIENT_ERROR_STATUS_CODES.includes(((_b2 = error.$metadata) == null ? void 0 : _b2.httpStatusCode) || 0) || isBrowserNetworkError(error) || isNodeJsHttp2TransientError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1);
  };
  var isServerError = (error) => {
    var _a3;
    if (((_a3 = error.$metadata) == null ? void 0 : _a3.httpStatusCode) !== void 0) {
      const statusCode = error.$metadata.httpStatusCode;
      if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
        return true;
      }
      return false;
    }
    return false;
  };
  function isNodeJsHttp2TransientError(error) {
    return error.code === "ERR_HTTP2_STREAM_ERROR" && error.message.includes("NGHTTP2_REFUSED_STREAM");
  }

  // node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
  var _DefaultRateLimiter = class _DefaultRateLimiter {
    constructor(options) {
      __publicField(this, "beta");
      __publicField(this, "minCapacity");
      __publicField(this, "minFillRate");
      __publicField(this, "scaleConstant");
      __publicField(this, "smooth");
      __publicField(this, "enabled", false);
      __publicField(this, "availableTokens", 0);
      __publicField(this, "lastMaxRate", 0);
      __publicField(this, "measuredTxRate", 0);
      __publicField(this, "requestCount", 0);
      __publicField(this, "fillRate");
      __publicField(this, "lastThrottleTime");
      __publicField(this, "lastTimestamp", 0);
      __publicField(this, "lastTxRateBucket");
      __publicField(this, "maxCapacity");
      __publicField(this, "timeWindow", 0);
      var _a3, _b2, _c2, _d2, _e2;
      this.beta = (_a3 = options == null ? void 0 : options.beta) != null ? _a3 : 0.7;
      this.minCapacity = (_b2 = options == null ? void 0 : options.minCapacity) != null ? _b2 : 1;
      this.minFillRate = (_c2 = options == null ? void 0 : options.minFillRate) != null ? _c2 : 0.5;
      this.scaleConstant = (_d2 = options == null ? void 0 : options.scaleConstant) != null ? _d2 : 0.4;
      this.smooth = (_e2 = options == null ? void 0 : options.smooth) != null ? _e2 : 0.8;
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
      this.fillRate = this.minFillRate;
      this.maxCapacity = this.minCapacity;
    }
    getSendToken() {
      return __async(this, null, function* () {
        return this.acquireTokenBucket(1);
      });
    }
    updateClientSendingRate(response) {
      var _a3;
      let calculatedRate;
      this.updateMeasuredRate();
      const retryErrorInfo = response;
      const isThrottling = (retryErrorInfo == null ? void 0 : retryErrorInfo.errorType) === "THROTTLING" || isThrottlingError((_a3 = retryErrorInfo == null ? void 0 : retryErrorInfo.error) != null ? _a3 : response);
      if (isThrottling) {
        const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = rateToUse;
        this.calculateTimeWindow();
        this.lastThrottleTime = this.getCurrentTimeInSeconds();
        calculatedRate = this.cubicThrottle(rateToUse);
        this.enableTokenBucket();
      } else {
        this.calculateTimeWindow();
        calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
      }
      const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(newRate);
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    acquireTokenBucket(amount) {
      return __async(this, null, function* () {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        while (amount > this.availableTokens) {
          const delay = (amount - this.availableTokens) / this.fillRate * 1e3;
          yield new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
          this.refillTokenBucket();
        }
        this.availableTokens = this.availableTokens - amount;
      });
    }
    refillTokenBucket() {
      const timestamp = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
        return;
      }
      const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
      this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
      this.lastTimestamp = timestamp;
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
      return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
      return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
      this.refillTokenBucket();
      this.fillRate = Math.max(newRate, this.minFillRate);
      this.maxCapacity = Math.max(newRate, this.minCapacity);
      this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
      const t8 = this.getCurrentTimeInSeconds();
      const timeBucket = Math.floor(t8 * 2) / 2;
      this.requestCount++;
      if (timeBucket > this.lastTxRateBucket) {
        const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
        this.requestCount = 0;
        this.lastTxRateBucket = timeBucket;
      }
    }
    getPrecise(num) {
      return parseFloat(num.toFixed(8));
    }
  };
  __publicField(_DefaultRateLimiter, "setTimeoutFn", setTimeout);
  var DefaultRateLimiter = _DefaultRateLimiter;

  // node_modules/@smithy/util-retry/dist-es/constants.js
  var MAXIMUM_RETRY_DELAY = 20 * 1e3;
  var INITIAL_RETRY_TOKENS = 500;
  var NO_RETRY_INCREMENT = 1;
  var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  var REQUEST_HEADER = "amz-sdk-request";

  // node_modules/@smithy/util-retry/dist-es/retries-2026-config.js
  var _a;
  var _Retry = class _Retry {
    static delay() {
      return _Retry.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
      return _Retry.v2026 ? 1e3 : 500;
    }
    static cost() {
      return _Retry.v2026 ? 14 : 5;
    }
    static throttlingCost() {
      return _Retry.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
      return _Retry.v2026 ? "THROTTLING" : "TRANSIENT";
    }
  };
  __publicField(_Retry, "v2026", typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.SMITHY_NEW_RETRIES_2026) === "true");
  var Retry = _Retry;

  // node_modules/@smithy/util-retry/dist-es/DefaultRetryBackoffStrategy.js
  var DefaultRetryBackoffStrategy = class {
    constructor() {
      __publicField(this, "x", Retry.delay());
    }
    computeNextBackoffDelay(i2) {
      const b2 = Math.random();
      const r2 = 2;
      const t_i = b2 * Math.min(this.x * __pow(r2, i2), MAXIMUM_RETRY_DELAY);
      return Math.floor(t_i);
    }
    setDelayBase(delay) {
      this.x = delay;
    }
  };

  // node_modules/@smithy/util-retry/dist-es/DefaultRetryToken.js
  var DefaultRetryToken = class {
    constructor(delay, count, cost, longPoll) {
      __publicField(this, "delay");
      __publicField(this, "count");
      __publicField(this, "cost");
      __publicField(this, "longPoll");
      this.delay = delay;
      this.count = count;
      this.cost = cost;
      this.longPoll = longPoll;
    }
    getRetryCount() {
      return this.count;
    }
    getRetryDelay() {
      return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
    }
    getRetryCost() {
      return this.cost;
    }
    isLongPoll() {
      return this.longPoll;
    }
  };

  // node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
  var refusal = {
    incompatible: 1,
    attempts: 2,
    capacity: 3
  };
  var StandardRetryStrategy = class {
    constructor(arg1) {
      __publicField(this, "mode", RETRY_MODES.STANDARD);
      __publicField(this, "capacity", INITIAL_RETRY_TOKENS);
      __publicField(this, "retryBackoffStrategy");
      __publicField(this, "maxAttemptsProvider");
      __publicField(this, "baseDelay");
      var _a3, _b2, _c2;
      if (typeof arg1 === "number") {
        this.maxAttemptsProvider = () => __async(this, null, function* () {
          return arg1;
        });
      } else if (typeof arg1 === "function") {
        this.maxAttemptsProvider = arg1;
      } else if (arg1 && typeof arg1 === "object") {
        this.maxAttemptsProvider = () => __async(this, null, function* () {
          return arg1.maxAttempts;
        });
        this.baseDelay = arg1.baseDelay;
        this.retryBackoffStrategy = arg1.backoff;
      }
      (_a3 = this.maxAttemptsProvider) != null ? _a3 : this.maxAttemptsProvider = () => __async(this, null, function* () {
        return DEFAULT_MAX_ATTEMPTS;
      });
      (_b2 = this.baseDelay) != null ? _b2 : this.baseDelay = Retry.delay();
      (_c2 = this.retryBackoffStrategy) != null ? _c2 : this.retryBackoffStrategy = new DefaultRetryBackoffStrategy();
    }
    acquireInitialRetryToken(retryTokenScope) {
      return __async(this, null, function* () {
        return new DefaultRetryToken(Retry.delay(), 0, void 0, Retry.v2026 && retryTokenScope.includes(":longpoll"));
      });
    }
    refreshRetryTokenForRetry(token, errorInfo) {
      return __async(this, null, function* () {
        var _a3, _b2, _c2;
        const maxAttempts = yield this.getMaxAttempts();
        const retryCode = this.retryCode(token, errorInfo, maxAttempts);
        const shouldRetry = retryCode === 0;
        const isLongPoll = (_a3 = token.isLongPoll) == null ? void 0 : _a3.call(token);
        if (shouldRetry || isLongPoll) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          let retryDelay = delayFromErrorType;
          if (errorInfo.retryAfterHint instanceof Date) {
            retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5e3));
          }
          if (!shouldRetry) {
            throw Object.assign(new Error("No retry token available"), {
              $backoff: Retry.v2026 && retryCode === refusal.capacity && isLongPoll ? retryDelay : 0
            });
          } else {
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return new DefaultRetryToken(retryDelay, token.getRetryCount() + 1, capacityCost, (_c2 = (_b2 = token.isLongPoll) == null ? void 0 : _b2.call(token)) != null ? _c2 : false);
          }
        }
        throw new Error("No retry token available");
      });
    }
    recordSuccess(token) {
      var _a3;
      this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + ((_a3 = token.getRetryCost()) != null ? _a3 : NO_RETRY_INCREMENT));
    }
    getCapacity() {
      return this.capacity;
    }
    maxAttempts() {
      return __async(this, null, function* () {
        return this.maxAttemptsProvider();
      });
    }
    getMaxAttempts() {
      return __async(this, null, function* () {
        try {
          return yield this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      });
    }
    retryCode(tokenToRenew, errorInfo, maxAttempts) {
      const attempts = tokenToRenew.getRetryCount() + 1;
      const retryableStatus = this.isRetryableError(errorInfo.errorType) ? 0 : refusal.incompatible;
      const attemptStatus = attempts < maxAttempts ? 0 : refusal.attempts;
      const capacityStatus = this.capacity >= this.getCapacityCost(errorInfo.errorType) ? 0 : refusal.capacity;
      return retryableStatus || attemptStatus || capacityStatus;
    }
    getCapacityCost(errorType) {
      return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
    }
    isRetryableError(errorType) {
      return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
  };

  // node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
  var AdaptiveRetryStrategy = class {
    constructor(maxAttemptsProvider, options) {
      __publicField(this, "mode", RETRY_MODES.ADAPTIVE);
      __publicField(this, "rateLimiter");
      __publicField(this, "standardRetryStrategy");
      const { rateLimiter } = options != null ? options : {};
      this.rateLimiter = rateLimiter != null ? rateLimiter : new DefaultRateLimiter();
      this.standardRetryStrategy = options ? new StandardRetryStrategy(__spreadValues({
        maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3
      }, options)) : new StandardRetryStrategy(maxAttemptsProvider);
    }
    acquireInitialRetryToken(retryTokenScope) {
      return __async(this, null, function* () {
        const token = yield this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
        yield this.rateLimiter.getSendToken();
        return token;
      });
    }
    refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
      return __async(this, null, function* () {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        const token = yield this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        yield this.rateLimiter.getSendToken();
        return token;
      });
    }
    recordSuccess(token) {
      this.rateLimiter.updateClientSendingRate({});
      this.standardRetryStrategy.recordSuccess(token);
    }
    maxAttemptsProvider() {
      return __async(this, null, function* () {
        return this.standardRetryStrategy.maxAttempts();
      });
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
  var _a2, _b;
  (_b = Retry).v2026 || (_b.v2026 = typeof process === "object" && ((_a2 = process.env) == null ? void 0 : _a2.AWS_NEW_RETRIES_2026) === "true");
  function setFeature(context, feature, value) {
    if (!context.__aws_sdk_context) {
      context.__aws_sdk_context = {
        features: {}
      };
    } else if (!context.__aws_sdk_context.features) {
      context.__aws_sdk_context.features = {};
    }
    context.__aws_sdk_context.features[feature] = value;
  }

  // node_modules/@aws-sdk/middleware-flexible-checksums/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest2 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery2(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery2(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@smithy/util-base64/dist-es/constants.browser.js
  var chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
  var alphabetByEncoding = Object.entries(chars).reduce((acc, [i2, c2]) => {
    acc[c2] = Number(i2);
    return acc;
  }, {});
  var alphabetByValue = chars.split("");
  var bitsPerLetter = 6;
  var bitsPerByte = 8;
  var maxLetterValue = 63;

  // node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
  var fromBase64 = (input) => {
    let totalByteLength = input.length / 4 * 3;
    if (input.slice(-2) === "==") {
      totalByteLength -= 2;
    } else if (input.slice(-1) === "=") {
      totalByteLength--;
    }
    const out = new ArrayBuffer(totalByteLength);
    const dataView = new DataView(out);
    for (let i2 = 0; i2 < input.length; i2 += 4) {
      let bits = 0;
      let bitLength = 0;
      for (let j2 = i2, limit = i2 + 3; j2 <= limit; j2++) {
        if (input[j2] !== "=") {
          if (!(input[j2] in alphabetByEncoding)) {
            throw new TypeError(`Invalid character ${input[j2]} in base64 string.`);
          }
          bits |= alphabetByEncoding[input[j2]] << (limit - j2) * bitsPerLetter;
          bitLength += bitsPerLetter;
        } else {
          bits >>= bitsPerLetter;
        }
      }
      const chunkOffset = i2 / 4 * 3;
      bits >>= bitLength % bitsPerByte;
      const byteLength = Math.floor(bitLength / bitsPerByte);
      for (let k2 = 0; k2 < byteLength; k2++) {
        const offset = (byteLength - k2 - 1) * bitsPerByte;
        dataView.setUint8(chunkOffset + k2, (bits & 255 << offset) >> offset);
      }
    }
    return new Uint8Array(out);
  };

  // node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
  init_dist_es();
  function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
      input = fromUtf8(_input);
    } else {
      input = _input;
    }
    const isArrayLike = typeof input === "object" && typeof input.length === "number";
    const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
    if (!isArrayLike && !isUint8Array) {
      throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i2 = 0; i2 < input.length; i2 += 3) {
      let bits = 0;
      let bitLength = 0;
      for (let j2 = i2, limit = Math.min(i2 + 3, input.length); j2 < limit; j2++) {
        bits |= input[j2] << (limit - j2 - 1) * bitsPerByte;
        bitLength += bitsPerByte;
      }
      const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
      bits <<= bitClusterCount * bitsPerLetter - bitLength;
      for (let k2 = 1; k2 <= bitClusterCount; k2++) {
        const offset = (bitClusterCount - k2) * bitsPerLetter;
        str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
      }
      str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
  }

  // node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
  init_dist_es();
  var Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
      if (typeof source === "string") {
        if (encoding === "base64") {
          return _Uint8ArrayBlobAdapter.mutate(fromBase64(source));
        }
        return _Uint8ArrayBlobAdapter.mutate(fromUtf8(source));
      }
      throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
    static mutate(source) {
      Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
      return source;
    }
    transformToString(encoding = "utf-8") {
      if (encoding === "base64") {
        return toBase64(this);
      }
      return toUtf8(this);
    }
  };

  // node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
  var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {
  };
  var ChecksumStream = class extends ReadableStreamRef {
  };

  // node_modules/@smithy/util-stream/dist-es/stream-type-check.js
  var isReadableStream = (stream) => {
    var _a3;
    return typeof ReadableStream === "function" && (((_a3 = stream == null ? void 0 : stream.constructor) == null ? void 0 : _a3.name) === ReadableStream.name || stream instanceof ReadableStream);
  };

  // node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
  var createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
    var _a3, _b2;
    if (!isReadableStream(source)) {
      throw new Error(`@smithy/util-stream: unsupported source type ${(_b2 = (_a3 = source == null ? void 0 : source.constructor) == null ? void 0 : _a3.name) != null ? _b2 : source} in ChecksumStream.`);
    }
    const encoder = base64Encoder != null ? base64Encoder : toBase64;
    if (typeof TransformStream !== "function") {
      throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
    }
    const transform = new TransformStream({
      start() {
      },
      transform(chunk, controller) {
        return __async(this, null, function* () {
          checksum.update(chunk);
          controller.enqueue(chunk);
        });
      },
      flush(controller) {
        return __async(this, null, function* () {
          const digest = yield checksum.digest();
          const received = encoder(digest);
          if (expectedChecksum !== received) {
            const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`);
            controller.error(error);
          } else {
            controller.terminate();
          }
        });
      }
    });
    source.pipeThrough(transform);
    const readable = transform.readable;
    Object.setPrototypeOf(readable, ChecksumStream.prototype);
    return readable;
  };

  // node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
  var ByteArrayCollector = class {
    constructor(allocByteArray) {
      __publicField(this, "allocByteArray");
      __publicField(this, "byteLength", 0);
      __publicField(this, "byteArrays", []);
      this.allocByteArray = allocByteArray;
    }
    push(byteArray) {
      this.byteArrays.push(byteArray);
      this.byteLength += byteArray.byteLength;
    }
    flush() {
      if (this.byteArrays.length === 1) {
        const bytes = this.byteArrays[0];
        this.reset();
        return bytes;
      }
      const aggregation = this.allocByteArray(this.byteLength);
      let cursor = 0;
      for (let i2 = 0; i2 < this.byteArrays.length; ++i2) {
        const bytes = this.byteArrays[i2];
        aggregation.set(bytes, cursor);
        cursor += bytes.byteLength;
      }
      this.reset();
      return aggregation;
    }
    reset() {
      this.byteArrays = [];
      this.byteLength = 0;
    }
  };

  // node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
  function createBufferedReadableStream(upstream, size, logger2) {
    const reader = upstream.getReader();
    let streamBufferingLoggedWarning = false;
    let bytesSeen = 0;
    const buffers = ["", new ByteArrayCollector((size2) => new Uint8Array(size2))];
    let mode = -1;
    const pull = (controller) => __async(null, null, function* () {
      const { value, done } = yield reader.read();
      const chunk = value;
      if (done) {
        if (mode !== -1) {
          const remainder = flush(buffers, mode);
          if (sizeOf(remainder) > 0) {
            controller.enqueue(remainder);
          }
        }
        controller.close();
      } else {
        const chunkMode = modeOf(chunk, false);
        if (mode !== chunkMode) {
          if (mode >= 0) {
            controller.enqueue(flush(buffers, mode));
          }
          mode = chunkMode;
        }
        if (mode === -1) {
          controller.enqueue(chunk);
          return;
        }
        const chunkSize = sizeOf(chunk);
        bytesSeen += chunkSize;
        const bufferSize = sizeOf(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
          controller.enqueue(chunk);
        } else {
          const newSize = merge(buffers, mode, chunk);
          if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
            streamBufferingLoggedWarning = true;
            logger2 == null ? void 0 : logger2.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
          }
          if (newSize >= size) {
            controller.enqueue(flush(buffers, mode));
          } else {
            yield pull(controller);
          }
        }
      }
    });
    return new ReadableStream({
      pull
    });
  }
  var createBufferedReadable = createBufferedReadableStream;
  function merge(buffers, mode, chunk) {
    switch (mode) {
      case 0:
        buffers[0] += chunk;
        return sizeOf(buffers[0]);
      case 1:
      case 2:
        buffers[mode].push(chunk);
        return sizeOf(buffers[mode]);
    }
  }
  function flush(buffers, mode) {
    switch (mode) {
      case 0:
        const s2 = buffers[0];
        buffers[0] = "";
        return s2;
      case 1:
      case 2:
        return buffers[mode].flush();
    }
    throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
  }
  function sizeOf(chunk) {
    var _a3, _b2;
    return (_b2 = (_a3 = chunk == null ? void 0 : chunk.byteLength) != null ? _a3 : chunk == null ? void 0 : chunk.length) != null ? _b2 : 0;
  }
  function modeOf(chunk, allowBuffer = true) {
    if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
      return 2;
    }
    if (chunk instanceof Uint8Array) {
      return 1;
    }
    if (typeof chunk === "string") {
      return 0;
    }
    return -1;
  }

  // node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
  var getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== void 0 && bodyLengthChecker !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
    const reader = readableStream.getReader();
    return new ReadableStream({
      pull(controller) {
        return __async(this, null, function* () {
          const { value, done } = yield reader.read();
          if (done) {
            controller.enqueue(`0\r
`);
            if (checksumRequired) {
              const checksum = base64Encoder(yield digest);
              controller.enqueue(`${checksumLocationName}:${checksum}\r
`);
              controller.enqueue(`\r
`);
            }
            controller.close();
          } else {
            controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r
${value}\r
`);
          }
        });
      }
    });
  };

  // node_modules/@smithy/util-stream/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
  var streamCollector = (stream) => __async(null, null, function* () {
    var _a3;
    if (typeof Blob === "function" && stream instanceof Blob || ((_a3 = stream.constructor) == null ? void 0 : _a3.name) === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) {
        return new Uint8Array(yield stream.arrayBuffer());
      }
      return collectBlob(stream);
    }
    return collectStream(stream);
  });
  function collectBlob(blob) {
    return __async(this, null, function* () {
      const base64 = yield readToBase64(blob);
      const arrayBuffer = fromBase64(base64);
      return new Uint8Array(arrayBuffer);
    });
  }
  function collectStream(stream) {
    return __async(this, null, function* () {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = yield reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    });
  }
  function readToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        var _a3;
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = (_a3 = reader.result) != null ? _a3 : "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  // node_modules/@smithy/util-hex-encoding/dist-es/index.js
  var SHORT_TO_HEX = {};
  var HEX_TO_SHORT = {};
  for (let i2 = 0; i2 < 256; i2++) {
    let encodedByte = i2.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
      encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i2] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i2;
  }
  function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
      throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i2 = 0; i2 < encoded.length; i2 += 2) {
      const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
      if (encodedByte in HEX_TO_SHORT) {
        out[i2 / 2] = HEX_TO_SHORT[encodedByte];
      } else {
        throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
      }
    }
    return out;
  }
  function toHex(bytes) {
    let out = "";
    for (let i2 = 0; i2 < bytes.byteLength; i2++) {
      out += SHORT_TO_HEX[bytes[i2]];
    }
    return out;
  }

  // node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
  init_dist_es();
  var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
  var sdkStreamMixin = (stream) => {
    var _a3, _b2;
    if (!isBlobInstance(stream) && !isReadableStream(stream)) {
      const name = ((_b2 = (_a3 = stream == null ? void 0 : stream.__proto__) == null ? void 0 : _a3.constructor) == null ? void 0 : _b2.name) || stream;
      throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = () => __async(null, null, function* () {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      return yield streamCollector(stream);
    });
    const blobToWebStream = (blob) => {
      if (typeof blob.stream !== "function") {
        throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
      }
      return blob.stream();
    };
    return Object.assign(stream, {
      transformToByteArray,
      transformToString: (encoding) => __async(null, null, function* () {
        const buf = yield transformToByteArray();
        if (encoding === "base64") {
          return toBase64(buf);
        } else if (encoding === "hex") {
          return toHex(buf);
        } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
          return toUtf8(buf);
        } else if (typeof TextDecoder === "function") {
          return new TextDecoder(encoding).decode(buf);
        } else {
          throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
        }
      }),
      transformToWebStream: () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        if (isBlobInstance(stream)) {
          return blobToWebStream(stream);
        } else if (isReadableStream(stream)) {
          return stream;
        } else {
          throw new Error(`Cannot transform payload to web stream, got ${stream}`);
        }
      }
    });
  };
  var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
  var getChecksumAlgorithmForRequest = (input, { requestChecksumRequired, requestAlgorithmMember, requestChecksumCalculation }) => {
    if (!requestAlgorithmMember) {
      return requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired ? DEFAULT_CHECKSUM_ALGORITHM : void 0;
    }
    if (!input[requestAlgorithmMember]) {
      return void 0;
    }
    const checksumAlgorithm = input[requestAlgorithmMember];
    return checksumAlgorithm;
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
  var getChecksumLocationName = (algorithm) => algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
  var hasHeader = (header, headers) => {
    const soughtHeader = header.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeaderWithPrefix.js
  var hasHeaderWithPrefix = (headerPrefix, headers) => {
    const soughtHeaderPrefix = headerPrefix.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) {
        return true;
      }
    }
    return false;
  };

  // node_modules/@smithy/is-array-buffer/dist-es/index.js
  var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
  var isStreaming = (body) => body !== void 0 && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body);

  // node_modules/tslib/tslib.es6.mjs
  function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t8[0] & 1) throw t8[1];
      return t8[1];
    }, trys: [], ops: [] }, f2, y2, t8, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
      return this;
    }), g2;
    function verb(n2) {
      return function(v2) {
        return step([n2, v2]);
      };
    }
    function step(op) {
      if (f2) throw new TypeError("Generator is already executing.");
      while (g2 && (g2 = 0, op[0] && (_ = 0)), _) try {
        if (f2 = 1, y2 && (t8 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t8 = y2["return"]) && t8.call(y2), 0) : y2.next) && !(t8 = t8.call(y2, op[1])).done) return t8;
        if (y2 = 0, t8) op = [op[0] & 2, t8.value];
        switch (op[0]) {
          case 0:
          case 1:
            t8 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t8 = _.trys, t8 = t8.length > 0 && t8[t8.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t8 || op[1] > t8[0] && op[1] < t8[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t8[1]) {
              _.label = t8[1];
              t8 = op;
              break;
            }
            if (t8 && _.label < t8[2]) {
              _.label = t8[2];
              _.ops.push(op);
              break;
            }
            if (t8[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t8 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __values(o2) {
    var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
    if (m2) return m2.call(o2);
    if (o2 && typeof o2.length === "number") return {
      next: function() {
        if (o2 && i2 >= o2.length) o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
    throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  // node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf82 = (input) => new TextEncoder().encode(input);

  // node_modules/@aws-crypto/util/build/module/convertToBuffer.js
  var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : fromUtf82;
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf83(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }

  // node_modules/@aws-crypto/util/build/module/isEmptyData.js
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }

  // node_modules/@aws-crypto/util/build/module/numToUint8.js
  function numToUint8(num) {
    return new Uint8Array([
      (num & 4278190080) >> 24,
      (num & 16711680) >> 16,
      (num & 65280) >> 8,
      num & 255
    ]);
  }

  // node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
  function uint32ArrayFrom(a_lookUpTable2) {
    if (!Uint32Array.from) {
      var return_array = new Uint32Array(a_lookUpTable2.length);
      var a_index = 0;
      while (a_index < a_lookUpTable2.length) {
        return_array[a_index] = a_lookUpTable2[a_index];
        a_index += 1;
      }
      return return_array;
    }
    return Uint32Array.from(a_lookUpTable2);
  }

  // node_modules/@aws-crypto/crc32c/build/module/aws_crc32c.js
  var AwsCrc32c = (
    /** @class */
    (function() {
      function AwsCrc32c2() {
        this.crc32c = new Crc32c();
      }
      AwsCrc32c2.prototype.update = function(toHash) {
        if (isEmptyData(toHash))
          return;
        this.crc32c.update(convertToBuffer(toHash));
      };
      AwsCrc32c2.prototype.digest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            return [2, numToUint8(this.crc32c.digest())];
          });
        });
      };
      AwsCrc32c2.prototype.reset = function() {
        this.crc32c = new Crc32c();
      };
      return AwsCrc32c2;
    })()
  );

  // node_modules/@aws-crypto/crc32c/build/module/index.js
  var Crc32c = (
    /** @class */
    (function() {
      function Crc32c2() {
        this.checksum = 4294967295;
      }
      Crc32c2.prototype.update = function(data) {
        var e_1, _a3;
        try {
          for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var byte = data_1_1.value;
            this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (data_1_1 && !data_1_1.done && (_a3 = data_1.return)) _a3.call(data_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return this;
      };
      Crc32c2.prototype.digest = function() {
        return (this.checksum ^ 4294967295) >>> 0;
      };
      return Crc32c2;
    })()
  );
  var a_lookupTable = [
    0,
    4067132163,
    3778769143,
    324072436,
    3348797215,
    904991772,
    648144872,
    3570033899,
    2329499855,
    2024987596,
    1809983544,
    2575936315,
    1296289744,
    3207089363,
    2893594407,
    1578318884,
    274646895,
    3795141740,
    4049975192,
    51262619,
    3619967088,
    632279923,
    922689671,
    3298075524,
    2592579488,
    1760304291,
    2075979607,
    2312596564,
    1562183871,
    2943781820,
    3156637768,
    1313733451,
    549293790,
    3537243613,
    3246849577,
    871202090,
    3878099393,
    357341890,
    102525238,
    4101499445,
    2858735121,
    1477399826,
    1264559846,
    3107202533,
    1845379342,
    2677391885,
    2361733625,
    2125378298,
    820201905,
    3263744690,
    3520608582,
    598981189,
    4151959214,
    85089709,
    373468761,
    3827903834,
    3124367742,
    1213305469,
    1526817161,
    2842354314,
    2107672161,
    2412447074,
    2627466902,
    1861252501,
    1098587580,
    3004210879,
    2688576843,
    1378610760,
    2262928035,
    1955203488,
    1742404180,
    2511436119,
    3416409459,
    969524848,
    714683780,
    3639785095,
    205050476,
    4266873199,
    3976438427,
    526918040,
    1361435347,
    2739821008,
    2954799652,
    1114974503,
    2529119692,
    1691668175,
    2005155131,
    2247081528,
    3690758684,
    697762079,
    986182379,
    3366744552,
    476452099,
    3993867776,
    4250756596,
    255256311,
    1640403810,
    2477592673,
    2164122517,
    1922457750,
    2791048317,
    1412925310,
    1197962378,
    3037525897,
    3944729517,
    427051182,
    170179418,
    4165941337,
    746937522,
    3740196785,
    3451792453,
    1070968646,
    1905808397,
    2213795598,
    2426610938,
    1657317369,
    3053634322,
    1147748369,
    1463399397,
    2773627110,
    4215344322,
    153784257,
    444234805,
    3893493558,
    1021025245,
    3467647198,
    3722505002,
    797665321,
    2197175160,
    1889384571,
    1674398607,
    2443626636,
    1164749927,
    3070701412,
    2757221520,
    1446797203,
    137323447,
    4198817972,
    3910406976,
    461344835,
    3484808360,
    1037989803,
    781091935,
    3705997148,
    2460548119,
    1623424788,
    1939049696,
    2180517859,
    1429367560,
    2807687179,
    3020495871,
    1180866812,
    410100952,
    3927582683,
    4182430767,
    186734380,
    3756733383,
    763408580,
    1053836080,
    3434856499,
    2722870694,
    1344288421,
    1131464017,
    2971354706,
    1708204729,
    2545590714,
    2229949006,
    1988219213,
    680717673,
    3673779818,
    3383336350,
    1002577565,
    4010310262,
    493091189,
    238226049,
    4233660802,
    2987750089,
    1082061258,
    1395524158,
    2705686845,
    1972364758,
    2279892693,
    2494862625,
    1725896226,
    952904198,
    3399985413,
    3656866545,
    731699698,
    4283874585,
    222117402,
    510512622,
    3959836397,
    3280807620,
    837199303,
    582374963,
    3504198960,
    68661723,
    4135334616,
    3844915500,
    390545967,
    1230274059,
    3141532936,
    2825850620,
    1510247935,
    2395924756,
    2091215383,
    1878366691,
    2644384480,
    3553878443,
    565732008,
    854102364,
    3229815391,
    340358836,
    3861050807,
    4117890627,
    119113024,
    1493875044,
    2875275879,
    3090270611,
    1247431312,
    2660249211,
    1828433272,
    2141937292,
    2378227087,
    3811616794,
    291187481,
    34330861,
    4032846830,
    615137029,
    3603020806,
    3314634738,
    939183345,
    1776939221,
    2609017814,
    2295496738,
    2058945313,
    2926798794,
    1545135305,
    1330124605,
    3173225534,
    4084100981,
    17165430,
    307568514,
    3762199681,
    888469610,
    3332340585,
    3587147933,
    665062302,
    2042050490,
    2346497209,
    2559330125,
    1793573966,
    3190661285,
    1279665062,
    1595330642,
    2910671697
  ];
  var lookupTable = uint32ArrayFrom(a_lookupTable);

  // node_modules/@aws-sdk/crc64-nvme/dist-es/Crc64Nvme.js
  var generateCRC64NVMETable = () => {
    const sliceLength = 8;
    const tables = new Array(sliceLength);
    for (let slice = 0; slice < sliceLength; slice++) {
      const table = new Array(512);
      for (let i2 = 0; i2 < 256; i2++) {
        let crc = BigInt(i2);
        for (let j2 = 0; j2 < 8 * (slice + 1); j2++) {
          if (crc & /* @__PURE__ */ BigInt("1")) {
            crc = crc >> /* @__PURE__ */ BigInt("1") ^ /* @__PURE__ */ BigInt("0x9a6c9329ac4bc9b5");
          } else {
            crc = crc >> /* @__PURE__ */ BigInt("1");
          }
        }
        table[i2 * 2] = Number(crc >> /* @__PURE__ */ BigInt("32") & /* @__PURE__ */ BigInt("0xffffffff"));
        table[i2 * 2 + 1] = Number(crc & /* @__PURE__ */ BigInt("0xffffffff"));
      }
      tables[slice] = new Uint32Array(table);
    }
    return tables;
  };
  var CRC64_NVME_REVERSED_TABLE;
  var t0;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  var t6;
  var t7;
  var ensureTablesInitialized = () => {
    if (!CRC64_NVME_REVERSED_TABLE) {
      CRC64_NVME_REVERSED_TABLE = generateCRC64NVMETable();
      [t0, t1, t2, t3, t4, t5, t6, t7] = CRC64_NVME_REVERSED_TABLE;
    }
  };
  var Crc64Nvme = class {
    constructor() {
      __publicField(this, "c1", 0);
      __publicField(this, "c2", 0);
      ensureTablesInitialized();
      this.reset();
    }
    update(data) {
      const len = data.length;
      let i2 = 0;
      let crc1 = this.c1;
      let crc2 = this.c2;
      while (i2 + 8 <= len) {
        const idx0 = ((crc2 ^ data[i2++]) & 255) << 1;
        const idx1 = ((crc2 >>> 8 ^ data[i2++]) & 255) << 1;
        const idx2 = ((crc2 >>> 16 ^ data[i2++]) & 255) << 1;
        const idx3 = ((crc2 >>> 24 ^ data[i2++]) & 255) << 1;
        const idx4 = ((crc1 ^ data[i2++]) & 255) << 1;
        const idx5 = ((crc1 >>> 8 ^ data[i2++]) & 255) << 1;
        const idx6 = ((crc1 >>> 16 ^ data[i2++]) & 255) << 1;
        const idx7 = ((crc1 >>> 24 ^ data[i2++]) & 255) << 1;
        crc1 = t7[idx0] ^ t6[idx1] ^ t5[idx2] ^ t4[idx3] ^ t3[idx4] ^ t2[idx5] ^ t1[idx6] ^ t0[idx7];
        crc2 = t7[idx0 + 1] ^ t6[idx1 + 1] ^ t5[idx2 + 1] ^ t4[idx3 + 1] ^ t3[idx4 + 1] ^ t2[idx5 + 1] ^ t1[idx6 + 1] ^ t0[idx7 + 1];
      }
      while (i2 < len) {
        const idx = ((crc2 ^ data[i2]) & 255) << 1;
        crc2 = (crc2 >>> 8 | (crc1 & 255) << 24) >>> 0;
        crc1 = crc1 >>> 8 ^ t0[idx];
        crc2 ^= t0[idx + 1];
        i2++;
      }
      this.c1 = crc1;
      this.c2 = crc2;
    }
    digest() {
      return __async(this, null, function* () {
        const c1 = this.c1 ^ 4294967295;
        const c2 = this.c2 ^ 4294967295;
        return new Uint8Array([
          c1 >>> 24,
          c1 >>> 16 & 255,
          c1 >>> 8 & 255,
          c1 & 255,
          c2 >>> 24,
          c2 >>> 16 & 255,
          c2 >>> 8 & 255,
          c2 & 255
        ]);
      });
    }
    reset() {
      this.c1 = 4294967295;
      this.c2 = 4294967295;
    }
  };

  // node_modules/@aws-sdk/crc64-nvme/dist-es/crc64-nvme-crt-container.js
  var crc64NvmeCrtContainer = {
    CrtCrc64Nvme: null
  };

  // node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
  var AwsCrc32 = (
    /** @class */
    (function() {
      function AwsCrc322() {
        this.crc32 = new Crc32();
      }
      AwsCrc322.prototype.update = function(toHash) {
        if (isEmptyData(toHash))
          return;
        this.crc32.update(convertToBuffer(toHash));
      };
      AwsCrc322.prototype.digest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            return [2, numToUint8(this.crc32.digest())];
          });
        });
      };
      AwsCrc322.prototype.reset = function() {
        this.crc32 = new Crc32();
      };
      return AwsCrc322;
    })()
  );

  // node_modules/@aws-crypto/crc32/build/module/index.js
  var Crc32 = (
    /** @class */
    (function() {
      function Crc322() {
        this.checksum = 4294967295;
      }
      Crc322.prototype.update = function(data) {
        var e_1, _a3;
        try {
          for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var byte = data_1_1.value;
            this.checksum = this.checksum >>> 8 ^ lookupTable2[(this.checksum ^ byte) & 255];
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (data_1_1 && !data_1_1.done && (_a3 = data_1.return)) _a3.call(data_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return this;
      };
      Crc322.prototype.digest = function() {
        return (this.checksum ^ 4294967295) >>> 0;
      };
      return Crc322;
    })()
  );
  var a_lookUpTable = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918e3,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ];
  var lookupTable2 = uint32ArrayFrom(a_lookUpTable);

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getCrc32ChecksumAlgorithmFunction.browser.js
  var getCrc32ChecksumAlgorithmFunction = () => AwsCrc32;

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
  var CLIENT_SUPPORTED_ALGORITHMS = [
    ChecksumAlgorithm.CRC32,
    ChecksumAlgorithm.CRC32C,
    ChecksumAlgorithm.CRC64NVME,
    ChecksumAlgorithm.SHA1,
    ChecksumAlgorithm.SHA256
  ];
  var PRIORITY_ORDER_ALGORITHMS = [
    ChecksumAlgorithm.SHA256,
    ChecksumAlgorithm.SHA1,
    ChecksumAlgorithm.CRC32,
    ChecksumAlgorithm.CRC32C,
    ChecksumAlgorithm.CRC64NVME
  ];

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
  var selectChecksumAlgorithmFunction = (checksumAlgorithm, config) => {
    var _a3, _b2, _c2, _d2, _e2, _f, _g;
    const { checksumAlgorithms = {} } = config;
    switch (checksumAlgorithm) {
      case ChecksumAlgorithm.MD5:
        return (_a3 = checksumAlgorithms == null ? void 0 : checksumAlgorithms.MD5) != null ? _a3 : config.md5;
      case ChecksumAlgorithm.CRC32:
        return (_b2 = checksumAlgorithms == null ? void 0 : checksumAlgorithms.CRC32) != null ? _b2 : getCrc32ChecksumAlgorithmFunction();
      case ChecksumAlgorithm.CRC32C:
        return (_c2 = checksumAlgorithms == null ? void 0 : checksumAlgorithms.CRC32C) != null ? _c2 : AwsCrc32c;
      case ChecksumAlgorithm.CRC64NVME:
        if (typeof crc64NvmeCrtContainer.CrtCrc64Nvme !== "function") {
          return (_d2 = checksumAlgorithms == null ? void 0 : checksumAlgorithms.CRC64NVME) != null ? _d2 : Crc64Nvme;
        }
        return (_e2 = checksumAlgorithms == null ? void 0 : checksumAlgorithms.CRC64NVME) != null ? _e2 : crc64NvmeCrtContainer.CrtCrc64Nvme;
      case ChecksumAlgorithm.SHA1:
        return (_f = checksumAlgorithms == null ? void 0 : checksumAlgorithms.SHA1) != null ? _f : config.sha1;
      case ChecksumAlgorithm.SHA256:
        return (_g = checksumAlgorithms == null ? void 0 : checksumAlgorithms.SHA256) != null ? _g : config.sha256;
      default:
        if (checksumAlgorithms == null ? void 0 : checksumAlgorithms[checksumAlgorithm]) {
          return checksumAlgorithms[checksumAlgorithm];
        }
        throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client. Select one of ${CLIENT_SUPPORTED_ALGORITHMS}, or provide an implementation to  the client constructor checksums field.`);
    }
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
  init_dist_es();
  var stringHasher = (checksumAlgorithmFn, body) => {
    const hash = new checksumAlgorithmFn();
    hash.update(toUint8Array(body || ""));
    return hash.digest();
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
  var flexibleChecksumsMiddlewareOptions = {
    name: "flexibleChecksumsMiddleware",
    step: "build",
    tags: ["BODY_CHECKSUM"],
    override: true
  };
  var flexibleChecksumsMiddleware = (config, middlewareConfig) => (next, context) => (args) => __async(null, null, function* () {
    if (!HttpRequest2.isInstance(args.request)) {
      return next(args);
    }
    if (hasHeaderWithPrefix("x-amz-checksum-", args.request.headers)) {
      return next(args);
    }
    const { request, input } = args;
    const { body: requestBody, headers } = request;
    const { base64Encoder, streamHasher } = config;
    const { requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;
    const requestChecksumCalculation = yield config.requestChecksumCalculation();
    const requestAlgorithmMemberName = requestAlgorithmMember == null ? void 0 : requestAlgorithmMember.name;
    const requestAlgorithmMemberHttpHeader = requestAlgorithmMember == null ? void 0 : requestAlgorithmMember.httpHeader;
    if (requestAlgorithmMemberName && !input[requestAlgorithmMemberName]) {
      if (requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired) {
        input[requestAlgorithmMemberName] = DEFAULT_CHECKSUM_ALGORITHM;
        if (requestAlgorithmMemberHttpHeader) {
          headers[requestAlgorithmMemberHttpHeader] = DEFAULT_CHECKSUM_ALGORITHM;
        }
      }
    }
    const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
      requestChecksumRequired,
      requestAlgorithmMember: requestAlgorithmMember == null ? void 0 : requestAlgorithmMember.name,
      requestChecksumCalculation
    });
    let updatedBody = requestBody;
    let updatedHeaders = headers;
    if (checksumAlgorithm) {
      switch (checksumAlgorithm) {
        case ChecksumAlgorithm.CRC32:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
          break;
        case ChecksumAlgorithm.CRC32C:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
          break;
        case ChecksumAlgorithm.CRC64NVME:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
          break;
        case ChecksumAlgorithm.SHA1:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
          break;
        case ChecksumAlgorithm.SHA256:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
          break;
      }
      const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
      const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
      if (isStreaming(requestBody)) {
        const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream2, bodyLengthChecker } = config;
        updatedBody = getAwsChunkedEncodingStream2(typeof config.requestStreamBufferSize === "number" && config.requestStreamBufferSize >= 8 * 1024 ? createBufferedReadable(requestBody, config.requestStreamBufferSize, context.logger) : requestBody, {
          base64Encoder,
          bodyLengthChecker,
          checksumLocationName,
          checksumAlgorithmFn,
          streamHasher
        });
        updatedHeaders = __spreadProps(__spreadValues({}, headers), {
          "content-encoding": headers["content-encoding"] ? `${headers["content-encoding"]},aws-chunked` : "aws-chunked",
          "transfer-encoding": "chunked",
          "x-amz-decoded-content-length": headers["content-length"],
          "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
          "x-amz-trailer": checksumLocationName
        });
        delete updatedHeaders["content-length"];
      } else if (!hasHeader(checksumLocationName, headers)) {
        const rawChecksum = yield stringHasher(checksumAlgorithmFn, requestBody);
        updatedHeaders = __spreadProps(__spreadValues({}, headers), {
          [checksumLocationName]: base64Encoder(rawChecksum)
        });
      }
    }
    try {
      const result = yield next(__spreadProps(__spreadValues({}, args), {
        request: __spreadProps(__spreadValues({}, request), {
          headers: updatedHeaders,
          body: updatedBody
        })
      }));
      return result;
    } catch (e2) {
      if (e2 instanceof Error && e2.name === "InvalidChunkSizeError") {
        try {
          if (!e2.message.endsWith(".")) {
            e2.message += ".";
          }
          e2.message += " Set [requestStreamBufferSize=number e.g. 65_536] in client constructor to instruct AWS SDK to buffer your input stream.";
        } catch (ignored) {
        }
      }
      throw e2;
    }
  });

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsInputMiddleware.js
  var flexibleChecksumsInputMiddlewareOptions = {
    name: "flexibleChecksumsInputMiddleware",
    toMiddleware: "serializerMiddleware",
    relation: "before",
    tags: ["BODY_CHECKSUM"],
    override: true
  };
  var flexibleChecksumsInputMiddleware = (config, middlewareConfig) => (next, context) => (args) => __async(null, null, function* () {
    const input = args.input;
    const { requestValidationModeMember } = middlewareConfig;
    const requestChecksumCalculation = yield config.requestChecksumCalculation();
    const responseChecksumValidation = yield config.responseChecksumValidation();
    switch (requestChecksumCalculation) {
      case RequestChecksumCalculation.WHEN_REQUIRED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
        break;
      case RequestChecksumCalculation.WHEN_SUPPORTED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
        break;
    }
    switch (responseChecksumValidation) {
      case ResponseChecksumValidation.WHEN_REQUIRED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
        break;
      case ResponseChecksumValidation.WHEN_SUPPORTED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
        break;
    }
    if (requestValidationModeMember && !input[requestValidationModeMember]) {
      if (responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED) {
        input[requestValidationModeMember] = "ENABLED";
      }
    }
    return next(args);
  });

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
  var getChecksumAlgorithmListForResponse = (responseAlgorithms = []) => {
    const validChecksumAlgorithms = [];
    let i2 = PRIORITY_ORDER_ALGORITHMS.length;
    for (const algorithm of responseAlgorithms) {
      const priority = PRIORITY_ORDER_ALGORITHMS.indexOf(algorithm);
      if (priority !== -1) {
        validChecksumAlgorithms[priority] = algorithm;
      } else {
        validChecksumAlgorithms[i2++] = algorithm;
      }
    }
    return validChecksumAlgorithms.filter(Boolean);
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
  var isChecksumWithPartNumber = (checksum) => {
    const lastHyphenIndex = checksum.lastIndexOf("-");
    if (lastHyphenIndex !== -1) {
      const numberPart = checksum.slice(lastHyphenIndex + 1);
      if (!numberPart.startsWith("0")) {
        const number = parseInt(numberPart, 10);
        if (!isNaN(number) && number >= 1 && number <= 1e4) {
          return true;
        }
      }
    }
    return false;
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
  var getChecksum = (_0, _1) => __async(null, [_0, _1], function* (body, { checksumAlgorithmFn, base64Encoder }) {
    return base64Encoder(yield stringHasher(checksumAlgorithmFn, body));
  });

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
  var validateChecksumFromResponse = (_0, _1) => __async(null, [_0, _1], function* (response, { config, responseAlgorithms, logger: logger2 }) {
    const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
    const { body: responseBody, headers: responseHeaders } = response;
    for (const algorithm of checksumAlgorithms) {
      const responseHeader = getChecksumLocationName(algorithm);
      const checksumFromResponse = responseHeaders[responseHeader];
      if (checksumFromResponse) {
        let checksumAlgorithmFn;
        try {
          checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config);
        } catch (error) {
          if (algorithm === ChecksumAlgorithm.CRC64NVME) {
            logger2 == null ? void 0 : logger2.warn(`Skipping ${ChecksumAlgorithm.CRC64NVME} checksum validation: ${error.message}`);
            continue;
          }
          throw error;
        }
        const { base64Encoder } = config;
        if (isStreaming(responseBody)) {
          response.body = createChecksumStream({
            expectedChecksum: checksumFromResponse,
            checksumSourceLocation: responseHeader,
            checksum: new checksumAlgorithmFn(),
            source: responseBody,
            base64Encoder
          });
          return;
        }
        const checksum = yield getChecksum(responseBody, { checksumAlgorithmFn, base64Encoder });
        if (checksum === checksumFromResponse) {
          break;
        }
        throw new Error(`Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}" in response header "${responseHeader}".`);
      }
    }
  });

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
  var flexibleChecksumsResponseMiddlewareOptions = {
    name: "flexibleChecksumsResponseMiddleware",
    toMiddleware: "deserializerMiddleware",
    relation: "after",
    tags: ["BODY_CHECKSUM"],
    override: true
  };
  var flexibleChecksumsResponseMiddleware = (config, middlewareConfig) => (next, context) => (args) => __async(null, null, function* () {
    var _a3;
    if (!HttpRequest2.isInstance(args.request)) {
      return next(args);
    }
    const input = args.input;
    const result = yield next(args);
    const response = result.response;
    const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
    if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
      const { clientName, commandName } = context;
      const customChecksumAlgorithms = Object.keys((_a3 = config.checksumAlgorithms) != null ? _a3 : {}).filter((algorithm) => {
        const responseHeader = getChecksumLocationName(algorithm);
        return response.headers[responseHeader] !== void 0;
      });
      const algoList = getChecksumAlgorithmListForResponse([
        ...responseAlgorithms != null ? responseAlgorithms : [],
        ...customChecksumAlgorithms
      ]);
      const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && algoList.every((algorithm) => {
        const responseHeader = getChecksumLocationName(algorithm);
        const checksumFromResponse = response.headers[responseHeader];
        return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
      });
      if (isS3WholeObjectMultipartGetResponseChecksum) {
        return result;
      }
      yield validateChecksumFromResponse(response, {
        config,
        responseAlgorithms: algoList,
        logger: context.logger
      });
    }
    return result;
  });

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
  var getFlexibleChecksumsPlugin = (config, middlewareConfig) => ({
    applyToStack: (clientStack) => {
      clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
      clientStack.addRelativeTo(flexibleChecksumsInputMiddleware(config, middlewareConfig), flexibleChecksumsInputMiddlewareOptions);
      clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
  var getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

  // node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
  var normalizeProvider = (input) => {
    if (typeof input === "function")
      return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
  };

  // node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/resolveFlexibleChecksumsConfig.js
  var resolveFlexibleChecksumsConfig = (input) => {
    var _a3;
    const { requestChecksumCalculation, responseChecksumValidation, requestStreamBufferSize } = input;
    return Object.assign(input, {
      requestChecksumCalculation: normalizeProvider(requestChecksumCalculation != null ? requestChecksumCalculation : DEFAULT_REQUEST_CHECKSUM_CALCULATION),
      responseChecksumValidation: normalizeProvider(responseChecksumValidation != null ? responseChecksumValidation : DEFAULT_RESPONSE_CHECKSUM_VALIDATION),
      requestStreamBufferSize: Number(requestStreamBufferSize != null ? requestStreamBufferSize : 0),
      checksumAlgorithms: (_a3 = input.checksumAlgorithms) != null ? _a3 : {}
    });
  };

  // node_modules/@aws-sdk/middleware-host-header/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest3 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery3(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery3(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
  function resolveHostHeaderConfig(input) {
    return input;
  }
  var hostHeaderMiddleware = (options) => (next) => (args) => __async(null, null, function* () {
    if (!HttpRequest3.isInstance(args.request))
      return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
      delete request.headers["host"];
      request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    } else if (!request.headers["host"]) {
      let host = request.hostname;
      if (request.port != null)
        host += `:${request.port}`;
      request.headers["host"] = host;
    }
    return next(args);
  });
  var hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true
  };
  var getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
  var loggerMiddleware = () => (next, context) => (args) => __async(null, null, function* () {
    var _b2, _c2;
    try {
      const response = yield next(args);
      const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
      const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
      const inputFilterSensitiveLog = overrideInputFilterSensitiveLog != null ? overrideInputFilterSensitiveLog : context.inputFilterSensitiveLog;
      const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog != null ? overrideOutputFilterSensitiveLog : context.outputFilterSensitiveLog;
      const _a3 = response.output, { $metadata } = _a3, outputWithoutMetadata = __objRest(_a3, ["$metadata"]);
      (_b2 = logger2 == null ? void 0 : logger2.info) == null ? void 0 : _b2.call(logger2, {
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        output: outputFilterSensitiveLog(outputWithoutMetadata),
        metadata: $metadata
      });
      return response;
    } catch (error) {
      const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
      const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
      const inputFilterSensitiveLog = overrideInputFilterSensitiveLog != null ? overrideInputFilterSensitiveLog : context.inputFilterSensitiveLog;
      (_c2 = logger2 == null ? void 0 : logger2.error) == null ? void 0 : _c2.call(logger2, {
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        error,
        metadata: error.$metadata
      });
      throw error;
    }
  });
  var loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true
  };
  var getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-recursion-detection/dist-es/configuration.js
  var recursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low"
  };

  // node_modules/@aws-sdk/middleware-recursion-detection/dist-es/recursionDetectionMiddleware.browser.js
  var recursionDetectionMiddleware = () => (next) => (args) => __async(null, null, function* () {
    return next(args);
  });

  // node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js
  var getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-sdk-s3/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest4 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery4(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery4(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@aws-sdk/middleware-sdk-s3/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse = class {
    constructor(options) {
      __publicField(this, "statusCode");
      __publicField(this, "reason");
      __publicField(this, "headers");
      __publicField(this, "body");
      this.statusCode = options.statusCode;
      this.reason = options.reason;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };

  // node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
  var getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
      _aliases.push(name);
    }
    if (aliases) {
      for (const alias of aliases) {
        _aliases.push(alias);
      }
    }
    return _aliases;
  };
  var getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
  };
  var constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = /* @__PURE__ */ new Set();
    const sort = (entries2) => entries2.sort((a2, b2) => stepWeights[b2.step] - stepWeights[a2.step] || priorityWeights[b2.priority || "normal"] - priorityWeights[a2.priority || "normal"]);
    const removeByName = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        const aliases = getAllAliases(entry.name, entry.aliases);
        if (aliases.includes(toRemove)) {
          isRemoved = true;
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const removeByReference = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        if (entry.middleware === toRemove) {
          isRemoved = true;
          for (const alias of getAllAliases(entry.name, entry.aliases)) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const cloneTo = (toStack) => {
      var _a3;
      absoluteEntries.forEach((entry) => {
        toStack.add(entry.middleware, __spreadValues({}, entry));
      });
      relativeEntries.forEach((entry) => {
        toStack.addRelativeTo(entry.middleware, __spreadValues({}, entry));
      });
      (_a3 = toStack.identifyOnResolve) == null ? void 0 : _a3.call(toStack, stack.identifyOnResolve());
      return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
      const expandedMiddlewareList = [];
      from.before.forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      expandedMiddlewareList.push(from);
      from.after.reverse().forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
      const normalizedAbsoluteEntries = [];
      const normalizedRelativeEntries = [];
      const normalizedEntriesNameMap = {};
      absoluteEntries.forEach((entry) => {
        const normalizedEntry = __spreadProps(__spreadValues({}, entry), {
          before: [],
          after: []
        });
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedAbsoluteEntries.push(normalizedEntry);
      });
      relativeEntries.forEach((entry) => {
        const normalizedEntry = __spreadProps(__spreadValues({}, entry), {
          before: [],
          after: []
        });
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedRelativeEntries.push(normalizedEntry);
      });
      normalizedRelativeEntries.forEach((entry) => {
        if (entry.toMiddleware) {
          const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
          if (toMiddleware === void 0) {
            if (debug) {
              return;
            }
            throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
          }
          if (entry.relation === "after") {
            toMiddleware.after.push(entry);
          }
          if (entry.relation === "before") {
            toMiddleware.before.push(entry);
          }
        }
      });
      const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
        wholeList.push(...expandedMiddlewareList);
        return wholeList;
      }, []);
      return mainChain;
    };
    const stack = {
      add: (middleware, options = {}) => {
        const { name, override, aliases: _aliases } = options;
        const entry = __spreadValues({
          step: "initialize",
          priority: "normal",
          middleware
        }, options);
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = absoluteEntries.findIndex((entry2) => {
                var _a3;
                return entry2.name === alias || ((_a3 = entry2.aliases) == null ? void 0 : _a3.some((a2) => a2 === alias));
              });
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = absoluteEntries[toOverrideIndex];
              if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
              }
              absoluteEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        absoluteEntries.push(entry);
      },
      addRelativeTo: (middleware, options) => {
        const { name, override, aliases: _aliases } = options;
        const entry = __spreadValues({
          middleware
        }, options);
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = relativeEntries.findIndex((entry2) => {
                var _a3;
                return entry2.name === alias || ((_a3 = entry2.aliases) == null ? void 0 : _a3.some((a2) => a2 === alias));
              });
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = relativeEntries[toOverrideIndex];
              if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
              }
              relativeEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        relativeEntries.push(entry);
      },
      clone: () => cloneTo(constructStack()),
      use: (plugin) => {
        plugin.applyToStack(stack);
      },
      remove: (toRemove) => {
        if (typeof toRemove === "string")
          return removeByName(toRemove);
        else
          return removeByReference(toRemove);
      },
      removeByTag: (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const { tags, name, aliases: _aliases } = entry;
          if (tags && tags.includes(toRemove)) {
            const aliases = getAllAliases(name, _aliases);
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            isRemoved = true;
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      },
      concat: (from) => {
        var _a3, _b2;
        const cloned = cloneTo(constructStack());
        cloned.use(from);
        cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || ((_b2 = (_a3 = from.identifyOnResolve) == null ? void 0 : _a3.call(from)) != null ? _b2 : false));
        return cloned;
      },
      applyToStack: cloneTo,
      identify: () => {
        return getMiddlewareList(true).map((mw) => {
          var _a3;
          const step = (_a3 = mw.step) != null ? _a3 : mw.relation + " " + mw.toMiddleware;
          return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
        });
      },
      identifyOnResolve(toggle) {
        if (typeof toggle === "boolean")
          identifyOnResolve = toggle;
        return identifyOnResolve;
      },
      resolve: (handler, context) => {
        for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
          handler = middleware(handler, context);
        }
        if (identifyOnResolve) {
          console.log(stack.identify());
        }
        return handler;
      }
    };
    return stack;
  };
  var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
  };
  var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1
  };

  // node_modules/@smithy/smithy-client/dist-es/client.js
  var Client = class {
    constructor(config) {
      __publicField(this, "config");
      __publicField(this, "middlewareStack", constructStack());
      __publicField(this, "initConfig");
      __publicField(this, "handlers");
      this.config = config;
      const { protocol, protocolSettings } = config;
      if (protocolSettings) {
        if (typeof protocol === "function") {
          config.protocol = new protocol(protocolSettings);
        }
      }
    }
    send(command, optionsOrCb, cb) {
      const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
      const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
      const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
      let handler;
      if (useHandlerCache) {
        if (!this.handlers) {
          this.handlers = /* @__PURE__ */ new WeakMap();
        }
        const handlers = this.handlers;
        if (handlers.has(command.constructor)) {
          handler = handlers.get(command.constructor);
        } else {
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          handlers.set(command.constructor, handler);
        }
      } else {
        delete this.handlers;
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
      }
      if (callback) {
        handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
        });
      } else {
        return handler(command).then((result) => result.output);
      }
    }
    destroy() {
      var _a3, _b2, _c2;
      (_c2 = (_b2 = (_a3 = this.config) == null ? void 0 : _a3.requestHandler) == null ? void 0 : _b2.destroy) == null ? void 0 : _c2.call(_b2);
      delete this.handlers;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
  var collectBody = (..._0) => __async(null, [..._0], function* (streamBody = new Uint8Array(), context) {
    if (streamBody instanceof Uint8Array) {
      return Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
      return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return Uint8ArrayBlobAdapter.mutate(yield fromContext);
  });

  // node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
  function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c2) {
      return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  // node_modules/@smithy/core/dist-es/submodules/schema/deref.js
  var deref = (schemaRef) => {
    if (typeof schemaRef === "function") {
      return schemaRef();
    }
    return schemaRef;
  };

  // node_modules/@smithy/core/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest5 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery5(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery5(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@smithy/core/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse2 = class {
    constructor(options) {
      __publicField(this, "statusCode");
      __publicField(this, "reason");
      __publicField(this, "headers");
      __publicField(this, "body");
      this.statusCode = options.statusCode;
      this.reason = options.reason;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
  var operation = (namespace, name, traits, input, output) => ({
    name,
    namespace,
    traits,
    input,
    output
  });

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
  var schemaDeserializationMiddleware = (config) => (next, context) => (args) => __async(null, null, function* () {
    var _a3, _b2, _c2, _d2;
    const { response } = yield next(args);
    const { operationSchema } = getSmithyContext(context);
    const [, ns, n2, t8, i2, o2] = operationSchema != null ? operationSchema : [];
    try {
      const parsed = yield config.protocol.deserializeResponse(operation(ns, n2, t8, i2, o2), __spreadValues(__spreadValues({}, config), context), response);
      return {
        response,
        output: parsed
      };
    } catch (error) {
      Object.defineProperty(error, "$response", {
        value: response,
        enumerable: false,
        writable: false,
        configurable: false
      });
      if (!("$metadata" in error)) {
        const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        try {
          error.message += "\n  " + hint;
        } catch (e2) {
          if (!context.logger || ((_b2 = (_a3 = context.logger) == null ? void 0 : _a3.constructor) == null ? void 0 : _b2.name) === "NoOpLogger") {
            console.warn(hint);
          } else {
            (_d2 = (_c2 = context.logger) == null ? void 0 : _c2.warn) == null ? void 0 : _d2.call(_c2, hint);
          }
        }
        if (typeof error.$responseBodyText !== "undefined") {
          if (error.$response) {
            error.$response.body = error.$responseBodyText;
          }
        }
        try {
          if (HttpResponse2.isInstance(response)) {
            const { headers = {} } = response;
            const headerEntries = Object.entries(headers);
            error.$metadata = {
              httpStatusCode: response.statusCode,
              requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
              extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
              cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
            };
          }
        } catch (e2) {
        }
      }
      throw error;
    }
  });
  var findHeader = (pattern, headers) => {
    return (headers.find(([k2]) => {
      return k2.match(pattern);
    }) || [void 0, void 0])[1];
  };

  // node_modules/@smithy/querystring-parser/dist-es/index.js
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }

  // node_modules/@smithy/url-parser/dist-es/index.js
  var parseUrl = (url) => {
    if (typeof url === "string") {
      return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
      query = parseQueryString(search);
    }
    return {
      hostname,
      port: port ? parseInt(port) : void 0,
      protocol,
      path: pathname,
      query
    };
  };

  // node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js
  var toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
      if ("url" in endpoint) {
        const v1Endpoint = parseUrl(endpoint.url);
        if (endpoint.headers) {
          v1Endpoint.headers = {};
          for (const name in endpoint.headers) {
            v1Endpoint.headers[name.toLowerCase()] = endpoint.headers[name].join(", ");
          }
        }
        return v1Endpoint;
      }
      return endpoint;
    }
    return parseUrl(endpoint);
  };

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
  var schemaSerializationMiddleware = (config) => (next, context) => (args) => __async(null, null, function* () {
    const { operationSchema } = getSmithyContext(context);
    const [, ns, n2, t8, i2, o2] = operationSchema != null ? operationSchema : [];
    const endpoint = context.endpointV2 ? () => __async(null, null, function* () {
      return toEndpointV1(context.endpointV2);
    }) : config.endpoint;
    const request = yield config.protocol.serializeRequest(operation(ns, n2, t8, i2, o2), args.input, __spreadProps(__spreadValues(__spreadValues({}, config), context), {
      endpoint
    }));
    return next(__spreadProps(__spreadValues({}, args), {
      request
    }));
  });

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
  var deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true
  };
  var serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true
  };
  function getSchemaSerdePlugin(config) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
        commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
        config.protocol.setSerdeContext(config);
      }
    };
  }

  // node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
  var traitsCache = [];
  function translateTraits(indicator) {
    if (typeof indicator === "object") {
      return indicator;
    }
    indicator = indicator | 0;
    if (traitsCache[indicator]) {
      return traitsCache[indicator];
    }
    const traits = {};
    let i2 = 0;
    for (const trait of [
      "httpLabel",
      "idempotent",
      "idempotencyToken",
      "sensitive",
      "httpPayload",
      "httpResponseCode",
      "httpQueryParams"
    ]) {
      if ((indicator >> i2++ & 1) === 1) {
        traits[trait] = 1;
      }
    }
    return traitsCache[indicator] = traits;
  }

  // node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
  var anno = {
    it: /* @__PURE__ */ Symbol.for("@smithy/nor-struct-it"),
    ns: /* @__PURE__ */ Symbol.for("@smithy/ns")
  };
  var simpleSchemaCacheN = [];
  var simpleSchemaCacheS = {};
  var _NormalizedSchema = class _NormalizedSchema {
    constructor(ref, memberName) {
      __publicField(this, "ref");
      __publicField(this, "memberName");
      __publicField(this, "symbol", _NormalizedSchema.symbol);
      __publicField(this, "name");
      __publicField(this, "schema");
      __publicField(this, "_isMemberSchema");
      __publicField(this, "traits");
      __publicField(this, "memberTraits");
      __publicField(this, "normalizedTraits");
      var _a3;
      this.ref = ref;
      this.memberName = memberName;
      const traitStack = [];
      let _ref = ref;
      let schema = ref;
      this._isMemberSchema = false;
      while (isMemberSchema(_ref)) {
        traitStack.push(_ref[1]);
        _ref = _ref[0];
        schema = deref(_ref);
        this._isMemberSchema = true;
      }
      if (traitStack.length > 0) {
        this.memberTraits = {};
        for (let i2 = traitStack.length - 1; i2 >= 0; --i2) {
          const traitSet = traitStack[i2];
          Object.assign(this.memberTraits, translateTraits(traitSet));
        }
      } else {
        this.memberTraits = 0;
      }
      if (schema instanceof _NormalizedSchema) {
        const computedMemberTraits = this.memberTraits;
        Object.assign(this, schema);
        this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
        this.normalizedTraits = void 0;
        this.memberName = memberName != null ? memberName : schema.memberName;
        return;
      }
      this.schema = deref(schema);
      if (isStaticSchema(this.schema)) {
        this.name = `${this.schema[1]}#${this.schema[2]}`;
        this.traits = this.schema[3];
      } else {
        this.name = (_a3 = this.memberName) != null ? _a3 : String(schema);
        this.traits = 0;
      }
      if (this._isMemberSchema && !memberName) {
        throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
      }
    }
    static [Symbol.hasInstance](lhs) {
      const isPrototype = this.prototype.isPrototypeOf(lhs);
      if (!isPrototype && typeof lhs === "object" && lhs !== null) {
        const ns = lhs;
        return ns.symbol === this.symbol;
      }
      return isPrototype;
    }
    static of(ref) {
      const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
      if (typeof ref === "number") {
        if (simpleSchemaCacheN[ref]) {
          return simpleSchemaCacheN[ref];
        }
      } else if (typeof ref === "string") {
        if (simpleSchemaCacheS[ref]) {
          return simpleSchemaCacheS[ref];
        }
      } else if (keyAble) {
        if (ref[anno.ns]) {
          return ref[anno.ns];
        }
      }
      const sc = deref(ref);
      if (sc instanceof _NormalizedSchema) {
        return sc;
      }
      if (isMemberSchema(sc)) {
        const [ns2, traits] = sc;
        if (ns2 instanceof _NormalizedSchema) {
          Object.assign(ns2.getMergedTraits(), translateTraits(traits));
          return ns2;
        }
        throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
      }
      const ns = new _NormalizedSchema(sc);
      if (keyAble) {
        return ref[anno.ns] = ns;
      }
      if (typeof sc === "string") {
        return simpleSchemaCacheS[sc] = ns;
      }
      if (typeof sc === "number") {
        return simpleSchemaCacheN[sc] = ns;
      }
      return ns;
    }
    getSchema() {
      const sc = this.schema;
      if (Array.isArray(sc) && sc[0] === 0) {
        return sc[4];
      }
      return sc;
    }
    getName(withNamespace = false) {
      const { name } = this;
      const short = !withNamespace && name && name.includes("#");
      return short ? name.split("#")[1] : name || void 0;
    }
    getMemberName() {
      return this.memberName;
    }
    isMemberSchema() {
      return this._isMemberSchema;
    }
    isListSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
    }
    isMapSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
    }
    isStructSchema() {
      const sc = this.getSchema();
      if (typeof sc !== "object") {
        return false;
      }
      const id = sc[0];
      return id === 3 || id === -3 || id === 4;
    }
    isUnionSchema() {
      const sc = this.getSchema();
      if (typeof sc !== "object") {
        return false;
      }
      return sc[0] === 4;
    }
    isBlobSchema() {
      const sc = this.getSchema();
      return sc === 21 || sc === 42;
    }
    isTimestampSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" && sc >= 4 && sc <= 7;
    }
    isUnitSchema() {
      return this.getSchema() === "unit";
    }
    isDocumentSchema() {
      return this.getSchema() === 15;
    }
    isStringSchema() {
      return this.getSchema() === 0;
    }
    isBooleanSchema() {
      return this.getSchema() === 2;
    }
    isNumericSchema() {
      return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
      return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
      return this.getSchema() === 19;
    }
    isStreaming() {
      const { streaming } = this.getMergedTraits();
      return !!streaming || this.getSchema() === 42;
    }
    isIdempotencyToken() {
      return !!this.getMergedTraits().idempotencyToken;
    }
    getMergedTraits() {
      var _a3;
      return (_a3 = this.normalizedTraits) != null ? _a3 : this.normalizedTraits = __spreadValues(__spreadValues({}, this.getOwnTraits()), this.getMemberTraits());
    }
    getMemberTraits() {
      return translateTraits(this.memberTraits);
    }
    getOwnTraits() {
      return translateTraits(this.traits);
    }
    getKeySchema() {
      var _a3;
      const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
      if (!isDoc && !isMap) {
        throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
      }
      const schema = this.getSchema();
      const memberSchema = isDoc ? 15 : (_a3 = schema[4]) != null ? _a3 : 0;
      return member([memberSchema, 0], "key");
    }
    getValueSchema() {
      const sc = this.getSchema();
      const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
      const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
      if (memberSchema != null) {
        return member([memberSchema, 0], isMap ? "value" : "member");
      }
      throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
    }
    getMemberSchema(memberName) {
      const struct = this.getSchema();
      if (this.isStructSchema() && struct[4].includes(memberName)) {
        const i2 = struct[4].indexOf(memberName);
        const memberSchema = struct[5][i2];
        return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
      }
      if (this.isDocumentSchema()) {
        return member([15, 0], memberName);
      }
      throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
    }
    getMemberSchemas() {
      const buffer = {};
      try {
        for (const [k2, v2] of this.structIterator()) {
          buffer[k2] = v2;
        }
      } catch (ignored) {
      }
      return buffer;
    }
    getEventStreamMember() {
      if (this.isStructSchema()) {
        for (const [memberName, memberSchema] of this.structIterator()) {
          if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
            return memberName;
          }
        }
      }
      return "";
    }
    *structIterator() {
      if (this.isUnitSchema()) {
        return;
      }
      if (!this.isStructSchema()) {
        throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
      }
      const struct = this.getSchema();
      const z2 = struct[4].length;
      let it = struct[anno.it];
      if (it && z2 === it.length) {
        yield* __yieldStar(it);
        return;
      }
      it = Array(z2);
      for (let i2 = 0; i2 < z2; ++i2) {
        const k2 = struct[4][i2];
        const v2 = member([struct[5][i2], 0], k2);
        yield it[i2] = [k2, v2];
      }
      struct[anno.it] = it;
    }
  };
  __publicField(_NormalizedSchema, "symbol", /* @__PURE__ */ Symbol.for("@smithy/nor"));
  var NormalizedSchema = _NormalizedSchema;
  function member(memberSchema, memberName) {
    if (memberSchema instanceof NormalizedSchema) {
      return Object.assign(memberSchema, {
        memberName,
        _isMemberSchema: true
      });
    }
    const internalCtorAccess = NormalizedSchema;
    return new internalCtorAccess(memberSchema, memberName);
  }
  var isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
  var isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;

  // node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
  var _TypeRegistry = class _TypeRegistry {
    constructor(namespace, schemas = /* @__PURE__ */ new Map(), exceptions = /* @__PURE__ */ new Map()) {
      __publicField(this, "namespace");
      __publicField(this, "schemas");
      __publicField(this, "exceptions");
      this.namespace = namespace;
      this.schemas = schemas;
      this.exceptions = exceptions;
    }
    static for(namespace) {
      if (!_TypeRegistry.registries.has(namespace)) {
        _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
      }
      return _TypeRegistry.registries.get(namespace);
    }
    copyFrom(other) {
      const { schemas, exceptions } = this;
      for (const [k2, v2] of other.schemas) {
        if (!schemas.has(k2)) {
          schemas.set(k2, v2);
        }
      }
      for (const [k2, v2] of other.exceptions) {
        if (!exceptions.has(k2)) {
          exceptions.set(k2, v2);
        }
      }
    }
    register(shapeId, schema) {
      const qualifiedName = this.normalizeShapeId(shapeId);
      for (const r2 of [this, _TypeRegistry.for(qualifiedName.split("#")[0])]) {
        r2.schemas.set(qualifiedName, schema);
      }
    }
    getSchema(shapeId) {
      const id = this.normalizeShapeId(shapeId);
      if (!this.schemas.has(id)) {
        throw new Error(`@smithy/core/schema - schema not found for ${id}`);
      }
      return this.schemas.get(id);
    }
    registerError(es, ctor) {
      const $error = es;
      const ns = $error[1];
      for (const r2 of [this, _TypeRegistry.for(ns)]) {
        r2.schemas.set(ns + "#" + $error[2], $error);
        r2.exceptions.set($error, ctor);
      }
    }
    getErrorCtor(es) {
      const $error = es;
      if (this.exceptions.has($error)) {
        return this.exceptions.get($error);
      }
      const registry = _TypeRegistry.for($error[1]);
      return registry.exceptions.get($error);
    }
    getBaseException() {
      for (const exceptionKey of this.exceptions.keys()) {
        if (Array.isArray(exceptionKey)) {
          const [, ns, name] = exceptionKey;
          const id = ns + "#" + name;
          if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
            return exceptionKey;
          }
        }
      }
      return void 0;
    }
    find(predicate) {
      for (const schema of this.schemas.values()) {
        if (predicate(schema)) {
          return schema;
        }
      }
      return void 0;
    }
    clear() {
      this.schemas.clear();
      this.exceptions.clear();
    }
    normalizeShapeId(shapeId) {
      if (shapeId.includes("#")) {
        return shapeId;
      }
      return this.namespace + "#" + shapeId;
    }
  };
  __publicField(_TypeRegistry, "registries", /* @__PURE__ */ new Map());
  var TypeRegistry = _TypeRegistry;

  // node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
  var expectNumber = (value) => {
    if (value === null || value === void 0) {
      return void 0;
    }
    if (typeof value === "string") {
      const parsed = parseFloat(value);
      if (!Number.isNaN(parsed)) {
        if (String(parsed) !== String(value)) {
          logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
        }
        return parsed;
      }
    }
    if (typeof value === "number") {
      return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
  };
  var MAX_FLOAT = Math.ceil(__pow(2, 127) * (2 - __pow(2, -23)));
  var expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
      if (Math.abs(expected) > MAX_FLOAT) {
        throw new TypeError(`Expected 32-bit float, got ${value}`);
      }
    }
    return expected;
  };
  var expectLong = (value) => {
    if (value === null || value === void 0) {
      return void 0;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
      return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
  };
  var expectShort = (value) => expectSizedInt(value, 16);
  var expectByte = (value) => expectSizedInt(value, 8);
  var expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== void 0 && castInt(expected, size) !== expected) {
      throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
  };
  var castInt = (value, size) => {
    switch (size) {
      case 32:
        return Int32Array.of(value)[0];
      case 16:
        return Int16Array.of(value)[0];
      case 8:
        return Int8Array.of(value)[0];
    }
  };
  var strictParseFloat32 = (value) => {
    if (typeof value == "string") {
      return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
  };
  var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
  var parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
      throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
  };
  var strictParseShort = (value) => {
    if (typeof value === "string") {
      return expectShort(parseNumber(value));
    }
    return expectShort(value);
  };
  var strictParseByte = (value) => {
    if (typeof value === "string") {
      return expectByte(parseNumber(value));
    }
    return expectByte(value);
  };
  var stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s2) => !s2.includes("stackTraceWarning")).join("\n");
  };
  var logger = {
    warn: console.warn
  };

  // node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
  var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function dateToUtcString(date2) {
    const year2 = date2.getUTCFullYear();
    const month = date2.getUTCMonth();
    const dayOfWeek = date2.getUTCDay();
    const dayOfMonthInt = date2.getUTCDate();
    const hoursInt = date2.getUTCHours();
    const minutesInt = date2.getUTCMinutes();
    const secondsInt = date2.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year2} ${hoursString}:${minutesString}:${secondsString} GMT`;
  }
  var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
  var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
  var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
  var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
  var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
  var parseRfc7231DateTime = (value) => {
    if (value === null || value === void 0) {
      return void 0;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
      const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
      const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
      }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
      const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
      return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
  };
  var buildDate = (year2, month, day, time2) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year2, adjustedMonth, day);
    return new Date(Date.UTC(year2, adjustedMonth, day, parseDateValue(time2.hours, "hour", 0, 23), parseDateValue(time2.minutes, "minute", 0, 59), parseDateValue(time2.seconds, "seconds", 0, 60), parseMilliseconds(time2.fractionalMilliseconds)));
  };
  var parseTwoDigitYear = (value) => {
    const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
      return valueInThisCentury + 100;
    }
    return valueInThisCentury;
  };
  var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
  var adjustRfc850Year = (input) => {
    if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
      return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
  };
  var parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
      throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
  };
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var validateDayOfMonth = (year2, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year2)) {
      maxDays = 29;
    }
    if (day > maxDays) {
      throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year2}: ${day}`);
    }
  };
  var isLeapYear = (year2) => {
    return year2 % 4 === 0 && (year2 % 100 !== 0 || year2 % 400 === 0);
  };
  var parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
      throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
  };
  var parseMilliseconds = (value) => {
    if (value === null || value === void 0) {
      return 0;
    }
    return strictParseFloat32("0." + value) * 1e3;
  };
  var stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
      idx++;
    }
    if (idx === 0) {
      return value;
    }
    return value.slice(idx);
  };

  // node_modules/@smithy/uuid/dist-es/randomUUID.browser.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);

  // node_modules/@smithy/uuid/dist-es/v4.js
  var decimalToHex = Array.from({ length: 256 }, (_, i2) => i2.toString(16).padStart(2, "0"));
  var v4 = () => {
    if (randomUUID) {
      return randomUUID();
    }
    const rnds = new Uint8Array(16);
    crypto.getRandomValues(rnds);
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
  };

  // node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
  var LazyJsonString = function LazyJsonString2(val) {
    const str = Object.assign(new String(val), {
      deserializeJSON() {
        return JSON.parse(String(val));
      },
      toString() {
        return String(val);
      },
      toJSON() {
        return String(val);
      }
    });
    return str;
  };
  LazyJsonString.from = (object) => {
    if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
      return object;
    } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
      return LazyJsonString(String(object));
    }
    return LazyJsonString(JSON.stringify(object));
  };
  LazyJsonString.fromObject = LazyJsonString.from;

  // node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
  function quoteHeader(part) {
    if (part.includes(",") || part.includes('"')) {
      part = `"${part.replace(/"/g, '\\"')}"`;
    }
    return part;
  }

  // node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js
  var ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
  var mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
  var time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
  var date = `(\\d?\\d)`;
  var year = `(\\d{4})`;
  var RFC3339_WITH_OFFSET2 = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
  var IMF_FIXDATE2 = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
  var RFC_850_DATE2 = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
  var ASC_TIME2 = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var _parseEpochTimestamp = (value) => {
    if (value == null) {
      return void 0;
    }
    let num = NaN;
    if (typeof value === "number") {
      num = value;
    } else if (typeof value === "string") {
      if (!/^-?\d*\.?\d+$/.test(value)) {
        throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
      }
      num = Number.parseFloat(value);
    } else if (typeof value === "object" && value.tag === 1) {
      num = value.value;
    }
    if (isNaN(num) || Math.abs(num) === Infinity) {
      throw new TypeError("Epoch timestamps must be valid finite numbers.");
    }
    return new Date(Math.round(num * 1e3));
  };
  var _parseRfc3339DateTimeWithOffset = (value) => {
    if (value == null) {
      return void 0;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC3339 timestamps must be strings");
    }
    const matches = RFC3339_WITH_OFFSET2.exec(value);
    if (!matches) {
      throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
    }
    const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
    range(monthStr, 1, 12);
    range(dayStr, 1, 31);
    range(hours, 0, 23);
    range(minutes, 0, 59);
    range(seconds, 0, 60);
    const date2 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1e3) : 0));
    date2.setUTCFullYear(Number(yearStr));
    if (offsetStr.toUpperCase() != "Z") {
      const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [void 0, "+", 0, 0];
      const scalar = sign === "-" ? 1 : -1;
      date2.setTime(date2.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1e3 + Number(offsetM) * 60 * 1e3));
    }
    return date2;
  };
  var _parseRfc7231DateTime = (value) => {
    if (value == null) {
      return void 0;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC7231 timestamps must be strings.");
    }
    let day;
    let month;
    let year2;
    let hour;
    let minute;
    let second;
    let fraction;
    let matches;
    if (matches = IMF_FIXDATE2.exec(value)) {
      [, day, month, year2, hour, minute, second, fraction] = matches;
    } else if (matches = RFC_850_DATE2.exec(value)) {
      [, day, month, year2, hour, minute, second, fraction] = matches;
      year2 = (Number(year2) + 1900).toString();
    } else if (matches = ASC_TIME2.exec(value)) {
      [, month, day, hour, minute, second, fraction, year2] = matches;
    }
    if (year2 && second) {
      const timestamp = Date.UTC(Number(year2), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1e3) : 0);
      range(day, 1, 31);
      range(hour, 0, 23);
      range(minute, 0, 59);
      range(second, 0, 60);
      const date2 = new Date(timestamp);
      date2.setUTCFullYear(Number(year2));
      return date2;
    }
    throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
  };
  function range(v2, min, max) {
    const _v = Number(v2);
    if (_v < min || _v > max) {
      throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
    }
  }

  // node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
  function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
      throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
      return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i2 = 0; i2 < segments.length; i2++) {
      if (currentSegment === "") {
        currentSegment = segments[i2];
      } else {
        currentSegment += delimiter + segments[i2];
      }
      if ((i2 + 1) % numDelimiters === 0) {
        compoundSegments.push(currentSegment);
        currentSegment = "";
      }
    }
    if (currentSegment !== "") {
      compoundSegments.push(currentSegment);
    }
    return compoundSegments;
  }

  // node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
  var splitHeader = (value) => {
    const z2 = value.length;
    const values = [];
    let withinQuotes = false;
    let prevChar = void 0;
    let anchor = 0;
    for (let i2 = 0; i2 < z2; ++i2) {
      const char = value[i2];
      switch (char) {
        case `"`:
          if (prevChar !== "\\") {
            withinQuotes = !withinQuotes;
          }
          break;
        case ",":
          if (!withinQuotes) {
            values.push(value.slice(anchor, i2));
            anchor = i2 + 1;
          }
          break;
        default:
      }
      prevChar = char;
    }
    values.push(value.slice(anchor));
    return values.map((v2) => {
      v2 = v2.trim();
      const z3 = v2.length;
      if (z3 < 2) {
        return v2;
      }
      if (v2[0] === `"` && v2[z3 - 1] === `"`) {
        v2 = v2.slice(1, z3 - 1);
      }
      return v2.replace(/\\"/g, '"');
    });
  };

  // node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
  var format = /^-?\d*(\.\d+)?$/;
  var NumericValue = class _NumericValue {
    constructor(string, type) {
      __publicField(this, "string");
      __publicField(this, "type");
      this.string = string;
      this.type = type;
      if (!format.test(string)) {
        throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
      }
    }
    toString() {
      return this.string;
    }
    static [Symbol.hasInstance](object) {
      if (!object || typeof object !== "object") {
        return false;
      }
      const _nv = object;
      return _NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
  var SerdeContext = class {
    constructor() {
      __publicField(this, "serdeContext");
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
  var HttpProtocol = class extends SerdeContext {
    constructor(options) {
      var _a3;
      super();
      __publicField(this, "options");
      __publicField(this, "compositeErrorRegistry");
      this.options = options;
      this.compositeErrorRegistry = TypeRegistry.for(options.defaultNamespace);
      for (const etr of (_a3 = options.errorTypeRegistries) != null ? _a3 : []) {
        this.compositeErrorRegistry.copyFrom(etr);
      }
    }
    getRequestType() {
      return HttpRequest5;
    }
    getResponseType() {
      return HttpResponse2;
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
      this.serializer.setSerdeContext(serdeContext);
      this.deserializer.setSerdeContext(serdeContext);
      if (this.getPayloadCodec()) {
        this.getPayloadCodec().setSerdeContext(serdeContext);
      }
    }
    updateServiceEndpoint(request, endpoint) {
      if ("url" in endpoint) {
        request.protocol = endpoint.url.protocol;
        request.hostname = endpoint.url.hostname;
        request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
        request.path = endpoint.url.pathname;
        request.fragment = endpoint.url.hash || void 0;
        request.username = endpoint.url.username || void 0;
        request.password = endpoint.url.password || void 0;
        if (!request.query) {
          request.query = {};
        }
        for (const [k2, v2] of endpoint.url.searchParams.entries()) {
          request.query[k2] = v2;
        }
        if (endpoint.headers) {
          for (const name in endpoint.headers) {
            request.headers[name] = endpoint.headers[name].join(", ");
          }
        }
        return request;
      } else {
        request.protocol = endpoint.protocol;
        request.hostname = endpoint.hostname;
        request.port = endpoint.port ? Number(endpoint.port) : void 0;
        request.path = endpoint.path;
        request.query = __spreadValues({}, endpoint.query);
        if (endpoint.headers) {
          for (const name in endpoint.headers) {
            request.headers[name] = endpoint.headers[name];
          }
        }
        return request;
      }
    }
    setHostPrefix(request, operationSchema, input) {
      var _a3, _b2, _c2;
      if ((_a3 = this.serdeContext) == null ? void 0 : _a3.disableHostPrefix) {
        return;
      }
      const inputNs = NormalizedSchema.of(operationSchema.input);
      const opTraits = translateTraits((_b2 = operationSchema.traits) != null ? _b2 : {});
      if (opTraits.endpoint) {
        let hostPrefix = (_c2 = opTraits.endpoint) == null ? void 0 : _c2[0];
        if (typeof hostPrefix === "string") {
          for (const [name, member2] of inputNs.structIterator()) {
            if (!member2.getMergedTraits().hostLabel) {
              continue;
            }
            const replacement = input[name];
            if (typeof replacement !== "string") {
              throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
            }
            hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
          }
          request.hostname = hostPrefix + request.hostname;
        }
      }
    }
    deserializeMetadata(output) {
      var _a3, _b2;
      return {
        httpStatusCode: output.statusCode,
        requestId: (_b2 = (_a3 = output.headers["x-amzn-requestid"]) != null ? _a3 : output.headers["x-amzn-request-id"]) != null ? _b2 : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      };
    }
    serializeEventStream(_0) {
      return __async(this, arguments, function* ({ eventStream, requestSchema, initialRequest }) {
        const eventStreamSerde = yield this.loadEventStreamCapability();
        return eventStreamSerde.serializeEventStream({
          eventStream,
          requestSchema,
          initialRequest
        });
      });
    }
    deserializeEventStream(_0) {
      return __async(this, arguments, function* ({ response, responseSchema, initialResponseContainer }) {
        const eventStreamSerde = yield this.loadEventStreamCapability();
        return eventStreamSerde.deserializeEventStream({
          response,
          responseSchema,
          initialResponseContainer
        });
      });
    }
    loadEventStreamCapability() {
      return __async(this, null, function* () {
        const { EventStreamSerde: EventStreamSerde2 } = yield Promise.resolve().then(() => (init_event_streams(), event_streams_exports));
        return new EventStreamSerde2({
          marshaller: this.getEventStreamMarshaller(),
          serializer: this.serializer,
          deserializer: this.deserializer,
          serdeContext: this.serdeContext,
          defaultContentType: this.getDefaultContentType()
        });
      });
    }
    getDefaultContentType() {
      throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    deserializeHttpMessage(schema, context, response, arg4, arg5) {
      return __async(this, null, function* () {
        void schema;
        void context;
        void response;
        void arg4;
        void arg5;
        return [];
      });
    }
    getEventStreamMarshaller() {
      const context = this.serdeContext;
      if (!context.eventStreamMarshaller) {
        throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
      }
      return context.eventStreamMarshaller;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
  var HttpBindingProtocol = class extends HttpProtocol {
    serializeRequest(operationSchema, _input, context) {
      return __async(this, null, function* () {
        var _a3, _b2;
        const input = _input && typeof _input === "object" ? _input : {};
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = yield context.endpoint();
        const ns = NormalizedSchema.of(operationSchema == null ? void 0 : operationSchema.input);
        const payloadMemberNames = [];
        const payloadMemberSchemas = [];
        let hasNonHttpBindingMember = false;
        let payload;
        const request = new HttpRequest5({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
          const opTraits = translateTraits(operationSchema.traits);
          if (opTraits.http) {
            request.method = opTraits.http[0];
            const [path, search] = opTraits.http[1].split("?");
            if (request.path == "/") {
              request.path = path;
            } else {
              request.path += path;
            }
            const traitSearchParams = new URLSearchParams(search != null ? search : "");
            for (const [key, value] of traitSearchParams) {
              query[key] = value;
            }
          }
        }
        for (const [memberName, memberNs] of ns.structIterator()) {
          const memberTraits = (_a3 = memberNs.getMergedTraits()) != null ? _a3 : {};
          const inputMemberValue = input[memberName];
          if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
            if (memberTraits.httpLabel) {
              if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) {
                throw new Error(`No value provided for input HTTP label: ${memberName}.`);
              }
            }
            continue;
          }
          if (memberTraits.httpPayload) {
            const isStreaming2 = memberNs.isStreaming();
            if (isStreaming2) {
              const isEventStream = memberNs.isStructSchema();
              if (isEventStream) {
                if (input[memberName]) {
                  payload = yield this.serializeEventStream({
                    eventStream: input[memberName],
                    requestSchema: ns
                  });
                }
              } else {
                payload = inputMemberValue;
              }
            } else {
              serializer.write(memberNs, inputMemberValue);
              payload = serializer.flush();
            }
          } else if (memberTraits.httpLabel) {
            serializer.write(memberNs, inputMemberValue);
            const replacement = serializer.flush();
            if (request.path.includes(`{${memberName}+}`)) {
              request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
            } else if (request.path.includes(`{${memberName}}`)) {
              request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
            }
          } else if (memberTraits.httpHeader) {
            serializer.write(memberNs, inputMemberValue);
            headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
          } else if (typeof memberTraits.httpPrefixHeaders === "string") {
            for (const key in inputMemberValue) {
              const val = inputMemberValue[key];
              const amalgam = memberTraits.httpPrefixHeaders + key;
              serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
              headers[amalgam.toLowerCase()] = serializer.flush();
            }
          } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
            this.serializeQuery(memberNs, inputMemberValue, query);
          } else {
            hasNonHttpBindingMember = true;
            payloadMemberNames.push(memberName);
            payloadMemberSchemas.push(memberNs);
          }
        }
        if (hasNonHttpBindingMember && input) {
          const [namespace, name] = ((_b2 = ns.getName(true)) != null ? _b2 : "#Unknown").split("#");
          const requiredMembers = ns.getSchema()[6];
          const payloadSchema = [
            3,
            namespace,
            name,
            ns.getMergedTraits(),
            payloadMemberNames,
            payloadMemberSchemas,
            void 0
          ];
          if (requiredMembers) {
            payloadSchema[6] = requiredMembers;
          } else {
            payloadSchema.pop();
          }
          serializer.write(payloadSchema, input);
          payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        return request;
      });
    }
    serializeQuery(ns, data, query) {
      const serializer = this.serializer;
      const traits = ns.getMergedTraits();
      if (traits.httpQueryParams) {
        for (const key in data) {
          if (!(key in query)) {
            const val = data[key];
            const valueSchema = ns.getValueSchema();
            Object.assign(valueSchema.getMergedTraits(), __spreadProps(__spreadValues({}, traits), {
              httpQuery: key,
              httpQueryParams: void 0
            }));
            this.serializeQuery(valueSchema, val, query);
          }
        }
        return;
      }
      if (ns.isListSchema()) {
        const sparse = !!ns.getMergedTraits().sparse;
        const buffer = [];
        for (const item of data) {
          serializer.write([ns.getValueSchema(), traits], item);
          const serializable = serializer.flush();
          if (sparse || serializable !== void 0) {
            buffer.push(serializable);
          }
        }
        query[traits.httpQuery] = buffer;
      } else {
        serializer.write([ns, traits], data);
        query[traits.httpQuery] = serializer.flush();
      }
    }
    deserializeResponse(operationSchema, context, response) {
      return __async(this, null, function* () {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = yield collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, yield deserializer.read(15, bytes));
          }
          yield this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = yield this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
          const bytes = yield collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            const dataFromBody = yield deserializer.read(ns, bytes);
            for (const member2 of nonHttpBindingMembers) {
              if (dataFromBody[member2] != null) {
                dataObject[member2] = dataFromBody[member2];
              }
            }
          }
        } else if (nonHttpBindingMembers.discardResponseBody) {
          yield collectBody(response.body, context);
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      });
    }
    deserializeHttpMessage(schema, context, response, arg4, arg5) {
      return __async(this, null, function* () {
        let dataObject;
        if (arg4 instanceof Set) {
          dataObject = arg5;
        } else {
          dataObject = arg4;
        }
        let discardResponseBody = true;
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMemberTraits();
          if (memberTraits.httpPayload) {
            discardResponseBody = false;
            const isStreaming2 = memberSchema.isStreaming();
            if (isStreaming2) {
              const isEventStream = memberSchema.isStructSchema();
              if (isEventStream) {
                dataObject[memberName] = yield this.deserializeEventStream({
                  response,
                  responseSchema: ns
                });
              } else {
                dataObject[memberName] = sdkStreamMixin(response.body);
              }
            } else if (response.body) {
              const bytes = yield collectBody(response.body, context);
              if (bytes.byteLength > 0) {
                dataObject[memberName] = yield deserializer.read(memberSchema, bytes);
              }
            }
          } else if (memberTraits.httpHeader) {
            const key = String(memberTraits.httpHeader).toLowerCase();
            const value = response.headers[key];
            if (null != value) {
              if (memberSchema.isListSchema()) {
                const headerListValueSchema = memberSchema.getValueSchema();
                headerListValueSchema.getMergedTraits().httpHeader = key;
                let sections;
                if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                  sections = splitEvery(value, ",", 2);
                } else {
                  sections = splitHeader(value);
                }
                const list = [];
                for (const section of sections) {
                  list.push(yield deserializer.read(headerListValueSchema, section.trim()));
                }
                dataObject[memberName] = list;
              } else {
                dataObject[memberName] = yield deserializer.read(memberSchema, value);
              }
            }
          } else if (memberTraits.httpPrefixHeaders !== void 0) {
            dataObject[memberName] = {};
            for (const header in response.headers) {
              if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                const value = response.headers[header];
                const valueSchema = memberSchema.getValueSchema();
                valueSchema.getMergedTraits().httpHeader = header;
                dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = yield deserializer.read(valueSchema, value);
              }
            }
          } else if (memberTraits.httpResponseCode) {
            dataObject[memberName] = response.statusCode;
          } else {
            nonHttpBindingMembers.push(memberName);
          }
        }
        nonHttpBindingMembers.discardResponseBody = discardResponseBody;
        return nonHttpBindingMembers;
      });
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
  init_dist_es();

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
  function determineTimestampFormat(ns, settings2) {
    if (settings2.timestampFormat.useTrait) {
      if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
        return ns.getSchema();
      }
    }
    const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
    const bindingFormat = settings2.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : void 0 : void 0;
    return bindingFormat != null ? bindingFormat : settings2.timestampFormat.default;
  }

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
  var FromStringShapeDeserializer = class extends SerdeContext {
    constructor(settings2) {
      super();
      __publicField(this, "settings");
      this.settings = settings2;
    }
    read(_schema, data) {
      var _a3, _b2;
      const ns = NormalizedSchema.of(_schema);
      if (ns.isListSchema()) {
        return splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
      }
      if (ns.isBlobSchema()) {
        return ((_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.base64Decoder) != null ? _b2 : fromBase64)(data);
      }
      if (ns.isTimestampSchema()) {
        const format2 = determineTimestampFormat(ns, this.settings);
        switch (format2) {
          case 5:
            return _parseRfc3339DateTimeWithOffset(data);
          case 6:
            return _parseRfc7231DateTime(data);
          case 7:
            return _parseEpochTimestamp(data);
          default:
            console.warn("Missing timestamp format, parsing value with Date constructor:", data);
            return new Date(data);
        }
      }
      if (ns.isStringSchema()) {
        const mediaType = ns.getMergedTraits().mediaType;
        let intermediateValue = data;
        if (mediaType) {
          if (ns.getMergedTraits().httpHeader) {
            intermediateValue = this.base64ToUtf8(intermediateValue);
          }
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            intermediateValue = LazyJsonString.from(intermediateValue);
          }
          return intermediateValue;
        }
      }
      if (ns.isNumericSchema()) {
        return Number(data);
      }
      if (ns.isBigIntegerSchema()) {
        return BigInt(data);
      }
      if (ns.isBigDecimalSchema()) {
        return new NumericValue(data, "bigDecimal");
      }
      if (ns.isBooleanSchema()) {
        return String(data).toLowerCase() === "true";
      }
      return data;
    }
    base64ToUtf8(base64String) {
      var _a3, _b2, _c2, _d2;
      return ((_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.utf8Encoder) != null ? _b2 : toUtf8)(((_d2 = (_c2 = this.serdeContext) == null ? void 0 : _c2.base64Decoder) != null ? _d2 : fromBase64)(base64String));
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
  init_dist_es();
  var HttpInterceptingShapeDeserializer = class extends SerdeContext {
    constructor(codecDeserializer, codecSettings) {
      super();
      __publicField(this, "codecDeserializer");
      __publicField(this, "stringDeserializer");
      this.codecDeserializer = codecDeserializer;
      this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
    }
    setSerdeContext(serdeContext) {
      this.stringDeserializer.setSerdeContext(serdeContext);
      this.codecDeserializer.setSerdeContext(serdeContext);
      this.serdeContext = serdeContext;
    }
    read(schema, data) {
      var _a3, _b2, _c2, _d2;
      const ns = NormalizedSchema.of(schema);
      const traits = ns.getMergedTraits();
      const toString = (_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.utf8Encoder) != null ? _b2 : toUtf8;
      if (traits.httpHeader || traits.httpResponseCode) {
        return this.stringDeserializer.read(ns, toString(data));
      }
      if (traits.httpPayload) {
        if (ns.isBlobSchema()) {
          const toBytes = (_d2 = (_c2 = this.serdeContext) == null ? void 0 : _c2.utf8Decoder) != null ? _d2 : fromUtf8;
          if (typeof data === "string") {
            return toBytes(data);
          }
          return data;
        } else if (ns.isStringSchema()) {
          if ("byteLength" in data) {
            return toString(data);
          }
          return data;
        }
      }
      return this.codecDeserializer.read(ns, data);
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
  var ToStringShapeSerializer = class extends SerdeContext {
    constructor(settings2) {
      super();
      __publicField(this, "settings");
      __publicField(this, "stringBuffer", "");
      this.settings = settings2;
    }
    write(schema, value) {
      var _a3, _b2, _c2, _d2;
      const ns = NormalizedSchema.of(schema);
      switch (typeof value) {
        case "object":
          if (value === null) {
            this.stringBuffer = "null";
            return;
          }
          if (ns.isTimestampSchema()) {
            if (!(value instanceof Date)) {
              throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
            }
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                this.stringBuffer = dateToUtcString(value);
                break;
              case 7:
                this.stringBuffer = String(value.getTime() / 1e3);
                break;
              default:
                console.warn("Missing timestamp format, using epoch seconds", value);
                this.stringBuffer = String(value.getTime() / 1e3);
            }
            return;
          }
          if (ns.isBlobSchema() && "byteLength" in value) {
            this.stringBuffer = ((_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.base64Encoder) != null ? _b2 : toBase64)(value);
            return;
          }
          if (ns.isListSchema() && Array.isArray(value)) {
            let buffer = "";
            for (const item of value) {
              this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
              const headerItem = this.flush();
              const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader(headerItem);
              if (buffer !== "") {
                buffer += ", ";
              }
              buffer += serialized;
            }
            this.stringBuffer = buffer;
            return;
          }
          this.stringBuffer = JSON.stringify(value, null, 2);
          break;
        case "string":
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = value;
          if (mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString.from(intermediateValue);
            }
            if (ns.getMergedTraits().httpHeader) {
              this.stringBuffer = ((_d2 = (_c2 = this.serdeContext) == null ? void 0 : _c2.base64Encoder) != null ? _d2 : toBase64)(intermediateValue.toString());
              return;
            }
          }
          this.stringBuffer = value;
          break;
        default:
          if (ns.isIdempotencyToken()) {
            this.stringBuffer = v4();
          } else {
            this.stringBuffer = String(value);
          }
      }
    }
    flush() {
      const buffer = this.stringBuffer;
      this.stringBuffer = "";
      return buffer;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
  var HttpInterceptingShapeSerializer = class {
    constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
      __publicField(this, "codecSerializer");
      __publicField(this, "stringSerializer");
      __publicField(this, "buffer");
      this.codecSerializer = codecSerializer;
      this.stringSerializer = stringSerializer;
    }
    setSerdeContext(serdeContext) {
      this.codecSerializer.setSerdeContext(serdeContext);
      this.stringSerializer.setSerdeContext(serdeContext);
    }
    write(schema, value) {
      const ns = NormalizedSchema.of(schema);
      const traits = ns.getMergedTraits();
      if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
        this.stringSerializer.write(ns, value);
        this.buffer = this.stringSerializer.flush();
        return;
      }
      return this.codecSerializer.write(ns, value);
    }
    flush() {
      if (this.buffer !== void 0) {
        const buffer = this.buffer;
        this.buffer = void 0;
        return buffer;
      }
      return this.codecSerializer.flush();
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/schemaLogFilter.js
  var SENSITIVE_STRING = "***SensitiveInformation***";
  function schemaLogFilter(schema, data) {
    if (data == null) {
      return data;
    }
    const ns = NormalizedSchema.of(schema);
    if (ns.getMergedTraits().sensitive) {
      return SENSITIVE_STRING;
    }
    if (ns.isListSchema()) {
      const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
      if (isSensitive) {
        return SENSITIVE_STRING;
      }
    } else if (ns.isMapSchema()) {
      const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
      if (isSensitive) {
        return SENSITIVE_STRING;
      }
    } else if (ns.isStructSchema() && typeof data === "object") {
      const object = data;
      const newObject = {};
      for (const [member2, memberNs] of ns.structIterator()) {
        if (object[member2] != null) {
          newObject[member2] = schemaLogFilter(memberNs, object[member2]);
        }
      }
      return newObject;
    }
    return data;
  }

  // node_modules/@smithy/smithy-client/dist-es/command.js
  var Command = class {
    constructor() {
      __publicField(this, "middlewareStack", constructStack());
      __publicField(this, "schema");
    }
    static classBuilder() {
      return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
      for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
        this.middlewareStack.use(mw);
      }
      const stack = clientStack.concat(this.middlewareStack);
      const { logger: logger2 } = configuration;
      const handlerExecutionContext = __spreadValues({
        logger: logger2,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        [SMITHY_CONTEXT_KEY]: __spreadValues({
          commandInstance: this
        }, smithyContext)
      }, additionalContext);
      const { requestHandler } = configuration;
      let requestOptions = options != null ? options : {};
      if (smithyContext.eventStream) {
        requestOptions = __spreadValues({
          isEventStream: true
        }, requestOptions);
      }
      return stack.resolve((request) => requestHandler.handle(request.request, requestOptions), handlerExecutionContext);
    }
  };
  var ClassBuilder = class {
    constructor() {
      __publicField(this, "_init", () => {
      });
      __publicField(this, "_ep", {});
      __publicField(this, "_middlewareFn", () => []);
      __publicField(this, "_commandName", "");
      __publicField(this, "_clientName", "");
      __publicField(this, "_additionalContext", {});
      __publicField(this, "_smithyContext", {});
      __publicField(this, "_inputFilterSensitiveLog");
      __publicField(this, "_outputFilterSensitiveLog");
      __publicField(this, "_serializer", null);
      __publicField(this, "_deserializer", null);
      __publicField(this, "_operationSchema");
    }
    init(cb) {
      this._init = cb;
    }
    ep(endpointParameterInstructions) {
      this._ep = endpointParameterInstructions;
      return this;
    }
    m(middlewareSupplier) {
      this._middlewareFn = middlewareSupplier;
      return this;
    }
    s(service, operation2, smithyContext = {}) {
      this._smithyContext = __spreadValues({
        service,
        operation: operation2
      }, smithyContext);
      return this;
    }
    c(additionalContext = {}) {
      this._additionalContext = additionalContext;
      return this;
    }
    n(clientName, commandName) {
      this._clientName = clientName;
      this._commandName = commandName;
      return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
      this._inputFilterSensitiveLog = inputFilter;
      this._outputFilterSensitiveLog = outputFilter;
      return this;
    }
    ser(serializer) {
      this._serializer = serializer;
      return this;
    }
    de(deserializer) {
      this._deserializer = deserializer;
      return this;
    }
    sc(operation2) {
      this._operationSchema = operation2;
      this._smithyContext.operationSchema = operation2;
      return this;
    }
    build() {
      const closure = this;
      let CommandRef;
      return CommandRef = class extends Command {
        constructor(...[input]) {
          super();
          __publicField(this, "input");
          __publicField(this, "serialize", closure._serializer);
          __publicField(this, "deserialize", closure._deserializer);
          this.input = input != null ? input : {};
          closure._init(this);
          this.schema = closure._operationSchema;
        }
        static getEndpointParameterInstructions() {
          return closure._ep;
        }
        resolveMiddleware(stack, configuration, options) {
          var _a3, _b2, _c2, _d2;
          const op = closure._operationSchema;
          const input = (_a3 = op == null ? void 0 : op[4]) != null ? _a3 : op == null ? void 0 : op.input;
          const output = (_b2 = op == null ? void 0 : op[5]) != null ? _b2 : op == null ? void 0 : op.output;
          return this.resolveMiddlewareWithContext(stack, configuration, options, {
            CommandCtor: CommandRef,
            middlewareFn: closure._middlewareFn,
            clientName: closure._clientName,
            commandName: closure._commandName,
            inputFilterSensitiveLog: (_c2 = closure._inputFilterSensitiveLog) != null ? _c2 : op ? schemaLogFilter.bind(null, input) : (_) => _,
            outputFilterSensitiveLog: (_d2 = closure._outputFilterSensitiveLog) != null ? _d2 : op ? schemaLogFilter.bind(null, output) : (_) => _,
            smithyContext: closure._smithyContext,
            additionalContext: closure._additionalContext
          });
        }
      };
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/exceptions.js
  var ServiceException = class _ServiceException extends Error {
    constructor(options) {
      super(options.message);
      __publicField(this, "$fault");
      __publicField(this, "$response");
      __publicField(this, "$retryable");
      __publicField(this, "$metadata");
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
      this.name = options.name;
      this.$fault = options.$fault;
      this.$metadata = options.$metadata;
    }
    static isInstance(value) {
      if (!value)
        return false;
      const candidate = value;
      return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
    }
    static [Symbol.hasInstance](instance) {
      if (!instance)
        return false;
      const candidate = instance;
      if (this === _ServiceException) {
        return _ServiceException.isInstance(instance);
      }
      if (_ServiceException.isInstance(instance)) {
        if (candidate.name && this.name) {
          return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
        }
        return this.prototype.isPrototypeOf(instance);
      }
      return false;
    }
  };
  var decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions).filter(([, v2]) => v2 !== void 0).forEach(([k2, v2]) => {
      if (exception[k2] == void 0 || exception[k2] === "") {
        exception[k2] = v2;
      }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
  };

  // node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
  var loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
      case "standard":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "in-region":
        return {
          retryMode: "standard",
          connectionTimeout: 1100
        };
      case "cross-region":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "mobile":
        return {
          retryMode: "standard",
          connectionTimeout: 3e4
        };
      default:
        return {};
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
  var knownAlgorithms = Object.values(AlgorithmId);
  var getChecksumConfiguration = (runtimeConfig) => {
    var _a3;
    const checksumAlgorithms = [];
    for (const id in AlgorithmId) {
      const algorithmId = AlgorithmId[id];
      if (runtimeConfig[algorithmId] === void 0) {
        continue;
      }
      checksumAlgorithms.push({
        algorithmId: () => algorithmId,
        checksumConstructor: () => runtimeConfig[algorithmId]
      });
    }
    for (const [id, ChecksumCtor] of Object.entries((_a3 = runtimeConfig.checksumAlgorithms) != null ? _a3 : {})) {
      checksumAlgorithms.push({
        algorithmId: () => id,
        checksumConstructor: () => ChecksumCtor
      });
    }
    return {
      addChecksumAlgorithm(algo) {
        var _a4;
        runtimeConfig.checksumAlgorithms = (_a4 = runtimeConfig.checksumAlgorithms) != null ? _a4 : {};
        const id = algo.algorithmId();
        const ctor = algo.checksumConstructor();
        if (knownAlgorithms.includes(id)) {
          runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
        } else {
          runtimeConfig.checksumAlgorithms[id] = ctor;
        }
        checksumAlgorithms.push(algo);
      },
      checksumAlgorithms() {
        return checksumAlgorithms;
      }
    };
  };
  var resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
      const id = checksumAlgorithm.algorithmId();
      if (knownAlgorithms.includes(id)) {
        runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
      }
    });
    return runtimeConfig;
  };

  // node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
  var getRetryConfiguration = (runtimeConfig) => {
    return {
      setRetryStrategy(retryStrategy) {
        runtimeConfig.retryStrategy = retryStrategy;
      },
      retryStrategy() {
        return runtimeConfig.retryStrategy;
      }
    };
  };
  var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
  };

  // node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
  var getDefaultExtensionConfiguration = (runtimeConfig) => {
    return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
  };
  var resolveDefaultRuntimeConfig = (config) => {
    return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
  };

  // node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
  var getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
        obj[key] = obj[key][textNodeName];
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        obj[key] = getValueFromTextNode(obj[key]);
      }
    }
    return obj;
  };

  // node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
  var NoOpLogger = class {
    trace() {
    }
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
  var CONTENT_LENGTH_HEADER = "content-length";
  var DECODED_CONTENT_LENGTH_HEADER = "x-amz-decoded-content-length";
  function checkContentLengthHeader() {
    return (next, context) => (args) => __async(null, null, function* () {
      var _a3;
      const { request } = args;
      if (HttpRequest4.isInstance(request)) {
        if (!(CONTENT_LENGTH_HEADER in request.headers) && !(DECODED_CONTENT_LENGTH_HEADER in request.headers)) {
          const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
          if (typeof ((_a3 = context == null ? void 0 : context.logger) == null ? void 0 : _a3.warn) === "function" && !(context.logger instanceof NoOpLogger)) {
            context.logger.warn(message);
          } else {
            console.warn(message);
          }
        }
      }
      return next(__spreadValues({}, args));
    });
  }
  var checkContentLengthHeaderMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["CHECK_CONTENT_LENGTH_HEADER"],
    name: "getCheckContentLengthHeaderPlugin",
    override: true
  };
  var getCheckContentLengthHeaderPlugin = (unused) => ({
    applyToStack: (clientStack) => {
      clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
  var regionRedirectEndpointMiddleware = (config) => {
    return (next, context) => (args) => __async(null, null, function* () {
      const originalRegion = yield config.region();
      const regionProviderRef = config.region;
      let unlock = () => {
      };
      if (context.__s3RegionRedirect) {
        Object.defineProperty(config, "region", {
          writable: false,
          value: () => __async(null, null, function* () {
            return context.__s3RegionRedirect;
          })
        });
        unlock = () => Object.defineProperty(config, "region", {
          writable: true,
          value: regionProviderRef
        });
      }
      try {
        const result = yield next(args);
        if (context.__s3RegionRedirect) {
          unlock();
          const region = yield config.region();
          if (originalRegion !== region) {
            throw new Error("Region was not restored following S3 region redirect.");
          }
        }
        return result;
      } catch (e2) {
        unlock();
        throw e2;
      }
    });
  };
  var regionRedirectEndpointMiddlewareOptions = {
    tags: ["REGION_REDIRECT", "S3"],
    name: "regionRedirectEndpointMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
  function regionRedirectMiddleware(clientConfig) {
    return (next, context) => (args) => __async(null, null, function* () {
      var _a3, _b2, _c2, _d2;
      try {
        return yield next(args);
      } catch (err) {
        if (clientConfig.followRegionRedirects) {
          const statusCode = (_a3 = err == null ? void 0 : err.$metadata) == null ? void 0 : _a3.httpStatusCode;
          const isHeadBucket = context.commandName === "HeadBucketCommand";
          const bucketRegionHeader = (_c2 = (_b2 = err == null ? void 0 : err.$response) == null ? void 0 : _b2.headers) == null ? void 0 : _c2["x-amz-bucket-region"];
          if (bucketRegionHeader) {
            if (statusCode === 301 || statusCode === 400 && ((err == null ? void 0 : err.name) === "IllegalLocationConstraintException" || isHeadBucket)) {
              try {
                const actualRegion = bucketRegionHeader;
                (_d2 = context.logger) == null ? void 0 : _d2.debug(`Redirecting from ${yield clientConfig.region()} to ${actualRegion}`);
                context.__s3RegionRedirect = actualRegion;
              } catch (e2) {
                throw new Error("Region redirect failed: " + e2);
              }
              return next(args);
            }
          }
        }
        throw err;
      }
    });
  }
  var regionRedirectMiddlewareOptions = {
    step: "initialize",
    tags: ["REGION_REDIRECT", "S3"],
    name: "regionRedirectMiddleware",
    override: true
  };
  var getRegionRedirectMiddlewarePlugin = (clientConfig) => ({
    applyToStack: (clientStack) => {
      clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
      clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
  var s3ExpiresMiddleware = (config) => {
    return (next, context) => (args) => __async(null, null, function* () {
      var _a3;
      const result = yield next(args);
      const { response } = result;
      if (HttpResponse.isInstance(response)) {
        if (response.headers.expires) {
          response.headers.expiresstring = response.headers.expires;
          try {
            parseRfc7231DateTime(response.headers.expires);
          } catch (e2) {
            (_a3 = context.logger) == null ? void 0 : _a3.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e2}`);
            delete response.headers.expires;
          }
        }
      }
      return result;
    });
  };
  var s3ExpiresMiddlewareOptions = {
    tags: ["S3"],
    name: "s3ExpiresMiddleware",
    override: true,
    relation: "after",
    toMiddleware: "deserializerMiddleware"
  };
  var getS3ExpiresMiddlewarePlugin = (clientConfig) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
  var _S3ExpressIdentityCache = class _S3ExpressIdentityCache {
    constructor(data = {}) {
      __publicField(this, "data");
      __publicField(this, "lastPurgeTime", Date.now());
      this.data = data;
    }
    get(key) {
      const entry = this.data[key];
      if (!entry) {
        return;
      }
      return entry;
    }
    set(key, entry) {
      this.data[key] = entry;
      return entry;
    }
    delete(key) {
      delete this.data[key];
    }
    purgeExpired() {
      return __async(this, null, function* () {
        const now = Date.now();
        if (this.lastPurgeTime + _S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
          return;
        }
        for (const key in this.data) {
          const entry = this.data[key];
          if (!entry.isRefreshing) {
            const credential = yield entry.identity;
            if (credential.expiration) {
              if (credential.expiration.getTime() < now) {
                delete this.data[key];
              }
            }
          }
        }
      });
    }
  };
  __publicField(_S3ExpressIdentityCache, "EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS", 3e4);
  var S3ExpressIdentityCache = _S3ExpressIdentityCache;

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
  var S3ExpressIdentityCacheEntry = class {
    constructor(_identity, isRefreshing = false, accessed = Date.now()) {
      __publicField(this, "_identity");
      __publicField(this, "isRefreshing");
      __publicField(this, "accessed");
      this._identity = _identity;
      this.isRefreshing = isRefreshing;
      this.accessed = accessed;
    }
    get identity() {
      this.accessed = Date.now();
      return this._identity;
    }
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
  var _S3ExpressIdentityProviderImpl = class _S3ExpressIdentityProviderImpl {
    constructor(createSessionFn, cache2 = new S3ExpressIdentityCache()) {
      __publicField(this, "createSessionFn");
      __publicField(this, "cache");
      this.createSessionFn = createSessionFn;
      this.cache = cache2;
    }
    getS3ExpressIdentity(awsIdentity, identityProperties) {
      return __async(this, null, function* () {
        const key = identityProperties.Bucket;
        const { cache: cache2 } = this;
        const entry = cache2.get(key);
        if (entry) {
          return entry.identity.then((identity) => {
            var _a3, _b2, _c2, _d2;
            const isExpired = ((_b2 = (_a3 = identity.expiration) == null ? void 0 : _a3.getTime()) != null ? _b2 : 0) < Date.now();
            if (isExpired) {
              return cache2.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
            }
            const isExpiringSoon = ((_d2 = (_c2 = identity.expiration) == null ? void 0 : _c2.getTime()) != null ? _d2 : 0) < Date.now() + _S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
            if (isExpiringSoon && !entry.isRefreshing) {
              entry.isRefreshing = true;
              this.getIdentity(key).then((id) => {
                cache2.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
              });
            }
            return identity;
          });
        }
        return cache2.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
      });
    }
    getIdentity(key) {
      return __async(this, null, function* () {
        var _a3, _b2;
        yield this.cache.purgeExpired().catch((error) => {
          console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
        });
        const session = yield this.createSessionFn(key);
        if (!((_a3 = session.Credentials) == null ? void 0 : _a3.AccessKeyId) || !((_b2 = session.Credentials) == null ? void 0 : _b2.SecretAccessKey)) {
          throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
        }
        const identity = {
          accessKeyId: session.Credentials.AccessKeyId,
          secretAccessKey: session.Credentials.SecretAccessKey,
          sessionToken: session.Credentials.SessionToken,
          expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : void 0
        };
        return identity;
      });
    }
  };
  __publicField(_S3ExpressIdentityProviderImpl, "REFRESH_WINDOW_MS", 6e4);
  var S3ExpressIdentityProviderImpl = _S3ExpressIdentityProviderImpl;

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  init_dist_es();

  // node_modules/@smithy/signature-v4/dist-es/constants.js
  var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  var AUTH_HEADER = "authorization";
  var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
  var DATE_HEADER = "date";
  var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
  var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
  var SHA256_HEADER = "x-amz-content-sha256";
  var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
  var ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
  };
  var PROXY_HEADER_PATTERN = /^proxy-/;
  var SEC_HEADER_PATTERN = /^sec-/;
  var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  var MAX_CACHE_SIZE = 50;
  var KEY_TYPE_IDENTIFIER = "aws4_request";
  var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

  // node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
  init_dist_es();
  var signingKeyCache = {};
  var cacheQueue = [];
  var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
  var getSigningKey = (sha256Constructor, credentials, shortDate, region, service) => __async(null, null, function* () {
    const credsHash = yield hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
      return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
      delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
      key = yield hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
  });
  var hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
  };

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
  var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
      if (headers[headerName] == void 0) {
        continue;
      }
      const canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders == null ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
        if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
          continue;
        }
      }
      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
  };

  // node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
  init_dist_es();
  var getPayloadHash = (_0, _1) => __async(null, [_0, _1], function* ({ headers, body }, hashConstructor) {
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase() === SHA256_HEADER) {
        return headers[headerName];
      }
    }
    if (body == void 0) {
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
      const hashCtor = new hashConstructor();
      hashCtor.update(toUint8Array(body));
      return toHex(yield hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
  });

  // node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
  init_dist_es();
  var HeaderFormatter = class {
    format(headers) {
      const chunks = [];
      for (const headerName of Object.keys(headers)) {
        const bytes = fromUtf8(headerName);
        chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
      }
      const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
      let position = 0;
      for (const chunk of chunks) {
        out.set(chunk, position);
        position += chunk.byteLength;
      }
      return out;
    }
    formatHeaderValue(header) {
      switch (header.type) {
        case "boolean":
          return Uint8Array.from([header.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, header.value]);
        case "short":
          const shortView = new DataView(new ArrayBuffer(3));
          shortView.setUint8(0, 3);
          shortView.setInt16(1, header.value, false);
          return new Uint8Array(shortView.buffer);
        case "integer":
          const intView = new DataView(new ArrayBuffer(5));
          intView.setUint8(0, 4);
          intView.setInt32(1, header.value, false);
          return new Uint8Array(intView.buffer);
        case "long":
          const longBytes = new Uint8Array(9);
          longBytes[0] = 5;
          longBytes.set(header.value.bytes, 1);
          return longBytes;
        case "binary":
          const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
          binView.setUint8(0, 6);
          binView.setUint16(1, header.value.byteLength, false);
          const binBytes = new Uint8Array(binView.buffer);
          binBytes.set(header.value, 3);
          return binBytes;
        case "string":
          const utf8Bytes = fromUtf8(header.value);
          const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
          strView.setUint8(0, 7);
          strView.setUint16(1, utf8Bytes.byteLength, false);
          const strBytes = new Uint8Array(strView.buffer);
          strBytes.set(utf8Bytes, 3);
          return strBytes;
        case "timestamp":
          const tsBytes = new Uint8Array(9);
          tsBytes[0] = 8;
          tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
          return tsBytes;
        case "uuid":
          if (!UUID_PATTERN.test(header.value)) {
            throw new Error(`Invalid UUID received: ${header.value}`);
          }
          const uuidBytes = new Uint8Array(17);
          uuidBytes[0] = 9;
          uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
          return uuidBytes;
      }
    }
  };
  var HEADER_VALUE_TYPE;
  (function(HEADER_VALUE_TYPE3) {
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
  var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  var Int64 = class _Int64 {
    constructor(bytes) {
      __publicField(this, "bytes");
      this.bytes = bytes;
      if (bytes.byteLength !== 8) {
        throw new Error("Int64 buffers must be exactly 8 bytes");
      }
    }
    static fromNumber(number) {
      if (number > 9223372036854776e3 || number < -9223372036854776e3) {
        throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
      }
      const bytes = new Uint8Array(8);
      for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
        bytes[i2] = remaining;
      }
      if (number < 0) {
        negate(bytes);
      }
      return new _Int64(bytes);
    }
    valueOf() {
      const bytes = this.bytes.slice(0);
      const negative = bytes[0] & 128;
      if (negative) {
        negate(bytes);
      }
      return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
  function negate(bytes) {
    for (let i2 = 0; i2 < 8; i2++) {
      bytes[i2] ^= 255;
    }
    for (let i2 = 7; i2 > -1; i2--) {
      bytes[i2]++;
      if (bytes[i2] !== 0)
        break;
    }
  }

  // node_modules/@smithy/signature-v4/dist-es/headerUtil.js
  var hasHeader2 = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  // node_modules/@smithy/signature-v4/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest6 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery6(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery6(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
  var moveHeadersToQuery = (request, options = {}) => {
    var _a3, _b2;
    const { headers, query = {} } = HttpRequest6.clone(request);
    for (const name of Object.keys(headers)) {
      const lname = name.toLowerCase();
      if (lname.slice(0, 6) === "x-amz-" && !((_a3 = options.unhoistableHeaders) == null ? void 0 : _a3.has(lname)) || ((_b2 = options.hoistableHeaders) == null ? void 0 : _b2.has(lname))) {
        query[name] = headers[name];
        delete headers[name];
      }
    }
    return __spreadProps(__spreadValues({}, request), {
      headers,
      query
    });
  };

  // node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
  var prepareRequest = (request) => {
    request = HttpRequest6.clone(request);
    for (const headerName of Object.keys(request.headers)) {
      if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }
    return request;
  };

  // node_modules/@smithy/signature-v4/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
  var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
  var hexEncode = (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`;

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
  init_dist_es();

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
  var getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query)) {
      if (key.toLowerCase() === SIGNATURE_HEADER) {
        continue;
      }
      const encodedKey = escapeUri(key);
      keys.push(encodedKey);
      const value = query[key];
      if (typeof value === "string") {
        serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
      } else if (Array.isArray(value)) {
        serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
      }
    }
    return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
  };

  // node_modules/@smithy/signature-v4/dist-es/utilDate.js
  var iso8601 = (time2) => toDate(time2).toISOString().replace(/\.\d{3}Z$/, "Z");
  var toDate = (time2) => {
    if (typeof time2 === "number") {
      return new Date(time2 * 1e3);
    }
    if (typeof time2 === "string") {
      if (Number(time2)) {
        return new Date(Number(time2) * 1e3);
      }
      return new Date(time2);
    }
    return time2;
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
  var SignatureV4Base = class {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      __publicField(this, "service");
      __publicField(this, "regionProvider");
      __publicField(this, "credentialProvider");
      __publicField(this, "sha256");
      __publicField(this, "uriEscapePath");
      __publicField(this, "applyChecksum");
      this.service = service;
      this.sha256 = sha256;
      this.uriEscapePath = uriEscapePath;
      this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
      this.regionProvider = normalizeProvider(region);
      this.credentialProvider = normalizeProvider(credentials);
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
      const sortedHeaders = Object.keys(canonicalHeaders).sort();
      return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
      return __async(this, null, function* () {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = yield hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      });
    }
    getCanonicalPath({ path }) {
      if (this.uriEscapePath) {
        const normalizedPathSegments = [];
        for (const pathSegment of path.split("/")) {
          if ((pathSegment == null ? void 0 : pathSegment.length) === 0)
            continue;
          if (pathSegment === ".")
            continue;
          if (pathSegment === "..") {
            normalizedPathSegments.pop();
          } else {
            normalizedPathSegments.push(pathSegment);
          }
        }
        const normalizedPath = `${(path == null ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path == null ? void 0 : path.endsWith("/")) ? "/" : ""}`;
        const doubleEncoded = escapeUri(normalizedPath);
        return doubleEncoded.replace(/%2F/g, "/");
      }
      return path;
    }
    validateResolvedCredentials(credentials) {
      if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
        throw new Error("Resolved credential object is not valid");
      }
    }
    formatDate(now) {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }
    getCanonicalHeaderList(headers) {
      return Object.keys(headers).sort().join(";");
    }
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  var SignatureV4 = class extends SignatureV4Base {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      super({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath
      });
      __publicField(this, "headerFormatter", new HeaderFormatter());
    }
    presign(_0) {
      return __async(this, arguments, function* (originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
        const credentials = yield this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion != null ? signingRegion : yield this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService != null ? signingService : this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = yield this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, yield getPayloadHash(originalRequest, this.sha256)));
        return request;
      });
    }
    sign(toSign, options) {
      return __async(this, null, function* () {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      });
    }
    signEvent(_0, _1) {
      return __async(this, arguments, function* ({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials }) {
        const region = signingRegion != null ? signingRegion : yield this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService != null ? signingService : this.service);
        const hashedPayload = yield getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(yield hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, {
          signingDate,
          signingRegion: region,
          signingService,
          eventStreamCredentials
        });
      });
    }
    signMessage(_0, _1) {
      return __async(this, arguments, function* (signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature,
          eventStreamCredentials
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      });
    }
    signString(_0) {
      return __async(this, arguments, function* (stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials } = {}) {
        const credentials = eventStreamCredentials != null ? eventStreamCredentials : yield this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion != null ? signingRegion : yield this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(yield this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(yield hash.digest());
      });
    }
    signRequest(_0) {
      return __async(this, arguments, function* (requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = yield this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion != null ? signingRegion : yield this.regionProvider();
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService != null ? signingService : this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = yield getPayloadHash(request, this.sha256);
        if (!hasHeader2(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = yield this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      });
    }
    getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
      return __async(this, null, function* () {
        const stringToSign = yield this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
        const hash = new this.sha256(yield keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(yield hash.digest());
      });
    }
    getSigningKey(credentials, region, shortDate, service) {
      return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
  };

  // node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
  var signatureV4aContainer = {
    SignatureV4a: null
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
  var S3_EXPRESS_BUCKET_TYPE = "Directory";
  var S3_EXPRESS_BACKEND = "S3Express";
  var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
  var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
  var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
  var SignatureV4S3Express = class extends SignatureV4 {
    signWithCredentials(requestToSign, credentials, options) {
      return __async(this, null, function* () {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return privateAccess.signRequest(requestToSign, options != null ? options : {});
      });
    }
    presignWithCredentials(requestToSign, credentials, options) {
      return __async(this, null, function* () {
        var _a3;
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        delete requestToSign.headers[SESSION_TOKEN_HEADER];
        requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        requestToSign.query = (_a3 = requestToSign.query) != null ? _a3 : {};
        requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return this.presign(requestToSign, options);
      });
    }
  };
  function getCredentialsWithoutSessionToken(credentials) {
    const credentialsWithoutSessionToken = {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      expiration: credentials.expiration
    };
    return credentialsWithoutSessionToken;
  }
  function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
    const id = setTimeout(() => {
      throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10);
    const currentCredentialProvider = privateAccess.credentialProvider;
    const overrideCredentialsProviderOnce = () => {
      clearTimeout(id);
      privateAccess.credentialProvider = currentCredentialProvider;
      return Promise.resolve(credentialsWithoutSessionToken);
    };
    privateAccess.credentialProvider = overrideCredentialsProviderOnce;
  }

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
  var s3ExpressMiddleware = (options) => {
    return (next, context) => (args) => __async(null, null, function* () {
      var _a3, _b2, _c2, _d2, _e2;
      if (context.endpointV2) {
        const endpoint = context.endpointV2;
        const isS3ExpressAuth = ((_c2 = (_b2 = (_a3 = endpoint.properties) == null ? void 0 : _a3.authSchemes) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.name) === S3_EXPRESS_AUTH_SCHEME;
        const isS3ExpressBucket = ((_d2 = endpoint.properties) == null ? void 0 : _d2.backend) === S3_EXPRESS_BACKEND || ((_e2 = endpoint.properties) == null ? void 0 : _e2.bucketType) === S3_EXPRESS_BUCKET_TYPE;
        if (isS3ExpressBucket) {
          setFeature(context, "S3_EXPRESS_BUCKET", "J");
          context.isS3ExpressBucket = true;
        }
        if (isS3ExpressAuth) {
          const requestBucket = args.input.Bucket;
          if (requestBucket) {
            const s3ExpressIdentity = yield options.s3ExpressIdentityProvider.getS3ExpressIdentity(yield options.credentials(), {
              Bucket: requestBucket
            });
            context.s3ExpressIdentity = s3ExpressIdentity;
            if (HttpRequest4.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
              args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
            }
          }
        }
      }
      return next(args);
    });
  };
  var s3ExpressMiddlewareOptions = {
    name: "s3ExpressMiddleware",
    step: "build",
    tags: ["S3", "S3_EXPRESS"],
    override: true
  };
  var getS3ExpressPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
  var resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
    if (!authSchemePreference || authSchemePreference.length === 0) {
      return candidateAuthOptions;
    }
    const preferredAuthOptions = [];
    for (const preferredSchemeName of authSchemePreference) {
      for (const candidateAuthOption of candidateAuthOptions) {
        const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
        if (candidateAuthSchemeName === preferredSchemeName) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
    }
    for (const candidateAuthOption of candidateAuthOptions) {
      if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
    return preferredAuthOptions;
  };

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
  function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = /* @__PURE__ */ new Map();
    for (const scheme of httpAuthSchemes) {
      map.set(scheme.schemeId, scheme);
    }
    return map;
  }
  var httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => (args) => __async(null, null, function* () {
    var _a3;
    const options = config.httpAuthSchemeProvider(yield mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemePreference = config.authSchemePreference ? yield config.authSchemePreference() : [];
    const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = getSmithyContext(context);
    const failureReasons = [];
    for (const option of resolvedOptions) {
      const scheme = authSchemes.get(option.schemeId);
      if (!scheme) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
        continue;
      }
      const identityProvider = scheme.identityProvider(yield mwOptions.identityProviderConfigProvider(config));
      if (!identityProvider) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
        continue;
      }
      const { identityProperties = {}, signingProperties = {} } = ((_a3 = option.propertiesExtractor) == null ? void 0 : _a3.call(option, config, context)) || {};
      option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
      option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
      smithyContext.selectedHttpAuthScheme = {
        httpAuthOption: option,
        identity: yield identityProvider(option.identityProperties),
        signer: scheme.signer
      };
      break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
      throw new Error(failureReasons.join("\n"));
    }
    return next(args);
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
  var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };
  var getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
  var defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
  };
  var defaultSuccessHandler = (httpResponse, signingProperties) => {
  };
  var httpSigningMiddleware = (config) => (next, context) => (args) => __async(null, null, function* () {
    if (!HttpRequest5.isInstance(args.request)) {
      return next(args);
    }
    const smithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
    const output = yield next(__spreadProps(__spreadValues({}, args), {
      request: yield signer.sign(args.request, identity, signingProperties)
    })).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
  var httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware"
  };
  var getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/normalizeProvider.js
  var normalizeProvider2 = (input) => {
    if (typeof input === "function")
      return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
  };

  // node_modules/@smithy/core/dist-es/setFeature.js
  function setFeature2(context, feature, value) {
    if (!context.__smithy_context) {
      context.__smithy_context = {
        features: {}
      };
    } else if (!context.__smithy_context.features) {
      context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
  }

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
  var DefaultIdentityProviderConfig = class {
    constructor(config) {
      __publicField(this, "authSchemes", /* @__PURE__ */ new Map());
      for (const key in config) {
        const value = config[key];
        if (value !== void 0) {
          this.authSchemes.set(key, value);
        }
      }
    }
    getIdentityProvider(schemeId) {
      return this.authSchemes.get(schemeId);
    }
  };

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
  var createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
    return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
  };
  var EXPIRATION_MS = 3e5;
  var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
  var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
  var memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === void 0) {
      return void 0;
    }
    const normalizedProvider = typeof provider !== "function" ? () => __async(null, null, function* () {
      return Promise.resolve(provider);
    }) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = (options) => __async(null, null, function* () {
      if (!pending) {
        pending = normalizedProvider(options);
      }
      try {
        resolved = yield pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = void 0;
      }
      return resolved;
    });
    if (isExpired === void 0) {
      return (options) => __async(null, null, function* () {
        if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
          resolved = yield coalesceProvider(options);
        }
        return resolved;
      });
    }
    return (options) => __async(null, null, function* () {
      if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
        resolved = yield coalesceProvider(options);
      }
      if (isConstant) {
        return resolved;
      }
      if (!requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        yield coalesceProvider(options);
        return resolved;
      }
      return resolved;
    });
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
  var signS3Express = (s3ExpressIdentity, signingOptions, request, sigV4MultiRegionSigner) => __async(null, null, function* () {
    const signedRequest = yield sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});
    if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
      throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
    }
    return signedRequest;
  });

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
  var defaultErrorHandler2 = (signingProperties) => (error) => {
    throw error;
  };
  var defaultSuccessHandler2 = (httpResponse, signingProperties) => {
  };
  var s3ExpressHttpSigningMiddleware = (config) => (next, context) => (args) => __async(null, null, function* () {
    if (!HttpRequest4.isInstance(args.request)) {
      return next(args);
    }
    const smithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
    let request;
    if (context.s3ExpressIdentity) {
      request = yield signS3Express(context.s3ExpressIdentity, signingProperties, args.request, yield config.signer());
    } else {
      request = yield signer.sign(args.request, identity, signingProperties);
    }
    const output = yield next(__spreadProps(__spreadValues({}, args), {
      request
    })).catch((signer.errorHandler || defaultErrorHandler2)(signingProperties));
    (signer.successHandler || defaultSuccessHandler2)(output.response, signingProperties);
    return output;
  });
  var getS3ExpressHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(s3ExpressHttpSigningMiddleware(config), httpSigningMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
  var resolveS3Config = (input, { session }) => {
    const [s3ClientProvider, CreateSessionCommandCtor] = session;
    const { forcePathStyle, useAccelerateEndpoint, disableMultiregionAccessPoints, followRegionRedirects, s3ExpressIdentityProvider, bucketEndpoint, expectContinueHeader } = input;
    return Object.assign(input, {
      forcePathStyle: forcePathStyle != null ? forcePathStyle : false,
      useAccelerateEndpoint: useAccelerateEndpoint != null ? useAccelerateEndpoint : false,
      disableMultiregionAccessPoints: disableMultiregionAccessPoints != null ? disableMultiregionAccessPoints : false,
      followRegionRedirects: followRegionRedirects != null ? followRegionRedirects : false,
      s3ExpressIdentityProvider: s3ExpressIdentityProvider != null ? s3ExpressIdentityProvider : new S3ExpressIdentityProviderImpl((key) => __async(null, null, function* () {
        return s3ClientProvider().send(new CreateSessionCommandCtor({
          Bucket: key
        }));
      })),
      bucketEndpoint: bucketEndpoint != null ? bucketEndpoint : false,
      expectContinueHeader: expectContinueHeader != null ? expectContinueHeader : 2097152
    });
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/toStream.browser.js
  function toStream(bytes) {
    return new ReadableStream({
      start(controller) {
        controller.enqueue(bytes);
        controller.close();
      }
    });
  }

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
  var THROW_IF_EMPTY_BODY = {
    CopyObjectCommand: true,
    UploadPartCopyCommand: true,
    CompleteMultipartUploadCommand: true
  };
  var throw200ExceptionsMiddleware = (config) => (next, context) => (args) => __async(null, null, function* () {
    const result = yield next(args);
    const { response } = result;
    if (!HttpResponse.isInstance(response)) {
      return result;
    }
    const { statusCode, body } = response;
    if (statusCode < 200 || statusCode >= 300) {
      return result;
    }
    const bodyBytes = yield collectBody2(body, config);
    response.body = toStream(bodyBytes);
    if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
      const err = new Error("S3 aborted request");
      err.$metadata = {
        httpStatusCode: 503
      };
      err.name = "InternalError";
      throw err;
    }
    const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
    if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
      response.statusCode = 503;
    }
    return result;
  });
  var collectBody2 = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
      return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
  };
  var throw200ExceptionsMiddlewareOptions = {
    relation: "after",
    toMiddleware: "deserializerMiddleware",
    tags: ["THROW_200_EXCEPTIONS", "S3"],
    name: "throw200ExceptionsMiddleware",
    override: true
  };
  var getThrow200ExceptionsPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
  var validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
  function bucketEndpointMiddleware(options) {
    return (next, context) => (args) => __async(null, null, function* () {
      var _a3, _b2, _c2, _d2;
      if (options.bucketEndpoint) {
        const endpoint = context.endpointV2;
        if (endpoint) {
          const bucket = args.input.Bucket;
          if (typeof bucket === "string") {
            try {
              const bucketEndpointUrl = new URL(bucket);
              context.endpointV2 = __spreadProps(__spreadValues({}, endpoint), {
                url: bucketEndpointUrl
              });
            } catch (e2) {
              const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
              if (((_b2 = (_a3 = context.logger) == null ? void 0 : _a3.constructor) == null ? void 0 : _b2.name) === "NoOpLogger") {
                console.warn(warning);
              } else {
                (_d2 = (_c2 = context.logger) == null ? void 0 : _c2.warn) == null ? void 0 : _d2.call(_c2, warning);
              }
              throw e2;
            }
          }
        }
      }
      return next(args);
    });
  }
  var bucketEndpointMiddlewareOptions = {
    name: "bucketEndpointMiddleware",
    override: true,
    relation: "after",
    toMiddleware: "endpointV2Middleware"
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
  function validateBucketNameMiddleware({ bucketEndpoint }) {
    return (next) => (args) => __async(null, null, function* () {
      const { input: { Bucket } } = args;
      if (!bucketEndpoint && typeof Bucket === "string" && !validate(Bucket) && Bucket.indexOf("/") >= 0) {
        const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
        err.name = "InvalidBucketName";
        throw err;
      }
      return next(__spreadValues({}, args));
    });
  }
  var validateBucketNameMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BUCKET_NAME"],
    name: "validateBucketNameMiddleware",
    override: true
  };
  var getValidateBucketNamePlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
      clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
    }
  });

  // node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
  var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
  var calculateBodyLength = (body) => {
    if (typeof body === "string") {
      if (TEXT_ENCODER) {
        return TEXT_ENCODER.encode(body).byteLength;
      }
      let len = body.length;
      for (let i2 = len - 1; i2 >= 0; i2--) {
        const code = body.charCodeAt(i2);
        if (code > 127 && code <= 2047)
          len++;
        else if (code > 2047 && code <= 65535)
          len += 2;
        if (code >= 56320 && code <= 57343)
          i2--;
      }
      return len;
    } else if (typeof body.byteLength === "number") {
      return body.byteLength;
    } else if (typeof body.size === "number") {
      return body.size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
  var ProtocolLib = class {
    constructor(queryCompat = false) {
      __publicField(this, "queryCompat");
      __publicField(this, "errorRegistry");
      this.queryCompat = queryCompat;
    }
    resolveRestContentType(defaultContentType, inputSchema) {
      const members = inputSchema.getMemberSchemas();
      const httpPayloadMember = Object.values(members).find((m2) => {
        return !!m2.getMergedTraits().httpPayload;
      });
      if (httpPayloadMember) {
        const mediaType = httpPayloadMember.getMergedTraits().mediaType;
        if (mediaType) {
          return mediaType;
        } else if (httpPayloadMember.isStringSchema()) {
          return "text/plain";
        } else if (httpPayloadMember.isBlobSchema()) {
          return "application/octet-stream";
        } else {
          return defaultContentType;
        }
      } else if (!inputSchema.isUnitSchema()) {
        const hasBody = Object.values(members).find((m2) => {
          const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m2.getMergedTraits();
          const noPrefixHeaders = httpPrefixHeaders === void 0;
          return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
        });
        if (hasBody) {
          return defaultContentType;
        }
      }
    }
    getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
      return __async(this, null, function* () {
        var _a3, _b2, _c2, _d2, _e2, _f, _g, _h2, _i2;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [, errorName] = errorIdentifier.split("#");
        }
        const errorMetadata = {
          $metadata: metadata,
          $fault: response.statusCode < 500 ? "client" : "server"
        };
        if (!this.errorRegistry) {
          throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
        }
        try {
          const errorSchema = (_a3 = getErrorSchema == null ? void 0 : getErrorSchema(this.errorRegistry, errorName)) != null ? _a3 : this.errorRegistry.getSchema(errorIdentifier);
          return { errorSchema, errorMetadata };
        } catch (e2) {
          dataObject.message = (_c2 = (_b2 = dataObject.message) != null ? _b2 : dataObject.Message) != null ? _c2 : "UnknownError";
          const synthetic = this.errorRegistry;
          const baseExceptionSchema = synthetic.getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = (_d2 = synthetic.getErrorCtor(baseExceptionSchema)) != null ? _d2 : Error;
            throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
          }
          const d2 = dataObject;
          const message = (_i2 = (_g = (_e2 = d2 == null ? void 0 : d2.message) != null ? _e2 : d2 == null ? void 0 : d2.Message) != null ? _g : (_f = d2 == null ? void 0 : d2.Error) == null ? void 0 : _f.Message) != null ? _i2 : (_h2 = d2 == null ? void 0 : d2.Error) == null ? void 0 : _h2.message;
          throw this.decorateServiceException(Object.assign(new Error(message), {
            name: errorName
          }, errorMetadata), dataObject);
        }
      });
    }
    compose(composite, errorIdentifier, defaultNamespace) {
      let namespace = defaultNamespace;
      if (errorIdentifier.includes("#")) {
        [namespace] = errorIdentifier.split("#");
      }
      const staticRegistry = TypeRegistry.for(namespace);
      const defaultSyntheticRegistry = TypeRegistry.for("smithy.ts.sdk.synthetic." + defaultNamespace);
      composite.copyFrom(staticRegistry);
      composite.copyFrom(defaultSyntheticRegistry);
      this.errorRegistry = composite;
    }
    decorateServiceException(exception, additions = {}) {
      var _a3, _b2, _c2, _d2, _e2, _f, _g, _h2;
      if (this.queryCompat) {
        const msg = (_a3 = exception.Message) != null ? _a3 : additions.Message;
        const error = decorateServiceException(exception, additions);
        if (msg) {
          error.message = msg;
        }
        const errorObj = (_b2 = error.Error) != null ? _b2 : {};
        errorObj.Type = (_c2 = error.Error) == null ? void 0 : _c2.Type;
        errorObj.Code = (_d2 = error.Error) == null ? void 0 : _d2.Code;
        errorObj.Message = (_h2 = (_g = (_e2 = error.Error) == null ? void 0 : _e2.message) != null ? _g : (_f = error.Error) == null ? void 0 : _f.Message) != null ? _h2 : msg;
        error.Error = errorObj;
        const reqId = error.$metadata.requestId;
        if (reqId) {
          error.RequestId = reqId;
        }
        return error;
      }
      return decorateServiceException(exception, additions);
    }
    setQueryCompatError(output, response) {
      var _a3;
      const queryErrorHeader = (_a3 = response.headers) == null ? void 0 : _a3["x-amzn-query-error"];
      if (output !== void 0 && queryErrorHeader != null) {
        const [Code, Type] = queryErrorHeader.split(";");
        const keys = Object.keys(output);
        const Error2 = {
          Code,
          Type
        };
        output.Code = Code;
        output.Type = Type;
        for (let i2 = 0; i2 < keys.length; i2++) {
          const k2 = keys[i2];
          Error2[k2 === "message" ? "Message" : k2] = output[k2];
        }
        delete Error2.__type;
        output.Error = Error2;
      }
    }
    queryCompatOutput(queryCompatErrorData, errorData) {
      if (queryCompatErrorData.Error) {
        errorData.Error = queryCompatErrorData.Error;
      }
      if (queryCompatErrorData.Type) {
        errorData.Type = queryCompatErrorData.Type;
      }
      if (queryCompatErrorData.Code) {
        errorData.Code = queryCompatErrorData.Code;
      }
    }
    findQueryCompatibleError(registry, errorName) {
      try {
        return registry.getSchema(errorName);
      } catch (e2) {
        return registry.find((schema) => {
          var _a3;
          return ((_a3 = NormalizedSchema.of(schema).getMergedTraits().awsQueryError) == null ? void 0 : _a3[0]) === errorName;
        });
      }
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
  var SerdeContextConfig = class {
    constructor() {
      __publicField(this, "serdeContext");
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js
  var UnionSerde = class {
    constructor(from, to) {
      __publicField(this, "from");
      __publicField(this, "to");
      __publicField(this, "keys");
      this.from = from;
      this.to = to;
      const keys = Object.keys(this.from);
      const set = new Set(keys);
      set.delete("__type");
      this.keys = set;
    }
    mark(key) {
      this.keys.delete(key);
    }
    hasUnknown() {
      return this.keys.size === 1 && Object.keys(this.to).length === 0;
    }
    writeUnknown() {
      if (this.hasUnknown()) {
        const k2 = this.keys.values().next().value;
        const v2 = this.from[k2];
        this.to.$unknown = [k2, v2];
      }
    }
  };

  // node_modules/@aws-sdk/xml-builder/dist-es/escape-attribute.js
  var ATTR_ESCAPE_RE = /[&<>"]/g;
  var ATTR_ESCAPE_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function escapeAttribute(value) {
    return value.replace(ATTR_ESCAPE_RE, (ch) => ATTR_ESCAPE_MAP[ch]);
  }

  // node_modules/@aws-sdk/xml-builder/dist-es/escape-element.js
  var ELEMENT_ESCAPE_RE = /[&"'<>\r\n\u0085\u2028]/g;
  var ELEMENT_ESCAPE_MAP = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;",
    "\r": "&#x0D;",
    "\n": "&#x0A;",
    "\x85": "&#x85;",
    "\u2028": "&#x2028;"
  };
  function escapeElement(value) {
    return value.replace(ELEMENT_ESCAPE_RE, (ch) => ELEMENT_ESCAPE_MAP[ch]);
  }

  // node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js
  var XmlText = class {
    constructor(value) {
      __publicField(this, "value");
      this.value = value;
    }
    toString() {
      return escapeElement("" + this.value);
    }
  };

  // node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js
  var XmlNode = class _XmlNode {
    constructor(name, children = []) {
      __publicField(this, "name");
      __publicField(this, "children");
      __publicField(this, "attributes", {});
      this.name = name;
      this.children = children;
    }
    static of(name, childText, withName) {
      const node = new _XmlNode(name);
      if (childText !== void 0) {
        node.addChildNode(new XmlText(childText));
      }
      if (withName !== void 0) {
        node.withName(withName);
      }
      return node;
    }
    withName(name) {
      this.name = name;
      return this;
    }
    addAttribute(name, value) {
      this.attributes[name] = value;
      return this;
    }
    addChildNode(child) {
      this.children.push(child);
      return this;
    }
    removeAttribute(name) {
      delete this.attributes[name];
      return this;
    }
    n(name) {
      this.name = name;
      return this;
    }
    c(child) {
      this.children.push(child);
      return this;
    }
    a(name, value) {
      if (value != null) {
        this.attributes[name] = value;
      }
      return this;
    }
    cc(input, field, withName = field) {
      if (input[field] != null) {
        const node = _XmlNode.of(field, input[field]).withName(withName);
        this.c(node);
      }
    }
    l(input, listName, memberName, valueProvider) {
      if (input[listName] != null) {
        const nodes2 = valueProvider();
        nodes2.map((node) => {
          node.withName(memberName);
          this.c(node);
        });
      }
    }
    lc(input, listName, memberName, valueProvider) {
      if (input[listName] != null) {
        const nodes2 = valueProvider();
        const containerNode = new _XmlNode(memberName);
        nodes2.map((node) => {
          containerNode.c(node);
        });
        this.c(containerNode);
      }
    }
    toString() {
      const hasChildren = Boolean(this.children.length);
      let xmlText = `<${this.name}`;
      const attributes = this.attributes;
      for (const attributeName of Object.keys(attributes)) {
        const attribute = attributes[attributeName];
        if (attribute != null) {
          xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
        }
      }
      return xmlText += !hasChildren ? "/>" : `>${this.children.map((c2) => c2.toString()).join("")}</${this.name}>`;
    }
  };

  // node_modules/@aws-sdk/xml-builder/dist-es/xml-parser.browser.js
  var parser;
  function parseXML(xmlString) {
    if (!parser) {
      parser = new DOMParser();
    }
    const xmlDocument = parser.parseFromString(xmlString, "application/xml");
    if (xmlDocument.getElementsByTagName("parsererror").length > 0) {
      throw new Error("DOMParser XML parsing error.");
    }
    const xmlToObj = (node) => {
      var _a3;
      if (node.nodeType === Node.TEXT_NODE) {
        if ((_a3 = node.textContent) == null ? void 0 : _a3.trim()) {
          return node.textContent;
        }
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        if (element.attributes.length === 0 && element.childNodes.length === 0) {
          return "";
        }
        const obj = {};
        const attributes = Array.from(element.attributes);
        for (const attr of attributes) {
          obj[`${attr.name}`] = attr.value;
        }
        const childNodes = Array.from(element.childNodes);
        for (const child of childNodes) {
          const childResult = xmlToObj(child);
          if (childResult != null) {
            const childName = child.nodeName;
            if (childNodes.length === 1 && attributes.length === 0 && childName === "#text") {
              return childResult;
            }
            if (obj[childName]) {
              if (Array.isArray(obj[childName])) {
                obj[childName].push(childResult);
              } else {
                obj[childName] = [obj[childName], childResult];
              }
            } else {
              obj[childName] = childResult;
            }
          } else if (childNodes.length === 1 && attributes.length === 0) {
            return element.textContent;
          }
        }
        return obj;
      }
      return null;
    };
    return {
      [xmlDocument.documentElement.nodeName]: xmlToObj(xmlDocument.documentElement)
    };
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js
  init_dist_es();
  var XmlShapeDeserializer = class extends SerdeContextConfig {
    constructor(settings2) {
      super();
      __publicField(this, "settings");
      __publicField(this, "stringDeserializer");
      this.settings = settings2;
      this.stringDeserializer = new FromStringShapeDeserializer(settings2);
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
      this.stringDeserializer.setSerdeContext(serdeContext);
    }
    read(schema, bytes, key) {
      var _a3, _b2;
      const ns = NormalizedSchema.of(schema);
      const memberSchemas = ns.getMemberSchemas();
      const isEventPayload = ns.isStructSchema() && ns.isMemberSchema() && !!Object.values(memberSchemas).find((memberNs) => {
        return !!memberNs.getMemberTraits().eventPayload;
      });
      if (isEventPayload) {
        const output = {};
        const memberName = Object.keys(memberSchemas)[0];
        const eventMemberSchema = memberSchemas[memberName];
        if (eventMemberSchema.isBlobSchema()) {
          output[memberName] = bytes;
        } else {
          output[memberName] = this.read(memberSchemas[memberName], bytes);
        }
        return output;
      }
      const xmlString = ((_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.utf8Encoder) != null ? _b2 : toUtf8)(bytes);
      const parsedObject = this.parseXml(xmlString);
      return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
    }
    readSchema(_schema, value) {
      var _a3, _b2, _c2, _d2, _e2, _f;
      const ns = NormalizedSchema.of(_schema);
      if (ns.isUnitSchema()) {
        return;
      }
      const traits = ns.getMergedTraits();
      if (ns.isListSchema() && !Array.isArray(value)) {
        return this.readSchema(ns, [value]);
      }
      if (value == null) {
        return value;
      }
      if (typeof value === "object") {
        const flat = !!traits.xmlFlattened;
        if (ns.isListSchema()) {
          const listValue = ns.getValueSchema();
          const buffer2 = [];
          const sourceKey = (_a3 = listValue.getMergedTraits().xmlName) != null ? _a3 : "member";
          const source = flat ? value : ((_b2 = value[0]) != null ? _b2 : value)[sourceKey];
          if (source == null) {
            return buffer2;
          }
          const sourceArray = Array.isArray(source) ? source : [source];
          for (const v2 of sourceArray) {
            buffer2.push(this.readSchema(listValue, v2));
          }
          return buffer2;
        }
        const buffer = {};
        if (ns.isMapSchema()) {
          const keyNs = ns.getKeySchema();
          const memberNs = ns.getValueSchema();
          let entries2;
          if (flat) {
            entries2 = Array.isArray(value) ? value : [value];
          } else {
            entries2 = Array.isArray(value.entry) ? value.entry : [value.entry];
          }
          const keyProperty = (_c2 = keyNs.getMergedTraits().xmlName) != null ? _c2 : "key";
          const valueProperty = (_d2 = memberNs.getMergedTraits().xmlName) != null ? _d2 : "value";
          for (const entry of entries2) {
            const key = entry[keyProperty];
            const value2 = entry[valueProperty];
            buffer[key] = this.readSchema(memberNs, value2);
          }
          return buffer;
        }
        if (ns.isStructSchema()) {
          const union = ns.isUnionSchema();
          let unionSerde;
          if (union) {
            unionSerde = new UnionSerde(value, buffer);
          }
          for (const [memberName, memberSchema] of ns.structIterator()) {
            const memberTraits = memberSchema.getMergedTraits();
            const xmlObjectKey = !memberTraits.httpPayload ? (_e2 = memberSchema.getMemberTraits().xmlName) != null ? _e2 : memberName : (_f = memberTraits.xmlName) != null ? _f : memberSchema.getName();
            if (union) {
              unionSerde.mark(xmlObjectKey);
            }
            if (value[xmlObjectKey] != null) {
              buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
            }
          }
          if (union) {
            unionSerde.writeUnknown();
          }
          return buffer;
        }
        if (ns.isDocumentSchema()) {
          return value;
        }
        throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
      }
      if (ns.isListSchema()) {
        return [];
      }
      if (ns.isMapSchema() || ns.isStructSchema()) {
        return {};
      }
      return this.stringDeserializer.read(ns, value);
    }
    parseXml(xml) {
      if (xml.length) {
        let parsedObj;
        try {
          parsedObj = parseXML(xml);
        } catch (e2) {
          if (e2 && typeof e2 === "object") {
            Object.defineProperty(e2, "$responseBodyText", {
              value: xml
            });
          }
          throw e2;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
      }
      return {};
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
  var loadRestXmlErrorCode = (output, data) => {
    var _a3;
    if (((_a3 = data == null ? void 0 : data.Error) == null ? void 0 : _a3.Code) !== void 0) {
      return data.Error.Code;
    }
    if ((data == null ? void 0 : data.Code) !== void 0) {
      return data.Code;
    }
    if (output.statusCode == 404) {
      return "NotFound";
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js
  var XmlShapeSerializer = class extends SerdeContextConfig {
    constructor(settings2) {
      super();
      __publicField(this, "settings");
      __publicField(this, "stringBuffer");
      __publicField(this, "byteBuffer");
      __publicField(this, "buffer");
      this.settings = settings2;
    }
    write(schema, value) {
      var _a3, _b2;
      const ns = NormalizedSchema.of(schema);
      if (ns.isStringSchema() && typeof value === "string") {
        this.stringBuffer = value;
      } else if (ns.isBlobSchema()) {
        this.byteBuffer = "byteLength" in value ? value : ((_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.base64Decoder) != null ? _b2 : fromBase64)(value);
      } else {
        this.buffer = this.writeStruct(ns, value, void 0);
        const traits = ns.getMergedTraits();
        if (traits.httpPayload && !traits.xmlName) {
          this.buffer.withName(ns.getName());
        }
      }
    }
    flush() {
      var _a3;
      if (this.byteBuffer !== void 0) {
        const bytes = this.byteBuffer;
        delete this.byteBuffer;
        return bytes;
      }
      if (this.stringBuffer !== void 0) {
        const str = this.stringBuffer;
        delete this.stringBuffer;
        return str;
      }
      const buffer = this.buffer;
      if (this.settings.xmlNamespace) {
        if (!((_a3 = buffer == null ? void 0 : buffer.attributes) == null ? void 0 : _a3["xmlns"])) {
          buffer.addAttribute("xmlns", this.settings.xmlNamespace);
        }
      }
      delete this.buffer;
      return buffer.toString();
    }
    writeStruct(ns, value, parentXmlns) {
      var _a3, _b2, _c2, _d2;
      const traits = ns.getMergedTraits();
      const name = ns.isMemberSchema() && !traits.httpPayload ? (_a3 = ns.getMemberTraits().xmlName) != null ? _a3 : ns.getMemberName() : (_b2 = traits.xmlName) != null ? _b2 : ns.getName();
      if (!name || !ns.isStructSchema()) {
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(true)}.`);
      }
      const structXmlNode = XmlNode.of(name);
      const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
      for (const [memberName, memberSchema] of ns.structIterator()) {
        const val = value[memberName];
        if (val != null || memberSchema.isIdempotencyToken()) {
          if (memberSchema.getMergedTraits().xmlAttribute) {
            structXmlNode.addAttribute((_c2 = memberSchema.getMergedTraits().xmlName) != null ? _c2 : memberName, this.writeSimple(memberSchema, val));
            continue;
          }
          if (memberSchema.isListSchema()) {
            this.writeList(memberSchema, val, structXmlNode, xmlns);
          } else if (memberSchema.isMapSchema()) {
            this.writeMap(memberSchema, val, structXmlNode, xmlns);
          } else if (memberSchema.isStructSchema()) {
            structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
          } else {
            const memberNode = XmlNode.of((_d2 = memberSchema.getMergedTraits().xmlName) != null ? _d2 : memberSchema.getMemberName());
            this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
            structXmlNode.addChildNode(memberNode);
          }
        }
      }
      const { $unknown } = value;
      if ($unknown && ns.isUnionSchema() && Array.isArray($unknown) && Object.keys(value).length === 1) {
        const [k2, v2] = $unknown;
        const node = XmlNode.of(k2);
        if (typeof v2 !== "string") {
          if (value instanceof XmlNode || value instanceof XmlText) {
            structXmlNode.addChildNode(value);
          } else {
            throw new Error(`@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.`);
          }
        }
        this.writeSimpleInto(0, v2, node, xmlns);
        structXmlNode.addChildNode(node);
      }
      if (xmlns) {
        structXmlNode.addAttribute(xmlnsAttr, xmlns);
      }
      return structXmlNode;
    }
    writeList(listMember, array, container, parentXmlns) {
      var _a3;
      if (!listMember.isMemberSchema()) {
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`);
      }
      const listTraits = listMember.getMergedTraits();
      const listValueSchema = listMember.getValueSchema();
      const listValueTraits = listValueSchema.getMergedTraits();
      const sparse = !!listValueTraits.sparse;
      const flat = !!listTraits.xmlFlattened;
      const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);
      const writeItem = (container2, value) => {
        var _a4, _b2, _c2, _d2;
        if (listValueSchema.isListSchema()) {
          this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container2, xmlns);
        } else if (listValueSchema.isMapSchema()) {
          this.writeMap(listValueSchema, value, container2, xmlns);
        } else if (listValueSchema.isStructSchema()) {
          const struct = this.writeStruct(listValueSchema, value, xmlns);
          container2.addChildNode(struct.withName(flat ? (_a4 = listTraits.xmlName) != null ? _a4 : listMember.getMemberName() : (_b2 = listValueTraits.xmlName) != null ? _b2 : "member"));
        } else {
          const listItemNode = XmlNode.of(flat ? (_c2 = listTraits.xmlName) != null ? _c2 : listMember.getMemberName() : (_d2 = listValueTraits.xmlName) != null ? _d2 : "member");
          this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
          container2.addChildNode(listItemNode);
        }
      };
      if (flat) {
        for (const value of array) {
          if (sparse || value != null) {
            writeItem(container, value);
          }
        }
      } else {
        const listNode = XmlNode.of((_a3 = listTraits.xmlName) != null ? _a3 : listMember.getMemberName());
        if (xmlns) {
          listNode.addAttribute(xmlnsAttr, xmlns);
        }
        for (const value of array) {
          if (sparse || value != null) {
            writeItem(listNode, value);
          }
        }
        container.addChildNode(listNode);
      }
    }
    writeMap(mapMember, map, container, parentXmlns, containerIsMap = false) {
      var _a3, _b2, _c2, _d2;
      if (!mapMember.isMemberSchema()) {
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`);
      }
      const mapTraits = mapMember.getMergedTraits();
      const mapKeySchema = mapMember.getKeySchema();
      const mapKeyTraits = mapKeySchema.getMergedTraits();
      const keyTag = (_a3 = mapKeyTraits.xmlName) != null ? _a3 : "key";
      const mapValueSchema = mapMember.getValueSchema();
      const mapValueTraits = mapValueSchema.getMergedTraits();
      const valueTag = (_b2 = mapValueTraits.xmlName) != null ? _b2 : "value";
      const sparse = !!mapValueTraits.sparse;
      const flat = !!mapTraits.xmlFlattened;
      const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);
      const addKeyValue = (entry, key, val) => {
        const keyNode = XmlNode.of(keyTag, key);
        const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
        if (keyXmlns) {
          keyNode.addAttribute(keyXmlnsAttr, keyXmlns);
        }
        entry.addChildNode(keyNode);
        let valueNode = XmlNode.of(valueTag);
        if (mapValueSchema.isListSchema()) {
          this.writeList(mapValueSchema, val, valueNode, xmlns);
        } else if (mapValueSchema.isMapSchema()) {
          this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
        } else if (mapValueSchema.isStructSchema()) {
          valueNode = this.writeStruct(mapValueSchema, val, xmlns);
        } else {
          this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
        }
        entry.addChildNode(valueNode);
      };
      if (flat) {
        for (const key in map) {
          const val = map[key];
          if (sparse || val != null) {
            const entry = XmlNode.of((_c2 = mapTraits.xmlName) != null ? _c2 : mapMember.getMemberName());
            addKeyValue(entry, key, val);
            container.addChildNode(entry);
          }
        }
      } else {
        let mapNode;
        if (!containerIsMap) {
          mapNode = XmlNode.of((_d2 = mapTraits.xmlName) != null ? _d2 : mapMember.getMemberName());
          if (xmlns) {
            mapNode.addAttribute(xmlnsAttr, xmlns);
          }
          container.addChildNode(mapNode);
        }
        for (const key in map) {
          const val = map[key];
          if (sparse || val != null) {
            const entry = XmlNode.of("entry");
            addKeyValue(entry, key, val);
            (containerIsMap ? container : mapNode).addChildNode(entry);
          }
        }
      }
    }
    writeSimple(_schema, value) {
      var _a3, _b2;
      if (null === value) {
        throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      }
      const ns = NormalizedSchema.of(_schema);
      let nodeContents = null;
      if (value && typeof value === "object") {
        if (ns.isBlobSchema()) {
          nodeContents = ((_b2 = (_a3 = this.serdeContext) == null ? void 0 : _a3.base64Encoder) != null ? _b2 : toBase64)(value);
        } else if (ns.isTimestampSchema() && value instanceof Date) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              nodeContents = value.toISOString().replace(".000Z", "Z");
              break;
            case 6:
              nodeContents = dateToUtcString(value);
              break;
            case 7:
              nodeContents = String(value.getTime() / 1e3);
              break;
            default:
              console.warn("Missing timestamp format, using http date", value);
              nodeContents = dateToUtcString(value);
              break;
          }
        } else if (ns.isBigDecimalSchema() && value) {
          if (value instanceof NumericValue) {
            return value.string;
          }
          return String(value);
        } else if (ns.isMapSchema() || ns.isListSchema()) {
          throw new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
        } else {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(true)}`);
        }
      }
      if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
        nodeContents = String(value);
      }
      if (ns.isStringSchema()) {
        if (value === void 0 && ns.isIdempotencyToken()) {
          nodeContents = v4();
        } else {
          nodeContents = String(value);
        }
      }
      if (nodeContents === null) {
        throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
      }
      return nodeContents;
    }
    writeSimpleInto(_schema, value, into, parentXmlns) {
      const nodeContents = this.writeSimple(_schema, value);
      const ns = NormalizedSchema.of(_schema);
      const content = new XmlText(nodeContents);
      const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
      if (xmlns) {
        into.addAttribute(xmlnsAttr, xmlns);
      }
      into.addChildNode(content);
    }
    getXmlnsAttribute(ns, parentXmlns) {
      var _a3;
      const traits = ns.getMergedTraits();
      const [prefix, xmlns] = (_a3 = traits.xmlNamespace) != null ? _a3 : [];
      if (xmlns && xmlns !== parentXmlns) {
        return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
      }
      return [void 0, void 0];
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js
  var XmlCodec = class extends SerdeContextConfig {
    constructor(settings2) {
      super();
      __publicField(this, "settings");
      this.settings = settings2;
    }
    createSerializer() {
      const serializer = new XmlShapeSerializer(this.settings);
      serializer.setSerdeContext(this.serdeContext);
      return serializer;
    }
    createDeserializer() {
      const deserializer = new XmlShapeDeserializer(this.settings);
      deserializer.setSerdeContext(this.serdeContext);
      return deserializer;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js
  var AwsRestXmlProtocol = class _AwsRestXmlProtocol extends HttpBindingProtocol {
    constructor(options) {
      super(options);
      __publicField(this, "codec");
      __publicField(this, "serializer");
      __publicField(this, "deserializer");
      __publicField(this, "mixin", new ProtocolLib());
      const settings2 = {
        timestampFormat: {
          useTrait: true,
          default: 5
        },
        httpBindings: true,
        xmlNamespace: options.xmlNamespace,
        serviceNamespace: options.defaultNamespace
      };
      this.codec = new XmlCodec(settings2);
      this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings2);
      this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings2);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    serializeRequest(operationSchema, input, context) {
      return __async(this, null, function* () {
        const request = yield __superGet(_AwsRestXmlProtocol.prototype, this, "serializeRequest").call(this, operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
          const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
          if (contentType) {
            request.headers["content-type"] = contentType;
          }
        }
        if (typeof request.body === "string" && request.headers["content-type"] === this.getDefaultContentType() && !request.body.startsWith("<?xml ") && !this.hasUnstructuredPayloadBinding(inputSchema)) {
          request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
        }
        return request;
      });
    }
    deserializeResponse(operationSchema, context, response) {
      return __async(this, null, function* () {
        return __superGet(_AwsRestXmlProtocol.prototype, this, "deserializeResponse").call(this, operationSchema, context, response);
      });
    }
    handleError(operationSchema, context, response, dataObject, metadata) {
      return __async(this, null, function* () {
        var _a3, _b2, _c2, _d2, _e2, _f, _g, _h2, _i2, _j, _k;
        const errorIdentifier = (_a3 = loadRestXmlErrorCode(response, dataObject)) != null ? _a3 : "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        if (dataObject.Error && typeof dataObject.Error === "object") {
          for (const key of Object.keys(dataObject.Error)) {
            dataObject[key] = dataObject.Error[key];
            if (key.toLowerCase() === "message") {
              dataObject.message = dataObject.Error[key];
            }
          }
        }
        if (dataObject.RequestId && !metadata.requestId) {
          metadata.requestId = dataObject.RequestId;
        }
        const { errorSchema, errorMetadata } = yield this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = (_g = (_f = (_e2 = (_d2 = (_b2 = dataObject.Error) == null ? void 0 : _b2.message) != null ? _d2 : (_c2 = dataObject.Error) == null ? void 0 : _c2.Message) != null ? _e2 : dataObject.message) != null ? _f : dataObject.Message) != null ? _g : "UnknownError";
        const ErrorCtor = (_h2 = this.compositeErrorRegistry.getErrorCtor(errorSchema)) != null ? _h2 : Error;
        const exception = new ErrorCtor(message);
        yield this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        const errorDeserializer = this.codec.createDeserializer();
        for (const [name, member2] of ns.structIterator()) {
          const target = (_i2 = member2.getMergedTraits().xmlName) != null ? _i2 : name;
          const value = (_k = (_j = dataObject.Error) == null ? void 0 : _j[target]) != null ? _k : dataObject[target];
          output[name] = errorDeserializer.readSchema(member2, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      });
    }
    getDefaultContentType() {
      return "application/xml";
    }
    hasUnstructuredPayloadBinding(ns) {
      for (const [, member2] of ns.structIterator()) {
        if (member2.getMergedTraits().httpPayload) {
          return !(member2.isStructSchema() || member2.isMapSchema() || member2.isListSchema());
        }
      }
      return false;
    }
  };

  // node_modules/@aws-sdk/middleware-sdk-s3/dist-es/protocol/S3RestXmlProtocol.js
  var S3RestXmlProtocol = class _S3RestXmlProtocol extends AwsRestXmlProtocol {
    serializeRequest(operationSchema, input, context) {
      return __async(this, null, function* () {
        var _a3;
        const request = yield __superGet(_S3RestXmlProtocol.prototype, this, "serializeRequest").call(this, operationSchema, input, context);
        const ns = NormalizedSchema.of(operationSchema.input);
        const staticStructureSchema = ns.getSchema();
        let bucketMemberIndex = 0;
        const requiredMemberCount = (_a3 = staticStructureSchema[6]) != null ? _a3 : 0;
        if (input && typeof input === "object") {
          for (const [memberName, memberNs] of ns.structIterator()) {
            if (++bucketMemberIndex > requiredMemberCount) {
              break;
            }
            if (memberName === "Bucket") {
              if (!input.Bucket && memberNs.getMergedTraits().httpLabel) {
                throw new Error(`No value provided for input HTTP label: Bucket.`);
              }
              break;
            }
          }
        }
        return request;
      });
    }
  };

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
  var DEFAULT_UA_APP_ID = void 0;
  function isValidUserAgentAppId(appId) {
    if (appId === void 0) {
      return true;
    }
    return typeof appId === "string" && appId.length <= 50;
  }
  function resolveUserAgentConfig(input) {
    var _a3;
    const normalizedAppIdProvider = normalizeProvider2((_a3 = input.userAgentAppId) != null ? _a3 : DEFAULT_UA_APP_ID);
    const { customUserAgent } = input;
    return Object.assign(input, {
      customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
      userAgentAppId: () => __async(null, null, function* () {
        var _a4, _b2;
        const appId = yield normalizedAppIdProvider();
        if (!isValidUserAgentAppId(appId)) {
          const logger2 = ((_b2 = (_a4 = input.logger) == null ? void 0 : _a4.constructor) == null ? void 0 : _b2.name) === "NoOpLogger" || !input.logger ? console : input.logger;
          if (typeof appId !== "string") {
            logger2 == null ? void 0 : logger2.warn("userAgentAppId must be a string or undefined.");
          } else if (appId.length > 50) {
            logger2 == null ? void 0 : logger2.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
          }
        }
        return appId;
      })
    });
  }

  // node_modules/@smithy/util-endpoints/dist-es/bdd/BinaryDecisionDiagram.js
  var BinaryDecisionDiagram = class _BinaryDecisionDiagram {
    constructor(bdd2, root2, conditions, results) {
      __publicField(this, "nodes");
      __publicField(this, "root");
      __publicField(this, "conditions");
      __publicField(this, "results");
      this.nodes = bdd2;
      this.root = root2;
      this.conditions = conditions;
      this.results = results;
    }
    static from(bdd2, root2, conditions, results) {
      return new _BinaryDecisionDiagram(bdd2, root2, conditions, results);
    }
  };

  // node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
  var EndpointCache = class {
    constructor({ size, params }) {
      __publicField(this, "capacity");
      __publicField(this, "data", /* @__PURE__ */ new Map());
      __publicField(this, "parameters", []);
      this.capacity = size != null ? size : 50;
      if (params) {
        this.parameters = params;
      }
    }
    get(endpointParams, resolver) {
      const key = this.hash(endpointParams);
      if (key === false) {
        return resolver();
      }
      if (!this.data.has(key)) {
        if (this.data.size > this.capacity + 10) {
          const keys = this.data.keys();
          let i2 = 0;
          while (true) {
            const { value, done } = keys.next();
            this.data.delete(value);
            if (done || ++i2 > 10) {
              break;
            }
          }
        }
        this.data.set(key, resolver());
      }
      return this.data.get(key);
    }
    size() {
      return this.data.size;
    }
    hash(endpointParams) {
      var _a3;
      let buffer = "";
      const { parameters } = this;
      if (parameters.length === 0) {
        return false;
      }
      for (const param of parameters) {
        const val = String((_a3 = endpointParams[param]) != null ? _a3 : "");
        if (val.includes("|;")) {
          return false;
        }
        buffer += val + "|;";
      }
      return buffer;
    }
  };

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
  var EndpointError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "EndpointError";
    }
  };

  // node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
  var debugId = "endpoints";

  // node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
  function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
      return input;
    }
    if ("ref" in input) {
      return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
      return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
  }

  // node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
  var customEndpointFunctions = {};

  // node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
  var booleanEquals = (value1, value2) => value1 === value2;

  // node_modules/@smithy/util-endpoints/dist-es/lib/coalesce.js
  function coalesce(...args) {
    for (const arg of args) {
      if (arg != null) {
        return arg;
      }
    }
    return void 0;
  }

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
  var getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
      const squareBracketIndex = part.indexOf("[");
      if (squareBracketIndex !== -1) {
        if (part.indexOf("]") !== part.length - 1) {
          throw new EndpointError(`Path: '${path}' does not end with ']'`);
        }
        const arrayIndex = part.slice(squareBracketIndex + 1, -1);
        if (Number.isNaN(parseInt(arrayIndex))) {
          throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
        }
        if (squareBracketIndex !== 0) {
          pathList.push(part.slice(0, squareBracketIndex));
        }
        pathList.push(arrayIndex);
      } else {
        pathList.push(part);
      }
    }
    return pathList;
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
  var getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
      throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    } else if (Array.isArray(acc)) {
      const i2 = parseInt(index);
      return acc[i2 < 0 ? acc.length + i2 : i2];
    }
    return acc[index];
  }, value);

  // node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
  var isSet = (value) => value != null;

  // node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
  var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
  var isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
      return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
      if (!isValidHostLabel(label)) {
        return false;
      }
    }
    return true;
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/ite.js
  function ite(condition, trueValue, falseValue) {
    return condition ? trueValue : falseValue;
  }

  // node_modules/@smithy/util-endpoints/dist-es/lib/not.js
  var not = (value) => !value;

  // node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
  var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
  var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");

  // node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
  var DEFAULT_PORTS = {
    [EndpointURLScheme.HTTP]: 80,
    [EndpointURLScheme.HTTPS]: 443
  };
  var parseURL = (value) => {
    const whatwgURL = (() => {
      try {
        if (value instanceof URL) {
          return value;
        }
        if (typeof value === "object" && "hostname" in value) {
          const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
          const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
          url.search = Object.entries(query).map(([k2, v2]) => `${k2}=${v2}`).join("&");
          return url;
        }
        return new URL(value);
      } catch (error) {
        return null;
      }
    })();
    if (!whatwgURL) {
      console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
      return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
      return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(EndpointURLScheme).includes(scheme)) {
      return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
      scheme,
      authority,
      path: pathname,
      normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
      isIp
    };
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/split.js
  function split(value, delimiter, limit) {
    if (limit === 1) {
      return [value];
    }
    if (value === "") {
      return [""];
    }
    const parts = value.split(delimiter);
    if (limit === 0) {
      return parts;
    }
    return parts.slice(0, limit - 1).concat(parts.slice(1).join(delimiter));
  }

  // node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
  var stringEquals = (value1, value2) => value1 === value2;

  // node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
  var substring = (input, start, stop, reverse) => {
    if (input == null || start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
      return null;
    }
    if (!reverse) {
      return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
  var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`);

  // node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
  var endpointFunctions = {
    booleanEquals,
    coalesce,
    getAttr,
    isSet,
    isValidHostLabel,
    ite,
    not,
    parseURL,
    split,
    stringEquals,
    substring,
    uriEncode
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
  var evaluateTemplate = (template, options) => {
    var _a3, _b2;
    const evaluatedTemplateArr = [];
    const { referenceRecord, endpointParams } = options;
    let currentIndex = 0;
    while (currentIndex < template.length) {
      const openingBraceIndex = template.indexOf("{", currentIndex);
      if (openingBraceIndex === -1) {
        evaluatedTemplateArr.push(template.slice(currentIndex));
        break;
      }
      evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
      const closingBraceIndex = template.indexOf("}", openingBraceIndex);
      if (closingBraceIndex === -1) {
        evaluatedTemplateArr.push(template.slice(openingBraceIndex));
        break;
      }
      if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
        evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
        currentIndex = closingBraceIndex + 2;
      }
      const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
      if (parameterName.includes("#")) {
        const [refName, attrName] = parameterName.split("#");
        evaluatedTemplateArr.push(getAttr((_a3 = referenceRecord[refName]) != null ? _a3 : endpointParams[refName], attrName));
      } else {
        evaluatedTemplateArr.push((_b2 = referenceRecord[parameterName]) != null ? _b2 : endpointParams[parameterName]);
      }
      currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
  var getReferenceValue = ({ ref }, options) => {
    var _a3;
    return (_a3 = options.referenceRecord[ref]) != null ? _a3 : options.endpointParams[ref];
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
  var evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
      return evaluateTemplate(obj, options);
    } else if (obj["fn"]) {
      return group.callFunction(obj, options);
    } else if (obj["ref"]) {
      return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
  };
  var callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = Array(argv.length);
    for (let i2 = 0; i2 < evaluatedArgs.length; ++i2) {
      const arg = argv[i2];
      if (typeof arg === "boolean" || typeof arg === "number") {
        evaluatedArgs[i2] = arg;
      } else {
        evaluatedArgs[i2] = group.evaluateExpression(arg, "arg", options);
      }
    }
    const namespaceSeparatorIndex = fn.indexOf(".");
    if (namespaceSeparatorIndex !== -1) {
      const namespaceFunctions = customEndpointFunctions[fn.slice(0, namespaceSeparatorIndex)];
      const customFunction = namespaceFunctions == null ? void 0 : namespaceFunctions[fn.slice(namespaceSeparatorIndex + 1)];
      if (typeof customFunction === "function") {
        return customFunction(...evaluatedArgs);
      }
    }
    const callable = endpointFunctions[fn];
    if (typeof callable === "function") {
      return callable(...evaluatedArgs);
    }
    throw new Error(`function ${fn} not loaded in endpointFunctions.`);
  };
  var group = {
    evaluateExpression,
    callFunction
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
  var evaluateCondition = (condition, options) => {
    var _a3, _b2;
    const { assign } = condition;
    if (assign && assign in options.referenceRecord) {
      throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(condition, options);
    (_b2 = (_a3 = options.logger) == null ? void 0 : _a3.debug) == null ? void 0 : _b2.call(_a3, `${debugId} evaluateCondition: ${toDebugString(condition)} = ${toDebugString(value)}`);
    const result = value === "" ? true : !!value;
    if (assign != null) {
      return { result, toAssign: { name: assign, value } };
    }
    return { result };
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
  var getEndpointHeaders = (headers, options) => Object.entries(headers != null ? headers : {}).reduce((acc, [headerKey, headerVal]) => {
    acc[headerKey] = headerVal.map((headerValEntry) => {
      const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
      if (typeof processedExpr !== "string") {
        throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
      }
      return processedExpr;
    });
    return acc;
  }, {});

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
  var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => {
    acc[propertyKey] = group2.getEndpointProperty(propertyVal, options);
    return acc;
  }, {});
  var getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
      return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
      case "string":
        return evaluateTemplate(property, options);
      case "object":
        if (property === null) {
          throw new EndpointError(`Unexpected endpoint property: ${property}`);
        }
        return group2.getEndpointProperties(property, options);
      case "boolean":
        return property;
      default:
        throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
  };
  var group2 = {
    getEndpointProperty,
    getEndpointProperties
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
  var getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
      try {
        return new URL(expression);
      } catch (error) {
        console.error(`Failed to construct URL with ${expression}`, error);
        throw error;
      }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
  };

  // node_modules/@smithy/util-endpoints/dist-es/decideEndpoint.js
  var RESULT = 1e8;
  var decideEndpoint = (bdd2, options) => {
    const { nodes: nodes2, root: root2, results, conditions } = bdd2;
    let ref = root2;
    const referenceRecord = {};
    const closure = {
      referenceRecord,
      endpointParams: options.endpointParams,
      logger: options.logger
    };
    while (ref !== 1 && ref !== -1 && ref < RESULT) {
      const node_i = 3 * (Math.abs(ref) - 1);
      const [condition_i, highRef, lowRef] = [nodes2[node_i], nodes2[node_i + 1], nodes2[node_i + 2]];
      const [fn, argv, assign] = conditions[condition_i];
      const evaluation = evaluateCondition({ fn, assign, argv }, closure);
      if (evaluation.toAssign) {
        const { name, value } = evaluation.toAssign;
        referenceRecord[name] = value;
      }
      ref = ref >= 0 === evaluation.result ? highRef : lowRef;
    }
    if (ref >= RESULT) {
      const result = results[ref - RESULT];
      if (result[0] === -1) {
        const [, errorExpression] = result;
        throw new EndpointError(evaluateExpression(errorExpression, "Error", closure));
      }
      const [url, properties, headers] = result;
      return {
        url: getEndpointUrl(url, closure),
        properties: getEndpointProperties(properties, closure),
        headers: getEndpointHeaders(headers != null ? headers : {}, closure)
      };
    }
    throw new EndpointError(`No matching endpoint.`);
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
  var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
      for (const label of value.split(".")) {
        if (!isVirtualHostableS3Bucket(label)) {
          return false;
        }
      }
      return true;
    }
    if (!isValidHostLabel(value)) {
      return false;
    }
    if (value.length < 3 || value.length > 63) {
      return false;
    }
    if (value !== value.toLowerCase()) {
      return false;
    }
    if (isIpAddress(value)) {
      return false;
    }
    return true;
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
  var ARN_DELIMITER = ":";
  var RESOURCE_DELIMITER = "/";
  var parseArn = (value) => {
    const segments = value.split(ARN_DELIMITER);
    if (segments.length < 6)
      return null;
    const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
    if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
      return null;
    const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
    return {
      partition: partition2,
      service,
      region,
      accountId,
      resourceId
    };
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
  var partitions_default = {
    partitions: [{
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-east-1",
        name: "aws",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
      regions: {
        "af-south-1": {
          description: "Africa (Cape Town)"
        },
        "ap-east-1": {
          description: "Asia Pacific (Hong Kong)"
        },
        "ap-east-2": {
          description: "Asia Pacific (Taipei)"
        },
        "ap-northeast-1": {
          description: "Asia Pacific (Tokyo)"
        },
        "ap-northeast-2": {
          description: "Asia Pacific (Seoul)"
        },
        "ap-northeast-3": {
          description: "Asia Pacific (Osaka)"
        },
        "ap-south-1": {
          description: "Asia Pacific (Mumbai)"
        },
        "ap-south-2": {
          description: "Asia Pacific (Hyderabad)"
        },
        "ap-southeast-1": {
          description: "Asia Pacific (Singapore)"
        },
        "ap-southeast-2": {
          description: "Asia Pacific (Sydney)"
        },
        "ap-southeast-3": {
          description: "Asia Pacific (Jakarta)"
        },
        "ap-southeast-4": {
          description: "Asia Pacific (Melbourne)"
        },
        "ap-southeast-5": {
          description: "Asia Pacific (Malaysia)"
        },
        "ap-southeast-6": {
          description: "Asia Pacific (New Zealand)"
        },
        "ap-southeast-7": {
          description: "Asia Pacific (Thailand)"
        },
        "aws-global": {
          description: "aws global region"
        },
        "ca-central-1": {
          description: "Canada (Central)"
        },
        "ca-west-1": {
          description: "Canada West (Calgary)"
        },
        "eu-central-1": {
          description: "Europe (Frankfurt)"
        },
        "eu-central-2": {
          description: "Europe (Zurich)"
        },
        "eu-north-1": {
          description: "Europe (Stockholm)"
        },
        "eu-south-1": {
          description: "Europe (Milan)"
        },
        "eu-south-2": {
          description: "Europe (Spain)"
        },
        "eu-west-1": {
          description: "Europe (Ireland)"
        },
        "eu-west-2": {
          description: "Europe (London)"
        },
        "eu-west-3": {
          description: "Europe (Paris)"
        },
        "il-central-1": {
          description: "Israel (Tel Aviv)"
        },
        "me-central-1": {
          description: "Middle East (UAE)"
        },
        "me-south-1": {
          description: "Middle East (Bahrain)"
        },
        "mx-central-1": {
          description: "Mexico (Central)"
        },
        "sa-east-1": {
          description: "South America (Sao Paulo)"
        },
        "us-east-1": {
          description: "US East (N. Virginia)"
        },
        "us-east-2": {
          description: "US East (Ohio)"
        },
        "us-west-1": {
          description: "US West (N. California)"
        },
        "us-west-2": {
          description: "US West (Oregon)"
        }
      }
    }, {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        implicitGlobalRegion: "cn-northwest-1",
        name: "aws-cn",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "aws-cn-global": {
          description: "aws-cn global region"
        },
        "cn-north-1": {
          description: "China (Beijing)"
        },
        "cn-northwest-1": {
          description: "China (Ningxia)"
        }
      }
    }, {
      id: "aws-eusc",
      outputs: {
        dnsSuffix: "amazonaws.eu",
        dualStackDnsSuffix: "api.amazonwebservices.eu",
        implicitGlobalRegion: "eusc-de-east-1",
        name: "aws-eusc",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
      regions: {
        "eusc-de-east-1": {
          description: "AWS European Sovereign Cloud (Germany)"
        }
      }
    }, {
      id: "aws-iso",
      outputs: {
        dnsSuffix: "c2s.ic.gov",
        dualStackDnsSuffix: "api.aws.ic.gov",
        implicitGlobalRegion: "us-iso-east-1",
        name: "aws-iso",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-global": {
          description: "aws-iso global region"
        },
        "us-iso-east-1": {
          description: "US ISO East"
        },
        "us-iso-west-1": {
          description: "US ISO WEST"
        }
      }
    }, {
      id: "aws-iso-b",
      outputs: {
        dnsSuffix: "sc2s.sgov.gov",
        dualStackDnsSuffix: "api.aws.scloud",
        implicitGlobalRegion: "us-isob-east-1",
        name: "aws-iso-b",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-b-global": {
          description: "aws-iso-b global region"
        },
        "us-isob-east-1": {
          description: "US ISOB East (Ohio)"
        },
        "us-isob-west-1": {
          description: "US ISOB West"
        }
      }
    }, {
      id: "aws-iso-e",
      outputs: {
        dnsSuffix: "cloud.adc-e.uk",
        dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
        implicitGlobalRegion: "eu-isoe-west-1",
        name: "aws-iso-e",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-e-global": {
          description: "aws-iso-e global region"
        },
        "eu-isoe-west-1": {
          description: "EU ISOE West"
        }
      }
    }, {
      id: "aws-iso-f",
      outputs: {
        dnsSuffix: "csp.hci.ic.gov",
        dualStackDnsSuffix: "api.aws.hci.ic.gov",
        implicitGlobalRegion: "us-isof-south-1",
        name: "aws-iso-f",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-f-global": {
          description: "aws-iso-f global region"
        },
        "us-isof-east-1": {
          description: "US ISOF EAST"
        },
        "us-isof-south-1": {
          description: "US ISOF SOUTH"
        }
      }
    }, {
      id: "aws-us-gov",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-gov-west-1",
        name: "aws-us-gov",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "aws-us-gov-global": {
          description: "aws-us-gov global region"
        },
        "us-gov-east-1": {
          description: "AWS GovCloud (US-East)"
        },
        "us-gov-west-1": {
          description: "AWS GovCloud (US-West)"
        }
      }
    }],
    version: "1.1"
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
  var selectedPartitionsInfo = partitions_default;
  var selectedUserAgentPrefix = "";
  var partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition2 of partitions) {
      const { regions, outputs } = partition2;
      for (const [region, regionData] of Object.entries(regions)) {
        if (region === value) {
          return __spreadValues(__spreadValues({}, outputs), regionData);
        }
      }
    }
    for (const partition2 of partitions) {
      const { regionRegex, outputs } = partition2;
      if (new RegExp(regionRegex).test(value)) {
        return __spreadValues({}, outputs);
      }
    }
    const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
    if (!DEFAULT_PARTITION) {
      throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    }
    return __spreadValues({}, DEFAULT_PARTITION.outputs);
  };
  var getUserAgentPrefix = () => selectedUserAgentPrefix;

  // node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
  var awsEndpointFunctions = {
    isVirtualHostableS3Bucket,
    parseArn,
    partition
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@aws-sdk/middleware-user-agent/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest7 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery7(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery7(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
  var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
  function checkFeatures(context, config, args) {
    return __async(this, null, function* () {
      var _a3, _b2, _c2, _d2, _e2, _f;
      const request = args.request;
      if (((_a3 = request == null ? void 0 : request.headers) == null ? void 0 : _a3["smithy-protocol"]) === "rpc-v2-cbor") {
        setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
      }
      if (typeof config.retryStrategy === "function") {
        const retryStrategy = yield config.retryStrategy();
        if (typeof retryStrategy.mode === "string") {
          switch (retryStrategy.mode) {
            case RETRY_MODES.ADAPTIVE:
              setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
              break;
            case RETRY_MODES.STANDARD:
              setFeature(context, "RETRY_MODE_STANDARD", "E");
              break;
          }
        }
      }
      if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String((_b2 = endpointV2 == null ? void 0 : endpointV2.url) == null ? void 0 : _b2.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
          setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (yield (_c2 = config.accountIdEndpointMode) == null ? void 0 : _c2.call(config)) {
          case "disabled":
            setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
          case "preferred":
            setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
          case "required":
            setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
        }
      }
      const identity = (_e2 = (_d2 = context.__smithy_context) == null ? void 0 : _d2.selectedHttpAuthScheme) == null ? void 0 : _e2.identity;
      if (identity == null ? void 0 : identity.$source) {
        const credentials = identity;
        if (credentials.accountId) {
          setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries((_f = credentials.$source) != null ? _f : {})) {
          setFeature(context, key, value);
        }
      }
    });
  }

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
  var USER_AGENT = "user-agent";
  var X_AMZ_USER_AGENT = "x-amz-user-agent";
  var SPACE = " ";
  var UA_NAME_SEPARATOR = "/";
  var UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
  var UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
  var UA_ESCAPE_CHAR = "-";

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
  var BYTE_LIMIT = 1024;
  function encodeFeatures(features) {
    let buffer = "";
    for (const key in features) {
      const val = features[key];
      if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
        if (buffer.length) {
          buffer += "," + val;
        } else {
          buffer += val;
        }
        continue;
      }
      break;
    }
    return buffer;
  }

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
  var userAgentMiddleware = (options) => (next, context) => (args) => __async(null, null, function* () {
    var _a3, _b2, _c2, _d2;
    const { request } = args;
    if (!HttpRequest7.isInstance(request)) {
      return next(args);
    }
    const { headers } = request;
    const userAgent = ((_a3 = context == null ? void 0 : context.userAgent) == null ? void 0 : _a3.map(escapeUserAgent)) || [];
    const defaultUserAgent = (yield options.defaultUserAgentProvider()).map(escapeUserAgent);
    yield checkFeatures(context, options, args);
    const awsContext = context;
    defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, (_b2 = context.__smithy_context) == null ? void 0 : _b2.features, (_c2 = awsContext.__aws_sdk_context) == null ? void 0 : _c2.features))}`);
    const customUserAgent = ((_d2 = options == null ? void 0 : options.customUserAgent) == null ? void 0 : _d2.map(escapeUserAgent)) || [];
    const appId = yield options.userAgentAppId();
    if (appId) {
      defaultUserAgent.push(escapeUserAgent([`app`, `${appId}`]));
    }
    const prefix = getUserAgentPrefix();
    const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
    const normalUAValue = [
      ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
      ...customUserAgent
    ].join(SPACE);
    if (options.runtime !== "browser") {
      if (normalUAValue) {
        headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
      }
      headers[USER_AGENT] = sdkUserAgentValue;
    } else {
      headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next(__spreadProps(__spreadValues({}, args), {
      request
    }));
  });
  var escapeUserAgent = (userAgentPair) => {
    var _a3;
    const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
    const version = (_a3 = userAgentPair[1]) == null ? void 0 : _a3.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
      uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
      switch (index) {
        case 0:
          return item;
        case 1:
          return `${acc}/${item}`;
        default:
          return `${acc}#${item}`;
      }
    }, "");
  };
  var getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true
  };
  var getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
  var DEFAULT_USE_DUALSTACK_ENDPOINT = false;

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
  var DEFAULT_USE_FIPS_ENDPOINT = false;

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/checkRegion.js
  var validRegions = /* @__PURE__ */ new Set();
  var checkRegion = (region, check = isValidHostLabel) => {
    if (!validRegions.has(region) && !check(region)) {
      if (region === "*") {
        console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
      } else {
        throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
      }
    } else {
      validRegions.add(region);
    }
  };

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
  var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
  var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
  var resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
      throw new Error("Region is missing");
    }
    return Object.assign(input, {
      region: () => __async(null, null, function* () {
        const providedRegion = typeof region === "function" ? yield region() : region;
        const realRegion = getRealRegion(providedRegion);
        checkRegion(realRegion);
        return realRegion;
      }),
      useFipsEndpoint: () => __async(null, null, function* () {
        const providedRegion = typeof region === "string" ? region : yield region();
        if (isFipsRegion(providedRegion)) {
          return true;
        }
        return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
      })
    });
  };

  // node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
  var resolveEventStreamSerdeConfig = (input) => Object.assign(input, {
    eventStreamMarshaller: input.eventStreamSerdeProvider(input)
  });

  // node_modules/@smithy/middleware-content-length/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest8 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery8(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery8(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@smithy/middleware-content-length/dist-es/index.js
  var CONTENT_LENGTH_HEADER2 = "content-length";
  function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => (args) => __async(null, null, function* () {
      const request = args.request;
      if (HttpRequest8.isInstance(request)) {
        const { body, headers } = request;
        if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER2) === -1) {
          try {
            const length = bodyLengthChecker(body);
            request.headers = __spreadProps(__spreadValues({}, request.headers), {
              [CONTENT_LENGTH_HEADER2]: String(length)
            });
          } catch (error) {
          }
        }
      }
      return next(__spreadProps(__spreadValues({}, args), {
        request
      }));
    });
  }
  var contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true
  };
  var getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
  var resolveParamsForS3 = (endpointParams) => __async(null, null, function* () {
    const bucket = (endpointParams == null ? void 0 : endpointParams.Bucket) || "";
    if (typeof endpointParams.Bucket === "string") {
      endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
      if (endpointParams.ForcePathStyle === true) {
        throw new Error("Path-style addressing cannot be used with ARN buckets");
      }
    } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
      endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
      endpointParams.disableMultiRegionAccessPoints = true;
      endpointParams.DisableMRAP = true;
    }
    return endpointParams;
  });
  var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
  var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
  var DOTS_PATTERN = /\.\./;
  var isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
  var isArnBucketName = (bucketName) => {
    const [arn, partition2, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition2 && service && bucket);
    if (isArn && !isValidArn) {
      throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
  var createConfigValueProvider = (configKey, canonicalEndpointParamKey, config, isClientContextParam = false) => {
    const configProvider = () => __async(null, null, function* () {
      var _a3, _b2;
      let configValue;
      if (isClientContextParam) {
        const clientContextParams = config.clientContextParams;
        const nestedValue = clientContextParams == null ? void 0 : clientContextParams[configKey];
        configValue = (_a3 = nestedValue != null ? nestedValue : config[configKey]) != null ? _a3 : config[canonicalEndpointParamKey];
      } else {
        configValue = (_b2 = config[configKey]) != null ? _b2 : config[canonicalEndpointParamKey];
      }
      if (typeof configValue === "function") {
        return configValue();
      }
      return configValue;
    });
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
      return () => __async(null, null, function* () {
        var _a3;
        const credentials = typeof config.credentials === "function" ? yield config.credentials() : config.credentials;
        const configValue = (_a3 = credentials == null ? void 0 : credentials.credentialScope) != null ? _a3 : credentials == null ? void 0 : credentials.CredentialScope;
        return configValue;
      });
    }
    if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
      return () => __async(null, null, function* () {
        var _a3;
        const credentials = typeof config.credentials === "function" ? yield config.credentials() : config.credentials;
        const configValue = (_a3 = credentials == null ? void 0 : credentials.accountId) != null ? _a3 : credentials == null ? void 0 : credentials.AccountId;
        return configValue;
      });
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
      return () => __async(null, null, function* () {
        if (config.isCustomEndpoint === false) {
          return void 0;
        }
        const endpoint = yield configProvider();
        if (endpoint && typeof endpoint === "object") {
          if ("url" in endpoint) {
            return endpoint.url.href;
          }
          if ("hostname" in endpoint) {
            const { protocol, hostname, port, path } = endpoint;
            return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
          }
        }
        return endpoint;
      });
    }
    return configProvider;
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
  var getEndpointFromConfig = (serviceId) => __async(null, null, function* () {
    return void 0;
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
  var toEndpointV12 = (endpoint) => {
    if (typeof endpoint === "object") {
      if ("url" in endpoint) {
        const v1Endpoint = parseUrl(endpoint.url);
        if (endpoint.headers) {
          v1Endpoint.headers = {};
          for (const [name, values] of Object.entries(endpoint.headers)) {
            v1Endpoint.headers[name.toLowerCase()] = values.join(", ");
          }
        }
        return v1Endpoint;
      }
      return endpoint;
    }
    return parseUrl(endpoint);
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
  var getEndpointFromInstructions = (commandInput, instructionsSupplier, clientConfig, context) => __async(null, null, function* () {
    var _a3;
    if (!clientConfig.isCustomEndpoint) {
      let endpointFromConfig;
      if (clientConfig.serviceConfiguredEndpoint) {
        endpointFromConfig = yield clientConfig.serviceConfiguredEndpoint();
      } else {
        endpointFromConfig = yield getEndpointFromConfig(clientConfig.serviceId);
      }
      if (endpointFromConfig) {
        clientConfig.endpoint = () => Promise.resolve(toEndpointV12(endpointFromConfig));
        clientConfig.isCustomEndpoint = true;
      }
    }
    const endpointParams = yield resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
      throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    if (clientConfig.isCustomEndpoint && clientConfig.endpoint) {
      const customEndpoint = yield clientConfig.endpoint();
      if (customEndpoint == null ? void 0 : customEndpoint.headers) {
        (_a3 = endpoint.headers) != null ? _a3 : endpoint.headers = {};
        for (const [name, value] of Object.entries(customEndpoint.headers)) {
          endpoint.headers[name] = Array.isArray(value) ? value : [value];
        }
      }
    }
    return endpoint;
  });
  var resolveParams = (commandInput, instructionsSupplier, clientConfig) => __async(null, null, function* () {
    var _a3;
    const endpointParams = {};
    const instructions = ((_a3 = instructionsSupplier == null ? void 0 : instructionsSupplier.getEndpointParameterInstructions) == null ? void 0 : _a3.call(instructionsSupplier)) || {};
    for (const [name, instruction] of Object.entries(instructions)) {
      switch (instruction.type) {
        case "staticContextParams":
          endpointParams[name] = instruction.value;
          break;
        case "contextParams":
          endpointParams[name] = commandInput[instruction.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          endpointParams[name] = yield createConfigValueProvider(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
          break;
        case "operationContextParams":
          endpointParams[name] = instruction.get(commandInput);
          break;
        default:
          throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
      }
    }
    if (Object.keys(instructions).length === 0) {
      Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
      yield resolveParamsForS3(endpointParams);
    }
    return endpointParams;
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
  var endpointMiddleware = ({ config, instructions }) => {
    return (next, context) => (args) => __async(null, null, function* () {
      var _a3, _b2, _c2;
      if (config.isCustomEndpoint) {
        setFeature2(context, "ENDPOINT_OVERRIDE", "N");
      }
      const endpoint = yield getEndpointFromInstructions(args.input, {
        getEndpointParameterInstructions() {
          return instructions;
        }
      }, __spreadValues({}, config), context);
      context.endpointV2 = endpoint;
      context.authSchemes = (_a3 = endpoint.properties) == null ? void 0 : _a3.authSchemes;
      const authScheme = (_b2 = context.authSchemes) == null ? void 0 : _b2[0];
      if (authScheme) {
        context["signing_region"] = authScheme.signingRegion;
        context["signing_service"] = authScheme.signingName;
        const smithyContext = getSmithyContext(context);
        const httpAuthOption = (_c2 = smithyContext == null ? void 0 : smithyContext.selectedHttpAuthScheme) == null ? void 0 : _c2.httpAuthOption;
        if (httpAuthOption) {
          httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
            signing_region: authScheme.signingRegion,
            signingRegion: authScheme.signingRegion,
            signing_service: authScheme.signingName,
            signingName: authScheme.signingName,
            signingRegionSet: authScheme.signingRegionSet
          }, authScheme.properties);
        }
      }
      return next(__spreadValues({}, args));
    });
  };

  // node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
  var serializerMiddlewareOption2 = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
  var endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption2.name
  };
  var getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(endpointMiddleware({
        config,
        instructions
      }), endpointMiddlewareOptions);
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
  var resolveEndpointConfig = (input) => {
    var _a3;
    const tls = (_a3 = input.tls) != null ? _a3 : true;
    const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
    const customEndpointProvider = endpoint != null ? () => __async(null, null, function* () {
      return toEndpointV12(yield normalizeProvider(endpoint)());
    }) : void 0;
    const isCustomEndpoint = !!endpoint;
    const resolvedConfig = Object.assign(input, {
      endpoint: customEndpointProvider,
      tls,
      isCustomEndpoint,
      useDualstackEndpoint: normalizeProvider(useDualstackEndpoint != null ? useDualstackEndpoint : false),
      useFipsEndpoint: normalizeProvider(useFipsEndpoint != null ? useFipsEndpoint : false)
    });
    let configuredEndpointPromise = void 0;
    resolvedConfig.serviceConfiguredEndpoint = () => __async(null, null, function* () {
      if (input.serviceId && !configuredEndpointPromise) {
        configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
      }
      return configuredEndpointPromise;
    });
    return resolvedConfig;
  };

  // node_modules/@smithy/middleware-retry/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest9 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery9(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery9(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@smithy/middleware-retry/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse3 = class {
    constructor(options) {
      __publicField(this, "statusCode");
      __publicField(this, "reason");
      __publicField(this, "headers");
      __publicField(this, "body");
      this.statusCode = options.statusCode;
      this.reason = options.reason;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };

  // node_modules/@smithy/middleware-retry/dist-es/util.js
  var asSdkError = (error) => {
    if (error instanceof Error)
      return error;
    if (error instanceof Object)
      return Object.assign(new Error(), error);
    if (typeof error === "string")
      return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
  };

  // node_modules/@smithy/middleware-retry/dist-es/configurations.js
  var resolveRetryConfig = (input) => {
    var _a3;
    const { retryStrategy, retryMode } = input;
    const maxAttempts = normalizeProvider((_a3 = input.maxAttempts) != null ? _a3 : DEFAULT_MAX_ATTEMPTS);
    let controller = retryStrategy ? Promise.resolve(retryStrategy) : void 0;
    const getDefault = () => __async(null, null, function* () {
      return (yield normalizeProvider(retryMode)()) === RETRY_MODES.ADAPTIVE ? new AdaptiveRetryStrategy(maxAttempts) : new StandardRetryStrategy(maxAttempts);
    });
    return Object.assign(input, {
      maxAttempts,
      retryStrategy: () => controller != null ? controller : controller = getDefault()
    });
  };

  // node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
  var isStreamingPayload = (request) => (request == null ? void 0 : request.body) instanceof ReadableStream;

  // node_modules/@smithy/middleware-retry/dist-es/parseRetryAfterHeader.js
  function parseRetryAfterHeader(response, logger2) {
    var _a3, _b2, _c2, _d2;
    if (!HttpResponse3.isInstance(response)) {
      return;
    }
    for (const header of Object.keys(response.headers)) {
      const h2 = header.toLowerCase();
      if (h2 === "retry-after") {
        const retryAfter = response.headers[header];
        let retryAfterSeconds = NaN;
        if (retryAfter.endsWith("GMT")) {
          try {
            const date2 = parseRfc7231DateTime(retryAfter);
            retryAfterSeconds = (date2.getTime() - Date.now()) / 1e3;
          } catch (e2) {
            (_a3 = logger2 == null ? void 0 : logger2.trace) == null ? void 0 : _a3.call(logger2, "Failed to parse retry-after header");
            (_b2 = logger2 == null ? void 0 : logger2.trace) == null ? void 0 : _b2.call(logger2, e2);
          }
        } else if (retryAfter.match(/ GMT, ((\d+)|(\d+\.\d+))$/)) {
          retryAfterSeconds = Number((_c2 = retryAfter.match(/ GMT, ([\d.]+)$/)) == null ? void 0 : _c2[1]);
        } else if (retryAfter.match(/^((\d+)|(\d+\.\d+))$/)) {
          retryAfterSeconds = Number(retryAfter);
        } else if (Date.parse(retryAfter) >= Date.now()) {
          retryAfterSeconds = (Date.parse(retryAfter) - Date.now()) / 1e3;
        }
        if (isNaN(retryAfterSeconds)) {
          return;
        }
        return new Date(Date.now() + retryAfterSeconds * 1e3);
      } else if (h2 === "x-amz-retry-after") {
        const v2 = response.headers[header];
        const backoffMilliseconds = Number(v2);
        if (isNaN(backoffMilliseconds)) {
          (_d2 = logger2 == null ? void 0 : logger2.trace) == null ? void 0 : _d2.call(logger2, `Failed to parse x-amz-retry-after=${v2}`);
          return;
        }
        return new Date(Date.now() + backoffMilliseconds);
      }
    }
  }

  // node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
  var retryMiddleware = (options) => (next, context) => (args) => __async(null, null, function* () {
    var _a3, _b2;
    let retryStrategy = yield options.retryStrategy();
    const maxAttempts = yield options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
      retryStrategy = retryStrategy;
      let retryToken = yield retryStrategy.acquireInitialRetryToken(((_a3 = context["partition_id"]) != null ? _a3 : "") + (context.__retryLongPoll ? ":longpoll" : ""));
      let lastError = new Error();
      let attempts = 0;
      let totalRetryDelay = 0;
      const { request } = args;
      const isRequest = HttpRequest9.isInstance(request);
      if (isRequest) {
        request.headers[INVOCATION_ID_HEADER] = v4();
      }
      while (true) {
        try {
          if (isRequest) {
            request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
          }
          const { response, output } = yield next(args);
          retryStrategy.recordSuccess(retryToken);
          output.$metadata.attempts = attempts + 1;
          output.$metadata.totalRetryDelay = totalRetryDelay;
          return { response, output };
        } catch (e2) {
          const retryErrorInfo = getRetryErrorInfo(e2, options.logger);
          lastError = asSdkError(e2);
          if (isRequest && isStreamingPayload(request)) {
            (_b2 = context.logger instanceof NoOpLogger ? console : context.logger) == null ? void 0 : _b2.warn("An error was encountered in a non-retryable streaming request.");
            throw lastError;
          }
          try {
            retryToken = yield retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
          } catch (refreshError) {
            if (typeof refreshError.$backoff === "number") {
              yield cooldown(refreshError.$backoff);
            }
            if (!lastError.$metadata) {
              lastError.$metadata = {};
            }
            lastError.$metadata.attempts = attempts + 1;
            lastError.$metadata.totalRetryDelay = totalRetryDelay;
            throw lastError;
          }
          attempts = retryToken.getRetryCount();
          const delay = retryToken.getRetryDelay();
          totalRetryDelay += delay;
          yield cooldown(delay);
        }
      }
    } else {
      retryStrategy = retryStrategy;
      if (retryStrategy == null ? void 0 : retryStrategy.mode) {
        context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
      }
      return retryStrategy.retry(next, args);
    }
  });
  var cooldown = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
  var getRetryErrorInfo = (error, logger2) => {
    const errorInfo = {
      error,
      errorType: getRetryErrorType(error)
    };
    const retryAfterHint = parseRetryAfterHeader(error.$response, logger2);
    if (retryAfterHint) {
      errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
  };
  var getRetryErrorType = (error) => {
    if (isThrottlingError(error))
      return "THROTTLING";
    if (isTransientError(error))
      return "TRANSIENT";
    if (isServerError(error))
      return "SERVER_ERROR";
    return "CLIENT_ERROR";
  };
  var retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true
  };
  var getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/core/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest10 = class _HttpRequest {
    constructor(options) {
      __publicField(this, "method");
      __publicField(this, "protocol");
      __publicField(this, "hostname");
      __publicField(this, "port");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "headers");
      __publicField(this, "username");
      __publicField(this, "password");
      __publicField(this, "fragment");
      __publicField(this, "body");
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest(__spreadProps(__spreadValues({}, request), {
        headers: __spreadValues({}, request.headers)
      }));
      if (cloned.query) {
        cloned.query = cloneQuery10(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery10(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return __spreadProps(__spreadValues({}, carry), {
        [paramName]: Array.isArray(param) ? [...param] : param
      });
    }, {});
  }

  // node_modules/@aws-sdk/core/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse4 = class {
    constructor(options) {
      __publicField(this, "statusCode");
      __publicField(this, "reason");
      __publicField(this, "headers");
      __publicField(this, "body");
      this.statusCode = options.statusCode;
      this.reason = options.reason;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
  var getDateHeader = (response) => {
    var _a3, _b2, _c2;
    return HttpResponse4.isInstance(response) ? (_c2 = (_a3 = response.headers) == null ? void 0 : _a3.date) != null ? _c2 : (_b2 = response.headers) == null ? void 0 : _b2.Date : void 0;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
  var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
  var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
  var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
      return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
  var throwSigningPropertyError = (name, property) => {
    if (!property) {
      throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
  };
  var validateSigningProperties = (signingProperties) => __async(null, null, function* () {
    var _a3, _b2, _c2;
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = (_c2 = (_b2 = (_a3 = context.endpointV2) == null ? void 0 : _a3.properties) == null ? void 0 : _b2.authSchemes) == null ? void 0 : _c2[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = yield signerFunction(authScheme);
    const signingRegion = signingProperties == null ? void 0 : signingProperties.signingRegion;
    const signingRegionSet = signingProperties == null ? void 0 : signingProperties.signingRegionSet;
    const signingName = signingProperties == null ? void 0 : signingProperties.signingName;
    return {
      config,
      signer,
      signingRegion,
      signingRegionSet,
      signingName
    };
  });
  var AwsSdkSigV4Signer = class {
    sign(httpRequest, identity, signingProperties) {
      return __async(this, null, function* () {
        var _a3, _b2, _c2, _d2;
        if (!HttpRequest10.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = yield validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if ((_b2 = (_a3 = handlerExecutionContext == null ? void 0 : handlerExecutionContext.authSchemes) == null ? void 0 : _a3.length) != null ? _b2 : 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if ((first == null ? void 0 : first.name) === "sigv4a" && (second == null ? void 0 : second.name) === "sigv4") {
            signingRegion = (_c2 = second == null ? void 0 : second.signingRegion) != null ? _c2 : signingRegion;
            signingName = (_d2 = second == null ? void 0 : second.signingName) != null ? _d2 : signingName;
          }
        }
        const signedRequest = yield signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      });
    }
    errorHandler(signingProperties) {
      return (error) => {
        var _a3;
        const serverTime = (_a3 = error.ServerTime) != null ? _a3 : getDateHeader(error.$response);
        if (serverTime) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          const initialSystemClockOffset = config.systemClockOffset;
          config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
          const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
          if (clockSkewCorrected && error.$metadata) {
            error.$metadata.clockSkewCorrected = true;
          }
        }
        throw error;
      };
    }
    successHandler(httpResponse, signingProperties) {
      const dateHeader = getDateHeader(httpResponse);
      if (dateHeader) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
      }
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
  var AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
    sign(httpRequest, identity, signingProperties) {
      return __async(this, null, function* () {
        var _a3, _b2;
        if (!HttpRequest10.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = yield validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = yield (_a3 = config.sigv4aSigningRegionSet) == null ? void 0 : _a3.call(config);
        const multiRegionOverride = ((_b2 = configResolvedSigningRegionSet != null ? configResolvedSigningRegionSet : signingRegionSet) != null ? _b2 : [signingRegion]).join(",");
        const signedRequest = yield signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName
        });
        return signedRequest;
      });
    }
  };

  // node_modules/@smithy/property-provider/dist-es/memoize.js
  var memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = () => __async(null, null, function* () {
      if (!pending) {
        pending = provider();
      }
      try {
        resolved = yield pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = void 0;
      }
      return resolved;
    });
    if (isExpired === void 0) {
      return (options) => __async(null, null, function* () {
        if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
          resolved = yield coalesceProvider();
        }
        return resolved;
      });
    }
    return (options) => __async(null, null, function* () {
      if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
        resolved = yield coalesceProvider();
      }
      if (isConstant) {
        return resolved;
      }
      if (requiresRefresh && !requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        yield coalesceProvider();
        return resolved;
      }
      return resolved;
    });
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
  var resolveAwsSdkSigV4AConfig = (config) => {
    config.sigv4aSigningRegionSet = normalizeProvider2(config.sigv4aSigningRegionSet);
    return config;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
  var resolveAwsSdkSigV4Config = (config) => {
    let inputCredentials = config.credentials;
    let isUserSupplied = !!config.credentials;
    let resolvedCredentials = void 0;
    Object.defineProperty(config, "credentials", {
      set(credentials) {
        if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
          isUserSupplied = true;
        }
        inputCredentials = credentials;
        const memoizedProvider = normalizeCredentialProvider(config, {
          credentials: inputCredentials,
          credentialDefaultProvider: config.credentialDefaultProvider
        });
        const boundProvider = bindCallerConfig(config, memoizedProvider);
        if (isUserSupplied && !boundProvider.attributed) {
          const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
          resolvedCredentials = (options) => __async(null, null, function* () {
            const creds = yield boundProvider(options);
            const attributedCreds = creds;
            if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
              return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
            }
            return attributedCreds;
          });
          resolvedCredentials.memoized = boundProvider.memoized;
          resolvedCredentials.configBound = boundProvider.configBound;
          resolvedCredentials.attributed = true;
        } else {
          resolvedCredentials = boundProvider;
        }
      },
      get() {
        return resolvedCredentials;
      },
      enumerable: true,
      configurable: true
    });
    config.credentials = inputCredentials;
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
    let signer;
    if (config.signer) {
      signer = normalizeProvider2(config.signer);
    } else if (config.regionInfoProvider) {
      signer = () => normalizeProvider2(config.region)().then((region) => __async(null, null, function* () {
        return [
          (yield config.regionInfoProvider(region, {
            useFipsEndpoint: yield config.useFipsEndpoint(),
            useDualstackEndpoint: yield config.useDualstackEndpoint()
          })) || {},
          region
        ];
      })).then(([regionInfo, region]) => {
        const { signingRegion, signingService } = regionInfo;
        config.signingRegion = config.signingRegion || signingRegion || region;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = __spreadProps(__spreadValues({}, config), {
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        });
        const SignerCtor = config.signerConstructor || SignatureV4;
        return new SignerCtor(params);
      });
    } else {
      signer = (authScheme) => __async(null, null, function* () {
        authScheme = Object.assign({}, {
          name: "sigv4",
          signingName: config.signingName || config.defaultSigningName,
          signingRegion: yield normalizeProvider2(config.region)(),
          properties: {}
        }, authScheme);
        const signingRegion = authScheme.signingRegion;
        const signingService = authScheme.signingName;
        config.signingRegion = config.signingRegion || signingRegion;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = __spreadProps(__spreadValues({}, config), {
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        });
        const SignerCtor = config.signerConstructor || SignatureV4;
        return new SignerCtor(params);
      });
    }
    const resolvedConfig = Object.assign(config, {
      systemClockOffset,
      signingEscapePath,
      signer
    });
    return resolvedConfig;
  };
  function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
    let credentialsProvider;
    if (credentials) {
      if (!(credentials == null ? void 0 : credentials.memoized)) {
        credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
      } else {
        credentialsProvider = credentials;
      }
    } else {
      if (credentialDefaultProvider) {
        credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config, {
          parentClientConfig: config
        })));
      } else {
        credentialsProvider = () => __async(null, null, function* () {
          throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
        });
      }
    }
    credentialsProvider.memoized = true;
    return credentialsProvider;
  }
  function bindCallerConfig(config, credentialsProvider) {
    if (credentialsProvider.configBound) {
      return credentialsProvider;
    }
    const fn = (options) => __async(null, null, function* () {
      return credentialsProvider(__spreadProps(__spreadValues({}, options), { callerClientConfig: config }));
    });
    fn.memoized = credentialsProvider.memoized;
    fn.configBound = true;
    return fn;
  }

  // node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
  var signatureV4CrtContainer = {
    CrtSignerV4: null
  };

  // node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
  var SignatureV4MultiRegion = class {
    constructor(options) {
      __publicField(this, "sigv4aSigner");
      __publicField(this, "sigv4Signer");
      __publicField(this, "signerOptions");
      this.sigv4Signer = new SignatureV4S3Express(options);
      this.signerOptions = options;
    }
    static sigv4aDependency() {
      if (typeof signatureV4CrtContainer.CrtSignerV4 === "function") {
        return "crt";
      } else if (typeof signatureV4aContainer.SignatureV4a === "function") {
        return "js";
      }
      return "none";
    }
    sign(_0) {
      return __async(this, arguments, function* (requestToSign, options = {}) {
        if (options.signingRegion === "*") {
          return this.getSigv4aSigner().sign(requestToSign, options);
        }
        return this.sigv4Signer.sign(requestToSign, options);
      });
    }
    signWithCredentials(_0, _1) {
      return __async(this, arguments, function* (requestToSign, credentials, options = {}) {
        if (options.signingRegion === "*") {
          const signer = this.getSigv4aSigner();
          const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
          if (CrtSignerV4 && signer instanceof CrtSignerV4) {
            return signer.signWithCredentials(requestToSign, credentials, options);
          } else {
            throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
          }
        }
        return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
      });
    }
    presign(_0) {
      return __async(this, arguments, function* (originalRequest, options = {}) {
        if (options.signingRegion === "*") {
          const signer = this.getSigv4aSigner();
          const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
          if (CrtSignerV4 && signer instanceof CrtSignerV4) {
            return signer.presign(originalRequest, options);
          } else {
            throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
          }
        }
        return this.sigv4Signer.presign(originalRequest, options);
      });
    }
    presignWithCredentials(_0, _1) {
      return __async(this, arguments, function* (originalRequest, credentials, options = {}) {
        if (options.signingRegion === "*") {
          throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        }
        return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
      });
    }
    getSigv4aSigner() {
      if (!this.sigv4aSigner) {
        const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        const JsSigV4aSigner = signatureV4aContainer.SignatureV4a;
        if (this.signerOptions.runtime === "node") {
          if (!CrtSignerV4 && !JsSigV4aSigner) {
            throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
          }
          if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
            this.sigv4aSigner = new CrtSignerV4(__spreadProps(__spreadValues({}, this.signerOptions), {
              signingAlgorithm: 1
            }));
          } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
            this.sigv4aSigner = new JsSigV4aSigner(__spreadValues({}, this.signerOptions));
          } else {
            throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
          }
        } else {
          if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
            throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
          }
          this.sigv4aSigner = new JsSigV4aSigner(__spreadValues({}, this.signerOptions));
        }
      }
      return this.sigv4aSigner;
    }
  };

  // node_modules/@aws-sdk/client-s3/dist-es/endpoint/bdd.js
  var aw = "ref";
  var ax = "argv";
  var ay = "backend";
  var az = "authSchemes";
  var aA = "disableDoubleEncoding";
  var aB = "signingName";
  var aC = "signingRegion";
  var aD = "signingRegionSet";
  var a = -1;
  var b = true;
  var c = false;
  var d = "isSet";
  var e = "booleanEquals";
  var f = "stringEquals";
  var g = "coalesce";
  var h = "substring";
  var i = "";
  var j = "aws.partition";
  var k = "partitionResult";
  var l = "accessPointSuffix";
  var m = "regionPrefix";
  var n = (n2) => "outpostId_ssa_" + n2 + i;
  var o = "hardwareType";
  var p = "ite";
  var q = "isValidHostLabel";
  var s = "sigv4";
  var t = "aws.isVirtualHostableS3Bucket";
  var u = "url";
  var v = "getAttr";
  var w = "bucketArn";
  var x = "--";
  var y = "arnType";
  var z = "accesspoint";
  var A = (n2) => "accessPointName_ssa_" + n2 + i;
  var B = "s3-object-lambda";
  var C = "s3-outposts";
  var D = "bucketPartition";
  var E = "us-east-1";
  var F = "outpostType";
  var G = "name";
  var H = "s3";
  var I = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
  var J = "{url#scheme}://{url#authority}{url#path}";
  var K = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}";
  var L = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}";
  var M = "https://{Bucket}.s3.{partitionResult#dnsSuffix}";
  var N = (n2) => "{url#scheme}://{accessPointName_ssa_" + n2 + "}-{bucketArn#accountId}.{url#authority}{url#path}";
  var O = (n2) => "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName_ssa_" + n2 + "}`";
  var P = "sigv4a";
  var Q = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}";
  var R = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}";
  var S = "https://s3.{partitionResult#dnsSuffix}";
  var T = { [aw]: "UseFIPS" };
  var U = { [aw]: "UseDualStack" };
  var V = { [aw]: "Bucket" };
  var W = { "fn": v, [ax]: [{ [aw]: k }, G] };
  var X = { [aw]: u };
  var Y = { [aw]: "Region" };
  var Z = { [aw]: w };
  var aa = { [aw]: y };
  var ab = { [aw]: "accessPointName_ssa_1" };
  var ac = { "fn": v, [ax]: [Z, "region"] };
  var ad = { [aw]: o };
  var ae = { "fn": v, [ax]: [Z, "service"] };
  var af = { "fn": v, [ax]: [Z, "accountId"] };
  var ag = { [ay]: "S3Express", [az]: [{ [aA]: true, [G]: "{_s3e_auth}", [aB]: "s3express", [aC]: "{Region}" }] };
  var ah = { [ay]: "S3Express", [az]: [{ [aA]: true, [G]: s, [aB]: "s3express", [aC]: "{Region}" }] };
  var ai = { [az]: [{ [aA]: true, [G]: P, [aB]: C, [aD]: ["*"] }, { [aA]: true, [G]: s, [aB]: C, [aC]: "{Region}" }] };
  var aj = { [az]: [{ [aA]: true, [G]: s, [aB]: H, [aC]: E }] };
  var ak = { [az]: [{ [aA]: true, [G]: s, [aB]: H, [aC]: "{Region}" }] };
  var al = { [az]: [{ [aA]: true, [G]: s, [aB]: B, [aC]: "{bucketArn#region}" }] };
  var am = { [az]: [{ [aA]: true, [G]: s, [aB]: H, [aC]: "{bucketArn#region}" }] };
  var an = { [az]: [{ [aA]: true, [G]: P, [aB]: C, [aD]: ["*"] }, { [aA]: true, [G]: s, [aB]: C, [aC]: "{bucketArn#region}" }] };
  var ao = { [az]: [{ [aA]: true, [G]: s, [aB]: B, [aC]: "{Region}" }] };
  var ap = [Y];
  var aq = [{ [aw]: "Endpoint" }];
  var as = [V];
  var at = [V, 0, 7, true];
  var au = [Z, "resourceId[1]"];
  var av = ["*"];
  var _data = {
    conditions: [
      [d, ap],
      [e, [{ [aw]: "Accelerate" }, b]],
      [e, [T, b]],
      [e, [U, b]],
      [d, aq],
      [d, as],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 0, 6, b] }, i] }, "--x-s3"]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: at }, i] }, "--xa-s3"]],
      [j, ap, k],
      [h, at, l],
      [f, [{ [aw]: l }, "--op-s3"]],
      [h, [V, 8, 12, b], m],
      [h, [V, 32, 49, b], n(2)],
      [h, [V, 49, 50, b], o],
      [e, [{ [aw]: "ForcePathStyle" }, b]],
      [f, [W, "aws-cn"]],
      [p, [U, ".dualstack", i], "_s3e_ds"],
      [q, [{ [aw]: n(2) }, c]],
      [p, [T, "-fips", i], "_s3e_fips"],
      [p, [{ fn: g, [ax]: [{ [aw]: "DisableS3ExpressSessionAuth" }, c] }, s, "sigv4-s3express"], "_s3e_auth"],
      [t, [V, c]],
      ["parseURL", aq, u],
      [e, [{ fn: g, [ax]: [{ [aw]: "UseS3ExpressControlEndpoint" }, c] }, b]],
      [t, [V, b]],
      [f, [{ fn: v, [ax]: [X, "scheme"] }, "http"]],
      [q, [Y, c]],
      ["aws.parseArn", as, w],
      [v, [{ fn: "split", [ax]: [V, x, 0] }, "[-2]"], "s3expressAvailabilityZoneId"],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 0, 4, c] }, i] }, "arn:"]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 16, 18, b] }, i] }, x]],
      [e, [{ fn: v, [ax]: [X, "isIp"] }, b]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 21, 23, b] }, i] }, x]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 27, 29, b] }, i] }, x]],
      [f, [{ [aw]: m }, "beta"]],
      ["uriEncode", as, "uri_encoded_bucket"],
      [q, [Y, b]],
      [e, [{ fn: g, [ax]: [{ [aw]: "UseObjectLambdaEndpoint" }, c] }, b]],
      [v, [Z, "resourceId[0]"], y],
      [f, [aa, i]],
      [f, [aa, z]],
      [v, au, A(1)],
      [f, [ab, i]],
      [f, [ac, i]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 14, 16, b] }, i] }, x]],
      [f, [ad, "e"]],
      [f, [ad, "o"]],
      [f, [Y, "aws-global"]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 19, 21, b] }, i] }, x]],
      [f, [ae, B]],
      [e, [{ fn: g, [ax]: [{ [aw]: "DisableAccessPoints" }, c] }, b]],
      [f, [ae, C]],
      [j, [ac], D],
      [q, [ab, b]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 26, 28, b] }, i] }, x]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 15, 17, b] }, i] }, x]],
      [v, [Z, "resourceId[4]"]],
      [f, [{ fn: g, [ax]: [{ fn: h, [ax]: [V, 20, 22, b] }, i] }, x]],
      [e, [{ [aw]: "UseGlobalEndpoint" }, b]],
      [f, [Y, E]],
      [v, au, n(1)],
      [e, [{ fn: g, [ax]: [{ [aw]: "UseArnRegion" }, b] }, b]],
      [q, [{ [aw]: n(1) }, c]],
      [v, [Z, "resourceId[2]"], F],
      [f, [Y, ac]],
      [f, [{ fn: v, [ax]: [{ [aw]: D }, G] }, W]],
      [e, [{ [aw]: "DisableMultiRegionAccessPoints" }, b]],
      [q, [ac, b]],
      [f, [{ fn: v, [ax]: [Z, "partition"] }, W]],
      [f, [af, i]],
      [f, [ae, H]],
      [q, [af, c]],
      [v, [Z, "resourceId[3]"], A(2)],
      [q, [ab, c]],
      [f, [{ [aw]: F }, z]],
      [q, [{ [aw]: A(2) }, c]]
    ],
    results: [
      [a],
      [a, "Accelerate cannot be used with FIPS"],
      [a, "Cannot set dual-stack in combination with a custom endpoint."],
      [a, "A custom endpoint cannot be combined with FIPS"],
      [a, "A custom endpoint cannot be combined with S3 Accelerate"],
      [a, "Partition does not support FIPS"],
      [a, "S3Express does not support S3 Accelerate."],
      ["{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", ag],
      [I, ag],
      [a, "S3Express bucket name is not a valid virtual hostable name."],
      ["https://s3express-control{_s3e_fips}{_s3e_ds}.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", ah],
      ["https://{Bucket}.s3express{_s3e_fips}-{s3expressAvailabilityZoneId}{_s3e_ds}.{Region}.{partitionResult#dnsSuffix}", ag],
      [a, "Unrecognized S3Express bucket name format."],
      [J, ag],
      ["https://s3express-control{_s3e_fips}{_s3e_ds}.{Region}.{partitionResult#dnsSuffix}", ah],
      [a, "Expected a endpoint to be specified but no endpoint was found"],
      ["https://{Bucket}.ec2.{url#authority}", ai],
      ["https://{Bucket}.ec2.s3-outposts.{Region}.{partitionResult#dnsSuffix}", ai],
      ["https://{Bucket}.op-{outpostId_ssa_2}.{url#authority}", ai],
      ["https://{Bucket}.op-{outpostId_ssa_2}.s3-outposts.{Region}.{partitionResult#dnsSuffix}", ai],
      [a, 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"'],
      [a, "Invalid Outposts Bucket alias - it must be a valid bucket name."],
      [a, "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`."],
      [a, "Custom endpoint `{Endpoint}` was not a valid URI"],
      [a, "S3 Accelerate cannot be used in this region"],
      ["https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", ak],
      ["https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", ak],
      ["https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", ak],
      ["https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", ak],
      [K, aj],
      [I, aj],
      [K, ak],
      [I, ak],
      [L, aj],
      [L, ak],
      [M, aj],
      [M, ak],
      ["https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", ak],
      [a, "Invalid region: region was not a valid DNS name."],
      [a, "S3 Object Lambda does not support Dual-stack"],
      [a, "S3 Object Lambda does not support S3 Accelerate"],
      [a, "Access points are not supported for this operation"],
      [a, "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`"],
      [a, "Invalid ARN: Missing account id"],
      [N(1), al],
      ["https://{accessPointName_ssa_1}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", al],
      ["https://{accessPointName_ssa_1}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", al],
      [a, O(1)],
      [a, "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`"],
      [a, "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)"],
      [a, "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`"],
      [a, "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`."],
      [a, "Invalid ARN: bucket ARN is missing a region"],
      [a, "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided"],
      [a, "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`"],
      [a, "Access Points do not support S3 Accelerate"],
      ["https://{accessPointName_ssa_1}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", am],
      ["https://{accessPointName_ssa_1}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", am],
      ["https://{accessPointName_ssa_1}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", am],
      [N(1), am],
      ["https://{accessPointName_ssa_1}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", am],
      [a, "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}"],
      [a, "S3 MRAP does not support dual-stack"],
      [a, "S3 MRAP does not support FIPS"],
      [a, "S3 MRAP does not support S3 Accelerate"],
      [a, "Invalid configuration: Multi-Region Access Point ARNs are disabled."],
      ["https://{accessPointName_ssa_1}.accesspoint.s3-global.{partitionResult#dnsSuffix}", { [az]: [{ [aA]: b, name: P, [aB]: H, [aD]: av }] }],
      [a, "Client was configured for partition `{partitionResult#name}` but bucket referred to partition `{bucketArn#partition}`"],
      [a, "Invalid Access Point Name"],
      [a, "S3 Outposts does not support Dual-stack"],
      [a, "S3 Outposts does not support FIPS"],
      [a, "S3 Outposts does not support S3 Accelerate"],
      [a, "Invalid Arn: Outpost Access Point ARN contains sub resources"],
      ["https://{accessPointName_ssa_2}-{bucketArn#accountId}.{outpostId_ssa_1}.{url#authority}", an],
      ["https://{accessPointName_ssa_2}-{bucketArn#accountId}.{outpostId_ssa_1}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", an],
      [a, O(2)],
      [a, "Expected an outpost type `accesspoint`, found {outpostType}"],
      [a, "Invalid ARN: expected an access point name"],
      [a, "Invalid ARN: Expected a 4-component resource"],
      [a, "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId_ssa_1}`"],
      [a, "Invalid ARN: The Outpost Id was not set"],
      [a, "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})"],
      [a, "Invalid ARN: No ARN type specified"],
      [a, "Invalid ARN: `{Bucket}` was not a valid ARN"],
      [a, "Path-style addressing cannot be used with ARN buckets"],
      ["https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", aj],
      ["https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", ak],
      ["https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", aj],
      ["https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", ak],
      ["https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", aj],
      ["https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", ak],
      [Q, aj],
      [Q, ak],
      [R, aj],
      [R, ak],
      ["https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", ak],
      [a, "Path-style addressing cannot be used with S3 Accelerate"],
      [J, ao],
      ["https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", ao],
      ["https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", ao],
      ["https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", ak],
      ["https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://s3-fips.{Region}.{partitionResult#dnsSuffix}", ak],
      ["https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", aj],
      ["https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", ak],
      [J, aj],
      [J, ak],
      [S, aj],
      [S, ak],
      ["https://s3.{Region}.{partitionResult#dnsSuffix}", ak],
      [a, "A region must be set when sending requests to S3."]
    ]
  };
  var root = 2;
  var r = 1e8;
  var nodes = new Int32Array([
    -1,
    1,
    -1,
    0,
    3,
    r + 115,
    1,
    424,
    4,
    2,
    272,
    5,
    3,
    233,
    6,
    4,
    85,
    7,
    5,
    15,
    8,
    8,
    9,
    r + 115,
    16,
    10,
    13,
    18,
    11,
    13,
    19,
    12,
    13,
    22,
    r + 14,
    13,
    35,
    14,
    r + 42,
    36,
    r + 103,
    435,
    6,
    271,
    16,
    7,
    270,
    17,
    8,
    19,
    18,
    14,
    501,
    106,
    9,
    20,
    24,
    10,
    21,
    24,
    11,
    22,
    24,
    12,
    23,
    24,
    13,
    547,
    24,
    14,
    77,
    25,
    20,
    73,
    26,
    26,
    27,
    78,
    37,
    28,
    r + 86,
    38,
    r + 86,
    29,
    39,
    47,
    30,
    48,
    r + 58,
    31,
    50,
    32,
    r + 85,
    51,
    33,
    136,
    55,
    r + 76,
    34,
    59,
    35,
    r + 84,
    60,
    39,
    36,
    61,
    37,
    r + 83,
    62,
    38,
    146,
    63,
    41,
    r + 46,
    61,
    40,
    r + 83,
    62,
    41,
    150,
    64,
    42,
    r + 54,
    66,
    43,
    r + 53,
    70,
    44,
    r + 52,
    71,
    45,
    r + 81,
    73,
    46,
    r + 80,
    74,
    r + 78,
    r + 79,
    40,
    48,
    r + 57,
    41,
    r + 57,
    49,
    42,
    185,
    50,
    48,
    62,
    51,
    49,
    r + 45,
    52,
    51,
    53,
    526,
    60,
    56,
    54,
    62,
    r + 55,
    55,
    63,
    57,
    r + 46,
    62,
    r + 55,
    57,
    64,
    58,
    r + 54,
    66,
    59,
    r + 53,
    69,
    60,
    r + 65,
    70,
    61,
    r + 52,
    72,
    r + 64,
    r + 51,
    49,
    r + 45,
    63,
    51,
    64,
    526,
    60,
    67,
    65,
    62,
    r + 55,
    66,
    63,
    68,
    r + 46,
    62,
    r + 55,
    68,
    64,
    69,
    r + 54,
    66,
    70,
    r + 53,
    68,
    r + 47,
    71,
    70,
    72,
    r + 52,
    72,
    r + 50,
    r + 51,
    25,
    74,
    r + 42,
    46,
    r + 39,
    75,
    57,
    76,
    r + 41,
    58,
    r + 40,
    r + 41,
    26,
    r + 88,
    78,
    28,
    r + 87,
    79,
    34,
    82,
    80,
    35,
    81,
    545,
    36,
    r + 103,
    r + 115,
    46,
    r + 97,
    83,
    57,
    84,
    r + 99,
    58,
    r + 98,
    r + 99,
    5,
    101,
    86,
    8,
    87,
    r + 115,
    16,
    88,
    89,
    18,
    91,
    89,
    19,
    90,
    92,
    21,
    97,
    95,
    19,
    93,
    92,
    21,
    98,
    95,
    21,
    97,
    94,
    22,
    r + 14,
    95,
    35,
    96,
    r + 42,
    36,
    r + 103,
    r + 42,
    22,
    r + 13,
    98,
    35,
    99,
    r + 42,
    36,
    r + 101,
    100,
    46,
    r + 110,
    r + 111,
    6,
    214,
    102,
    7,
    208,
    103,
    8,
    119,
    104,
    14,
    118,
    105,
    21,
    106,
    r + 23,
    26,
    107,
    502,
    37,
    108,
    r + 86,
    38,
    r + 86,
    109,
    39,
    112,
    110,
    48,
    r + 58,
    111,
    50,
    136,
    r + 85,
    40,
    113,
    r + 57,
    41,
    r + 57,
    114,
    42,
    115,
    500,
    48,
    r + 56,
    116,
    52,
    117,
    r + 72,
    65,
    r + 69,
    r + 72,
    21,
    501,
    r + 23,
    9,
    120,
    124,
    10,
    121,
    124,
    11,
    122,
    124,
    12,
    123,
    124,
    13,
    202,
    124,
    14,
    195,
    125,
    20,
    190,
    126,
    21,
    127,
    r + 23,
    23,
    128,
    129,
    24,
    189,
    129,
    26,
    130,
    197,
    37,
    131,
    r + 86,
    38,
    r + 86,
    132,
    39,
    159,
    133,
    48,
    r + 58,
    134,
    50,
    135,
    r + 85,
    51,
    141,
    136,
    55,
    r + 76,
    137,
    59,
    138,
    r + 84,
    60,
    r + 83,
    139,
    61,
    140,
    r + 83,
    63,
    r + 83,
    r + 46,
    55,
    r + 76,
    142,
    59,
    143,
    r + 84,
    60,
    148,
    144,
    61,
    145,
    r + 83,
    62,
    147,
    146,
    63,
    150,
    r + 46,
    63,
    153,
    r + 46,
    61,
    149,
    r + 83,
    62,
    153,
    150,
    64,
    151,
    r + 54,
    66,
    152,
    r + 53,
    70,
    r + 82,
    r + 52,
    64,
    154,
    r + 54,
    66,
    155,
    r + 53,
    70,
    156,
    r + 52,
    71,
    157,
    r + 81,
    73,
    158,
    r + 80,
    74,
    r + 77,
    r + 79,
    40,
    160,
    r + 57,
    41,
    r + 57,
    161,
    42,
    185,
    162,
    48,
    174,
    163,
    49,
    r + 45,
    164,
    51,
    165,
    526,
    60,
    168,
    166,
    62,
    r + 55,
    167,
    63,
    169,
    r + 46,
    62,
    r + 55,
    169,
    64,
    170,
    r + 54,
    66,
    171,
    r + 53,
    69,
    172,
    r + 65,
    70,
    173,
    r + 52,
    72,
    r + 63,
    r + 51,
    49,
    r + 45,
    175,
    51,
    176,
    526,
    60,
    179,
    177,
    62,
    r + 55,
    178,
    63,
    180,
    r + 46,
    62,
    r + 55,
    180,
    64,
    181,
    r + 54,
    66,
    182,
    r + 53,
    68,
    r + 47,
    183,
    70,
    184,
    r + 52,
    72,
    r + 48,
    r + 51,
    48,
    r + 56,
    186,
    52,
    187,
    r + 72,
    65,
    r + 69,
    188,
    67,
    r + 70,
    r + 71,
    25,
    r + 36,
    r + 42,
    21,
    191,
    r + 23,
    25,
    192,
    r + 42,
    30,
    194,
    193,
    46,
    r + 34,
    r + 36,
    46,
    r + 33,
    r + 35,
    21,
    196,
    r + 23,
    26,
    r + 88,
    197,
    28,
    r + 87,
    198,
    34,
    201,
    199,
    35,
    200,
    545,
    36,
    r + 101,
    r + 115,
    46,
    r + 95,
    r + 96,
    17,
    203,
    r + 22,
    20,
    204,
    r + 21,
    21,
    205,
    550,
    33,
    206,
    550,
    44,
    r + 16,
    207,
    45,
    r + 18,
    r + 20,
    8,
    209,
    215,
    16,
    210,
    220,
    18,
    211,
    220,
    19,
    212,
    224,
    20,
    213,
    227,
    21,
    231,
    401,
    8,
    218,
    215,
    19,
    216,
    r + 9,
    20,
    217,
    227,
    21,
    231,
    r + 9,
    16,
    219,
    220,
    18,
    223,
    220,
    19,
    221,
    224,
    20,
    222,
    227,
    21,
    231,
    r + 12,
    19,
    226,
    224,
    20,
    225,
    r + 9,
    21,
    r + 9,
    r + 12,
    20,
    230,
    227,
    21,
    228,
    r + 9,
    30,
    229,
    r + 9,
    34,
    r + 7,
    r + 9,
    21,
    231,
    415,
    30,
    232,
    r + 8,
    34,
    r + 7,
    r + 8,
    4,
    r + 2,
    234,
    5,
    235,
    480,
    6,
    271,
    236,
    7,
    270,
    237,
    8,
    238,
    491,
    9,
    239,
    243,
    10,
    240,
    243,
    11,
    241,
    243,
    12,
    242,
    243,
    13,
    547,
    243,
    14,
    266,
    244,
    20,
    264,
    245,
    26,
    246,
    267,
    37,
    247,
    r + 86,
    38,
    r + 86,
    248,
    39,
    249,
    518,
    40,
    250,
    r + 57,
    41,
    r + 57,
    251,
    42,
    538,
    252,
    48,
    r + 43,
    253,
    49,
    r + 45,
    254,
    51,
    255,
    526,
    60,
    258,
    256,
    62,
    r + 55,
    257,
    63,
    259,
    r + 46,
    62,
    r + 55,
    259,
    64,
    260,
    r + 54,
    66,
    261,
    r + 53,
    69,
    262,
    r + 65,
    70,
    263,
    r + 52,
    72,
    r + 62,
    r + 51,
    25,
    265,
    r + 42,
    46,
    r + 31,
    r + 32,
    26,
    r + 88,
    267,
    28,
    r + 87,
    268,
    34,
    269,
    544,
    46,
    r + 93,
    r + 94,
    8,
    397,
    r + 9,
    8,
    407,
    r + 9,
    3,
    346,
    273,
    4,
    r + 3,
    274,
    5,
    284,
    275,
    8,
    276,
    r + 115,
    15,
    r + 5,
    277,
    16,
    278,
    281,
    18,
    279,
    281,
    19,
    280,
    281,
    22,
    r + 14,
    281,
    35,
    282,
    r + 42,
    36,
    r + 102,
    283,
    46,
    r + 106,
    r + 107,
    6,
    405,
    285,
    7,
    395,
    286,
    8,
    295,
    287,
    14,
    501,
    288,
    26,
    289,
    502,
    37,
    290,
    r + 86,
    38,
    r + 86,
    291,
    39,
    292,
    307,
    40,
    293,
    r + 57,
    41,
    r + 57,
    294,
    42,
    335,
    500,
    9,
    296,
    300,
    10,
    297,
    300,
    11,
    298,
    300,
    12,
    299,
    300,
    13,
    394,
    300,
    14,
    339,
    301,
    15,
    r + 5,
    302,
    20,
    337,
    303,
    26,
    304,
    341,
    37,
    305,
    r + 86,
    38,
    r + 86,
    306,
    39,
    309,
    307,
    48,
    r + 58,
    308,
    50,
    r + 74,
    r + 85,
    40,
    310,
    r + 57,
    41,
    r + 57,
    311,
    42,
    335,
    312,
    48,
    324,
    313,
    49,
    r + 45,
    314,
    51,
    315,
    526,
    60,
    318,
    316,
    62,
    r + 55,
    317,
    63,
    319,
    r + 46,
    62,
    r + 55,
    319,
    64,
    320,
    r + 54,
    66,
    321,
    r + 53,
    69,
    322,
    r + 65,
    70,
    323,
    r + 52,
    72,
    r + 61,
    r + 51,
    49,
    r + 45,
    325,
    51,
    326,
    526,
    60,
    329,
    327,
    62,
    r + 55,
    328,
    63,
    330,
    r + 46,
    62,
    r + 55,
    330,
    64,
    331,
    r + 54,
    66,
    332,
    r + 53,
    68,
    r + 47,
    333,
    70,
    334,
    r + 52,
    72,
    r + 49,
    r + 51,
    48,
    r + 56,
    336,
    52,
    r + 67,
    r + 72,
    25,
    338,
    r + 42,
    46,
    r + 27,
    r + 28,
    15,
    r + 5,
    340,
    26,
    r + 88,
    341,
    28,
    r + 87,
    342,
    34,
    345,
    343,
    35,
    344,
    545,
    36,
    r + 102,
    r + 115,
    46,
    r + 91,
    r + 92,
    4,
    r + 2,
    347,
    5,
    357,
    348,
    8,
    349,
    r + 115,
    15,
    r + 5,
    350,
    16,
    351,
    354,
    18,
    352,
    354,
    19,
    353,
    354,
    22,
    r + 14,
    354,
    35,
    355,
    r + 42,
    36,
    r + 43,
    356,
    46,
    r + 104,
    r + 105,
    6,
    405,
    358,
    7,
    395,
    359,
    8,
    360,
    491,
    9,
    361,
    365,
    10,
    362,
    365,
    11,
    363,
    365,
    12,
    364,
    365,
    13,
    394,
    365,
    14,
    389,
    366,
    15,
    r + 5,
    367,
    20,
    387,
    368,
    26,
    369,
    391,
    37,
    370,
    r + 86,
    38,
    r + 86,
    371,
    39,
    372,
    518,
    40,
    373,
    r + 57,
    41,
    r + 57,
    374,
    42,
    538,
    375,
    48,
    r + 43,
    376,
    49,
    r + 45,
    377,
    51,
    378,
    526,
    60,
    381,
    379,
    62,
    r + 55,
    380,
    63,
    382,
    r + 46,
    62,
    r + 55,
    382,
    64,
    383,
    r + 54,
    66,
    384,
    r + 53,
    69,
    385,
    r + 65,
    70,
    386,
    r + 52,
    72,
    r + 60,
    r + 51,
    25,
    388,
    r + 42,
    46,
    r + 25,
    r + 26,
    15,
    r + 5,
    390,
    26,
    r + 88,
    391,
    28,
    r + 87,
    392,
    34,
    393,
    544,
    46,
    r + 89,
    r + 90,
    15,
    r + 5,
    547,
    8,
    396,
    r + 9,
    15,
    r + 5,
    397,
    16,
    398,
    410,
    18,
    399,
    410,
    19,
    400,
    410,
    20,
    401,
    r + 9,
    27,
    402,
    r + 12,
    29,
    r + 11,
    403,
    31,
    r + 11,
    404,
    32,
    r + 11,
    422,
    8,
    406,
    r + 9,
    15,
    r + 5,
    407,
    16,
    408,
    410,
    18,
    409,
    410,
    19,
    411,
    410,
    20,
    r + 12,
    r + 9,
    20,
    414,
    412,
    22,
    413,
    r + 9,
    34,
    r + 10,
    r + 9,
    22,
    416,
    415,
    27,
    419,
    r + 12,
    27,
    418,
    417,
    34,
    r + 10,
    r + 12,
    34,
    r + 10,
    419,
    43,
    r + 11,
    420,
    47,
    r + 11,
    421,
    53,
    r + 11,
    422,
    54,
    r + 11,
    423,
    56,
    r + 11,
    r + 12,
    2,
    r + 1,
    425,
    3,
    478,
    426,
    4,
    r + 4,
    427,
    5,
    438,
    428,
    8,
    429,
    r + 115,
    16,
    430,
    433,
    18,
    431,
    433,
    19,
    432,
    433,
    22,
    r + 14,
    433,
    35,
    434,
    r + 42,
    36,
    r + 44,
    435,
    46,
    r + 112,
    436,
    57,
    437,
    r + 114,
    58,
    r + 113,
    r + 114,
    6,
    r + 6,
    439,
    7,
    r + 6,
    440,
    8,
    450,
    441,
    14,
    501,
    442,
    26,
    443,
    502,
    37,
    444,
    r + 86,
    38,
    r + 86,
    445,
    39,
    446,
    465,
    40,
    447,
    r + 57,
    41,
    r + 57,
    448,
    42,
    471,
    449,
    48,
    r + 44,
    500,
    9,
    451,
    455,
    10,
    452,
    455,
    11,
    453,
    455,
    12,
    454,
    455,
    13,
    547,
    455,
    14,
    473,
    456,
    15,
    460,
    457,
    20,
    458,
    461,
    25,
    459,
    r + 42,
    46,
    r + 37,
    r + 38,
    20,
    540,
    461,
    26,
    462,
    474,
    37,
    463,
    r + 86,
    38,
    r + 86,
    464,
    39,
    467,
    465,
    48,
    r + 58,
    466,
    50,
    r + 75,
    r + 85,
    40,
    468,
    r + 57,
    41,
    r + 57,
    469,
    42,
    471,
    470,
    48,
    r + 44,
    524,
    48,
    r + 44,
    472,
    52,
    r + 68,
    r + 72,
    26,
    r + 88,
    474,
    28,
    r + 87,
    475,
    34,
    r + 100,
    476,
    35,
    477,
    545,
    36,
    r + 44,
    r + 115,
    4,
    r + 2,
    479,
    5,
    488,
    480,
    8,
    481,
    r + 115,
    16,
    482,
    485,
    18,
    483,
    485,
    19,
    484,
    485,
    22,
    r + 14,
    485,
    35,
    486,
    r + 42,
    36,
    r + 43,
    487,
    46,
    r + 108,
    r + 109,
    6,
    r + 6,
    489,
    7,
    r + 6,
    490,
    8,
    503,
    491,
    14,
    501,
    492,
    26,
    493,
    502,
    37,
    494,
    r + 86,
    38,
    r + 86,
    495,
    39,
    496,
    518,
    40,
    497,
    r + 57,
    41,
    r + 57,
    498,
    42,
    538,
    499,
    48,
    r + 43,
    500,
    49,
    r + 45,
    526,
    26,
    r + 88,
    502,
    28,
    r + 87,
    r + 115,
    9,
    504,
    508,
    10,
    505,
    508,
    11,
    506,
    508,
    12,
    507,
    508,
    13,
    547,
    508,
    14,
    541,
    509,
    15,
    513,
    510,
    20,
    511,
    514,
    25,
    512,
    r + 42,
    46,
    r + 29,
    r + 30,
    20,
    540,
    514,
    26,
    515,
    542,
    37,
    516,
    r + 86,
    38,
    r + 86,
    517,
    39,
    520,
    518,
    48,
    r + 58,
    519,
    50,
    r + 73,
    r + 85,
    40,
    521,
    r + 57,
    41,
    r + 57,
    522,
    42,
    538,
    523,
    48,
    r + 43,
    524,
    49,
    r + 45,
    525,
    51,
    529,
    526,
    60,
    r + 55,
    527,
    62,
    r + 55,
    528,
    63,
    r + 55,
    r + 46,
    60,
    532,
    530,
    62,
    r + 55,
    531,
    63,
    533,
    r + 46,
    62,
    r + 55,
    533,
    64,
    534,
    r + 54,
    66,
    535,
    r + 53,
    69,
    536,
    r + 65,
    70,
    537,
    r + 52,
    72,
    r + 59,
    r + 51,
    48,
    r + 43,
    539,
    52,
    r + 66,
    r + 72,
    25,
    r + 24,
    r + 42,
    26,
    r + 88,
    542,
    28,
    r + 87,
    543,
    34,
    r + 100,
    544,
    35,
    546,
    545,
    36,
    r + 42,
    r + 115,
    36,
    r + 43,
    r + 115,
    17,
    548,
    r + 22,
    20,
    549,
    r + 21,
    33,
    552,
    550,
    44,
    r + 17,
    551,
    45,
    r + 19,
    r + 20,
    44,
    r + 15,
    553,
    45,
    r + 15,
    r + 20
  ]);
  var bdd = BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);

  // node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
  var cache = new EndpointCache({
    size: 50,
    params: [
      "Accelerate",
      "Bucket",
      "DisableAccessPoints",
      "DisableMultiRegionAccessPoints",
      "DisableS3ExpressSessionAuth",
      "Endpoint",
      "ForcePathStyle",
      "Region",
      "UseArnRegion",
      "UseDualStack",
      "UseFIPS",
      "UseGlobalEndpoint",
      "UseObjectLambdaEndpoint",
      "UseS3ExpressControlEndpoint"
    ]
  });
  var defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => decideEndpoint(bdd, {
      endpointParams,
      logger: context.logger
    }));
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
  var createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => (config, context, input) => __async(null, null, function* () {
    var _a3, _b2, _c2;
    if (!input) {
      throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
    }
    const defaultParameters = yield defaultHttpAuthSchemeParametersProvider(config, context, input);
    const instructionsFn = (_c2 = (_b2 = (_a3 = getSmithyContext(context)) == null ? void 0 : _a3.commandInstance) == null ? void 0 : _b2.constructor) == null ? void 0 : _c2.getEndpointParameterInstructions;
    if (!instructionsFn) {
      throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
    }
    const endpointParameters = yield resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
    return Object.assign(defaultParameters, endpointParameters);
  });
  var _defaultS3HttpAuthSchemeParametersProvider = (config, context, input) => __async(null, null, function* () {
    return {
      operation: getSmithyContext(context).operation,
      region: (yield normalizeProvider(config.region)()) || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  });
  var defaultS3HttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultS3HttpAuthSchemeParametersProvider);
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "s3",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  function createAwsAuthSigv4aHttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4a",
      signingProperties: {
        name: "s3",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  var createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver2, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
    const endpointRuleSetHttpAuthSchemeProvider = (authParameters) => {
      var _a3;
      const endpoint = defaultEndpointResolver2(authParameters);
      const authSchemes = (_a3 = endpoint.properties) == null ? void 0 : _a3.authSchemes;
      if (!authSchemes) {
        return defaultHttpAuthSchemeResolver(authParameters);
      }
      const options = [];
      for (const scheme of authSchemes) {
        const _b2 = scheme, { name: resolvedName, properties = {} } = _b2, rest = __objRest(_b2, ["name", "properties"]);
        const name = resolvedName.toLowerCase();
        if (resolvedName !== name) {
          console.warn(`HttpAuthScheme has been normalized with lowercasing: '${resolvedName}' to '${name}'`);
        }
        let schemeId;
        if (name === "sigv4a") {
          schemeId = "aws.auth#sigv4a";
          const sigv4Present = authSchemes.find((s2) => {
            const name2 = s2.name.toLowerCase();
            return name2 !== "sigv4a" && name2.startsWith("sigv4");
          });
          if (SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
            continue;
          }
        } else if (name.startsWith("sigv4")) {
          schemeId = "aws.auth#sigv4";
        } else {
          throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${name}'`);
        }
        const createOption = createHttpAuthOptionFunctions[schemeId];
        if (!createOption) {
          throw new Error(`Could not find HttpAuthOption create function for '${schemeId}'`);
        }
        const option = createOption(authParameters);
        option.schemeId = schemeId;
        option.signingProperties = __spreadValues(__spreadValues(__spreadValues({}, option.signingProperties || {}), rest), properties);
        options.push(option);
      }
      return options;
    };
    return endpointRuleSetHttpAuthSchemeProvider;
  };
  var _defaultS3HttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
      }
    }
    return options;
  };
  var defaultS3HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultS3HttpAuthSchemeProvider, {
    "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
    "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption
  });
  var resolveHttpAuthSchemeConfig = (config) => {
    var _a3;
    const config_0 = resolveAwsSdkSigV4Config(config);
    const config_1 = resolveAwsSdkSigV4AConfig(config_0);
    return Object.assign(config_1, {
      authSchemePreference: normalizeProvider((_a3 = config.authSchemePreference) != null ? _a3 : [])
    });
  };

  // node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters = (options) => {
    var _a3, _b2, _c2, _d2, _e2, _f, _g;
    return Object.assign(options, {
      useFipsEndpoint: (_a3 = options.useFipsEndpoint) != null ? _a3 : false,
      useDualstackEndpoint: (_b2 = options.useDualstackEndpoint) != null ? _b2 : false,
      forcePathStyle: (_c2 = options.forcePathStyle) != null ? _c2 : false,
      useAccelerateEndpoint: (_d2 = options.useAccelerateEndpoint) != null ? _d2 : false,
      useGlobalEndpoint: (_e2 = options.useGlobalEndpoint) != null ? _e2 : false,
      disableMultiregionAccessPoints: (_f = options.disableMultiregionAccessPoints) != null ? _f : false,
      defaultSigningName: "s3",
      clientContextParams: (_g = options.clientContextParams) != null ? _g : {}
    });
  };
  var commonParams = {
    ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
    UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
    DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
    Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
    DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };

  // node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
  var S3ServiceException = class _S3ServiceException extends ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, _S3ServiceException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-s3/dist-es/models/errors.js
  var NoSuchUpload = class _NoSuchUpload extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "NoSuchUpload",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "NoSuchUpload");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _NoSuchUpload.prototype);
    }
  };
  var AccessDenied = class _AccessDenied extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "AccessDenied",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "AccessDenied");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _AccessDenied.prototype);
    }
  };
  var ObjectNotInActiveTierError = class _ObjectNotInActiveTierError extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "ObjectNotInActiveTierError",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "ObjectNotInActiveTierError");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ObjectNotInActiveTierError.prototype);
    }
  };
  var BucketAlreadyExists = class _BucketAlreadyExists extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "BucketAlreadyExists",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "BucketAlreadyExists");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _BucketAlreadyExists.prototype);
    }
  };
  var BucketAlreadyOwnedByYou = class _BucketAlreadyOwnedByYou extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "BucketAlreadyOwnedByYou",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "BucketAlreadyOwnedByYou");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _BucketAlreadyOwnedByYou.prototype);
    }
  };
  var NoSuchBucket = class _NoSuchBucket extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "NoSuchBucket",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "NoSuchBucket");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _NoSuchBucket.prototype);
    }
  };
  var InvalidObjectState = class _InvalidObjectState extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "InvalidObjectState",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "InvalidObjectState");
      __publicField(this, "$fault", "client");
      __publicField(this, "StorageClass");
      __publicField(this, "AccessTier");
      Object.setPrototypeOf(this, _InvalidObjectState.prototype);
      this.StorageClass = opts.StorageClass;
      this.AccessTier = opts.AccessTier;
    }
  };
  var NoSuchKey = class _NoSuchKey extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "NoSuchKey",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "NoSuchKey");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _NoSuchKey.prototype);
    }
  };
  var NotFound = class _NotFound extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "NotFound",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "NotFound");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _NotFound.prototype);
    }
  };
  var EncryptionTypeMismatch = class _EncryptionTypeMismatch extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "EncryptionTypeMismatch",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "EncryptionTypeMismatch");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _EncryptionTypeMismatch.prototype);
    }
  };
  var InvalidRequest = class _InvalidRequest extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "InvalidRequest",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "InvalidRequest");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidRequest.prototype);
    }
  };
  var InvalidWriteOffset = class _InvalidWriteOffset extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "InvalidWriteOffset",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "InvalidWriteOffset");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidWriteOffset.prototype);
    }
  };
  var TooManyParts = class _TooManyParts extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "TooManyParts",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "TooManyParts");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _TooManyParts.prototype);
    }
  };
  var IdempotencyParameterMismatch = class _IdempotencyParameterMismatch extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "IdempotencyParameterMismatch",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "IdempotencyParameterMismatch");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _IdempotencyParameterMismatch.prototype);
    }
  };
  var ObjectAlreadyInActiveTierError = class _ObjectAlreadyInActiveTierError extends S3ServiceException {
    constructor(opts) {
      super(__spreadValues({
        name: "ObjectAlreadyInActiveTierError",
        $fault: "client"
      }, opts));
      __publicField(this, "name", "ObjectAlreadyInActiveTierError");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ObjectAlreadyInActiveTierError.prototype);
    }
  };

  // node_modules/@aws-sdk/client-s3/dist-es/schemas/schemas_0.js
  var _A = "Account";
  var _AAO = "AnalyticsAndOperator";
  var _AC = "AccelerateConfiguration";
  var _ACL = "AccessControlList";
  var _ACL_ = "ACL";
  var _ACLn = "AnalyticsConfigurationList";
  var _ACP = "AccessControlPolicy";
  var _ACT = "AccessControlTranslation";
  var _ACn = "AnalyticsConfiguration";
  var _AD = "AccessDenied";
  var _ADb = "AbortDate";
  var _AED = "AnalyticsExportDestination";
  var _AF = "AnalyticsFilter";
  var _AH = "AllowedHeaders";
  var _AHl = "AllowedHeader";
  var _AI = "AccountId";
  var _AIMU = "AbortIncompleteMultipartUpload";
  var _AKI = "AccessKeyId";
  var _AM = "AllowedMethods";
  var _AMU = "AbortMultipartUpload";
  var _AMUO = "AbortMultipartUploadOutput";
  var _AMUR = "AbortMultipartUploadRequest";
  var _AMl = "AllowedMethod";
  var _AO = "AllowedOrigins";
  var _AOl = "AllowedOrigin";
  var _APA = "AccessPointAlias";
  var _APAc = "AccessPointArn";
  var _AQRD = "AllowQuotedRecordDelimiter";
  var _AR = "AcceptRanges";
  var _ARI = "AbortRuleId";
  var _AS = "AbacStatus";
  var _ASBD = "AnalyticsS3BucketDestination";
  var _ASSEBD = "ApplyServerSideEncryptionByDefault";
  var _ASr = "ArchiveStatus";
  var _AT = "AccessTier";
  var _An = "And";
  var _B = "Bucket";
  var _BA = "BucketArn";
  var _BAE = "BucketAlreadyExists";
  var _BAI = "BucketAccountId";
  var _BAOBY = "BucketAlreadyOwnedByYou";
  var _BET = "BlockedEncryptionTypes";
  var _BGR = "BypassGovernanceRetention";
  var _BI = "BucketInfo";
  var _BKE = "BucketKeyEnabled";
  var _BLC = "BucketLifecycleConfiguration";
  var _BLN = "BucketLocationName";
  var _BLS = "BucketLoggingStatus";
  var _BLT = "BucketLocationType";
  var _BN = "BucketNamespace";
  var _BNu = "BucketName";
  var _BP = "BytesProcessed";
  var _BPA = "BlockPublicAcls";
  var _BPP = "BlockPublicPolicy";
  var _BR = "BucketRegion";
  var _BRy = "BytesReturned";
  var _BS = "BytesScanned";
  var _Bo = "Body";
  var _Bu = "Buckets";
  var _C = "Checksum";
  var _CA = "ChecksumAlgorithm";
  var _CACL = "CannedACL";
  var _CB = "CreateBucket";
  var _CBC = "CreateBucketConfiguration";
  var _CBMC = "CreateBucketMetadataConfiguration";
  var _CBMCR = "CreateBucketMetadataConfigurationRequest";
  var _CBMTC = "CreateBucketMetadataTableConfiguration";
  var _CBMTCR = "CreateBucketMetadataTableConfigurationRequest";
  var _CBO = "CreateBucketOutput";
  var _CBR = "CreateBucketRequest";
  var _CC = "CacheControl";
  var _CCRC = "ChecksumCRC32";
  var _CCRCC = "ChecksumCRC32C";
  var _CCRCNVME = "ChecksumCRC64NVME";
  var _CC_ = "Cache-Control";
  var _CD = "CreationDate";
  var _CD_ = "Content-Disposition";
  var _CDo = "ContentDisposition";
  var _CE = "ContinuationEvent";
  var _CE_ = "Content-Encoding";
  var _CEo = "ContentEncoding";
  var _CF = "CloudFunction";
  var _CFC = "CloudFunctionConfiguration";
  var _CL = "ContentLanguage";
  var _CL_ = "Content-Language";
  var _CL__ = "Content-Length";
  var _CLo = "ContentLength";
  var _CM = "Content-MD5";
  var _CMD = "ChecksumMD5";
  var _CMDo = "ContentMD5";
  var _CMU = "CompletedMultipartUpload";
  var _CMUO = "CompleteMultipartUploadOutput";
  var _CMUOr = "CreateMultipartUploadOutput";
  var _CMUR = "CompleteMultipartUploadResult";
  var _CMURo = "CompleteMultipartUploadRequest";
  var _CMURr = "CreateMultipartUploadRequest";
  var _CMUo = "CompleteMultipartUpload";
  var _CMUr = "CreateMultipartUpload";
  var _CMh = "ChecksumMode";
  var _CO = "CopyObject";
  var _COO = "CopyObjectOutput";
  var _COR = "CopyObjectResult";
  var _CORSC = "CORSConfiguration";
  var _CORSR = "CORSRules";
  var _CORSRu = "CORSRule";
  var _CORo = "CopyObjectRequest";
  var _CP = "CommonPrefix";
  var _CPL = "CommonPrefixList";
  var _CPLo = "CompletedPartList";
  var _CPR = "CopyPartResult";
  var _CPo = "CompletedPart";
  var _CPom = "CommonPrefixes";
  var _CR = "ContentRange";
  var _CRSBA = "ConfirmRemoveSelfBucketAccess";
  var _CR_ = "Content-Range";
  var _CS = "CopySource";
  var _CSHA = "ChecksumSHA1";
  var _CSHAh = "ChecksumSHA256";
  var _CSHAhe = "ChecksumSHA512";
  var _CSIM = "CopySourceIfMatch";
  var _CSIMS = "CopySourceIfModifiedSince";
  var _CSINM = "CopySourceIfNoneMatch";
  var _CSIUS = "CopySourceIfUnmodifiedSince";
  var _CSO = "CreateSessionOutput";
  var _CSR = "CreateSessionResult";
  var _CSRo = "CopySourceRange";
  var _CSRr = "CreateSessionRequest";
  var _CSSSECA = "CopySourceSSECustomerAlgorithm";
  var _CSSSECK = "CopySourceSSECustomerKey";
  var _CSSSECKMD = "CopySourceSSECustomerKeyMD5";
  var _CSV = "CSV";
  var _CSVI = "CopySourceVersionId";
  var _CSVIn = "CSVInput";
  var _CSVO = "CSVOutput";
  var _CSo = "ConfigurationState";
  var _CSr = "CreateSession";
  var _CT = "ChecksumType";
  var _CT_ = "Content-Type";
  var _CTl = "ClientToken";
  var _CTo = "ContentType";
  var _CTom = "CompressionType";
  var _CTon = "ContinuationToken";
  var _CXXHASH = "ChecksumXXHASH64";
  var _CXXHASHh = "ChecksumXXHASH3";
  var _CXXHASHhe = "ChecksumXXHASH128";
  var _Co = "Condition";
  var _Cod = "Code";
  var _Com = "Comments";
  var _Con = "Contents";
  var _Cont = "Cont";
  var _Cr = "Credentials";
  var _D = "Days";
  var _DAI = "DaysAfterInitiation";
  var _DB = "DeleteBucket";
  var _DBAC = "DeleteBucketAnalyticsConfiguration";
  var _DBACR = "DeleteBucketAnalyticsConfigurationRequest";
  var _DBC = "DeleteBucketCors";
  var _DBCR = "DeleteBucketCorsRequest";
  var _DBE = "DeleteBucketEncryption";
  var _DBER = "DeleteBucketEncryptionRequest";
  var _DBIC = "DeleteBucketInventoryConfiguration";
  var _DBICR = "DeleteBucketInventoryConfigurationRequest";
  var _DBITC = "DeleteBucketIntelligentTieringConfiguration";
  var _DBITCR = "DeleteBucketIntelligentTieringConfigurationRequest";
  var _DBL = "DeleteBucketLifecycle";
  var _DBLR = "DeleteBucketLifecycleRequest";
  var _DBMC = "DeleteBucketMetadataConfiguration";
  var _DBMCR = "DeleteBucketMetadataConfigurationRequest";
  var _DBMCRe = "DeleteBucketMetricsConfigurationRequest";
  var _DBMCe = "DeleteBucketMetricsConfiguration";
  var _DBMTC = "DeleteBucketMetadataTableConfiguration";
  var _DBMTCR = "DeleteBucketMetadataTableConfigurationRequest";
  var _DBOC = "DeleteBucketOwnershipControls";
  var _DBOCR = "DeleteBucketOwnershipControlsRequest";
  var _DBP = "DeleteBucketPolicy";
  var _DBPR = "DeleteBucketPolicyRequest";
  var _DBR = "DeleteBucketRequest";
  var _DBRR = "DeleteBucketReplicationRequest";
  var _DBRe = "DeleteBucketReplication";
  var _DBT = "DeleteBucketTagging";
  var _DBTR = "DeleteBucketTaggingRequest";
  var _DBW = "DeleteBucketWebsite";
  var _DBWR = "DeleteBucketWebsiteRequest";
  var _DE = "DataExport";
  var _DIM = "DestinationIfMatch";
  var _DIMS = "DestinationIfModifiedSince";
  var _DINM = "DestinationIfNoneMatch";
  var _DIUS = "DestinationIfUnmodifiedSince";
  var _DM = "DeleteMarker";
  var _DME = "DeleteMarkerEntry";
  var _DMR = "DeleteMarkerReplication";
  var _DMVI = "DeleteMarkerVersionId";
  var _DMe = "DeleteMarkers";
  var _DN = "DisplayName";
  var _DO = "DeletedObject";
  var _DOO = "DeleteObjectOutput";
  var _DOOe = "DeleteObjectsOutput";
  var _DOR = "DeleteObjectRequest";
  var _DORe = "DeleteObjectsRequest";
  var _DOT = "DeleteObjectTagging";
  var _DOTO = "DeleteObjectTaggingOutput";
  var _DOTR = "DeleteObjectTaggingRequest";
  var _DOe = "DeletedObjects";
  var _DOel = "DeleteObject";
  var _DOele = "DeleteObjects";
  var _DPAB = "DeletePublicAccessBlock";
  var _DPABR = "DeletePublicAccessBlockRequest";
  var _DR = "DataRedundancy";
  var _DRe = "DefaultRetention";
  var _DRel = "DeleteResult";
  var _DRes = "DestinationResult";
  var _Da = "Date";
  var _De = "Delete";
  var _Del = "Deleted";
  var _Deli = "Delimiter";
  var _Des = "Destination";
  var _Desc = "Description";
  var _Det = "Details";
  var _E = "Expiration";
  var _EA = "EmailAddress";
  var _EBC = "EventBridgeConfiguration";
  var _EBO = "ExpectedBucketOwner";
  var _EC = "EncryptionConfiguration";
  var _ECr = "ErrorCode";
  var _ED = "ErrorDetails";
  var _EDr = "ErrorDocument";
  var _EE = "EndEvent";
  var _EH = "ExposeHeaders";
  var _EHx = "ExposeHeader";
  var _EM = "ErrorMessage";
  var _EODM = "ExpiredObjectDeleteMarker";
  var _EOR = "ExistingObjectReplication";
  var _ES = "ExpiresString";
  var _ESBO = "ExpectedSourceBucketOwner";
  var _ET = "EncryptionType";
  var _ETL = "EncryptionTypeList";
  var _ETM = "EncryptionTypeMismatch";
  var _ETa = "ETag";
  var _ETn = "EncodingType";
  var _ETv = "EventThreshold";
  var _ETx = "ExpressionType";
  var _En = "Encryption";
  var _Ena = "Enabled";
  var _End = "End";
  var _Er = "Errors";
  var _Err = "Error";
  var _Ev = "Events";
  var _Eve = "Event";
  var _Ex = "Expires";
  var _Exp = "Expression";
  var _F = "Filter";
  var _FD = "FieldDelimiter";
  var _FHI = "FileHeaderInfo";
  var _FO = "FetchOwner";
  var _FR = "FilterRule";
  var _FRL = "FilterRuleList";
  var _FRi = "FilterRules";
  var _Fi = "Field";
  var _Fo = "Format";
  var _Fr = "Frequency";
  var _G = "Grants";
  var _GBA = "GetBucketAbac";
  var _GBAC = "GetBucketAccelerateConfiguration";
  var _GBACO = "GetBucketAccelerateConfigurationOutput";
  var _GBACOe = "GetBucketAnalyticsConfigurationOutput";
  var _GBACR = "GetBucketAccelerateConfigurationRequest";
  var _GBACRe = "GetBucketAnalyticsConfigurationRequest";
  var _GBACe = "GetBucketAnalyticsConfiguration";
  var _GBAO = "GetBucketAbacOutput";
  var _GBAOe = "GetBucketAclOutput";
  var _GBAR = "GetBucketAbacRequest";
  var _GBARe = "GetBucketAclRequest";
  var _GBAe = "GetBucketAcl";
  var _GBC = "GetBucketCors";
  var _GBCO = "GetBucketCorsOutput";
  var _GBCR = "GetBucketCorsRequest";
  var _GBE = "GetBucketEncryption";
  var _GBEO = "GetBucketEncryptionOutput";
  var _GBER = "GetBucketEncryptionRequest";
  var _GBIC = "GetBucketInventoryConfiguration";
  var _GBICO = "GetBucketInventoryConfigurationOutput";
  var _GBICR = "GetBucketInventoryConfigurationRequest";
  var _GBITC = "GetBucketIntelligentTieringConfiguration";
  var _GBITCO = "GetBucketIntelligentTieringConfigurationOutput";
  var _GBITCR = "GetBucketIntelligentTieringConfigurationRequest";
  var _GBL = "GetBucketLocation";
  var _GBLC = "GetBucketLifecycleConfiguration";
  var _GBLCO = "GetBucketLifecycleConfigurationOutput";
  var _GBLCR = "GetBucketLifecycleConfigurationRequest";
  var _GBLO = "GetBucketLocationOutput";
  var _GBLOe = "GetBucketLoggingOutput";
  var _GBLR = "GetBucketLocationRequest";
  var _GBLRe = "GetBucketLoggingRequest";
  var _GBLe = "GetBucketLogging";
  var _GBMC = "GetBucketMetadataConfiguration";
  var _GBMCO = "GetBucketMetadataConfigurationOutput";
  var _GBMCOe = "GetBucketMetricsConfigurationOutput";
  var _GBMCR = "GetBucketMetadataConfigurationResult";
  var _GBMCRe = "GetBucketMetadataConfigurationRequest";
  var _GBMCRet = "GetBucketMetricsConfigurationRequest";
  var _GBMCe = "GetBucketMetricsConfiguration";
  var _GBMTC = "GetBucketMetadataTableConfiguration";
  var _GBMTCO = "GetBucketMetadataTableConfigurationOutput";
  var _GBMTCR = "GetBucketMetadataTableConfigurationResult";
  var _GBMTCRe = "GetBucketMetadataTableConfigurationRequest";
  var _GBNC = "GetBucketNotificationConfiguration";
  var _GBNCR = "GetBucketNotificationConfigurationRequest";
  var _GBOC = "GetBucketOwnershipControls";
  var _GBOCO = "GetBucketOwnershipControlsOutput";
  var _GBOCR = "GetBucketOwnershipControlsRequest";
  var _GBP = "GetBucketPolicy";
  var _GBPO = "GetBucketPolicyOutput";
  var _GBPR = "GetBucketPolicyRequest";
  var _GBPS = "GetBucketPolicyStatus";
  var _GBPSO = "GetBucketPolicyStatusOutput";
  var _GBPSR = "GetBucketPolicyStatusRequest";
  var _GBR = "GetBucketReplication";
  var _GBRO = "GetBucketReplicationOutput";
  var _GBRP = "GetBucketRequestPayment";
  var _GBRPO = "GetBucketRequestPaymentOutput";
  var _GBRPR = "GetBucketRequestPaymentRequest";
  var _GBRR = "GetBucketReplicationRequest";
  var _GBT = "GetBucketTagging";
  var _GBTO = "GetBucketTaggingOutput";
  var _GBTR = "GetBucketTaggingRequest";
  var _GBV = "GetBucketVersioning";
  var _GBVO = "GetBucketVersioningOutput";
  var _GBVR = "GetBucketVersioningRequest";
  var _GBW = "GetBucketWebsite";
  var _GBWO = "GetBucketWebsiteOutput";
  var _GBWR = "GetBucketWebsiteRequest";
  var _GFC = "GrantFullControl";
  var _GJP = "GlacierJobParameters";
  var _GO = "GetObject";
  var _GOA = "GetObjectAcl";
  var _GOAO = "GetObjectAclOutput";
  var _GOAOe = "GetObjectAttributesOutput";
  var _GOAP = "GetObjectAttributesParts";
  var _GOAR = "GetObjectAclRequest";
  var _GOARe = "GetObjectAttributesResponse";
  var _GOARet = "GetObjectAttributesRequest";
  var _GOAe = "GetObjectAttributes";
  var _GOLC = "GetObjectLockConfiguration";
  var _GOLCO = "GetObjectLockConfigurationOutput";
  var _GOLCR = "GetObjectLockConfigurationRequest";
  var _GOLH = "GetObjectLegalHold";
  var _GOLHO = "GetObjectLegalHoldOutput";
  var _GOLHR = "GetObjectLegalHoldRequest";
  var _GOO = "GetObjectOutput";
  var _GOR = "GetObjectRequest";
  var _GORO = "GetObjectRetentionOutput";
  var _GORR = "GetObjectRetentionRequest";
  var _GORe = "GetObjectRetention";
  var _GOT = "GetObjectTagging";
  var _GOTO = "GetObjectTaggingOutput";
  var _GOTOe = "GetObjectTorrentOutput";
  var _GOTR = "GetObjectTaggingRequest";
  var _GOTRe = "GetObjectTorrentRequest";
  var _GOTe = "GetObjectTorrent";
  var _GPAB = "GetPublicAccessBlock";
  var _GPABO = "GetPublicAccessBlockOutput";
  var _GPABR = "GetPublicAccessBlockRequest";
  var _GR = "GrantRead";
  var _GRACP = "GrantReadACP";
  var _GW = "GrantWrite";
  var _GWACP = "GrantWriteACP";
  var _Gr = "Grant";
  var _Gra = "Grantee";
  var _HB = "HeadBucket";
  var _HBO = "HeadBucketOutput";
  var _HBR = "HeadBucketRequest";
  var _HECRE = "HttpErrorCodeReturnedEquals";
  var _HN = "HostName";
  var _HO = "HeadObject";
  var _HOO = "HeadObjectOutput";
  var _HOR = "HeadObjectRequest";
  var _HRC = "HttpRedirectCode";
  var _I = "Id";
  var _IC = "InventoryConfiguration";
  var _ICL = "InventoryConfigurationList";
  var _ID = "ID";
  var _IDn = "IndexDocument";
  var _IDnv = "InventoryDestination";
  var _IE = "IsEnabled";
  var _IEn = "InventoryEncryption";
  var _IF = "InventoryFilter";
  var _IL = "IsLatest";
  var _IM = "IfMatch";
  var _IMIT = "IfMatchInitiatedTime";
  var _IMLMT = "IfMatchLastModifiedTime";
  var _IMS = "IfMatchSize";
  var _IMS_ = "If-Modified-Since";
  var _IMSf = "IfModifiedSince";
  var _IMUR = "InitiateMultipartUploadResult";
  var _IM_ = "If-Match";
  var _INM = "IfNoneMatch";
  var _INM_ = "If-None-Match";
  var _IOF = "InventoryOptionalFields";
  var _IOS = "InvalidObjectState";
  var _IOV = "IncludedObjectVersions";
  var _IP = "IsPublic";
  var _IPA = "IgnorePublicAcls";
  var _IPM = "IdempotencyParameterMismatch";
  var _IR = "InvalidRequest";
  var _IRIP = "IsRestoreInProgress";
  var _IS = "InputSerialization";
  var _ISBD = "InventoryS3BucketDestination";
  var _ISn = "InventorySchedule";
  var _IT = "IsTruncated";
  var _ITAO = "IntelligentTieringAndOperator";
  var _ITC = "IntelligentTieringConfiguration";
  var _ITCL = "IntelligentTieringConfigurationList";
  var _ITCR = "InventoryTableConfigurationResult";
  var _ITCU = "InventoryTableConfigurationUpdates";
  var _ITCn = "InventoryTableConfiguration";
  var _ITF = "IntelligentTieringFilter";
  var _IUS = "IfUnmodifiedSince";
  var _IUS_ = "If-Unmodified-Since";
  var _IWO = "InvalidWriteOffset";
  var _In = "Initiator";
  var _Ini = "Initiated";
  var _JSON = "JSON";
  var _JSONI = "JSONInput";
  var _JSONO = "JSONOutput";
  var _JTC = "JournalTableConfiguration";
  var _JTCR = "JournalTableConfigurationResult";
  var _JTCU = "JournalTableConfigurationUpdates";
  var _K = "Key";
  var _KC = "KeyCount";
  var _KI = "KeyId";
  var _KKA = "KmsKeyArn";
  var _KM = "KeyMarker";
  var _KMSC = "KMSContext";
  var _KMSKA = "KMSKeyArn";
  var _KMSKI = "KMSKeyId";
  var _KMSMKID = "KMSMasterKeyID";
  var _KPE = "KeyPrefixEquals";
  var _L = "Location";
  var _LAMBR = "ListAllMyBucketsResult";
  var _LAMDBR = "ListAllMyDirectoryBucketsResult";
  var _LB = "ListBuckets";
  var _LBAC = "ListBucketAnalyticsConfigurations";
  var _LBACO = "ListBucketAnalyticsConfigurationsOutput";
  var _LBACR = "ListBucketAnalyticsConfigurationResult";
  var _LBACRi = "ListBucketAnalyticsConfigurationsRequest";
  var _LBIC = "ListBucketInventoryConfigurations";
  var _LBICO = "ListBucketInventoryConfigurationsOutput";
  var _LBICR = "ListBucketInventoryConfigurationsRequest";
  var _LBITC = "ListBucketIntelligentTieringConfigurations";
  var _LBITCO = "ListBucketIntelligentTieringConfigurationsOutput";
  var _LBITCR = "ListBucketIntelligentTieringConfigurationsRequest";
  var _LBMC = "ListBucketMetricsConfigurations";
  var _LBMCO = "ListBucketMetricsConfigurationsOutput";
  var _LBMCR = "ListBucketMetricsConfigurationsRequest";
  var _LBO = "ListBucketsOutput";
  var _LBR = "ListBucketsRequest";
  var _LBRi = "ListBucketResult";
  var _LC = "LocationConstraint";
  var _LCi = "LifecycleConfiguration";
  var _LDB = "ListDirectoryBuckets";
  var _LDBO = "ListDirectoryBucketsOutput";
  var _LDBR = "ListDirectoryBucketsRequest";
  var _LE = "LoggingEnabled";
  var _LEi = "LifecycleExpiration";
  var _LFA = "LambdaFunctionArn";
  var _LFC = "LambdaFunctionConfiguration";
  var _LFCL = "LambdaFunctionConfigurationList";
  var _LFCa = "LambdaFunctionConfigurations";
  var _LH = "LegalHold";
  var _LI = "LocationInfo";
  var _LICR = "ListInventoryConfigurationsResult";
  var _LM = "LastModified";
  var _LMCR = "ListMetricsConfigurationsResult";
  var _LMT = "LastModifiedTime";
  var _LMU = "ListMultipartUploads";
  var _LMUO = "ListMultipartUploadsOutput";
  var _LMUR = "ListMultipartUploadsResult";
  var _LMURi = "ListMultipartUploadsRequest";
  var _LM_ = "Last-Modified";
  var _LO = "ListObjects";
  var _LOO = "ListObjectsOutput";
  var _LOR = "ListObjectsRequest";
  var _LOV = "ListObjectsV2";
  var _LOVO = "ListObjectsV2Output";
  var _LOVOi = "ListObjectVersionsOutput";
  var _LOVR = "ListObjectsV2Request";
  var _LOVRi = "ListObjectVersionsRequest";
  var _LOVi = "ListObjectVersions";
  var _LP = "ListParts";
  var _LPO = "ListPartsOutput";
  var _LPR = "ListPartsResult";
  var _LPRi = "ListPartsRequest";
  var _LR = "LifecycleRule";
  var _LRAO = "LifecycleRuleAndOperator";
  var _LRF = "LifecycleRuleFilter";
  var _LRi = "LifecycleRules";
  var _LVR = "ListVersionsResult";
  var _M = "Metadata";
  var _MAO = "MetricsAndOperator";
  var _MAS = "MaxAgeSeconds";
  var _MB = "MaxBuckets";
  var _MC = "MetadataConfiguration";
  var _MCL = "MetricsConfigurationList";
  var _MCR = "MetadataConfigurationResult";
  var _MCe = "MetricsConfiguration";
  var _MD = "MetadataDirective";
  var _MDB = "MaxDirectoryBuckets";
  var _MDf = "MfaDelete";
  var _ME = "MetadataEntry";
  var _MF = "MetricsFilter";
  var _MFA = "MFA";
  var _MFAD = "MFADelete";
  var _MK = "MaxKeys";
  var _MM = "MissingMeta";
  var _MOS = "MpuObjectSize";
  var _MP = "MaxParts";
  var _MTC = "MetadataTableConfiguration";
  var _MTCR = "MetadataTableConfigurationResult";
  var _MTEC = "MetadataTableEncryptionConfiguration";
  var _MU = "MultipartUpload";
  var _MUL = "MultipartUploadList";
  var _MUa = "MaxUploads";
  var _Ma = "Marker";
  var _Me = "Metrics";
  var _Mes = "Message";
  var _Mi = "Minutes";
  var _Mo = "Mode";
  var _N = "Name";
  var _NC = "NotificationConfiguration";
  var _NCF = "NotificationConfigurationFilter";
  var _NCT = "NextContinuationToken";
  var _ND = "NoncurrentDays";
  var _NEKKAS = "NonEmptyKmsKeyArnString";
  var _NF = "NotFound";
  var _NKM = "NextKeyMarker";
  var _NM = "NextMarker";
  var _NNV = "NewerNoncurrentVersions";
  var _NPNM = "NextPartNumberMarker";
  var _NSB = "NoSuchBucket";
  var _NSK = "NoSuchKey";
  var _NSU = "NoSuchUpload";
  var _NUIM = "NextUploadIdMarker";
  var _NVE = "NoncurrentVersionExpiration";
  var _NVIM = "NextVersionIdMarker";
  var _NVT = "NoncurrentVersionTransitions";
  var _NVTL = "NoncurrentVersionTransitionList";
  var _NVTo = "NoncurrentVersionTransition";
  var _O = "Owner";
  var _OA = "ObjectAttributes";
  var _OAIATE = "ObjectAlreadyInActiveTierError";
  var _OC = "OwnershipControls";
  var _OCR = "OwnershipControlsRule";
  var _OCRw = "OwnershipControlsRules";
  var _OE = "ObjectEncryption";
  var _OF = "OptionalFields";
  var _OI = "ObjectIdentifier";
  var _OIL = "ObjectIdentifierList";
  var _OL = "OutputLocation";
  var _OLC = "ObjectLockConfiguration";
  var _OLE = "ObjectLockEnabled";
  var _OLEFB = "ObjectLockEnabledForBucket";
  var _OLLH = "ObjectLockLegalHold";
  var _OLLHS = "ObjectLockLegalHoldStatus";
  var _OLM = "ObjectLockMode";
  var _OLR = "ObjectLockRetention";
  var _OLRUD = "ObjectLockRetainUntilDate";
  var _OLRb = "ObjectLockRule";
  var _OLb = "ObjectList";
  var _ONIATE = "ObjectNotInActiveTierError";
  var _OO = "ObjectOwnership";
  var _OOA = "OptionalObjectAttributes";
  var _OP = "ObjectParts";
  var _OPb = "ObjectPart";
  var _OS = "ObjectSize";
  var _OSGT = "ObjectSizeGreaterThan";
  var _OSLT = "ObjectSizeLessThan";
  var _OSV = "OutputSchemaVersion";
  var _OSu = "OutputSerialization";
  var _OV = "ObjectVersion";
  var _OVL = "ObjectVersionList";
  var _Ob = "Objects";
  var _Obj = "Object";
  var _P = "Prefix";
  var _PABC = "PublicAccessBlockConfiguration";
  var _PBA = "PutBucketAbac";
  var _PBAC = "PutBucketAccelerateConfiguration";
  var _PBACR = "PutBucketAccelerateConfigurationRequest";
  var _PBACRu = "PutBucketAnalyticsConfigurationRequest";
  var _PBACu = "PutBucketAnalyticsConfiguration";
  var _PBAR = "PutBucketAbacRequest";
  var _PBARu = "PutBucketAclRequest";
  var _PBAu = "PutBucketAcl";
  var _PBC = "PutBucketCors";
  var _PBCR = "PutBucketCorsRequest";
  var _PBE = "PutBucketEncryption";
  var _PBER = "PutBucketEncryptionRequest";
  var _PBIC = "PutBucketInventoryConfiguration";
  var _PBICR = "PutBucketInventoryConfigurationRequest";
  var _PBITC = "PutBucketIntelligentTieringConfiguration";
  var _PBITCR = "PutBucketIntelligentTieringConfigurationRequest";
  var _PBL = "PutBucketLogging";
  var _PBLC = "PutBucketLifecycleConfiguration";
  var _PBLCO = "PutBucketLifecycleConfigurationOutput";
  var _PBLCR = "PutBucketLifecycleConfigurationRequest";
  var _PBLR = "PutBucketLoggingRequest";
  var _PBMC = "PutBucketMetricsConfiguration";
  var _PBMCR = "PutBucketMetricsConfigurationRequest";
  var _PBNC = "PutBucketNotificationConfiguration";
  var _PBNCR = "PutBucketNotificationConfigurationRequest";
  var _PBOC = "PutBucketOwnershipControls";
  var _PBOCR = "PutBucketOwnershipControlsRequest";
  var _PBP = "PutBucketPolicy";
  var _PBPR = "PutBucketPolicyRequest";
  var _PBR = "PutBucketReplication";
  var _PBRP = "PutBucketRequestPayment";
  var _PBRPR = "PutBucketRequestPaymentRequest";
  var _PBRR = "PutBucketReplicationRequest";
  var _PBT = "PutBucketTagging";
  var _PBTR = "PutBucketTaggingRequest";
  var _PBV = "PutBucketVersioning";
  var _PBVR = "PutBucketVersioningRequest";
  var _PBW = "PutBucketWebsite";
  var _PBWR = "PutBucketWebsiteRequest";
  var _PC = "PartsCount";
  var _PDS = "PartitionDateSource";
  var _PE = "ProgressEvent";
  var _PI = "ParquetInput";
  var _PL = "PartsList";
  var _PN = "PartNumber";
  var _PNM = "PartNumberMarker";
  var _PO = "PutObject";
  var _POA = "PutObjectAcl";
  var _POAO = "PutObjectAclOutput";
  var _POAR = "PutObjectAclRequest";
  var _POLC = "PutObjectLockConfiguration";
  var _POLCO = "PutObjectLockConfigurationOutput";
  var _POLCR = "PutObjectLockConfigurationRequest";
  var _POLH = "PutObjectLegalHold";
  var _POLHO = "PutObjectLegalHoldOutput";
  var _POLHR = "PutObjectLegalHoldRequest";
  var _POO = "PutObjectOutput";
  var _POR = "PutObjectRequest";
  var _PORO = "PutObjectRetentionOutput";
  var _PORR = "PutObjectRetentionRequest";
  var _PORu = "PutObjectRetention";
  var _POT = "PutObjectTagging";
  var _POTO = "PutObjectTaggingOutput";
  var _POTR = "PutObjectTaggingRequest";
  var _PP = "PartitionedPrefix";
  var _PPAB = "PutPublicAccessBlock";
  var _PPABR = "PutPublicAccessBlockRequest";
  var _PS = "PolicyStatus";
  var _Pa = "Parts";
  var _Par = "Part";
  var _Parq = "Parquet";
  var _Pay = "Payer";
  var _Payl = "Payload";
  var _Pe = "Permission";
  var _Po = "Policy";
  var _Pr = "Progress";
  var _Pri = "Priority";
  var _Pro = "Protocol";
  var _Q = "Quiet";
  var _QA = "QueueArn";
  var _QC = "QuoteCharacter";
  var _QCL = "QueueConfigurationList";
  var _QCu = "QueueConfigurations";
  var _QCue = "QueueConfiguration";
  var _QEC = "QuoteEscapeCharacter";
  var _QF = "QuoteFields";
  var _Qu = "Queue";
  var _R = "Rules";
  var _RART = "RedirectAllRequestsTo";
  var _RC = "RequestCharged";
  var _RCC = "ResponseCacheControl";
  var _RCD = "ResponseContentDisposition";
  var _RCE = "ResponseContentEncoding";
  var _RCL = "ResponseContentLanguage";
  var _RCT = "ResponseContentType";
  var _RCe = "ReplicationConfiguration";
  var _RD = "RecordDelimiter";
  var _RE = "ResponseExpires";
  var _RED = "RestoreExpiryDate";
  var _REe = "RecordExpiration";
  var _REec = "RecordsEvent";
  var _RKKID = "ReplicaKmsKeyID";
  var _RKPW = "ReplaceKeyPrefixWith";
  var _RKW = "ReplaceKeyWith";
  var _RM = "ReplicaModifications";
  var _RO = "RenameObject";
  var _ROO = "RenameObjectOutput";
  var _ROOe = "RestoreObjectOutput";
  var _ROP = "RestoreOutputPath";
  var _ROR = "RenameObjectRequest";
  var _RORe = "RestoreObjectRequest";
  var _ROe = "RestoreObject";
  var _RP = "RequestPayer";
  var _RPB = "RestrictPublicBuckets";
  var _RPC = "RequestPaymentConfiguration";
  var _RPe = "RequestProgress";
  var _RR = "RoutingRules";
  var _RRAO = "ReplicationRuleAndOperator";
  var _RRF = "ReplicationRuleFilter";
  var _RRe = "ReplicationRule";
  var _RRep = "ReplicationRules";
  var _RReq = "RequestRoute";
  var _RRes = "RestoreRequest";
  var _RRo = "RoutingRule";
  var _RS = "ReplicationStatus";
  var _RSe = "RestoreStatus";
  var _RSen = "RenameSource";
  var _RT = "ReplicationTime";
  var _RTV = "ReplicationTimeValue";
  var _RTe = "RequestToken";
  var _RUD = "RetainUntilDate";
  var _Ra = "Range";
  var _Re = "Restore";
  var _Rec = "Records";
  var _Red = "Redirect";
  var _Ret = "Retention";
  var _Ro = "Role";
  var _Ru = "Rule";
  var _S = "Status";
  var _SA = "StartAfter";
  var _SAK = "SecretAccessKey";
  var _SAs = "SseAlgorithm";
  var _SB = "StreamingBlob";
  var _SBD = "S3BucketDestination";
  var _SC = "StorageClass";
  var _SCA = "StorageClassAnalysis";
  var _SCADE = "StorageClassAnalysisDataExport";
  var _SCV = "SessionCredentialValue";
  var _SCe = "SessionCredentials";
  var _SCt = "StatusCode";
  var _SDV = "SkipDestinationValidation";
  var _SE = "StatsEvent";
  var _SIM = "SourceIfMatch";
  var _SIMS = "SourceIfModifiedSince";
  var _SINM = "SourceIfNoneMatch";
  var _SIUS = "SourceIfUnmodifiedSince";
  var _SK = "SSE-KMS";
  var _SKEO = "SseKmsEncryptedObjects";
  var _SKF = "S3KeyFilter";
  var _SKe = "S3Key";
  var _SL = "S3Location";
  var _SM = "SessionMode";
  var _SOC = "SelectObjectContent";
  var _SOCES = "SelectObjectContentEventStream";
  var _SOCO = "SelectObjectContentOutput";
  var _SOCR = "SelectObjectContentRequest";
  var _SP = "SelectParameters";
  var _SPi = "SimplePrefix";
  var _SR = "ScanRange";
  var _SS = "SSE-S3";
  var _SSC = "SourceSelectionCriteria";
  var _SSE = "ServerSideEncryption";
  var _SSEA = "SSEAlgorithm";
  var _SSEBD = "ServerSideEncryptionByDefault";
  var _SSEC = "ServerSideEncryptionConfiguration";
  var _SSECA = "SSECustomerAlgorithm";
  var _SSECK = "SSECustomerKey";
  var _SSECKMD = "SSECustomerKeyMD5";
  var _SSEKMS = "SSEKMS";
  var _SSEKMSE = "SSEKMSEncryption";
  var _SSEKMSEC = "SSEKMSEncryptionContext";
  var _SSEKMSKI = "SSEKMSKeyId";
  var _SSER = "ServerSideEncryptionRule";
  var _SSERe = "ServerSideEncryptionRules";
  var _SSES = "SSES3";
  var _ST = "SessionToken";
  var _STD = "S3TablesDestination";
  var _STDR = "S3TablesDestinationResult";
  var _S_ = "S3";
  var _Sc = "Schedule";
  var _Si = "Size";
  var _St = "Start";
  var _Sta = "Stats";
  var _Su = "Suffix";
  var _T = "Tags";
  var _TA = "TableArn";
  var _TAo = "TopicArn";
  var _TB = "TargetBucket";
  var _TBA = "TableBucketArn";
  var _TBT = "TableBucketType";
  var _TC = "TagCount";
  var _TCL = "TopicConfigurationList";
  var _TCo = "TopicConfigurations";
  var _TCop = "TopicConfiguration";
  var _TD = "TaggingDirective";
  var _TDMOS = "TransitionDefaultMinimumObjectSize";
  var _TG = "TargetGrants";
  var _TGa = "TargetGrant";
  var _TL = "TieringList";
  var _TLr = "TransitionList";
  var _TMP = "TooManyParts";
  var _TN = "TableNamespace";
  var _TNa = "TableName";
  var _TOKF = "TargetObjectKeyFormat";
  var _TP = "TargetPrefix";
  var _TPC = "TotalPartsCount";
  var _TS = "TagSet";
  var _TSa = "TableStatus";
  var _Ta = "Tag";
  var _Tag = "Tagging";
  var _Ti = "Tier";
  var _Tie = "Tierings";
  var _Tier = "Tiering";
  var _Tim = "Time";
  var _To = "Token";
  var _Top = "Topic";
  var _Tr = "Transitions";
  var _Tra = "Transition";
  var _Ty = "Type";
  var _U = "Uploads";
  var _UBMITC = "UpdateBucketMetadataInventoryTableConfiguration";
  var _UBMITCR = "UpdateBucketMetadataInventoryTableConfigurationRequest";
  var _UBMJTC = "UpdateBucketMetadataJournalTableConfiguration";
  var _UBMJTCR = "UpdateBucketMetadataJournalTableConfigurationRequest";
  var _UI = "UploadId";
  var _UIM = "UploadIdMarker";
  var _UM = "UserMetadata";
  var _UOE = "UpdateObjectEncryption";
  var _UOER = "UpdateObjectEncryptionRequest";
  var _UOERp = "UpdateObjectEncryptionResponse";
  var _UP = "UploadPart";
  var _UPC = "UploadPartCopy";
  var _UPCO = "UploadPartCopyOutput";
  var _UPCR = "UploadPartCopyRequest";
  var _UPO = "UploadPartOutput";
  var _UPR = "UploadPartRequest";
  var _URI = "URI";
  var _Up = "Upload";
  var _V = "Value";
  var _VC = "VersioningConfiguration";
  var _VI = "VersionId";
  var _VIM = "VersionIdMarker";
  var _Ve = "Versions";
  var _Ver = "Version";
  var _WC = "WebsiteConfiguration";
  var _WGOR = "WriteGetObjectResponse";
  var _WGORR = "WriteGetObjectResponseRequest";
  var _WOB = "WriteOffsetBytes";
  var _WRL = "WebsiteRedirectLocation";
  var _Y = "Years";
  var _ar = "accept-ranges";
  var _br = "bucket-region";
  var _c = "client";
  var _ct = "continuation-token";
  var _d = "delimiter";
  var _e = "error";
  var _eP = "eventPayload";
  var _en = "endpoint";
  var _et = "encoding-type";
  var _fo = "fetch-owner";
  var _h = "http";
  var _hC = "httpChecksum";
  var _hE = "httpError";
  var _hH = "httpHeader";
  var _hL = "hostLabel";
  var _hP = "httpPayload";
  var _hPH = "httpPrefixHeaders";
  var _hQ = "httpQuery";
  var _hi = "http://www.w3.org/2001/XMLSchema-instance";
  var _i = "id";
  var _iT = "idempotencyToken";
  var _km = "key-marker";
  var _m = "marker";
  var _mb = "max-buckets";
  var _mdb = "max-directory-buckets";
  var _mk = "max-keys";
  var _mp = "max-parts";
  var _mu = "max-uploads";
  var _p = "prefix";
  var _pN = "partNumber";
  var _pnm = "part-number-marker";
  var _rcc = "response-cache-control";
  var _rcd = "response-content-disposition";
  var _rce = "response-content-encoding";
  var _rcl = "response-content-language";
  var _rct = "response-content-type";
  var _re = "response-expires";
  var _s = "smithy.ts.sdk.synthetic.com.amazonaws.s3";
  var _sa = "start-after";
  var _st = "streaming";
  var _uI = "uploadId";
  var _uim = "upload-id-marker";
  var _vI = "versionId";
  var _vim = "version-id-marker";
  var _x = "xsi";
  var _xA = "xmlAttribute";
  var _xF = "xmlFlattened";
  var _xN = "xmlName";
  var _xNm = "xmlNamespace";
  var _xaa = "x-amz-acl";
  var _xaad = "x-amz-abort-date";
  var _xaapa = "x-amz-access-point-alias";
  var _xaari = "x-amz-abort-rule-id";
  var _xaas = "x-amz-archive-status";
  var _xaba = "x-amz-bucket-arn";
  var _xabgr = "x-amz-bypass-governance-retention";
  var _xabln = "x-amz-bucket-location-name";
  var _xablt = "x-amz-bucket-location-type";
  var _xabn = "x-amz-bucket-namespace";
  var _xabole = "x-amz-bucket-object-lock-enabled";
  var _xabolt = "x-amz-bucket-object-lock-token";
  var _xabr = "x-amz-bucket-region";
  var _xaca = "x-amz-checksum-algorithm";
  var _xacc = "x-amz-checksum-crc32";
  var _xacc_ = "x-amz-checksum-crc32c";
  var _xacc__ = "x-amz-checksum-crc64nvme";
  var _xacm = "x-amz-checksum-md5";
  var _xacm_ = "x-amz-checksum-mode";
  var _xacrsba = "x-amz-confirm-remove-self-bucket-access";
  var _xacs = "x-amz-checksum-sha1";
  var _xacs_ = "x-amz-checksum-sha256";
  var _xacs__ = "x-amz-checksum-sha512";
  var _xacs___ = "x-amz-copy-source";
  var _xacsim = "x-amz-copy-source-if-match";
  var _xacsims = "x-amz-copy-source-if-modified-since";
  var _xacsinm = "x-amz-copy-source-if-none-match";
  var _xacsius = "x-amz-copy-source-if-unmodified-since";
  var _xacsm = "x-amz-create-session-mode";
  var _xacsr = "x-amz-copy-source-range";
  var _xacssseca = "x-amz-copy-source-server-side-encryption-customer-algorithm";
  var _xacssseck = "x-amz-copy-source-server-side-encryption-customer-key";
  var _xacssseckM = "x-amz-copy-source-server-side-encryption-customer-key-MD5";
  var _xacsvi = "x-amz-copy-source-version-id";
  var _xact = "x-amz-checksum-type";
  var _xact_ = "x-amz-client-token";
  var _xacx = "x-amz-checksum-xxhash64";
  var _xacx_ = "x-amz-checksum-xxhash3";
  var _xacx__ = "x-amz-checksum-xxhash128";
  var _xadm = "x-amz-delete-marker";
  var _xae = "x-amz-expiration";
  var _xaebo = "x-amz-expected-bucket-owner";
  var _xafec = "x-amz-fwd-error-code";
  var _xafem = "x-amz-fwd-error-message";
  var _xafhCC = "x-amz-fwd-header-Cache-Control";
  var _xafhCD = "x-amz-fwd-header-Content-Disposition";
  var _xafhCE = "x-amz-fwd-header-Content-Encoding";
  var _xafhCL = "x-amz-fwd-header-Content-Language";
  var _xafhCR = "x-amz-fwd-header-Content-Range";
  var _xafhCT = "x-amz-fwd-header-Content-Type";
  var _xafhE = "x-amz-fwd-header-ETag";
  var _xafhE_ = "x-amz-fwd-header-Expires";
  var _xafhLM = "x-amz-fwd-header-Last-Modified";
  var _xafhar = "x-amz-fwd-header-accept-ranges";
  var _xafhxacc = "x-amz-fwd-header-x-amz-checksum-crc32";
  var _xafhxacc_ = "x-amz-fwd-header-x-amz-checksum-crc32c";
  var _xafhxacc__ = "x-amz-fwd-header-x-amz-checksum-crc64nvme";
  var _xafhxacm = "x-amz-fwd-header-x-amz-checksum-md5";
  var _xafhxacs = "x-amz-fwd-header-x-amz-checksum-sha1";
  var _xafhxacs_ = "x-amz-fwd-header-x-amz-checksum-sha256";
  var _xafhxacs__ = "x-amz-fwd-header-x-amz-checksum-sha512";
  var _xafhxacx = "x-amz-fwd-header-x-amz-checksum-xxhash64";
  var _xafhxacx_ = "x-amz-fwd-header-x-amz-checksum-xxhash3";
  var _xafhxacx__ = "x-amz-fwd-header-x-amz-checksum-xxhash128";
  var _xafhxadm = "x-amz-fwd-header-x-amz-delete-marker";
  var _xafhxae = "x-amz-fwd-header-x-amz-expiration";
  var _xafhxamm = "x-amz-fwd-header-x-amz-missing-meta";
  var _xafhxampc = "x-amz-fwd-header-x-amz-mp-parts-count";
  var _xafhxaollh = "x-amz-fwd-header-x-amz-object-lock-legal-hold";
  var _xafhxaolm = "x-amz-fwd-header-x-amz-object-lock-mode";
  var _xafhxaolrud = "x-amz-fwd-header-x-amz-object-lock-retain-until-date";
  var _xafhxar = "x-amz-fwd-header-x-amz-restore";
  var _xafhxarc = "x-amz-fwd-header-x-amz-request-charged";
  var _xafhxars = "x-amz-fwd-header-x-amz-replication-status";
  var _xafhxasc = "x-amz-fwd-header-x-amz-storage-class";
  var _xafhxasse = "x-amz-fwd-header-x-amz-server-side-encryption";
  var _xafhxasseakki = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id";
  var _xafhxassebke = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled";
  var _xafhxasseca = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm";
  var _xafhxasseckM = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5";
  var _xafhxatc = "x-amz-fwd-header-x-amz-tagging-count";
  var _xafhxavi = "x-amz-fwd-header-x-amz-version-id";
  var _xafs = "x-amz-fwd-status";
  var _xagfc = "x-amz-grant-full-control";
  var _xagr = "x-amz-grant-read";
  var _xagra = "x-amz-grant-read-acp";
  var _xagw = "x-amz-grant-write";
  var _xagwa = "x-amz-grant-write-acp";
  var _xaimit = "x-amz-if-match-initiated-time";
  var _xaimlmt = "x-amz-if-match-last-modified-time";
  var _xaims = "x-amz-if-match-size";
  var _xam = "x-amz-meta-";
  var _xam_ = "x-amz-mfa";
  var _xamd = "x-amz-metadata-directive";
  var _xamm = "x-amz-missing-meta";
  var _xamos = "x-amz-mp-object-size";
  var _xamp = "x-amz-max-parts";
  var _xampc = "x-amz-mp-parts-count";
  var _xaoa = "x-amz-object-attributes";
  var _xaollh = "x-amz-object-lock-legal-hold";
  var _xaolm = "x-amz-object-lock-mode";
  var _xaolrud = "x-amz-object-lock-retain-until-date";
  var _xaoo = "x-amz-object-ownership";
  var _xaooa = "x-amz-optional-object-attributes";
  var _xaos = "x-amz-object-size";
  var _xapnm = "x-amz-part-number-marker";
  var _xar = "x-amz-restore";
  var _xarc = "x-amz-request-charged";
  var _xarop = "x-amz-restore-output-path";
  var _xarp = "x-amz-request-payer";
  var _xarr = "x-amz-request-route";
  var _xars = "x-amz-replication-status";
  var _xars_ = "x-amz-rename-source";
  var _xarsim = "x-amz-rename-source-if-match";
  var _xarsims = "x-amz-rename-source-if-modified-since";
  var _xarsinm = "x-amz-rename-source-if-none-match";
  var _xarsius = "x-amz-rename-source-if-unmodified-since";
  var _xart = "x-amz-request-token";
  var _xasc = "x-amz-storage-class";
  var _xasca = "x-amz-sdk-checksum-algorithm";
  var _xasdv = "x-amz-skip-destination-validation";
  var _xasebo = "x-amz-source-expected-bucket-owner";
  var _xasse = "x-amz-server-side-encryption";
  var _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
  var _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
  var _xassec = "x-amz-server-side-encryption-context";
  var _xasseca = "x-amz-server-side-encryption-customer-algorithm";
  var _xasseck = "x-amz-server-side-encryption-customer-key";
  var _xasseckM = "x-amz-server-side-encryption-customer-key-MD5";
  var _xat = "x-amz-tagging";
  var _xatc = "x-amz-tagging-count";
  var _xatd = "x-amz-tagging-directive";
  var _xatdmos = "x-amz-transition-default-minimum-object-size";
  var _xavi = "x-amz-version-id";
  var _xawob = "x-amz-write-offset-bytes";
  var _xawrl = "x-amz-website-redirect-location";
  var _xs = "xsi:type";
  var n0 = "com.amazonaws.s3";
  var _s_registry = TypeRegistry.for(_s);
  var S3ServiceException$ = [-3, _s, "S3ServiceException", 0, [], []];
  _s_registry.registerError(S3ServiceException$, S3ServiceException);
  var n0_registry = TypeRegistry.for(n0);
  var AccessDenied$ = [
    -3,
    n0,
    _AD,
    { [_e]: _c, [_hE]: 403 },
    [],
    []
  ];
  n0_registry.registerError(AccessDenied$, AccessDenied);
  var BucketAlreadyExists$ = [
    -3,
    n0,
    _BAE,
    { [_e]: _c, [_hE]: 409 },
    [],
    []
  ];
  n0_registry.registerError(BucketAlreadyExists$, BucketAlreadyExists);
  var BucketAlreadyOwnedByYou$ = [
    -3,
    n0,
    _BAOBY,
    { [_e]: _c, [_hE]: 409 },
    [],
    []
  ];
  n0_registry.registerError(BucketAlreadyOwnedByYou$, BucketAlreadyOwnedByYou);
  var EncryptionTypeMismatch$ = [
    -3,
    n0,
    _ETM,
    { [_e]: _c, [_hE]: 400 },
    [],
    []
  ];
  n0_registry.registerError(EncryptionTypeMismatch$, EncryptionTypeMismatch);
  var IdempotencyParameterMismatch$ = [
    -3,
    n0,
    _IPM,
    { [_e]: _c, [_hE]: 400 },
    [],
    []
  ];
  n0_registry.registerError(IdempotencyParameterMismatch$, IdempotencyParameterMismatch);
  var InvalidObjectState$ = [
    -3,
    n0,
    _IOS,
    { [_e]: _c, [_hE]: 403 },
    [_SC, _AT],
    [0, 0]
  ];
  n0_registry.registerError(InvalidObjectState$, InvalidObjectState);
  var InvalidRequest$ = [
    -3,
    n0,
    _IR,
    { [_e]: _c, [_hE]: 400 },
    [],
    []
  ];
  n0_registry.registerError(InvalidRequest$, InvalidRequest);
  var InvalidWriteOffset$ = [
    -3,
    n0,
    _IWO,
    { [_e]: _c, [_hE]: 400 },
    [],
    []
  ];
  n0_registry.registerError(InvalidWriteOffset$, InvalidWriteOffset);
  var NoSuchBucket$ = [
    -3,
    n0,
    _NSB,
    { [_e]: _c, [_hE]: 404 },
    [],
    []
  ];
  n0_registry.registerError(NoSuchBucket$, NoSuchBucket);
  var NoSuchKey$ = [
    -3,
    n0,
    _NSK,
    { [_e]: _c, [_hE]: 404 },
    [],
    []
  ];
  n0_registry.registerError(NoSuchKey$, NoSuchKey);
  var NoSuchUpload$ = [
    -3,
    n0,
    _NSU,
    { [_e]: _c, [_hE]: 404 },
    [],
    []
  ];
  n0_registry.registerError(NoSuchUpload$, NoSuchUpload);
  var NotFound$ = [
    -3,
    n0,
    _NF,
    { [_e]: _c },
    [],
    []
  ];
  n0_registry.registerError(NotFound$, NotFound);
  var ObjectAlreadyInActiveTierError$ = [
    -3,
    n0,
    _OAIATE,
    { [_e]: _c, [_hE]: 403 },
    [],
    []
  ];
  n0_registry.registerError(ObjectAlreadyInActiveTierError$, ObjectAlreadyInActiveTierError);
  var ObjectNotInActiveTierError$ = [
    -3,
    n0,
    _ONIATE,
    { [_e]: _c, [_hE]: 403 },
    [],
    []
  ];
  n0_registry.registerError(ObjectNotInActiveTierError$, ObjectNotInActiveTierError);
  var TooManyParts$ = [
    -3,
    n0,
    _TMP,
    { [_e]: _c, [_hE]: 400 },
    [],
    []
  ];
  n0_registry.registerError(TooManyParts$, TooManyParts);
  var errorTypeRegistries = [
    _s_registry,
    n0_registry
  ];
  var CopySourceSSECustomerKey = [0, n0, _CSSSECK, 8, 0];
  var NonEmptyKmsKeyArnString = [0, n0, _NEKKAS, 8, 0];
  var SessionCredentialValue = [0, n0, _SCV, 8, 0];
  var SSECustomerKey = [0, n0, _SSECK, 8, 0];
  var SSEKMSEncryptionContext = [0, n0, _SSEKMSEC, 8, 0];
  var SSEKMSKeyId = [0, n0, _SSEKMSKI, 8, 0];
  var StreamingBlob = [0, n0, _SB, { [_st]: 1 }, 42];
  var AbacStatus$ = [
    3,
    n0,
    _AS,
    0,
    [_S],
    [0]
  ];
  var AbortIncompleteMultipartUpload$ = [
    3,
    n0,
    _AIMU,
    0,
    [_DAI],
    [1]
  ];
  var AbortMultipartUploadOutput$ = [
    3,
    n0,
    _AMUO,
    0,
    [_RC],
    [[0, { [_hH]: _xarc }]]
  ];
  var AbortMultipartUploadRequest$ = [
    3,
    n0,
    _AMUR,
    0,
    [_B, _K, _UI, _RP, _EBO, _IMIT],
    [[0, 1], [0, 1], [0, { [_hQ]: _uI }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [6, { [_hH]: _xaimit }]],
    3
  ];
  var AccelerateConfiguration$ = [
    3,
    n0,
    _AC,
    0,
    [_S],
    [0]
  ];
  var AccessControlPolicy$ = [
    3,
    n0,
    _ACP,
    0,
    [_G, _O],
    [[() => Grants, { [_xN]: _ACL }], () => Owner$]
  ];
  var AccessControlTranslation$ = [
    3,
    n0,
    _ACT,
    0,
    [_O],
    [0],
    1
  ];
  var AnalyticsAndOperator$ = [
    3,
    n0,
    _AAO,
    0,
    [_P, _T],
    [0, [() => TagSet, { [_xF]: 1, [_xN]: _Ta }]]
  ];
  var AnalyticsConfiguration$ = [
    3,
    n0,
    _ACn,
    0,
    [_I, _SCA, _F],
    [0, () => StorageClassAnalysis$, [() => AnalyticsFilter$, 0]],
    2
  ];
  var AnalyticsExportDestination$ = [
    3,
    n0,
    _AED,
    0,
    [_SBD],
    [() => AnalyticsS3BucketDestination$],
    1
  ];
  var AnalyticsS3BucketDestination$ = [
    3,
    n0,
    _ASBD,
    0,
    [_Fo, _B, _BAI, _P],
    [0, 0, 0, 0],
    2
  ];
  var BlockedEncryptionTypes$ = [
    3,
    n0,
    _BET,
    0,
    [_ET],
    [[() => EncryptionTypeList, { [_xF]: 1 }]]
  ];
  var Bucket$ = [
    3,
    n0,
    _B,
    0,
    [_N, _CD, _BR, _BA],
    [0, 4, 0, 0]
  ];
  var BucketInfo$ = [
    3,
    n0,
    _BI,
    0,
    [_DR, _Ty],
    [0, 0]
  ];
  var BucketLifecycleConfiguration$ = [
    3,
    n0,
    _BLC,
    0,
    [_R],
    [[() => LifecycleRules, { [_xF]: 1, [_xN]: _Ru }]],
    1
  ];
  var BucketLoggingStatus$ = [
    3,
    n0,
    _BLS,
    0,
    [_LE],
    [[() => LoggingEnabled$, 0]]
  ];
  var Checksum$ = [
    3,
    n0,
    _C,
    0,
    [_CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _CT],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var CommonPrefix$ = [
    3,
    n0,
    _CP,
    0,
    [_P],
    [0]
  ];
  var CompletedMultipartUpload$ = [
    3,
    n0,
    _CMU,
    0,
    [_Pa],
    [[() => CompletedPartList, { [_xF]: 1, [_xN]: _Par }]]
  ];
  var CompletedPart$ = [
    3,
    n0,
    _CPo,
    0,
    [_ETa, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _PN],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  ];
  var CompleteMultipartUploadOutput$ = [
    3,
    n0,
    _CMUO,
    { [_xN]: _CMUR },
    [_L, _B, _K, _E, _ETa, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _CT, _SSE, _VI, _SSEKMSKI, _BKE, _RC],
    [0, 0, 0, [0, { [_hH]: _xae }], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, { [_hH]: _xasse }], [0, { [_hH]: _xavi }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarc }]]
  ];
  var CompleteMultipartUploadRequest$ = [
    3,
    n0,
    _CMURo,
    0,
    [_B, _K, _UI, _MU, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _CT, _MOS, _RP, _EBO, _IM, _INM, _SSECA, _SSECK, _SSECKMD],
    [[0, 1], [0, 1], [0, { [_hQ]: _uI }], [() => CompletedMultipartUpload$, { [_hP]: 1, [_xN]: _CMUo }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [0, { [_hH]: _xact }], [1, { [_hH]: _xamos }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _IM_ }], [0, { [_hH]: _INM_ }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }]],
    3
  ];
  var Condition$ = [
    3,
    n0,
    _Co,
    0,
    [_HECRE, _KPE],
    [0, 0]
  ];
  var ContinuationEvent$ = [
    3,
    n0,
    _CE,
    0,
    [],
    []
  ];
  var CopyObjectOutput$ = [
    3,
    n0,
    _COO,
    0,
    [_COR, _E, _CSVI, _VI, _SSE, _SSECA, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _RC],
    [[() => CopyObjectResult$, 16], [0, { [_hH]: _xae }], [0, { [_hH]: _xacsvi }], [0, { [_hH]: _xavi }], [0, { [_hH]: _xasse }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarc }]]
  ];
  var CopyObjectRequest$ = [
    3,
    n0,
    _CORo,
    0,
    [_B, _CS, _K, _ACL_, _CC, _CA, _CDo, _CEo, _CL, _CTo, _CSIM, _CSIMS, _CSINM, _CSIUS, _Ex, _GFC, _GR, _GRACP, _GWACP, _IM, _INM, _M, _MD, _TD, _SSE, _SC, _WRL, _SSECA, _SSECK, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _CSSSECA, _CSSSECK, _CSSSECKMD, _RP, _Tag, _OLM, _OLRUD, _OLLHS, _EBO, _ESBO],
    [[0, 1], [0, { [_hH]: _xacs___ }], [0, 1], [0, { [_hH]: _xaa }], [0, { [_hH]: _CC_ }], [0, { [_hH]: _xaca }], [0, { [_hH]: _CD_ }], [0, { [_hH]: _CE_ }], [0, { [_hH]: _CL_ }], [0, { [_hH]: _CT_ }], [0, { [_hH]: _xacsim }], [4, { [_hH]: _xacsims }], [0, { [_hH]: _xacsinm }], [4, { [_hH]: _xacsius }], [4, { [_hH]: _Ex }], [0, { [_hH]: _xagfc }], [0, { [_hH]: _xagr }], [0, { [_hH]: _xagra }], [0, { [_hH]: _xagwa }], [0, { [_hH]: _IM_ }], [0, { [_hH]: _INM_ }], [128 | 0, { [_hPH]: _xam }], [0, { [_hH]: _xamd }], [0, { [_hH]: _xatd }], [0, { [_hH]: _xasse }], [0, { [_hH]: _xasc }], [0, { [_hH]: _xawrl }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xacssseca }], [() => CopySourceSSECustomerKey, { [_hH]: _xacssseck }], [0, { [_hH]: _xacssseckM }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xat }], [0, { [_hH]: _xaolm }], [5, { [_hH]: _xaolrud }], [0, { [_hH]: _xaollh }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xasebo }]],
    3
  ];
  var CopyObjectResult$ = [
    3,
    n0,
    _COR,
    0,
    [_ETa, _LM, _CT, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe],
    [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var CopyPartResult$ = [
    3,
    n0,
    _CPR,
    0,
    [_ETa, _LM, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe],
    [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var CORSConfiguration$ = [
    3,
    n0,
    _CORSC,
    0,
    [_CORSR],
    [[() => CORSRules, { [_xF]: 1, [_xN]: _CORSRu }]],
    1
  ];
  var CORSRule$ = [
    3,
    n0,
    _CORSRu,
    0,
    [_AM, _AO, _ID, _AH, _EH, _MAS],
    [[64 | 0, { [_xF]: 1, [_xN]: _AMl }], [64 | 0, { [_xF]: 1, [_xN]: _AOl }], 0, [64 | 0, { [_xF]: 1, [_xN]: _AHl }], [64 | 0, { [_xF]: 1, [_xN]: _EHx }], 1],
    2
  ];
  var CreateBucketConfiguration$ = [
    3,
    n0,
    _CBC,
    0,
    [_LC, _L, _B, _T],
    [0, () => LocationInfo$, () => BucketInfo$, [() => TagSet, 0]]
  ];
  var CreateBucketMetadataConfigurationRequest$ = [
    3,
    n0,
    _CBMCR,
    0,
    [_B, _MC, _CMDo, _CA, _EBO],
    [[0, 1], [() => MetadataConfiguration$, { [_hP]: 1, [_xN]: _MC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var CreateBucketMetadataTableConfigurationRequest$ = [
    3,
    n0,
    _CBMTCR,
    0,
    [_B, _MTC, _CMDo, _CA, _EBO],
    [[0, 1], [() => MetadataTableConfiguration$, { [_hP]: 1, [_xN]: _MTC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var CreateBucketOutput$ = [
    3,
    n0,
    _CBO,
    0,
    [_L, _BA],
    [[0, { [_hH]: _L }], [0, { [_hH]: _xaba }]]
  ];
  var CreateBucketRequest$ = [
    3,
    n0,
    _CBR,
    0,
    [_B, _ACL_, _CBC, _GFC, _GR, _GRACP, _GW, _GWACP, _OLEFB, _OO, _BN],
    [[0, 1], [0, { [_hH]: _xaa }], [() => CreateBucketConfiguration$, { [_hP]: 1, [_xN]: _CBC }], [0, { [_hH]: _xagfc }], [0, { [_hH]: _xagr }], [0, { [_hH]: _xagra }], [0, { [_hH]: _xagw }], [0, { [_hH]: _xagwa }], [2, { [_hH]: _xabole }], [0, { [_hH]: _xaoo }], [0, { [_hH]: _xabn }]],
    1
  ];
  var CreateMultipartUploadOutput$ = [
    3,
    n0,
    _CMUOr,
    { [_xN]: _IMUR },
    [_ADb, _ARI, _B, _K, _UI, _SSE, _SSECA, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _RC, _CA, _CT],
    [[4, { [_hH]: _xaad }], [0, { [_hH]: _xaari }], [0, { [_xN]: _B }], 0, 0, [0, { [_hH]: _xasse }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarc }], [0, { [_hH]: _xaca }], [0, { [_hH]: _xact }]]
  ];
  var CreateMultipartUploadRequest$ = [
    3,
    n0,
    _CMURr,
    0,
    [_B, _K, _ACL_, _CC, _CDo, _CEo, _CL, _CTo, _Ex, _GFC, _GR, _GRACP, _GWACP, _M, _SSE, _SC, _WRL, _SSECA, _SSECK, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _RP, _Tag, _OLM, _OLRUD, _OLLHS, _EBO, _CA, _CT],
    [[0, 1], [0, 1], [0, { [_hH]: _xaa }], [0, { [_hH]: _CC_ }], [0, { [_hH]: _CD_ }], [0, { [_hH]: _CE_ }], [0, { [_hH]: _CL_ }], [0, { [_hH]: _CT_ }], [4, { [_hH]: _Ex }], [0, { [_hH]: _xagfc }], [0, { [_hH]: _xagr }], [0, { [_hH]: _xagra }], [0, { [_hH]: _xagwa }], [128 | 0, { [_hPH]: _xam }], [0, { [_hH]: _xasse }], [0, { [_hH]: _xasc }], [0, { [_hH]: _xawrl }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xat }], [0, { [_hH]: _xaolm }], [5, { [_hH]: _xaolrud }], [0, { [_hH]: _xaollh }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xaca }], [0, { [_hH]: _xact }]],
    2
  ];
  var CreateSessionOutput$ = [
    3,
    n0,
    _CSO,
    { [_xN]: _CSR },
    [_Cr, _SSE, _SSEKMSKI, _SSEKMSEC, _BKE],
    [[() => SessionCredentials$, { [_xN]: _Cr }], [0, { [_hH]: _xasse }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }]],
    1
  ];
  var CreateSessionRequest$ = [
    3,
    n0,
    _CSRr,
    0,
    [_B, _SM, _SSE, _SSEKMSKI, _SSEKMSEC, _BKE],
    [[0, 1], [0, { [_hH]: _xacsm }], [0, { [_hH]: _xasse }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }]],
    1
  ];
  var CSVInput$ = [
    3,
    n0,
    _CSVIn,
    0,
    [_FHI, _Com, _QEC, _RD, _FD, _QC, _AQRD],
    [0, 0, 0, 0, 0, 0, 2]
  ];
  var CSVOutput$ = [
    3,
    n0,
    _CSVO,
    0,
    [_QF, _QEC, _RD, _FD, _QC],
    [0, 0, 0, 0, 0]
  ];
  var DefaultRetention$ = [
    3,
    n0,
    _DRe,
    0,
    [_Mo, _D, _Y],
    [0, 1, 1]
  ];
  var Delete$ = [
    3,
    n0,
    _De,
    0,
    [_Ob, _Q],
    [[() => ObjectIdentifierList, { [_xF]: 1, [_xN]: _Obj }], 2],
    1
  ];
  var DeleteBucketAnalyticsConfigurationRequest$ = [
    3,
    n0,
    _DBACR,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var DeleteBucketCorsRequest$ = [
    3,
    n0,
    _DBCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketEncryptionRequest$ = [
    3,
    n0,
    _DBER,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketIntelligentTieringConfigurationRequest$ = [
    3,
    n0,
    _DBITCR,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var DeleteBucketInventoryConfigurationRequest$ = [
    3,
    n0,
    _DBICR,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var DeleteBucketLifecycleRequest$ = [
    3,
    n0,
    _DBLR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketMetadataConfigurationRequest$ = [
    3,
    n0,
    _DBMCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketMetadataTableConfigurationRequest$ = [
    3,
    n0,
    _DBMTCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketMetricsConfigurationRequest$ = [
    3,
    n0,
    _DBMCRe,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var DeleteBucketOwnershipControlsRequest$ = [
    3,
    n0,
    _DBOCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketPolicyRequest$ = [
    3,
    n0,
    _DBPR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketReplicationRequest$ = [
    3,
    n0,
    _DBRR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketRequest$ = [
    3,
    n0,
    _DBR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketTaggingRequest$ = [
    3,
    n0,
    _DBTR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeleteBucketWebsiteRequest$ = [
    3,
    n0,
    _DBWR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var DeletedObject$ = [
    3,
    n0,
    _DO,
    0,
    [_K, _VI, _DM, _DMVI],
    [0, 0, 2, 0]
  ];
  var DeleteMarkerEntry$ = [
    3,
    n0,
    _DME,
    0,
    [_O, _K, _VI, _IL, _LM],
    [() => Owner$, 0, 0, 2, 4]
  ];
  var DeleteMarkerReplication$ = [
    3,
    n0,
    _DMR,
    0,
    [_S],
    [0]
  ];
  var DeleteObjectOutput$ = [
    3,
    n0,
    _DOO,
    0,
    [_DM, _VI, _RC],
    [[2, { [_hH]: _xadm }], [0, { [_hH]: _xavi }], [0, { [_hH]: _xarc }]]
  ];
  var DeleteObjectRequest$ = [
    3,
    n0,
    _DOR,
    0,
    [_B, _K, _MFA, _VI, _RP, _BGR, _EBO, _IM, _IMLMT, _IMS],
    [[0, 1], [0, 1], [0, { [_hH]: _xam_ }], [0, { [_hQ]: _vI }], [0, { [_hH]: _xarp }], [2, { [_hH]: _xabgr }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _IM_ }], [6, { [_hH]: _xaimlmt }], [1, { [_hH]: _xaims }]],
    2
  ];
  var DeleteObjectsOutput$ = [
    3,
    n0,
    _DOOe,
    { [_xN]: _DRel },
    [_Del, _RC, _Er],
    [[() => DeletedObjects, { [_xF]: 1 }], [0, { [_hH]: _xarc }], [() => Errors, { [_xF]: 1, [_xN]: _Err }]]
  ];
  var DeleteObjectsRequest$ = [
    3,
    n0,
    _DORe,
    0,
    [_B, _De, _MFA, _RP, _BGR, _EBO, _CA],
    [[0, 1], [() => Delete$, { [_hP]: 1, [_xN]: _De }], [0, { [_hH]: _xam_ }], [0, { [_hH]: _xarp }], [2, { [_hH]: _xabgr }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xasca }]],
    2
  ];
  var DeleteObjectTaggingOutput$ = [
    3,
    n0,
    _DOTO,
    0,
    [_VI],
    [[0, { [_hH]: _xavi }]]
  ];
  var DeleteObjectTaggingRequest$ = [
    3,
    n0,
    _DOTR,
    0,
    [_B, _K, _VI, _EBO],
    [[0, 1], [0, 1], [0, { [_hQ]: _vI }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var DeletePublicAccessBlockRequest$ = [
    3,
    n0,
    _DPABR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var Destination$ = [
    3,
    n0,
    _Des,
    0,
    [_B, _A, _SC, _ACT, _EC, _RT, _Me],
    [0, 0, 0, () => AccessControlTranslation$, () => EncryptionConfiguration$, () => ReplicationTime$, () => Metrics$],
    1
  ];
  var DestinationResult$ = [
    3,
    n0,
    _DRes,
    0,
    [_TBT, _TBA, _TN],
    [0, 0, 0]
  ];
  var Encryption$ = [
    3,
    n0,
    _En,
    0,
    [_ET, _KMSKI, _KMSC],
    [0, [() => SSEKMSKeyId, 0], 0],
    1
  ];
  var EncryptionConfiguration$ = [
    3,
    n0,
    _EC,
    0,
    [_RKKID],
    [0]
  ];
  var EndEvent$ = [
    3,
    n0,
    _EE,
    0,
    [],
    []
  ];
  var _Error$ = [
    3,
    n0,
    _Err,
    0,
    [_K, _VI, _Cod, _Mes],
    [0, 0, 0, 0]
  ];
  var ErrorDetails$ = [
    3,
    n0,
    _ED,
    0,
    [_ECr, _EM],
    [0, 0]
  ];
  var ErrorDocument$ = [
    3,
    n0,
    _EDr,
    0,
    [_K],
    [0],
    1
  ];
  var EventBridgeConfiguration$ = [
    3,
    n0,
    _EBC,
    0,
    [],
    []
  ];
  var ExistingObjectReplication$ = [
    3,
    n0,
    _EOR,
    0,
    [_S],
    [0],
    1
  ];
  var FilterRule$ = [
    3,
    n0,
    _FR,
    0,
    [_N, _V],
    [0, 0]
  ];
  var GetBucketAbacOutput$ = [
    3,
    n0,
    _GBAO,
    0,
    [_AS],
    [[() => AbacStatus$, 16]]
  ];
  var GetBucketAbacRequest$ = [
    3,
    n0,
    _GBAR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketAccelerateConfigurationOutput$ = [
    3,
    n0,
    _GBACO,
    { [_xN]: _AC },
    [_S, _RC],
    [0, [0, { [_hH]: _xarc }]]
  ];
  var GetBucketAccelerateConfigurationRequest$ = [
    3,
    n0,
    _GBACR,
    0,
    [_B, _EBO, _RP],
    [[0, 1], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xarp }]],
    1
  ];
  var GetBucketAclOutput$ = [
    3,
    n0,
    _GBAOe,
    { [_xN]: _ACP },
    [_O, _G],
    [() => Owner$, [() => Grants, { [_xN]: _ACL }]]
  ];
  var GetBucketAclRequest$ = [
    3,
    n0,
    _GBARe,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketAnalyticsConfigurationOutput$ = [
    3,
    n0,
    _GBACOe,
    0,
    [_ACn],
    [[() => AnalyticsConfiguration$, 16]]
  ];
  var GetBucketAnalyticsConfigurationRequest$ = [
    3,
    n0,
    _GBACRe,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetBucketCorsOutput$ = [
    3,
    n0,
    _GBCO,
    { [_xN]: _CORSC },
    [_CORSR],
    [[() => CORSRules, { [_xF]: 1, [_xN]: _CORSRu }]]
  ];
  var GetBucketCorsRequest$ = [
    3,
    n0,
    _GBCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketEncryptionOutput$ = [
    3,
    n0,
    _GBEO,
    0,
    [_SSEC],
    [[() => ServerSideEncryptionConfiguration$, 16]]
  ];
  var GetBucketEncryptionRequest$ = [
    3,
    n0,
    _GBER,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketIntelligentTieringConfigurationOutput$ = [
    3,
    n0,
    _GBITCO,
    0,
    [_ITC],
    [[() => IntelligentTieringConfiguration$, 16]]
  ];
  var GetBucketIntelligentTieringConfigurationRequest$ = [
    3,
    n0,
    _GBITCR,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetBucketInventoryConfigurationOutput$ = [
    3,
    n0,
    _GBICO,
    0,
    [_IC],
    [[() => InventoryConfiguration$, 16]]
  ];
  var GetBucketInventoryConfigurationRequest$ = [
    3,
    n0,
    _GBICR,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetBucketLifecycleConfigurationOutput$ = [
    3,
    n0,
    _GBLCO,
    { [_xN]: _LCi },
    [_R, _TDMOS],
    [[() => LifecycleRules, { [_xF]: 1, [_xN]: _Ru }], [0, { [_hH]: _xatdmos }]]
  ];
  var GetBucketLifecycleConfigurationRequest$ = [
    3,
    n0,
    _GBLCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketLocationOutput$ = [
    3,
    n0,
    _GBLO,
    { [_xN]: _LC },
    [_LC],
    [0]
  ];
  var GetBucketLocationRequest$ = [
    3,
    n0,
    _GBLR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketLoggingOutput$ = [
    3,
    n0,
    _GBLOe,
    { [_xN]: _BLS },
    [_LE],
    [[() => LoggingEnabled$, 0]]
  ];
  var GetBucketLoggingRequest$ = [
    3,
    n0,
    _GBLRe,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketMetadataConfigurationOutput$ = [
    3,
    n0,
    _GBMCO,
    0,
    [_GBMCR],
    [[() => GetBucketMetadataConfigurationResult$, 16]]
  ];
  var GetBucketMetadataConfigurationRequest$ = [
    3,
    n0,
    _GBMCRe,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketMetadataConfigurationResult$ = [
    3,
    n0,
    _GBMCR,
    0,
    [_MCR],
    [() => MetadataConfigurationResult$],
    1
  ];
  var GetBucketMetadataTableConfigurationOutput$ = [
    3,
    n0,
    _GBMTCO,
    0,
    [_GBMTCR],
    [[() => GetBucketMetadataTableConfigurationResult$, 16]]
  ];
  var GetBucketMetadataTableConfigurationRequest$ = [
    3,
    n0,
    _GBMTCRe,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketMetadataTableConfigurationResult$ = [
    3,
    n0,
    _GBMTCR,
    0,
    [_MTCR, _S, _Err],
    [() => MetadataTableConfigurationResult$, 0, () => ErrorDetails$],
    2
  ];
  var GetBucketMetricsConfigurationOutput$ = [
    3,
    n0,
    _GBMCOe,
    0,
    [_MCe],
    [[() => MetricsConfiguration$, 16]]
  ];
  var GetBucketMetricsConfigurationRequest$ = [
    3,
    n0,
    _GBMCRet,
    0,
    [_B, _I, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetBucketNotificationConfigurationRequest$ = [
    3,
    n0,
    _GBNCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketOwnershipControlsOutput$ = [
    3,
    n0,
    _GBOCO,
    0,
    [_OC],
    [[() => OwnershipControls$, 16]]
  ];
  var GetBucketOwnershipControlsRequest$ = [
    3,
    n0,
    _GBOCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketPolicyOutput$ = [
    3,
    n0,
    _GBPO,
    0,
    [_Po],
    [[0, 16]]
  ];
  var GetBucketPolicyRequest$ = [
    3,
    n0,
    _GBPR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketPolicyStatusOutput$ = [
    3,
    n0,
    _GBPSO,
    0,
    [_PS],
    [[() => PolicyStatus$, 16]]
  ];
  var GetBucketPolicyStatusRequest$ = [
    3,
    n0,
    _GBPSR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketReplicationOutput$ = [
    3,
    n0,
    _GBRO,
    0,
    [_RCe],
    [[() => ReplicationConfiguration$, 16]]
  ];
  var GetBucketReplicationRequest$ = [
    3,
    n0,
    _GBRR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketRequestPaymentOutput$ = [
    3,
    n0,
    _GBRPO,
    { [_xN]: _RPC },
    [_Pay],
    [0]
  ];
  var GetBucketRequestPaymentRequest$ = [
    3,
    n0,
    _GBRPR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketTaggingOutput$ = [
    3,
    n0,
    _GBTO,
    { [_xN]: _Tag },
    [_TS],
    [[() => TagSet, 0]],
    1
  ];
  var GetBucketTaggingRequest$ = [
    3,
    n0,
    _GBTR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketVersioningOutput$ = [
    3,
    n0,
    _GBVO,
    { [_xN]: _VC },
    [_S, _MFAD],
    [0, [0, { [_xN]: _MDf }]]
  ];
  var GetBucketVersioningRequest$ = [
    3,
    n0,
    _GBVR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetBucketWebsiteOutput$ = [
    3,
    n0,
    _GBWO,
    { [_xN]: _WC },
    [_RART, _IDn, _EDr, _RR],
    [() => RedirectAllRequestsTo$, () => IndexDocument$, () => ErrorDocument$, [() => RoutingRules, 0]]
  ];
  var GetBucketWebsiteRequest$ = [
    3,
    n0,
    _GBWR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetObjectAclOutput$ = [
    3,
    n0,
    _GOAO,
    { [_xN]: _ACP },
    [_O, _G, _RC],
    [() => Owner$, [() => Grants, { [_xN]: _ACL }], [0, { [_hH]: _xarc }]]
  ];
  var GetObjectAclRequest$ = [
    3,
    n0,
    _GOAR,
    0,
    [_B, _K, _VI, _RP, _EBO],
    [[0, 1], [0, 1], [0, { [_hQ]: _vI }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetObjectAttributesOutput$ = [
    3,
    n0,
    _GOAOe,
    { [_xN]: _GOARe },
    [_DM, _LM, _VI, _RC, _ETa, _C, _OP, _SC, _OS],
    [[2, { [_hH]: _xadm }], [4, { [_hH]: _LM_ }], [0, { [_hH]: _xavi }], [0, { [_hH]: _xarc }], 0, () => Checksum$, [() => GetObjectAttributesParts$, 0], 0, 1]
  ];
  var GetObjectAttributesParts$ = [
    3,
    n0,
    _GOAP,
    0,
    [_TPC, _PNM, _NPNM, _MP, _IT, _Pa],
    [[1, { [_xN]: _PC }], 0, 0, 1, 2, [() => PartsList, { [_xF]: 1, [_xN]: _Par }]]
  ];
  var GetObjectAttributesRequest$ = [
    3,
    n0,
    _GOARet,
    0,
    [_B, _K, _OA, _VI, _MP, _PNM, _SSECA, _SSECK, _SSECKMD, _RP, _EBO],
    [[0, 1], [0, 1], [64 | 0, { [_hH]: _xaoa }], [0, { [_hQ]: _vI }], [1, { [_hH]: _xamp }], [0, { [_hH]: _xapnm }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }]],
    3
  ];
  var GetObjectLegalHoldOutput$ = [
    3,
    n0,
    _GOLHO,
    0,
    [_LH],
    [[() => ObjectLockLegalHold$, { [_hP]: 1, [_xN]: _LH }]]
  ];
  var GetObjectLegalHoldRequest$ = [
    3,
    n0,
    _GOLHR,
    0,
    [_B, _K, _VI, _RP, _EBO],
    [[0, 1], [0, 1], [0, { [_hQ]: _vI }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetObjectLockConfigurationOutput$ = [
    3,
    n0,
    _GOLCO,
    0,
    [_OLC],
    [[() => ObjectLockConfiguration$, 16]]
  ];
  var GetObjectLockConfigurationRequest$ = [
    3,
    n0,
    _GOLCR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GetObjectOutput$ = [
    3,
    n0,
    _GOO,
    0,
    [_Bo, _DM, _AR, _E, _Re, _LM, _CLo, _ETa, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _CT, _MM, _VI, _CC, _CDo, _CEo, _CL, _CR, _CTo, _Ex, _ES, _WRL, _SSE, _M, _SSECA, _SSECKMD, _SSEKMSKI, _BKE, _SC, _RC, _RS, _PC, _TC, _OLM, _OLRUD, _OLLHS],
    [[() => StreamingBlob, 16], [2, { [_hH]: _xadm }], [0, { [_hH]: _ar }], [0, { [_hH]: _xae }], [0, { [_hH]: _xar }], [4, { [_hH]: _LM_ }], [1, { [_hH]: _CL__ }], [0, { [_hH]: _ETa }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [0, { [_hH]: _xact }], [1, { [_hH]: _xamm }], [0, { [_hH]: _xavi }], [0, { [_hH]: _CC_ }], [0, { [_hH]: _CD_ }], [0, { [_hH]: _CE_ }], [0, { [_hH]: _CL_ }], [0, { [_hH]: _CR_ }], [0, { [_hH]: _CT_ }], [4, { [_hH]: _Ex }], [0, { [_hH]: _ES }], [0, { [_hH]: _xawrl }], [0, { [_hH]: _xasse }], [128 | 0, { [_hPH]: _xam }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xasc }], [0, { [_hH]: _xarc }], [0, { [_hH]: _xars }], [1, { [_hH]: _xampc }], [1, { [_hH]: _xatc }], [0, { [_hH]: _xaolm }], [5, { [_hH]: _xaolrud }], [0, { [_hH]: _xaollh }]]
  ];
  var GetObjectRequest$ = [
    3,
    n0,
    _GOR,
    0,
    [_B, _K, _IM, _IMSf, _INM, _IUS, _Ra, _RCC, _RCD, _RCE, _RCL, _RCT, _RE, _VI, _SSECA, _SSECK, _SSECKMD, _RP, _PN, _EBO, _CMh],
    [[0, 1], [0, 1], [0, { [_hH]: _IM_ }], [4, { [_hH]: _IMS_ }], [0, { [_hH]: _INM_ }], [4, { [_hH]: _IUS_ }], [0, { [_hH]: _Ra }], [0, { [_hQ]: _rcc }], [0, { [_hQ]: _rcd }], [0, { [_hQ]: _rce }], [0, { [_hQ]: _rcl }], [0, { [_hQ]: _rct }], [6, { [_hQ]: _re }], [0, { [_hQ]: _vI }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [0, { [_hH]: _xarp }], [1, { [_hQ]: _pN }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xacm_ }]],
    2
  ];
  var GetObjectRetentionOutput$ = [
    3,
    n0,
    _GORO,
    0,
    [_Ret],
    [[() => ObjectLockRetention$, { [_hP]: 1, [_xN]: _Ret }]]
  ];
  var GetObjectRetentionRequest$ = [
    3,
    n0,
    _GORR,
    0,
    [_B, _K, _VI, _RP, _EBO],
    [[0, 1], [0, 1], [0, { [_hQ]: _vI }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetObjectTaggingOutput$ = [
    3,
    n0,
    _GOTO,
    { [_xN]: _Tag },
    [_TS, _VI],
    [[() => TagSet, 0], [0, { [_hH]: _xavi }]],
    1
  ];
  var GetObjectTaggingRequest$ = [
    3,
    n0,
    _GOTR,
    0,
    [_B, _K, _VI, _EBO, _RP],
    [[0, 1], [0, 1], [0, { [_hQ]: _vI }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xarp }]],
    2
  ];
  var GetObjectTorrentOutput$ = [
    3,
    n0,
    _GOTOe,
    0,
    [_Bo, _RC],
    [[() => StreamingBlob, 16], [0, { [_hH]: _xarc }]]
  ];
  var GetObjectTorrentRequest$ = [
    3,
    n0,
    _GOTRe,
    0,
    [_B, _K, _RP, _EBO],
    [[0, 1], [0, 1], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var GetPublicAccessBlockOutput$ = [
    3,
    n0,
    _GPABO,
    0,
    [_PABC],
    [[() => PublicAccessBlockConfiguration$, 16]]
  ];
  var GetPublicAccessBlockRequest$ = [
    3,
    n0,
    _GPABR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var GlacierJobParameters$ = [
    3,
    n0,
    _GJP,
    0,
    [_Ti],
    [0],
    1
  ];
  var Grant$ = [
    3,
    n0,
    _Gr,
    0,
    [_Gra, _Pe],
    [[() => Grantee$, { [_xNm]: [_x, _hi] }], 0]
  ];
  var Grantee$ = [
    3,
    n0,
    _Gra,
    0,
    [_Ty, _DN, _EA, _ID, _URI],
    [[0, { [_xA]: 1, [_xN]: _xs }], 0, 0, 0, 0],
    1
  ];
  var HeadBucketOutput$ = [
    3,
    n0,
    _HBO,
    0,
    [_BA, _BLT, _BLN, _BR, _APA],
    [[0, { [_hH]: _xaba }], [0, { [_hH]: _xablt }], [0, { [_hH]: _xabln }], [0, { [_hH]: _xabr }], [2, { [_hH]: _xaapa }]]
  ];
  var HeadBucketRequest$ = [
    3,
    n0,
    _HBR,
    0,
    [_B, _EBO],
    [[0, 1], [0, { [_hH]: _xaebo }]],
    1
  ];
  var HeadObjectOutput$ = [
    3,
    n0,
    _HOO,
    0,
    [_DM, _AR, _E, _Re, _ASr, _LM, _CLo, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _CT, _ETa, _MM, _VI, _CC, _CDo, _CEo, _CL, _CTo, _CR, _Ex, _ES, _WRL, _SSE, _M, _SSECA, _SSECKMD, _SSEKMSKI, _BKE, _SC, _RC, _RS, _PC, _TC, _OLM, _OLRUD, _OLLHS],
    [[2, { [_hH]: _xadm }], [0, { [_hH]: _ar }], [0, { [_hH]: _xae }], [0, { [_hH]: _xar }], [0, { [_hH]: _xaas }], [4, { [_hH]: _LM_ }], [1, { [_hH]: _CL__ }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [0, { [_hH]: _xact }], [0, { [_hH]: _ETa }], [1, { [_hH]: _xamm }], [0, { [_hH]: _xavi }], [0, { [_hH]: _CC_ }], [0, { [_hH]: _CD_ }], [0, { [_hH]: _CE_ }], [0, { [_hH]: _CL_ }], [0, { [_hH]: _CT_ }], [0, { [_hH]: _CR_ }], [4, { [_hH]: _Ex }], [0, { [_hH]: _ES }], [0, { [_hH]: _xawrl }], [0, { [_hH]: _xasse }], [128 | 0, { [_hPH]: _xam }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xasc }], [0, { [_hH]: _xarc }], [0, { [_hH]: _xars }], [1, { [_hH]: _xampc }], [1, { [_hH]: _xatc }], [0, { [_hH]: _xaolm }], [5, { [_hH]: _xaolrud }], [0, { [_hH]: _xaollh }]]
  ];
  var HeadObjectRequest$ = [
    3,
    n0,
    _HOR,
    0,
    [_B, _K, _IM, _IMSf, _INM, _IUS, _Ra, _RCC, _RCD, _RCE, _RCL, _RCT, _RE, _VI, _SSECA, _SSECK, _SSECKMD, _RP, _PN, _EBO, _CMh],
    [[0, 1], [0, 1], [0, { [_hH]: _IM_ }], [4, { [_hH]: _IMS_ }], [0, { [_hH]: _INM_ }], [4, { [_hH]: _IUS_ }], [0, { [_hH]: _Ra }], [0, { [_hQ]: _rcc }], [0, { [_hQ]: _rcd }], [0, { [_hQ]: _rce }], [0, { [_hQ]: _rcl }], [0, { [_hQ]: _rct }], [6, { [_hQ]: _re }], [0, { [_hQ]: _vI }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [0, { [_hH]: _xarp }], [1, { [_hQ]: _pN }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xacm_ }]],
    2
  ];
  var IndexDocument$ = [
    3,
    n0,
    _IDn,
    0,
    [_Su],
    [0],
    1
  ];
  var Initiator$ = [
    3,
    n0,
    _In,
    0,
    [_ID, _DN],
    [0, 0]
  ];
  var InputSerialization$ = [
    3,
    n0,
    _IS,
    0,
    [_CSV, _CTom, _JSON, _Parq],
    [() => CSVInput$, 0, () => JSONInput$, () => ParquetInput$]
  ];
  var IntelligentTieringAndOperator$ = [
    3,
    n0,
    _ITAO,
    0,
    [_P, _T],
    [0, [() => TagSet, { [_xF]: 1, [_xN]: _Ta }]]
  ];
  var IntelligentTieringConfiguration$ = [
    3,
    n0,
    _ITC,
    0,
    [_I, _S, _Tie, _F],
    [0, 0, [() => TieringList, { [_xF]: 1, [_xN]: _Tier }], [() => IntelligentTieringFilter$, 0]],
    3
  ];
  var IntelligentTieringFilter$ = [
    3,
    n0,
    _ITF,
    0,
    [_P, _Ta, _An],
    [0, () => Tag$, [() => IntelligentTieringAndOperator$, 0]]
  ];
  var InventoryConfiguration$ = [
    3,
    n0,
    _IC,
    0,
    [_Des, _IE, _I, _IOV, _Sc, _F, _OF],
    [[() => InventoryDestination$, 0], 2, 0, 0, () => InventorySchedule$, () => InventoryFilter$, [() => InventoryOptionalFields, 0]],
    5
  ];
  var InventoryDestination$ = [
    3,
    n0,
    _IDnv,
    0,
    [_SBD],
    [[() => InventoryS3BucketDestination$, 0]],
    1
  ];
  var InventoryEncryption$ = [
    3,
    n0,
    _IEn,
    0,
    [_SSES, _SSEKMS],
    [[() => SSES3$, { [_xN]: _SS }], [() => SSEKMS$, { [_xN]: _SK }]]
  ];
  var InventoryFilter$ = [
    3,
    n0,
    _IF,
    0,
    [_P],
    [0],
    1
  ];
  var InventoryS3BucketDestination$ = [
    3,
    n0,
    _ISBD,
    0,
    [_B, _Fo, _AI, _P, _En],
    [0, 0, 0, 0, [() => InventoryEncryption$, 0]],
    2
  ];
  var InventorySchedule$ = [
    3,
    n0,
    _ISn,
    0,
    [_Fr],
    [0],
    1
  ];
  var InventoryTableConfiguration$ = [
    3,
    n0,
    _ITCn,
    0,
    [_CSo, _EC],
    [0, () => MetadataTableEncryptionConfiguration$],
    1
  ];
  var InventoryTableConfigurationResult$ = [
    3,
    n0,
    _ITCR,
    0,
    [_CSo, _TSa, _Err, _TNa, _TA],
    [0, 0, () => ErrorDetails$, 0, 0],
    1
  ];
  var InventoryTableConfigurationUpdates$ = [
    3,
    n0,
    _ITCU,
    0,
    [_CSo, _EC],
    [0, () => MetadataTableEncryptionConfiguration$],
    1
  ];
  var JournalTableConfiguration$ = [
    3,
    n0,
    _JTC,
    0,
    [_REe, _EC],
    [() => RecordExpiration$, () => MetadataTableEncryptionConfiguration$],
    1
  ];
  var JournalTableConfigurationResult$ = [
    3,
    n0,
    _JTCR,
    0,
    [_TSa, _TNa, _REe, _Err, _TA],
    [0, 0, () => RecordExpiration$, () => ErrorDetails$, 0],
    3
  ];
  var JournalTableConfigurationUpdates$ = [
    3,
    n0,
    _JTCU,
    0,
    [_REe],
    [() => RecordExpiration$],
    1
  ];
  var JSONInput$ = [
    3,
    n0,
    _JSONI,
    0,
    [_Ty],
    [0]
  ];
  var JSONOutput$ = [
    3,
    n0,
    _JSONO,
    0,
    [_RD],
    [0]
  ];
  var LambdaFunctionConfiguration$ = [
    3,
    n0,
    _LFC,
    0,
    [_LFA, _Ev, _I, _F],
    [[0, { [_xN]: _CF }], [64 | 0, { [_xF]: 1, [_xN]: _Eve }], 0, [() => NotificationConfigurationFilter$, 0]],
    2
  ];
  var LifecycleExpiration$ = [
    3,
    n0,
    _LEi,
    0,
    [_Da, _D, _EODM],
    [5, 1, 2]
  ];
  var LifecycleRule$ = [
    3,
    n0,
    _LR,
    0,
    [_S, _E, _ID, _P, _F, _Tr, _NVT, _NVE, _AIMU],
    [0, () => LifecycleExpiration$, 0, 0, [() => LifecycleRuleFilter$, 0], [() => TransitionList, { [_xF]: 1, [_xN]: _Tra }], [() => NoncurrentVersionTransitionList, { [_xF]: 1, [_xN]: _NVTo }], () => NoncurrentVersionExpiration$, () => AbortIncompleteMultipartUpload$],
    1
  ];
  var LifecycleRuleAndOperator$ = [
    3,
    n0,
    _LRAO,
    0,
    [_P, _T, _OSGT, _OSLT],
    [0, [() => TagSet, { [_xF]: 1, [_xN]: _Ta }], 1, 1]
  ];
  var LifecycleRuleFilter$ = [
    3,
    n0,
    _LRF,
    0,
    [_P, _Ta, _OSGT, _OSLT, _An],
    [0, () => Tag$, 1, 1, [() => LifecycleRuleAndOperator$, 0]]
  ];
  var ListBucketAnalyticsConfigurationsOutput$ = [
    3,
    n0,
    _LBACO,
    { [_xN]: _LBACR },
    [_IT, _CTon, _NCT, _ACLn],
    [2, 0, 0, [() => AnalyticsConfigurationList, { [_xF]: 1, [_xN]: _ACn }]]
  ];
  var ListBucketAnalyticsConfigurationsRequest$ = [
    3,
    n0,
    _LBACRi,
    0,
    [_B, _CTon, _EBO],
    [[0, 1], [0, { [_hQ]: _ct }], [0, { [_hH]: _xaebo }]],
    1
  ];
  var ListBucketIntelligentTieringConfigurationsOutput$ = [
    3,
    n0,
    _LBITCO,
    0,
    [_IT, _CTon, _NCT, _ITCL],
    [2, 0, 0, [() => IntelligentTieringConfigurationList, { [_xF]: 1, [_xN]: _ITC }]]
  ];
  var ListBucketIntelligentTieringConfigurationsRequest$ = [
    3,
    n0,
    _LBITCR,
    0,
    [_B, _CTon, _EBO],
    [[0, 1], [0, { [_hQ]: _ct }], [0, { [_hH]: _xaebo }]],
    1
  ];
  var ListBucketInventoryConfigurationsOutput$ = [
    3,
    n0,
    _LBICO,
    { [_xN]: _LICR },
    [_CTon, _ICL, _IT, _NCT],
    [0, [() => InventoryConfigurationList, { [_xF]: 1, [_xN]: _IC }], 2, 0]
  ];
  var ListBucketInventoryConfigurationsRequest$ = [
    3,
    n0,
    _LBICR,
    0,
    [_B, _CTon, _EBO],
    [[0, 1], [0, { [_hQ]: _ct }], [0, { [_hH]: _xaebo }]],
    1
  ];
  var ListBucketMetricsConfigurationsOutput$ = [
    3,
    n0,
    _LBMCO,
    { [_xN]: _LMCR },
    [_IT, _CTon, _NCT, _MCL],
    [2, 0, 0, [() => MetricsConfigurationList, { [_xF]: 1, [_xN]: _MCe }]]
  ];
  var ListBucketMetricsConfigurationsRequest$ = [
    3,
    n0,
    _LBMCR,
    0,
    [_B, _CTon, _EBO],
    [[0, 1], [0, { [_hQ]: _ct }], [0, { [_hH]: _xaebo }]],
    1
  ];
  var ListBucketsOutput$ = [
    3,
    n0,
    _LBO,
    { [_xN]: _LAMBR },
    [_Bu, _O, _CTon, _P],
    [[() => Buckets, 0], () => Owner$, 0, 0]
  ];
  var ListBucketsRequest$ = [
    3,
    n0,
    _LBR,
    0,
    [_MB, _CTon, _P, _BR],
    [[1, { [_hQ]: _mb }], [0, { [_hQ]: _ct }], [0, { [_hQ]: _p }], [0, { [_hQ]: _br }]]
  ];
  var ListDirectoryBucketsOutput$ = [
    3,
    n0,
    _LDBO,
    { [_xN]: _LAMDBR },
    [_Bu, _CTon],
    [[() => Buckets, 0], 0]
  ];
  var ListDirectoryBucketsRequest$ = [
    3,
    n0,
    _LDBR,
    0,
    [_CTon, _MDB],
    [[0, { [_hQ]: _ct }], [1, { [_hQ]: _mdb }]]
  ];
  var ListMultipartUploadsOutput$ = [
    3,
    n0,
    _LMUO,
    { [_xN]: _LMUR },
    [_B, _KM, _UIM, _NKM, _P, _Deli, _NUIM, _MUa, _IT, _U, _CPom, _ETn, _RC],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, [() => MultipartUploadList, { [_xF]: 1, [_xN]: _Up }], [() => CommonPrefixList, { [_xF]: 1 }], 0, [0, { [_hH]: _xarc }]]
  ];
  var ListMultipartUploadsRequest$ = [
    3,
    n0,
    _LMURi,
    0,
    [_B, _Deli, _ETn, _KM, _MUa, _P, _UIM, _EBO, _RP],
    [[0, 1], [0, { [_hQ]: _d }], [0, { [_hQ]: _et }], [0, { [_hQ]: _km }], [1, { [_hQ]: _mu }], [0, { [_hQ]: _p }], [0, { [_hQ]: _uim }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xarp }]],
    1
  ];
  var ListObjectsOutput$ = [
    3,
    n0,
    _LOO,
    { [_xN]: _LBRi },
    [_IT, _Ma, _NM, _Con, _N, _P, _Deli, _MK, _CPom, _ETn, _RC],
    [2, 0, 0, [() => ObjectList, { [_xF]: 1 }], 0, 0, 0, 1, [() => CommonPrefixList, { [_xF]: 1 }], 0, [0, { [_hH]: _xarc }]]
  ];
  var ListObjectsRequest$ = [
    3,
    n0,
    _LOR,
    0,
    [_B, _Deli, _ETn, _Ma, _MK, _P, _RP, _EBO, _OOA],
    [[0, 1], [0, { [_hQ]: _d }], [0, { [_hQ]: _et }], [0, { [_hQ]: _m }], [1, { [_hQ]: _mk }], [0, { [_hQ]: _p }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [64 | 0, { [_hH]: _xaooa }]],
    1
  ];
  var ListObjectsV2Output$ = [
    3,
    n0,
    _LOVO,
    { [_xN]: _LBRi },
    [_IT, _Con, _N, _P, _Deli, _MK, _CPom, _ETn, _KC, _CTon, _NCT, _SA, _RC],
    [2, [() => ObjectList, { [_xF]: 1 }], 0, 0, 0, 1, [() => CommonPrefixList, { [_xF]: 1 }], 0, 1, 0, 0, 0, [0, { [_hH]: _xarc }]]
  ];
  var ListObjectsV2Request$ = [
    3,
    n0,
    _LOVR,
    0,
    [_B, _Deli, _ETn, _MK, _P, _CTon, _FO, _SA, _RP, _EBO, _OOA],
    [[0, 1], [0, { [_hQ]: _d }], [0, { [_hQ]: _et }], [1, { [_hQ]: _mk }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ct }], [2, { [_hQ]: _fo }], [0, { [_hQ]: _sa }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [64 | 0, { [_hH]: _xaooa }]],
    1
  ];
  var ListObjectVersionsOutput$ = [
    3,
    n0,
    _LOVOi,
    { [_xN]: _LVR },
    [_IT, _KM, _VIM, _NKM, _NVIM, _Ve, _DMe, _N, _P, _Deli, _MK, _CPom, _ETn, _RC],
    [2, 0, 0, 0, 0, [() => ObjectVersionList, { [_xF]: 1, [_xN]: _Ver }], [() => DeleteMarkers, { [_xF]: 1, [_xN]: _DM }], 0, 0, 0, 1, [() => CommonPrefixList, { [_xF]: 1 }], 0, [0, { [_hH]: _xarc }]]
  ];
  var ListObjectVersionsRequest$ = [
    3,
    n0,
    _LOVRi,
    0,
    [_B, _Deli, _ETn, _KM, _MK, _P, _VIM, _EBO, _RP, _OOA],
    [[0, 1], [0, { [_hQ]: _d }], [0, { [_hQ]: _et }], [0, { [_hQ]: _km }], [1, { [_hQ]: _mk }], [0, { [_hQ]: _p }], [0, { [_hQ]: _vim }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xarp }], [64 | 0, { [_hH]: _xaooa }]],
    1
  ];
  var ListPartsOutput$ = [
    3,
    n0,
    _LPO,
    { [_xN]: _LPR },
    [_ADb, _ARI, _B, _K, _UI, _PNM, _NPNM, _MP, _IT, _Pa, _In, _O, _SC, _RC, _CA, _CT],
    [[4, { [_hH]: _xaad }], [0, { [_hH]: _xaari }], 0, 0, 0, 0, 0, 1, 2, [() => Parts, { [_xF]: 1, [_xN]: _Par }], () => Initiator$, () => Owner$, 0, [0, { [_hH]: _xarc }], 0, 0]
  ];
  var ListPartsRequest$ = [
    3,
    n0,
    _LPRi,
    0,
    [_B, _K, _UI, _MP, _PNM, _RP, _EBO, _SSECA, _SSECK, _SSECKMD],
    [[0, 1], [0, 1], [0, { [_hQ]: _uI }], [1, { [_hQ]: _mp }], [0, { [_hQ]: _pnm }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }]],
    3
  ];
  var LocationInfo$ = [
    3,
    n0,
    _LI,
    0,
    [_Ty, _N],
    [0, 0]
  ];
  var LoggingEnabled$ = [
    3,
    n0,
    _LE,
    0,
    [_TB, _TP, _TG, _TOKF],
    [0, 0, [() => TargetGrants, 0], [() => TargetObjectKeyFormat$, 0]],
    2
  ];
  var MetadataConfiguration$ = [
    3,
    n0,
    _MC,
    0,
    [_JTC, _ITCn],
    [() => JournalTableConfiguration$, () => InventoryTableConfiguration$],
    1
  ];
  var MetadataConfigurationResult$ = [
    3,
    n0,
    _MCR,
    0,
    [_DRes, _JTCR, _ITCR],
    [() => DestinationResult$, () => JournalTableConfigurationResult$, () => InventoryTableConfigurationResult$],
    1
  ];
  var MetadataEntry$ = [
    3,
    n0,
    _ME,
    0,
    [_N, _V],
    [0, 0]
  ];
  var MetadataTableConfiguration$ = [
    3,
    n0,
    _MTC,
    0,
    [_STD],
    [() => S3TablesDestination$],
    1
  ];
  var MetadataTableConfigurationResult$ = [
    3,
    n0,
    _MTCR,
    0,
    [_STDR],
    [() => S3TablesDestinationResult$],
    1
  ];
  var MetadataTableEncryptionConfiguration$ = [
    3,
    n0,
    _MTEC,
    0,
    [_SAs, _KKA],
    [0, 0],
    1
  ];
  var Metrics$ = [
    3,
    n0,
    _Me,
    0,
    [_S, _ETv],
    [0, () => ReplicationTimeValue$],
    1
  ];
  var MetricsAndOperator$ = [
    3,
    n0,
    _MAO,
    0,
    [_P, _T, _APAc],
    [0, [() => TagSet, { [_xF]: 1, [_xN]: _Ta }], 0]
  ];
  var MetricsConfiguration$ = [
    3,
    n0,
    _MCe,
    0,
    [_I, _F],
    [0, [() => MetricsFilter$, 0]],
    1
  ];
  var MultipartUpload$ = [
    3,
    n0,
    _MU,
    0,
    [_UI, _K, _Ini, _SC, _O, _In, _CA, _CT],
    [0, 0, 4, 0, () => Owner$, () => Initiator$, 0, 0]
  ];
  var NoncurrentVersionExpiration$ = [
    3,
    n0,
    _NVE,
    0,
    [_ND, _NNV],
    [1, 1]
  ];
  var NoncurrentVersionTransition$ = [
    3,
    n0,
    _NVTo,
    0,
    [_ND, _SC, _NNV],
    [1, 0, 1]
  ];
  var NotificationConfiguration$ = [
    3,
    n0,
    _NC,
    0,
    [_TCo, _QCu, _LFCa, _EBC],
    [[() => TopicConfigurationList, { [_xF]: 1, [_xN]: _TCop }], [() => QueueConfigurationList, { [_xF]: 1, [_xN]: _QCue }], [() => LambdaFunctionConfigurationList, { [_xF]: 1, [_xN]: _CFC }], () => EventBridgeConfiguration$]
  ];
  var NotificationConfigurationFilter$ = [
    3,
    n0,
    _NCF,
    0,
    [_K],
    [[() => S3KeyFilter$, { [_xN]: _SKe }]]
  ];
  var _Object$ = [
    3,
    n0,
    _Obj,
    0,
    [_K, _LM, _ETa, _CA, _CT, _Si, _SC, _O, _RSe],
    [0, 4, 0, [64 | 0, { [_xF]: 1 }], 0, 1, 0, () => Owner$, () => RestoreStatus$]
  ];
  var ObjectIdentifier$ = [
    3,
    n0,
    _OI,
    0,
    [_K, _VI, _ETa, _LMT, _Si],
    [0, 0, 0, 6, 1],
    1
  ];
  var ObjectLockConfiguration$ = [
    3,
    n0,
    _OLC,
    0,
    [_OLE, _Ru],
    [0, () => ObjectLockRule$]
  ];
  var ObjectLockLegalHold$ = [
    3,
    n0,
    _OLLH,
    0,
    [_S],
    [0]
  ];
  var ObjectLockRetention$ = [
    3,
    n0,
    _OLR,
    0,
    [_Mo, _RUD],
    [0, 5]
  ];
  var ObjectLockRule$ = [
    3,
    n0,
    _OLRb,
    0,
    [_DRe],
    [() => DefaultRetention$]
  ];
  var ObjectPart$ = [
    3,
    n0,
    _OPb,
    0,
    [_PN, _Si, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var ObjectVersion$ = [
    3,
    n0,
    _OV,
    0,
    [_ETa, _CA, _CT, _Si, _SC, _K, _VI, _IL, _LM, _O, _RSe],
    [0, [64 | 0, { [_xF]: 1 }], 0, 1, 0, 0, 0, 2, 4, () => Owner$, () => RestoreStatus$]
  ];
  var OutputLocation$ = [
    3,
    n0,
    _OL,
    0,
    [_S_],
    [[() => S3Location$, 0]]
  ];
  var OutputSerialization$ = [
    3,
    n0,
    _OSu,
    0,
    [_CSV, _JSON],
    [() => CSVOutput$, () => JSONOutput$]
  ];
  var Owner$ = [
    3,
    n0,
    _O,
    0,
    [_DN, _ID],
    [0, 0]
  ];
  var OwnershipControls$ = [
    3,
    n0,
    _OC,
    0,
    [_R],
    [[() => OwnershipControlsRules, { [_xF]: 1, [_xN]: _Ru }]],
    1
  ];
  var OwnershipControlsRule$ = [
    3,
    n0,
    _OCR,
    0,
    [_OO],
    [0],
    1
  ];
  var ParquetInput$ = [
    3,
    n0,
    _PI,
    0,
    [],
    []
  ];
  var Part$ = [
    3,
    n0,
    _Par,
    0,
    [_PN, _LM, _ETa, _Si, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe],
    [1, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var PartitionedPrefix$ = [
    3,
    n0,
    _PP,
    { [_xN]: _PP },
    [_PDS],
    [0]
  ];
  var PolicyStatus$ = [
    3,
    n0,
    _PS,
    0,
    [_IP],
    [[2, { [_xN]: _IP }]]
  ];
  var Progress$ = [
    3,
    n0,
    _Pr,
    0,
    [_BS, _BP, _BRy],
    [1, 1, 1]
  ];
  var ProgressEvent$ = [
    3,
    n0,
    _PE,
    0,
    [_Det],
    [[() => Progress$, { [_eP]: 1 }]]
  ];
  var PublicAccessBlockConfiguration$ = [
    3,
    n0,
    _PABC,
    0,
    [_BPA, _IPA, _BPP, _RPB],
    [[2, { [_xN]: _BPA }], [2, { [_xN]: _IPA }], [2, { [_xN]: _BPP }], [2, { [_xN]: _RPB }]]
  ];
  var PutBucketAbacRequest$ = [
    3,
    n0,
    _PBAR,
    0,
    [_B, _AS, _CMDo, _CA, _EBO],
    [[0, 1], [() => AbacStatus$, { [_hP]: 1, [_xN]: _AS }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketAccelerateConfigurationRequest$ = [
    3,
    n0,
    _PBACR,
    0,
    [_B, _AC, _EBO, _CA],
    [[0, 1], [() => AccelerateConfiguration$, { [_hP]: 1, [_xN]: _AC }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xasca }]],
    2
  ];
  var PutBucketAclRequest$ = [
    3,
    n0,
    _PBARu,
    0,
    [_B, _ACL_, _ACP, _CMDo, _CA, _GFC, _GR, _GRACP, _GW, _GWACP, _EBO],
    [[0, 1], [0, { [_hH]: _xaa }], [() => AccessControlPolicy$, { [_hP]: 1, [_xN]: _ACP }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xagfc }], [0, { [_hH]: _xagr }], [0, { [_hH]: _xagra }], [0, { [_hH]: _xagw }], [0, { [_hH]: _xagwa }], [0, { [_hH]: _xaebo }]],
    1
  ];
  var PutBucketAnalyticsConfigurationRequest$ = [
    3,
    n0,
    _PBACRu,
    0,
    [_B, _I, _ACn, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [() => AnalyticsConfiguration$, { [_hP]: 1, [_xN]: _ACn }], [0, { [_hH]: _xaebo }]],
    3
  ];
  var PutBucketCorsRequest$ = [
    3,
    n0,
    _PBCR,
    0,
    [_B, _CORSC, _CMDo, _CA, _EBO],
    [[0, 1], [() => CORSConfiguration$, { [_hP]: 1, [_xN]: _CORSC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketEncryptionRequest$ = [
    3,
    n0,
    _PBER,
    0,
    [_B, _SSEC, _CMDo, _CA, _EBO],
    [[0, 1], [() => ServerSideEncryptionConfiguration$, { [_hP]: 1, [_xN]: _SSEC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketIntelligentTieringConfigurationRequest$ = [
    3,
    n0,
    _PBITCR,
    0,
    [_B, _I, _ITC, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [() => IntelligentTieringConfiguration$, { [_hP]: 1, [_xN]: _ITC }], [0, { [_hH]: _xaebo }]],
    3
  ];
  var PutBucketInventoryConfigurationRequest$ = [
    3,
    n0,
    _PBICR,
    0,
    [_B, _I, _IC, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [() => InventoryConfiguration$, { [_hP]: 1, [_xN]: _IC }], [0, { [_hH]: _xaebo }]],
    3
  ];
  var PutBucketLifecycleConfigurationOutput$ = [
    3,
    n0,
    _PBLCO,
    0,
    [_TDMOS],
    [[0, { [_hH]: _xatdmos }]]
  ];
  var PutBucketLifecycleConfigurationRequest$ = [
    3,
    n0,
    _PBLCR,
    0,
    [_B, _CA, _LCi, _EBO, _TDMOS],
    [[0, 1], [0, { [_hH]: _xasca }], [() => BucketLifecycleConfiguration$, { [_hP]: 1, [_xN]: _LCi }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xatdmos }]],
    1
  ];
  var PutBucketLoggingRequest$ = [
    3,
    n0,
    _PBLR,
    0,
    [_B, _BLS, _CMDo, _CA, _EBO],
    [[0, 1], [() => BucketLoggingStatus$, { [_hP]: 1, [_xN]: _BLS }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketMetricsConfigurationRequest$ = [
    3,
    n0,
    _PBMCR,
    0,
    [_B, _I, _MCe, _EBO],
    [[0, 1], [0, { [_hQ]: _i }], [() => MetricsConfiguration$, { [_hP]: 1, [_xN]: _MCe }], [0, { [_hH]: _xaebo }]],
    3
  ];
  var PutBucketNotificationConfigurationRequest$ = [
    3,
    n0,
    _PBNCR,
    0,
    [_B, _NC, _EBO, _SDV],
    [[0, 1], [() => NotificationConfiguration$, { [_hP]: 1, [_xN]: _NC }], [0, { [_hH]: _xaebo }], [2, { [_hH]: _xasdv }]],
    2
  ];
  var PutBucketOwnershipControlsRequest$ = [
    3,
    n0,
    _PBOCR,
    0,
    [_B, _OC, _CMDo, _EBO, _CA],
    [[0, 1], [() => OwnershipControls$, { [_hP]: 1, [_xN]: _OC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xasca }]],
    2
  ];
  var PutBucketPolicyRequest$ = [
    3,
    n0,
    _PBPR,
    0,
    [_B, _Po, _CMDo, _CA, _CRSBA, _EBO],
    [[0, 1], [0, 16], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [2, { [_hH]: _xacrsba }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketReplicationRequest$ = [
    3,
    n0,
    _PBRR,
    0,
    [_B, _RCe, _CMDo, _CA, _To, _EBO],
    [[0, 1], [() => ReplicationConfiguration$, { [_hP]: 1, [_xN]: _RCe }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xabolt }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketRequestPaymentRequest$ = [
    3,
    n0,
    _PBRPR,
    0,
    [_B, _RPC, _CMDo, _CA, _EBO],
    [[0, 1], [() => RequestPaymentConfiguration$, { [_hP]: 1, [_xN]: _RPC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketTaggingRequest$ = [
    3,
    n0,
    _PBTR,
    0,
    [_B, _Tag, _CMDo, _CA, _EBO],
    [[0, 1], [() => Tagging$, { [_hP]: 1, [_xN]: _Tag }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketVersioningRequest$ = [
    3,
    n0,
    _PBVR,
    0,
    [_B, _VC, _CMDo, _CA, _MFA, _EBO],
    [[0, 1], [() => VersioningConfiguration$, { [_hP]: 1, [_xN]: _VC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xam_ }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutBucketWebsiteRequest$ = [
    3,
    n0,
    _PBWR,
    0,
    [_B, _WC, _CMDo, _CA, _EBO],
    [[0, 1], [() => WebsiteConfiguration$, { [_hP]: 1, [_xN]: _WC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutObjectAclOutput$ = [
    3,
    n0,
    _POAO,
    0,
    [_RC],
    [[0, { [_hH]: _xarc }]]
  ];
  var PutObjectAclRequest$ = [
    3,
    n0,
    _POAR,
    0,
    [_B, _K, _ACL_, _ACP, _CMDo, _CA, _GFC, _GR, _GRACP, _GW, _GWACP, _RP, _VI, _EBO],
    [[0, 1], [0, 1], [0, { [_hH]: _xaa }], [() => AccessControlPolicy$, { [_hP]: 1, [_xN]: _ACP }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xagfc }], [0, { [_hH]: _xagr }], [0, { [_hH]: _xagra }], [0, { [_hH]: _xagw }], [0, { [_hH]: _xagwa }], [0, { [_hH]: _xarp }], [0, { [_hQ]: _vI }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutObjectLegalHoldOutput$ = [
    3,
    n0,
    _POLHO,
    0,
    [_RC],
    [[0, { [_hH]: _xarc }]]
  ];
  var PutObjectLegalHoldRequest$ = [
    3,
    n0,
    _POLHR,
    0,
    [_B, _K, _LH, _RP, _VI, _CMDo, _CA, _EBO],
    [[0, 1], [0, 1], [() => ObjectLockLegalHold$, { [_hP]: 1, [_xN]: _LH }], [0, { [_hH]: _xarp }], [0, { [_hQ]: _vI }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutObjectLockConfigurationOutput$ = [
    3,
    n0,
    _POLCO,
    0,
    [_RC],
    [[0, { [_hH]: _xarc }]]
  ];
  var PutObjectLockConfigurationRequest$ = [
    3,
    n0,
    _POLCR,
    0,
    [_B, _OLC, _RP, _To, _CMDo, _CA, _EBO],
    [[0, 1], [() => ObjectLockConfiguration$, { [_hP]: 1, [_xN]: _OLC }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xabolt }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    1
  ];
  var PutObjectOutput$ = [
    3,
    n0,
    _POO,
    0,
    [_E, _ETa, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _CT, _SSE, _VI, _SSECA, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _Si, _RC],
    [[0, { [_hH]: _xae }], [0, { [_hH]: _ETa }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [0, { [_hH]: _xact }], [0, { [_hH]: _xasse }], [0, { [_hH]: _xavi }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }], [1, { [_hH]: _xaos }], [0, { [_hH]: _xarc }]]
  ];
  var PutObjectRequest$ = [
    3,
    n0,
    _POR,
    0,
    [_B, _K, _ACL_, _Bo, _CC, _CDo, _CEo, _CL, _CLo, _CMDo, _CTo, _CA, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _Ex, _IM, _INM, _GFC, _GR, _GRACP, _GWACP, _WOB, _M, _SSE, _SC, _WRL, _SSECA, _SSECK, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _RP, _Tag, _OLM, _OLRUD, _OLLHS, _EBO],
    [[0, 1], [0, 1], [0, { [_hH]: _xaa }], [() => StreamingBlob, 16], [0, { [_hH]: _CC_ }], [0, { [_hH]: _CD_ }], [0, { [_hH]: _CE_ }], [0, { [_hH]: _CL_ }], [1, { [_hH]: _CL__ }], [0, { [_hH]: _CM }], [0, { [_hH]: _CT_ }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [4, { [_hH]: _Ex }], [0, { [_hH]: _IM_ }], [0, { [_hH]: _INM_ }], [0, { [_hH]: _xagfc }], [0, { [_hH]: _xagr }], [0, { [_hH]: _xagra }], [0, { [_hH]: _xagwa }], [1, { [_hH]: _xawob }], [128 | 0, { [_hPH]: _xam }], [0, { [_hH]: _xasse }], [0, { [_hH]: _xasc }], [0, { [_hH]: _xawrl }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [() => SSEKMSEncryptionContext, { [_hH]: _xassec }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xat }], [0, { [_hH]: _xaolm }], [5, { [_hH]: _xaolrud }], [0, { [_hH]: _xaollh }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutObjectRetentionOutput$ = [
    3,
    n0,
    _PORO,
    0,
    [_RC],
    [[0, { [_hH]: _xarc }]]
  ];
  var PutObjectRetentionRequest$ = [
    3,
    n0,
    _PORR,
    0,
    [_B, _K, _Ret, _RP, _VI, _BGR, _CMDo, _CA, _EBO],
    [[0, 1], [0, 1], [() => ObjectLockRetention$, { [_hP]: 1, [_xN]: _Ret }], [0, { [_hH]: _xarp }], [0, { [_hQ]: _vI }], [2, { [_hH]: _xabgr }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var PutObjectTaggingOutput$ = [
    3,
    n0,
    _POTO,
    0,
    [_VI],
    [[0, { [_hH]: _xavi }]]
  ];
  var PutObjectTaggingRequest$ = [
    3,
    n0,
    _POTR,
    0,
    [_B, _K, _Tag, _VI, _CMDo, _CA, _EBO, _RP],
    [[0, 1], [0, 1], [() => Tagging$, { [_hP]: 1, [_xN]: _Tag }], [0, { [_hQ]: _vI }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xarp }]],
    3
  ];
  var PutPublicAccessBlockRequest$ = [
    3,
    n0,
    _PPABR,
    0,
    [_B, _PABC, _CMDo, _CA, _EBO],
    [[0, 1], [() => PublicAccessBlockConfiguration$, { [_hP]: 1, [_xN]: _PABC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var QueueConfiguration$ = [
    3,
    n0,
    _QCue,
    0,
    [_QA, _Ev, _I, _F],
    [[0, { [_xN]: _Qu }], [64 | 0, { [_xF]: 1, [_xN]: _Eve }], 0, [() => NotificationConfigurationFilter$, 0]],
    2
  ];
  var RecordExpiration$ = [
    3,
    n0,
    _REe,
    0,
    [_E, _D],
    [0, 1],
    1
  ];
  var RecordsEvent$ = [
    3,
    n0,
    _REec,
    0,
    [_Payl],
    [[21, { [_eP]: 1 }]]
  ];
  var Redirect$ = [
    3,
    n0,
    _Red,
    0,
    [_HN, _HRC, _Pro, _RKPW, _RKW],
    [0, 0, 0, 0, 0]
  ];
  var RedirectAllRequestsTo$ = [
    3,
    n0,
    _RART,
    0,
    [_HN, _Pro],
    [0, 0],
    1
  ];
  var RenameObjectOutput$ = [
    3,
    n0,
    _ROO,
    0,
    [],
    []
  ];
  var RenameObjectRequest$ = [
    3,
    n0,
    _ROR,
    0,
    [_B, _K, _RSen, _DIM, _DINM, _DIMS, _DIUS, _SIM, _SINM, _SIMS, _SIUS, _CTl],
    [[0, 1], [0, 1], [0, { [_hH]: _xars_ }], [0, { [_hH]: _IM_ }], [0, { [_hH]: _INM_ }], [4, { [_hH]: _IMS_ }], [4, { [_hH]: _IUS_ }], [0, { [_hH]: _xarsim }], [0, { [_hH]: _xarsinm }], [6, { [_hH]: _xarsims }], [6, { [_hH]: _xarsius }], [0, { [_hH]: _xact_, [_iT]: 1 }]],
    3
  ];
  var ReplicaModifications$ = [
    3,
    n0,
    _RM,
    0,
    [_S],
    [0],
    1
  ];
  var ReplicationConfiguration$ = [
    3,
    n0,
    _RCe,
    0,
    [_Ro, _R],
    [0, [() => ReplicationRules, { [_xF]: 1, [_xN]: _Ru }]],
    2
  ];
  var ReplicationRule$ = [
    3,
    n0,
    _RRe,
    0,
    [_S, _Des, _ID, _Pri, _P, _F, _SSC, _EOR, _DMR],
    [0, () => Destination$, 0, 1, 0, [() => ReplicationRuleFilter$, 0], () => SourceSelectionCriteria$, () => ExistingObjectReplication$, () => DeleteMarkerReplication$],
    2
  ];
  var ReplicationRuleAndOperator$ = [
    3,
    n0,
    _RRAO,
    0,
    [_P, _T],
    [0, [() => TagSet, { [_xF]: 1, [_xN]: _Ta }]]
  ];
  var ReplicationRuleFilter$ = [
    3,
    n0,
    _RRF,
    0,
    [_P, _Ta, _An],
    [0, () => Tag$, [() => ReplicationRuleAndOperator$, 0]]
  ];
  var ReplicationTime$ = [
    3,
    n0,
    _RT,
    0,
    [_S, _Tim],
    [0, () => ReplicationTimeValue$],
    2
  ];
  var ReplicationTimeValue$ = [
    3,
    n0,
    _RTV,
    0,
    [_Mi],
    [1]
  ];
  var RequestPaymentConfiguration$ = [
    3,
    n0,
    _RPC,
    0,
    [_Pay],
    [0],
    1
  ];
  var RequestProgress$ = [
    3,
    n0,
    _RPe,
    0,
    [_Ena],
    [2]
  ];
  var RestoreObjectOutput$ = [
    3,
    n0,
    _ROOe,
    0,
    [_RC, _ROP],
    [[0, { [_hH]: _xarc }], [0, { [_hH]: _xarop }]]
  ];
  var RestoreObjectRequest$ = [
    3,
    n0,
    _RORe,
    0,
    [_B, _K, _VI, _RRes, _RP, _CA, _EBO],
    [[0, 1], [0, 1], [0, { [_hQ]: _vI }], [() => RestoreRequest$, { [_hP]: 1, [_xN]: _RRes }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var RestoreRequest$ = [
    3,
    n0,
    _RRes,
    0,
    [_D, _GJP, _Ty, _Ti, _Desc, _SP, _OL],
    [1, () => GlacierJobParameters$, 0, 0, 0, () => SelectParameters$, [() => OutputLocation$, 0]]
  ];
  var RestoreStatus$ = [
    3,
    n0,
    _RSe,
    0,
    [_IRIP, _RED],
    [2, 4]
  ];
  var RoutingRule$ = [
    3,
    n0,
    _RRo,
    0,
    [_Red, _Co],
    [() => Redirect$, () => Condition$],
    1
  ];
  var S3KeyFilter$ = [
    3,
    n0,
    _SKF,
    0,
    [_FRi],
    [[() => FilterRuleList, { [_xF]: 1, [_xN]: _FR }]]
  ];
  var S3Location$ = [
    3,
    n0,
    _SL,
    0,
    [_BNu, _P, _En, _CACL, _ACL, _Tag, _UM, _SC],
    [0, 0, [() => Encryption$, 0], 0, [() => Grants, 0], [() => Tagging$, 0], [() => UserMetadata, 0], 0],
    2
  ];
  var S3TablesDestination$ = [
    3,
    n0,
    _STD,
    0,
    [_TBA, _TNa],
    [0, 0],
    2
  ];
  var S3TablesDestinationResult$ = [
    3,
    n0,
    _STDR,
    0,
    [_TBA, _TNa, _TA, _TN],
    [0, 0, 0, 0],
    4
  ];
  var ScanRange$ = [
    3,
    n0,
    _SR,
    0,
    [_St, _End],
    [1, 1]
  ];
  var SelectObjectContentOutput$ = [
    3,
    n0,
    _SOCO,
    0,
    [_Payl],
    [[() => SelectObjectContentEventStream$, 16]]
  ];
  var SelectObjectContentRequest$ = [
    3,
    n0,
    _SOCR,
    0,
    [_B, _K, _Exp, _ETx, _IS, _OSu, _SSECA, _SSECK, _SSECKMD, _RPe, _SR, _EBO],
    [[0, 1], [0, 1], 0, 0, () => InputSerialization$, () => OutputSerialization$, [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], () => RequestProgress$, () => ScanRange$, [0, { [_hH]: _xaebo }]],
    6
  ];
  var SelectParameters$ = [
    3,
    n0,
    _SP,
    0,
    [_IS, _ETx, _Exp, _OSu],
    [() => InputSerialization$, 0, 0, () => OutputSerialization$],
    4
  ];
  var ServerSideEncryptionByDefault$ = [
    3,
    n0,
    _SSEBD,
    0,
    [_SSEA, _KMSMKID],
    [0, [() => SSEKMSKeyId, 0]],
    1
  ];
  var ServerSideEncryptionConfiguration$ = [
    3,
    n0,
    _SSEC,
    0,
    [_R],
    [[() => ServerSideEncryptionRules, { [_xF]: 1, [_xN]: _Ru }]],
    1
  ];
  var ServerSideEncryptionRule$ = [
    3,
    n0,
    _SSER,
    0,
    [_ASSEBD, _BKE, _BET],
    [[() => ServerSideEncryptionByDefault$, 0], 2, [() => BlockedEncryptionTypes$, 0]]
  ];
  var SessionCredentials$ = [
    3,
    n0,
    _SCe,
    0,
    [_AKI, _SAK, _ST, _E],
    [[0, { [_xN]: _AKI }], [() => SessionCredentialValue, { [_xN]: _SAK }], [() => SessionCredentialValue, { [_xN]: _ST }], [4, { [_xN]: _E }]],
    4
  ];
  var SimplePrefix$ = [
    3,
    n0,
    _SPi,
    { [_xN]: _SPi },
    [],
    []
  ];
  var SourceSelectionCriteria$ = [
    3,
    n0,
    _SSC,
    0,
    [_SKEO, _RM],
    [() => SseKmsEncryptedObjects$, () => ReplicaModifications$]
  ];
  var SSEKMS$ = [
    3,
    n0,
    _SSEKMS,
    { [_xN]: _SK },
    [_KI],
    [[() => SSEKMSKeyId, 0]],
    1
  ];
  var SseKmsEncryptedObjects$ = [
    3,
    n0,
    _SKEO,
    0,
    [_S],
    [0],
    1
  ];
  var SSEKMSEncryption$ = [
    3,
    n0,
    _SSEKMSE,
    { [_xN]: _SK },
    [_KMSKA, _BKE],
    [[() => NonEmptyKmsKeyArnString, 0], 2],
    1
  ];
  var SSES3$ = [
    3,
    n0,
    _SSES,
    { [_xN]: _SS },
    [],
    []
  ];
  var Stats$ = [
    3,
    n0,
    _Sta,
    0,
    [_BS, _BP, _BRy],
    [1, 1, 1]
  ];
  var StatsEvent$ = [
    3,
    n0,
    _SE,
    0,
    [_Det],
    [[() => Stats$, { [_eP]: 1 }]]
  ];
  var StorageClassAnalysis$ = [
    3,
    n0,
    _SCA,
    0,
    [_DE],
    [() => StorageClassAnalysisDataExport$]
  ];
  var StorageClassAnalysisDataExport$ = [
    3,
    n0,
    _SCADE,
    0,
    [_OSV, _Des],
    [0, () => AnalyticsExportDestination$],
    2
  ];
  var Tag$ = [
    3,
    n0,
    _Ta,
    0,
    [_K, _V],
    [0, 0],
    2
  ];
  var Tagging$ = [
    3,
    n0,
    _Tag,
    0,
    [_TS],
    [[() => TagSet, 0]],
    1
  ];
  var TargetGrant$ = [
    3,
    n0,
    _TGa,
    0,
    [_Gra, _Pe],
    [[() => Grantee$, { [_xNm]: [_x, _hi] }], 0]
  ];
  var TargetObjectKeyFormat$ = [
    3,
    n0,
    _TOKF,
    0,
    [_SPi, _PP],
    [[() => SimplePrefix$, { [_xN]: _SPi }], [() => PartitionedPrefix$, { [_xN]: _PP }]]
  ];
  var Tiering$ = [
    3,
    n0,
    _Tier,
    0,
    [_D, _AT],
    [1, 0],
    2
  ];
  var TopicConfiguration$ = [
    3,
    n0,
    _TCop,
    0,
    [_TAo, _Ev, _I, _F],
    [[0, { [_xN]: _Top }], [64 | 0, { [_xF]: 1, [_xN]: _Eve }], 0, [() => NotificationConfigurationFilter$, 0]],
    2
  ];
  var Transition$ = [
    3,
    n0,
    _Tra,
    0,
    [_Da, _D, _SC],
    [5, 1, 0]
  ];
  var UpdateBucketMetadataInventoryTableConfigurationRequest$ = [
    3,
    n0,
    _UBMITCR,
    0,
    [_B, _ITCn, _CMDo, _CA, _EBO],
    [[0, 1], [() => InventoryTableConfigurationUpdates$, { [_hP]: 1, [_xN]: _ITCn }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var UpdateBucketMetadataJournalTableConfigurationRequest$ = [
    3,
    n0,
    _UBMJTCR,
    0,
    [_B, _JTC, _CMDo, _CA, _EBO],
    [[0, 1], [() => JournalTableConfigurationUpdates$, { [_hP]: 1, [_xN]: _JTC }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xaebo }]],
    2
  ];
  var UpdateObjectEncryptionRequest$ = [
    3,
    n0,
    _UOER,
    0,
    [_B, _K, _OE, _VI, _RP, _EBO, _CMDo, _CA],
    [[0, 1], [0, 1], [() => ObjectEncryption$, 16], [0, { [_hQ]: _vI }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }]],
    3
  ];
  var UpdateObjectEncryptionResponse$ = [
    3,
    n0,
    _UOERp,
    0,
    [_RC],
    [[0, { [_hH]: _xarc }]]
  ];
  var UploadPartCopyOutput$ = [
    3,
    n0,
    _UPCO,
    0,
    [_CSVI, _CPR, _SSE, _SSECA, _SSECKMD, _SSEKMSKI, _BKE, _RC],
    [[0, { [_hH]: _xacsvi }], [() => CopyPartResult$, 16], [0, { [_hH]: _xasse }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarc }]]
  ];
  var UploadPartCopyRequest$ = [
    3,
    n0,
    _UPCR,
    0,
    [_B, _CS, _K, _PN, _UI, _CSIM, _CSIMS, _CSINM, _CSIUS, _CSRo, _SSECA, _SSECK, _SSECKMD, _CSSSECA, _CSSSECK, _CSSSECKMD, _RP, _EBO, _ESBO],
    [[0, 1], [0, { [_hH]: _xacs___ }], [0, 1], [1, { [_hQ]: _pN }], [0, { [_hQ]: _uI }], [0, { [_hH]: _xacsim }], [4, { [_hH]: _xacsims }], [0, { [_hH]: _xacsinm }], [4, { [_hH]: _xacsius }], [0, { [_hH]: _xacsr }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [0, { [_hH]: _xacssseca }], [() => CopySourceSSECustomerKey, { [_hH]: _xacssseck }], [0, { [_hH]: _xacssseckM }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }], [0, { [_hH]: _xasebo }]],
    5
  ];
  var UploadPartOutput$ = [
    3,
    n0,
    _UPO,
    0,
    [_SSE, _ETa, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _SSECA, _SSECKMD, _SSEKMSKI, _BKE, _RC],
    [[0, { [_hH]: _xasse }], [0, { [_hH]: _ETa }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [0, { [_hH]: _xasseca }], [0, { [_hH]: _xasseckM }], [() => SSEKMSKeyId, { [_hH]: _xasseakki }], [2, { [_hH]: _xassebke }], [0, { [_hH]: _xarc }]]
  ];
  var UploadPartRequest$ = [
    3,
    n0,
    _UPR,
    0,
    [_B, _K, _PN, _UI, _Bo, _CLo, _CMDo, _CA, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _SSECA, _SSECK, _SSECKMD, _RP, _EBO],
    [[0, 1], [0, 1], [1, { [_hQ]: _pN }], [0, { [_hQ]: _uI }], [() => StreamingBlob, 16], [1, { [_hH]: _CL__ }], [0, { [_hH]: _CM }], [0, { [_hH]: _xasca }], [0, { [_hH]: _xacc }], [0, { [_hH]: _xacc_ }], [0, { [_hH]: _xacc__ }], [0, { [_hH]: _xacs }], [0, { [_hH]: _xacs_ }], [0, { [_hH]: _xacs__ }], [0, { [_hH]: _xacm }], [0, { [_hH]: _xacx }], [0, { [_hH]: _xacx_ }], [0, { [_hH]: _xacx__ }], [0, { [_hH]: _xasseca }], [() => SSECustomerKey, { [_hH]: _xasseck }], [0, { [_hH]: _xasseckM }], [0, { [_hH]: _xarp }], [0, { [_hH]: _xaebo }]],
    4
  ];
  var VersioningConfiguration$ = [
    3,
    n0,
    _VC,
    0,
    [_MFAD, _S],
    [[0, { [_xN]: _MDf }], 0]
  ];
  var WebsiteConfiguration$ = [
    3,
    n0,
    _WC,
    0,
    [_EDr, _IDn, _RART, _RR],
    [() => ErrorDocument$, () => IndexDocument$, () => RedirectAllRequestsTo$, [() => RoutingRules, 0]]
  ];
  var WriteGetObjectResponseRequest$ = [
    3,
    n0,
    _WGORR,
    0,
    [_RReq, _RTe, _Bo, _SCt, _ECr, _EM, _AR, _CC, _CDo, _CEo, _CL, _CLo, _CR, _CTo, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CSHAhe, _CMD, _CXXHASH, _CXXHASHh, _CXXHASHhe, _DM, _ETa, _Ex, _E, _LM, _MM, _M, _OLM, _OLLHS, _OLRUD, _PC, _RS, _RC, _Re, _SSE, _SSECA, _SSEKMSKI, _SSECKMD, _SC, _TC, _VI, _BKE],
    [[0, { [_hL]: 1, [_hH]: _xarr }], [0, { [_hH]: _xart }], [() => StreamingBlob, 16], [1, { [_hH]: _xafs }], [0, { [_hH]: _xafec }], [0, { [_hH]: _xafem }], [0, { [_hH]: _xafhar }], [0, { [_hH]: _xafhCC }], [0, { [_hH]: _xafhCD }], [0, { [_hH]: _xafhCE }], [0, { [_hH]: _xafhCL }], [1, { [_hH]: _CL__ }], [0, { [_hH]: _xafhCR }], [0, { [_hH]: _xafhCT }], [0, { [_hH]: _xafhxacc }], [0, { [_hH]: _xafhxacc_ }], [0, { [_hH]: _xafhxacc__ }], [0, { [_hH]: _xafhxacs }], [0, { [_hH]: _xafhxacs_ }], [0, { [_hH]: _xafhxacs__ }], [0, { [_hH]: _xafhxacm }], [0, { [_hH]: _xafhxacx }], [0, { [_hH]: _xafhxacx_ }], [0, { [_hH]: _xafhxacx__ }], [2, { [_hH]: _xafhxadm }], [0, { [_hH]: _xafhE }], [4, { [_hH]: _xafhE_ }], [0, { [_hH]: _xafhxae }], [4, { [_hH]: _xafhLM }], [1, { [_hH]: _xafhxamm }], [128 | 0, { [_hPH]: _xam }], [0, { [_hH]: _xafhxaolm }], [0, { [_hH]: _xafhxaollh }], [5, { [_hH]: _xafhxaolrud }], [1, { [_hH]: _xafhxampc }], [0, { [_hH]: _xafhxars }], [0, { [_hH]: _xafhxarc }], [0, { [_hH]: _xafhxar }], [0, { [_hH]: _xafhxasse }], [0, { [_hH]: _xafhxasseca }], [() => SSEKMSKeyId, { [_hH]: _xafhxasseakki }], [0, { [_hH]: _xafhxasseckM }], [0, { [_hH]: _xafhxasc }], [1, { [_hH]: _xafhxatc }], [0, { [_hH]: _xafhxavi }], [2, { [_hH]: _xafhxassebke }]],
    2
  ];
  var __Unit = "unit";
  var AllowedHeaders = 64 | 0;
  var AllowedMethods = 64 | 0;
  var AllowedOrigins = 64 | 0;
  var AnalyticsConfigurationList = [
    1,
    n0,
    _ACLn,
    0,
    [
      () => AnalyticsConfiguration$,
      0
    ]
  ];
  var Buckets = [
    1,
    n0,
    _Bu,
    0,
    [
      () => Bucket$,
      { [_xN]: _B }
    ]
  ];
  var ChecksumAlgorithmList = 64 | 0;
  var CommonPrefixList = [
    1,
    n0,
    _CPL,
    0,
    () => CommonPrefix$
  ];
  var CompletedPartList = [
    1,
    n0,
    _CPLo,
    0,
    () => CompletedPart$
  ];
  var CORSRules = [
    1,
    n0,
    _CORSR,
    0,
    [
      () => CORSRule$,
      0
    ]
  ];
  var DeletedObjects = [
    1,
    n0,
    _DOe,
    0,
    () => DeletedObject$
  ];
  var DeleteMarkers = [
    1,
    n0,
    _DMe,
    0,
    () => DeleteMarkerEntry$
  ];
  var EncryptionTypeList = [
    1,
    n0,
    _ETL,
    0,
    [
      0,
      { [_xN]: _ET }
    ]
  ];
  var Errors = [
    1,
    n0,
    _Er,
    0,
    () => _Error$
  ];
  var EventList = 64 | 0;
  var ExposeHeaders = 64 | 0;
  var FilterRuleList = [
    1,
    n0,
    _FRL,
    0,
    () => FilterRule$
  ];
  var Grants = [
    1,
    n0,
    _G,
    0,
    [
      () => Grant$,
      { [_xN]: _Gr }
    ]
  ];
  var IntelligentTieringConfigurationList = [
    1,
    n0,
    _ITCL,
    0,
    [
      () => IntelligentTieringConfiguration$,
      0
    ]
  ];
  var InventoryConfigurationList = [
    1,
    n0,
    _ICL,
    0,
    [
      () => InventoryConfiguration$,
      0
    ]
  ];
  var InventoryOptionalFields = [
    1,
    n0,
    _IOF,
    0,
    [
      0,
      { [_xN]: _Fi }
    ]
  ];
  var LambdaFunctionConfigurationList = [
    1,
    n0,
    _LFCL,
    0,
    [
      () => LambdaFunctionConfiguration$,
      0
    ]
  ];
  var LifecycleRules = [
    1,
    n0,
    _LRi,
    0,
    [
      () => LifecycleRule$,
      0
    ]
  ];
  var MetricsConfigurationList = [
    1,
    n0,
    _MCL,
    0,
    [
      () => MetricsConfiguration$,
      0
    ]
  ];
  var MultipartUploadList = [
    1,
    n0,
    _MUL,
    0,
    () => MultipartUpload$
  ];
  var NoncurrentVersionTransitionList = [
    1,
    n0,
    _NVTL,
    0,
    () => NoncurrentVersionTransition$
  ];
  var ObjectAttributesList = 64 | 0;
  var ObjectIdentifierList = [
    1,
    n0,
    _OIL,
    0,
    () => ObjectIdentifier$
  ];
  var ObjectList = [
    1,
    n0,
    _OLb,
    0,
    [
      () => _Object$,
      0
    ]
  ];
  var ObjectVersionList = [
    1,
    n0,
    _OVL,
    0,
    [
      () => ObjectVersion$,
      0
    ]
  ];
  var OptionalObjectAttributesList = 64 | 0;
  var OwnershipControlsRules = [
    1,
    n0,
    _OCRw,
    0,
    () => OwnershipControlsRule$
  ];
  var Parts = [
    1,
    n0,
    _Pa,
    0,
    () => Part$
  ];
  var PartsList = [
    1,
    n0,
    _PL,
    0,
    () => ObjectPart$
  ];
  var QueueConfigurationList = [
    1,
    n0,
    _QCL,
    0,
    [
      () => QueueConfiguration$,
      0
    ]
  ];
  var ReplicationRules = [
    1,
    n0,
    _RRep,
    0,
    [
      () => ReplicationRule$,
      0
    ]
  ];
  var RoutingRules = [
    1,
    n0,
    _RR,
    0,
    [
      () => RoutingRule$,
      { [_xN]: _RRo }
    ]
  ];
  var ServerSideEncryptionRules = [
    1,
    n0,
    _SSERe,
    0,
    [
      () => ServerSideEncryptionRule$,
      0
    ]
  ];
  var TagSet = [
    1,
    n0,
    _TS,
    0,
    [
      () => Tag$,
      { [_xN]: _Ta }
    ]
  ];
  var TargetGrants = [
    1,
    n0,
    _TG,
    0,
    [
      () => TargetGrant$,
      { [_xN]: _Gr }
    ]
  ];
  var TieringList = [
    1,
    n0,
    _TL,
    0,
    () => Tiering$
  ];
  var TopicConfigurationList = [
    1,
    n0,
    _TCL,
    0,
    [
      () => TopicConfiguration$,
      0
    ]
  ];
  var TransitionList = [
    1,
    n0,
    _TLr,
    0,
    () => Transition$
  ];
  var UserMetadata = [
    1,
    n0,
    _UM,
    0,
    [
      () => MetadataEntry$,
      { [_xN]: _ME }
    ]
  ];
  var Metadata = 128 | 0;
  var AnalyticsFilter$ = [
    4,
    n0,
    _AF,
    0,
    [_P, _Ta, _An],
    [0, () => Tag$, [() => AnalyticsAndOperator$, 0]]
  ];
  var MetricsFilter$ = [
    4,
    n0,
    _MF,
    0,
    [_P, _Ta, _APAc, _An],
    [0, () => Tag$, 0, [() => MetricsAndOperator$, 0]]
  ];
  var ObjectEncryption$ = [
    4,
    n0,
    _OE,
    0,
    [_SSEKMS],
    [[() => SSEKMSEncryption$, { [_xN]: _SK }]]
  ];
  var SelectObjectContentEventStream$ = [
    4,
    n0,
    _SOCES,
    { [_st]: 1 },
    [_Rec, _Sta, _Pr, _Cont, _End],
    [[() => RecordsEvent$, 0], [() => StatsEvent$, 0], [() => ProgressEvent$, 0], () => ContinuationEvent$, () => EndEvent$]
  ];
  var AbortMultipartUpload$ = [
    9,
    n0,
    _AMU,
    { [_h]: ["DELETE", "/{Key+}?x-id=AbortMultipartUpload", 204] },
    () => AbortMultipartUploadRequest$,
    () => AbortMultipartUploadOutput$
  ];
  var CompleteMultipartUpload$ = [
    9,
    n0,
    _CMUo,
    { [_h]: ["POST", "/{Key+}", 200] },
    () => CompleteMultipartUploadRequest$,
    () => CompleteMultipartUploadOutput$
  ];
  var CopyObject$ = [
    9,
    n0,
    _CO,
    { [_h]: ["PUT", "/{Key+}?x-id=CopyObject", 200] },
    () => CopyObjectRequest$,
    () => CopyObjectOutput$
  ];
  var CreateBucket$ = [
    9,
    n0,
    _CB,
    { [_h]: ["PUT", "/", 200] },
    () => CreateBucketRequest$,
    () => CreateBucketOutput$
  ];
  var CreateBucketMetadataConfiguration$ = [
    9,
    n0,
    _CBMC,
    { [_hC]: "-", [_h]: ["POST", "/?metadataConfiguration", 200] },
    () => CreateBucketMetadataConfigurationRequest$,
    () => __Unit
  ];
  var CreateBucketMetadataTableConfiguration$ = [
    9,
    n0,
    _CBMTC,
    { [_hC]: "-", [_h]: ["POST", "/?metadataTable", 200] },
    () => CreateBucketMetadataTableConfigurationRequest$,
    () => __Unit
  ];
  var CreateMultipartUpload$ = [
    9,
    n0,
    _CMUr,
    { [_h]: ["POST", "/{Key+}?uploads", 200] },
    () => CreateMultipartUploadRequest$,
    () => CreateMultipartUploadOutput$
  ];
  var CreateSession$ = [
    9,
    n0,
    _CSr,
    { [_h]: ["GET", "/?session", 200] },
    () => CreateSessionRequest$,
    () => CreateSessionOutput$
  ];
  var DeleteBucket$ = [
    9,
    n0,
    _DB,
    { [_h]: ["DELETE", "/", 204] },
    () => DeleteBucketRequest$,
    () => __Unit
  ];
  var DeleteBucketAnalyticsConfiguration$ = [
    9,
    n0,
    _DBAC,
    { [_h]: ["DELETE", "/?analytics", 204] },
    () => DeleteBucketAnalyticsConfigurationRequest$,
    () => __Unit
  ];
  var DeleteBucketCors$ = [
    9,
    n0,
    _DBC,
    { [_h]: ["DELETE", "/?cors", 204] },
    () => DeleteBucketCorsRequest$,
    () => __Unit
  ];
  var DeleteBucketEncryption$ = [
    9,
    n0,
    _DBE,
    { [_h]: ["DELETE", "/?encryption", 204] },
    () => DeleteBucketEncryptionRequest$,
    () => __Unit
  ];
  var DeleteBucketIntelligentTieringConfiguration$ = [
    9,
    n0,
    _DBITC,
    { [_h]: ["DELETE", "/?intelligent-tiering", 204] },
    () => DeleteBucketIntelligentTieringConfigurationRequest$,
    () => __Unit
  ];
  var DeleteBucketInventoryConfiguration$ = [
    9,
    n0,
    _DBIC,
    { [_h]: ["DELETE", "/?inventory", 204] },
    () => DeleteBucketInventoryConfigurationRequest$,
    () => __Unit
  ];
  var DeleteBucketLifecycle$ = [
    9,
    n0,
    _DBL,
    { [_h]: ["DELETE", "/?lifecycle", 204] },
    () => DeleteBucketLifecycleRequest$,
    () => __Unit
  ];
  var DeleteBucketMetadataConfiguration$ = [
    9,
    n0,
    _DBMC,
    { [_h]: ["DELETE", "/?metadataConfiguration", 204] },
    () => DeleteBucketMetadataConfigurationRequest$,
    () => __Unit
  ];
  var DeleteBucketMetadataTableConfiguration$ = [
    9,
    n0,
    _DBMTC,
    { [_h]: ["DELETE", "/?metadataTable", 204] },
    () => DeleteBucketMetadataTableConfigurationRequest$,
    () => __Unit
  ];
  var DeleteBucketMetricsConfiguration$ = [
    9,
    n0,
    _DBMCe,
    { [_h]: ["DELETE", "/?metrics", 204] },
    () => DeleteBucketMetricsConfigurationRequest$,
    () => __Unit
  ];
  var DeleteBucketOwnershipControls$ = [
    9,
    n0,
    _DBOC,
    { [_h]: ["DELETE", "/?ownershipControls", 204] },
    () => DeleteBucketOwnershipControlsRequest$,
    () => __Unit
  ];
  var DeleteBucketPolicy$ = [
    9,
    n0,
    _DBP,
    { [_h]: ["DELETE", "/?policy", 204] },
    () => DeleteBucketPolicyRequest$,
    () => __Unit
  ];
  var DeleteBucketReplication$ = [
    9,
    n0,
    _DBRe,
    { [_h]: ["DELETE", "/?replication", 204] },
    () => DeleteBucketReplicationRequest$,
    () => __Unit
  ];
  var DeleteBucketTagging$ = [
    9,
    n0,
    _DBT,
    { [_h]: ["DELETE", "/?tagging", 204] },
    () => DeleteBucketTaggingRequest$,
    () => __Unit
  ];
  var DeleteBucketWebsite$ = [
    9,
    n0,
    _DBW,
    { [_h]: ["DELETE", "/?website", 204] },
    () => DeleteBucketWebsiteRequest$,
    () => __Unit
  ];
  var DeleteObject$ = [
    9,
    n0,
    _DOel,
    { [_h]: ["DELETE", "/{Key+}?x-id=DeleteObject", 204] },
    () => DeleteObjectRequest$,
    () => DeleteObjectOutput$
  ];
  var DeleteObjects$ = [
    9,
    n0,
    _DOele,
    { [_hC]: "-", [_h]: ["POST", "/?delete", 200] },
    () => DeleteObjectsRequest$,
    () => DeleteObjectsOutput$
  ];
  var DeleteObjectTagging$ = [
    9,
    n0,
    _DOT,
    { [_h]: ["DELETE", "/{Key+}?tagging", 204] },
    () => DeleteObjectTaggingRequest$,
    () => DeleteObjectTaggingOutput$
  ];
  var DeletePublicAccessBlock$ = [
    9,
    n0,
    _DPAB,
    { [_h]: ["DELETE", "/?publicAccessBlock", 204] },
    () => DeletePublicAccessBlockRequest$,
    () => __Unit
  ];
  var GetBucketAbac$ = [
    9,
    n0,
    _GBA,
    { [_h]: ["GET", "/?abac", 200] },
    () => GetBucketAbacRequest$,
    () => GetBucketAbacOutput$
  ];
  var GetBucketAccelerateConfiguration$ = [
    9,
    n0,
    _GBAC,
    { [_h]: ["GET", "/?accelerate", 200] },
    () => GetBucketAccelerateConfigurationRequest$,
    () => GetBucketAccelerateConfigurationOutput$
  ];
  var GetBucketAcl$ = [
    9,
    n0,
    _GBAe,
    { [_h]: ["GET", "/?acl", 200] },
    () => GetBucketAclRequest$,
    () => GetBucketAclOutput$
  ];
  var GetBucketAnalyticsConfiguration$ = [
    9,
    n0,
    _GBACe,
    { [_h]: ["GET", "/?analytics&x-id=GetBucketAnalyticsConfiguration", 200] },
    () => GetBucketAnalyticsConfigurationRequest$,
    () => GetBucketAnalyticsConfigurationOutput$
  ];
  var GetBucketCors$ = [
    9,
    n0,
    _GBC,
    { [_h]: ["GET", "/?cors", 200] },
    () => GetBucketCorsRequest$,
    () => GetBucketCorsOutput$
  ];
  var GetBucketEncryption$ = [
    9,
    n0,
    _GBE,
    { [_h]: ["GET", "/?encryption", 200] },
    () => GetBucketEncryptionRequest$,
    () => GetBucketEncryptionOutput$
  ];
  var GetBucketIntelligentTieringConfiguration$ = [
    9,
    n0,
    _GBITC,
    { [_h]: ["GET", "/?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration", 200] },
    () => GetBucketIntelligentTieringConfigurationRequest$,
    () => GetBucketIntelligentTieringConfigurationOutput$
  ];
  var GetBucketInventoryConfiguration$ = [
    9,
    n0,
    _GBIC,
    { [_h]: ["GET", "/?inventory&x-id=GetBucketInventoryConfiguration", 200] },
    () => GetBucketInventoryConfigurationRequest$,
    () => GetBucketInventoryConfigurationOutput$
  ];
  var GetBucketLifecycleConfiguration$ = [
    9,
    n0,
    _GBLC,
    { [_h]: ["GET", "/?lifecycle", 200] },
    () => GetBucketLifecycleConfigurationRequest$,
    () => GetBucketLifecycleConfigurationOutput$
  ];
  var GetBucketLocation$ = [
    9,
    n0,
    _GBL,
    { [_h]: ["GET", "/?location", 200] },
    () => GetBucketLocationRequest$,
    () => GetBucketLocationOutput$
  ];
  var GetBucketLogging$ = [
    9,
    n0,
    _GBLe,
    { [_h]: ["GET", "/?logging", 200] },
    () => GetBucketLoggingRequest$,
    () => GetBucketLoggingOutput$
  ];
  var GetBucketMetadataConfiguration$ = [
    9,
    n0,
    _GBMC,
    { [_h]: ["GET", "/?metadataConfiguration", 200] },
    () => GetBucketMetadataConfigurationRequest$,
    () => GetBucketMetadataConfigurationOutput$
  ];
  var GetBucketMetadataTableConfiguration$ = [
    9,
    n0,
    _GBMTC,
    { [_h]: ["GET", "/?metadataTable", 200] },
    () => GetBucketMetadataTableConfigurationRequest$,
    () => GetBucketMetadataTableConfigurationOutput$
  ];
  var GetBucketMetricsConfiguration$ = [
    9,
    n0,
    _GBMCe,
    { [_h]: ["GET", "/?metrics&x-id=GetBucketMetricsConfiguration", 200] },
    () => GetBucketMetricsConfigurationRequest$,
    () => GetBucketMetricsConfigurationOutput$
  ];
  var GetBucketNotificationConfiguration$ = [
    9,
    n0,
    _GBNC,
    { [_h]: ["GET", "/?notification", 200] },
    () => GetBucketNotificationConfigurationRequest$,
    () => NotificationConfiguration$
  ];
  var GetBucketOwnershipControls$ = [
    9,
    n0,
    _GBOC,
    { [_h]: ["GET", "/?ownershipControls", 200] },
    () => GetBucketOwnershipControlsRequest$,
    () => GetBucketOwnershipControlsOutput$
  ];
  var GetBucketPolicy$ = [
    9,
    n0,
    _GBP,
    { [_h]: ["GET", "/?policy", 200] },
    () => GetBucketPolicyRequest$,
    () => GetBucketPolicyOutput$
  ];
  var GetBucketPolicyStatus$ = [
    9,
    n0,
    _GBPS,
    { [_h]: ["GET", "/?policyStatus", 200] },
    () => GetBucketPolicyStatusRequest$,
    () => GetBucketPolicyStatusOutput$
  ];
  var GetBucketReplication$ = [
    9,
    n0,
    _GBR,
    { [_h]: ["GET", "/?replication", 200] },
    () => GetBucketReplicationRequest$,
    () => GetBucketReplicationOutput$
  ];
  var GetBucketRequestPayment$ = [
    9,
    n0,
    _GBRP,
    { [_h]: ["GET", "/?requestPayment", 200] },
    () => GetBucketRequestPaymentRequest$,
    () => GetBucketRequestPaymentOutput$
  ];
  var GetBucketTagging$ = [
    9,
    n0,
    _GBT,
    { [_h]: ["GET", "/?tagging", 200] },
    () => GetBucketTaggingRequest$,
    () => GetBucketTaggingOutput$
  ];
  var GetBucketVersioning$ = [
    9,
    n0,
    _GBV,
    { [_h]: ["GET", "/?versioning", 200] },
    () => GetBucketVersioningRequest$,
    () => GetBucketVersioningOutput$
  ];
  var GetBucketWebsite$ = [
    9,
    n0,
    _GBW,
    { [_h]: ["GET", "/?website", 200] },
    () => GetBucketWebsiteRequest$,
    () => GetBucketWebsiteOutput$
  ];
  var GetObject$ = [
    9,
    n0,
    _GO,
    { [_hC]: "-", [_h]: ["GET", "/{Key+}?x-id=GetObject", 200] },
    () => GetObjectRequest$,
    () => GetObjectOutput$
  ];
  var GetObjectAcl$ = [
    9,
    n0,
    _GOA,
    { [_h]: ["GET", "/{Key+}?acl", 200] },
    () => GetObjectAclRequest$,
    () => GetObjectAclOutput$
  ];
  var GetObjectAttributes$ = [
    9,
    n0,
    _GOAe,
    { [_h]: ["GET", "/{Key+}?attributes", 200] },
    () => GetObjectAttributesRequest$,
    () => GetObjectAttributesOutput$
  ];
  var GetObjectLegalHold$ = [
    9,
    n0,
    _GOLH,
    { [_h]: ["GET", "/{Key+}?legal-hold", 200] },
    () => GetObjectLegalHoldRequest$,
    () => GetObjectLegalHoldOutput$
  ];
  var GetObjectLockConfiguration$ = [
    9,
    n0,
    _GOLC,
    { [_h]: ["GET", "/?object-lock", 200] },
    () => GetObjectLockConfigurationRequest$,
    () => GetObjectLockConfigurationOutput$
  ];
  var GetObjectRetention$ = [
    9,
    n0,
    _GORe,
    { [_h]: ["GET", "/{Key+}?retention", 200] },
    () => GetObjectRetentionRequest$,
    () => GetObjectRetentionOutput$
  ];
  var GetObjectTagging$ = [
    9,
    n0,
    _GOT,
    { [_h]: ["GET", "/{Key+}?tagging", 200] },
    () => GetObjectTaggingRequest$,
    () => GetObjectTaggingOutput$
  ];
  var GetObjectTorrent$ = [
    9,
    n0,
    _GOTe,
    { [_h]: ["GET", "/{Key+}?torrent", 200] },
    () => GetObjectTorrentRequest$,
    () => GetObjectTorrentOutput$
  ];
  var GetPublicAccessBlock$ = [
    9,
    n0,
    _GPAB,
    { [_h]: ["GET", "/?publicAccessBlock", 200] },
    () => GetPublicAccessBlockRequest$,
    () => GetPublicAccessBlockOutput$
  ];
  var HeadBucket$ = [
    9,
    n0,
    _HB,
    { [_h]: ["HEAD", "/", 200] },
    () => HeadBucketRequest$,
    () => HeadBucketOutput$
  ];
  var HeadObject$ = [
    9,
    n0,
    _HO,
    { [_h]: ["HEAD", "/{Key+}", 200] },
    () => HeadObjectRequest$,
    () => HeadObjectOutput$
  ];
  var ListBucketAnalyticsConfigurations$ = [
    9,
    n0,
    _LBAC,
    { [_h]: ["GET", "/?analytics&x-id=ListBucketAnalyticsConfigurations", 200] },
    () => ListBucketAnalyticsConfigurationsRequest$,
    () => ListBucketAnalyticsConfigurationsOutput$
  ];
  var ListBucketIntelligentTieringConfigurations$ = [
    9,
    n0,
    _LBITC,
    { [_h]: ["GET", "/?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations", 200] },
    () => ListBucketIntelligentTieringConfigurationsRequest$,
    () => ListBucketIntelligentTieringConfigurationsOutput$
  ];
  var ListBucketInventoryConfigurations$ = [
    9,
    n0,
    _LBIC,
    { [_h]: ["GET", "/?inventory&x-id=ListBucketInventoryConfigurations", 200] },
    () => ListBucketInventoryConfigurationsRequest$,
    () => ListBucketInventoryConfigurationsOutput$
  ];
  var ListBucketMetricsConfigurations$ = [
    9,
    n0,
    _LBMC,
    { [_h]: ["GET", "/?metrics&x-id=ListBucketMetricsConfigurations", 200] },
    () => ListBucketMetricsConfigurationsRequest$,
    () => ListBucketMetricsConfigurationsOutput$
  ];
  var ListBuckets$ = [
    9,
    n0,
    _LB,
    { [_h]: ["GET", "/?x-id=ListBuckets", 200] },
    () => ListBucketsRequest$,
    () => ListBucketsOutput$
  ];
  var ListDirectoryBuckets$ = [
    9,
    n0,
    _LDB,
    { [_h]: ["GET", "/?x-id=ListDirectoryBuckets", 200] },
    () => ListDirectoryBucketsRequest$,
    () => ListDirectoryBucketsOutput$
  ];
  var ListMultipartUploads$ = [
    9,
    n0,
    _LMU,
    { [_h]: ["GET", "/?uploads", 200] },
    () => ListMultipartUploadsRequest$,
    () => ListMultipartUploadsOutput$
  ];
  var ListObjects$ = [
    9,
    n0,
    _LO,
    { [_h]: ["GET", "/", 200] },
    () => ListObjectsRequest$,
    () => ListObjectsOutput$
  ];
  var ListObjectsV2$ = [
    9,
    n0,
    _LOV,
    { [_h]: ["GET", "/?list-type=2", 200] },
    () => ListObjectsV2Request$,
    () => ListObjectsV2Output$
  ];
  var ListObjectVersions$ = [
    9,
    n0,
    _LOVi,
    { [_h]: ["GET", "/?versions", 200] },
    () => ListObjectVersionsRequest$,
    () => ListObjectVersionsOutput$
  ];
  var ListParts$ = [
    9,
    n0,
    _LP,
    { [_h]: ["GET", "/{Key+}?x-id=ListParts", 200] },
    () => ListPartsRequest$,
    () => ListPartsOutput$
  ];
  var PutBucketAbac$ = [
    9,
    n0,
    _PBA,
    { [_hC]: "-", [_h]: ["PUT", "/?abac", 200] },
    () => PutBucketAbacRequest$,
    () => __Unit
  ];
  var PutBucketAccelerateConfiguration$ = [
    9,
    n0,
    _PBAC,
    { [_hC]: "-", [_h]: ["PUT", "/?accelerate", 200] },
    () => PutBucketAccelerateConfigurationRequest$,
    () => __Unit
  ];
  var PutBucketAcl$ = [
    9,
    n0,
    _PBAu,
    { [_hC]: "-", [_h]: ["PUT", "/?acl", 200] },
    () => PutBucketAclRequest$,
    () => __Unit
  ];
  var PutBucketAnalyticsConfiguration$ = [
    9,
    n0,
    _PBACu,
    { [_h]: ["PUT", "/?analytics", 200] },
    () => PutBucketAnalyticsConfigurationRequest$,
    () => __Unit
  ];
  var PutBucketCors$ = [
    9,
    n0,
    _PBC,
    { [_hC]: "-", [_h]: ["PUT", "/?cors", 200] },
    () => PutBucketCorsRequest$,
    () => __Unit
  ];
  var PutBucketEncryption$ = [
    9,
    n0,
    _PBE,
    { [_hC]: "-", [_h]: ["PUT", "/?encryption", 200] },
    () => PutBucketEncryptionRequest$,
    () => __Unit
  ];
  var PutBucketIntelligentTieringConfiguration$ = [
    9,
    n0,
    _PBITC,
    { [_h]: ["PUT", "/?intelligent-tiering", 200] },
    () => PutBucketIntelligentTieringConfigurationRequest$,
    () => __Unit
  ];
  var PutBucketInventoryConfiguration$ = [
    9,
    n0,
    _PBIC,
    { [_h]: ["PUT", "/?inventory", 200] },
    () => PutBucketInventoryConfigurationRequest$,
    () => __Unit
  ];
  var PutBucketLifecycleConfiguration$ = [
    9,
    n0,
    _PBLC,
    { [_hC]: "-", [_h]: ["PUT", "/?lifecycle", 200] },
    () => PutBucketLifecycleConfigurationRequest$,
    () => PutBucketLifecycleConfigurationOutput$
  ];
  var PutBucketLogging$ = [
    9,
    n0,
    _PBL,
    { [_hC]: "-", [_h]: ["PUT", "/?logging", 200] },
    () => PutBucketLoggingRequest$,
    () => __Unit
  ];
  var PutBucketMetricsConfiguration$ = [
    9,
    n0,
    _PBMC,
    { [_h]: ["PUT", "/?metrics", 200] },
    () => PutBucketMetricsConfigurationRequest$,
    () => __Unit
  ];
  var PutBucketNotificationConfiguration$ = [
    9,
    n0,
    _PBNC,
    { [_h]: ["PUT", "/?notification", 200] },
    () => PutBucketNotificationConfigurationRequest$,
    () => __Unit
  ];
  var PutBucketOwnershipControls$ = [
    9,
    n0,
    _PBOC,
    { [_hC]: "-", [_h]: ["PUT", "/?ownershipControls", 200] },
    () => PutBucketOwnershipControlsRequest$,
    () => __Unit
  ];
  var PutBucketPolicy$ = [
    9,
    n0,
    _PBP,
    { [_hC]: "-", [_h]: ["PUT", "/?policy", 200] },
    () => PutBucketPolicyRequest$,
    () => __Unit
  ];
  var PutBucketReplication$ = [
    9,
    n0,
    _PBR,
    { [_hC]: "-", [_h]: ["PUT", "/?replication", 200] },
    () => PutBucketReplicationRequest$,
    () => __Unit
  ];
  var PutBucketRequestPayment$ = [
    9,
    n0,
    _PBRP,
    { [_hC]: "-", [_h]: ["PUT", "/?requestPayment", 200] },
    () => PutBucketRequestPaymentRequest$,
    () => __Unit
  ];
  var PutBucketTagging$ = [
    9,
    n0,
    _PBT,
    { [_hC]: "-", [_h]: ["PUT", "/?tagging", 200] },
    () => PutBucketTaggingRequest$,
    () => __Unit
  ];
  var PutBucketVersioning$ = [
    9,
    n0,
    _PBV,
    { [_hC]: "-", [_h]: ["PUT", "/?versioning", 200] },
    () => PutBucketVersioningRequest$,
    () => __Unit
  ];
  var PutBucketWebsite$ = [
    9,
    n0,
    _PBW,
    { [_hC]: "-", [_h]: ["PUT", "/?website", 200] },
    () => PutBucketWebsiteRequest$,
    () => __Unit
  ];
  var PutObject$ = [
    9,
    n0,
    _PO,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?x-id=PutObject", 200] },
    () => PutObjectRequest$,
    () => PutObjectOutput$
  ];
  var PutObjectAcl$ = [
    9,
    n0,
    _POA,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?acl", 200] },
    () => PutObjectAclRequest$,
    () => PutObjectAclOutput$
  ];
  var PutObjectLegalHold$ = [
    9,
    n0,
    _POLH,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?legal-hold", 200] },
    () => PutObjectLegalHoldRequest$,
    () => PutObjectLegalHoldOutput$
  ];
  var PutObjectLockConfiguration$ = [
    9,
    n0,
    _POLC,
    { [_hC]: "-", [_h]: ["PUT", "/?object-lock", 200] },
    () => PutObjectLockConfigurationRequest$,
    () => PutObjectLockConfigurationOutput$
  ];
  var PutObjectRetention$ = [
    9,
    n0,
    _PORu,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?retention", 200] },
    () => PutObjectRetentionRequest$,
    () => PutObjectRetentionOutput$
  ];
  var PutObjectTagging$ = [
    9,
    n0,
    _POT,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?tagging", 200] },
    () => PutObjectTaggingRequest$,
    () => PutObjectTaggingOutput$
  ];
  var PutPublicAccessBlock$ = [
    9,
    n0,
    _PPAB,
    { [_hC]: "-", [_h]: ["PUT", "/?publicAccessBlock", 200] },
    () => PutPublicAccessBlockRequest$,
    () => __Unit
  ];
  var RenameObject$ = [
    9,
    n0,
    _RO,
    { [_h]: ["PUT", "/{Key+}?renameObject", 200] },
    () => RenameObjectRequest$,
    () => RenameObjectOutput$
  ];
  var RestoreObject$ = [
    9,
    n0,
    _ROe,
    { [_hC]: "-", [_h]: ["POST", "/{Key+}?restore", 200] },
    () => RestoreObjectRequest$,
    () => RestoreObjectOutput$
  ];
  var SelectObjectContent$ = [
    9,
    n0,
    _SOC,
    { [_h]: ["POST", "/{Key+}?select&select-type=2", 200] },
    () => SelectObjectContentRequest$,
    () => SelectObjectContentOutput$
  ];
  var UpdateBucketMetadataInventoryTableConfiguration$ = [
    9,
    n0,
    _UBMITC,
    { [_hC]: "-", [_h]: ["PUT", "/?metadataInventoryTable", 200] },
    () => UpdateBucketMetadataInventoryTableConfigurationRequest$,
    () => __Unit
  ];
  var UpdateBucketMetadataJournalTableConfiguration$ = [
    9,
    n0,
    _UBMJTC,
    { [_hC]: "-", [_h]: ["PUT", "/?metadataJournalTable", 200] },
    () => UpdateBucketMetadataJournalTableConfigurationRequest$,
    () => __Unit
  ];
  var UpdateObjectEncryption$ = [
    9,
    n0,
    _UOE,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?encryption", 200] },
    () => UpdateObjectEncryptionRequest$,
    () => UpdateObjectEncryptionResponse$
  ];
  var UploadPart$ = [
    9,
    n0,
    _UP,
    { [_hC]: "-", [_h]: ["PUT", "/{Key+}?x-id=UploadPart", 200] },
    () => UploadPartRequest$,
    () => UploadPartOutput$
  ];
  var UploadPartCopy$ = [
    9,
    n0,
    _UPC,
    { [_h]: ["PUT", "/{Key+}?x-id=UploadPartCopy", 200] },
    () => UploadPartCopyRequest$,
    () => UploadPartCopyOutput$
  ];
  var WriteGetObjectResponse$ = [
    9,
    n0,
    _WGOR,
    { [_en]: ["{RequestRoute}."], [_h]: ["POST", "/WriteGetObjectResponse", 200] },
    () => WriteGetObjectResponseRequest$,
    () => __Unit
  ];

  // node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
  var CreateSessionCommand = class extends Command.classBuilder().ep(__spreadProps(__spreadValues({}, commonParams), {
    DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" }
  })).m(function(Command2, cs, config, o2) {
    return [
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config)
    ];
  }).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").sc(CreateSession$).build() {
  };

  // node_modules/@aws-sdk/client-s3/package.json
  var package_default = {
    name: "@aws-sdk/client-s3",
    description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native",
    version: "3.1045.0",
    scripts: {
      build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
      "build:cjs": "node ../../scripts/compilation/inline client-s3",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
      test: "yarn g:vitest run",
      "test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.mts",
      "test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.mts",
      "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts && yarn test:browser",
      "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
      "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs",
      "test:integration": "yarn g:vitest run -c vitest.config.integ.mts",
      "test:integration:watch": "yarn g:vitest watch -c vitest.config.integ.mts",
      "test:watch": "yarn g:vitest watch"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha1-browser": "5.2.0",
      "@aws-crypto/sha256-browser": "5.2.0",
      "@aws-crypto/sha256-js": "5.2.0",
      "@aws-sdk/core": "^3.974.8",
      "@aws-sdk/credential-provider-node": "^3.972.39",
      "@aws-sdk/middleware-bucket-endpoint": "^3.972.10",
      "@aws-sdk/middleware-expect-continue": "^3.972.10",
      "@aws-sdk/middleware-flexible-checksums": "^3.974.16",
      "@aws-sdk/middleware-host-header": "^3.972.10",
      "@aws-sdk/middleware-location-constraint": "^3.972.10",
      "@aws-sdk/middleware-logger": "^3.972.10",
      "@aws-sdk/middleware-recursion-detection": "^3.972.11",
      "@aws-sdk/middleware-sdk-s3": "^3.972.37",
      "@aws-sdk/middleware-ssec": "^3.972.10",
      "@aws-sdk/middleware-user-agent": "^3.972.38",
      "@aws-sdk/region-config-resolver": "^3.972.13",
      "@aws-sdk/signature-v4-multi-region": "^3.996.25",
      "@aws-sdk/types": "^3.973.8",
      "@aws-sdk/util-endpoints": "^3.996.8",
      "@aws-sdk/util-user-agent-browser": "^3.972.10",
      "@aws-sdk/util-user-agent-node": "^3.973.24",
      "@smithy/config-resolver": "^4.4.17",
      "@smithy/core": "^3.23.17",
      "@smithy/eventstream-serde-browser": "^4.2.14",
      "@smithy/eventstream-serde-config-resolver": "^4.3.14",
      "@smithy/eventstream-serde-node": "^4.2.14",
      "@smithy/fetch-http-handler": "^5.3.17",
      "@smithy/hash-blob-browser": "^4.2.15",
      "@smithy/hash-node": "^4.2.14",
      "@smithy/hash-stream-node": "^4.2.14",
      "@smithy/invalid-dependency": "^4.2.14",
      "@smithy/md5-js": "^4.2.14",
      "@smithy/middleware-content-length": "^4.2.14",
      "@smithy/middleware-endpoint": "^4.4.32",
      "@smithy/middleware-retry": "^4.5.7",
      "@smithy/middleware-serde": "^4.2.20",
      "@smithy/middleware-stack": "^4.2.14",
      "@smithy/node-config-provider": "^4.3.14",
      "@smithy/node-http-handler": "^4.6.1",
      "@smithy/protocol-http": "^5.3.14",
      "@smithy/smithy-client": "^4.12.13",
      "@smithy/types": "^4.14.1",
      "@smithy/url-parser": "^4.2.14",
      "@smithy/util-base64": "^4.3.2",
      "@smithy/util-body-length-browser": "^4.2.2",
      "@smithy/util-body-length-node": "^4.2.3",
      "@smithy/util-defaults-mode-browser": "^4.3.49",
      "@smithy/util-defaults-mode-node": "^4.2.54",
      "@smithy/util-endpoints": "^3.4.2",
      "@smithy/util-middleware": "^4.2.14",
      "@smithy/util-retry": "^4.3.6",
      "@smithy/util-stream": "^4.5.25",
      "@smithy/util-utf8": "^4.2.2",
      "@smithy/util-waiter": "^4.3.0",
      tslib: "^2.6.2"
    },
    devDependencies: {
      "@aws-sdk/signature-v4-crt": "3.1045.0",
      "@smithy/snapshot-testing": "^2.0.8",
      "@tsconfig/node20": "20.1.8",
      "@types/node": "^20.14.8",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      premove: "4.0.0",
      typescript: "~5.8.3",
      vitest: "^4.0.17"
    },
    engines: {
      node: ">=20.0.0"
    },
    typesVersions: {
      "<4.5": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-s3"
    }
  };

  // node_modules/@aws-crypto/sha1-browser/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf84 = (input) => new TextEncoder().encode(input);

  // node_modules/@aws-crypto/sha1-browser/build/module/isEmptyData.js
  function isEmptyData2(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }

  // node_modules/@aws-crypto/sha1-browser/build/module/constants.js
  var SHA_1_HASH = { name: "SHA-1" };
  var SHA_1_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_1_HASH
  };
  var EMPTY_DATA_SHA_1 = new Uint8Array([
    218,
    57,
    163,
    238,
    94,
    107,
    75,
    13,
    50,
    85,
    191,
    239,
    149,
    96,
    24,
    144,
    175,
    216,
    7,
    9
  ]);

  // node_modules/@aws-sdk/util-locate-window/dist-es/index.js
  var fallbackWindow = {};
  function locateWindow() {
    if (typeof window !== "undefined") {
      return window;
    } else if (typeof self !== "undefined") {
      return self;
    }
    return fallbackWindow;
  }

  // node_modules/@aws-crypto/sha1-browser/build/module/webCryptoSha1.js
  var Sha1 = (
    /** @class */
    (function() {
      function Sha13(secret) {
        this.toHash = new Uint8Array(0);
        if (secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            locateWindow().crypto.subtle.importKey("raw", convertToBuffer2(secret), SHA_1_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      }
      Sha13.prototype.update = function(data) {
        if (isEmptyData2(data)) {
          return;
        }
        var update = convertToBuffer2(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha13.prototype.digest = function() {
        var _this = this;
        if (this.key) {
          return this.key.then(function(key) {
            return locateWindow().crypto.subtle.sign(SHA_1_HMAC_ALGO, key, _this.toHash).then(function(data) {
              return new Uint8Array(data);
            });
          });
        }
        if (isEmptyData2(this.toHash)) {
          return Promise.resolve(EMPTY_DATA_SHA_1);
        }
        return Promise.resolve().then(function() {
          return locateWindow().crypto.subtle.digest(SHA_1_HASH, _this.toHash);
        }).then(function(data) {
          return Promise.resolve(new Uint8Array(data));
        });
      };
      Sha13.prototype.reset = function() {
        this.toHash = new Uint8Array(0);
      };
      return Sha13;
    })()
  );
  function convertToBuffer2(data) {
    if (typeof data === "string") {
      return fromUtf84(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }

  // node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
  var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
  ];
  function supportsWebCrypto(window2) {
    if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
      var subtle = window2.crypto.subtle;
      return supportsSubtleCrypto(subtle);
    }
    return false;
  }
  function supportsSecureRandom(window2) {
    if (typeof window2 === "object" && typeof window2.crypto === "object") {
      var getRandomValues = window2.crypto.getRandomValues;
      return typeof getRandomValues === "function";
    }
    return false;
  }
  function supportsSubtleCrypto(subtle) {
    return subtle && subtleCryptoMethods.every(function(methodName) {
      return typeof subtle[methodName] === "function";
    });
  }

  // node_modules/@aws-crypto/sha1-browser/build/module/crossPlatformSha1.js
  var Sha12 = (
    /** @class */
    (function() {
      function Sha13(secret) {
        if (supportsWebCrypto(locateWindow())) {
          this.hash = new Sha1(secret);
        } else {
          throw new Error("SHA1 not supported");
        }
      }
      Sha13.prototype.update = function(data, encoding) {
        this.hash.update(convertToBuffer(data));
      };
      Sha13.prototype.digest = function() {
        return this.hash.digest();
      };
      Sha13.prototype.reset = function() {
        this.hash.reset();
      };
      return Sha13;
    })()
  );

  // node_modules/@aws-crypto/sha256-browser/build/module/constants.js
  var SHA_256_HASH = { name: "SHA-256" };
  var SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_256_HASH
  };
  var EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
  ]);

  // node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
  var Sha256 = (
    /** @class */
    (function() {
      function Sha2564(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
      }
      Sha2564.prototype.update = function(data) {
        if (isEmptyData(data)) {
          return;
        }
        var update = convertToBuffer(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2564.prototype.digest = function() {
        var _this = this;
        if (this.key) {
          return this.key.then(function(key) {
            return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
              return new Uint8Array(data);
            });
          });
        }
        if (isEmptyData(this.toHash)) {
          return Promise.resolve(EMPTY_DATA_SHA_256);
        }
        return Promise.resolve().then(function() {
          return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
        }).then(function(data) {
          return Promise.resolve(new Uint8Array(data));
        });
      };
      Sha2564.prototype.reset = function() {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      };
      return Sha2564;
    })()
  );

  // node_modules/@aws-crypto/sha256-js/build/module/constants.js
  var BLOCK_SIZE = 64;
  var DIGEST_LENGTH = 32;
  var KEY = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

  // node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
  var RawSha256 = (
    /** @class */
    (function() {
      function RawSha2562() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
      }
      RawSha2562.prototype.update = function(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength--;
          if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
          }
        }
      };
      RawSha2562.prototype.digest = function() {
        if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8;
          var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
          var undecoratedLength = this.bufferLength;
          bufferView.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
              bufferView.setUint8(i2, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (var i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
            bufferView.setUint8(i2, 0);
          }
          bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
          bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
          this.hashBuffer();
          this.finished = true;
        }
        var out = new Uint8Array(DIGEST_LENGTH);
        for (var i2 = 0; i2 < 8; i2++) {
          out[i2 * 4] = this.state[i2] >>> 24 & 255;
          out[i2 * 4 + 1] = this.state[i2] >>> 16 & 255;
          out[i2 * 4 + 2] = this.state[i2] >>> 8 & 255;
          out[i2 * 4 + 3] = this.state[i2] >>> 0 & 255;
        }
        return out;
      };
      RawSha2562.prototype.hashBuffer = function() {
        var _a3 = this, buffer = _a3.buffer, state = _a3.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
          if (i2 < 16) {
            this.temp[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
          } else {
            var u2 = this.temp[i2 - 2];
            var t1_1 = (u2 >>> 17 | u2 << 15) ^ (u2 >>> 19 | u2 << 13) ^ u2 >>> 10;
            u2 = this.temp[i2 - 15];
            var t2_1 = (u2 >>> 7 | u2 << 25) ^ (u2 >>> 18 | u2 << 14) ^ u2 >>> 3;
            this.temp[i2] = (t1_1 + this.temp[i2 - 7] | 0) + (t2_1 + this.temp[i2 - 16] | 0);
          }
          var t12 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i2] + this.temp[i2] | 0) | 0) | 0;
          var t22 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
          state7 = state6;
          state6 = state5;
          state5 = state4;
          state4 = state3 + t12 | 0;
          state3 = state2;
          state2 = state1;
          state1 = state0;
          state0 = t12 + t22 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
      };
      return RawSha2562;
    })()
  );

  // node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
  var Sha2562 = (
    /** @class */
    (function() {
      function Sha2564(secret) {
        this.secret = secret;
        this.hash = new RawSha256();
        this.reset();
      }
      Sha2564.prototype.update = function(toHash) {
        if (isEmptyData(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update(convertToBuffer(toHash));
        } catch (e2) {
          this.error = e2;
        }
      };
      Sha2564.prototype.digestSync = function() {
        if (this.error) {
          throw this.error;
        }
        if (this.outer) {
          if (!this.outer.finished) {
            this.outer.update(this.hash.digest());
          }
          return this.outer.digest();
        }
        return this.hash.digest();
      };
      Sha2564.prototype.digest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            return [2, this.digestSync()];
          });
        });
      };
      Sha2564.prototype.reset = function() {
        this.hash = new RawSha256();
        if (this.secret) {
          this.outer = new RawSha256();
          var inner = bufferFromSecret(this.secret);
          var outer = new Uint8Array(BLOCK_SIZE);
          outer.set(inner);
          for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
            inner[i2] ^= 54;
            outer[i2] ^= 92;
          }
          this.hash.update(inner);
          this.outer.update(outer);
          for (var i2 = 0; i2 < inner.byteLength; i2++) {
            inner[i2] = 0;
          }
        }
      };
      return Sha2564;
    })()
  );
  function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
      var bufferHash = new RawSha256();
      bufferHash.update(input);
      input = bufferHash.digest();
    }
    var buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
  }

  // node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
  var Sha2563 = (
    /** @class */
    (function() {
      function Sha2564(secret) {
        if (supportsWebCrypto(locateWindow())) {
          this.hash = new Sha256(secret);
        } else {
          this.hash = new Sha2562(secret);
        }
      }
      Sha2564.prototype.update = function(data, encoding) {
        this.hash.update(convertToBuffer(data));
      };
      Sha2564.prototype.digest = function() {
        return this.hash.digest();
      };
      Sha2564.prototype.reset = function() {
        this.hash.reset();
      };
      return Sha2564;
    })()
  );

  // node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
  var createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => (config) => __async(null, null, function* () {
    var _a3, _b2, _c2, _d2, _e2, _f, _g, _h2, _i2, _j;
    const navigator2 = typeof window !== "undefined" ? window.navigator : void 0;
    const uaString = (_a3 = navigator2 == null ? void 0 : navigator2.userAgent) != null ? _a3 : "";
    const osName = (_d2 = (_c2 = (_b2 = navigator2 == null ? void 0 : navigator2.userAgentData) == null ? void 0 : _b2.platform) != null ? _c2 : fallback.os(uaString)) != null ? _d2 : "other";
    const osVersion = void 0;
    const brands = (_f = (_e2 = navigator2 == null ? void 0 : navigator2.userAgentData) == null ? void 0 : _e2.brands) != null ? _f : [];
    const brand = brands[brands.length - 1];
    const browserName = (_h2 = (_g = brand == null ? void 0 : brand.brand) != null ? _g : fallback.browser(uaString)) != null ? _h2 : "unknown";
    const browserVersion = (_i2 = brand == null ? void 0 : brand.version) != null ? _i2 : "unknown";
    const sections = [
      ["aws-sdk-js", clientVersion],
      ["ua", "2.1"],
      [`os/${osName}`, osVersion],
      ["lang/js"],
      ["md/browser", `${browserName}_${browserVersion}`]
    ];
    if (serviceId) {
      sections.push([`api/${serviceId}`, clientVersion]);
    }
    const appId = yield (_j = config == null ? void 0 : config.userAgentAppId) == null ? void 0 : _j.call(config);
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  });
  var fallback = {
    os(ua) {
      if (/iPhone|iPad|iPod/.test(ua))
        return "iOS";
      if (/Macintosh|Mac OS X/.test(ua))
        return "macOS";
      if (/Windows NT/.test(ua))
        return "Windows";
      if (/Android/.test(ua))
        return "Android";
      if (/Linux/.test(ua))
        return "Linux";
      return void 0;
    },
    browser(ua) {
      if (/EdgiOS|EdgA|Edg\//.test(ua))
        return "Microsoft Edge";
      if (/Firefox\//.test(ua))
        return "Firefox";
      if (/Chrome\//.test(ua))
        return "Chrome";
      if (/Safari\//.test(ua))
        return "Safari";
      return void 0;
    }
  };

  // node_modules/@smithy/eventstream-codec/dist-es/Int64.js
  var Int642 = class _Int64 {
    constructor(bytes) {
      __publicField(this, "bytes");
      this.bytes = bytes;
      if (bytes.byteLength !== 8) {
        throw new Error("Int64 buffers must be exactly 8 bytes");
      }
    }
    static fromNumber(number) {
      if (number > 9223372036854776e3 || number < -9223372036854776e3) {
        throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
      }
      const bytes = new Uint8Array(8);
      for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
        bytes[i2] = remaining;
      }
      if (number < 0) {
        negate2(bytes);
      }
      return new _Int64(bytes);
    }
    valueOf() {
      const bytes = this.bytes.slice(0);
      const negative = bytes[0] & 128;
      if (negative) {
        negate2(bytes);
      }
      return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
  function negate2(bytes) {
    for (let i2 = 0; i2 < 8; i2++) {
      bytes[i2] ^= 255;
    }
    for (let i2 = 7; i2 > -1; i2--) {
      bytes[i2]++;
      if (bytes[i2] !== 0)
        break;
    }
  }

  // node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
  var HeaderMarshaller = class {
    constructor(toUtf82, fromUtf85) {
      __publicField(this, "toUtf8");
      __publicField(this, "fromUtf8");
      this.toUtf8 = toUtf82;
      this.fromUtf8 = fromUtf85;
    }
    format(headers) {
      const chunks = [];
      for (const headerName of Object.keys(headers)) {
        const bytes = this.fromUtf8(headerName);
        chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
      }
      const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
      let position = 0;
      for (const chunk of chunks) {
        out.set(chunk, position);
        position += chunk.byteLength;
      }
      return out;
    }
    formatHeaderValue(header) {
      switch (header.type) {
        case "boolean":
          return Uint8Array.from([header.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, header.value]);
        case "short":
          const shortView = new DataView(new ArrayBuffer(3));
          shortView.setUint8(0, 3);
          shortView.setInt16(1, header.value, false);
          return new Uint8Array(shortView.buffer);
        case "integer":
          const intView = new DataView(new ArrayBuffer(5));
          intView.setUint8(0, 4);
          intView.setInt32(1, header.value, false);
          return new Uint8Array(intView.buffer);
        case "long":
          const longBytes = new Uint8Array(9);
          longBytes[0] = 5;
          longBytes.set(header.value.bytes, 1);
          return longBytes;
        case "binary":
          const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
          binView.setUint8(0, 6);
          binView.setUint16(1, header.value.byteLength, false);
          const binBytes = new Uint8Array(binView.buffer);
          binBytes.set(header.value, 3);
          return binBytes;
        case "string":
          const utf8Bytes = this.fromUtf8(header.value);
          const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
          strView.setUint8(0, 7);
          strView.setUint16(1, utf8Bytes.byteLength, false);
          const strBytes = new Uint8Array(strView.buffer);
          strBytes.set(utf8Bytes, 3);
          return strBytes;
        case "timestamp":
          const tsBytes = new Uint8Array(9);
          tsBytes[0] = 8;
          tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
          return tsBytes;
        case "uuid":
          if (!UUID_PATTERN2.test(header.value)) {
            throw new Error(`Invalid UUID received: ${header.value}`);
          }
          const uuidBytes = new Uint8Array(17);
          uuidBytes[0] = 9;
          uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
          return uuidBytes;
      }
    }
    parse(headers) {
      const out = {};
      let position = 0;
      while (position < headers.byteLength) {
        const nameLength = headers.getUint8(position++);
        const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
        position += nameLength;
        switch (headers.getUint8(position++)) {
          case 0:
            out[name] = {
              type: BOOLEAN_TAG,
              value: true
            };
            break;
          case 1:
            out[name] = {
              type: BOOLEAN_TAG,
              value: false
            };
            break;
          case 2:
            out[name] = {
              type: BYTE_TAG,
              value: headers.getInt8(position++)
            };
            break;
          case 3:
            out[name] = {
              type: SHORT_TAG,
              value: headers.getInt16(position, false)
            };
            position += 2;
            break;
          case 4:
            out[name] = {
              type: INT_TAG,
              value: headers.getInt32(position, false)
            };
            position += 4;
            break;
          case 5:
            out[name] = {
              type: LONG_TAG,
              value: new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
            };
            position += 8;
            break;
          case 6:
            const binaryLength = headers.getUint16(position, false);
            position += 2;
            out[name] = {
              type: BINARY_TAG,
              value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
            };
            position += binaryLength;
            break;
          case 7:
            const stringLength = headers.getUint16(position, false);
            position += 2;
            out[name] = {
              type: STRING_TAG,
              value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
            };
            position += stringLength;
            break;
          case 8:
            out[name] = {
              type: TIMESTAMP_TAG,
              value: new Date(new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
            };
            position += 8;
            break;
          case 9:
            const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
            position += 16;
            out[name] = {
              type: UUID_TAG,
              value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
            };
            break;
          default:
            throw new Error(`Unrecognized header type tag`);
        }
      }
      return out;
    }
  };
  var HEADER_VALUE_TYPE2;
  (function(HEADER_VALUE_TYPE3) {
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
  var BOOLEAN_TAG = "boolean";
  var BYTE_TAG = "byte";
  var SHORT_TAG = "short";
  var INT_TAG = "integer";
  var LONG_TAG = "long";
  var BINARY_TAG = "binary";
  var STRING_TAG = "string";
  var TIMESTAMP_TAG = "timestamp";
  var UUID_TAG = "uuid";
  var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

  // node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
  var PRELUDE_MEMBER_LENGTH = 4;
  var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
  var CHECKSUM_LENGTH = 4;
  var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
  function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
      throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
      throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
      throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
      throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
      headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
      body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
    };
  }

  // node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
  var EventStreamCodec = class {
    constructor(toUtf82, fromUtf85) {
      __publicField(this, "headerMarshaller");
      __publicField(this, "messageBuffer");
      __publicField(this, "isEndOfStream");
      this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf85);
      this.messageBuffer = [];
      this.isEndOfStream = false;
    }
    feed(message) {
      this.messageBuffer.push(this.decode(message));
    }
    endOfStream() {
      this.isEndOfStream = true;
    }
    getMessage() {
      const message = this.messageBuffer.pop();
      const isEndOfStream = this.isEndOfStream;
      return {
        getMessage() {
          return message;
        },
        isEndOfStream() {
          return isEndOfStream;
        }
      };
    }
    getAvailableMessages() {
      const messages = this.messageBuffer;
      this.messageBuffer = [];
      const isEndOfStream = this.isEndOfStream;
      return {
        getMessages() {
          return messages;
        },
        isEndOfStream() {
          return isEndOfStream;
        }
      };
    }
    encode({ headers: rawHeaders, body }) {
      const headers = this.headerMarshaller.format(rawHeaders);
      const length = headers.byteLength + body.byteLength + 16;
      const out = new Uint8Array(length);
      const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      const checksum = new Crc32();
      view.setUint32(0, length, false);
      view.setUint32(4, headers.byteLength, false);
      view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
      out.set(headers, 12);
      out.set(body, headers.byteLength + 12);
      view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
      return out;
    }
    decode(message) {
      const { headers, body } = splitMessage(message);
      return { headers: this.headerMarshaller.parse(headers), body };
    }
    formatHeaders(rawHeaders) {
      return this.headerMarshaller.format(rawHeaders);
    }
  };

  // node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
  var MessageDecoderStream = class {
    constructor(options) {
      __publicField(this, "options");
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    asyncIterator() {
      return __asyncGenerator(this, null, function* () {
        try {
          for (var iter = __forAwait(this.options.inputStream), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
            const bytes = temp.value;
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield new __await(temp.call(iter)));
          } finally {
            if (error)
              throw error[0];
          }
        }
      });
    }
  };

  // node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
  var MessageEncoderStream = class {
    constructor(options) {
      __publicField(this, "options");
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    asyncIterator() {
      return __asyncGenerator(this, null, function* () {
        try {
          for (var iter = __forAwait(this.options.messageStream), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
            const msg = temp.value;
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield new __await(temp.call(iter)));
          } finally {
            if (error)
              throw error[0];
          }
        }
        if (this.options.includeEndFrame) {
          yield new Uint8Array(0);
        }
      });
    }
  };

  // node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
  var SmithyMessageDecoderStream = class {
    constructor(options) {
      __publicField(this, "options");
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    asyncIterator() {
      return __asyncGenerator(this, null, function* () {
        try {
          for (var iter = __forAwait(this.options.messageStream), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
            const message = temp.value;
            const deserialized = yield new __await(this.options.deserializer(message));
            if (deserialized === void 0)
              continue;
            yield deserialized;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield new __await(temp.call(iter)));
          } finally {
            if (error)
              throw error[0];
          }
        }
      });
    }
  };

  // node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
  var SmithyMessageEncoderStream = class {
    constructor(options) {
      __publicField(this, "options");
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    asyncIterator() {
      return __asyncGenerator(this, null, function* () {
        try {
          for (var iter = __forAwait(this.options.inputStream), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
            const chunk = temp.value;
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield new __await(temp.call(iter)));
          } finally {
            if (error)
              throw error[0];
          }
        }
      });
    }
  };

  // node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
  function getChunkedStream(source) {
    let currentMessageTotalLength = 0;
    let currentMessagePendingLength = 0;
    let currentMessage = null;
    let messageLengthBuffer = null;
    const allocateMessage = (size) => {
      if (typeof size !== "number") {
        throw new Error("Attempted to allocate an event message where size was not a number: " + size);
      }
      currentMessageTotalLength = size;
      currentMessagePendingLength = 4;
      currentMessage = new Uint8Array(size);
      const currentMessageView = new DataView(currentMessage.buffer);
      currentMessageView.setUint32(0, size, false);
    };
    const iterator = function() {
      return __asyncGenerator(this, null, function* () {
        const sourceIterator = source[Symbol.asyncIterator]();
        while (true) {
          const { value, done } = yield new __await(sourceIterator.next());
          if (done) {
            if (!currentMessageTotalLength) {
              return;
            } else if (currentMessageTotalLength === currentMessagePendingLength) {
              yield currentMessage;
            } else {
              throw new Error("Truncated event message received.");
            }
            return;
          }
          const chunkLength = value.length;
          let currentOffset = 0;
          while (currentOffset < chunkLength) {
            if (!currentMessage) {
              const bytesRemaining = chunkLength - currentOffset;
              if (!messageLengthBuffer) {
                messageLengthBuffer = new Uint8Array(4);
              }
              const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
              messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
              currentMessagePendingLength += numBytesForTotal;
              currentOffset += numBytesForTotal;
              if (currentMessagePendingLength < 4) {
                break;
              }
              allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
              messageLengthBuffer = null;
            }
            const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
            currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
            currentMessagePendingLength += numBytesToWrite;
            currentOffset += numBytesToWrite;
            if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
              yield currentMessage;
              currentMessage = null;
              currentMessageTotalLength = 0;
              currentMessagePendingLength = 0;
            }
          }
        }
      });
    };
    return {
      [Symbol.asyncIterator]: iterator
    };
  }

  // node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
  function getMessageUnmarshaller(deserializer, toUtf82) {
    return function(message) {
      return __async(this, null, function* () {
        const { value: messageType } = message.headers[":message-type"];
        if (messageType === "error") {
          const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
          unmodeledError.name = message.headers[":error-code"].value;
          throw unmodeledError;
        } else if (messageType === "exception") {
          const code = message.headers[":exception-type"].value;
          const exception = { [code]: message };
          const deserializedException = yield deserializer(exception);
          if (deserializedException.$unknown) {
            const error = new Error(toUtf82(message.body));
            error.name = code;
            throw error;
          }
          throw deserializedException[code];
        } else if (messageType === "event") {
          const event = {
            [message.headers[":event-type"].value]: message
          };
          const deserialized = yield deserializer(event);
          if (deserialized.$unknown)
            return;
          return deserialized;
        } else {
          throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
        }
      });
    };
  }

  // node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
  var EventStreamMarshaller = class {
    constructor({ utf8Encoder, utf8Decoder }) {
      __publicField(this, "eventStreamCodec");
      __publicField(this, "utfEncoder");
      this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
      this.utfEncoder = utf8Encoder;
    }
    deserialize(body, deserializer) {
      const inputStream = getChunkedStream(body);
      return new SmithyMessageDecoderStream({
        messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
        deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
      });
    }
    serialize(inputStream, serializer) {
      return new MessageEncoderStream({
        messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
        encoder: this.eventStreamCodec,
        includeEndFrame: true
      });
    }
  };

  // node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js
  var readableStreamtoIterable = (readableStream) => ({
    [Symbol.asyncIterator]: function() {
      return __asyncGenerator(this, null, function* () {
        const reader = readableStream.getReader();
        try {
          while (true) {
            const { done, value } = yield new __await(reader.read());
            if (done)
              return;
            yield value;
          }
        } finally {
          reader.releaseLock();
        }
      });
    }
  });
  var iterableToReadableStream = (asyncIterable) => {
    const iterator = asyncIterable[Symbol.asyncIterator]();
    return new ReadableStream({
      pull(controller) {
        return __async(this, null, function* () {
          const { done, value } = yield iterator.next();
          if (done) {
            return controller.close();
          }
          controller.enqueue(value);
        });
      }
    });
  };

  // node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js
  var EventStreamMarshaller2 = class {
    constructor({ utf8Encoder, utf8Decoder }) {
      __publicField(this, "universalMarshaller");
      this.universalMarshaller = new EventStreamMarshaller({
        utf8Decoder,
        utf8Encoder
      });
    }
    deserialize(body, deserializer) {
      const bodyIterable = isReadableStream2(body) ? readableStreamtoIterable(body) : body;
      return this.universalMarshaller.deserialize(bodyIterable, deserializer);
    }
    serialize(input, serializer) {
      const serialziedIterable = this.universalMarshaller.serialize(input, serializer);
      return typeof ReadableStream === "function" ? iterableToReadableStream(serialziedIterable) : serialziedIterable;
    }
  };
  var isReadableStream2 = (body) => typeof ReadableStream === "function" && body instanceof ReadableStream;

  // node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js
  var eventStreamSerdeProvider = (options) => new EventStreamMarshaller2(options);

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
  var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    return {
      setHttpHandler(handler) {
        runtimeConfig.httpHandler = handler;
      },
      httpHandler() {
        return runtimeConfig.httpHandler;
      },
      updateHttpClientConfig(key, value) {
        var _a3;
        (_a3 = runtimeConfig.httpHandler) == null ? void 0 : _a3.updateHttpClientConfig(key, value);
      },
      httpHandlerConfigs() {
        return runtimeConfig.httpHandler.httpHandlerConfigs();
      }
    };
  };
  var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
      httpHandler: httpHandlerExtensionConfiguration.httpHandler()
    };
  };

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse5 = class {
    constructor(options) {
      __publicField(this, "statusCode");
      __publicField(this, "reason");
      __publicField(this, "headers");
      __publicField(this, "body");
      this.statusCode = options.statusCode;
      this.reason = options.reason;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
  var escapeUri2 = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode2);
  var hexEncode2 = (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`;

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/querystring-builder/dist-es/index.js
  function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
      const value = query[key];
      key = escapeUri2(key);
      if (Array.isArray(value)) {
        for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
          parts.push(`${key}=${escapeUri2(value[i2])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${escapeUri2(value)}`;
        }
        parts.push(qsEntry);
      }
    }
    return parts.join("&");
  }

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
  function createRequest(url, requestOptions) {
    return new Request(url, requestOptions);
  }

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
  function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
      if (timeoutInMs) {
        setTimeout(() => {
          const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        }, timeoutInMs);
      }
    });
  }

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
  var keepAliveSupport = {
    supported: void 0
  };
  var FetchHttpHandler = class _FetchHttpHandler {
    constructor(options) {
      __publicField(this, "config");
      __publicField(this, "configProvider");
      if (typeof options === "function") {
        this.configProvider = options().then((opts) => opts || {});
      } else {
        this.config = options != null ? options : {};
        this.configProvider = Promise.resolve(this.config);
      }
      if (keepAliveSupport.supported === void 0) {
        keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
      }
    }
    static create(instanceOrOptions) {
      if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
        return instanceOrOptions;
      }
      return new _FetchHttpHandler(instanceOrOptions);
    }
    destroy() {
    }
    handle(_0) {
      return __async(this, arguments, function* (request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
        var _a3, _b2, _c2;
        if (!this.config) {
          this.config = yield this.configProvider;
        }
        const requestTimeoutInMs = requestTimeout2 != null ? requestTimeout2 : this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        const credentials = this.config.credentials;
        if (abortSignal == null ? void 0 : abortSignal.aborted) {
          const abortError = buildAbortError(abortSignal);
          return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = buildQueryString(request.query || {});
        if (queryString) {
          path += `?${queryString}`;
        }
        if (request.fragment) {
          path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
          const username = (_a3 = request.username) != null ? _a3 : "";
          const password = (_b2 = request.password) != null ? _b2 : "";
          auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
        const requestOptions = {
          body,
          headers: new Headers(request.headers),
          method,
          credentials
        };
        if ((_c2 = this.config) == null ? void 0 : _c2.cache) {
          requestOptions.cache = this.config.cache;
        }
        if (body) {
          requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
          requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
          requestOptions.keepalive = keepAlive;
        }
        if (typeof this.config.requestInit === "function") {
          Object.assign(requestOptions, this.config.requestInit(request));
        }
        let removeSignalEventListener = () => {
        };
        const fetchRequest = createRequest(url, requestOptions);
        const raceOfPromises = [
          fetch(fetchRequest).then((response) => {
            const fetchHeaders = response.headers;
            const transformedHeaders = {};
            for (const pair of fetchHeaders.entries()) {
              transformedHeaders[pair[0]] = pair[1];
            }
            const hasReadableStream = response.body != void 0;
            if (!hasReadableStream) {
              return response.blob().then((body2) => ({
                response: new HttpResponse5({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: body2
                })
              }));
            }
            return {
              response: new HttpResponse5({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: response.body
              })
            };
          }),
          requestTimeout(requestTimeoutInMs)
        ];
        if (abortSignal) {
          raceOfPromises.push(new Promise((resolve, reject) => {
            const onAbort = () => {
              const abortError = buildAbortError(abortSignal);
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
            } else {
              abortSignal.onabort = onAbort;
            }
          }));
        }
        return Promise.race(raceOfPromises).finally(removeSignalEventListener);
      });
    }
    updateHttpClientConfig(key, value) {
      this.config = void 0;
      this.configProvider = this.configProvider.then((config) => {
        config[key] = value;
        return config;
      });
    }
    httpHandlerConfigs() {
      var _a3;
      return (_a3 = this.config) != null ? _a3 : {};
    }
  };
  function buildAbortError(abortSignal) {
    const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
    if (reason) {
      if (reason instanceof Error) {
        const abortError3 = new Error("Request aborted");
        abortError3.name = "AbortError";
        abortError3.cause = reason;
        return abortError3;
      }
      const abortError2 = new Error(String(reason));
      abortError2.name = "AbortError";
      return abortError2;
    }
    const abortError = new Error("Request aborted");
    abortError.name = "AbortError";
    return abortError;
  }

  // node_modules/@aws-sdk/client-s3/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
  var streamCollector2 = (stream) => __async(null, null, function* () {
    var _a3;
    if (typeof Blob === "function" && stream instanceof Blob || ((_a3 = stream.constructor) == null ? void 0 : _a3.name) === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) {
        return new Uint8Array(yield stream.arrayBuffer());
      }
      return collectBlob2(stream);
    }
    return collectStream2(stream);
  });
  function collectBlob2(blob) {
    return __async(this, null, function* () {
      const base64 = yield readToBase642(blob);
      const arrayBuffer = fromBase64(base64);
      return new Uint8Array(arrayBuffer);
    });
  }
  function collectStream2(stream) {
    return __async(this, null, function* () {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = yield reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    });
  }
  function readToBase642(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        var _a3;
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = (_a3 = reader.result) != null ? _a3 : "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  // node_modules/@smithy/chunked-blob-reader/dist-es/index.js
  function blobReader(_0, _1) {
    return __async(this, arguments, function* (blob, onChunk, chunkSize = 1024 * 1024) {
      const size = blob.size;
      let totalBytesRead = 0;
      while (totalBytesRead < size) {
        const slice = blob.slice(totalBytesRead, Math.min(size, totalBytesRead + chunkSize));
        onChunk(new Uint8Array(yield slice.arrayBuffer()));
        totalBytesRead += slice.size;
      }
    });
  }

  // node_modules/@smithy/hash-blob-browser/dist-es/index.js
  var blobHasher = function blobHasher2(hashCtor, blob) {
    return __async(this, null, function* () {
      const hash = new hashCtor();
      yield blobReader(blob, (chunk) => {
        hash.update(chunk);
      });
      return hash.digest();
    });
  };

  // node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
  var invalidProvider = (message) => () => Promise.reject(message);

  // node_modules/@smithy/md5-js/dist-es/index.js
  init_dist_es();

  // node_modules/@smithy/md5-js/dist-es/constants.js
  var BLOCK_SIZE2 = 64;
  var DIGEST_LENGTH2 = 16;
  var INIT2 = [1732584193, 4023233417, 2562383102, 271733878];

  // node_modules/@smithy/md5-js/dist-es/index.js
  var Md5 = class {
    constructor() {
      __publicField(this, "state");
      __publicField(this, "buffer");
      __publicField(this, "bufferLength");
      __publicField(this, "bytesHashed");
      __publicField(this, "finished");
      this.reset();
    }
    update(sourceData) {
      if (isEmptyData3(sourceData)) {
        return;
      } else if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      const data = convertToBuffer3(sourceData);
      let position = 0;
      let { byteLength } = data;
      this.bytesHashed += byteLength;
      while (byteLength > 0) {
        this.buffer.setUint8(this.bufferLength++, data[position++]);
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE2) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    }
    digest() {
      return __async(this, null, function* () {
        if (!this.finished) {
          const { buffer, bufferLength: undecoratedLength, bytesHashed } = this;
          const bitsHashed = bytesHashed * 8;
          buffer.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE2 >= BLOCK_SIZE2 - 8) {
            for (let i2 = this.bufferLength; i2 < BLOCK_SIZE2; i2++) {
              buffer.setUint8(i2, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (let i2 = this.bufferLength; i2 < BLOCK_SIZE2 - 8; i2++) {
            buffer.setUint8(i2, 0);
          }
          buffer.setUint32(BLOCK_SIZE2 - 8, bitsHashed >>> 0, true);
          buffer.setUint32(BLOCK_SIZE2 - 4, Math.floor(bitsHashed / 4294967296), true);
          this.hashBuffer();
          this.finished = true;
        }
        const out = new DataView(new ArrayBuffer(DIGEST_LENGTH2));
        for (let i2 = 0; i2 < 4; i2++) {
          out.setUint32(i2 * 4, this.state[i2], true);
        }
        return new Uint8Array(out.buffer, out.byteOffset, out.byteLength);
      });
    }
    hashBuffer() {
      const { buffer, state } = this;
      let a2 = state[0], b2 = state[1], c2 = state[2], d2 = state[3];
      a2 = ff(a2, b2, c2, d2, buffer.getUint32(0, true), 7, 3614090360);
      d2 = ff(d2, a2, b2, c2, buffer.getUint32(4, true), 12, 3905402710);
      c2 = ff(c2, d2, a2, b2, buffer.getUint32(8, true), 17, 606105819);
      b2 = ff(b2, c2, d2, a2, buffer.getUint32(12, true), 22, 3250441966);
      a2 = ff(a2, b2, c2, d2, buffer.getUint32(16, true), 7, 4118548399);
      d2 = ff(d2, a2, b2, c2, buffer.getUint32(20, true), 12, 1200080426);
      c2 = ff(c2, d2, a2, b2, buffer.getUint32(24, true), 17, 2821735955);
      b2 = ff(b2, c2, d2, a2, buffer.getUint32(28, true), 22, 4249261313);
      a2 = ff(a2, b2, c2, d2, buffer.getUint32(32, true), 7, 1770035416);
      d2 = ff(d2, a2, b2, c2, buffer.getUint32(36, true), 12, 2336552879);
      c2 = ff(c2, d2, a2, b2, buffer.getUint32(40, true), 17, 4294925233);
      b2 = ff(b2, c2, d2, a2, buffer.getUint32(44, true), 22, 2304563134);
      a2 = ff(a2, b2, c2, d2, buffer.getUint32(48, true), 7, 1804603682);
      d2 = ff(d2, a2, b2, c2, buffer.getUint32(52, true), 12, 4254626195);
      c2 = ff(c2, d2, a2, b2, buffer.getUint32(56, true), 17, 2792965006);
      b2 = ff(b2, c2, d2, a2, buffer.getUint32(60, true), 22, 1236535329);
      a2 = gg(a2, b2, c2, d2, buffer.getUint32(4, true), 5, 4129170786);
      d2 = gg(d2, a2, b2, c2, buffer.getUint32(24, true), 9, 3225465664);
      c2 = gg(c2, d2, a2, b2, buffer.getUint32(44, true), 14, 643717713);
      b2 = gg(b2, c2, d2, a2, buffer.getUint32(0, true), 20, 3921069994);
      a2 = gg(a2, b2, c2, d2, buffer.getUint32(20, true), 5, 3593408605);
      d2 = gg(d2, a2, b2, c2, buffer.getUint32(40, true), 9, 38016083);
      c2 = gg(c2, d2, a2, b2, buffer.getUint32(60, true), 14, 3634488961);
      b2 = gg(b2, c2, d2, a2, buffer.getUint32(16, true), 20, 3889429448);
      a2 = gg(a2, b2, c2, d2, buffer.getUint32(36, true), 5, 568446438);
      d2 = gg(d2, a2, b2, c2, buffer.getUint32(56, true), 9, 3275163606);
      c2 = gg(c2, d2, a2, b2, buffer.getUint32(12, true), 14, 4107603335);
      b2 = gg(b2, c2, d2, a2, buffer.getUint32(32, true), 20, 1163531501);
      a2 = gg(a2, b2, c2, d2, buffer.getUint32(52, true), 5, 2850285829);
      d2 = gg(d2, a2, b2, c2, buffer.getUint32(8, true), 9, 4243563512);
      c2 = gg(c2, d2, a2, b2, buffer.getUint32(28, true), 14, 1735328473);
      b2 = gg(b2, c2, d2, a2, buffer.getUint32(48, true), 20, 2368359562);
      a2 = hh(a2, b2, c2, d2, buffer.getUint32(20, true), 4, 4294588738);
      d2 = hh(d2, a2, b2, c2, buffer.getUint32(32, true), 11, 2272392833);
      c2 = hh(c2, d2, a2, b2, buffer.getUint32(44, true), 16, 1839030562);
      b2 = hh(b2, c2, d2, a2, buffer.getUint32(56, true), 23, 4259657740);
      a2 = hh(a2, b2, c2, d2, buffer.getUint32(4, true), 4, 2763975236);
      d2 = hh(d2, a2, b2, c2, buffer.getUint32(16, true), 11, 1272893353);
      c2 = hh(c2, d2, a2, b2, buffer.getUint32(28, true), 16, 4139469664);
      b2 = hh(b2, c2, d2, a2, buffer.getUint32(40, true), 23, 3200236656);
      a2 = hh(a2, b2, c2, d2, buffer.getUint32(52, true), 4, 681279174);
      d2 = hh(d2, a2, b2, c2, buffer.getUint32(0, true), 11, 3936430074);
      c2 = hh(c2, d2, a2, b2, buffer.getUint32(12, true), 16, 3572445317);
      b2 = hh(b2, c2, d2, a2, buffer.getUint32(24, true), 23, 76029189);
      a2 = hh(a2, b2, c2, d2, buffer.getUint32(36, true), 4, 3654602809);
      d2 = hh(d2, a2, b2, c2, buffer.getUint32(48, true), 11, 3873151461);
      c2 = hh(c2, d2, a2, b2, buffer.getUint32(60, true), 16, 530742520);
      b2 = hh(b2, c2, d2, a2, buffer.getUint32(8, true), 23, 3299628645);
      a2 = ii(a2, b2, c2, d2, buffer.getUint32(0, true), 6, 4096336452);
      d2 = ii(d2, a2, b2, c2, buffer.getUint32(28, true), 10, 1126891415);
      c2 = ii(c2, d2, a2, b2, buffer.getUint32(56, true), 15, 2878612391);
      b2 = ii(b2, c2, d2, a2, buffer.getUint32(20, true), 21, 4237533241);
      a2 = ii(a2, b2, c2, d2, buffer.getUint32(48, true), 6, 1700485571);
      d2 = ii(d2, a2, b2, c2, buffer.getUint32(12, true), 10, 2399980690);
      c2 = ii(c2, d2, a2, b2, buffer.getUint32(40, true), 15, 4293915773);
      b2 = ii(b2, c2, d2, a2, buffer.getUint32(4, true), 21, 2240044497);
      a2 = ii(a2, b2, c2, d2, buffer.getUint32(32, true), 6, 1873313359);
      d2 = ii(d2, a2, b2, c2, buffer.getUint32(60, true), 10, 4264355552);
      c2 = ii(c2, d2, a2, b2, buffer.getUint32(24, true), 15, 2734768916);
      b2 = ii(b2, c2, d2, a2, buffer.getUint32(52, true), 21, 1309151649);
      a2 = ii(a2, b2, c2, d2, buffer.getUint32(16, true), 6, 4149444226);
      d2 = ii(d2, a2, b2, c2, buffer.getUint32(44, true), 10, 3174756917);
      c2 = ii(c2, d2, a2, b2, buffer.getUint32(8, true), 15, 718787259);
      b2 = ii(b2, c2, d2, a2, buffer.getUint32(36, true), 21, 3951481745);
      state[0] = a2 + state[0] & 4294967295;
      state[1] = b2 + state[1] & 4294967295;
      state[2] = c2 + state[2] & 4294967295;
      state[3] = d2 + state[3] & 4294967295;
    }
    reset() {
      this.state = Uint32Array.from(INIT2);
      this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE2));
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
  };
  function cmn(q2, a2, b2, x2, s2, t8) {
    a2 = (a2 + q2 & 4294967295) + (x2 + t8 & 4294967295) & 4294967295;
    return (a2 << s2 | a2 >>> 32 - s2) + b2 & 4294967295;
  }
  function ff(a2, b2, c2, d2, x2, s2, t8) {
    return cmn(b2 & c2 | ~b2 & d2, a2, b2, x2, s2, t8);
  }
  function gg(a2, b2, c2, d2, x2, s2, t8) {
    return cmn(b2 & d2 | c2 & ~d2, a2, b2, x2, s2, t8);
  }
  function hh(a2, b2, c2, d2, x2, s2, t8) {
    return cmn(b2 ^ c2 ^ d2, a2, b2, x2, s2, t8);
  }
  function ii(a2, b2, c2, d2, x2, s2, t8) {
    return cmn(c2 ^ (b2 | ~d2), a2, b2, x2, s2, t8);
  }
  function isEmptyData3(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }
  function convertToBuffer3(data) {
    if (typeof data === "string") {
      return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
  var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
  var resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(() => __async(null, null, function* () {
    const mode = typeof defaultsMode === "function" ? yield defaultsMode() : defaultsMode;
    switch (mode == null ? void 0 : mode.toLowerCase()) {
      case "auto":
        return Promise.resolve(useMobileConfiguration() ? "mobile" : "standard");
      case "mobile":
      case "in-region":
      case "cross-region":
      case "standard":
      case "legacy":
        return Promise.resolve(mode == null ? void 0 : mode.toLocaleLowerCase());
      case void 0:
        return Promise.resolve("legacy");
      default:
        throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
  }));
  var useMobileConfiguration = () => {
    var _a3;
    const navigator2 = window == null ? void 0 : window.navigator;
    if (navigator2 == null ? void 0 : navigator2.connection) {
      const { effectiveType, rtt, downlink } = navigator2 == null ? void 0 : navigator2.connection;
      const slow = typeof effectiveType === "string" && effectiveType !== "4g" || Number(rtt) > 100 || Number(downlink) < 10;
      if (slow) {
        return true;
      }
    }
    return ((_a3 = navigator2 == null ? void 0 : navigator2.userAgentData) == null ? void 0 : _a3.mobile) || typeof (navigator2 == null ? void 0 : navigator2.maxTouchPoints) === "number" && (navigator2 == null ? void 0 : navigator2.maxTouchPoints) > 1;
  };

  // node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
  init_dist_es();
  var getRuntimeConfig = (config) => {
    var _a3, _b2, _c2, _d2, _e2, _f, _g, _h2, _i2, _j, _k, _l, _m2, _n, _o, _p2, _q, _r, _s2;
    return {
      apiVersion: "2006-03-01",
      base64Decoder: (_a3 = config == null ? void 0 : config.base64Decoder) != null ? _a3 : fromBase64,
      base64Encoder: (_b2 = config == null ? void 0 : config.base64Encoder) != null ? _b2 : toBase64,
      disableHostPrefix: (_c2 = config == null ? void 0 : config.disableHostPrefix) != null ? _c2 : false,
      endpointProvider: (_d2 = config == null ? void 0 : config.endpointProvider) != null ? _d2 : defaultEndpointResolver,
      extensions: (_e2 = config == null ? void 0 : config.extensions) != null ? _e2 : [],
      getAwsChunkedEncodingStream: (_f = config == null ? void 0 : config.getAwsChunkedEncodingStream) != null ? _f : getAwsChunkedEncodingStream,
      httpAuthSchemeProvider: (_g = config == null ? void 0 : config.httpAuthSchemeProvider) != null ? _g : defaultS3HttpAuthSchemeProvider,
      httpAuthSchemes: (_h2 = config == null ? void 0 : config.httpAuthSchemes) != null ? _h2 : [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new AwsSdkSigV4Signer()
        },
        {
          schemeId: "aws.auth#sigv4a",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
          signer: new AwsSdkSigV4ASigner()
        }
      ],
      logger: (_i2 = config == null ? void 0 : config.logger) != null ? _i2 : new NoOpLogger(),
      protocol: (_j = config == null ? void 0 : config.protocol) != null ? _j : S3RestXmlProtocol,
      protocolSettings: (_k = config == null ? void 0 : config.protocolSettings) != null ? _k : {
        defaultNamespace: "com.amazonaws.s3",
        errorTypeRegistries,
        xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
        version: "2006-03-01",
        serviceTarget: "AmazonS3"
      },
      sdkStreamMixin: (_l = config == null ? void 0 : config.sdkStreamMixin) != null ? _l : sdkStreamMixin,
      serviceId: (_m2 = config == null ? void 0 : config.serviceId) != null ? _m2 : "S3",
      signerConstructor: (_n = config == null ? void 0 : config.signerConstructor) != null ? _n : SignatureV4MultiRegion,
      signingEscapePath: (_o = config == null ? void 0 : config.signingEscapePath) != null ? _o : false,
      urlParser: (_p2 = config == null ? void 0 : config.urlParser) != null ? _p2 : parseUrl,
      useArnRegion: (_q = config == null ? void 0 : config.useArnRegion) != null ? _q : void 0,
      utf8Decoder: (_r = config == null ? void 0 : config.utf8Decoder) != null ? _r : fromUtf8,
      utf8Encoder: (_s2 = config == null ? void 0 : config.utf8Encoder) != null ? _s2 : toUtf8
    };
  };

  // node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
  var getRuntimeConfig2 = (config) => {
    var _a3, _b2, _c2, _d2, _e2, _f, _g, _h2, _i2, _j, _k, _l, _m2, _n, _o;
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig(config);
    return __spreadProps(__spreadValues(__spreadValues({}, clientSharedValues), config), {
      runtime: "browser",
      defaultsMode,
      bodyLengthChecker: (_a3 = config == null ? void 0 : config.bodyLengthChecker) != null ? _a3 : calculateBodyLength,
      credentialDefaultProvider: (_b2 = config == null ? void 0 : config.credentialDefaultProvider) != null ? _b2 : ((_) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider: (_c2 = config == null ? void 0 : config.defaultUserAgentProvider) != null ? _c2 : createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
      eventStreamSerdeProvider: (_d2 = config == null ? void 0 : config.eventStreamSerdeProvider) != null ? _d2 : eventStreamSerdeProvider,
      maxAttempts: (_e2 = config == null ? void 0 : config.maxAttempts) != null ? _e2 : DEFAULT_MAX_ATTEMPTS,
      md5: (_f = config == null ? void 0 : config.md5) != null ? _f : Md5,
      region: (_g = config == null ? void 0 : config.region) != null ? _g : invalidProvider("Region is missing"),
      requestHandler: FetchHttpHandler.create((_h2 = config == null ? void 0 : config.requestHandler) != null ? _h2 : defaultConfigProvider),
      retryMode: (_i2 = config == null ? void 0 : config.retryMode) != null ? _i2 : (() => __async(null, null, function* () {
        return (yield defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE;
      })),
      sha1: (_j = config == null ? void 0 : config.sha1) != null ? _j : Sha12,
      sha256: (_k = config == null ? void 0 : config.sha256) != null ? _k : Sha2563,
      streamCollector: (_l = config == null ? void 0 : config.streamCollector) != null ? _l : streamCollector2,
      streamHasher: (_m2 = config == null ? void 0 : config.streamHasher) != null ? _m2 : blobHasher,
      useDualstackEndpoint: (_n = config == null ? void 0 : config.useDualstackEndpoint) != null ? _n : (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
      useFipsEndpoint: (_o = config == null ? void 0 : config.useFipsEndpoint) != null ? _o : (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
    });
  };

  // node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
  var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    return {
      setRegion(region) {
        runtimeConfig.region = region;
      },
      region() {
        return runtimeConfig.region;
      }
    };
  };
  var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
      region: awsRegionExtensionConfiguration.region()
    };
  };

  // node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
      setHttpAuthScheme(httpAuthScheme) {
        const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
        if (index === -1) {
          _httpAuthSchemes.push(httpAuthScheme);
        } else {
          _httpAuthSchemes.splice(index, 1, httpAuthScheme);
        }
      },
      httpAuthSchemes() {
        return _httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider;
      },
      httpAuthSchemeProvider() {
        return _httpAuthSchemeProvider;
      },
      setCredentials(credentials) {
        _credentials = credentials;
      },
      credentials() {
        return _credentials;
      }
    };
  };
  var resolveHttpAuthRuntimeConfig = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };

  // node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
  var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
  };

  // node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
  var S3Client = class extends Client {
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig2(configuration || {});
      super(_config_0);
      __publicField(this, "config");
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters(_config_0);
      const _config_2 = resolveUserAgentConfig(_config_1);
      const _config_3 = resolveFlexibleChecksumsConfig(_config_2);
      const _config_4 = resolveRetryConfig(_config_3);
      const _config_5 = resolveRegionConfig(_config_4);
      const _config_6 = resolveHostHeaderConfig(_config_5);
      const _config_7 = resolveEndpointConfig(_config_6);
      const _config_8 = resolveEventStreamSerdeConfig(_config_7);
      const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
      const _config_10 = resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
      const _config_11 = resolveRuntimeExtensions(_config_10, (configuration == null ? void 0 : configuration.extensions) || []);
      this.config = _config_11;
      this.middlewareStack.use(getSchemaSerdePlugin(this.config));
      this.middlewareStack.use(getUserAgentPlugin(this.config));
      this.middlewareStack.use(getRetryPlugin(this.config));
      this.middlewareStack.use(getContentLengthPlugin(this.config));
      this.middlewareStack.use(getHostHeaderPlugin(this.config));
      this.middlewareStack.use(getLoggerPlugin(this.config));
      this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultS3HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: (config) => __async(this, null, function* () {
          return new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "aws.auth#sigv4a": config.credentials
          });
        })
      }));
      this.middlewareStack.use(getHttpSigningPlugin(this.config));
      this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
      this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
      this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
      this.middlewareStack.use(getS3ExpressPlugin(this.config));
      this.middlewareStack.use(getS3ExpressHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };

  // node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
  function ssecMiddleware(options) {
    return (next) => (args) => __async(null, null, function* () {
      const input = __spreadValues({}, args.input);
      const properties = [
        {
          target: "SSECustomerKey",
          hash: "SSECustomerKeyMD5"
        },
        {
          target: "CopySourceSSECustomerKey",
          hash: "CopySourceSSECustomerKeyMD5"
        }
      ];
      for (const prop of properties) {
        const value = input[prop.target];
        if (value) {
          let valueForHash;
          if (typeof value === "string") {
            if (isValidBase64EncodedSSECustomerKey(value, options)) {
              valueForHash = options.base64Decoder(value);
            } else {
              valueForHash = options.utf8Decoder(value);
              input[prop.target] = options.base64Encoder(valueForHash);
            }
          } else {
            valueForHash = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : new Uint8Array(value);
            input[prop.target] = options.base64Encoder(valueForHash);
          }
          const hash = new options.md5();
          hash.update(valueForHash);
          input[prop.hash] = options.base64Encoder(yield hash.digest());
        }
      }
      return next(__spreadProps(__spreadValues({}, args), {
        input
      }));
    });
  }
  var ssecMiddlewareOptions = {
    name: "ssecMiddleware",
    step: "initialize",
    tags: ["SSE"],
    override: true
  };
  var getSsecPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
    }
  });
  function isValidBase64EncodedSSECustomerKey(str, options) {
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    if (!base64Regex.test(str))
      return false;
    try {
      const decodedBytes = options.base64Decoder(str);
      return decodedBytes.length === 32;
    } catch (e2) {
      return false;
    }
  }

  // node_modules/@aws-sdk/client-s3/dist-es/commands/GetObjectCommand.js
  var GetObjectCommand = class extends Command.classBuilder().ep(__spreadProps(__spreadValues({}, commonParams), {
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" }
  })).m(function(Command2, cs, config, o2) {
    return [
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestChecksumRequired: false,
        requestValidationModeMember: "ChecksumMode",
        "responseAlgorithms": ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1", "SHA512", "MD5", "XXHASH64", "XXHASH3", "XXHASH128"]
      }),
      getSsecPlugin(config),
      getS3ExpiresMiddlewarePlugin(config)
    ];
  }).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").sc(GetObject$).build() {
  };

  // node_modules/@aws-sdk/client-s3/dist-es/commands/ListObjectsV2Command.js
  var ListObjectsV2Command = class extends Command.classBuilder().ep(__spreadProps(__spreadValues({}, commonParams), {
    Bucket: { type: "contextParams", name: "Bucket" },
    Prefix: { type: "contextParams", name: "Prefix" }
  })).m(function(Command2, cs, config, o2) {
    return [
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config)
    ];
  }).s("AmazonS3", "ListObjectsV2", {}).n("S3Client", "ListObjectsV2Command").sc(ListObjectsV2$).build() {
  };

  // node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
  var PutObjectCommand = class extends Command.classBuilder().ep(__spreadProps(__spreadValues({}, commonParams), {
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" }
  })).m(function(Command2, cs, config, o2) {
    return [
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm" },
        requestChecksumRequired: false
      }),
      getCheckContentLengthHeaderPlugin(config),
      getThrow200ExceptionsPlugin(config),
      getSsecPlugin(config)
    ];
  }).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").sc(PutObject$).build() {
  };

  // node_modules/flatpickr/dist/esm/types/options.js
  var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition"
  ];
  var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function(err) {
      return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function(givenDate) {
      var date2 = new Date(givenDate.getTime());
      date2.setHours(0, 0, 0, 0);
      date2.setDate(date2.getDate() + 3 - (date2.getDay() + 6) % 7);
      var week1 = new Date(date2.getFullYear(), 0, 4);
      return 1 + Math.round(((date2.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: /* @__PURE__ */ new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: void 0,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };

  // node_modules/flatpickr/dist/esm/l10n/default.js
  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      longhand: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function(nth) {
      var s2 = nth % 100;
      if (s2 > 3 && s2 < 21)
        return "th";
      switch (s2 % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
  };
  var default_default = english;

  // node_modules/flatpickr/dist/esm/utils/index.js
  var pad = function(number, length) {
    if (length === void 0) {
      length = 2;
    }
    return ("000" + number).slice(length * -1);
  };
  var int = function(bool) {
    return bool === true ? 1 : 0;
  };
  function debounce(fn, wait) {
    var t8;
    return function() {
      var _this = this;
      var args = arguments;
      clearTimeout(t8);
      t8 = setTimeout(function() {
        return fn.apply(_this, args);
      }, wait);
    };
  }
  var arrayify = function(obj) {
    return obj instanceof Array ? obj : [obj];
  };

  // node_modules/flatpickr/dist/esm/utils/dom.js
  function toggleClass(elem, className, bool) {
    if (bool === true)
      return elem.classList.add(className);
    elem.classList.remove(className);
  }
  function createElement(tag, className, content) {
    var e2 = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e2.className = className;
    if (content !== void 0)
      e2.textContent = content;
    return e2;
  }
  function clearNode(node) {
    while (node.firstChild)
      node.removeChild(node.firstChild);
  }
  function findParent(node, condition) {
    if (condition(node))
      return node;
    else if (node.parentNode)
      return findParent(node.parentNode, condition);
    return void 0;
  }
  function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
      numInput.type = "number";
    } else {
      numInput.type = "text";
      numInput.pattern = "\\d*";
    }
    if (opts !== void 0)
      for (var key in opts)
        numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }
  function getEventTarget(event) {
    try {
      if (typeof event.composedPath === "function") {
        var path = event.composedPath();
        return path[0];
      }
      return event.target;
    } catch (error) {
      return event.target;
    }
  }

  // node_modules/flatpickr/dist/esm/utils/formatting.js
  var doNothing = function() {
    return void 0;
  };
  var monthToStr = function(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };
  var revFormat = {
    D: doNothing,
    F: function(dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function(dateObj, hour) {
      dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    J: function(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    K: function(dateObj, amPM, locale) {
      dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function(dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: function(_, unixSeconds) {
      return new Date(parseFloat(unixSeconds) * 1e3);
    },
    W: function(dateObj, weekNum, locale) {
      var weekNumber = parseInt(weekNum);
      var date2 = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      date2.setDate(date2.getDate() - date2.getDay() + locale.firstDayOfWeek);
      return date2;
    },
    Y: function(dateObj, year2) {
      dateObj.setFullYear(parseFloat(year2));
    },
    Z: function(_, ISODate) {
      return new Date(ISODate);
    },
    d: function(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    h: function(dateObj, hour) {
      dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function(dateObj, minutes) {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: function(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    u: function(_, unixMillSeconds) {
      return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function(dateObj, year2) {
      dateObj.setFullYear(2e3 + parseFloat(year2));
    }
  };
  var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
  var formats = {
    Z: function(date2) {
      return date2.toISOString();
    },
    D: function(date2, locale, options) {
      return locale.weekdays.shorthand[formats.w(date2, locale, options)];
    },
    F: function(date2, locale, options) {
      return monthToStr(formats.n(date2, locale, options) - 1, false, locale);
    },
    G: function(date2, locale, options) {
      return pad(formats.h(date2, locale, options));
    },
    H: function(date2) {
      return pad(date2.getHours());
    },
    J: function(date2, locale) {
      return locale.ordinal !== void 0 ? date2.getDate() + locale.ordinal(date2.getDate()) : date2.getDate();
    },
    K: function(date2, locale) {
      return locale.amPM[int(date2.getHours() > 11)];
    },
    M: function(date2, locale) {
      return monthToStr(date2.getMonth(), true, locale);
    },
    S: function(date2) {
      return pad(date2.getSeconds());
    },
    U: function(date2) {
      return date2.getTime() / 1e3;
    },
    W: function(date2, _, options) {
      return options.getWeek(date2);
    },
    Y: function(date2) {
      return pad(date2.getFullYear(), 4);
    },
    d: function(date2) {
      return pad(date2.getDate());
    },
    h: function(date2) {
      return date2.getHours() % 12 ? date2.getHours() % 12 : 12;
    },
    i: function(date2) {
      return pad(date2.getMinutes());
    },
    j: function(date2) {
      return date2.getDate();
    },
    l: function(date2, locale) {
      return locale.weekdays.longhand[date2.getDay()];
    },
    m: function(date2) {
      return pad(date2.getMonth() + 1);
    },
    n: function(date2) {
      return date2.getMonth() + 1;
    },
    s: function(date2) {
      return date2.getSeconds();
    },
    u: function(date2) {
      return date2.getTime();
    },
    w: function(date2) {
      return date2.getDay();
    },
    y: function(date2) {
      return String(date2.getFullYear()).substring(2);
    }
  };

  // node_modules/flatpickr/dist/esm/utils/dates.js
  var createDateFormatter = function(_a3) {
    var _b2 = _a3.config, config = _b2 === void 0 ? defaults : _b2, _c2 = _a3.l10n, l10n = _c2 === void 0 ? english : _c2, _d2 = _a3.isMobile, isMobile = _d2 === void 0 ? false : _d2;
    return function(dateObj, frmt, overrideLocale) {
      var locale = overrideLocale || l10n;
      if (config.formatDate !== void 0 && !isMobile) {
        return config.formatDate(dateObj, frmt, locale);
      }
      return frmt.split("").map(function(c2, i2, arr) {
        return formats[c2] && arr[i2 - 1] !== "\\" ? formats[c2](dateObj, locale, config) : c2 !== "\\" ? c2 : "";
      }).join("");
    };
  };
  var createDateParser = function(_a3) {
    var _b2 = _a3.config, config = _b2 === void 0 ? defaults : _b2, _c2 = _a3.l10n, l10n = _c2 === void 0 ? english : _c2;
    return function(date2, givenFormat, timeless, customLocale) {
      if (date2 !== 0 && !date2)
        return void 0;
      var locale = customLocale || l10n;
      var parsedDate;
      var dateOrig = date2;
      if (date2 instanceof Date)
        parsedDate = new Date(date2.getTime());
      else if (typeof date2 !== "string" && date2.toFixed !== void 0)
        parsedDate = new Date(date2);
      else if (typeof date2 === "string") {
        var format2 = givenFormat || (config || defaults).dateFormat;
        var datestr = String(date2).trim();
        if (datestr === "today") {
          parsedDate = /* @__PURE__ */ new Date();
          timeless = true;
        } else if (config && config.parseDate) {
          parsedDate = config.parseDate(date2, format2);
        } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
          parsedDate = new Date(date2);
        } else {
          var matched = void 0, ops = [];
          for (var i2 = 0, matchIndex = 0, regexStr = ""; i2 < format2.length; i2++) {
            var token = format2[i2];
            var isBackSlash = token === "\\";
            var escaped = format2[i2 - 1] === "\\" || isBackSlash;
            if (tokenRegex[token] && !escaped) {
              regexStr += tokenRegex[token];
              var match = new RegExp(regexStr).exec(date2);
              if (match && (matched = true)) {
                ops[token !== "Y" ? "push" : "unshift"]({
                  fn: revFormat[token],
                  val: match[++matchIndex]
                });
              }
            } else if (!isBackSlash)
              regexStr += ".";
          }
          parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
          ops.forEach(function(_a4) {
            var fn = _a4.fn, val = _a4.val;
            return parsedDate = fn(parsedDate, val, locale) || parsedDate;
          });
          parsedDate = matched ? parsedDate : void 0;
        }
      }
      if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error("Invalid date provided: " + dateOrig));
        return void 0;
      }
      if (timeless === true)
        parsedDate.setHours(0, 0, 0, 0);
      return parsedDate;
    };
  };
  function compareDates(date1, date2, timeless) {
    if (timeless === void 0) {
      timeless = true;
    }
    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }
    return date1.getTime() - date2.getTime();
  }
  var isBetween = function(ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };
  var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  };
  var parseSeconds = function(secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
  };
  var duration = {
    DAY: 864e5
  };
  function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== void 0) {
      var minHour = config.minDate.getHours();
      var minMinutes = config.minDate.getMinutes();
      var minSeconds = config.minDate.getSeconds();
      if (hours < minHour) {
        hours = minHour;
      }
      if (hours === minHour && minutes < minMinutes) {
        minutes = minMinutes;
      }
      if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
        seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== void 0) {
      var maxHr = config.maxDate.getHours();
      var maxMinutes = config.maxDate.getMinutes();
      hours = Math.min(hours, maxHr);
      if (hours === maxHr)
        minutes = Math.min(maxMinutes, minutes);
      if (hours === maxHr && minutes === maxMinutes)
        seconds = config.maxDate.getSeconds();
    }
    return { hours, minutes, seconds };
  }

  // node_modules/flatpickr/dist/esm/utils/polyfills.js
  if (typeof Object.assign !== "function") {
    Object.assign = function(target) {
      var args = [];
      for (var _i2 = 1; _i2 < arguments.length; _i2++) {
        args[_i2 - 1] = arguments[_i2];
      }
      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }
      var _loop_1 = function(source2) {
        if (source2) {
          Object.keys(source2).forEach(function(key) {
            return target[key] = source2[key];
          });
        }
      };
      for (var _a3 = 0, args_1 = args; _a3 < args_1.length; _a3++) {
        var source = args_1[_a3];
        _loop_1(source);
      }
      return target;
    };
  }

  // node_modules/flatpickr/dist/esm/index.js
  var __assign = function() {
    __assign = Object.assign || function(t8) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2))
          t8[p2] = s2[p2];
      }
      return t8;
    };
    return __assign.apply(this, arguments);
  };
  var __spreadArrays = function() {
    for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++) s2 += arguments[i2].length;
    for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
      for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
        r2[k2] = a2[j2];
    return r2;
  };
  var DEBOUNCED_CHANGE_MS = 300;
  function FlatpickrInstance(element, instanceConfig) {
    var self2 = {
      config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
      l10n: default_default
    };
    self2.parseDate = createDateParser({ config: self2.config, l10n: self2.l10n });
    self2._handlers = [];
    self2.pluginElements = [];
    self2.loadedPlugins = [];
    self2._bind = bind;
    self2._setHoursFromDate = setHoursFromDate;
    self2._positionCalendar = positionCalendar;
    self2.changeMonth = changeMonth;
    self2.changeYear = changeYear;
    self2.clear = clear;
    self2.close = close;
    self2.onMouseOver = onMouseOver;
    self2._createElement = createElement;
    self2.createDay = createDay;
    self2.destroy = destroy;
    self2.isEnabled = isEnabled;
    self2.jumpToDate = jumpToDate;
    self2.updateValue = updateValue;
    self2.open = open;
    self2.redraw = redraw;
    self2.set = set;
    self2.setDate = setDate;
    self2.toggle = toggle;
    function setupHelperFunctions() {
      self2.utils = {
        getDaysInMonth: function(month, yr) {
          if (month === void 0) {
            month = self2.currentMonth;
          }
          if (yr === void 0) {
            yr = self2.currentYear;
          }
          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
            return 29;
          return self2.l10n.daysInMonth[month];
        }
      };
    }
    function init() {
      self2.element = self2.input = element;
      self2.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self2.isMobile)
        build();
      bindEvents();
      if (self2.selectedDates.length || self2.config.noCalendar) {
        if (self2.config.enableTime) {
          setHoursFromDate(self2.config.noCalendar ? self2.latestSelectedDateObj : void 0);
        }
        updateValue(false);
      }
      setCalendarWidth();
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (!self2.isMobile && isSafari) {
        positionCalendar();
      }
      triggerEvent("onReady");
    }
    function getClosestActiveElement() {
      var _a3;
      return ((_a3 = self2.calendarContainer) === null || _a3 === void 0 ? void 0 : _a3.getRootNode()).activeElement || document.activeElement;
    }
    function bindToInstance(fn) {
      return fn.bind(self2);
    }
    function setCalendarWidth() {
      var config = self2.config;
      if (config.weekNumbers === false && config.showMonths === 1) {
        return;
      } else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function() {
          if (self2.calendarContainer !== void 0) {
            self2.calendarContainer.style.visibility = "hidden";
            self2.calendarContainer.style.display = "block";
          }
          if (self2.daysContainer !== void 0) {
            var daysWidth = (self2.days.offsetWidth + 1) * config.showMonths;
            self2.daysContainer.style.width = daysWidth + "px";
            self2.calendarContainer.style.width = daysWidth + (self2.weekWrapper !== void 0 ? self2.weekWrapper.offsetWidth : 0) + "px";
            self2.calendarContainer.style.removeProperty("visibility");
            self2.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }
    function updateTime(e2) {
      if (self2.selectedDates.length === 0) {
        var defaultDate = self2.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self2.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self2.config.minDate.getTime());
        var defaults2 = getDefaultHours(self2.config);
        defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
        self2.selectedDates = [defaultDate];
        self2.latestSelectedDateObj = defaultDate;
      }
      if (e2 !== void 0 && e2.type !== "blur") {
        timeWrapper(e2);
      }
      var prevValue = self2._input.value;
      setHoursFromInputs();
      updateValue();
      if (self2._input.value !== prevValue) {
        self2._debouncedChange();
      }
    }
    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * int(amPM === self2.l10n.amPM[1]);
    }
    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;
        default:
          return hour % 12;
      }
    }
    function setHoursFromInputs() {
      if (self2.hourElement === void 0 || self2.minuteElement === void 0)
        return;
      var hours = (parseInt(self2.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self2.minuteElement.value, 10) || 0) % 60, seconds = self2.secondElement !== void 0 ? (parseInt(self2.secondElement.value, 10) || 0) % 60 : 0;
      if (self2.amPM !== void 0) {
        hours = ampm2military(hours, self2.amPM.textContent);
      }
      var limitMinHours = self2.config.minTime !== void 0 || self2.config.minDate && self2.minDateHasTime && self2.latestSelectedDateObj && compareDates(self2.latestSelectedDateObj, self2.config.minDate, true) === 0;
      var limitMaxHours = self2.config.maxTime !== void 0 || self2.config.maxDate && self2.maxDateHasTime && self2.latestSelectedDateObj && compareDates(self2.latestSelectedDateObj, self2.config.maxDate, true) === 0;
      if (self2.config.maxTime !== void 0 && self2.config.minTime !== void 0 && self2.config.minTime > self2.config.maxTime) {
        var minBound = calculateSecondsSinceMidnight(self2.config.minTime.getHours(), self2.config.minTime.getMinutes(), self2.config.minTime.getSeconds());
        var maxBound = calculateSecondsSinceMidnight(self2.config.maxTime.getHours(), self2.config.maxTime.getMinutes(), self2.config.maxTime.getSeconds());
        var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
        if (currentTime > maxBound && currentTime < minBound) {
          var result = parseSeconds(minBound);
          hours = result[0];
          minutes = result[1];
          seconds = result[2];
        }
      } else {
        if (limitMaxHours) {
          var maxTime = self2.config.maxTime !== void 0 ? self2.config.maxTime : self2.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours())
            minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes())
            seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
          var minTime = self2.config.minTime !== void 0 ? self2.config.minTime : self2.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours() && minutes < minTime.getMinutes())
            minutes = minTime.getMinutes();
          if (minutes === minTime.getMinutes())
            seconds = Math.max(seconds, minTime.getSeconds());
        }
      }
      setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
      var date2 = dateObj || self2.latestSelectedDateObj;
      if (date2 && date2 instanceof Date) {
        setHours(date2.getHours(), date2.getMinutes(), date2.getSeconds());
      }
    }
    function setHours(hours, minutes, seconds) {
      if (self2.latestSelectedDateObj !== void 0) {
        self2.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }
      if (!self2.hourElement || !self2.minuteElement || self2.isMobile)
        return;
      self2.hourElement.value = pad(!self2.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
      self2.minuteElement.value = pad(minutes);
      if (self2.amPM !== void 0)
        self2.amPM.textContent = self2.l10n.amPM[int(hours >= 12)];
      if (self2.secondElement !== void 0)
        self2.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
      var eventTarget = getEventTarget(event);
      var year2 = parseInt(eventTarget.value) + (event.delta || 0);
      if (year2 / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year2.toString())) {
        changeYear(year2);
      }
    }
    function bind(element2, event, handler, options) {
      if (event instanceof Array)
        return event.forEach(function(ev) {
          return bind(element2, ev, handler, options);
        });
      if (element2 instanceof Array)
        return element2.forEach(function(el) {
          return bind(el, event, handler, options);
        });
      element2.addEventListener(event, handler, options);
      self2._handlers.push({
        remove: function() {
          return element2.removeEventListener(event, handler, options);
        }
      });
    }
    function triggerChange() {
      triggerEvent("onChange");
    }
    function bindEvents() {
      if (self2.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach(function(evt) {
          Array.prototype.forEach.call(self2.element.querySelectorAll("[data-" + evt + "]"), function(el) {
            return bind(el, "click", self2[evt]);
          });
        });
      }
      if (self2.isMobile) {
        setupMobile();
        return;
      }
      var debouncedResize = debounce(onResize, 50);
      self2._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self2.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
        bind(self2.daysContainer, "mouseover", function(e2) {
          if (self2.config.mode === "range")
            onMouseOver(getEventTarget(e2));
        });
      bind(self2._input, "keydown", onKeyDown);
      if (self2.calendarContainer !== void 0) {
        bind(self2.calendarContainer, "keydown", onKeyDown);
      }
      if (!self2.config.inline && !self2.config.static)
        bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== void 0)
        bind(window.document, "touchstart", documentClick);
      else
        bind(window.document, "mousedown", documentClick);
      bind(window.document, "focus", documentClick, { capture: true });
      if (self2.config.clickOpens === true) {
        bind(self2._input, "focus", self2.open);
        bind(self2._input, "click", self2.open);
      }
      if (self2.daysContainer !== void 0) {
        bind(self2.monthNav, "click", onMonthNavClick);
        bind(self2.monthNav, ["keyup", "increment"], onYearInput);
        bind(self2.daysContainer, "click", selectDate);
      }
      if (self2.timeContainer !== void 0 && self2.minuteElement !== void 0 && self2.hourElement !== void 0) {
        var selText = function(e2) {
          return getEventTarget(e2).select();
        };
        bind(self2.timeContainer, ["increment"], updateTime);
        bind(self2.timeContainer, "blur", updateTime, { capture: true });
        bind(self2.timeContainer, "click", timeIncrement);
        bind([self2.hourElement, self2.minuteElement], ["focus", "click"], selText);
        if (self2.secondElement !== void 0)
          bind(self2.secondElement, "focus", function() {
            return self2.secondElement && self2.secondElement.select();
          });
        if (self2.amPM !== void 0) {
          bind(self2.amPM, "click", function(e2) {
            updateTime(e2);
          });
        }
      }
      if (self2.config.allowInput) {
        bind(self2._input, "blur", onBlur);
      }
    }
    function jumpToDate(jumpDate, triggerChange2) {
      var jumpTo = jumpDate !== void 0 ? self2.parseDate(jumpDate) : self2.latestSelectedDateObj || (self2.config.minDate && self2.config.minDate > self2.now ? self2.config.minDate : self2.config.maxDate && self2.config.maxDate < self2.now ? self2.config.maxDate : self2.now);
      var oldYear = self2.currentYear;
      var oldMonth = self2.currentMonth;
      try {
        if (jumpTo !== void 0) {
          self2.currentYear = jumpTo.getFullYear();
          self2.currentMonth = jumpTo.getMonth();
        }
      } catch (e2) {
        e2.message = "Invalid date supplied: " + jumpTo;
        self2.config.errorHandler(e2);
      }
      if (triggerChange2 && self2.currentYear !== oldYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      if (triggerChange2 && (self2.currentYear !== oldYear || self2.currentMonth !== oldMonth)) {
        triggerEvent("onMonthChange");
      }
      self2.redraw();
    }
    function timeIncrement(e2) {
      var eventTarget = getEventTarget(e2);
      if (~eventTarget.className.indexOf("arrow"))
        incrementNumInput(e2, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e2, delta, inputElem) {
      var target = e2 && getEventTarget(e2);
      var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      var event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }
    function build() {
      var fragment = window.document.createDocumentFragment();
      self2.calendarContainer = createElement("div", "flatpickr-calendar");
      self2.calendarContainer.tabIndex = -1;
      if (!self2.config.noCalendar) {
        fragment.appendChild(buildMonthNav());
        self2.innerContainer = createElement("div", "flatpickr-innerContainer");
        if (self2.config.weekNumbers) {
          var _a3 = buildWeeks(), weekWrapper = _a3.weekWrapper, weekNumbers = _a3.weekNumbers;
          self2.innerContainer.appendChild(weekWrapper);
          self2.weekNumbers = weekNumbers;
          self2.weekWrapper = weekWrapper;
        }
        self2.rContainer = createElement("div", "flatpickr-rContainer");
        self2.rContainer.appendChild(buildWeekdays());
        if (!self2.daysContainer) {
          self2.daysContainer = createElement("div", "flatpickr-days");
          self2.daysContainer.tabIndex = -1;
        }
        buildDays();
        self2.rContainer.appendChild(self2.daysContainer);
        self2.innerContainer.appendChild(self2.rContainer);
        fragment.appendChild(self2.innerContainer);
      }
      if (self2.config.enableTime) {
        fragment.appendChild(buildTime());
      }
      toggleClass(self2.calendarContainer, "rangeMode", self2.config.mode === "range");
      toggleClass(self2.calendarContainer, "animate", self2.config.animate === true);
      toggleClass(self2.calendarContainer, "multiMonth", self2.config.showMonths > 1);
      self2.calendarContainer.appendChild(fragment);
      var customAppend = self2.config.appendTo !== void 0 && self2.config.appendTo.nodeType !== void 0;
      if (self2.config.inline || self2.config.static) {
        self2.calendarContainer.classList.add(self2.config.inline ? "inline" : "static");
        if (self2.config.inline) {
          if (!customAppend && self2.element.parentNode)
            self2.element.parentNode.insertBefore(self2.calendarContainer, self2._input.nextSibling);
          else if (self2.config.appendTo !== void 0)
            self2.config.appendTo.appendChild(self2.calendarContainer);
        }
        if (self2.config.static) {
          var wrapper = createElement("div", "flatpickr-wrapper");
          if (self2.element.parentNode)
            self2.element.parentNode.insertBefore(wrapper, self2.element);
          wrapper.appendChild(self2.element);
          if (self2.altInput)
            wrapper.appendChild(self2.altInput);
          wrapper.appendChild(self2.calendarContainer);
        }
      }
      if (!self2.config.static && !self2.config.inline)
        (self2.config.appendTo !== void 0 ? self2.config.appendTo : window.document.body).appendChild(self2.calendarContainer);
    }
    function createDay(className, date2, _dayNumber, i2) {
      var dateIsEnabled = isEnabled(date2, true), dayElement = createElement("span", className, date2.getDate().toString());
      dayElement.dateObj = date2;
      dayElement.$i = i2;
      dayElement.setAttribute("aria-label", self2.formatDate(date2, self2.config.ariaDateFormat));
      if (className.indexOf("hidden") === -1 && compareDates(date2, self2.now) === 0) {
        self2.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }
      if (dateIsEnabled) {
        dayElement.tabIndex = -1;
        if (isDateSelected(date2)) {
          dayElement.classList.add("selected");
          self2.selectedDateElem = dayElement;
          if (self2.config.mode === "range") {
            toggleClass(dayElement, "startRange", self2.selectedDates[0] && compareDates(date2, self2.selectedDates[0], true) === 0);
            toggleClass(dayElement, "endRange", self2.selectedDates[1] && compareDates(date2, self2.selectedDates[1], true) === 0);
            if (className === "nextMonthDay")
              dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("flatpickr-disabled");
      }
      if (self2.config.mode === "range") {
        if (isDateInRange(date2) && !isDateSelected(date2))
          dayElement.classList.add("inRange");
      }
      if (self2.weekNumbers && self2.config.showMonths === 1 && className !== "prevMonthDay" && i2 % 7 === 6) {
        self2.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self2.config.getWeek(date2) + "</span>");
      }
      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }
    function focusOnDayElem(targetNode) {
      targetNode.focus();
      if (self2.config.mode === "range")
        onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
      var startMonth = delta > 0 ? 0 : self2.config.showMonths - 1;
      var endMonth = delta > 0 ? self2.config.showMonths : -1;
      for (var m2 = startMonth; m2 != endMonth; m2 += delta) {
        var month = self2.daysContainer.children[m2];
        var startIndex = delta > 0 ? 0 : month.children.length - 1;
        var endIndex = delta > 0 ? month.children.length : -1;
        for (var i2 = startIndex; i2 != endIndex; i2 += delta) {
          var c2 = month.children[i2];
          if (c2.className.indexOf("hidden") === -1 && isEnabled(c2.dateObj))
            return c2;
        }
      }
      return void 0;
    }
    function getNextAvailableDay(current, delta) {
      var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self2.currentMonth;
      var endMonth = delta > 0 ? self2.config.showMonths : -1;
      var loopDelta = delta > 0 ? 1 : -1;
      for (var m2 = givenMonth - self2.currentMonth; m2 != endMonth; m2 += loopDelta) {
        var month = self2.daysContainer.children[m2];
        var startIndex = givenMonth - self2.currentMonth === m2 ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        var numMonthDays = month.children.length;
        for (var i2 = startIndex; i2 >= 0 && i2 < numMonthDays && i2 != (delta > 0 ? numMonthDays : -1); i2 += loopDelta) {
          var c2 = month.children[i2];
          if (c2.className.indexOf("hidden") === -1 && isEnabled(c2.dateObj) && Math.abs(current.$i - i2) >= Math.abs(delta))
            return focusOnDayElem(c2);
        }
      }
      self2.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return void 0;
    }
    function focusOnDay(current, offset) {
      var activeElement = getClosestActiveElement();
      var dayFocused = isInView(activeElement || document.body);
      var startElem = current !== void 0 ? current : dayFocused ? activeElement : self2.selectedDateElem !== void 0 && isInView(self2.selectedDateElem) ? self2.selectedDateElem : self2.todayDateElem !== void 0 && isInView(self2.todayDateElem) ? self2.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
      if (startElem === void 0) {
        self2._input.focus();
      } else if (!dayFocused) {
        focusOnDayElem(startElem);
      } else {
        getNextAvailableDay(startElem, offset);
      }
    }
    function buildMonthDays(year2, month) {
      var firstOfMonth = (new Date(year2, month, 1).getDay() - self2.l10n.firstDayOfWeek + 7) % 7;
      var prevMonthDays = self2.utils.getDaysInMonth((month - 1 + 12) % 12, year2);
      var daysInMonth = self2.utils.getDaysInMonth(month, year2), days = window.document.createDocumentFragment(), isMultiMonth = self2.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year2, month - 1, dayNumber), dayNumber, dayIndex));
      }
      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(createDay("flatpickr-day", new Date(year2, month, dayNumber), dayNumber, dayIndex));
      }
      for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self2.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year2, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
      }
      var dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }
    function buildDays() {
      if (self2.daysContainer === void 0) {
        return;
      }
      clearNode(self2.daysContainer);
      if (self2.weekNumbers)
        clearNode(self2.weekNumbers);
      var frag = document.createDocumentFragment();
      for (var i2 = 0; i2 < self2.config.showMonths; i2++) {
        var d2 = new Date(self2.currentYear, self2.currentMonth, 1);
        d2.setMonth(self2.currentMonth + i2);
        frag.appendChild(buildMonthDays(d2.getFullYear(), d2.getMonth()));
      }
      self2.daysContainer.appendChild(frag);
      self2.days = self2.daysContainer.firstChild;
      if (self2.config.mode === "range" && self2.selectedDates.length === 1) {
        onMouseOver();
      }
    }
    function buildMonthSwitch() {
      if (self2.config.showMonths > 1 || self2.config.monthSelectorType !== "dropdown")
        return;
      var shouldBuildMonth = function(month2) {
        if (self2.config.minDate !== void 0 && self2.currentYear === self2.config.minDate.getFullYear() && month2 < self2.config.minDate.getMonth()) {
          return false;
        }
        return !(self2.config.maxDate !== void 0 && self2.currentYear === self2.config.maxDate.getFullYear() && month2 > self2.config.maxDate.getMonth());
      };
      self2.monthsDropdownContainer.tabIndex = -1;
      self2.monthsDropdownContainer.innerHTML = "";
      for (var i2 = 0; i2 < 12; i2++) {
        if (!shouldBuildMonth(i2))
          continue;
        var month = createElement("option", "flatpickr-monthDropdown-month");
        month.value = new Date(self2.currentYear, i2).getMonth().toString();
        month.textContent = monthToStr(i2, self2.config.shorthandCurrentMonth, self2.l10n);
        month.tabIndex = -1;
        if (self2.currentMonth === i2) {
          month.selected = true;
        }
        self2.monthsDropdownContainer.appendChild(month);
      }
    }
    function buildMonth() {
      var container = createElement("div", "flatpickr-month");
      var monthNavFragment = window.document.createDocumentFragment();
      var monthElement;
      if (self2.config.showMonths > 1 || self2.config.monthSelectorType === "static") {
        monthElement = createElement("span", "cur-month");
      } else {
        self2.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
        self2.monthsDropdownContainer.setAttribute("aria-label", self2.l10n.monthAriaLabel);
        bind(self2.monthsDropdownContainer, "change", function(e2) {
          var target = getEventTarget(e2);
          var selectedMonth = parseInt(target.value, 10);
          self2.changeMonth(selectedMonth - self2.currentMonth);
          triggerEvent("onMonthChange");
        });
        buildMonthSwitch();
        monthElement = self2.monthsDropdownContainer;
      }
      var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
      var yearElement = yearInput.getElementsByTagName("input")[0];
      yearElement.setAttribute("aria-label", self2.l10n.yearAriaLabel);
      if (self2.config.minDate) {
        yearElement.setAttribute("min", self2.config.minDate.getFullYear().toString());
      }
      if (self2.config.maxDate) {
        yearElement.setAttribute("max", self2.config.maxDate.getFullYear().toString());
        yearElement.disabled = !!self2.config.minDate && self2.config.minDate.getFullYear() === self2.config.maxDate.getFullYear();
      }
      var currentMonth = createElement("div", "flatpickr-current-month");
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container,
        yearElement,
        monthElement
      };
    }
    function buildMonths() {
      clearNode(self2.monthNav);
      self2.monthNav.appendChild(self2.prevMonthNav);
      if (self2.config.showMonths) {
        self2.yearElements = [];
        self2.monthElements = [];
      }
      for (var m2 = self2.config.showMonths; m2--; ) {
        var month = buildMonth();
        self2.yearElements.push(month.yearElement);
        self2.monthElements.push(month.monthElement);
        self2.monthNav.appendChild(month.container);
      }
      self2.monthNav.appendChild(self2.nextMonthNav);
    }
    function buildMonthNav() {
      self2.monthNav = createElement("div", "flatpickr-months");
      self2.yearElements = [];
      self2.monthElements = [];
      self2.prevMonthNav = createElement("span", "flatpickr-prev-month");
      self2.prevMonthNav.innerHTML = self2.config.prevArrow;
      self2.nextMonthNav = createElement("span", "flatpickr-next-month");
      self2.nextMonthNav.innerHTML = self2.config.nextArrow;
      buildMonths();
      Object.defineProperty(self2, "_hidePrevMonthArrow", {
        get: function() {
          return self2.__hidePrevMonthArrow;
        },
        set: function(bool) {
          if (self2.__hidePrevMonthArrow !== bool) {
            toggleClass(self2.prevMonthNav, "flatpickr-disabled", bool);
            self2.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self2, "_hideNextMonthArrow", {
        get: function() {
          return self2.__hideNextMonthArrow;
        },
        set: function(bool) {
          if (self2.__hideNextMonthArrow !== bool) {
            toggleClass(self2.nextMonthNav, "flatpickr-disabled", bool);
            self2.__hideNextMonthArrow = bool;
          }
        }
      });
      self2.currentYearElement = self2.yearElements[0];
      updateNavigationCurrentMonth();
      return self2.monthNav;
    }
    function buildTime() {
      self2.calendarContainer.classList.add("hasTime");
      if (self2.config.noCalendar)
        self2.calendarContainer.classList.add("noCalendar");
      var defaults2 = getDefaultHours(self2.config);
      self2.timeContainer = createElement("div", "flatpickr-time");
      self2.timeContainer.tabIndex = -1;
      var separator = createElement("span", "flatpickr-time-separator", ":");
      var hourInput = createNumberInput("flatpickr-hour", {
        "aria-label": self2.l10n.hourAriaLabel
      });
      self2.hourElement = hourInput.getElementsByTagName("input")[0];
      var minuteInput = createNumberInput("flatpickr-minute", {
        "aria-label": self2.l10n.minuteAriaLabel
      });
      self2.minuteElement = minuteInput.getElementsByTagName("input")[0];
      self2.hourElement.tabIndex = self2.minuteElement.tabIndex = -1;
      self2.hourElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getHours() : self2.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
      self2.minuteElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getMinutes() : defaults2.minutes);
      self2.hourElement.setAttribute("step", self2.config.hourIncrement.toString());
      self2.minuteElement.setAttribute("step", self2.config.minuteIncrement.toString());
      self2.hourElement.setAttribute("min", self2.config.time_24hr ? "0" : "1");
      self2.hourElement.setAttribute("max", self2.config.time_24hr ? "23" : "12");
      self2.hourElement.setAttribute("maxlength", "2");
      self2.minuteElement.setAttribute("min", "0");
      self2.minuteElement.setAttribute("max", "59");
      self2.minuteElement.setAttribute("maxlength", "2");
      self2.timeContainer.appendChild(hourInput);
      self2.timeContainer.appendChild(separator);
      self2.timeContainer.appendChild(minuteInput);
      if (self2.config.time_24hr)
        self2.timeContainer.classList.add("time24hr");
      if (self2.config.enableSeconds) {
        self2.timeContainer.classList.add("hasSeconds");
        var secondInput = createNumberInput("flatpickr-second");
        self2.secondElement = secondInput.getElementsByTagName("input")[0];
        self2.secondElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getSeconds() : defaults2.seconds);
        self2.secondElement.setAttribute("step", self2.minuteElement.getAttribute("step"));
        self2.secondElement.setAttribute("min", "0");
        self2.secondElement.setAttribute("max", "59");
        self2.secondElement.setAttribute("maxlength", "2");
        self2.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
        self2.timeContainer.appendChild(secondInput);
      }
      if (!self2.config.time_24hr) {
        self2.amPM = createElement("span", "flatpickr-am-pm", self2.l10n.amPM[int((self2.latestSelectedDateObj ? self2.hourElement.value : self2.config.defaultHour) > 11)]);
        self2.amPM.title = self2.l10n.toggleTitle;
        self2.amPM.tabIndex = -1;
        self2.timeContainer.appendChild(self2.amPM);
      }
      return self2.timeContainer;
    }
    function buildWeekdays() {
      if (!self2.weekdayContainer)
        self2.weekdayContainer = createElement("div", "flatpickr-weekdays");
      else
        clearNode(self2.weekdayContainer);
      for (var i2 = self2.config.showMonths; i2--; ) {
        var container = createElement("div", "flatpickr-weekdaycontainer");
        self2.weekdayContainer.appendChild(container);
      }
      updateWeekdays();
      return self2.weekdayContainer;
    }
    function updateWeekdays() {
      if (!self2.weekdayContainer) {
        return;
      }
      var firstDayOfWeek = self2.l10n.firstDayOfWeek;
      var weekdays = __spreadArrays(self2.l10n.weekdays.shorthand);
      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
      }
      for (var i2 = self2.config.showMonths; i2--; ) {
        self2.weekdayContainer.children[i2].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
      }
    }
    function buildWeeks() {
      self2.calendarContainer.classList.add("hasWeeks");
      var weekWrapper = createElement("div", "flatpickr-weekwrapper");
      weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self2.l10n.weekAbbreviation));
      var weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper,
        weekNumbers
      };
    }
    function changeMonth(value, isOffset) {
      if (isOffset === void 0) {
        isOffset = true;
      }
      var delta = isOffset ? value : value - self2.currentMonth;
      if (delta < 0 && self2._hidePrevMonthArrow === true || delta > 0 && self2._hideNextMonthArrow === true)
        return;
      self2.currentMonth += delta;
      if (self2.currentMonth < 0 || self2.currentMonth > 11) {
        self2.currentYear += self2.currentMonth > 11 ? 1 : -1;
        self2.currentMonth = (self2.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
      if (triggerChangeEvent === void 0) {
        triggerChangeEvent = true;
      }
      if (toInitial === void 0) {
        toInitial = true;
      }
      self2.input.value = "";
      if (self2.altInput !== void 0)
        self2.altInput.value = "";
      if (self2.mobileInput !== void 0)
        self2.mobileInput.value = "";
      self2.selectedDates = [];
      self2.latestSelectedDateObj = void 0;
      if (toInitial === true) {
        self2.currentYear = self2._initialDate.getFullYear();
        self2.currentMonth = self2._initialDate.getMonth();
      }
      if (self2.config.enableTime === true) {
        var _a3 = getDefaultHours(self2.config), hours = _a3.hours, minutes = _a3.minutes, seconds = _a3.seconds;
        setHours(hours, minutes, seconds);
      }
      self2.redraw();
      if (triggerChangeEvent)
        triggerEvent("onChange");
    }
    function close() {
      self2.isOpen = false;
      if (!self2.isMobile) {
        if (self2.calendarContainer !== void 0) {
          self2.calendarContainer.classList.remove("open");
        }
        if (self2._input !== void 0) {
          self2._input.classList.remove("active");
        }
      }
      triggerEvent("onClose");
    }
    function destroy() {
      if (self2.config !== void 0)
        triggerEvent("onDestroy");
      for (var i2 = self2._handlers.length; i2--; ) {
        self2._handlers[i2].remove();
      }
      self2._handlers = [];
      if (self2.mobileInput) {
        if (self2.mobileInput.parentNode)
          self2.mobileInput.parentNode.removeChild(self2.mobileInput);
        self2.mobileInput = void 0;
      } else if (self2.calendarContainer && self2.calendarContainer.parentNode) {
        if (self2.config.static && self2.calendarContainer.parentNode) {
          var wrapper = self2.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
          if (wrapper.parentNode) {
            while (wrapper.firstChild)
              wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.parentNode.removeChild(wrapper);
          }
        } else
          self2.calendarContainer.parentNode.removeChild(self2.calendarContainer);
      }
      if (self2.altInput) {
        self2.input.type = "text";
        if (self2.altInput.parentNode)
          self2.altInput.parentNode.removeChild(self2.altInput);
        delete self2.altInput;
      }
      if (self2.input) {
        self2.input.type = self2.input._type;
        self2.input.classList.remove("flatpickr-input");
        self2.input.removeAttribute("readonly");
      }
      [
        "_showTimeInput",
        "latestSelectedDateObj",
        "_hideNextMonthArrow",
        "_hidePrevMonthArrow",
        "__hideNextMonthArrow",
        "__hidePrevMonthArrow",
        "isMobile",
        "isOpen",
        "selectedDateElem",
        "minDateHasTime",
        "maxDateHasTime",
        "days",
        "daysContainer",
        "_input",
        "_positionElement",
        "innerContainer",
        "rContainer",
        "monthNav",
        "todayDateElem",
        "calendarContainer",
        "weekdayContainer",
        "prevMonthNav",
        "nextMonthNav",
        "monthsDropdownContainer",
        "currentMonthElement",
        "currentYearElement",
        "navigationCurrentMonth",
        "selectedDateElem",
        "config"
      ].forEach(function(k2) {
        try {
          delete self2[k2];
        } catch (_) {
        }
      });
    }
    function isCalendarElem(elem) {
      return self2.calendarContainer.contains(elem);
    }
    function documentClick(e2) {
      if (self2.isOpen && !self2.config.inline) {
        var eventTarget_1 = getEventTarget(e2);
        var isCalendarElement = isCalendarElem(eventTarget_1);
        var isInput = eventTarget_1 === self2.input || eventTarget_1 === self2.altInput || self2.element.contains(eventTarget_1) || e2.path && e2.path.indexOf && (~e2.path.indexOf(self2.input) || ~e2.path.indexOf(self2.altInput));
        var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e2.relatedTarget);
        var isIgnored = !self2.config.ignoredFocusElements.some(function(elem) {
          return elem.contains(eventTarget_1);
        });
        if (lostFocus && isIgnored) {
          if (self2.config.allowInput) {
            self2.setDate(self2._input.value, false, self2.config.altInput ? self2.config.altFormat : self2.config.dateFormat);
          }
          if (self2.timeContainer !== void 0 && self2.minuteElement !== void 0 && self2.hourElement !== void 0 && self2.input.value !== "" && self2.input.value !== void 0) {
            updateTime();
          }
          self2.close();
          if (self2.config && self2.config.mode === "range" && self2.selectedDates.length === 1)
            self2.clear(false);
        }
      }
    }
    function changeYear(newYear) {
      if (!newYear || self2.config.minDate && newYear < self2.config.minDate.getFullYear() || self2.config.maxDate && newYear > self2.config.maxDate.getFullYear())
        return;
      var newYearNum = newYear, isNewYear = self2.currentYear !== newYearNum;
      self2.currentYear = newYearNum || self2.currentYear;
      if (self2.config.maxDate && self2.currentYear === self2.config.maxDate.getFullYear()) {
        self2.currentMonth = Math.min(self2.config.maxDate.getMonth(), self2.currentMonth);
      } else if (self2.config.minDate && self2.currentYear === self2.config.minDate.getFullYear()) {
        self2.currentMonth = Math.max(self2.config.minDate.getMonth(), self2.currentMonth);
      }
      if (isNewYear) {
        self2.redraw();
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
    }
    function isEnabled(date2, timeless) {
      var _a3;
      if (timeless === void 0) {
        timeless = true;
      }
      var dateToCheck = self2.parseDate(date2, void 0, timeless);
      if (self2.config.minDate && dateToCheck && compareDates(dateToCheck, self2.config.minDate, timeless !== void 0 ? timeless : !self2.minDateHasTime) < 0 || self2.config.maxDate && dateToCheck && compareDates(dateToCheck, self2.config.maxDate, timeless !== void 0 ? timeless : !self2.maxDateHasTime) > 0)
        return false;
      if (!self2.config.enable && self2.config.disable.length === 0)
        return true;
      if (dateToCheck === void 0)
        return false;
      var bool = !!self2.config.enable, array = (_a3 = self2.config.enable) !== null && _a3 !== void 0 ? _a3 : self2.config.disable;
      for (var i2 = 0, d2 = void 0; i2 < array.length; i2++) {
        d2 = array[i2];
        if (typeof d2 === "function" && d2(dateToCheck))
          return bool;
        else if (d2 instanceof Date && dateToCheck !== void 0 && d2.getTime() === dateToCheck.getTime())
          return bool;
        else if (typeof d2 === "string") {
          var parsed = self2.parseDate(d2, void 0, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if (typeof d2 === "object" && dateToCheck !== void 0 && d2.from && d2.to && dateToCheck.getTime() >= d2.from.getTime() && dateToCheck.getTime() <= d2.to.getTime())
          return bool;
      }
      return !bool;
    }
    function isInView(elem) {
      if (self2.daysContainer !== void 0)
        return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self2.daysContainer.contains(elem);
      return false;
    }
    function onBlur(e2) {
      var isInput = e2.target === self2._input;
      var valueChanged = self2._input.value.trimEnd() !== getDateStr();
      if (isInput && valueChanged && !(e2.relatedTarget && isCalendarElem(e2.relatedTarget))) {
        self2.setDate(self2._input.value, true, e2.target === self2.altInput ? self2.config.altFormat : self2.config.dateFormat);
      }
    }
    function onKeyDown(e2) {
      var eventTarget = getEventTarget(e2);
      var isInput = self2.config.wrap ? element.contains(eventTarget) : eventTarget === self2._input;
      var allowInput = self2.config.allowInput;
      var allowKeydown = self2.isOpen && (!allowInput || !isInput);
      var allowInlineKeydown = self2.config.inline && isInput && !allowInput;
      if (e2.keyCode === 13 && isInput) {
        if (allowInput) {
          self2.setDate(self2._input.value, true, eventTarget === self2.altInput ? self2.config.altFormat : self2.config.dateFormat);
          self2.close();
          return eventTarget.blur();
        } else {
          self2.open();
        }
      } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
        var isTimeObj = !!self2.timeContainer && self2.timeContainer.contains(eventTarget);
        switch (e2.keyCode) {
          case 13:
            if (isTimeObj) {
              e2.preventDefault();
              updateTime();
              focusAndClose();
            } else
              selectDate(e2);
            break;
          case 27:
            e2.preventDefault();
            focusAndClose();
            break;
          case 8:
          case 46:
            if (isInput && !self2.config.allowInput) {
              e2.preventDefault();
              self2.clear();
            }
            break;
          case 37:
          case 39:
            if (!isTimeObj && !isInput) {
              e2.preventDefault();
              var activeElement = getClosestActiveElement();
              if (self2.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
                var delta_1 = e2.keyCode === 39 ? 1 : -1;
                if (!e2.ctrlKey)
                  focusOnDay(void 0, delta_1);
                else {
                  e2.stopPropagation();
                  changeMonth(delta_1);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self2.hourElement)
              self2.hourElement.focus();
            break;
          case 38:
          case 40:
            e2.preventDefault();
            var delta = e2.keyCode === 40 ? 1 : -1;
            if (self2.daysContainer && eventTarget.$i !== void 0 || eventTarget === self2.input || eventTarget === self2.altInput) {
              if (e2.ctrlKey) {
                e2.stopPropagation();
                changeYear(self2.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj)
                focusOnDay(void 0, delta * 7);
            } else if (eventTarget === self2.currentYearElement) {
              changeYear(self2.currentYear - delta);
            } else if (self2.config.enableTime) {
              if (!isTimeObj && self2.hourElement)
                self2.hourElement.focus();
              updateTime(e2);
              self2._debouncedChange();
            }
            break;
          case 9:
            if (isTimeObj) {
              var elems = [
                self2.hourElement,
                self2.minuteElement,
                self2.secondElement,
                self2.amPM
              ].concat(self2.pluginElements).filter(function(x2) {
                return x2;
              });
              var i2 = elems.indexOf(eventTarget);
              if (i2 !== -1) {
                var target = elems[i2 + (e2.shiftKey ? -1 : 1)];
                e2.preventDefault();
                (target || self2._input).focus();
              }
            } else if (!self2.config.noCalendar && self2.daysContainer && self2.daysContainer.contains(eventTarget) && e2.shiftKey) {
              e2.preventDefault();
              self2._input.focus();
            }
            break;
          default:
            break;
        }
      }
      if (self2.amPM !== void 0 && eventTarget === self2.amPM) {
        switch (e2.key) {
          case self2.l10n.amPM[0].charAt(0):
          case self2.l10n.amPM[0].charAt(0).toLowerCase():
            self2.amPM.textContent = self2.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;
          case self2.l10n.amPM[1].charAt(0):
          case self2.l10n.amPM[1].charAt(0).toLowerCase():
            self2.amPM.textContent = self2.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }
      if (isInput || isCalendarElem(eventTarget)) {
        triggerEvent("onKeyDown", e2);
      }
    }
    function onMouseOver(elem, cellClass) {
      if (cellClass === void 0) {
        cellClass = "flatpickr-day";
      }
      if (self2.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
        return;
      var hoverDate = elem ? elem.dateObj.getTime() : self2.days.firstElementChild.dateObj.getTime(), initialDate = self2.parseDate(self2.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self2.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self2.selectedDates[0].getTime());
      var containsDisabled = false;
      var minRange = 0, maxRange = 0;
      for (var t8 = rangeStartDate; t8 < rangeEndDate; t8 += duration.DAY) {
        if (!isEnabled(new Date(t8), true)) {
          containsDisabled = containsDisabled || t8 > rangeStartDate && t8 < rangeEndDate;
          if (t8 < initialDate && (!minRange || t8 > minRange))
            minRange = t8;
          else if (t8 > initialDate && (!maxRange || t8 < maxRange))
            maxRange = t8;
        }
      }
      var hoverableCells = Array.from(self2.rContainer.querySelectorAll("*:nth-child(-n+" + self2.config.showMonths + ") > ." + cellClass));
      hoverableCells.forEach(function(dayElem) {
        var date2 = dayElem.dateObj;
        var timestamp = date2.getTime();
        var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach(function(c2) {
            dayElem.classList.remove(c2);
          });
          return;
        } else if (containsDisabled && !outOfRange)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c2) {
          dayElem.classList.remove(c2);
        });
        if (elem !== void 0) {
          elem.classList.add(hoverDate <= self2.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate)
            dayElem.classList.add("startRange");
          else if (initialDate > hoverDate && timestamp === initialDate)
            dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
            dayElem.classList.add("inRange");
        }
      });
    }
    function onResize() {
      if (self2.isOpen && !self2.config.static && !self2.config.inline)
        positionCalendar();
    }
    function open(e2, positionElement) {
      if (positionElement === void 0) {
        positionElement = self2._positionElement;
      }
      if (self2.isMobile === true) {
        if (e2) {
          e2.preventDefault();
          var eventTarget = getEventTarget(e2);
          if (eventTarget) {
            eventTarget.blur();
          }
        }
        if (self2.mobileInput !== void 0) {
          self2.mobileInput.focus();
          self2.mobileInput.click();
        }
        triggerEvent("onOpen");
        return;
      } else if (self2._input.disabled || self2.config.inline) {
        return;
      }
      var wasOpen = self2.isOpen;
      self2.isOpen = true;
      if (!wasOpen) {
        self2.calendarContainer.classList.add("open");
        self2._input.classList.add("active");
        triggerEvent("onOpen");
        positionCalendar(positionElement);
      }
      if (self2.config.enableTime === true && self2.config.noCalendar === true) {
        if (self2.config.allowInput === false && (e2 === void 0 || !self2.timeContainer.contains(e2.relatedTarget))) {
          setTimeout(function() {
            return self2.hourElement.select();
          }, 50);
        }
      }
    }
    function minMaxDateSetter(type) {
      return function(date2) {
        var dateObj = self2.config["_" + type + "Date"] = self2.parseDate(date2, self2.config.dateFormat);
        var inverseDateObj = self2.config["_" + (type === "min" ? "max" : "min") + "Date"];
        if (dateObj !== void 0) {
          self2[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }
        if (self2.selectedDates) {
          self2.selectedDates = self2.selectedDates.filter(function(d2) {
            return isEnabled(d2);
          });
          if (!self2.selectedDates.length && type === "min")
            setHoursFromDate(dateObj);
          updateValue();
        }
        if (self2.daysContainer) {
          redraw();
          if (dateObj !== void 0)
            self2.currentYearElement[type] = dateObj.getFullYear().toString();
          else
            self2.currentYearElement.removeAttribute(type);
          self2.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }
    function parseConfig() {
      var boolOpts = [
        "wrap",
        "weekNumbers",
        "allowInput",
        "allowInvalidPreload",
        "clickOpens",
        "time_24hr",
        "enableTime",
        "noCalendar",
        "altInput",
        "shorthandCurrentMonth",
        "inline",
        "static",
        "enableSeconds",
        "disableMobile"
      ];
      var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
      var formats2 = {};
      self2.config.parseDate = userConfig.parseDate;
      self2.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self2.config, "enable", {
        get: function() {
          return self2.config._enable;
        },
        set: function(dates) {
          self2.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self2.config, "disable", {
        get: function() {
          return self2.config._disable;
        },
        set: function(dates) {
          self2.config._disable = parseDateRules(dates);
        }
      });
      var timeMode = userConfig.mode === "time";
      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
        formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }
      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
        formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
      }
      Object.defineProperty(self2.config, "minDate", {
        get: function() {
          return self2.config._minDate;
        },
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self2.config, "maxDate", {
        get: function() {
          return self2.config._maxDate;
        },
        set: minMaxDateSetter("max")
      });
      var minMaxTimeSetter = function(type) {
        return function(val) {
          self2.config[type === "min" ? "_minTime" : "_maxTime"] = self2.parseDate(val, "H:i:S");
        };
      };
      Object.defineProperty(self2.config, "minTime", {
        get: function() {
          return self2.config._minTime;
        },
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self2.config, "maxTime", {
        get: function() {
          return self2.config._maxTime;
        },
        set: minMaxTimeSetter("max")
      });
      if (userConfig.mode === "time") {
        self2.config.noCalendar = true;
        self2.config.enableTime = true;
      }
      Object.assign(self2.config, formats2, userConfig);
      for (var i2 = 0; i2 < boolOpts.length; i2++)
        self2.config[boolOpts[i2]] = self2.config[boolOpts[i2]] === true || self2.config[boolOpts[i2]] === "true";
      HOOKS.filter(function(hook) {
        return self2.config[hook] !== void 0;
      }).forEach(function(hook) {
        self2.config[hook] = arrayify(self2.config[hook] || []).map(bindToInstance);
      });
      self2.isMobile = !self2.config.disableMobile && !self2.config.inline && self2.config.mode === "single" && !self2.config.disable.length && !self2.config.enable && !self2.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      for (var i2 = 0; i2 < self2.config.plugins.length; i2++) {
        var pluginConf = self2.config.plugins[i2](self2) || {};
        for (var key in pluginConf) {
          if (HOOKS.indexOf(key) > -1) {
            self2.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self2.config[key]);
          } else if (typeof userConfig[key] === "undefined")
            self2.config[key] = pluginConf[key];
        }
      }
      if (!userConfig.altInputClass) {
        self2.config.altInputClass = getInputElem().className + " " + self2.config.altInputClass;
      }
      triggerEvent("onParseConfig");
    }
    function getInputElem() {
      return self2.config.wrap ? element.querySelector("[data-input]") : element;
    }
    function setupLocale() {
      if (typeof self2.config.locale !== "object" && typeof flatpickr.l10ns[self2.config.locale] === "undefined")
        self2.config.errorHandler(new Error("flatpickr: invalid locale " + self2.config.locale));
      self2.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self2.config.locale === "object" ? self2.config.locale : self2.config.locale !== "default" ? flatpickr.l10ns[self2.config.locale] : void 0);
      tokenRegex.D = "(" + self2.l10n.weekdays.shorthand.join("|") + ")";
      tokenRegex.l = "(" + self2.l10n.weekdays.longhand.join("|") + ")";
      tokenRegex.M = "(" + self2.l10n.months.shorthand.join("|") + ")";
      tokenRegex.F = "(" + self2.l10n.months.longhand.join("|") + ")";
      tokenRegex.K = "(" + self2.l10n.amPM[0] + "|" + self2.l10n.amPM[1] + "|" + self2.l10n.amPM[0].toLowerCase() + "|" + self2.l10n.amPM[1].toLowerCase() + ")";
      var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
      if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
        self2.config.time_24hr = self2.l10n.time_24hr;
      }
      self2.formatDate = createDateFormatter(self2);
      self2.parseDate = createDateParser({ config: self2.config, l10n: self2.l10n });
    }
    function positionCalendar(customPositionElement) {
      if (typeof self2.config.position === "function") {
        return void self2.config.position(self2, customPositionElement);
      }
      if (self2.calendarContainer === void 0)
        return;
      triggerEvent("onPreCalendarPosition");
      var positionElement = customPositionElement || self2._positionElement;
      var calendarHeight = Array.prototype.reduce.call(self2.calendarContainer.children, (function(acc, child) {
        return acc + child.offsetHeight;
      }), 0), calendarWidth = self2.calendarContainer.offsetWidth, configPos = self2.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self2.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self2.calendarContainer, "arrowBottom", showOnTop);
      if (self2.config.inline)
        return;
      var left = window.pageXOffset + inputBounds.left;
      var isCenter = false;
      var isRight = false;
      if (configPosHorizontal === "center") {
        left -= (calendarWidth - inputBounds.width) / 2;
        isCenter = true;
      } else if (configPosHorizontal === "right") {
        left -= calendarWidth - inputBounds.width;
        isRight = true;
      }
      toggleClass(self2.calendarContainer, "arrowLeft", !isCenter && !isRight);
      toggleClass(self2.calendarContainer, "arrowCenter", isCenter);
      toggleClass(self2.calendarContainer, "arrowRight", isRight);
      var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
      var rightMost = left + calendarWidth > window.document.body.offsetWidth;
      var centerMost = right + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self2.calendarContainer, "rightMost", rightMost);
      if (self2.config.static)
        return;
      self2.calendarContainer.style.top = top + "px";
      if (!rightMost) {
        self2.calendarContainer.style.left = left + "px";
        self2.calendarContainer.style.right = "auto";
      } else if (!centerMost) {
        self2.calendarContainer.style.left = "auto";
        self2.calendarContainer.style.right = right + "px";
      } else {
        var doc = getDocumentStyleSheet();
        if (doc === void 0)
          return;
        var bodyWidth = window.document.body.offsetWidth;
        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
        var centerBefore = ".flatpickr-calendar.centerMost:before";
        var centerAfter = ".flatpickr-calendar.centerMost:after";
        var centerIndex = doc.cssRules.length;
        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
        toggleClass(self2.calendarContainer, "rightMost", false);
        toggleClass(self2.calendarContainer, "centerMost", true);
        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
        self2.calendarContainer.style.left = centerLeft + "px";
        self2.calendarContainer.style.right = "auto";
      }
    }
    function getDocumentStyleSheet() {
      var editableSheet = null;
      for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
        var sheet = document.styleSheets[i2];
        if (!sheet.cssRules)
          continue;
        try {
          sheet.cssRules;
        } catch (err) {
          continue;
        }
        editableSheet = sheet;
        break;
      }
      return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
      var style = document.createElement("style");
      document.head.appendChild(style);
      return style.sheet;
    }
    function redraw() {
      if (self2.config.noCalendar || self2.isMobile)
        return;
      buildMonthSwitch();
      updateNavigationCurrentMonth();
      buildDays();
    }
    function focusAndClose() {
      self2._input.focus();
      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
        setTimeout(self2.close, 0);
      } else {
        self2.close();
      }
    }
    function selectDate(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      var isSelectable = function(day) {
        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
      };
      var t8 = findParent(getEventTarget(e2), isSelectable);
      if (t8 === void 0)
        return;
      var target = t8;
      var selectedDate = self2.latestSelectedDateObj = new Date(target.dateObj.getTime());
      var shouldChangeMonth = (selectedDate.getMonth() < self2.currentMonth || selectedDate.getMonth() > self2.currentMonth + self2.config.showMonths - 1) && self2.config.mode !== "range";
      self2.selectedDateElem = target;
      if (self2.config.mode === "single")
        self2.selectedDates = [selectedDate];
      else if (self2.config.mode === "multiple") {
        var selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex)
          self2.selectedDates.splice(parseInt(selectedIndex), 1);
        else
          self2.selectedDates.push(selectedDate);
      } else if (self2.config.mode === "range") {
        if (self2.selectedDates.length === 2) {
          self2.clear(false, false);
        }
        self2.latestSelectedDateObj = selectedDate;
        self2.selectedDates.push(selectedDate);
        if (compareDates(selectedDate, self2.selectedDates[0], true) !== 0)
          self2.selectedDates.sort(function(a2, b2) {
            return a2.getTime() - b2.getTime();
          });
      }
      setHoursFromInputs();
      if (shouldChangeMonth) {
        var isNewYear = self2.currentYear !== selectedDate.getFullYear();
        self2.currentYear = selectedDate.getFullYear();
        self2.currentMonth = selectedDate.getMonth();
        if (isNewYear) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }
        triggerEvent("onMonthChange");
      }
      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      if (!shouldChangeMonth && self2.config.mode !== "range" && self2.config.showMonths === 1)
        focusOnDayElem(target);
      else if (self2.selectedDateElem !== void 0 && self2.hourElement === void 0) {
        self2.selectedDateElem && self2.selectedDateElem.focus();
      }
      if (self2.hourElement !== void 0)
        self2.hourElement !== void 0 && self2.hourElement.focus();
      if (self2.config.closeOnSelect) {
        var single = self2.config.mode === "single" && !self2.config.enableTime;
        var range2 = self2.config.mode === "range" && self2.selectedDates.length === 2 && !self2.config.enableTime;
        if (single || range2) {
          focusAndClose();
        }
      }
      triggerChange();
    }
    var CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
      minDate: [jumpToDate],
      maxDate: [jumpToDate],
      positionElement: [updatePositionElement],
      clickOpens: [
        function() {
          if (self2.config.clickOpens === true) {
            bind(self2._input, "focus", self2.open);
            bind(self2._input, "click", self2.open);
          } else {
            self2._input.removeEventListener("focus", self2.open);
            self2._input.removeEventListener("click", self2.open);
          }
        }
      ]
    };
    function set(option, value) {
      if (option !== null && typeof option === "object") {
        Object.assign(self2.config, option);
        for (var key in option) {
          if (CALLBACKS[key] !== void 0)
            CALLBACKS[key].forEach(function(x2) {
              return x2();
            });
        }
      } else {
        self2.config[option] = value;
        if (CALLBACKS[option] !== void 0)
          CALLBACKS[option].forEach(function(x2) {
            return x2();
          });
        else if (HOOKS.indexOf(option) > -1)
          self2.config[option] = arrayify(value);
      }
      self2.redraw();
      updateValue(true);
    }
    function setSelectedDate(inputDate, format2) {
      var dates = [];
      if (inputDate instanceof Array)
        dates = inputDate.map(function(d2) {
          return self2.parseDate(d2, format2);
        });
      else if (inputDate instanceof Date || typeof inputDate === "number")
        dates = [self2.parseDate(inputDate, format2)];
      else if (typeof inputDate === "string") {
        switch (self2.config.mode) {
          case "single":
          case "time":
            dates = [self2.parseDate(inputDate, format2)];
            break;
          case "multiple":
            dates = inputDate.split(self2.config.conjunction).map(function(date2) {
              return self2.parseDate(date2, format2);
            });
            break;
          case "range":
            dates = inputDate.split(self2.l10n.rangeSeparator).map(function(date2) {
              return self2.parseDate(date2, format2);
            });
            break;
          default:
            break;
        }
      } else
        self2.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
      self2.selectedDates = self2.config.allowInvalidPreload ? dates : dates.filter(function(d2) {
        return d2 instanceof Date && isEnabled(d2, false);
      });
      if (self2.config.mode === "range")
        self2.selectedDates.sort(function(a2, b2) {
          return a2.getTime() - b2.getTime();
        });
    }
    function setDate(date2, triggerChange2, format2) {
      if (triggerChange2 === void 0) {
        triggerChange2 = false;
      }
      if (format2 === void 0) {
        format2 = self2.config.dateFormat;
      }
      if (date2 !== 0 && !date2 || date2 instanceof Array && date2.length === 0)
        return self2.clear(triggerChange2);
      setSelectedDate(date2, format2);
      self2.latestSelectedDateObj = self2.selectedDates[self2.selectedDates.length - 1];
      self2.redraw();
      jumpToDate(void 0, triggerChange2);
      setHoursFromDate();
      if (self2.selectedDates.length === 0) {
        self2.clear(false);
      }
      updateValue(triggerChange2);
      if (triggerChange2)
        triggerEvent("onChange");
    }
    function parseDateRules(arr) {
      return arr.slice().map(function(rule) {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self2.parseDate(rule, void 0, true);
        } else if (rule && typeof rule === "object" && rule.from && rule.to)
          return {
            from: self2.parseDate(rule.from, void 0),
            to: self2.parseDate(rule.to, void 0)
          };
        return rule;
      }).filter(function(x2) {
        return x2;
      });
    }
    function setupDates() {
      self2.selectedDates = [];
      self2.now = self2.parseDate(self2.config.now) || /* @__PURE__ */ new Date();
      var preloadedDate = self2.config.defaultDate || ((self2.input.nodeName === "INPUT" || self2.input.nodeName === "TEXTAREA") && self2.input.placeholder && self2.input.value === self2.input.placeholder ? null : self2.input.value);
      if (preloadedDate)
        setSelectedDate(preloadedDate, self2.config.dateFormat);
      self2._initialDate = self2.selectedDates.length > 0 ? self2.selectedDates[0] : self2.config.minDate && self2.config.minDate.getTime() > self2.now.getTime() ? self2.config.minDate : self2.config.maxDate && self2.config.maxDate.getTime() < self2.now.getTime() ? self2.config.maxDate : self2.now;
      self2.currentYear = self2._initialDate.getFullYear();
      self2.currentMonth = self2._initialDate.getMonth();
      if (self2.selectedDates.length > 0)
        self2.latestSelectedDateObj = self2.selectedDates[0];
      if (self2.config.minTime !== void 0)
        self2.config.minTime = self2.parseDate(self2.config.minTime, "H:i");
      if (self2.config.maxTime !== void 0)
        self2.config.maxTime = self2.parseDate(self2.config.maxTime, "H:i");
      self2.minDateHasTime = !!self2.config.minDate && (self2.config.minDate.getHours() > 0 || self2.config.minDate.getMinutes() > 0 || self2.config.minDate.getSeconds() > 0);
      self2.maxDateHasTime = !!self2.config.maxDate && (self2.config.maxDate.getHours() > 0 || self2.config.maxDate.getMinutes() > 0 || self2.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
      self2.input = getInputElem();
      if (!self2.input) {
        self2.config.errorHandler(new Error("Invalid input element specified"));
        return;
      }
      self2.input._type = self2.input.type;
      self2.input.type = "text";
      self2.input.classList.add("flatpickr-input");
      self2._input = self2.input;
      if (self2.config.altInput) {
        self2.altInput = createElement(self2.input.nodeName, self2.config.altInputClass);
        self2._input = self2.altInput;
        self2.altInput.placeholder = self2.input.placeholder;
        self2.altInput.disabled = self2.input.disabled;
        self2.altInput.required = self2.input.required;
        self2.altInput.tabIndex = self2.input.tabIndex;
        self2.altInput.type = "text";
        self2.input.setAttribute("type", "hidden");
        if (!self2.config.static && self2.input.parentNode)
          self2.input.parentNode.insertBefore(self2.altInput, self2.input.nextSibling);
      }
      if (!self2.config.allowInput)
        self2._input.setAttribute("readonly", "readonly");
      updatePositionElement();
    }
    function updatePositionElement() {
      self2._positionElement = self2.config.positionElement || self2._input;
    }
    function setupMobile() {
      var inputType = self2.config.enableTime ? self2.config.noCalendar ? "time" : "datetime-local" : "date";
      self2.mobileInput = createElement("input", self2.input.className + " flatpickr-mobile");
      self2.mobileInput.tabIndex = 1;
      self2.mobileInput.type = inputType;
      self2.mobileInput.disabled = self2.input.disabled;
      self2.mobileInput.required = self2.input.required;
      self2.mobileInput.placeholder = self2.input.placeholder;
      self2.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
      if (self2.selectedDates.length > 0) {
        self2.mobileInput.defaultValue = self2.mobileInput.value = self2.formatDate(self2.selectedDates[0], self2.mobileFormatStr);
      }
      if (self2.config.minDate)
        self2.mobileInput.min = self2.formatDate(self2.config.minDate, "Y-m-d");
      if (self2.config.maxDate)
        self2.mobileInput.max = self2.formatDate(self2.config.maxDate, "Y-m-d");
      if (self2.input.getAttribute("step"))
        self2.mobileInput.step = String(self2.input.getAttribute("step"));
      self2.input.type = "hidden";
      if (self2.altInput !== void 0)
        self2.altInput.type = "hidden";
      try {
        if (self2.input.parentNode)
          self2.input.parentNode.insertBefore(self2.mobileInput, self2.input.nextSibling);
      } catch (_a3) {
      }
      bind(self2.mobileInput, "change", function(e2) {
        self2.setDate(getEventTarget(e2).value, false, self2.mobileFormatStr);
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }
    function toggle(e2) {
      if (self2.isOpen === true)
        return self2.close();
      self2.open(e2);
    }
    function triggerEvent(event, data) {
      if (self2.config === void 0)
        return;
      var hooks = self2.config[event];
      if (hooks !== void 0 && hooks.length > 0) {
        for (var i2 = 0; hooks[i2] && i2 < hooks.length; i2++)
          hooks[i2](self2.selectedDates, self2.input.value, self2, data);
      }
      if (event === "onChange") {
        self2.input.dispatchEvent(createEvent("change"));
        self2.input.dispatchEvent(createEvent("input"));
      }
    }
    function createEvent(name) {
      var e2 = document.createEvent("Event");
      e2.initEvent(name, true, true);
      return e2;
    }
    function isDateSelected(date2) {
      for (var i2 = 0; i2 < self2.selectedDates.length; i2++) {
        var selectedDate = self2.selectedDates[i2];
        if (selectedDate instanceof Date && compareDates(selectedDate, date2) === 0)
          return "" + i2;
      }
      return false;
    }
    function isDateInRange(date2) {
      if (self2.config.mode !== "range" || self2.selectedDates.length < 2)
        return false;
      return compareDates(date2, self2.selectedDates[0]) >= 0 && compareDates(date2, self2.selectedDates[1]) <= 0;
    }
    function updateNavigationCurrentMonth() {
      if (self2.config.noCalendar || self2.isMobile || !self2.monthNav)
        return;
      self2.yearElements.forEach(function(yearElement, i2) {
        var d2 = new Date(self2.currentYear, self2.currentMonth, 1);
        d2.setMonth(self2.currentMonth + i2);
        if (self2.config.showMonths > 1 || self2.config.monthSelectorType === "static") {
          self2.monthElements[i2].textContent = monthToStr(d2.getMonth(), self2.config.shorthandCurrentMonth, self2.l10n) + " ";
        } else {
          self2.monthsDropdownContainer.value = d2.getMonth().toString();
        }
        yearElement.value = d2.getFullYear().toString();
      });
      self2._hidePrevMonthArrow = self2.config.minDate !== void 0 && (self2.currentYear === self2.config.minDate.getFullYear() ? self2.currentMonth <= self2.config.minDate.getMonth() : self2.currentYear < self2.config.minDate.getFullYear());
      self2._hideNextMonthArrow = self2.config.maxDate !== void 0 && (self2.currentYear === self2.config.maxDate.getFullYear() ? self2.currentMonth + 1 > self2.config.maxDate.getMonth() : self2.currentYear > self2.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
      var format2 = specificFormat || (self2.config.altInput ? self2.config.altFormat : self2.config.dateFormat);
      return self2.selectedDates.map(function(dObj) {
        return self2.formatDate(dObj, format2);
      }).filter(function(d2, i2, arr) {
        return self2.config.mode !== "range" || self2.config.enableTime || arr.indexOf(d2) === i2;
      }).join(self2.config.mode !== "range" ? self2.config.conjunction : self2.l10n.rangeSeparator);
    }
    function updateValue(triggerChange2) {
      if (triggerChange2 === void 0) {
        triggerChange2 = true;
      }
      if (self2.mobileInput !== void 0 && self2.mobileFormatStr) {
        self2.mobileInput.value = self2.latestSelectedDateObj !== void 0 ? self2.formatDate(self2.latestSelectedDateObj, self2.mobileFormatStr) : "";
      }
      self2.input.value = getDateStr(self2.config.dateFormat);
      if (self2.altInput !== void 0) {
        self2.altInput.value = getDateStr(self2.config.altFormat);
      }
      if (triggerChange2 !== false)
        triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e2) {
      var eventTarget = getEventTarget(e2);
      var isPrevMonth = self2.prevMonthNav.contains(eventTarget);
      var isNextMonth = self2.nextMonthNav.contains(eventTarget);
      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self2.yearElements.indexOf(eventTarget) >= 0) {
        eventTarget.select();
      } else if (eventTarget.classList.contains("arrowUp")) {
        self2.changeYear(self2.currentYear + 1);
      } else if (eventTarget.classList.contains("arrowDown")) {
        self2.changeYear(self2.currentYear - 1);
      }
    }
    function timeWrapper(e2) {
      e2.preventDefault();
      var isKeyDown = e2.type === "keydown", eventTarget = getEventTarget(e2), input = eventTarget;
      if (self2.amPM !== void 0 && eventTarget === self2.amPM) {
        self2.amPM.textContent = self2.l10n.amPM[int(self2.amPM.textContent === self2.l10n.amPM[0])];
      }
      var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e2.delta || (isKeyDown ? e2.which === 38 ? 1 : -1 : 0);
      var newValue = curValue + step * delta;
      if (typeof input.value !== "undefined" && input.value.length === 2) {
        var isHourElem = input === self2.hourElement, isMinuteElem = input === self2.minuteElement;
        if (newValue < min) {
          newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self2.amPM));
          if (isMinuteElem)
            incrementNumInput(void 0, -1, self2.hourElement);
        } else if (newValue > max) {
          newValue = input === self2.hourElement ? newValue - max - int(!self2.amPM) : min;
          if (isMinuteElem)
            incrementNumInput(void 0, 1, self2.hourElement);
        }
        if (self2.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self2.amPM.textContent = self2.l10n.amPM[int(self2.amPM.textContent === self2.l10n.amPM[0])];
        }
        input.value = pad(newValue);
      }
    }
    init();
    return self2;
  }
  function _flatpickr(nodeList, config) {
    var nodes2 = Array.prototype.slice.call(nodeList).filter(function(x2) {
      return x2 instanceof HTMLElement;
    });
    var instances = [];
    for (var i2 = 0; i2 < nodes2.length; i2++) {
      var node = nodes2[i2];
      try {
        if (node.getAttribute("data-fp-omit") !== null)
          continue;
        if (node._flatpickr !== void 0) {
          node._flatpickr.destroy();
          node._flatpickr = void 0;
        }
        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e2) {
        console.error(e2);
      }
    }
    return instances.length === 1 ? instances[0] : instances;
  }
  if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
      return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function(config) {
      return _flatpickr([this], config);
    };
  }
  var flatpickr = function(selector, config) {
    if (typeof selector === "string") {
      return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
      return _flatpickr([selector], config);
    } else {
      return _flatpickr(selector, config);
    }
  };
  flatpickr.defaultConfig = {};
  flatpickr.l10ns = {
    en: __assign({}, default_default),
    default: __assign({}, default_default)
  };
  flatpickr.localize = function(l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
  };
  flatpickr.setDefaults = function(config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
  };
  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;
  if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function(config) {
      return _flatpickr(this, config);
    };
  }
  Date.prototype.fp_incr = function(days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
  };
  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
  }
  var esm_default = flatpickr;

  // js/app.js
  globalThis.Buffer = import_buffer.Buffer;
  var currentDate = /* @__PURE__ */ new Date();
  var entries = {};
  var settings = {
    endpoint: "",
    accessKey: "",
    secretKey: "",
    bucket: "",
    region: "cn-beijing"
  };
  var defaultTemplates = [
    "\u4E0A\u73ED",
    "\u6478\u9C7C",
    "\u7761\u89C9",
    "\u6E38\u620F"
  ];
  var currentDropdownMenu = null;
  document.addEventListener("gesturestart", (e2) => e2.preventDefault());
  document.addEventListener("gesturechange", (e2) => e2.preventDefault());
  document.addEventListener("touchstart", (e2) => {
    if (e2.touches.length > 1) e2.preventDefault();
  }, { passive: false });
  document.addEventListener("touchmove", (e2) => {
    if (e2.touches.length > 1) e2.preventDefault();
  }, { passive: false });
  document.addEventListener("wheel", (e2) => {
    if (e2.ctrlKey || e2.metaKey) e2.preventDefault();
  }, { passive: false });
  document.addEventListener("keydown", (e2) => {
    if ((e2.ctrlKey || e2.metaKey) && (e2.key === "+" || e2.key === "-" || e2.key === "0")) e2.preventDefault();
  });
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadSettings();
    loadLocalData();
    initDateDisplay();
    renderEntries();
    initEventListeners();
    autoFetchFromS3();
  });
  function initTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e2) => {
      if (e2.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    });
  }
  function loadSettings() {
    const saved = localStorage.getItem("diary-s3-settings");
    if (saved) {
      settings = JSON.parse(saved);
      populateSettingsForm();
    }
  }
  function populateSettingsForm() {
    document.getElementById("s3-endpoint").value = settings.endpoint || "";
    document.getElementById("s3-access-key").value = settings.accessKey || "";
    document.getElementById("s3-secret-key").value = settings.secretKey || "";
    document.getElementById("s3-bucket").value = settings.bucket || "";
    document.getElementById("s3-region").value = settings.region || "";
  }
  function saveSettings() {
    settings = {
      endpoint: document.getElementById("s3-endpoint").value.trim(),
      accessKey: document.getElementById("s3-access-key").value.trim(),
      secretKey: document.getElementById("s3-secret-key").value.trim(),
      bucket: document.getElementById("s3-bucket").value.trim(),
      region: document.getElementById("s3-region").value.trim()
    };
    localStorage.setItem("diary-s3-settings", JSON.stringify(settings));
    showToast("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
    closeModal("settings-modal");
  }
  function loadLocalData() {
    const saved = localStorage.getItem("diary-entries");
    if (saved) {
      entries = JSON.parse(saved);
    }
  }
  function saveLocalData() {
    localStorage.setItem("diary-entries", JSON.stringify(entries));
  }
  var flatpickrInstance = null;
  function initDateDisplay() {
    const dateInput = document.getElementById("date-picker-input");
    if (!dateInput) {
      console.error("\u65E5\u671F\u9009\u62E9\u5668\u8F93\u5165\u6846\u4E0D\u5B58\u5728");
      return;
    }
    try {
      flatpickrInstance = esm_default(dateInput, {
        dateFormat: "Y-m-d",
        defaultDate: currentDate,
        onChange: function(selectedDates, dateStr) {
          if (selectedDates.length > 0) {
            currentDate = selectedDates[0];
            renderEntries();
          }
        },
        locale: {
          firstDayOfWeek: 1,
          weekdays: {
            shorthand: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
            longhand: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"]
          },
          months: {
            shorthand: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
            longhand: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
          }
        }
      });
    } catch (error) {
      console.error("flatpickr \u521D\u59CB\u5316\u5931\u8D25:", error);
    }
    updateDateDisplay();
  }
  function updateDateDisplay() {
    if (flatpickrInstance) {
      flatpickrInstance.setDate(currentDate, false);
    }
  }
  function formatDate(date2) {
    const year2 = date2.getFullYear();
    const month = String(date2.getMonth() + 1).padStart(2, "0");
    const day = String(date2.getDate()).padStart(2, "0");
    return `${year2}-${month}-${day}`;
  }
  function renderEntries() {
    const container = document.getElementById("entries-container");
    container.innerHTML = "";
    const dateKey = formatDate(currentDate);
    const dayEntry = entries[dateKey];
    const dayEntries = dayEntry && dayEntry.data || Array(13).fill("");
    for (let i2 = 0; i2 < 13; i2++) {
      const entryDiv = document.createElement("div");
      entryDiv.className = "entry-item";
      const inputWrapper = document.createElement("div");
      inputWrapper.className = "entry-input-wrapper";
      const input = document.createElement("textarea");
      input.className = "entry-input" + (i2 === 12 ? " large" : "");
      input.rows = i2 === 12 ? 6 : 2;
      input.value = dayEntries[i2] || "";
      input.dataset.index = i2;
      input.addEventListener("input", (e2) => {
        updateEntry(i2, e2.target.value);
      });
      inputWrapper.appendChild(input);
      if (i2 < 12) {
        const dropdownBtn = document.createElement("button");
        dropdownBtn.className = "dropdown-trigger";
        dropdownBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
        dropdownBtn.title = "\u9009\u62E9\u9ED8\u8BA4\u4E8B\u9879";
        dropdownBtn.addEventListener("click", (e2) => {
          e2.stopPropagation();
          if (currentDropdownMenu) {
            currentDropdownMenu.remove();
            currentDropdownMenu = null;
          } else {
            showDropdown(dropdownBtn, i2, input);
          }
        });
        inputWrapper.appendChild(dropdownBtn);
      }
      entryDiv.appendChild(inputWrapper);
      container.appendChild(entryDiv);
      if (i2 === 3 || i2 === 7) {
        const separator = document.createElement("div");
        separator.className = "entry-separator";
        container.appendChild(separator);
      }
    }
  }
  function updateEntry(index, value) {
    const dateKey = formatDate(currentDate);
    if (!entries[dateKey]) {
      entries[dateKey] = {
        data: Array(13).fill(""),
        lastModified: Date.now()
      };
    }
    entries[dateKey].data[index] = value;
    entries[dateKey].lastModified = Date.now();
    saveLocalData();
  }
  function getDropdownOptions() {
    const dateKey = formatDate(currentDate);
    const dayEntry = entries[dateKey];
    const todayItems = [];
    if (dayEntry && dayEntry.data) {
      dayEntry.data.forEach((item) => {
        if (item && item.trim() && !todayItems.includes(item.trim()) && !defaultTemplates.includes(item.trim())) {
          todayItems.push(item.trim());
        }
      });
    }
    return [...todayItems, ...defaultTemplates];
  }
  function showDropdown(button, index, input) {
    const menu = document.createElement("div");
    menu.className = "dropdown-menu";
    const options = getDropdownOptions();
    options.forEach((template) => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = template;
      item.addEventListener("click", () => {
        input.value = template;
        updateEntry(index, template);
        menu.remove();
        currentDropdownMenu = null;
      });
      menu.appendChild(item);
    });
    const clearItem = document.createElement("div");
    clearItem.className = "dropdown-item";
    clearItem.textContent = "\u6E05\u7A7A";
    clearItem.style.color = "#ef4444";
    clearItem.addEventListener("click", () => {
      input.value = "";
      updateEntry(index, "");
      menu.remove();
      currentDropdownMenu = null;
    });
    menu.appendChild(clearItem);
    menu.style.visibility = "hidden";
    document.body.appendChild(menu);
    const menuWidth = menu.offsetWidth;
    const inputRect = input.getBoundingClientRect();
    let menuLeft = inputRect.right - menuWidth;
    if (menuLeft < 8) {
      menuLeft = 8;
    }
    menu.style.left = `${menuLeft}px`;
    menu.style.top = `${inputRect.bottom + 4}px`;
    menu.style.visibility = "visible";
    currentDropdownMenu = menu;
  }
  function initEventListeners() {
    document.getElementById("prev-day").addEventListener("click", () => {
      currentDate.setDate(currentDate.getDate() - 1);
      updateDateDisplay();
      renderEntries();
    });
    document.getElementById("next-day").addEventListener("click", () => {
      currentDate.setDate(currentDate.getDate() + 1);
      updateDateDisplay();
      renderEntries();
    });
    document.getElementById("settings-btn").addEventListener("click", () => {
      openModal("settings-modal");
    });
    document.getElementById("close-settings").addEventListener("click", () => {
      closeModal("settings-modal");
    });
    document.getElementById("save-settings").addEventListener("click", saveSettings);
    document.getElementById("check-connection").addEventListener("click", () => __async(null, null, function* () {
      saveSettings();
      try {
        showLoading("\u6B63\u5728\u68C0\u67E5\u8FDE\u63A5...");
        const success = yield checkS3Connect((error) => {
          console.error("\u8FDE\u63A5\u68C0\u67E5\u5931\u8D25:", error);
        });
        hideLoading();
        if (success) {
          showToast("\u8FDE\u63A5\u6210\u529F\uFF01");
        } else {
          showToast("\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
        }
      } catch (error) {
        hideLoading();
        console.error("\u68C0\u67E5\u8FDE\u63A5\u65F6\u51FA\u9519:", error);
        showToast("\u68C0\u67E5\u8FDE\u63A5\u65F6\u51FA\u9519: " + error.message);
      }
    }));
    document.getElementById("sync-btn").addEventListener("click", syncToS3);
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e2) => {
        if (e2.target === modal) {
          closeModal(modal.id);
        }
      });
    });
    document.addEventListener("click", (e2) => {
      if (currentDropdownMenu) {
        if (!currentDropdownMenu.contains(e2.target)) {
          currentDropdownMenu.remove();
          currentDropdownMenu = null;
        }
      }
    });
  }
  function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
  }
  function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
  }
  function showLoading(text = "\u540C\u6B65\u4E2D...") {
    document.getElementById("loading-text").textContent = text;
    document.getElementById("loading-overlay").classList.add("active");
  }
  function hideLoading() {
    document.getElementById("loading-overlay").classList.remove("active");
  }
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("active");
    setTimeout(() => {
      toast.classList.remove("active");
    }, 3e3);
  }
  function isS3Configured() {
    return settings.endpoint && settings.endpoint.trim() && settings.accessKey && settings.accessKey.trim() && settings.secretKey && settings.secretKey.trim() && settings.bucket && settings.bucket.trim();
  }
  function checkS3Connect(callbackFunc) {
    return __async(this, null, function* () {
      if (!isS3Configured()) {
        const error = new Error("S3 \u914D\u7F6E\u4E0D\u5B8C\u6574");
        if (callbackFunc) callbackFunc(error);
        return false;
      }
      try {
        const s3Client = createS3Client();
        const confCmd = {
          Bucket: settings.bucket,
          MaxKeys: 10
        };
        const results = yield s3Client.send(new ListObjectsV2Command(confCmd));
        if (!results || !results.$metadata || !results.$metadata.httpStatusCode) {
          throw new Error("\u65E0\u6548\u7684 S3 \u54CD\u5E94");
        }
        if (results.$metadata.httpStatusCode !== 200) {
          throw new Error(`HTTP \u72B6\u6001\u7801: ${results.$metadata.httpStatusCode}`);
        }
        return true;
      } catch (err) {
        console.error("S3 \u8FDE\u63A5\u68C0\u67E5\u5931\u8D25:", err);
        if (callbackFunc) callbackFunc(err);
        return false;
      }
    });
  }
  function syncToS3() {
    return __async(this, null, function* () {
      if (!isS3Configured()) {
        showToast("\u8BF7\u5148\u914D\u7F6E S3 \u8BBE\u7F6E");
        openModal("settings-modal");
        return;
      }
      try {
        showLoading("\u6B63\u5728\u540C\u6B65...");
        const cloudLastModified = yield fetchFromS3();
        const dateKey = formatDate(currentDate);
        const currentEntry = entries[dateKey];
        const localLastModified = (currentEntry == null ? void 0 : currentEntry.lastModified) || 0;
        if (cloudLastModified > localLastModified && cloudLastModified > 0) {
          hideLoading();
          showToast("\u4E91\u7AEF\u6570\u636E\u66F4\u65B0\uFF0C\u5DF2\u8DF3\u8FC7\u4E0A\u4F20");
          return;
        }
        yield uploadToS3((currentEntry == null ? void 0 : currentEntry.data) || Array(13).fill(""));
        hideLoading();
        showToast("\u540C\u6B65\u6210\u529F");
      } catch (error) {
        hideLoading();
        console.error("\u540C\u6B65\u5931\u8D25:", error);
        showToast("\u540C\u6B65\u5931\u8D25: " + error.message);
      }
    });
  }
  function fetchFromS3() {
    return __async(this, null, function* () {
      var _a3;
      if (!isS3Configured()) {
        return 0;
      }
      try {
        const s3Client = createS3Client();
        const dateKey = formatDate(currentDate);
        const fileName = `${dateKey}.md`;
        const command = new GetObjectCommand({
          Bucket: settings.bucket,
          Key: fileName
        });
        const response = yield s3Client.send(command);
        const cloudLastModified = response.LastModified ? response.LastModified.getTime() : 0;
        const body = yield (_a3 = response.Body) == null ? void 0 : _a3.transformToString();
        if (body) {
          console.log("\u4ECE S3 \u83B7\u53D6\u7684 MD \u5185\u5BB9:", body);
          const cloudEntries = parseMdToEntries(body);
          const localEntry = entries[dateKey];
          const localEntries = localEntry && localEntry.data || Array(13).fill("");
          const localLastModified = (localEntry == null ? void 0 : localEntry.lastModified) || 0;
          if (cloudLastModified > localLastModified) {
            entries[dateKey] = {
              data: cloudEntries,
              lastModified: cloudLastModified
            };
            console.log("\u4E91\u7AEF\u6570\u636E\u66F4\u65B0\uFF0C\u5DF2\u8986\u76D6\u672C\u5730\u6570\u636E");
          } else {
            const mergedEntries = mergeEntries(localEntries, cloudEntries);
            entries[dateKey] = {
              data: mergedEntries,
              lastModified: localLastModified
            };
          }
          saveLocalData();
          renderEntries();
        }
        return cloudLastModified;
      } catch (error) {
        console.error("\u4ECE S3 \u62C9\u53D6\u6570\u636E\u5931\u8D25:", error);
        if (error.name !== "NoSuchKey") {
          throw error;
        } else {
        }
        return 0;
      }
    });
  }
  function mergeEntries(localEntries, cloudEntries) {
    const merged = [];
    for (let i2 = 0; i2 < 13; i2++) {
      const localValue = localEntries[i2] || "";
      const cloudValue = cloudEntries[i2] || "";
      if (localValue.trim() !== "") {
        merged.push(localValue);
      } else {
        merged.push(cloudValue);
      }
    }
    return merged;
  }
  function uploadToS3(data) {
    return __async(this, null, function* () {
      if (!isS3Configured()) {
        throw new Error("\u8BF7\u5148\u914D\u7F6E S3 \u8BBE\u7F6E");
      }
      try {
        const s3Client = createS3Client();
        const dateKey = formatDate(currentDate);
        const fileName = `${dateKey}.md`;
        const mdContent = entriesToMd(data);
        const command = new PutObjectCommand({
          Bucket: settings.bucket,
          Key: fileName,
          Body: mdContent,
          ContentType: "text/markdown",
          // 启用服务端加密（SSE-OSS）
          ServerSideEncryption: "AES256"
        });
        yield s3Client.send(command);
      } catch (error) {
        console.error("\u4E0A\u4F20\u5230 S3 \u5931\u8D25:", error);
        throw error;
      }
    });
  }
  function autoFetchFromS3() {
    return __async(this, null, function* () {
      if (isS3Configured()) {
        try {
          showLoading("\u6B63\u5728\u52A0\u8F7D\u6570\u636E...");
          yield fetchFromS3();
          hideLoading();
        } catch (error) {
          hideLoading();
          console.error("\u81EA\u52A8\u62C9\u53D6\u5931\u8D25:", error);
        }
      }
    });
  }
  var s3ClientInstance = null;
  var lastConfigHash = null;
  function getConfigHash() {
    return `${settings.endpoint}-${settings.region}-${settings.accessKey}-${settings.secretKey}`;
  }
  function createS3Client() {
    const currentConfigHash = getConfigHash();
    if (s3ClientInstance && lastConfigHash === currentConfigHash) {
      return s3ClientInstance;
    }
    let endpoint = settings.endpoint;
    if (!endpoint.startsWith("https://")) {
      if (endpoint.startsWith("http://")) {
        endpoint = endpoint.replace("http://", "https://");
      } else {
        endpoint = "https://" + endpoint;
      }
    }
    s3ClientInstance = new S3Client({
      region: settings.region,
      endpoint,
      forcePathStyle: false,
      credentials: {
        accessKeyId: settings.accessKey,
        secretAccessKey: settings.secretKey
      }
    });
    lastConfigHash = currentConfigHash;
    return s3ClientInstance;
  }
  function entriesToMd(entriesArray) {
    let mdContent = `# ${formatDate(currentDate)} \u65E5\u8BB0

`;
    for (let i2 = 0; i2 < 12; i2++) {
      const content = entriesArray[i2] || "";
      mdContent += `${content}

`;
    }
    const thoughts = entriesArray[12] || "";
    mdContent += `## \u4ECA\u65E5\u611F\u60F3

${thoughts}
`;
    return mdContent;
  }
  function parseMdToEntries(mdContent) {
    const entriesArray = Array(13).fill("");
    const lines = mdContent.split("\n");
    let contentLines = [];
    let inMainContent = false;
    let inThoughts = false;
    lines.forEach((line) => {
      if (line.trim() === "" || line.startsWith("# ")) {
        return;
      }
      if (line.startsWith("## \u4ECA\u65E5\u611F\u60F3")) {
        inMainContent = false;
        inThoughts = true;
        return;
      }
      if (!inThoughts) {
        inMainContent = true;
        contentLines.push(line);
      } else {
        if (entriesArray[12]) {
          entriesArray[12] += "\n" + line;
        } else {
          entriesArray[12] = line;
        }
      }
    });
    for (let i2 = 0; i2 < 12 && i2 < contentLines.length; i2++) {
      entriesArray[i2] = contentLines[i2].trim();
    }
    if (entriesArray[12]) {
      entriesArray[12] = entriesArray[12].trim();
    }
    return entriesArray;
  }
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
