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

// node_modules/oboe/dist/oboe-browser.js
var require_oboe_browser = __commonJS({
  "node_modules/oboe/dist/oboe-browser.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define("oboe", [], factory);
      else if (typeof exports === "object")
        exports["oboe"] = factory();
      else
        root["oboe"] = factory();
    })(typeof self !== "undefined" ? self : exports, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
              });
            }
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 7);
        }([
          /* 0 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "j", function() {
              return partialComplete;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
              return compose2;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
              return attr;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
              return lazyUnion;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return apply;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
              return varArgs;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
              return flip;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
              return lazyIntersection;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
              return noop;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return always;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
              return functor;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
            var partialComplete = varArgs(function(fn, args) {
              var numBoundArgs = args.length;
              return varArgs(function(callArgs) {
                for (var i = 0; i < callArgs.length; i++) {
                  args[numBoundArgs + i] = callArgs[i];
                }
                args.length = numBoundArgs + callArgs.length;
                return fn.apply(this, args);
              });
            }), compose = varArgs(function(fns) {
              var fnsList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                "c"
                /* arrayAsList */
              ])(fns);
              function next(params, curFn) {
                return [apply(params, curFn)];
              }
              return varArgs(function(startParams) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                  "f"
                  /* foldR */
                ])(next, startParams, fnsList)[0];
              });
            });
            function compose2(f1, f2) {
              return function() {
                return f1.call(this, f2.apply(this, arguments));
              };
            }
            function attr(key) {
              return function(o) {
                return o[key];
              };
            }
            var lazyUnion = varArgs(function(fns) {
              return varArgs(function(params) {
                var maybeValue;
                for (var i = 0; i < attr("length")(fns); i++) {
                  maybeValue = apply(params, fns[i]);
                  if (maybeValue) {
                    return maybeValue;
                  }
                }
              });
            });
            function apply(args, fn) {
              return fn.apply(void 0, args);
            }
            function varArgs(fn) {
              var numberOfFixedArguments = fn.length - 1, slice = Array.prototype.slice;
              if (numberOfFixedArguments == 0) {
                return function() {
                  return fn.call(this, slice.call(arguments));
                };
              } else if (numberOfFixedArguments == 1) {
                return function() {
                  return fn.call(this, arguments[0], slice.call(arguments, 1));
                };
              }
              var argsHolder = Array(fn.length);
              return function() {
                for (var i = 0; i < numberOfFixedArguments; i++) {
                  argsHolder[i] = arguments[i];
                }
                argsHolder[numberOfFixedArguments] = slice.call(arguments, numberOfFixedArguments);
                return fn.apply(this, argsHolder);
              };
            }
            function flip(fn) {
              return function(a, b) {
                return fn(b, a);
              };
            }
            function lazyIntersection(fn1, fn2) {
              return function(param) {
                return fn1(param) && fn2(param);
              };
            }
            function noop() {
            }
            function always() {
              return true;
            }
            function functor(val) {
              return function() {
                return val;
              };
            }
          },
          /* 1 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "d", function() {
              return cons;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
              return head;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
              return tail;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
              return arrayAsList;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
              return list;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
              return listAsArray;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
              return map;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
              return foldR;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
              return without;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return all;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return applyEach;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
              return reverseList;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
              return first;
            });
            var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);
            function cons(x, xs) {
              return [x, xs];
            }
            var emptyList = null, head = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
              "c"
              /* attr */
            ])(0), tail = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
              "c"
              /* attr */
            ])(1);
            function arrayAsList(inputArray) {
              return reverseList(
                inputArray.reduce(
                  Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                    "e"
                    /* flip */
                  ])(cons),
                  emptyList
                )
              );
            }
            var list = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
              "k"
              /* varArgs */
            ])(arrayAsList);
            function listAsArray(list2) {
              return foldR(function(arraySoFar, listItem) {
                arraySoFar.unshift(listItem);
                return arraySoFar;
              }, [], list2);
            }
            function map(fn, list2) {
              return list2 ? cons(fn(head(list2)), map(fn, tail(list2))) : emptyList;
            }
            function foldR(fn, startValue, list2) {
              return list2 ? fn(foldR(fn, startValue, tail(list2)), head(list2)) : startValue;
            }
            function foldR1(fn, list2) {
              return tail(list2) ? fn(foldR1(fn, tail(list2)), head(list2)) : head(list2);
            }
            function without(list2, test, removedFn) {
              return withoutInner(list2, removedFn || __WEBPACK_IMPORTED_MODULE_0__functional__[
                "i"
                /* noop */
              ]);
              function withoutInner(subList, removedFn2) {
                return subList ? test(head(subList)) ? (removedFn2(head(subList)), tail(subList)) : cons(head(subList), withoutInner(tail(subList), removedFn2)) : emptyList;
              }
            }
            function all(fn, list2) {
              return !list2 || fn(head(list2)) && all(fn, tail(list2));
            }
            function applyEach(fnList, args) {
              if (fnList) {
                head(fnList).apply(null, args);
                applyEach(tail(fnList), args);
              }
            }
            function reverseList(list2) {
              function reverseInner(list3, reversedAlready) {
                if (!list3) {
                  return reversedAlready;
                }
                return reverseInner(tail(list3), cons(head(list3), reversedAlready));
              }
              return reverseInner(list2, emptyList);
            }
            function first(test, list2) {
              return list2 && (test(head(list2)) ? head(list2) : first(test, tail(list2)));
            }
          },
          /* 2 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "c", function() {
              return isOfType;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
              return len;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
              return isString;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return defined;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return hasAllProperties;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
            var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
            function isOfType(T, maybeSomething) {
              return maybeSomething && maybeSomething.constructor === T;
            }
            var len = Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
              "c"
              /* attr */
            ])("length"), isString = Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
              "j"
              /* partialComplete */
            ])(isOfType, String);
            function defined(value) {
              return value !== void 0;
            }
            function hasAllProperties(fieldList, o) {
              return o instanceof Object && Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                "a"
                /* all */
              ])(function(field) {
                return field in o;
              }, fieldList);
            }
          },
          /* 3 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "f", function() {
              return NODE_OPENED;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
              return NODE_CLOSED;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
              return NODE_SWAP;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
              return NODE_DROP;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return FAIL_EVENT;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
              return ROOT_NODE_FOUND;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
              return ROOT_PATH_FOUND;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
              return HTTP_START;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
              return STREAM_DATA;
            });
            __webpack_require__.d(__webpack_exports__, "n", function() {
              return STREAM_END;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return ABORTING;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
              return SAX_KEY;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
              return SAX_VALUE_OPEN;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
              return SAX_VALUE_CLOSE;
            });
            __webpack_require__.d(__webpack_exports__, "o", function() {
              return errorReport;
            });
            var _S = 1, NODE_OPENED = _S++, NODE_CLOSED = _S++, NODE_SWAP = _S++, NODE_DROP = _S++, FAIL_EVENT = "fail", ROOT_NODE_FOUND = _S++, ROOT_PATH_FOUND = _S++, HTTP_START = "start", STREAM_DATA = "data", STREAM_END = "end", ABORTING = _S++, SAX_KEY = _S++, SAX_VALUE_OPEN = _S++, SAX_VALUE_CLOSE = _S++;
            function errorReport(statusCode, body, error) {
              try {
                var jsonBody = JSON.parse(body);
              } catch (e) {
              }
              return {
                statusCode,
                body,
                jsonBody,
                thrown: error
              };
            }
          },
          /* 4 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return namedNode;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return keyOf;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
              return nodeOf;
            });
            var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);
            function namedNode(key, node) {
              return { key, node };
            }
            var keyOf = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
              "c"
              /* attr */
            ])("key");
            var nodeOf = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
              "c"
              /* attr */
            ])("node");
          },
          /* 5 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return oboe2;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
            var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
            var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
            var __WEBPACK_IMPORTED_MODULE_3__defaults__ = __webpack_require__(8);
            var __WEBPACK_IMPORTED_MODULE_4__wire__ = __webpack_require__(9);
            function oboe2(arg1) {
              var nodeStreamMethodNames = Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                "h"
                /* list */
              ])("resume", "pause", "pipe"), isStream = Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                "j"
                /* partialComplete */
              ])(
                __WEBPACK_IMPORTED_MODULE_2__util__[
                  "b"
                  /* hasAllProperties */
                ],
                nodeStreamMethodNames
              );
              if (arg1) {
                if (isStream(arg1) || Object(__WEBPACK_IMPORTED_MODULE_2__util__[
                  "d"
                  /* isString */
                ])(arg1)) {
                  return Object(__WEBPACK_IMPORTED_MODULE_3__defaults__[
                    "a"
                    /* applyDefaults */
                  ])(
                    __WEBPACK_IMPORTED_MODULE_4__wire__[
                      "a"
                      /* wire */
                    ],
                    arg1
                    // url
                  );
                } else {
                  return Object(__WEBPACK_IMPORTED_MODULE_3__defaults__[
                    "a"
                    /* applyDefaults */
                  ])(
                    __WEBPACK_IMPORTED_MODULE_4__wire__[
                      "a"
                      /* wire */
                    ],
                    arg1.url,
                    arg1.method,
                    arg1.body,
                    arg1.headers,
                    arg1.withCredentials,
                    arg1.cached
                  );
                }
              } else {
                return Object(__WEBPACK_IMPORTED_MODULE_4__wire__[
                  "a"
                  /* wire */
                ])();
              }
            }
            oboe2.drop = function() {
              return oboe2.drop;
            };
          },
          /* 6 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return incrementalContentBuilder;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return ROOT_PATH;
            });
            var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
            var __WEBPACK_IMPORTED_MODULE_1__ascent__ = __webpack_require__(4);
            var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
            var __WEBPACK_IMPORTED_MODULE_3__lists__ = __webpack_require__(1);
            var ROOT_PATH = {};
            function incrementalContentBuilder(oboeBus) {
              var emitNodeOpened = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "f"
                /* NODE_OPENED */
              ]).emit, emitNodeClosed = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "d"
                /* NODE_CLOSED */
              ]).emit, emitRootOpened = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "i"
                /* ROOT_PATH_FOUND */
              ]).emit, emitRootClosed = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "h"
                /* ROOT_NODE_FOUND */
              ]).emit;
              function arrayIndicesAreKeys(possiblyInconsistentAscent, newDeepestNode) {
                var parentNode = Object(__WEBPACK_IMPORTED_MODULE_1__ascent__[
                  "c"
                  /* nodeOf */
                ])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "g"
                  /* head */
                ])(possiblyInconsistentAscent));
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__[
                  "c"
                  /* isOfType */
                ])(Array, parentNode) ? keyFound(
                  possiblyInconsistentAscent,
                  Object(__WEBPACK_IMPORTED_MODULE_2__util__[
                    "e"
                    /* len */
                  ])(parentNode),
                  newDeepestNode
                ) : (
                  // nothing needed, return unchanged
                  possiblyInconsistentAscent
                );
              }
              function nodeOpened(ascent, newDeepestNode) {
                if (!ascent) {
                  emitRootOpened(newDeepestNode);
                  return keyFound(ascent, ROOT_PATH, newDeepestNode);
                }
                var arrayConsistentAscent = arrayIndicesAreKeys(ascent, newDeepestNode), ancestorBranches = Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "l"
                  /* tail */
                ])(arrayConsistentAscent), previouslyUnmappedName = Object(__WEBPACK_IMPORTED_MODULE_1__ascent__[
                  "a"
                  /* keyOf */
                ])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "g"
                  /* head */
                ])(arrayConsistentAscent));
                appendBuiltContent(
                  ancestorBranches,
                  previouslyUnmappedName,
                  newDeepestNode
                );
                return Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "d"
                  /* cons */
                ])(
                  Object(__WEBPACK_IMPORTED_MODULE_1__ascent__[
                    "b"
                    /* namedNode */
                  ])(previouslyUnmappedName, newDeepestNode),
                  ancestorBranches
                );
              }
              function appendBuiltContent(ancestorBranches, key, node) {
                Object(__WEBPACK_IMPORTED_MODULE_1__ascent__[
                  "c"
                  /* nodeOf */
                ])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "g"
                  /* head */
                ])(ancestorBranches))[key] = node;
              }
              function keyFound(ascent, newDeepestName, maybeNewDeepestNode) {
                if (ascent) {
                  appendBuiltContent(ascent, newDeepestName, maybeNewDeepestNode);
                }
                var ascentWithNewPath = Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "d"
                  /* cons */
                ])(
                  Object(__WEBPACK_IMPORTED_MODULE_1__ascent__[
                    "b"
                    /* namedNode */
                  ])(
                    newDeepestName,
                    maybeNewDeepestNode
                  ),
                  ascent
                );
                emitNodeOpened(ascentWithNewPath);
                return ascentWithNewPath;
              }
              function nodeClosed(ascent) {
                emitNodeClosed(ascent);
                return Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "l"
                  /* tail */
                ])(ascent) || // If there are no nodes left in the ascent the root node
                // just closed. Emit a special event for this: 
                emitRootClosed(Object(__WEBPACK_IMPORTED_MODULE_1__ascent__[
                  "c"
                  /* nodeOf */
                ])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__[
                  "g"
                  /* head */
                ])(ascent)));
              }
              var contentBuilderHandlers = {};
              contentBuilderHandlers[__WEBPACK_IMPORTED_MODULE_0__events__[
                "l"
                /* SAX_VALUE_OPEN */
              ]] = nodeOpened;
              contentBuilderHandlers[__WEBPACK_IMPORTED_MODULE_0__events__[
                "k"
                /* SAX_VALUE_CLOSE */
              ]] = nodeClosed;
              contentBuilderHandlers[__WEBPACK_IMPORTED_MODULE_0__events__[
                "j"
                /* SAX_KEY */
              ]] = keyFound;
              return contentBuilderHandlers;
            }
          },
          /* 7 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
            var __WEBPACK_IMPORTED_MODULE_0__publicApi__ = __webpack_require__(5);
            __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__publicApi__[
              "a"
              /* oboe */
            ];
          },
          /* 8 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return applyDefaults;
            });
            var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);
            function applyDefaults(passthrough, url, httpMethodName, body, headers, withCredentials, cached) {
              headers = headers ? (
                // Shallow-clone the headers array. This allows it to be
                // modified without side effects to the caller. We don't
                // want to change objects that the user passes in.
                JSON.parse(JSON.stringify(headers))
              ) : {};
              if (body) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util__[
                  "d"
                  /* isString */
                ])(body)) {
                  body = JSON.stringify(body);
                  headers["Content-Type"] = headers["Content-Type"] || "application/json";
                }
                headers["Content-Length"] = headers["Content-Length"] || body.length;
              } else {
                body = null;
              }
              function modifiedUrl(baseUrl, cached2) {
                if (cached2 === false) {
                  if (baseUrl.indexOf("?") == -1) {
                    baseUrl += "?";
                  } else {
                    baseUrl += "&";
                  }
                  baseUrl += "_=" + (/* @__PURE__ */ new Date()).getTime();
                }
                return baseUrl;
              }
              return passthrough(httpMethodName || "GET", modifiedUrl(url, cached), body, headers, withCredentials || false);
            }
          },
          /* 9 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return wire;
            });
            var __WEBPACK_IMPORTED_MODULE_0__pubSub__ = __webpack_require__(10);
            var __WEBPACK_IMPORTED_MODULE_1__ascentManager__ = __webpack_require__(12);
            var __WEBPACK_IMPORTED_MODULE_2__incrementalContentBuilder__ = __webpack_require__(6);
            var __WEBPACK_IMPORTED_MODULE_3__patternAdapter__ = __webpack_require__(13);
            var __WEBPACK_IMPORTED_MODULE_4__jsonPath__ = __webpack_require__(14);
            var __WEBPACK_IMPORTED_MODULE_5__instanceApi__ = __webpack_require__(16);
            var __WEBPACK_IMPORTED_MODULE_6__libs_clarinet__ = __webpack_require__(17);
            var __WEBPACK_IMPORTED_MODULE_7__streamingHttp_node__ = __webpack_require__(18);
            function wire(httpMethodName, contentSource, body, headers, withCredentials) {
              var oboeBus = Object(__WEBPACK_IMPORTED_MODULE_0__pubSub__[
                "a"
                /* pubSub */
              ])();
              if (contentSource) {
                Object(__WEBPACK_IMPORTED_MODULE_7__streamingHttp_node__[
                  "b"
                  /* streamingHttp */
                ])(
                  oboeBus,
                  Object(__WEBPACK_IMPORTED_MODULE_7__streamingHttp_node__[
                    "a"
                    /* httpTransport */
                  ])(),
                  httpMethodName,
                  contentSource,
                  body,
                  headers,
                  withCredentials
                );
              }
              Object(__WEBPACK_IMPORTED_MODULE_6__libs_clarinet__[
                "a"
                /* clarinet */
              ])(oboeBus);
              Object(__WEBPACK_IMPORTED_MODULE_1__ascentManager__[
                "a"
                /* ascentManager */
              ])(oboeBus, Object(__WEBPACK_IMPORTED_MODULE_2__incrementalContentBuilder__[
                "b"
                /* incrementalContentBuilder */
              ])(oboeBus));
              Object(__WEBPACK_IMPORTED_MODULE_3__patternAdapter__[
                "a"
                /* patternAdapter */
              ])(oboeBus, __WEBPACK_IMPORTED_MODULE_4__jsonPath__[
                "a"
                /* jsonPathCompiler */
              ]);
              return Object(__WEBPACK_IMPORTED_MODULE_5__instanceApi__[
                "a"
                /* instanceApi */
              ])(oboeBus, contentSource);
            }
          },
          /* 10 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return pubSub;
            });
            var __WEBPACK_IMPORTED_MODULE_0__singleEventPubSub__ = __webpack_require__(11);
            var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
            function pubSub() {
              var singles = {}, newListener = newSingle("newListener"), removeListener = newSingle("removeListener");
              function newSingle(eventName) {
                return singles[eventName] = Object(__WEBPACK_IMPORTED_MODULE_0__singleEventPubSub__[
                  "a"
                  /* singleEventPubSub */
                ])(
                  eventName,
                  newListener,
                  removeListener
                );
              }
              function pubSubInstance(eventName) {
                return singles[eventName] || newSingle(eventName);
              }
              ["emit", "on", "un"].forEach(function(methodName) {
                pubSubInstance[methodName] = Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                  "k"
                  /* varArgs */
                ])(function(eventName, parameters) {
                  Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                    "b"
                    /* apply */
                  ])(parameters, pubSubInstance(eventName)[methodName]);
                });
              });
              return pubSubInstance;
            }
          },
          /* 11 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return singleEventPubSub;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
            var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
            var __WEBPACK_IMPORTED_MODULE_2__functional__ = __webpack_require__(0);
            function singleEventPubSub(eventType, newListener, removeListener) {
              var listenerTupleList, listenerList;
              function hasId(id) {
                return function(tuple) {
                  return tuple.id == id;
                };
              }
              return {
                /**
                 * @param {Function} listener
                 * @param {*} listenerId
                 *    an id that this listener can later by removed by.
                 *    Can be of any type, to be compared to other ids using ==
                 */
                on: function(listener, listenerId) {
                  var tuple = {
                    listener,
                    id: listenerId || listener
                    // when no id is given use the
                    // listener function as the id
                  };
                  if (newListener) {
                    newListener.emit(eventType, listener, tuple.id);
                  }
                  listenerTupleList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                    "d"
                    /* cons */
                  ])(tuple, listenerTupleList);
                  listenerList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                    "d"
                    /* cons */
                  ])(listener, listenerList);
                  return this;
                },
                emit: function() {
                  Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                    "b"
                    /* applyEach */
                  ])(listenerList, arguments);
                },
                un: function(listenerId) {
                  var removed;
                  listenerTupleList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                    "m"
                    /* without */
                  ])(
                    listenerTupleList,
                    hasId(listenerId),
                    function(tuple) {
                      removed = tuple;
                    }
                  );
                  if (removed) {
                    listenerList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                      "m"
                      /* without */
                    ])(listenerList, function(listener) {
                      return listener == removed.listener;
                    });
                    if (removeListener) {
                      removeListener.emit(eventType, removed.listener, removed.id);
                    }
                  }
                },
                listeners: function() {
                  return listenerList;
                },
                hasListener: function(listenerId) {
                  var test = listenerId ? hasId(listenerId) : __WEBPACK_IMPORTED_MODULE_2__functional__[
                    "a"
                    /* always */
                  ];
                  return Object(__WEBPACK_IMPORTED_MODULE_1__util__[
                    "a"
                    /* defined */
                  ])(Object(__WEBPACK_IMPORTED_MODULE_0__lists__[
                    "e"
                    /* first */
                  ])(test, listenerTupleList));
                }
              };
            }
          },
          /* 12 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return ascentManager;
            });
            var __WEBPACK_IMPORTED_MODULE_0__ascent__ = __webpack_require__(4);
            var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(3);
            var __WEBPACK_IMPORTED_MODULE_2__lists__ = __webpack_require__(1);
            function ascentManager(oboeBus, handlers) {
              "use strict";
              var listenerId = {}, ascent;
              function stateAfter(handler) {
                return function(param) {
                  ascent = handler(ascent, param);
                };
              }
              for (var eventName in handlers) {
                oboeBus(eventName).on(stateAfter(handlers[eventName]), listenerId);
              }
              oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                "g"
                /* NODE_SWAP */
              ]).on(function(newNode) {
                var oldHead = Object(__WEBPACK_IMPORTED_MODULE_2__lists__[
                  "g"
                  /* head */
                ])(ascent), key = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__[
                  "a"
                  /* keyOf */
                ])(oldHead), ancestors = Object(__WEBPACK_IMPORTED_MODULE_2__lists__[
                  "l"
                  /* tail */
                ])(ascent), parentNode;
                if (ancestors) {
                  parentNode = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__[
                    "c"
                    /* nodeOf */
                  ])(Object(__WEBPACK_IMPORTED_MODULE_2__lists__[
                    "g"
                    /* head */
                  ])(ancestors));
                  parentNode[key] = newNode;
                }
              });
              oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                "e"
                /* NODE_DROP */
              ]).on(function() {
                var oldHead = Object(__WEBPACK_IMPORTED_MODULE_2__lists__[
                  "g"
                  /* head */
                ])(ascent), key = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__[
                  "a"
                  /* keyOf */
                ])(oldHead), ancestors = Object(__WEBPACK_IMPORTED_MODULE_2__lists__[
                  "l"
                  /* tail */
                ])(ascent), parentNode;
                if (ancestors) {
                  parentNode = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__[
                    "c"
                    /* nodeOf */
                  ])(Object(__WEBPACK_IMPORTED_MODULE_2__lists__[
                    "g"
                    /* head */
                  ])(ancestors));
                  delete parentNode[key];
                }
              });
              oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                "a"
                /* ABORTING */
              ]).on(function() {
                for (var eventName2 in handlers) {
                  oboeBus(eventName2).un(listenerId);
                }
              });
            }
          },
          /* 13 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return patternAdapter;
            });
            var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
            var __WEBPACK_IMPORTED_MODULE_1__lists__ = __webpack_require__(1);
            var __WEBPACK_IMPORTED_MODULE_2__ascent__ = __webpack_require__(4);
            function patternAdapter(oboeBus, jsonPathCompiler) {
              var predicateEventMap = {
                node: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                  "d"
                  /* NODE_CLOSED */
                ]),
                path: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                  "f"
                  /* NODE_OPENED */
                ])
              };
              function emitMatchingNode(emitMatch, node, ascent) {
                var descent = Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "k"
                  /* reverseList */
                ])(ascent);
                emitMatch(
                  node,
                  // To make a path, strip off the last item which is the special
                  // ROOT_PATH token for the 'path' to the root node          
                  Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "i"
                    /* listAsArray */
                  ])(Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "l"
                    /* tail */
                  ])(Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "j"
                    /* map */
                  ])(__WEBPACK_IMPORTED_MODULE_2__ascent__[
                    "a"
                    /* keyOf */
                  ], descent))),
                  // path
                  Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "i"
                    /* listAsArray */
                  ])(Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "j"
                    /* map */
                  ])(__WEBPACK_IMPORTED_MODULE_2__ascent__[
                    "c"
                    /* nodeOf */
                  ], descent))
                  // ancestors    
                );
              }
              function addUnderlyingListener(fullEventName, predicateEvent, compiledJsonPath) {
                var emitMatch = oboeBus(fullEventName).emit;
                predicateEvent.on(function(ascent) {
                  var maybeMatchingMapping = compiledJsonPath(ascent);
                  if (maybeMatchingMapping !== false) {
                    emitMatchingNode(
                      emitMatch,
                      Object(__WEBPACK_IMPORTED_MODULE_2__ascent__[
                        "c"
                        /* nodeOf */
                      ])(maybeMatchingMapping),
                      ascent
                    );
                  }
                }, fullEventName);
                oboeBus("removeListener").on(function(removedEventName) {
                  if (removedEventName == fullEventName) {
                    if (!oboeBus(removedEventName).listeners()) {
                      predicateEvent.un(fullEventName);
                    }
                  }
                });
              }
              oboeBus("newListener").on(function(fullEventName) {
                var match = /(node|path):(.*)/.exec(fullEventName);
                if (match) {
                  var predicateEvent = predicateEventMap[match[1]];
                  if (!predicateEvent.hasListener(fullEventName)) {
                    addUnderlyingListener(
                      fullEventName,
                      predicateEvent,
                      jsonPathCompiler(match[2])
                    );
                  }
                }
              });
            }
          },
          /* 14 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return jsonPathCompiler;
            });
            var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);
            var __WEBPACK_IMPORTED_MODULE_1__lists__ = __webpack_require__(1);
            var __WEBPACK_IMPORTED_MODULE_2__ascent__ = __webpack_require__(4);
            var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
            var __WEBPACK_IMPORTED_MODULE_4__incrementalContentBuilder__ = __webpack_require__(6);
            var __WEBPACK_IMPORTED_MODULE_5__jsonPathSyntax__ = __webpack_require__(15);
            var jsonPathCompiler = Object(__WEBPACK_IMPORTED_MODULE_5__jsonPathSyntax__[
              "a"
              /* jsonPathSyntax */
            ])(function(pathNodeSyntax, doubleDotSyntax, dotSyntax, bangSyntax, emptySyntax) {
              var CAPTURING_INDEX = 1;
              var NAME_INDEX = 2;
              var FIELD_LIST_INDEX = 3;
              var headKey = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                "d"
                /* compose2 */
              ])(__WEBPACK_IMPORTED_MODULE_2__ascent__[
                "a"
                /* keyOf */
              ], __WEBPACK_IMPORTED_MODULE_1__lists__[
                "g"
                /* head */
              ]), headNode = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                "d"
                /* compose2 */
              ])(__WEBPACK_IMPORTED_MODULE_2__ascent__[
                "c"
                /* nodeOf */
              ], __WEBPACK_IMPORTED_MODULE_1__lists__[
                "g"
                /* head */
              ]);
              function nameClause(previousExpr, detection) {
                var name = detection[NAME_INDEX], matchesName = !name || name == "*" ? __WEBPACK_IMPORTED_MODULE_0__functional__[
                  "a"
                  /* always */
                ] : function(ascent) {
                  return headKey(ascent) == name;
                };
                return Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "g"
                  /* lazyIntersection */
                ])(matchesName, previousExpr);
              }
              function duckTypeClause(previousExpr, detection) {
                var fieldListStr = detection[FIELD_LIST_INDEX];
                if (!fieldListStr)
                  return previousExpr;
                var hasAllrequiredFields = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "j"
                  /* partialComplete */
                ])(
                  __WEBPACK_IMPORTED_MODULE_3__util__[
                    "b"
                    /* hasAllProperties */
                  ],
                  Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "c"
                    /* arrayAsList */
                  ])(fieldListStr.split(/\W+/))
                ), isMatch = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "d"
                  /* compose2 */
                ])(
                  hasAllrequiredFields,
                  headNode
                );
                return Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "g"
                  /* lazyIntersection */
                ])(isMatch, previousExpr);
              }
              function capture(previousExpr, detection) {
                var capturing = !!detection[CAPTURING_INDEX];
                if (!capturing)
                  return previousExpr;
                return Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "g"
                  /* lazyIntersection */
                ])(previousExpr, __WEBPACK_IMPORTED_MODULE_1__lists__[
                  "g"
                  /* head */
                ]);
              }
              function skip1(previousExpr) {
                if (previousExpr == __WEBPACK_IMPORTED_MODULE_0__functional__[
                  "a"
                  /* always */
                ]) {
                  return __WEBPACK_IMPORTED_MODULE_0__functional__[
                    "a"
                    /* always */
                  ];
                }
                function notAtRoot(ascent) {
                  return headKey(ascent) != __WEBPACK_IMPORTED_MODULE_4__incrementalContentBuilder__[
                    "a"
                    /* ROOT_PATH */
                  ];
                }
                return Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "g"
                  /* lazyIntersection */
                ])(
                  /* If we're already at the root but there are more 
                                    expressions to satisfy, can't consume any more. No match.
                  
                                    This check is why none of the other exprs have to be able 
                                    to handle empty lists; skip1 is the only evaluator that 
                                    moves onto the next token and it refuses to do so once it 
                                    reaches the last item in the list. */
                  notAtRoot,
                  /* We are not at the root of the ascent yet.
                     Move to the next level of the ascent by handing only 
                     the tail to the previous expression */
                  Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                    "d"
                    /* compose2 */
                  ])(previousExpr, __WEBPACK_IMPORTED_MODULE_1__lists__[
                    "l"
                    /* tail */
                  ])
                );
              }
              function skipMany(previousExpr) {
                if (previousExpr == __WEBPACK_IMPORTED_MODULE_0__functional__[
                  "a"
                  /* always */
                ]) {
                  return __WEBPACK_IMPORTED_MODULE_0__functional__[
                    "a"
                    /* always */
                  ];
                }
                var terminalCaseWhenArrivingAtRoot = rootExpr(), terminalCaseWhenPreviousExpressionIsSatisfied = previousExpr, recursiveCase = skip1(function(ascent) {
                  return cases(ascent);
                }), cases = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "h"
                  /* lazyUnion */
                ])(
                  terminalCaseWhenArrivingAtRoot,
                  terminalCaseWhenPreviousExpressionIsSatisfied,
                  recursiveCase
                );
                return cases;
              }
              function rootExpr() {
                return function(ascent) {
                  return headKey(ascent) == __WEBPACK_IMPORTED_MODULE_4__incrementalContentBuilder__[
                    "a"
                    /* ROOT_PATH */
                  ];
                };
              }
              function statementExpr(lastClause) {
                return function(ascent) {
                  var exprMatch = lastClause(ascent);
                  return exprMatch === true ? Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                    "g"
                    /* head */
                  ])(ascent) : exprMatch;
                };
              }
              function expressionsReader(exprs, parserGeneratedSoFar, detection) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "f"
                  /* foldR */
                ])(
                  function(parserGeneratedSoFar2, expr) {
                    return expr(parserGeneratedSoFar2, detection);
                  },
                  parserGeneratedSoFar,
                  exprs
                );
              }
              function generateClauseReaderIfTokenFound(tokenDetector, clauseEvaluatorGenerators, jsonPath, parserGeneratedSoFar, onSuccess) {
                var detected = tokenDetector(jsonPath);
                if (detected) {
                  var compiledParser = expressionsReader(
                    clauseEvaluatorGenerators,
                    parserGeneratedSoFar,
                    detected
                  ), remainingUnparsedJsonPath = jsonPath.substr(Object(__WEBPACK_IMPORTED_MODULE_3__util__[
                    "e"
                    /* len */
                  ])(detected[0]));
                  return onSuccess(remainingUnparsedJsonPath, compiledParser);
                }
              }
              function clauseMatcher(tokenDetector, exprs) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                  "j"
                  /* partialComplete */
                ])(
                  generateClauseReaderIfTokenFound,
                  tokenDetector,
                  exprs
                );
              }
              var clauseForJsonPath = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                "h"
                /* lazyUnion */
              ])(
                clauseMatcher(pathNodeSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "h"
                  /* list */
                ])(
                  capture,
                  duckTypeClause,
                  nameClause,
                  skip1
                )),
                clauseMatcher(doubleDotSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "h"
                  /* list */
                ])(skipMany)),
                clauseMatcher(dotSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "h"
                  /* list */
                ])()),
                clauseMatcher(bangSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "h"
                  /* list */
                ])(
                  capture,
                  rootExpr
                )),
                clauseMatcher(emptySyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__[
                  "h"
                  /* list */
                ])(statementExpr)),
                function(jsonPath) {
                  throw Error('"' + jsonPath + '" could not be tokenised');
                }
              );
              function returnFoundParser(_remainingJsonPath, compiledParser) {
                return compiledParser;
              }
              function compileJsonPathToFunction(uncompiledJsonPath, parserGeneratedSoFar) {
                var onFind = uncompiledJsonPath ? compileJsonPathToFunction : returnFoundParser;
                return clauseForJsonPath(
                  uncompiledJsonPath,
                  parserGeneratedSoFar,
                  onFind
                );
              }
              return function(jsonPath) {
                try {
                  return compileJsonPathToFunction(jsonPath, __WEBPACK_IMPORTED_MODULE_0__functional__[
                    "a"
                    /* always */
                  ]);
                } catch (e) {
                  throw Error(
                    'Could not compile "' + jsonPath + '" because ' + e.message
                  );
                }
              };
            });
          },
          /* 15 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return jsonPathSyntax;
            });
            var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);
            var jsonPathSyntax = function() {
              var regexDescriptor = function regexDescriptor2(regex) {
                return regex.exec.bind(regex);
              }, jsonPathClause = Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                "k"
                /* varArgs */
              ])(function(componentRegexes) {
                componentRegexes.unshift(/^/);
                return regexDescriptor(
                  RegExp(
                    componentRegexes.map(Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                      "c"
                      /* attr */
                    ])("source")).join("")
                  )
                );
              }), possiblyCapturing = /(\$?)/, namedNode = /([\w-_]+|\*)/, namePlaceholder = /()/, nodeInArrayNotation = /\["([^"]+)"\]/, numberedNodeInArrayNotation = /\[(\d+|\*)\]/, fieldList = /{([\w ]*?)}/, optionalFieldList = /(?:{([\w ]*?)})?/, jsonPathNamedNodeInObjectNotation = jsonPathClause(
                possiblyCapturing,
                namedNode,
                optionalFieldList
              ), jsonPathNamedNodeInArrayNotation = jsonPathClause(
                possiblyCapturing,
                nodeInArrayNotation,
                optionalFieldList
              ), jsonPathNumberedNodeInArrayNotation = jsonPathClause(
                possiblyCapturing,
                numberedNodeInArrayNotation,
                optionalFieldList
              ), jsonPathPureDuckTyping = jsonPathClause(
                possiblyCapturing,
                namePlaceholder,
                fieldList
              ), jsonPathDoubleDot = jsonPathClause(/\.\./), jsonPathDot = jsonPathClause(/\./), jsonPathBang = jsonPathClause(
                possiblyCapturing,
                /!/
              ), emptyString = jsonPathClause(/$/);
              return function(fn) {
                return fn(
                  Object(__WEBPACK_IMPORTED_MODULE_0__functional__[
                    "h"
                    /* lazyUnion */
                  ])(
                    jsonPathNamedNodeInObjectNotation,
                    jsonPathNamedNodeInArrayNotation,
                    jsonPathNumberedNodeInArrayNotation,
                    jsonPathPureDuckTyping
                  ),
                  jsonPathDoubleDot,
                  jsonPathDot,
                  jsonPathBang,
                  emptyString
                );
              };
            }();
          },
          /* 16 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return instanceApi;
            });
            var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
            var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
            var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
            var __WEBPACK_IMPORTED_MODULE_3__publicApi__ = __webpack_require__(5);
            function instanceApi(oboeBus, contentSource) {
              var oboeApi, fullyQualifiedNamePattern = /^(node|path):./, rootNodeFinishedEvent = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "h"
                /* ROOT_NODE_FOUND */
              ]), emitNodeDrop = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "e"
                /* NODE_DROP */
              ]).emit, emitNodeSwap = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "g"
                /* NODE_SWAP */
              ]).emit, addListener = Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                "k"
                /* varArgs */
              ])(function(eventId, parameters) {
                if (oboeApi[eventId]) {
                  Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                    "b"
                    /* apply */
                  ])(parameters, oboeApi[eventId]);
                } else {
                  var event = oboeBus(eventId), listener = parameters[0];
                  if (fullyQualifiedNamePattern.test(eventId)) {
                    addForgettableCallback(event, listener);
                  } else {
                    event.on(listener);
                  }
                }
                return oboeApi;
              }), removeListener = function(eventId, p2, p3) {
                if (eventId == "done") {
                  rootNodeFinishedEvent.un(p2);
                } else if (eventId == "node" || eventId == "path") {
                  oboeBus.un(eventId + ":" + p2, p3);
                } else {
                  var listener = p2;
                  oboeBus(eventId).un(listener);
                }
                return oboeApi;
              };
              function addProtectedCallback(eventName, callback) {
                oboeBus(eventName).on(protectedCallback(callback), callback);
                return oboeApi;
              }
              function addForgettableCallback(event, callback, listenerId) {
                listenerId = listenerId || callback;
                var safeCallback = protectedCallback(callback);
                event.on(function() {
                  var discard = false;
                  oboeApi.forget = function() {
                    discard = true;
                  };
                  Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                    "b"
                    /* apply */
                  ])(arguments, safeCallback);
                  delete oboeApi.forget;
                  if (discard) {
                    event.un(listenerId);
                  }
                }, listenerId);
                return oboeApi;
              }
              function protectedCallback(callback) {
                return function() {
                  try {
                    return callback.apply(oboeApi, arguments);
                  } catch (e) {
                    setTimeout(function() {
                      throw new Error(e.message);
                    });
                  }
                };
              }
              function fullyQualifiedPatternMatchEvent(type, pattern) {
                return oboeBus(type + ":" + pattern);
              }
              function wrapCallbackToSwapNodeIfSomethingReturned(callback) {
                return function() {
                  var returnValueFromCallback = callback.apply(this, arguments);
                  if (Object(__WEBPACK_IMPORTED_MODULE_2__util__[
                    "a"
                    /* defined */
                  ])(returnValueFromCallback)) {
                    if (returnValueFromCallback == __WEBPACK_IMPORTED_MODULE_3__publicApi__[
                      "a"
                      /* oboe */
                    ].drop) {
                      emitNodeDrop();
                    } else {
                      emitNodeSwap(returnValueFromCallback);
                    }
                  }
                };
              }
              function addSingleNodeOrPathListener(eventId, pattern, callback) {
                var effectiveCallback;
                if (eventId == "node") {
                  effectiveCallback = wrapCallbackToSwapNodeIfSomethingReturned(callback);
                } else {
                  effectiveCallback = callback;
                }
                addForgettableCallback(
                  fullyQualifiedPatternMatchEvent(eventId, pattern),
                  effectiveCallback,
                  callback
                );
              }
              function addMultipleNodeOrPathListeners(eventId, listenerMap) {
                for (var pattern in listenerMap) {
                  addSingleNodeOrPathListener(eventId, pattern, listenerMap[pattern]);
                }
              }
              function addNodeOrPathListenerApi(eventId, jsonPathOrListenerMap, callback) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__util__[
                  "d"
                  /* isString */
                ])(jsonPathOrListenerMap)) {
                  addSingleNodeOrPathListener(eventId, jsonPathOrListenerMap, callback);
                } else {
                  addMultipleNodeOrPathListeners(eventId, jsonPathOrListenerMap);
                }
                return oboeApi;
              }
              oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "i"
                /* ROOT_PATH_FOUND */
              ]).on(function(rootNode) {
                oboeApi.root = Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                  "f"
                  /* functor */
                ])(rootNode);
              });
              oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "c"
                /* HTTP_START */
              ]).on(function(_statusCode, headers) {
                oboeApi.header = function(name) {
                  return name ? headers[name] : headers;
                };
              });
              return oboeApi = {
                on: addListener,
                addListener,
                removeListener,
                emit: oboeBus.emit,
                node: Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                  "j"
                  /* partialComplete */
                ])(addNodeOrPathListenerApi, "node"),
                path: Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                  "j"
                  /* partialComplete */
                ])(addNodeOrPathListenerApi, "path"),
                done: Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                  "j"
                  /* partialComplete */
                ])(addForgettableCallback, rootNodeFinishedEvent),
                start: Object(__WEBPACK_IMPORTED_MODULE_1__functional__[
                  "j"
                  /* partialComplete */
                ])(addProtectedCallback, __WEBPACK_IMPORTED_MODULE_0__events__[
                  "c"
                  /* HTTP_START */
                ]),
                // fail doesn't use protectedCallback because
                // could lead to non-terminating loops
                fail: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                  "b"
                  /* FAIL_EVENT */
                ]).on,
                // public api calling abort fires the ABORTING event
                abort: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                  "a"
                  /* ABORTING */
                ]).emit,
                // initially return nothing for header and root
                header: __WEBPACK_IMPORTED_MODULE_1__functional__[
                  "i"
                  /* noop */
                ],
                root: __WEBPACK_IMPORTED_MODULE_1__functional__[
                  "i"
                  /* noop */
                ],
                source: contentSource
              };
            }
          },
          /* 17 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return clarinet;
            });
            var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
            function clarinet(eventBus) {
              "use strict";
              var emitSaxKey = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "j"
                /* SAX_KEY */
              ]).emit, emitValueOpen = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "l"
                /* SAX_VALUE_OPEN */
              ]).emit, emitValueClose = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "k"
                /* SAX_VALUE_CLOSE */
              ]).emit, emitFail = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "b"
                /* FAIL_EVENT */
              ]).emit, MAX_BUFFER_LENGTH = 64 * 1024, stringTokenPattern = /[\\"\n]/g, _n = 0, BEGIN = _n++, VALUE = _n++, OPEN_OBJECT = _n++, CLOSE_OBJECT = _n++, OPEN_ARRAY = _n++, CLOSE_ARRAY = _n++, STRING = _n++, OPEN_KEY = _n++, CLOSE_KEY = _n++, TRUE = _n++, TRUE2 = _n++, TRUE3 = _n++, FALSE = _n++, FALSE2 = _n++, FALSE3 = _n++, FALSE4 = _n++, NULL = _n++, NULL2 = _n++, NULL3 = _n++, NUMBER_DECIMAL_POINT = _n++, NUMBER_DIGIT = _n, bufferCheckPosition = MAX_BUFFER_LENGTH, latestError, c, p, textNode = void 0, numberNode = "", slashed = false, closed = false, state = BEGIN, stack = [], unicodeS = null, unicodeI = 0, depth = 0, position = 0, column = 0, line = 1;
              function checkBufferLength() {
                var maxActual = 0;
                if (textNode !== void 0 && textNode.length > MAX_BUFFER_LENGTH) {
                  emitError("Max buffer length exceeded: textNode");
                  maxActual = Math.max(maxActual, textNode.length);
                }
                if (numberNode.length > MAX_BUFFER_LENGTH) {
                  emitError("Max buffer length exceeded: numberNode");
                  maxActual = Math.max(maxActual, numberNode.length);
                }
                bufferCheckPosition = MAX_BUFFER_LENGTH - maxActual + position;
              }
              eventBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "m"
                /* STREAM_DATA */
              ]).on(handleData);
              eventBus(__WEBPACK_IMPORTED_MODULE_0__events__[
                "n"
                /* STREAM_END */
              ]).on(handleStreamEnd);
              function emitError(errorString) {
                if (textNode !== void 0) {
                  emitValueOpen(textNode);
                  emitValueClose();
                  textNode = void 0;
                }
                latestError = Error(errorString + "\nLn: " + line + "\nCol: " + column + "\nChr: " + c);
                emitFail(Object(__WEBPACK_IMPORTED_MODULE_0__events__[
                  "o"
                  /* errorReport */
                ])(void 0, void 0, latestError));
              }
              function handleStreamEnd() {
                if (state == BEGIN) {
                  emitValueOpen({});
                  emitValueClose();
                  closed = true;
                  return;
                }
                if (state !== VALUE || depth !== 0)
                  emitError("Unexpected end");
                if (textNode !== void 0) {
                  emitValueOpen(textNode);
                  emitValueClose();
                  textNode = void 0;
                }
                closed = true;
              }
              function whitespace(c2) {
                return c2 == "\r" || c2 == "\n" || c2 == " " || c2 == "	";
              }
              function handleData(chunk) {
                if (latestError)
                  return;
                if (closed) {
                  return emitError("Cannot write after close");
                }
                var i = 0;
                c = chunk[0];
                while (c) {
                  if (i > 0) {
                    p = c;
                  }
                  c = chunk[i++];
                  if (!c) break;
                  position++;
                  if (c == "\n") {
                    line++;
                    column = 0;
                  } else column++;
                  switch (state) {
                    case BEGIN:
                      if (c === "{") state = OPEN_OBJECT;
                      else if (c === "[") state = OPEN_ARRAY;
                      else if (!whitespace(c))
                        return emitError("Non-whitespace before {[.");
                      continue;
                    case OPEN_KEY:
                    case OPEN_OBJECT:
                      if (whitespace(c)) continue;
                      if (state === OPEN_KEY) stack.push(CLOSE_KEY);
                      else {
                        if (c === "}") {
                          emitValueOpen({});
                          emitValueClose();
                          state = stack.pop() || VALUE;
                          continue;
                        } else stack.push(CLOSE_OBJECT);
                      }
                      if (c === '"')
                        state = STRING;
                      else
                        return emitError('Malformed object key should start with " ');
                      continue;
                    case CLOSE_KEY:
                    case CLOSE_OBJECT:
                      if (whitespace(c)) continue;
                      if (c === ":") {
                        if (state === CLOSE_OBJECT) {
                          stack.push(CLOSE_OBJECT);
                          if (textNode !== void 0) {
                            emitValueOpen({});
                            emitSaxKey(textNode);
                            textNode = void 0;
                          }
                          depth++;
                        } else {
                          if (textNode !== void 0) {
                            emitSaxKey(textNode);
                            textNode = void 0;
                          }
                        }
                        state = VALUE;
                      } else if (c === "}") {
                        if (textNode !== void 0) {
                          emitValueOpen(textNode);
                          emitValueClose();
                          textNode = void 0;
                        }
                        emitValueClose();
                        depth--;
                        state = stack.pop() || VALUE;
                      } else if (c === ",") {
                        if (state === CLOSE_OBJECT)
                          stack.push(CLOSE_OBJECT);
                        if (textNode !== void 0) {
                          emitValueOpen(textNode);
                          emitValueClose();
                          textNode = void 0;
                        }
                        state = OPEN_KEY;
                      } else
                        return emitError("Bad object");
                      continue;
                    case OPEN_ARRAY:
                    // after an array there always a value
                    case VALUE:
                      if (whitespace(c)) continue;
                      if (state === OPEN_ARRAY) {
                        emitValueOpen([]);
                        depth++;
                        state = VALUE;
                        if (c === "]") {
                          emitValueClose();
                          depth--;
                          state = stack.pop() || VALUE;
                          continue;
                        } else {
                          stack.push(CLOSE_ARRAY);
                        }
                      }
                      if (c === '"') state = STRING;
                      else if (c === "{") state = OPEN_OBJECT;
                      else if (c === "[") state = OPEN_ARRAY;
                      else if (c === "t") state = TRUE;
                      else if (c === "f") state = FALSE;
                      else if (c === "n") state = NULL;
                      else if (c === "-") {
                        numberNode += c;
                      } else if (c === "0") {
                        numberNode += c;
                        state = NUMBER_DIGIT;
                      } else if ("123456789".indexOf(c) !== -1) {
                        numberNode += c;
                        state = NUMBER_DIGIT;
                      } else
                        return emitError("Bad value");
                      continue;
                    case CLOSE_ARRAY:
                      if (c === ",") {
                        stack.push(CLOSE_ARRAY);
                        if (textNode !== void 0) {
                          emitValueOpen(textNode);
                          emitValueClose();
                          textNode = void 0;
                        }
                        state = VALUE;
                      } else if (c === "]") {
                        if (textNode !== void 0) {
                          emitValueOpen(textNode);
                          emitValueClose();
                          textNode = void 0;
                        }
                        emitValueClose();
                        depth--;
                        state = stack.pop() || VALUE;
                      } else if (whitespace(c))
                        continue;
                      else
                        return emitError("Bad array");
                      continue;
                    case STRING:
                      if (textNode === void 0) {
                        textNode = "";
                      }
                      var starti = i - 1;
                      STRING_BIGLOOP: while (true) {
                        while (unicodeI > 0) {
                          unicodeS += c;
                          c = chunk.charAt(i++);
                          if (unicodeI === 4) {
                            textNode += String.fromCharCode(parseInt(unicodeS, 16));
                            unicodeI = 0;
                            starti = i - 1;
                          } else {
                            unicodeI++;
                          }
                          if (!c) break STRING_BIGLOOP;
                        }
                        if (c === '"' && !slashed) {
                          state = stack.pop() || VALUE;
                          textNode += (" " + chunk.substring(starti, i - 1)).substr(1);
                          break;
                        }
                        if (c === "\\" && !slashed) {
                          slashed = true;
                          textNode += (" " + chunk.substring(starti, i - 1)).substr(1);
                          c = chunk.charAt(i++);
                          if (!c) break;
                        }
                        if (slashed) {
                          slashed = false;
                          if (c === "n") {
                            textNode += "\n";
                          } else if (c === "r") {
                            textNode += "\r";
                          } else if (c === "t") {
                            textNode += "	";
                          } else if (c === "f") {
                            textNode += "\f";
                          } else if (c === "b") {
                            textNode += "\b";
                          } else if (c === "u") {
                            unicodeI = 1;
                            unicodeS = "";
                          } else {
                            textNode += c;
                          }
                          c = chunk.charAt(i++);
                          starti = i - 1;
                          if (!c) break;
                          else continue;
                        }
                        stringTokenPattern.lastIndex = i;
                        var reResult = stringTokenPattern.exec(chunk);
                        if (!reResult) {
                          i = chunk.length + 1;
                          textNode += (" " + chunk.substring(starti, i - 1)).substr(1);
                          break;
                        }
                        i = reResult.index + 1;
                        c = chunk.charAt(reResult.index);
                        if (!c) {
                          textNode += (" " + chunk.substring(starti, i - 1)).substr(1);
                          break;
                        }
                      }
                      continue;
                    case TRUE:
                      if (!c) continue;
                      if (c === "r") state = TRUE2;
                      else
                        return emitError("Invalid true started with t" + c);
                      continue;
                    case TRUE2:
                      if (!c) continue;
                      if (c === "u") state = TRUE3;
                      else
                        return emitError("Invalid true started with tr" + c);
                      continue;
                    case TRUE3:
                      if (!c) continue;
                      if (c === "e") {
                        emitValueOpen(true);
                        emitValueClose();
                        state = stack.pop() || VALUE;
                      } else
                        return emitError("Invalid true started with tru" + c);
                      continue;
                    case FALSE:
                      if (!c) continue;
                      if (c === "a") state = FALSE2;
                      else
                        return emitError("Invalid false started with f" + c);
                      continue;
                    case FALSE2:
                      if (!c) continue;
                      if (c === "l") state = FALSE3;
                      else
                        return emitError("Invalid false started with fa" + c);
                      continue;
                    case FALSE3:
                      if (!c) continue;
                      if (c === "s") state = FALSE4;
                      else
                        return emitError("Invalid false started with fal" + c);
                      continue;
                    case FALSE4:
                      if (!c) continue;
                      if (c === "e") {
                        emitValueOpen(false);
                        emitValueClose();
                        state = stack.pop() || VALUE;
                      } else
                        return emitError("Invalid false started with fals" + c);
                      continue;
                    case NULL:
                      if (!c) continue;
                      if (c === "u") state = NULL2;
                      else
                        return emitError("Invalid null started with n" + c);
                      continue;
                    case NULL2:
                      if (!c) continue;
                      if (c === "l") state = NULL3;
                      else
                        return emitError("Invalid null started with nu" + c);
                      continue;
                    case NULL3:
                      if (!c) continue;
                      if (c === "l") {
                        emitValueOpen(null);
                        emitValueClose();
                        state = stack.pop() || VALUE;
                      } else
                        return emitError("Invalid null started with nul" + c);
                      continue;
                    case NUMBER_DECIMAL_POINT:
                      if (c === ".") {
                        numberNode += c;
                        state = NUMBER_DIGIT;
                      } else
                        return emitError("Leading zero not followed by .");
                      continue;
                    case NUMBER_DIGIT:
                      if ("0123456789".indexOf(c) !== -1) numberNode += c;
                      else if (c === ".") {
                        if (numberNode.indexOf(".") !== -1)
                          return emitError("Invalid number has two dots");
                        numberNode += c;
                      } else if (c === "e" || c === "E") {
                        if (numberNode.indexOf("e") !== -1 || numberNode.indexOf("E") !== -1)
                          return emitError("Invalid number has two exponential");
                        numberNode += c;
                      } else if (c === "+" || c === "-") {
                        if (!(p === "e" || p === "E"))
                          return emitError("Invalid symbol in number");
                        numberNode += c;
                      } else {
                        if (numberNode) {
                          emitValueOpen(parseFloat(numberNode));
                          emitValueClose();
                          numberNode = "";
                        }
                        i--;
                        state = stack.pop() || VALUE;
                      }
                      continue;
                    default:
                      return emitError("Unknown state: " + state);
                  }
                }
                if (position >= bufferCheckPosition)
                  checkBufferLength();
              }
            }
          },
          /* 18 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return httpTransport;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return streamingHttp;
            });
            var __WEBPACK_IMPORTED_MODULE_0__detectCrossOrigin_browser__ = __webpack_require__(19);
            var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(3);
            var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
            var __WEBPACK_IMPORTED_MODULE_3__parseResponseHeaders_browser__ = __webpack_require__(20);
            var __WEBPACK_IMPORTED_MODULE_4__functional__ = __webpack_require__(0);
            function httpTransport() {
              return new XMLHttpRequest();
            }
            function streamingHttp(oboeBus, xhr, method, url, data, headers, withCredentials) {
              "use strict";
              var emitStreamData = oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                "m"
                /* STREAM_DATA */
              ]).emit, emitFail = oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                "b"
                /* FAIL_EVENT */
              ]).emit, numberOfCharsAlreadyGivenToCallback = 0, stillToSendStartEvent = true;
              oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                "a"
                /* ABORTING */
              ]).on(function() {
                xhr.onreadystatechange = null;
                xhr.abort();
              });
              function handleProgress() {
                var textSoFar = xhr.responseText, newText = textSoFar.substr(numberOfCharsAlreadyGivenToCallback);
                if (newText) {
                  emitStreamData(newText);
                }
                numberOfCharsAlreadyGivenToCallback = Object(__WEBPACK_IMPORTED_MODULE_2__util__[
                  "e"
                  /* len */
                ])(textSoFar);
              }
              if ("onprogress" in xhr) {
                xhr.onprogress = handleProgress;
              }
              xhr.onreadystatechange = function() {
                function sendStartIfNotAlready() {
                  try {
                    stillToSendStartEvent && oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                      "c"
                      /* HTTP_START */
                    ]).emit(
                      xhr.status,
                      Object(__WEBPACK_IMPORTED_MODULE_3__parseResponseHeaders_browser__[
                        "a"
                        /* parseResponseHeaders */
                      ])(xhr.getAllResponseHeaders())
                    );
                    stillToSendStartEvent = false;
                  } catch (e) {
                  }
                }
                switch (xhr.readyState) {
                  case 2:
                  // HEADERS_RECEIVED
                  case 3:
                    return sendStartIfNotAlready();
                  case 4:
                    sendStartIfNotAlready();
                    var successful = String(xhr.status)[0] == 2;
                    if (successful) {
                      handleProgress();
                      oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__[
                        "n"
                        /* STREAM_END */
                      ]).emit();
                    } else {
                      emitFail(Object(__WEBPACK_IMPORTED_MODULE_1__events__[
                        "o"
                        /* errorReport */
                      ])(
                        xhr.status,
                        xhr.responseText
                      ));
                    }
                }
              };
              try {
                xhr.open(method, url, true);
                for (var headerName in headers) {
                  xhr.setRequestHeader(headerName, headers[headerName]);
                }
                if (!Object(__WEBPACK_IMPORTED_MODULE_0__detectCrossOrigin_browser__[
                  "a"
                  /* isCrossOrigin */
                ])(window.location, Object(__WEBPACK_IMPORTED_MODULE_0__detectCrossOrigin_browser__[
                  "b"
                  /* parseUrlOrigin */
                ])(url))) {
                  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                }
                xhr.withCredentials = withCredentials;
                xhr.send(data);
              } catch (e) {
                window.setTimeout(
                  Object(__WEBPACK_IMPORTED_MODULE_4__functional__[
                    "j"
                    /* partialComplete */
                  ])(emitFail, Object(__WEBPACK_IMPORTED_MODULE_1__events__[
                    "o"
                    /* errorReport */
                  ])(void 0, void 0, e)),
                  0
                );
              }
            }
          },
          /* 19 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return isCrossOrigin;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return parseUrlOrigin;
            });
            function isCrossOrigin(pageLocation, ajaxHost) {
              function defaultPort(protocol) {
                return { "http:": 80, "https:": 443 }[protocol];
              }
              function portOf(location) {
                return location.port || defaultPort(location.protocol || pageLocation.protocol);
              }
              return !!(ajaxHost.protocol && ajaxHost.protocol != pageLocation.protocol || ajaxHost.host && ajaxHost.host != pageLocation.host || ajaxHost.host && portOf(ajaxHost) != portOf(pageLocation));
            }
            function parseUrlOrigin(url) {
              var URL_HOST_PATTERN = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/, urlHostMatch = URL_HOST_PATTERN.exec(url) || [];
              return {
                protocol: urlHostMatch[1] || "",
                host: urlHostMatch[2] || "",
                port: urlHostMatch[3] || ""
              };
            }
          },
          /* 20 */
          /***/
          function(module2, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return parseResponseHeaders;
            });
            function parseResponseHeaders(headerStr) {
              var headers = {};
              headerStr && headerStr.split("\r\n").forEach(function(headerPair) {
                var index = headerPair.indexOf(": ");
                headers[headerPair.substring(0, index)] = headerPair.substring(index + 2);
              });
              return headers;
            }
          }
          /******/
        ])["default"]
      );
    });
  }
});

// app/javascript/active_jobs.js
var import_oboe = __toESM(require_oboe_browser());

// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function supportPath() {
  const cfgData = configData();
  const supportPath2 = cfgData["supportPath"];
  return supportPath2;
}

// app/javascript/utils.js
function cssBadgeForState(state) {
  switch (state) {
    case "completed":
      return "bg-success";
    case "running":
      return "bg-primary";
    case "queued":
      return "bg-info";
    case "queued_held":
      return "bg-warning";
    case "suspended":
      return "bg-warning";
    default:
      return "bg-warning";
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// app/javascript/active_jobs.js
window.fetch_table_data = fetch_table_data;
window.create_datatable = create_datatable;
window.set_cluster_id = set_cluster_id;
window.set_filter_id = set_filter_id;
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
var support_path = supportPath();
function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}
function human_time(seconds_total) {
  var hours = parseInt(seconds_total / 3600), minutes = parseInt((seconds_total - hours * 3600) / 60), seconds = parseInt(seconds_total - 3600 * hours - 60 * minutes), hours_str = ("" + hours).padStart(2, "0"), minutes_str = ("" + minutes).padStart(2, "0"), seconds_str = ("" + seconds).padStart(2, "0");
  return hours_str + ":" + minutes_str + ":" + seconds_str;
}
function fetch_job_data(tr, row, options) {
  let btn = tr.find("button.details-control");
  if (row.child.isShown()) {
    row.child.hide();
    tr.removeClass("shown");
    btn.removeClass("fa-chevron-down");
    btn.addClass("fa-chevron-right");
    btn.attr("aria-expanded", false);
  } else {
    tr.addClass("shown");
    btn.removeClass("fa-chevron-right");
    btn.addClass("fa-chevron-down");
    btn.attr("aria-expanded", true);
    let data = {
      pbsid: row.data().pbsid,
      cluster: row.data().cluster
    };
    let jobDataUrl = `${options.base_uri}/activejobs/json?${new URLSearchParams(data)}`;
    $.getJSON(jobDataUrl, function(data2) {
      row.child(data2.html_ganglia_graphs_table).show();
      $(`div[data-jobid="${escapeHtml(row.data().pbsid)}"]`).hide().html(data2.html_extended_panel).fadeIn(250);
      tr.find(".status-label").html(data2.status);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      let error_panel = `
        <div class="alert alert-danger" role="alert">
          <strong>Error:</strong> The information could not be displayed.
          <em>${jqXHR.status} (${errorThrown})</em>
        </div>
      `;
      $(`div[data-jobid="${row.data().pbsid}]"`).hide().html(error_panel).fadeIn(250);
    });
  }
}
function fetch_table_data(table2, options) {
  if (!options) options = {};
  if (!options.doneCallback) options.doneCallback = null;
  if (!options.base_uri) options.base_uri = window.location.pathname;
  (0, import_oboe.default)({
    url: options.base_uri + "/activejobs.json?" + get_request_params(),
    headers: {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json"
    }
  }).start(function() {
    table2.processing(true);
  }).node("data.*", function(jobs) {
    table2.rows.add(jobs).draw();
    table2.processing(false);
  }).node("errors.*", function(error) {
    show_errors([error]);
  }).done(function() {
    table2.processing(false);
    if (options.doneCallback) {
      options.doneCallback();
    }
  }).fail(function(errorReport) {
    if (errorReport.statusCode != null) {
      show_errors(["Request for jobs failed with status code: " + errorReport.statusCode]);
    } else {
      show_errors(["Request for jobs failed due to body parsing error."]);
    }
    table2.processing(false);
  });
}
function status_label(status) {
  const labelClass = cssBadgeForState(status);
  var label = "Undetermined";
  if (status === "queued_held") {
    label = "Hold";
  } else {
    label = capitalizeFirstLetter(status);
  }
  return `<span class="badge ${labelClass}">${escapeHtml(label)}</span>`;
}
function create_datatable(options) {
  if (!options) options = {};
  if (!options.drawCallback) options.drawCallback = null;
  if (!options.base_uri) options.base_uri = window.location.pathname;
  $("#selected-filter-label").text($("#filter-id-" + filter_id).text());
  $("#selected-cluster-label").text($("#cluster-id-" + cluster_id).text());
  $("#" + filter_id).addClass("active");
  var table2 = $("#job_status_table").DataTable({
    autoWidth: true,
    // Automatically calculate column width
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    // Manually set size of particular columns
    "bStateSave": true,
    // Save user selected table state
    "aaSorting": [],
    // Turn off auto sort.
    "pageLength": 50,
    // Set the number of rows
    "oLanguage": {
      "sSearch": "Filter: "
    },
    "fnInitComplete": function(oSettings) {
      for (var i = 0, iLen = oSettings.aoData.length; i < iLen; i++) {
        if (oSettings.aoData[i]._aData.username == JobStatusapp.username) {
          oSettings.aoData[i].nTr.className += " bg-info";
        }
      }
    },
    processing: true,
    // Add the "processing" while json is being downloaded.
    drawCallback: function(settings) {
      if (options.drawCallback) {
        options.drawCallback(settings);
      }
    },
    columns: [
      {
        "orderable": false,
        "data": "extended_available",
        "defaultContent": "",
        "width": "20px",
        "searchable": false,
        render: function(data, type, row, meta) {
          let { cluster_title, jobname } = row;
          return `<button class="details-control fa fa-chevron-right btn btn-default" aria-expanded="false" aria-label="Toggle visibility of job details for job ${escapeHtml(jobname)} on ${cluster_title}"></button>`;
        }
      },
      {
        data: "pbsid",
        "autoWidth": true,
        render: function(data) {
          var data = escapeHtml(data);
          return `<span title="${data}">${data}</span>`;
        }
      },
      {
        data: "jobname",
        width: "25%",
        render: function(data) {
          var data = escapeHtml(data);
          return `<span title="${data}" class="text-break">${data}</span>`;
        }
      },
      {
        data: "username",
        "autoWidth": true,
        render: function(data) {
          var data = escapeHtml(data);
          return `<span title="${data}">${data}</span>`;
        }
      },
      {
        data: "account",
        "autoWidth": true,
        render: function(data) {
          var data = escapeHtml(data);
          return `<span title="${data}">${data}</span>`;
        }
      },
      {
        data: "walltime_used",
        className: "text-end",
        "autoWidth": true,
        render: function(data, type, _row, _meta) {
          if (type === "display" || type === "filter") {
            const time = human_time(data);
            return `<span title="${time}">${time}</span>`;
          } else {
            return data;
          }
        }
      },
      {
        data: "queue",
        "autoWidth": true,
        "render": function(data) {
          var data = escapeHtml(data);
          return `<span title="${data}">${data}</span>`;
        }
      },
      {
        data: "status",
        className: "status-label",
        "autoWidth": true,
        "render": function(data) {
          return status_label(data);
        }
      },
      {
        data: "cluster_title",
        "autoWidth": true
      },
      {
        data: null,
        "autoWidth": true,
        render: function(data, type, row, meta) {
          let { jobname, pbsid, cluster, delete_path } = data;
          let support_ticket = "";
          if (support_path != "") {
            const support_url = new URL(support_path, document.location);
            support_url.searchParams.set("job_id", pbsid);
            support_url.searchParams.set("cluster", cluster);
            support_ticket = `
                        <a
                          class="btn btn-primary btn-xs"
                          href="${escapeHtml(support_url.toString())}"
                          aria-labeled-by"title"
                          aria-label="Submit support ticket for job with ID ${pbsid}"
                          data-toggle="tooltip"
                          title="Submit Support Ticket"
                        >
                          <i class='fas fa-medkit fa-fw' aria-hidden='true'></i>
                        </a>
                    `;
          }
          if (delete_path == "") {
            return "";
          } else if (data.status == "completed") {
            return `<div>${support_ticket}</div>`;
          } else {
            return `
                      <div>
                        <a
                          class="btn btn-danger btn-xs"
                          data-method="delete"
                          data-confirm="Are you sure you want to delete ${escapeHtml(jobname)} - ${pbsid}"
                          href="${escapeHtml(delete_path)}"
                          aria-labeled-by"title"
                          aria-label="Delete job ${escapeHtml(jobname)} with ID ${pbsid}"
                          data-toggle="tooltip"
                          title="Delete Job"
                        >
                          <i class='fas fa-trash-alt fa-fw' aria-hidden='true'></i>
                        </a>
                        ${support_ticket}
                      </div>
                    `;
          }
        }
      }
    ]
  }).on("error.dt", function(e, settings, techNote, message) {
    show_errors(["There was an error getting data from the remote server."]);
  });
  $.fn.dataTable.ext.errMode = "none";
  $("#job_status_table tbody").on("click", ".details-control", function() {
    var tr = $(this).closest("tr");
    var row = table2.row(tr);
    fetch_job_data(tr, row, options);
  });
  table2.columns.adjust().draw();
  return table2;
}
function show_errors(errors) {
  for (var i = 0; i < errors.length; i++) {
    $("#ajax-error-message-text").append(`<div>${errors[i]}</div>`);
  }
  $("#ajax-error-message").removeAttr("hidden");
}
function get_request_params() {
  return jQuery.param({
    jobcluster: cluster_id,
    jobfilter: filter_id
  });
}
function set_filter_id(id) {
  localStorage.setItem("jobfilter", id);
  filter_id = id;
  reload_page();
}
function set_cluster_id(id) {
  localStorage.setItem("jobcluster", id);
  cluster_id = id;
  reload_page();
}
function reload_page() {
  window.location = "?" + get_request_params();
}
var activeJobsConfig = $("#active_jobs_config")[0].dataset;
var filter_id = activeJobsConfig.filterId;
var cluster_id = activeJobsConfig.clusterId;
if (filter_id == "null") {
  filter_id = localStorage.getItem("jobfilter") || activeJobsConfig.defaultFilterId;
}
if (cluster_id == "null") {
  cluster_id = localStorage.getItem("jobcluster") || "all";
}
var performance_tracking_enabled = false;
function report_performance() {
  var marks = performance.getEntriesByType("mark");
  marks.forEach(function(entry) {
    console.log(entry.startTime + "," + entry.name);
  });
  if (marks.length > 1) {
    console.log("version,documentReady,firstDraw,lastDraw");
    console.log(`${activeJobsConfig.oodVersion},${marks[0].startTime},${marks[1].startTime},${marks.slice(-1)[0].startTime}`);
  }
}
if (activeJobsConfig.consoleLogPerformanceReport) {
  performance_tracking_enabled = true;
  performance.mark("document ready - build table and make ajax request for jobs");
}
var table = create_datatable({
  drawCallback: function(settings) {
    if (performance_tracking_enabled && settings.aoData.length > 0) {
      performance.mark("draw records - " + settings.aoData.length);
    }
  },
  base_uri: activeJobsConfig.baseUri
});
fetch_table_data(table, {
  doneCallback: function() {
    if (performance_tracking_enabled) {
      setTimeout(report_performance, 2e3);
    }
  },
  base_uri: activeJobsConfig.baseUri
});
/*! Bundled license information:

oboe/dist/oboe-browser.js:
  (*!
   * v2.1.4-40-g295d630
   * 
   *)
*/
//# sourceMappingURL=active_jobs.js.map
