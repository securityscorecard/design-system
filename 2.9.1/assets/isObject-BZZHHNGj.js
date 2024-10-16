function n(t) {
  return (
    t != null && typeof t == "object" && t["@@functional/placeholder"] === !0
  );
}
function s(t) {
  return function o(r) {
    return arguments.length === 0 || n(r) ? o : t.apply(this, arguments);
  };
}
function l(t) {
  return function o(r, e) {
    switch (arguments.length) {
      case 0:
        return o;
      case 1:
        return n(r)
          ? o
          : s(function (c) {
              return t(r, c);
            });
      default:
        return n(r) && n(e)
          ? o
          : n(r)
          ? s(function (c) {
              return t(c, e);
            })
          : n(e)
          ? s(function (c) {
              return t(r, c);
            })
          : t(r, e);
    }
  };
}
function f(t) {
  return function o(r, e, c) {
    switch (arguments.length) {
      case 0:
        return o;
      case 1:
        return n(r)
          ? o
          : l(function (u, i) {
              return t(r, u, i);
            });
      case 2:
        return n(r) && n(e)
          ? o
          : n(r)
          ? l(function (u, i) {
              return t(u, e, i);
            })
          : n(e)
          ? l(function (u, i) {
              return t(r, u, i);
            })
          : s(function (u) {
              return t(r, e, u);
            });
      default:
        return n(r) && n(e) && n(c)
          ? o
          : n(r) && n(e)
          ? l(function (u, i) {
              return t(u, i, c);
            })
          : n(r) && n(c)
          ? l(function (u, i) {
              return t(u, e, i);
            })
          : n(e) && n(c)
          ? l(function (u, i) {
              return t(r, u, i);
            })
          : n(r)
          ? s(function (u) {
              return t(u, e, c);
            })
          : n(e)
          ? s(function (u) {
              return t(r, u, c);
            })
          : n(c)
          ? s(function (u) {
              return t(r, e, u);
            })
          : t(r, e, c);
    }
  };
}
function h(t, o) {
  return Object.prototype.hasOwnProperty.call(o, t);
}
function p(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
export { l as _, f as a, s as b, h as c, p as d, n as e };
//# sourceMappingURL=isObject-BZZHHNGj.js.map
