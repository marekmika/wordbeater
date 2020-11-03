webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/GameInfo/GameInfo.js":
/*!*****************************************!*\
  !*** ./components/GameInfo/GameInfo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_useIsGameInProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useIsGameInProgress */ \"./hooks/useIsGameInProgress.js\");\n/* harmony import */ var _redux_reducers_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/reducers/game */ \"./redux/reducers/game.js\");\n/* harmony import */ var _redux_actions_gameActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/gameActions */ \"./redux/actions/gameActions.js\");\nvar _this = undefined,\n    _jsxFileName = \"/app/components/GameInfo/GameInfo.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar ONE_SECOND = 1000;\n\nvar GameInfo = function GameInfo() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var score = Object(_redux_reducers_game__WEBPACK_IMPORTED_MODULE_4__[\"useScoreSelector\"])();\n  var time = Object(_redux_reducers_game__WEBPACK_IMPORTED_MODULE_4__[\"useTimeSelector\"])();\n  var isGameInProgress = Object(_hooks_useIsGameInProgress__WEBPACK_IMPORTED_MODULE_3__[\"useIsGameProgress\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      intervalId = _useState[0],\n      setIntervalId = _useState[1];\n\n  var discreaseTime = function discreaseTime() {\n    dispatch(Object(_redux_actions_gameActions__WEBPACK_IMPORTED_MODULE_5__[\"decreaseTimeAction\"])());\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isGameInProgress) {\n      clearInterval(intervalId);\n      dispatch(Object(_redux_actions_gameActions__WEBPACK_IMPORTED_MODULE_5__[\"setIsUserPlayingAction\"])(false));\n      return;\n    }\n\n    setIntervalId(setInterval(discreaseTime, ONE_SECOND));\n  }, [isGameInProgress]);\n  return __jsx(GameInfoWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \"Time Left: \", time)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Score: \", score)));\n};\n\n_s(GameInfo, \"ymQiem0TCyg7dhktAyCdSgMUx9o=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], _redux_reducers_game__WEBPACK_IMPORTED_MODULE_4__[\"useScoreSelector\"], _redux_reducers_game__WEBPACK_IMPORTED_MODULE_4__[\"useTimeSelector\"], _hooks_useIsGameInProgress__WEBPACK_IMPORTED_MODULE_3__[\"useIsGameProgress\"]];\n});\n\n_c = GameInfo;\nvar GameInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"GameInfo__GameInfoWrapper\",\n  componentId: \"sc-6ty09z-0\"\n})([\"display:flex;align-items:center;justify-content:space-between;\"]);\n_c2 = GameInfoWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameInfo);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c2, \"GameInfoWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWVJbmZvL0dhbWVJbmZvLmpzPzQ5NWMiXSwibmFtZXMiOlsiT05FX1NFQ09ORCIsIkdhbWVJbmZvIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInNjb3JlIiwidXNlU2NvcmVTZWxlY3RvciIsInRpbWUiLCJ1c2VUaW1lU2VsZWN0b3IiLCJpc0dhbWVJblByb2dyZXNzIiwidXNlSXNHYW1lUHJvZ3Jlc3MiLCJ1c2VTdGF0ZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwiZGlzY3JlYXNlVGltZSIsImRlY3JlYXNlVGltZUFjdGlvbiIsInVzZUVmZmVjdCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJc1VzZXJQbGF5aW5nQWN0aW9uIiwic2V0SW50ZXJ2YWwiLCJHYW1lSW5mb1dyYXBwZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxVQUFVLEdBQUcsSUFBbkI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyw2RUFBZ0IsRUFBOUI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLDRFQUFlLEVBQTVCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdDLG9GQUFpQixFQUExQzs7QUFKcUIsa0JBTWVDLHNEQUFRLENBQUMsSUFBRCxDQU52QjtBQUFBLE1BTWRDLFVBTmM7QUFBQSxNQU1GQyxhQU5FOztBQVFyQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJYLFlBQVEsQ0FBQ1kscUZBQWtCLEVBQW5CLENBQVI7QUFDRCxHQUZEOztBQUlBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNQLGdCQUFMLEVBQXVCO0FBQ3JCUSxtQkFBYSxDQUFDTCxVQUFELENBQWI7QUFDQVQsY0FBUSxDQUFDZSx5RkFBc0IsQ0FBQyxLQUFELENBQXZCLENBQVI7QUFFQTtBQUNEOztBQUVETCxpQkFBYSxDQUFDTSxXQUFXLENBQUNMLGFBQUQsRUFBZ0JiLFVBQWhCLENBQVosQ0FBYjtBQUNELEdBVFEsRUFTTixDQUFDUSxnQkFBRCxDQVRNLENBQVQ7QUFXQSxTQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCRixJQUFoQixDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWUYsS0FBWixDQURGLENBSkYsQ0FERjtBQVVELENBakNEOztHQUFNSCxRO1VBQ2FFLHVELEVBQ0hFLHFFLEVBQ0RFLG9FLEVBQ1lFLDRFOzs7S0FKckJSLFE7QUFtQ04sSUFBTWtCLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRUFBckI7TUFBTUYsZTtBQU1TbEIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVJbmZvL0dhbWVJbmZvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyB1c2VJc0dhbWVQcm9ncmVzcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzR2FtZUluUHJvZ3Jlc3MnXG5pbXBvcnQgeyB1c2VTY29yZVNlbGVjdG9yLCB1c2VUaW1lU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9nYW1lJ1xuaW1wb3J0IHtcbiAgZGVjcmVhc2VUaW1lQWN0aW9uLFxuICBzZXRJc1VzZXJQbGF5aW5nQWN0aW9uLFxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2dhbWVBY3Rpb25zJ1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMFxuXG5jb25zdCBHYW1lSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHNjb3JlID0gdXNlU2NvcmVTZWxlY3RvcigpXG4gIGNvbnN0IHRpbWUgPSB1c2VUaW1lU2VsZWN0b3IoKVxuICBjb25zdCBpc0dhbWVJblByb2dyZXNzID0gdXNlSXNHYW1lUHJvZ3Jlc3MoKVxuXG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgZGlzY3JlYXNlVGltZSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChkZWNyZWFzZVRpbWVBY3Rpb24oKSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0dhbWVJblByb2dyZXNzKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpXG4gICAgICBkaXNwYXRjaChzZXRJc1VzZXJQbGF5aW5nQWN0aW9uKGZhbHNlKSlcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWxJZChzZXRJbnRlcnZhbChkaXNjcmVhc2VUaW1lLCBPTkVfU0VDT05EKSlcbiAgfSwgW2lzR2FtZUluUHJvZ3Jlc3NdKVxuXG4gIHJldHVybiAoXG4gICAgPEdhbWVJbmZvV3JhcHBlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5UaW1lIExlZnQ6IHt0aW1lfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TY29yZToge3Njb3JlfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dhbWVJbmZvV3JhcHBlcj5cbiAgKVxufVxuXG5jb25zdCBHYW1lSW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVJbmZvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GameInfo/GameInfo.js\n");

/***/ })

})