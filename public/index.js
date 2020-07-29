(function () {
  'use strict';

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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _fails = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.11'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function _isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function _anObject(it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE

  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive = function _toPrimitive(it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp = {
    f: f
  };

  var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var id = 0;
  var px = Math.random();

  var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode:  'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  });

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var TPL = ('' + _functionToString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return _functionToString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || _functionToString.call(this);
    });
  });

  var _aFunction = function _aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _ctx = function _ctx(fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

      if (target) _redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  _global.core = _core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');
    var setDesc = _objectDp.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');
    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def = _objectDp.f;
  var TAG = _wks('toStringTag');

  var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };

  var f$1 = _wks;
  var _wksExt = {
    f: f$1
  };

  var defineProperty = _objectDp.f;

  var _wksDefine = function _wksDefine(name) {
    var $Symbol = _core.Symbol || (_core.Symbol =  _global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
      value: _wksExt.f(name)
    });
  };

  var toString = {}.toString;

  var _cof = function _cof(it) {
    return toString.call(it).slice(8, -1);
  };

  // eslint-disable-next-line no-prototype-builtins

  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function _defined(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _toIobject = function _toIobject(it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var min = Math.min;

  var _toLength = function _toLength(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // true  -> Array#includes

  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
      }
      return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      if (key != IE_PROTO) _has(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$2 = Object.getOwnPropertySymbols;
  var _objectGops = {
    f: f$2
  };

  var f$3 = {}.propertyIsEnumerable;
  var _objectPie = {
    f: f$3
  };

  var _enumKeys = function _enumKeys(it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;

      while (symbols.length > i) {
        if (isEnum.call(it, key = symbols[i++])) result.push(key);
      }
    }

    return result;
  };

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var _toObject = function _toObject(it) {
    return Object(_defined(it));
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) {
      _objectDp.f(O, P = keys[i++], Properties[P]);
    }

    return O;
  };

  var document$2 = _global.document;

  var _html = document$2 && document$2.documentElement;

  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var Empty = function Empty() {
    /* empty */
  };

  var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;

    while (i--) {
      delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
    }

    return _createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _createDict();

    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
    f: f$4
  };

  var gOPN = _objectGopn.f;
  var toString$1 = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
    f: f$5
  };

  var gOPD = Object.getOwnPropertyDescriptor;
  var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };
  var _objectGopd = {
    f: f$6
  };

  var META = _meta.KEY;
  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;

  var _stringify = $JSON && $JSON.stringify;

  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = _wks('_hidden');
  var TO_PRIMITIVE = _wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = _shared('symbol-registry');
  var AllSymbols = _shared('symbols');
  var OPSymbols = _shared('op-symbols');
  var ObjectProto = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
  var QObject = _global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function get() {
        return dP$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
  } : dP$1;

  var wrap = function wrap(tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);

    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);

    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, {
          enumerable: _propertyDesc(0, false)
        });
      }

      return setSymbolDesc(it, key, D);
    }

    return dP$1(it, key, D);
  };

  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) {
      $defineProperty(it, key = keys[i++], P[key]);
    }

    return it;
  };

  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function $set(value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };

      if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, {
        configurable: true,
        set: $set
      });
      return wrap(tag);
    };

    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });
    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, {
    Symbol: $Symbol
  });

  for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
    _wks(es6Symbols[j++]);
  }

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
    _wksDefine(wellKnownSymbols[k++]);
  }

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function _for(key) {
      return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry) {
        if (SymbolRegistry[key] === sym) return key;
      }
    },
    useSetter: function useSetter() {
      setter = true;
    },
    useSimple: function useSimple() {
      setter = false;
    }
  });
  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  var FAILS_ON_PRIMITIVES = _fails(function () {
    _objectGops.f(1);
  });
  _export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return _objectGops.f(_toObject(it));
    }
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify([S]) != '[null]' || _stringify({
      a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!_isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  _setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

  _setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

  _setToStringTag(_global.JSON, 'JSON', true);

  _export(_export.S, 'Object', {
    create: _objectCreate
  });

  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperty: _objectDp.f
  });

  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperties: _objectDps
  });

  var _objectSap = function _objectSap(KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () {
      fn(1);
    }), 'Object', exp);
  };

  var $getOwnPropertyDescriptor$1 = _objectGopd.f;
  _objectSap('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor$1(_toIobject(it), key);
    };
  });

  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto$1 = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto$1 : null;
  };

  _objectSap('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return _objectGpo(_toObject(it));
    };
  });

  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  _objectSap('getOwnPropertyNames', function () {
    return _objectGopnExt.f;
  });

  var meta = _meta.onFreeze;
  _objectSap('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
    };
  });

  var meta$1 = _meta.onFreeze;
  _objectSap('seal', function ($seal) {
    return function seal(it) {
      return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
    };
  });

  var meta$2 = _meta.onFreeze;
  _objectSap('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
    };
  });

  _objectSap('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });

  _objectSap('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });

  _objectSap('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;

    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  _export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
  });

  // 7.2.9 SameValue(x, y)
  var _sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  _export(_export.S, 'Object', {
    is: _sameValue
  });

  /* eslint-disable no-proto */

  var check = function check(O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

  _export(_export.S, 'Object', {
    setPrototypeOf: _setProto.set
  });

  var TAG$1 = _wks('toStringTag'); // ES3 wrong here

  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T // builtinTag case
    : ARG ? _cof(O) // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var test = {};
  test[_wks('toStringTag')] = 'z';

  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var arraySlice = [].slice;
  var factories = {};

  var construct = function construct(F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) {
        n[i] = 'a[' + i + ']';
      } // eslint-disable-next-line no-new-func


      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }

    return factories[len](F, args);
  };

  var _bind = Function.bind || function bind(that
  /* , ...args */
  ) {
    var fn = _aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);

    var bound = function bound()
    /* args... */
    {
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
    };

    if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  };

  _export(_export.P, 'Function', {
    bind: _bind
  });

  var dP$2 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // 19.2.4.2 name

  NAME in FProto || _descriptors && dP$2(FProto, NAME, {
    configurable: true,
    get: function get() {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  var HAS_INSTANCE = _wks('hasInstance');
  var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

  if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, {
    value: function value(O) {
      if (typeof this != 'function' || !_isObject(O)) return false;
      if (!_isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

      while (O = _objectGpo(O)) {
        if (this.prototype === O) return true;
      }

      return false;
    }
  });

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function exporter(KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  }; // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim


  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var $parseInt = _global.parseInt;
  var $trim = _stringTrim.trim;
  var hex = /^[-+]?0[xX]/;

  var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt;

  _export(_export.G + _export.F * (parseInt != _parseInt), {
    parseInt: _parseInt
  });

  var $parseFloat = _global.parseFloat;
  var $trim$1 = _stringTrim.trim;

  var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim$1(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

  _export(_export.G + _export.F * (parseFloat != _parseFloat), {
    parseFloat: _parseFloat
  });

  var setPrototypeOf = _setProto.set;

  var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
    var S = target.constructor;
    var P;

    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }

    return that;
  };

  var gOPN$2 = _objectGopn.f;
  var gOPD$2 = _objectGopd.f;
  var dP$3 = _objectDp.f;
  var $trim$2 = _stringTrim.trim;
  var NUMBER = 'Number';
  var $Number = _global[NUMBER];
  var Base = $Number;
  var proto = $Number.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
  var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

  var toNumber = function toNumber(argument) {
    var it = _toPrimitive(argument, false);

    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim$2(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal /^0o[0-7]+$/i

          default:
            return +it;
        }

        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number // check on 1..constructor(foo) case
      && (BROKEN_COF ? _fails(function () {
        proto.valueOf.call(that);
      }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };

    for (var keys = _descriptors ? gOPN$2(Base) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
      if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
        dP$3($Number, key, gOPD$2(Base, key));
      }
    }

    $Number.prototype = proto;
    proto.constructor = $Number;
    _redefine(_global, NUMBER, $Number);
  }

  var _aNumberValue = function _aNumberValue(it, msg) {
    if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
    return +it;
  };

  var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';
    var n = _toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) res += str;
    }

    return res;
  };

  var $toFixed = 1.0.toFixed;
  var floor$1 = Math.floor;
  var data = [0, 0, 0, 0, 0, 0];
  var ERROR = 'Number.toFixed: incorrect invocation!';
  var ZERO = '0';

  var multiply = function multiply(n, c) {
    var i = -1;
    var c2 = c;

    while (++i < 6) {
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor$1(c2 / 1e7);
    }
  };

  var divide = function divide(n) {
    var i = 6;
    var c = 0;

    while (--i >= 0) {
      c += data[i];
      data[i] = floor$1(c / n);
      c = c % n * 1e7;
    }
  };

  var numToString = function numToString() {
    var i = 6;
    var s = '';

    while (--i >= 0) {
      if (s !== '' || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
      }
    }

    return s;
  };

  var pow = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  _export(_export.P + _export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_fails(function () {
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits) {
      var x = _aNumberValue(this, ERROR);
      var f = _toInteger(fractionDigits);
      var s = '';
      var m = ZERO;
      var e, z, j, k;
      if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

      if (x != x) return 'NaN';
      if (x <= -1e21 || x >= 1e21) return String(x);

      if (x < 0) {
        s = '-';
        x = -x;
      }

      if (x > 1e-21) {
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(0, z);
          j = f;

          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }

          multiply(pow(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }

          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + _stringRepeat.call(ZERO, f);
        }
      }

      if (f > 0) {
        k = m.length;
        m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      }

      return m;
    }
  });

  var $toPrecision = 1.0.toPrecision;
  _export(_export.P + _export.F * (_fails(function () {
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !_fails(function () {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision) {
      var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
  });

  _export(_export.S, 'Number', {
    EPSILON: Math.pow(2, -52)
  });

  var _isFinite = _global.isFinite;
  _export(_export.S, 'Number', {
    isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }
  });

  var floor$2 = Math.floor;

  var _isInteger = function isInteger(it) {
    return !_isObject(it) && isFinite(it) && floor$2(it) === it;
  };

  _export(_export.S, 'Number', {
    isInteger: _isInteger
  });

  _export(_export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });

  var abs = Math.abs;
  _export(_export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
      return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });

  _export(_export.S, 'Number', {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
  });

  _export(_export.S, 'Number', {
    MIN_SAFE_INTEGER: -0x1fffffffffffff
  });

  _export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', {
    parseFloat: _parseFloat
  });

  _export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', {
    parseInt: _parseInt
  });

  // 20.2.2.20 Math.log1p(x)
  var _mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };

  var sqrt = Math.sqrt;
  var $acosh = Math.acosh;
  _export(_export.S + _export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

  var $asinh = Math.asinh;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  } // Tor Browser bug: Math.asinh(0) -> -0


  _export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
    asinh: asinh
  });

  var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

  _export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });

  // 20.2.2.28 Math.sign(x)
  var _mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  _export(_export.S, 'Math', {
    cbrt: function cbrt(x) {
      return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });

  _export(_export.S, 'Math', {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });

  var exp = Math.exp;
  _export(_export.S, 'Math', {
    cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });

  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;

  var _mathExpm1 = !$expm1 // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;

  _export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', {
    expm1: _mathExpm1
  });

  var pow$1 = Math.pow;
  var EPSILON = pow$1(2, -52);
  var EPSILON32 = pow$1(2, -23);
  var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$1(2, -126);

  var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  var _mathFround = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = _mathSign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  _export(_export.S, 'Math', {
    fround: _mathFround
  });

  var abs$1 = Math.abs;
  _export(_export.S, 'Math', {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs$1(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });

  var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

  _export(_export.S + _export.F * _fails(function () {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y) {
      var UINT16 = 0xffff;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

  _export(_export.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) * Math.LOG10E;
    }
  });

  _export(_export.S, 'Math', {
    log1p: _mathLog1p
  });

  _export(_export.S, 'Math', {
    log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }
  });

  _export(_export.S, 'Math', {
    sign: _mathSign
  });

  var exp$1 = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

  _export(_export.S + _export.F * _fails(function () {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (_mathExpm1(x) - _mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
    }
  });

  var exp$2 = Math.exp;
  _export(_export.S, 'Math', {
    tanh: function tanh(x) {
      var a = _mathExpm1(x = +x);
      var b = _mathExpm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
    }
  });

  _export(_export.S, 'Math', {
    trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

  var fromCharCode = String.fromCharCode;
  var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

  _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var res = [];
      var aLen = arguments.length;
      var i = 0;
      var code;

      while (aLen > i) {
        code = +arguments[i++];
        if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }

      return res.join('');
    }
  });

  _export(_export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
      var tpl = _toIobject(callSite.raw);
      var len = _toLength(tpl.length);
      var aLen = arguments.length;
      var res = [];
      var i = 0;

      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < aLen) res.push(String(arguments[i]));
      }

      return res.join('');
    }
  });

  _stringTrim('trim', function ($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });

  // false -> String#codePointAt

  var _stringAt = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _iterators = {};

  var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {
      next: _propertyDesc(1, next)
    });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function returnThis() {
    return this;
  };

  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);

    var getMethod = function getMethod(kind) {
      if (!BUGGY && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

        if ( typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if ( (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    } // Plug for library


    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()

  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  var $at$1 = _stringAt(false);
  _export(_export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
      return $at$1(this, pos);
    }
  });

  var MATCH = _wks('match');

  var _isRegexp = function _isRegexp(it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var _stringContext = function _stringContext(that, searchString, NAME) {
    if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
  };

  var MATCH$1 = _wks('match');

  var _failsIsRegexp = function _failsIsRegexp(KEY) {
    var re = /./;

    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) {
        /* empty */
      }
    }

    return true;
  };

  var ENDS_WITH = 'endsWith';
  var $endsWith = ''[ENDS_WITH];
  _export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = _stringContext(this, searchString, ENDS_WITH);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = _toLength(that.length);
      var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
      var search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });

  var INCLUDES = 'includes';
  _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
  });

  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];
  _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = _stringContext(this, searchString, STARTS_WITH);
      var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });

  var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

  var createHTML = function createHTML(string, tag, attribute, value) {
    var S = String(_defined(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  var _stringHtml = function _stringHtml(NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    _export(_export.P + _export.F * _fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };

  _stringHtml('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  });

  _stringHtml('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  });

  _stringHtml('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  });

  _stringHtml('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  });

  _stringHtml('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  });

  _stringHtml('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  });

  _stringHtml('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  });

  _stringHtml('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  });

  _stringHtml('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  });

  _stringHtml('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  });

  _stringHtml('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  });

  _stringHtml('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  });

  _stringHtml('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  });

  _export(_export.S, 'Date', {
    now: function now() {
      return new Date().getTime();
    }
  });

  _export(_export.P + _export.F * _fails(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  }), 'Date', {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
      var O = _toObject(this);
      var pv = _toPrimitive(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var getTime = Date.prototype.getTime;
  var $toISOString = Date.prototype.toISOString;

  var lz = function lz(num) {
    return num > 9 ? num : '0' + num;
  }; // PhantomJS / old WebKit has a broken implementations


  var _dateToIsoString = _fails(function () {
    return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !_fails(function () {
    $toISOString.call(new Date(NaN));
  }) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  } : $toISOString;

  // PhantomJS / old WebKit has a broken implementations

  _export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
    toISOString: _dateToIsoString
  });

  var DateProto = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING = 'toString';
  var $toString = DateProto[TO_STRING];
  var getTime$1 = DateProto.getTime;

  if (new Date(NaN) + '' != INVALID_DATE) {
    _redefine(DateProto, TO_STRING, function toString() {
      var value = getTime$1.call(this); // eslint-disable-next-line no-self-compare

      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }

  var NUMBER$1 = 'number';

  var _dateToPrimitive = function _dateToPrimitive(hint) {
    if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
    return _toPrimitive(_anObject(this), hint != NUMBER$1);
  };

  var TO_PRIMITIVE$1 = _wks('toPrimitive');
  var proto$1 = Date.prototype;
  if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

  _export(_export.S, 'Array', {
    isArray: _isArray
  });

  var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function _createProperty(object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();

    riter['return'] = function () {
      SAFE_CLOSING = true;
    }; // eslint-disable-next-line no-throw-literal


    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {
    /* empty */
  }

  var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$3] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {
    Array.from(iter);
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike
    /* , mapfn = undefined, thisArg = undefined */
    ) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);

        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }

      result.length = index;
      return result;
    }
  });

  _export(_export.S + _export.F * _fails(function () {
    function F() {
      /* empty */
    }

    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of()
    /* ...args */
    {
      var index = 0;
      var aLen = arguments.length;
      var result = new (typeof this == 'function' ? this : Array)(aLen);

      while (aLen > index) {
        _createProperty(result, index, arguments[index++]);
      }

      result.length = aLen;
      return result;
    }
  });

  var _strictMethod = function _strictMethod(method, arg) {
    return !!method && _fails(function () {
      // eslint-disable-next-line no-useless-call
      arg ? method.call(null, function () {
        /* empty */
      }, 1) : method.call(null);
    });
  };

  var arrayJoin = [].join; // fallback for not array-like strings

  _export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
    join: function join(separator) {
      return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
    }
  });

  var arraySlice$1 = [].slice; // fallback for not array-like ES3 strings and DOM objects

  _export(_export.P + _export.F * _fails(function () {
    if (_html) arraySlice$1.call(_html);
  }), 'Array', {
    slice: function slice(begin, end) {
      var len = _toLength(this.length);
      var klass = _cof(this);
      end = end === undefined ? len : end;
      if (klass == 'Array') return arraySlice$1.call(this, begin, end);
      var start = _toAbsoluteIndex(begin, len);
      var upTo = _toAbsoluteIndex(end, len);
      var size = _toLength(upTo - start);
      var cloned = new Array(size);
      var i = 0;

      for (; i < size; i++) {
        cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
      }

      return cloned;
    }
  });

  var $sort = [].sort;
  var test$1 = [1, 2, 3];
  _export(_export.P + _export.F * (_fails(function () {
    // IE8-
    test$1.sort(undefined);
  }) || !_fails(function () {
    // V8 bug
    test$1.sort(null); // Old WebKit
  }) || !_strictMethod($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
    }
  });

  var SPECIES = _wks('species');

  var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
    var C;

    if (_isArray(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;

      if (_isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex

  var _arrayMethods = function _arrayMethods(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);

          if (TYPE) {
            if (IS_MAP) result[index] = res; // map
            else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return val;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  result.push(val);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var $forEach = _arrayMethods(0);
  var STRICT = _strictMethod([].forEach, true);
  _export(_export.P + _export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });

  var $map = _arrayMethods(1);
  _export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments[1]);
    }
  });

  var $filter = _arrayMethods(2);
  _export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });

  var $some = _arrayMethods(3);
  _export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return $some(this, callbackfn, arguments[1]);
    }
  });

  var $every = _arrayMethods(4);
  _export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return $every(this, callbackfn, arguments[1]);
    }
  });

  var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
    _aFunction(callbackfn);
    var O = _toObject(that);
    var self = _iobject(O);
    var length = _toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2) for (;;) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (isRight ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; isRight ? index >= 0 : length > index; index += i) {
      if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
    }

    return memo;
  };

  _export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });

  _export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });

  var $indexOf = _arrayIncludes(false);
  var $native = [].indexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
  _export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
  });

  var $native$1 = [].lastIndexOf;
  var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;
  _export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex = @[*-1] */
    ) {
      // convert -0 to +0
      if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
      var O = _toIobject(this);
      var length = _toLength(O.length);
      var index = length - 1;
      if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
      if (index < 0) index = length + index;

      for (; index >= 0; index--) {
        if (index in O) if (O[index] === searchElement) return index || 0;
      }

      return -1;
    }
  });

  var _arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = _toObject(this);
    var len = _toLength(O.length);
    var to = _toAbsoluteIndex(target, len);
    var from = _toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});

  var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  _export(_export.P, 'Array', {
    copyWithin: _arrayCopyWithin
  });
  _addToUnscopables('copyWithin');

  var _arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  };

  _export(_export.P, 'Array', {
    fill: _arrayFill
  });
  _addToUnscopables('fill');

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true; // Shouldn't skip holes

  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  var $find$1 = _arrayMethods(6);
  var KEY$1 = 'findIndex';
  var forced$1 = true; // Shouldn't skip holes

  if (KEY$1 in []) Array(1)[KEY$1](function () {
    forced$1 = false;
  });
  _export(_export.P + _export.F * forced$1, 'Array', {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY$1);

  var SPECIES$1 = _wks('species');

  var _setSpecies = function _setSpecies(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };

  _setSpecies('Array');

  var _iterStep = function _iterStep(done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }

    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  _iterators.Arguments = _iterators.Array;
  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var _flags = function _flags() {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var dP$4 = _objectDp.f;
  var gOPN$3 = _objectGopn.f;
  var $RegExp = _global.RegExp;
  var Base$1 = $RegExp;
  var proto$2 = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" creates a new object, old webkit buggy here

  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if (_descriptors && (!CORRECT_NEW || _fails(function () {
    re2[_wks('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;
      var piRE = _isRegexp(p);
      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p, f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
    };

    var proxy = function proxy(key) {
      key in $RegExp || dP$4($RegExp, key, {
        configurable: true,
        get: function get() {
          return Base$1[key];
        },
        set: function set(it) {
          Base$1[key] = it;
        }
      });
    };

    for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) {
      proxy(keys$1[i++]);
    }

    proto$2.constructor = $RegExp;
    $RegExp.prototype = proto$2;
    _redefine(_global, 'RegExp', $RegExp);
  }

  _setSpecies('RegExp');

  var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.

  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;
  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING$1 = 'toString';
  var $toString$1 = /./[TO_STRING$1];

  var define = function define(fn) {
    _redefine(RegExp.prototype, TO_STRING$1, fn, true);
  }; // 21.2.5.14 RegExp.prototype.toString()


  if (_fails(function () {
    return $toString$1.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    }); // FF44- RegExp#toString has a wrong name
  } else if ($toString$1.name != TO_STRING$1) {
    define(function toString() {
      return $toString$1.call(this);
    });
  }

  var at = _stringAt(true); // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex

  var _advanceStringIndex = function _advanceStringIndex(S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec

  var _regexpExecAbstract = function _regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }

    return builtinExec.call(R, S);
  };

  var SPECIES$2 = _wks('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  }();

  var _fixReWks = function _fixReWks(KEY, length, exec) {
    var SYMBOL = _wks(KEY);
    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      re.exec = function () {
        execCalled = true;
        return null;
      };

      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};

        re.constructor[SPECIES$2] = function () {
          return re;
        };
      }

      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === _regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      var strfn = fns[0];
      var rxfn = fns[1];
      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };

  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      if (!rx.global) return _regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = _regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$3 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = _regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min$2(_toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          captures.push(maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor$3(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  });

  _fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!_sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = _regexpExecAbstract(rx, S);
      if (!_sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });

  var SPECIES$3 = _wks('species');

  var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

  var SUPPORTS_Y = !_fails(function () {
    RegExp(MAX_UINT32, 'y');
  }); // @@split logic

  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;

    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }

          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }

        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      }; // Chakra, V8

    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var C = _speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;

        if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = _advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  });

  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run = function run() {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var listener = function listener(event) {
    run.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };

      defer(counter);
      return counter;
    };

    clearTask = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (_cof(process) == 'process') {
      defer = function defer(id) {
        process.nextTick(_ctx(run, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(_ctx(run, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function defer(id) {
        _global.postMessage(id + '', '*');
      };

      _global.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function defer(id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }

  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = _cof(process$1) == 'process';

  var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode) {
      notify = function notify() {
        process$1.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);

      notify = function notify() {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  };

  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$7 = function f(C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
    f: f$7
  };

  var _perform = function _perform(exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var navigator$1 = _global.navigator;

  var _userAgent = navigator$1 && navigator$1.userAgent || '';

  var _promiseResolve = function _promiseResolve(C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      _redefine(target, key, src[key], safe);
    }

    return target;
  };

  var task = _task.set;
  var microtask = _microtask();
  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = _global[PROMISE];
  var isNode$1 = _classof(process$2) == 'process';

  var empty = function empty() {
    /* empty */
  };

  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;
  var USE_NATIVE$1 = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);

      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0 && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function notify(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;

      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };

      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach


      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };

  var onUnhandled = function onUnhandled(promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;

      if (unhandled) {
        result = _perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled = function isUnhandled(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(_global, function () {
      var handler;

      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
      }
    });
  };

  var $reject = function $reject(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };

  var $resolve = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");

      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE$1) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);

      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;

        this._c.push(reaction);

        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };

    _newPromiseCapability.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE$1, {
    Promise: $Promise
  });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE]; // statics

  _export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * ( !USE_NATIVE$1), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve( this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  var _validateCollection = function _validateCollection(it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$5 = _objectDp.f;
  var fastKey = _meta.fastKey;
  var SIZE = _descriptors ? '_s' : 'size';

  var getEntry = function getEntry(that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = _objectCreate(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE] = 0; // size

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function _delete(key) {
          var that = _validateCollection(this, NAME);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection(this, NAME);
          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) {
              entry = entry.p;
            }
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });
      if (_descriptors) dP$5(C.prototype, 'size', {
        get: function get() {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var entry = getEntry(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry,
    setStrong: function setStrong(C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine(C, NAME, function (iterated, kind) {
        this._t = _validateCollection(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) {
          entry = entry.p;
        } // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep(0, entry.k);
        if (kind == 'values') return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      _setSpecies(NAME);
    }
  };

  var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    var fixMethod = function fixMethod(KEY) {
      var fn = proto[KEY];
      _redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };

    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      var instance = new C(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = _fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly

      var ACCEPT_ITERABLES = _iterDetect(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && _fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          _anInstance(target, C, NAME);
          var that = _inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    _setToStringTag(C, NAME);
    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var MAP = 'Map'; // 23.1 Map Objects

  var es6_map = _collection(MAP, function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
    }
  }, _collectionStrong, true);

  var SET = 'Set'; // 23.2 Set Objects

  var es6_set = _collection(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong);

  var getWeak = _meta.getWeak;
  var arrayFind = _arrayMethods(5);
  var arrayFindIndex = _arrayMethods(6);
  var id$1 = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.a = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };
  var _collectionWeak = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = id$1++; // collection id

        that._l = undefined; // leak store for uncaught frozen objects

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function _delete(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
          return data && _has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
          return data && _has(data, this._i);
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var data = getWeak(_anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };

  var es6_weakMap = createCommonjsModule(function (module) {

    var each = _arrayMethods(0);
    var NATIVE_WEAK_MAP = _validateCollection;
    var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = _meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = _collectionWeak.ufstore;
    var InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (_isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true); // IE11 WeakMap frozen keys fix

    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
      _objectAssign(InternalMap.prototype, methods);
      _meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        _redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (_isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
  });

  var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

  _collection(WEAK_SET, function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
    }
  }, _collectionWeak, false, true);

  var TYPED = _uid('typed_array');
  var VIEW = _uid('view');
  var ABV = !!(_global.ArrayBuffer && _global.DataView);
  var CONSTR = ABV;
  var i$1 = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i$1 < l) {
    if (Typed = _global[TypedArrayConstructors[i$1++]]) {
      _hide(Typed.prototype, TYPED, true);
      _hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  var _typed = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };

  var _toIndex = function _toIndex(it) {
    if (it === undefined) return 0;
    var number = _toInteger(it);
    var length = _toLength(number);
    if (number !== length) throw RangeError('Wrong length!');
    return length;
  };

  var _typedBuffer = createCommonjsModule(function (module, exports) {

    var gOPN = _objectGopn.f;
    var dP = _objectDp.f;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = _global[ARRAY_BUFFER];
    var $DataView = _global[DATA_VIEW];
    var Math = _global.Math;
    var RangeError = _global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

    var Infinity = _global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = _descriptors ? '_b' : BUFFER;
    var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
    var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value); // eslint-disable-next-line no-self-compare

      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);

        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }

        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
      }

      e = e << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
      }

      buffer[--i] |= s * 128;
      return buffer;
    }

    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;

      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
      }

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
      }

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      }

      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }

    function packI8(it) {
      return [it & 0xff];
    }

    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }

    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }

    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }

    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function get() {
          return this[internal];
        }
      });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }

    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);

      for (var i = 0; i < bytes; i++) {
        store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
    }

    if (!_typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = _toIndex(length);
        this._b = _arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        _anInstance(this, $DataView, DATA_VIEW);
        _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = _toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (_descriptors) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      _redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!_fails(function () {
        $ArrayBuffer(1);
      }) || !_fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || _fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new

        new $ArrayBuffer(1.5); // eslint-disable-line no-new

        new $ArrayBuffer(NaN); // eslint-disable-line no-new

        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          _anInstance(this, $ArrayBuffer);
          return new BaseBuffer(_toIndex(length));
        };

        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
        }

        ArrayBufferProto.constructor = $ArrayBuffer;
      } // iOS Safari 7.x bug


      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }

    _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    _setToStringTag($DataView, DATA_VIEW);
    _hide($DataView[PROTOTYPE], _typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  });

  var ArrayBuffer$1 = _global.ArrayBuffer;
  var $ArrayBuffer = _typedBuffer.ArrayBuffer;
  var $DataView = _typedBuffer.DataView;
  var $isView = _typed.ABV && ArrayBuffer$1.isView;
  var $slice = $ArrayBuffer.prototype.slice;
  var VIEW$1 = _typed.VIEW;
  var ARRAY_BUFFER = 'ArrayBuffer';
  _export(_export.G + _export.W + _export.F * (ArrayBuffer$1 !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
  });
  _export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
      return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
    }
  });
  _export(_export.P + _export.U + _export.F * _fails(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(_anObject(this), start); // FF fix

      var len = _anObject(this).byteLength;
      var first = _toAbsoluteIndex(start, len);
      var fin = _toAbsoluteIndex(end === undefined ? len : end, len);
      var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(fin - first));
      var viewS = new $DataView(this);
      var viewT = new $DataView(result);
      var index = 0;

      while (first < fin) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }

      return result;
    }
  });
  _setSpecies(ARRAY_BUFFER);

  _export(_export.G + _export.W + _export.F * !_typed.ABV, {
    DataView: _typedBuffer.DataView
  });

  var _typedArray = createCommonjsModule(function (module) {

    if (_descriptors) {
      var LIBRARY = _library;
      var global = _global;
      var fails = _fails;
      var $export = _export;
      var $typed = _typed;
      var $buffer = _typedBuffer;
      var ctx = _ctx;
      var anInstance = _anInstance;
      var propertyDesc = _propertyDesc;
      var hide = _hide;
      var redefineAll = _redefineAll;
      var toInteger = _toInteger;
      var toLength = _toLength;
      var toIndex = _toIndex;
      var toAbsoluteIndex = _toAbsoluteIndex;
      var toPrimitive = _toPrimitive;
      var has = _has;
      var classof = _classof;
      var isObject = _isObject;
      var toObject = _toObject;
      var isArrayIter = _isArrayIter;
      var create = _objectCreate;
      var getPrototypeOf = _objectGpo;
      var gOPN = _objectGopn.f;
      var getIterFn = core_getIteratorMethod;
      var uid = _uid;
      var wks = _wks;
      var createArrayMethod = _arrayMethods;
      var createArrayIncludes = _arrayIncludes;
      var speciesConstructor = _speciesConstructor;
      var ArrayIterators = es6_array_iterator;
      var Iterators = _iterators;
      var $iterDetect = _iterDetect;
      var setSpecies = _setSpecies;
      var arrayFill = _arrayFill;
      var arrayCopyWithin = _arrayCopyWithin;
      var $DP = _objectDp;
      var $GOPD = _objectGopd;
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks('iterator');
      var TAG = wks('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';
      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });
      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function toOffset(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function validate(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function allocate(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        }

        return new C(length);
      };

      var speciesFromList = function speciesFromList(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function fromList(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);

        while (length > index) {
          result[index] = list[index++];
        }

        return result;
      };

      var addGetter = function addGetter(it, key, internal) {
        dP(it, key, {
          get: function get() {
            return this._d[internal];
          }
        });
      };

      var $from = function from(source
      /* , mapfn, thisArg */
      ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;

        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          }

          O = values;
        }

        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }

        return result;
      };

      var $of = function of()
      /* ...items */
      {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);

        while (length > index) {
          result[index] = arguments[index++];
        }

        return result;
      }; // iOS Safari 6.x fails here


      var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
        arrayToLocaleString.call(new Uint8Array(1));
      });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start
        /* , end */
        ) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value
        /* , start, end */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate
        /* , thisArg */
        ) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate
        /* , thisArg */
        ) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn
        /* , thisArg */
        ) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement
        /* , fromIndex */
        ) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement
        /* , fromIndex */
        ) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
          // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement
        /* , fromIndex */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn
        /* , thisArg */
        ) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;

          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }

          return that;
        },
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike
      /* , offset */
      ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);

        while (index < len) {
          this[offset + index] = src[index++];
        }
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function isTAIndex(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
      };

      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };

      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        }

        return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () {
        arrayToString.call({});
      })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function constructor() {
          /* noop */
        },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function get() {
          return this[TYPED_ARRAY];
        }
      }); // eslint-disable-next-line max-statements

      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

        var getter = function getter(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };

        var setter = function setter(that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };

        var addElement = function addElement(that, index) {
          dP(that, index, {
            get: function get() {
              return getter(this, index);
            },
            set: function set(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;

            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;

              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }

              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }

            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });

            while (index < length) {
              addElement(that, index++);
            }
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails(function () {
          TypedArray(1);
        }) || !fails(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new

          new TypedArray(null); // eslint-disable-line no-new

          new TypedArray(1.5); // eslint-disable-line no-new

          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645

            if (!isObject(data)) return new Base(toIndex(data));

            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            }

            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }

        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function get() {
              return NAME;
            }
          });
        }

        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function () {
          Base.of.call(TypedArray, 1);
        }), NAME, {
          from: $from,
          of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
          set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, {
          slice: $slice
        });
        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, {
          toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () {
      /* empty */
    };
  });

  _typedArray('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  _typedArray('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var rApply = (_global.Reflect || {}).apply;
  var fApply = Function.apply; // MS Edge argumentsList argument is optional

  _export(_export.S + _export.F * !_fails(function () {
    rApply(function () {
      /* empty */
    });
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
      var T = _aFunction(target);
      var L = _anObject(argumentsList);
      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  });

  var rConstruct = (_global.Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = _fails(function () {
    function F() {
      /* empty */
    }

    return !(rConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !_fails(function () {
    rConstruct(function () {
      /* empty */
    });
  });
  _export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      _aFunction(Target);
      _anObject(args);
      var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        $args.push.apply($args, args);
        return new (_bind.apply(Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return _isObject(result) ? result : instance;
    }
  });

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

  _export(_export.S + _export.F * _fails(function () {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(_objectDp.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      _anObject(target);
      propertyKey = _toPrimitive(propertyKey, true);
      _anObject(attributes);

      try {
        _objectDp.f(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var gOPD$3 = _objectGopd.f;
  _export(_export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = gOPD$3(_anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });

  var Enumerate = function Enumerate(iterated) {
    this._t = _anObject(iterated); // target

    this._i = 0; // next index

    var keys = this._k = []; // keys

    var key;

    for (key in iterated) {
      keys.push(key);
    }
  };

  _iterCreate(Enumerate, 'Object', function () {
    var that = this;
    var keys = that._k;
    var key;

    do {
      if (that._i >= keys.length) return {
        value: undefined,
        done: true
      };
    } while (!((key = keys[that._i++]) in that._t));

    return {
      value: key,
      done: false
    };
  });
  _export(_export.S, 'Reflect', {
    enumerate: function enumerate(target) {
      return new Enumerate(target);
    }
  });

  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (_anObject(target) === receiver) return target[propertyKey];
    if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (_isObject(proto = _objectGpo(target))) return get(proto, propertyKey, receiver);
  }

  _export(_export.S, 'Reflect', {
    get: get
  });

  _export(_export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return _objectGopd.f(_anObject(target), propertyKey);
    }
  });

  _export(_export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
      return _objectGpo(_anObject(target));
    }
  });

  _export(_export.S, 'Reflect', {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  var $isExtensible = Object.isExtensible;
  _export(_export.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
      _anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });

  var Reflect$1 = _global.Reflect;

  var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = _objectGopn.f(_anObject(it));
    var getSymbols = _objectGops.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  _export(_export.S, 'Reflect', {
    ownKeys: _ownKeys
  });

  var $preventExtensions = Object.preventExtensions;
  _export(_export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
      _anObject(target);

      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  function set(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
    var existingDescriptor, proto;

    if (!ownDesc) {
      if (_isObject(proto = _objectGpo(target))) {
        return set(proto, propertyKey, V, receiver);
      }

      ownDesc = _propertyDesc(0);
    }

    if (_has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !_isObject(receiver)) return false;

      if (existingDescriptor = _objectGopd.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        _objectDp.f(receiver, propertyKey, existingDescriptor);
      } else _objectDp.f(receiver, propertyKey, _propertyDesc(0, V));

      return true;
    }

    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  _export(_export.S, 'Reflect', {
    set: set
  });

  if (_setProto) _export(_export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      _setProto.check(target, proto);

      try {
        _setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var $includes = _arrayIncludes(true);
  _export(_export.P, 'Array', {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables('includes');

  var includes = _core.Array.includes;

  var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

  function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
    var element, spreadable;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
        spreadable = false;

        if (_isObject(element)) {
          spreadable = element[IS_CONCAT_SPREADABLE];
          spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
        }

        if (spreadable && depth > 0) {
          targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1fffffffffffff) throw TypeError();
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  }

  var _flattenIntoArray = flattenIntoArray;

  _export(_export.P, 'Array', {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = _toObject(this);
      var sourceLen, A;
      _aFunction(callbackfn);
      sourceLen = _toLength(O.length);
      A = _arraySpeciesCreate(O, 0);
      _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
      return A;
    }
  });
  _addToUnscopables('flatMap');

  var flatMap = _core.Array.flatMap;

  var _stringPad = function _stringPad(that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = _toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  // https://github.com/zloirock/core-js/issues/280


  var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);
  _export(_export.P + _export.F * WEBKIT_BUG, 'String', {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  var padStart = _core.String.padStart;

  // https://github.com/zloirock/core-js/issues/280


  var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);
  _export(_export.P + _export.F * WEBKIT_BUG$1, 'String', {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  var padEnd = _core.String.padEnd;

  _stringTrim('trimLeft', function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  }, 'trimStart');

  var trimStart = _core.String.trimLeft;

  _stringTrim('trimRight', function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  }, 'trimEnd');

  var trimEnd = _core.String.trimRight;

  _wksDefine('asyncIterator');

  var asyncIterator = _wksExt.f('asyncIterator');

  _export(_export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = _toIobject(object);
      var getDesc = _objectGopd.f;
      var keys = _ownKeys(O);
      var result = {};
      var i = 0;
      var key, desc;

      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) _createProperty(result, key, desc);
      }

      return result;
    }
  });

  var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

  var isEnum$1 = _objectPie.f;

  var _objectToArray = function _objectToArray(isEntries) {
    return function (it) {
      var O = _toIobject(it);
      var keys = _objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!_descriptors || isEnum$1.call(O, key)) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var $values = _objectToArray(false);
  _export(_export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

  var values = _core.Object.values;

  var $entries = _objectToArray(true);
  _export(_export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });

  var entries = _core.Object.entries;

  _export(_export.P + _export.R, 'Promise', {
    'finally': function _finally(onFinally) {
      var C = _speciesConstructor(this, _core.Promise || _global.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return _promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return _promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  });

  var _finally = _core.Promise['finally'];

  var slice = [].slice;
  var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check

  var wrap$1 = function wrap(set) {
    return function (fn, time
    /* , ...args */
    ) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : false;
      return set(boundArgs ? function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
      } : fn, time);
    };
  };

  _export(_export.G + _export.B + _export.F * MSIE, {
    setTimeout: wrap$1(_global.setTimeout),
    setInterval: wrap$1(_global.setInterval)
  });

  _export(_export.G + _export.B, {
    setImmediate: _task.set,
    clearImmediate: _task.clear
  });

  var ITERATOR$4 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
    var NAME$1 = collections[i$2];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto$3 = Collection && Collection.prototype;
    var key$1;

    if (proto$3) {
      if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
      if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
      _iterators[NAME$1] = ArrayValues;
      if (explicit) for (key$1 in es6_array_iterator) {
        if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
      }
    }
  }

  var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });

  var _global$1 = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core$1 = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.11'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1$1 = _core$1.version;

  var _aFunction$1 = function _aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _ctx$1 = function _ctx(fn, that, length) {
    _aFunction$1(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var _isObject$1 = function _isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject$1 = function _anObject(it) {
    if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails$1 = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _descriptors$1 = !_fails$1(function () {
    return Object.defineProperty({}, 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var document$3 = _global$1.document; // typeof document.createElement is 'object' in old IE

  var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);

  var _domCreate$1 = function _domCreate(it) {
    return is$1 ? document$3.createElement(it) : {};
  };

  var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
    return Object.defineProperty(_domCreate$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive$1 = function _toPrimitive(it, S) {
    if (!_isObject$1(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP$6 = Object.defineProperty;
  var f$8 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject$1(O);
    P = _toPrimitive$1(P, true);
    _anObject$1(Attributes);
    if (_ie8DomDefine$1) try {
      return dP$6(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp$1 = {
    f: f$8
  };

  var _propertyDesc$1 = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide$1 = _descriptors$1 ? function (object, key, value) {
    return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;

  var _has$1 = function _has(it, key) {
    return hasOwnProperty$1.call(it, key);
  };

  var PROTOTYPE$3 = 'prototype';

  var $export$1 = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
    var expProto = exports[PROTOTYPE$3];
    var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$3];
    var key, own, out;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has$1(exports, key)) continue; // export native or passed

      out = own ? target[key] : source[key]; // prevent global pollution for namespaces

      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
      : IS_BIND && own ? _ctx$1(out, _global$1) // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? function (C) {
        var F = function F(a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0:
                return new C();

              case 1:
                return new C(a);

              case 2:
                return new C(a, b);
            }

            return new C(a, b, c);
          }

          return C.apply(this, arguments);
        };

        F[PROTOTYPE$3] = C[PROTOTYPE$3];
        return F; // make static versions for prototype methods
      }(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

        if (type & $export.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
      }
    }
  }; // type bitmap


  $export$1.F = 1; // forced

  $export$1.G = 2; // global

  $export$1.S = 4; // static

  $export$1.P = 8; // proto

  $export$1.B = 16; // bind

  $export$1.W = 32; // wrap

  $export$1.U = 64; // safe

  $export$1.R = 128; // real proto method for `library`

  var _export$1 = $export$1;

  _export$1(_export$1.G, {
    global: _global$1
  });

  var global$1 = _core$1.global;

  var lib = createCommonjsModule(function (module) {

    var _global = _interopRequireDefault(global$1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
      console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
    }

    _global["default"]._babelPolyfill = true;
  });
  unwrapExports(lib);

  var audioContext_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    /**
     * Expose a unique audio context singleton as the default audio
     * context used by the components of the Waves Audio library and
     * applications using the library.
     *
     * @type AudioContext
     * @name audioContext
     * @constant
     * @global
     * @instance
     *
     * @example
     * import * as audio from 'waves-audio';
     * const audioContext = audio.audioContext;
     */

    var audioContext = null;
    if (AudioContext) audioContext = new AudioContext();
    exports.default = audioContext;
  });
  unwrapExports(audioContext_1);

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined$1 = function _defined(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _toObject$1 = function _toObject(it) {
    return Object(_defined$1(it));
  };

  var _library$1 = true;

  var _shared$1 = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global$1[SHARED] || (_global$1[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core$1.version,
      mode:  'pure' ,
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  });

  var id$2 = 0;
  var px$1 = Math.random();

  var _uid$1 = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px$1).toString(36));
  };

  var shared$1 = _shared$1('keys');

  var _sharedKey$1 = function _sharedKey(key) {
    return shared$1[key] || (shared$1[key] = _uid$1(key));
  };

  var IE_PROTO$3 = _sharedKey$1('IE_PROTO');
  var ObjectProto$2 = Object.prototype;

  var _objectGpo$1 = Object.getPrototypeOf || function (O) {
    O = _toObject$1(O);
    if (_has$1(O, IE_PROTO$3)) return O[IE_PROTO$3];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto$2 : null;
  };

  var _objectSap$1 = function _objectSap(KEY, exec) {
    var fn = (_core$1.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export$1(_export$1.S + _export$1.F * _fails$1(function () {
      fn(1);
    }), 'Object', exp);
  };

  _objectSap$1('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return _objectGpo$1(_toObject$1(it));
    };
  });

  var getPrototypeOf = _core$1.Object.getPrototypeOf;

  var getPrototypeOf$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": getPrototypeOf,
      __esModule: true
    };
  });
  unwrapExports(getPrototypeOf$1);

  var classCallCheck = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  });
  unwrapExports(classCallCheck);

  _export$1(_export$1.S + _export$1.F * !_descriptors$1, 'Object', {
    defineProperty: _objectDp$1.f
  });

  var $Object = _core$1.Object;

  var defineProperty$1 = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };

  var defineProperty$2 = createCommonjsModule(function (module) {
    module.exports = {
      "default": defineProperty$1,
      __esModule: true
    };
  });
  unwrapExports(defineProperty$2);

  var createClass = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _defineProperty2 = _interopRequireDefault(defineProperty$2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  });
  unwrapExports(createClass);

  // 7.1.4 ToInteger
  var ceil$1 = Math.ceil;
  var floor$4 = Math.floor;

  var _toInteger$1 = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor$4 : ceil$1)(it);
  };

  // false -> String#codePointAt

  var _stringAt$1 = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined$1(that));
      var i = _toInteger$1(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _redefine$1 = _hide$1;

  var _iterators$1 = {};

  var toString$2 = {}.toString;

  var _cof$1 = function _cof(it) {
    return toString$2.call(it).slice(8, -1);
  };

  // eslint-disable-next-line no-prototype-builtins

  var _iobject$1 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof$1(it) == 'String' ? it.split('') : Object(it);
  };

  var _toIobject$1 = function _toIobject(it) {
    return _iobject$1(_defined$1(it));
  };

  var min$3 = Math.min;

  var _toLength$1 = function _toLength(it) {
    return it > 0 ? min$3(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max$2 = Math.max;
  var min$4 = Math.min;

  var _toAbsoluteIndex$1 = function _toAbsoluteIndex(index, length) {
    index = _toInteger$1(index);
    return index < 0 ? max$2(index + length, 0) : min$4(index, length);
  };

  // true  -> Array#includes

  var _arrayIncludes$1 = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject$1($this);
      var length = _toLength$1(O.length);
      var index = _toAbsoluteIndex$1(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIndexOf$1 = _arrayIncludes$1(false);
  var IE_PROTO$4 = _sharedKey$1('IE_PROTO');

  var _objectKeysInternal$1 = function _objectKeysInternal(object, names) {
    var O = _toIobject$1(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      if (key != IE_PROTO$4) _has$1(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (_has$1(O, key = names[i++])) {
        ~arrayIndexOf$1(result, key) || result.push(key);
      }
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys$1 = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  var _objectKeys$1 = Object.keys || function keys(O) {
    return _objectKeysInternal$1(O, _enumBugKeys$1);
  };

  var _objectDps$1 = _descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject$1(O);
    var keys = _objectKeys$1(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) {
      _objectDp$1.f(O, P = keys[i++], Properties[P]);
    }

    return O;
  };

  var document$4 = _global$1.document;

  var _html$1 = document$4 && document$4.documentElement;

  var IE_PROTO$5 = _sharedKey$1('IE_PROTO');

  var Empty$1 = function Empty() {
    /* empty */
  };

  var PROTOTYPE$4 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var _createDict$1 = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate$1('iframe');
    var i = _enumBugKeys$1.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html$1.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict$1 = iframeDocument.F;

    while (i--) {
      delete _createDict$1[PROTOTYPE$4][_enumBugKeys$1[i]];
    }

    return _createDict$1();
  };

  var _objectCreate$1 = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty$1[PROTOTYPE$4] = _anObject$1(O);
      result = new Empty$1();
      Empty$1[PROTOTYPE$4] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$5] = O;
    } else result = _createDict$1();

    return Properties === undefined ? result : _objectDps$1(result, Properties);
  };

  var _wks$1 = createCommonjsModule(function (module) {
    var store = _shared$1('wks');
    var Symbol = _global$1.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def$1 = _objectDp$1.f;
  var TAG$2 = _wks$1('toStringTag');

  var _setToStringTag$1 = function _setToStringTag(it, tag, stat) {
    if (it && !_has$1(it = stat ? it : it.prototype, TAG$2)) def$1(it, TAG$2, {
      configurable: true,
      value: tag
    });
  };

  var IteratorPrototype$1 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide$1(IteratorPrototype$1, _wks$1('iterator'), function () {
    return this;
  });

  var _iterCreate$1 = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate$1(IteratorPrototype$1, {
      next: _propertyDesc$1(1, next)
    });
    _setToStringTag$1(Constructor, NAME + ' Iterator');
  };

  var ITERATOR$5 = _wks$1('iterator');
  var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR$1 = '@@iterator';
  var KEYS$1 = 'keys';
  var VALUES$1 = 'values';

  var returnThis$1 = function returnThis() {
    return this;
  };

  var _iterDefine$1 = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate$1(Constructor, NAME, next);

    var getMethod = function getMethod(kind) {
      if (!BUGGY$1 && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS$1:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES$1:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES$1;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$5] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag$1(IteratorPrototype, TAG, true); // fix for some old engines
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES$1) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if (( FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$5])) {
      _hide$1(proto, ITERATOR$5, $default);
    } // Plug for library


    _iterators$1[NAME] = $default;
    _iterators$1[TAG] = returnThis$1;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES$1),
        keys: IS_SET ? $default : getMethod(KEYS$1),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine$1(proto, key, methods[key]);
      } else _export$1(_export$1.P + _export$1.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  var $at$2 = _stringAt$1(true); // 21.1.3.27 String.prototype[@@iterator]()

  _iterDefine$1(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at$2(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  var _iterStep$1 = function _iterStep(done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject$1(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep$1(1);
    }

    if (kind == 'keys') return _iterStep$1(0, index);
    if (kind == 'values') return _iterStep$1(0, O[index]);
    return _iterStep$1(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  _iterators$1.Arguments = _iterators$1.Array;

  var TO_STRING_TAG$1 = _wks$1('toStringTag');
  var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

  for (var i$3 = 0; i$3 < DOMIterables$1.length; i$3++) {
    var NAME$2 = DOMIterables$1[i$3];
    var Collection$1 = _global$1[NAME$2];
    var proto$4 = Collection$1 && Collection$1.prototype;
    if (proto$4 && !proto$4[TO_STRING_TAG$1]) _hide$1(proto$4, TO_STRING_TAG$1, NAME$2);
    _iterators$1[NAME$2] = _iterators$1.Array;
  }

  var f$9 = _wks$1;
  var _wksExt$1 = {
    f: f$9
  };

  var iterator = _wksExt$1.f('iterator');

  var iterator$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": iterator,
      __esModule: true
    };
  });
  unwrapExports(iterator$1);

  var _meta$1 = createCommonjsModule(function (module) {
    var META = _uid$1('meta');
    var setDesc = _objectDp$1.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_fails$1(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!_isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!_has$1(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!_has$1(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has$1(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });
  var _meta_1$1 = _meta$1.KEY;
  var _meta_2$1 = _meta$1.NEED;
  var _meta_3$1 = _meta$1.fastKey;
  var _meta_4$1 = _meta$1.getWeak;
  var _meta_5$1 = _meta$1.onFreeze;

  var defineProperty$3 = _objectDp$1.f;

  var _wksDefine$1 = function _wksDefine(name) {
    var $Symbol = _core$1.Symbol || (_core$1.Symbol =  {} );
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$3($Symbol, name, {
      value: _wksExt$1.f(name)
    });
  };

  var f$a = Object.getOwnPropertySymbols;
  var _objectGops$1 = {
    f: f$a
  };

  var f$b = {}.propertyIsEnumerable;
  var _objectPie$1 = {
    f: f$b
  };

  var _enumKeys$1 = function _enumKeys(it) {
    var result = _objectKeys$1(it);
    var getSymbols = _objectGops$1.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie$1.f;
      var i = 0;
      var key;

      while (symbols.length > i) {
        if (isEnum.call(it, key = symbols[i++])) result.push(key);
      }
    }

    return result;
  };

  var _isArray$1 = Array.isArray || function isArray(arg) {
    return _cof$1(arg) == 'Array';
  };

  var hiddenKeys$1 = _enumBugKeys$1.concat('length', 'prototype');

  var f$c = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal$1(O, hiddenKeys$1);
  };

  var _objectGopn$1 = {
    f: f$c
  };

  var gOPN$4 = _objectGopn$1.f;
  var toString$3 = {}.toString;
  var windowNames$1 = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames$1 = function getWindowNames(it) {
    try {
      return gOPN$4(it);
    } catch (e) {
      return windowNames$1.slice();
    }
  };

  var f$d = function getOwnPropertyNames(it) {
    return windowNames$1 && toString$3.call(it) == '[object Window]' ? getWindowNames$1(it) : gOPN$4(_toIobject$1(it));
  };

  var _objectGopnExt$1 = {
    f: f$d
  };

  var gOPD$4 = Object.getOwnPropertyDescriptor;
  var f$e = _descriptors$1 ? gOPD$4 : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject$1(O);
    P = _toPrimitive$1(P, true);
    if (_ie8DomDefine$1) try {
      return gOPD$4(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has$1(O, P)) return _propertyDesc$1(!_objectPie$1.f.call(O, P), O[P]);
  };
  var _objectGopd$1 = {
    f: f$e
  };

  var META$1 = _meta$1.KEY;
  var gOPD$5 = _objectGopd$1.f;
  var dP$7 = _objectDp$1.f;
  var gOPN$5 = _objectGopnExt$1.f;
  var $Symbol$1 = _global$1.Symbol;
  var $JSON$1 = _global$1.JSON;

  var _stringify$1 = $JSON$1 && $JSON$1.stringify;

  var PROTOTYPE$5 = 'prototype';
  var HIDDEN$1 = _wks$1('_hidden');
  var TO_PRIMITIVE$2 = _wks$1('toPrimitive');
  var isEnum$2 = {}.propertyIsEnumerable;
  var SymbolRegistry$1 = _shared$1('symbol-registry');
  var AllSymbols$1 = _shared$1('symbols');
  var OPSymbols$1 = _shared$1('op-symbols');
  var ObjectProto$3 = Object[PROTOTYPE$5];
  var USE_NATIVE$2 = typeof $Symbol$1 == 'function' && !!_objectGops$1.f;
  var QObject$1 = _global$1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter$1 = !QObject$1 || !QObject$1[PROTOTYPE$5] || !QObject$1[PROTOTYPE$5].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc$1 = _descriptors$1 && _fails$1(function () {
    return _objectCreate$1(dP$7({}, 'a', {
      get: function get() {
        return dP$7(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$5(ObjectProto$3, key);
    if (protoDesc) delete ObjectProto$3[key];
    dP$7(it, key, D);
    if (protoDesc && it !== ObjectProto$3) dP$7(ObjectProto$3, key, protoDesc);
  } : dP$7;

  var wrap$2 = function wrap(tag) {
    var sym = AllSymbols$1[tag] = _objectCreate$1($Symbol$1[PROTOTYPE$5]);

    sym._k = tag;
    return sym;
  };

  var isSymbol$1 = USE_NATIVE$2 && typeof $Symbol$1.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol$1;
  };

  var $defineProperty$1 = function defineProperty(it, key, D) {
    if (it === ObjectProto$3) $defineProperty$1(OPSymbols$1, key, D);
    _anObject$1(it);
    key = _toPrimitive$1(key, true);
    _anObject$1(D);

    if (_has$1(AllSymbols$1, key)) {
      if (!D.enumerable) {
        if (!_has$1(it, HIDDEN$1)) dP$7(it, HIDDEN$1, _propertyDesc$1(1, {}));
        it[HIDDEN$1][key] = true;
      } else {
        if (_has$1(it, HIDDEN$1) && it[HIDDEN$1][key]) it[HIDDEN$1][key] = false;
        D = _objectCreate$1(D, {
          enumerable: _propertyDesc$1(0, false)
        });
      }

      return setSymbolDesc$1(it, key, D);
    }

    return dP$7(it, key, D);
  };

  var $defineProperties$1 = function defineProperties(it, P) {
    _anObject$1(it);
    var keys = _enumKeys$1(P = _toIobject$1(P));
    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) {
      $defineProperty$1(it, key = keys[i++], P[key]);
    }

    return it;
  };

  var $create$1 = function create(it, P) {
    return P === undefined ? _objectCreate$1(it) : $defineProperties$1(_objectCreate$1(it), P);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(key) {
    var E = isEnum$2.call(this, key = _toPrimitive$1(key, true));
    if (this === ObjectProto$3 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return false;
    return E || !_has$1(this, key) || !_has$1(AllSymbols$1, key) || _has$1(this, HIDDEN$1) && this[HIDDEN$1][key] ? E : true;
  };

  var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject$1(it);
    key = _toPrimitive$1(key, true);
    if (it === ObjectProto$3 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return;
    var D = gOPD$5(it, key);
    if (D && _has$1(AllSymbols$1, key) && !(_has$1(it, HIDDEN$1) && it[HIDDEN$1][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames$1 = function getOwnPropertyNames(it) {
    var names = gOPN$5(_toIobject$1(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!_has$1(AllSymbols$1, key = names[i++]) && key != HIDDEN$1 && key != META$1) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols$1 = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$3;
    var names = gOPN$5(IS_OP ? OPSymbols$1 : _toIobject$1(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (_has$1(AllSymbols$1, key = names[i++]) && (IS_OP ? _has$1(ObjectProto$3, key) : true)) result.push(AllSymbols$1[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE$2) {
    $Symbol$1 = function Symbol() {
      if (this instanceof $Symbol$1) throw TypeError('Symbol is not a constructor!');
      var tag = _uid$1(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function $set(value) {
        if (this === ObjectProto$3) $set.call(OPSymbols$1, value);
        if (_has$1(this, HIDDEN$1) && _has$1(this[HIDDEN$1], tag)) this[HIDDEN$1][tag] = false;
        setSymbolDesc$1(this, tag, _propertyDesc$1(1, value));
      };

      if (_descriptors$1 && setter$1) setSymbolDesc$1(ObjectProto$3, tag, {
        configurable: true,
        set: $set
      });
      return wrap$2(tag);
    };

    _redefine$1($Symbol$1[PROTOTYPE$5], 'toString', function toString() {
      return this._k;
    });
    _objectGopd$1.f = $getOwnPropertyDescriptor$2;
    _objectDp$1.f = $defineProperty$1;
    _objectGopn$1.f = _objectGopnExt$1.f = $getOwnPropertyNames$1;
    _objectPie$1.f = $propertyIsEnumerable$1;
    _objectGops$1.f = $getOwnPropertySymbols$1;

    if (_descriptors$1 && !_library$1) {
      _redefine$1(ObjectProto$3, 'propertyIsEnumerable', $propertyIsEnumerable$1, true);
    }

    _wksExt$1.f = function (name) {
      return wrap$2(_wks$1(name));
    };
  }

  _export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$2, {
    Symbol: $Symbol$1
  });

  for (var es6Symbols$1 = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j$2 = 0; es6Symbols$1.length > j$2;) {
    _wks$1(es6Symbols$1[j$2++]);
  }

  for (var wellKnownSymbols$1 = _objectKeys$1(_wks$1.store), k$1 = 0; wellKnownSymbols$1.length > k$1;) {
    _wksDefine$1(wellKnownSymbols$1[k$1++]);
  }

  _export$1(_export$1.S + _export$1.F * !USE_NATIVE$2, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function _for(key) {
      return _has$1(SymbolRegistry$1, key += '') ? SymbolRegistry$1[key] : SymbolRegistry$1[key] = $Symbol$1(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol$1(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry$1) {
        if (SymbolRegistry$1[key] === sym) return key;
      }
    },
    useSetter: function useSetter() {
      setter$1 = true;
    },
    useSimple: function useSimple() {
      setter$1 = false;
    }
  });
  _export$1(_export$1.S + _export$1.F * !USE_NATIVE$2, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create$1,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty$1,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties$1,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames$1,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols$1
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  var FAILS_ON_PRIMITIVES$1 = _fails$1(function () {
    _objectGops$1.f(1);
  });
  _export$1(_export$1.S + _export$1.F * FAILS_ON_PRIMITIVES$1, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return _objectGops$1.f(_toObject$1(it));
    }
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

  $JSON$1 && _export$1(_export$1.S + _export$1.F * (!USE_NATIVE$2 || _fails$1(function () {
    var S = $Symbol$1(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify$1([S]) != '[null]' || _stringify$1({
      a: S
    }) != '{}' || _stringify$1(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      $replacer = replacer = args[1];
      if (!_isObject$1(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined

      if (!_isArray$1(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol$1(value)) return value;
      };
      args[1] = replacer;
      return _stringify$1.apply($JSON$1, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol$1[PROTOTYPE$5][TO_PRIMITIVE$2] || _hide$1($Symbol$1[PROTOTYPE$5], TO_PRIMITIVE$2, $Symbol$1[PROTOTYPE$5].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  _setToStringTag$1($Symbol$1, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

  _setToStringTag$1(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

  _setToStringTag$1(_global$1.JSON, 'JSON', true);

  _wksDefine$1('asyncIterator');

  _wksDefine$1('observable');

  var symbol = _core$1.Symbol;

  var symbol$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": symbol,
      __esModule: true
    };
  });
  unwrapExports(symbol$1);

  var _typeof_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _iterator2 = _interopRequireDefault(iterator$1);

    var _symbol2 = _interopRequireDefault(symbol$1);

    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
  });

  unwrapExports(_typeof_1);

  var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _typeof3 = _interopRequireDefault(_typeof_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
    };
  });
  unwrapExports(possibleConstructorReturn);

  /* eslint-disable no-proto */

  var check$1 = function check(O, proto) {
    _anObject$1(O);
    if (!_isObject$1(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto$1 = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx$1(Function.call, _objectGopd$1.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check$1(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check$1
  };

  _export$1(_export$1.S, 'Object', {
    setPrototypeOf: _setProto$1.set
  });

  var setPrototypeOf$1 = _core$1.Object.setPrototypeOf;

  var setPrototypeOf$2 = createCommonjsModule(function (module) {
    module.exports = {
      "default": setPrototypeOf$1,
      __esModule: true
    };
  });
  unwrapExports(setPrototypeOf$2);

  _export$1(_export$1.S, 'Object', {
    create: _objectCreate$1
  });

  var $Object$1 = _core$1.Object;

  var create = function create(P, D) {
    return $Object$1.create(P, D);
  };

  var create$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": create,
      __esModule: true
    };
  });
  unwrapExports(create$1);

  var inherits = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$2);

    var _create2 = _interopRequireDefault(create$1);

    var _typeof3 = _interopRequireDefault(_typeof_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
      }

      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
  });
  unwrapExports(inherits);

  var TimeEngine_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * Base class for time engines
     *
     * A time engine generates more or less regular events and/or plays back a
     * media stream. It implements one or multiple interfaces to be driven by a
     * master (i.e. a Scheduler, a Transport or a PlayControl) in synchronization
     * with other engines. The provided interfaces are scheduled, transported,
     * and play-controlled.
     *
     *
     * #### The `scheduled` interface
     *
     * The scheduled interface allows for synchronizing an engine to a monotonous time
     * as it is provided by the Scheduler master.
     *
     * ###### `advanceTime(time :Number) -> {Number}`
     *
     * The `advanceTime` method has to be implemented by an `TimeEngine` as part of the
     * scheduled interface. The method is called by the master (e.g. the scheduler).
     * It generates an event and to returns the time of the next event (i.e. the next
     * call of advanceTime). The returned time has to be greater than the time
     * received as argument of the method. In case that a TimeEngine has to generate
     * multiple events at the same time, the engine has to implement its own loop
     * while(event.time <= time) and return the time of the next event (if any).
     *
     * ###### `resetTime(time=undefined :Number)`
     *
     * The `resetTime` method is provided by the `TimeEngine` base class. An engine may
     * call this method to reset its next event time (e.g. when a parameter is
     * changed that influences the engine's temporal behavior). When no argument
     * is given, the time is reset to the current master time. When calling the
     * method with Infinity the engine is suspended without being removed from the
     * master.
     *
     *
     * #### The `transported` interface
     *
     * The transported interface allows for synchronizing an engine to a position
     * (i.e. media playback time) that can run forward and backward and jump as it
     * is provided by the Transport master.
     *
     * ###### `syncPosition(time :Number, position :Number, speed :Number) -> {Number}`
     *
     * The `syncPositon` method has to be implemented by a `TimeEngine` as part of the
     * transported interface. The method syncPositon is called whenever the master
     * of a transported engine has to (re-)synchronize the engine's position. This
     * is for example required when the master (re-)starts playback, jumps to an
     * arbitrary position, and when reversing playback direction. The method returns
     * the next position of the engine in the given playback direction
     * (i.e. `speed < 0` or `speed > 0`).
     *
     * ###### `advancePosition(time :Number, position :Number, speed :Number) -> {Number}`
     *
     * The `advancePosition` method has to be implemented by a `TimeEngine` as part
     * of the transported interface. The master calls the advancePositon method when
     * the engine's event position is reached. The method generates an event and
     * returns the next position in the given playback direction (i.e. speed < 0 or
     * speed > 0). The returned position has to be greater (i.e. when speed > 0)
     * or less (i.e. when speed < 0) than the position received as argument of the
     * method.
     *
     * ###### `resetPosition(position=undefined :Number)`
     *
     * The resetPosition method is provided by the TimeEngine base class. An engine
     * may call this method to reset its next event position. When no argument
     * is given, the time is reset to the current master time. When calling the
     * method with Infinity the engine is suspended without being removed from
     * the master.
     *
     *
     * #### The speed-controlled interface
     *
     * The "speed-controlled" interface allows for syncronizing an engine that is
     * neither driven through the scheduled nor the transported interface. The
     * interface allows in particular to synchronize engines that assure their own
     * scheduling (i.e. audio player or an oscillator) to the event-based scheduled
     * and transported engines.
     *
     * ###### `syncSpeed(time :Number, position :Number, speed :Number, seek=false :Boolean)`
     *
     * The syncSpeed method has to be implemented by a TimeEngine as part of the
     * speed-controlled interface. The method is called by the master whenever the
     * playback speed changes or the position jumps arbitarily (i.e. on a seek).
     *
     *
     * <hr />
     *
     * Example that shows a `TimeEngine` running in a `Scheduler` that counts up
     * at a given frequency:
     * {@link https://rawgit.com/wavesjs/waves-audio/master/examples/time-engine.html}
     *
     * @example
     * import * as audio from 'waves-audio';
     *
     * class MyEngine extends audio.TimeEngine {
     *   constructor() {
     *     super();
     *     // ...
     *   }
     * }
     *
     */


    var TimeEngine = function () {
      function TimeEngine() {
        (0, _classCallCheck3.default)(this, TimeEngine);
        /**
         * The engine's master.
         *
         * @type {Mixed}
         * @name master
         * @memberof TimeEngine
         */

        this.master = null;
      }
      /**
       * The time engine's current (master) time.
       *
       * @type {Number}
       * @memberof TimeEngine
       * @readonly
       */


      (0, _createClass3.default)(TimeEngine, [{
        key: "resetTime",
        value: function resetTime() {
          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.master) this.master.resetEngineTime(this, time);
        }
        /**
         * Transported interface
         *   - syncPosition(time, position, speed), called to reposition TimeEngine, returns next position
         *   - advancePosition(time, position, speed), called to generate next event at given time and position, returns next position
         *
         * @static
         * @memberof TimeEngine
         */

      }, {
        key: "resetPosition",
        value: function resetPosition() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.master) this.master.resetEnginePosition(this, position);
        }
        /**
         * Speed-controlled interface
         *   - syncSpeed(time, position, speed, ), called to
         *
         * @static
         * @memberof TimeEngine
         */

      }, {
        key: "currentTime",
        get: function get() {
          if (this.master) return this.master.currentTime;
          return undefined;
        }
        /**
         * The time engine's current (master) audio time.
         *
         * @type {Number}
         * @memberof TimeEngine
         * @readonly
         */

      }, {
        key: "audioTime",
        get: function get() {
          if (this.master) return this.master.audioTime;
          return undefined;
        }
        /**
         * The time engine's current (master) position.
         *
         * @type {Number}
         * @memberof TimeEngine
         * @readonly
         */

      }, {
        key: "currentPosition",
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return undefined;
        }
        /**
         * Scheduled interface
         *   - advanceTime(time), called to generate next event at given time, returns next time
         *
         * @static
         * @memberof TimeEngine
         */

      }], [{
        key: "implementsScheduled",
        value: function implementsScheduled(engine) {
          return engine.advanceTime && engine.advanceTime instanceof Function;
        }
      }, {
        key: "implementsTransported",
        value: function implementsTransported(engine) {
          return engine.syncPosition && engine.syncPosition instanceof Function && engine.advancePosition && engine.advancePosition instanceof Function;
        }
      }, {
        key: "implementsSpeedControlled",
        value: function implementsSpeedControlled(engine) {
          return engine.syncSpeed && engine.syncSpeed instanceof Function;
        }
      }]);
      return TimeEngine;
    }();

    exports.default = TimeEngine;
  });
  unwrapExports(TimeEngine_1);

  var PriorityQueue_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    } // works by reference


    function swap(arr, i1, i2) {
      var tmp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = tmp;
    } // https://jsperf.com/js-for-loop-vs-array-indexof/346


    function indexOf(arr, el) {
      var l = arr.length; // ignore first element as it can't be a entry

      for (var i = 1; i < l; i++) {
        if (arr[i] === el) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Define if `time1` should be lower in the topography than `time2`.
     * Is dynamically affected to the priority queue according to handle `min` and `max` heap.
     *
     * @private
     * @param {Number} time1
     * @param {Number} time2
     * @return {Boolean}
     */


    var _isLowerMaxHeap = function _isLowerMaxHeap(time1, time2) {
      return time1 < time2;
    };

    var _isLowerMinHeap = function _isLowerMinHeap(time1, time2) {
      return time1 > time2;
    };
    /**
     * Define if `time1` should be higher in the topography than `time2`.
     * Is dynamically affected to the priority queue according to handle `min` and `max` heap.
     *
     * @private
     * @param {Number} time1
     * @param {Number} time2
     * @return {Boolean}
     */


    var _isHigherMaxHeap = function _isHigherMaxHeap(time1, time2) {
      return time1 > time2;
    };

    var _isHigherMinHeap = function _isHigherMinHeap(time1, time2) {
      return time1 < time2;
    };

    var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    /**
     * Priority queue implementing a binary heap.
     * Acts as a min heap by default, can be dynamically changed to a max heap
     * by setting `reverse` to true.
     *
     * _note_: the queue creates and maintains a new property (i.e. `queueTime`)
     * to each object added.
     *
     * @param {Number} [heapLength=100] - Default size of the array used to create the heap.
     */

    var PriorityQueue = function () {
      function PriorityQueue() {
        var heapLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        (0, _classCallCheck3.default)(this, PriorityQueue);
        /**
         * Pointer to the first empty index of the heap.
         * @type {Number}
         * @memberof PriorityQueue
         * @name _currentLength
         * @private
         */

        this._currentLength = 1;
        /**
         * Array of the sorted indexes of the entries, the actual heap. Ignore the index 0.
         * @type {Array}
         * @memberof PriorityQueue
         * @name _heap
         * @private
         */

        this._heap = new Array(heapLength + 1);
        /**
         * Type of the queue: `min` heap if `false`, `max` heap if `true`
         * @type {Boolean}
         * @memberof PriorityQueue
         * @name _reverse
         * @private
         */

        this._reverse = null; // initialize compare functions

        this.reverse = false;
      }
      /**
       * Time of the first element in the binary heap.
       * @returns {Number}
       */


      (0, _createClass3.default)(PriorityQueue, [{
        key: "_bubbleUp",

        /**
         * Fix the heap by moving an entry to a new upper position.
         *
         * @private
         * @param {Number} startIndex - The index of the entry to move.
         */
        value: function _bubbleUp(startIndex) {
          var entry = this._heap[startIndex];
          var index = startIndex;
          var parentIndex = Math.floor(index / 2);
          var parent = this._heap[parentIndex];

          while (parent && this._isHigher(entry.queueTime, parent.queueTime)) {
            swap(this._heap, index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor(index / 2);
            parent = this._heap[parentIndex];
          }
        }
        /**
         * Fix the heap by moving an entry to a new lower position.
         *
         * @private
         * @param {Number} startIndex - The index of the entry to move.
         */

      }, {
        key: "_bubbleDown",
        value: function _bubbleDown(startIndex) {
          var entry = this._heap[startIndex];
          var index = startIndex;
          var c1index = index * 2;
          var c2index = c1index + 1;
          var child1 = this._heap[c1index];
          var child2 = this._heap[c2index];

          while (child1 && this._isLower(entry.queueTime, child1.queueTime) || child2 && this._isLower(entry.queueTime, child2.queueTime)) {
            // swap with the minimum child
            var targetIndex = void 0;
            if (child2) targetIndex = this._isHigher(child1.queueTime, child2.queueTime) ? c1index : c2index;else targetIndex = c1index;
            swap(this._heap, index, targetIndex); // update to find next children

            index = targetIndex;
            c1index = index * 2;
            c2index = c1index + 1;
            child1 = this._heap[c1index];
            child2 = this._heap[c2index];
          }
        }
        /**
         * Build the heap (from bottom up).
         */

      }, {
        key: "buildHeap",
        value: function buildHeap() {
          // find the index of the last internal node
          // @todo - make sure that's the right way to do.
          var maxIndex = Math.floor((this._currentLength - 1) / 2);

          for (var i = maxIndex; i > 0; i--) {
            this._bubbleDown(i);
          }
        }
        /**
         * Insert a new object in the binary heap and sort it.
         *
         * @param {Object} entry - Entry to insert.
         * @param {Number} time - Time at which the entry should be orderer.
         * @returns {Number} - Time of the first entry in the heap.
         */

      }, {
        key: "insert",
        value: function insert(entry, time) {
          if (Math.abs(time) !== POSITIVE_INFINITY) {
            entry.queueTime = time; // add the new entry at the end of the heap

            this._heap[this._currentLength] = entry; // bubble it up

            this._bubbleUp(this._currentLength);

            this._currentLength += 1;
            return this.time;
          }

          entry.queueTime = undefined;
          return this.remove(entry);
        }
        /**
         * Move a given entry to a new position.
         *
         * @param {Object} entry - Entry to move.
         * @param {Number} time - Time at which the entry should be orderer.
         * @return {Number} - Time of first entry in the heap.
         */

      }, {
        key: "move",
        value: function move(entry, time) {
          if (Math.abs(time) !== POSITIVE_INFINITY) {
            var index = indexOf(this._heap, entry);

            if (index !== -1) {
              entry.queueTime = time; // define if the entry should be bubbled up or down

              var parent = this._heap[Math.floor(index / 2)];

              if (parent && this._isHigher(time, parent.queueTime)) this._bubbleUp(index);else this._bubbleDown(index);
            }

            return this.time;
          }

          entry.queueTime = undefined;
          return this.remove(entry);
        }
        /**
         * Remove an entry from the heap and fix the heap.
         *
         * @param {Object} entry - Entry to remove.
         * @return {Number} - Time of first entry in the heap.
         */

      }, {
        key: "remove",
        value: function remove(entry) {
          // find the index of the entry
          var index = indexOf(this._heap, entry);

          if (index !== -1) {
            var lastIndex = this._currentLength - 1; // if the entry is the last one

            if (index === lastIndex) {
              // remove the element from heap
              this._heap[lastIndex] = undefined; // update current length

              this._currentLength = lastIndex;
              return this.time;
            } else {
              // swap with the last element of the heap
              swap(this._heap, index, lastIndex); // remove the element from heap

              this._heap[lastIndex] = undefined;

              if (index === 1) {
                this._bubbleDown(1);
              } else {
                // bubble the (ex last) element up or down according to its new context
                var _entry = this._heap[index];

                var parent = this._heap[Math.floor(index / 2)];

                if (parent && this._isHigher(_entry.queueTime, parent.queueTime)) this._bubbleUp(index);else this._bubbleDown(index);
              }
            } // update current length


            this._currentLength = lastIndex;
          }

          return this.time;
        }
        /**
         * Clear the queue.
         */

      }, {
        key: "clear",
        value: function clear() {
          this._currentLength = 1;
          this._heap = new Array(this._heap.length);
        }
        /**
         * Defines if the queue contains the given `entry`.
         *
         * @param {Object} entry - Entry to be checked
         * @return {Boolean}
         */

      }, {
        key: "has",
        value: function has(entry) {
          return this._heap.indexOf(entry) !== -1;
        }
      }, {
        key: "time",
        get: function get() {
          if (this._currentLength > 1) return this._heap[1].queueTime;
          return Infinity;
        }
        /**
         * First element in the binary heap.
         * @returns {Number}
         * @readonly
         */

      }, {
        key: "head",
        get: function get() {
          return this._heap[1];
        }
        /**
         * Change the order of the queue (max heap if true, min heap if false),
         * rebuild the heap with the existing entries.
         *
         * @type {Boolean}
         */

      }, {
        key: "reverse",
        set: function set(value) {
          if (value !== this._reverse) {
            this._reverse = value;

            if (this._reverse === true) {
              this._isLower = _isLowerMaxHeap;
              this._isHigher = _isHigherMaxHeap;
            } else {
              this._isLower = _isLowerMinHeap;
              this._isHigher = _isHigherMinHeap;
            }

            this.buildHeap();
          }
        },
        get: function get() {
          return this._reverse;
        }
      }]);
      return PriorityQueue;
    }();

    exports.default = PriorityQueue;
  });
  unwrapExports(PriorityQueue_1);

  var TAG$3 = _wks$1('toStringTag'); // ES3 wrong here

  var ARG$1 = _cof$1(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet$1 = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof$1 = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet$1(O = Object(it), TAG$3)) == 'string' ? T // builtinTag case
    : ARG$1 ? _cof$1(O) // ES3 arguments fallback
    : (B = _cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$6 = _wks$1('iterator');

  var core_getIteratorMethod$1 = _core$1.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$6] || it['@@iterator'] || _iterators$1[_classof$1(it)];
  };

  var core_getIterator = _core$1.getIterator = function (it) {
    var iterFn = core_getIteratorMethod$1(it);
    if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
    return _anObject$1(iterFn.call(it));
  };

  var getIterator = core_getIterator;

  var getIterator$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": getIterator,
      __esModule: true
    };
  });
  unwrapExports(getIterator$1);

  var _redefineAll$1 = function _redefineAll(target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];else _hide$1(target, key, src[key]);
    }

    return target;
  };

  var _anInstance$1 = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _iterCall$1 = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject$1(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject$1(ret.call(iterator));
      throw e;
    }
  };

  var ITERATOR$7 = _wks$1('iterator');
  var ArrayProto$2 = Array.prototype;

  var _isArrayIter$1 = function _isArrayIter(it) {
    return it !== undefined && (_iterators$1.Array === it || ArrayProto$2[ITERATOR$7] === it);
  };

  var _forOf$1 = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod$1(iterable);
      var f = _ctx$1(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (_isArrayIter$1(iterFn)) for (length = _toLength$1(iterable.length); length > index; index++) {
        result = entries ? f(_anObject$1(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall$1(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var SPECIES$4 = _wks$1('species');

  var _setSpecies$1 = function _setSpecies(KEY) {
    var C = typeof _core$1[KEY] == 'function' ? _core$1[KEY] : _global$1[KEY];
    if (_descriptors$1 && C && !C[SPECIES$4]) _objectDp$1.f(C, SPECIES$4, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };

  var _validateCollection$1 = function _validateCollection(it, TYPE) {
    if (!_isObject$1(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$8 = _objectDp$1.f;
  var fastKey$1 = _meta$1.fastKey;
  var SIZE$1 = _descriptors$1 ? '_s' : 'size';

  var getEntry$1 = function getEntry(that, key) {
    // fast case
    var index = fastKey$1(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong$1 = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance$1(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = _objectCreate$1(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE$1] = 0; // size

        if (iterable != undefined) _forOf$1(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll$1(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection$1(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE$1] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function _delete(key) {
          var that = _validateCollection$1(this, NAME);
          var entry = getEntry$1(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE$1]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection$1(this, NAME);
          var f = _ctx$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) {
              entry = entry.p;
            }
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry$1(_validateCollection$1(this, NAME), key);
        }
      });
      if (_descriptors$1) dP$8(C.prototype, 'size', {
        get: function get() {
          return _validateCollection$1(this, NAME)[SIZE$1];
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var entry = getEntry$1(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey$1(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE$1]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry$1,
    setStrong: function setStrong(C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine$1(C, NAME, function (iterated, kind) {
        this._t = _validateCollection$1(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) {
          entry = entry.p;
        } // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep$1(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep$1(0, entry.k);
        if (kind == 'values') return _iterStep$1(0, entry.v);
        return _iterStep$1(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      _setSpecies$1(NAME);
    }
  };

  var SPECIES$5 = _wks$1('species');

  var _arraySpeciesConstructor$1 = function _arraySpeciesConstructor(original) {
    var C;

    if (_isArray$1(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || _isArray$1(C.prototype))) C = undefined;

      if (_isObject$1(C)) {
        C = C[SPECIES$5];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var _arraySpeciesCreate$1 = function _arraySpeciesCreate(original, length) {
    return new (_arraySpeciesConstructor$1(original))(length);
  };

  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex

  var _arrayMethods$1 = function _arrayMethods(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate$1;
    return function ($this, callbackfn, that) {
      var O = _toObject$1($this);
      var self = _iobject$1(O);
      var f = _ctx$1(callbackfn, that, 3);
      var length = _toLength$1(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);

          if (TYPE) {
            if (IS_MAP) result[index] = res; // map
            else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return val;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  result.push(val);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var dP$9 = _objectDp$1.f;
  var each = _arrayMethods$1(0);

  var _collection$1 = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global$1[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    if (!_descriptors$1 || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails$1(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll$1(C.prototype, methods);
      _meta$1.NEED = true;
    } else {
      C = wrapper(function (target, iterable) {
        _anInstance$1(target, C, NAME, '_c');
        target._c = new Base();
        if (iterable != undefined) _forOf$1(iterable, IS_MAP, target[ADDER], target);
      });
      each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide$1(C.prototype, KEY, function (a, b) {
          _anInstance$1(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !_isObject$1(a)) return KEY == 'get' ? undefined : false;

          var result = this._c[KEY](a === 0 ? 0 : a, b);

          return IS_ADDER ? this : result;
        });
      });
      IS_WEAK || dP$9(C.prototype, 'size', {
        get: function get() {
          return this._c.size;
        }
      });
    }

    _setToStringTag$1(C, NAME);
    O[NAME] = C;
    _export$1(_export$1.G + _export$1.W + _export$1.F, O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var SET$1 = 'Set'; // 23.2 Set Objects

  var es6_set$1 = _collection$1(SET$1, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong$1.def(_validateCollection$1(this, SET$1), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong$1);

  var _arrayFromIterable = function _arrayFromIterable(iter, ITERATOR) {
    var result = [];
    _forOf$1(iter, false, result.push, result, ITERATOR);
    return result;
  };

  var _collectionToJson = function _collectionToJson(NAME) {
    return function toJSON() {
      if (_classof$1(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return _arrayFromIterable(this);
    };
  };

  _export$1(_export$1.P + _export$1.R, 'Set', {
    toJSON: _collectionToJson('Set')
  });

  var _setCollectionOf = function _setCollectionOf(COLLECTION) {
    _export$1(_export$1.S, COLLECTION, {
      of: function of() {
        var length = arguments.length;
        var A = new Array(length);

        while (length--) {
          A[length] = arguments[length];
        }

        return new this(A);
      }
    });
  };

  _setCollectionOf('Set');

  var _setCollectionFrom = function _setCollectionFrom(COLLECTION) {
    _export$1(_export$1.S, COLLECTION, {
      from: function from(source
      /* , mapFn, thisArg */
      ) {
        var mapFn = arguments[1];
        var mapping, A, n, cb;
        _aFunction$1(this);
        mapping = mapFn !== undefined;
        if (mapping) _aFunction$1(mapFn);
        if (source == undefined) return new this();
        A = [];

        if (mapping) {
          n = 0;
          cb = _ctx$1(mapFn, arguments[2], 2);
          _forOf$1(source, false, function (nextItem) {
            A.push(cb(nextItem, n++));
          });
        } else {
          _forOf$1(source, false, A.push, A);
        }

        return new this(A);
      }
    });
  };

  _setCollectionFrom('Set');

  var set$1 = _core$1.Set;

  var set$2 = createCommonjsModule(function (module) {
    module.exports = {
      "default": set$1,
      __esModule: true
    };
  });
  unwrapExports(set$2);

  var SchedulingQueue_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getIterator3 = _interopRequireDefault(getIterator$1);

    var _set2 = _interopRequireDefault(set$2);

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _PriorityQueue2 = _interopRequireDefault(PriorityQueue_1);

    var _TimeEngine3 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * @class SchedulingQueue
     * @extends TimeEngine
     */

    /**
     * SchedulingQueue base class
     * http://wavesjs.github.io/audio/#audio-scheduling-queue
     *
     * Norbert.Schnell@ircam.fr
     * Copyright 2014, 2015 IRCAM – Centre Pompidou
     */


    var SchedulingQueue = function (_TimeEngine) {
      (0, _inherits3.default)(SchedulingQueue, _TimeEngine);

      function SchedulingQueue() {
        (0, _classCallCheck3.default)(this, SchedulingQueue);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SchedulingQueue.__proto__ || (0, _getPrototypeOf2.default)(SchedulingQueue)).call(this));

        _this.__queue = new _PriorityQueue2.default();
        _this.__engines = new _set2.default();
        return _this;
      } // TimeEngine 'scheduled' interface


      (0, _createClass3.default)(SchedulingQueue, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var engine = this.__queue.head;
          var nextEngineTime = engine.advanceTime(time);

          if (!nextEngineTime) {
            engine.master = null;

            this.__engines.delete(engine);

            this.__queue.remove(engine);
          } else {
            this.__queue.move(engine, nextEngineTime);
          }

          return this.__queue.time;
        } // TimeEngine master method to be implemented by derived class

      }, {
        key: 'defer',
        // call a function at a given time
        value: function defer(fun) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!(fun instanceof Function)) throw new Error("object cannot be defered by scheduler");
          this.add({
            advanceTime: function advanceTime(time) {
              fun(time);
            } // make sure that the advanceTime method does not returm anything

          }, time);
        } // add a time engine to the scheduler

      }, {
        key: 'add',
        value: function add(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!_TimeEngine3.default.implementsScheduled(engine)) throw new Error("object cannot be added to scheduler");
          if (engine.master) throw new Error("object has already been added to a master");
          engine.master = this; // add to engines and queue

          this.__engines.add(engine);

          var nextTime = this.__queue.insert(engine, time); // reschedule queue


          this.resetTime(nextTime);
        } // remove a time engine from the queue

      }, {
        key: 'remove',
        value: function remove(engine) {
          if (engine.master !== this) throw new Error("object has not been added to this scheduler");
          engine.master = null; // remove from array and queue

          this.__engines.delete(engine);

          var nextTime = this.__queue.remove(engine); // reschedule queue


          this.resetTime(nextTime);
        } // reset next engine time

      }, {
        key: 'resetEngineTime',
        value: function resetEngineTime(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (engine.master !== this) throw new Error("object has not been added to this scheduler");
          var nextTime = void 0;
          if (this.__queue.has(engine)) nextTime = this.__queue.move(engine, time);else nextTime = this.__queue.insert(engine, time);
          this.resetTime(nextTime);
        } // check whether a given engine is scheduled

      }, {
        key: 'has',
        value: function has(engine) {
          return this.__engines.has(engine);
        } // clear queue

      }, {
        key: 'clear',
        value: function clear() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.__engines), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var engine = _step.value;
              engine.master = null;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.__queue.clear();

          this.__engines.clear();

          this.resetTime(Infinity);
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return 0;
        }
      }]);
      return SchedulingQueue;
    }(_TimeEngine3.default);

    exports.default = SchedulingQueue;
  });
  unwrapExports(SchedulingQueue_1);

  var $getOwnPropertyDescriptor$3 = _objectGopd$1.f;
  _objectSap$1('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor$3(_toIobject$1(it), key);
    };
  });

  var $Object$2 = _core$1.Object;

  var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    return $Object$2.getOwnPropertyDescriptor(it, key);
  };

  var getOwnPropertyDescriptor$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": getOwnPropertyDescriptor,
      __esModule: true
    };
  });
  unwrapExports(getOwnPropertyDescriptor$1);

  var get$1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _getOwnPropertyDescriptor2 = _interopRequireDefault(getOwnPropertyDescriptor$1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

      if (desc === undefined) {
        var parent = (0, _getPrototypeOf2.default)(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };
  });
  unwrapExports(get$1);

  var PlayControl_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _get3 = _interopRequireDefault(get$1);

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _SchedulingQueue3 = _interopRequireDefault(SchedulingQueue_1);

    var _TimeEngine5 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var EPSILON = 1e-8;

    var LoopControl = function (_TimeEngine) {
      (0, _inherits3.default)(LoopControl, _TimeEngine);

      function LoopControl(playControl) {
        (0, _classCallCheck3.default)(this, LoopControl);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LoopControl.__proto__ || (0, _getPrototypeOf2.default)(LoopControl)).call(this));

        _this.__playControl = playControl;
        _this.speed = 1;
        _this.lower = -Infinity;
        _this.upper = Infinity;
        return _this;
      } // TimeEngine method (scheduled interface)


      (0, _createClass3.default)(LoopControl, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var playControl = this.__playControl;
          var speed = this.speed;
          var lower = this.lower;
          var upper = this.upper;
          if (speed > 0) time += EPSILON;else time -= EPSILON;

          if (speed > 0) {
            playControl.syncSpeed(time, lower, speed, true);
            return playControl.__getTimeAtPosition(upper) - EPSILON;
          } else if (speed < 0) {
            playControl.syncSpeed(time, upper, speed, true);
            return playControl.__getTimeAtPosition(lower) + EPSILON;
          }

          return Infinity;
        }
      }, {
        key: 'reschedule',
        value: function reschedule(speed) {
          var playControl = this.__playControl;
          var lower = Math.min(playControl.__loopStart, playControl.__loopEnd);
          var upper = Math.max(playControl.__loopStart, playControl.__loopEnd);
          this.speed = speed;
          this.lower = lower;
          this.upper = upper;
          if (lower === upper) speed = 0;
          if (speed > 0) this.resetTime(playControl.__getTimeAtPosition(upper) - EPSILON);else if (speed < 0) this.resetTime(playControl.__getTimeAtPosition(lower) + EPSILON);else this.resetTime(Infinity);
        }
      }, {
        key: 'applyLoopBoundaries',
        value: function applyLoopBoundaries(position, speed) {
          var lower = this.lower;
          var upper = this.upper;
          if (speed > 0 && position >= upper) return lower + (position - lower) % (upper - lower);else if (speed < 0 && position < lower) return upper - (upper - position) % (upper - lower);
          return position;
        }
      }]);
      return LoopControl;
    }(_TimeEngine5.default); // play controlled base class


    var PlayControlled = function () {
      function PlayControlled(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlled);
        this.__playControl = playControl;
        engine.master = this;
        this.__engine = engine;
      }

      (0, _createClass3.default)(PlayControlled, [{
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed, seek, lastSpeed) {
          this.__engine.syncSpeed(time, position, speed, seek);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__playControl = null;
          this.__engine.master = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__playControl.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__playControl.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__playControl.currentPosition;
        }
      }]);
      return PlayControlled;
    }(); // play control for engines implementing the *speed-controlled* interface


    var PlayControlledSpeedControlled = function (_PlayControlled) {
      (0, _inherits3.default)(PlayControlledSpeedControlled, _PlayControlled);

      function PlayControlledSpeedControlled(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledSpeedControlled);
        return (0, _possibleConstructorReturn3.default)(this, (PlayControlledSpeedControlled.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledSpeedControlled)).call(this, playControl, engine));
      }

      return PlayControlledSpeedControlled;
    }(PlayControlled); // play control for engines implmenting the *transported* interface


    var PlayControlledTransported = function (_PlayControlled2) {
      (0, _inherits3.default)(PlayControlledTransported, _PlayControlled2);

      function PlayControlledTransported(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledTransported);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledTransported.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledTransported)).call(this, playControl, engine));

        _this3.__schedulerHook = new PlayControlledSchedulerHook(playControl, engine);
        return _this3;
      }

      (0, _createClass3.default)(PlayControlledTransported, [{
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed, seek, lastSpeed) {
          if (speed !== lastSpeed || seek) {
            var nextPosition; // resync transported engines

            if (seek || speed * lastSpeed < 0) {
              // seek or reverse direction
              nextPosition = this.__engine.syncPosition(time, position, speed);
            } else if (lastSpeed === 0) {
              // start
              nextPosition = this.__engine.syncPosition(time, position, speed);
            } else if (speed === 0) {
              // stop / pause
              this.__engine.syncPosition(time, position, speed);

              nextPosition = Infinity; // if (this.__engine.syncSpeed)
              //   this.__engine.syncSpeed(time, position, 0);
            } else if (this.__engine.syncSpeed) {
              // change speed without reversing direction
              this.__engine.syncSpeed(time, position, speed);
            }

            this.__schedulerHook.resetPosition(nextPosition);
          }
        }
      }, {
        key: 'resetEnginePosition',
        value: function resetEnginePosition(engine) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          if (position === undefined) {
            var playControl = this.__playControl;

            var time = playControl.__sync();

            position = this.__engine.syncPosition(time, playControl.__position, playControl.__speed);
          }

          this.__schedulerHook.resetPosition(position);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__schedulerHook.destroy();

          this.__schedulerHook = null;
          (0, _get3.default)(PlayControlledTransported.prototype.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledTransported.prototype), 'destroy', this).call(this);
        }
      }]);
      return PlayControlledTransported;
    }(PlayControlled); // play control for time engines implementing the *scheduled* interface


    var PlayControlledScheduled = function (_PlayControlled3) {
      (0, _inherits3.default)(PlayControlledScheduled, _PlayControlled3);

      function PlayControlledScheduled(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledScheduled); // scheduling queue becomes master of engine

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledScheduled.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledScheduled)).call(this, playControl, engine));

        engine.master = null;
        _this4.__schedulingQueue = new PlayControlledSchedulingQueue(playControl, engine);
        return _this4;
      }

      (0, _createClass3.default)(PlayControlledScheduled, [{
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed, seek, lastSpeed) {
          if (lastSpeed === 0 && speed !== 0) // start or seek
            this.__engine.resetTime();else if (lastSpeed !== 0 && speed === 0) // stop
            this.__engine.resetTime(Infinity);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__schedulingQueue.destroy();

          (0, _get3.default)(PlayControlledScheduled.prototype.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledScheduled.prototype), 'destroy', this).call(this);
        }
      }]);
      return PlayControlledScheduled;
    }(PlayControlled); // translates transported engine advancePosition into global scheduler times


    var PlayControlledSchedulerHook = function (_TimeEngine2) {
      (0, _inherits3.default)(PlayControlledSchedulerHook, _TimeEngine2);

      function PlayControlledSchedulerHook(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledSchedulerHook);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledSchedulerHook.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledSchedulerHook)).call(this));

        _this5.__playControl = playControl;
        _this5.__engine = engine;
        _this5.__nextPosition = Infinity;

        playControl.__scheduler.add(_this5, Infinity);

        return _this5;
      }

      (0, _createClass3.default)(PlayControlledSchedulerHook, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var playControl = this.__playControl;
          var engine = this.__engine;
          var position = this.__nextPosition;
          var nextPosition = engine.advancePosition(time, position, playControl.__speed);

          var nextTime = playControl.__getTimeAtPosition(nextPosition);

          this.__nextPosition = nextPosition;
          return nextTime;
        }
      }, {
        key: 'resetPosition',
        value: function resetPosition() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__nextPosition;

          var time = this.__playControl.__getTimeAtPosition(position);

          this.__nextPosition = position;
          this.resetTime(time);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__playControl.__scheduler.remove(this);

          this.__playControl = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__playControl.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__playControl.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__playControl.currentPosition;
        }
      }]);
      return PlayControlledSchedulerHook;
    }(_TimeEngine5.default); // internal scheduling queue that returns the current position (and time) of the play control


    var PlayControlledSchedulingQueue = function (_SchedulingQueue) {
      (0, _inherits3.default)(PlayControlledSchedulingQueue, _SchedulingQueue);

      function PlayControlledSchedulingQueue(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledSchedulingQueue);

        var _this6 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledSchedulingQueue.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledSchedulingQueue)).call(this));

        _this6.__playControl = playControl;
        _this6.__engine = engine;

        _this6.add(engine, Infinity);

        playControl.__scheduler.add(_this6, Infinity);

        return _this6;
      }

      (0, _createClass3.default)(PlayControlledSchedulingQueue, [{
        key: 'destroy',
        value: function destroy() {
          this.__playControl.__scheduler.remove(this);

          this.remove(this.__engine);
          this.__playControl = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__playControl.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__playControl.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__playControl.currentPosition;
        }
      }]);
      return PlayControlledSchedulingQueue;
    }(_SchedulingQueue3.default);
    /**
     * Extends Time Engine to provide playback control of a Time Engine instance.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-masters/master/examples/transport/index.html}
     *
     * @extends TimeEngine
     * @param {Object} scheduler - instance of Scheduler
     * @param {TimeEngine} engine - engine to control
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => {
     *   const now = process.hrtime();
     *   return now[0] + now[1] * 1e-9;
     * }
     * const scheduler = new masters.Scheduler(getTimeFunction);
     * const playerEngine = new MyTimeEngine();
     * const playControl = new masters.PlayControl(scheduler, playerEngine);
     *
     * playControl.start();
     */


    var PlayControl = function (_TimeEngine3) {
      (0, _inherits3.default)(PlayControl, _TimeEngine3);

      function PlayControl(scheduler, engine) {
        (0, _classCallCheck3.default)(this, PlayControl);

        var _this7 = (0, _possibleConstructorReturn3.default)(this, (PlayControl.__proto__ || (0, _getPrototypeOf2.default)(PlayControl)).call(this));

        _this7.__scheduler = scheduler;
        _this7.__playControlled = null;
        _this7.__loopControl = null;
        _this7.__loopStart = 0;
        _this7.__loopEnd = 1; // synchronized tie, position, and speed

        _this7.__time = 0;
        _this7.__position = 0;
        _this7.__speed = 0; // non-zero "user" speed

        _this7.__playingSpeed = 1;
        if (engine) _this7.__setEngine(engine);
        return _this7;
      }

      (0, _createClass3.default)(PlayControl, [{
        key: '__setEngine',
        value: function __setEngine(engine) {
          if (engine.master) throw new Error("object has already been added to a master");
          if (_TimeEngine5.default.implementsSpeedControlled(engine)) this.__playControlled = new PlayControlledSpeedControlled(this, engine);else if (_TimeEngine5.default.implementsTransported(engine)) this.__playControlled = new PlayControlledTransported(this, engine);else if (_TimeEngine5.default.implementsScheduled(engine)) this.__playControlled = new PlayControlledScheduled(this, engine);else throw new Error("object cannot be added to play control");
        }
      }, {
        key: '__resetEngine',
        value: function __resetEngine() {
          this.__playControlled.destroy();

          this.__playControlled = null;
        }
        /**
         * Calculate/extrapolate playing time for given position
         *
         * @param {Number} position position
         * @return {Number} extrapolated time
         * @private
         */

      }, {
        key: '__getTimeAtPosition',
        value: function __getTimeAtPosition(position) {
          return this.__time + (position - this.__position) / this.__speed;
        }
        /**
         * Calculate/extrapolate playing position for given time
         *
         * @param {Number} time time
         * @return {Number} extrapolated position
         * @private
         */

      }, {
        key: '__getPositionAtTime',
        value: function __getPositionAtTime(time) {
          return this.__position + (time - this.__time) * this.__speed;
        }
      }, {
        key: '__sync',
        value: function __sync() {
          var now = this.currentTime;
          this.__position += (now - this.__time) * this.__speed;
          this.__time = now;
          return now;
        }
        /**
         * Get current master time.
         *
         * @name currentTime
         * @type {Number}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'set',
        value: function set() {
          var engine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var time = this.__sync();

          var speed = this.__speed;

          if (this.__playControlled !== null && this.__playControlled.__engine !== engine) {
            this.syncSpeed(time, this.__position, 0);
            if (this.__playControlled) this.__resetEngine();

            if (this.__playControlled === null && engine !== null) {
              this.__setEngine(engine);

              if (speed !== 0) this.syncSpeed(time, this.__position, speed);
            }
          }
        }
        /**
         * Sets the play control loop behavior.
         *
         * @type {Boolean}
         * @name loop
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'setLoopBoundaries',

        /**
         * Sets loop start and end time.
         *
         * @param {Number} loopStart - loop start value.
         * @param {Number} loopEnd - loop end value.
         */
        value: function setLoopBoundaries(loopStart, loopEnd) {
          this.__loopStart = loopStart;
          this.__loopEnd = loopEnd;
          this.loop = this.loop;
        }
        /**
         * Sets loop start value
         *
         * @type {Number}
         * @name loopStart
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'syncSpeed',
        // TimeEngine method (speed-controlled interface)
        value: function syncSpeed(time, position, speed) {
          var seek = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var lastSpeed = this.__speed;

          if (speed !== lastSpeed || seek) {
            if ((seek || lastSpeed === 0) && this.__loopControl) position = this.__loopControl.applyLoopBoundaries(position, speed);
            this.__time = time;
            this.__position = position;
            this.__speed = speed;
            if (this.__playControlled) this.__playControlled.syncSpeed(time, position, speed, seek, lastSpeed);
            if (this.__loopControl) this.__loopControl.reschedule(speed);
          }
        }
        /**
         * Starts playback
         */

      }, {
        key: 'start',
        value: function start() {
          var time = this.__sync();

          this.syncSpeed(time, this.__position, this.__playingSpeed);
        }
        /**
         * Pauses playback and stays at the same position.
         */

      }, {
        key: 'pause',
        value: function pause() {
          var time = this.__sync();

          this.syncSpeed(time, this.__position, 0);
        }
        /**
         * Stops playback and seeks to initial (0) position.
         */

      }, {
        key: 'stop',
        value: function stop() {
          var time = this.__sync();

          this.syncSpeed(time, 0, 0, true);
        }
        /**
         * If speed if provided, sets the playback speed. The speed value should
         * be non-zero between -16 and -1/16 or between 1/16 and 16.
         *
         * @type {Number}
         * @name speed
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'seek',

        /**
         * Set (jump to) playing position.
         *
         * @param {Number} position target position
         */
        value: function seek(position) {
          var time = this.__sync();

          this.__position = position;
          this.syncSpeed(time, position, this.__speed, true);
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__scheduler.currentTime;
        }
        /**
         * Get current master time.
         *
         * @name audioTime
         * @type {Number}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'audioTime',
        get: function get() {
          return this.__scheduler.audioTime;
        }
        /**
         * Get current master position.
         * This function will be replaced when the play-control is added to a master.
         *
         * @name currentPosition
         * @type {Number}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__position + (this.__scheduler.currentTime - this.__time) * this.__speed;
        }
        /**
         * Returns if the play control is running.
         *
         * @name running
         * @type {Boolean}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'running',
        get: function get() {
          return !(this.__speed === 0);
        }
      }, {
        key: 'loop',
        set: function set(enable) {
          if (enable && this.__loopStart > -Infinity && this.__loopEnd < Infinity) {
            if (!this.__loopControl) {
              this.__loopControl = new LoopControl(this);

              this.__scheduler.add(this.__loopControl, Infinity);
            }

            if (this.__speed !== 0) {
              var position = this.currentPosition;
              var lower = Math.min(this.__loopStart, this.__loopEnd);
              var upper = Math.max(this.__loopStart, this.__loopEnd);
              if (this.__speed > 0 && position > upper) this.seek(upper);else if (this.__speed < 0 && position < lower) this.seek(lower);else this.__loopControl.reschedule(this.__speed);
            }
          } else if (this.__loopControl) {
            this.__scheduler.remove(this.__loopControl);

            this.__loopControl = null;
          }
        },
        get: function get() {
          return !!this.__loopControl;
        }
      }, {
        key: 'loopStart',
        set: function set(loopStart) {
          this.setLoopBoundaries(loopStart, this.__loopEnd);
        },
        get: function get() {
          return this.__loopStart;
        }
        /**
         * Sets loop end value
         *
         * @type {Number}
         * @name loopEnd
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'loopEnd',
        set: function set(loopEnd) {
          this.setLoopBoundaries(this.__loopStart, loopEnd);
        },
        get: function get() {
          return this.__loopEnd;
        }
      }, {
        key: 'speed',
        set: function set(speed) {
          var time = this.__sync();

          if (speed >= 0) {
            if (speed < 0.01) speed = 0.01;else if (speed > 100) speed = 100;
          } else {
            if (speed < -100) speed = -100;else if (speed > -0.01) speed = -0.01;
          }

          this.__playingSpeed = speed;
          if (!this.master && this.__speed !== 0) this.syncSpeed(time, this.__position, speed);
        },
        get: function get() {
          return this.__playingSpeed;
        }
      }]);
      return PlayControl;
    }(_TimeEngine5.default);

    exports.default = PlayControl;
  });
  unwrapExports(PlayControl_1);

  var Transport_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getIterator3 = _interopRequireDefault(getIterator$1);

    var _get3 = _interopRequireDefault(get$1);

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _PriorityQueue2 = _interopRequireDefault(PriorityQueue_1);

    var _SchedulingQueue3 = _interopRequireDefault(SchedulingQueue_1);

    var _TimeEngine5 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function addDuplet(firstArray, secondArray, firstElement, secondElement) {
      firstArray.push(firstElement);
      secondArray.push(secondElement);
    }

    function removeDuplet(firstArray, secondArray, firstElement) {
      var index = firstArray.indexOf(firstElement);

      if (index >= 0) {
        var secondElement = secondArray[index];
        firstArray.splice(index, 1);
        secondArray.splice(index, 1);
        return secondElement;
      }

      return null;
    } // The Transported call is the base class of the adapters between
    // different types of engines (i.e. transported, scheduled, play-controlled)
    // The adapters are at the same time masters for the engines added to the transport
    // and transported TimeEngines inserted into the transport's position-based pritority queue.


    var Transported = function (_TimeEngine) {
      (0, _inherits3.default)(Transported, _TimeEngine);

      function Transported(transport, engine, start, duration, offset) {
        var stretch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        (0, _classCallCheck3.default)(this, Transported);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Transported.__proto__ || (0, _getPrototypeOf2.default)(Transported)).call(this));

        _this.master = transport;
        _this.__engine = engine;
        engine.master = _this;
        _this.__startPosition = start;
        _this.__endPosition = !isFinite(duration) ? Infinity : start + duration;
        _this.__offsetPosition = start + offset;
        _this.__stretchPosition = stretch;
        _this.__isRunning = false;
        return _this;
      }

      (0, _createClass3.default)(Transported, [{
        key: 'setBoundaries',
        value: function setBoundaries(start, duration) {
          var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var stretch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          this.__startPosition = start;
          this.__endPosition = start + duration;
          this.__offsetPosition = start + offset;
          this.__stretchPosition = stretch;
          this.resetPosition();
        }
      }, {
        key: 'start',
        value: function start(time, position, speed) {}
      }, {
        key: 'stop',
        value: function stop(time, position) {}
      }, {
        key: 'resetPosition',
        value: function resetPosition(position) {
          if (position !== undefined) position += this.__offsetPosition;
          this.master.resetEnginePosition(this, position);
        }
      }, {
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          if (speed > 0) {
            if (position < this.__startPosition) {
              if (this.__isRunning) this.stop(time, position - this.__offsetPosition);
              this.__isRunning = false;
              return this.__startPosition;
            } else if (position < this.__endPosition) {
              this.start(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
              return this.__endPosition;
            }
          } else {
            if (position > this.__endPosition) {
              if (this.__isRunning) // if engine is running
                this.stop(time, position - this.__offsetPosition);
              this.__isRunning = false;
              return this.__endPosition;
            } else if (position > this.__startPosition) {
              this.start(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
              return this.__startPosition;
            }
          }

          if (this.__isRunning) // if engine is running
            this.stop(time, position);
          this.__isRunning = false;
          return Infinity * speed;
        }
      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          if (!this.__isRunning) {
            this.start(time, position - this.__offsetPosition, speed);
            this.__isRunning = true;
            if (speed > 0) return this.__endPosition;
            return this.__startPosition;
          } // stop engine


          this.stop(time, position - this.__offsetPosition);
          this.__isRunning = false;
          return Infinity * speed;
        }
      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          if (speed === 0) {
            this.stop(time, position - this.__offsetPosition);
          }
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.master = null;
          this.__engine.master = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.master.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.master.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.master.currentPosition - this.__offsetPosition;
        }
      }]);
      return Transported;
    }(_TimeEngine5.default); // TransportedTransported
    // has to switch on and off the scheduled engines when the transport hits the engine's start and end position
    // @note - does not handle properly __startPosition and __endPosition


    var TransportedTransported = function (_Transported) {
      (0, _inherits3.default)(TransportedTransported, _Transported);

      function TransportedTransported(transport, engine, startPosition, endPosition, offsetPosition) {
        (0, _classCallCheck3.default)(this, TransportedTransported);
        return (0, _possibleConstructorReturn3.default)(this, (TransportedTransported.__proto__ || (0, _getPrototypeOf2.default)(TransportedTransported)).call(this, transport, engine, startPosition, endPosition, offsetPosition));
      } // @todo - handle this.__running to start and stop properly the scheduled engines


      (0, _createClass3.default)(TransportedTransported, [{
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          var nextPosition = null; // Infinity * speed; // default return

          if (speed > 0) {
            if (position < this.__startPosition) {
              // sync engine at `_startPosition`
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, this.__startPosition - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else if (position < this.__endPosition) {
              // sync engine at `position`
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else {
              this.__engine.syncPosition(time, position - this.__offsetPosition, 0);

              this.__isRunning = false;
              nextPosition = Infinity * speed;
            } // if somehow the engine asked to be called after `endPosition`, clamp value


            if (this.__isRunning && nextPosition > this.__endPosition) {
              nextPosition = this.__endPosition;
            }
          } else if (speed < 0) {
            if (position > this.__endPosition) {
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, this.__endPosition - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else if (position > this.__startPosition) {
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else {
              this.__engine.syncPosition(time, position - this.__offsetPosition, 0);

              this.__isRunning = false;
              nextPosition = Infinity * speed;
            } // if somehow the engine asked to be called before `startPosition`, clamp value


            if (this.__isRunning && nextPosition < this.__startPosition) {
              nextPosition = this.__startPosition;
            }
          } else {
            this.__engine.syncPosition(time, position - this.__offsetPosition, 0);

            this.__isRunning = false;
            nextPosition = Infinity;
          }

          return nextPosition;
        }
      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          // ceil or floor `position` at 10^-9 to prevent float arithmetics errors
          // that make the transported go to infinite loops
          if (speed > 0) {
            position = Math.ceil(position * 1e9) * 1e-9;
          } else if (speed < 0) {
            position = Math.floor(position * 1e9) * 1e-9;
          } // stop engine if outside boundaries


          if (speed > 0 && position >= this.__endPosition && this.__isRunning) {
            // stop engine at __endPosition
            this.__engine.syncPosition(time, this.__endPosition - this.__offsetPosition, 0);

            this.__isRunning = false;
            return Infinity * speed; //
          } else if (speed < 0 && position < this.__startPosition && this.__isRunning) {
            this.__engine.syncPosition(time, this.__startPosition - this.__offsetPosition, 0);

            this.__isRunning = false;
            return Infinity * speed; //
          } // define next position and clamp to boundaries


          position = this.__offsetPosition + this.__engine.advancePosition(time, position - this.__offsetPosition, speed); // stop engine if outside boundaries - will call advancePosition once more
          // and thus `syncPosition` (cf. line 218 - 228)

          if (speed > 0 && position > this.__endPosition) {
            position = this.__endPosition;
          } else if (speed < 0 && position < this.__startPosition) {
            position = this.__startPosition;
          }

          return position;
        }
      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          if (this.__engine.syncSpeed) {
            this.__engine.syncSpeed(time, position, speed);
          }
        }
      }, {
        key: 'resetEnginePosition',
        value: function resetEnginePosition(engine) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          if (position !== undefined) {
            position += this.__offsetPosition;
          }

          this.master.resetEnginePosition(this, position);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__engine.syncPosition(this.master.currentTime, this.master.currentPosition, 0);

          (0, _get3.default)(TransportedTransported.prototype.__proto__ || (0, _getPrototypeOf2.default)(TransportedTransported.prototype), 'destroy', this).call(this);
        }
      }]);
      return TransportedTransported;
    }(Transported); // TransportedSpeedControlled
    // has to start and stop the speed-controlled engines when the transport hits the engine's start and end position


    var TransportedSpeedControlled = function (_Transported2) {
      (0, _inherits3.default)(TransportedSpeedControlled, _Transported2);

      function TransportedSpeedControlled(transport, engine, startPosition, endPosition, offsetPosition) {
        (0, _classCallCheck3.default)(this, TransportedSpeedControlled);
        return (0, _possibleConstructorReturn3.default)(this, (TransportedSpeedControlled.__proto__ || (0, _getPrototypeOf2.default)(TransportedSpeedControlled)).call(this, transport, engine, startPosition, endPosition, offsetPosition));
      }

      (0, _createClass3.default)(TransportedSpeedControlled, [{
        key: 'start',
        value: function start(time, position, speed) {
          this.__engine.syncSpeed(time, position, speed, true);
        }
      }, {
        key: 'stop',
        value: function stop(time, position) {
          this.__engine.syncSpeed(time, position, 0);
        }
      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          if (this.__isRunning) this.__engine.syncSpeed(time, position, speed);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__engine.syncSpeed(this.master.currentTime, this.master.currentPosition - this.__offsetPosition, 0);

          (0, _get3.default)(TransportedSpeedControlled.prototype.__proto__ || (0, _getPrototypeOf2.default)(TransportedSpeedControlled.prototype), 'destroy', this).call(this);
        }
      }]);
      return TransportedSpeedControlled;
    }(Transported); // TransportedScheduled
    // has to switch on and off the scheduled engines when the transport hits the engine's start and end position


    var TransportedScheduled = function (_Transported3) {
      (0, _inherits3.default)(TransportedScheduled, _Transported3);

      function TransportedScheduled(transport, engine, startPosition, endPosition, offsetPosition) {
        (0, _classCallCheck3.default)(this, TransportedScheduled); // scheduling queue becomes master of engine

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (TransportedScheduled.__proto__ || (0, _getPrototypeOf2.default)(TransportedScheduled)).call(this, transport, engine, startPosition, endPosition, offsetPosition));

        engine.master = null;

        transport.__schedulingQueue.add(engine, Infinity);

        return _this4;
      }

      (0, _createClass3.default)(TransportedScheduled, [{
        key: 'start',
        value: function start(time, position, speed) {
          this.master.__schedulingQueue.resetEngineTime(this.__engine, time);
        }
      }, {
        key: 'stop',
        value: function stop(time, position) {
          this.master.__schedulingQueue.resetEngineTime(this.__engine, Infinity);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.master.__schedulingQueue.remove(this.__engine);

          (0, _get3.default)(TransportedScheduled.prototype.__proto__ || (0, _getPrototypeOf2.default)(TransportedScheduled.prototype), 'destroy', this).call(this);
        }
      }]);
      return TransportedScheduled;
    }(Transported); // translates advancePosition of *transported* engines into global scheduler times


    var TransportSchedulerHook = function (_TimeEngine2) {
      (0, _inherits3.default)(TransportSchedulerHook, _TimeEngine2);

      function TransportSchedulerHook(transport) {
        (0, _classCallCheck3.default)(this, TransportSchedulerHook);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (TransportSchedulerHook.__proto__ || (0, _getPrototypeOf2.default)(TransportSchedulerHook)).call(this));

        _this5.__transport = transport;
        _this5.__nextPosition = Infinity;
        _this5.__nextTime = Infinity;

        transport.__scheduler.add(_this5, Infinity);

        return _this5;
      } // TimeEngine method (scheduled interface)


      (0, _createClass3.default)(TransportSchedulerHook, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var transport = this.__transport;
          var position = this.__nextPosition;
          var speed = transport.__speed;
          var nextPosition = transport.advancePosition(time, position, speed);

          var nextTime = transport.__getTimeAtPosition(nextPosition);

          this.__nextPosition = nextPosition;
          this.__nextTime = nextTime;
          return nextTime;
        }
      }, {
        key: 'resetPosition',
        value: function resetPosition() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__nextPosition;
          var transport = this.__transport;

          var time = transport.__getTimeAtPosition(position);

          this.__nextPosition = position;
          this.__nextTime = time;
          this.resetTime(time);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__transport.__scheduler.remove(this);

          this.__transport = null;
        }
      }]);
      return TransportSchedulerHook;
    }(_TimeEngine5.default); // internal scheduling queue that returns the current position (and time) of the transport


    var TransportSchedulingQueue = function (_SchedulingQueue) {
      (0, _inherits3.default)(TransportSchedulingQueue, _SchedulingQueue);

      function TransportSchedulingQueue(transport) {
        (0, _classCallCheck3.default)(this, TransportSchedulingQueue);

        var _this6 = (0, _possibleConstructorReturn3.default)(this, (TransportSchedulingQueue.__proto__ || (0, _getPrototypeOf2.default)(TransportSchedulingQueue)).call(this));

        _this6.__transport = transport;

        transport.__scheduler.add(_this6, Infinity);

        return _this6;
      }

      (0, _createClass3.default)(TransportSchedulingQueue, [{
        key: 'destroy',
        value: function destroy() {
          this.__transport.__scheduler.remove(this);

          this.__transport = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__transport.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__transport.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__transport.currentPosition;
        }
      }]);
      return TransportSchedulingQueue;
    }(_SchedulingQueue3.default);
    /**
     * Provides position-based scheduling of TimeEngine instances.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-masters/master/examples/transport/index.html}
     *
     *
     * @param {Object} scheduler - instance of Scheduler
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => {
     *   const now = process.hrtime();
     *   return now[0] + now[1] * 1e-9;
     * }
     * const scheduler = new masters.Scheduler(getTimeFunction);
     * const transport = new masters.Transport(scheduler);
     * const playControl = new masters.PlayControl(scheduler, transport);
     * const myEngine = new MyEngine();
     * const yourEngine = new yourEngine();
     *
     * transport.add(myEngine);
     * transport.add(yourEngine);
     *
     * playControl.start();
     */


    var Transport = function (_TimeEngine3) {
      (0, _inherits3.default)(Transport, _TimeEngine3);

      function Transport(scheduler) {
        (0, _classCallCheck3.default)(this, Transport);

        var _this7 = (0, _possibleConstructorReturn3.default)(this, (Transport.__proto__ || (0, _getPrototypeOf2.default)(Transport)).call(this));

        if (!scheduler) throw new Error('Invalid argument `scheduler`, should be an instance of `Scheduler`');
        _this7.__engines = [];
        _this7.__transported = [];
        _this7.__scheduler = scheduler;
        _this7.__schedulerHook = new TransportSchedulerHook(_this7);
        _this7.__transportedQueue = new _PriorityQueue2.default();
        _this7.__schedulingQueue = new TransportSchedulingQueue(_this7); // syncronized time, position, and speed

        _this7.__time = 0;
        _this7.__position = 0;
        _this7.__speed = 0;
        return _this7;
      }

      (0, _createClass3.default)(Transport, [{
        key: '__getTimeAtPosition',
        value: function __getTimeAtPosition(position) {
          if (this.__speed === 0) return +Infinity;else return this.__time + (position - this.__position) / this.__speed;
        }
      }, {
        key: '__getPositionAtTime',
        value: function __getPositionAtTime(time) {
          return this.__position + (time - this.__time) * this.__speed;
        }
      }, {
        key: '__syncTransportedPosition',
        value: function __syncTransportedPosition(time, position, speed) {
          var numTransportedEngines = this.__transported.length;
          var nextPosition = Infinity * speed;

          if (numTransportedEngines > 0) {
            this.__transportedQueue.clear();

            this.__transportedQueue.reverse = speed < 0;

            for (var i = 0; i < numTransportedEngines; i++) {
              var engine = this.__transported[i];
              var nextEnginePosition = engine.syncPosition(time, position, speed);

              this.__transportedQueue.insert(engine, nextEnginePosition);
            }

            nextPosition = this.__transportedQueue.time;
          }

          return nextPosition;
        }
      }, {
        key: '__syncTransportedSpeed',
        value: function __syncTransportedSpeed(time, position, speed) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.__transported), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var transported = _step.value;
              transported.syncSpeed(time, position, speed);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        /**
         * Get current master time.
         *
         * @type {Number}
         * @name currentTime
         * @memberof Transport
         * @instance
         * @readonly
         */

      }, {
        key: 'resetPosition',

        /**
         * Reset next transport position
         *
         * @param {Number} next - transport position
         */
        value: function resetPosition(position) {
          var master = this.master;
          if (master && master.resetEnginePosition !== undefined) master.resetEnginePosition(this, position);else this.__schedulerHook.resetPosition(position);
        }
        /**
         * Implementation of the transported time engine interface.
         *
         * @param {Number} time
         * @param {Number} position
         * @param {Number} speed
         */

      }, {
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          this.__time = time;
          this.__position = position;
          this.__speed = speed;
          return this.__syncTransportedPosition(time, position, speed);
        }
        /**
         * Implementation of the transported time engine interface.
         *
         * @param {Number} time
         * @param {Number} position
         * @param {Number} speed
         */

      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          var engine = this.__transportedQueue.head;
          var nextEnginePosition = engine.advancePosition(time, position, speed);
          return this.__transportedQueue.move(engine, nextEnginePosition);
        }
        /**
         * Implementation of the transported time engine interface.
         *
         * @param {Number} time
         * @param {Number} position
         * @param {Number} speed
         * @param {Boolean} [seek=false]
         */

      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          var seek = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var lastSpeed = this.__speed;
          this.__time = time;
          this.__position = position;
          this.__speed = speed;

          if (speed !== lastSpeed || seek) {
            var nextPosition = void 0; // resync transported engines

            if (seek || speed * lastSpeed < 0) {
              // seek or reverse direction
              nextPosition = this.__syncTransportedPosition(time, position, speed);
            } else if (lastSpeed === 0) {
              // start
              nextPosition = this.__syncTransportedPosition(time, position, speed);
            } else if (speed === 0) {
              // stop
              nextPosition = Infinity;

              this.__syncTransportedPosition(time, position, speed);
            } else {
              // change speed without reversing direction
              this.__syncTransportedSpeed(time, position, speed);
            }

            this.resetPosition(nextPosition);
          }
        }
        /**
         * Add a time engine to the transport.
         *
         * @param {Object} engine - engine to be added to the transport
         * @param {Number} position - start position
         */

      }, {
        key: 'add',
        value: function add(engine) {
          var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
          var offsetPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var transported = null;
          if (offsetPosition === -Infinity) offsetPosition = 0;
          if (engine.master) throw new Error("object has already been added to a master");
          if (_TimeEngine5.default.implementsTransported(engine)) transported = new TransportedTransported(this, engine, startPosition, endPosition, offsetPosition);else if (_TimeEngine5.default.implementsSpeedControlled(engine)) transported = new TransportedSpeedControlled(this, engine, startPosition, endPosition, offsetPosition);else if (_TimeEngine5.default.implementsScheduled(engine)) transported = new TransportedScheduled(this, engine, startPosition, endPosition, offsetPosition);else throw new Error("object cannot be added to a transport");

          if (transported) {
            var speed = this.__speed;
            addDuplet(this.__engines, this.__transported, engine, transported);

            if (speed !== 0) {
              // sync and start
              var nextEnginePosition = transported.syncPosition(this.currentTime, this.currentPosition, speed);

              var nextPosition = this.__transportedQueue.insert(transported, nextEnginePosition);

              this.resetPosition(nextPosition);
            }
          }

          return transported;
        }
        /**
         * Remove a time engine from the transport.
         *
         * @param {object} engineOrTransported - engine or transported to be removed from the transport
         */

      }, {
        key: 'remove',
        value: function remove(engineOrTransported) {
          var engine = engineOrTransported;
          var transported = removeDuplet(this.__engines, this.__transported, engineOrTransported);

          if (!transported) {
            engine = removeDuplet(this.__transported, this.__engines, engineOrTransported);
            transported = engineOrTransported;
          }

          if (engine && transported) {
            var nextPosition = this.__transportedQueue.remove(transported);

            transported.destroy();
            if (this.__speed !== 0) this.resetPosition(nextPosition);
          } else {
            throw new Error("object has not been added to this transport");
          }
        }
        /**
         * Reset position of the given engine.
         *
         * @param {TimeEngine} transported - Engine to reset
         * @param {Number} position - New position
         */

      }, {
        key: 'resetEnginePosition',
        value: function resetEnginePosition(transported) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          var speed = this.__speed;

          if (speed !== 0) {
            if (position === undefined) position = transported.syncPosition(this.currentTime, this.currentPosition, speed);
            var nextPosition = null; // the priority queue does not keep track of the elements that are
            // inserted at Infinity, so we need to reinsert transported engine in
            // this case.
            // @note - this could probably be more clean
            //       - probably the priority queue should keep these references

            if (!this.__transportedQueue.has(transported)) {
              nextPosition = this.__transportedQueue.insert(transported, position);
            } else {
              nextPosition = this.__transportedQueue.move(transported, position);
            }

            this.resetPosition(nextPosition);
          }
        }
        /**
         * Remove all time engines from the transport.
         */

      }, {
        key: 'clear',
        value: function clear() {
          this.syncSpeed(this.currentTime, this.currentPosition, 0);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(this.__transported), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var transported = _step2.value;
              transported.destroy();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__scheduler.currentTime;
        }
        /**
         * Get master audio time.
         *
         * @type {Number}
         * @name currentTime
         * @memberof Transport
         * @instance
         * @readonly
         */

      }, {
        key: 'audioTime',
        get: function get() {
          return this.__scheduler.audioTime;
        }
        /**
         * Get current master position. This getter will be replaced when the transport
         * is added to a master (i.e. transport or play-control).
         *
         * @type {Number}
         * @name currentPosition
         * @memberof Transport
         * @instance
         * @readonly
         */

      }, {
        key: 'currentPosition',
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return this.__position + (this.__scheduler.currentTime - this.__time) * this.__speed;
        }
      }]);
      return Transport;
    }(_TimeEngine5.default);

    exports.default = Transport;
  });
  unwrapExports(Transport_1);

  var global$2 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js
  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }

  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }

  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;

  if (typeof global$2.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
  }

  if (typeof global$2.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    } // if setTimeout wasn't available but was latter defined


    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }

  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    } // if clearTimeout wasn't available but was latter defined


    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }

  var queue$1 = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }

    draining = false;

    if (currentQueue.length) {
      queue$1 = currentQueue.concat(queue$1);
    } else {
      queueIndex = -1;
    }

    if (queue$1.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }

    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue$1.length;

    while (len) {
      currentQueue = queue$1;
      queue$1 = [];

      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }

      queueIndex = -1;
      len = queue$1.length;
    }

    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  function nextTick(fun) {
    var args = new Array(arguments.length - 1);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }

    queue$1.push(new Item(fun, args));

    if (queue$1.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  } // v8 likes predictible objects

  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }

  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues

  var versions$1 = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;
  function binding(name) {
    throw new Error('process.binding is not supported');
  }
  function cwd() {
    return '/';
  }
  function chdir(dir) {
    throw new Error('process.chdir is not supported');
  }
  function umask() {
    return 0;
  } // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

  var performance = global$2.performance || {};

  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  }; // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime


  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);

    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];

      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }

    return [seconds, nanoseconds];
  }
  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }
  var process$3 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions$1,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  /**
   * Helpers.
   */
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} [options]
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */

  var ms = function ms(val, options) {
    options = options || {};
    var type = typeof val;

    if (type === 'string' && val.length > 0) {
      return parse(val);
    } else if (type === 'number' && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }

    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  };
  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */


  function parse(str) {
    str = String(str);

    if (str.length > 100) {
      return;
    }

    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

    if (!match) {
      return;
    }

    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();

    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;

      case 'days':
      case 'day':
      case 'd':
        return n * d;

      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;

      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;

      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;

      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;

      default:
        return undefined;
    }
  }
  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */


  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + 'd';
    }

    if (ms >= h) {
      return Math.round(ms / h) + 'h';
    }

    if (ms >= m) {
      return Math.round(ms / m) + 'm';
    }

    if (ms >= s) {
      return Math.round(ms / s) + 's';
    }

    return ms + 'ms';
  }
  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */


  function fmtLong(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }
  /**
   * Pluralization helper.
   */


  function plural(ms, n, name) {
    if (ms < n) {
      return;
    }

    if (ms < n * 1.5) {
      return Math.floor(ms / n) + ' ' + name;
    }

    return Math.ceil(ms / n) + ' ' + name + 's';
  }

  var debug = createCommonjsModule(function (module, exports) {
    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     *
     * Expose `debug()` as the module.
     */
    exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = ms;
    /**
     * The currently active debug mode names, and names to skip.
     */

    exports.names = [];
    exports.skips = [];
    /**
     * Map of special "%n" handling functions, for the debug "format" argument.
     *
     * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
     */

    exports.formatters = {};
    /**
     * Previous log timestamp.
     */

    var prevTime;
    /**
     * Select a color.
     * @param {String} namespace
     * @return {Number}
     * @api private
     */

    function selectColor(namespace) {
      var hash = 0,
          i;

      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }

      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    /**
     * Create a debugger with the given `namespace`.
     *
     * @param {String} namespace
     * @return {Function}
     * @api public
     */


    function createDebug(namespace) {
      function debug() {
        // disabled?
        if (!debug.enabled) return;
        var self = debug; // set `diff` timestamp

        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr; // turn the `arguments` into a proper Array

        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }

        args[0] = exports.coerce(args[0]);

        if ('string' !== typeof args[0]) {
          // anything else let's inspect with %O
          args.unshift('%O');
        } // apply any `formatters` transformations


        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          // if we encounter an escaped % then don't increase the array index
          if (match === '%%') return match;
          index++;
          var formatter = exports.formatters[format];

          if ('function' === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

            args.splice(index, 1);
            index--;
          }

          return match;
        }); // apply env-specific formatting (colors, etc.)

        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }

      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace); // env-specific initialization logic for debug instances

      if ('function' === typeof exports.init) {
        exports.init(debug);
      }

      return debug;
    }
    /**
     * Enables a debug mode by namespaces. This can include modes
     * separated by a colon and wildcards.
     *
     * @param {String} namespaces
     * @api public
     */


    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
      var len = split.length;

      for (var i = 0; i < len; i++) {
        if (!split[i]) continue; // ignore empty strings

        namespaces = split[i].replace(/\*/g, '.*?');

        if (namespaces[0] === '-') {
          exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
        } else {
          exports.names.push(new RegExp('^' + namespaces + '$'));
        }
      }
    }
    /**
     * Disable debug output.
     *
     * @api public
     */


    function disable() {
      exports.enable('');
    }
    /**
     * Returns true if the given mode name is enabled, false otherwise.
     *
     * @param {String} name
     * @return {Boolean}
     * @api public
     */


    function enabled(name) {
      var i, len;

      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }

      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }

      return false;
    }
    /**
     * Coerce `val`.
     *
     * @param {Mixed} val
     * @return {Mixed}
     * @api private
     */


    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  });
  var debug_1 = debug.coerce;
  var debug_2 = debug.disable;
  var debug_3 = debug.enable;
  var debug_4 = debug.enabled;
  var debug_5 = debug.humanize;
  var debug_6 = debug.names;
  var debug_7 = debug.skips;
  var debug_8 = debug.formatters;

  var browser$1 = createCommonjsModule(function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     *
     * Expose `debug()` as the module.
     */
    exports = module.exports = debug;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
    /**
     * Colors.
     */

    exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true;
      } // is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */


    exports.formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return '[UnexpectedJSONParseError]: ' + err.message;
      }
    };
    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */


    function formatArgs(args) {
      var useColors = this.useColors;
      args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
      if (!useColors) return;
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into

      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if ('%%' === match) return;
        index++;

        if ('%c' === match) {
          // we only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */


    function log() {
      // this hackery is required for IE8/9, where
      // the `console.log` function doesn't have 'apply'
      return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */


    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem('debug');
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {}
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */


    function load() {
      var r;

      try {
        r = exports.storage.debug;
      } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


      if (!r && typeof process$3 !== 'undefined' && 'env' in process$3) {
        r = process$3.env.DEBUG;
      }

      return r;
    }
    /**
     * Enable namespaces listed in `localStorage.debug` initially.
     */


    exports.enable(load());
    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {}
    }
  });
  var browser_1 = browser$1.log;
  var browser_2 = browser$1.formatArgs;
  var browser_3 = browser$1.save;
  var browser_4 = browser$1.load;
  var browser_5 = browser$1.useColors;
  var browser_6 = browser$1.storage;
  var browser_7 = browser$1.colors;

  // MIT lisence
  // from https://github.com/substack/tty-browserify/blob/1ba769a6429d242f36226538835b4034bf6b7886/index.js
  function isatty() {
    return false;
  }
  function ReadStream() {
    throw new Error('tty.ReadStream is not implemented');
  }
  function WriteStream() {
    throw new Error('tty.ReadStream is not implemented');
  }
  var tty = {
    isatty: isatty,
    ReadStream: ReadStream,
    WriteStream: WriteStream
  };

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited = false;

  function init() {
    inited = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }

  function toByteArray(b64) {
    if (!inited) {
      init();
    }

    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice


    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

    arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 0xFF;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr;
  }

  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }

  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];

    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }

    return output.join('');
  }

  function fromByteArray(uint8) {
    if (!inited) {
      init();
    }

    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later

    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    } // pad the end with zeros, but make sure to not forget the extra bytes


    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 0x3F];
      output += lookup[tmp << 2 & 0x3F];
      output += '=';
    }

    parts.push(output);
    return parts.join('');
  }

  function read(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;

    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;

    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }

    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }
  function write(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);

      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }

      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }

      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;

    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }

  var toString$4 = {}.toString;
  var isArray = Array.isArray || function (arr) {
    return toString$4.call(arr) == '[object Array]';
  };

  var INSPECT_MAX_BYTES = 50;
  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.

   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */

  Buffer.TYPED_ARRAY_SUPPORT = global$2.TYPED_ARRAY_SUPPORT !== undefined ? global$2.TYPED_ARRAY_SUPPORT : true;

  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }

  function createBuffer(that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length');
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length);
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer(length);
      }

      that.length = length;
    }

    return that;
  }
  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */


  function Buffer(arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length);
    } // Common case.


    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error('If encoding is specified then the first argument must be a string');
      }

      return allocUnsafe(this, arg);
    }

    return from(this, arg, encodingOrOffset, length);
  }
  Buffer.poolSize = 8192; // not used by this implementation
  // TODO: Legacy, not needed anymore. Remove in next major version.

  Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype;
    return arr;
  };

  function from(that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number');
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length);
    }

    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset);
    }

    return fromObject(that, value);
  }
  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/


  Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length);
  };

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  }

  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }
  }

  function alloc(that, size, fill, encoding) {
    assertSize(size);

    if (size <= 0) {
      return createBuffer(that, size);
    }

    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
    }

    return createBuffer(that, size);
  }
  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/


  Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding);
  };

  function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }

    return that;
  }
  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */


  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size);
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */


  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size);
  };

  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding');
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);
    var actual = that.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual);
    }

    return that;
  }

  function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);

    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }

    return that;
  }

  function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds');
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds');
    }

    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array;
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike(that, array);
    }

    return that;
  }

  function fromObject(that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);

      if (that.length === 0) {
        return that;
      }

      obj.copy(that, 0, 0, len);
      return that;
    }

    if (obj) {
      if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0);
        }

        return fromArrayLike(that, obj);
      }

      if (obj.type === 'Buffer' && isArray(obj.data)) {
        return fromArrayLike(that, obj.data);
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
  }

  function checked(length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }

    return length | 0;
  }
  Buffer.isBuffer = isBuffer;

  function internalIsBuffer(b) {
    return !!(b != null && b._isBuffer);
  }

  Buffer.compare = function compare(a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;
    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;

      default:
        return false;
    }
  };

  Buffer.concat = function concat(list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    if (list.length === 0) {
      return Buffer.alloc(0);
    }

    var i;

    if (length === undefined) {
      length = 0;

      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;

    for (i = 0; i < list.length; ++i) {
      var buf = list[i];

      if (!internalIsBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      buf.copy(buffer, pos);
      pos += buf.length;
    }

    return buffer;
  };

  function byteLength(string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length;
    }

    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength;
    }

    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0; // Use a for loop to avoid recursion

    var loweredCase = false;

    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;

        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length;

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;

        case 'hex':
          return len >>> 1;

        case 'base64':
          return base64ToBytes(string).length;

        default:
          if (loweredCase) return utf8ToBytes(string).length; // assume utf8

          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }

  Buffer.byteLength = byteLength;

  function slowToString(encoding, start, end) {
    var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

    if (start === undefined || start < 0) {
      start = 0;
    } // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.


    if (start > this.length) {
      return '';
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return '';
    } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return '';
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);

        case 'ascii':
          return asciiSlice(this, start, end);

        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end);

        case 'base64':
          return base64Slice(this, start, end);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  } // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.


  Buffer.prototype._isBuffer = true;

  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer.prototype.swap16 = function swap16() {
    var len = this.length;

    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }

    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }

    return this;
  };

  Buffer.prototype.swap32 = function swap32() {
    var len = this.length;

    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }

    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }

    return this;
  };

  Buffer.prototype.swap64 = function swap64() {
    var len = this.length;

    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }

    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }

    return this;
  };

  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };

  Buffer.prototype.equals = function equals(b) {
    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
  };

  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = INSPECT_MAX_BYTES;

    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }

    return '<Buffer ' + str + '>';
  };

  Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer(target)) {
      throw new TypeError('Argument must be a Buffer');
    }

    if (start === undefined) {
      start = 0;
    }

    if (end === undefined) {
      end = target ? target.length : 0;
    }

    if (thisStart === undefined) {
      thisStart = 0;
    }

    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
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
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf


  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1; // Normalize byteOffset

    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }

    byteOffset = +byteOffset; // Coerce to Number.

    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : buffer.length - 1;
    } // Normalize byteOffset: negative offsets start from the end of the buffer


    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

    if (byteOffset >= buffer.length) {
      if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;else return -1;
    } // Normalize val


    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    } // Finally, search either indexOf (if dir is true) or lastIndexOf


    if (internalIsBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1;
      }

      return arrayIndexOf$2(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]

      if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }

      return arrayIndexOf$2(buffer, [val], byteOffset, encoding, dir);
    }

    throw new TypeError('val must be string, number or Buffer');
  }

  function arrayIndexOf$2(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();

      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }

        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }

    var i;

    if (dir) {
      var foundIndex = -1;

      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

      for (i = byteOffset; i >= 0; i--) {
        var found = true;

        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }

        if (found) return i;
      }
    }

    return -1;
  }

  Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };

  Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };

  Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };

  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;

    if (!length) {
      length = remaining;
    } else {
      length = Number(length);

      if (length > remaining) {
        length = remaining;
      }
    } // must be an even number of digits


    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

    if (length > strLen / 2) {
      length = strLen / 2;
    }

    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }

    return i;
  }

  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }

  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }

  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }

  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }

  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }

  Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0; // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0; // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;

      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      } // legacy write(string, encoding, offset, length) - remove in v0.13

    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';
    var loweredCase = false;

    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };

  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray(buf);
    } else {
      return fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;

    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }

            break;

          case 2:
            secondByte = buf[i + 1];

            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }

            break;

          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];

            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }

            break;

          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];

            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }

        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
  } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety


  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;

    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    } // Decode in chunks to avoid "call stack size exceeded".


    var res = '';
    var i = 0;

    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }

    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }

    return ret;
  }

  function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }

    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';

    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }

    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';

    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }

    return res;
  }

  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

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
    var newBuf;

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);

      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf;
  };
  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */


  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }

  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;

    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  };

  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;

    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;

    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  };

  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };

  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;

    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };

  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];

    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }

    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };

  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };

  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };

  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };

  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, true, 23, 4);
  };

  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, false, 23, 4);
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, true, 52, 8);
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, false, 52, 8);
  };

  function checkInt(buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;

    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;

    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;

    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;

    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
  };

  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;

    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }

    return offset + 2;
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }

    return offset + 2;
  };

  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;

    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
  }

  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }

    return offset + 4;
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }

    return offset + 4;
  };

  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;

    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;

    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }

      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;

    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;

    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }

      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }

    return offset + 2;
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }

    return offset + 2;
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }

    return offset + 4;
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }

    return offset + 4;
  };

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
  }

  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }

    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };

  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }

    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }

    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

    if (end > this.length) end = this.length;

    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }

    return len;
  }; // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])


  Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }

      if (val.length === 1) {
        var code = val.charCodeAt(0);

        if (code < 256) {
          val = code;
        }
      }

      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }

      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    } // Invalid ranges are not set to a default, so can range check early.


    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }

    if (end <= start) {
      return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;

    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
      var len = bytes.length;

      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this;
  }; // HELPER FUNCTIONS
  // ================


  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

    if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

    while (str.length % 4 !== 0) {
      str = str + '=';
    }

    return str;
  }

  function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }

  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i); // is surrogate component

      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } // valid lead


          leadSurrogate = codePoint;
          continue;
        } // 2 leads in a row


        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        } // valid surrogate pair


        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null; // encode utf8

      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }

    return bytes;
  }

  function asciiToBytes(str) {
    var byteArray = [];

    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }

    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];

    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray;
  }

  function base64ToBytes(str) {
    return toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }

    return i;
  }

  function isnan(val) {
    return val !== val; // eslint-disable-line no-self-compare
  } // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually


  function isBuffer(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
  }

  function isFastBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  } // For Node v0.10 support. Remove this eventually.


  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
  }

  var inherits$1;

  if (typeof Object.create === 'function') {
    inherits$1 = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits$1 = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }

  var inherits$2 = inherits$1;

  var formatRegExp = /%[sdj%]/g;
  function format(f) {
    if (!isString(f)) {
      var objects = [];

      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }

      return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') return '%';
      if (i >= len) return x;

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

        default:
          return x;
      }
    });

    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }

    return str;
  }
  // Returns a modified function which warns once by default.
  // If --no-deprecation is set, then it is a no-op.

  function deprecate(fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global$2.process)) {
      return function () {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }

    if (process$3.noDeprecation === true) {
      return fn;
    }

    var warned = false;

    function deprecated() {
      if (!warned) {
        if (process$3.throwDeprecation) {
          throw new Error(msg);
        } else if (process$3.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }

        warned = true;
      }

      return fn.apply(this, arguments);
    }

    return deprecated;
  }
  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron)) debugEnviron = process$3.env.NODE_DEBUG || '';
    set = set.toUpperCase();

    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;

        debugs[set] = function () {
          var msg = format.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function () {};
      }
    }

    return debugs[set];
  }
  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */

  /* legacy: obj, showHidden, depth, colors*/

  function inspect(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    }; // legacy...

    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];

    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    } // set default options


    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  } // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

  inspect.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
  }; // Don't use 'blue' not visible on cmd.exe

  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };

  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }

  function stylizeNoColor(str, styleType) {
    return str;
  }

  function arrayToHash(array) {
    var hash = {};
    array.forEach(function (val, idx) {
      hash[val] = true;
    });
    return hash;
  }

  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);

      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }

      return ret;
    } // Primitive types cannot have properties


    var primitive = formatPrimitive(ctx, value);

    if (primitive) {
      return primitive;
    } // Look up the keys of the object.


    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    } // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    } // Some type of object without properties can be shortcutted.


    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }

      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }

      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }

      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '',
        array = false,
        braces = ['{', '}']; // Make Array say that they are Array

    if (isArray$1(value)) {
      array = true;
      braces = ['[', ']'];
    } // Make functions say that they are functions


    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    } // Make RegExps say that they are RegExps


    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    } // Make dates with properties first say the date


    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    } // Make error with message first say the error


    if (isError(value)) {
      base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }

    ctx.seen.push(value);
    var output;

    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function (key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }

  function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }

    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

    if (isNull(value)) return ctx.stylize('null', 'null');
  }

  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }

  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];

    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty$2(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push('');
      }
    }

    keys.forEach(function (key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }

  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
      value: value[key]
    };

    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }

    if (!hasOwnProperty$2(visibleKeys, key)) {
      name = '[' + key + ']';
    }

    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }

        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function (line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function (line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }

    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }

      name = JSON.stringify('' + key);

      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }

  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function (prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  } // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.


  function isArray$1(ar) {
    return Array.isArray(ar);
  }
  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isString(arg) {
    return typeof arg === 'string';
  }
  function isSymbol$2(arg) {
    return typeof arg === 'symbol';
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }
  function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
  }
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined';
  }
  function isBuffer$1(maybeBuf) {
    return isBuffer(maybeBuf);
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }

  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }

  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  } // log is just a thin wrapper to console.log that prepends a timestamp


  function log$1() {
    console.log('%s - %s', timestamp(), format.apply(null, arguments));
  }
  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;

    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }

    return origin;
  }

  function hasOwnProperty$2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var util = {
    inherits: inherits$2,
    _extend: _extend,
    log: log$1,
    isBuffer: isBuffer$1,
    isPrimitive: isPrimitive,
    isFunction: isFunction,
    isError: isError,
    isDate: isDate,
    isObject: isObject,
    isRegExp: isRegExp,
    isUndefined: isUndefined,
    isSymbol: isSymbol$2,
    isString: isString,
    isNumber: isNumber,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull,
    isBoolean: isBoolean,
    isArray: isArray$1,
    inspect: inspect,
    deprecate: deprecate,
    format: format,
    debuglog: debuglog
  };

  var require$$2 = {};

  var node = createCommonjsModule(function (module, exports) {
    /**
     * Module dependencies.
     */

    /**
     * This is the Node.js implementation of `debug()`.
     *
     * Expose `debug()` as the module.
     */
    exports = module.exports = debug;
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    /**
     * Colors.
     */

    exports.colors = [6, 2, 3, 4, 5, 1];
    /**
     * Build up the default `inspectOpts` object from the environment variables.
     *
     *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
     */

    exports.inspectOpts = Object.keys(process$3.env).filter(function (key) {
      return /^debug_/i.test(key);
    }).reduce(function (obj, key) {
      // camel-case
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
        return k.toUpperCase();
      }); // coerce string value into JS value

      var val = process$3.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    /**
     * The file descriptor to write the `debug()` calls to.
     * Set the `DEBUG_FD` env variable to override with another value. i.e.:
     *
     *   $ DEBUG_FD=3 node script.js 3>debug.log
     */

    var fd = parseInt(process$3.env.DEBUG_FD, 10) || 2;

    if (1 !== fd && 2 !== fd) {
      util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
    }

    var stream = 1 === fd ? process$3.stdout : 2 === fd ? process$3.stderr : createWritableStdioStream(fd);
    /**
     * Is stdout a TTY? Colored output is enabled when `true`.
     */

    function useColors() {
      return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    /**
     * Map %o to `util.inspect()`, all on a single line.
     */


    exports.formatters.o = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
        return str.trim();
      }).join(' ');
    };
    /**
     * Map %o to `util.inspect()`, allowing multiple lines if needed.
     */


    exports.formatters.O = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    /**
     * Adds ANSI color escape codes if enabled.
     *
     * @api public
     */


    function formatArgs(args) {
      var name = this.namespace;
      var useColors = this.useColors;

      if (useColors) {
        var c = this.color;
        var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
      } else {
        args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
      }
    }
    /**
     * Invokes `util.format()` with the specified arguments and writes to `stream`.
     */


    function log() {
      return stream.write(util.format.apply(util, arguments) + '\n');
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */


    function save(namespaces) {
      if (null == namespaces) {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process$3.env.DEBUG;
      } else {
        process$3.env.DEBUG = namespaces;
      }
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */


    function load() {
      return process$3.env.DEBUG;
    }
    /**
     * Copied from `node/src/node.js`.
     *
     * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
     * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
     */


    function createWritableStdioStream(fd) {
      var stream;
      var tty_wrap = process$3.binding('tty_wrap'); // Note stream._type is used for test-module-load-list.js

      switch (tty_wrap.guessHandleType(fd)) {
        case 'TTY':
          stream = new tty.WriteStream(fd);
          stream._type = 'tty'; // Hack to have stream not keep the event loop alive.
          // See https://github.com/joyent/node/issues/1726

          if (stream._handle && stream._handle.unref) {
            stream._handle.unref();
          }

          break;

        case 'FILE':
          var fs = require$$2;
          stream = new fs.SyncWriteStream(fd, {
            autoClose: false
          });
          stream._type = 'fs';
          break;

        case 'PIPE':
        case 'TCP':
          var net = require$$2;
          stream = new net.Socket({
            fd: fd,
            readable: false,
            writable: true
          }); // FIXME Should probably have an option in net.Socket to create a
          // stream from an existing fd which is writable only. But for now
          // we'll just add this hack and set the `readable` member to false.
          // Test: ./node test/fixtures/echo.js < /etc/passwd

          stream.readable = false;
          stream.read = null;
          stream._type = 'pipe'; // FIXME Hack to have stream not keep the event loop alive.
          // See https://github.com/joyent/node/issues/1726

          if (stream._handle && stream._handle.unref) {
            stream._handle.unref();
          }

          break;

        default:
          // Probably an error on in uv_guess_handle()
          throw new Error('Implement me. Unknown stream file type!');
      } // For supporting legacy API we put the FD here.


      stream.fd = fd;
      stream._isStdio = true;
      return stream;
    }
    /**
     * Init logic for `debug` instances.
     *
     * Create a new `inspectOpts` object in case `useColors` is set
     * differently for a particular `debug` instance.
     */


    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);

      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    /**
     * Enable namespaces listed in `process.env.DEBUG` initially.
     */


    exports.enable(load());
  });
  var node_1 = node.init;
  var node_2 = node.log;
  var node_3 = node.formatArgs;
  var node_4 = node.save;
  var node_5 = node.load;
  var node_6 = node.useColors;
  var node_7 = node.colors;
  var node_8 = node.inspectOpts;

  var src = createCommonjsModule(function (module) {
    /**
     * Detect Electron renderer process, which is node, but we should
     * treat as a browser.
     */
    if (typeof process$3 !== 'undefined' && process$3.type === 'renderer') {
      module.exports = browser$1;
    } else {
      module.exports = node;
    }
  });

  var Scheduler_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _debug2 = _interopRequireDefault(src);

    var _SchedulingQueue3 = _interopRequireDefault(SchedulingQueue_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var log = (0, _debug2.default)('wavesjs:masters');

    function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
    /**
     * The `Scheduler` class implements a master for `TimeEngine` instances
     * that implement the *scheduled* interface (such as the `Metronome` and
     * `GranularEngine`).
     *
     * A `Scheduler` can also schedule simple callback functions.
     * The class is based on recursive calls to `setTimeout` and uses the time
     * returned by the `getTimeFunction` passed as first argument as a logical time
     * passed to the `advanceTime` methods of the scheduled engines or to the
     * scheduled callback functions.
     * It extends the `SchedulingQueue` class that itself includes a `PriorityQueue`
     * to assure the order of the scheduled engines (see `SimpleScheduler` for a
     * simplified scheduler implementation without `PriorityQueue`).
     *
     * {@link https://rawgit.com/wavesjs/waves-masters/master/examples/scheduler/index.html}
     *
     * @param {Function} getTimeFunction - Function that must return a time in second.
     * @param {Object} [options={}] - default options.
     * @param {Number} [options.period=0.025] - period of the scheduler.
     * @param {Number} [options.lookahead=0.1] - lookahead of the scheduler.
     * @param {Number} [options.currentTimeToAudioTimeFunction] - function that convert
     *  `currentTime` to `audioTime`. Defaults to no-op.
     *
     * @see TimeEngine
     * @see SimpleScheduler
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => preformance.now() / 1000;
     * const scheduler = new masters.Scheduler(getTimeFunction);
     *
     * scheduler.add(myEngine);
     */


    var Scheduler = function (_SchedulingQueue) {
      (0, _inherits3.default)(Scheduler, _SchedulingQueue);

      function Scheduler(getTimeFunction) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, Scheduler);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Scheduler.__proto__ || (0, _getPrototypeOf2.default)(Scheduler)).call(this));

        if (!isFunction(getTimeFunction)) throw new Error('Invalid argument `getTimeFunction`');
        _this.getTimeFunction = getTimeFunction;
        _this.__currentTime = null;
        _this.__nextTime = Infinity;
        _this.__timeout = null;
        /**
         * scheduler (setTimeout) period
         * @type {Number}
         * @name period
         * @memberof Scheduler
         * @instance
         */

        _this.period = options.period || 0.025;
        /**
         * scheduler lookahead time (> period)
         * @type {Number}
         * @name lookahead
         * @memberof Scheduler
         * @instance
         */

        _this.lookahead = options.lookahead || 0.1;

        _this._currentTimeToAudioTimeFunction = options.currentTimeToAudioTimeFunction || function (currentTime) {
          return currentTime;
        };

        return _this;
      } // setTimeout scheduling loop


      (0, _createClass3.default)(Scheduler, [{
        key: '__tick',
        value: function __tick() {
          var currentTime = this.getTimeFunction();
          var time = this.__nextTime;
          this.__timeout = null;

          while (time <= currentTime + this.lookahead) {
            this.__currentTime = time;
            time = this.advanceTime(time);
          }

          this.__currentTime = null;
          this.resetTime(time);
        }
      }, {
        key: 'resetTime',
        value: function resetTime() {
          var _this2 = this;

          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentTime;

          if (this.master) {
            this.master.reset(this, time);
          } else {
            if (this.__timeout) {
              clearTimeout(this.__timeout);
              this.__timeout = null;
            }

            if (time !== Infinity) {
              if (this.__nextTime === Infinity) log('Scheduler Start');
              var timeOutDelay = Math.max(time - this.lookahead - this.getTimeFunction(), this.period);
              this.__timeout = setTimeout(function () {
                _this2.__tick();
              }, Math.ceil(timeOutDelay * 1000));
            } else if (this.__nextTime !== Infinity) {
              log('Scheduler Stop');
            }

            this.__nextTime = time;
          }
        }
        /**
         * Scheduler current logical time.
         *
         * @name currentTime
         * @type {Number}
         * @memberof Scheduler
         * @instance
         */

      }, {
        key: 'currentTime',
        get: function get() {
          // @note - can this really happen, and if yes, in which case?
          if (this.master) return this.master.currentTime;
          return this.__currentTime || this.getTimeFunction() + this.lookahead;
        }
        /**
         * Scheduler current audio time according to `currentTime`
         *
         * @name audioTime
         * @type {Number}
         * @memberif Scheduler
         * @instance
         */

      }, {
        key: 'audioTime',
        get: function get() {
          // @note - add this as in
          if (this.master) return this.master.audioTime;
          return this._currentTimeToAudioTimeFunction(this.currentTime);
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return undefined;
        } // inherited from scheduling queue

        /**
         * Add a TimeEngine or a simple callback function to the scheduler at an
         * optionally given time. Whether the add method is called with a TimeEngine
         * or a callback function it returns a TimeEngine that can be used as argument
         * of the methods remove and resetEngineTime. A TimeEngine added to a scheduler
         * has to implement the scheduled interface. The callback function added to a
         * scheduler will be called at the given time and with the given time as
         * argument. The callback can return a new scheduling time (i.e. the next
         * time when it will be called) or it can return Infinity to suspend scheduling
         * without removing the function from the scheduler. A function that does
         * not return a value (or returns null or 0) is removed from the scheduler
         * and cannot be used as argument of the methods remove and resetEngineTime
         * anymore.
         *
         * @name add
         * @function
         * @memberof Scheduler
         * @instance
         * @param {TimeEngine|Function} engine - Engine to add to the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

        /**
         * Remove a TimeEngine from the scheduler that has been added to the
         * scheduler using the add method.
         *
         * @name add
         * @function
         * @memberof Scheduler
         * @instance
         * @param {TimeEngine} engine - Engine to remove from the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

        /**
         * Reschedule a scheduled time engine at a given time.
         *
         * @name resetEngineTime
         * @function
         * @memberof Scheduler
         * @instance
         * @param {TimeEngine} engine - Engine to reschedule
         * @param {Number} time - Schedule time
         */

        /**
         * Remove all scheduled callbacks and engines from the scheduler.
         *
         * @name clear
         * @function
         * @memberof Scheduler
         * @instance
         */

      }]);
      return Scheduler;
    }(_SchedulingQueue3.default);

    exports.default = Scheduler;
  });
  unwrapExports(Scheduler_1);

  var SimpleScheduler_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _set2 = _interopRequireDefault(set$2);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _debug2 = _interopRequireDefault(src);

    var _TimeEngine2 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var log = (0, _debug2.default)('wavesjs:masters');

    function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
    /**
     *
     *
     *
     * The SimpleScheduler class implements a simplified master for time engines
     * (see TimeEngine) that implement the scheduled interface
     * such as the Metronome and the GranularEngine. The API and funtionalities of
     * the SimpleScheduler class are identical to the Scheduler class. But, other
     * than the Scheduler, the SimpleScheduler class does not guarantee the order
     * of events (i.e. calls to the advanceTime method of scheduled time engines
     * and to scheduled callback functions) within a scheduling period (see period
     * attribute).
     *
     * {@link https://rawgit.com/wavesjs/waves-masters/master/examples/scheduler/index.html}
     *
     * @param {Function} getTimeFunction - Function that must return a time in second.
     * @param {Object} [options={}] - default options
     * @param {Number} [options.period=0.025] - period of the scheduler.
     * @param {Number} [options.lookahead=0.1] - lookahead of the scheduler.
     *
     * @see TimeEngine
     * @see Scheduler
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => preformance.now() / 1000;
     * const scheduler = new masters.SimpleScheduler(getTimeFunction);
     *
     * scheduler.add(myEngine);
     */


    var SimpleScheduler = function () {
      function SimpleScheduler(getTimeFunction) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, SimpleScheduler);
        if (!isFunction(getTimeFunction)) throw new Error('Invalid argument `getTimeFunction`');
        this.getTimeFunction = getTimeFunction;
        this.__engines = new _set2.default();
        this.__schedEngines = [];
        this.__schedTimes = [];
        this.__currentTime = null;
        this.__timeout = null;
        /**
         * scheduler (setTimeout) period
         * @type {Number}
         * @name period
         * @memberof Scheduler
         * @instance
         */

        this.period = options.period || 0.025;
        /**
         * scheduler lookahead time (> period)
         * @type {Number}
         * @name lookahead
         * @memberof Scheduler
         * @instance
         */

        this.lookahead = options.lookahead || 0.1;

        this._currentTimeToAudioTimeFunction = options.currentTimeToAudioTimeFunction || function (currentTime) {
          return currentTime;
        };
      }

      (0, _createClass3.default)(SimpleScheduler, [{
        key: '__scheduleEngine',
        value: function __scheduleEngine(engine, time) {
          this.__schedEngines.push(engine);

          this.__schedTimes.push(time);
        }
      }, {
        key: '__rescheduleEngine',
        value: function __rescheduleEngine(engine, time) {
          var index = this.__schedEngines.indexOf(engine);

          if (index >= 0) {
            if (time !== Infinity) {
              this.__schedTimes[index] = time;
            } else {
              this.__schedEngines.splice(index, 1);

              this.__schedTimes.splice(index, 1);
            }
          } else if (time < Infinity) {
            this.__schedEngines.push(engine);

            this.__schedTimes.push(time);
          }
        }
      }, {
        key: '__unscheduleEngine',
        value: function __unscheduleEngine(engine) {
          var index = this.__schedEngines.indexOf(engine);

          if (index >= 0) {
            this.__schedEngines.splice(index, 1);

            this.__schedTimes.splice(index, 1);
          }
        }
      }, {
        key: '__resetTick',
        value: function __resetTick() {
          if (this.__schedEngines.length > 0) {
            if (!this.__timeout) {
              log('SimpleScheduler Start');

              this.__tick();
            }
          } else if (this.__timeout) {
            log('SimpleScheduler Stop');
            clearTimeout(this.__timeout);
            this.__timeout = null;
          }
        }
      }, {
        key: '__tick',
        value: function __tick() {
          var _this = this;

          var currentTime = this.getTimeFunction();
          var i = 0;

          while (i < this.__schedEngines.length) {
            var engine = this.__schedEngines[i];
            var time = this.__schedTimes[i];

            while (time && time <= currentTime + this.lookahead) {
              time = Math.max(time, currentTime);
              this.__currentTime = time;
              time = engine.advanceTime(time);
            }

            if (time && time < Infinity) {
              this.__schedTimes[i++] = time;
            } else {
              this.__unscheduleEngine(engine); // remove engine from scheduler


              if (!time) {
                engine.master = null;

                this.__engines.delete(engine);
              }
            }
          }

          this.__currentTime = null;
          this.__timeout = null;

          if (this.__schedEngines.length > 0) {
            this.__timeout = setTimeout(function () {
              _this.__tick();
            }, this.period * 1000);
          }
        }
        /**
         * Scheduler current logical time.
         *
         * @name currentTime
         * @type {Number}
         * @memberof Scheduler
         * @instance
         */

      }, {
        key: 'defer',
        // call a function at a given time

        /**
         * Defer the execution of a function at a given time.
         *
         * @param {Function} fun - Function to defer
         * @param {Number} [time=this.currentTime] - Schedule time
         */
        value: function defer(fun) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!(fun instanceof Function)) throw new Error("object cannot be defered by scheduler");
          this.add({
            advanceTime: function advanceTime(time) {
              fun(time);
            } // make sur that the advanceTime method does not returm anything

          }, time);
        }
        /**
         * Add a TimeEngine function to the scheduler at an optionally given time.
         *
         * @param {TimeEngine} engine - Engine to add to the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

      }, {
        key: 'add',
        value: function add(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!_TimeEngine2.default.implementsScheduled(engine)) throw new Error("object cannot be added to scheduler");
          if (engine.master) throw new Error("object has already been added to a master"); // set master and add to array

          engine.master = this;

          this.__engines.add(engine); // schedule engine


          this.__scheduleEngine(engine, time);

          this.__resetTick();
        }
        /**
         * Remove a TimeEngine from the scheduler that has been added to the
         * scheduler using the add method.
         *
         * @param {TimeEngine} engine - Engine to remove from the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

      }, {
        key: 'remove',
        value: function remove(engine) {
          if (!engine.master || engine.master !== this) throw new Error("engine has not been added to this scheduler"); // reset master and remove from array

          engine.master = null;

          this.__engines.delete(engine); // unschedule engine


          this.__unscheduleEngine(engine);

          this.__resetTick();
        }
        /**
         * Reschedule a scheduled time engine at a given time.
         *
         * @param {TimeEngine} engine - Engine to reschedule
         * @param {Number} time - Schedule time
         */

      }, {
        key: 'resetEngineTime',
        value: function resetEngineTime(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;

          this.__rescheduleEngine(engine, time);

          this.__resetTick();
        }
        /**
         * Check whether a given engine is scheduled.
         *
         * @param {TimeEngine} engine - Engine to check
         */

      }, {
        key: 'has',
        value: function has(engine) {
          return this.__engines.has(engine);
        }
        /**
         * Remove all engines from the scheduler.
         */

      }, {
        key: 'clear',
        value: function clear() {
          if (this.__timeout) {
            clearTimeout(this.__timeout);
            this.__timeout = null;
          }

          this.__schedEngines.length = 0;
          this.__schedTimes.length = 0;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__currentTime || this.getTimeFunction() + this.lookahead;
        }
        /**
         * Scheduler current audio time according to `currentTime`
         *
         * @name audioTime
         * @type {Number}
         * @memberif Scheduler
         * @instance
         */

      }, {
        key: 'audioTime',
        get: function get() {
          // @note - add this as in
          if (this.master) return this.master.audioTime;
          return this._currentTimeToAudioTimeFunction(this.currentTime);
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return undefined;
        }
      }]);
      return SimpleScheduler;
    }();

    exports.default = SimpleScheduler;
  });
  unwrapExports(SimpleScheduler_1);

  var dist = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'TimeEngine', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(TimeEngine_1).default;
      }
    });
    Object.defineProperty(exports, 'PriorityQueue', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(PriorityQueue_1).default;
      }
    });
    Object.defineProperty(exports, 'SchedulingQueue', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(SchedulingQueue_1).default;
      }
    });
    Object.defineProperty(exports, 'PlayControl', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(PlayControl_1).default;
      }
    });
    Object.defineProperty(exports, 'Transport', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(Transport_1).default;
      }
    });
    Object.defineProperty(exports, 'Scheduler', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(Scheduler_1).default;
      }
    });
    Object.defineProperty(exports, 'SimpleScheduler', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(SimpleScheduler_1).default;
      }
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });
  unwrapExports(dist);

  var AudioTimeEngine_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _audioContext2 = _interopRequireDefault(audioContext_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * This is the base class for all audio related time engine components. It is
     * used to handle audio related events such as the playback of a media stream.
     * It extends the TimeEngine class by the standard web audio node methods
     * connect and disconnect.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/audio-time-engine/index.html}
     *
     * @extends TimeEngine
     * @example
     * import audio from 'waves-audio';
     *
     * class MyEngine extends audio.AudioTimeEngine {
     *   constructor() {
     *     super();
     *     // ...
     *   }
     * }
     */


    var AudioTimeEngine = function (_TimeEngine) {
      (0, _inherits3.default)(AudioTimeEngine, _TimeEngine);

      function AudioTimeEngine() {
        var audioContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _audioContext2.default;
        (0, _classCallCheck3.default)(this, AudioTimeEngine);
        /**
         * Audio context used by the TimeEngine, default to the global audioContext
         *
         * @name audioContext
         * @type AudioContext
         * @memberof AudioTimeEngine
         * @see audioContext
         */

        var _this = (0, _possibleConstructorReturn3.default)(this, (AudioTimeEngine.__proto__ || (0, _getPrototypeOf2.default)(AudioTimeEngine)).call(this));

        _this.audioContext = audioContext;
        /**
         * Output audio node. By default the connect method connects a given node
         * to this output node.
         *
         * @name outputNode
         * @type AudioNode
         * @memberof AudioTimeEngine
         * @default null
         */

        _this.outputNode = null;
        return _this;
      }
      /**
       * Connect to an audio node (e.g. audioContext.destination)
       *
       * @param {AudioNode} target - Target audio node
       */


      (0, _createClass3.default)(AudioTimeEngine, [{
        key: 'connect',
        value: function connect(target) {
          this.outputNode.connect(target);
          return this;
        }
        /**
         * Disconnect from an audio node (e.g. audioContext.destination). If undefined
         * disconnect from all target nodes.
         *
         * @param {AudioNode} target - Target audio node.
         */

      }, {
        key: 'disconnect',
        value: function disconnect(connection) {
          this.outputNode.disconnect(connection);
          return this;
        }
      }]);
      return AudioTimeEngine;
    }(dist.TimeEngine);

    exports.default = AudioTimeEngine;
  });
  unwrapExports(AudioTimeEngine_1);

  var GranularEngine_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _AudioTimeEngine3 = _interopRequireDefault(AudioTimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function optOrDef(opt, def) {
      if (opt !== undefined) return opt;
      return def;
    }
    /**
     * Granular synthesis TimeEngine implementing the scheduled interface.
     * The grain position (grain onset or center time in the audio buffer) is
     * optionally determined by the engine's currentPosition attribute.
     *
     * Example that shows a `GranularEngine` (with a few parameter controls) driven
     * by a `Scheduler` and a `PlayControl`:
     * {@link https://rawgit.com/wavesjs/waves-audio/master/examples/granular-engine/index.html}
     *
     * @extends AudioTimeEngine
     * @example
     * import * as audio from 'waves-audio';
     * const scheduler = audio.getScheduler();
     * const granularEngine = new audio.GranularEngine();
     *
     * scheduler.add(granularEngine);
     *
     *
     * @param {Object} options={} - Parameters
     * @param {AudioBuffer} [options.buffer=null] - Audio buffer
     * @param {Number} [options.periodAbs=0.01] - Absolute grain period in sec
     * @param {Number} [options.periodRel=0] - Grain period relative to absolute
     *  duration
     * @param {Number} [options.periodVar=0] - Amout of random grain period
     *  variation relative to grain period
     * @param {Number} [options.periodMin=0.001] - Minimum grain period
     * @param {Number} [options.position=0] - Grain position (onset time in audio
     *  buffer) in sec
     * @param {Number} [options.positionVar=0.003] - Amout of random grain position
     *  variation in sec
     * @param {Number} [options.durationAbs=0.1] - Absolute grain duration in sec
     * @param {Number} [options.durationRel=0] - Grain duration relative to grain
     *  period (overlap)
     * @param {Number} [options.attackAbs=0] - Absolute attack time in sec
     * @param {Number} [options.attackRel=0.5] - Attack time relative to grain duration
     * @param {String} [options.attackShape='lin'] - Shape of attack
     * @param {Number} [options.releaseAbs=0] - Absolute release time in sec
     * @param {Number} [options.releaseRel=0.5] - Release time relative to grain duration
     * @param {Number} [options.releaseShape='lin'] - Shape of release
     * @param {String} [options.expRampOffset=0.0001] - Offset (start/end value)
     *  for exponential attack/release
     * @param {Number} [options.resampling=0] - Grain resampling in cent
     * @param {Number} [options.resamplingVar=0] - Amout of random resampling variation in cent
     * @param {Number} [options.gain=1] - Linear gain factor
     * @param {Boolean} [options.centered=true] - Whether the grain position refers
     *  to the center of the grain (or the beginning)
     * @param {Boolean} [options.cyclic=false] - Whether the audio buffer and grain
     *  position are considered as cyclic
     * @param {Number} [options.wrapAroundExtension=0] - Portion at the end of the
     *  audio buffer that has been copied from the beginning to assure cyclic behavior
     */


    var GranularEngine = function (_AudioTimeEngine) {
      (0, _inherits3.default)(GranularEngine, _AudioTimeEngine);

      function GranularEngine() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, GranularEngine);
        /**
         * Audio buffer
         *
         * @type {AudioBuffer}
         * @name buffer
         * @default null
         * @memberof GranularEngine
         * @instance
         */

        var _this = (0, _possibleConstructorReturn3.default)(this, (GranularEngine.__proto__ || (0, _getPrototypeOf2.default)(GranularEngine)).call(this, options.audioContext));

        _this.buffer = optOrDef(options.buffer, null);
        /**
         * Absolute grain period in sec
         *
         * @type {Number}
         * @name periodAbs
         * @default 0.01
         * @memberof GranularEngine
         * @instance
         */

        _this.periodAbs = optOrDef(options.periodAbs, 0.01);
        /**
         * Grain period relative to absolute duration
         *
         * @type {Number}
         * @name periodRel
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.periodRel = optOrDef(options.periodRel, 0);
        /**
         * Amout of random grain period variation relative to grain period
         *
         * @type {Number}
         * @name periodVar
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.periodVar = optOrDef(options.periodVar, 0);
        /**
         * Minimum grain period
         *
         * @type {Number}
         * @name periodMin
         * @default 0.001
         * @memberof GranularEngine
         * @instance
         */

        _this.periodMin = optOrDef(options.periodMin, 0.001);
        /**
         * Grain position (onset time in audio buffer) in sec
         *
         * @type {Number}
         * @name position
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.position = optOrDef(options.position, 0);
        /**
         * Amout of random grain position variation in sec
         *
         * @type {Number}
         * @name positionVar
         * @default 0.003
         * @memberof GranularEngine
         * @instance
         */

        _this.positionVar = optOrDef(options.positionVar, 0.003);
        /**
         * Absolute grain duration in sec
         *
         * @type {Number}
         * @name durationAbs
         * @default 0.1
         * @memberof GranularEngine
         * @instance
         */

        _this.durationAbs = optOrDef(options.durationAbs, 0.1); // absolute grain duration

        /**
         * Grain duration relative to grain period (overlap)
         *
         * @type {Number}
         * @name durationRel
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.durationRel = optOrDef(options.durationRel, 0);
        /**
         * Absolute attack time in sec
         *
         * @type {Number}
         * @name attackAbs
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.attackAbs = optOrDef(options.attackAbs, 0);
        /**
         * Attack time relative to grain duration
         *
         * @type {Number}
         * @name attackRel
         * @default 0.5
         * @memberof GranularEngine
         * @instance
         */

        _this.attackRel = optOrDef(options.attackRel, 0.5);
        /**
         * Shape of attack ('lin' for linear ramp, 'exp' for exponential ramp)
         *
         * @type {String}
         * @name attackShape
         * @default 'lin'
         * @memberof GranularEngine
         * @instance
         */

        _this.attackShape = optOrDef(options.attackShape, 'lin');
        /**
         * Absolute release time in sec
         *
         * @type {Number}
         * @name releaseAbs
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.releaseAbs = optOrDef(options.releaseAbs, 0);
        /**
         * Release time relative to grain duration
         *
         * @type {Number}
         * @name releaseRel
         * @default 0.5
         * @memberof GranularEngine
         * @instance
         */

        _this.releaseRel = optOrDef(options.releaseRel, 0.5);
        /**
         * Shape of release ('lin' for linear ramp, 'exp' for exponential ramp)
         *
         * @type {String}
         * @name releaseShape
         * @default 'lin'
         * @memberof GranularEngine
         * @instance
         */

        _this.releaseShape = optOrDef(options.releaseShape, 'lin');
        /**
         * Offset (start/end value) for exponential attack/release
         *
         * @type {Number}
         * @name expRampOffset
         * @default 0.0001
         * @memberof GranularEngine
         * @instance
         */

        _this.expRampOffset = optOrDef(options.expRampOffset, 0.0001);
        /**
         * Grain resampling in cent
         *
         * @type {Number}
         * @name resampling
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.resampling = optOrDef(options.resampling, 0);
        /**
         * Amout of random resampling variation in cent
         *
         * @type {Number}
         * @name resamplingVar
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.resamplingVar = optOrDef(options.resamplingVar, 0);
        /**
         * Linear gain factor
         *
         * @type {Number}
         * @name gain
         * @default 1
         * @memberof GranularEngine
         * @instance
         */

        _this.gain = optOrDef(options.gain, 1);
        /**
         * Whether the grain position refers to the center of the grain (or the beginning)
         *
         * @type {Boolean}
         * @name centered
         * @default true
         * @memberof GranularEngine
         * @instance
         */

        _this.centered = optOrDef(options.centered, true);
        /**
         * Whether the audio buffer and grain position are considered as cyclic
         *
         * @type {Boolean}
         * @name cyclic
         * @default false
         * @memberof GranularEngine
         * @instance
         */

        _this.cyclic = optOrDef(options.cyclic, false);
        /**
         * Portion at the end of the audio buffer that has been copied from the
         * beginning to assure cyclic behavior
         *
         * @type {Number}
         * @name wrapAroundExtension
         * @default 0
         * @memberof GranularEngine
         * @instance
         */

        _this.wrapAroundExtension = optOrDef(options.wrapAroundExtension, 0);
        _this.outputNode = _this.audioContext.createGain();
        return _this;
      }
      /**
       * Get buffer duration (excluding wrapAroundExtension)
       *
       * @type {Number}
       * @name bufferDuration
       * @memberof GranularEngine
       * @instance
       * @readonly
       */


      (0, _createClass3.default)(GranularEngine, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          time = Math.max(time, this.audioContext.currentTime);
          return time + this.trigger(time);
        }
        /**
         * Trigger a grain. This function can be called at any time (whether the
         * engine is scheduled or not) to generate a single grain according to the
         * current grain parameters.
         *
         * @param {Number} time - grain synthesis audio time
         * @return {Number} - period to next grain
         */

      }, {
        key: 'trigger',
        value: function trigger(time) {
          var audioContext = this.audioContext;
          var grainTime = time || audioContext.currentTime;
          var grainPeriod = this.periodAbs;
          var grainPosition = this.currentPosition;
          var grainDuration = this.durationAbs;

          if (this.buffer) {
            var resamplingRate = 1.0; // calculate resampling

            if (this.resampling !== 0 || this.resamplingVar > 0) {
              var randomResampling = (Math.random() - 0.5) * 2.0 * this.resamplingVar;
              resamplingRate = Math.pow(2.0, (this.resampling + randomResampling) / 1200.0);
            }

            grainPeriod += this.periodRel * grainDuration;
            grainDuration += this.durationRel * grainPeriod; // grain period randon variation

            if (this.periodVar > 0.0) grainPeriod += 2.0 * (Math.random() - 0.5) * this.periodVar * grainPeriod; // center grain

            if (this.centered) grainPosition -= 0.5 * grainDuration; // randomize grain position

            if (this.positionVar > 0) grainPosition += (2.0 * Math.random() - 1) * this.positionVar;
            var bufferDuration = this.bufferDuration; // wrap or clip grain position and duration into buffer duration

            if (grainPosition < 0 || grainPosition >= bufferDuration) {
              if (this.cyclic) {
                var cycles = grainPosition / bufferDuration;
                grainPosition = (cycles - Math.floor(cycles)) * bufferDuration;
                if (grainPosition + grainDuration > this.buffer.duration) grainDuration = this.buffer.duration - grainPosition;
              } else {
                if (grainPosition < 0) {
                  grainTime -= grainPosition;
                  grainDuration += grainPosition;
                  grainPosition = 0;
                }

                if (grainPosition + grainDuration > bufferDuration) grainDuration = bufferDuration - grainPosition;
              }
            } // make grain


            if (this.gain > 0 && grainDuration >= 0.001) {
              // make grain envelope
              var envelope = audioContext.createGain();
              var attack = this.attackAbs + this.attackRel * grainDuration;
              var release = this.releaseAbs + this.releaseRel * grainDuration;

              if (attack + release > grainDuration) {
                var factor = grainDuration / (attack + release);
                attack *= factor;
                release *= factor;
              }

              var attackEndTime = grainTime + attack;
              var grainEndTime = grainTime + grainDuration / resamplingRate;
              var releaseStartTime = grainEndTime - release;
              envelope.gain.value = 0;

              if (this.attackShape === 'lin') {
                envelope.gain.setValueAtTime(0.0, grainTime);
                envelope.gain.linearRampToValueAtTime(this.gain, attackEndTime);
              } else {
                envelope.gain.setValueAtTime(this.expRampOffset, grainTime);
                envelope.gain.exponentialRampToValueAtTime(this.gain, attackEndTime);
              }

              if (releaseStartTime > attackEndTime) envelope.gain.setValueAtTime(this.gain, releaseStartTime);

              if (this.releaseShape === 'lin') {
                envelope.gain.linearRampToValueAtTime(0.0, grainEndTime);
              } else {
                envelope.gain.exponentialRampToValueAtTime(this.expRampOffset, grainEndTime);
              }

              envelope.connect(this.outputNode); // make source

              var source = audioContext.createBufferSource();
              source.buffer = this.buffer;
              source.playbackRate.value = resamplingRate;
              source.connect(envelope);
              source.start(grainTime, grainPosition);
              source.stop(grainEndTime);
            }
          }

          return Math.max(this.periodMin, grainPeriod);
        }
      }, {
        key: 'bufferDuration',
        get: function get() {
          if (this.buffer) {
            var bufferDuration = this.buffer.duration;
            if (this.wrapAroundExtension) bufferDuration -= this.wrapAroundExtension;
            return bufferDuration;
          }

          return 0;
        }
        /**
         * Current position
         *
         * @type {Number}
         * @name currentPosition
         * @memberof GranularEngine
         * @instance
         * @readonly
         */

      }, {
        key: 'currentPosition',
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return this.position;
        }
      }]);
      return GranularEngine;
    }(_AudioTimeEngine3.default);

    exports.default = GranularEngine;
  });
  unwrapExports(GranularEngine_1);

  var Metronome_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _AudioTimeEngine3 = _interopRequireDefault(AudioTimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function optOrDef(opt, def) {
      if (opt !== undefined) return opt;
      return def;
    }
    /**
     * Metronome audio engine. It extends Time Engine as a transported interface.
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/metronome/index.html}
     *
     * @extends AudioTimeEngine
     * @example
     * import * as audio from 'waves-audio';
     * const scheduler = audio.getScheduler();
     * const metronome = new audio.Metronome({period: 0.333});
     *
     * scheduler.add(metronome);
     *
     * @param {Object} [options={}] - Default options
     * @param {Number} [options.period=1] - Metronome period
     * @param {Number} [options.clickFreq=600] - Metronome click frequency
     * @param {Number} [options.clickAttack=0.002] - Metronome click attack time
     * @param {Number} [options.clickRelease=0.098] - Metronome click release time
     * @param {Number} [options.gain=1] - Gain
     */


    var Metronome = function (_AudioTimeEngine) {
      (0, _inherits3.default)(Metronome, _AudioTimeEngine);

      function Metronome() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, Metronome);
        /**
         * Metronome period
         * @type {Number}
         * @private
         */

        var _this = (0, _possibleConstructorReturn3.default)(this, (Metronome.__proto__ || (0, _getPrototypeOf2.default)(Metronome)).call(this, options.audioContext));

        _this.__period = optOrDef(options.period, 1);
        /**
         * Metronome click frequency
         *
         * @type {Number}
         * @memberof Metronome
         * @name clickFreq
         * @instance
         */

        _this.clickFreq = optOrDef(options.clickFreq, 600);
        /**
         * Metronome click attack time
         *
         * @type {Number}
         * @memberof Metronome
         * @name clickAttack
         * @instance
         */

        _this.clickAttack = optOrDef(options.clickAttack, 0.002);
        /**
         * Metronome click release time
         *
         * @type {Number}
         * @memberof Metronome
         * @name clickRelease
         * @instance
         */

        _this.clickRelease = optOrDef(options.clickRelease, 0.098);
        _this.__lastTime = 0;
        _this.__phase = 0;
        _this.__gainNode = _this.audioContext.createGain();
        _this.__gainNode.gain.value = optOrDef(options.gain, 1);
        _this.outputNode = _this.__gainNode;
        return _this;
      } // TimeEngine method (scheduled interface)


      (0, _createClass3.default)(Metronome, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          this.trigger(time);
          this.__lastTime = time;
          return time + this.__period;
        } // TimeEngine method (transported interface)

      }, {
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          if (this.__period > 0) {
            var nextPosition = (Math.floor(position / this.__period) + this.__phase) * this.__period;

            if (speed > 0 && nextPosition < position) nextPosition += this.__period;else if (speed < 0 && nextPosition > position) nextPosition -= this.__period;
            return nextPosition;
          }

          return Infinity * speed;
        } // TimeEngine method (transported interface)

      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          this.trigger(time);
          if (speed < 0) return position - this.__period;
          return position + this.__period;
        }
        /**
         * Trigger metronome click
         * @param {Number} time metronome click synthesis audio time
         */

      }, {
        key: 'trigger',
        value: function trigger(time) {
          var audioContext = this.audioContext;
          var clickAttack = this.clickAttack;
          var clickRelease = this.clickRelease;
          var env = audioContext.createGain();
          env.gain.value = 0.0;
          env.gain.setValueAtTime(0, time);
          env.gain.linearRampToValueAtTime(1.0, time + clickAttack);
          env.gain.exponentialRampToValueAtTime(0.0000001, time + clickAttack + clickRelease);
          env.gain.setValueAtTime(0, time);
          env.connect(this.outputNode);
          var osc = audioContext.createOscillator();
          osc.frequency.value = this.clickFreq;
          osc.start(time);
          osc.stop(time + clickAttack + clickRelease);
          osc.connect(env);
        }
        /**
         * linear gain factor
         *
         * @type {Number}
         * @name gain
         * @memberof Metronome
         * @instance
         */

      }, {
        key: 'gain',
        set: function set(value) {
          this.__gainNode.gain.value = value;
        },
        get: function get() {
          return this.__gainNode.gain.value;
        }
        /**
         * metronome period
         *
         * @type {Number}
         * @name period
         * @memberof Metronome
         * @instance
         */

      }, {
        key: 'period',
        set: function set(period) {
          this.__period = period;
          var master = this.master;

          if (master) {
            if (master.resetEngineTime) master.resetEngineTime(this, this.__lastTime + period);else if (master.resetEnginePosition) master.resetEnginePosition(this);
          }
        },
        get: function get() {
          return this.__period;
        }
        /**
         * Set phase parameter (available only when 'transported'), should be
         * between [0, 1[
         *
         * @type {Number}
         * @name phase
         * @memberof Metronome
         * @instance
         */

      }, {
        key: 'phase',
        set: function set(phase) {
          this.__phase = phase - Math.floor(phase);
          var master = this.master;
          if (master && master.resetEnginePosition !== undefined) master.resetEnginePosition(this);
        },
        get: function get() {
          return this.__phase;
        }
      }]);
      return Metronome;
    }(_AudioTimeEngine3.default);

    exports.default = Metronome;
  });
  unwrapExports(Metronome_1);

  var PlayerEngine_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _AudioTimeEngine3 = _interopRequireDefault(AudioTimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function optOrDef(opt, def) {
      if (opt !== undefined) return opt;
      return def;
    }
    /**
     * Used with a buffer to serve audio files.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/player-engine/index.html}
     *
     * @extends AudioTimeEngine
     * @example
     * import * as audio from 'waves-audio';
     * const playerEngine = audio.PlayerEngine();
     * const playControl = new audio.PlayControl(playerEngine);
     *
     * playControl.start();
     *
     * @param {Object} [options={}] - Default options
     * @param {Number} [options.buffer=1] - Audio buffer
     * @param {Number} [options.fadeTime=0.005] - Fade time for chaining segments
     * @param {Number} [options.cyclic=false] - Loop mode
     * @param {Number} [options.gain=1] - Gain
     */


    var PlayerEngine = function (_AudioTimeEngine) {
      (0, _inherits3.default)(PlayerEngine, _AudioTimeEngine);

      function PlayerEngine() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, PlayerEngine);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PlayerEngine.__proto__ || (0, _getPrototypeOf2.default)(PlayerEngine)).call(this, options.audioContext));

        _this.transport = null; // set when added to transporter

        /**
         * Audio buffer
         *
         * @type {AudioBuffer}
         * @name buffer
         * @memberof PlayerEngine
         * @instance
         * @default null
         */

        _this.buffer = optOrDef(options.buffer, null);
        /**
         * Fade time for chaining segments (e.g. in start, stop, and seek)
         *
         * @type {Number}
         * @name fadeTime
         * @memberof PlayerEngine
         * @instance
         * @default 0.005
         */

        _this.fadeTime = optOrDef(options.fadeTime, 0.005);
        _this.__time = 0;
        _this.__position = 0;
        _this.__speed = 0;
        _this.__bufferSource = null;
        _this.__envNode = null;
        _this.__gainNode = _this.audioContext.createGain();
        _this.__gainNode.gain.value = optOrDef(options.gain, 1);
        _this.__cyclic = optOrDef(options.cyclic, false);
        _this.outputNode = _this.__gainNode;
        return _this;
      }

      (0, _createClass3.default)(PlayerEngine, [{
        key: '__start',
        value: function __start(time, position, speed) {
          var audioContext = this.audioContext;

          if (this.buffer) {
            var bufferDuration = this.buffer.duration;

            if (this.__cyclic && (position < 0 || position >= bufferDuration)) {
              var phase = position / bufferDuration;
              position = (phase - Math.floor(phase)) * bufferDuration;
            }

            if (position >= 0 && position < bufferDuration && speed > 0) {
              this.__envNode = audioContext.createGain();

              this.__envNode.gain.setValueAtTime(0, time);

              this.__envNode.gain.linearRampToValueAtTime(1, time + this.fadeTime);

              this.__envNode.connect(this.__gainNode);

              this.__bufferSource = audioContext.createBufferSource();
              this.__bufferSource.buffer = this.buffer;
              this.__bufferSource.playbackRate.value = speed;
              this.__bufferSource.loop = this.__cyclic;
              this.__bufferSource.loopStart = 0;
              this.__bufferSource.loopEnd = bufferDuration;

              this.__bufferSource.start(time, position);

              this.__bufferSource.connect(this.__envNode);
            }
          }
        }
      }, {
        key: '__halt',
        value: function __halt(time) {
          if (this.__bufferSource) {
            this.__envNode.gain.cancelScheduledValues(time);

            this.__envNode.gain.setValueAtTime(this.__envNode.gain.value, time);

            this.__envNode.gain.linearRampToValueAtTime(0, time + this.fadeTime);

            this.__bufferSource.stop(time + this.fadeTime);

            this.__bufferSource = null;
            this.__envNode = null;
          }
        } // TimeEngine method (speed-controlled interface)

      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          var seek = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var lastSpeed = this.__speed;

          if (speed !== lastSpeed || seek) {
            if (seek || lastSpeed * speed < 0) {
              this.__halt(time);

              this.__start(time, position, speed);
            } else if (lastSpeed === 0 || seek) {
              this.__start(time, position, speed);
            } else if (speed === 0) {
              this.__halt(time);
            } else if (this.__bufferSource) {
              this.__bufferSource.playbackRate.setValueAtTime(speed, time);
            }

            this.__speed = speed;
          }
        }
        /**
         * Set whether the audio buffer is considered as cyclic
         * @type {Bool}
         * @name cyclic
         * @memberof PlayerEngine
         * @instance
         */

      }, {
        key: 'cyclic',
        set: function set(cyclic) {
          if (cyclic !== this.__cyclic) {
            var time = this.currentTime;
            var position = this.currentosition;

            this.__halt(time);

            this.__cyclic = cyclic;
            if (this.__speed !== 0) this.__start(time, position, this.__speed);
          }
        },
        get: function get() {
          return this.__cyclic;
        }
        /**
         * Linear gain factor
         * @type {Number}
         * @name gain
         * @memberof PlayerEngine
         * @instance
         */

      }, {
        key: 'gain',
        set: function set(value) {
          var time = this.currentTime;

          this.__gainNode.gain.cancelScheduledValues(time);

          this.__gainNode.gain.setValueAtTime(this.__gainNode.gain.value, time);

          this.__gainNode.gain.linearRampToValueAtTime(0, time + this.fadeTime);
        },
        get: function get() {
          return this.__gainNode.gain.value;
        }
        /**
         * Get buffer duration
         * @type {Number}
         * @name bufferDuration
         * @memberof PlayerEngine
         * @instance
         * @readonly
         */

      }, {
        key: 'bufferDuration',
        get: function get() {
          if (this.buffer) return this.buffer.duration;
          return 0;
        }
      }]);
      return PlayerEngine;
    }(_AudioTimeEngine3.default);

    exports.default = PlayerEngine;
  });
  unwrapExports(PlayerEngine_1);

  var SegmentEngine_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _AudioTimeEngine3 = _interopRequireDefault(AudioTimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function optOrDef(opt, def) {
      if (opt !== undefined) return opt;
      return def;
    }

    function getCurrentOrPreviousIndex(sortedArray, value) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var size = sortedArray.length;

      if (size > 0) {
        var firstVal = sortedArray[0];
        var lastVal = sortedArray[size - 1];
        if (value < firstVal) index = -1;else if (value >= lastVal) index = size - 1;else {
          if (index < 0 || index >= size) index = Math.floor((size - 1) * (value - firstVal) / (lastVal - firstVal));

          while (sortedArray[index] > value) {
            index--;
          }

          while (sortedArray[index + 1] <= value) {
            index++;
          }
        }
      }

      return index;
    }

    function getCurrentOrNextIndex(sortedArray, value) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var size = sortedArray.length;

      if (size > 0) {
        var firstVal = sortedArray[0];
        var lastVal = sortedArray[size - 1];
        if (value <= firstVal) index = 0;else if (value >= lastVal) index = size;else {
          if (index < 0 || index >= size) index = Math.floor((size - 1) * (value - firstVal) / (lastVal - firstVal));

          while (sortedArray[index] < value) {
            index++;
          }

          while (sortedArray[index - 1] >= value) {
            index--;
          }
        }
      }

      return index;
    }
    /**
     * Used with a buffer to serve audio files via granular synthesis.
     *
     * The engine implements the "scheduled" and "transported" interfaces.
     * When "scheduled", the engine  generates segments more or less periodically
     * (controlled by the periodAbs, periodRel, and perioVar attributes).
     * When "transported", the engine generates segments at the position of their onset time.
     *
     * Example that shows a `SegmentEngine` with a few parameter controls running in a `Scheduler`.
     * {@link https://rawgit.com/wavesjs/waves-audio/master/examples/segment-engine/index.html}
     *
     * @extends AudioTimeEngine
     * @example
     * import * as audio from 'waves-audio';
     * const scheduler = audio.getScheduler();
     * const segmentEngine = new audio.SegmentEngine();
     *
     * scheduler.add(segmentEngine);
     *
     * @param {Object} [options={}] - Default options
     * @param {AudioBuffer} [options.buffer=null] - Audio buffer
     * @param {Number} [options.periodAbs=0] - Absolute segment period in sec
     * @param {Number} [options.periodRel=1] - Segment period relative to inter-segment distance
     * @param {Number} [options.periodVar=0] - Amout of random segment period variation relative
     *  to segment period
     * @param {Number} [options.periodMin=0.001] - Minimum segment period
     * @param {Number} [options.positionArray=[0.0]] - Array of segment positions (onset times
     *  in audio buffer) in sec
     * @param {Number} [options.positionVar=0] - Amout of random segment position variation in sec
     * @param {Number} [options.durationArray=[0.0]] - Array of segment durations in sec
     * @param {Number} [options.durationAbs=0] - Absolute segment duration in sec
     * @param {Number} [options.durationRel=1] - Segment duration relative to given segment
     *  duration or inter-segment distance
     * @param {Array} [options.offsetArray=[0.0]] - Array of segment offsets in sec
     * @param {Number} [options.offsetAbs=-0.005] - Absolute segment offset in sec
     * @param {Number} [options.offsetRel=0] - Segment offset relative to segment duration
     * @param {Number} [options.delay=0.005] - Time by which all segments are delayed (especially
     *  to realize segment offsets)
     * @param {Number} [options.attackAbs=0.005] - Absolute attack time in sec
     * @param {Number} [options.attackRel=0] - Attack time relative to segment duration
     * @param {Number} [options.releaseAbs=0.005] - Absolute release time in sec
     * @param {Number} [options.releaseRel=0] - Release time relative to segment duration
     * @param {Number} [options.resampling=0] - Segment resampling in cent
     * @param {Number} [options.resamplingVar=0] - Amout of random resampling variation in cent
     * @param {Number} [options.gain=1] - Linear gain factor
     * @param {Number} [options.abortTime=0.005] - fade-out time when aborted
     * @param {Number} [options.segmentIndex=0] - Index of the segment to synthesize (i.e. of
     *  this.positionArray/durationArray/offsetArray)
     * @param {Bool} [options.cyclic=false] - Whether the audio buffer and segment indices are
     *  considered as cyclic
     * @param {Number} [options.wrapAroundExtension=0] - Portion at the end of the audio buffer
     *  that has been copied from the beginning to assure cyclic behavior
     */


    var SegmentEngine = function (_AudioTimeEngine) {
      (0, _inherits3.default)(SegmentEngine, _AudioTimeEngine);

      function SegmentEngine() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, SegmentEngine);
        /**
         * Audio buffer
         * @name buffer
         * @type {AudioBuffer}
         * @default null
         * @memberof SegmentEngine
         * @instance
         */

        var _this = (0, _possibleConstructorReturn3.default)(this, (SegmentEngine.__proto__ || (0, _getPrototypeOf2.default)(SegmentEngine)).call(this, options.audioContext));

        _this.buffer = optOrDef(options.buffer, null);
        /**
         * Absolute segment period in sec
         * @name periodAbs
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.periodAbs = optOrDef(options.periodAbs, 0);
        /**
         * Segment period relative to inter-segment distance
         * @name periodRel
         * @type {Number}
         * @default 1
         * @memberof SegmentEngine
         * @instance
         */

        _this.periodRel = optOrDef(options.periodRel, 1);
        /**
         * Amout of random segment period variation relative to segment period
         * @name periodVar
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.periodVar = optOrDef(options.periodVar, 0);
        /**
         * Minimum segment period
         * @name periodMin
         * @type {Number}
         * @default 0.001
         * @memberof SegmentEngine
         * @instance
         */

        _this.periodMin = optOrDef(options.periodMin, 0.001);
        /**
         * Array of segment positions (onset times in audio buffer) in sec
         * @name positionArray
         * @type {Number}
         * @default [0.0]
         * @memberof SegmentEngine
         * @instance
         */

        _this.positionArray = optOrDef(options.positionArray, [0.0]);
        /**
         * Amout of random segment position variation in sec
         * @name positionVar
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.positionVar = optOrDef(options.positionVar, 0);
        /**
         * Array of segment durations in sec
         * @name durationArray
         * @type {Number}
         * @default [0.0]
         * @memberof SegmentEngine
         * @instance
         */

        _this.durationArray = optOrDef(options.durationArray, [0.0]);
        /**
         * Absolute segment duration in sec
         * @name durationAbs
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.durationAbs = optOrDef(options.durationAbs, 0);
        /**
         * Segment duration relative to given segment duration or inter-segment distance
         * @name durationRel
         * @type {Number}
         * @default 1
         * @memberof SegmentEngine
         * @instance
         */

        _this.durationRel = optOrDef(options.durationRel, 1);
        /**
         * Array of segment offsets in sec
         *
         * offset > 0: the segment's reference position is after the given segment position
         * offset < 0: the given segment position is the segment's reference position
         * and the duration has to be corrected by the offset
         *
         * @name offsetArray
         * @type {Array}
         * @default [0.0]
         * @memberof SegmentEngine
         * @instance
         */

        _this.offsetArray = optOrDef(options.offsetArray, [0.0]);
        /**
         * Absolute segment offset in sec
         * @name offsetAbs
         * @type {Number}
         * @default -0.005
         * @memberof SegmentEngine
         * @instance
         */

        _this.offsetAbs = optOrDef(options.offsetAbs, -0.005);
        /**
         * Segment offset relative to segment duration
         * @name offsetRel
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.offsetRel = optOrDef(options.offsetRel, 0);
        /**
         * Time by which all segments are delayed (especially to realize segment offsets)
         * @name delay
         * @type {Number}
         * @default 0.005
         * @memberof SegmentEngine
         * @instance
         */

        _this.delay = optOrDef(options.delay, 0.005);
        /**
         * Absolute attack time in sec
         * @name attackAbs
         * @type {Number}
         * @default 0.005
         * @memberof SegmentEngine
         * @instance
         */

        _this.attackAbs = optOrDef(options.attackAbs, 0.005);
        /**
         * Attack time relative to segment duration
         * @name attackRel
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.attackRel = optOrDef(options.attackRel, 0);
        /**
         * Absolute release time in sec
         * @name releaseAbs
         * @type {Number}
         * @default 0.005
         * @memberof SegmentEngine
         * @instance
         */

        _this.releaseAbs = optOrDef(options.releaseAbs, 0.005);
        /**
         * Release time relative to segment duration
         * @name releaseRel
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.releaseRel = optOrDef(options.releaseRel, 0);
        /**
         * Segment resampling in cent
         * @name resampling
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.resampling = optOrDef(options.resampling, 0);
        /**
         * Amout of random resampling variation in cent
         * @name resamplingVar
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.resamplingVar = optOrDef(options.resamplingVar, 0);
        /**
         * Linear gain factor
         * @name gain
         * @type {Number}
         * @default 1
         * @memberof SegmentEngine
         * @instance
         */

        _this.gain = optOrDef(options.gain, 1);
        /**
         * Index of the segment to synthesize (i.e. of this.positionArray/durationArray/offsetArray)
         * @name segmentIndex
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.segmentIndex = optOrDef(options.segmentIndex, 0);
        /**
         * Whether the audio buffer and segment indices are considered as cyclic
         * @name cyclic
         * @type {Bool}
         * @default false
         * @memberof SegmentEngine
         * @instance
         */

        _this.cyclic = optOrDef(options.cyclic, false);
        _this.__cyclicOffset = 0;
        /**
         * Whether the last segment is aborted when triggering the next
         * @name monophonic
         * @type {Number}
         * @default false
         * @memberof SegmentEngine
         * @instance
         */

        _this.monophonic = optOrDef(options.monophonic, false);
        _this.__currentSrc = null;
        _this.__currentEnv = null;
        _this.__releaseStartTime = 0;
        _this.__currentGain = 0;
        _this.__currentEndTime = 0;
        /**
         * Fade-out time (when aborted)
         * @name abortTime
         * @type {Number}
         * @default 0.005
         * @memberof SegmentEngine
         * @instance
         */

        _this.abortTime = optOrDef(options.abortTime, 0.005);
        /**
         * Portion at the end of the audio buffer that has been copied from the beginning to assure cyclic behavior
         * @name wrapAroundExtension
         * @type {Number}
         * @default 0
         * @memberof SegmentEngine
         * @instance
         */

        _this.wrapAroundExtension = optOrDef(options.wrapAroundExtension, 0);
        _this.outputNode = _this.audioContext.createGain();
        return _this;
      }
      /**
       * Get buffer duration (excluding wrapAroundExtension)
       *
       * @type {Number}
       * @default 0
       * @memberof SegmentEngine
       * @instance
       */


      (0, _createClass3.default)(SegmentEngine, [{
        key: 'advanceTime',
        // TimeEngine method (transported interface)
        value: function advanceTime(time) {
          time = Math.max(time, this.audioContext.currentTime);
          return time + this.trigger(time);
        } // TimeEngine method (transported interface)

      }, {
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          var index = this.segmentIndex;
          var cyclicOffset = 0;
          var bufferDuration = this.bufferDuration;

          if (this.cyclic) {
            var cycles = position / bufferDuration;
            cyclicOffset = Math.floor(cycles) * bufferDuration;
            position -= cyclicOffset;
          }

          if (speed > 0) {
            index = getCurrentOrNextIndex(this.positionArray, position);

            if (index >= this.positionArray.length) {
              index = 0;
              cyclicOffset += bufferDuration;
              if (!this.cyclic) return Infinity;
            }
          } else if (speed < 0) {
            index = getCurrentOrPreviousIndex(this.positionArray, position);

            if (index < 0) {
              index = this.positionArray.length - 1;
              cyclicOffset -= bufferDuration;
              if (!this.cyclic) return -Infinity;
            }
          } else {
            return Infinity;
          }

          this.segmentIndex = index;
          this.__cyclicOffset = cyclicOffset;
          return cyclicOffset + this.positionArray[index];
        } // TimeEngine method (transported interface)

      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          var index = this.segmentIndex;
          var cyclicOffset = this.__cyclicOffset;
          this.trigger(time);

          if (speed > 0) {
            index++;

            if (index >= this.positionArray.length) {
              index = 0;
              cyclicOffset += this.bufferDuration;
              if (!this.cyclic) return Infinity;
            }
          } else {
            index--;

            if (index < 0) {
              index = this.positionArray.length - 1;
              cyclicOffset -= this.bufferDuration;
              if (!this.cyclic) return -Infinity;
            }
          }

          this.segmentIndex = index;
          this.__cyclicOffset = cyclicOffset;
          return cyclicOffset + this.positionArray[index];
        }
        /**
         * Trigger a segment.
         * This function can be called at any time (whether the engine is scheduled/transported or not)
         * to generate a single segment according to the current segment parameters.
         *
         * @param {Number} time segment synthesis audio time
         * @return {Number} period to next segment
         */

      }, {
        key: 'trigger',
        value: function trigger(time) {
          var audioContext = this.audioContext;
          var segmentTime = (time || audioContext.currentTime) + this.delay;
          var segmentPeriod = this.periodAbs;
          var segmentIndex = this.segmentIndex;

          if (this.buffer) {
            var segmentPosition = 0.0;
            var segmentDuration = 0.0;
            var segmentOffset = 0.0;
            var resamplingRate = 1.0;
            var bufferDuration = this.bufferDuration;
            if (this.cyclic) segmentIndex = segmentIndex % this.positionArray.length;else segmentIndex = Math.max(0, Math.min(segmentIndex, this.positionArray.length - 1));
            if (this.positionArray) segmentPosition = this.positionArray[segmentIndex] || 0;
            if (this.durationArray) segmentDuration = this.durationArray[segmentIndex] || 0;
            if (this.offsetArray) segmentOffset = this.offsetArray[segmentIndex] || 0; // calculate resampling

            if (this.resampling !== 0 || this.resamplingVar > 0) {
              var randomResampling = (Math.random() - 0.5) * 2.0 * this.resamplingVar;
              resamplingRate = Math.pow(2.0, (this.resampling + randomResampling) / 1200.0);
            } // calculate inter-segment distance


            if (segmentDuration === 0 || this.periodRel > 0) {
              var nextSegmentIndex = segmentIndex + 1;
              var nextPosition, nextOffset;

              if (nextSegmentIndex === this.positionArray.length) {
                if (this.cyclic) {
                  nextPosition = this.positionArray[0] + bufferDuration;
                  nextOffset = this.offsetArray[0];
                } else {
                  nextPosition = bufferDuration;
                  nextOffset = 0;
                }
              } else {
                nextPosition = this.positionArray[nextSegmentIndex];
                nextOffset = this.offsetArray[nextSegmentIndex];
              }

              var interSegmentDistance = nextPosition - segmentPosition; // correct inter-segment distance by offsets
              //   offset > 0: the segment's reference position is after the given segment position

              if (segmentOffset > 0) interSegmentDistance -= segmentOffset;
              if (nextOffset > 0) interSegmentDistance += nextOffset;
              if (interSegmentDistance < 0) interSegmentDistance = 0; // use inter-segment distance instead of segment duration

              if (segmentDuration === 0) segmentDuration = interSegmentDistance; // calculate period relative to inter marker distance

              segmentPeriod += this.periodRel * interSegmentDistance;
            } // add relative and absolute segment duration


            segmentDuration *= this.durationRel;
            segmentDuration += this.durationAbs; // add relative and absolute segment offset

            segmentOffset *= this.offsetRel;
            segmentOffset += this.offsetAbs; // apply segment offset
            //   offset > 0: the segment's reference position is after the given segment position
            //   offset < 0: the given segment position is the segment's reference position and the duration has to be corrected by the offset

            if (segmentOffset < 0) {
              segmentDuration -= segmentOffset;
              segmentPosition += segmentOffset;
              segmentTime += segmentOffset / resamplingRate;
            } else {
              segmentTime -= segmentOffset / resamplingRate;
            } // randomize segment position


            if (this.positionVar > 0) segmentPosition += 2.0 * (Math.random() - 0.5) * this.positionVar; // shorten duration of segments over the edges of the buffer

            if (segmentPosition < 0) {
              //segmentTime -= grainPosition; hm, not sure if we want to do this
              segmentDuration += segmentPosition;
              segmentPosition = 0;
            }

            if (segmentPosition + segmentDuration > this.buffer.duration) segmentDuration = this.buffer.duration - segmentPosition;
            segmentDuration /= resamplingRate;
            if (this.monophonic) this.abort(segmentTime); // make segment

            if (this.gain > 0 && segmentDuration > 0) {
              // make segment envelope
              var envelope = audioContext.createGain();
              var attack = this.attackAbs + this.attackRel * segmentDuration;
              var release = this.releaseAbs + this.releaseRel * segmentDuration;

              if (attack + release > segmentDuration) {
                var factor = segmentDuration / (attack + release);
                attack *= factor;
                release *= factor;
              }

              var attackEndTime = segmentTime + attack;
              var segmentEndTime = segmentTime + segmentDuration;
              var releaseStartTime = segmentEndTime - release;
              envelope.gain.value = 0;
              envelope.gain.setValueAtTime(0.0, segmentTime);
              envelope.gain.linearRampToValueAtTime(this.gain, attackEndTime);
              if (releaseStartTime > attackEndTime) envelope.gain.setValueAtTime(this.gain, releaseStartTime);
              envelope.gain.linearRampToValueAtTime(0.0, segmentEndTime);
              envelope.connect(this.outputNode);
              this.__currentEnv = envelope; // make source

              var source = audioContext.createBufferSource();
              source.buffer = this.buffer;
              source.playbackRate.value = resamplingRate;
              source.connect(envelope);
              source.start(segmentTime, segmentPosition);
              source.stop(segmentTime + segmentDuration);
              this.__currentSrc = source;
              this.__releaseStartTime = releaseStartTime;
              this.__currentGain = this.gain;
              this.__currentEndTime = segmentEndTime;
            }
          } // segment period randon variation


          if (this.periodVar > 0.0) segmentPeriod += 2.0 * (Math.random() - 0.5) * this.periodVar * segmentPeriod;
          return Math.max(this.periodMin, segmentPeriod);
        }
        /**
         * Abort the current segment at given time, fade out duration
         *
         * @param {Number} time - abort time
         */

      }, {
        key: 'abort',
        value: function abort(time) {
          var audioContext = this.audioContext;
          var endTime = this.__currentEndTime;
          var abortTime = time || audioContext.currentTime;

          if (abortTime < endTime) {
            var segmentEndTime = Math.min(abortTime + this.abortTime, endTime);
            var envelope = this.__currentEnv;
            var currentGainValue = this.__currentGain;

            if (abortTime > this.__releaseStartTime) {
              var releaseStart = this.__releaseStartTime;
              currentGainValue *= (abortTime - releaseStart) / (endTime - releaseStart);
            }

            envelope.gain.cancelScheduledValues(abortTime);
            envelope.gain.setValueAtTime(currentGainValue, abortTime);
            envelope.gain.linearRampToValueAtTime(0, segmentEndTime);
            this.__currentSrc = null;
            this.__currentEnv = null;
            this.__releaseStartTime = 0;
            this.__currentGain = 0;
            this.__currentEndTime = 0;
          }
        }
      }, {
        key: 'bufferDuration',
        get: function get() {
          if (this.buffer) {
            var bufferDuration = this.buffer.duration;
            if (this.wrapAroundExtension) bufferDuration -= this.wrapAroundExtension;
            return bufferDuration;
          }

          return 0;
        }
      }]);
      return SegmentEngine;
    }(_AudioTimeEngine3.default);

    exports.default = SegmentEngine;
  });
  unwrapExports(SegmentEngine_1);

  var MAP$1 = 'Map'; // 23.1 Map Objects

  var es6_map$1 = _collection$1(MAP$1, function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = _collectionStrong$1.getEntry(_validateCollection$1(this, MAP$1), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionStrong$1.def(_validateCollection$1(this, MAP$1), key === 0 ? 0 : key, value);
    }
  }, _collectionStrong$1, true);

  _export$1(_export$1.P + _export$1.R, 'Map', {
    toJSON: _collectionToJson('Map')
  });

  _setCollectionOf('Map');

  _setCollectionFrom('Map');

  var map = _core$1.Map;

  var map$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": map,
      __esModule: true
    };
  });
  unwrapExports(map$1);

  var factories$1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _map2 = _interopRequireDefault(map$1);

    exports.getScheduler = getScheduler;
    exports.getSimpleScheduler = getSimpleScheduler;

    var _audioContext2 = _interopRequireDefault(audioContext_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var schedulerMap = new _map2.default();
    var simpleSchedulerMap = new _map2.default();
    /**
     * Returns a unique instance of `Scheduler`
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/scheduler/index.html}}
     *
     * @global
     * @function
     * @returns {Scheduler}
     * @see Scheduler
     */

    function getScheduler() {
      var audioContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _audioContext2.default;
      var scheduler = schedulerMap.get(audioContext);

      if (!scheduler) {
        var getTimeFunction = function getTimeFunction() {
          return audioContext.currentTime;
        };

        scheduler = new dist.Scheduler(getTimeFunction);
        schedulerMap.set(audioContext, scheduler);
      }

      return scheduler;
    }
    /**
     * Returns a unique instance of `SimpleScheduler`
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/simple-scheduler/index.html}}
     *
     * @global
     * @function
     * @returns {SimpleScheduler}
     * @see SimpleScheduler
     */

    function getSimpleScheduler() {
      var audioContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _audioContext2.default;
      var simpleScheduler = simpleSchedulerMap.get(audioContext);

      if (!simpleScheduler) {
        var getTimeFunction = function getTimeFunction() {
          return audioContext.currentTime;
        };

        simpleScheduler = new dist.SimpleScheduler(getTimeFunction);
        simpleSchedulerMap.set(audioContext, simpleScheduler);
      }

      return simpleScheduler;
    }
  });
  unwrapExports(factories$1);
  var factories_1 = factories$1.getScheduler;
  var factories_2 = factories$1.getSimpleScheduler;

  var PlayControl_1$1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _audioContext2 = _interopRequireDefault(audioContext_1);

    var masters = _interopRequireWildcard(dist);

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};

        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }

        newObj.default = obj;
        return newObj;
      }
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * Extends Time Engine to provide playback control of a Time Engine instance.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/play-control/index.html}
     *
     * @extends TimeEngine
     * @param {TimeEngine} engine - engine to control
     *
     * @example
     * import * as audio from 'waves-audio';
     * const playerEngine = audio.PlayerEngine();
     * const playControl = new audio.PlayControl(playerEngine);
     *
     * playControl.start();
     */


    var PlayControl = function (_masters$PlayControl) {
      (0, _inherits3.default)(PlayControl, _masters$PlayControl);

      function PlayControl(engine) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, PlayControl);
        var audioContext = options.audioContext || _audioContext2.default;
        var scheduler = (0, factories$1.getScheduler)(audioContext);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PlayControl.__proto__ || (0, _getPrototypeOf2.default)(PlayControl)).call(this, scheduler, engine, options));

        _this.audioContext = audioContext;
        return _this;
      }

      return PlayControl;
    }(masters.PlayControl);

    exports.default = PlayControl;
  });
  unwrapExports(PlayControl_1$1);

  var Transport_1$1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _audioContext2 = _interopRequireDefault(audioContext_1);

    var masters = _interopRequireWildcard(dist);

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};

        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }

        newObj.default = obj;
        return newObj;
      }
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * Provides synchronized scheduling of Time Engine instances.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-audio/master/examples/transport/index.html}
     *
     * @example
     * import * as audio from 'waves-audio';
     * const transport = new audio.Transport();
     * const playControl = new audio.PlayControl(transport);
     * const myEngine = new MyEngine();
     * const yourEngine = new yourEngine();
     *
     * transport.add(myEngine);
     * transport.add(yourEngine);
     *
     * playControl.start();
     */


    var Transport = function (_masters$Transport) {
      (0, _inherits3.default)(Transport, _masters$Transport);

      function Transport() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, Transport);
        var audioContext = options.audioContext || _audioContext2.default;
        var scheduler = (0, factories$1.getScheduler)(audioContext);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Transport.__proto__ || (0, _getPrototypeOf2.default)(Transport)).call(this, scheduler, options));

        _this.audioContext = audioContext;
        return _this;
      }

      return Transport;
    }(masters.Transport);

    exports.default = Transport;
  });
  unwrapExports(Transport_1$1);

  var dist$1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'audioContext', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(audioContext_1).default;
      }
    });
    Object.defineProperty(exports, 'AudioTimeEngine', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(AudioTimeEngine_1).default;
      }
    });
    Object.defineProperty(exports, 'TimeEngine', {
      enumerable: true,
      get: function get() {
        return dist.TimeEngine;
      }
    });
    Object.defineProperty(exports, 'PriorityQueue', {
      enumerable: true,
      get: function get() {
        return dist.PriorityQueue;
      }
    });
    Object.defineProperty(exports, 'SchedulingQueue', {
      enumerable: true,
      get: function get() {
        return dist.SchedulingQueue;
      }
    });
    Object.defineProperty(exports, 'GranularEngine', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(GranularEngine_1).default;
      }
    });
    Object.defineProperty(exports, 'Metronome', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(Metronome_1).default;
      }
    });
    Object.defineProperty(exports, 'PlayerEngine', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(PlayerEngine_1).default;
      }
    });
    Object.defineProperty(exports, 'SegmentEngine', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(SegmentEngine_1).default;
      }
    });
    Object.defineProperty(exports, 'PlayControl', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(PlayControl_1$1).default;
      }
    });
    Object.defineProperty(exports, 'Transport', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(Transport_1$1).default;
      }
    });
    Object.defineProperty(exports, 'getScheduler', {
      enumerable: true,
      get: function get() {
        return factories$1.getScheduler;
      }
    });
    Object.defineProperty(exports, 'getSimpleScheduler', {
      enumerable: true,
      get: function get() {
        return factories$1.getSimpleScheduler;
      }
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });
  var audio = unwrapExports(dist$1);

  var mobileDetect = createCommonjsModule(function (module) {
    // THIS FILE IS GENERATED - DO NOT EDIT!

    /*!mobile-detect v1.4.4 2019-09-21*/

    /*global module:false, define:false*/

    /*jshint latedef:false*/

    /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
    (function (define, undefined$1) {
      define(function () {

        var impl = {};
        impl.mobileDetectRules = {
          "phones": {
            "iPhone": "\\biPhone\\b|\\biPod\\b",
            "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
            "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
            "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
            "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
            "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
            "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
            "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
            "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
            "Asus": "Asus.*Galaxy|PadFone.*Mobile",
            "NokiaLumia": "Lumia [0-9]{3,4}",
            "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
            "Palm": "PalmSource|Palm",
            "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
            "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
            "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
            "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
            "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
            "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
            "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
            "Alcatel": "Alcatel",
            "Nintendo": "Nintendo (3DS|Switch)",
            "Amoi": "Amoi",
            "INQ": "INQ",
            "OnePlus": "ONEPLUS",
            "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
          },
          "tablets": {
            "iPad": "iPad|iPad.*Mobile",
            "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
            "GoogleTablet": "Android.*Pixel C",
            "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
            "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
            "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
            "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
            "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
            "BlackBerryTablet": "PlayBook|RIM Tablet",
            "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
            "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
            "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
            "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
            "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
            "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
            "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
            "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
            "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
            "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
            "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
            "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
            "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
            "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
            "IRUTablet": "M702pro",
            "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
            "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
            "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
            "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
            "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
            "NokiaLumiaTablet": "Lumia 2520",
            "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
            "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
            "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
            "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
            "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
            "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
            "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
            "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
            "FlyTablet": "IQ310|Fly Vision",
            "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
            "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
            "NecTablet": "\\bN-06D|\\bN-08D",
            "PantechTablet": "Pantech.*P4100",
            "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
            "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
            "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
            "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
            "NabiTablet": "Android.*\\bNabi",
            "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
            "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
            "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
            "PlaystationTablet": "Playstation.*(Portable|Vita)",
            "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
            "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
            "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
            "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
            "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
            "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
            "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
            "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
            "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
            "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
            "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
            "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
            "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
            "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
            "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
            "DPSTablet": "DPS Dream 9|DPS Dual 7",
            "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
            "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
            "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
            "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
            "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
            "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
            "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
            "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
            "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
            "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
            "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
            "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
            "iMobileTablet": "i-mobile i-note",
            "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
            "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
            "AMPETablet": "Android.* A78 ",
            "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
            "TecnoTablet": "TECNO P9|TECNO DP8D",
            "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
            "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
            "FX2Tablet": "FX2 PAD7|FX2 PAD10",
            "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
            "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
            "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
            "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
            "CaptivaTablet": "CAPTIVA PAD",
            "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
            "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
            "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
            "JaytechTablet": "TPC-PA762",
            "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
            "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
            "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
            "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
            "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
            "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
            "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
            "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
            "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
            "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
            "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
            "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
            "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
            "UbislateTablet": "UbiSlate[\\s]?7C",
            "PocketBookTablet": "Pocketbook",
            "KocasoTablet": "\\b(TB-1207)\\b",
            "HisenseTablet": "\\b(F5281|E2371)\\b",
            "Hudl": "Hudl HT7S3|Hudl 2",
            "TelstraTablet": "T-Hub2",
            "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
          },
          "oss": {
            "AndroidOS": "Android",
            "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
            "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
            "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
            "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
            "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
            "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
            "iPadOS": "CPU OS 13",
            "MeeGoOS": "MeeGo",
            "MaemoOS": "Maemo",
            "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
            "webOS": "webOS|hpwOS",
            "badaOS": "\\bBada\\b",
            "BREWOS": "BREW"
          },
          "uas": {
            "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
            "Dolfin": "\\bDolfin\\b",
            "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
            "Skyfire": "Skyfire",
            "Edge": "Mobile Safari\/[.0-9]* Edge",
            "IE": "IEMobile|MSIEMobile",
            "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
            "Bolt": "bolt",
            "TeaShark": "teashark",
            "Blazer": "Blazer",
            "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
            "WeChat": "\\bMicroMessenger\\b",
            "UCBrowser": "UC.*Browser|UCWEB",
            "baiduboxapp": "baiduboxapp",
            "baidubrowser": "baidubrowser",
            "DiigoBrowser": "DiigoBrowser",
            "Mercury": "\\bMercury\\b",
            "ObigoBrowser": "Obigo",
            "NetFront": "NF-Browser",
            "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
            "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
          },
          "props": {
            "Mobile": "Mobile\/[VER]",
            "Build": "Build\/[VER]",
            "Version": "Version\/[VER]",
            "VendorID": "VendorID\/[VER]",
            "iPad": "iPad.*CPU[a-z ]+[VER]",
            "iPhone": "iPhone.*CPU[a-z ]+[VER]",
            "iPod": "iPod.*CPU[a-z ]+[VER]",
            "Kindle": "Kindle\/[VER]",
            "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
            "Coast": ["Coast\/[VER]"],
            "Dolfin": "Dolfin\/[VER]",
            "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
            "Fennec": "Fennec\/[VER]",
            "Edge": "Edge\/[VER]",
            "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
            "NetFront": "NetFront\/[VER]",
            "NokiaBrowser": "NokiaBrowser\/[VER]",
            "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
            "Opera Mini": "Opera Mini\/[VER]",
            "Opera Mobi": "Version\/[VER]",
            "UCBrowser": ["UCWEB[VER]", "UC.*Browser\/[VER]"],
            "MQQBrowser": "MQQBrowser\/[VER]",
            "MicroMessenger": "MicroMessenger\/[VER]",
            "baiduboxapp": "baiduboxapp\/[VER]",
            "baidubrowser": "baidubrowser\/[VER]",
            "SamsungBrowser": "SamsungBrowser\/[VER]",
            "Iron": "Iron\/[VER]",
            "Safari": ["Version\/[VER]", "Safari\/[VER]"],
            "Skyfire": "Skyfire\/[VER]",
            "Tizen": "Tizen\/[VER]",
            "Webkit": "webkit[ \/][VER]",
            "PaleMoon": "PaleMoon\/[VER]",
            "Gecko": "Gecko\/[VER]",
            "Trident": "Trident\/[VER]",
            "Presto": "Presto\/[VER]",
            "Goanna": "Goanna\/[VER]",
            "iOS": " \\bi?OS\\b [VER][ ;]{1}",
            "Android": "Android [VER]",
            "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
            "BREW": "BREW [VER]",
            "Java": "Java\/[VER]",
            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
            "Windows Phone": "Windows Phone [VER]",
            "Windows CE": "Windows CE\/[VER]",
            "Windows NT": "Windows NT [VER]",
            "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
            "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
          },
          "utils": {
            "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
            "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
            "DesktopMode": "WPDesktop",
            "TV": "SonyDTV|HbbTV",
            "WebKit": "(webkit)[ \/]([\\w.]+)",
            "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
            "Watch": "SM-V700"
          }
        }; // following patterns come from http://detectmobilebrowsers.com/

        impl.detectMobileBrowsers = {
          fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          tabletPattern: /android|ipad|playbook|silk/i
        };
        var hasOwnProp = Object.prototype.hasOwnProperty,
            isArray;
        impl.FALLBACK_PHONE = 'UnknownPhone';
        impl.FALLBACK_TABLET = 'UnknownTablet';
        impl.FALLBACK_MOBILE = 'UnknownMobile';
        isArray = 'isArray' in Array ? Array.isArray : function (value) {
          return Object.prototype.toString.call(value) === '[object Array]';
        };

        function equalIC(a, b) {
          return a != null && b != null && a.toLowerCase() === b.toLowerCase();
        }

        function containsIC(array, value) {
          var valueLC,
              i,
              len = array.length;

          if (!len || !value) {
            return false;
          }

          valueLC = value.toLowerCase();

          for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
              return true;
            }
          }

          return false;
        }

        function convertPropsToRegExp(object) {
          for (var key in object) {
            if (hasOwnProp.call(object, key)) {
              object[key] = new RegExp(object[key], 'i');
            }
          }
        }

        function prepareUserAgent(userAgent) {
          return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
        }

        (function init() {
          var key,
              values,
              value,
              i,
              len,
              verPos,
              mobileDetectRules = impl.mobileDetectRules;

          for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
              values = mobileDetectRules.props[key];

              if (!isArray(values)) {
                values = [values];
              }

              len = values.length;

              for (i = 0; i < len; ++i) {
                value = values[i];
                verPos = value.indexOf('[VER]');

                if (verPos >= 0) {
                  value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                }

                values[i] = new RegExp(value, 'i');
              }

              mobileDetectRules.props[key] = values;
            }
          }

          convertPropsToRegExp(mobileDetectRules.oss);
          convertPropsToRegExp(mobileDetectRules.phones);
          convertPropsToRegExp(mobileDetectRules.tablets);
          convertPropsToRegExp(mobileDetectRules.uas);
          convertPropsToRegExp(mobileDetectRules.utils); // copy some patterns to oss0 which are tested first (see issue#15)

          mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
          };
        })();
        /**
         * Test userAgent string against a set of rules and find the first matched key.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
         * @private
         */


        impl.findMatch = function (rules, userAgent) {
          for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
              if (rules[key].test(userAgent)) {
                return key;
              }
            }
          }

          return null;
        };
        /**
         * Test userAgent string against a set of rules and return an array of matched keys.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
         * @private
         */


        impl.findMatches = function (rules, userAgent) {
          var result = [];

          for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
              if (rules[key].test(userAgent)) {
                result.push(key);
              }
            }
          }

          return result;
        };
        /**
         * Check the version of the given property in the User-Agent.
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {String} version or <tt>null</tt> if version not found
         * @private
         */


        impl.getVersionStr = function (propertyName, userAgent) {
          var props = impl.mobileDetectRules.props,
              patterns,
              i,
              len,
              match;

          if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;

            for (i = 0; i < len; ++i) {
              match = patterns[i].exec(userAgent);

              if (match !== null) {
                return match[1];
              }
            }
          }

          return null;
        };
        /**
         * Check the version of the given property in the User-Agent.
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {Number} version or <tt>NaN</tt> if version not found
         * @private
         */


        impl.getVersion = function (propertyName, userAgent) {
          var version = impl.getVersionStr(propertyName, userAgent);
          return version ? impl.prepareVersionNo(version) : NaN;
        };
        /**
         * Prepare the version number.
         *
         * @param {String} version
         * @return {Number} the version number as a floating number
         * @private
         */


        impl.prepareVersionNo = function (version) {
          var numbers;
          numbers = version.split(/[a-z._ \/\-]/i);

          if (numbers.length === 1) {
            version = numbers[0];
          }

          if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
          }

          return Number(version);
        };

        impl.isMobileFallback = function (userAgent) {
          return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
        };

        impl.isTabletFallback = function (userAgent) {
          return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
        };

        impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
          if (cache.mobile !== undefined$1) {
            return;
          }

          var phone, tablet, phoneSized; // first check for stronger tablet rules, then phone (see issue#5)

          tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);

          if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
          }

          phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);

          if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
          } // our rules haven't found a match -> try more general fallback rules


          if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);

            if (phoneSized === undefined$1) {
              cache.mobile = impl.FALLBACK_MOBILE;
              cache.tablet = cache.phone = null;
            } else if (phoneSized) {
              cache.mobile = cache.phone = impl.FALLBACK_PHONE;
              cache.tablet = null;
            } else {
              cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
              cache.phone = null;
            }
          } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
          } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
          }
        }; // t is a reference to a MobileDetect instance


        impl.mobileGrade = function (t) {
          // impl note:
          // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
          // When changes are made in Mobile_Detect.php, copy this method and replace:
          //     $this-> / t.
          //     self::MOBILE_GRADE_(.) / '$1'
          //     , self::VERSION_TYPE_FLOAT / (nothing)
          //     isIOS() / os('iOS')
          //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
          var $isMobile = t.mobile() !== null;

          if ( // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
          t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 || // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
          // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
          // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
          // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
          t.version('Android') > 2.1 && t.is('Webkit') || // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
          t.version('Windows Phone OS') >= 7.0 || // Blackberry 7 - Tested on BlackBerry Torch 9810
          // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
          t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 || // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
          t.match('Playbook.*Tablet') || // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
          t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') || // Palm WebOS 3.0  - Tested on HP TouchPad
          t.match('hp.*TouchPad') || // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
          t.is('Firefox') && t.version('Firefox') >= 12 || // Chrome for Android - Tested on Android 4.0, 4.1 device
          t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 || // Skyfire 4.1 - Tested on Android 2.3 device
          t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 || // Opera Mobile 11.5-12: Tested on Android 2.3
          t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') || // Meego 1.2 - Tested on Nokia 950 and N9
          t.is('MeeGoOS') || // Tizen (pre-release) - Tested on early hardware
          t.is('Tizen') || // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
          // @todo: more tests here!
          t.is('Dolfin') && t.version('Bada') >= 2.0 || // UC Browser - Tested on Android 2.3 device
          (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 || // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
          t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 || // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
          t.is('AndroidOS') && t.is('NookTablet') || // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
          t.version('Chrome') >= 11 && !$isMobile || // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
          t.version('Safari') >= 5.0 && !$isMobile || // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
          t.version('Firefox') >= 4.0 && !$isMobile || // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
          t.version('MSIE') >= 7.0 && !$isMobile || // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
          // @reference: http://my.opera.com/community/openweb/idopera/
          t.version('Opera') >= 10 && !$isMobile) {
            return 'A';
          }

          if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 || // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
          t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 || //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
          t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) || // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
          t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') || // @todo: report this (tested on Nokia N71)
          t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
            return 'B';
          }

          if ( // Blackberry 4.x - Tested on the Curve 8330
          t.version('BlackBerry') < 5.0 || // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
          t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
            return 'C';
          } //All older smartphone platforms and featurephones - Any device that doesn't support media queries
          //will receive the basic, C grade experience.


          return 'C';
        };

        impl.detectOS = function (ua) {
          return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
        };

        impl.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        };
        /**
         * Constructor for MobileDetect object.
         * <br>
         * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
         * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
         *     <strong>Find information how to download and install:</strong>
         *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
         * </div>
         *
         * @example <pre>
         *     var md = new MobileDetect(window.navigator.userAgent);
         *     if (md.mobile()) {
         *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
         *     }
         * </pre>
         *
         * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
         * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
         *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
         *        as phone.
         *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
         *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
         *        for Android</a>.<br>
         *        If you provide a value < 0, then this "fuzzy" check is disabled.
         * @constructor
         * @global
         */


        function MobileDetect(userAgent, maxPhoneWidth) {
          this.ua = prepareUserAgent(userAgent);
          this._cache = {}; //600dp is typical 7" tablet minimum width

          this.maxPhoneWidth = maxPhoneWidth || 600;
        }

        MobileDetect.prototype = {
          constructor: MobileDetect,

          /**
           * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
           * <br>
           * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
           * <br>
           * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
           * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
           * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
           * <code>UnknownMobile</code> is returned.<br>
           * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
           * <br>
           * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
           * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
           * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
           * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
           * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
           * <br>
           * In most cases you will use the return value just as a boolean.
           *
           * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
           * @function MobileDetect#mobile
           */
          mobile: function mobile() {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
          },

          /**
           * Returns the detected phone type/family string or <tt>null</tt>.
           * <br>
           * The returned tablet (family or producer) is one of following keys:<br>
           * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
           * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
           * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
           * <br>
           * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
           * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
           * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
           * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
           * <br>
           * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
           * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
           * will return <code>UnknownMobile</code>.<br>
           * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
           * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
           * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
           * <br>
           * In most cases you will use the return value just as a boolean.
           *
           * @returns {String} the key of the phone family or producer, e.g. "iPhone"
           * @function MobileDetect#phone
           */
          phone: function phone() {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
          },

          /**
           * Returns the detected tablet type/family string or <tt>null</tt>.
           * <br>
           * The returned tablet (family or producer) is one of following keys:<br>
           * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
           * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
           * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
           * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
           * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
           * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
           * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
           * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
           * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
           * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
           * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
           * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
           * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
           * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
           * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
           * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
           * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
           * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
           * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
           * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
           * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
           * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
           * GenericTablet</tt><br>
           * <br>
           * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
           * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
           * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
           * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
           * <br>
           * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
           * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
           * will return <code>UnknownMobile</code>.<br>
           * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
           * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
           * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
           * <br>
           * In most cases you will use the return value just as a boolean.
           *
           * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
           * @function MobileDetect#tablet
           */
          tablet: function tablet() {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
          },

          /**
           * Returns the (first) detected user-agent string or <tt>null</tt>.
           * <br>
           * The returned user-agent is one of following keys:<br>
           * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
           * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
           * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
           * <br>
           * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
           * cases where a mobile device pretends to be more than one particular browser. You can get the
           * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
           * providing one of the defined keys as first argument to {@link MobileDetect#is}.
           *
           * @returns {String} the key for the detected user-agent or <tt>null</tt>
           * @function MobileDetect#userAgent
           */
          userAgent: function userAgent() {
            if (this._cache.userAgent === undefined$1) {
              this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }

            return this._cache.userAgent;
          },

          /**
           * Returns all detected user-agent strings.
           * <br>
           * The array is empty or contains one or more of following keys:<br>
           * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
           * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
           * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
           * <br>
           * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
           * cases where a mobile device pretends to be more than one particular browser. You can get the
           * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
           * providing one of the defined keys as first argument to {@link MobileDetect#is}.
           *
           * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
           * @function MobileDetect#userAgents
           */
          userAgents: function userAgents() {
            if (this._cache.userAgents === undefined$1) {
              this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }

            return this._cache.userAgents;
          },

          /**
           * Returns the detected operating system string or <tt>null</tt>.
           * <br>
           * The operating system is one of following keys:<br>
           * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
           * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
           *
           * @returns {String} the key for the detected operating system.
           * @function MobileDetect#os
           */
          os: function os() {
            if (this._cache.os === undefined$1) {
              this._cache.os = impl.detectOS(this.ua);
            }

            return this._cache.os;
          },

          /**
           * Get the version (as Number) of the given property in the User-Agent.
           * <br>
           * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
           *
           * @param {String} key a key defining a thing which has a version.<br>
           *        You can use one of following keys:<br>
           * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
           * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
           * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
           * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
           * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
           * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
           *
           * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
           *          Be careful when comparing this value with '==' operator!
           * @function MobileDetect#version
           */
          version: function version(key) {
            return impl.getVersion(key, this.ua);
          },

          /**
           * Get the version (as String) of the given property in the User-Agent.
           * <br>
           *
           * @param {String} key a key defining a thing which has a version.<br>
           *        You can use one of following keys:<br>
           * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
           * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
           * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
           * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
           * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
           * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
           *
           * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
           *
           * @function MobileDetect#versionStr
           */
          versionStr: function versionStr(key) {
            return impl.getVersionStr(key, this.ua);
          },

          /**
           * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
           *
           * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
           *        tablet family.<br>
           *        For a complete list of possible values, see {@link MobileDetect#userAgent},
           *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
           *        Additionally you have following keys:<br>
           * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
           *
           * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
           *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
           * @function MobileDetect#is
           */
          is: function is(key) {
            return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
          },

          /**
           * Do a quick test against navigator::userAgent.
           *
           * @param {String|RegExp} pattern the pattern, either as String or RegExp
           *                        (a string will be converted to a case-insensitive RegExp).
           * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
           * @function MobileDetect#match
           */
          match: function match(pattern) {
            if (!(pattern instanceof RegExp)) {
              pattern = new RegExp(pattern, 'i');
            }

            return pattern.test(this.ua);
          },

          /**
           * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
           * <br>
           * Obviously this method makes sense in browser environments only (not for Node.js)!
           * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
           *        The argument is optional and if not present or falsy, the value of the constructor is taken.
           * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
           *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
           *          Will always return <code>undefined</code> server-side.
           */
          isPhoneSized: function isPhoneSized(maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
          },

          /**
           * Returns the mobile grade ('A', 'B', 'C').
           *
           * @returns {String} one of the mobile grades ('A', 'B', 'C').
           * @function MobileDetect#mobileGrade
           */
          mobileGrade: function mobileGrade() {
            if (this._cache.grade === undefined$1) {
              this._cache.grade = impl.mobileGrade(this);
            }

            return this._cache.grade;
          }
        }; // environment-dependent

        if (typeof window !== 'undefined' && window.screen) {
          MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined$1 : impl.getDeviceSmallerSide() <= maxPhoneWidth;
          };
        } else {
          MobileDetect.isPhoneSized = function () {};
        } // should not be replaced by a completely new object - just overwrite existing methods


        MobileDetect._impl = impl;
        MobileDetect.version = '1.4.4 2019-09-21';
        return MobileDetect;
      }); // end of call of define()
    })(function (undefined$1) {
      if ( module.exports) {
        return function (factory) {
          module.exports = factory();
        };
      } else if (typeof undefined$1 === 'function' && undefined$1.amd) {
        return undefined$1;
      } else if (typeof window !== 'undefined') {
        return function (factory) {
          window.MobileDetect = factory();
        };
      } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
      }
    }());
  });

  function empty$1() {}

  var SelectorButtons = /*#__PURE__*/function () {
    function SelectorButtons(name) {
      var onOn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : empty$1;
      var onOff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : empty$1;

      _classCallCheck(this, SelectorButtons);

      this.container = document.getElementById(name);
      this.onOn = onOn;
      this.onOff = onOff;
      this.array = [];
      this.selectedIndex = -1;
      this._onClick = this._onClick.bind(this);
    }

    _createClass(SelectorButtons, [{
      key: "add",
      value: function add(name) {
        var index = this.array.length;
        var button = document.createElement('div');
        button.classList.add('selector-button');
        button.innerHTML = name.replace('_', ' ');
        button.setAttribute('data-index', index);
        button.setAttribute('data-sound', name);
        this.container.appendChild(button);
        this.array.push(button);
      }
    }, {
      key: "enable",
      value: function enable(index) {
        if (index === undefined) {
          var _iterator = _createForOfIteratorHelper(this.array),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var button = _step.value;
              button.classList.add('enabled');
              button.addEventListener('click', this._onClick);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var _button = this.array[index];

          _button.classList.add('enabled');

          _button.addEventListener('click', this._onClick);
        }
      }
    }, {
      key: "disable",
      value: function disable(index) {
        if (index === undefined) {
          var _iterator2 = _createForOfIteratorHelper(this.array),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var button = _step2.value;
              button.classList.remove('enabled');
              button.removeEventListener('click', this._onClick);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          var _button2 = this.array[index];

          _button2.classList.remove('enabled');

          _button2.removeEventListener('click', this._onClick);
        }
      }
    }, {
      key: "select",
      value: function select(index) {
        if (index === undefined) {
          var _iterator3 = _createForOfIteratorHelper(this.array),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var button = _step3.value;
              button.classList.add('selected');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          var _button3 = this.array[index];

          _button3.classList.add('selected');
        }
      }
    }, {
      key: "deselect",
      value: function deselect(index) {
        if (index === undefined) {
          var _iterator4 = _createForOfIteratorHelper(this.array),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var button = _step4.value;
              button.classList.remove('selected');
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } else {
          var _button4 = this.array[index];

          _button4.classList.remove('selected');
        }
      }
    }, {
      key: "_onClick",
      value: function _onClick(e) {
        var button = e.target;
        var index = parseInt(button.dataset.index);
        this.deselect();

        if (index === this.selectedIndex) {
          this.selectedIndex = -1;
          this.onOff(index);
        } else {
          this.selectedIndex = index;
          this.select(index);
          this.onOn(index);
        }
      }
    }]);

    return SelectorButtons;
  }();

  var audioContext = audio.audioContext;

  var ToneSynth = /*#__PURE__*/function () {
    function ToneSynth() {
      _classCallCheck(this, ToneSynth);

      this._osc = null;
      this._gain = null;
      this._freq = 0;
      this._amp = 1;
      this.fadeTime = 0.1;
    }

    _createClass(ToneSynth, [{
      key: "start",
      value: function start(freq) {
        var amp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._amp;

        if (freq !== this._freq) {
          this.stop();
          var time = audioContext.currentTime;
          var gain = audioContext.createGain();
          gain.connect(audioContext.destination);
          gain.gain.value = 0;
          gain.gain.setValueAtTime(0, time);
          gain.gain.linearRampToValueAtTime(amp, time + this.fadeTime);
          var osc = audioContext.createOscillator();
          osc.connect(gain);
          osc.type = 'sine';
          osc.frequency.value = freq;
          osc.start(time);
          this._osc = osc;
          this._gain = gain;
          this._freq = freq;
          this._amp = amp;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this._osc !== null) {
          var time = audioContext.currentTime;

          this._gain.gain.setValueAtTime(this._amp, time);

          this._gain.gain.linearRampToValueAtTime(0, time + this.fadeTime);

          this._osc.stop(time + this.fadeTime);

          this._osc = null;
          this._gain = null;
          this._freq = 0;
        }
      }
    }, {
      key: "gain",
      set: function set(value) {
        var gain = this._gain;

        if (gain) {
          var time = audioContext.currentTime;
          gain.gain.setValueAtTime(this._amp, time);
          gain.gain.linearRampToValueAtTime(value, time + this.fadeTime);
        }

        this._amp = value;
      }
    }, {
      key: "freq",
      set: function set(value) {
        var osc = this._osc;

        if (osc) {
          var time = audioContext.currentTime;
          osc.frequency.setValueAtTime(this._freq, time);
          osc.frequency.linearRampToValueAtTime(value, time + this.fadeTime);
        }

        this._freq = value;
      }
    }]);

    return ToneSynth;
  }();

  var SPECIES$6 = _wks$1('species');

  var _speciesConstructor$1 = function _speciesConstructor(O, D) {
    var C = _anObject$1(O).constructor;
    var S;
    return C === undefined || (S = _anObject$1(C)[SPECIES$6]) == undefined ? D : _aFunction$1(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke$1 = function _invoke(fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var process$4 = _global$1.process;
  var setTask$1 = _global$1.setImmediate;
  var clearTask$1 = _global$1.clearImmediate;
  var MessageChannel$1 = _global$1.MessageChannel;
  var Dispatch$1 = _global$1.Dispatch;
  var counter$1 = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE$1 = 'onreadystatechange';
  var defer$1, channel$1, port$1;

  var run$1 = function run() {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue$2.hasOwnProperty(id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };

  var listener$1 = function listener(event) {
    run$1.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!setTask$1 || !clearTask$1) {
    setTask$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      queue$2[++counter$1] = function () {
        // eslint-disable-next-line no-new-func
        _invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
      };

      defer$1(counter$1);
      return counter$1;
    };

    clearTask$1 = function clearImmediate(id) {
      delete queue$2[id];
    }; // Node.js 0.8-


    if (_cof$1(process$4) == 'process') {
      defer$1 = function defer(id) {
        process$4.nextTick(_ctx$1(run$1, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch$1 && Dispatch$1.now) {
      defer$1 = function defer(id) {
        Dispatch$1.now(_ctx$1(run$1, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel$1) {
      channel$1 = new MessageChannel$1();
      port$1 = channel$1.port2;
      channel$1.port1.onmessage = listener$1;
      defer$1 = _ctx$1(port$1.postMessage, port$1, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global$1.addEventListener && typeof postMessage == 'function' && !_global$1.importScripts) {
      defer$1 = function defer(id) {
        _global$1.postMessage(id + '', '*');
      };

      _global$1.addEventListener('message', listener$1, false); // IE8-
    } else if (ONREADYSTATECHANGE$1 in _domCreate$1('script')) {
      defer$1 = function defer(id) {
        _html$1.appendChild(_domCreate$1('script'))[ONREADYSTATECHANGE$1] = function () {
          _html$1.removeChild(this);
          run$1.call(id);
        };
      }; // Rest old browsers

    } else {
      defer$1 = function defer(id) {
        setTimeout(_ctx$1(run$1, id, 1), 0);
      };
    }
  }

  var _task$1 = {
    set: setTask$1,
    clear: clearTask$1
  };

  var macrotask$1 = _task$1.set;
  var Observer$1 = _global$1.MutationObserver || _global$1.WebKitMutationObserver;
  var process$5 = _global$1.process;
  var Promise$2 = _global$1.Promise;
  var isNode$2 = _cof$1(process$5) == 'process';

  var _microtask$1 = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode$2 && (parent = process$5.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode$2) {
      notify = function notify() {
        process$5.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer$1 && !(_global$1.navigator && _global$1.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer$1(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$2 && Promise$2.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$2.resolve(undefined);

      notify = function notify() {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask$1.call(_global$1, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  };

  function PromiseCapability$1(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction$1(resolve);
    this.reject = _aFunction$1(reject);
  }

  var f$f = function f(C) {
    return new PromiseCapability$1(C);
  };

  var _newPromiseCapability$1 = {
    f: f$f
  };

  var _perform$1 = function _perform(exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var navigator$2 = _global$1.navigator;

  var _userAgent$1 = navigator$2 && navigator$2.userAgent || '';

  var _promiseResolve$1 = function _promiseResolve(C, x) {
    _anObject$1(C);
    if (_isObject$1(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var ITERATOR$8 = _wks$1('iterator');
  var SAFE_CLOSING$1 = false;

  try {
    var riter$1 = [7][ITERATOR$8]();

    riter$1['return'] = function () {
      SAFE_CLOSING$1 = true;
    }; // eslint-disable-next-line no-throw-literal


    Array.from(riter$1, function () {
      throw 2;
    });
  } catch (e) {
    /* empty */
  }

  var _iterDetect$1 = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING$1) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$8]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$8] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  var task$1 = _task$1.set;
  var microtask$1 = _microtask$1();
  var PROMISE$1 = 'Promise';
  var TypeError$2 = _global$1.TypeError;
  var process$6 = _global$1.process;
  var versions$2 = process$6 && process$6.versions;
  var v8$1 = versions$2 && versions$2.v8 || '';
  var $Promise$1 = _global$1[PROMISE$1];
  var isNode$3 = _classof$1(process$6) == 'process';

  var empty$2 = function empty() {
    /* empty */
  };

  var Internal$1, newGenericPromiseCapability$1, OwnPromiseCapability$1, Wrapper$1;
  var newPromiseCapability$1 = newGenericPromiseCapability$1 = _newPromiseCapability$1.f;
  var USE_NATIVE$3 = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise$1.resolve(1);

      var FakePromise = (promise.constructor = {})[_wks$1('species')] = function (exec) {
        exec(empty$2, empty$2);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$3 || typeof PromiseRejectionEvent == 'function') && promise.then(empty$2) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8$1.indexOf('6.6') !== 0 && _userAgent$1.indexOf('Chrome/66') === -1;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

  var isThenable$1 = function isThenable(it) {
    var then;
    return _isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify$1 = function notify(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask$1(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;

      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled$1(promise);
              promise._h = 1;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$2('Promise-chain cycle'));
            } else if (then = isThenable$1(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };

      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach


      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled$1(promise);
    });
  };

  var onUnhandled$1 = function onUnhandled(promise) {
    task$1.call(_global$1, function () {
      var value = promise._v;
      var unhandled = isUnhandled$1(promise);
      var result, handler, console;

      if (unhandled) {
        result = _perform$1(function () {
          if (isNode$3) {
            process$6.emit('unhandledRejection', value, promise);
          } else if (handler = _global$1.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = _global$1.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$3 || isUnhandled$1(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled$1 = function isUnhandled(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled$1 = function onHandleUnhandled(promise) {
    task$1.call(_global$1, function () {
      var handler;

      if (isNode$3) {
        process$6.emit('rejectionHandled', promise);
      } else if (handler = _global$1.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
      }
    });
  };

  var $reject$1 = function $reject(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify$1(promise, true);
  };

  var $resolve$1 = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    try {
      if (promise === value) throw TypeError$2("Promise can't be resolved itself");

      if (then = isThenable$1(value)) {
        microtask$1(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, _ctx$1($resolve, wrapper, 1), _ctx$1($reject$1, wrapper, 1));
          } catch (e) {
            $reject$1.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify$1(promise, false);
      }
    } catch (e) {
      $reject$1.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE$3) {
    // 25.4.3.1 Promise(executor)
    $Promise$1 = function Promise(executor) {
      _anInstance$1(this, $Promise$1, PROMISE$1, '_h');
      _aFunction$1(executor);
      Internal$1.call(this);

      try {
        executor(_ctx$1($resolve$1, this, 1), _ctx$1($reject$1, this, 1));
      } catch (err) {
        $reject$1.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal$1 = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal$1.prototype = _redefineAll$1($Promise$1.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability$1(_speciesConstructor$1(this, $Promise$1));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$3 ? process$6.domain : undefined;

        this._c.push(reaction);

        if (this._a) this._a.push(reaction);
        if (this._s) notify$1(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability$1 = function OwnPromiseCapability() {
      var promise = new Internal$1();
      this.promise = promise;
      this.resolve = _ctx$1($resolve$1, promise, 1);
      this.reject = _ctx$1($reject$1, promise, 1);
    };

    _newPromiseCapability$1.f = newPromiseCapability$1 = function newPromiseCapability(C) {
      return C === $Promise$1 || C === Wrapper$1 ? new OwnPromiseCapability$1(C) : newGenericPromiseCapability$1(C);
    };
  }

  _export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$3, {
    Promise: $Promise$1
  });
  _setToStringTag$1($Promise$1, PROMISE$1);
  _setSpecies$1(PROMISE$1);
  Wrapper$1 = _core$1[PROMISE$1]; // statics

  _export$1(_export$1.S + _export$1.F * !USE_NATIVE$3, PROMISE$1, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export$1(_export$1.S + _export$1.F * (_library$1 ), PROMISE$1, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve$1( this === Wrapper$1 ? $Promise$1 : this, x);
    }
  });
  _export$1(_export$1.S + _export$1.F * !(USE_NATIVE$3 && _iterDetect$1(function (iter) {
    $Promise$1.all(iter)['catch'](empty$2);
  })), PROMISE$1, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform$1(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf$1(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var reject = capability.reject;
      var result = _perform$1(function () {
        _forOf$1(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  _export$1(_export$1.P + _export$1.R, 'Promise', {
    'finally': function _finally(onFinally) {
      var C = _speciesConstructor$1(this, _core$1.Promise || _global$1.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return _promiseResolve$1(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return _promiseResolve$1(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  });

  _export$1(_export$1.S, 'Promise', {
    'try': function _try(callbackfn) {
      var promiseCapability = _newPromiseCapability$1.f(this);
      var result = _perform$1(callbackfn);
      (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
      return promiseCapability.promise;
    }
  });

  var promise = _core$1.Promise;

  var promise$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": promise,
      __esModule: true
    };
  });
  unwrapExports(promise$1);

  var loader = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise2 = _interopRequireDefault(promise$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * Promise based implementation of XMLHttpRequest Level 2 for GET method.
     */


    var Loader = function () {
      /**
       * @constructs
       * @param {string} [responseType=""] - responseType's value, "text" (equal to ""), "arraybuffer", "blob", "document" or "json"
       */
      function Loader() {
        var responseType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        (0, _classCallCheck3.default)(this, Loader);
        /**
         * @type {string}
         * @private
         */

        this.responseType = responseType;
        /**
         * @type {function}
         * @private
         */

        this.progressCb = undefined;
      }
      /**
       * Method for a promise based file loading.
       * Internally switch between loadOne and loadAll.
       * @public
       * @param {(string|string[])} fileURLs - The URL(s) of the files to load. Accepts a URL pointing to the file location or an array of URLs.
       * @returns {Promise}
       */


      (0, _createClass3.default)(Loader, [{
        key: 'load',
        value: function load(fileURLs) {
          if (fileURLs === undefined) throw new Error('Invalid fileURLs parameter: load method needs at least a url to load');
          if (Array.isArray(fileURLs)) return this.loadAll(fileURLs);else return this.loadOne(fileURLs);
        }
        /**
         * Load a single file
         * @private
         * @param {string} fileURL - The URL of the file to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadOne',
        value: function loadOne(fileURL) {
          return this.fileLoadingRequest(fileURL);
        }
        /**
         * Load all files at once in a single array and return a Promise
         * @private
         * @param {string[]} fileURLs - The URLs array of the files to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadAll',
        value: function loadAll(fileURLs) {
          var _this = this;

          var promises = fileURLs.map(function (fileURL, index) {
            return _this.fileLoadingRequest(fileURL, index);
          });
          return _promise2.default.all(promises);
        }
        /**
         * Load a file asynchronously, return a Promise.
         * @private
         * @param {string} url - The URL of the file to load
         * @param {string} [index] - The index of the file in the array of files to load
         * @returns {Promise}
         */

      }, {
        key: 'fileLoadingRequest',
        value: function fileLoadingRequest(url, index) {
          var _this2 = this;

          var promise = new _promise2.default(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.index = index;

            if (_this2.responseType) {
              request.responseType = _this2.responseType;
            } else {
              var suffix = '.json';

              if (url.indexOf(suffix, _this2.length - suffix.length) !== -1) {
                request.responseType = 'json';
              } else {
                request.responseType = 'arraybuffer';
              }
            }

            request.addEventListener('load', function () {
              // Test request.status value, as 404 will also get there
              // Test request.status === 0 for cordova internal ajax calls
              if (request.status === 200 || request.status === 304 || request.status === 0) {
                // Hack for iOS 7, to remove as soon as possible
                if (this.responseType === 'json' && typeof request.response === 'string') request.response = JSON.parse(request.response);
                resolve(request.response);
              } else {
                reject(new Error(request.statusText));
              }
            });
            request.addEventListener('progress', function (evt) {
              if (_this2.progressCallback) {
                var event = {
                  value: evt.loaded / evt.total,
                  loaded: evt.loaded,
                  total: evt.total
                };
                if (index !== undefined) event.index = index;

                _this2.progressCallback(event);
              }
            }); // Manage network errors

            request.addEventListener('error', function () {
              reject(new Error('Network Error'));
            });
            request.send();
          });
          return promise;
        }
        /**
         * Alternative API to set the progress callback.
         * @type {function} callback - The callback that handles the response.
         */

      }, {
        key: 'onProgress',
        value: function onProgress(callback) {
          this.progressCb = callback;
        }
        /**
         * Get the callback function to get the progress of file loading process.
         * This is only for the file loading progress as decodeAudioData doesn't
         * expose a decode progress value.
         * @type {function}
         */

      }, {
        key: 'progressCallback',
        get: function get() {
          return this.progressCb;
        }
        /**
         * Set the callback function to get the progress of file loading process.
         * This is only for the file loading progress as decodeAudioData doesn't
         * expose a decode progress value.
         * @type {function} callback - The callback that handles the response.
         */
        ,
        set: function set(callback) {
          this.progressCb = callback;
        }
      }]);
      return Loader;
    }();

    exports.default = Loader;
  });
  unwrapExports(loader);

  var audioBufferLoader = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _get3 = _interopRequireDefault(get$1);

    var _inherits3 = _interopRequireDefault(inherits);

    var _promise3 = _interopRequireDefault(promise$1);

    var _loader2 = _interopRequireDefault(loader);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error('WebAudio API not supported');
    var audioContext = new AudioContext();
    var silentBuffer = new Uint32Array([0x46464952, 0x00000038, 0x45564157, 0x20746d66, 0x00000010, 0x00010001, 0x0000ac44, 0x00015888, 0x00100002, 0x61746164, 0x00000014, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000]).buffer;

    var noop = function noop() {}; // @todo - review to allow to use external audioContext


    var _decodeAudioData = audioContext.decodeAudioData;
    var promise = audioContext.decodeAudioData(silentBuffer, noop, noop); // implement non promised base decode audio data

    if (!promise) {
      _decodeAudioData = function decodeAudioData(arraybuffer) {
        return new _promise3.default(function (resolve, reject) {
          audioContext.decodeAudioData(arraybuffer, function (buffer) {
            resolve(buffer);
          }, function (err) {
            reject(new Error('Unable to decode audio data'));
          });
        });
      };
    }
    /**
     * AudioBufferLoader
     * Promise based implementation of XMLHttpRequest Level 2 for GET method and
     * decode audio data for arraybuffer.
     */


    var AudioBufferLoader = function (_Loader) {
      (0, _inherits3.default)(AudioBufferLoader, _Loader);
      /**
       * Set the responseType to 'arraybuffer' and initialize options.
       * @param {string} [responseType="arraybuffer"]
       */

      function AudioBufferLoader() {
        var responseType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'arraybuffer';
        (0, _classCallCheck3.default)(this, AudioBufferLoader);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AudioBufferLoader.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader)).call(this, responseType));

        _this.options = {
          wrapAroundExtension: 0
        };
        _this.responseType = responseType;
        _this.audioContext = audioContext;
        _this.decodeAudioData = _this.decodeAudioData.bind(_this);
        return _this;
      }
      /**
       * Allow to set the audio context that should be used in order to decode
       * the file and create the AudioBuffer.
       * @param {AudioContext} audioContext
       */


      (0, _createClass3.default)(AudioBufferLoader, [{
        key: 'setAudioContext',
        value: function setAudioContext(audioContext) {
          this.audioContext = audioContext;
        }
        /**
         * Method for promise audio file loading and decoding.
         * @param {(string|string[])} fileURLs - The URL(s) of the audio files to load.
         *  Accepts a URL pointing to the file location or an array of URLs.
         * @param {{wrapAroundExtension: number}} [options] - Object with a
         *  wrapAroundExtension key which set the length, in seconds to be copied from
         *  the begining at the end of the returned AudioBuffer
         * @returns {Promise}
         */

      }, {
        key: 'load',
        value: function load(fileURLs) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.options = options;
          this.options.wrapAroundExtension = this.options.wrapAroundExtension || 0;
          return (0, _get3.default)(AudioBufferLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader.prototype), 'load', this).call(this, fileURLs);
        }
        /**
         * Load a single audio file, decode it in an AudioBuffer, return a Promise
         * @private
         * @param {string} fileURL - The URL of the audio file location to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadOne',
        value: function loadOne(fileURL) {
          return (0, _get3.default)(AudioBufferLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader.prototype), 'loadOne', this).call(this, fileURL).then(this.decodeAudioData).catch(function (err) {
            throw err;
          });
        }
        /**
         * Load all audio files at once in a single array, decode them in an array of
         * AudioBuffers, and return a Promise.
         * @private
         * @param {string[]} fileURLs - The URLs array of the audio files to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadAll',
        value: function loadAll(fileURLs) {
          var _this2 = this;

          return (0, _get3.default)(AudioBufferLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader.prototype), 'loadAll', this).call(this, fileURLs).then(function (arraybuffers) {
            var promises = arraybuffers.map(function (arraybuffer) {
              return _this2.decodeAudioData(arraybuffer);
            });
            return _promise3.default.all(promises);
          }).catch(function (err) {
            throw err;
          });
        }
        /**
         * Decode Audio Data, return a Promise
         * @private
         * @param {arraybuffer} - The arraybuffer of the loaded audio file to be decoded.
         * @returns {Promise}
         */

      }, {
        key: 'decodeAudioData',
        value: function decodeAudioData(arraybuffer) {
          var _this3 = this;

          if (arraybuffer instanceof ArrayBuffer) {
            var _promise = _decodeAudioData.call(audioContext, arraybuffer);

            _promise.then(function (buffer) {
              if (_this3.options.wrapAroundExtension !== 0) buffer = _this3.__wrapAround(buffer);
              return _promise3.default.resolve(buffer);
            }).catch(function (err) {
              throw new Error('Unable to decode audio data');
            });

            return _promise;
          } else {
            return _promise3.default.resolve(arraybuffer);
          }
        }
        /**
         * WrapAround, copy the begining input buffer to the end of an output buffer
         * @private
         * @param {arraybuffer} inBuffer {arraybuffer} - The input buffer
         * @returns {arraybuffer} - The processed buffer (with frame copied from the begining to the end)
         */

      }, {
        key: '__wrapAround',
        value: function __wrapAround(inBuffer) {
          var numberOfChannels = inBuffer.numberOfChannels,
              sampleRate = inBuffer.sampleRate,
              length = inBuffer.length;
          var outLength = length + this.options.wrapAroundExtension * sampleRate;
          var outBuffer = this.audioContext.createBuffer(numberOfChannels, outLength, sampleRate);

          for (var channel = 0; channel < numberOfChannels; channel++) {
            var channelData = inBuffer.getChannelData(channel);
            var outData = outBuffer.getChannelData(channel);
            var inLength = inBuffer.length;

            for (var i = 0; i < outLength; i++) {
              if (i < inLength) outData[i] = channelData[i];else outData[i] = channelData[i - inLength];
            }
          }

          return outBuffer;
        }
      }]);
      return AudioBufferLoader;
    }(_loader2.default);

    exports.default = AudioBufferLoader;
  });
  unwrapExports(audioBufferLoader);

  var superLoader = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _audioBufferLoader2 = _interopRequireDefault(audioBufferLoader);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * SuperLoader
     * Helper to load multiple type of files, and get them in their useful type, json for json files, AudioBuffer for audio files.
     */


    var SuperLoader = function (_AudioBufferLoader) {
      (0, _inherits3.default)(SuperLoader, _AudioBufferLoader);
      /**
       * Use composition to setup appropriate file loaders
       */

      function SuperLoader() {
        (0, _classCallCheck3.default)(this, SuperLoader);
        return (0, _possibleConstructorReturn3.default)(this, (SuperLoader.__proto__ || (0, _getPrototypeOf2.default)(SuperLoader)).call(this, null)); // bypass AudioBufferLoader constructor. This is bad but it works.
      }

      return SuperLoader;
    }(_audioBufferLoader2.default);

    exports.default = SuperLoader;
  });
  unwrapExports(superLoader);

  var dist$2 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'Loader', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(loader).default;
      }
    });
    Object.defineProperty(exports, 'AudioBufferLoader', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(audioBufferLoader).default;
      }
    });
    Object.defineProperty(exports, 'SuperLoader', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(superLoader).default;
      }
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });
  var loaders = unwrapExports(dist$2);

  var audioContext$1 = audio.audioContext;
  var fadeTime = 0.1;
  var maxGain = 0.2;

  var LoopSynth = /*#__PURE__*/function () {
    function LoopSynth() {
      _classCallCheck(this, LoopSynth);

      this.buffers = new Map();
      this.id = null;
      this.src = null;
      this.gain = null; // audio i/o

      this.input = null;
      this.output = this.level;
    }

    _createClass(LoopSynth, [{
      key: "addSound",
      value: function addSound(id, fileName) {
        var _this = this;

        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.buffers.set(id, null);
        new loaders.AudioBufferLoader().load(fileName).then(function (audioBuffer) {
          _this.buffers.set(id, audioBuffer);

          if (callback) callback();
        });
      }
    }, {
      key: "start",
      value: function start(id) {
        if (id !== this.id) {
          this.stop();
          var time = audioContext$1.currentTime;
          var gain = audioContext$1.createGain();
          gain.connect(audioContext$1.destination);
          gain.gain.value = 0;
          gain.gain.setValueAtTime(0, time);
          gain.gain.linearRampToValueAtTime(maxGain, time + fadeTime);
          var src = audioContext$1.createBufferSource();
          src.connect(gain);
          src.buffer = this.buffers.get(id);
          src.start(time);
          src.loop = true;
          this.src = src;
          this.gain = gain;
          this.id = id;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.src !== null) {
          var time = audioContext$1.currentTime;
          this.gain.gain.setValueAtTime(maxGain, time);
          this.gain.gain.linearRampToValueAtTime(0, time + fadeTime);
          this.src.stop(time + fadeTime);
          this.src = null;
          this.gain = null;
          this.id = null;
        }
      }
    }]);

    return LoopSynth;
  }();

  var audioContext$2 = audio.audioContext;

  function powerToDecibel(val) {
    return 4.3429448190325175 * Math.log(val); // 10 * log10(val)
  }

  function decibelToPower(val) {
    return Math.exp(0.23025850929940458 * val); // pow(10, val / 10)
  }
  var freqTolerance = 4;
  var levelThreshold = 3;
  var lpB1 = 0.666;
  var lpA = 0.333;

  var SpectrumAnalyser = /*#__PURE__*/function () {
    function SpectrumAnalyser(fftSize, freqs) {
      var period = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      _classCallCheck(this, SpectrumAnalyser);

      this.analyser = audioContext$2.createAnalyser(fftSize);
      this.analyser.smoothingTimeConstant = 0;
      var deltaFreq = audioContext$2.sampleRate / fftSize;
      this.deltaFreq = deltaFreq;
      var numBins = this.analyser.frequencyBinCount;
      this.array = new Float32Array(numBins);
      this.startBin = Math.max(2, Math.floor(freqs[0] / deltaFreq));
      this.endBin = Math.min(numBins - 2, Math.ceil(freqs[freqs.length - 1] / deltaFreq));
      this.freqs = freqs;
      this.peaks = [];

      for (var i = 0; i < freqs.length; i++) {
        this.peaks[i] = {
          bin: freqs[i] / deltaFreq,
          freq: freqs[i],
          level: -120
        };
      }

      this.period = period;
      this.callback = callback;
      this.timeout = null;
      this.input = this.analyser;
      this.analyse = this.analyse.bind(this);
    }

    _createClass(SpectrumAnalyser, [{
      key: "analyse",
      value: function analyse() {
        var bins = this.array;
        var startBin = this.startBin;
        var endBin = this.endBin;
        var numBins = endBin - startBin;
        var freqs = this.freqs;
        var numFreqs = freqs.length;
        var deltaFreq = this.deltaFreq;
        var peaks = this.peaks;
        this.analyser.getFloatFrequencyData(bins);
        var totalPower = 0;

        for (var i = startBin; i < endBin; i++) {
          var level = bins[i];
          var power = decibelToPower(level);
          totalPower += power;
        }

        totalPower /= numBins;
        var groundLevel = powerToDecibel(totalPower);
        var j = 0;

        for (var _i = startBin; _i < endBin; _i++) {
          var center = bins[_i];
          var left = bins[_i - 1];
          var right = bins[_i + 1];
          var minLevel = groundLevel + levelThreshold;

          if (center > left && center > right && center > minLevel) {
            var a = 0.5 * (right + left) - center;
            var b = 0.5 * (right - left);
            var frac = -b / (2.0 * a);
            var peakLevel = (a * frac + b) * frac + center;
            var peakIndex = _i + frac;
            var freq = peakIndex * deltaFreq;

            while (j < numFreqs && freq > freqs[j] && freq - freqs[j] > freqTolerance) {
              peaks[j].level *= lpB1;
              peaks[j].level += lpA * -120;
              j++;
            }

            if (j < numFreqs && Math.abs(freq - freqs[j]) <= freqTolerance) {
              peaks[j].level *= lpB1;
              peaks[j].level += lpA * peakLevel;
              j++;
            }
          }
        }

        while (j < numFreqs) {
          peaks[j].level *= lpB1;
          peaks[j].level += lpA * -120;
          j++;
        }

        if (this.callback) this.callback(this.array, this.peaks);
        this.timeout = setTimeout(this.analyse, this.period * 1000);
      }
    }, {
      key: "start",
      value: function start() {
        this.analyse();
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.timeout !== null) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
    }]);

    return SpectrumAnalyser;
  }();

  var MotionInput_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * `MotionInput` singleton.
     * The `MotionInput` singleton allows to initialize motion events
     * and to listen to them.
     *
     * @class MotionInput
     */


    var MotionInput = function () {
      /**
       * Creates the `MotionInput` module instance.
       *
       * @constructor
       */
      function MotionInput() {
        _classCallCheck(this, MotionInput);
        /**
         * Pool of all available modules.
         *
         * @this MotionInput
         * @type {object}
         * @default {}
         */


        this.modules = {};
      }
      /**
       * Adds a module to the `MotionInput` module.
       *
       * @param {string} eventType - Name of the event type.
       * @param {InputModule} module - Module to add to the `MotionInput` module.
       */


      _createClass(MotionInput, [{
        key: "addModule",
        value: function addModule(eventType, module) {
          this.modules[eventType] = module;
        }
        /**
         * Gets a module.
         *
         * @param {string} eventType - Name of the event type (module) to retrieve.
         * @return {InputModule}
         */

      }, {
        key: "getModule",
        value: function getModule(eventType) {
          return this.modules[eventType];
        }
        /**
         * Requires a module.
         * If the module has been initialized already, returns its promise. Otherwise,
         * initializes the module.
         *
         * @param {string} eventType - Name of the event type (module) to require.
         * @return {Promise}
         */

      }, {
        key: "requireModule",
        value: function requireModule(eventType) {
          var module = this.getModule(eventType);
          if (module.promise) return module.promise;
          return module.init();
        }
        /**
         * Initializes the `MotionInput` module.
         *
         * @param {Array<String>} eventTypes - Array of the event types to initialize.
         * @return {Promise}
         */

      }, {
        key: "init",
        value: function init() {
          var _this = this;

          for (var _len = arguments.length, eventTypes = Array(_len), _key = 0; _key < _len; _key++) {
            eventTypes[_key] = arguments[_key];
          }

          if (Array.isArray(eventTypes[0])) eventTypes = eventTypes[0];
          var modulePromises = eventTypes.map(function (value) {
            var module = _this.getModule(value);

            return module.init();
          });
          return Promise.all(modulePromises);
        }
        /**
         * Adds a listener.
         *
         * @param {string} eventType - Name of the event type (module) to add a listener to.
         * @param {function} listener - Listener to add.
         */

      }, {
        key: "addListener",
        value: function addListener(eventType, listener) {
          var module = this.getModule(eventType);
          module.addListener(listener);
        }
        /**
         * Removes a listener.
         *
         * @param {string} eventType - Name of the event type (module) to add a listener to.
         * @param {function} listener - Listener to remove.
         */

      }, {
        key: "removeListener",
        value: function removeListener(eventType, listener) {
          var module = this.getModule(eventType);
          module.removeListener(listener);
        }
      }]);

      return MotionInput;
    }();

    exports.default = new MotionInput();
  });
  unwrapExports(MotionInput_1);

  var InputModule_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * `InputModule` class.
     * The `InputModule` class allows to instantiate modules that are part of the
     * motion input module, and that provide values (for instance, `deviceorientation`,
     * `acceleration`, `energy`).
     *
     * @class InputModule
     */


    var InputModule = function () {
      /**
       * Creates an `InputModule` module instance.
       *
       * @constructor
       * @param {string} eventType - Name of the module / event (*e.g.* `deviceorientation, 'acceleration', 'energy').
       */
      function InputModule(eventType) {
        _classCallCheck(this, InputModule);
        /**
         * Event type of the module.
         *
         * @this InputModule
         * @type {string}
         * @constant
         */


        this.eventType = eventType;
        /**
         * Array of listeners attached to this module / event.
         *
         * @this InputModule
         * @type {Set<Function>}
         */

        this.listeners = new Set();
        /**
         * Event sent by this module.
         *
         * @this InputModule
         * @type {number|number[]}
         * @default null
         */

        this.event = null;
        /**
         * Module promise (resolved when the module is initialized).
         *
         * @this InputModule
         * @type {Promise}
         * @default null
         */

        this.promise = null;
        /**
         * Indicates if the module's event values are calculated from parent modules / events.
         *
         * @this InputModule
         * @type {bool}
         * @default false
         */

        this.isCalculated = false;
        /**
         * Indicates if the module's event values are provided by the device's sensors.
         * (*I.e.* indicates if the `'devicemotion'` or `'deviceorientation'` events provide the required raw values.)
         *
         * @this InputModule
         * @type {bool}
         * @default false
         */

        this.isProvided = false;
        /**
         * Period at which the module's events are sent (`undefined` if the events are not sent at regular intervals).
         *
         * @this InputModule
         * @type {number}
         * @default undefined
         */

        this.period = undefined;
        this.emit = this.emit.bind(this);
      }
      /**
       * Indicates whether the module can provide values or not.
       *
       * @type {bool}
       * @readonly
       */


      _createClass(InputModule, [{
        key: "init",

        /**
         * Initializes the module.
         *
         * @param {function} promiseFun - Promise function that takes the `resolve` and `reject` functions as arguments.
         * @return {Promise}
         */
        value: function init(promiseFun) {
          this.promise = new Promise(promiseFun);
          return this.promise;
        }
        /**
         * Adds a listener to the module.
         *
         * @param {function} listener - Listener to add.
         */

      }, {
        key: "addListener",
        value: function addListener(listener) {
          this.listeners.add(listener);
        }
        /**
         * Removes a listener from the module.
         *
         * @param {function} listener - Listener to remove.
         */

      }, {
        key: "removeListener",
        value: function removeListener(listener) {
          this.listeners.delete(listener);
        }
        /**
         * Propagates an event to all the module's listeners.
         *
         * @param {number|number[]} [event=this.event] - Event values to propagate to the module's listeners.
         */

      }, {
        key: "emit",
        value: function emit() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.event;
          this.listeners.forEach(function (listener) {
            return listener(event);
          });
        }
      }, {
        key: "isValid",
        get: function get() {
          return this.isProvided || this.isCalculated;
        }
      }]);

      return InputModule;
    }();

    exports.default = InputModule;
  });
  unwrapExports(InputModule_1);

  var DOMEventSubmodule_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _InputModule3 = _interopRequireDefault(InputModule_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    /**
     * `DOMEventSubmodule` class.
     * The `DOMEventSubmodule` class allows to instantiate modules that provide
     * unified values (such as `AccelerationIncludingGravity`, `Acceleration`,
     * `RotationRate`, `Orientation`, `OrientationAlt) from the `devicemotion`
     * or `deviceorientation` DOM events.
     *
     * @class DOMEventSubmodule
     * @extends InputModule
     */


    var DOMEventSubmodule = function (_InputModule) {
      _inherits(DOMEventSubmodule, _InputModule);
      /**
       * Creates a `DOMEventSubmodule` module instance.
       *
       * @constructor
       * @param {DeviceMotionModule|DeviceOrientationModule} DOMEventModule - The parent DOM event module.
       * @param {string} eventType - The name of the submodule / event (*e.g.* 'acceleration' or 'orientationAlt').
       * @see DeviceMotionModule
       * @see DeviceOrientationModule
       */


      function DOMEventSubmodule(DOMEventModule, eventType) {
        _classCallCheck(this, DOMEventSubmodule);
        /**
         * The DOM event parent module from which this module gets the raw values.
         *
         * @this DOMEventSubmodule
         * @type {DeviceMotionModule|DeviceOrientationModule}
         * @constant
         */


        var _this = _possibleConstructorReturn(this, (DOMEventSubmodule.__proto__ || Object.getPrototypeOf(DOMEventSubmodule)).call(this, eventType));

        _this.DOMEventModule = DOMEventModule;
        /**
         * Raw values coming from the `devicemotion` event sent by this module.
         *
         * @this DOMEventSubmodule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this.event = [0, 0, 0];
        /**
         * Compass heading reference (iOS devices only, `Orientation` and `OrientationAlt` submodules only).
         *
         * @this DOMEventSubmodule
         * @type {number}
         * @default null
         */

        _this._webkitCompassHeadingReference = null;
        return _this;
      }
      /**
       * Initializes of the module.
       *
       * @return {Promise}
       */


      _createClass(DOMEventSubmodule, [{
        key: 'init',
        value: function init() {
          var _this2 = this; // Indicate to the parent module that this event is required


          this.DOMEventModule.required[this.eventType] = true; // If the parent event has not been initialized yet, initialize it

          var DOMEventPromise = this.DOMEventModule.promise;
          if (!DOMEventPromise) DOMEventPromise = this.DOMEventModule.init();
          return DOMEventPromise.then(function (module) {
            return _this2;
          });
        }
      }]);

      return DOMEventSubmodule;
    }(_InputModule3.default);

    exports.default = DOMEventSubmodule;
  });
  unwrapExports(DOMEventSubmodule_1);

  var platform$1 = createCommonjsModule(function (module, exports) {
    (function () {
      /** Used to determine if values are of the language type `Object`. */

      var objectTypes = {
        'function': true,
        'object': true
      };
      /** Used as a reference to the global object. */

      var root = objectTypes[typeof window] && window || this;
      /** Backup possible global object. */

      var oldRoot = root;
      /** Detect free variable `exports`. */

      var freeExports = objectTypes['object'] && exports;
      /** Detect free variable `module`. */

      var freeModule = objectTypes['object'] && module && !module.nodeType && module;
      /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */

      var freeGlobal = freeExports && freeModule && typeof commonjsGlobal == 'object' && commonjsGlobal;

      if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
        root = freeGlobal;
      }
      /**
       * Used as the maximum length of an array-like object.
       * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
       * for more details.
       */


      var maxSafeInteger = Math.pow(2, 53) - 1;
      /** Regular expression to detect Opera. */

      var reOpera = /\bOpera/;
      /** Possible global object. */

      var thisBinding = this;
      /** Used for native method references. */

      var objectProto = Object.prototype;
      /** Used to check for own properties of an object. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /** Used to resolve the internal `[[Class]]` of values. */

      var toString = objectProto.toString;
      /*--------------------------------------------------------------------------*/

      /**
       * Capitalizes a string value.
       *
       * @private
       * @param {string} string The string to capitalize.
       * @returns {string} The capitalized string.
       */

      function capitalize(string) {
        string = String(string);
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      /**
       * A utility function to clean up the OS name.
       *
       * @private
       * @param {string} os The OS name to clean up.
       * @param {string} [pattern] A `RegExp` pattern matching the OS name.
       * @param {string} [label] A label for the OS.
       */


      function cleanupOS(os, pattern, label) {
        // Platform tokens are defined at:
        // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
        // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
        var data = {
          '10.0': '10',
          '6.4': '10 Technical Preview',
          '6.3': '8.1',
          '6.2': '8',
          '6.1': 'Server 2008 R2 / 7',
          '6.0': 'Server 2008 / Vista',
          '5.2': 'Server 2003 / XP 64-bit',
          '5.1': 'XP',
          '5.01': '2000 SP1',
          '5.0': '2000',
          '4.0': 'NT',
          '4.90': 'ME'
        }; // Detect Windows version from platform tokens.

        if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) && (data = data[/[\d.]+$/.exec(os)])) {
          os = 'Windows ' + data;
        } // Correct character case and cleanup string.


        os = String(os);

        if (pattern && label) {
          os = os.replace(RegExp(pattern, 'i'), label);
        }

        os = format(os.replace(/ ce$/i, ' CE').replace(/\bhpw/i, 'web').replace(/\bMacintosh\b/, 'Mac OS').replace(/_PowerPC\b/i, ' OS').replace(/\b(OS X) [^ \d]+/i, '$1').replace(/\bMac (OS X)\b/, '$1').replace(/\/(\d)/, ' $1').replace(/_/g, '.').replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, 'x86_64').replace(/\b(Windows Phone) OS\b/, '$1').replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1').split(' on ')[0]);
        return os;
      }
      /**
       * An iteration utility for arrays and objects.
       *
       * @private
       * @param {Array|Object} object The object to iterate over.
       * @param {Function} callback The function called per iteration.
       */


      function each(object, callback) {
        var index = -1,
            length = object ? object.length : 0;

        if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
          while (++index < length) {
            callback(object[index], index, object);
          }
        } else {
          forOwn(object, callback);
        }
      }
      /**
       * Trim and conditionally capitalize string values.
       *
       * @private
       * @param {string} string The string to format.
       * @returns {string} The formatted string.
       */


      function format(string) {
        string = trim(string);
        return /^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string);
      }
      /**
       * Iterates over an object's own properties, executing the `callback` for each.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} callback The function executed per own property.
       */


      function forOwn(object, callback) {
        for (var key in object) {
          if (hasOwnProperty.call(object, key)) {
            callback(object[key], key, object);
          }
        }
      }
      /**
       * Gets the internal `[[Class]]` of a value.
       *
       * @private
       * @param {*} value The value.
       * @returns {string} The `[[Class]]`.
       */


      function getClassOf(value) {
        return value == null ? capitalize(value) : toString.call(value).slice(8, -1);
      }
      /**
       * Host objects can return type values that are different from their actual
       * data type. The objects we are concerned with usually return non-primitive
       * types of "object", "function", or "unknown".
       *
       * @private
       * @param {*} object The owner of the property.
       * @param {string} property The property to check.
       * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
       */


      function isHostType(object, property) {
        var type = object != null ? typeof object[property] : 'number';
        return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
      }
      /**
       * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
       *
       * @private
       * @param {string} string The string to qualify.
       * @returns {string} The qualified string.
       */


      function qualify(string) {
        return String(string).replace(/([ -])(?!$)/g, '$1?');
      }
      /**
       * A bare-bones `Array#reduce` like utility function.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} callback The function called per iteration.
       * @returns {*} The accumulated result.
       */


      function reduce(array, callback) {
        var accumulator = null;
        each(array, function (value, index) {
          accumulator = callback(accumulator, value, index, array);
        });
        return accumulator;
      }
      /**
       * Removes leading and trailing whitespace from a string.
       *
       * @private
       * @param {string} string The string to trim.
       * @returns {string} The trimmed string.
       */


      function trim(string) {
        return String(string).replace(/^ +| +$/g, '');
      }
      /*--------------------------------------------------------------------------*/

      /**
       * Creates a new platform object.
       *
       * @memberOf platform
       * @param {Object|string} [ua=navigator.userAgent] The user agent string or
       *  context object.
       * @returns {Object} A platform object.
       */


      function parse(ua) {
        /** The environment context object. */
        var context = root;
        /** Used to flag when a custom context is provided. */

        var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String'; // Juggle arguments.

        if (isCustomContext) {
          context = ua;
          ua = null;
        }
        /** Browser navigator object. */


        var nav = context.navigator || {};
        /** Browser user agent string. */

        var userAgent = nav.userAgent || '';
        ua || (ua = userAgent);
        /** Used to flag when `thisBinding` is the [ModuleScope]. */

        var isModuleScope = isCustomContext || thisBinding == oldRoot;
        /** Used to detect if browser is like Chrome. */

        var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
        /** Internal `[[Class]]` value shortcuts. */

        var objectClass = 'Object',
            airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
            enviroClass = isCustomContext ? objectClass : 'Environment',
            javaClass = isCustomContext && context.java ? 'JavaPackage' : getClassOf(context.java),
            phantomClass = isCustomContext ? objectClass : 'RuntimeObject';
        /** Detect Java environments. */

        var java = /\bJava/.test(javaClass) && context.java;
        /** Detect Rhino. */

        var rhino = java && getClassOf(context.environment) == enviroClass;
        /** A character to represent alpha. */

        var alpha = java ? 'a' : '\u03b1';
        /** A character to represent beta. */

        var beta = java ? 'b' : '\u03b2';
        /** Browser document object. */

        var doc = context.document || {};
        /**
         * Detect Opera browser (Presto-based).
         * http://www.howtocreate.co.uk/operaStuff/operaObject.html
         * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
         */

        var opera = context.operamini || context.opera;
        /** Opera `[[Class]]`. */

        var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera['[[Class]]'] : getClassOf(opera)) ? operaClass : opera = null;
        /*------------------------------------------------------------------------*/

        /** Temporary variable used over the script's lifetime. */

        var data;
        /** The CPU architecture. */

        var arch = ua;
        /** Platform description array. */

        var description = [];
        /** Platform alpha/beta indicator. */

        var prerelease = null;
        /** A flag to indicate that environment features should be used to resolve the platform. */

        var useFeatures = ua == userAgent;
        /** The browser/environment version. */

        var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();
        /** A flag to indicate if the OS ends with "/ Version" */

        var isSpecialCasedOS;
        /* Detectable layout engines (order is important). */

        var layout = getLayout([{
          'label': 'EdgeHTML',
          'pattern': 'Edge'
        }, 'Trident', {
          'label': 'WebKit',
          'pattern': 'AppleWebKit'
        }, 'iCab', 'Presto', 'NetFront', 'Tasman', 'KHTML', 'Gecko']);
        /* Detectable browser names (order is important). */

        var name = getName(['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Electron', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon', {
          'label': 'Microsoft Edge',
          'pattern': 'Edge'
        }, 'Midori', 'Nook Browser', 'PaleMoon', 'PhantomJS', 'Raven', 'Rekonq', 'RockMelt', {
          'label': 'Samsung Internet',
          'pattern': 'SamsungBrowser'
        }, 'SeaMonkey', {
          'label': 'Silk',
          'pattern': '(?:Cloud9|Silk-Accelerated)'
        }, 'Sleipnir', 'SlimBrowser', {
          'label': 'SRWare Iron',
          'pattern': 'Iron'
        }, 'Sunrise', 'Swiftfox', 'Waterfox', 'WebPositive', 'Opera Mini', {
          'label': 'Opera Mini',
          'pattern': 'OPiOS'
        }, 'Opera', {
          'label': 'Opera',
          'pattern': 'OPR'
        }, 'Chrome', {
          'label': 'Chrome Mobile',
          'pattern': '(?:CriOS|CrMo)'
        }, {
          'label': 'Firefox',
          'pattern': '(?:Firefox|Minefield)'
        }, {
          'label': 'Firefox for iOS',
          'pattern': 'FxiOS'
        }, {
          'label': 'IE',
          'pattern': 'IEMobile'
        }, {
          'label': 'IE',
          'pattern': 'MSIE'
        }, 'Safari']);
        /* Detectable products (order is important). */

        var product = getProduct([{
          'label': 'BlackBerry',
          'pattern': 'BB10'
        }, 'BlackBerry', {
          'label': 'Galaxy S',
          'pattern': 'GT-I9000'
        }, {
          'label': 'Galaxy S2',
          'pattern': 'GT-I9100'
        }, {
          'label': 'Galaxy S3',
          'pattern': 'GT-I9300'
        }, {
          'label': 'Galaxy S4',
          'pattern': 'GT-I9500'
        }, {
          'label': 'Galaxy S5',
          'pattern': 'SM-G900'
        }, {
          'label': 'Galaxy S6',
          'pattern': 'SM-G920'
        }, {
          'label': 'Galaxy S6 Edge',
          'pattern': 'SM-G925'
        }, {
          'label': 'Galaxy S7',
          'pattern': 'SM-G930'
        }, {
          'label': 'Galaxy S7 Edge',
          'pattern': 'SM-G935'
        }, 'Google TV', 'Lumia', 'iPad', 'iPod', 'iPhone', 'Kindle', {
          'label': 'Kindle Fire',
          'pattern': '(?:Cloud9|Silk-Accelerated)'
        }, 'Nexus', 'Nook', 'PlayBook', 'PlayStation Vita', 'PlayStation', 'TouchPad', 'Transformer', {
          'label': 'Wii U',
          'pattern': 'WiiU'
        }, 'Wii', 'Xbox One', {
          'label': 'Xbox 360',
          'pattern': 'Xbox'
        }, 'Xoom']);
        /* Detectable manufacturers. */

        var manufacturer = getManufacturer({
          'Apple': {
            'iPad': 1,
            'iPhone': 1,
            'iPod': 1
          },
          'Archos': {},
          'Amazon': {
            'Kindle': 1,
            'Kindle Fire': 1
          },
          'Asus': {
            'Transformer': 1
          },
          'Barnes & Noble': {
            'Nook': 1
          },
          'BlackBerry': {
            'PlayBook': 1
          },
          'Google': {
            'Google TV': 1,
            'Nexus': 1
          },
          'HP': {
            'TouchPad': 1
          },
          'HTC': {},
          'LG': {},
          'Microsoft': {
            'Xbox': 1,
            'Xbox One': 1
          },
          'Motorola': {
            'Xoom': 1
          },
          'Nintendo': {
            'Wii U': 1,
            'Wii': 1
          },
          'Nokia': {
            'Lumia': 1
          },
          'Samsung': {
            'Galaxy S': 1,
            'Galaxy S2': 1,
            'Galaxy S3': 1,
            'Galaxy S4': 1
          },
          'Sony': {
            'PlayStation': 1,
            'PlayStation Vita': 1
          }
        });
        /* Detectable operating systems (order is important). */

        var os = getOS(['Windows Phone', 'Android', 'CentOS', {
          'label': 'Chrome OS',
          'pattern': 'CrOS'
        }, 'Debian', 'Fedora', 'FreeBSD', 'Gentoo', 'Haiku', 'Kubuntu', 'Linux Mint', 'OpenBSD', 'Red Hat', 'SuSE', 'Ubuntu', 'Xubuntu', 'Cygwin', 'Symbian OS', 'hpwOS', 'webOS ', 'webOS', 'Tablet OS', 'Tizen', 'Linux', 'Mac OS X', 'Macintosh', 'Mac', 'Windows 98;', 'Windows ']);
        /*------------------------------------------------------------------------*/

        /**
         * Picks the layout engine from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected layout engine.
         */

        function getLayout(guesses) {
          return reduce(guesses, function (result, guess) {
            return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
          });
        }
        /**
         * Picks the manufacturer from an array of guesses.
         *
         * @private
         * @param {Array} guesses An object of guesses.
         * @returns {null|string} The detected manufacturer.
         */


        function getManufacturer(guesses) {
          return reduce(guesses, function (result, value, key) {
            // Lookup the manufacturer by product or scan the UA for the manufacturer.
            return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)) && key;
          });
        }
        /**
         * Picks the browser name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected browser name.
         */


        function getName(guesses) {
          return reduce(guesses, function (result, guess) {
            return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
          });
        }
        /**
         * Picks the OS name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected OS name.
         */


        function getOS(guesses) {
          return reduce(guesses, function (result, guess) {
            var pattern = guess.pattern || qualify(guess);

            if (!result && (result = RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
              result = cleanupOS(result, pattern, guess.label || guess);
            }

            return result;
          });
        }
        /**
         * Picks the product name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected product name.
         */


        function getProduct(guesses) {
          return reduce(guesses, function (result, guess) {
            var pattern = guess.pattern || qualify(guess);

            if (!result && (result = RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) || RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) || RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua))) {
              // Split by forward slash and append product version if needed.
              if ((result = String(guess.label && !RegExp(pattern, 'i').test(guess.label) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
                result[0] += ' ' + result[1];
              } // Correct character case and cleanup string.


              guess = guess.label || guess;
              result = format(result[0].replace(RegExp(pattern, 'i'), guess).replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ').replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
            }

            return result;
          });
        }
        /**
         * Resolves the version using an array of UA patterns.
         *
         * @private
         * @param {Array} patterns An array of UA patterns.
         * @returns {null|string} The detected version.
         */


        function getVersion(patterns) {
          return reduce(patterns, function (result, pattern) {
            return result || (RegExp(pattern + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
          });
        }
        /**
         * Returns `platform.description` when the platform object is coerced to a string.
         *
         * @name toString
         * @memberOf platform
         * @returns {string} Returns `platform.description` if available, else an empty string.
         */


        function toStringPlatform() {
          return this.description || '';
        }
        /*------------------------------------------------------------------------*/
        // Convert layout to an array so we can add extra details.


        layout && (layout = [layout]); // Detect product names that contain their manufacturer's name.

        if (manufacturer && !product) {
          product = getProduct([manufacturer]);
        } // Clean up Google TV.


        if (data = /\bGoogle TV\b/.exec(product)) {
          product = data[0];
        } // Detect simulators.


        if (/\bSimulator\b/i.test(ua)) {
          product = (product ? product + ' ' : '') + 'Simulator';
        } // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.


        if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
          description.push('running in Turbo/Uncompressed mode');
        } // Detect IE Mobile 11.


        if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
          data = parse(ua.replace(/like iPhone OS/, ''));
          manufacturer = data.manufacturer;
          product = data.product;
        } // Detect iOS.
        else if (/^iP/.test(product)) {
            name || (name = 'Safari');
            os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua)) ? ' ' + data[1].replace(/_/g, '.') : '');
          } // Detect Kubuntu.
          else if (name == 'Konqueror' && !/buntu/i.test(os)) {
              os = 'Kubuntu';
            } // Detect Android browsers.
            else if (manufacturer && manufacturer != 'Google' && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua)) {
                name = 'Android Browser';
                os = /\bAndroid\b/.test(os) ? os : 'Android';
              } // Detect Silk desktop/accelerated modes.
              else if (name == 'Silk') {
                  if (!/\bMobi/i.test(ua)) {
                    os = 'Android';
                    description.unshift('desktop mode');
                  }

                  if (/Accelerated *= *true/i.test(ua)) {
                    description.unshift('accelerated');
                  }
                } // Detect PaleMoon identifying as Firefox.
                else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
                    description.push('identifying as Firefox ' + data[1]);
                  } // Detect Firefox OS and products running Firefox.
                  else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
                      os || (os = 'Firefox OS');
                      product || (product = data[1]);
                    } // Detect false positives for Firefox/Safari.
                    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
                        // Escape the `/` for Firefox 1.
                        if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
                          // Clear name of false positives.
                          name = null;
                        } // Reassign a generic name.


                        if ((data = product || manufacturer || os) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
                          name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
                        }
                      } // Add Chrome version to description for Electron.
                      else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
                          description.push('Chromium ' + data);
                        } // Detect non-Opera (Presto-based) versions (order is important).


        if (!version) {
          version = getVersion(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version', qualify(name), '(?:Firefox|Minefield|NetFront)']);
        } // Detect stubborn layout engines.


        if (data = layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' || !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') || layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront') {
          layout = [data];
        } // Detect Windows Phone 7 desktop mode.


        if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
          name += ' Mobile';
          os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
          description.unshift('desktop mode');
        } // Detect Windows Phone 8.x desktop mode.
        else if (/\bWPDesktop\b/i.test(ua)) {
            name = 'IE Mobile';
            os = 'Windows Phone 8.x';
            description.unshift('desktop mode');
            version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
          } // Detect IE 11 identifying as other browsers.
          else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
              if (name) {
                description.push('identifying as ' + name + (version ? ' ' + version : ''));
              }

              name = 'IE';
              version = data[1];
            } // Leverage environment features.


        if (useFeatures) {
          // Detect server-side environments.
          // Rhino has a global function while others have a global object.
          if (isHostType(context, 'global')) {
            if (java) {
              data = java.lang.System;
              arch = data.getProperty('os.arch');
              os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
            }

            if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
              os || (os = data[0].os || null);

              try {
                data[1] = context.require('ringo/engine').version;
                version = data[1].join('.');
                name = 'RingoJS';
              } catch (e) {
                if (data[0].global.system == context.system) {
                  name = 'Narwhal';
                }
              }
            } else if (typeof context.process == 'object' && !context.process.browser && (data = context.process)) {
              if (typeof data.versions == 'object') {
                if (typeof data.versions.electron == 'string') {
                  description.push('Node ' + data.versions.node);
                  name = 'Electron';
                  version = data.versions.electron;
                } else if (typeof data.versions.nw == 'string') {
                  description.push('Chromium ' + version, 'Node ' + data.versions.node);
                  name = 'NW.js';
                  version = data.versions.nw;
                }
              } else {
                name = 'Node.js';
                arch = data.arch;
                os = data.platform;
                version = /[\d.]+/.exec(data.version);
                version = version ? version[0] : 'unknown';
              }
            } else if (rhino) {
              name = 'Rhino';
            }
          } // Detect Adobe AIR.
          else if (getClassOf(data = context.runtime) == airRuntimeClass) {
              name = 'Adobe AIR';
              os = data.flash.system.Capabilities.os;
            } // Detect PhantomJS.
            else if (getClassOf(data = context.phantom) == phantomClass) {
                name = 'PhantomJS';
                version = (data = data.version || null) && data.major + '.' + data.minor + '.' + data.patch;
              } // Detect IE compatibility modes.
              else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
                  // We're in compatibility mode when the Trident version + 4 doesn't
                  // equal the document mode.
                  version = [version, doc.documentMode];

                  if ((data = +data[1] + 4) != version[1]) {
                    description.push('IE ' + version[1] + ' mode');
                    layout && (layout[1] = '');
                    version[1] = data;
                  }

                  version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
                } // Detect IE 11 masking as other browsers.
                else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
                    description.push('masking as ' + name + ' ' + version);
                    name = 'IE';
                    version = '11.0';
                    layout = ['Trident'];
                    os = 'Windows';
                  }

          os = os && format(os);
        } // Detect prerelease phases.


        if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && 'a')) {
          prerelease = /b/i.test(data) ? 'beta' : 'alpha';
          version = version.replace(RegExp(data + '\\+?$'), '') + (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
        } // Detect Firefox Mobile.


        if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
          name = 'Firefox Mobile';
        } // Obscure Maxthon's unreliable version.
        else if (name == 'Maxthon' && version) {
            version = version.replace(/\.[\d.]+/, '.x');
          } // Detect Xbox 360 and Xbox One.
          else if (/\bXbox\b/i.test(product)) {
              if (product == 'Xbox 360') {
                os = null;
              }

              if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
                description.unshift('mobile mode');
              }
            } // Add mobile postfix.
            else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os == 'Windows CE' || /Mobi/i.test(ua))) {
                name += ' Mobile';
              } // Detect IE platform preview.
              else if (name == 'IE' && useFeatures) {
                  try {
                    if (context.external === null) {
                      description.unshift('platform preview');
                    }
                  } catch (e) {
                    description.unshift('embedded');
                  }
                } // Detect BlackBerry OS version.
                // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
                else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data = (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] || version)) {
                    data = [data, /BB10/.test(ua)];
                    os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
                    version = null;
                  } // Detect Opera identifying/masking itself as another browser.
                  // http://www.opera.com/support/kb/view/843/
                  else if (this != forOwn && product != 'Wii' && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os) || name == 'IE' && (os && !/^Win/.test(os) && version > 5.5 || /\bWindows XP\b/.test(os) && version > 8 || version == 8 && !/\bTrident\b/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, '') + ';')) && data.name) {
                      // When "identifying", the UA contains both Opera and the other browser's name.
                      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');

                      if (reOpera.test(name)) {
                        if (/\bIE\b/.test(data) && os == 'Mac OS') {
                          os = null;
                        }

                        data = 'identify' + data;
                      } // When "masking", the UA contains only the other browser's name.
                      else {
                          data = 'mask' + data;

                          if (operaClass) {
                            name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
                          } else {
                            name = 'Opera';
                          }

                          if (/\bIE\b/.test(data)) {
                            os = null;
                          }

                          if (!useFeatures) {
                            version = null;
                          }
                        }

                      layout = ['Presto'];
                      description.push(data);
                    } // Detect WebKit Nightly and approximate Chrome/Safari versions.


        if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
          // Correct build number for numeric comparison.
          // (e.g. "532.5" becomes "532.05")
          data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data]; // Nightly builds are postfixed with a "+".

          if (name == 'Safari' && data[1].slice(-1) == '+') {
            name = 'WebKit Nightly';
            prerelease = 'alpha';
            version = data[1].slice(0, -1);
          } // Clear incorrect browser versions.
          else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
              version = null;
            } // Use the full Chrome version when available.


          data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1]; // Detect Blink layout engine.

          if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
            layout = ['Blink'];
          } // Detect JavaScriptCore.
          // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi


          if (!useFeatures || !likeChrome && !data[1]) {
            layout && (layout[1] = 'like Safari');
            data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
          } else {
            layout && (layout[1] = 'like Chrome');
            data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
          } // Add the postfix of ".x" or "+" for approximate versions.


          layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+')); // Obscure version for some Safari 1-2 releases.

          if (name == 'Safari' && (!version || parseInt(version) > 45)) {
            version = data;
          }
        } // Detect Opera desktop modes.


        if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
          name += ' ';
          description.unshift('desktop mode');

          if (data == 'zvav') {
            name += 'Mini';
            version = null;
          } else {
            name += 'Mobile';
          }

          os = os.replace(RegExp(' *' + data + '$'), '');
        } // Detect Chrome desktop mode.
        else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
            description.unshift('desktop mode');
            name = 'Chrome Mobile';
            version = null;

            if (/\bOS X\b/.test(os)) {
              manufacturer = 'Apple';
              os = 'iOS 4.3+';
            } else {
              os = null;
            }
          } // Strip incorrect OS versions.


        if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 && ua.indexOf('/' + data + '-') > -1) {
          os = trim(os.replace(data, ''));
        } // Add layout engine.


        if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
          // Don't add layout details to description if they are falsey.
          (data = layout[layout.length - 1]) && description.push(data);
        } // Combine contextual information.


        if (description.length) {
          description = ['(' + description.join('; ') + ')'];
        } // Append manufacturer to description.


        if (manufacturer && product && product.indexOf(manufacturer) < 0) {
          description.push('on ' + manufacturer);
        } // Append product to description.


        if (product) {
          description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
        } // Parse the OS into an object.


        if (os) {
          data = / ([\d.+]+)$/.exec(os);
          isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
          os = {
            'architecture': 32,
            'family': data && !isSpecialCasedOS ? os.replace(data[0], '') : os,
            'version': data ? data[1] : null,
            'toString': function toString() {
              var version = this.version;
              return this.family + (version && !isSpecialCasedOS ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
            }
          };
        } // Add browser/OS architecture.


        if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
          if (os) {
            os.architecture = 64;
            os.family = os.family.replace(RegExp(' *' + data), '');
          }

          if (name && (/\bWOW64\b/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua))) {
            description.unshift('32-bit');
          }
        } // Chrome 39 and above on OS X is always 64-bit.
        else if (os && /^OS X/.test(os.family) && name == 'Chrome' && parseFloat(version) >= 39) {
            os.architecture = 64;
          }

        ua || (ua = null);
        /*------------------------------------------------------------------------*/

        /**
         * The platform object.
         *
         * @name platform
         * @type Object
         */

        var platform = {};
        /**
         * The platform description.
         *
         * @memberOf platform
         * @type string|null
         */

        platform.description = ua;
        /**
         * The name of the browser's layout engine.
         *
         * The list of common layout engines include:
         * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
         *
         * @memberOf platform
         * @type string|null
         */

        platform.layout = layout && layout[0];
        /**
         * The name of the product's manufacturer.
         *
         * The list of manufacturers include:
         * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
         * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
         * "Nokia", "Samsung" and "Sony"
         *
         * @memberOf platform
         * @type string|null
         */

        platform.manufacturer = manufacturer;
        /**
         * The name of the browser/environment.
         *
         * The list of common browser names include:
         * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
         * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
         * "Opera Mini" and "Opera"
         *
         * Mobile versions of some browsers have "Mobile" appended to their name:
         * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
         *
         * @memberOf platform
         * @type string|null
         */

        platform.name = name;
        /**
         * The alpha/beta release indicator.
         *
         * @memberOf platform
         * @type string|null
         */

        platform.prerelease = prerelease;
        /**
         * The name of the product hosting the browser.
         *
         * The list of common products include:
         *
         * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
         * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
         *
         * @memberOf platform
         * @type string|null
         */

        platform.product = product;
        /**
         * The browser's user agent string.
         *
         * @memberOf platform
         * @type string|null
         */

        platform.ua = ua;
        /**
         * The browser/environment version.
         *
         * @memberOf platform
         * @type string|null
         */

        platform.version = name && version;
        /**
         * The name of the operating system.
         *
         * @memberOf platform
         * @type Object
         */

        platform.os = os || {
          /**
           * The CPU architecture the OS is built for.
           *
           * @memberOf platform.os
           * @type number|null
           */
          'architecture': null,

          /**
           * The family of the OS.
           *
           * Common values include:
           * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
           * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
           * "Android", "iOS" and "Windows Phone"
           *
           * @memberOf platform.os
           * @type string|null
           */
          'family': null,

          /**
           * The version of the OS.
           *
           * @memberOf platform.os
           * @type string|null
           */
          'version': null,

          /**
           * Returns the OS string.
           *
           * @memberOf platform.os
           * @returns {string} The OS string.
           */
          'toString': function toString() {
            return 'null';
          }
        };
        platform.parse = parse;
        platform.toString = toStringPlatform;

        if (platform.version) {
          description.unshift(version);
        }

        if (platform.name) {
          description.unshift(name);
        }

        if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
          description.push(product ? '(' + os + ')' : 'on ' + os);
        }

        if (description.length) {
          platform.description = description.join(' ');
        }

        return platform;
      }
      /*--------------------------------------------------------------------------*/
      // Export platform.


      var platform = parse(); // Some AMD build optimizers, like r.js, check for condition patterns like the following:

      if (freeExports && freeModule) {
          // Export for CommonJS support.
          forOwn(platform, function (value, key) {
            freeExports[key] = value;
          });
        } else {
          // Export to the global object.
          root.platform = platform;
        }
    }).call(commonjsGlobal);
  });

  var DeviceOrientationModule_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };

    var _DOMEventSubmodule2 = _interopRequireDefault(DOMEventSubmodule_1);

    var _InputModule3 = _interopRequireDefault(InputModule_1);

    var _MotionInput2 = _interopRequireDefault(MotionInput_1);

    var _platform2 = _interopRequireDefault(platform$1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    /**
     * Converts degrees to radians.
     *
     * @param {number} deg - Angle in degrees.
     * @return {number}
     */


    function degToRad(deg) {
      return deg * Math.PI / 180;
    }
    /**
     * Converts radians to degrees.
     *
     * @param {number} rad - Angle in radians.
     * @return {number}
     */


    function radToDeg(rad) {
      return rad * 180 / Math.PI;
    }
    /**
     * Normalizes a 3 x 3 matrix.
     *
     * @param {number[]} m - Matrix to normalize, represented by an array of length 9.
     * @return {number[]}
     */


    function normalize(m) {
      var det = m[0] * m[4] * m[8] + m[1] * m[5] * m[6] + m[2] * m[3] * m[7] - m[0] * m[5] * m[7] - m[1] * m[3] * m[8] - m[2] * m[4] * m[6];

      for (var i = 0; i < m.length; i++) {
        m[i] /= det;
      }

      return m;
    }
    /**
     * Converts a Euler angle `[alpha, beta, gamma]` to the W3C specification, where:
     * - `alpha` is in [0; +360[;
     * - `beta` is in [-180; +180[;
     * - `gamma` is in [-90; +90[.
     *
     * @param {number[]} eulerAngle - Euler angle to unify, represented by an array of length 3 (`[alpha, beta, gamma]`).
     * @see {@link http://www.w3.org/TR/orientation-event/}
     */


    function unify(eulerAngle) {
      // Cf. W3C specification (http://w3c.github.io/deviceorientation/spec-source-orientation.html)
      // and Euler angles Wikipedia page (http://en.wikipedia.org/wiki/Euler_angles).
      //
      // W3C convention: Tait–Bryan angles Z-X'-Y'', where:
      //   alpha is in [0; +360[,
      //   beta is in [-180; +180[,
      //   gamma is in [-90; +90[.
      var alphaIsValid = typeof eulerAngle[0] === 'number';

      var _alpha = alphaIsValid ? degToRad(eulerAngle[0]) : 0;

      var _beta = degToRad(eulerAngle[1]);

      var _gamma = degToRad(eulerAngle[2]);

      var cA = Math.cos(_alpha);
      var cB = Math.cos(_beta);
      var cG = Math.cos(_gamma);
      var sA = Math.sin(_alpha);
      var sB = Math.sin(_beta);
      var sG = Math.sin(_gamma);
      var alpha = void 0,
          beta = void 0,
          gamma = void 0;
      var m = [cA * cG - sA * sB * sG, -cB * sA, cA * sG + cG * sA * sB, cG * sA + cA * sB * sG, cA * cB, sA * sG - cA * cG * sB, -cB * sG, sB, cB * cG];
      normalize(m); // Since we want gamma in [-90; +90[, cG >= 0.

      if (m[8] > 0) {
        // Case 1: m[8] > 0 <=> cB > 0                 (and cG != 0)
        //                  <=> beta in ]-pi/2; +pi/2[ (and cG != 0)
        alpha = Math.atan2(-m[1], m[4]);
        beta = Math.asin(m[7]); // asin returns a number between -pi/2 and +pi/2 => OK

        gamma = Math.atan2(-m[6], m[8]);
      } else if (m[8] < 0) {
        // Case 2: m[8] < 0 <=> cB < 0                            (and cG != 0)
        //                  <=> beta in [-pi; -pi/2[ U ]+pi/2; +pi] (and cG != 0)
        // Since cB < 0 and cB is in m[1] and m[4], the point is flipped by 180 degrees.
        // Hence, we have to multiply both arguments of atan2 by -1 in order to revert
        // the point in its original position (=> another flip by 180 degrees).
        alpha = Math.atan2(m[1], -m[4]);
        beta = -Math.asin(m[7]);
        beta += beta >= 0 ? -Math.PI : Math.PI; // asin returns a number between -pi/2 and pi/2 => make sure beta in [-pi; -pi/2[ U ]+pi/2; +pi]

        gamma = Math.atan2(m[6], -m[8]); // same remark as for alpha, multiplication by -1
      } else {
        // Case 3: m[8] = 0 <=> cB = 0 or cG = 0
        if (m[6] > 0) {
          // Subcase 1: cG = 0 and cB > 0
          //            cG = 0 <=> sG = -1 <=> gamma = -pi/2 => m[6] = cB
          //            Hence, m[6] > 0 <=> cB > 0 <=> beta in ]-pi/2; +pi/2[
          alpha = Math.atan2(-m[1], m[4]);
          beta = Math.asin(m[7]); // asin returns a number between -pi/2 and +pi/2 => OK

          gamma = -Math.PI / 2;
        } else if (m[6] < 0) {
          // Subcase 2: cG = 0 and cB < 0
          //            cG = 0 <=> sG = -1 <=> gamma = -pi/2 => m[6] = cB
          //            Hence, m[6] < 0 <=> cB < 0 <=> beta in [-pi; -pi/2[ U ]+pi/2; +pi]
          alpha = Math.atan2(m[1], -m[4]); // same remark as for alpha in a case above

          beta = -Math.asin(m[7]);
          beta += beta >= 0 ? -Math.PI : Math.PI; // asin returns a number between -pi/2 and +pi/2 => make sure beta in [-pi; -pi/2[ U ]+pi/2; +pi]

          gamma = -Math.PI / 2;
        } else {
          // Subcase 3: cB = 0
          // In the case where cos(beta) = 0 (i.e. beta = -pi/2 or beta = pi/2),
          // we have the gimbal lock problem: in that configuration, only the angle
          // alpha + gamma (if beta = +pi/2) or alpha - gamma (if beta = -pi/2)
          // are uniquely defined: alpha and gamma can take an infinity of values.
          // For convenience, let's set gamma = 0 (and thus sin(gamma) = 0).
          // (As a consequence of the gimbal lock problem, there is a discontinuity
          // in alpha and gamma.)
          alpha = Math.atan2(m[3], m[0]);
          beta = m[7] > 0 ? Math.PI / 2 : -Math.PI / 2;
          gamma = 0;
        }
      } // atan2 returns a number between -pi and pi => make sure that alpha is in [0, 2*pi[.


      alpha += alpha < 0 ? 2 * Math.PI : 0;
      eulerAngle[0] = alphaIsValid ? radToDeg(alpha) : null;
      eulerAngle[1] = radToDeg(beta);
      eulerAngle[2] = radToDeg(gamma);
    }
    /**
     * Converts a Euler angle `[alpha, beta, gamma]` to a Euler angle where:
     * - `alpha` is in [0; +360[;
     * - `beta` is in [-90; +90[;
     * - `gamma` is in [-180; +180[.
     *
     * @param {number[]} eulerAngle - Euler angle to convert, represented by an array of length 3 (`[alpha, beta, gamma]`).
     */


    function unifyAlt(eulerAngle) {
      // Convention here: Tait–Bryan angles Z-X'-Y'', where:
      //   alpha is in [0; +360[,
      //   beta is in [-90; +90[,
      //   gamma is in [-180; +180[.
      var alphaIsValid = typeof eulerAngle[0] === 'number';

      var _alpha = alphaIsValid ? degToRad(eulerAngle[0]) : 0;

      var _beta = degToRad(eulerAngle[1]);

      var _gamma = degToRad(eulerAngle[2]);

      var cA = Math.cos(_alpha);
      var cB = Math.cos(_beta);
      var cG = Math.cos(_gamma);
      var sA = Math.sin(_alpha);
      var sB = Math.sin(_beta);
      var sG = Math.sin(_gamma);
      var alpha = void 0,
          beta = void 0,
          gamma = void 0;
      var m = [cA * cG - sA * sB * sG, -cB * sA, cA * sG + cG * sA * sB, cG * sA + cA * sB * sG, cA * cB, sA * sG - cA * cG * sB, -cB * sG, sB, cB * cG];
      normalize(m);
      alpha = Math.atan2(-m[1], m[4]);
      alpha += alpha < 0 ? 2 * Math.PI : 0; // atan2 returns a number between -pi and +pi => make sure alpha is in [0, 2*pi[.

      beta = Math.asin(m[7]); // asin returns a number between -pi/2 and pi/2 => OK

      gamma = Math.atan2(-m[6], m[8]); // atan2 returns a number between -pi and +pi => OK

      eulerAngle[0] = alphaIsValid ? radToDeg(alpha) : null;
      eulerAngle[1] = radToDeg(beta);
      eulerAngle[2] = radToDeg(gamma);
    }
    /**
     * `DeviceOrientationModule` singleton.
     * The `DeviceOrientationModule` singleton provides the raw values
     * of the orientation provided by the `DeviceMotion` event.
     * It also instantiate the `Orientation` submodule that unifies those
     * values across platforms by making them compliant with {@link
     * http://www.w3.org/TR/orientation-event/|the W3C standard} (*i.e.*
     * the `alpha` angle between `0` and `360` degrees, the `beta` angle
     * between `-180` and `180` degrees, and `gamma` between `-90` and
     * `90` degrees), as well as the `OrientationAlt` submodules (with
     * the `alpha` angle between `0` and `360` degrees, the `beta` angle
     * between `-90` and `90` degrees, and `gamma` between `-180` and
     * `180` degrees).
     * When the `orientation` raw values are not provided by the sensors,
     * this modules tries to recalculate `beta` and `gamma` from the
     * `AccelerationIncludingGravity` module, if available (in that case,
     * the `alpha` angle is impossible to retrieve since the compass is
     * not available).
     *
     * @class DeviceMotionModule
     * @extends InputModule
     */


    var DeviceOrientationModule = function (_InputModule) {
      _inherits(DeviceOrientationModule, _InputModule);
      /**
       * Creates the `DeviceOrientation` module instance.
       *
       * @constructor
       */


      function DeviceOrientationModule() {
        _classCallCheck(this, DeviceOrientationModule);
        /**
         * Raw values coming from the `deviceorientation` event sent by this module.
         *
         * @this DeviceOrientationModule
         * @type {number[]}
         * @default [null, null, null]
         */


        var _this = _possibleConstructorReturn(this, (DeviceOrientationModule.__proto__ || Object.getPrototypeOf(DeviceOrientationModule)).call(this, 'deviceorientation'));

        _this.event = [null, null, null];
        /**
         * The `Orientation` module.
         * Provides unified values of the orientation compliant with {@link
         * http://www.w3.org/TR/orientation-event/|the W3C standard}
         * (`alpha` in `[0, 360]`, beta in `[-180, +180]`, `gamma` in `[-90, +90]`).
         *
         * @this DeviceOrientationModule
         * @type {DOMEventSubmodule}
         */

        _this.orientation = new _DOMEventSubmodule2.default(_this, 'orientation');
        /**
         * The `OrientationAlt` module.
         * Provides alternative values of the orientation
         * (`alpha` in `[0, 360]`, beta in `[-90, +90]`, `gamma` in `[-180, +180]`).
         *
         * @this DeviceOrientationModule
         * @type {DOMEventSubmodule}
         */

        _this.orientationAlt = new _DOMEventSubmodule2.default(_this, 'orientationAlt');
        /**
         * Required submodules / events.
         *
         * @this DeviceOrientationModule
         * @type {object}
         * @property {bool} orientation - Indicates whether the `orientation` unified values are required or not (defaults to `false`).
         * @property {bool} orientationAlt - Indicates whether the `orientationAlt` values are required or not (defaults to `false`).
         */

        _this.required = {
          orientation: false,
          orientationAlt: false
        };
        /**
         * Resolve function of the module's promise.
         *
         * @this DeviceOrientationModule
         * @type {function}
         * @default null
         * @see DeviceOrientationModule#init
         */

        _this._promiseResolve = null;
        /**
         * Gravity vector calculated from the `accelerationIncludingGravity` unified values.
         *
         * @this DeviceOrientationModule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this._estimatedGravity = [0, 0, 0];
        _this._processFunction = null;
        _this._process = _this._process.bind(_this);
        _this._deviceorientationCheck = _this._deviceorientationCheck.bind(_this);
        _this._deviceorientationListener = _this._deviceorientationListener.bind(_this);
        return _this;
      }
      /**
       * Sensor check on initialization of the module.
       * This method:
       * - checks whether the `orientation` values are valid or not;
       * - (in the case where orientation raw values are not provided)
       *   tries to calculate the orientation from the
       *   `accelerationIncludingGravity` unified values.
       *
       * @param {DeviceMotionEvent} e - First `'devicemotion'` event caught, on which the check is done.
       */


      _createClass(DeviceOrientationModule, [{
        key: '_deviceorientationCheck',
        value: function _deviceorientationCheck(e) {
          // clear timeout (anti-Firefox bug solution, window event deviceorientation being nver called)
          // set the set timeout in init() function
          clearTimeout(this._checkTimeoutId);
          this.isProvided = true; // Sensor availability for the orientation and alternative orientation

          var rawValuesProvided = typeof e.alpha === 'number' && typeof e.beta === 'number' && typeof e.gamma === 'number';
          this.orientation.isProvided = rawValuesProvided;
          this.orientationAlt.isProvided = rawValuesProvided; // TODO(?): get pseudo-period
          // swap the process function to the

          this._processFunction = this._deviceorientationListener; // If orientation or alternative orientation are not provided by raw sensors but required,
          // try to calculate them with `accelerationIncludingGravity` unified values

          if (this.required.orientation && !this.orientation.isProvided || this.required.orientationAlt && !this.orientationAlt.isProvided) this._tryAccelerationIncludingGravityFallback();else this._promiseResolve(this);
        }
        /**
         * `'deviceorientation'` event callback.
         * This method emits an event with the raw `'deviceorientation'` values,
         * and emits events with the unified `orientation` and / or the
         * `orientationAlt` values if they are required.
         *
         * @param {DeviceOrientationEvent} e - `'deviceorientation'` event the values are calculated from.
         */

      }, {
        key: '_deviceorientationListener',
        value: function _deviceorientationListener(e) {
          // 'deviceorientation' event (raw values)
          var outEvent = this.event;
          outEvent[0] = e.alpha;
          outEvent[1] = e.beta;
          outEvent[2] = e.gamma;
          if (this.listeners.size > 0) this.emit(outEvent); // 'orientation' event (unified values)

          if (this.orientation.listeners.size > 0 && this.required.orientation && this.orientation.isProvided) {
            // On iOS, the `alpha` value is initialized at `0` on the first `deviceorientation` event
            // so we keep that reference in memory to calculate the North later on
            if (!this.orientation._webkitCompassHeadingReference && e.webkitCompassHeading && _platform2.default.os.family === 'iOS') this.orientation._webkitCompassHeadingReference = e.webkitCompassHeading;
            var _outEvent = this.orientation.event;
            _outEvent[0] = e.alpha;
            _outEvent[1] = e.beta;
            _outEvent[2] = e.gamma; // On iOS, replace the `alpha` value by the North value and unify the angles
            // (the default representation of the angles on iOS is not compliant with the W3C specification)

            if (this.orientation._webkitCompassHeadingReference && _platform2.default.os.family === 'iOS') {
              _outEvent[0] += 360 - this.orientation._webkitCompassHeadingReference;
              unify(_outEvent);
            }

            this.orientation.emit(_outEvent);
          } // 'orientationAlt' event


          if (this.orientationAlt.listeners.size > 0 && this.required.orientationAlt && this.orientationAlt.isProvided) {
            // On iOS, the `alpha` value is initialized at `0` on the first `deviceorientation` event
            // so we keep that reference in memory to calculate the North later on
            if (!this.orientationAlt._webkitCompassHeadingReference && e.webkitCompassHeading && _platform2.default.os.family === 'iOS') this.orientationAlt._webkitCompassHeadingReference = e.webkitCompassHeading;
            var _outEvent2 = this.orientationAlt.event;
            _outEvent2[0] = e.alpha;
            _outEvent2[1] = e.beta;
            _outEvent2[2] = e.gamma; // On iOS, replace the `alpha` value by the North value but do not convert the angles
            // (the default representation of the angles on iOS is compliant with the alternative representation)

            if (this.orientationAlt._webkitCompassHeadingReference && _platform2.default.os.family === 'iOS') {
              _outEvent2[0] -= this.orientationAlt._webkitCompassHeadingReference;
              _outEvent2[0] += _outEvent2[0] < 0 ? 360 : 0; // make sure `alpha` is in [0, +360[
            } // On Android, transform the angles to the alternative representation
            // (the default representation of the angles on Android is compliant with the W3C specification)


            if (_platform2.default.os.family === 'Android') unifyAlt(_outEvent2);
            this.orientationAlt.emit(_outEvent2);
          }
        }
        /**
         * Checks whether `beta` and `gamma` can be calculated from the `accelerationIncludingGravity` values or not.
         */

      }, {
        key: '_tryAccelerationIncludingGravityFallback',
        value: function _tryAccelerationIncludingGravityFallback() {
          var _this2 = this;

          _MotionInput2.default.requireModule('accelerationIncludingGravity').then(function (accelerationIncludingGravity) {
            if (accelerationIncludingGravity.isValid) {
              console.log("WARNING (motion-input): The 'deviceorientation' event does not exist or does not provide values in your browser, so the orientation of the device is estimated from DeviceMotion's 'accelerationIncludingGravity' event. Since the compass is not available, only the `beta` and `gamma` angles are provided (`alpha` is null).");

              if (_this2.required.orientation) {
                _this2.orientation.isCalculated = true;
                _this2.orientation.period = accelerationIncludingGravity.period;

                _MotionInput2.default.addListener('accelerationIncludingGravity', function (accelerationIncludingGravity) {
                  _this2._calculateBetaAndGammaFromAccelerationIncludingGravity(accelerationIncludingGravity);
                });
              }

              if (_this2.required.orientationAlt) {
                _this2.orientationAlt.isCalculated = true;
                _this2.orientationAlt.period = accelerationIncludingGravity.period;

                _MotionInput2.default.addListener('accelerationIncludingGravity', function (accelerationIncludingGravity) {
                  _this2._calculateBetaAndGammaFromAccelerationIncludingGravity(accelerationIncludingGravity, true);
                });
              }
            }

            _this2._promiseResolve(_this2);
          });
        }
        /**
         * Calculates and emits `beta` and `gamma` values as a fallback of the `orientation` and / or `orientationAlt` events, from the `accelerationIncludingGravity` unified values.
         *
         * @param {number[]} accelerationIncludingGravity - Latest `accelerationIncludingGravity raw values.
         * @param {bool} [alt=false] - Indicates whether we need the alternate representation of the angles or not.
         */

      }, {
        key: '_calculateBetaAndGammaFromAccelerationIncludingGravity',
        value: function _calculateBetaAndGammaFromAccelerationIncludingGravity(accelerationIncludingGravity) {
          var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var k = 0.8; // Low pass filter to estimate the gravity

          this._estimatedGravity[0] = k * this._estimatedGravity[0] + (1 - k) * accelerationIncludingGravity[0];
          this._estimatedGravity[1] = k * this._estimatedGravity[1] + (1 - k) * accelerationIncludingGravity[1];
          this._estimatedGravity[2] = k * this._estimatedGravity[2] + (1 - k) * accelerationIncludingGravity[2];
          var _gX = this._estimatedGravity[0];
          var _gY = this._estimatedGravity[1];
          var _gZ = this._estimatedGravity[2];
          var norm = Math.sqrt(_gX * _gX + _gY * _gY + _gZ * _gZ);
          _gX /= norm;
          _gY /= norm;
          _gZ /= norm; // Adopting the following conventions:
          // - each matrix operates by pre-multiplying column vectors,
          // - each matrix represents an active rotation,
          // - each matrix represents the composition of intrinsic rotations,
          // the rotation matrix representing the composition of a rotation
          // about the x-axis by an angle beta and a rotation about the y-axis
          // by an angle gamma is:
          //
          // [ cos(gamma)               ,  0          ,  sin(gamma)              ,
          //   sin(beta) * sin(gamma)   ,  cos(beta)  ,  -cos(gamma) * sin(beta) ,
          //   -cos(beta) * sin(gamma)  ,  sin(beta)  ,  cos(beta) * cos(gamma)  ].
          //
          // Hence, the projection of the normalized gravity g = [0, 0, 1]
          // in the device's reference frame corresponds to:
          //
          // gX = -cos(beta) * sin(gamma),
          // gY = sin(beta),
          // gZ = cos(beta) * cos(gamma),
          //
          // so beta = asin(gY) and gamma = atan2(-gX, gZ).
          // Beta & gamma equations (we approximate [gX, gY, gZ] by [_gX, _gY, _gZ])

          var beta = radToDeg(Math.asin(_gY)); // beta is in [-pi/2; pi/2[

          var gamma = radToDeg(Math.atan2(-_gX, _gZ)); // gamma is in [-pi; pi[

          if (alt) {
            // In that case, there is nothing to do since the calculations above gave the angle in the right ranges
            var outEvent = this.orientationAlt.event;
            outEvent[0] = null;
            outEvent[1] = beta;
            outEvent[2] = gamma;
            this.orientationAlt.emit(outEvent);
          } else {
            // Here we have to unify the angles to get the ranges compliant with the W3C specification
            var _outEvent3 = this.orientation.event;
            _outEvent3[0] = null;
            _outEvent3[1] = beta;
            _outEvent3[2] = gamma;
            unify(_outEvent3);
            this.orientation.emit(_outEvent3);
          }
        }
      }, {
        key: '_process',
        value: function _process(data) {
          this._processFunction(data);
        }
        /**
         * Initializes of the module.
         *
         * @return {Promise}
         */

      }, {
        key: 'init',
        value: function init() {
          var _this3 = this;

          return _get(DeviceOrientationModule.prototype.__proto__ || Object.getPrototypeOf(DeviceOrientationModule.prototype), 'init', this).call(this, function (resolve) {
            _this3._promiseResolve = resolve;

            if (window.DeviceOrientationEvent) {
              _this3._processFunction = _this3._deviceorientationCheck; // feature detect

              if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission().then(function (permissionState) {
                  if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', _this3._process, false); // set fallback timeout for Firefox (its window never calling the DeviceOrientation event, a 
                    // require of the DeviceOrientation service will result in the require promise never being resolved
                    // hence the Experiment start() method never called)

                    _this3._checkTimeoutId = setTimeout(function () {
                      return resolve(_this3);
                    }, 500);
                  }
                }).catch(console.error);
              } else {
                // handle regular non iOS 13+ devices
                window.addEventListener('deviceorientation', _this3._process, false); // set fallback timeout for Firefox (its window never calling the DeviceOrientation event, a 
                // require of the DeviceOrientation service will result in the require promise never being resolved
                // hence the Experiment start() method never called)

                _this3._checkTimeoutId = setTimeout(function () {
                  return resolve(_this3);
                }, 500);
              }
            } else if (_this3.required.orientation) {
              _this3._tryAccelerationIncludingGravityFallback();
            } else {
              resolve(_this3);
            }
          });
        }
      }]);

      return DeviceOrientationModule;
    }(_InputModule3.default);

    exports.default = new DeviceOrientationModule();
  });
  unwrapExports(DeviceOrientationModule_1);

  var DeviceMotionModule_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };

    var _InputModule3 = _interopRequireDefault(InputModule_1);

    var _DOMEventSubmodule2 = _interopRequireDefault(DOMEventSubmodule_1);

    var _MotionInput2 = _interopRequireDefault(MotionInput_1);

    var _platform2 = _interopRequireDefault(platform$1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    /**
     * Gets the current local time in seconds.
     * Uses `window.performance.now()` if available, and `Date.now()` otherwise.
     *
     * @return {number}
     */


    function getLocalTime() {
      if (window.performance) return window.performance.now() / 1000;
      return Date.now() / 1000;
    }

    var chromeRegExp = /Chrome/;
    var toDeg = 180 / Math.PI;
    /**
     * `DeviceMotion` module singleton.
     * The `DeviceMotionModule` singleton provides the raw values
     * of the acceleration including gravity, acceleration, and rotation
     * rate provided by the `DeviceMotion` event.
     * It also instantiate the `AccelerationIncludingGravity`,
     * `Acceleration` and `RotationRate` submodules that unify those values
     * across platforms by making them compliant with {@link
     * http://www.w3.org/TR/orientation-event/|the W3C standard}.
     * When raw values are not provided by the sensors, this modules tries
     * to recalculate them from available values:
     * - `acceleration` is calculated from `accelerationIncludingGravity`
     *   with a high-pass filter;
     * - (coming soon — waiting for a bug on Chrome to be resolved)
     *   `rotationRate` is calculated from `orientation`.
     *
     * @class DeviceMotionModule
     * @extends InputModule
     */

    var DeviceMotionModule = function (_InputModule) {
      _inherits(DeviceMotionModule, _InputModule);
      /**
       * Creates the `DeviceMotion` module instance.
       *
       * @constructor
       */


      function DeviceMotionModule() {
        _classCallCheck(this, DeviceMotionModule);
        /**
         * Raw values coming from the `devicemotion` event sent by this module.
         *
         * @this DeviceMotionModule
         * @type {number[]}
         * @default [null, null, null, null, null, null, null, null, null]
         */


        var _this = _possibleConstructorReturn(this, (DeviceMotionModule.__proto__ || Object.getPrototypeOf(DeviceMotionModule)).call(this, 'devicemotion'));

        _this.event = [null, null, null, null, null, null, null, null, null];
        /**
         * The `AccelerationIncludingGravity` module.
         * Provides unified values of the acceleration including gravity.
         *
         * @this DeviceMotionModule
         * @type {DOMEventSubmodule}
         */

        _this.accelerationIncludingGravity = new _DOMEventSubmodule2.default(_this, 'accelerationIncludingGravity');
        /**
         * The `Acceleration` submodule.
         * Provides unified values of the acceleration.
         * Estimates the acceleration values from `accelerationIncludingGravity`
         * raw values if the acceleration raw values are not available on the
         * device.
         *
         * @this DeviceMotionModule
         * @type {DOMEventSubmodule}
         */

        _this.acceleration = new _DOMEventSubmodule2.default(_this, 'acceleration');
        /**
         * The `RotationRate` submodule.
         * Provides unified values of the rotation rate.
         * (coming soon, waiting for a bug on Chrome to be resolved)
         * Estimates the rotation rate values from `orientation` values if
         * the rotation rate raw values are not available on the device.
         *
         * @this DeviceMotionModule
         * @type {DOMEventSubmodule}
         */

        _this.rotationRate = new _DOMEventSubmodule2.default(_this, 'rotationRate');
        /**
         * Required submodules / events.
         *
         * @this DeviceMotionModule
         * @type {object}
         * @property {bool} accelerationIncludingGravity - Indicates whether the `accelerationIncludingGravity` unified values are required or not (defaults to `false`).
         * @property {bool} acceleration - Indicates whether the `acceleration` unified values are required or not (defaults to `false`).
         * @property {bool} rotationRate - Indicates whether the `rotationRate` unified values are required or not (defaults to `false`).
         */

        _this.required = {
          accelerationIncludingGravity: false,
          acceleration: false,
          rotationRate: false
        };
        /**
         * Resolve function of the module's promise.
         *
         * @this DeviceMotionModule
         * @type {function}
         * @default null
         * @see DeviceMotionModule#init
         */

        _this._promiseResolve = null;
        /**
         * Unifying factor of the motion data values (`1` on Android, `-1` on iOS).
         *
         * @this DeviceMotionModule
         * @type {number}
         */

        _this._unifyMotionData = _platform2.default.os.family === 'iOS' ? -1 : 1;
        /**
         * Unifying factor of the period (`1` on Android, `1` on iOS). in sec
         * @todo - unify with e.interval specification (in ms) ?
         *
         * @this DeviceMotionModule
         * @type {number}
         */

        _this._unifyPeriod = _platform2.default.os.family === 'Android' ? 0.001 : 1;
        /**
         * Acceleration calculated from the `accelerationIncludingGravity` raw values.
         *
         * @this DeviceMotionModule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this._calculatedAcceleration = [0, 0, 0];
        /**
         * Time constant (half-life) of the high-pass filter used to smooth the acceleration values calculated from the acceleration including gravity raw values (in seconds).
         *
         * @this DeviceMotionModule
         * @type {number}
         * @default 0.1
         * @constant
         */

        _this._calculatedAccelerationTimeConstant = 0.1;
        /**
         * Latest `accelerationIncludingGravity` raw value, used in the high-pass filter to calculate the acceleration (if the `acceleration` values are not provided by `'devicemotion'`).
         *
         * @this DeviceMotionModule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this._lastAccelerationIncludingGravity = [0, 0, 0];
        /**
         * Rotation rate calculated from the orientation values.
         *
         * @this DeviceMotionModule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this._calculatedRotationRate = [0, 0, 0];
        /**
         * Latest orientation value, used to calculate the rotation rate  (if the `rotationRate` values are not provided by `'devicemotion'`).
         *
         * @this DeviceMotionModule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this._lastOrientation = [0, 0, 0];
        /**
         * Latest orientation timestamps, used to calculate the rotation rate (if the `rotationRate` values are not provided by `'devicemotion'`).
         *
         * @this DeviceMotionModule
         * @type {number[]}
         * @default [0, 0, 0]
         */

        _this._lastOrientationTimestamp = null;
        _this._processFunction = null;
        _this._process = _this._process.bind(_this);
        _this._devicemotionCheck = _this._devicemotionCheck.bind(_this);
        _this._devicemotionListener = _this._devicemotionListener.bind(_this);
        _this._checkCounter = 0;
        return _this;
      }
      /**
       * Decay factor of the high-pass filter used to calculate the acceleration from the `accelerationIncludingGravity` raw values.
       *
       * @type {number}
       * @readonly
       */


      _createClass(DeviceMotionModule, [{
        key: '_devicemotionCheck',

        /**
         * Sensor check on initialization of the module.
         * This method:
         * - checks whether the `accelerationIncludingGravity`, the `acceleration`,
         *   and the `rotationRate` values are valid or not;
         * - gets the period of the `'devicemotion'` event and sets the period of
         *   the `AccelerationIncludingGravity`, `Acceleration`, and `RotationRate`
         *   submodules;
         * - (in the case where acceleration raw values are not provided)
         *   indicates whether the acceleration can be calculated from the
         *   `accelerationIncludingGravity` unified values or not.
         *
         * @param {DeviceMotionEvent} e - The first `'devicemotion'` event caught.
         */
        value: function _devicemotionCheck(e) {
          // clear timeout (anti-Firefox bug solution, window event deviceorientation being nver called)
          // set the set timeout in init() function
          clearTimeout(this._checkTimeoutId);
          this.isProvided = true;
          this.period = e.interval / 1000;
          this.interval = e.interval; // Sensor availability for the acceleration including gravity

          this.accelerationIncludingGravity.isProvided = e.accelerationIncludingGravity && typeof e.accelerationIncludingGravity.x === 'number' && typeof e.accelerationIncludingGravity.y === 'number' && typeof e.accelerationIncludingGravity.z === 'number';
          this.accelerationIncludingGravity.period = e.interval * this._unifyPeriod; // Sensor availability for the acceleration

          this.acceleration.isProvided = e.acceleration && typeof e.acceleration.x === 'number' && typeof e.acceleration.y === 'number' && typeof e.acceleration.z === 'number';
          this.acceleration.period = e.interval * this._unifyPeriod; // Sensor availability for the rotation rate

          this.rotationRate.isProvided = e.rotationRate && typeof e.rotationRate.alpha === 'number' && typeof e.rotationRate.beta === 'number' && typeof e.rotationRate.gamma === 'number';
          this.rotationRate.period = e.interval * this._unifyPeriod; // in firefox android, accelerationIncludingGravity retrieve null values
          // on the first callback. so wait a second call to be sure.

          if (_platform2.default.os.family === 'Android' && /Firefox/.test(_platform2.default.name) && this._checkCounter < 1) {
            this._checkCounter++;
          } else {
            // now that the sensors are checked, replace the process function with
            // the final listener
            this._processFunction = this._devicemotionListener; // if acceleration is not provided by raw sensors, indicate whether it
            // can be calculated with `accelerationincludinggravity` or not

            if (!this.acceleration.isProvided) this.acceleration.isCalculated = this.accelerationIncludingGravity.isProvided; // WARNING
            // The lines of code below are commented because of a bug of Chrome
            // on some Android devices, where 'devicemotion' events are not sent
            // or caught if the listener is set up after a 'deviceorientation'
            // listener. Here, the _tryOrientationFallback method would add a
            // 'deviceorientation' listener and block all subsequent 'devicemotion'
            // events on these devices. Comments will be removed once the bug of
            // Chrome is corrected.
            // if (this.required.rotationRate && !this.rotationRate.isProvided)
            //   this._tryOrientationFallback();
            // else

            this._promiseResolve(this);
          }
        }
        /**
         * `'devicemotion'` event callback.
         * This method emits an event with the raw `'devicemotion'` values, and emits
         * events with the unified `accelerationIncludingGravity`, `acceleration`,
         * and / or `rotationRate` values if they are required.
         *
         * @param {DeviceMotionEvent} e - `'devicemotion'` event the values are calculated from.
         */

      }, {
        key: '_devicemotionListener',
        value: function _devicemotionListener(e) {
          // 'devicemotion' event (raw values)
          if (this.listeners.size > 0) this._emitDeviceMotionEvent(e); // alert(`${this.accelerationIncludingGravity.listeners.size} -
          //     ${this.required.accelerationIncludingGravity} -
          //     ${this.accelerationIncludingGravity.isValid}
          // `);
          // 'acceleration' event (unified values)

          if (this.accelerationIncludingGravity.listeners.size > 0 && this.required.accelerationIncludingGravity && this.accelerationIncludingGravity.isValid) {
            this._emitAccelerationIncludingGravityEvent(e);
          } // 'accelerationIncludingGravity' event (unified values)
          // the fallback calculation of the acceleration happens in the
          //  `_emitAcceleration` method, so we check if this.acceleration.isValid


          if (this.acceleration.listeners.size > 0 && this.required.acceleration && this.acceleration.isValid) {
            this._emitAccelerationEvent(e);
          } // 'rotationRate' event (unified values)
          // the fallback calculation of the rotation rate does NOT happen in the
          // `_emitRotationRate` method, so we only check if this.rotationRate.isProvided


          if (this.rotationRate.listeners.size > 0 && this.required.rotationRate && this.rotationRate.isProvided) {
            this._emitRotationRateEvent(e);
          }
        }
        /**
         * Emits the `'devicemotion'` raw values.
         *
         * @param {DeviceMotionEvent} e - `'devicemotion'` event the values are calculated from.
         */

      }, {
        key: '_emitDeviceMotionEvent',
        value: function _emitDeviceMotionEvent(e) {
          var outEvent = this.event;

          if (e.accelerationIncludingGravity) {
            outEvent[0] = e.accelerationIncludingGravity.x;
            outEvent[1] = e.accelerationIncludingGravity.y;
            outEvent[2] = e.accelerationIncludingGravity.z;
          }

          if (e.acceleration) {
            outEvent[3] = e.acceleration.x;
            outEvent[4] = e.acceleration.y;
            outEvent[5] = e.acceleration.z;
          }

          if (e.rotationRate) {
            outEvent[6] = e.rotationRate.alpha;
            outEvent[7] = e.rotationRate.beta;
            outEvent[8] = e.rotationRate.gamma;
          }

          this.emit(outEvent);
        }
        /**
         * Emits the `accelerationIncludingGravity` unified values.
         *
         * @param {DeviceMotionEvent} e - `'devicemotion'` event the values are calculated from.
         */

      }, {
        key: '_emitAccelerationIncludingGravityEvent',
        value: function _emitAccelerationIncludingGravityEvent(e) {
          var outEvent = this.accelerationIncludingGravity.event;
          outEvent[0] = e.accelerationIncludingGravity.x * this._unifyMotionData;
          outEvent[1] = e.accelerationIncludingGravity.y * this._unifyMotionData;
          outEvent[2] = e.accelerationIncludingGravity.z * this._unifyMotionData;
          this.accelerationIncludingGravity.emit(outEvent);
        }
        /**
         * Emits the `acceleration` unified values.
         * When the `acceleration` raw values are not available, the method
         * also calculates the acceleration from the
         * `accelerationIncludingGravity` raw values.
         *
         * @param {DeviceMotionEvent} e - The `'devicemotion'` event.
         */

      }, {
        key: '_emitAccelerationEvent',
        value: function _emitAccelerationEvent(e) {
          var outEvent = this.acceleration.event;

          if (this.acceleration.isProvided) {
            // If raw acceleration values are provided
            outEvent[0] = e.acceleration.x * this._unifyMotionData;
            outEvent[1] = e.acceleration.y * this._unifyMotionData;
            outEvent[2] = e.acceleration.z * this._unifyMotionData;
          } else if (this.accelerationIncludingGravity.isValid) {
            // Otherwise, if accelerationIncludingGravity values are provided,
            // estimate the acceleration with a high-pass filter
            var accelerationIncludingGravity = [e.accelerationIncludingGravity.x * this._unifyMotionData, e.accelerationIncludingGravity.y * this._unifyMotionData, e.accelerationIncludingGravity.z * this._unifyMotionData];
            var k = this._calculatedAccelerationDecay; // High-pass filter to estimate the acceleration (without the gravity)

            this._calculatedAcceleration[0] = (1 + k) * 0.5 * (accelerationIncludingGravity[0] - this._lastAccelerationIncludingGravity[0]) + k * this._calculatedAcceleration[0];
            this._calculatedAcceleration[1] = (1 + k) * 0.5 * (accelerationIncludingGravity[1] - this._lastAccelerationIncludingGravity[1]) + k * this._calculatedAcceleration[1];
            this._calculatedAcceleration[2] = (1 + k) * 0.5 * (accelerationIncludingGravity[2] - this._lastAccelerationIncludingGravity[2]) + k * this._calculatedAcceleration[2];
            this._lastAccelerationIncludingGravity[0] = accelerationIncludingGravity[0];
            this._lastAccelerationIncludingGravity[1] = accelerationIncludingGravity[1];
            this._lastAccelerationIncludingGravity[2] = accelerationIncludingGravity[2];
            outEvent[0] = this._calculatedAcceleration[0];
            outEvent[1] = this._calculatedAcceleration[1];
            outEvent[2] = this._calculatedAcceleration[2];
          }

          this.acceleration.emit(outEvent);
        }
        /**
         * Emits the `rotationRate` unified values.
         *
         * @param {DeviceMotionEvent} e - `'devicemotion'` event the values are calculated from.
         */

      }, {
        key: '_emitRotationRateEvent',
        value: function _emitRotationRateEvent(e) {
          var outEvent = this.rotationRate.event; // In all platforms, rotation axes are messed up according to the spec
          // https://w3c.github.io/deviceorientation/spec-source-orientation.html
          //
          // gamma should be alpha
          // alpha should be beta
          // beta should be gamma

          outEvent[0] = e.rotationRate.gamma;
          outEvent[1] = e.rotationRate.alpha, outEvent[2] = e.rotationRate.beta; // Chrome Android retrieve values that are in rad/s
          // cf. https://bugs.chromium.org/p/chromium/issues/detail?id=541607
          //
          // From spec: "The rotationRate attribute must be initialized with the rate
          // of rotation of the hosting device in space. It must be expressed as the
          // rate of change of the angles defined in section 4.1 and must be expressed
          // in degrees per second (deg/s)."
          //
          // fixed since Chrome 65
          // cf. https://github.com/immersive-web/webvr-polyfill/issues/307

          if (_platform2.default.os.family === 'Android' && chromeRegExp.test(_platform2.default.name) && parseInt(_platform2.default.version.split('.')[0]) < 65) {
            outEvent[0] *= toDeg;
            outEvent[1] *= toDeg, outEvent[2] *= toDeg;
          }

          this.rotationRate.emit(outEvent);
        }
        /**
         * Calculates and emits the `rotationRate` unified values from the `orientation` values.
         *
         * @param {number[]} orientation - Latest `orientation` raw values.
         */

      }, {
        key: '_calculateRotationRateFromOrientation',
        value: function _calculateRotationRateFromOrientation(orientation) {
          var now = getLocalTime();
          var k = 0.8; // TODO: improve low pass filter (frames are not regular)

          var alphaIsValid = typeof orientation[0] === 'number';

          if (this._lastOrientationTimestamp) {
            var rAlpha = null;
            var rBeta = void 0;
            var rGamma = void 0;
            var alphaDiscontinuityFactor = 0;
            var betaDiscontinuityFactor = 0;
            var gammaDiscontinuityFactor = 0;
            var deltaT = now - this._lastOrientationTimestamp;

            if (alphaIsValid) {
              // alpha discontinuity (+360 -> 0 or 0 -> +360)
              if (this._lastOrientation[0] > 320 && orientation[0] < 40) alphaDiscontinuityFactor = 360;else if (this._lastOrientation[0] < 40 && orientation[0] > 320) alphaDiscontinuityFactor = -360;
            } // beta discontinuity (+180 -> -180 or -180 -> +180)


            if (this._lastOrientation[1] > 140 && orientation[1] < -140) betaDiscontinuityFactor = 360;else if (this._lastOrientation[1] < -140 && orientation[1] > 140) betaDiscontinuityFactor = -360; // gamma discontinuities (+180 -> -180 or -180 -> +180)

            if (this._lastOrientation[2] > 50 && orientation[2] < -50) gammaDiscontinuityFactor = 180;else if (this._lastOrientation[2] < -50 && orientation[2] > 50) gammaDiscontinuityFactor = -180;

            if (deltaT > 0) {
              // Low pass filter to smooth the data
              if (alphaIsValid) rAlpha = k * this._calculatedRotationRate[0] + (1 - k) * (orientation[0] - this._lastOrientation[0] + alphaDiscontinuityFactor) / deltaT;
              rBeta = k * this._calculatedRotationRate[1] + (1 - k) * (orientation[1] - this._lastOrientation[1] + betaDiscontinuityFactor) / deltaT;
              rGamma = k * this._calculatedRotationRate[2] + (1 - k) * (orientation[2] - this._lastOrientation[2] + gammaDiscontinuityFactor) / deltaT;
              this._calculatedRotationRate[0] = rAlpha;
              this._calculatedRotationRate[1] = rBeta;
              this._calculatedRotationRate[2] = rGamma;
            } // TODO: resample the emission rate to match the devicemotion rate


            this.rotationRate.emit(this._calculatedRotationRate);
          }

          this._lastOrientationTimestamp = now;
          this._lastOrientation[0] = orientation[0];
          this._lastOrientation[1] = orientation[1];
          this._lastOrientation[2] = orientation[2];
        }
        /**
         * Checks whether the rotation rate can be calculated from the `orientation` values or not.
         *
         * @todo - this should be reviewed to comply with the axis order defined
         *  in the spec
         */
        // WARNING
        // The lines of code below are commented because of a bug of Chrome
        // on some Android devices, where 'devicemotion' events are not sent
        // or caught if the listener is set up after a 'deviceorientation'
        // listener. Here, the _tryOrientationFallback method would add a
        // 'deviceorientation' listener and block all subsequent 'devicemotion'
        // events on these devices. Comments will be removed once the bug of
        // Chrome is corrected.
        // _tryOrientationFallback() {
        //   MotionInput.requireModule('orientation')
        //     .then((orientation) => {
        //       if (orientation.isValid) {
        //         console.log(`
        //           WARNING (motion-input): The 'devicemotion' event does not exists or
        //           does not provide rotation rate values in your browser, so the rotation
        //           rate of the device is estimated from the 'orientation', calculated
        //           from the 'deviceorientation' event. Since the compass might not
        //           be available, only \`beta\` and \`gamma\` angles may be provided
        //           (\`alpha\` would be null).`
        //         );
        //         this.rotationRate.isCalculated = true;
        //         MotionInput.addListener('orientation', (orientation) => {
        //           this._calculateRotationRateFromOrientation(orientation);
        //         });
        //       }
        //       this._promiseResolve(this);
        //     });
        // }

      }, {
        key: '_process',
        value: function _process(data) {
          this._processFunction(data);
        }
        /**
         * Initializes of the module.
         *
         * @return {promise}
         */

      }, {
        key: 'init',
        value: function init() {
          var _this2 = this;

          return _get(DeviceMotionModule.prototype.__proto__ || Object.getPrototypeOf(DeviceMotionModule.prototype), 'init', this).call(this, function (resolve) {
            _this2._promiseResolve = resolve;

            if (window.DeviceMotionEvent) {
              _this2._processFunction = _this2._devicemotionCheck; // feature detect

              if (typeof DeviceMotionEvent.requestPermission === 'function') {
                DeviceMotionEvent.requestPermission().then(function (permissionState) {
                  if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', _this2._process);
                  }
                }).catch(console.error);
              } else {
                // handle regular non iOS 13+ devices
                window.addEventListener('devicemotion', _this2._process);
              } // set fallback timeout for Firefox desktop (its window never calling the DeviceOrientation event, a
              // require of the DeviceOrientation service will result in the require promise never being resolved
              // hence the Experiment start() method never called)
              // > note 02/02/2018: this seems to create problems with ipods that
              // don't have enough time to start (sometimes), hence creating false
              // negative. So we only apply to Firefox desktop and put a really
              // large value (4sec) just in case.


              if (_platform2.default.name === 'Firefox' && _platform2.default.os.family !== 'Android' && _platform2.default.os.family !== 'iOS') {
                console.warn('[motion-input] register timer for Firefox desktop');
                _this2._checkTimeoutId = setTimeout(function () {
                  return resolve(_this2);
                }, 4 * 1000);
              }
            } // WARNING
            // The lines of code below are commented because of a bug of Chrome
            // on some Android devices, where 'devicemotion' events are not sent
            // or caught if the listener is set up after a 'deviceorientation'
            // listener. Here, the _tryOrientationFallback method would add a
            // 'deviceorientation' listener and block all subsequent 'devicemotion'
            // events on these devices. Comments will be removed once the bug of
            // Chrome is corrected.
            // else if (this.required.rotationRate)
            // this._tryOrientationFallback();
            else resolve(_this2);
          });
        }
      }, {
        key: '_calculatedAccelerationDecay',
        get: function get() {
          return Math.exp(-2 * Math.PI * this.accelerationIncludingGravity.period / this._calculatedAccelerationTimeConstant);
        }
      }]);

      return DeviceMotionModule;
    }(_InputModule3.default);

    exports.default = new DeviceMotionModule();
  });
  unwrapExports(DeviceMotionModule_1);

  var EnergyModule_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };

    var _InputModule3 = _interopRequireDefault(InputModule_1);

    var _MotionInput2 = _interopRequireDefault(MotionInput_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    /**
     * Energy module singleton.
     * The energy module singleton provides energy values (between 0 and 1)
     * based on the acceleration and the rotation rate of the device.
     * The period of the energy values is the same as the period of the
     * acceleration and the rotation rate values.
     *
     * @class EnergyModule
     * @extends InputModule
     */


    var EnergyModule = function (_InputModule) {
      _inherits(EnergyModule, _InputModule);
      /**
       * Creates the energy module instance.
       *
       * @constructor
       */


      function EnergyModule() {
        _classCallCheck(this, EnergyModule);
        /**
         * Event containing the value of the energy, sent by the energy module.
         *
         * @this EnergyModule
         * @type {number}
         * @default 0
         */


        var _this = _possibleConstructorReturn(this, (EnergyModule.__proto__ || Object.getPrototypeOf(EnergyModule)).call(this, 'energy'));

        _this.event = 0;
        /**
         * The acceleration module, used in the calculation of the energy.
         *
         * @this EnergyModule
         * @type {DOMEventSubmodule}
         * @default null
         * @see DevicemotionModule
         */

        _this._accelerationModule = null;
        /**
         * Latest acceleration value sent by the acceleration module.
         *
         * @this EnergyModule
         * @type {number[]}
         * @default null
         */

        _this._accelerationValues = null;
        /**
         * Maximum value reached by the acceleration magnitude, clipped at `this._accelerationMagnitudeThreshold`.
         *
         * @this EnergyModule
         * @type {number}
         * @default 9.81
         */

        _this._accelerationMagnitudeCurrentMax = 1 * 9.81;
        /**
         * Clipping value of the acceleration magnitude.
         *
         * @this EnergyModule
         * @type {number}
         * @default 20
         * @constant
         */

        _this._accelerationMagnitudeThreshold = 4 * 9.81;
        /**
         * The rotation rate module, used in the calculation of the energy.
         *
         * @this EnergyModule
         * @type {DOMEventSubmodule}
         * @default null
         * @see DevicemotionModule
         */

        _this._rotationRateModule = null;
        /**
         * Latest rotation rate value sent by the rotation rate module.
         *
         * @this EnergyModule
         * @type {number[]}
         * @default null
         */

        _this._rotationRateValues = null;
        /**
         * Maximum value reached by the rotation rate magnitude, clipped at `this._rotationRateMagnitudeThreshold`.
         *
         * @this EnergyModule
         * @type {number}
         * @default 400
         */

        _this._rotationRateMagnitudeCurrentMax = 400;
        /**
         * Clipping value of the rotation rate magnitude.
         *
         * @this EnergyModule
         * @type {number}
         * @default 600
         * @constant
         */

        _this._rotationRateMagnitudeThreshold = 600;
        /**
         * Time constant (half-life) of the low-pass filter used to smooth the energy values (in seconds).
         *
         * @this EnergyModule
         * @type {number}
         * @default 0.1
         * @constant
         */

        _this._energyTimeConstant = 0.1;
        _this._onAcceleration = _this._onAcceleration.bind(_this);
        _this._onRotationRate = _this._onRotationRate.bind(_this);
        return _this;
      }
      /**
       * Decay factor of the low-pass filter used to smooth the energy values.
       *
       * @type {number}
       * @readonly
       */


      _createClass(EnergyModule, [{
        key: 'init',

        /**
         * Initializes of the module.
         *
         * @return {Promise}
         */
        value: function init() {
          var _this2 = this;

          return _get(EnergyModule.prototype.__proto__ || Object.getPrototypeOf(EnergyModule.prototype), 'init', this).call(this, function (resolve) {
            // The energy module requires the acceleration and the rotation rate modules
            Promise.all([_MotionInput2.default.requireModule('acceleration'), _MotionInput2.default.requireModule('rotationRate')]).then(function (modules) {
              var _modules = _slicedToArray(modules, 2),
                  acceleration = _modules[0],
                  rotationRate = _modules[1];

              _this2._accelerationModule = acceleration;
              _this2._rotationRateModule = rotationRate;
              _this2.isCalculated = _this2._accelerationModule.isValid || _this2._rotationRateModule.isValid;
              if (_this2._accelerationModule.isValid) _this2.period = _this2._accelerationModule.period;else if (_this2._rotationRateModule.isValid) _this2.period = _this2._rotationRateModule.period;
              resolve(_this2);
            });
          });
        }
      }, {
        key: 'addListener',
        value: function addListener(listener) {
          if (this.listeners.size === 0) {
            if (this._accelerationModule.isValid) this._accelerationModule.addListener(this._onAcceleration);
            if (this._rotationRateModule.isValid) this._rotationRateModule.addListener(this._onRotationRate);
          }

          _get(EnergyModule.prototype.__proto__ || Object.getPrototypeOf(EnergyModule.prototype), 'addListener', this).call(this, listener);
        }
      }, {
        key: 'removeListener',
        value: function removeListener(listener) {
          _get(EnergyModule.prototype.__proto__ || Object.getPrototypeOf(EnergyModule.prototype), 'removeListener', this).call(this, listener);

          if (this.listeners.size === 0) {
            if (this._accelerationModule.isValid) this._accelerationModule.removeListener(this._onAcceleration);
            if (this._rotationRateModule.isValid) this._rotationRateModule.removeListener(this._onRotationRate);
          }
        }
        /**
         * Acceleration values handler.
         *
         * @param {number[]} acceleration - Latest acceleration value.
         */

      }, {
        key: '_onAcceleration',
        value: function _onAcceleration(acceleration) {
          this._accelerationValues = acceleration; // If the rotation rate values are not available, we calculate the energy right away.

          if (!this._rotationRateModule.isValid) this._calculateEnergy();
        }
        /**
         * Rotation rate values handler.
         *
         * @param {number[]} rotationRate - Latest rotation rate value.
         */

      }, {
        key: '_onRotationRate',
        value: function _onRotationRate(rotationRate) {
          this._rotationRateValues = rotationRate; // We know that the acceleration and rotation rate values coming from the
          // same `devicemotion` event are sent in that order (acceleration > rotation rate)
          // so when the rotation rate is provided, we calculate the energy value of the
          // latest `devicemotion` event when we receive the rotation rate values.

          this._calculateEnergy();
        }
        /**
         * Energy calculation: emits an energy value between 0 and 1.
         *
         * This method checks if the acceleration modules is valid. If that is the case,
         * it calculates an estimation of the energy (between 0 and 1) based on the ratio
         * of the current acceleration magnitude and the maximum acceleration magnitude
         * reached so far (clipped at the `this._accelerationMagnitudeThreshold` value).
         * (We use this trick to get uniform behaviors among devices. If we calculated
         * the ratio based on a fixed value independent of what the device is capable of
         * providing, we could get inconsistent behaviors. For instance, the devices
         * whose accelerometers are limited at 2g would always provide very low values
         * compared to devices with accelerometers capable of measuring 4g accelerations.)
         * The same checks and calculations are made on the rotation rate module.
         * Finally, the energy value is the maximum between the energy value estimated
         * from the acceleration, and the one estimated from the rotation rate. It is
         * smoothed through a low-pass filter.
         */

      }, {
        key: '_calculateEnergy',
        value: function _calculateEnergy() {
          var accelerationEnergy = 0;
          var rotationRateEnergy = 0; // Check the acceleration module and calculate an estimation of the energy value from the latest acceleration value

          if (this._accelerationModule.isValid) {
            var aX = this._accelerationValues[0];
            var aY = this._accelerationValues[1];
            var aZ = this._accelerationValues[2];
            var accelerationMagnitude = Math.sqrt(aX * aX + aY * aY + aZ * aZ); // Store the maximum acceleration magnitude reached so far, clipped at `this._accelerationMagnitudeThreshold`

            if (this._accelerationMagnitudeCurrentMax < accelerationMagnitude) this._accelerationMagnitudeCurrentMax = Math.min(accelerationMagnitude, this._accelerationMagnitudeThreshold); // TODO(?): remove ouliers --- on some Android devices, the magnitude is very high on a few isolated datapoints,
            // which make the threshold very high as well => the energy remains around 0.5, even when you shake very hard.

            accelerationEnergy = Math.min(accelerationMagnitude / this._accelerationMagnitudeCurrentMax, 1);
          } // Check the rotation rate module and calculate an estimation of the energy value from the latest rotation rate value


          if (this._rotationRateModule.isValid) {
            var rA = this._rotationRateValues[0];
            var rB = this._rotationRateValues[1];
            var rG = this._rotationRateValues[2];
            var rotationRateMagnitude = Math.sqrt(rA * rA + rB * rB + rG * rG); // Store the maximum rotation rate magnitude reached so far, clipped at `this._rotationRateMagnitudeThreshold`

            if (this._rotationRateMagnitudeCurrentMax < rotationRateMagnitude) this._rotationRateMagnitudeCurrentMax = Math.min(rotationRateMagnitude, this._rotationRateMagnitudeThreshold);
            rotationRateEnergy = Math.min(rotationRateMagnitude / this._rotationRateMagnitudeCurrentMax, 1);
          }

          var energy = Math.max(accelerationEnergy, rotationRateEnergy); // Low-pass filter to smooth the energy values

          var k = this._energyDecay;
          this.event = k * this.event + (1 - k) * energy; // Emit the energy value

          this.emit(this.event);
        }
      }, {
        key: '_energyDecay',
        get: function get() {
          return Math.exp(-2 * Math.PI * this.period / this._energyTimeConstant);
        }
      }]);

      return EnergyModule;
    }(_InputModule3.default);

    exports.default = new EnergyModule();
  });
  unwrapExports(EnergyModule_1);

  var dist$3 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _MotionInput2 = _interopRequireDefault(MotionInput_1);

    var _DeviceOrientationModule2 = _interopRequireDefault(DeviceOrientationModule_1);

    var _DeviceMotionModule2 = _interopRequireDefault(DeviceMotionModule_1);

    var _EnergyModule2 = _interopRequireDefault(EnergyModule_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * The motion input module can be used as follows
     *
     * @example
     * import motionInput from 'motion-input';
     * const requiredEvents = ;
     *
     * motionInput
     *  .init(['acceleration', 'orientation', 'energy'])
     *  .then(([acceleration, orientation, energy]) => {
     *    if (acceleration.isValid) {
     *      acceleration.addListener((data) => {
     *        console.log('acceleration', data);
     *        // do something with the acceleration values
     *      });
     *    }
     *
     *    // ...
     *  });
     */


    _MotionInput2.default.addModule('devicemotion', _DeviceMotionModule2.default);

    _MotionInput2.default.addModule('deviceorientation', _DeviceOrientationModule2.default);

    _MotionInput2.default.addModule('accelerationIncludingGravity', _DeviceMotionModule2.default.accelerationIncludingGravity);

    _MotionInput2.default.addModule('acceleration', _DeviceMotionModule2.default.acceleration);

    _MotionInput2.default.addModule('rotationRate', _DeviceMotionModule2.default.rotationRate);

    _MotionInput2.default.addModule('orientation', _DeviceOrientationModule2.default.orientation);

    _MotionInput2.default.addModule('orientationAlt', _DeviceOrientationModule2.default.orientationAlt);

    _MotionInput2.default.addModule('energy', _EnergyModule2.default);

    exports.default = _MotionInput2.default;
  });
  unwrapExports(dist$3);

  var audioContext$3 = audio.audioContext;

  function setupOverlay(id) {
    var hasButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var overlay = document.getElementById("".concat(id, "-overlay"));
    overlay.addEventListener('click', function () {
      overlay.classList.remove('open');
      if (callback) callback();
    });

    if (hasButton) {
      var button = document.getElementById("".concat(id, "-button"));
      button.addEventListener('click', function () {
        return overlay.classList.add('open');
      });
    } else {
      overlay.classList.add('open');
    }

    return overlay;
  }

  function setupAudioInput() {
    return new Promise(function (resolve, reject) {
      if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({
          audio: true
        }).then(function (stream) {
          resolve(stream);
        }).catch(function (e) {
          return reject('cannot access audio input');
        });
      } else {
        reject('cannot find audio input');
      }
    });
  }

  function resumeAudioContext() {
    if (audioContext$3) {
      if (audioContext$3.state === 'suspended') {
        return audioContext$3.resume();
      } else {
        return Promise.resolve();
      }
    } else {
      return Promise.reject('audio unavailable');
    }
  }

  var selectorButtons = null;
  var initializedAudioInput = false;
  var errorOverlay = null;
  var currentIndex = -1;
  var audioContext$4 = audio.audioContext;
  var emitSynth = null;
  var reSynths = [];
  var loopSynth = null;
  var analyser = null;
  var analyserMin = -120;
  var analyserMax = 12;
  var analyserScale = 1 / (analyserMax - analyserMin);
  var canvasContainer = null;
  var canvas = null;
  var fftSize = 2048;
  var emitTones = [16800, 17200, 17600, 18000, 18400, 18800, 19200, 19600, 20000, 20400, 20800, 21200];
  var emitTonesLevelCorr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var reTones = [281, 348, 430, 531, 657, 812, 1003, 1240, 1533, 1894, 2342, 2894];
  var loops = ['noise'];

  function decibelToLinear(val) {
    return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
  }

  function initAudioInput() {
    Promise.all([resumeAudioContext(), setupAudioInput()]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          undefined$1 = _ref2[0],
          stream = _ref2[1];

      analyser = new SpectrumAnalyser(fftSize, emitTones, 0.2, updateSpectrum);
      analyser.start();

      for (var i = 0; i < reTones.length; i++) {
        reSynths[i].start(reTones[i], 0);
      }

      var mediaStreamSource = audioContext$4.createMediaStreamSource(stream);
      mediaStreamSource.connect(analyser.input);
    }).catch(function (err) {
      emitSynth.stop();
      selectorButtons.deselect();
      errorOverlay.innerHTML = "Oops, ".concat(err, ".");
      errorOverlay.classList.add('open');
    });
  }

  function onStart(index) {
    if (!initializedAudioInput) {
      initializedAudioInput = true;
      initAudioInput();
    }

    if (index < emitTones.length) {
      if (currentIndex >= emitTones.length) loopSynth.stop();
      var freq = emitTones[index];
      var amp = 0.01 * decibelToLinear(emitTonesLevelCorr[index]);
      emitSynth.start(freq, amp);
    } else {
      if (currentIndex < emitTones.length) emitSynth.stop();
      var loop = loops[index - emitTones.length];
      loopSynth.start(loop);
    }

    currentIndex = index;
  }

  function onStop(index) {
    if (currentIndex < emitTones.length) emitSynth.stop();else loopSynth.stop();
    currentIndex = -1;
  }

  function onResize() {
    var contRect = canvasContainer.getBoundingClientRect();
  }

  function displaySpectrum(array) {
    var ctx = canvas.getContext('2d');
    var width = array.length;
    var height = canvas.height;
    canvas.width = width;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < width; i++) {
      var y = analyserScale * (array[i] - analyserMin);
      ctx.beginPath();
      ctx.moveTo(i, canvas.height);
      ctx.lineTo(i, canvas.height * (1 - y));
      ctx.stroke();
    }
  }

  function displayPeaks(peaks) {
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 1;

    for (var i = 0; i < peaks.length; i++) {
      if (i !== currentIndex) {
        var peak = peaks[i];
        var x = peak.bin;
        var y = analyserScale * (peak.level - analyserMin);
        ctx.beginPath();
        ctx.moveTo(x, canvas.height);
        ctx.lineTo(x, canvas.height * (1 - y));
        ctx.stroke();
      }
    }
  }

  function updateSpectrum(array, peaks) {
    displaySpectrum(array);
    displayPeaks(peaks);

    for (var i = 0; i < reTones.length; i++) {
      if (i !== currentIndex) reSynths[i].gain = decibelToLinear(peaks[i].level);
    }
  }

  function main() {
    // const ua = window.navigator.userAgent;
    // const md = new MobileDetect(ua);
    // this.os = (function() {
    //   const os = md.os();
    //   if (os === 'AndroidOS')
    //     return 'android';
    //   else if (os === 'iOS')
    //     return 'ios';
    //   else
    //     return 'other';
    // })();
    canvasContainer = document.getElementById('canvas-container');
    canvas = document.getElementById('spectrum-canvas');
    canvas.height = analyserMax - analyserMin;
    emitSynth = new ToneSynth();

    for (var i = 0; i < reTones.length; i++) {
      reSynths[i] = new ToneSynth();
    }

    loopSynth = new LoopSynth();
    selectorButtons = new SelectorButtons('button-container', onStart, onStop);

    for (var _i = 0; _i < emitTones.length; _i++) {
      var label = emitTones[_i].toString();

      selectorButtons.add(label);
    }

    var _loop = function _loop(_i2) {
      var index = emitTones.length + _i2;
      var label = loops[_i2];
      loopSynth.addSound(label, "sounds/".concat(label, ".wav"), function () {
        return selectorButtons.enable(index);
      });
      selectorButtons.add(label);
    };

    for (var _i2 = 0; _i2 < loops.length; _i2++) {
      _loop(_i2);
    }

    selectorButtons.enable();
    window.addEventListener('resize', onResize);
    errorOverlay = document.getElementById('error-overlay');
    setupOverlay('help');
    setupOverlay('info');
  }

  window.addEventListener('load', main);

}());