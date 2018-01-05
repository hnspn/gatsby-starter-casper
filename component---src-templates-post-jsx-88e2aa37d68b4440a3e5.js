webpackJsonp([0xc1d74b0851a0], {
  240: function(e, t, n) {
    (function(t) {
      "use strict";
      function r(e, t) {
        if (e === t) return 0;
        for (
          var n = e.length, r = t.length, o = 0, a = Math.min(n, r);
          o < a;
          ++o
        )
          if (e[o] !== t[o]) {
            (n = e[o]), (r = t[o]);
            break;
          }
        return n < r ? -1 : r < n ? 1 : 0;
      }
      function o(e) {
        return t.Buffer && "function" == typeof t.Buffer.isBuffer
          ? t.Buffer.isBuffer(e)
          : !(null == e || !e._isBuffer);
      }
      function a(e) {
        return Object.prototype.toString.call(e);
      }
      function i(e) {
        return (
          !o(e) &&
          ("function" == typeof t.ArrayBuffer &&
            ("function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : !!e &&
                (e instanceof DataView ||
                  !!(e.buffer && e.buffer instanceof ArrayBuffer))))
        );
      }
      function c(e) {
        if (v.isFunction(e)) {
          if (S) return e.name;
          var t = e.toString(),
            n = t.match(O);
          return n && n[1];
        }
      }
      function u(e, t) {
        return "string" == typeof e ? (e.length < t ? e : e.slice(0, t)) : e;
      }
      function l(e) {
        if (S || !v.isFunction(e)) return v.inspect(e);
        var t = c(e),
          n = t ? ": " + t : "";
        return "[Function" + n + "]";
      }
      function s(e) {
        return (
          u(l(e.actual), 128) + " " + e.operator + " " + u(l(e.expected), 128)
        );
      }
      function f(e, t, n, r, o) {
        throw new _.AssertionError({
          message: n,
          actual: e,
          expected: t,
          operator: r,
          stackStartFunction: o
        });
      }
      function d(e, t) {
        e || f(e, !0, t, "==", _.ok);
      }
      function p(e, t, n, c) {
        if (e === t) return !0;
        if (o(e) && o(t)) return 0 === r(e, t);
        if (v.isDate(e) && v.isDate(t)) return e.getTime() === t.getTime();
        if (v.isRegExp(e) && v.isRegExp(t))
          return (
            e.source === t.source &&
            e.global === t.global &&
            e.multiline === t.multiline &&
            e.lastIndex === t.lastIndex &&
            e.ignoreCase === t.ignoreCase
          );
        if (
          (null !== e && "object" == typeof e) ||
          (null !== t && "object" == typeof t)
        ) {
          if (
            i(e) &&
            i(t) &&
            a(e) === a(t) &&
            !(e instanceof Float32Array || e instanceof Float64Array)
          )
            return 0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
          if (o(e) !== o(t)) return !1;
          c = c || { actual: [], expected: [] };
          var u = c.actual.indexOf(e);
          return (
            (u !== -1 && u === c.expected.indexOf(t)) ||
            (c.actual.push(e), c.expected.push(t), m(e, t, n, c))
          );
        }
        return n ? e === t : e == t;
      }
      function h(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e);
      }
      function m(e, t, n, r) {
        if (null === e || void 0 === e || null === t || void 0 === t) return !1;
        if (v.isPrimitive(e) || v.isPrimitive(t)) return e === t;
        if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
          return !1;
        var o = h(e),
          a = h(t);
        if ((o && !a) || (!o && a)) return !1;
        if (o) return (e = C.call(e)), (t = C.call(t)), p(e, t, n);
        var i,
          c,
          u = j(e),
          l = j(t);
        if (u.length !== l.length) return !1;
        for (u.sort(), l.sort(), c = u.length - 1; c >= 0; c--)
          if (u[c] !== l[c]) return !1;
        for (c = u.length - 1; c >= 0; c--)
          if (((i = u[c]), !p(e[i], t[i], n, r))) return !1;
        return !0;
      }
      function g(e, t, n) {
        p(e, t, !0) && f(e, t, n, "notDeepStrictEqual", g);
      }
      function y(e, t) {
        if (!e || !t) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(t))
          return t.test(e);
        try {
          if (e instanceof t) return !0;
        } catch (e) {}
        return !Error.isPrototypeOf(t) && t.call({}, e) === !0;
      }
      function b(e) {
        var t;
        try {
          e();
        } catch (e) {
          t = e;
        }
        return t;
      }
      function w(e, t, n, r) {
        var o;
        if ("function" != typeof t)
          throw new TypeError('"block" argument must be a function');
        "string" == typeof n && ((r = n), (n = null)),
          (o = b(t)),
          (r =
            (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : ".")),
          e && !o && f(o, n, "Missing expected exception" + r);
        var a = "string" == typeof r,
          i = !e && v.isError(o),
          c = !e && o && !n;
        if (
          (((i && a && y(o, n)) || c) && f(o, n, "Got unwanted exception" + r),
          (e && o && n && !y(o, n)) || (!e && o))
        )
          throw o;
      }
      var v = n(604),
        E = Object.prototype.hasOwnProperty,
        C = Array.prototype.slice,
        S = (function() {
          return "foo" === function() {}.name;
        })(),
        _ = (e.exports = d),
        O = /\s*function\s+([^\(\s]*)\s*/;
      (_.AssertionError = function(e) {
        (this.name = "AssertionError"),
          (this.actual = e.actual),
          (this.expected = e.expected),
          (this.operator = e.operator),
          e.message
            ? ((this.message = e.message), (this.generatedMessage = !1))
            : ((this.message = s(this)), (this.generatedMessage = !0));
        var t = e.stackStartFunction || f;
        if (Error.captureStackTrace) Error.captureStackTrace(this, t);
        else {
          var n = new Error();
          if (n.stack) {
            var r = n.stack,
              o = c(t),
              a = r.indexOf("\n" + o);
            if (a >= 0) {
              var i = r.indexOf("\n", a + 1);
              r = r.substring(i + 1);
            }
            this.stack = r;
          }
        }
      }),
        v.inherits(_.AssertionError, Error),
        (_.fail = f),
        (_.ok = d),
        (_.equal = function(e, t, n) {
          e != t && f(e, t, n, "==", _.equal);
        }),
        (_.notEqual = function(e, t, n) {
          e == t && f(e, t, n, "!=", _.notEqual);
        }),
        (_.deepEqual = function(e, t, n) {
          p(e, t, !1) || f(e, t, n, "deepEqual", _.deepEqual);
        }),
        (_.deepStrictEqual = function(e, t, n) {
          p(e, t, !0) || f(e, t, n, "deepStrictEqual", _.deepStrictEqual);
        }),
        (_.notDeepEqual = function(e, t, n) {
          p(e, t, !1) && f(e, t, n, "notDeepEqual", _.notDeepEqual);
        }),
        (_.notDeepStrictEqual = g),
        (_.strictEqual = function(e, t, n) {
          e !== t && f(e, t, n, "===", _.strictEqual);
        }),
        (_.notStrictEqual = function(e, t, n) {
          e === t && f(e, t, n, "!==", _.notStrictEqual);
        }),
        (_.throws = function(e, t, n) {
          w(!0, e, t, n);
        }),
        (_.doesNotThrow = function(e, t, n) {
          w(!1, e, t, n);
        }),
        (_.ifError = function(e) {
          if (e) throw e;
        });
      var j =
        Object.keys ||
        function(e) {
          var t = [];
          for (var n in e) E.call(e, n) && t.push(n);
          return t;
        };
    }.call(
      t,
      (function() {
        return this;
      })()
    ));
  },
  337: function(e, t, n) {
    (function(r) {
      function o() {
        return (
          !(
            "undefined" == typeof window ||
            !window.process ||
            "renderer" !== window.process.type
          ) ||
          (("undefined" != typeof document &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)))
        );
      }
      function a(e) {
        var n = this.useColors;
        if (
          ((e[0] =
            (n ? "%c" : "") +
            this.namespace +
            (n ? " %c" : " ") +
            e[0] +
            (n ? "%c " : " ") +
            "+" +
            t.humanize(this.diff)),
          n)
        ) {
          var r = "color: " + this.color;
          e.splice(1, 0, r, "color: inherit");
          var o = 0,
            a = 0;
          e[0].replace(/%[a-zA-Z%]/g, function(e) {
            "%%" !== e && (o++, "%c" === e && (a = o));
          }),
            e.splice(a, 0, r);
        }
      }
      function i() {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }
      function c(e) {
        try {
          null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
        } catch (e) {}
      }
      function u() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        return (
          !e &&
            "undefined" != typeof r &&
            "env" in r &&
            (e = {
              NODE_ENV: "production",
              PUBLIC_DIR: "/Users/hays/haysclark/gatsby-starter-casper/public"
            }.DEBUG),
          e
        );
      }
      function l() {
        try {
          return window.localStorage;
        } catch (e) {}
      }
      (t = e.exports = n(338)),
        (t.log = i),
        (t.formatArgs = a),
        (t.save = c),
        (t.load = u),
        (t.useColors = o),
        (t.storage =
          "undefined" != typeof chrome && "undefined" != typeof chrome.storage
            ? chrome.storage.local
            : l()),
        (t.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson"
        ]),
        (t.formatters.j = function(e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        }),
        t.enable(u());
    }.call(t, n(34)));
  },
  338: function(e, t, n) {
    function r(e) {
      var n,
        r = 0;
      for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
      return t.colors[Math.abs(r) % t.colors.length];
    }
    function o(e) {
      function n() {
        if (n.enabled) {
          var e = n,
            r = +new Date(),
            o = r - (l || r);
          (e.diff = o), (e.prev = l), (e.curr = r), (l = r);
          for (var a = new Array(arguments.length), i = 0; i < a.length; i++)
            a[i] = arguments[i];
          (a[0] = t.coerce(a[0])), "string" != typeof a[0] && a.unshift("%O");
          var c = 0;
          (a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, r) {
            if ("%%" === n) return n;
            c++;
            var o = t.formatters[r];
            if ("function" == typeof o) {
              var i = a[c];
              (n = o.call(e, i)), a.splice(c, 1), c--;
            }
            return n;
          })),
            t.formatArgs.call(e, a);
          var u = n.log || t.log || console.log.bind(console);
          u.apply(e, a);
        }
      }
      return (
        (n.namespace = e),
        (n.enabled = t.enabled(e)),
        (n.useColors = t.useColors()),
        (n.color = r(e)),
        "function" == typeof t.init && t.init(n),
        n
      );
    }
    function a(e) {
      t.save(e), (t.names = []), (t.skips = []);
      for (
        var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
          r = n.length,
          o = 0;
        o < r;
        o++
      )
        n[o] &&
          ((e = n[o].replace(/\*/g, ".*?")),
          "-" === e[0]
            ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
            : t.names.push(new RegExp("^" + e + "$")));
    }
    function i() {
      t.enable("");
    }
    function c(e) {
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1;
    }
    function u(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }
    (t = e.exports = o.debug = o.default = o),
      (t.coerce = u),
      (t.disable = i),
      (t.enable = a),
      (t.enabled = c),
      (t.humanize = n(488)),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
    var l;
  },
  476: function(e, t, n) {
    function r() {}
    function o(e, t, n) {
      function o() {
        u.parentNode && u.parentNode.removeChild(u),
          (window[f] = r),
          l && clearTimeout(l);
      }
      function c() {
        window[f] && o();
      }
      "function" == typeof t && ((n = t), (t = {})), t || (t = {});
      var u,
        l,
        s = t.prefix || "__jp",
        f = t.name || s + i++,
        d = t.param || "callback",
        p = null != t.timeout ? t.timeout : 6e4,
        h = encodeURIComponent,
        m = document.getElementsByTagName("script")[0] || document.head;
      return (
        p &&
          (l = setTimeout(function() {
            o(), n && n(new Error("Timeout"));
          }, p)),
        (window[f] = function(e) {
          a("jsonp got", e), o(), n && n(null, e);
        }),
        (e += (~e.indexOf("?") ? "&" : "?") + d + "=" + h(f)),
        (e = e.replace("?&", "?")),
        a('jsonp req "%s"', e),
        (u = document.createElement("script")),
        (u.src = e),
        m.parentNode.insertBefore(u, m),
        c
      );
    }
    var a = n(337)("jsonp");
    e.exports = o;
    var i = 0;
  },
  488: function(e, t) {
    function n(e) {
      if (((e = String(e)), !(e.length > 100))) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
          e
        );
        if (t) {
          var n = parseFloat(t[1]),
            r = (t[2] || "ms").toLowerCase();
          switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * s;
            case "days":
            case "day":
            case "d":
              return n * l;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * c;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * i;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return;
          }
        }
      }
    }
    function r(e) {
      return e >= l
        ? Math.round(e / l) + "d"
        : e >= u
          ? Math.round(e / u) + "h"
          : e >= c
            ? Math.round(e / c) + "m"
            : e >= i ? Math.round(e / i) + "s" : e + "ms";
    }
    function o(e) {
      return (
        a(e, l, "day") ||
        a(e, u, "hour") ||
        a(e, c, "minute") ||
        a(e, i, "second") ||
        e + " ms"
      );
    }
    function a(e, t, n) {
      if (!(e < t))
        return e < 1.5 * t
          ? Math.floor(e / t) + " " + n
          : Math.ceil(e / t) + " " + n + "s";
    }
    var i = 1e3,
      c = 60 * i,
      u = 60 * c,
      l = 24 * u,
      s = 365.25 * l;
    e.exports = function(e, t) {
      t = t || {};
      var a = typeof e;
      if ("string" === a && e.length > 0) return n(e);
      if ("number" === a && isNaN(e) === !1) return t.long ? o(e) : r(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  34: function(e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (s === setTimeout) return setTimeout(e, 0);
      if ((s === n || !s) && setTimeout)
        return (s = setTimeout), setTimeout(e, 0);
      try {
        return s(e, 0);
      } catch (t) {
        try {
          return s.call(null, e, 0);
        } catch (t) {
          return s.call(this, e, 0);
        }
      }
    }
    function a(e) {
      if (f === clearTimeout) return clearTimeout(e);
      if ((f === r || !f) && clearTimeout)
        return (f = clearTimeout), clearTimeout(e);
      try {
        return f(e);
      } catch (t) {
        try {
          return f.call(null, e);
        } catch (t) {
          return f.call(this, e);
        }
      }
    }
    function i() {
      m &&
        p &&
        ((m = !1), p.length ? (h = p.concat(h)) : (g = -1), h.length && c());
    }
    function c() {
      if (!m) {
        var e = o(i);
        m = !0;
        for (var t = h.length; t; ) {
          for (p = h, h = []; ++g < t; ) p && p[g].run();
          (g = -1), (t = h.length);
        }
        (p = null), (m = !1), a(e);
      }
    }
    function u(e, t) {
      (this.fun = e), (this.array = t);
    }
    function l() {}
    var s,
      f,
      d = (e.exports = {});
    !(function() {
      try {
        s = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        s = n;
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        f = r;
      }
    })();
    var p,
      h = [],
      m = !1,
      g = -1;
    (d.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      h.push(new u(e, t)), 1 !== h.length || m || o(c);
    }),
      (u.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (d.title = "browser"),
      (d.browser = !0),
      (d.env = {}),
      (d.argv = []),
      (d.version = ""),
      (d.versions = {}),
      (d.on = l),
      (d.addListener = l),
      (d.once = l),
      (d.off = l),
      (d.removeListener = l),
      (d.removeAllListeners = l),
      (d.emit = l),
      (d.prependListener = l),
      (d.prependOnceListener = l),
      (d.listeners = function(e) {
        return [];
      }),
      (d.binding = function(e) {
        throw new Error("process.binding is not supported");
      }),
      (d.cwd = function() {
        return "/";
      }),
      (d.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }),
      (d.umask = function() {
        return 0;
      });
  },
  581: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      if (!d.default[e.toLowerCase()])
        throw new Error("invalid network name for a social icon");
      var t = d.default[e.toLowerCase()],
        n = function(n) {
          var r = n.className,
            o = n.iconBgStyle,
            a = n.logoFillColor,
            c = n.round,
            l = n.size,
            s = { width: l, height: l },
            f = "social-icon social-icon--" + e + " " + r,
            d = (0, i.default)({}, o);
          return u.default.createElement(
            "div",
            { style: s },
            u.default.createElement(
              "svg",
              {
                viewBox: "0 0 64 64",
                fill: a,
                width: l,
                height: l,
                className: f
              },
              u.default.createElement(
                "g",
                null,
                c
                  ? u.default.createElement("circle", {
                      cx: "32",
                      cy: "32",
                      r: "31",
                      fill: t.color,
                      style: d
                    })
                  : u.default.createElement("rect", {
                      width: "64",
                      height: "64",
                      fill: t.color,
                      style: d
                    })
              ),
              u.default.createElement(
                "g",
                null,
                u.default.createElement("path", { d: t.icon })
              )
            )
          );
        };
      return (
        (n.propTypes = {
          className: s.default.string,
          iconBgStyle: s.default.object,
          logoFillColor: s.default.string,
          round: s.default.bool,
          size: s.default.number
        }),
        (n.defaultProps = { className: "", logoFillColor: "white", size: 64 }),
        n
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(10),
      i = r(a);
    t.generateIcon = o;
    var c = n(1),
      u = r(c),
      l = n(8),
      s = r(l),
      f = n(582),
      d = r(f);
  },
  582: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        facebook: {
          icon:
            "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
          mask:
            "M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",
          color: "#3b5998"
        },
        google: {
          icon:
            "M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2",
          mask:
            "M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",
          color: "#dd4b39"
        },
        linkedin: {
          icon:
            "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",
          mask:
            "M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",
          color: "#007fb1"
        },
        email: {
          icon:
            "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",
          mask:
            "M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",
          color: "#7f7f7f"
        },
        twitter: {
          icon:
            "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",
          mask:
            "M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",
          color: "#00aced"
        },
        pinterest: {
          icon:
            "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",
          mask:
            "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
          color: "#cb2128"
        },
        vk: {
          icon:
            "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
          mask:
            "M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
          color: "#45668e"
        },
        ok: {
          icon:
            "M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ",
          mask:
            "M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z",
          color: "#f2720c"
        },
        telegram: {
          icon:
            "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957",
          mask:
            "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
          color: "#37aee2"
        },
        whatsapp: {
          icon:
            "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915",
          mask:
            "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
          color: "#2cb742"
        },
        reddit: {
          icon:
            "m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z",
          color: "#5f99cf"
        },
        tumblr: {
          icon:
            "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",
          mask:
            "M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",
          color: "#2c4762"
        },
        livejournal: {
          icon:
            "M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z",
          mask:
            "M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",
          color: "#21A5D8"
        },
        mailru: {
          icon:
            "M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z",
          mask:
            "M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",
          color: "#168DE2"
        }
      });
  },
  583: function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.shareCountGetters = t.shareLinks = t.ShareCounts = t.ShareButtons = t.generateShareIcon = void 0);
    var o = n(581),
      a = n(584),
      i = r(a),
      c = n(585),
      u = r(c),
      l = n(234),
      s = r(l),
      f = n(233),
      d = r(f);
    (t.generateShareIcon = o.generateIcon),
      (t.ShareButtons = i),
      (t.ShareCounts = u),
      (t.shareLinks = s),
      (t.shareCountGetters = d);
  },
  584: function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function() {
                return {};
              },
        n = arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = function(n) {
          return E.default.createElement(
            P,
            (0, c.default)({}, n, { network: e, opts: t(n) })
          );
        };
      return (o.propTypes = n), (o.defaultProps = r), o;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MailruShareButton = t.LivejournalShareButton = t.TumblrShareButton = t.RedditShareButton = t.OKShareButton = t.VKShareButton = t.PinterestShareButton = t.LinkedinShareButton = t.GooglePlusShareButton = t.EmailShareButton = t.WhatsappShareButton = t.TelegramShareButton = t.TwitterShareButton = t.FacebookShareButton = void 0);
    var i = n(10),
      c = o(i),
      u = n(172),
      l = o(u),
      s = n(29),
      f = o(s),
      d = n(173),
      p = o(d),
      h = n(38),
      m = o(h),
      g = n(37),
      y = o(g),
      b = n(103),
      w = o(b),
      v = n(1),
      E = o(v),
      C = n(8),
      S = o(C),
      _ = n(11),
      O = o(_),
      j = n(234),
      k = r(j),
      M = n(156),
      x = (0, w.default)(k),
      P = (function(e) {
        function t() {
          var e, n, r, o;
          (0, f.default)(this, t);
          for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
            i[c] = arguments[c];
          return (
            (n = r = (0, m.default)(
              this,
              (e = t.__proto__ || (0, l.default)(t)).call.apply(
                e,
                [this].concat(i)
              )
            )),
            (r.onClick = function(e) {
              var t = r.props,
                n = t.disabled,
                o = t.onClick,
                a = t.openWindow;
              if (!n) {
                e.preventDefault();
                var i = r.link();
                a && r.openWindow(i), o && o(i);
              }
            }),
            (r.onKeyPress = function(e) {
              ("Enter" !== e.key && 13 !== e.key) || r.onClick(e);
            }),
            (r.openWindow = function(e) {
              var t = r.props,
                n = t.beforeOnClick,
                o = t.onShareWindowClose,
                a = t.windowWidth,
                i = t.windowHeight,
                c = { height: i, width: a },
                u = function() {
                  return (0, M.windowOpen)(e, c, o);
                };
              if (n) {
                var l = n();
                (0, M.isPromise)(l) ? l.then(u) : u();
              } else u();
            }),
            (o = n),
            (0, m.default)(r, o)
          );
        }
        return (
          (0, y.default)(t, e),
          (0, p.default)(t, [
            {
              key: "link",
              value: function() {
                var e = this.props,
                  t = e.url,
                  n = e.opts,
                  r = e.network;
                return k[r](t, n);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.additionalProps,
                  n = e.children,
                  r = e.className,
                  o = e.disabled,
                  a = e.disabledStyle,
                  i = e.network,
                  u = e.role,
                  l = e.style,
                  s = e.tabIndex,
                  f = (0, O.default)(
                    "SocialMediaShareButton",
                    "SocialMediaShareButton--" + i,
                    { "SocialMediaShareButton--disabled": !!o, disabled: !!o },
                    r
                  );
                return E.default.createElement(
                  "div",
                  (0, c.default)({}, t, {
                    role: u,
                    tabIndex: s,
                    onClick: this.onClick,
                    onKeyPress: this.onKeyPress,
                    className: f,
                    style: (0, c.default)({}, l, o ? a : {})
                  }),
                  n
                );
              }
            }
          ]),
          t
        );
      })(v.Component);
    (P.propTypes = {
      additionalProps: S.default.object,
      children: S.default.node,
      className: S.default.string,
      disabled: S.default.bool,
      disabledStyle: S.default.object,
      network: S.default.oneOf(x),
      onClick: S.default.func,
      opts: S.default.object,
      openWindow: S.default.bool,
      url: S.default.string.isRequired,
      role: S.default.string,
      style: S.default.object,
      windowWidth: S.default.number,
      windowHeight: S.default.number,
      beforeOnClick: S.default.func,
      onShareWindowClose: S.default.func,
      tabIndex: S.default.string
    }),
      (P.defaultProps = {
        disabledStyle: { opacity: 0.6 },
        openWindow: !0,
        role: "button",
        tabIndex: "0"
      }),
      (t.default = P);
    (t.FacebookShareButton = a(
      "facebook",
      function(e) {
        return (
          e.picture &&
            console.warn(
              "FacebookShareButton warning: picture is a deprecated prop."
            ),
          e.title &&
            console.warn(
              'FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.'
            ),
          e.description &&
            console.warn(
              'FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.'
            ),
          { quote: e.quote, hashtag: e.hashtag }
        );
      },
      { quote: S.default.string, hashtag: S.default.string },
      { windowWidth: 550, windowHeight: 400 }
    )),
      (t.TwitterShareButton = a(
        "twitter",
        function(e) {
          return { hashtags: e.hashtags, title: e.title, via: e.via };
        },
        {
          hashtags: S.default.arrayOf(S.default.string),
          title: S.default.string,
          via: S.default.string
        },
        { windowWidth: 550, windowHeight: 400 }
      )),
      (t.TelegramShareButton = a(
        "telegram",
        function(e) {
          return { title: e.title, via: e.via };
        },
        { title: S.default.string, via: S.default.string },
        { windowWidth: 550, windowHeight: 400 }
      )),
      (t.WhatsappShareButton = a(
        "whatsapp",
        function(e) {
          return { title: e.title, separator: e.separator };
        },
        { title: S.default.string, separator: S.default.string },
        { separator: " ", windowWidth: 550, windowHeight: 400 }
      )),
      (t.EmailShareButton = a(
        "email",
        function(e) {
          return { subject: e.subject, body: e.body };
        },
        { subject: S.default.string, body: S.default.string },
        {
          openWindow: !1,
          onClick: function(e) {
            window.location.href = e;
          }
        }
      )),
      (t.GooglePlusShareButton = a("googlePlus", void 0, void 0, {
        windowWidth: 550,
        windowHeight: 400
      })),
      (t.LinkedinShareButton = a(
        "linkedin",
        function(e) {
          return { title: e.title, description: e.description };
        },
        { title: S.default.string, description: S.default.string },
        { windowWidth: 750, windowHeight: 600 }
      )),
      (t.PinterestShareButton = a(
        "pinterest",
        function(e) {
          return { media: e.media, description: e.description };
        },
        { media: S.default.string.isRequired, description: S.default.string },
        { windowWidth: 1e3, windowHeight: 730 }
      )),
      (t.VKShareButton = a(
        "vk",
        function(e) {
          return { title: e.title, description: e.description, image: e.image };
        },
        {
          title: S.default.string,
          description: S.default.string,
          image: S.default.string
        },
        { windowWidth: 660, windowHeight: 460 }
      )),
      (t.OKShareButton = a(
        "ok",
        function(e) {
          return { title: e.title, description: e.description, image: e.image };
        },
        {
          title: S.default.string,
          description: S.default.string,
          image: S.default.string
        },
        { windowWidth: 660, windowHeight: 460 }
      )),
      (t.RedditShareButton = a(
        "reddit",
        function(e) {
          return { title: e.title };
        },
        { title: S.default.string },
        { windowWidth: 660, windowHeight: 460 }
      )),
      (t.TumblrShareButton = a(
        "tumblr",
        function(e) {
          return {
            title: e.title,
            tags: e.tags.join(","),
            caption: e.caption,
            posttype: e.posttype
          };
        },
        {
          title: S.default.string,
          caption: S.default.string,
          posttype: S.default.string,
          tags: S.default.arrayOf(S.default.string)
        },
        { tags: [], posttype: "link", windowWidth: 660, windowHeight: 460 }
      )),
      (t.LivejournalShareButton = a(
        "livejournal",
        function(e) {
          return { title: e.title, description: e.description };
        },
        { title: S.default.string, description: S.default.string },
        { windowWidth: 660, windowHeight: 460 }
      )),
      (t.MailruShareButton = a(
        "mailru",
        function(e) {
          return { title: e.title, description: e.description, image: e.image };
        },
        {
          title: S.default.string,
          description: S.default.string,
          image: S.default.string
        },
        { windowWidth: 660, windowHeight: 460 }
      ));
  },
  233: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = "https://graph.facebook.com/?id=" + e;
      (0, m.default)(n, function(e, n) {
        t(
          !e && n && n.share && n.share.share_count
            ? n.share.share_count
            : void 0
        );
      });
    }
    function a(e, t) {
      if ((0, g.isInternetExplorerBefore)(11))
        return void console.error(
          "Google plus share count is not supported in <=IE10!"
        );
      var n = new XMLHttpRequest();
      n.open("POST", "https://clients6.google.com/rpc"),
        n.setRequestHeader("Accept", "application/json"),
        n.setRequestHeader("Content-type", "application/json;charset=UTF-8"),
        n.send(
          (0, p.default)({
            method: "pos.plusones.get",
            id: "p",
            params: {
              nolog: !0,
              id: e,
              source: "widget",
              userId: "@viewer",
              groupId: "@self"
            },
            jsonrpc: "2.0",
            key: "p",
            apiVersion: "v1"
          })
        ),
        (n.onload = function() {
          var e = JSON.parse(this.responseText);
          t(e ? e.result.metadata.globalCounts.count : void 0);
        }),
        (n.onerror = function() {});
    }
    function i(e, t) {
      var n = "https://www.linkedin.com/countserv/count/share";
      return (0, m.default)(
        n + (0, g.objectToGetParams)({ url: e, format: "jsonp" }),
        function(e, n) {
          t(n ? n.count : void 0);
        }
      );
    }
    function c(e, t) {
      var n = "https://api.pinterest.com/v1/urls/count.json";
      return (0, m.default)(n + (0, g.objectToGetParams)({ url: e }), function(
        e,
        n
      ) {
        t(n ? n.count : void 0);
      });
    }
    function u(e, t) {
      window.VK ||
        (window.VK = {
          Share: {
            count: function(e, t) {
              return window.VK.callbacks[e](t);
            }
          },
          callbacks: []
        });
      var n = "https://vk.com/share.php",
        r = window.VK.callbacks.length;
      return (
        window.VK.callbacks.push(t),
        (0, m.default)(
          n + (0, g.objectToGetParams)({ act: "count", index: r, url: e })
        )
      );
    }
    function l(e, t) {
      window.OK ||
        (window.OK = {
          Share: {
            count: function(e, t) {
              return window.OK.callbacks[e](t);
            }
          },
          callbacks: []
        });
      var n = "https://connect.ok.ru/dk",
        r = window.OK.callbacks.length;
      return (
        (window.ODKL = {
          updateCount: function(e, t) {
            window.OK.callbacks[r](t);
          }
        }),
        window.OK.callbacks.push(t),
        (0, m.default)(
          n +
            (0, g.objectToGetParams)({
              "st.cmd": "extLike",
              uid: "odklcnt0",
              ref: e
            })
        )
      );
    }
    function s(e, t) {
      var n = "https://www.reddit.com/api/info.json?limit=1&url=" + e;
      (0, m.default)(n, { param: "jsonp" }, function(e, n) {
        t(
          !e &&
          n &&
          n.data &&
          n.data.children.length > 0 &&
          n.data.children[0].data.score
            ? n.data.children[0].data.score
            : void 0
        );
      });
    }
    function f(e, t) {
      var n = "http://api.tumblr.com/v2/share/stats";
      return (0, m.default)(n + (0, g.objectToGetParams)({ url: e }), function(
        e,
        n
      ) {
        t(n ? n.note_count : void 0);
      });
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getVKShareCount = void 0);
    var d = n(171),
      p = r(d);
    (t.getFacebookShareCount = o),
      (t.getGooglePlusShareCount = a),
      (t.getLinkedinShareCount = i),
      (t.getPinterestShareCount = c),
      (t.getOKShareCount = l),
      (t.getRedditShareCount = s),
      (t.getTumblrShareCount = f);
    var h = n(476),
      m = r(h),
      g = n(156);
    t.getVKShareCount = u;
  },
  585: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function(t) {
        return b.default.createElement(_, (0, i.default)({ getCount: e }, t));
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TwitterShareCount = t.TumblrShareCount = t.RedditShareCount = t.OKShareCount = t.VKShareCount = t.PinterestShareCount = t.GooglePlusShareCount = t.LinkedinShareCount = t.FacebookShareCount = void 0);
    var a = n(10),
      i = r(a),
      c = n(172),
      u = r(c),
      l = n(29),
      s = r(l),
      f = n(173),
      d = r(f),
      p = n(38),
      h = r(p),
      m = n(37),
      g = r(m),
      y = n(1),
      b = r(y),
      w = n(8),
      v = r(w),
      E = n(11),
      C = r(E),
      S = n(233),
      _ = (function(e) {
        function t(e) {
          (0, s.default)(this, t);
          var n = (0, h.default)(
            this,
            (t.__proto__ || (0, u.default)(t)).call(this, e)
          );
          return (n._isMounted = !1), (n.state = { count: 0 }), n;
        }
        return (
          (0, g.default)(t, e),
          (0, d.default)(t, [
            {
              key: "componentDidMount",
              value: function() {
                (this._isMounted = !0), this.updateCount(this.props.url);
              }
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                e.url !== this.props.url && this.updateCount(e.url);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this._isMounted = !1;
              }
            },
            {
              key: "updateCount",
              value: function(e) {
                var t = this;
                this.props.getCount &&
                  (this.setState({ isLoading: !0 }),
                  this.props.getCount(e, function(e) {
                    t._isMounted && t.setState({ count: e, isLoading: !1 });
                  }));
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.state,
                  t = e.count,
                  n = e.isLoading,
                  r = this.props,
                  o = r.children,
                  a = r.className;
                return b.default.createElement(
                  "div",
                  { className: (0, C.default)("SocialMediaShareCount", a) },
                  !n && o(t || 0)
                );
              }
            }
          ]),
          t
        );
      })(y.Component);
    (_.propTypes = {
      children: v.default.func,
      className: v.default.string,
      getCount: v.default.func,
      url: v.default.string.isRequired
    }),
      (_.defaultProps = {
        children: function(e) {
          return e;
        }
      });
    (t.FacebookShareCount = o(S.getFacebookShareCount)),
      (t.LinkedinShareCount = o(S.getLinkedinShareCount)),
      (t.GooglePlusShareCount = o(S.getGooglePlusShareCount)),
      (t.PinterestShareCount = o(S.getPinterestShareCount)),
      (t.VKShareCount = o(S.getVKShareCount)),
      (t.OKShareCount = o(S.getOKShareCount)),
      (t.RedditShareCount = o(S.getRedditShareCount)),
      (t.TumblrShareCount = o(S.getTumblrShareCount)),
      (t.TwitterShareCount = function() {
        throw new Error(
          "TwitterShareCount was removed in version 1.3.0 becausethe Twitter API was shut down and there is no replacement. Please remove it from your code."
        );
      });
  },
  234: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = t.subject,
        r = t.body;
      return "mailto:" + (0, v.objectToGetParams)({ subject: n, body: r || n });
    }
    function a(e, t) {
      var n = t.title,
        r = t.via,
        o = t.hashtags,
        a = void 0 === o ? [] : o;
      return (
        (0, w.default)(e, "twitter.url"),
        (0, w.default)(Array.isArray(a), "twitter.hashtags is not an array"),
        "https://twitter.com/share" +
          (0, v.objectToGetParams)({
            url: e,
            text: n,
            via: r,
            hashtags: a.join(",")
          })
      );
    }
    function i(e, t) {
      var n = t.title;
      return (
        (0, w.default)(e, "telegram.url"),
        "https://telegram.me/share/" +
          (0, v.objectToGetParams)({ url: e, text: n })
      );
    }
    function c(e, t) {
      var n = t.title,
        r = t.separator;
      return (
        (0, w.default)(e, "whatsapp.url"),
        "https://api.whatsapp.com/send" +
          (0, v.objectToGetParams)({ text: n ? n + r + e : e })
      );
    }
    function u(e, t) {
      var n = t.quote,
        r = t.hashtag;
      return (
        (0, w.default)(e, "facebook.url"),
        "https://www.facebook.com/sharer/sharer.php" +
          (0, v.objectToGetParams)({ u: e, quote: n, hashtag: r })
      );
    }
    function l(e) {
      return (
        (0, w.default)(e, "googlePlus.url"),
        "https://plus.google.com/share" + (0, v.objectToGetParams)({ url: e })
      );
    }
    function s(e, t) {
      var n = t.title,
        r = t.description;
      return (
        (0, w.default)(e, "linkedin.url"),
        "https://linkedin.com/shareArticle" +
          (0, v.objectToGetParams)({ url: e, title: n, summary: r })
      );
    }
    function f(e, t) {
      var n = t.media,
        r = t.description;
      return (
        (0, w.default)(e, "pinterest.url"),
        (0, w.default)(n, "pinterest.media"),
        "https://pinterest.com/pin/create/button/" +
          (0, v.objectToGetParams)({ url: e, media: n, description: r })
      );
    }
    function d(e, t) {
      var n = t.title,
        r = t.description,
        o = t.image;
      return (
        (0, w.default)(e, "vk.url"),
        "https://vk.com/share.php" +
          (0, v.objectToGetParams)({
            url: e,
            title: n,
            description: r,
            image: o
          })
      );
    }
    function p(e, t) {
      var n = t.title,
        r = t.description,
        o = t.image;
      return (
        (0, w.default)(e, "ok.url"),
        "https://connect.ok.ru/offer" +
          (0, v.objectToGetParams)({
            url: e,
            title: n,
            description: r,
            imageUrl: o
          })
      );
    }
    function h(e, t) {
      var n = t.title;
      return (
        (0, w.default)(e, "reddit.url"),
        "https://www.reddit.com/submit" +
          (0, v.objectToGetParams)({ url: e, title: n })
      );
    }
    function m(e, t) {
      var n = t.title,
        r = t.caption,
        o = t.tags,
        a = t.posttype;
      return (
        (0, w.default)(e, "tumblr.url"),
        "https://www.tumblr.com/widgets/share/tool" +
          (0, v.objectToGetParams)({
            canonicalUrl: e,
            title: n,
            caption: r,
            tags: o,
            posttype: a
          })
      );
    }
    function g(e, t) {
      var n = t.title,
        r = t.description;
      return (
        (0, w.default)(e, "livejournal.url"),
        "https://www.livejournal.com/update.bml" +
          (0, v.objectToGetParams)({ subject: n, event: r })
      );
    }
    function y(e, t) {
      var n = t.title,
        r = t.description,
        o = t.image;
      return (
        (0, w.default)(e, "mailru.url"),
        "https://connect.mail.ru/share" +
          (0, v.objectToGetParams)({
            url: e,
            title: n,
            description: r,
            imageurl: o
          })
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.email = o),
      (t.twitter = a),
      (t.telegram = i),
      (t.whatsapp = c),
      (t.facebook = u),
      (t.googlePlus = l),
      (t.linkedin = s),
      (t.pinterest = f),
      (t.vk = d),
      (t.ok = p),
      (t.reddit = h),
      (t.tumblr = m),
      (t.livejournal = g),
      (t.mailru = y);
    var b = n(240),
      w = r(b),
      v = n(156);
  },
  156: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      var t = /MSIE ([0-9]+)/g.exec(window.navigator.userAgent);
      return !!t && +t[1] < e;
    }
    function a(e) {
      return (
        "?" +
        (0, s.default)(e)
          .filter(function(t) {
            return !!e[t];
          })
          .map(function(t) {
            return t + "=" + encodeURIComponent(e[t]);
          })
          .join("&")
      );
    }
    function i(e, t, n) {
      var r = t.name,
        a = t.height,
        i = void 0 === a ? 400 : a,
        c = t.width,
        u = void 0 === c ? 550 : c,
        l =
          window.outerWidth / 2 +
          (window.screenX || window.screenLeft || 0) -
          u / 2,
        f =
          window.outerHeight / 2 +
          (window.screenY || window.screenTop || 0) -
          i / 2,
        d = {
          height: i,
          width: u,
          left: l,
          top: f,
          location: "no",
          toolbar: "no",
          status: "no",
          directories: "no",
          menubar: "no",
          scrollbars: "yes",
          resizable: "no",
          centerscreen: "yes",
          chrome: "yes"
        },
        p = window.open(
          e,
          o(10) ? "" : r,
          (0, s.default)(d)
            .map(function(e) {
              return e + "=" + d[e];
            })
            .join(", ")
        );
      if (n)
        var h = window.setInterval(function() {
          try {
            (null === p || p.closed) && (window.clearInterval(h), n(p));
          } catch (e) {
            console.error(e);
          }
        }, 1e3);
      return p;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isPromise = void 0);
    var c = n(104),
      u = r(c),
      l = n(103),
      s = r(l);
    (t.isInternetExplorerBefore = o),
      (t.objectToGetParams = a),
      (t.windowOpen = i);
    t.isPromise = function(e) {
      return (
        !!e &&
        ("object" ===
          ("undefined" == typeof e ? "undefined" : (0, u.default)(e)) ||
          "function" == typeof e) &&
        "function" == typeof e.then
      );
    };
  },
  602: function(e, t) {
    "function" == typeof Object.create
      ? (e.exports = function(e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        })
      : (e.exports = function(e, t) {
          e.super_ = t;
          var n = function() {};
          (n.prototype = t.prototype),
            (e.prototype = new n()),
            (e.prototype.constructor = e);
        });
  },
  603: function(e, t) {
    e.exports = function(e) {
      return (
        e &&
        "object" == typeof e &&
        "function" == typeof e.copy &&
        "function" == typeof e.fill &&
        "function" == typeof e.readUInt8
      );
    };
  },
  604: function(e, t, n) {
    (function(e, r) {
      function o(e, n) {
        var r = { seen: [], stylize: i };
        return (
          arguments.length >= 3 && (r.depth = arguments[2]),
          arguments.length >= 4 && (r.colors = arguments[3]),
          m(n) ? (r.showHidden = n) : n && t._extend(r, n),
          E(r.showHidden) && (r.showHidden = !1),
          E(r.depth) && (r.depth = 2),
          E(r.colors) && (r.colors = !1),
          E(r.customInspect) && (r.customInspect = !0),
          r.colors && (r.stylize = a),
          u(r, e, r.depth)
        );
      }
      function a(e, t) {
        var n = o.styles[t];
        return n
          ? "[" + o.colors[n][0] + "m" + e + "[" + o.colors[n][1] + "m"
          : e;
      }
      function i(e, t) {
        return e;
      }
      function c(e) {
        var t = {};
        return (
          e.forEach(function(e, n) {
            t[e] = !0;
          }),
          t
        );
      }
      function u(e, n, r) {
        if (
          e.customInspect &&
          n &&
          j(n.inspect) &&
          n.inspect !== t.inspect &&
          (!n.constructor || n.constructor.prototype !== n)
        ) {
          var o = n.inspect(r, e);
          return w(o) || (o = u(e, o, r)), o;
        }
        var a = l(e, n);
        if (a) return a;
        var i = Object.keys(n),
          m = c(i);
        if (
          (e.showHidden && (i = Object.getOwnPropertyNames(n)),
          O(n) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
        )
          return s(n);
        if (0 === i.length) {
          if (j(n)) {
            var g = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + g + "]", "special");
          }
          if (C(n))
            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (_(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (O(n)) return s(n);
        }
        var y = "",
          b = !1,
          v = ["{", "}"];
        if ((h(n) && ((b = !0), (v = ["[", "]"])), j(n))) {
          var E = n.name ? ": " + n.name : "";
          y = " [Function" + E + "]";
        }
        if (
          (C(n) && (y = " " + RegExp.prototype.toString.call(n)),
          _(n) && (y = " " + Date.prototype.toUTCString.call(n)),
          O(n) && (y = " " + s(n)),
          0 === i.length && (!b || 0 == n.length))
        )
          return v[0] + y + v[1];
        if (r < 0)
          return C(n)
            ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
            : e.stylize("[Object]", "special");
        e.seen.push(n);
        var S;
        return (
          (S = b
            ? f(e, n, r, m, i)
            : i.map(function(t) {
                return d(e, n, r, m, t, b);
              })),
          e.seen.pop(),
          p(S, y, v)
        );
      }
      function l(e, t) {
        if (E(t)) return e.stylize("undefined", "undefined");
        if (w(t)) {
          var n =
            "'" +
            JSON.stringify(t)
              .replace(/^"|"$/g, "")
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') +
            "'";
          return e.stylize(n, "string");
        }
        return b(t)
          ? e.stylize("" + t, "number")
          : m(t)
            ? e.stylize("" + t, "boolean")
            : g(t) ? e.stylize("null", "null") : void 0;
      }
      function s(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function f(e, t, n, r, o) {
        for (var a = [], i = 0, c = t.length; i < c; ++i)
          T(t, String(i)) ? a.push(d(e, t, n, r, String(i), !0)) : a.push("");
        return (
          o.forEach(function(o) {
            o.match(/^\d+$/) || a.push(d(e, t, n, r, o, !0));
          }),
          a
        );
      }
      function d(e, t, n, r, o, a) {
        var i, c, l;
        if (
          ((l = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }),
          l.get
            ? (c = l.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : l.set && (c = e.stylize("[Setter]", "special")),
          T(r, o) || (i = "[" + o + "]"),
          c ||
            (e.seen.indexOf(l.value) < 0
              ? ((c = g(n) ? u(e, l.value, null) : u(e, l.value, n - 1)),
                c.indexOf("\n") > -1 &&
                  (c = a
                    ? c
                        .split("\n")
                        .map(function(e) {
                          return "  " + e;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      c
                        .split("\n")
                        .map(function(e) {
                          return "   " + e;
                        })
                        .join("\n")))
              : (c = e.stylize("[Circular]", "special"))),
          E(i))
        ) {
          if (a && o.match(/^\d+$/)) return c;
          (i = JSON.stringify("" + o)),
            i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((i = i.substr(1, i.length - 2)), (i = e.stylize(i, "name")))
              : ((i = i
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (i = e.stylize(i, "string")));
        }
        return i + ": " + c;
      }
      function p(e, t, n) {
        var r = 0,
          o = e.reduce(function(e, t) {
            return (
              r++,
              t.indexOf("\n") >= 0 && r++,
              e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
            );
          }, 0);
        return o > 60
          ? n[0] +
              ("" === t ? "" : t + "\n ") +
              " " +
              e.join(",\n  ") +
              " " +
              n[1]
          : n[0] + t + " " + e.join(", ") + " " + n[1];
      }
      function h(e) {
        return Array.isArray(e);
      }
      function m(e) {
        return "boolean" == typeof e;
      }
      function g(e) {
        return null === e;
      }
      function y(e) {
        return null == e;
      }
      function b(e) {
        return "number" == typeof e;
      }
      function w(e) {
        return "string" == typeof e;
      }
      function v(e) {
        return "symbol" == typeof e;
      }
      function E(e) {
        return void 0 === e;
      }
      function C(e) {
        return S(e) && "[object RegExp]" === M(e);
      }
      function S(e) {
        return "object" == typeof e && null !== e;
      }
      function _(e) {
        return S(e) && "[object Date]" === M(e);
      }
      function O(e) {
        return S(e) && ("[object Error]" === M(e) || e instanceof Error);
      }
      function j(e) {
        return "function" == typeof e;
      }
      function k(e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          "undefined" == typeof e
        );
      }
      function M(e) {
        return Object.prototype.toString.call(e);
      }
      function x(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      function P() {
        var e = new Date(),
          t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":");
        return [e.getDate(), L[e.getMonth()], t].join(" ");
      }
      function T(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      var z = /%[sdj%]/g;
      (t.format = function(e) {
        if (!w(e)) {
          for (var t = [], n = 0; n < arguments.length; n++)
            t.push(o(arguments[n]));
          return t.join(" ");
        }
        for (
          var n = 1,
            r = arguments,
            a = r.length,
            i = String(e).replace(z, function(e) {
              if ("%%" === e) return "%";
              if (n >= a) return e;
              switch (e) {
                case "%s":
                  return String(r[n++]);
                case "%d":
                  return Number(r[n++]);
                case "%j":
                  try {
                    return JSON.stringify(r[n++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            c = r[n];
          n < a;
          c = r[++n]
        )
          i += g(c) || !S(c) ? " " + c : " " + o(c);
        return i;
      }),
        (t.deprecate = function(n, o) {
          function a() {
            if (!i) {
              if (r.throwDeprecation) throw new Error(o);
              r.traceDeprecation ? console.trace(o) : console.error(o),
                (i = !0);
            }
            return n.apply(this, arguments);
          }
          if (E(e.process))
            return function() {
              return t.deprecate(n, o).apply(this, arguments);
            };
          if (r.noDeprecation === !0) return n;
          var i = !1;
          return a;
        });
      var N,
        B = {};
      (t.debuglog = function(e) {
        if (
          (E(N) &&
            (N =
              {
                NODE_ENV: "production",
                PUBLIC_DIR: "/Users/hays/haysclark/gatsby-starter-casper/public"
              }.NODE_DEBUG || ""),
          (e = e.toUpperCase()),
          !B[e])
        )
          if (new RegExp("\\b" + e + "\\b", "i").test(N)) {
            var n = r.pid;
            B[e] = function() {
              var r = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, n, r);
            };
          } else B[e] = function() {};
        return B[e];
      }),
        (t.inspect = o),
        (o.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }),
        (o.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        }),
        (t.isArray = h),
        (t.isBoolean = m),
        (t.isNull = g),
        (t.isNullOrUndefined = y),
        (t.isNumber = b),
        (t.isString = w),
        (t.isSymbol = v),
        (t.isUndefined = E),
        (t.isRegExp = C),
        (t.isObject = S),
        (t.isDate = _),
        (t.isError = O),
        (t.isFunction = j),
        (t.isPrimitive = k),
        (t.isBuffer = n(603));
      var L = [
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
      ];
      (t.log = function() {
        console.log("%s - %s", P(), t.format.apply(t, arguments));
      }),
        (t.inherits = n(602)),
        (t._extend = function(e, t) {
          if (!t || !S(t)) return e;
          for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
          return e;
        });
    }.call(
      t,
      (function() {
        return this;
      })(),
      n(34)
    ));
  },
  121: function(e, t) {},
  92: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c);
    n(121);
    var l = (function(e) {
      function t() {
        return o(this, t), a(this, e.apply(this, arguments));
      }
      return (
        i(t, e),
        (t.prototype.render = function() {
          var e = this.props.author,
            t = e.name,
            n = e.image,
            r = e.url;
          return n
            ? u.default.createElement(
                "figure",
                { className: "author-image" },
                u.default.createElement(
                  "a",
                  {
                    className: "img",
                    href: r,
                    style: { backgroundImage: 'url("' + n + '")' }
                  },
                  u.default.createElement(
                    "span",
                    { className: "hidden" },
                    t + "'s Picture"
                  )
                )
              )
            : null;
        }),
        t
      );
    })(u.default.Component);
    (t.default = l), (e.exports = t.default);
  },
  351: function(e, t) {},
  250: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = n(20),
      s = r(l);
    n(351);
    var f = n(101),
      d = r(f),
      p = n(93),
      h = r(p),
      m = n(94),
      g = r(m),
      y = n(165),
      b = r(y),
      w = function(e) {
        var t = e.bio,
          n = e.morePostsUrl;
        return t
          ? u.default.createElement("p", null, t)
          : u.default.createElement(
              "p",
              null,
              "Read ",
              u.default.createElement(s.default, { to: n }, "more posts"),
              " by this author."
            );
      },
      v = (function(e) {
        function t() {
          return o(this, t), a(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props.prefix,
              t = this.props.author,
              n = t.id,
              r = t.name,
              o = t.image,
              a = t.bio,
              i = t.url,
              c = t.location,
              l = e ? e + "/" + n : n;
            return o
              ? u.default.createElement(
                  "section",
                  { className: "author" },
                  u.default.createElement(
                    "h4",
                    null,
                    u.default.createElement(b.default, { url: l, name: r })
                  ),
                  u.default.createElement(w, { bio: a, morePostsUrl: l }),
                  u.default.createElement(
                    d.default,
                    null,
                    u.default.createElement(h.default, { location: c }),
                    u.default.createElement(g.default, { url: i })
                  )
                )
              : null;
          }),
          t
        );
      })(u.default.Component);
    (t.default = v), (e.exports = t.default);
  },
  93: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = (function(e) {
        function t() {
          return o(this, t), a(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props.location;
            return e
              ? u.default.createElement(
                  "span",
                  { className: "author-location icon-location" },
                  e
                )
              : null;
          }),
          t
        );
      })(u.default.Component);
    (t.default = l), (e.exports = t.default);
  },
  94: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = (function(e) {
        function t() {
          return o(this, t), a(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props.url;
            return e
              ? u.default.createElement(
                  "span",
                  { className: "author-link icon-link" },
                  u.default.createElement("a", { href: e }, e)
                )
              : null;
          }),
          t
        );
      })(u.default.Component);
    (t.default = l), (e.exports = t.default);
  },
  357: function(e, t) {},
  254: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c);
    n(357);
    var l = (function(e) {
      function t() {
        return o(this, t), a(this, e.apply(this, arguments));
      }
      return (
        i(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.subscribers,
            n = e.blog;
          return t && n
            ? u.default.createElement(
                "section",
                { className: "gh-subscribe" },
                u.default.createElement(
                  "h3",
                  { className: "gh-subscribe-title" },
                  "Subscribe to ",
                  n.title
                ),
                u.default.createElement(
                  "p",
                  null,
                  "Get the latest posts delivered right to your inbox."
                ),
                u.default.createElement(
                  "span",
                  { className: "gh-subscribe-rss" },
                  "or subscribe",
                  " ",
                  u.default.createElement(
                    "a",
                    {
                      href:
                        "http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"
                    },
                    "via RSS"
                  ),
                  " ",
                  "with Feedly!"
                )
              )
            : null;
        }),
        t
      );
    })(u.default.Component);
    (t.default = l), (e.exports = t.default);
  },
  362: function(e, t) {},
  256: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = n(583);
    n(362);
    var s = function(e, t, n) {
        return e + ("/" === t ? "" : t) + n;
      },
      f = (function(e) {
        function t() {
          return o(this, t), a(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.postNode,
              n = e.postPath,
              r = e.config,
              o = t.frontmatter,
              a = s(r.siteUrl, r.pathPrefix, n),
              i = l.ShareButtons.FacebookShareButton,
              c = l.ShareButtons.GooglePlusShareButton,
              f = l.ShareButtons.TwitterShareButton;
            return u.default.createElement(
              "section",
              { className: "share" },
              u.default.createElement("h4", null, "Share this post"),
              u.default.createElement(
                "div",
                { style: { display: "flex" } },
                u.default.createElement(
                  f,
                  { url: a, title: o.title },
                  u.default.createElement(
                    "a",
                    { className: "icon-twitter", style: { fontSize: "1.4em" } },
                    u.default.createElement(
                      "span",
                      { className: "hidden" },
                      "Twitter"
                    )
                  )
                ),
                u.default.createElement(
                  i,
                  { url: a, quote: o.title },
                  u.default.createElement(
                    "a",
                    {
                      className: "icon-facebook",
                      style: { fontSize: "1.4em" }
                    },
                    u.default.createElement(
                      "span",
                      { className: "hidden" },
                      "Facebook"
                    )
                  )
                ),
                u.default.createElement(
                  c,
                  { url: a },
                  u.default.createElement(
                    "a",
                    {
                      className: "icon-google-plus",
                      style: { fontSize: "1.4em" }
                    },
                    u.default.createElement(
                      "span",
                      { className: "hidden" },
                      "Google+"
                    )
                  )
                )
              )
            );
          }),
          t
        );
      })(u.default.Component);
    (t.default = f), (e.exports = t.default);
  },
  364: function(e, t) {},
  257: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = n(11),
      s = r(l),
      f = n(20),
      d = r(f);
    n(364);
    var p = function(e) {
        var t = e.post;
        if (t) {
          var n = t.path,
            r = t.cover,
            o = t.title,
            a = t.excerpt,
            i = r ? { backgroundImage: "url(" + r } : null,
            c = (0, s.default)("read-next-story", e.className, {
              "no-cover": !r
            });
          return u.default.createElement(
            d.default,
            { className: c, style: i, to: n },
            u.default.createElement(
              "section",
              { className: "post" },
              u.default.createElement("h2", null, o),
              u.default.createElement("p", null, a, "…")
            )
          );
        }
        return null;
      },
      h = (function(e) {
        function t() {
          return o(this, t), a(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.next,
              n = e.prev;
            return u.default.createElement(
              "aside",
              { className: "read-next" },
              u.default.createElement(p, { post: t }),
              u.default.createElement(p, { className: "prev", post: n })
            );
          }),
          t
        );
      })(c.Component);
    (t.default = h), (e.exports = t.default);
  },
  99: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = n(24),
      s = r(l),
      f = n(18),
      d = r(f),
      p = (function(e) {
        function t() {
          return o(this, t), a(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.postNode,
              n = e.postPath,
              r = e.postSEO,
              o = void 0,
              a = void 0,
              i = void 0,
              c = void 0;
            if (r) {
              var l = t.frontmatter;
              (o = l.title),
                (a = l.description ? l.description : t.excerpt),
                (i = l.cover),
                (c = d.default.siteUrl + d.default.pathPrefix + n);
            } else
              (o = d.default.siteTitle),
                (a = d.default.siteDescription),
                (i = d.default.siteLogo);
            var f = "/" === d.default.pathPrefix ? "" : d.default.pathPrefix;
            i = d.default.siteUrl + f + i;
            var p = d.default.siteUrl + d.default.pathPrefix,
              h = [
                {
                  "@context": "http://schema.org",
                  "@type": "WebSite",
                  url: p,
                  name: o,
                  alternateName: d.default.siteTitleAlt
                    ? d.default.siteTitleAlt
                    : ""
                }
              ];
            return (
              r &&
                h.push([
                  {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        item: { "@id": c, name: o, image: i }
                      }
                    ]
                  },
                  {
                    "@context": "http://schema.org",
                    "@type": "BlogPosting",
                    url: p,
                    name: o,
                    alternateName: d.default.siteTitleAlt
                      ? d.default.siteTitleAlt
                      : "",
                    headline: o,
                    image: { "@type": "ImageObject", url: i },
                    description: a
                  }
                ]),
              u.default.createElement(
                s.default,
                null,
                u.default.createElement("meta", {
                  name: "description",
                  content: a
                }),
                u.default.createElement("meta", { name: "image", content: i }),
                u.default.createElement(
                  "script",
                  { type: "application/ld+json" },
                  JSON.stringify(h)
                ),
                u.default.createElement("meta", {
                  property: "og:url",
                  content: r ? c : p
                }),
                r
                  ? u.default.createElement("meta", {
                      property: "og:type",
                      content: "article"
                    })
                  : null,
                u.default.createElement("meta", {
                  property: "og:title",
                  content: o
                }),
                u.default.createElement("meta", {
                  property: "og:description",
                  content: a
                }),
                u.default.createElement("meta", {
                  property: "og:image",
                  content: i
                }),
                u.default.createElement("meta", {
                  property: "fb:app_id",
                  content: d.default.siteFBAppID ? d.default.siteFBAppID : ""
                }),
                u.default.createElement("meta", {
                  name: "twitter:card",
                  content: "summary_large_image"
                }),
                u.default.createElement("meta", {
                  name: "twitter:creator",
                  content: d.default.userTwitter ? d.default.userTwitter : ""
                }),
                u.default.createElement("meta", {
                  name: "twitter:title",
                  content: o
                }),
                u.default.createElement("meta", {
                  name: "twitter:description",
                  content: a
                }),
                u.default.createElement("meta", {
                  name: "twitter:image",
                  content: i
                })
              )
            );
          }),
          t
        );
      })(c.Component);
    (t.default = p), (e.exports = t.default);
  },
  127: function(e, t) {},
  101: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = n(11),
      s = r(l);
    n(127);
    var f = (function(e) {
      function t() {
        return o(this, t), a(this, e.apply(this, arguments));
      }
      return (
        i(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.children,
            n = e.className,
            r = (0, s.default)("author-meta", n);
          return u.default.createElement("div", { className: r }, t);
        }),
        t
      );
    })(u.default.Component);
    (t.default = f), (e.exports = t.default);
  },
  55: function(e, t) {},
  50: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c),
      l = n(11),
      s = r(l);
    n(55);
    var f = (function(e) {
      function t() {
        return o(this, t), a(this, e.apply(this, arguments));
      }
      return (
        i(t, e),
        (t.prototype.render = function() {
          var e = this.props.children,
            t = (0, s.default)("content", this.props.className);
          return u.default.createElement(
            "main",
            { id: "content", className: t, role: "main" },
            e
          );
        }),
        t
      );
    })(u.default.Component);
    (t.default = f), (e.exports = t.default);
  },
  370: function(e, t) {},
  260: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var c = n(1),
      u = r(c);
    n(370);
    var l = (function(e) {
      function t() {
        return o(this, t), a(this, e.apply(this, arguments));
      }
      return (
        i(t, e),
        (t.prototype.render = function() {
          var e = this.props.children;
          return u.default.createElement(
            "footer",
            { className: "post-footer" },
            e
          );
        }),
        t
      );
    })(u.default.Component);
    (t.default = l), (e.exports = t.default);
  },
  266: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function c(e, t) {
      var n = e;
      return (
        n.id || (n.id = t),
        n.id || (n.category_id = m.default.postDefaultCategoryID),
        n
      );
    }
    (t.__esModule = !0), (t.pageQuery = void 0);
    var u = n(1),
      l = r(u),
      s = n(24),
      f = r(s),
      d = n(99),
      p = r(d),
      h = n(18),
      m = r(h),
      g = n(71),
      y = r(g),
      b = n(72),
      w = r(b),
      v = n(65),
      E = r(v),
      C = n(67),
      S = r(C),
      _ = n(70),
      O = r(_),
      j = n(68),
      k = r(j),
      M = n(73),
      x = r(M),
      P = n(50),
      T = r(P),
      z = n(169),
      N = r(z),
      B = n(168),
      L = r(B),
      V = n(166),
      A = r(V),
      H = n(260),
      R = r(H),
      I = n(92),
      G = r(I),
      D = n(250),
      q = r(D),
      F = n(256),
      W = r(F),
      K = n(254),
      U = r(K),
      J = n(257),
      Z = r(J),
      $ = n(167),
      Q = r($),
      X = n(66),
      Y = r(X),
      ee = n(170),
      te = r(ee),
      ne = function(e) {
        return {
          path: e.fields.slug,
          title: e.frontmatter.title,
          cover: e.frontmatter.cover,
          excerpt: e.excerpt
        };
      },
      re = (function(e) {
        function t() {
          var n, r, i;
          o(this, t);
          for (var c = arguments.length, u = Array(c), l = 0; l < c; l++)
            u[l] = arguments[l];
          return (
            (n = r = a(this, e.call.apply(e, [this].concat(u)))),
            (r.state = { menuOpen: !1 }),
            (r.handleOnClick = function(e) {
              e.stopPropagation(),
                r.state.menuOpen ? r.closeMenu() : r.openMenu();
            }),
            (r.handleOnClose = function(e) {
              e.stopPropagation(), r.closeMenu();
            }),
            (r.openMenu = function() {
              r.setState({ menuOpen: !0 });
            }),
            (r.closeMenu = function() {
              r.setState({ menuOpen: !1 });
            }),
            (i = n),
            a(r, i)
          );
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.location,
              n = e.data,
              r = this.props.pathContext,
              o = r.slug,
              a = r.next,
              i = r.prev,
              u = this.props.data.markdownRemark,
              s = c(u.frontmatter, o),
              d = s.cover,
              h = s.title,
              g = s.date,
              b = s.author,
              v = s.tags,
              C = s.post_class ? s.post_class : "post",
              _ = te.default.getAuthor(
                this.props.data.authors.edges,
                b,
                m.default.blogAuthorId
              ),
              j = function() {
                return a ? ne(n.next) : null;
              },
              M = function() {
                return i ? ne(n.prev) : null;
              };
            return l.default.createElement(
              O.default,
              { className: "post-template", isOpen: this.state.menuOpen },
              l.default.createElement(
                f.default,
                null,
                l.default.createElement(
                  "title",
                  null,
                  s.title + " | " + m.default.siteTitle
                )
              ),
              l.default.createElement(p.default, {
                postPath: o,
                postNode: u,
                postSEO: !0
              }),
              l.default.createElement(k.default, {
                config: m.default,
                onClose: this.handleOnClose
              }),
              l.default.createElement(
                x.default,
                null,
                l.default.createElement(
                  y.default,
                  { className: "post-head", cover: d },
                  l.default.createElement(
                    w.default,
                    { overlay: d },
                    l.default.createElement(E.default, {
                      logo: m.default.siteLogo,
                      title: m.default.siteTitle
                    }),
                    l.default.createElement(S.default, {
                      navigation: m.default.siteNavigation,
                      onClick: this.handleOnClick
                    })
                  )
                ),
                l.default.createElement(
                  T.default,
                  null,
                  l.default.createElement(
                    L.default,
                    { className: C },
                    l.default.createElement(
                      N.default,
                      null,
                      l.default.createElement(
                        "h1",
                        { className: "post-title" },
                        h
                      ),
                      l.default.createElement(
                        "section",
                        { className: "post-meta" },
                        l.default.createElement(A.default, { date: g }),
                        l.default.createElement(Q.default, {
                          prefix: " on ",
                          tags: v
                        })
                      )
                    ),
                    l.default.createElement("section", {
                      className: "post-content",
                      dangerouslySetInnerHTML: { __html: u.html }
                    }),
                    l.default.createElement(
                      R.default,
                      null,
                      l.default.createElement(G.default, { author: _ }),
                      l.default.createElement(q.default, {
                        prefix: "/author",
                        author: _
                      }),
                      l.default.createElement(W.default, {
                        postNode: u,
                        postPath: t.pathname,
                        config: m.default
                      }),
                      l.default.createElement(U.default, null)
                    )
                  )
                ),
                l.default.createElement(Z.default, { next: j(), prev: M() }),
                l.default.createElement(Y.default, {
                  copyright: m.default.copyright,
                  promoteGatsby: m.default.promoteGatsby
                })
              )
            );
          }),
          t
        );
      })(l.default.Component);
    t.pageQuery = "** extracted graphql fragment **";
    t.default = re;
  }
});
//# sourceMappingURL=component---src-templates-post-jsx-88e2aa37d68b4440a3e5.js.map
