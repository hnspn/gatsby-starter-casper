webpackJsonp([0x7600c7af1a80], {
  264: function(e, t, r) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e, t) {
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
    function u(e, t) {
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
    var s = r(1),
      i = o(s),
      c = r(24),
      f = o(c),
      l = r(69),
      p = o(l),
      d = r(18),
      h = o(d),
      y = (function(e) {
        function t() {
          return n(this, t), a(this, e.apply(this, arguments));
        }
        return (
          u(t, e),
          (t.prototype.render = function() {
            var e = this.props.pathContext.category,
              t = this.props.data.allMarkdownRemark.edges,
              r = this.props.data.authors.edges;
            return i.default.createElement(
              "div",
              { className: "category-container" },
              i.default.createElement(f.default, {
                title: 'Posts in category "' + e + '" | ' + h.default.siteTitle
              }),
              i.default.createElement(p.default, {
                postEdges: t,
                postAuthors: r
              })
            );
          }),
          t
        );
      })(i.default.Component);
    t.pageQuery = "** extracted graphql fragment **";
    t.default = y;
  }
});
//# sourceMappingURL=component---src-templates-category-jsx-3f9f38b2a16b22af9077.js.map
