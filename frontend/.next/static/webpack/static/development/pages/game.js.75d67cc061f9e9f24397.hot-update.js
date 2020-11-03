webpackHotUpdate("static/development/pages/game.js",{

/***/ "./redux/actions/gameActions.js":
/*!**************************************!*\
  !*** ./redux/actions/gameActions.js ***!
  \**************************************/
/*! exports provided: GAME_ACTIONS_TYPES, increaseScoreAction, setIsUserPlayingAction, resetTimeAction, reseScoreAction, resetGameAction, decreaseTimeAction, gameOverAction, setCurrentWordAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_ACTIONS_TYPES\", function() { return GAME_ACTIONS_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseScoreAction\", function() { return increaseScoreAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsUserPlayingAction\", function() { return setIsUserPlayingAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetTimeAction\", function() { return resetTimeAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reseScoreAction\", function() { return reseScoreAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGameAction\", function() { return resetGameAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decreaseTimeAction\", function() { return decreaseTimeAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOverAction\", function() { return gameOverAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentWordAction\", function() { return setCurrentWordAction; });\nvar GAME_ACTIONS_TYPES = {\n  INCREASE_SCORE: 'INCREASE_SCORE',\n  SET_CURRENT_WORD: 'SET_CURRENT_WORD',\n  RESET_TIME: 'RESET_TIME',\n  DECREASE_TIME: 'DECREASE_TIME',\n  SET_IS_USER_PLAYING: 'SET_IS_USER_PLAYING',\n  RESET_GAME: 'RESET_GAME'\n};\nvar increaseScoreAction = function increaseScoreAction() {\n  return {\n    type: GAME_ACTIONS_TYPES.INCREASE_SCORE\n  };\n};\nvar setIsUserPlayingAction = function setIsUserPlayingAction(data) {\n  return {\n    type: GAME_ACTIONS_TYPES.SET_IS_USER_PLAYING,\n    data: data\n  };\n};\nvar resetTimeAction = function resetTimeAction(seconds) {\n  return {\n    type: GAME_ACTIONS_TYPES.RESET_TIME,\n    data: seconds\n  };\n};\nvar reseScoreAction = function reseScoreAction(seconds) {\n  return {\n    type: GAME_ACTIONS_TYPES.RESET_TIME,\n    data: seconds\n  };\n};\nvar resetGameAction = function resetGameAction() {\n  return {\n    type: GAME_ACTIONS_TYPES.RESET_GAME\n  };\n};\nvar decreaseTimeAction = function decreaseTimeAction() {\n  return {\n    type: GAME_ACTIONS_TYPES.DECREASE_TIME\n  };\n};\nvar gameOverAction = function gameOverAction() {\n  return function (dispatch, getState) {\n    var state = getState();\n    console.log({\n      state: state\n    });\n    return dispatch(resetTimeAction());\n  };\n};\nvar setCurrentWordAction = function setCurrentWordAction(word) {\n  return {\n    type: GAME_ACTIONS_TYPES.SET_CURRENT_WORD,\n    data: word\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2dhbWVBY3Rpb25zLmpzP2ExOTEiXSwibmFtZXMiOlsiR0FNRV9BQ1RJT05TX1RZUEVTIiwiSU5DUkVBU0VfU0NPUkUiLCJTRVRfQ1VSUkVOVF9XT1JEIiwiUkVTRVRfVElNRSIsIkRFQ1JFQVNFX1RJTUUiLCJTRVRfSVNfVVNFUl9QTEFZSU5HIiwiUkVTRVRfR0FNRSIsImluY3JlYXNlU2NvcmVBY3Rpb24iLCJ0eXBlIiwic2V0SXNVc2VyUGxheWluZ0FjdGlvbiIsImRhdGEiLCJyZXNldFRpbWVBY3Rpb24iLCJzZWNvbmRzIiwicmVzZVNjb3JlQWN0aW9uIiwicmVzZXRHYW1lQWN0aW9uIiwiZGVjcmVhc2VUaW1lQWN0aW9uIiwiZ2FtZU92ZXJBY3Rpb24iLCJkaXNwYXRjaCIsImdldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwic2V0Q3VycmVudFdvcmRBY3Rpb24iLCJ3b3JkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGtCQUFrQixHQUFHO0FBQ2hDQyxnQkFBYyxFQUFFLGdCQURnQjtBQUVoQ0Msa0JBQWdCLEVBQUUsa0JBRmM7QUFHaENDLFlBQVUsRUFBRSxZQUhvQjtBQUloQ0MsZUFBYSxFQUFFLGVBSmlCO0FBS2hDQyxxQkFBbUIsRUFBRSxxQkFMVztBQU1oQ0MsWUFBVSxFQUFFO0FBTm9CLENBQTNCO0FBU0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFNBQU87QUFDeENDLFFBQUksRUFBRVIsa0JBQWtCLENBQUNDO0FBRGUsR0FBUDtBQUFBLENBQTVCO0FBSUEsSUFBTVEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUMvQ0YsUUFBSSxFQUFFUixrQkFBa0IsQ0FBQ0ssbUJBRHNCO0FBRS9DSyxRQUFJLEVBQUpBO0FBRitDLEdBQVg7QUFBQSxDQUEvQjtBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRDtBQUFBLFNBQWM7QUFDM0NKLFFBQUksRUFBRVIsa0JBQWtCLENBQUNHLFVBRGtCO0FBRTNDTyxRQUFJLEVBQUVFO0FBRnFDLEdBQWQ7QUFBQSxDQUF4QjtBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0QsT0FBRDtBQUFBLFNBQWM7QUFDM0NKLFFBQUksRUFBRVIsa0JBQWtCLENBQUNHLFVBRGtCO0FBRTNDTyxRQUFJLEVBQUVFO0FBRnFDLEdBQWQ7QUFBQSxDQUF4QjtBQUtBLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFPO0FBQ3BDTixRQUFJLEVBQUVSLGtCQUFrQixDQUFDTTtBQURXLEdBQVA7QUFBQSxDQUF4QjtBQUlBLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFPO0FBQ3ZDUCxRQUFJLEVBQUVSLGtCQUFrQixDQUFDSTtBQURjLEdBQVA7QUFBQSxDQUEzQjtBQUlBLElBQU1ZLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUMxRCxRQUFNQyxLQUFLLEdBQUdELFFBQVEsRUFBdEI7QUFFQUUsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsV0FBSyxFQUFMQTtBQUFGLEtBQVo7QUFFQSxXQUFPRixRQUFRLENBQUNOLGVBQWUsRUFBaEIsQ0FBZjtBQUNELEdBTjZCO0FBQUEsQ0FBdkI7QUFRQSxJQUFNVyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQzdDZixRQUFJLEVBQUVSLGtCQUFrQixDQUFDRSxnQkFEb0I7QUFFN0NRLFFBQUksRUFBRWE7QUFGdUMsR0FBWDtBQUFBLENBQTdCIiwiZmlsZSI6Ii4vcmVkdXgvYWN0aW9ucy9nYW1lQWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHQU1FX0FDVElPTlNfVFlQRVMgPSB7XG4gIElOQ1JFQVNFX1NDT1JFOiAnSU5DUkVBU0VfU0NPUkUnLFxuICBTRVRfQ1VSUkVOVF9XT1JEOiAnU0VUX0NVUlJFTlRfV09SRCcsXG4gIFJFU0VUX1RJTUU6ICdSRVNFVF9USU1FJyxcbiAgREVDUkVBU0VfVElNRTogJ0RFQ1JFQVNFX1RJTUUnLFxuICBTRVRfSVNfVVNFUl9QTEFZSU5HOiAnU0VUX0lTX1VTRVJfUExBWUlORycsXG4gIFJFU0VUX0dBTUU6ICdSRVNFVF9HQU1FJyxcbn1cblxuZXhwb3J0IGNvbnN0IGluY3JlYXNlU2NvcmVBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBHQU1FX0FDVElPTlNfVFlQRVMuSU5DUkVBU0VfU0NPUkUsXG59KVxuXG5leHBvcnQgY29uc3Qgc2V0SXNVc2VyUGxheWluZ0FjdGlvbiA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBHQU1FX0FDVElPTlNfVFlQRVMuU0VUX0lTX1VTRVJfUExBWUlORyxcbiAgZGF0YSxcbn0pXG5cbmV4cG9ydCBjb25zdCByZXNldFRpbWVBY3Rpb24gPSAoc2Vjb25kcykgPT4gKHtcbiAgdHlwZTogR0FNRV9BQ1RJT05TX1RZUEVTLlJFU0VUX1RJTUUsXG4gIGRhdGE6IHNlY29uZHMsXG59KVxuXG5leHBvcnQgY29uc3QgcmVzZVNjb3JlQWN0aW9uID0gKHNlY29uZHMpID0+ICh7XG4gIHR5cGU6IEdBTUVfQUNUSU9OU19UWVBFUy5SRVNFVF9USU1FLFxuICBkYXRhOiBzZWNvbmRzLFxufSlcblxuZXhwb3J0IGNvbnN0IHJlc2V0R2FtZUFjdGlvbiA9ICgpID0+ICh7XG4gIHR5cGU6IEdBTUVfQUNUSU9OU19UWVBFUy5SRVNFVF9HQU1FLFxufSlcblxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlVGltZUFjdGlvbiA9ICgpID0+ICh7XG4gIHR5cGU6IEdBTUVfQUNUSU9OU19UWVBFUy5ERUNSRUFTRV9USU1FLFxufSlcblxuZXhwb3J0IGNvbnN0IGdhbWVPdmVyQWN0aW9uID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcblxuICBjb25zb2xlLmxvZyh7IHN0YXRlIH0pXG5cbiAgcmV0dXJuIGRpc3BhdGNoKHJlc2V0VGltZUFjdGlvbigpKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFdvcmRBY3Rpb24gPSAod29yZCkgPT4gKHtcbiAgdHlwZTogR0FNRV9BQ1RJT05TX1RZUEVTLlNFVF9DVVJSRU5UX1dPUkQsXG4gIGRhdGE6IHdvcmQsXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions/gameActions.js\n");

/***/ })

})