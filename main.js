(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../toastit/src/lib/toastit-align.ts":
/*!*******************************************!*\
  !*** ../toastit/src/lib/toastit-align.ts ***!
  \*******************************************/
/*! exports provided: ToastitAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastitAlign", function() { return ToastitAlign; });
var ToastitAlign;
(function (ToastitAlign) {
    ToastitAlign["BC"] = "bottom-center";
    ToastitAlign["BL"] = "bottom-left";
    ToastitAlign["BR"] = "bottom-right";
    ToastitAlign["TC"] = "top-center";
    ToastitAlign["TL"] = "top-left";
    ToastitAlign["TR"] = "top-right";
})(ToastitAlign || (ToastitAlign = {}));


/***/ }),

/***/ "../toastit/src/lib/toastit-animation.ts":
/*!***********************************************!*\
  !*** ../toastit/src/lib/toastit-animation.ts ***!
  \***********************************************/
/*! exports provided: ToastitAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastitAnimation", function() { return ToastitAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");

var ToastitAnimation = {
    fadeIn: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))],
    fadeOut: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))],
    shrinkIn: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '*' }))],
    shrinkOut: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 0 }))],
    slideInLeft: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-25%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0%)' }))],
    slideOutLeft: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-25%)' }))],
    slideInRight: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(25%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0%)' }))],
    slideOutRight: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(25%)' }))],
    slideInTop: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-25%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0%)' }))],
    slideOutTop: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-25%)' }))],
    slideInBottom: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(25%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0%)' }))],
    slideOutBottom: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(25%)' }))],
    scaleIn: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }))],
    scaleOut: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' }))]
};


/***/ }),

/***/ "../toastit/src/lib/toastit-type.ts":
/*!******************************************!*\
  !*** ../toastit/src/lib/toastit-type.ts ***!
  \******************************************/
/*! exports provided: ToastitType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastitType", function() { return ToastitType; });
var ToastitType;
(function (ToastitType) {
    ToastitType["Warning"] = "warning";
    ToastitType["Info"] = "info";
    ToastitType["Progress"] = "progress";
    ToastitType["Pin"] = "pin";
    ToastitType["Success"] = "success";
})(ToastitType || (ToastitType = {}));


/***/ }),

/***/ "../toastit/src/lib/toastit.component.html":
/*!*************************************************!*\
  !*** ../toastit/src/lib/toastit.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #elementRef class=\"toastit toastit--{{options.type}} toastit--align-{{options.align}}\" [class.toastit--adopted]=\"options.parent\">\r\n    <div class=\"toastit__body toastit__body--align-{{options.align}}\">\r\n        <span class=\"toastit__icon toastit__icon--{{options.type}}\"></span>\r\n        <div class=\"toastit__content\">\r\n            <p class=\"toastit__title toastit__title--{{options.type}}\">{{options.title}}</p>\r\n            <p *ngIf=\"options.message\" class=\"toastit__message toastit__message--{{options.type}}\">{{options.message}}</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../toastit/src/lib/toastit.component.scss":
/*!*************************************************!*\
  !*** ../toastit/src/lib/toastit.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toastit {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  position: fixed;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  transition: top 0.15s cubic-bezier(0.4, 0, 0.2, 1), bottom 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 250px; }\n  .toastit--adopted {\n    position: absolute; }\n  .toastit--align-bottom-center, .toastit--align-top-center {\n    left: 50%;\n    -webkit-transform-origin: left center;\n            transform-origin: left center; }\n  .toastit--align-bottom-left, .toastit--align-top-left {\n    left: 10px; }\n  .toastit--align-bottom-right, .toastit--align-top-right {\n    right: 10px; }\n  .toastit__body {\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.85);\n    border: 0;\n    border-radius: 4px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;\n    display: flex;\n    padding: 10px; }\n  .toastit__body--align-bottom-center, .toastit__body--align-top-center {\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n  .toastit__icon {\n    border-radius: 100%;\n    height: 32px;\n    line-height: 32px;\n    margin-right: 10px;\n    min-width: 32px;\n    text-align: center; }\n  .toastit__icon--info {\n      border: 2px solid #52dce6; }\n  .toastit__icon--info::after {\n        color: #52dce6;\n        content: \"I\";\n        font-size: 25px; }\n  .toastit__icon--pin {\n      border: 2px solid orange; }\n  .toastit__icon--pin::after {\n        color: orange;\n        content: \"P\";\n        font-size: 25px; }\n  .toastit__icon--progress {\n      -webkit-animation: progress-animation 1s linear infinite;\n              animation: progress-animation 1s linear infinite;\n      border: 2px solid hotpink; }\n  .toastit__icon--progress::after {\n        background-color: hotpink;\n        border-radius: 100%;\n        content: \"\";\n        display: block;\n        height: 8px;\n        margin: 3px auto;\n        width: 8px; }\n  .toastit__icon--success {\n      border: 2px solid #16dd37; }\n  .toastit__icon--success::after {\n        color: #16dd37;\n        content: \"S\";\n        font-size: 25px; }\n  .toastit__icon--warning {\n      border: 2px solid orangered; }\n  .toastit__icon--warning::after {\n        color: orangered;\n        content: \"W\";\n        font-size: 25px; }\n  .toastit__title {\n    color: #252525;\n    font-size: 12px;\n    font-weight: bold;\n    margin: 0;\n    word-break: break-word; }\n  .toastit__message {\n    color: #252525;\n    font-size: 12px;\n    margin: 0;\n    font-weight: normal;\n    word-break: break-word; }\n  @-webkit-keyframes progress-animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes progress-animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy8tLXByb2plY3RzLS0vbmd4LXRvYXN0aXQvcHJvamVjdHMvdG9hc3RpdC9zcmMvbGliL3RvYXN0aXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3SUFBd0k7RUFDeEksZUFBZTtFQUNmLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IsNkZBQTZGO0VBQzdGLFlBQVksRUFBQTtFQUVaO0lBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7SUFFSSxTQUFTO0lBQ1QscUNBQTZCO1lBQTdCLDZCQUE2QixFQUFBO0VBR2pDO0lBRUksVUFBVSxFQUFBO0VBR2Q7SUFFSSxXQUFXLEVBQUE7RUFHZjtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsU0FBUztJQUNULGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLGFBQWEsRUFBQTtFQUViO01BRUksbUNBQTJCO2NBQTNCLDJCQUEyQixFQUFBO0VBSW5DO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQUVsQjtNQUNJLHlCQUFtQyxFQUFBO0VBRHRDO1FBSU8sY0FBd0I7UUFDeEIsWUFBWTtRQUNaLGVBQWUsRUFBQTtFQUl2QjtNQUNJLHdCQUFrQyxFQUFBO0VBRHJDO1FBSU8sYUFBdUI7UUFDdkIsWUFBWTtRQUNaLGVBQWUsRUFBQTtFQUl2QjtNQUNJLHdEQUFnRDtjQUFoRCxnREFBZ0Q7TUFDaEQseUJBQW9DLEVBQUE7RUFGdkM7UUFLTyx5QkFBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixVQUFVLEVBQUE7RUFJbEI7TUFDSSx5QkFBa0MsRUFBQTtFQURyQztRQUlPLGNBQXVCO1FBQ3ZCLFlBQVk7UUFDWixlQUFlLEVBQUE7RUFJdkI7TUFDSSwyQkFBaUMsRUFBQTtFQURwQztRQUlPLGdCQUFzQjtRQUN0QixZQUFZO1FBQ1osZUFBZSxFQUFBO0VBSzNCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsU0FBUztJQUNULHNCQUFzQixFQUFBO0VBRzFCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0k7SUFBTywrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFDOUI7SUFBTyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQUZwQztFQUNJO0lBQU8sK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBQzlCO0lBQU8saUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvdG9hc3RpdC9zcmMvbGliL3RvYXN0aXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3RpdHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJvdHRvbSAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgICYtLWFkb3B0ZWR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWFsaWduLWJvdHRvbS1jZW50ZXIsXHJcbiAgICAmLS1hbGlnbi10b3AtY2VudGVye1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLS1hbGlnbi1ib3R0b20tbGVmdCxcclxuICAgICYtLWFsaWduLXRvcC1sZWZ0e1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tYWxpZ24tYm90dG9tLXJpZ2h0LFxyXG4gICAgJi0tYWxpZ24tdG9wLXJpZ2h0e1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JvZHl7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweCAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAmLS1hbGlnbi1ib3R0b20tY2VudGVyLFxyXG4gICAgICAgICYtLWFsaWduLXRvcC1jZW50ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9faWNvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi0taW5mb3tcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDgyLCAyMjAsIDIzMCk7XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoODIsIDIyMCwgMjMwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiSVwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1waW57XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDE2NSwgMCk7XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxNjUsIDApO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJQXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLXByb2dyZXNze1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHByb2dyZXNzLWFuaW1hdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEwNSwgMTgwKTtcclxuXHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA1LCAxODApO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLXN1Y2Nlc3N7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMiwgMjIxLCA1NSk7XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIsIDIyMSwgNTUpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJTXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLXdhcm5pbmd7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDY5LCAwKTtcclxuXHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDY5LCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiV1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIH1cclxuXHJcbiAgICAmX19tZXNzYWdle1xyXG4gICAgICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWFuaW1hdGlvbntcclxuICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "../toastit/src/lib/toastit.component.ts":
/*!***********************************************!*\
  !*** ../toastit/src/lib/toastit.component.ts ***!
  \***********************************************/
/*! exports provided: ToastitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastitComponent", function() { return ToastitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _toastit_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastit-type */ "../toastit/src/lib/toastit-type.ts");





var ToastitComponent = /** @class */ (function () {
    function ToastitComponent(builder) {
        this.builder = builder;
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.viewHeight = 0;
    }
    ToastitComponent.prototype.ngOnDestroy = function () {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        if (this.progressSubscription) {
            this.progressSubscription.unsubscribe();
        }
    };
    ToastitComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.options) {
            if (this.options.observable) {
                this.progressSubscription = this.options.observable.subscribe(function (success) { return _this.animateOut(); }, function (error) { return _this.animateOut(); });
            }
            else if (this.options.type !== _toastit_type__WEBPACK_IMPORTED_MODULE_4__["ToastitType"].Pin) {
                this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(this.options.timeout * 1000)
                    .subscribe(function (success) { return _this.animateOut(); });
            }
        }
    };
    ToastitComponent.prototype.ngAfterViewInit = function () {
        this.viewHeight = this.elementRef.nativeElement.clientHeight;
        this.animateIn();
    };
    ToastitComponent.prototype.animateIn = function () {
        var animation = this.builder.build(this.options.enterAnimation);
        var player = animation.create(this.elementRef.nativeElement);
        player.play();
        player.onDone(function () { return player.destroy(); });
    };
    ToastitComponent.prototype.animateOut = function () {
        var _this = this;
        var animation = this.builder.build(this.options.leaveAnimation);
        var player = animation.create(this.elementRef.nativeElement);
        player.play();
        player.onDone(function () {
            player.destroy();
            _this.animationDone.emit();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToastitComponent.prototype, "animationDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('elementRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ToastitComponent.prototype, "elementRef", void 0);
    ToastitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            // tslint:disable-next-line:component-selector
            selector: 'toastit',
            template: __webpack_require__(/*! ./toastit.component.html */ "../toastit/src/lib/toastit.component.html"),
            styles: [__webpack_require__(/*! ./toastit.component.scss */ "../toastit/src/lib/toastit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]])
    ], ToastitComponent);
    return ToastitComponent;
}());



/***/ }),

/***/ "../toastit/src/lib/toastit.module.ts":
/*!********************************************!*\
  !*** ../toastit/src/lib/toastit.module.ts ***!
  \********************************************/
/*! exports provided: ToastitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastitModule", function() { return ToastitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _toastit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastit.component */ "../toastit/src/lib/toastit.component.ts");
/* harmony import */ var _toastit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastit.service */ "../toastit/src/lib/toastit.service.ts");





var ToastitModule = /** @class */ (function () {
    function ToastitModule() {
    }
    ToastitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            bootstrap: [_toastit_component__WEBPACK_IMPORTED_MODULE_3__["ToastitComponent"]],
            declarations: [_toastit_component__WEBPACK_IMPORTED_MODULE_3__["ToastitComponent"]],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
            providers: [_toastit_service__WEBPACK_IMPORTED_MODULE_4__["ToastitService"]],
        })
    ], ToastitModule);
    return ToastitModule;
}());



/***/ }),

/***/ "../toastit/src/lib/toastit.service.ts":
/*!*********************************************!*\
  !*** ../toastit/src/lib/toastit.service.ts ***!
  \*********************************************/
/*! exports provided: ToastitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastitService", function() { return ToastitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toastit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastit.component */ "../toastit/src/lib/toastit.component.ts");
/* harmony import */ var _toastit_align__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastit-align */ "../toastit/src/lib/toastit-align.ts");
/* harmony import */ var _toastit_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastit-type */ "../toastit/src/lib/toastit-type.ts");
/* harmony import */ var _toastit_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toastit-animation */ "../toastit/src/lib/toastit-animation.ts");






var ToastitService = /** @class */ (function () {
    function ToastitService(factoryResolver, appRef, injector) {
        this.factoryResolver = factoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.list = {};
        this.uid = 0;
    }
    ToastitService.prototype.add = function (options) {
        var _this = this;
        options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { align: options.align || _toastit_align__WEBPACK_IMPORTED_MODULE_3__["ToastitAlign"].TR, enterAnimation: options.enterAnimation || _toastit_animation__WEBPACK_IMPORTED_MODULE_5__["ToastitAnimation"].fadeIn, id: this.uid, leaveAnimation: options.leaveAnimation || _toastit_animation__WEBPACK_IMPORTED_MODULE_5__["ToastitAnimation"].fadeOut, timeout: options.timeout || 5, type: options.type || _toastit_type__WEBPACK_IMPORTED_MODULE_4__["ToastitType"].Info });
        var componentRef = this.factoryResolver.resolveComponentFactory(_toastit_component__WEBPACK_IMPORTED_MODULE_2__["ToastitComponent"]).create(this.injector);
        var instance = componentRef.instance;
        instance.options = options;
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        var parent = document.body;
        if (typeof options.parent === 'string') {
            parent = document.querySelector(options.parent);
            if (!parent) {
                throw new Error("No html element found with this selector: '" + options.parent + "'");
            }
        }
        else if (options.parent) {
            parent = options.parent;
        }
        parent.appendChild(domElem);
        var anchor = this.getAlignAnchor(options.align);
        var position = this.getNextPositionInParent(parent, options.align);
        if (anchor === 'top') {
            domElem.firstChild.style.top = position;
        }
        else if (anchor === 'bottom') {
            domElem.firstChild.style.bottom = position;
        }
        instance.animationDone.subscribe(function (success) { return _this.remove(instance.options.id); });
        this.list[this.uid] = [componentRef, parent, options.align];
        this.uid++;
        return options.id;
    };
    ToastitService.prototype.remove = function (id) {
        var componentRef = this.list[id][0];
        var parent = this.list[id][1];
        var anchor = this.list[id][2];
        delete this.list[id];
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        this.relayout(parent, anchor);
    };
    ToastitService.prototype.removeAll = function (parent) {
        if (typeof parent === 'string') {
            parent = document.querySelector(parent);
        }
        for (var _i = 0, _a = Object.keys(this.list); _i < _a.length; _i++) {
            var id = _a[_i];
            if ((parent && this.list[id][1] === parent) || !parent) {
                this.appRef.detachView(this.list[id][0].hostView);
                this.list[id][0].destroy();
                delete this.list[id];
            }
        }
    };
    ToastitService.prototype.getNextPositionInParent = function (parent, anchor) {
        var pos = 10;
        for (var _i = 0, _a = Object.keys(this.list); _i < _a.length; _i++) {
            var id = _a[_i];
            var value = this.list[id];
            if (value[1] === parent && value[2] === anchor) {
                pos += value[0].instance.viewHeight + 5;
            }
        }
        return pos + 'px';
    };
    ToastitService.prototype.relayout = function (parent, anchor) {
        var pos = 10;
        for (var _i = 0, _a = Object.keys(this.list); _i < _a.length; _i++) {
            var id = _a[_i];
            var value = this.list[id];
            if (value[1] === parent && value[2] === anchor) {
                var componentRef = value[0];
                var domElement = componentRef.hostView.rootNodes[0];
                if (this.getAlignAnchor(anchor) === 'top') {
                    domElement.firstChild.style.top = pos + 'px';
                }
                else if (this.getAlignAnchor(anchor) === 'bottom') {
                    domElement.firstChild.style.bottom = pos + 'px';
                }
                pos += componentRef.instance.viewHeight + 5;
            }
        }
    };
    ToastitService.prototype.getAlignAnchor = function (alignment) {
        return alignment.split('-')[0];
    };
    ToastitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ToastitService);
    return ToastitService;
}());



/***/ }),

/***/ "../toastit/src/public_api.ts":
/*!************************************!*\
  !*** ../toastit/src/public_api.ts ***!
  \************************************/
/*! exports provided: ToastitModule, ToastitService, ToastitComponent, ToastitAnimation, ToastitAlign, ToastitType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_toastit_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/toastit.module */ "../toastit/src/lib/toastit.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastitModule", function() { return _lib_toastit_module__WEBPACK_IMPORTED_MODULE_0__["ToastitModule"]; });

/* harmony import */ var _lib_toastit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/toastit.service */ "../toastit/src/lib/toastit.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastitService", function() { return _lib_toastit_service__WEBPACK_IMPORTED_MODULE_1__["ToastitService"]; });

/* harmony import */ var _lib_toastit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/toastit.component */ "../toastit/src/lib/toastit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastitComponent", function() { return _lib_toastit_component__WEBPACK_IMPORTED_MODULE_2__["ToastitComponent"]; });

/* harmony import */ var _lib_toastit_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/toastit-animation */ "../toastit/src/lib/toastit-animation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastitAnimation", function() { return _lib_toastit_animation__WEBPACK_IMPORTED_MODULE_3__["ToastitAnimation"]; });

/* harmony import */ var _lib_toastit_align__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/toastit-align */ "../toastit/src/lib/toastit-align.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastitAlign", function() { return _lib_toastit_align__WEBPACK_IMPORTED_MODULE_4__["ToastitAlign"]; });

/* harmony import */ var _lib_toastit_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/toastit-type */ "../toastit/src/lib/toastit-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastitType", function() { return _lib_toastit_type__WEBPACK_IMPORTED_MODULE_5__["ToastitType"]; });

/*
 * Public API Surface of toastit
 */








/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy90b2FzdGl0LXRlc3Rlci9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\t<h1>Toastit</h1>\n\t<h2>Pronounciation \"tos-tit\"</h2>\n\t<div class=\"github-link\"></div>\n\t<div class=\"controls\">\n\t\t<div>\n\t\t\t<p>aligned to:</p>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"options.align == 'top-left'\" (change)=\"options.align = 'top-left'\" type=\"checkbox\" name=\"align-tl\">\n\t\t\t\t<label for=\"align-tl\">Top Left</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"options.align == 'top-center'\" (change)=\"options.align = 'top-center'\" type=\"checkbox\" name=\"align-tc\">\n\t\t\t\t<label for=\"align-tc\">Top Center</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"options.align == 'top-right'\" (change)=\"options.align = 'top-right'\" type=\"checkbox\" name=\"align-tr\">\n\t\t\t\t<label for=\"align-tr\">Top  Right</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"options.align == 'bottom-left'\" (change)=\"options.align = 'bottom-left'\" type=\"checkbox\" name=\"align-bl\">\n\t\t\t\t<label for=\"align-bl\">Bottom Left</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"options.align == 'bottom-center'\" (change)=\"options.align = 'bottom-center'\" type=\"checkbox\" name=\"align-bc\">\n\t\t\t\t<label for=\"align-bc\">Bottom Center</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"options.align == 'bottom-right'\" (change)=\"options.align = 'bottom-right'\" type=\"checkbox\" name=\"align-br\">\n\t\t\t\t<label for=\"align-br\">Bottom Right</label>\n\t\t\t</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<p>enters the screen with:</p>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'fadeIn'\" (change)=\"enterAnimation = 'fadeIn'\" type=\"checkbox\" name=\"fade-in\">\n\t\t\t\t<label for=\"fade-in\">Fade In</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'shrinkIn'\" (change)=\"enterAnimation = 'shrinkIn'\" type=\"checkbox\" name=\"shrink-in\">\n\t\t\t\t<label for=\"shrink-in\">Shrink In</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'slideInLeft'\" (change)=\"enterAnimation = 'slideInLeft'\" type=\"checkbox\" name=\"slide-in-left\">\n\t\t\t\t<label for=\"slide-in-left\">Slide In Left</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'slideInRight'\" (change)=\"enterAnimation = 'slideInRight'\" type=\"checkbox\" name=\"slide-in-right\">\n\t\t\t\t<label for=\"slide-in-right\">Slide In Right</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'slideInTop'\" (change)=\"enterAnimation = 'slideInTop'\" type=\"checkbox\" name=\"slide-in-top\">\n\t\t\t\t<label for=\"slide-in-top\">Slide In Top</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'slideInBottom'\" (change)=\"enterAnimation = 'slideInBottom'\" type=\"checkbox\" name=\"slide-in-bottom\">\n\t\t\t\t<label for=\"slide-in-bottom\">Slide In Bottom</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"enterAnimation == 'scaleIn'\" (change)=\"enterAnimation = 'scaleIn'\" type=\"checkbox\" name=\"scale-in\">\n\t\t\t\t<label for=\"scale-in\">Scale In</label>\n\t\t\t</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<p>leaves the screen with:</p>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'fadeOut'\" (change)=\"leaveAnimation = 'fadeOut'\" type=\"checkbox\" name=\"fade-out\">\n\t\t\t\t<label for=\"fade-out\">Fade Out</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'shrinkOut'\" (change)=\"leaveAnimation = 'shrinkOut'\" type=\"checkbox\" name=\"shrink-out\">\n\t\t\t\t<label for=\"shrink-out\">Shrink Out</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'slideOutLeft'\" (change)=\"leaveAnimation = 'slideOutLeft'\" type=\"checkbox\" name=\"slide-out-left\">\n\t\t\t\t<label for=\"slide-out-left\">Slide Out Left</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'slideOutRight'\" (change)=\"leaveAnimation = 'slideOutRight'\" type=\"checkbox\" name=\"slide-out-right\">\n\t\t\t\t<label for=\"slide-out-right\">Slide Out Right</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'slideOutTop'\" (change)=\"leaveAnimation = 'slideOutTop'\" type=\"checkbox\" name=\"slide-out-top\">\n\t\t\t\t<label for=\"slide-out-top\">Slide Out Top</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'slideOutBottom'\" (change)=\"leaveAnimation = 'slideOutBottom'\" type=\"checkbox\" name=\"slide-out-bottom\">\n\t\t\t\t<label for=\"slide-out-bottom\">Slide Out Bottom</label>\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t<input [checked]=\"leaveAnimation == 'scaleOut'\" (change)=\"leaveAnimation = 'scaleOut'\" type=\"checkbox\" name=\"scale-out\">\n\t\t\t\t<label for=\"scale-out\">Scale Out</label>\n\t\t\t</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<p>adopted by:</p>\n\t\t\t<input [(ngModel)]=\"options.parent\" type=\"text\">\n\t\t</div>\n\t\t<div>\n\t\t\t<button (click)=\"onAddToastit()\">Add it</button>\n\t\t\t<button (click)=\"onRemoveAll()\">Remove All</button>\n\t\t</div>\n\t</div>\n\t<div class=\"footer\"></div>\n</div> -->\n<section class=\"wrap\">\n\t<h1>Toast.js</h1>\n\t<h2>A JavaScript prototype for Toast messages</h2>\n\t<p class=\"credits\">Project maintained by <a href=\"https://github.com/MonoLizard\" target=\"_blank\">MonoLizard</a> </p>\n\t<p class=\"badges\">\n\t\t<a class=\"github-button\" href=\"https://github.com/MonoLizard/ngx-toastit\" data-show-count=\"true\" aria-label=\"Star MonoLizard/ngx-toastit on GitHub\">Star</a>\n\t\t<a class=\"npm\" href=\"https://www.npmjs.com/package/ngx-toastit\" target=\"_blank\"><img src=\"https://img.shields.io/npm/v/ngx-toastit.svg\" alt=\"npm-badge\"></a>\n\t</p>\n\t<div class=\"row\">\n\t\t<div class=\"col-1-2\">\n\t\t\t<div class=\"group\">\n\t\t\t\t<label for=\"\">Title</label>\n\t\t\t\t<input [(ngModel)]=\"options.title\" type=\"text\" placeholder=\"Enter a title\">\n\t\t\t</div>\n\t\t\t<div class=\"group\">\n\t\t\t\t<label for=\"\">Message</label>\n\t\t\t\t<textarea [(ngModel)]=\"options.message\" name=\"\" placeholder=\"Enter a message\"></textarea>\n\t\t\t</div>\n\t\t\t<div class=\"group\">\n\t\t\t\t<label for=\"\">TYPE</label>\n\t\t\t\t<div class=\"spec\">\n\t\t\t\t\t<div class=\"group\">\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.type == 'success'\" (change)=\"options.type = 'success'\">Success\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.type == 'info'\" (change)=\"options.type = 'info'\">Info\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.type == 'warning'\" (change)=\"options.type = 'warning'\">Warning\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"group\">\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.type == 'pin'\" (change)=\"options.type = 'pin'\">Pin\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.type == 'progress'\" (change)=\"options.type = 'progress'\">Progress\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"group\">\n\t\t\t\t\t<label for=\"\">Timeout</label>\n\t\t\t\t\t<input [(ngModel)]=\"options.timeout\" type=\"text\" placeholder=\"400\">\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-1-2\">\n\t\t\t\n\t\t\t<div class=\"group\">\n\t\t\t\t<label for=\"\">POSITION</label>\n\t\t\t\t<div class=\"spec\">\n\t\t\t\t\t<div class=\"group\">\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.align == 'top-right'\" (change)=\"options.align = 'top-right'\">Top Right\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.align == 'top-center'\" (change)=\"options.align = 'top-center'\">Top Center\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.align == 'top-left'\" (change)=\"options.align = 'top-left'\">Top Left\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"group\">\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.align == 'bottom-right'\" (change)=\"options.align = 'bottom-right'\">Bottom Right\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.align == 'bottom-center'\" (change)=\"options.align = 'bottom-center'\">Bottom Center\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" [checked]=\"options.align == 'bottom-left'\" (change)=\"options.align = 'bottom-left'\">Bottom Left\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<label for=\"\">ANIMATIONS</label>\n\t\t\t<div class=\"spec\">\n\t\t\t\t<div class=\"group\">\n\t\t\t\t\t<label for=\"\">ENTER</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"enterAnimation == 'fadeIn'\" (change)=\"enterAnimation = 'fadeIn'\">fadeIn\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"enterAnimation == 'shrinkIn'\" (change)=\"enterAnimation = 'shrinkIn'\">shrinkIn\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\"[checked]=\"enterAnimation == 'scaleIn'\" (change)=\"enterAnimation = 'scaleIn'\">scaleIn\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\"[checked]=\"enterAnimation == 'slideInLeft'\" (change)=\"enterAnimation = 'slideInLeft'\">slideInLeft\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\"[checked]=\"enterAnimation == 'slideInRight'\" (change)=\"enterAnimation = 'slideInRight'\">slideInRight\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\"[checked]=\"enterAnimation == 'slideInTop'\" (change)=\"enterAnimation = 'slideInTop'\">slideInTop\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\"[checked]=\"enterAnimation == 'slideInBottom'\" (change)=\"enterAnimation = 'slideInBottom'\">slideInBottom\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"group\">\n\t\t\t\t\t<label for=\"\">LEAVE</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'fadeOut'\" (change)=\"leaveAnimation = 'fadeOut'\">fadeOut\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'shrinkOut'\" (change)=\"leaveAnimation = 'shrinkOut'\">shrinkOut\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'scaleOut'\" (change)=\"leaveAnimation = 'scaleOut'\">scaleOut\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'slideOutLeft'\" (change)=\"leaveAnimation = 'slideOutLeft'\">slideOutLeft\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'slideOutRight'\" (change)=\"leaveAnimation = 'slideOutRight'\">slideOutRight\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'slideOutTop'\" (change)=\"leaveAnimation = 'slideOutTop'\">slideOutTop\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio\">\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"leaveAnimation == 'slideOutBottom'\" (change)=\"leaveAnimation = 'slideOutBottom'\">slideOutBottom\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"buttons\">\n\t\t<button type=\"button\" (click)=\"onAddToastit()\" class=\"show\">ADD TOAST</button>\n\t\t<button type=\"button\" (click)=\"onRemoveAll()\" class=\"clear\">REMOVE ALL</button>\n\t\t<button type=\"button\" (click)=\"onRemoveLast()\" class=\"clear\">REMOVE LAST</button>\n\t</div>\n\t\n\t<div class=\"options-wrap\">\n\t\t<label for=\"\">CODE</label>\n\t\t<div class=\"options\">\n\t\t\t<pre>this.toastitService.add({{\"{\"}} title: '{{options.title}}', message: '{{options.message}}', type: ToastitType.{{options.type | titlecase}}, timeout: {{options.timeout | number}}, align: ToastitAlign.{{getAlign(options.align) | uppercase}}, enterAnimation: ToastitAnimation.{{enterAnimation}}, leaveAnimation: ToastitAnimation.{{leaveAnimation}} })</pre>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/toastit/src/public_api */ "../toastit/src/public_api.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(toastitService) {
        this.toastitService = toastitService;
        this.enterAnimation = 'fadeIn';
        this.leaveAnimation = 'fadeOut';
        this.options = {
            align: projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitAlign"].TR,
            type: projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitType"].Success,
            title: 'I am a Tos-tit',
            message: 'I have the power',
            enterAnimation: projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitAnimation"][this.enterAnimation],
            leaveAnimation: projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitAnimation"][this.leaveAnimation],
            timeout: 5
        };
    }
    AppComponent.prototype.onAddToastit = function () {
        if (!this.options.title) {
            this.options.title = 'What did you expect?';
        }
        this.options.enterAnimation = projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitAnimation"][this.enterAnimation];
        this.options.leaveAnimation = projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitAnimation"][this.leaveAnimation];
        this.lastId = this.toastitService.add(this.options);
    };
    AppComponent.prototype.onRemoveAll = function () {
        this.toastitService.removeAll();
    };
    AppComponent.prototype.onRemoveLast = function () {
        this.toastitService.remove(this.lastId);
    };
    AppComponent.prototype.getAlign = function (value) {
        var values = value.split('-');
        return values[0][0] + values[1][0];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastitService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/toastit/src/public_api */ "../toastit/src/public_api.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                projects_toastit_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ToastitModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/--projects--/ngx-toastit/projects/toastit-tester/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map