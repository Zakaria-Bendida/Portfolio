(function () {
  const W = document.createElement("link").relList;
  if (W && W.supports && W.supports("modulepreload")) return;
  for (const B of document.querySelectorAll('link[rel="modulepreload"]')) v(B);
  new MutationObserver((B) => {
    for (const E of B)
      if (E.type === "childList")
        for (const dl of E.addedNodes)
          dl.tagName === "LINK" && dl.rel === "modulepreload" && v(dl);
  }).observe(document, { childList: !0, subtree: !0 });
  function X(B) {
    const E = {};
    return (
      B.integrity && (E.integrity = B.integrity),
      B.referrerPolicy && (E.referrerPolicy = B.referrerPolicy),
      B.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : B.crossOrigin === "anonymous"
          ? (E.credentials = "omit")
          : (E.credentials = "same-origin"),
      E
    );
  }
  function v(B) {
    if (B.ep) return;
    B.ep = !0;
    const E = X(B);
    fetch(B.href, E);
  }
})();
var ff = { exports: {} },
  pu = {};
var go;
function I1() {
  if (go) return pu;
  go = 1;
  var O = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.fragment");
  function X(v, B, E) {
    var dl = null;
    if (
      (E !== void 0 && (dl = "" + E),
      B.key !== void 0 && (dl = "" + B.key),
      "key" in B)
    ) {
      E = {};
      for (var vl in B) vl !== "key" && (E[vl] = B[vl]);
    } else E = B;
    return (
      (B = E.ref),
      { $$typeof: O, type: v, key: dl, ref: B !== void 0 ? B : null, props: E }
    );
  }
  return ((pu.Fragment = W), (pu.jsx = X), (pu.jsxs = X), pu);
}
var So;
function P1() {
  return (So || ((So = 1), (ff.exports = I1())), ff.exports);
}
var S = P1(),
  sf = { exports: {} },
  q = {};
var bo;
function ly() {
  if (bo) return q;
  bo = 1;
  var O = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    dl = Symbol.for("react.context"),
    vl = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    yl = Symbol.iterator;
  function $l(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (yl && d[yl]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Gl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Cl = Object.assign,
    Ut = {};
  function Fl(d, A, M) {
    ((this.props = d),
      (this.context = A),
      (this.refs = Ut),
      (this.updater = M || Gl));
  }
  ((Fl.prototype.isReactComponent = {}),
    (Fl.prototype.setState = function (d, A) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, A, "setState");
    }),
    (Fl.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function Ft() {}
  Ft.prototype = Fl.prototype;
  function Hl(d, A, M) {
    ((this.props = d),
      (this.context = A),
      (this.refs = Ut),
      (this.updater = M || Gl));
  }
  var ft = (Hl.prototype = new Ft());
  ((ft.constructor = Hl), Cl(ft, Fl.prototype), (ft.isPureReactComponent = !0));
  var Tt = Array.isArray;
  function Xl() {}
  var w = { H: null, A: null, T: null, S: null },
    Ql = Object.prototype.hasOwnProperty;
  function Et(d, A, M) {
    var N = M.ref;
    return {
      $$typeof: O,
      type: d,
      key: A,
      ref: N !== void 0 ? N : null,
      props: M,
    };
  }
  function La(d, A) {
    return Et(d.type, A, d.props);
  }
  function _t(d) {
    return typeof d == "object" && d !== null && d.$$typeof === O;
  }
  function Zl(d) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (M) {
        return A[M];
      })
    );
  }
  var Ta = /\/+/g;
  function jt(d, A) {
    return typeof d == "object" && d !== null && d.key != null
      ? Zl("" + d.key)
      : A.toString(36);
  }
  function bt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Xl, Xl)
            : ((d.status = "pending"),
              d.then(
                function (A) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = A));
                },
                function (A) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = A));
                },
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function b(d, A, M, N, Y) {
    var Z = typeof d;
    (Z === "undefined" || Z === "boolean") && (d = null);
    var ll = !1;
    if (d === null) ll = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          ll = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case O:
            case W:
              ll = !0;
              break;
            case $:
              return ((ll = d._init), b(ll(d._payload), A, M, N, Y));
          }
      }
    if (ll)
      return (
        (Y = Y(d)),
        (ll = N === "" ? "." + jt(d, 0) : N),
        Tt(Y)
          ? ((M = ""),
            ll != null && (M = ll.replace(Ta, "$&/") + "/"),
            b(Y, A, M, "", function (De) {
              return De;
            }))
          : Y != null &&
            (_t(Y) &&
              (Y = La(
                Y,
                M +
                  (Y.key == null || (d && d.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(Ta, "$&/") + "/") +
                  ll,
              )),
            A.push(Y)),
        1
      );
    ll = 0;
    var ql = N === "" ? "." : N + ":";
    if (Tt(d))
      for (var Sl = 0; Sl < d.length; Sl++)
        ((N = d[Sl]), (Z = ql + jt(N, Sl)), (ll += b(N, A, M, Z, Y)));
    else if (((Sl = $l(d)), typeof Sl == "function"))
      for (d = Sl.call(d), Sl = 0; !(N = d.next()).done; )
        ((N = N.value), (Z = ql + jt(N, Sl++)), (ll += b(N, A, M, Z, Y)));
    else if (Z === "object") {
      if (typeof d.then == "function") return b(bt(d), A, M, N, Y);
      throw (
        (A = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ll;
  }
  function _(d, A, M) {
    if (d == null) return d;
    var N = [],
      Y = 0;
    return (
      b(d, N, "", "", function (Z) {
        return A.call(M, Z, Y++);
      }),
      N
    );
  }
  function C(d) {
    if (d._status === -1) {
      var A = d._result;
      ((A = A()),
        A.then(
          function (M) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = M));
          },
          function (M) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = M));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = A)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ul =
      typeof reportError == "function"
        ? reportError
        : function (d) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof d == "object" &&
                  d !== null &&
                  typeof d.message == "string"
                    ? String(d.message)
                    : String(d),
                error: d,
              });
              if (!window.dispatchEvent(A)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", d);
              return;
            }
            console.error(d);
          },
    fl = {
      map: _,
      forEach: function (d, A, M) {
        _(
          d,
          function () {
            A.apply(this, arguments);
          },
          M,
        );
      },
      count: function (d) {
        var A = 0;
        return (
          _(d, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (d) {
        return (
          _(d, function (A) {
            return A;
          }) || []
        );
      },
      only: function (d) {
        if (!_t(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    };
  return (
    (q.Activity = R),
    (q.Children = fl),
    (q.Component = Fl),
    (q.Fragment = X),
    (q.Profiler = B),
    (q.PureComponent = Hl),
    (q.StrictMode = v),
    (q.Suspense = j),
    (q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (q.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return w.H.useMemoCache(d);
      },
    }),
    (q.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (q.cacheSignal = function () {
      return null;
    }),
    (q.cloneElement = function (d, A, M) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + ".",
        );
      var N = Cl({}, d.props),
        Y = d.key;
      if (A != null)
        for (Z in (A.key !== void 0 && (Y = "" + A.key), A))
          !Ql.call(A, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && A.ref === void 0) ||
            (N[Z] = A[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) N.children = M;
      else if (1 < Z) {
        for (var ll = Array(Z), ql = 0; ql < Z; ql++)
          ll[ql] = arguments[ql + 2];
        N.children = ll;
      }
      return Et(d.type, Y, N);
    }),
    (q.createContext = function (d) {
      return (
        (d = {
          $$typeof: dl,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: E, _context: d }),
        d
      );
    }),
    (q.createElement = function (d, A, M) {
      var N,
        Y = {},
        Z = null;
      if (A != null)
        for (N in (A.key !== void 0 && (Z = "" + A.key), A))
          Ql.call(A, N) &&
            N !== "key" &&
            N !== "__self" &&
            N !== "__source" &&
            (Y[N] = A[N]);
      var ll = arguments.length - 2;
      if (ll === 1) Y.children = M;
      else if (1 < ll) {
        for (var ql = Array(ll), Sl = 0; Sl < ll; Sl++)
          ql[Sl] = arguments[Sl + 2];
        Y.children = ql;
      }
      if (d && d.defaultProps)
        for (N in ((ll = d.defaultProps), ll))
          Y[N] === void 0 && (Y[N] = ll[N]);
      return Et(d, Z, Y);
    }),
    (q.createRef = function () {
      return { current: null };
    }),
    (q.forwardRef = function (d) {
      return { $$typeof: vl, render: d };
    }),
    (q.isValidElement = _t),
    (q.lazy = function (d) {
      return { $$typeof: $, _payload: { _status: -1, _result: d }, _init: C };
    }),
    (q.memo = function (d, A) {
      return { $$typeof: T, type: d, compare: A === void 0 ? null : A };
    }),
    (q.startTransition = function (d) {
      var A = w.T,
        M = {};
      w.T = M;
      try {
        var N = d(),
          Y = w.S;
        (Y !== null && Y(M, N),
          typeof N == "object" &&
            N !== null &&
            typeof N.then == "function" &&
            N.then(Xl, ul));
      } catch (Z) {
        ul(Z);
      } finally {
        (A !== null && M.types !== null && (A.types = M.types), (w.T = A));
      }
    }),
    (q.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (q.use = function (d) {
      return w.H.use(d);
    }),
    (q.useActionState = function (d, A, M) {
      return w.H.useActionState(d, A, M);
    }),
    (q.useCallback = function (d, A) {
      return w.H.useCallback(d, A);
    }),
    (q.useContext = function (d) {
      return w.H.useContext(d);
    }),
    (q.useDebugValue = function () {}),
    (q.useDeferredValue = function (d, A) {
      return w.H.useDeferredValue(d, A);
    }),
    (q.useEffect = function (d, A) {
      return w.H.useEffect(d, A);
    }),
    (q.useEffectEvent = function (d) {
      return w.H.useEffectEvent(d);
    }),
    (q.useId = function () {
      return w.H.useId();
    }),
    (q.useImperativeHandle = function (d, A, M) {
      return w.H.useImperativeHandle(d, A, M);
    }),
    (q.useInsertionEffect = function (d, A) {
      return w.H.useInsertionEffect(d, A);
    }),
    (q.useLayoutEffect = function (d, A) {
      return w.H.useLayoutEffect(d, A);
    }),
    (q.useMemo = function (d, A) {
      return w.H.useMemo(d, A);
    }),
    (q.useOptimistic = function (d, A) {
      return w.H.useOptimistic(d, A);
    }),
    (q.useReducer = function (d, A, M) {
      return w.H.useReducer(d, A, M);
    }),
    (q.useRef = function (d) {
      return w.H.useRef(d);
    }),
    (q.useState = function (d) {
      return w.H.useState(d);
    }),
    (q.useSyncExternalStore = function (d, A, M) {
      return w.H.useSyncExternalStore(d, A, M);
    }),
    (q.useTransition = function () {
      return w.H.useTransition();
    }),
    (q.version = "19.2.7"),
    q
  );
}
var zo;
function hf() {
  return (zo || ((zo = 1), (sf.exports = ly())), sf.exports);
}
var $t = hf(),
  df = { exports: {} },
  Au = {},
  of = { exports: {} },
  mf = {};
var po;
function ty() {
  return (
    po ||
      ((po = 1),
      (function (O) {
        function W(b, _) {
          var C = b.length;
          b.push(_);
          l: for (; 0 < C; ) {
            var ul = (C - 1) >>> 1,
              fl = b[ul];
            if (0 < B(fl, _)) ((b[ul] = _), (b[C] = fl), (C = ul));
            else break l;
          }
        }
        function X(b) {
          return b.length === 0 ? null : b[0];
        }
        function v(b) {
          if (b.length === 0) return null;
          var _ = b[0],
            C = b.pop();
          if (C !== _) {
            b[0] = C;
            l: for (var ul = 0, fl = b.length, d = fl >>> 1; ul < d; ) {
              var A = 2 * (ul + 1) - 1,
                M = b[A],
                N = A + 1,
                Y = b[N];
              if (0 > B(M, C))
                N < fl && 0 > B(Y, M)
                  ? ((b[ul] = Y), (b[N] = C), (ul = N))
                  : ((b[ul] = M), (b[A] = C), (ul = A));
              else if (N < fl && 0 > B(Y, C))
                ((b[ul] = Y), (b[N] = C), (ul = N));
              else break l;
            }
          }
          return _;
        }
        function B(b, _) {
          var C = b.sortIndex - _.sortIndex;
          return C !== 0 ? C : b.id - _.id;
        }
        if (
          ((O.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var E = performance;
          O.unstable_now = function () {
            return E.now();
          };
        } else {
          var dl = Date,
            vl = dl.now();
          O.unstable_now = function () {
            return dl.now() - vl;
          };
        }
        var j = [],
          T = [],
          $ = 1,
          R = null,
          yl = 3,
          $l = !1,
          Gl = !1,
          Cl = !1,
          Ut = !1,
          Fl = typeof setTimeout == "function" ? setTimeout : null,
          Ft = typeof clearTimeout == "function" ? clearTimeout : null,
          Hl = typeof setImmediate < "u" ? setImmediate : null;
        function ft(b) {
          for (var _ = X(T); _ !== null; ) {
            if (_.callback === null) v(T);
            else if (_.startTime <= b)
              (v(T), (_.sortIndex = _.expirationTime), W(j, _));
            else break;
            _ = X(T);
          }
        }
        function Tt(b) {
          if (((Cl = !1), ft(b), !Gl))
            if (X(j) !== null) ((Gl = !0), Xl || ((Xl = !0), Zl()));
            else {
              var _ = X(T);
              _ !== null && bt(Tt, _.startTime - b);
            }
        }
        var Xl = !1,
          w = -1,
          Ql = 5,
          Et = -1;
        function La() {
          return Ut ? !0 : !(O.unstable_now() - Et < Ql);
        }
        function _t() {
          if (((Ut = !1), Xl)) {
            var b = O.unstable_now();
            Et = b;
            var _ = !0;
            try {
              l: {
                ((Gl = !1), Cl && ((Cl = !1), Ft(w), (w = -1)), ($l = !0));
                var C = yl;
                try {
                  t: {
                    for (
                      ft(b), R = X(j);
                      R !== null && !(R.expirationTime > b && La());
                    ) {
                      var ul = R.callback;
                      if (typeof ul == "function") {
                        ((R.callback = null), (yl = R.priorityLevel));
                        var fl = ul(R.expirationTime <= b);
                        if (((b = O.unstable_now()), typeof fl == "function")) {
                          ((R.callback = fl), ft(b), (_ = !0));
                          break t;
                        }
                        (R === X(j) && v(j), ft(b));
                      } else v(j);
                      R = X(j);
                    }
                    if (R !== null) _ = !0;
                    else {
                      var d = X(T);
                      (d !== null && bt(Tt, d.startTime - b), (_ = !1));
                    }
                  }
                  break l;
                } finally {
                  ((R = null), (yl = C), ($l = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? Zl() : (Xl = !1);
            }
          }
        }
        var Zl;
        if (typeof Hl == "function")
          Zl = function () {
            Hl(_t);
          };
        else if (typeof MessageChannel < "u") {
          var Ta = new MessageChannel(),
            jt = Ta.port2;
          ((Ta.port1.onmessage = _t),
            (Zl = function () {
              jt.postMessage(null);
            }));
        } else
          Zl = function () {
            Fl(_t, 0);
          };
        function bt(b, _) {
          w = Fl(function () {
            b(O.unstable_now());
          }, _);
        }
        ((O.unstable_IdlePriority = 5),
          (O.unstable_ImmediatePriority = 1),
          (O.unstable_LowPriority = 4),
          (O.unstable_NormalPriority = 3),
          (O.unstable_Profiling = null),
          (O.unstable_UserBlockingPriority = 2),
          (O.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (O.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ql = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (O.unstable_getCurrentPriorityLevel = function () {
            return yl;
          }),
          (O.unstable_next = function (b) {
            switch (yl) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = yl;
            }
            var C = yl;
            yl = _;
            try {
              return b();
            } finally {
              yl = C;
            }
          }),
          (O.unstable_requestPaint = function () {
            Ut = !0;
          }),
          (O.unstable_runWithPriority = function (b, _) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var C = yl;
            yl = b;
            try {
              return _();
            } finally {
              yl = C;
            }
          }),
          (O.unstable_scheduleCallback = function (b, _, C) {
            var ul = O.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? ul + C : ul))
                : (C = ul),
              b)
            ) {
              case 1:
                var fl = -1;
                break;
              case 2:
                fl = 250;
                break;
              case 5:
                fl = 1073741823;
                break;
              case 4:
                fl = 1e4;
                break;
              default:
                fl = 5e3;
            }
            return (
              (fl = C + fl),
              (b = {
                id: $++,
                callback: _,
                priorityLevel: b,
                startTime: C,
                expirationTime: fl,
                sortIndex: -1,
              }),
              C > ul
                ? ((b.sortIndex = C),
                  W(T, b),
                  X(j) === null &&
                    b === X(T) &&
                    (Cl ? (Ft(w), (w = -1)) : (Cl = !0), bt(Tt, C - ul)))
                : ((b.sortIndex = fl),
                  W(j, b),
                  Gl || $l || ((Gl = !0), Xl || ((Xl = !0), Zl()))),
              b
            );
          }),
          (O.unstable_shouldYield = La),
          (O.unstable_wrapCallback = function (b) {
            var _ = yl;
            return function () {
              var C = yl;
              yl = _;
              try {
                return b.apply(this, arguments);
              } finally {
                yl = C;
              }
            };
          }));
      })(mf)),
    mf
  );
}
var Ao;
function ay() {
  return (Ao || ((Ao = 1), (of.exports = ty())), of.exports);
}
var yf = { exports: {} },
  Rl = {};
var To;
function ey() {
  if (To) return Rl;
  To = 1;
  var O = hf();
  function W(j) {
    var T = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        T += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return (
      "Minified React error #" +
      j +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function X() {}
  var v = {
      d: {
        f: X,
        r: function () {
          throw Error(W(522));
        },
        D: X,
        C: X,
        L: X,
        m: X,
        X,
        S: X,
        M: X,
      },
      p: 0,
      findDOMNode: null,
    },
    B = Symbol.for("react.portal");
  function E(j, T, $) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: R == null ? null : "" + R,
      children: j,
      containerInfo: T,
      implementation: $,
    };
  }
  var dl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(j, T) {
    if (j === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (Rl.createPortal = function (j, T) {
      var $ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(W(299));
      return E(j, T, null, $);
    }),
    (Rl.flushSync = function (j) {
      var T = dl.T,
        $ = v.p;
      try {
        if (((dl.T = null), (v.p = 2), j)) return j();
      } finally {
        ((dl.T = T), (v.p = $), v.d.f());
      }
    }),
    (Rl.preconnect = function (j, T) {
      typeof j == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        v.d.C(j, T));
    }),
    (Rl.prefetchDNS = function (j) {
      typeof j == "string" && v.d.D(j);
    }),
    (Rl.preinit = function (j, T) {
      if (typeof j == "string" && T && typeof T.as == "string") {
        var $ = T.as,
          R = vl($, T.crossOrigin),
          yl = typeof T.integrity == "string" ? T.integrity : void 0,
          $l = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        $ === "style"
          ? v.d.S(j, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: R,
              integrity: yl,
              fetchPriority: $l,
            })
          : $ === "script" &&
            v.d.X(j, {
              crossOrigin: R,
              integrity: yl,
              fetchPriority: $l,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Rl.preinitModule = function (j, T) {
      if (typeof j == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var $ = vl(T.as, T.crossOrigin);
            v.d.M(j, {
              crossOrigin: $,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && v.d.M(j);
    }),
    (Rl.preload = function (j, T) {
      if (
        typeof j == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var $ = T.as,
          R = vl($, T.crossOrigin);
        v.d.L(j, $, {
          crossOrigin: R,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Rl.preloadModule = function (j, T) {
      if (typeof j == "string")
        if (T) {
          var $ = vl(T.as, T.crossOrigin);
          v.d.m(j, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: $,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else v.d.m(j);
    }),
    (Rl.requestFormReset = function (j) {
      v.d.r(j);
    }),
    (Rl.unstable_batchedUpdates = function (j, T) {
      return j(T);
    }),
    (Rl.useFormState = function (j, T, $) {
      return dl.H.useFormState(j, T, $);
    }),
    (Rl.useFormStatus = function () {
      return dl.H.useHostTransitionStatus();
    }),
    (Rl.version = "19.2.7"),
    Rl
  );
}
var Eo;
function uy() {
  if (Eo) return yf.exports;
  Eo = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (W) {
        console.error(W);
      }
  }
  return (O(), (yf.exports = ey()), yf.exports);
}
var _o;
function ny() {
  if (_o) return Au;
  _o = 1;
  var O = ay(),
    W = hf(),
    X = uy();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function E(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function vl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function j(l) {
    if (E(l) !== l) throw Error(v(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = E(l)), t === null)) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (j(u), l);
          if (n === e) return (j(u), t);
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(v(189));
        }
      }
      if (a.alternate !== e) throw Error(v(190));
    }
    if (a.tag !== 3) throw Error(v(188));
    return a.stateNode.current === a ? l : t;
  }
  function $(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = $(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    yl = Symbol.for("react.element"),
    $l = Symbol.for("react.transitional.element"),
    Gl = Symbol.for("react.portal"),
    Cl = Symbol.for("react.fragment"),
    Ut = Symbol.for("react.strict_mode"),
    Fl = Symbol.for("react.profiler"),
    Ft = Symbol.for("react.consumer"),
    Hl = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    w = Symbol.for("react.memo"),
    Ql = Symbol.for("react.lazy"),
    Et = Symbol.for("react.activity"),
    La = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function Zl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (_t && l[_t]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ta = Symbol.for("react.client.reference");
  function jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ta ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case Fl:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Gl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Ft:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case w:
          return (
            (t = l.displayName || null),
            t !== null ? t : jt(l.type) || "Memo"
          );
        case Ql:
          ((t = l._payload), (l = l._init));
          try {
            return jt(l(t));
          } catch {}
      }
    return null;
  }
  var bt = Array.isArray,
    b = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = { pending: !1, data: null, method: null, action: null },
    ul = [],
    fl = -1;
  function d(l) {
    return { current: l };
  }
  function A(l) {
    0 > fl || ((l.current = ul[fl]), (ul[fl] = null), fl--);
  }
  function M(l, t) {
    (fl++, (ul[fl] = l.current), (l.current = t));
  }
  var N = d(null),
    Y = d(null),
    Z = d(null),
    ll = d(null);
  function ql(l, t) {
    switch ((M(Z, t), M(Y, l), M(N, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Gd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Gd(t)), (l = Xd(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (A(N), M(N, l));
  }
  function Sl() {
    (A(N), A(Y), A(Z));
  }
  function De(l) {
    l.memoizedState !== null && M(ll, l);
    var t = N.current,
      a = Xd(t, l.type);
    t !== a && (M(Y, l), M(N, a));
  }
  function Eu(l) {
    (Y.current === l && (A(N), A(Y)),
      ll.current === l && (A(ll), (gu._currentValue = C)));
  }
  var Ln, vf;
  function Ea(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Ln = (t && t[1]) || ""),
          (vf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ln +
      l +
      vf
    );
  }
  var Vn = !1;
  function Kn(l, t) {
    if (!l || Vn) return "";
    Vn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var p = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(p.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(p, []);
                } catch (r) {
                  var h = r;
                }
                Reflect.construct(l, [], p);
              } else {
                try {
                  p.call();
                } catch (r) {
                  h = r;
                }
                l.call(p.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                h = r;
              }
              (p = l()) &&
                typeof p.catch == "function" &&
                p.catch(function () {});
            }
          } catch (r) {
            if (r && h && typeof r.stack == "string") return [r.stack, h.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          y = c.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === y.length)
          for (
            e = f.length - 1, u = y.length - 1;
            1 <= e && 0 <= u && f[e] !== y[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== y[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== y[u])) {
                  var g =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Vn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Ea(a) : "";
  }
  function No(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ea(l.type);
      case 16:
        return Ea("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ea("Suspense Fallback")
          : Ea("Suspense");
      case 19:
        return Ea("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Ea("Activity");
      default:
        return "";
    }
  }
  function rf(l) {
    try {
      var t = "",
        a = null;
      do ((t += No(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Jn = Object.prototype.hasOwnProperty,
    wn = O.unstable_scheduleCallback,
    kn = O.unstable_cancelCallback,
    Uo = O.unstable_shouldYield,
    jo = O.unstable_requestPaint,
    Il = O.unstable_now,
    xo = O.unstable_getCurrentPriorityLevel,
    gf = O.unstable_ImmediatePriority,
    Sf = O.unstable_UserBlockingPriority,
    _u = O.unstable_NormalPriority,
    Ho = O.unstable_LowPriority,
    bf = O.unstable_IdlePriority,
    Ro = O.log,
    Co = O.unstable_setDisableYieldValue,
    Ne = null,
    Pl = null;
  function It(l) {
    if (
      (typeof Ro == "function" && Co(l),
      Pl && typeof Pl.setStrictMode == "function")
    )
      try {
        Pl.setStrictMode(Ne, l);
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : Yo,
    qo = Math.log,
    Bo = Math.LN2;
  function Yo(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((qo(l) / Bo) | 0)) | 0);
  }
  var Mu = 256,
    Ou = 262144,
    Du = 4194304;
  function _a(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Nu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = _a(e))
            : ((i &= c),
              i !== 0
                ? (u = _a(i))
                : a || ((a = c & ~l), a !== 0 && (u = _a(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = _a(c))
            : i !== 0
              ? (u = _a(i))
              : a || ((a = e & ~l), a !== 0 && (u = _a(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Ue(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Go(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zf() {
    var l = Du;
    return ((Du <<= 1), (Du & 62914560) === 0 && (Du = 4194304), l);
  }
  function Wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function je(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Xo(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      f = l.expirationTimes,
      y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var g = 31 - lt(a),
        p = 1 << g;
      ((c[g] = 0), (f[g] = -1));
      var h = y[g];
      if (h !== null)
        for (y[g] = null, g = 0; g < h.length; g++) {
          var r = h[g];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~p;
    }
    (e !== 0 && pf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function pf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - lt(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function Af(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - lt(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function Tf(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : $n(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function $n(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Fn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ef() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : so(l.type));
  }
  function _f(l, t) {
    var a = _.p;
    try {
      return ((_.p = l), t());
    } finally {
      _.p = a;
    }
  }
  var Pt = Math.random().toString(36).slice(2),
    Dl = "__reactFiber$" + Pt,
    Ll = "__reactProps$" + Pt,
    Va = "__reactContainer$" + Pt,
    In = "__reactEvents$" + Pt,
    Qo = "__reactListeners$" + Pt,
    Zo = "__reactHandles$" + Pt,
    Mf = "__reactResources$" + Pt,
    xe = "__reactMarker$" + Pt;
  function Pn(l) {
    (delete l[Dl], delete l[Ll], delete l[In], delete l[Qo], delete l[Zo]);
  }
  function Ka(l) {
    var t = l[Dl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Va] || a[Dl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = wd(l); l !== null; ) {
            if ((a = l[Dl])) return a;
            l = wd(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Ja(l) {
    if ((l = l[Dl] || l[Va])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function He(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function wa(l) {
    var t = l[Mf];
    return (
      t ||
        (t = l[Mf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ml(l) {
    l[xe] = !0;
  }
  var Of = new Set(),
    Df = {};
  function Ma(l, t) {
    (ka(l, t), ka(l + "Capture", t));
  }
  function ka(l, t) {
    for (Df[l] = t, l = 0; l < t.length; l++) Of.add(t[l]);
  }
  var Lo = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Nf = {},
    Uf = {};
  function Vo(l) {
    return Jn.call(Uf, l)
      ? !0
      : Jn.call(Nf, l)
        ? !1
        : Lo.test(l)
          ? (Uf[l] = !0)
          : ((Nf[l] = !0), !1);
  }
  function Uu(l, t, a) {
    if (Vo(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function ju(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function xt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function st(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function jf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ko(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function li(l) {
    if (!l._valueTracker) {
      var t = jf(l) ? "checked" : "value";
      l._valueTracker = Ko(l, t, "" + l[t]);
    }
  }
  function xf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = jf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function xu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Jo = /[\n"\\]/g;
  function dt(l) {
    return l.replace(Jo, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ti(l, t, a, e, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + st(t))
          : l.value !== "" + st(t) && (l.value = "" + st(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ai(l, i, st(t))
        : a != null
          ? ai(l, i, st(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + st(c))
        : l.removeAttribute("name"));
  }
  function Hf(l, t, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        li(l);
        return;
      }
      ((a = a != null ? "" + st(a) : ""),
        (t = t != null ? "" + st(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      li(l));
  }
  function ai(l, t, a) {
    (t === "number" && xu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Wa(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + st(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rf(l, t, a) {
    if (
      t != null &&
      ((t = "" + st(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + st(a) : "";
  }
  function Cf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(v(92));
        if (bt(e)) {
          if (1 < e.length) throw Error(v(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = st(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      li(l));
  }
  function $a(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var wo = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function qf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || wo.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Bf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && qf(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && qf(l, n, t[n]);
  }
  function ei(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ko = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Wo =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hu(l) {
    return Wo.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ht() {}
  var ui = null;
  function ni(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Fa = null,
    Ia = null;
  function Yf(l) {
    var t = Ja(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ll] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ti(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + dt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Ll] || null;
                if (!u) throw Error(v(90));
                ti(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && xf(e));
          }
          break l;
        case "textarea":
          Rf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Wa(l, !!a.multiple, t, !1));
      }
    }
  }
  var ii = !1;
  function Gf(l, t, a) {
    if (ii) return l(t, a);
    ii = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((ii = !1),
        (Fa !== null || Ia !== null) &&
          (pn(), Fa && ((t = Fa), (l = Ia), (Ia = Fa = null), Yf(t), l)))
      )
        for (t = 0; t < l.length; t++) Yf(l[t]);
    }
  }
  function Re(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Ll] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(v(231, t, typeof a));
    return a;
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ci = !1;
  if (Rt)
    try {
      var Ce = {};
      (Object.defineProperty(Ce, "passive", {
        get: function () {
          ci = !0;
        },
      }),
        window.addEventListener("test", Ce, Ce),
        window.removeEventListener("test", Ce, Ce));
    } catch {
      ci = !1;
    }
  var la = null,
    fi = null,
    Ru = null;
  function Xf() {
    if (Ru) return Ru;
    var l,
      t = fi,
      a = t.length,
      e,
      u = "value" in la ? la.value : la.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
    return (Ru = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Cu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function qu() {
    return !0;
  }
  function Qf() {
    return !1;
  }
  function Vl(l) {
    function t(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? qu
          : Qf),
        (this.isPropagationStopped = Qf),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = qu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = qu));
        },
        persist: function () {},
        isPersistent: qu,
      }),
      t
    );
  }
  var Oa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bu = Vl(Oa),
    qe = R({}, Oa, { view: 0, detail: 0 }),
    $o = Vl(qe),
    si,
    di,
    Be,
    Yu = R({}, qe, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: mi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Be &&
              (Be && l.type === "mousemove"
                ? ((si = l.screenX - Be.screenX), (di = l.screenY - Be.screenY))
                : (di = si = 0),
              (Be = l)),
            si);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : di;
      },
    }),
    Zf = Vl(Yu),
    Fo = R({}, Yu, { dataTransfer: 0 }),
    Io = Vl(Fo),
    Po = R({}, qe, { relatedTarget: 0 }),
    oi = Vl(Po),
    lm = R({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tm = Vl(lm),
    am = R({}, Oa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    em = Vl(am),
    um = R({}, Oa, { data: 0 }),
    Lf = Vl(um),
    nm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    im = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    cm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function fm(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = cm[l])
        ? !!t[l]
        : !1;
  }
  function mi() {
    return fm;
  }
  var sm = R({}, qe, {
      key: function (l) {
        if (l.key) {
          var t = nm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Cu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? im[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mi,
      charCode: function (l) {
        return l.type === "keypress" ? Cu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Cu(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    dm = Vl(sm),
    om = R({}, Yu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vf = Vl(om),
    mm = R({}, qe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mi,
    }),
    ym = Vl(mm),
    hm = R({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vm = Vl(hm),
    rm = R({}, Yu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gm = Vl(rm),
    Sm = R({}, Oa, { newState: 0, oldState: 0 }),
    bm = Vl(Sm),
    zm = [9, 13, 27, 32],
    yi = Rt && "CompositionEvent" in window,
    Ye = null;
  Rt && "documentMode" in document && (Ye = document.documentMode);
  var pm = Rt && "TextEvent" in window && !Ye,
    Kf = Rt && (!yi || (Ye && 8 < Ye && 11 >= Ye)),
    Jf = " ",
    wf = !1;
  function kf(l, t) {
    switch (l) {
      case "keyup":
        return zm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wf(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Pa = !1;
  function Am(l, t) {
    switch (l) {
      case "compositionend":
        return Wf(t);
      case "keypress":
        return t.which !== 32 ? null : ((wf = !0), Jf);
      case "textInput":
        return ((l = t.data), l === Jf && wf ? null : l);
      default:
        return null;
    }
  }
  function Tm(l, t) {
    if (Pa)
      return l === "compositionend" || (!yi && kf(l, t))
        ? ((l = Xf()), (Ru = fi = la = null), (Pa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Kf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Em = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function $f(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Em[l.type] : t === "textarea";
  }
  function Ff(l, t, a, e) {
    (Fa ? (Ia ? Ia.push(e) : (Ia = [e])) : (Fa = e),
      (t = Dn(t, "onChange")),
      0 < t.length &&
        ((a = new Bu("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var Ge = null,
    Xe = null;
  function _m(l) {
    Hd(l, 0);
  }
  function Gu(l) {
    var t = He(l);
    if (xf(t)) return l;
  }
  function If(l, t) {
    if (l === "change") return t;
  }
  var Pf = !1;
  if (Rt) {
    var hi;
    if (Rt) {
      var vi = "oninput" in document;
      if (!vi) {
        var ls = document.createElement("div");
        (ls.setAttribute("oninput", "return;"),
          (vi = typeof ls.oninput == "function"));
      }
      hi = vi;
    } else hi = !1;
    Pf = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function ts() {
    Ge && (Ge.detachEvent("onpropertychange", as), (Xe = Ge = null));
  }
  function as(l) {
    if (l.propertyName === "value" && Gu(Xe)) {
      var t = [];
      (Ff(t, Xe, l, ni(l)), Gf(_m, t));
    }
  }
  function Mm(l, t, a) {
    l === "focusin"
      ? (ts(), (Ge = t), (Xe = a), Ge.attachEvent("onpropertychange", as))
      : l === "focusout" && ts();
  }
  function Om(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Gu(Xe);
  }
  function Dm(l, t) {
    if (l === "click") return Gu(t);
  }
  function Nm(l, t) {
    if (l === "input" || l === "change") return Gu(t);
  }
  function Um(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var tt = typeof Object.is == "function" ? Object.is : Um;
  function Qe(l, t) {
    if (tt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Jn.call(t, u) || !tt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function es(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function us(l, t) {
    var a = es(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = es(a);
    }
  }
  function ns(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ns(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function is(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = xu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = xu(l.document);
    }
    return t;
  }
  function ri(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var jm = Rt && "documentMode" in document && 11 >= document.documentMode,
    le = null,
    gi = null,
    Ze = null,
    Si = !1;
  function cs(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Si ||
      le == null ||
      le !== xu(e) ||
      ((e = le),
      "selectionStart" in e && ri(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Ze && Qe(Ze, e)) ||
        ((Ze = e),
        (e = Dn(gi, "onSelect")),
        0 < e.length &&
          ((t = new Bu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = le))));
  }
  function Da(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var te = {
      animationend: Da("Animation", "AnimationEnd"),
      animationiteration: Da("Animation", "AnimationIteration"),
      animationstart: Da("Animation", "AnimationStart"),
      transitionrun: Da("Transition", "TransitionRun"),
      transitionstart: Da("Transition", "TransitionStart"),
      transitioncancel: Da("Transition", "TransitionCancel"),
      transitionend: Da("Transition", "TransitionEnd"),
    },
    bi = {},
    fs = {};
  Rt &&
    ((fs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete te.animationend.animation,
      delete te.animationiteration.animation,
      delete te.animationstart.animation),
    "TransitionEvent" in window || delete te.transitionend.transition);
  function Na(l) {
    if (bi[l]) return bi[l];
    if (!te[l]) return l;
    var t = te[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in fs) return (bi[l] = t[a]);
    return l;
  }
  var ss = Na("animationend"),
    ds = Na("animationiteration"),
    os = Na("animationstart"),
    xm = Na("transitionrun"),
    Hm = Na("transitionstart"),
    Rm = Na("transitioncancel"),
    ms = Na("transitionend"),
    ys = new Map(),
    zi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  zi.push("scrollEnd");
  function zt(l, t) {
    (ys.set(l, t), Ma(t, [l]));
  }
  var Xu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ot = [],
    ae = 0,
    pi = 0;
  function Qu() {
    for (var l = ae, t = (pi = ae = 0); t < l; ) {
      var a = ot[t];
      ot[t++] = null;
      var e = ot[t];
      ot[t++] = null;
      var u = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (((ot[t++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u));
      }
      n !== 0 && hs(a, u, n);
    }
  }
  function Zu(l, t, a, e) {
    ((ot[ae++] = l),
      (ot[ae++] = t),
      (ot[ae++] = a),
      (ot[ae++] = e),
      (pi |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function Ai(l, t, a, e) {
    return (Zu(l, t, a, e), Lu(l));
  }
  function Ua(l, t) {
    return (Zu(l, null, null, t), Lu(l));
  }
  function hs(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - lt(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Lu(l) {
    if (50 < du) throw ((du = 0), (jc = null), Error(v(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ee = {};
  function Cm(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function at(l, t, a, e) {
    return new Cm(l, t, a, e);
  }
  function Ti(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Ct(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = at(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function vs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Vu(l, t, a, e, u, n) {
    var i = 0;
    if (((e = l), typeof l == "function")) Ti(l) && (i = 1);
    else if (typeof l == "string")
      i = X1(l, a, N.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Et:
          return (
            (l = at(31, a, t, u)),
            (l.elementType = Et),
            (l.lanes = n),
            l
          );
        case Cl:
          return ja(a.children, u, n, t);
        case Ut:
          ((i = 8), (u |= 24));
          break;
        case Fl:
          return (
            (l = at(12, a, t, u | 2)),
            (l.elementType = Fl),
            (l.lanes = n),
            l
          );
        case Tt:
          return (
            (l = at(13, a, t, u)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case Xl:
          return (
            (l = at(19, a, t, u)),
            (l.elementType = Xl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                i = 10;
                break l;
              case Ft:
                i = 9;
                break l;
              case ft:
                i = 11;
                break l;
              case w:
                i = 14;
                break l;
              case Ql:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29),
            (a = Error(v(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = at(i, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function ja(l, t, a, e) {
    return ((l = at(7, l, e, t)), (l.lanes = a), l);
  }
  function Ei(l, t, a) {
    return ((l = at(6, l, null, t)), (l.lanes = a), l);
  }
  function rs(l) {
    var t = at(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function _i(l, t, a) {
    return (
      (t = at(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var gs = new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = gs.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: rf(t) }), gs.set(l, t), t);
    }
    return { value: l, source: t, stack: rf(t) };
  }
  var ue = [],
    ne = 0,
    Ku = null,
    Le = 0,
    yt = [],
    ht = 0,
    ta = null,
    Mt = 1,
    Ot = "";
  function qt(l, t) {
    ((ue[ne++] = Le), (ue[ne++] = Ku), (Ku = l), (Le = t));
  }
  function Ss(l, t, a) {
    ((yt[ht++] = Mt), (yt[ht++] = Ot), (yt[ht++] = ta), (ta = l));
    var e = Mt;
    l = Ot;
    var u = 32 - lt(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - lt(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (Mt = (1 << (32 - lt(t) + u)) | (a << u) | e),
        (Ot = n + l));
    } else ((Mt = (1 << n) | (a << u) | e), (Ot = l));
  }
  function Mi(l) {
    l.return !== null && (qt(l, 1), Ss(l, 1, 0));
  }
  function Oi(l) {
    for (; l === Ku; )
      ((Ku = ue[--ne]), (ue[ne] = null), (Le = ue[--ne]), (ue[ne] = null));
    for (; l === ta; )
      ((ta = yt[--ht]),
        (yt[ht] = null),
        (Ot = yt[--ht]),
        (yt[ht] = null),
        (Mt = yt[--ht]),
        (yt[ht] = null));
  }
  function bs(l, t) {
    ((yt[ht++] = Mt),
      (yt[ht++] = Ot),
      (yt[ht++] = ta),
      (Mt = t.id),
      (Ot = t.overflow),
      (ta = l));
  }
  var Nl = null,
    ol = null,
    k = !1,
    aa = null,
    vt = !1,
    Di = Error(v(519));
  function ea(l) {
    var t = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ve(mt(t, l)), Di);
  }
  function zs(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Dl] = l), (t[Ll] = e), a)) {
      case "dialog":
        (V("cancel", t), V("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) V(mu[a], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (V("error", t), V("load", t));
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        (V("invalid", t),
          Hf(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        (V("invalid", t), Cf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Bd(t.textContent, a)
        ? (e.popover != null && (V("beforetoggle", t), V("toggle", t)),
          e.onScroll != null && V("scroll", t),
          e.onScrollEnd != null && V("scrollend", t),
          e.onClick != null && (t.onclick = Ht),
          (t = !0))
        : (t = !1),
      t || ea(l, !0));
  }
  function ps(l) {
    for (Nl = l.return; Nl; )
      switch (Nl.tag) {
        case 5:
        case 31:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Nl = Nl.return;
      }
  }
  function ie(l) {
    if (l !== Nl) return !1;
    if (!k) return (ps(l), (k = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Jc(l.type, l.memoizedProps))),
        (a = !a)),
      a && ol && ea(l),
      ps(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      ol = Jd(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      ol = Jd(l);
    } else
      t === 27
        ? ((t = ol), ga(l.type) ? ((l = Fc), (Fc = null), (ol = l)) : (ol = t))
        : (ol = Nl ? gt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function xa() {
    ((ol = Nl = null), (k = !1));
  }
  function Ni() {
    var l = aa;
    return (
      l !== null &&
        (kl === null ? (kl = l) : kl.push.apply(kl, l), (aa = null)),
      l
    );
  }
  function Ve(l) {
    aa === null ? (aa = [l]) : aa.push(l);
  }
  var Ui = d(null),
    Ha = null,
    Bt = null;
  function ua(l, t, a) {
    (M(Ui, t._currentValue), (t._currentValue = a));
  }
  function Yt(l) {
    ((l._currentValue = Ui.current), A(Ui));
  }
  function ji(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function xi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                ji(n.return, a, l),
                e || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(v(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          ji(i, a, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ce(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(v(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          tt(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === ll.current) {
        if (((i = u.alternate), i === null)) throw Error(v(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(gu) : (l = [gu]));
      }
      u = u.return;
    }
    (l !== null && xi(t, l, a, e), (t.flags |= 262144));
  }
  function Ju(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!tt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ra(l) {
    ((Ha = l),
      (Bt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Ul(l) {
    return As(Ha, l);
  }
  function wu(l, t) {
    return (Ha === null && Ra(l), As(l, t));
  }
  function As(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(v(308));
      ((Bt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var qm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Bm = O.unstable_scheduleCallback,
    Ym = O.unstable_NormalPriority,
    pl = {
      $$typeof: Hl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hi() {
    return { controller: new qm(), data: new Map(), refCount: 0 };
  }
  function Ke(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Bm(Ym, function () {
          l.controller.abort();
        }));
  }
  var Je = null,
    Ri = 0,
    fe = 0,
    se = null;
  function Gm(l, t) {
    if (Je === null) {
      var a = (Je = []);
      ((Ri = 0),
        (fe = Bc()),
        (se = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Ri++, t.then(Ts, Ts), t);
  }
  function Ts() {
    if (--Ri === 0 && Je !== null) {
      se !== null && (se.status = "fulfilled");
      var l = Je;
      ((Je = null), (fe = 0), (se = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Xm(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var Es = b.S;
  b.S = function (l, t) {
    ((cd = Il()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Gm(l, t),
      Es !== null && Es(l, t));
  };
  var Ca = d(null);
  function Ci() {
    var l = Ca.current;
    return l !== null ? l : sl.pooledCache;
  }
  function ku(l, t) {
    t === null ? M(Ca, Ca.current) : M(Ca, t.pool);
  }
  function _s() {
    var l = Ci();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var de = Error(v(460)),
    qi = Error(v(474)),
    Wu = Error(v(542)),
    $u = { then: function () {} };
  function Ms(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Os(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ht, Ht), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ns(l), l);
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(v(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ns(l), l);
        }
        throw ((Ba = t), de);
    }
  }
  function qa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ba = a), de)
        : a;
    }
  }
  var Ba = null;
  function Ds() {
    if (Ba === null) throw Error(v(459));
    var l = Ba;
    return ((Ba = null), l);
  }
  function Ns(l) {
    if (l === de || l === Wu) throw Error(v(483));
  }
  var oe = null,
    we = 0;
  function Fu(l) {
    var t = we;
    return ((we += 1), oe === null && (oe = []), Os(oe, l, t));
  }
  function ke(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Iu(l, t) {
    throw t.$$typeof === yl
      ? Error(v(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Us(l) {
    function t(o, s) {
      if (l) {
        var m = o.deletions;
        m === null ? ((o.deletions = [s]), (o.flags |= 16)) : m.push(s);
      }
    }
    function a(o, s) {
      if (!l) return null;
      for (; s !== null; ) (t(o, s), (s = s.sibling));
      return null;
    }
    function e(o) {
      for (var s = new Map(); o !== null; )
        (o.key !== null ? s.set(o.key, o) : s.set(o.index, o), (o = o.sibling));
      return s;
    }
    function u(o, s) {
      return ((o = Ct(o, s)), (o.index = 0), (o.sibling = null), o);
    }
    function n(o, s, m) {
      return (
        (o.index = m),
        l
          ? ((m = o.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((o.flags |= 67108866), s) : m)
              : ((o.flags |= 67108866), s))
          : ((o.flags |= 1048576), s)
      );
    }
    function i(o) {
      return (l && o.alternate === null && (o.flags |= 67108866), o);
    }
    function c(o, s, m, z) {
      return s === null || s.tag !== 6
        ? ((s = Ei(m, o.mode, z)), (s.return = o), s)
        : ((s = u(s, m)), (s.return = o), s);
    }
    function f(o, s, m, z) {
      var x = m.type;
      return x === Cl
        ? g(o, s, m.props.children, z, m.key)
        : s !== null &&
            (s.elementType === x ||
              (typeof x == "object" &&
                x !== null &&
                x.$$typeof === Ql &&
                qa(x) === s.type))
          ? ((s = u(s, m.props)), ke(s, m), (s.return = o), s)
          : ((s = Vu(m.type, m.key, m.props, null, o.mode, z)),
            ke(s, m),
            (s.return = o),
            s);
    }
    function y(o, s, m, z) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = _i(m, o.mode, z)), (s.return = o), s)
        : ((s = u(s, m.children || [])), (s.return = o), s);
    }
    function g(o, s, m, z, x) {
      return s === null || s.tag !== 7
        ? ((s = ja(m, o.mode, z, x)), (s.return = o), s)
        : ((s = u(s, m)), (s.return = o), s);
    }
    function p(o, s, m) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Ei("" + s, o.mode, m)), (s.return = o), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case $l:
            return (
              (m = Vu(s.type, s.key, s.props, null, o.mode, m)),
              ke(m, s),
              (m.return = o),
              m
            );
          case Gl:
            return ((s = _i(s, o.mode, m)), (s.return = o), s);
          case Ql:
            return ((s = qa(s)), p(o, s, m));
        }
        if (bt(s) || Zl(s))
          return ((s = ja(s, o.mode, m, null)), (s.return = o), s);
        if (typeof s.then == "function") return p(o, Fu(s), m);
        if (s.$$typeof === Hl) return p(o, wu(o, s), m);
        Iu(o, s);
      }
      return null;
    }
    function h(o, s, m, z) {
      var x = s !== null ? s.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return x !== null ? null : c(o, s, "" + m, z);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case $l:
            return m.key === x ? f(o, s, m, z) : null;
          case Gl:
            return m.key === x ? y(o, s, m, z) : null;
          case Ql:
            return ((m = qa(m)), h(o, s, m, z));
        }
        if (bt(m) || Zl(m)) return x !== null ? null : g(o, s, m, z, null);
        if (typeof m.then == "function") return h(o, s, Fu(m), z);
        if (m.$$typeof === Hl) return h(o, s, wu(o, m), z);
        Iu(o, m);
      }
      return null;
    }
    function r(o, s, m, z, x) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((o = o.get(m) || null), c(s, o, "" + z, x));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case $l:
            return (
              (o = o.get(z.key === null ? m : z.key) || null),
              f(s, o, z, x)
            );
          case Gl:
            return (
              (o = o.get(z.key === null ? m : z.key) || null),
              y(s, o, z, x)
            );
          case Ql:
            return ((z = qa(z)), r(o, s, m, z, x));
        }
        if (bt(z) || Zl(z))
          return ((o = o.get(m) || null), g(s, o, z, x, null));
        if (typeof z.then == "function") return r(o, s, m, Fu(z), x);
        if (z.$$typeof === Hl) return r(o, s, m, wu(s, z), x);
        Iu(s, z);
      }
      return null;
    }
    function D(o, s, m, z) {
      for (
        var x = null, F = null, U = s, Q = (s = 0), J = null;
        U !== null && Q < m.length;
        Q++
      ) {
        U.index > Q ? ((J = U), (U = null)) : (J = U.sibling);
        var I = h(o, U, m[Q], z);
        if (I === null) {
          U === null && (U = J);
          break;
        }
        (l && U && I.alternate === null && t(o, U),
          (s = n(I, s, Q)),
          F === null ? (x = I) : (F.sibling = I),
          (F = I),
          (U = J));
      }
      if (Q === m.length) return (a(o, U), k && qt(o, Q), x);
      if (U === null) {
        for (; Q < m.length; Q++)
          ((U = p(o, m[Q], z)),
            U !== null &&
              ((s = n(U, s, Q)),
              F === null ? (x = U) : (F.sibling = U),
              (F = U)));
        return (k && qt(o, Q), x);
      }
      for (U = e(U); Q < m.length; Q++)
        ((J = r(U, o, Q, m[Q], z)),
          J !== null &&
            (l && J.alternate !== null && U.delete(J.key === null ? Q : J.key),
            (s = n(J, s, Q)),
            F === null ? (x = J) : (F.sibling = J),
            (F = J)));
      return (
        l &&
          U.forEach(function (Aa) {
            return t(o, Aa);
          }),
        k && qt(o, Q),
        x
      );
    }
    function H(o, s, m, z) {
      if (m == null) throw Error(v(151));
      for (
        var x = null, F = null, U = s, Q = (s = 0), J = null, I = m.next();
        U !== null && !I.done;
        Q++, I = m.next()
      ) {
        U.index > Q ? ((J = U), (U = null)) : (J = U.sibling);
        var Aa = h(o, U, I.value, z);
        if (Aa === null) {
          U === null && (U = J);
          break;
        }
        (l && U && Aa.alternate === null && t(o, U),
          (s = n(Aa, s, Q)),
          F === null ? (x = Aa) : (F.sibling = Aa),
          (F = Aa),
          (U = J));
      }
      if (I.done) return (a(o, U), k && qt(o, Q), x);
      if (U === null) {
        for (; !I.done; Q++, I = m.next())
          ((I = p(o, I.value, z)),
            I !== null &&
              ((s = n(I, s, Q)),
              F === null ? (x = I) : (F.sibling = I),
              (F = I)));
        return (k && qt(o, Q), x);
      }
      for (U = e(U); !I.done; Q++, I = m.next())
        ((I = r(U, o, Q, I.value, z)),
          I !== null &&
            (l && I.alternate !== null && U.delete(I.key === null ? Q : I.key),
            (s = n(I, s, Q)),
            F === null ? (x = I) : (F.sibling = I),
            (F = I)));
      return (
        l &&
          U.forEach(function (F1) {
            return t(o, F1);
          }),
        k && qt(o, Q),
        x
      );
    }
    function cl(o, s, m, z) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Cl &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case $l:
            l: {
              for (var x = m.key; s !== null; ) {
                if (s.key === x) {
                  if (((x = m.type), x === Cl)) {
                    if (s.tag === 7) {
                      (a(o, s.sibling),
                        (z = u(s, m.props.children)),
                        (z.return = o),
                        (o = z));
                      break l;
                    }
                  } else if (
                    s.elementType === x ||
                    (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === Ql &&
                      qa(x) === s.type)
                  ) {
                    (a(o, s.sibling),
                      (z = u(s, m.props)),
                      ke(z, m),
                      (z.return = o),
                      (o = z));
                    break l;
                  }
                  a(o, s);
                  break;
                } else t(o, s);
                s = s.sibling;
              }
              m.type === Cl
                ? ((z = ja(m.props.children, o.mode, z, m.key)),
                  (z.return = o),
                  (o = z))
                : ((z = Vu(m.type, m.key, m.props, null, o.mode, z)),
                  ke(z, m),
                  (z.return = o),
                  (o = z));
            }
            return i(o);
          case Gl:
            l: {
              for (x = m.key; s !== null; ) {
                if (s.key === x)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    (a(o, s.sibling),
                      (z = u(s, m.children || [])),
                      (z.return = o),
                      (o = z));
                    break l;
                  } else {
                    a(o, s);
                    break;
                  }
                else t(o, s);
                s = s.sibling;
              }
              ((z = _i(m, o.mode, z)), (z.return = o), (o = z));
            }
            return i(o);
          case Ql:
            return ((m = qa(m)), cl(o, s, m, z));
        }
        if (bt(m)) return D(o, s, m, z);
        if (Zl(m)) {
          if (((x = Zl(m)), typeof x != "function")) throw Error(v(150));
          return ((m = x.call(m)), H(o, s, m, z));
        }
        if (typeof m.then == "function") return cl(o, s, Fu(m), z);
        if (m.$$typeof === Hl) return cl(o, s, wu(o, m), z);
        Iu(o, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (a(o, s.sibling), (z = u(s, m)), (z.return = o), (o = z))
            : (a(o, s), (z = Ei(m, o.mode, z)), (z.return = o), (o = z)),
          i(o))
        : a(o, s);
    }
    return function (o, s, m, z) {
      try {
        we = 0;
        var x = cl(o, s, m, z);
        return ((oe = null), x);
      } catch (U) {
        if (U === de || U === Wu) throw U;
        var F = at(29, U, null, o.mode);
        return ((F.lanes = z), (F.return = o), F);
      }
    };
  }
  var Ya = Us(!0),
    js = Us(!1),
    na = !1;
  function Bi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yi(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ia(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (P & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = Lu(l)),
        hs(l, null, a),
        t
      );
    }
    return (Zu(l, e, t, a), Lu(l));
  }
  function We(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Af(l, a));
    }
  }
  function Gi(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Xi = !1;
  function $e() {
    if (Xi) {
      var l = se;
      if (l !== null) throw l;
    }
  }
  function Fe(l, t, a, e) {
    Xi = !1;
    var u = l.updateQueue;
    na = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        y = f.next;
      ((f.next = null), i === null ? (n = y) : (i.next = y), (i = f));
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (c = g.lastBaseUpdate),
        c !== i &&
          (c === null ? (g.firstBaseUpdate = y) : (c.next = y),
          (g.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var p = u.baseState;
      ((i = 0), (g = y = f = null), (c = n));
      do {
        var h = c.lane & -536870913,
          r = h !== c.lane;
        if (r ? (K & h) === h : (e & h) === h) {
          (h !== 0 && h === fe && (Xi = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var D = l,
              H = c;
            h = t;
            var cl = a;
            switch (H.tag) {
              case 1:
                if (((D = H.payload), typeof D == "function")) {
                  p = D.call(cl, p, h);
                  break l;
                }
                p = D;
                break l;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = H.payload),
                  (h = typeof D == "function" ? D.call(cl, p, h) : D),
                  h == null)
                )
                  break l;
                p = R({}, p, h);
                break l;
              case 2:
                na = !0;
            }
          }
          ((h = c.callback),
            h !== null &&
              ((l.flags |= 64),
              r && (l.flags |= 8192),
              (r = u.callbacks),
              r === null ? (u.callbacks = [h]) : r.push(h)));
        } else
          ((r = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            g === null ? ((y = g = r), (f = p)) : (g = g.next = r),
            (i |= h));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((r = c),
            (c = r.next),
            (r.next = null),
            (u.lastBaseUpdate = r),
            (u.shared.pending = null));
        }
      } while (!0);
      (g === null && (f = p),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = g),
        n === null && (u.shared.lanes = 0),
        (ma |= i),
        (l.lanes = i),
        (l.memoizedState = p));
    }
  }
  function xs(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) xs(a[l], t);
  }
  var me = d(null),
    Pu = d(0);
  function Rs(l, t) {
    ((l = wt), M(Pu, l), M(me, t), (wt = l | t.baseLanes));
  }
  function Qi() {
    (M(Pu, wt), M(me, me.current));
  }
  function Zi() {
    ((wt = Pu.current), A(me), A(Pu));
  }
  var et = d(null),
    rt = null;
  function fa(l) {
    var t = l.alternate;
    (M(bl, bl.current & 1),
      M(et, l),
      rt === null &&
        (t === null || me.current !== null || t.memoizedState !== null) &&
        (rt = l));
  }
  function Li(l) {
    (M(bl, bl.current), M(et, l), rt === null && (rt = l));
  }
  function Cs(l) {
    l.tag === 22
      ? (M(bl, bl.current), M(et, l), rt === null && (rt = l))
      : sa();
  }
  function sa() {
    (M(bl, bl.current), M(et, et.current));
  }
  function ut(l) {
    (A(et), rt === l && (rt = null), A(bl));
  }
  var bl = d(0);
  function ln(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Wc(a) || $c(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Gt = 0,
    G = null,
    nl = null,
    Al = null,
    tn = !1,
    ye = !1,
    Ga = !1,
    an = 0,
    Ie = 0,
    he = null,
    Qm = 0;
  function rl() {
    throw Error(v(321));
  }
  function Vi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!tt(l[a], t[a])) return !1;
    return !0;
  }
  function Ki(l, t, a, e, u, n) {
    return (
      (Gt = n),
      (G = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? S0 : ic),
      (Ga = !1),
      (n = a(e, u)),
      (Ga = !1),
      ye && (n = Bs(t, a, e, u)),
      qs(l),
      n
    );
  }
  function qs(l) {
    b.H = tu;
    var t = nl !== null && nl.next !== null;
    if (((Gt = 0), (Al = nl = G = null), (tn = !1), (Ie = 0), (he = null), t))
      throw Error(v(300));
    l === null ||
      Tl ||
      ((l = l.dependencies), l !== null && Ju(l) && (Tl = !0));
  }
  function Bs(l, t, a, e) {
    G = l;
    var u = 0;
    do {
      if ((ye && (he = null), (Ie = 0), (ye = !1), 25 <= u))
        throw Error(v(301));
      if (((u += 1), (Al = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = b0), (n = t(a, e)));
    } while (ye);
    return n;
  }
  function Zm() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Pe(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (G.flags |= 1024),
      t
    );
  }
  function Ji() {
    var l = an !== 0;
    return ((an = 0), l);
  }
  function wi(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function ki(l) {
    if (tn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      tn = !1;
    }
    ((Gt = 0), (Al = nl = G = null), (ye = !1), (Ie = an = 0), (he = null));
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Al === null ? (G.memoizedState = Al = l) : (Al = Al.next = l), Al);
  }
  function zl() {
    if (nl === null) {
      var l = G.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = Al === null ? G.memoizedState : Al.next;
    if (t !== null) ((Al = t), (nl = l));
    else {
      if (l === null)
        throw G.alternate === null ? Error(v(467)) : Error(v(310));
      ((nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        Al === null ? (G.memoizedState = Al = l) : (Al = Al.next = l));
    }
    return Al;
  }
  function en() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pe(l) {
    var t = Ie;
    return (
      (Ie += 1),
      he === null && (he = []),
      (l = Os(he, l, t)),
      (t = G),
      (Al === null ? t.memoizedState : Al.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? S0 : ic)),
      l
    );
  }
  function un(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pe(l);
      if (l.$$typeof === Hl) return Ul(l);
    }
    throw Error(v(438, String(l)));
  }
  function Wi(l) {
    var t = null,
      a = G.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = G.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = en()), (G.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = La;
    return (t.index++, a);
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function nn(l) {
    var t = zl();
    return $i(t, nl, l);
  }
  function $i(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(v(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        y = t,
        g = !1;
      do {
        var p = y.lane & -536870913;
        if (p !== y.lane ? (K & p) === p : (Gt & p) === p) {
          var h = y.revertLane;
          if (h === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              p === fe && (g = !0));
          else if ((Gt & h) === h) {
            ((y = y.next), h === fe && (g = !0));
            continue;
          } else
            ((p = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((c = f = p), (i = n)) : (f = f.next = p),
              (G.lanes |= h),
              (ma |= h));
          ((p = y.action),
            Ga && a(n, p),
            (n = y.hasEagerState ? y.eagerState : a(n, p)));
        } else
          ((h = {
            lane: p,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((c = f = h), (i = n)) : (f = f.next = h),
            (G.lanes |= p),
            (ma |= p));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !tt(n, l.memoizedState) && ((Tl = !0), g && ((a = se), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function Fi(l) {
    var t = zl(),
      a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (tt(n, t.memoizedState) || (Tl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Ys(l, t, a) {
    var e = G,
      u = zl(),
      n = k;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var i = !tt((nl || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (Tl = !0)),
      (u = u.queue),
      lc(Qs.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || i || (Al !== null && Al.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, { destroy: void 0 }, Xs.bind(null, e, u, a, t), null),
        sl === null)
      )
        throw Error(v(349));
      n || (Gt & 127) !== 0 || Gs(e, t, a);
    }
    return a;
  }
  function Gs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = G.updateQueue),
      t === null
        ? ((t = en()), (G.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Xs(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Zs(t) && Ls(l));
  }
  function Qs(l, t, a) {
    return a(function () {
      Zs(t) && Ls(l);
    });
  }
  function Zs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !tt(l, a);
    } catch {
      return !0;
    }
  }
  function Ls(l) {
    var t = Ua(l, 2);
    t !== null && Wl(t, l, 2);
  }
  function Ii(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ga)) {
        It(!0);
        try {
          a();
        } finally {
          It(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Vs(l, t, a, e) {
    return ((l.baseState = a), $i(l, nl, typeof e == "function" ? e : Xt));
  }
  function Lm(l, t, a, e, u) {
    if (sn(l)) throw Error(v(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (b.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Ks(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Ks(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = b.T,
        i = {};
      b.T = i;
      try {
        var c = a(u, e),
          f = b.S;
        (f !== null && f(i, c), Js(l, t, c));
      } catch (y) {
        Pi(l, t, y);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (b.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Js(l, t, n));
      } catch (y) {
        Pi(l, t, y);
      }
  }
  function Js(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            ws(l, t, e);
          },
          function (e) {
            return Pi(l, t, e);
          },
        )
      : ws(l, t, a);
  }
  function ws(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      ks(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Ks(l, a))));
  }
  function Pi(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), ks(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ws(l, t) {
    return t;
  }
  function $s(l, t) {
    if (k) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var e = G;
          if (k) {
            if (ol) {
              t: {
                for (var u = ol, n = vt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = gt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((ol = gt(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            ea(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = Bl()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ws,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = v0.bind(null, G, e)),
      (e.dispatch = a),
      (e = Ii(!1)),
      (n = nc.bind(null, G, !1, e.queue)),
      (e = Bl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = Lm.bind(null, G, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function Fs(l) {
    var t = zl();
    return Is(t, nl, l);
  }
  function Is(l, t, a) {
    if (
      ((t = $i(l, t, Ws)[0]),
      (l = nn(Xt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Pe(t);
      } catch (i) {
        throw i === de ? Wu : i;
      }
    else e = t;
    t = zl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((G.flags |= 2048),
        ve(9, { destroy: void 0 }, Vm.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function Vm(l, t) {
    l.action = t;
  }
  function Ps(l) {
    var t = zl(),
      a = nl;
    if (a !== null) return Is(t, a, l);
    (zl(), (t = t.memoizedState), (a = zl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function ve(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = G.updateQueue),
      t === null && ((t = en()), (G.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function l0() {
    return zl().memoizedState;
  }
  function cn(l, t, a, e) {
    var u = Bl();
    ((G.flags |= l),
      (u.memoizedState = ve(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function fn(l, t, a, e) {
    var u = zl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    nl !== null && e !== null && Vi(e, nl.memoizedState.deps)
      ? (u.memoizedState = ve(t, n, a, e))
      : ((G.flags |= l), (u.memoizedState = ve(1 | t, n, a, e)));
  }
  function t0(l, t) {
    cn(8390656, 8, l, t);
  }
  function lc(l, t) {
    fn(2048, 8, l, t);
  }
  function Km(l) {
    G.flags |= 4;
    var t = G.updateQueue;
    if (t === null) ((t = en()), (G.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function a0(l) {
    var t = zl().memoizedState;
    return (
      Km({ ref: t, nextImpl: l }),
      function () {
        if ((P & 2) !== 0) throw Error(v(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function e0(l, t) {
    return fn(4, 2, l, t);
  }
  function u0(l, t) {
    return fn(4, 4, l, t);
  }
  function n0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function i0(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), fn(4, 4, n0.bind(null, t, l), a));
  }
  function tc() {}
  function c0(l, t) {
    var a = zl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Vi(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function f0(l, t) {
    var a = zl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Vi(t, e[1])) return e[0];
    if (((e = l()), Ga)) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function ac(l, t, a) {
    return a === void 0 || ((Gt & 1073741824) !== 0 && (K & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = sd()), (G.lanes |= l), (ma |= l), a);
  }
  function s0(l, t, a, e) {
    return tt(a, t)
      ? a
      : me.current !== null
        ? ((l = ac(l, a, e)), tt(l, t) || (Tl = !0), l)
        : (Gt & 42) === 0 || ((Gt & 1073741824) !== 0 && (K & 261930) === 0)
          ? ((Tl = !0), (l.memoizedState = a))
          : ((l = sd()), (G.lanes |= l), (ma |= l), t);
  }
  function d0(l, t, a, e, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      c = {};
    ((b.T = c), nc(l, !1, t, a));
    try {
      var f = u(),
        y = b.S;
      if (
        (y !== null && y(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var g = Xm(f, e);
        lu(l, t, g, ct(l));
      } else lu(l, t, e, ct(l));
    } catch (p) {
      lu(l, t, { then: function () {}, status: "rejected", reason: p }, ct());
    } finally {
      ((_.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (b.T = i));
    }
  }
  function Jm() {}
  function ec(l, t, a, e) {
    if (l.tag !== 5) throw Error(v(476));
    var u = o0(l).queue;
    d0(
      l,
      u,
      t,
      C,
      a === null
        ? Jm
        : function () {
            return (m0(l), a(e));
          },
    );
  }
  function o0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: C,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function m0(l) {
    var t = o0(l);
    (t.next === null && (t = l.alternate.memoizedState),
      lu(l, t.next.queue, {}, ct()));
  }
  function uc() {
    return Ul(gu);
  }
  function y0() {
    return zl().memoizedState;
  }
  function h0() {
    return zl().memoizedState;
  }
  function wm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ct();
          l = ia(a);
          var e = ca(t, l, a);
          (e !== null && (Wl(e, t, a), We(e, t, a)),
            (t = { cache: Hi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function km(l, t, a) {
    var e = ct();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sn(l)
        ? r0(t, a)
        : ((a = Ai(l, t, a, e)), a !== null && (Wl(a, l, e), g0(a, t, e))));
  }
  function v0(l, t, a) {
    var e = ct();
    lu(l, t, a, e);
  }
  function lu(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sn(l)) r0(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), tt(c, i)))
            return (Zu(l, t, u, 0), sl === null && Qu(), !1);
        } catch {}
      if (((a = Ai(l, t, u, e)), a !== null))
        return (Wl(a, l, e), g0(a, t, e), !0);
    }
    return !1;
  }
  function nc(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Bc(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sn(l))
    ) {
      if (t) throw Error(v(479));
    } else ((t = Ai(l, a, e, 2)), t !== null && Wl(t, l, 2));
  }
  function sn(l) {
    var t = l.alternate;
    return l === G || (t !== null && t === G);
  }
  function r0(l, t) {
    ye = tn = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function g0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Af(l, a));
    }
  }
  var tu = {
    readContext: Ul,
    use: un,
    useCallback: rl,
    useContext: rl,
    useEffect: rl,
    useImperativeHandle: rl,
    useLayoutEffect: rl,
    useInsertionEffect: rl,
    useMemo: rl,
    useReducer: rl,
    useRef: rl,
    useState: rl,
    useDebugValue: rl,
    useDeferredValue: rl,
    useTransition: rl,
    useSyncExternalStore: rl,
    useId: rl,
    useHostTransitionStatus: rl,
    useFormState: rl,
    useActionState: rl,
    useOptimistic: rl,
    useMemoCache: rl,
    useCacheRefresh: rl,
  };
  tu.useEffectEvent = rl;
  var S0 = {
      readContext: Ul,
      use: un,
      useCallback: function (l, t) {
        return ((Bl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ul,
      useEffect: t0,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          cn(4194308, 4, n0.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return cn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        cn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Bl();
        t = t === void 0 ? null : t;
        var e = l();
        if (Ga) {
          It(!0);
          try {
            l();
          } finally {
            It(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = Bl();
        if (a !== void 0) {
          var u = a(t);
          if (Ga) {
            It(!0);
            try {
              a(t);
            } finally {
              It(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = km.bind(null, G, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Bl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Ii(l);
        var t = l.queue,
          a = v0.bind(null, G, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: tc,
      useDeferredValue: function (l, t) {
        var a = Bl();
        return ac(a, l, t);
      },
      useTransition: function () {
        var l = Ii(!1);
        return (
          (l = d0.bind(null, G, l.queue, !0, !1)),
          (Bl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = G,
          u = Bl();
        if (k) {
          if (a === void 0) throw Error(v(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(v(349));
          (K & 127) !== 0 || Gs(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          t0(Qs.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ve(9, { destroy: void 0 }, Xs.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Bl(),
          t = sl.identifierPrefix;
        if (k) {
          var a = Ot,
            e = Mt;
          ((a = (e & ~(1 << (32 - lt(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = an++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Qm++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: uc,
      useFormState: $s,
      useActionState: $s,
      useOptimistic: function (l) {
        var t = Bl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = nc.bind(null, G, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Wi,
      useCacheRefresh: function () {
        return (Bl().memoizedState = wm.bind(null, G));
      },
      useEffectEvent: function (l) {
        var t = Bl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((P & 2) !== 0) throw Error(v(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ic = {
      readContext: Ul,
      use: un,
      useCallback: c0,
      useContext: Ul,
      useEffect: lc,
      useImperativeHandle: i0,
      useInsertionEffect: e0,
      useLayoutEffect: u0,
      useMemo: f0,
      useReducer: nn,
      useRef: l0,
      useState: function () {
        return nn(Xt);
      },
      useDebugValue: tc,
      useDeferredValue: function (l, t) {
        var a = zl();
        return s0(a, nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = nn(Xt)[0],
          t = zl().memoizedState;
        return [typeof l == "boolean" ? l : Pe(l), t];
      },
      useSyncExternalStore: Ys,
      useId: y0,
      useHostTransitionStatus: uc,
      useFormState: Fs,
      useActionState: Fs,
      useOptimistic: function (l, t) {
        var a = zl();
        return Vs(a, nl, l, t);
      },
      useMemoCache: Wi,
      useCacheRefresh: h0,
    };
  ic.useEffectEvent = a0;
  var b0 = {
    readContext: Ul,
    use: un,
    useCallback: c0,
    useContext: Ul,
    useEffect: lc,
    useImperativeHandle: i0,
    useInsertionEffect: e0,
    useLayoutEffect: u0,
    useMemo: f0,
    useReducer: Fi,
    useRef: l0,
    useState: function () {
      return Fi(Xt);
    },
    useDebugValue: tc,
    useDeferredValue: function (l, t) {
      var a = zl();
      return nl === null ? ac(a, l, t) : s0(a, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Fi(Xt)[0],
        t = zl().memoizedState;
      return [typeof l == "boolean" ? l : Pe(l), t];
    },
    useSyncExternalStore: Ys,
    useId: y0,
    useHostTransitionStatus: uc,
    useFormState: Ps,
    useActionState: Ps,
    useOptimistic: function (l, t) {
      var a = zl();
      return nl !== null
        ? Vs(a, nl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Wi,
    useCacheRefresh: h0,
  };
  b0.useEffectEvent = a0;
  function cc(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : R({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var fc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = ct(),
        u = ia(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = ca(l, u, e)),
        t !== null && (Wl(t, l, e), We(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = ct(),
        u = ia(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = ca(l, u, e)),
        t !== null && (Wl(t, l, e), We(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = ct(),
        e = ia(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = ca(l, e, a)),
        t !== null && (Wl(t, l, a), We(t, l, a)));
    },
  };
  function z0(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Qe(a, e) || !Qe(u, n)
          : !0
    );
  }
  function p0(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && fc.enqueueReplaceState(t, t.state, null));
  }
  function Xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = R({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function A0(l) {
    Xu(l);
  }
  function T0(l) {
    console.error(l);
  }
  function E0(l) {
    Xu(l);
  }
  function dn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function _0(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function sc(l, t, a) {
    return (
      (a = ia(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        dn(l, t);
      }),
      a
    );
  }
  function M0(l) {
    return ((l = ia(l)), (l.tag = 3), l);
  }
  function O0(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          _0(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (_0(t, a, e),
          typeof u != "function" &&
            (ya === null ? (ya = new Set([this])) : ya.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Wm(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ce(t, a, u, !0),
        (a = et.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              rt === null ? An() : a.alternate === null && gl === 0 && (gl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === $u
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Rc(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === $u
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Rc(l, e, u)),
              !1
            );
        }
        throw Error(v(435, a.tag));
      }
      return (Rc(l, e, u), An(), !1);
    }
    if (k)
      return (
        (t = et.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== Di && ((l = Error(v(422), { cause: e })), Ve(mt(l, a))))
          : (e !== Di && ((t = Error(v(423), { cause: e })), Ve(mt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = mt(e, a)),
            (u = sc(l.stateNode, e, u)),
            Gi(l, u),
            gl !== 4 && (gl = 2)),
        !1
      );
    var n = Error(v(520), { cause: e });
    if (
      ((n = mt(n, a)),
      su === null ? (su = [n]) : su.push(n),
      gl !== 4 && (gl = 2),
      t === null)
    )
      return !0;
    ((e = mt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = sc(a.stateNode, e, l)),
            Gi(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ya === null || !ya.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = M0(u)),
              O0(u, l, a, e),
              Gi(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var dc = Error(v(461)),
    Tl = !1;
  function jl(l, t, a, e) {
    t.child = l === null ? js(t, null, a, e) : Ya(t, l.child, a, e);
  }
  function D0(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      Ra(t),
      (e = Ki(l, t, a, i, n, u)),
      (c = Ji()),
      l !== null && !Tl
        ? (wi(l, t, u), Qt(l, t, u))
        : (k && c && Mi(t), (t.flags |= 1), jl(l, t, e, u), t.child)
    );
  }
  function N0(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Ti(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), U0(l, t, n, e, u))
        : ((l = Vu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Sc(l, u))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Qe), a(i, e) && l.ref === t.ref)
      )
        return Qt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Ct(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function U0(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qe(n, e) && l.ref === t.ref)
        if (((Tl = !1), (t.pendingProps = e = n), Sc(l, u)))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else return ((t.lanes = l.lanes), Qt(l, t, u));
    }
    return oc(l, t, a, e, u);
  }
  function j0(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return x0(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && ku(t, n !== null ? n.cachePool : null),
          n !== null ? Rs(t, n) : Qi(),
          Cs(t));
      else
        return (
          (e = t.lanes = 536870912),
          x0(l, t, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (ku(t, n.cachePool), Rs(t, n), sa(), (t.memoizedState = null))
        : (l !== null && ku(t, null), Qi(), sa());
    return (jl(l, t, u, a), t.child);
  }
  function au(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function x0(l, t, a, e, u) {
    var n = Ci();
    return (
      (n = n === null ? null : { parent: pl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && ku(t, null),
      Qi(),
      Cs(t),
      l !== null && ce(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function on(l, t) {
    return (
      (t = yn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function H0(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = on(t, t.pendingProps)),
      (l.flags |= 2),
      ut(t),
      (t.memoizedState = null),
      l
    );
  }
  function $m(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (k) {
        if (e.mode === "hidden")
          return ((l = on(t, e)), (t.lanes = 536870912), au(null, l));
        if (
          (Li(t),
          (l = ol)
            ? ((l = Kd(l, vt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ta !== null ? { id: Mt, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = rs(l)),
                (a.return = t),
                (t.child = a),
                (Nl = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw ea(t);
        return ((t.lanes = 536870912), null);
      }
      return on(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Li(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = H0(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(v(558));
      else if (
        (Tl || ce(l, t, a, !1), (u = (a & l.childLanes) !== 0), Tl || u)
      ) {
        if (
          ((e = sl),
          e !== null && ((i = Tf(e, a)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Ua(l, i), Wl(e, l, i), dc);
        (An(), (t = H0(l, t, a)));
      } else
        ((l = n.treeContext),
          (ol = gt(i.nextSibling)),
          (Nl = t),
          (k = !0),
          (aa = null),
          (vt = !1),
          l !== null && bs(t, l),
          (t = on(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Ct(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function mn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function oc(l, t, a, e, u) {
    return (
      Ra(t),
      (a = Ki(l, t, a, e, void 0, u)),
      (e = Ji()),
      l !== null && !Tl
        ? (wi(l, t, u), Qt(l, t, u))
        : (k && e && Mi(t), (t.flags |= 1), jl(l, t, a, u), t.child)
    );
  }
  function R0(l, t, a, e, u, n) {
    return (
      Ra(t),
      (t.updateQueue = null),
      (a = Bs(t, e, a, u)),
      qs(l),
      (e = Ji()),
      l !== null && !Tl
        ? (wi(l, t, n), Qt(l, t, n))
        : (k && e && Mi(t), (t.flags |= 1), jl(l, t, a, n), t.child)
    );
  }
  function C0(l, t, a, e, u) {
    if ((Ra(t), t.stateNode === null)) {
      var n = ee,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = Ul(i)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = fc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Bi(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Ul(i) : ee),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (cc(t, a, i, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && fc.enqueueReplaceState(n, n.state, null),
          Fe(t, e, n, u),
          $e(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Xa(a, c);
      n.props = f;
      var y = n.context,
        g = a.contextType;
      ((i = ee), typeof g == "object" && g !== null && (i = Ul(g)));
      var p = a.getDerivedStateFromProps;
      ((g =
        typeof p == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || y !== i) && p0(t, n, e, i)),
        (na = !1));
      var h = t.memoizedState;
      ((n.state = h),
        Fe(t, e, n, u),
        $e(),
        (y = t.memoizedState),
        c || h !== y || na
          ? (typeof p == "function" && (cc(t, a, p, e), (y = t.memoizedState)),
            (f = na || z0(t, a, f, e, h, y, i))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = y)),
            (n.props = e),
            (n.state = y),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        Yi(l, t),
        (i = t.memoizedProps),
        (g = Xa(a, i)),
        (n.props = g),
        (p = t.pendingProps),
        (h = n.context),
        (y = a.contextType),
        (f = ee),
        typeof y == "object" && y !== null && (f = Ul(y)),
        (c = a.getDerivedStateFromProps),
        (y =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== p || h !== f) && p0(t, n, e, f)),
        (na = !1),
        (h = t.memoizedState),
        (n.state = h),
        Fe(t, e, n, u),
        $e());
      var r = t.memoizedState;
      i !== p ||
      h !== r ||
      na ||
      (l !== null && l.dependencies !== null && Ju(l.dependencies))
        ? (typeof c == "function" && (cc(t, a, c, e), (r = t.memoizedState)),
          (g =
            na ||
            z0(t, a, g, e, h, r, f) ||
            (l !== null && l.dependencies !== null && Ju(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, r, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, r, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = r)),
          (n.props = e),
          (n.state = r),
          (n.context = f),
          (e = g))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      mn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = Ya(t, l.child, null, u)),
              (t.child = Ya(t, null, a, u)))
            : jl(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Qt(l, t, u)),
      l
    );
  }
  function q0(l, t, a, e) {
    return (xa(), (t.flags |= 256), jl(l, t, a, e), t.child);
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function yc(l) {
    return { baseLanes: l, cachePool: _s() };
  }
  function hc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= it), l);
  }
  function B0(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (k) {
        if (
          (u ? fa(t) : sa(),
          (l = ol)
            ? ((l = Kd(l, vt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ta !== null ? { id: Mt, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = rs(l)),
                (a.return = t),
                (t.child = a),
                (Nl = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw ea(t);
        return ($c(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (sa(),
            (u = t.mode),
            (c = yn({ mode: "hidden", children: c }, u)),
            (e = ja(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = yc(a)),
            (e.childLanes = hc(l, i, a)),
            (t.memoizedState = mc),
            au(null, e))
          : (fa(t), vc(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (fa(t), (t.flags &= -257), (t = rc(l, t, a)))
          : t.memoizedState !== null
            ? (sa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (sa(),
              (c = e.fallback),
              (u = t.mode),
              (e = yn({ mode: "visible", children: e.children }, u)),
              (c = ja(c, u, a, null)),
              (c.flags |= 2),
              (e.return = t),
              (c.return = t),
              (e.sibling = c),
              (t.child = e),
              Ya(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = yc(a)),
              (e.childLanes = hc(l, i, a)),
              (t.memoizedState = mc),
              (t = au(null, e)));
      else if ((fa(t), $c(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
        ((i = y),
          (e = Error(v(419))),
          (e.stack = ""),
          (e.digest = i),
          Ve({ value: e, source: null, stack: null }),
          (t = rc(l, t, a)));
      } else if (
        (Tl || ce(l, t, a, !1), (i = (a & l.childLanes) !== 0), Tl || i)
      ) {
        if (
          ((i = sl),
          i !== null && ((e = Tf(i, a)), e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), Ua(l, e), Wl(i, l, e), dc);
        (Wc(c) || An(), (t = rc(l, t, a)));
      } else
        Wc(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (ol = gt(c.nextSibling)),
            (Nl = t),
            (k = !0),
            (aa = null),
            (vt = !1),
            l !== null && bs(t, l),
            (t = vc(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (sa(),
        (c = e.fallback),
        (u = t.mode),
        (f = l.child),
        (y = f.sibling),
        (e = Ct(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (c = Ct(y, c)) : ((c = ja(c, u, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        au(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = yc(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = pl._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = _s()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = hc(l, i, a)),
        (t.memoizedState = mc),
        au(l.child, e))
      : (fa(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ct(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function vc(l, t) {
    return (
      (t = yn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function yn(l, t) {
    return ((l = at(22, l, null, t)), (l.lanes = 0), l);
  }
  function rc(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = vc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Y0(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), ji(l.return, t, a));
  }
  function gc(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function G0(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = bl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      M(bl, i),
      jl(l, t, e, a),
      (e = k ? Le : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Y0(l, a, t);
        else if (l.tag === 19) Y0(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && ln(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          gc(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && ln(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        gc(t, !0, a, null, n, e);
        break;
      case "together":
        gc(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ma |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ce(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Ct(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Sc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ju(l)));
  }
  function Fm(l, t, a) {
    switch (t.tag) {
      case 3:
        (ql(t, t.stateNode.containerInfo),
          ua(t, pl, l.memoizedState.cache),
          xa());
        break;
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        ua(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Li(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (fa(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? B0(l, t, a)
              : (fa(t), (l = Qt(l, t, a)), l !== null ? l.sibling : null);
        fa(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ce(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return G0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          M(bl, bl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), j0(l, t, a, t.pendingProps));
      case 24:
        ua(t, pl, l.memoizedState.cache);
    }
    return Qt(l, t, a);
  }
  function X0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Tl = !0;
      else {
        if (!Sc(l, a) && (t.flags & 128) === 0) return ((Tl = !1), Fm(l, t, a));
        Tl = (l.flags & 131072) !== 0;
      }
    else ((Tl = !1), k && (t.flags & 1048576) !== 0 && Ss(t, Le, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = qa(t.elementType)), (t.type = l), typeof l == "function"))
            Ti(l)
              ? ((e = Xa(l, e)), (t.tag = 1), (t = C0(null, t, l, e, a)))
              : ((t.tag = 0), (t = oc(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === ft) {
                ((t.tag = 11), (t = D0(null, t, l, e, a)));
                break l;
              } else if (u === w) {
                ((t.tag = 14), (t = N0(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = jt(l) || l), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return oc(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Xa(e, t.pendingProps)), C0(l, t, e, u, a));
      case 3:
        l: {
          if ((ql(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Yi(l, t), Fe(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            ua(t, pl, e),
            e !== n.cache && xi(t, [pl], a, !0),
            $e(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = q0(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = mt(Error(v(424)), t)), Ve(u), (t = q0(l, t, e, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  ol = gt(l.firstChild),
                  Nl = t,
                  k = !0,
                  aa = null,
                  vt = !0,
                  a = js(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((xa(), e === u)) {
              t = Qt(l, t, a);
              break l;
            }
            jl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          mn(l, t),
          l === null
            ? (a = Fd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : k ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = Nn(Z.current).createElement(a)),
                (e[Dl] = t),
                (e[Ll] = l),
                xl(e, a, l),
                Ml(e),
                (t.stateNode = e))
            : (t.memoizedState = Fd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          De(t),
          l === null &&
            k &&
            ((e = t.stateNode = kd(t.type, t.pendingProps, Z.current)),
            (Nl = t),
            (vt = !0),
            (u = ol),
            ga(t.type) ? ((Fc = u), (ol = gt(e.firstChild))) : (ol = u)),
          jl(l, t, t.pendingProps.children, a),
          mn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            k &&
            ((u = e = ol) &&
              ((e = O1(e, t.type, t.pendingProps, vt)),
              e !== null
                ? ((t.stateNode = e),
                  (Nl = t),
                  (ol = gt(e.firstChild)),
                  (vt = !1),
                  (u = !0))
                : (u = !1)),
            u || ea(t)),
          De(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Jc(u, n) ? (e = null) : i !== null && Jc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Ki(l, t, Zm, null, null, a)), (gu._currentValue = u)),
          mn(l, t),
          jl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            k &&
            ((l = a = ol) &&
              ((a = D1(a, t.pendingProps, vt)),
              a !== null
                ? ((t.stateNode = a), (Nl = t), (ol = null), (l = !0))
                : (l = !1)),
            l || ea(t)),
          null
        );
      case 13:
        return B0(l, t, a);
      case 4:
        return (
          ql(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = Ya(t, null, e, a)) : jl(l, t, e, a),
          t.child
        );
      case 11:
        return D0(l, t, t.type, t.pendingProps, a);
      case 7:
        return (jl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (jl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (jl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          ua(t, t.type, e.value),
          jl(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          Ra(t),
          (u = Ul(u)),
          (e = e(u)),
          (t.flags |= 1),
          jl(l, t, e, a),
          t.child
        );
      case 14:
        return N0(l, t, t.type, t.pendingProps, a);
      case 15:
        return U0(l, t, t.type, t.pendingProps, a);
      case 19:
        return G0(l, t, a);
      case 31:
        return $m(l, t, a);
      case 22:
        return j0(l, t, a, t.pendingProps);
      case 24:
        return (
          Ra(t),
          (e = Ul(pl)),
          l === null
            ? ((u = Ci()),
              u === null &&
                ((u = sl),
                (n = Hi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              Bi(t),
              ua(t, pl, u))
            : ((l.lanes & a) !== 0 && (Yi(l, t), Fe(t, null, null, a), $e()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ua(t, pl, e))
                : ((e = n.cache),
                  ua(t, pl, e),
                  e !== u.cache && xi(t, [pl], a, !0))),
          jl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function bc(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yd()) l.flags |= 8192;
        else throw ((Ba = $u), qi);
    } else l.flags &= -16777217;
  }
  function Q0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ao(t)))
      if (yd()) l.flags |= 8192;
      else throw ((Ba = $u), qi);
  }
  function hn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? zf() : 536870912), (l.lanes |= t), (be |= t)));
  }
  function eu(l, t) {
    if (!k)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function Im(l, t, a) {
    var e = t.pendingProps;
    switch ((Oi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ml(t), null);
      case 1:
        return (ml(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Yt(pl),
          Sl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ie(t)
              ? Zt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ni())),
          ml(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Zt(t),
              n !== null ? (ml(t), Q0(t, n)) : (ml(t), bc(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (Zt(t), ml(t), Q0(t, n))
                : (ml(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && Zt(t),
                ml(t),
                bc(t, u, l, e, a)),
          null
        );
      case 27:
        if (
          (Eu(t),
          (a = Z.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && Zt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(v(166));
            return (ml(t), null);
          }
          ((l = N.current),
            ie(t) ? zs(t) : ((l = kd(u, e, a)), (t.stateNode = l), Zt(t)));
        }
        return (ml(t), null);
      case 5:
        if ((Eu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Zt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(v(166));
            return (ml(t), null);
          }
          if (((n = N.current), ie(t))) zs(t);
          else {
            var i = Nn(Z.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? i.createElement(u, { is: e.is })
                        : i.createElement(u);
                }
            }
            ((n[Dl] = t), (n[Ll] = e));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((xl(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Zt(t);
          }
        }
        return (
          ml(t),
          bc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Zt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = Z.current), ie(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = Nl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Dl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Bd(l.nodeValue, a)
              )),
              l || ea(t, !0));
          } else
            ((l = Nn(l).createTextNode(e)), (l[Dl] = t), (t.stateNode = l));
        }
        return (ml(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = ie(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(v(557));
              l[Dl] = t;
            } else
              (xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ml(t), (l = !1));
          } else
            ((a = Ni()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0) throw Error(v(558));
        }
        return (ml(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ie(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(v(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(v(317));
              u[Dl] = t;
            } else
              (xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ml(t), (u = !1));
          } else
            ((u = Ni()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return (
          ut(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              hn(t, t.updateQueue),
              ml(t),
              null)
        );
      case 4:
        return (Sl(), l === null && Qc(t.stateNode.containerInfo), ml(t), null);
      case 10:
        return (Yt(t.type), ml(t), null);
      case 19:
        if ((A(bl), (e = t.memoizedState), e === null)) return (ml(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) eu(e, !1);
          else {
            if (gl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = ln(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      eu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      hn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (vs(a, l), (a = a.sibling));
                  return (
                    M(bl, (bl.current & 1) | 2),
                    k && qt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              Il() > bn &&
              ((t.flags |= 128), (u = !0), eu(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = ln(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                hn(t, l),
                eu(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !k)
              )
                return (ml(t), null);
            } else
              2 * Il() - e.renderingStartTime > bn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), eu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = Il()),
            (l.sibling = null),
            (a = bl.current),
            M(bl, u ? (a & 1) | 2 : a & 1),
            k && qt(t, e.treeForkCount),
            l)
          : (ml(t), null);
      case 22:
      case 23:
        return (
          ut(t),
          Zi(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ml(t),
          (a = t.updateQueue),
          a !== null && hn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && A(Ca),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Yt(pl),
          ml(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function Pm(l, t) {
    switch ((Oi(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yt(pl),
          Sl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Eu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ut(t), t.alternate === null)) throw Error(v(340));
          xa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ut(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          xa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (A(bl), null);
      case 4:
        return (Sl(), null);
      case 10:
        return (Yt(t.type), null);
      case 22:
      case 23:
        return (
          ut(t),
          Zi(),
          l !== null && A(Ca),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Yt(pl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Z0(l, t) {
    switch ((Oi(t), t.tag)) {
      case 3:
        (Yt(pl), Sl());
        break;
      case 26:
      case 27:
      case 5:
        Eu(t);
        break;
      case 4:
        Sl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        A(bl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        (ut(t), Zi(), l !== null && A(Ca));
        break;
      case 24:
        Yt(pl);
    }
  }
  function uu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function da(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var f = a,
                y = c;
              try {
                y();
              } catch (g) {
                al(u, f, g);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (g) {
      al(t, t.return, g);
    }
  }
  function L0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Hs(t, a);
      } catch (e) {
        al(l, l.return, e);
      }
    }
  }
  function V0(l, t, a) {
    ((a.props = Xa(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      al(l, t, e);
    }
  }
  function nu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      al(l, t, u);
    }
  }
  function Dt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          al(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          al(l, t, u);
        }
      else a.current = null;
  }
  function K0(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function zc(l, t, a) {
    try {
      var e = l.stateNode;
      (p1(e, l.type, a, t), (e[Ll] = t));
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function J0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ga(l.type)) ||
      l.tag === 4
    );
  }
  function pc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || J0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && ga(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ac(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ht)));
    else if (
      e !== 4 &&
      (e === 27 && ga(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Ac(l, t, a), l = l.sibling; l !== null; )
        (Ac(l, t, a), (l = l.sibling));
  }
  function vn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && ga(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (vn(l, t, a), l = l.sibling; l !== null; )
        (vn(l, t, a), (l = l.sibling));
  }
  function w0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (xl(t, e, a), (t[Dl] = l), (t[Ll] = a));
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var Lt = !1,
    El = !1,
    Tc = !1,
    k0 = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null;
  function l1(l, t) {
    if (((l = l.containerInfo), (Vc = qn), (l = is(l)), ri(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              y = 0,
              g = 0,
              p = l,
              h = null;
            t: for (;;) {
              for (
                var r;
                p !== a || (u !== 0 && p.nodeType !== 3) || (c = i + u),
                  p !== n || (e !== 0 && p.nodeType !== 3) || (f = i + e),
                  p.nodeType === 3 && (i += p.nodeValue.length),
                  (r = p.firstChild) !== null;
              )
                ((h = p), (p = r));
              for (;;) {
                if (p === l) break t;
                if (
                  (h === a && ++y === u && (c = i),
                  h === n && ++g === e && (f = i),
                  (r = p.nextSibling) !== null)
                )
                  break;
                ((p = h), (h = p.parentNode));
              }
              p = r;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Kc = { focusedElem: l, selectionRange: a }, qn = !1, Ol = t;
      Ol !== null;
    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Ol = l));
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var D = Xa(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(D, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (H) {
                  al(a, a.return, H);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  kc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Ol = l));
            break;
          }
          Ol = t.return;
        }
  }
  function W0(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Kt(l, a), e & 4 && uu(5, a));
        break;
      case 1:
        if ((Kt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              al(a, a.return, i);
            }
          else {
            var u = Xa(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              al(a, a.return, i);
            }
          }
        (e & 64 && L0(a), e & 512 && nu(a, a.return));
        break;
      case 3:
        if ((Kt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Hs(l, t);
          } catch (i) {
            al(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && w0(a);
      case 26:
      case 5:
        (Kt(l, a), t === null && e & 4 && K0(a), e & 512 && nu(a, a.return));
        break;
      case 12:
        Kt(l, a);
        break;
      case 31:
        (Kt(l, a), e & 4 && I0(l, a));
        break;
      case 13:
        (Kt(l, a),
          e & 4 && P0(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = s1.bind(null, a)), N1(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Lt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || El), (u = Lt));
          var n = El;
          ((Lt = e),
            (El = t) && !n ? Jt(l, a, (a.subtreeFlags & 8772) !== 0) : Kt(l, a),
            (Lt = u),
            (El = n));
        }
        break;
      case 30:
        break;
      default:
        Kt(l, a);
    }
  }
  function $0(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), $0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Pn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var hl = null,
    Kl = !1;
  function Vt(l, t, a) {
    for (a = a.child; a !== null; ) (F0(l, t, a), (a = a.sibling));
  }
  function F0(l, t, a) {
    if (Pl && typeof Pl.onCommitFiberUnmount == "function")
      try {
        Pl.onCommitFiberUnmount(Ne, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (El || Dt(a, t),
          Vt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        El || Dt(a, t);
        var e = hl,
          u = Kl;
        (ga(a.type) && ((hl = a.stateNode), (Kl = !1)),
          Vt(l, t, a),
          hu(a.stateNode),
          (hl = e),
          (Kl = u));
        break;
      case 5:
        El || Dt(a, t);
      case 6:
        if (
          ((e = hl),
          (u = Kl),
          (hl = null),
          Vt(l, t, a),
          (hl = e),
          (Kl = u),
          hl !== null)
        )
          if (Kl)
            try {
              (hl.nodeType === 9
                ? hl.body
                : hl.nodeName === "HTML"
                  ? hl.ownerDocument.body
                  : hl
              ).removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
          else
            try {
              hl.removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
        break;
      case 18:
        hl !== null &&
          (Kl
            ? ((l = hl),
              Ld(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Oe(l))
            : Ld(hl, a.stateNode));
        break;
      case 4:
        ((e = hl),
          (u = Kl),
          (hl = a.stateNode.containerInfo),
          (Kl = !0),
          Vt(l, t, a),
          (hl = e),
          (Kl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, a, t), El || da(4, a, t), Vt(l, t, a));
        break;
      case 1:
        (El ||
          (Dt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && V0(a, t, e)),
          Vt(l, t, a));
        break;
      case 21:
        Vt(l, t, a);
        break;
      case 22:
        ((El = (e = El) || a.memoizedState !== null), Vt(l, t, a), (El = e));
        break;
      default:
        Vt(l, t, a);
    }
  }
  function I0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Oe(l);
      } catch (a) {
        al(t, t.return, a);
      }
    }
  }
  function P0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Oe(l);
      } catch (a) {
        al(t, t.return, a);
      }
  }
  function t1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new k0()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new k0()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function rn(l, t) {
    var a = t1(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = d1.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Jl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ga(c.type)) {
                ((hl = c.stateNode), (Kl = !1));
                break l;
              }
              break;
            case 5:
              ((hl = c.stateNode), (Kl = !1));
              break l;
            case 3:
            case 4:
              ((hl = c.stateNode.containerInfo), (Kl = !0));
              break l;
          }
          c = c.return;
        }
        if (hl === null) throw Error(v(160));
        (F0(n, i, u),
          (hl = null),
          (Kl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (ld(t, l), (t = t.sibling));
  }
  var pt = null;
  function ld(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Jl(t, l),
          wl(l),
          e & 4 && (da(3, l, l.return), uu(3, l), da(5, l, l.return)));
        break;
      case 1:
        (Jl(t, l),
          wl(l),
          e & 512 && (El || a === null || Dt(a, a.return)),
          e & 64 &&
            Lt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = pt;
        if (
          (Jl(t, l),
          wl(l),
          e & 512 && (El || a === null || Dt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[xe] ||
                          n[Dl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        xl(n, e, a),
                        (n[Dl] = l),
                        Ml(n),
                        (e = n));
                      break l;
                    case "link":
                      var i = lo("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        xl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = lo("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        xl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(v(468, e));
                  }
                  ((n[Dl] = l), Ml(n), (e = n));
                }
                l.stateNode = e;
              } else to(u, l.type, l.stateNode);
            else l.stateNode = Pd(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? to(u, l.type, l.stateNode)
                  : Pd(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                zc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Jl(t, l),
          wl(l),
          e & 512 && (El || a === null || Dt(a, a.return)),
          a !== null && e & 4 && zc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Jl(t, l),
          wl(l),
          e & 512 && (El || a === null || Dt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            $a(u, "");
          } catch (D) {
            al(l, l.return, D);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), zc(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (Tc = !0));
        break;
      case 6:
        if ((Jl(t, l), wl(l), e & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (D) {
            al(l, l.return, D);
          }
        }
        break;
      case 3:
        if (
          ((xn = null),
          (u = pt),
          (pt = Un(t.containerInfo)),
          Jl(t, l),
          (pt = u),
          wl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Oe(t.containerInfo);
          } catch (D) {
            al(l, l.return, D);
          }
        Tc && ((Tc = !1), td(l));
        break;
      case 4:
        ((e = pt),
          (pt = Un(l.stateNode.containerInfo)),
          Jl(t, l),
          wl(l),
          (pt = e));
        break;
      case 12:
        (Jl(t, l), wl(l));
        break;
      case 31:
        (Jl(t, l),
          wl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), rn(l, e))));
        break;
      case 13:
        (Jl(t, l),
          wl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Sn = Il()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), rn(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          y = Lt,
          g = El;
        if (
          ((Lt = y || u),
          (El = g || f),
          Jl(t, l),
          (El = g),
          (Lt = y),
          wl(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || Lt || El || Qa(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var p = f.memoizedProps.style,
                      h =
                        p != null && p.hasOwnProperty("display")
                          ? p.display
                          : null;
                    c.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (D) {
                  al(f, f.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (D) {
                  al(f, f.return, D);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var r = f.stateNode;
                  u ? Vd(r, !0) : Vd(f.stateNode, !1);
                } catch (D) {
                  al(f, f.return, D);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), rn(l, a))));
        break;
      case 19:
        (Jl(t, l),
          wl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), rn(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Jl(t, l), wl(l));
    }
  }
  function wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (J0(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = pc(l);
            vn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && ($a(i, ""), (a.flags &= -33));
            var c = pc(l);
            vn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              y = pc(l);
            Ac(l, y, f);
            break;
          default:
            throw Error(v(161));
        }
      } catch (g) {
        al(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function td(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (td(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (W0(l, t.alternate, t), (t = t.sibling));
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, t, t.return), Qa(t));
          break;
        case 1:
          Dt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && V0(t, t.return, a),
            Qa(t));
          break;
        case 27:
          hu(t.stateNode);
        case 26:
        case 5:
          (Dt(t, t.return), Qa(t));
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function Jt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Jt(u, n, a), uu(4, n));
          break;
        case 1:
          if (
            (Jt(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (y) {
              al(e, e.return, y);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  xs(f[u], c);
            } catch (y) {
              al(e, e.return, y);
            }
          }
          (a && i & 64 && L0(n), nu(n, n.return));
          break;
        case 27:
          w0(n);
        case 26:
        case 5:
          (Jt(u, n, a), a && e === null && i & 4 && K0(n), nu(n, n.return));
          break;
        case 12:
          Jt(u, n, a);
          break;
        case 31:
          (Jt(u, n, a), a && i & 4 && I0(u, n));
          break;
        case 13:
          (Jt(u, n, a), a && i & 4 && P0(u, n));
          break;
        case 22:
          (n.memoizedState === null && Jt(u, n, a), nu(n, n.return));
          break;
        case 30:
          break;
        default:
          Jt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Ec(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ke(a)));
  }
  function _c(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ke(l)));
  }
  function At(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ad(l, t, a, e), (t = t.sibling));
  }
  function ad(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (At(l, t, a, e), u & 2048 && uu(9, t));
        break;
      case 1:
        At(l, t, a, e);
        break;
      case 3:
        (At(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ke(l))));
        break;
      case 12:
        if (u & 2048) {
          (At(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            al(t, t.return, f);
          }
        } else At(l, t, a, e);
        break;
      case 31:
        At(l, t, a, e);
        break;
      case 13:
        At(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? At(l, t, a, e)
              : iu(l, t)
            : n._visibility & 2
              ? At(l, t, a, e)
              : ((n._visibility |= 2),
                re(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ec(i, t));
        break;
      case 24:
        (At(l, t, a, e), u & 2048 && _c(t.alternate, t));
        break;
      default:
        At(l, t, a, e);
    }
  }
  function re(l, t, a, e, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (re(n, i, c, f, u), uu(8, i));
          break;
        case 23:
          break;
        case 22:
          var g = i.stateNode;
          (i.memoizedState !== null
            ? g._visibility & 2
              ? re(n, i, c, f, u)
              : iu(n, i)
            : ((g._visibility |= 2), re(n, i, c, f, u)),
            u && y & 2048 && Ec(i.alternate, i));
          break;
        case 24:
          (re(n, i, c, f, u), u && y & 2048 && _c(i.alternate, i));
          break;
        default:
          re(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function iu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (iu(a, e), u & 2048 && Ec(e.alternate, e));
            break;
          case 24:
            (iu(a, e), u & 2048 && _c(e.alternate, e));
            break;
          default:
            iu(a, e);
        }
        t = t.sibling;
      }
  }
  var cu = 8192;
  function ge(l, t, a) {
    if (l.subtreeFlags & cu)
      for (l = l.child; l !== null; ) (ed(l, t, a), (l = l.sibling));
  }
  function ed(l, t, a) {
    switch (l.tag) {
      case 26:
        (ge(l, t, a),
          l.flags & cu &&
            l.memoizedState !== null &&
            Q1(a, pt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        ge(l, t, a);
        break;
      case 3:
      case 4:
        var e = pt;
        ((pt = Un(l.stateNode.containerInfo)), ge(l, t, a), (pt = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = cu), (cu = 16777216), ge(l, t, a), (cu = e))
            : ge(l, t, a));
        break;
      default:
        ge(l, t, a);
    }
  }
  function ud(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function fu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Ol = e), id(e, l));
        }
      ud(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (nd(l), (l = l.sibling));
  }
  function nd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (fu(l), l.flags & 2048 && da(9, l, l.return));
        break;
      case 3:
        fu(l);
        break;
      case 12:
        fu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), gn(l))
          : fu(l);
        break;
      default:
        fu(l);
    }
  }
  function gn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Ol = e), id(e, l));
        }
      ud(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, t, t.return), gn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), gn(t)));
          break;
        default:
          gn(t);
      }
      l = l.sibling;
    }
  }
  function id(l, t) {
    for (; Ol !== null; ) {
      var a = Ol;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          da(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ke(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (Ol = e));
      else
        l: for (a = l; Ol !== null; ) {
          e = Ol;
          var u = e.sibling,
            n = e.return;
          if (($0(e), e === a)) {
            Ol = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Ol = u));
            break l;
          }
          Ol = n;
        }
    }
  }
  var a1 = {
      getCacheForType: function (l) {
        var t = Ul(pl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Ul(pl).controller.signal;
      },
    },
    e1 = typeof WeakMap == "function" ? WeakMap : Map,
    P = 0,
    sl = null,
    L = null,
    K = 0,
    tl = 0,
    nt = null,
    oa = !1,
    Se = !1,
    Mc = !1,
    wt = 0,
    gl = 0,
    ma = 0,
    Za = 0,
    Oc = 0,
    it = 0,
    be = 0,
    su = null,
    kl = null,
    Dc = !1,
    Sn = 0,
    cd = 0,
    bn = 1 / 0,
    zn = null,
    ya = null,
    _l = 0,
    ha = null,
    ze = null,
    kt = 0,
    Nc = 0,
    Uc = null,
    fd = null,
    du = 0,
    jc = null;
  function ct() {
    return (P & 2) !== 0 && K !== 0 ? K & -K : b.T !== null ? Bc() : Ef();
  }
  function sd() {
    if (it === 0)
      if ((K & 536870912) === 0 || k) {
        var l = Ou;
        ((Ou <<= 1), (Ou & 3932160) === 0 && (Ou = 262144), (it = l));
      } else it = 536870912;
    return ((l = et.current), l !== null && (l.flags |= 32), it);
  }
  function Wl(l, t, a) {
    (((l === sl && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (pe(l, 0), va(l, K, it, !1)),
      je(l, a),
      ((P & 2) === 0 || l !== sl) &&
        (l === sl && ((P & 2) === 0 && (Za |= a), gl === 4 && va(l, K, it, !1)),
        Nt(l)));
  }
  function dd(l, t, a) {
    if ((P & 6) !== 0) throw Error(v(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ue(l, t),
      u = e ? i1(l, t) : Hc(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        Se && !e && va(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !u1(a))) {
          ((u = Hc(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = su;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (pe(c, i).flags |= 256), (i = Hc(c, i, !1)), i !== 2)) {
                if (Mc && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (Za |= n), (u = 4));
                  break l;
                }
                ((n = kl),
                  (kl = u),
                  n !== null &&
                    (kl === null ? (kl = n) : kl.push.apply(kl, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (pe(l, 0), va(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              va(e, t, it, !oa);
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && ((u = Sn + 300 - Il()), 10 < u)) {
            if ((va(e, t, it, !oa), Nu(e, 0, !0) !== 0)) break l;
            ((kt = t),
              (e.timeoutHandle = Qd(
                od.bind(
                  null,
                  e,
                  a,
                  kl,
                  zn,
                  Dc,
                  t,
                  it,
                  Za,
                  be,
                  oa,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          od(e, a, kl, zn, Dc, t, it, Za, be, oa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Nt(l);
  }
  function od(l, t, a, e, u, n, i, c, f, y, g, p, h, r) {
    if (
      ((l.timeoutHandle = -1),
      (p = t.subtreeFlags),
      p & 8192 || (p & 16785408) === 16785408)
    ) {
      ((p = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht,
      }),
        ed(t, n, p));
      var D =
        (n & 62914560) === n ? Sn - Il() : (n & 4194048) === n ? cd - Il() : 0;
      if (((D = Z1(p, D)), D !== null)) {
        ((kt = n),
          (l.cancelPendingCommit = D(
            bd.bind(null, l, t, n, a, e, u, i, c, f, g, p, null, h, r),
          )),
          va(l, n, i, !y));
        return;
      }
    }
    bd(l, t, n, a, e, u, i, c, f);
  }
  function u1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!tt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function va(l, t, a, e) {
    ((t &= ~Oc),
      (t &= ~Za),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - lt(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && pf(l, a, t);
  }
  function pn() {
    return (P & 6) === 0 ? (ou(0), !1) : !0;
  }
  function xc() {
    if (L !== null) {
      if (tl === 0) var l = L.return;
      else ((l = L), (Bt = Ha = null), ki(l), (oe = null), (we = 0), (l = L));
      for (; l !== null; ) (Z0(l.alternate, l), (l = l.return));
      L = null;
    }
  }
  function pe(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), E1(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (kt = 0),
      xc(),
      (sl = l),
      (L = a = Ct(l.current, null)),
      (K = t),
      (tl = 0),
      (nt = null),
      (oa = !1),
      (Se = Ue(l, t)),
      (Mc = !1),
      (be = it = Oc = Za = ma = gl = 0),
      (kl = su = null),
      (Dc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - lt(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((wt = t), Qu(), a);
  }
  function md(l, t) {
    ((G = null),
      (b.H = tu),
      t === de || t === Wu
        ? ((t = Ds()), (tl = 3))
        : t === qi
          ? ((t = Ds()), (tl = 4))
          : (tl =
              t === dc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (nt = t),
      L === null && ((gl = 1), dn(l, mt(t, l.current))));
  }
  function yd() {
    var l = et.current;
    return l === null
      ? !0
      : (K & 4194048) === K
        ? rt === null
        : (K & 62914560) === K || (K & 536870912) !== 0
          ? l === rt
          : !1;
  }
  function hd() {
    var l = b.H;
    return ((b.H = tu), l === null ? tu : l);
  }
  function vd() {
    var l = b.A;
    return ((b.A = a1), l);
  }
  function An() {
    ((gl = 4),
      oa || ((K & 4194048) !== K && et.current !== null) || (Se = !0),
      ((ma & 134217727) === 0 && (Za & 134217727) === 0) ||
        sl === null ||
        va(sl, K, it, !1));
  }
  function Hc(l, t, a) {
    var e = P;
    P |= 2;
    var u = hd(),
      n = vd();
    ((sl !== l || K !== t) && ((zn = null), pe(l, t)), (t = !1));
    var i = gl;
    l: do
      try {
        if (tl !== 0 && L !== null) {
          var c = L,
            f = nt;
          switch (tl) {
            case 8:
              (xc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              et.current === null && (t = !0);
              var y = tl;
              if (((tl = 0), (nt = null), Ae(l, c, f, y), a && Se)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((y = tl), (tl = 0), (nt = null), Ae(l, c, f, y));
          }
        }
        (n1(), (i = gl));
        break;
      } catch (g) {
        md(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Ha = null),
      (P = e),
      (b.H = u),
      (b.A = n),
      L === null && ((sl = null), (K = 0), Qu()),
      i
    );
  }
  function n1() {
    for (; L !== null; ) rd(L);
  }
  function i1(l, t) {
    var a = P;
    P |= 2;
    var e = hd(),
      u = vd();
    sl !== l || K !== t
      ? ((zn = null), (bn = Il() + 500), pe(l, t))
      : (Se = Ue(l, t));
    l: do
      try {
        if (tl !== 0 && L !== null) {
          t = L;
          var n = nt;
          t: switch (tl) {
            case 1:
              ((tl = 0), (nt = null), Ae(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Ms(n)) {
                ((tl = 0), (nt = null), gd(t));
                break;
              }
              ((t = function () {
                ((tl !== 2 && tl !== 9) || sl !== l || (tl = 7), Nt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              Ms(n)
                ? ((tl = 0), (nt = null), gd(t))
                : ((tl = 0), (nt = null), Ae(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (L.tag) {
                case 26:
                  i = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (i ? ao(i) : c.stateNode.complete) {
                    ((tl = 0), (nt = null));
                    var f = c.sibling;
                    if (f !== null) L = f;
                    else {
                      var y = c.return;
                      y !== null ? ((L = y), Tn(y)) : (L = null);
                    }
                    break t;
                  }
              }
              ((tl = 0), (nt = null), Ae(l, t, n, 5));
              break;
            case 6:
              ((tl = 0), (nt = null), Ae(l, t, n, 6));
              break;
            case 8:
              (xc(), (gl = 6));
              break l;
            default:
              throw Error(v(462));
          }
        }
        c1();
        break;
      } catch (g) {
        md(l, g);
      }
    while (!0);
    return (
      (Bt = Ha = null),
      (b.H = e),
      (b.A = u),
      (P = a),
      L !== null ? 0 : ((sl = null), (K = 0), Qu(), gl)
    );
  }
  function c1() {
    for (; L !== null && !Uo(); ) rd(L);
  }
  function rd(l) {
    var t = X0(l.alternate, l, wt);
    ((l.memoizedProps = l.pendingProps), t === null ? Tn(l) : (L = t));
  }
  function gd(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = R0(a, t, t.pendingProps, t.type, void 0, K);
        break;
      case 11:
        t = R0(a, t, t.pendingProps, t.type.render, t.ref, K);
        break;
      case 5:
        ki(t);
      default:
        (Z0(a, t), (t = L = vs(t, wt)), (t = X0(a, t, wt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? Tn(l) : (L = t));
  }
  function Ae(l, t, a, e) {
    ((Bt = Ha = null), ki(t), (oe = null), (we = 0));
    var u = t.return;
    try {
      if (Wm(l, u, t, a, K)) {
        ((gl = 1), dn(l, mt(a, l.current)), (L = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((L = u), n);
      ((gl = 1), dn(l, mt(a, l.current)), (L = null));
      return;
    }
    t.flags & 32768
      ? (k || e === 1
          ? (l = !0)
          : Se || (K & 536870912) !== 0
            ? (l = !1)
            : ((oa = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = et.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        Sd(t, l))
      : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Sd(t, oa);
        return;
      }
      l = t.return;
      var a = Im(t.alternate, t, wt);
      if (a !== null) {
        L = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function Sd(l, t) {
    do {
      var a = Pm(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (L = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        L = l;
        return;
      }
      L = l = a;
    } while (l !== null);
    ((gl = 6), (L = null));
  }
  function bd(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do En();
    while (_l !== 0);
    if ((P & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= pi),
        Xo(l, a, n, i, c, f),
        l === sl && ((L = sl = null), (K = 0)),
        (ze = t),
        (ha = l),
        (kt = a),
        (Nc = n),
        (Uc = u),
        (fd = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            o1(_u, function () {
              return (Ed(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = b.T), (b.T = null), (u = _.p), (_.p = 2), (i = P), (P |= 4));
        try {
          l1(l, t, a);
        } finally {
          ((P = i), (_.p = u), (b.T = e));
        }
      }
      ((_l = 1), zd(), pd(), Ad());
    }
  }
  function zd() {
    if (_l === 1) {
      _l = 0;
      var l = ha,
        t = ze,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = _.p;
        _.p = 2;
        var u = P;
        P |= 4;
        try {
          ld(t, l);
          var n = Kc,
            i = is(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            ns(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && ri(c)) {
              var y = f.start,
                g = f.end;
              if ((g === void 0 && (g = y), "selectionStart" in c))
                ((c.selectionStart = y),
                  (c.selectionEnd = Math.min(g, c.value.length)));
              else {
                var p = c.ownerDocument || document,
                  h = (p && p.defaultView) || window;
                if (h.getSelection) {
                  var r = h.getSelection(),
                    D = c.textContent.length,
                    H = Math.min(f.start, D),
                    cl = f.end === void 0 ? H : Math.min(f.end, D);
                  !r.extend && H > cl && ((i = cl), (cl = H), (H = i));
                  var o = us(c, H),
                    s = us(c, cl);
                  if (
                    o &&
                    s &&
                    (r.rangeCount !== 1 ||
                      r.anchorNode !== o.node ||
                      r.anchorOffset !== o.offset ||
                      r.focusNode !== s.node ||
                      r.focusOffset !== s.offset)
                  ) {
                    var m = p.createRange();
                    (m.setStart(o.node, o.offset),
                      r.removeAllRanges(),
                      H > cl
                        ? (r.addRange(m), r.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), r.addRange(m)));
                  }
                }
              }
            }
            for (p = [], r = c; (r = r.parentNode); )
              r.nodeType === 1 &&
                p.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < p.length;
              c++
            ) {
              var z = p[c];
              ((z.element.scrollLeft = z.left), (z.element.scrollTop = z.top));
            }
          }
          ((qn = !!Vc), (Kc = Vc = null));
        } finally {
          ((P = u), (_.p = e), (b.T = a));
        }
      }
      ((l.current = t), (_l = 2));
    }
  }
  function pd() {
    if (_l === 2) {
      _l = 0;
      var l = ha,
        t = ze,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = _.p;
        _.p = 2;
        var u = P;
        P |= 4;
        try {
          W0(l, t.alternate, t);
        } finally {
          ((P = u), (_.p = e), (b.T = a));
        }
      }
      _l = 3;
    }
  }
  function Ad() {
    if (_l === 4 || _l === 3) {
      ((_l = 0), jo());
      var l = ha,
        t = ze,
        a = kt,
        e = fd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (_l = 5)
        : ((_l = 0), (ze = ha = null), Td(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ya = null),
        Fn(a),
        (t = t.stateNode),
        Pl && typeof Pl.onCommitFiberRoot == "function")
      )
        try {
          Pl.onCommitFiberRoot(Ne, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = b.T), (u = _.p), (_.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((b.T = t), (_.p = u));
        }
      }
      ((kt & 3) !== 0 && En(),
        Nt(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? l === jc
            ? du++
            : ((du = 0), (jc = l))
          : (du = 0),
        ou(0));
    }
  }
  function Td(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ke(t)));
  }
  function En() {
    return (zd(), pd(), Ad(), Ed());
  }
  function Ed() {
    if (_l !== 5) return !1;
    var l = ha,
      t = Nc;
    Nc = 0;
    var a = Fn(kt),
      e = b.T,
      u = _.p;
    try {
      ((_.p = 32 > a ? 32 : a), (b.T = null), (a = Uc), (Uc = null));
      var n = ha,
        i = kt;
      if (((_l = 0), (ze = ha = null), (kt = 0), (P & 6) !== 0))
        throw Error(v(331));
      var c = P;
      if (
        ((P |= 4),
        nd(n.current),
        ad(n, n.current, i, a),
        (P = c),
        ou(0, !1),
        Pl && typeof Pl.onPostCommitFiberRoot == "function")
      )
        try {
          Pl.onPostCommitFiberRoot(Ne, n);
        } catch {}
      return !0;
    } finally {
      ((_.p = u), (b.T = e), Td(l, t));
    }
  }
  function _d(l, t, a) {
    ((t = mt(a, t)),
      (t = sc(l.stateNode, t, 2)),
      (l = ca(l, t, 2)),
      l !== null && (je(l, 2), Nt(l)));
  }
  function al(l, t, a) {
    if (l.tag === 3) _d(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _d(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (ya === null || !ya.has(e)))
          ) {
            ((l = mt(a, l)),
              (a = M0(2)),
              (e = ca(t, a, 2)),
              e !== null && (O0(a, e, t, l), je(e, 2), Nt(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new e1();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((Mc = !0), u.add(a), (l = f1.bind(null, l, t, a)), t.then(l, l));
  }
  function f1(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (K & a) === a &&
        (gl === 4 || (gl === 3 && (K & 62914560) === K && 300 > Il() - Sn)
          ? (P & 2) === 0 && pe(l, 0)
          : (Oc |= a),
        be === K && (be = 0)),
      Nt(l));
  }
  function Md(l, t) {
    (t === 0 && (t = zf()), (l = Ua(l, t)), l !== null && (je(l, t), Nt(l)));
  }
  function s1(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Md(l, a));
  }
  function d1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    (e !== null && e.delete(t), Md(l, a));
  }
  function o1(l, t) {
    return wn(l, t);
  }
  var _n = null,
    Te = null,
    Cc = !1,
    Mn = !1,
    qc = !1,
    ra = 0;
  function Nt(l) {
    (l !== Te &&
      l.next === null &&
      (Te === null ? (_n = Te = l) : (Te = Te.next = l)),
      (Mn = !0),
      Cc || ((Cc = !0), y1()));
  }
  function ou(l, t) {
    if (!qc && Mn) {
      qc = !0;
      do
        for (var a = !1, e = _n; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              ((n = (1 << (31 - lt(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), Ud(e, n));
          } else
            ((n = K),
              (n = Nu(
                e,
                e === sl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Ue(e, n) || ((a = !0), Ud(e, n)));
          e = e.next;
        }
      while (a);
      qc = !1;
    }
  }
  function m1() {
    Od();
  }
  function Od() {
    Mn = Cc = !1;
    var l = 0;
    ra !== 0 && T1() && (l = ra);
    for (var t = Il(), a = null, e = _n; e !== null; ) {
      var u = e.next,
        n = Dd(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (_n = u) : (a.next = u),
          u === null && (Te = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (Mn = !0)),
        (e = u));
    }
    ((_l !== 0 && _l !== 5) || ou(l), ra !== 0 && (ra = 0));
  }
  function Dd(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - lt(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Go(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = sl),
      (a = K),
      (a = Nu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (tl === 2 || tl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && kn(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ue(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && kn(e), Fn(a))) {
        case 2:
        case 8:
          a = Sf;
          break;
        case 32:
          a = _u;
          break;
        case 268435456:
          a = bf;
          break;
        default:
          a = _u;
      }
      return (
        (e = Nd.bind(null, l)),
        (a = wn(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && kn(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Nd(l, t) {
    if (_l !== 0 && _l !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (En() && l.callbackNode !== a) return null;
    var e = K;
    return (
      (e = Nu(
        l,
        l === sl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (dd(l, e, t),
          Dd(l, Il()),
          l.callbackNode != null && l.callbackNode === a
            ? Nd.bind(null, l)
            : null)
    );
  }
  function Ud(l, t) {
    if (En()) return null;
    dd(l, t, !0);
  }
  function y1() {
    _1(function () {
      (P & 6) !== 0 ? wn(gf, m1) : Od();
    });
  }
  function Bc() {
    if (ra === 0) {
      var l = fe;
      (l === 0 && ((l = Mu), (Mu <<= 1), (Mu & 261888) === 0 && (Mu = 256)),
        (ra = l));
    }
    return ra;
  }
  function jd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Hu("" + l);
  }
  function xd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function h1(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = jd((u[Ll] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[Ll] || null)
          ? jd(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Bu("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ra !== 0) {
                  var f = i ? xd(u, i) : new FormData(u);
                  ec(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? xd(u, i) : new FormData(u)),
                  ec(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Yc = 0; Yc < zi.length; Yc++) {
    var Gc = zi[Yc],
      v1 = Gc.toLowerCase(),
      r1 = Gc[0].toUpperCase() + Gc.slice(1);
    zt(v1, "on" + r1);
  }
  (zt(ss, "onAnimationEnd"),
    zt(ds, "onAnimationIteration"),
    zt(os, "onAnimationStart"),
    zt("dblclick", "onDoubleClick"),
    zt("focusin", "onFocus"),
    zt("focusout", "onBlur"),
    zt(xm, "onTransitionRun"),
    zt(Hm, "onTransitionStart"),
    zt(Rm, "onTransitionCancel"),
    zt(ms, "onTransitionEnd"),
    ka("onMouseEnter", ["mouseout", "mouseover"]),
    ka("onMouseLeave", ["mouseout", "mouseover"]),
    ka("onPointerEnter", ["pointerout", "pointerover"]),
    ka("onPointerLeave", ["pointerout", "pointerover"]),
    Ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    g1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mu),
    );
  function Hd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = y));
            try {
              n(u);
            } catch (g) {
              Xu(g);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = y));
            try {
              n(u);
            } catch (g) {
              Xu(g);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function V(l, t) {
    var a = t[In];
    a === void 0 && (a = t[In] = new Set());
    var e = l + "__bubble";
    a.has(e) || (Rd(t, l, 2, !1), a.add(e));
  }
  function Xc(l, t, a) {
    var e = 0;
    (t && (e |= 4), Rd(a, l, e, t));
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(l) {
    if (!l[On]) {
      ((l[On] = !0),
        Of.forEach(function (a) {
          a !== "selectionchange" && (g1.has(a) || Xc(a, !1, l), Xc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || ((t[On] = !0), Xc("selectionchange", !1, t));
    }
  }
  function Rd(l, t, a, e) {
    switch (so(t)) {
      case 2:
        var u = K1;
        break;
      case 8:
        u = J1;
        break;
      default:
        u = af;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !ci ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function Zc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ka(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Gf(function () {
      var y = n,
        g = ni(a),
        p = [];
      l: {
        var h = ys.get(l);
        if (h !== void 0) {
          var r = Bu,
            D = l;
          switch (l) {
            case "keypress":
              if (Cu(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = dm;
              break;
            case "focusin":
              ((D = "focus"), (r = oi));
              break;
            case "focusout":
              ((D = "blur"), (r = oi));
              break;
            case "beforeblur":
            case "afterblur":
              r = oi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = Io;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = ym;
              break;
            case ss:
            case ds:
            case os:
              r = tm;
              break;
            case ms:
              r = vm;
              break;
            case "scroll":
            case "scrollend":
              r = $o;
              break;
            case "wheel":
              r = gm;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = em;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Vf;
              break;
            case "toggle":
            case "beforetoggle":
              r = bm;
          }
          var H = (t & 4) !== 0,
            cl = !H && (l === "scroll" || l === "scrollend"),
            o = H ? (h !== null ? h + "Capture" : null) : h;
          H = [];
          for (var s = y, m; s !== null; ) {
            var z = s;
            if (
              ((m = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                m === null ||
                o === null ||
                ((z = Re(s, o)), z != null && H.push(yu(s, z, m))),
              cl)
            )
              break;
            s = s.return;
          }
          0 < H.length &&
            ((h = new r(h, D, null, a, g)), p.push({ event: h, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (r = l === "mouseout" || l === "pointerout"),
            h &&
              a !== ui &&
              (D = a.relatedTarget || a.fromElement) &&
              (Ka(D) || D[Va]))
          )
            break l;
          if (
            (r || h) &&
            ((h =
              g.window === g
                ? g
                : (h = g.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            r
              ? ((D = a.relatedTarget || a.toElement),
                (r = y),
                (D = D ? Ka(D) : null),
                D !== null &&
                  ((cl = E(D)),
                  (H = D.tag),
                  D !== cl || (H !== 5 && H !== 27 && H !== 6)) &&
                  (D = null))
              : ((r = null), (D = y)),
            r !== D)
          ) {
            if (
              ((H = Zf),
              (z = "onMouseLeave"),
              (o = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((H = Vf),
                (z = "onPointerLeave"),
                (o = "onPointerEnter"),
                (s = "pointer")),
              (cl = r == null ? h : He(r)),
              (m = D == null ? h : He(D)),
              (h = new H(z, s + "leave", r, a, g)),
              (h.target = cl),
              (h.relatedTarget = m),
              (z = null),
              Ka(g) === y &&
                ((H = new H(o, s + "enter", D, a, g)),
                (H.target = m),
                (H.relatedTarget = cl),
                (z = H)),
              (cl = z),
              r && D)
            )
              t: {
                for (H = S1, o = r, s = D, m = 0, z = o; z; z = H(z)) m++;
                z = 0;
                for (var x = s; x; x = H(x)) z++;
                for (; 0 < m - z; ) ((o = H(o)), m--);
                for (; 0 < z - m; ) ((s = H(s)), z--);
                for (; m--; ) {
                  if (o === s || (s !== null && o === s.alternate)) {
                    H = o;
                    break t;
                  }
                  ((o = H(o)), (s = H(s)));
                }
                H = null;
              }
            else H = null;
            (r !== null && Cd(p, h, r, H, !1),
              D !== null && cl !== null && Cd(p, cl, D, H, !0));
          }
        }
        l: {
          if (
            ((h = y ? He(y) : window),
            (r = h.nodeName && h.nodeName.toLowerCase()),
            r === "select" || (r === "input" && h.type === "file"))
          )
            var F = If;
          else if ($f(h))
            if (Pf) F = Nm;
            else {
              F = Om;
              var U = Mm;
            }
          else
            ((r = h.nodeName),
              !r ||
              r.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? y && ei(y.elementType) && (F = If)
                : (F = Dm));
          if (F && (F = F(l, y))) {
            Ff(p, F, a, g);
            break l;
          }
          (U && U(l, h, y),
            l === "focusout" &&
              y &&
              h.type === "number" &&
              y.memoizedProps.value != null &&
              ai(h, "number", h.value));
        }
        switch (((U = y ? He(y) : window), l)) {
          case "focusin":
            ($f(U) || U.contentEditable === "true") &&
              ((le = U), (gi = y), (Ze = null));
            break;
          case "focusout":
            Ze = gi = le = null;
            break;
          case "mousedown":
            Si = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Si = !1), cs(p, a, g));
            break;
          case "selectionchange":
            if (jm) break;
          case "keydown":
          case "keyup":
            cs(p, a, g);
        }
        var Q;
        if (yi)
          l: {
            switch (l) {
              case "compositionstart":
                var J = "onCompositionStart";
                break l;
              case "compositionend":
                J = "onCompositionEnd";
                break l;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break l;
            }
            J = void 0;
          }
        else
          Pa
            ? kf(l, a) && (J = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (J = "onCompositionStart");
        (J &&
          (Kf &&
            a.locale !== "ko" &&
            (Pa || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && Pa && (Q = Xf())
              : ((la = g),
                (fi = "value" in la ? la.value : la.textContent),
                (Pa = !0))),
          (U = Dn(y, J)),
          0 < U.length &&
            ((J = new Lf(J, l, null, a, g)),
            p.push({ event: J, listeners: U }),
            Q ? (J.data = Q) : ((Q = Wf(a)), Q !== null && (J.data = Q)))),
          (Q = pm ? Am(l, a) : Tm(l, a)) &&
            ((J = Dn(y, "onBeforeInput")),
            0 < J.length &&
              ((U = new Lf("onBeforeInput", "beforeinput", null, a, g)),
              p.push({ event: U, listeners: J }),
              (U.data = Q))),
          h1(p, l, y, a, g));
      }
      Hd(p, t);
    });
  }
  function yu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Dn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Re(l, a)),
          u != null && e.unshift(yu(l, u, n)),
          (u = Re(l, t)),
          u != null && e.push(yu(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function S1(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Cd(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((f = y),
        u
          ? ((y = Re(a, n)), y != null && i.unshift(yu(a, y, f)))
          : u || ((y = Re(a, n)), y != null && i.push(yu(a, y, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var b1 = /\r\n?/g,
    z1 = /\u0000|\uFFFD/g;
  function qd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        b1,
        `
`,
      )
      .replace(z1, "");
  }
  function Bd(l, t) {
    return ((t = qd(t)), qd(l) === t);
  }
  function il(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || $a(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            $a(l, "" + e);
        break;
      case "className":
        ju(l, "class", e);
        break;
      case "tabIndex":
        ju(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ju(l, a, e);
        break;
      case "style":
        Bf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          ju(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Hu("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && il(l, t, "name", u.name, u, null),
                il(l, t, "formEncType", u.formEncType, u, null),
                il(l, t, "formMethod", u.formMethod, u, null),
                il(l, t, "formTarget", u.formTarget, u, null))
              : (il(l, t, "encType", u.encType, u, null),
                il(l, t, "method", u.method, u, null),
                il(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Hu("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = Ht);
        break;
      case "onScroll":
        e != null && V("scroll", l);
        break;
      case "onScrollEnd":
        e != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(v(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Hu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (V("beforetoggle", l), V("toggle", l), Uu(l, "popover", e));
        break;
      case "xlinkActuate":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Uu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = ko.get(a) || a), Uu(l, a, e));
    }
  }
  function Lc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Bf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(v(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? $a(l, e)
          : (typeof e == "number" || typeof e == "bigint") && $a(l, "" + e);
        break;
      case "onScroll":
        e != null && V("scroll", l);
        break;
      case "onScrollEnd":
        e != null && V("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Df.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Ll] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Uu(l, a, e);
          }
    }
  }
  function xl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (V("error", l), V("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  il(l, t, n, i, a, null);
              }
          }
        (u && il(l, t, "srcSet", a.srcSet, a, null),
          e && il(l, t, "src", a.src, a, null));
        return;
      case "input":
        V("invalid", l);
        var c = (n = i = u = null),
          f = null,
          y = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var g = a[e];
            if (g != null)
              switch (e) {
                case "name":
                  u = g;
                  break;
                case "type":
                  i = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  y = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(v(137, t));
                  break;
                default:
                  il(l, t, e, g, a, null);
              }
          }
        Hf(l, n, c, f, y, i, u, !1);
        return;
      case "select":
        (V("invalid", l), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                il(l, t, u, c, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!e),
          t != null ? Wa(l, !!e, t, !1) : a != null && Wa(l, !!e, a, !0));
        return;
      case "textarea":
        (V("invalid", l), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(v(91));
                break;
              default:
                il(l, t, i, c, a, null);
            }
        Cf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) &&
            ((e = a[f]), e != null) &&
            (f === "selected"
              ? (l.selected =
                  e && typeof e != "function" && typeof e != "symbol")
              : il(l, t, f, e, a, null));
        return;
      case "dialog":
        (V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l));
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < mu.length; e++) V(mu[e], l);
        break;
      case "image":
        (V("error", l), V("load", l));
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (V("error", l), V("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && ((e = a[y]), e != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                il(l, t, y, e, a, null);
            }
        return;
      default:
        if (ei(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((e = a[g]), e !== void 0 && Lc(l, t, g, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && il(l, t, c, e, a, null));
  }
  function p1(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          y = null,
          g = null;
        for (r in a) {
          var p = a[r];
          if (a.hasOwnProperty(r) && p != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = p;
              default:
                e.hasOwnProperty(r) || il(l, t, r, null, e, p);
            }
        }
        for (var h in e) {
          var r = e[h];
          if (((p = a[h]), e.hasOwnProperty(h) && (r != null || p != null)))
            switch (h) {
              case "type":
                n = r;
                break;
              case "name":
                u = r;
                break;
              case "checked":
                y = r;
                break;
              case "defaultChecked":
                g = r;
                break;
              case "value":
                i = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(v(137, t));
                break;
              default:
                r !== p && il(l, t, h, r, e, p);
            }
        }
        ti(l, i, c, f, y, g, n, u);
        return;
      case "select":
        r = i = c = h = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = f;
              default:
                e.hasOwnProperty(n) || il(l, t, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && il(l, t, u, n, e, f);
            }
        ((t = c),
          (a = i),
          (e = r),
          h != null
            ? Wa(l, !!a, h, !1)
            : !!e != !!a &&
              (t != null ? Wa(l, !!a, t, !0) : Wa(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        r = h = null;
        for (c in a)
          if (
            ((u = a[c]),
            a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = a[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(v(91));
                break;
              default:
                u !== n && il(l, t, i, u, e, n);
            }
        Rf(l, h, r);
        return;
      case "option":
        for (var D in a)
          ((h = a[D]),
            a.hasOwnProperty(D) &&
              h != null &&
              !e.hasOwnProperty(D) &&
              (D === "selected" ? (l.selected = !1) : il(l, t, D, null, e, h)));
        for (f in e)
          ((h = e[f]),
            (r = a[f]),
            e.hasOwnProperty(f) &&
              h !== r &&
              (h != null || r != null) &&
              (f === "selected"
                ? (l.selected =
                    h && typeof h != "function" && typeof h != "symbol")
                : il(l, t, f, h, e, r)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var H in a)
          ((h = a[H]),
            a.hasOwnProperty(H) &&
              h != null &&
              !e.hasOwnProperty(H) &&
              il(l, t, H, null, e, h));
        for (y in e)
          if (
            ((h = e[y]),
            (r = a[y]),
            e.hasOwnProperty(y) && h !== r && (h != null || r != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(v(137, t));
                break;
              default:
                il(l, t, y, h, e, r);
            }
        return;
      default:
        if (ei(t)) {
          for (var cl in a)
            ((h = a[cl]),
              a.hasOwnProperty(cl) &&
                h !== void 0 &&
                !e.hasOwnProperty(cl) &&
                Lc(l, t, cl, void 0, e, h));
          for (g in e)
            ((h = e[g]),
              (r = a[g]),
              !e.hasOwnProperty(g) ||
                h === r ||
                (h === void 0 && r === void 0) ||
                Lc(l, t, g, h, e, r));
          return;
        }
    }
    for (var o in a)
      ((h = a[o]),
        a.hasOwnProperty(o) &&
          h != null &&
          !e.hasOwnProperty(o) &&
          il(l, t, o, null, e, h));
    for (p in e)
      ((h = e[p]),
        (r = a[p]),
        !e.hasOwnProperty(p) ||
          h === r ||
          (h == null && r == null) ||
          il(l, t, p, h, e, r));
  }
  function Yd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function A1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Yd(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              y = f.startTime;
            if (y > c) break;
            var g = f.transferSize,
              p = f.initiatorType;
            g &&
              Yd(p) &&
              ((f = f.responseEnd), (i += g * (f < c ? 1 : (c - y) / (f - y))));
          }
          if ((--e, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Vc = null,
    Kc = null;
  function Nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Gd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Jc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wc = null;
  function T1() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === wc
        ? !1
        : ((wc = l), !0)
      : ((wc = null), !1);
  }
  var Qd = typeof setTimeout == "function" ? setTimeout : void 0,
    E1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zd = typeof Promise == "function" ? Promise : void 0,
    _1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zd < "u"
          ? function (l) {
              return Zd.resolve(null).then(l).catch(M1);
            }
          : Qd;
  function M1(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ga(l) {
    return l === "head";
  }
  function Ld(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), Oe(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") hu(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), hu(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[xe] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && hu(l.ownerDocument.body);
      a = u;
    } while (a);
    Oe(t);
  }
  function Vd(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (kc(a), Pn(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function O1(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[xe])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = gt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function D1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = gt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Kd(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = gt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $c(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function N1(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function gt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Fc = null;
  function Jd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return gt(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function wd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function kd(l, t, a) {
    switch (((t = Nn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(v(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(v(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function hu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Pn(l);
  }
  var St = new Map(),
    Wd = new Set();
  function Un(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Wt = _.d;
  _.d = { f: U1, r: j1, D: x1, C: H1, L: R1, m: C1, X: B1, S: q1, M: Y1 };
  function U1() {
    var l = Wt.f(),
      t = pn();
    return l || t;
  }
  function j1(l) {
    var t = Ja(l);
    t !== null && t.tag === 5 && t.type === "form" ? m0(t) : Wt.r(l);
  }
  var Ee = typeof document > "u" ? null : document;
  function $d(l, t, a) {
    var e = Ee;
    if (e && typeof t == "string" && t) {
      var u = dt(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Wd.has(u) ||
          (Wd.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            xl(t, "link", l),
            Ml(t),
            e.head.appendChild(t))));
    }
  }
  function x1(l) {
    (Wt.D(l), $d("dns-prefetch", l, null));
  }
  function H1(l, t) {
    (Wt.C(l, t), $d("preconnect", l, t));
  }
  function R1(l, t, a) {
    Wt.L(l, t, a);
    var e = Ee;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + dt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + dt(a.imageSizes) + '"]'))
        : (u += '[href="' + dt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = _e(l);
          break;
        case "script":
          n = Me(l);
      }
      St.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        St.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(vu(n))) ||
          (t === "script" && e.querySelector(ru(n))) ||
          ((t = e.createElement("link")),
          xl(t, "link", l),
          Ml(t),
          e.head.appendChild(t)));
    }
  }
  function C1(l, t) {
    Wt.m(l, t);
    var a = Ee;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + dt(e) + '"][href="' + dt(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Me(l);
      }
      if (
        !St.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        St.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ru(n))) return;
        }
        ((e = a.createElement("link")),
          xl(e, "link", l),
          Ml(e),
          a.head.appendChild(e));
      }
    }
  }
  function q1(l, t, a) {
    Wt.S(l, t, a);
    var e = Ee;
    if (e && l) {
      var u = wa(e).hoistableStyles,
        n = _e(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(vu(n)))) c.loading = 5;
        else {
          ((l = R({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = St.get(n)) && Ic(l, a));
          var f = (i = e.createElement("link"));
          (Ml(f),
            xl(f, "link", l),
            (f._p = new Promise(function (y, g) {
              ((f.onload = y), (f.onerror = g));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            jn(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function B1(l, t) {
    Wt.X(l, t);
    var a = Ee;
    if (a && l) {
      var e = wa(a).hoistableScripts,
        u = Me(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(ru(u))),
        n ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = St.get(u)) && Pc(l, t),
          (n = a.createElement("script")),
          Ml(n),
          xl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Y1(l, t) {
    Wt.M(l, t);
    var a = Ee;
    if (a && l) {
      var e = wa(a).hoistableScripts,
        u = Me(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(ru(u))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = St.get(u)) && Pc(l, t),
          (n = a.createElement("script")),
          Ml(n),
          xl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Fd(l, t, a, e) {
    var u = (u = Z.current) ? Un(u) : null;
    if (!u) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = _e(a.href)),
            (a = wa(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = _e(a.href);
          var n = wa(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(vu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              St.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                St.set(l, a),
                n || G1(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(v(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Me(a)),
              (a = wa(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(v(444, l));
    }
  }
  function _e(l) {
    return 'href="' + dt(l) + '"';
  }
  function vu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Id(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function G1(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        xl(t, "link", a),
        Ml(t),
        l.head.appendChild(t));
  }
  function Me(l) {
    return '[src="' + dt(l) + '"]';
  }
  function ru(l) {
    return "script[async]" + l;
  }
  function Pd(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + dt(a.href) + '"]');
          if (e) return ((t.instance = e), Ml(e), e);
          var u = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Ml(e),
            xl(e, "style", u),
            jn(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = _e(a.href);
          var n = l.querySelector(vu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Ml(n), n);
          ((e = Id(a)),
            (u = St.get(u)) && Ic(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Ml(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            xl(n, "link", e),
            (t.state.loading |= 4),
            jn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Me(a.src)),
            (u = l.querySelector(ru(n)))
              ? ((t.instance = u), Ml(u), u)
              : ((e = a),
                (u = St.get(n)) && ((e = R({}, a)), Pc(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Ml(u),
                xl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), jn(e, a.precedence, l));
    return t.instance;
  }
  function jn(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Ic(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Pc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var xn = null;
  function lo(l, t, a) {
    if (xn === null) {
      var e = new Map(),
        u = (xn = new Map());
      u.set(a, e);
    } else ((u = xn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[xe] ||
          n[Dl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function to(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function X1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ao(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Q1(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = _e(e.href),
          n = t.querySelector(vu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Hn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Ml(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = Id(e)),
          (u = St.get(u)) && Ic(e, u),
          (n = n.createElement("link")),
          Ml(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          xl(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Hn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var lf = 0;
  function Z1(l, t) {
    return (
      l.stylesheets && l.count === 0 && Cn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && Cn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && lf === 0 && (lf = 62500 * A1());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Cn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > lf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Hn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Cn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Rn = null;
  function Cn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Rn = new Map()),
        t.forEach(L1, l),
        (Rn = null),
        Hn.call(l)));
  }
  function L1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Rn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Rn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = Hn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var gu = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0,
  };
  function V1(l, t, a, e, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wn(0)),
      (this.hiddenUpdates = Wn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function eo(l, t, a, e, u, n, i, c, f, y, g, p) {
    return (
      (l = new V1(l, t, a, i, f, y, g, p, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = at(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Hi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      Bi(n),
      l
    );
  }
  function uo(l) {
    return l ? ((l = ee), l) : ee;
  }
  function no(l, t, a, e, u, n) {
    ((u = uo(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ia(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = ca(l, e, t)),
      a !== null && (Wl(a, l, t), We(a, l, t)));
  }
  function io(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function tf(l, t) {
    (io(l, t), (l = l.alternate) && io(l, t));
  }
  function co(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ua(l, 67108864);
      (t !== null && Wl(t, l, 67108864), tf(l, 67108864));
    }
  }
  function fo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ct();
      t = $n(t);
      var a = Ua(l, t);
      (a !== null && Wl(a, l, t), tf(l, t));
    }
  }
  var qn = !0;
  function K1(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      ((_.p = 2), af(l, t, a, e));
    } finally {
      ((_.p = n), (b.T = u));
    }
  }
  function J1(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      ((_.p = 8), af(l, t, a, e));
    } finally {
      ((_.p = n), (b.T = u));
    }
  }
  function af(l, t, a, e) {
    if (qn) {
      var u = ef(e);
      if (u === null) (Zc(l, t, e, Bn, a), oo(l, e));
      else if (k1(u, l, t, a, e)) e.stopPropagation();
      else if ((oo(l, e), t & 4 && -1 < w1.indexOf(l))) {
        for (; u !== null; ) {
          var n = Ja(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = _a(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - lt(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (Nt(n), (P & 6) === 0 && ((bn = Il() + 500), ou(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Ua(n, 2)), c !== null && Wl(c, n, 2), pn(), tf(n, 2));
            }
          if (((n = ef(e)), n === null && Zc(l, t, e, Bn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Zc(l, t, e, null, a);
    }
  }
  function ef(l) {
    return ((l = ni(l)), uf(l));
  }
  var Bn = null;
  function uf(l) {
    if (((Bn = null), (l = Ka(l)), l !== null)) {
      var t = E(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = dl(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = vl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Bn = l), null);
  }
  function so(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (xo()) {
          case gf:
            return 2;
          case Sf:
            return 8;
          case _u:
          case Ho:
            return 32;
          case bf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nf = !1,
    Sa = null,
    ba = null,
    za = null,
    Su = new Map(),
    bu = new Map(),
    pa = [],
    w1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function oo(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        za = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bu.delete(t.pointerId);
    }
  }
  function zu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Ja(t)), t !== null && co(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function k1(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((Sa = zu(Sa, l, t, a, e, u)), !0);
      case "dragenter":
        return ((ba = zu(ba, l, t, a, e, u)), !0);
      case "mouseover":
        return ((za = zu(za, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (Su.set(n, zu(Su.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          bu.set(n, zu(bu.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function mo(l) {
    var t = Ka(l.target);
    if (t !== null) {
      var a = E(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = dl(a)), t !== null)) {
            ((l.blockedOn = t),
              _f(l.priority, function () {
                fo(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = vl(a)), t !== null)) {
            ((l.blockedOn = t),
              _f(l.priority, function () {
                fo(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ef(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((ui = e), a.target.dispatchEvent(e), (ui = null));
      } else return ((t = Ja(a)), t !== null && co(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function yo(l, t, a) {
    Yn(l) && a.delete(t);
  }
  function W1() {
    ((nf = !1),
      Sa !== null && Yn(Sa) && (Sa = null),
      ba !== null && Yn(ba) && (ba = null),
      za !== null && Yn(za) && (za = null),
      Su.forEach(yo),
      bu.forEach(yo));
  }
  function Gn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      nf ||
        ((nf = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, W1)));
  }
  var Xn = null;
  function ho(l) {
    Xn !== l &&
      ((Xn = l),
      O.unstable_scheduleCallback(O.unstable_NormalPriority, function () {
        Xn === l && (Xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (uf(e || a) === null) continue;
            break;
          }
          var n = Ja(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ec(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Oe(l) {
    function t(f) {
      return Gn(f, l);
    }
    (Sa !== null && Gn(Sa, l),
      ba !== null && Gn(ba, l),
      za !== null && Gn(za, l),
      Su.forEach(t),
      bu.forEach(t));
    for (var a = 0; a < pa.length; a++) {
      var e = pa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < pa.length && ((a = pa[0]), a.blockedOn === null); )
      (mo(a), a.blockedOn === null && pa.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[Ll] || null;
        if (typeof n == "function") i || ho(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Ll] || null))) c = i.formAction;
            else if (uf(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            ho(a));
        }
      }
  }
  function vo() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function cf(l) {
    this._internalRoot = l;
  }
  ((Qn.prototype.render = cf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var a = t.current,
        e = ct();
      no(a, e, l, t, null, null);
    }),
    (Qn.prototype.unmount = cf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (no(l.current, 2, null, l, null, null), pn(), (t[Va] = null));
        }
      }));
  function Qn(l) {
    this._internalRoot = l;
  }
  Qn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Ef();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < pa.length && t !== 0 && t < pa[a].priority; a++);
      (pa.splice(a, 0, l), a === 0 && mo(l));
    }
  };
  var ro = W.version;
  if (ro !== "19.2.7") throw Error(v(527, ro, "19.2.7"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = T(t)),
      (l = l !== null ? $(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var $1 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.7",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zn.isDisabled && Zn.supportsFiber)
      try {
        ((Ne = Zn.inject($1)), (Pl = Zn));
      } catch {}
  }
  return (
    (Au.createRoot = function (l, t) {
      if (!B(l)) throw Error(v(299));
      var a = !1,
        e = "",
        u = A0,
        n = T0,
        i = E0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = eo(l, 1, !1, null, null, a, e, null, u, n, i, vo)),
        (l[Va] = t.current),
        Qc(l),
        new cf(t)
      );
    }),
    (Au.hydrateRoot = function (l, t, a) {
      if (!B(l)) throw Error(v(299));
      var e = !1,
        u = "",
        n = A0,
        i = T0,
        c = E0,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = eo(l, 1, !0, t, a ?? null, e, u, f, n, i, c, vo)),
        (t.context = uo(null)),
        (a = t.current),
        (e = ct()),
        (e = $n(e)),
        (u = ia(e)),
        (u.callback = null),
        ca(a, u, e),
        (a = e),
        (t.current.lanes = a),
        je(t, a),
        Nt(t),
        (l[Va] = t.current),
        Qc(l),
        new Qn(t)
      );
    }),
    (Au.version = "19.2.7"),
    Au
  );
}
var Mo;
function iy() {
  if (Mo) return df.exports;
  Mo = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (W) {
        console.error(W);
      }
  }
  return (O(), (df.exports = ny()), df.exports);
}
var cy = iy();
const fy = (O) => O.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Do = (...O) =>
    O.filter((W, X, v) => !!W && W.trim() !== "" && v.indexOf(W) === X)
      .join(" ")
      .trim();
var sy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const dy = $t.forwardRef(
  (
    {
      color: O = "currentColor",
      size: W = 24,
      strokeWidth: X = 2,
      absoluteStrokeWidth: v,
      className: B = "",
      children: E,
      iconNode: dl,
      ...vl
    },
    j,
  ) =>
    $t.createElement(
      "svg",
      {
        ref: j,
        ...sy,
        width: W,
        height: W,
        stroke: O,
        strokeWidth: v ? (Number(X) * 24) / Number(W) : X,
        className: Do("lucide", B),
        ...vl,
      },
      [
        ...dl.map(([T, $]) => $t.createElement(T, $)),
        ...(Array.isArray(E) ? E : [E]),
      ],
    ),
);
const Yl = (O, W) => {
  const X = $t.forwardRef(({ className: v, ...B }, E) =>
    $t.createElement(dy, {
      ref: E,
      iconNode: W,
      className: Do(`lucide-${fy(O)}`, v),
      ...B,
    }),
  );
  return ((X.displayName = `${O}`), X);
};
const oy = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Tu = Yl("ArrowUpRight", oy);
const my = [
    ["path", { d: "M12 12h.01", key: "1mp3jc" }],
    ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
    ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  yy = Yl("BriefcaseBusiness", my);
const hy = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  vy = Yl("Download", hy);
const ry = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  gy = Yl("Github", ry);
const Sy = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  by = Yl("Instagram", Sy);
const zy = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  py = Yl("Linkedin", zy);
const Ay = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  Oo = Yl("Mail", Ay);
const Ty = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Ey = Yl("MapPin", Ty);
const _y = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  My = Yl("Menu", _y);
const Oy = [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ],
  Dy = Yl("Moon", Oy);
const Ny = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  Uy = Yl("Phone", Ny);
const jy = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  xy = Yl("Sparkles", jy);
const Hy = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  Ry = Yl("Sun", Hy);
const Cy = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  qy = Yl("Twitter", Cy);
const By = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Yy = Yl("X", By),
  el = {
    name: "Zakaria Bendida",
    role: "Full-Stack Developer",
    location: "Algeria",
    email: "hello@example.com",
    phone: "+213 000 000 000",
    photo: "/zaki.png",
    photoAlt: "Portrait of Zakaria Bendida",
    availability: "Information Systems Engineering student",
    intro:
      "I build complete web applications from clean responsive interfaces to back-end logic, databases, validation, and deployment.",
    summary:
      "I am Zakaria Bendida, a 5th-year computer science student and information systems engineer in training. I build full-stack systems with React, Next.js, Node.js, databases, real-time communication, GIS tools, and practical UI design with Figma.",
    socials: {
      github: "https://github.com/Zakaria-Bendida",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      x: "https://x.com/",
      cv: "/CV_Bendida_FullStack_DeepNavy.pdf",
    },
    stats: [
      { value: "5th", label: "University year" },
      { value: "3+", label: "Full-stack projects" },
      { value: "GIS", label: "Master project" },
    ],
    highlights: [
      {
        title: "Education",
        text: "5th-year computer science student focused on information systems engineering.",
      },
      {
        title: "Courses",
        text: "Completed practical courses by Jonas Schmedtmann in React, JavaScript, Node.js, HTML, and CSS.",
      },
      {
        title: "Back-end & Databases",
        text: "Comfortable with Node.js, PHP, MySQL, MongoDB, Java, relational databases, and REST-style application logic.",
      },
      {
        title: "Design & Modeling",
        text: "Studied database design, relational database concepts, and interface design with Figma.",
      },
      {
        title: "Algorithms & Systems",
        text: "Studied algorithms, operating systems, graph theory, and graph algorithms such as A*, Dijkstra, and related path-finding methods.",
      },
      {
        title: "Networks & Real-time",
        text: "Practiced client-server networking exercises, server/client communication, and real-time concepts with Socket.IO.",
      },
    ],
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express",
      "PHP",
      "Java",
      "MySQL",
      "PostgreSQL",
      "PostGIS",
      "pgRouting",
      "Supabase",
      "MongoDB",
      "Relational Databases",
      "Database Design",
      "HTML",
      "CSS",
      "Figma",
      "Vite",
      "Form Validation",
      "Algorithms",
      "Graph Theory",
      "A*",
      "Dijkstra",
      "Operating Systems",
      "Networking",
      "Client/Server",
      "Socket.IO",
      "OpenLayers",
      "React Native",
      "Expo",
      "GitHub",
      "Responsive Design",
      "Git",
    ],
    services: [
      {
        title: "Full-Stack Web Apps",
        text: "Complete applications with React interfaces, back-end logic, database integration, and clean project structure.",
      },
      {
        title: "Admin Dashboards",
        text: "Management systems with roles, tables, forms, validation, and workflows for real business operations.",
      },
      {
        title: "Forms & Validation",
        text: "Smart forms with strong input rules, such as blocking numbers in name fields and preventing invalid characters.",
      },
    ],
    projects: [
      {
        title: "Fast Emergency Dispatch Algeria (FEDZ)",
        type: "Master ISI Final Project - GIS Ambulance Dispatch Platform",
        text: "Real-time web and mobile ambulance dispatch platform for Sidi Bel Abbes. It combines live GPS tracking, blocked-road management, and intelligent routing with fast and fragile-patient comfort modes.",
        tags: [
          "PostgreSQL",
          "PostGIS",
          "pgRouting",
          "Node.js",
          "Express",
          "Socket.IO",
          "React",
          "OpenLayers",
          "React Native",
          "Expo",
        ],
        featured: !0,
        image: "/projects/fedz.png",
        imageAlt:
          "FEDZ dashboard with OpenLayers map and live ambulance tracking",
        details: [
          "Dijkstra routing with hourly congestion factors and traffic zones",
          "Route calculation under 200 ms on 9,000 real OSM road segments",
          "WebSocket GPS updates every 5 seconds",
          "Two medical modes: vital emergency and fragile patient comfort",
          "Deployed on Railway and Neon.tech",
        ],
        note: "Master ISI final-year project, Universite Djillali Liabes, 2026.",
      },
      {
        title: "Hospital Management System",
        type: "Full-Stack Application",
        text: "A deployed management system designed to organize hospital workflows, records, and administrative operations.",
        tags: ["React", "Node.js", "Database"],
        image: "",
        imageAlt: "Hospital management system dashboard screenshot",
      },
      {
        title: "Omra Registration Form",
        type: "Validated Web Form",
        text: "A structured form with input validation rules, including name fields that reject numbers and special characters.",
        tags: ["JavaScript", "Validation", "UX"],
        image: "",
        imageAlt: "Omra registration form screenshot",
      },
      {
        title: "Restaurant Management System",
        type: "License Project",
        text: "A three-sided system for admin, customers, and kitchen service with separate order boards for on-site requests and commands.",
        tags: ["Admin", "Kitchen", "Orders"],
        image: "",
        imageAlt: "Restaurant management system dashboard screenshot",
      },
    ],
    process: [
      "Understand the business rules and user roles",
      "Design the database, pages, forms, and workflows",
      "Build the front end, back end, and validation logic",
      "Test, deploy, and polish the final experience",
    ],
  },
  Gy = ["About", "Work", "Services", "Process", "Contact"];
function Xy() {
  const [O, W] = $t.useState(!1),
    [X, v] = $t.useState("light");
  $t.useEffect(() => {
    document.documentElement.dataset.theme = X;
  }, [X]);
  const B = () => W(!1);
  return S.jsxs("div", {
    className: "app-shell",
    children: [
      S.jsxs("header", {
        className: "site-header",
        children: [
          S.jsxs("a", {
            className: "brand",
            href: "#top",
            "aria-label": `${el.name} home`,
            children: [
              S.jsx("span", {
                className: "brand-avatar",
                children: S.jsx("img", { src: el.photo, alt: el.photoAlt }),
              }),
              el.name,
            ],
          }),
          S.jsx("nav", {
            className: O ? "nav nav-open" : "nav",
            "aria-label": "Main navigation",
            children: Gy.map((E) =>
              S.jsx(
                "a",
                { href: `#${E.toLowerCase()}`, onClick: B, children: E },
                E,
              ),
            ),
          }),
          S.jsxs("div", {
            className: "header-actions",
            children: [
              S.jsx("button", {
                className: "icon-button",
                type: "button",
                onClick: () => v(X === "light" ? "dark" : "light"),
                "aria-label": "Toggle color theme",
                title: "Toggle color theme",
                children:
                  X === "light"
                    ? S.jsx(Dy, { size: 18 })
                    : S.jsx(Ry, { size: 18 }),
              }),
              S.jsx("button", {
                className: "icon-button menu-button",
                type: "button",
                onClick: () => W((E) => !E),
                "aria-label": "Toggle menu",
                title: "Toggle menu",
                children: O ? S.jsx(Yy, { size: 20 }) : S.jsx(My, { size: 20 }),
              }),
            ],
          }),
        ],
      }),
      S.jsxs("main", {
        id: "top",
        children: [
          S.jsx("section", {
            className: "hero-section",
            children: S.jsxs("div", {
              className: "hero-grid",
              children: [
                S.jsxs("div", {
                  className: "hero-copy",
                  children: [
                    S.jsxs("p", {
                      className: "eyebrow",
                      children: [
                        S.jsx(Ey, { size: 16 }),
                        el.location,
                        " - ",
                        el.availability,
                      ],
                    }),
                    S.jsxs("h1", {
                      children: [
                        el.role,
                        " building practical systems with clean interfaces and reliable logic.",
                      ],
                    }),
                    S.jsx("p", { className: "hero-intro", children: el.intro }),
                    S.jsxs("div", {
                      className: "hero-actions",
                      children: [
                        S.jsxs("a", {
                          className: "primary-button",
                          href: "#contact",
                          children: [S.jsx(Oo, { size: 18 }), "Contact me"],
                        }),
                        S.jsxs("a", {
                          className: "secondary-button",
                          href: el.socials.cv,
                          download: "CV_Bendida_FullStack_DeepNavy.pdf",
                          children: [S.jsx(vy, { size: 18 }), "Download CV"],
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className: "profile-panel",
                  "aria-label": "Portfolio visual summary",
                  children: [
                    S.jsxs("div", {
                      className: "portrait-block",
                      children: [
                        S.jsx("div", {
                          className: "portrait-media",
                          children: S.jsx("img", {
                            src: el.photo,
                            alt: el.photoAlt,
                          }),
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("p", { children: el.name }),
                            S.jsx("span", { children: el.role }),
                          ],
                        }),
                      ],
                    }),
                    S.jsx("div", {
                      className: "signal-grid",
                      children: el.stats.map((E) =>
                        S.jsxs(
                          "div",
                          {
                            className: "stat-tile",
                            children: [
                              S.jsx("strong", { children: E.value }),
                              S.jsx("span", { children: E.label }),
                            ],
                          },
                          E.label,
                        ),
                      ),
                    }),
                    S.jsxs("div", {
                      className: "code-preview",
                      children: [
                        S.jsx("span", { children: "const portfolio = {" }),
                        S.jsx("span", { children: '  design: "clean",' }),
                        S.jsx("span", { children: '  stack: "full-stack",' }),
                        S.jsx("span", { children: '  status: "deployed"' }),
                        S.jsx("span", { children: "};" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          S.jsxs("section", {
            className: "section compact-section",
            id: "about",
            children: [
              S.jsxs("div", {
                className: "section-grid",
                children: [
                  S.jsxs("div", {
                    children: [
                      S.jsx("p", {
                        className: "section-kicker",
                        children: "About",
                      }),
                      S.jsx("h2", {
                        children:
                          "Full-stack training with a strong information systems mindset.",
                      }),
                    ],
                  }),
                  S.jsx("p", {
                    className: "section-copy",
                    children: el.summary,
                  }),
                ],
              }),
              S.jsx("div", {
                className: "highlight-grid",
                children: el.highlights.map((E) =>
                  S.jsxs(
                    "article",
                    {
                      className: "highlight-card",
                      children: [
                        S.jsx("h3", { children: E.title }),
                        S.jsx("p", { children: E.text }),
                      ],
                    },
                    E.title,
                  ),
                ),
              }),
              S.jsx("div", {
                className: "skill-list",
                "aria-label": "Skills",
                children: el.skills.map((E) =>
                  S.jsx("span", { children: E }, E),
                ),
              }),
            ],
          }),
          S.jsxs("section", {
            className: "section band",
            id: "work",
            children: [
              S.jsxs("div", {
                className: "section-heading",
                children: [
                  S.jsx("p", {
                    className: "section-kicker",
                    children: "Selected Work",
                  }),
                  S.jsx("h2", {
                    children:
                      "Projects built around real roles, rules, and workflows.",
                  }),
                ],
              }),
              S.jsx("div", {
                className: "project-grid",
                children: el.projects.map((E, dl) =>
                  S.jsxs(
                    "article",
                    {
                      className: E.featured
                        ? "project-card project-featured"
                        : "project-card",
                      children: [
                        S.jsxs("div", {
                          className: "project-visual",
                          children: [
                            S.jsxs("div", {
                              className: "project-visual-top",
                              children: [
                                S.jsxs("span", { children: ["0", dl + 1] }),
                                S.jsx(yy, { size: 26 }),
                              ],
                            }),
                            S.jsx("div", {
                              className: "project-image-frame",
                              children: E.image
                                ? S.jsx("img", {
                                    src: E.image,
                                    alt: E.imageAlt,
                                  })
                                : S.jsxs("div", {
                                    className: "project-image-placeholder",
                                    "aria-hidden": "true",
                                    children: [
                                      S.jsx("span", {}),
                                      S.jsx("span", {}),
                                      S.jsx("span", {}),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        S.jsxs("div", {
                          className: "project-meta",
                          children: [
                            S.jsx("p", { children: E.type }),
                            S.jsx("h3", { children: E.title }),
                            S.jsx("span", { children: E.text }),
                            E.details
                              ? S.jsx("ul", {
                                  className: "project-details",
                                  children: E.details.map((vl) =>
                                    S.jsx("li", { children: vl }, vl),
                                  ),
                                })
                              : null,
                            E.note
                              ? S.jsx("strong", {
                                  className: "project-note",
                                  children: E.note,
                                })
                              : null,
                            E.image
                              ? S.jsxs("a", {
                                  className: "project-button",
                                  href: E.image,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: [
                                    "Voir le projet",
                                    S.jsx(Tu, { size: 16 }),
                                  ],
                                })
                              : null,
                            S.jsx("div", {
                              className: "tag-row",
                              children: E.tags.map((vl) =>
                                S.jsx("small", { children: vl }, vl),
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    E.title,
                  ),
                ),
              }),
            ],
          }),
          S.jsxs("section", {
            className: "section",
            id: "services",
            children: [
              S.jsxs("div", {
                className: "section-heading",
                children: [
                  S.jsx("p", {
                    className: "section-kicker",
                    children: "Services",
                  }),
                  S.jsx("h2", { children: "What I can build." }),
                ],
              }),
              S.jsx("div", {
                className: "service-grid",
                children: el.services.map((E) =>
                  S.jsxs(
                    "article",
                    {
                      className: "service-card",
                      children: [
                        S.jsx(xy, { size: 22 }),
                        S.jsx("h3", { children: E.title }),
                        S.jsx("p", { children: E.text }),
                      ],
                    },
                    E.title,
                  ),
                ),
              }),
            ],
          }),
          S.jsxs("section", {
            className: "section split-section",
            id: "process",
            children: [
              S.jsxs("div", {
                children: [
                  S.jsx("p", {
                    className: "section-kicker",
                    children: "Process",
                  }),
                  S.jsx("h2", {
                    children: "A simple workflow from idea to deployed system.",
                  }),
                ],
              }),
              S.jsx("ol", {
                className: "process-list",
                children: el.process.map((E) =>
                  S.jsx("li", { children: E }, E),
                ),
              }),
            ],
          }),
          S.jsxs("section", {
            className: "contact-section",
            id: "contact",
            children: [
              S.jsxs("div", {
                className: "contact-copy",
                children: [
                  S.jsx("p", {
                    className: "section-kicker",
                    children: "Contact",
                  }),
                  S.jsx("h2", {
                    children: "Have a full-stack project in mind?",
                  }),
                  S.jsx("p", {
                    children:
                      "Send a message and I'll get back to you with a clear next step, scope, and timeline.",
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "contact-actions",
                children: [
                  S.jsxs("a", {
                    href: `mailto:${el.email}`,
                    className: "contact-link",
                    children: [S.jsx(Oo, { size: 20 }), el.email],
                  }),
                  S.jsxs("a", {
                    href: `tel:${el.phone.replaceAll(" ", "")}`,
                    className: "contact-link",
                    children: [S.jsx(Uy, { size: 20 }), el.phone],
                  }),
                  S.jsxs("a", {
                    href: el.socials.github,
                    className: "contact-link",
                    children: [
                      S.jsx(gy, { size: 20 }),
                      "GitHub",
                      S.jsx(Tu, { size: 16 }),
                    ],
                  }),
                  S.jsxs("a", {
                    href: el.socials.linkedin,
                    className: "contact-link",
                    children: [
                      S.jsx(py, { size: 20 }),
                      "LinkedIn",
                      S.jsx(Tu, { size: 16 }),
                    ],
                  }),
                  S.jsxs("a", {
                    href: el.socials.instagram,
                    className: "contact-link",
                    children: [
                      S.jsx(by, { size: 20 }),
                      "Instagram",
                      S.jsx(Tu, { size: 16 }),
                    ],
                  }),
                  S.jsxs("a", {
                    href: el.socials.x,
                    className: "contact-link",
                    children: [
                      S.jsx(qy, { size: 20 }),
                      "X / Twitter",
                      S.jsx(Tu, { size: 16 }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      S.jsxs("footer", {
        className: "footer",
        children: [
          S.jsxs("span", {
            children: [
              "Copyright ",
              new Date().getFullYear(),
              " ",
              el.name,
              ". All rights reserved.",
            ],
          }),
          S.jsx("a", { href: "#top", children: "Back to top" }),
        ],
      }),
    ],
  });
}
cy.createRoot(document.getElementById("root")).render(
  S.jsx($t.StrictMode, { children: S.jsx(Xy, {}) }),
);
