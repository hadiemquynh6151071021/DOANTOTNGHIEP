"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(features)/construction-sites/[id]/page",{

/***/ "(app-pages-browser)/./src/app/(features)/construction-sites/[id]/page.tsx":
/*!*************************************************************!*\
  !*** ./src/app/(features)/construction-sites/[id]/page.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _apis_plan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/plan */ \"(app-pages-browser)/./src/apis/plan.ts\");\n/* harmony import */ var _components_TabPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TabPanel */ \"(app-pages-browser)/./src/components/TabPanel.tsx\");\n/* harmony import */ var _features_plan_list_PlanTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/plan/list/PlanTable */ \"(app-pages-browser)/./src/features/plan/list/PlanTable.tsx\");\n/* harmony import */ var _layouts_MainContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/MainContainer */ \"(app-pages-browser)/./src/layouts/MainContainer.tsx\");\n/* harmony import */ var _layouts_PageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/PageContainer */ \"(app-pages-browser)/./src/layouts/PageContainer.tsx\");\n/* harmony import */ var _barrel_optimize_names_Tab_Tabs_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Tab,Tabs!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js\");\n/* harmony import */ var _barrel_optimize_names_Tab_Tabs_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Tab,Tabs!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page(param) {\n    let { params: { id } } = param;\n    _s();\n    const [tabValue, setTabValue] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    function handleChangeTab(event, newValue) {\n        setTabValue(newValue);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_PageContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        breadcrumbs: [\n            {\n                text: \"Trang chủ\",\n                href: \"/home\"\n            },\n            {\n                text: \"Kế hoạch c\\xf4ng tr\\xecnh\"\n            }\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            fixedHeight: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_Tabs_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    value: tabValue,\n                    onChange: handleChangeTab,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_Tabs_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Vận h\\xe0nh\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_Tabs_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Chờ duyệt\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_Tabs_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Kh\\xe1c\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TabPanel__WEBPACK_IMPORTED_MODULE_2__.CustomTabPanel, {\n                    value: tabValue,\n                    index: 0,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_plan_list_PlanTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        planType: _apis_plan__WEBPACK_IMPORTED_MODULE_1__.PlanListType.Approved,\n                        enabled: false,\n                        plansFromCE: true,\n                        constructionsiteid: id.valueOf()\n                    }, void 0, false, {\n                        fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TabPanel__WEBPACK_IMPORTED_MODULE_2__.CustomTabPanel, {\n                    value: tabValue,\n                    index: 1,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_plan_list_PlanTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        planType: _apis_plan__WEBPACK_IMPORTED_MODULE_1__.PlanListType.Init,\n                        enabled: false,\n                        plansFromCE: true,\n                        constructionsiteid: id.valueOf()\n                    }, void 0, false, {\n                        fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TabPanel__WEBPACK_IMPORTED_MODULE_2__.CustomTabPanel, {\n                    value: tabValue,\n                    index: 2,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_plan_list_PlanTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        planType: _apis_plan__WEBPACK_IMPORTED_MODULE_1__.PlanListType.Rejected,\n                        enabled: false,\n                        plansFromCE: true,\n                        constructionsiteid: id.valueOf()\n                    }, void 0, false, {\n                        fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\TailieuCNTT\\\\DOANTOTNGHIEP\\\\src\\\\app\\\\(features)\\\\construction-sites\\\\[id]\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"8xDoMf2dCMwhPWqj+mT3H7/i8ZA=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGZlYXR1cmVzKS9jb25zdHJ1Y3Rpb24tc2l0ZXMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ1c7QUFDQztBQUNIO0FBQ0E7QUFDVjtBQUNUO0FBRWxCLFNBQVNRLEtBQUssS0FJNUI7UUFKNEIsRUFDekJDLFFBQVEsRUFBRUMsRUFBRSxFQUFFLEVBR2pCLEdBSjRCOztJQU16QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFcEQsU0FBU00sZ0JBQWdCQyxLQUEyQixFQUFFQyxRQUFnQjtRQUNyRUgsWUFBWUc7SUFDYjtJQUVHLHFCQUNJLDhEQUFDWCw4REFBYUE7UUFDVlksYUFBYTtZQUNUO2dCQUNJQyxNQUFNO2dCQUNOQyxNQUFNO1lBQ1Y7WUFDQTtnQkFDSUQsTUFBTTtZQUNWO1NBQ0g7a0JBRUQsNEVBQUNkLDhEQUFhQTtZQUFDZ0IsYUFBYTs7OEJBQ3BDLDhEQUFDYixvRkFBSUE7b0JBQ0pjLE9BQU9UO29CQUNQVSxVQUFVUjs7c0NBRVYsOERBQUNSLG9GQUFHQTs0QkFBQ2lCLE9BQU07Ozs7OztzQ0FDWCw4REFBQ2pCLG9GQUFHQTs0QkFBQ2lCLE9BQU07Ozs7OztzQ0FDWCw4REFBQ2pCLG9GQUFHQTs0QkFBQ2lCLE9BQU07Ozs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ3JCLGdFQUFjQTtvQkFBQ21CLE9BQU9UO29CQUFVWSxPQUFPOzhCQUN2Qyw0RUFBQ3JCLHFFQUFTQTt3QkFBQ3NCLFVBQVV4QixvREFBWUEsQ0FBQ3lCLFFBQVE7d0JBQUVDLFNBQVM7d0JBQU9DLGFBQWE7d0JBQU1DLG9CQUFvQmxCLEdBQUdtQixPQUFPOzs7Ozs7Ozs7Ozs4QkFFOUcsOERBQUM1QixnRUFBY0E7b0JBQUNtQixPQUFPVDtvQkFBVVksT0FBTzs4QkFDdkMsNEVBQUNyQixxRUFBU0E7d0JBQUNzQixVQUFVeEIsb0RBQVlBLENBQUM4QixJQUFJO3dCQUFFSixTQUFTO3dCQUFPQyxhQUFhO3dCQUFNQyxvQkFBb0JsQixHQUFHbUIsT0FBTzs7Ozs7Ozs7Ozs7OEJBRTFHLDhEQUFDNUIsZ0VBQWNBO29CQUFDbUIsT0FBT1Q7b0JBQVVZLE9BQU87OEJBQ3ZDLDRFQUFDckIscUVBQVNBO3dCQUFDc0IsVUFBVXhCLG9EQUFZQSxDQUFDK0IsUUFBUTt3QkFBRUwsU0FBUzt3QkFBT0MsYUFBYTt3QkFBTUMsb0JBQW9CbEIsR0FBR21CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEg7R0EvQ3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oZmVhdHVyZXMpL2NvbnN0cnVjdGlvbi1zaXRlcy9baWRdL3BhZ2UudHN4PzdjMmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBQbGFuTGlzdFR5cGUgfSBmcm9tIFwiQC9hcGlzL3BsYW5cIjtcclxuaW1wb3J0IHsgQ3VzdG9tVGFiUGFuZWx9IGZyb20gXCJAL2NvbXBvbmVudHMvVGFiUGFuZWxcIjtcclxuaW1wb3J0IFBsYW5UYWJsZSBmcm9tIFwiQC9mZWF0dXJlcy9wbGFuL2xpc3QvUGxhblRhYmxlXCI7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCJAL2xheW91dHMvTWFpbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgUGFnZUNvbnRhaW5lciBmcm9tIFwiQC9sYXlvdXRzL1BhZ2VDb250YWluZXJcIjtcclxuaW1wb3J0IHsgVGFiLCBUYWJzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe1xyXG4gICAgcGFyYW1zOiB7IGlkIH0gXHJcbn06IHtcclxuICAgIHBhcmFtczogeyBpZDogbnVtYmVyIH1cclxufSkge1xyXG5cclxuICAgIGNvbnN0IFt0YWJWYWx1ZSwgc2V0VGFiVmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVGFiKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgbmV3VmFsdWU6IG51bWJlcikge1xyXG5cdFx0c2V0VGFiVmFsdWUobmV3VmFsdWUpO1xyXG5cdH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZUNvbnRhaW5lclxyXG4gICAgICAgICAgICBicmVhZGNydW1icz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVHJhbmcgY2jhu6dcIixcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9ob21lXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJL4bq/IGhv4bqhY2ggY8O0bmcgdHLDrG5oXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPE1haW5Db250YWluZXIgZml4ZWRIZWlnaHQ9e3RydWV9PlxyXG5cdFx0XHRcdDxUYWJzXHJcblx0XHRcdFx0XHR2YWx1ZT17dGFiVmFsdWV9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGFifSBcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGFiIGxhYmVsPVwiVuG6rW4gaMOgbmhcIiAvPlxyXG5cdFx0XHRcdFx0PFRhYiBsYWJlbD1cIkNo4budIGR1eeG7h3RcIiAvPlxyXG5cdFx0XHRcdFx0PFRhYiBsYWJlbD1cIktow6FjXCIgLz5cclxuXHRcdFx0XHQ8L1RhYnM+XHJcblxyXG5cdFx0XHRcdDxDdXN0b21UYWJQYW5lbCB2YWx1ZT17dGFiVmFsdWV9IGluZGV4PXswfT5cclxuXHRcdFx0XHRcdDxQbGFuVGFibGUgcGxhblR5cGU9e1BsYW5MaXN0VHlwZS5BcHByb3ZlZH0gZW5hYmxlZD17ZmFsc2V9IHBsYW5zRnJvbUNFPXt0cnVlfSBjb25zdHJ1Y3Rpb25zaXRlaWQ9e2lkLnZhbHVlT2YoKX0vPlxyXG5cdFx0XHRcdDwvQ3VzdG9tVGFiUGFuZWw+XHJcblx0XHRcdFx0PEN1c3RvbVRhYlBhbmVsIHZhbHVlPXt0YWJWYWx1ZX0gaW5kZXg9ezF9PlxyXG5cdFx0XHRcdFx0PFBsYW5UYWJsZSBwbGFuVHlwZT17UGxhbkxpc3RUeXBlLkluaXR9IGVuYWJsZWQ9e2ZhbHNlfSBwbGFuc0Zyb21DRT17dHJ1ZX0gY29uc3RydWN0aW9uc2l0ZWlkPXtpZC52YWx1ZU9mKCl9Lz5cclxuXHRcdFx0XHQ8L0N1c3RvbVRhYlBhbmVsPlxyXG5cdFx0XHRcdDxDdXN0b21UYWJQYW5lbCB2YWx1ZT17dGFiVmFsdWV9IGluZGV4PXsyfT5cclxuXHRcdFx0XHRcdDxQbGFuVGFibGUgcGxhblR5cGU9e1BsYW5MaXN0VHlwZS5SZWplY3RlZH0gZW5hYmxlZD17ZmFsc2V9IHBsYW5zRnJvbUNFPXt0cnVlfSBjb25zdHJ1Y3Rpb25zaXRlaWQ9e2lkLnZhbHVlT2YoKX0vPlxyXG5cdFx0XHRcdDwvQ3VzdG9tVGFiUGFuZWw+XHJcblx0XHRcdDwvTWFpbkNvbnRhaW5lcj5cclxuICAgICAgICBcclxuICAgICAgICA8L1BhZ2VDb250YWluZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUGxhbkxpc3RUeXBlIiwiQ3VzdG9tVGFiUGFuZWwiLCJQbGFuVGFibGUiLCJNYWluQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsIlRhYiIsIlRhYnMiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwYXJhbXMiLCJpZCIsInRhYlZhbHVlIiwic2V0VGFiVmFsdWUiLCJoYW5kbGVDaGFuZ2VUYWIiLCJldmVudCIsIm5ld1ZhbHVlIiwiYnJlYWRjcnVtYnMiLCJ0ZXh0IiwiaHJlZiIsImZpeGVkSGVpZ2h0IiwidmFsdWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiaW5kZXgiLCJwbGFuVHlwZSIsIkFwcHJvdmVkIiwiZW5hYmxlZCIsInBsYW5zRnJvbUNFIiwiY29uc3RydWN0aW9uc2l0ZWlkIiwidmFsdWVPZiIsIkluaXQiLCJSZWplY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(features)/construction-sites/[id]/page.tsx\n"));

/***/ })

});