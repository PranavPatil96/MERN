"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var myMap = new Map(); //add key value

myMap.set(1, {
  EmpNo: 101,
  EmpName: 'ABC'
});
myMap.set(2, {
  EmpNo: 102,
  EmpName: 'P'
});
myMap.set(3, {
  EmpNo: 103,
  EmpName: 'Y'
});
myMap.set(4, {
  EmpNo: 104,
  EmpName: 'N'
});
myMap.set(5, {
  EmpNo: 105,
  EmpName: 'A'
});
myMap.set(5, {
  EmpNo: 106,
  EmpName: 'Q'
}); //print size of map

console.log("Size of map ".concat(myMap.size)); //lets print data

var _iterator = _createForOfIteratorHelper(myMap.entries()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var rec = _step.value;
    console.log("Records Key = ".concat(rec[0], " and Values = ").concat(JSON.stringify(rec[1])));
  } //lets delete a record

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

myMap["delete"](5);

var _iterator2 = _createForOfIteratorHelper(myMap.entries()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _rec = _step2.value;
    console.log("Records Key = ".concat(_rec[0], " and Values = ").concat(JSON.stringify(_rec[1])));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
