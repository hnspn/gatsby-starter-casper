webpackJsonp([0xb7522136ec57], {
  34: function(e, t) {
    function c() {
      throw new Error("setTimeout has not been defined");
    }
    function n() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (s === setTimeout) return setTimeout(e, 0);
      if ((s === c || !s) && setTimeout)
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
    function r(e) {
      if (f === clearTimeout) return clearTimeout(e);
      if ((f === n || !f) && clearTimeout)
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
    function a() {
      v &&
        d &&
        ((v = !1), d.length ? (h = d.concat(h)) : (m = -1), h.length && i());
    }
    function i() {
      if (!v) {
        var e = o(a);
        v = !0;
        for (var t = h.length; t; ) {
          for (d = h, h = []; ++m < t; ) d && d[m].run();
          (m = -1), (t = h.length);
        }
        (d = null), (v = !1), r(e);
      }
    }
    function l(e, t) {
      (this.fun = e), (this.array = t);
    }
    function u() {}
    var s,
      f,
      p = (e.exports = {});
    !(function() {
      try {
        s = "function" == typeof setTimeout ? setTimeout : c;
      } catch (e) {
        s = c;
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (e) {
        f = n;
      }
    })();
    var d,
      h = [],
      v = !1,
      m = -1;
    (p.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var c = 1; c < arguments.length; c++) t[c - 1] = arguments[c];
      h.push(new l(e, t)), 1 !== h.length || v || o(i);
    }),
      (l.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (p.title = "browser"),
      (p.browser = !0),
      (p.env = {}),
      (p.argv = []),
      (p.version = ""),
      (p.versions = {}),
      (p.on = u),
      (p.addListener = u),
      (p.once = u),
      (p.off = u),
      (p.removeListener = u),
      (p.removeAllListeners = u),
      (p.emit = u),
      (p.prependListener = u),
      (p.prependOnceListener = u),
      (p.listeners = function(e) {
        return [];
      }),
      (p.binding = function(e) {
        throw new Error("process.binding is not supported");
      }),
      (p.cwd = function() {
        return "/";
      }),
      (p.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }),
      (p.umask = function() {
        return 0;
      });
  },
  574: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function() {
        function e(e, t) {
          for (var c = 0; c < t.length; c++) {
            var n = t[c];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, c, n) {
          return c && e(t.prototype, c), n && e(t, n), t;
        };
      })(),
      l = c(1),
      u = n(l),
      s = c(154),
      f = n(s),
      p = (function(e) {
        function t() {
          return (
            o(this, t),
            r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          a(t, e),
          i(t, [
            {
              key: "render",
              value: function() {
                return u.default.createElement(
                  "input",
                  this.props,
                  this.props.children
                );
              }
            }
          ]),
          t
        );
      })(u.default.Component);
    t.default = (0, f.default)(p);
  },
  575: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      l = (function() {
        function e(e, t) {
          for (var c = 0; c < t.length; c++) {
            var n = t[c];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, c, n) {
          return c && e(t.prototype, c), n && e(t, n), t;
        };
      })(),
      u = c(1),
      s = n(u),
      f = c(231),
      p = n(f),
      d = c(8),
      h = n(d),
      v = (function(e) {
        function t() {
          return (
            o(this, t),
            r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          a(t, e),
          l(t, [
            {
              key: "render",
              value: function() {
                var e = this,
                  t = i({}, this.props);
                return (
                  t.parentBindings && delete t.parentBindings,
                  s.default.createElement(
                    "div",
                    i({}, t, {
                      ref: function(t) {
                        e.props.parentBindings.domNode = t;
                      }
                    }),
                    this.props.children
                  )
                );
              }
            }
          ]),
          t
        );
      })(s.default.Component);
    (v.propTypes = { name: h.default.string, id: h.default.string }),
      (t.default = (0, p.default)(v));
  },
  576: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = c(1),
      l = n(i),
      u = c(154),
      s = n(u),
      f = (function(e) {
        function t() {
          var e, c, n, a;
          o(this, t);
          for (var i = arguments.length, u = Array(i), s = 0; s < i; s++)
            u[s] = arguments[s];
          return (
            (c = n = r(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(u)
              )
            )),
            (n.render = function() {
              return l.default.createElement("a", n.props, n.props.children);
            }),
            (a = c),
            r(n, a)
          );
        }
        return a(t, e), t;
      })(l.default.Component);
    t.default = (0, s.default)(f);
  },
  577: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Helpers = t.ScrollElement = t.ScrollLink = t.animateScroll = t.scrollSpy = t.Events = t.scroller = t.Element = t.Button = t.Link = void 0);
    var o = c(576),
      r = n(o),
      a = c(574),
      i = n(a),
      l = c(575),
      u = n(l),
      s = c(90),
      f = n(s),
      p = c(153),
      d = n(p),
      h = c(155),
      v = n(h),
      m = c(230),
      y = n(m),
      M = c(154),
      b = n(M),
      C = c(231),
      g = n(C),
      z = c(578),
      w = n(z);
    (t.Link = r.default),
      (t.Button = i.default),
      (t.Element = u.default),
      (t.scroller = f.default),
      (t.Events = d.default),
      (t.scrollSpy = v.default),
      (t.animateScroll = y.default),
      (t.ScrollLink = b.default),
      (t.ScrollElement = g.default),
      (t.Helpers = w.default),
      (t.default = {
        Link: r.default,
        Button: i.default,
        Element: u.default,
        scroller: f.default,
        Events: d.default,
        scrollSpy: v.default,
        animateScroll: y.default,
        ScrollLink: b.default,
        ScrollElement: g.default,
        Helpers: w.default
      });
  },
  578: function(e, t, c) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function r(e, t) {
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
    var a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      i = (function() {
        function e(e, t) {
          for (var c = 0; c < t.length; c++) {
            var n = t[c];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, c, n) {
          return c && e(t.prototype, c), n && e(t, n), t;
        };
      })(),
      l = c(1),
      u = (c(56), c(61), c(155)),
      s = c(90),
      f = c(8),
      p = c(232),
      d = {
        to: f.string.isRequired,
        containerId: f.string,
        container: f.object,
        activeClass: f.string,
        spy: f.bool,
        smooth: f.oneOfType([f.bool, f.string]),
        offset: f.number,
        delay: f.number,
        isDynamic: f.bool,
        onClick: f.func,
        duration: f.oneOfType([f.number, f.func]),
        absolute: f.bool,
        onSetActive: f.func,
        onSetInactive: f.func,
        ignoreCancelEvents: f.bool,
        hashSpy: f.bool
      },
      h = {
        Scroll: function e(t, c) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var f = c || s,
            e = (function(e) {
              function c(e) {
                n(this, c);
                var t = o(
                  this,
                  (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
                );
                return h.call(t), (t.state = { active: !1 }), t;
              }
              return (
                r(c, e),
                i(c, [
                  {
                    key: "getScrollSpyContainer",
                    value: function() {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e
                        ? document.getElementById(e)
                        : t && t.nodeType ? t : document;
                    }
                  },
                  {
                    key: "componentDidMount",
                    value: function() {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        u.isMounted(e) || u.mount(e),
                          this.props.hashSpy &&
                            (p.isMounted() || p.mount(f),
                            p.mapContainer(this.props.to, e)),
                          this.props.spy &&
                            u.addStateHandler(this.stateHandler),
                          u.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    }
                  },
                  {
                    key: "componentWillUnmount",
                    value: function() {
                      u.unmount(this.stateHandler, this.spyHandler);
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      var e = "";
                      e =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var c = a({}, this.props);
                      for (var n in d) c.hasOwnProperty(n) && delete c[n];
                      return (
                        (c.className = e),
                        (c.onClick = this.handleClick),
                        l.createElement(t, c)
                      );
                    }
                  }
                ]),
                c
              );
            })(l.Component),
            h = function() {
              var e = this;
              (this.scrollTo = function(t, c) {
                f.scrollTo(t, a({}, e.state, c));
              }),
                (this.handleClick = function(t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.stateHandler = function() {
                  f.getActiveLink() !== e.props.to &&
                    (null !== e.state &&
                      e.state.active &&
                      e.props.onSetInactive &&
                      e.props.onSetInactive(),
                    e.setState({ active: !1 }));
                }),
                (this.spyHandler = function(t) {
                  var c = e.getScrollSpyContainer();
                  if (!p.isMounted() || p.isInitialized()) {
                    var n = e.props.to,
                      o = null,
                      r = 0,
                      a = 0,
                      i = 0;
                    if (c.getBoundingClientRect) {
                      var l = c.getBoundingClientRect();
                      i = l.top;
                    }
                    if (!o || e.props.isDynamic) {
                      if (((o = f.get(n)), !o)) return;
                      var s = o.getBoundingClientRect();
                      (r = s.top - i + t), (a = r + s.height);
                    }
                    var d = t - e.props.offset,
                      h = d >= Math.floor(r) && d < Math.floor(a),
                      v = d < Math.floor(r) || d >= Math.floor(a),
                      m = f.getActiveLink();
                    return v
                      ? (n === m && f.setActiveLink(void 0),
                        e.props.hashSpy && p.getHash() === n && p.changeHash(),
                        e.props.spy &&
                          e.state.active &&
                          (e.setState({ active: !1 }),
                          e.props.onSetInactive && e.props.onSetInactive()),
                        u.updateStates())
                      : h && m !== n
                        ? (f.setActiveLink(n),
                          e.props.hashSpy && p.changeHash(n),
                          e.props.spy &&
                            (e.setState({ active: !0 }),
                            e.props.onSetActive && e.props.onSetActive(n)),
                          u.updateStates())
                        : void 0;
                  }
                });
            };
          return (e.propTypes = d), (e.defaultProps = { offset: 0 }), e;
        },
        Element: function e(t) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var e = (function(e) {
            function c(e) {
              n(this, c);
              var t = o(
                this,
                (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
              );
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              r(c, e),
              i(c, [
                {
                  key: "componentDidMount",
                  value: function() {
                    return (
                      "undefined" != typeof window &&
                      void this.registerElems(this.props.name)
                    );
                  }
                },
                {
                  key: "componentWillReceiveProps",
                  value: function(e) {
                    this.props.name !== e.name && this.registerElems(e.name);
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function() {
                    return (
                      "undefined" != typeof window &&
                      void s.unregister(this.props.name)
                    );
                  }
                },
                {
                  key: "registerElems",
                  value: function(e) {
                    s.register(e, this.childBindings.domNode);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return l.createElement(
                      t,
                      a({}, this.props, { parentBindings: this.childBindings })
                    );
                  }
                }
              ]),
              c
            );
          })(l.Component);
          return (e.propTypes = { name: f.string, id: f.string }), e;
        }
      };
    e.exports = h;
  },
  230: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      r = c(61),
      a = (n(r), c(580)),
      i = n(a),
      l = c(579),
      u = n(l),
      s = c(153),
      f = n(s),
      p = function(e) {
        return i.default[e.smooth] || i.default.defaultEasing;
      },
      d = function(e) {
        return "function" == typeof e
          ? e
          : function() {
              return e;
            };
      },
      h = function() {
        if ("undefined" != typeof window)
          return (
            window.requestAnimationFrame || window.webkitRequestAnimationFrame
          );
      },
      v = (function() {
        return (
          h() ||
          function(e, t, c) {
            window.setTimeout(e, c || 1e3 / 60, new Date().getTime());
          }
        );
      })(),
      m = function() {
        return {
          currentPositionY: 0,
          startPositionY: 0,
          targetPositionY: 0,
          progress: 0,
          duration: 0,
          cancel: !1,
          target: null,
          containerElement: null,
          to: null,
          start: null,
          deltaTop: null,
          percent: null,
          delayTimeout: null
        };
      },
      y = function(e) {
        var t = e.data.containerElement;
        if (t && t !== document && t !== document.body) return t.scrollTop;
        var c = void 0 !== window.pageXOffset,
          n = "CSS1Compat" === (document.compatMode || "");
        return c
          ? window.pageYOffset
          : n ? document.documentElement.scrollTop : document.body.scrollTop;
      },
      M = function(e) {
        var t = e.data.containerElement;
        if (t && t !== document && t !== document.body)
          return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
        var c = document.body,
          n = document.documentElement;
        return Math.max(
          c.scrollHeight,
          c.offsetHeight,
          n.clientHeight,
          n.scrollHeight,
          n.offsetHeight
        );
      },
      b = function e(t, c, n) {
        var o = c.data;
        if (!c.ignoreCancelEvents && o.cancel)
          return void (
            f.default.registered.end &&
            f.default.registered.end(o.to, o.target, o.currentPositionY)
          );
        if (
          ((o.deltaTop = Math.round(o.targetPositionY - o.startPositionY)),
          null === o.start && (o.start = n),
          (o.progress = n - o.start),
          (o.percent =
            o.progress >= o.duration ? 1 : t(o.progress / o.duration)),
          (o.currentPositionY =
            o.startPositionY + Math.ceil(o.deltaTop * o.percent)),
          o.containerElement &&
          o.containerElement !== document &&
          o.containerElement !== document.body
            ? (o.containerElement.scrollTop = o.currentPositionY)
            : window.scrollTo(0, o.currentPositionY),
          o.percent < 1)
        ) {
          var r = e.bind(null, t, c);
          return void v.call(window, r);
        }
        f.default.registered.end &&
          f.default.registered.end(o.to, o.target, o.currentPositionY);
      },
      C = function(e) {
        e.data.containerElement = e
          ? e.containerId
            ? document.getElementById(e.containerId)
            : e.container && e.container.nodeType ? e.container : document
          : null;
      },
      g = function(e, t, c, n) {
        if (
          ((t.data = t.data || m()),
          window.clearTimeout(t.data.delayTimeout),
          u.default.subscribe(function() {
            t.data.cancel = !0;
          }),
          C(t),
          (t.data.start = null),
          (t.data.cancel = !1),
          (t.data.startPositionY = y(t)),
          (t.data.targetPositionY = t.absolute ? e : e + t.data.startPositionY),
          t.data.startPositionY === t.data.targetPositionY)
        )
          return void (
            f.default.registered.end &&
            f.default.registered.end(
              t.data.to,
              t.data.target,
              t.data.currentPositionY
            )
          );
        (t.data.deltaTop = Math.round(
          t.data.targetPositionY - t.data.startPositionY
        )),
          (t.data.duration = d(t.duration)(t.data.deltaTop)),
          (t.data.duration = isNaN(parseFloat(t.data.duration))
            ? 1e3
            : parseFloat(t.data.duration)),
          (t.data.to = c),
          (t.data.target = n);
        var o = p(t),
          r = b.bind(null, o, t);
        return t && t.delay > 0
          ? void (t.data.delayTimeout = window.setTimeout(function() {
              v.call(window, r);
            }, t.delay))
          : void v.call(window, r);
      },
      z = function(e) {
        return (e = o({}, e)), (e.data = e.data || m()), (e.absolute = !0), e;
      },
      w = function(e) {
        g(0, z(e));
      },
      _ = function(e, t) {
        g(e, z(t));
      },
      E = function(e) {
        (e = z(e)), C(e), g(M(e), e);
      },
      O = function(e, t) {
        (t = z(t)), C(t), g(y(t) + e, t);
      };
    t.default = {
      animateTopScroll: g,
      getAnimationType: p,
      scrollToTop: w,
      scrollToBottom: E,
      scrollTo: _,
      scrollMore: O
    };
  },
  579: function(e, t, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = c(152),
      o = ["mousedown", "mousewheel", "touchmove", "keydown"];
    t.default = {
      subscribe: function(e) {
        return (
          "undefined" != typeof document &&
          o.forEach(function(t) {
            return (0, n.addPassiveEventListener)(document, t, e);
          })
        );
      }
    };
  },
  152: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.addPassiveEventListener = function(e, t, c) {
      var n = (function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0;
            }
          });
          window.addEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
      e.addEventListener(t, c, !!n && { passive: !0 });
    }),
      (t.removePassiveEventListener = function(e, t, c) {
        e.removeEventListener(t, c);
      });
  },
  231: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      l = (function() {
        function e(e, t) {
          for (var c = 0; c < t.length; c++) {
            var n = t[c];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, c, n) {
          return c && e(t.prototype, c), n && e(t, n), t;
        };
      })(),
      u = c(1),
      s = n(u),
      f = c(56),
      p = (n(f), c(90)),
      d = n(p),
      h = c(8),
      v = n(h);
    t.default = function(e) {
      var t = (function(t) {
        function c(e) {
          o(this, c);
          var t = r(
            this,
            (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
          );
          return (t.childBindings = { domNode: null }), t;
        }
        return (
          a(c, t),
          l(c, [
            {
              key: "componentDidMount",
              value: function() {
                return (
                  "undefined" != typeof window &&
                  void this.registerElems(this.props.name)
                );
              }
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                this.props.name !== e.name && this.registerElems(e.name);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                return (
                  "undefined" != typeof window &&
                  void d.default.unregister(this.props.name)
                );
              }
            },
            {
              key: "registerElems",
              value: function(e) {
                d.default.register(e, this.childBindings.domNode);
              }
            },
            {
              key: "render",
              value: function() {
                return s.default.createElement(
                  e,
                  i({}, this.props, { parentBindings: this.childBindings })
                );
              }
            }
          ]),
          c
        );
      })(s.default.Component);
      return (
        (t.propTypes = { name: v.default.string, id: v.default.string }), t
      );
    };
  },
  153: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = {
      registered: {},
      scrollEvent: {
        register: function(e, t) {
          c.registered[e] = t;
        },
        remove: function(e) {
          c.registered[e] = null;
        }
      }
    };
    t.default = c;
  },
  232: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (c(152), c(61)),
      r = n(o),
      a = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function(e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function(e, t) {
          this.containers[e] = t;
        },
        isMounted: function() {
          return this.mountFlag;
        },
        isInitialized: function() {
          return this.initialized;
        },
        initStateFromHash: function() {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function() {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function(e, t) {
          var c = this.scroller,
            n = c.get(e);
          if (n && (t || e !== c.getActiveLink())) {
            var o = this.containers[e] || document;
            c.scrollTo(e, { container: o });
          }
        },
        getHash: function() {
          return r.default.getHash();
        },
        changeHash: function(e) {
          this.isInitialized() && r.default.pushHash(e);
        },
        handleHashChange: function() {
          this.scrollTo(this.getHash());
        },
        unmount: function() {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        }
      };
    t.default = a;
  },
  154: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      l = (function() {
        function e(e, t) {
          for (var c = 0; c < t.length; c++) {
            var n = t[c];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, c, n) {
          return c && e(t.prototype, c), n && e(t, n), t;
        };
      })(),
      u = c(1),
      s = n(u),
      f = c(56),
      p = (n(f), c(61)),
      d = (n(p), c(155)),
      h = n(d),
      v = c(90),
      m = n(v),
      y = c(8),
      M = n(y),
      b = c(232),
      C = n(b),
      g = {
        to: M.default.string.isRequired,
        containerId: M.default.string,
        container: M.default.object,
        activeClass: M.default.string,
        spy: M.default.bool,
        smooth: M.default.oneOfType([M.default.bool, M.default.string]),
        offset: M.default.number,
        delay: M.default.number,
        isDynamic: M.default.bool,
        onClick: M.default.func,
        duration: M.default.oneOfType([M.default.number, M.default.func]),
        absolute: M.default.bool,
        onSetActive: M.default.func,
        onSetInactive: M.default.func,
        ignoreCancelEvents: M.default.bool,
        hashSpy: M.default.bool
      };
    t.default = function(e, t) {
      var c = t || m.default,
        n = (function(t) {
          function n(e) {
            o(this, n);
            var t = r(
              this,
              (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
            );
            return u.call(t), (t.state = { active: !1 }), t;
          }
          return (
            a(n, t),
            l(n, [
              {
                key: "getScrollSpyContainer",
                value: function() {
                  var e = this.props.containerId,
                    t = this.props.container;
                  return e && !t
                    ? document.getElementById(e)
                    : t && t.nodeType ? t : document;
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  if (this.props.spy || this.props.hashSpy) {
                    var e = this.getScrollSpyContainer();
                    h.default.isMounted(e) || h.default.mount(e),
                      this.props.hashSpy &&
                        (C.default.isMounted() || C.default.mount(c),
                        C.default.mapContainer(this.props.to, e)),
                      h.default.addSpyHandler(this.spyHandler, e),
                      this.setState({ container: e });
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  h.default.unmount(this.stateHandler, this.spyHandler);
                }
              },
              {
                key: "render",
                value: function() {
                  var t = "";
                  t =
                    this.state && this.state.active
                      ? (
                          (this.props.className || "") +
                          " " +
                          (this.props.activeClass || "active")
                        ).trim()
                      : this.props.className;
                  var c = i({}, this.props);
                  for (var n in g) c.hasOwnProperty(n) && delete c[n];
                  return (
                    (c.className = t),
                    (c.onClick = this.handleClick),
                    s.default.createElement(e, c)
                  );
                }
              }
            ]),
            n
          );
        })(s.default.PureComponent),
        u = function() {
          var e = this;
          (this.scrollTo = function(t, n) {
            c.scrollTo(t, i({}, e.state, n));
          }),
            (this.handleClick = function(t) {
              e.props.onClick && e.props.onClick(t),
                t.stopPropagation && t.stopPropagation(),
                t.preventDefault && t.preventDefault(),
                e.scrollTo(e.props.to, e.props);
            }),
            (this.spyHandler = function(t) {
              var n = e.getScrollSpyContainer();
              if (!C.default.isMounted() || C.default.isInitialized()) {
                var o = e.props.to,
                  r = null,
                  a = 0,
                  i = 0,
                  l = 0;
                if (n.getBoundingClientRect) {
                  var u = n.getBoundingClientRect();
                  l = u.top;
                }
                if (!r || e.props.isDynamic) {
                  if (((r = c.get(o)), !r)) return;
                  var s = r.getBoundingClientRect();
                  (a = s.top - l + t), (i = a + s.height);
                }
                var f = t - e.props.offset,
                  p = f >= Math.floor(a) && f < Math.floor(i),
                  d = f < Math.floor(a) || f >= Math.floor(i),
                  h = c.getActiveLink();
                d &&
                  (o === h && c.setActiveLink(void 0),
                  e.props.hashSpy &&
                    C.default.getHash() === o &&
                    C.default.changeHash(),
                  e.props.spy &&
                    e.state.active &&
                    (e.setState({ active: !1 }),
                    e.props.onSetInactive && e.props.onSetInactive(o, r))),
                  p &&
                    h !== o &&
                    (c.setActiveLink(o),
                    e.props.hashSpy && C.default.changeHash(o),
                    e.props.spy &&
                      (e.setState({ active: !0 }),
                      e.props.onSetActive && e.props.onSetActive(o, r)));
              }
            });
        };
      return (n.propTypes = g), (n.defaultProps = { offset: 0 }), n;
    };
  },
  155: function(e, t, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = c(152),
      o = function(e) {
        var t = void 0;
        return function(c) {
          t ||
            (t = setTimeout(function() {
              (t = null), e(c);
            }, 66));
        };
      },
      r = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function(e) {
          if (e) {
            var t = o(function(t) {
              r.scrollHandler(e);
            });
            r.scrollSpyContainers.push(e),
              (0, n.addPassiveEventListener)(e, "scroll", t);
          }
        },
        isMounted: function(e) {
          return r.scrollSpyContainers.indexOf(e) !== -1;
        },
        currentPositionY: function(e) {
          if (e === document) {
            var t = void 0 !== window.pageXOffset,
              c = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : c
                ? document.documentElement.scrollTop
                : document.body.scrollTop;
          }
          return e.scrollTop;
        },
        scrollHandler: function(e) {
          var t =
            r.scrollSpyContainers[r.scrollSpyContainers.indexOf(e)]
              .spyCallbacks || [];
          t.forEach(function(t) {
            return t(r.currentPositionY(e));
          });
        },
        addStateHandler: function(e) {
          r.spySetState.push(e);
        },
        addSpyHandler: function(e, t) {
          var c = r.scrollSpyContainers[r.scrollSpyContainers.indexOf(t)];
          c.spyCallbacks || (c.spyCallbacks = []),
            c.spyCallbacks.push(e),
            e(r.currentPositionY(t));
        },
        updateStates: function() {
          r.spySetState.forEach(function(e) {
            return e();
          });
        },
        unmount: function(e, t) {
          r.scrollSpyContainers.forEach(function(e) {
            return (
              e.spyCallbacks &&
              e.spyCallbacks.length &&
              e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
            );
          }),
            r.spySetState &&
              r.spySetState.length &&
              r.spySetState.splice(r.spySetState.indexOf(e), 1),
            document.removeEventListener("scroll", r.scrollHandler);
        },
        update: function() {
          return r.scrollSpyContainers.forEach(function(e) {
            return r.scrollHandler(e);
          });
        }
      };
    t.default = r;
  },
  90: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      r = c(61),
      a = n(r),
      i = c(230),
      l = n(i),
      u = c(153),
      s = n(u),
      f = {},
      p = void 0;
    t.default = {
      unmount: function() {
        f = {};
      },
      register: function(e, t) {
        f[e] = t;
      },
      unregister: function(e) {
        delete f[e];
      },
      get: function(e) {
        return (
          f[e] || document.getElementById(e) || document.getElementsByName(e)[0]
        );
      },
      setActiveLink: function(e) {
        return (p = e);
      },
      getActiveLink: function() {
        return p;
      },
      scrollTo: function(e, t) {
        var c = this.get(e);
        if (!c) return void console.warn("target Element not found");
        t = o({}, t, { absolute: !1 });
        var n = t.containerId,
          r = t.container,
          i = void 0;
        (i = n ? document.getElementById(n) : r && r.nodeType ? r : document),
          s.default.registered.begin && s.default.registered.begin(e, c),
          (t.absolute = !0);
        var u = a.default.scrollOffset(i, c) + (t.offset || 0);
        return t.smooth
          ? void l.default.animateTopScroll(u, t, e, c)
          : (i === document ? window.scrollTo(0, u) : (i.scrollTop = u),
            void (s.default.registered.end && s.default.registered.end(e, c)));
      }
    };
  },
  580: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        defaultEasing: function(e) {
          return e < 0.5
            ? Math.pow(2 * e, 2) / 2
            : 1 - Math.pow(2 * (1 - e), 2) / 2;
        },
        linear: function(e) {
          return e;
        },
        easeInQuad: function(e) {
          return e * e;
        },
        easeOutQuad: function(e) {
          return e * (2 - e);
        },
        easeInOutQuad: function(e) {
          return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
        },
        easeInCubic: function(e) {
          return e * e * e;
        },
        easeOutCubic: function(e) {
          return --e * e * e + 1;
        },
        easeInOutCubic: function(e) {
          return e < 0.5
            ? 4 * e * e * e
            : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
        },
        easeInQuart: function(e) {
          return e * e * e * e;
        },
        easeOutQuart: function(e) {
          return 1 - --e * e * e * e;
        },
        easeInOutQuart: function(e) {
          return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
        },
        easeInQuint: function(e) {
          return e * e * e * e * e;
        },
        easeOutQuint: function(e) {
          return 1 + --e * e * e * e * e;
        },
        easeInOutQuint: function(e) {
          return e < 0.5
            ? 16 * e * e * e * e * e
            : 1 + 16 * --e * e * e * e * e;
        }
      });
  },
  61: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = function(e) {
        if (
          ((e = e ? (0 === e.indexOf("#") ? e : "#" + e) : ""),
          history.pushState)
        ) {
          var t = window.location;
          history.pushState(null, null, e ? e : t.pathname + t.search);
        } else location.hash = e;
      },
      n = function() {
        return window.location.hash.replace(/^#/, "");
      },
      o = function(e) {
        return function(t) {
          return e.contains
            ? e != t && e.contains(t)
            : !!(16 & e.compareDocumentPosition(t));
        };
      },
      r = function(e, t) {
        return e === document
          ? t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
          : "relative" === getComputedStyle(e).position
            ? t.offsetTop
            : t.offsetTop - e.offsetTop;
      };
    t.default = {
      pushHash: c,
      getHash: n,
      filterElementInContainer: o,
      scrollOffset: r
    };
  },
  157: function(e, t) {
    "use strict";
    t.__esModule = !0;
    var c = {
      icon:
        "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",
      mask:
        "M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",
      color: "#7f7f7f"
    };
    t.default = {
      fivehundredpix: {
        icon:
          "M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z",
        mask:
          "M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z",
        color: "#222222"
      },
      bandsintown: {
        icon:
          "M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z",
        mask:
          "M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z",
        color: "#1B8793"
      },
      behance: {
        icon:
          "M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z",
        mask:
          "M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z",
        color: "#007CFF"
      },
      codepen: {
        icon:
          "M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z",
        mask:
          "M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z",
        color: "##151515"
      },
      dribbble: {
        icon:
          "M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z",
        mask:
          "M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z",
        color: "#ea4c89"
      },
      dropbox: {
        icon:
          "M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z",
        mask:
          "M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z",
        color: "#1081DE"
      },
      email: c,
      facebook: {
        icon:
          "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
        mask:
          "M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",
        color: "#3b5998"
      },
      flickr: {
        icon:
          "M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z",
        mask:
          "M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z",
        color: "#0063db"
      },
      foursquare: {
        icon:
          "M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z",
        mask:
          "M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z",
        color: "#0072b1"
      },
      github: {
        icon:
          "M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z",
        mask:
          "M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z",
        color: "#4183c4"
      },
      google_play: {
        icon:
          "M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z",
        mask:
          "M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z",
        color: "#40BBC1"
      },
      google: {
        icon:
          "M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z",
        mask:
          "M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",
        color: "#dd4b39"
      },
      instagram: {
        icon:
          "M43.5,29.7h-2.6c0.2,0.7,0.3,1.5,0.3,2.3 c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2h20.8c0.6,0,1.2-0.5,1.2-1.2 V29.7z M43.5,21.6c0-0.6-0.5-1.2-1.2-1.2h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5c0.6,0,1.2-0.5,1.2-1.2V21.6z  M32,26.2c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C37.8,28.8,35.2,26.2,32,26.2 M43.5,47H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5v23.1C47,45.4,45.5,47,43.5,47",
        mask:
          "M41.2,32c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2 h20.8c0.6,0,1.2-0.5,1.2-1.2V29.7h-2.6C41.1,30.4,41.2,31.2,41.2,32z M32,37.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8 c-3.2,0-5.8,2.6-5.8,5.8C26.2,35.2,28.8,37.8,32,37.8z M42.4,20.5h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5 c0.6,0,1.2-0.5,1.2-1.2v-3.5C43.5,21,43,20.5,42.4,20.5z M0,0v64h64V0H0z M47,43.5c0,1.9-1.5,3.5-3.5,3.5H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5V43.5z",
        color: "#3f729b"
      },
      itunes: {
        icon:
          "M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z",
        mask:
          "M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z",
        color: "#E049D1"
      },
      linkedin: {
        icon:
          "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",
        mask:
          "M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",
        color: "#007fb1"
      },
      mailto: c,
      medium: {
        icon:
          "M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",
        mask:
          "M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",
        color: "#333332"
      },
      meetup: {
        icon:
          "M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z",
        mask:
          "M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z",
        color: "#E51937"
      },
      pinterest: {
        icon:
          "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",
        mask:
          "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
        color: "#cb2128"
      },
      rdio: {
        icon:
          "M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z",
        mask:
          "M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z",
        color: "#0475C5"
      },
      rss: {
        icon:
          "M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z",
        mask:
          "M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z",
        color: "#EF8733"
      },
      sharethis: {
        icon:
          "M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",
        mask:
          "M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",
        color: "#00BF00"
      },
      smugmug: {
        icon:
          "M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z",
        mask:
          "M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z",
        color: "#8cca1e"
      },
      snapchat: {
        icon:
          "M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z",
        mask:
          "M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z",
        color: "#FFC91B"
      },
      soundcloud: {
        icon:
          "M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z",
        mask:
          "M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z",
        color: "#FF5700"
      },
      spotify: {
        icon:
          "M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2",
        mask:
          "M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z",
        color: "#2EBD59"
      },
      squarespace: {
        icon:
          "M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z",
        mask:
          "M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z",
        color: "#1C1C1C"
      },
      tumblr: {
        icon:
          "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",
        mask:
          "M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",
        color: "#2c4762"
      },
      twitch: {
        icon:
          "M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z",
        mask:
          "M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z",
        color: "#6441A5"
      },
      twitter: {
        icon:
          "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",
        mask:
          "M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",
        color: "#00aced"
      },
      vevo: {
        icon:
          "M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z",
        mask:
          "M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z",
        color: "#ED1A3B"
      },
      vimeo: {
        icon:
          "M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z",
        mask:
          "M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z",
        color: "#1ab7ea"
      },
      vine: {
        icon:
          "M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z",
        mask:
          "M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z",
        color: "#00BF8F"
      },
      vk: {
        icon:
          "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
        mask:
          "M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
        color: "#45668e"
      },
      vsco: {
        icon:
          "M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z",
        mask:
          "M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z",
        color: "#83878A"
      },
      whatsapp: {
        icon:
          "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915",
        mask:
          "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
        color: "#2cb742"
      },
      yelp: {
        icon:
          "M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z",
        mask:
          "M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z",
        color: "#B90C04"
      },
      youtube: {
        icon:
          "M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z",
        mask:
          "M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z",
        color: "#ff3333"
      }
    };
  },
  158: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      var t = (e.networkKey, (0, l.default)(e, ["networkKey"]));
      return s.default.createElement(
        "g",
        (0, a.default)({}, t, {
          className: "social-svg-background",
          style: f.socialSvgContent
        }),
        s.default.createElement("circle", { cx: "32", cy: "32", r: "31" })
      );
    }
    t.__esModule = !0;
    var r = c(10),
      a = n(r),
      i = c(15),
      l = n(i),
      u = c(1),
      s = n(u),
      f = c(25);
    t.default = o;
  },
  159: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      var t = e.networkKey,
        c = (0, l.default)(e, ["networkKey"]);
      return s.default.createElement(
        "g",
        (0, a.default)({}, c, {
          className: "social-svg-icon",
          style: p.socialSvgContent
        }),
        s.default.createElement("path", { d: (0, f.iconFor)(t) })
      );
    }
    t.__esModule = !0;
    var r = c(10),
      a = n(r),
      i = c(15),
      l = n(i),
      u = c(1),
      s = n(u),
      f = c(36),
      p = c(25);
    t.default = o;
  },
  160: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      var t = e.color,
        c = e.networkKey;
      return (0, u.default)({}, d.socialSvgMask, {
        fill: t || (0, p.colorFor)(c)
      });
    }
    function r(e) {
      var t = e.color,
        c = e.networkKey,
        n = (0, i.default)(e, ["color", "networkKey"]);
      return f.default.createElement(
        "g",
        (0, u.default)({}, n, {
          className: "social-svg-mask",
          style: o({ color: t, networkKey: c })
        }),
        f.default.createElement("path", { d: (0, p.maskFor)(c) })
      );
    }
    t.__esModule = !0;
    var a = c(15),
      i = n(a),
      l = c(10),
      u = n(l),
      s = c(1),
      f = n(s),
      p = c(36),
      d = c(25);
    t.default = r;
  },
  36: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return s.default[e] ? s.default[e].icon : null;
    }
    function r(e) {
      return s.default[e] ? s.default[e].mask : null;
    }
    function a(e) {
      return s.default[e] ? s.default[e].color : null;
    }
    function i(e) {
      if (!e) return f;
      var t = e.replace(d, "$1");
      return t === e ? f : t;
    }
    function l(e) {
      return e && Array.isArray(e) && 0 !== e.length ? e.map(i) : [];
    }
    (t.__esModule = !0),
      (t.KEYS = void 0),
      (t.iconFor = o),
      (t.maskFor = r),
      (t.colorFor = a),
      (t.keyFor = i),
      (t.keysFor = l);
    var u = c(157),
      s = n(u),
      f = "sharethis",
      p = (t.KEYS = Object.keys(s.default)),
      d = new RegExp(
        "(?:https?:\\/\\/(?:[a-z0-9]*.)?)?(" + p.join("|") + ").*"
      );
  },
  161: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = t.SocialIcons = t.SocialIcon = void 0);
    var o = c(62),
      r = n(o),
      a = c(162),
      i = n(a);
    (t.SocialIcon = r.default),
      (t.SocialIcons = i.default),
      (t.default = i.default);
  },
  62: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return e.network || (0, C.keyFor)(e.url);
    }
    function r(e) {
      var t = e.url,
        c = e.network,
        n = e.color,
        r = e.className,
        a = (0, u.default)(e, ["url", "network", "color", "className"]),
        l = o({ url: t, network: c });
      return f.default.createElement(
        "a",
        (0, i.default)({}, a, {
          href: t,
          target: "_blank",
          className: (0, d.default)("social-icon", r),
          style: (0, i.default)({}, g.socialIcon, e.style)
        }),
        f.default.createElement(
          "div",
          { className: "social-container", style: g.socialContainer },
          f.default.createElement(
            "svg",
            {
              className: "social-svg",
              style: g.socialSvg,
              viewBox: "0 0 64 64"
            },
            f.default.createElement(v.default, null),
            f.default.createElement(y.default, { networkKey: l }),
            f.default.createElement(b.default, { networkKey: l, color: n })
          )
        )
      );
    }
    t.__esModule = !0;
    var a = c(10),
      i = n(a),
      l = c(15),
      u = n(l),
      s = c(1),
      f = n(s),
      p = c(11),
      d = n(p),
      h = c(158),
      v = n(h),
      m = c(159),
      y = n(m),
      M = c(160),
      b = n(M),
      C = c(36),
      g = c(25);
    t.default = r;
  },
  162: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      return function(c, n) {
        return u.default.createElement(f.default, {
          key: n,
          url: c,
          color: e,
          className: t
        });
      };
    }
    function r(e) {
      var t = e.urls,
        c = e.color,
        n = e.className,
        r = (0, i.default)(e, ["urls", "color", "className"]);
      return u.default.createElement("div", r, t.map(o(c, n)));
    }
    t.__esModule = !0;
    var a = c(15),
      i = n(a),
      l = c(1),
      u = n(l),
      s = c(62),
      f = n(s);
    (r.defaultProps = { urls: [] }), (t.default = r);
  },
  25: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0),
      (t.socialSvgMask = t.socialSvgContent = t.socialSvg = t.socialContainer = t.socialIcon = void 0);
    var o = c(10),
      r = n(o),
      a = ((t.socialIcon = {
        display: "inline-block",
        width: "50px",
        height: "50px",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "middle"
      }),
      (t.socialContainer = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }),
      (t.socialSvg = {
        borderRadius: "50%",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        fillRule: "evenodd"
      }),
      (t.socialSvgContent = {
        msTransition: "fill 170ms ease-in-out",
        OTransition: "fill 170ms ease-in-out",
        MozTransition: "fill 170ms ease-in-out",
        WebkitTransition: "fill 170ms ease-in-out",
        transition: "fill 170ms ease-in-out",
        fill: "transparent"
      }));
    t.socialSvgMask = (0, r.default)({}, a, { fill: "#0f0b0b" });
  },
  122: function(e, t) {},
  95: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i);
    c(122);
    var u = (function(e) {
      function t() {
        return o(this, t), r(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          var e = this.props.text;
          return e
            ? l.default.createElement(
                "h2",
                { className: "page-description" },
                e
              )
            : null;
        }),
        t
      );
    })(l.default.Component);
    (t.default = u), (e.exports = t.default);
  },
  123: function(e, t) {},
  96: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i);
    c(123);
    var u = (function(e) {
      function t() {
        return o(this, t), r(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          var e = this.props.text;
          return e
            ? l.default.createElement("h1", { className: "page-title" }, e)
            : null;
        }),
        t
      );
    })(l.default.Component);
    (t.default = u), (e.exports = t.default);
  },
  124: function(e, t) {},
  97: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i),
      u = c(98),
      s = n(u);
    c(124);
    var f = (function(e) {
      function t() {
        return o(this, t), r(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.page,
            c = e.pages,
            n = e.prev,
            o = e.next;
          return l.default.createElement(
            "nav",
            { className: "pagination" },
            l.default.createElement(s.default, {
              className: "newer-posts",
              url: n,
              text: "← Newer Posts"
            }),
            l.default.createElement(
              "span",
              { className: "page-number" },
              "Page ",
              t,
              " of ",
              c
            ),
            l.default.createElement(s.default, {
              className: "older-posts",
              url: o,
              text: "Older Posts →"
            })
          );
        }),
        t
      );
    })(l.default.Component);
    (t.default = f), (e.exports = t.default);
  },
  125: function(e, t) {},
  98: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var c = {};
      for (var n in e)
        t.indexOf(n) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, n) && (c[n] = e[n]));
      return c;
    }
    function r(e, t) {
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
    var l =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var n in c)
              Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
          }
          return e;
        },
      u = c(1),
      s = n(u),
      f = c(20),
      p = n(f);
    c(125);
    var d = (function(e) {
      function t() {
        return r(this, t), a(this, e.apply(this, arguments));
      }
      return (
        i(t, e),
        (t.prototype.render = function() {
          if (this.props.url) {
            var e = "nav-link";
            this.props.className && (e = e + " " + this.props.className);
            var t = o(this.props, []);
            return (
              delete t.style,
              delete t.className,
              delete t.text,
              delete t.url,
              s.default.createElement(
                p.default,
                l({ to: this.props.url }, t, { className: e }),
                this.props.text
              )
            );
          }
          return null;
        }),
        t
      );
    })(s.default.Component);
    (t.default = d), (e.exports = t.default);
  },
  99: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i),
      u = c(24),
      s = n(u),
      f = c(18),
      p = n(f),
      d = (function(e) {
        function t() {
          return o(this, t), r(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.postNode,
              c = e.postPath,
              n = e.postSEO,
              o = void 0,
              r = void 0,
              a = void 0,
              i = void 0;
            if (n) {
              var u = t.frontmatter;
              (o = u.title),
                (r = u.description ? u.description : t.excerpt),
                (a = u.cover),
                (i = p.default.siteUrl + p.default.pathPrefix + c);
            } else
              (o = p.default.siteTitle),
                (r = p.default.siteDescription),
                (a = p.default.siteLogo);
            var f = "/" === p.default.pathPrefix ? "" : p.default.pathPrefix;
            a = p.default.siteUrl + f + a;
            var d = p.default.siteUrl + p.default.pathPrefix,
              h = [
                {
                  "@context": "http://schema.org",
                  "@type": "WebSite",
                  url: d,
                  name: o,
                  alternateName: p.default.siteTitleAlt
                    ? p.default.siteTitleAlt
                    : ""
                }
              ];
            return (
              n &&
                h.push([
                  {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        item: { "@id": i, name: o, image: a }
                      }
                    ]
                  },
                  {
                    "@context": "http://schema.org",
                    "@type": "BlogPosting",
                    url: d,
                    name: o,
                    alternateName: p.default.siteTitleAlt
                      ? p.default.siteTitleAlt
                      : "",
                    headline: o,
                    image: { "@type": "ImageObject", url: a },
                    description: r
                  }
                ]),
              l.default.createElement(
                s.default,
                null,
                l.default.createElement("meta", {
                  name: "description",
                  content: r
                }),
                l.default.createElement("meta", { name: "image", content: a }),
                l.default.createElement(
                  "script",
                  { type: "application/ld+json" },
                  JSON.stringify(h)
                ),
                l.default.createElement("meta", {
                  property: "og:url",
                  content: n ? i : d
                }),
                n
                  ? l.default.createElement("meta", {
                      property: "og:type",
                      content: "article"
                    })
                  : null,
                l.default.createElement("meta", {
                  property: "og:title",
                  content: o
                }),
                l.default.createElement("meta", {
                  property: "og:description",
                  content: r
                }),
                l.default.createElement("meta", {
                  property: "og:image",
                  content: a
                }),
                l.default.createElement("meta", {
                  property: "fb:app_id",
                  content: p.default.siteFBAppID ? p.default.siteFBAppID : ""
                }),
                l.default.createElement("meta", {
                  name: "twitter:card",
                  content: "summary_large_image"
                }),
                l.default.createElement("meta", {
                  name: "twitter:creator",
                  content: p.default.userTwitter ? p.default.userTwitter : ""
                }),
                l.default.createElement("meta", {
                  name: "twitter:title",
                  content: o
                }),
                l.default.createElement("meta", {
                  name: "twitter:description",
                  content: r
                }),
                l.default.createElement("meta", {
                  name: "twitter:image",
                  content: a
                })
              )
            );
          }),
          t
        );
      })(i.Component);
    (t.default = d), (e.exports = t.default);
  },
  126: function(e, t) {},
  100: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i),
      u = c(161);
    c(126);
    var s = (function(e) {
      function t() {
        return o(this, t), r(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.urls,
            c = e.color;
          return t && t.length > 0
            ? l.default.createElement(
                "div",
                { className: "social-media-icons" },
                t.map(function(e) {
                  return l.default.createElement(u.SocialIcon, {
                    key: e,
                    className: "social-media-icon",
                    url: e,
                    color: c
                  });
                })
              )
            : null;
        }),
        t
      );
    })(l.default.Component);
    (t.default = s), (e.exports = t.default);
  },
  55: function(e, t) {},
  50: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i),
      u = c(11),
      s = n(u);
    c(55);
    var f = (function(e) {
      function t() {
        return o(this, t), r(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          var e = this.props.children,
            t = (0, s.default)("content", this.props.className);
          return l.default.createElement(
            "main",
            { id: "content", className: t, role: "main" },
            e
          );
        }),
        t
      );
    })(l.default.Component);
    (t.default = f), (e.exports = t.default);
  },
  128: function(e, t) {},
  102: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    var i = c(1),
      l = n(i),
      u = c(50),
      s = n(u),
      f = c(97),
      p = n(f);
    c(128);
    var d = (function(e) {
      function t() {
        return o(this, t), r(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.page,
            c = e.pages,
            n = e.prev,
            o = e.next,
            r = e.children,
            a = "";
          return (
            t > 1 && (a += " paged"),
            l.default.createElement(
              s.default,
              { className: a },
              l.default.createElement(
                "div",
                { className: "extra-pagination inner" },
                l.default.createElement(p.default, {
                  page: t,
                  pages: c,
                  prev: n,
                  next: o
                })
              ),
              r,
              l.default.createElement(p.default, {
                page: t,
                pages: c,
                prev: n,
                next: o
              })
            )
          );
        }),
        t
      );
    })(l.default.Component);
    (t.default = d), (e.exports = t.default);
  },
  265: function(e, t, c) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
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
    (t.__esModule = !0), (t.pageQuery = void 0);
    var i = c(1),
      l = n(i),
      u = c(24),
      s = n(u),
      f = c(577),
      p = c(69),
      d = n(p),
      h = c(99),
      v = n(h),
      m = c(18),
      y = n(m),
      M = c(70),
      b = n(M),
      C = c(68),
      g = n(C),
      z = c(73),
      w = n(z),
      _ = c(66),
      E = n(_),
      O = c(71),
      S = n(O),
      k = c(72),
      H = n(k),
      V = c(65),
      T = n(V),
      P = c(67),
      L = n(P),
      j = c(96),
      x = n(j),
      N = c(95),
      I = n(N),
      B = c(102),
      A = n(B),
      F = c(100),
      R = n(F),
      Y = (function(e) {
        function t() {
          var c, n, a;
          o(this, t);
          for (var i = arguments.length, l = Array(i), u = 0; u < i; u++)
            l[u] = arguments[u];
          return (
            (c = n = r(this, e.call.apply(e, [this].concat(l)))),
            (n.state = { menuOpen: !1 }),
            (n.handleOnClick = function(e) {
              e.stopPropagation(),
                n.state.menuOpen ? n.closeMenu() : n.openMenu();
            }),
            (n.handleOnClose = function(e) {
              e.stopPropagation(), n.closeMenu();
            }),
            (n.openMenu = function() {
              n.setState({ menuOpen: !0 });
            }),
            (n.closeMenu = function() {
              n.setState({ menuOpen: !1 });
            }),
            (a = c),
            r(n, a)
          );
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            var e = this.props.pathContext,
              t = e.nodes,
              c = e.page,
              n = e.pages,
              o = e.total,
              r = e.limit,
              a = e.prev,
              i = e.next,
              u = this.props.data.authors.edges;
            return l.default.createElement(
              b.default,
              { className: "home-template", isOpen: this.state.menuOpen },
              l.default.createElement(s.default, {
                title: y.default.siteTitle
              }),
              l.default.createElement(v.default, { postEdges: t }),
              l.default.createElement(g.default, {
                config: y.default,
                onClose: this.handleOnClose
              }),
              l.default.createElement(
                w.default,
                null,
                l.default.createElement(
                  "div",
                  { className: "home-template" },
                  l.default.createElement(
                    S.default,
                    { cover: y.default.siteCover },
                    l.default.createElement(
                      H.default,
                      { overlay: y.default.siteCover },
                      l.default.createElement(T.default, {
                        logo: y.default.siteLogo,
                        title: y.default.siteTitle
                      }),
                      l.default.createElement(L.default, {
                        navigation: y.default.siteNavigation,
                        onClick: this.handleOnClick
                      })
                    ),
                    l.default.createElement(
                      "div",
                      { className: "vertical" },
                      l.default.createElement(
                        "div",
                        { className: "main-header-content inner" },
                        l.default.createElement(x.default, {
                          text: y.default.siteTitle
                        }),
                        l.default.createElement(I.default, {
                          text: y.default.siteDescription
                        }),
                        l.default.createElement(R.default, {
                          urls: y.default.siteSocialUrls,
                          color: "currentColor"
                        })
                      )
                    ),
                    l.default.createElement(
                      f.Link,
                      {
                        className: "scroll-down icon-arrow-left",
                        to: "content",
                        "data-offset": "-45",
                        spy: !0,
                        smooth: !0,
                        duration: 500
                      },
                      l.default.createElement(
                        "span",
                        { className: "hidden" },
                        "Scroll Down"
                      )
                    )
                  ),
                  l.default.createElement(
                    A.default,
                    { page: c, pages: n, total: o, limit: r, prev: a, next: i },
                    l.default.createElement(d.default, {
                      postEdges: t,
                      postAuthors: u
                    })
                  )
                ),
                l.default.createElement(E.default, {
                  copyright: y.default.copyright,
                  promoteGatsby: y.default.promoteGatsby
                })
              )
            );
          }),
          t
        );
      })(l.default.Component);
    t.pageQuery = "** extracted graphql fragment **";
    t.default = Y;
  }
});
//# sourceMappingURL=component---src-templates-index-jsx-a33076fd6a6ec6f511db.js.map
