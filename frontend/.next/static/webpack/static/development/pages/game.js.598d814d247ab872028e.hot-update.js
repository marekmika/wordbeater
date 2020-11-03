webpackHotUpdate("static/development/pages/game.js",{

/***/ "./redux/actions/gameActions.js":
/*!**************************************!*\
  !*** ./redux/actions/gameActions.js ***!
  \**************************************/
/*! exports provided: GAME_ACTIONS_TYPES, increaseScoreAction, setIsUserPlayingAction, resetTimeAction, decreaseTimeAction, gameOverAction, setCurrentWordAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_ACTIONS_TYPES\", function() { return GAME_ACTIONS_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseScoreAction\", function() { return increaseScoreAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsUserPlayingAction\", function() { return setIsUserPlayingAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetTimeAction\", function() { return resetTimeAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decreaseTimeAction\", function() { return decreaseTimeAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOverAction\", function() { return gameOverAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentWordAction\", function() { return setCurrentWordAction; });\nvar GAME_ACTIONS_TYPES = {\n  INCREASE_SCORE: 'INCREASE_SCORE',\n  SET_CURRENT_WORD: 'SET_CURRENT_WORD',\n  RESET_TIME: 'RESET_TIME',\n  DECREASE_TIME: 'DECREASE_TIME',\n  SET_IS_USER_PLAYING: 'SET_IS_USER_PLAYING'\n};\nvar increaseScoreAction = function increaseScoreAction() {\n  return {\n    type: GAME_ACTIONS_TYPES.INCREASE_SCORE\n  };\n};\nvar setIsUserPlayingAction = function setIsUserPlayingAction(data) {\n  return {\n    type: GAME_ACTIONS_TYPES.SET_IS_USER_PLAYING,\n    data: data\n  };\n};\nvar resetTimeAction = function resetTimeAction(seconds) {\n  return {\n    type: GAME_ACTIONS_TYPES.RESET_TIME,\n    data: seconds\n  };\n};\nvar decreaseTimeAction = function decreaseTimeAction() {\n  return {\n    type: GAME_ACTIONS_TYPES.DECREASE_TIME\n  };\n};\nvar gameOverAction = function gameOverAction() {\n  return function (dispatch, getState) {\n    var state = getState();\n    console.log({\n      state: state\n    });\n    return dispatch(resetTimeAction());\n  };\n};\nvar setCurrentWordAction = function setCurrentWordAction(word) {\n  return {\n    type: GAME_ACTIONS_TYPES.SET_CURRENT_WORD,\n    data: word\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2dhbWVBY3Rpb25zLmpzP2ExOTEiXSwibmFtZXMiOlsiR0FNRV9BQ1RJT05TX1RZUEVTIiwiSU5DUkVBU0VfU0NPUkUiLCJTRVRfQ1VSUkVOVF9XT1JEIiwiUkVTRVRfVElNRSIsIkRFQ1JFQVNFX1RJTUUiLCJTRVRfSVNfVVNFUl9QTEFZSU5HIiwiaW5jcmVhc2VTY29yZUFjdGlvbiIsInR5cGUiLCJzZXRJc1VzZXJQbGF5aW5nQWN0aW9uIiwiZGF0YSIsInJlc2V0VGltZUFjdGlvbiIsInNlY29uZHMiLCJkZWNyZWFzZVRpbWVBY3Rpb24iLCJnYW1lT3ZlckFjdGlvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRDdXJyZW50V29yZEFjdGlvbiIsIndvcmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRztBQUNoQ0MsZ0JBQWMsRUFBRSxnQkFEZ0I7QUFFaENDLGtCQUFnQixFQUFFLGtCQUZjO0FBR2hDQyxZQUFVLEVBQUUsWUFIb0I7QUFJaENDLGVBQWEsRUFBRSxlQUppQjtBQUtoQ0MscUJBQW1CLEVBQUU7QUFMVyxDQUEzQjtBQVFBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxTQUFPO0FBQ3hDQyxRQUFJLEVBQUVQLGtCQUFrQixDQUFDQztBQURlLEdBQVA7QUFBQSxDQUE1QjtBQUlBLElBQU1PLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDL0NGLFFBQUksRUFBRVAsa0JBQWtCLENBQUNLLG1CQURzQjtBQUUvQ0ksUUFBSSxFQUFKQTtBQUYrQyxHQUFYO0FBQUEsQ0FBL0I7QUFLQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLE9BQUQ7QUFBQSxTQUFjO0FBQzNDSixRQUFJLEVBQUVQLGtCQUFrQixDQUFDRyxVQURrQjtBQUUzQ00sUUFBSSxFQUFFRTtBQUZxQyxHQUFkO0FBQUEsQ0FBeEI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FBTztBQUN2Q0wsUUFBSSxFQUFFUCxrQkFBa0IsQ0FBQ0k7QUFEYyxHQUFQO0FBQUEsQ0FBM0I7QUFJQSxJQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsU0FBTSxVQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDMUQsUUFBTUMsS0FBSyxHQUFHRCxRQUFRLEVBQXRCO0FBRUFFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLFdBQUssRUFBTEE7QUFBRixLQUFaO0FBRUEsV0FBT0YsUUFBUSxDQUFDSixlQUFlLEVBQWhCLENBQWY7QUFDRCxHQU42QjtBQUFBLENBQXZCO0FBUUEsSUFBTVMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUM3Q2IsUUFBSSxFQUFFUCxrQkFBa0IsQ0FBQ0UsZ0JBRG9CO0FBRTdDTyxRQUFJLEVBQUVXO0FBRnVDLEdBQVg7QUFBQSxDQUE3QiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvZ2FtZUFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0FNRV9BQ1RJT05TX1RZUEVTID0ge1xuICBJTkNSRUFTRV9TQ09SRTogJ0lOQ1JFQVNFX1NDT1JFJyxcbiAgU0VUX0NVUlJFTlRfV09SRDogJ1NFVF9DVVJSRU5UX1dPUkQnLFxuICBSRVNFVF9USU1FOiAnUkVTRVRfVElNRScsXG4gIERFQ1JFQVNFX1RJTUU6ICdERUNSRUFTRV9USU1FJyxcbiAgU0VUX0lTX1VTRVJfUExBWUlORzogJ1NFVF9JU19VU0VSX1BMQVlJTkcnLFxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2VTY29yZUFjdGlvbiA9ICgpID0+ICh7XG4gIHR5cGU6IEdBTUVfQUNUSU9OU19UWVBFUy5JTkNSRUFTRV9TQ09SRSxcbn0pXG5cbmV4cG9ydCBjb25zdCBzZXRJc1VzZXJQbGF5aW5nQWN0aW9uID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEdBTUVfQUNUSU9OU19UWVBFUy5TRVRfSVNfVVNFUl9QTEFZSU5HLFxuICBkYXRhLFxufSlcblxuZXhwb3J0IGNvbnN0IHJlc2V0VGltZUFjdGlvbiA9IChzZWNvbmRzKSA9PiAoe1xuICB0eXBlOiBHQU1FX0FDVElPTlNfVFlQRVMuUkVTRVRfVElNRSxcbiAgZGF0YTogc2Vjb25kcyxcbn0pXG5cbmV4cG9ydCBjb25zdCBkZWNyZWFzZVRpbWVBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBHQU1FX0FDVElPTlNfVFlQRVMuREVDUkVBU0VfVElNRSxcbn0pXG5cbmV4cG9ydCBjb25zdCBnYW1lT3ZlckFjdGlvbiA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpXG5cbiAgY29uc29sZS5sb2coeyBzdGF0ZSB9KVxuXG4gIHJldHVybiBkaXNwYXRjaChyZXNldFRpbWVBY3Rpb24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRXb3JkQWN0aW9uID0gKHdvcmQpID0+ICh7XG4gIHR5cGU6IEdBTUVfQUNUSU9OU19UWVBFUy5TRVRfQ1VSUkVOVF9XT1JELFxuICBkYXRhOiB3b3JkLFxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/gameActions.js\n");

/***/ })

})