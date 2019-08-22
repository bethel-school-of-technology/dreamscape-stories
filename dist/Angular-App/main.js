(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/sign-up/sign-up.component */ "./src/app/components/login/sign-up/sign-up.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forum/forum.component */ "./src/app/components/forum/forum.component.ts");
/* harmony import */ var _components_blog_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/add-post/add-post.component */ "./src/app/components/blog/add-post/add-post.component.ts");
/* harmony import */ var _components_home_subscriber_form_subscriber_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/subscriber-form/subscriber-form.component */ "./src/app/components/home/subscriber-form/subscriber-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/forgot-password/forgot-password.component */ "./src/app/components/login/forgot-password/forgot-password.component.ts");












var routes = [
    {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "about-us",
        component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"]
    },
    {
        path: "sign-up",
        component: _components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    },
    {
        path: "blog",
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"]
    },
    {
        path: "forum",
        component: _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"]
    },
    {
        path: "add-post",
        component: _components_blog_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_8__["AddPostComponent"]
    },
    {
        path: "subscriber-form",
        component: _components_home_subscriber_form_subscriber_form_component__WEBPACK_IMPORTED_MODULE_9__["SubscriberFormComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: "forgot-password",
        component: _components_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n    background-color: rgba(0, 0, 0, 0.85);\n    color: white;\n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n}\n.form-control {\n    background-color: rgba(0, 0, 0, 0);\n    color: white;\n}\n.dropdown-item {\n    color:rgba(9, 62, 235, 0.664);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOSwgNjIsIDIzNSwgMC4zNTApO1xufVxuLmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZHJvcGRvd24taXRlbSB7XG4gICAgY29sb3I6cmdiYSg5LCA2MiwgMjM1LCAwLjY2NCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../assets/logo11.png\" width=\"55\" height=\"35\" alt=\"\">\n  </a>\n  <a class=\"navbar-brand\" href=\"\">DreamScape</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"blog\">Blog <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"about-us\">About Us! <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"forum\">Forum! <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/sign-up/sign-up.component */ "./src/app/components/login/sign-up/sign-up.component.ts");
/* harmony import */ var _components_blog_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/add-post/add-post.component */ "./src/app/components/blog/add-post/add-post.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forum/forum.component */ "./src/app/components/forum/forum.component.ts");
/* harmony import */ var _components_home_subscriber_form_subscriber_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/subscriber-form/subscriber-form.component */ "./src/app/components/home/subscriber-form/subscriber-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/forgot-password/forgot-password.component */ "./src/app/components/login/forgot-password/forgot-password.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _components_blog_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_7__["AddPostComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_10__["ForumComponent"],
                _components_home_subscriber_form_subscriber_form_component__WEBPACK_IMPORTED_MODULE_11__["SubscriberFormComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-6  {\n    color: white;\n    border-radius: 25px;\n    background-color:rgba(0, 0, 0, 0.342);\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px;\n}\n.container {\n    align-content: center;\n}\n.row {\n    margin: auto;\n}\n#profilepic2 {\n    height: auto;\n    width: 43%;\n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n}\n#profilepic {\n    height: auto;\n    width: 60%;\n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n\n}\nh1 {\n    text-align: center;\n    color: white;\n    margin: 20px;\n}\nh3 {\n    text-align: center;\n}\n.site-footer {\n    position: auto;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.349);\n    color: blue;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.fa {\n    padding: 30px;\n    font-size: 28px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n}\n.fa:hover {\n    opacity: 0.7;\n}\n/* Facebook */\n.fa-facebook {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n/* Instagram */\n.fa-instagram {\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLGFBQWE7QUFDakI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix5Q0FBeUM7O0FBRTdDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUdBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLGFBQWE7QUFDYjtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFFQSxjQUFjO0FBQ2Q7SUFDSSw4R0FBOEc7SUFDOUcsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtNiAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjM0Mik7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg5LCA2MiwgMjM1LCAwLjM1MCk7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5jb250YWluZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb3cge1xuICAgIG1hcmdpbjogYXV0bztcbn1cbiNwcm9maWxlcGljMiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MyU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDksIDYyLCAyMzUsIDAuMzUwKTtcbn1cbiNwcm9maWxlcGljIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOSwgNjIsIDIzNSwgMC4zNTApO1xuXG59XG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5oMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpdGUtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cblxuLmZhIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5mYS1mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg5LCA2MiwgMjM1LCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFR3aXR0ZXIgKi9cbi5mYS10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDksIDYyLCAyMzUsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogSW5zdGFncmFtICovXG4uZmEtaW5zdGFncmFtIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About the authors...</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <img id=\"profilepic\" src=\"../../assets/kellan.jpg\" alt=\"Kellan\">\n      <h3>Kellan</h3>\n      <p>Kellan Ryan is a 25-year-old culinary artist whom also enjoys swimming, going to the movies and eating out. He is brave and inspiring, but can also be very boring and a bit beautiful. He is an US Citizen Jedi who also defines himself as gorgeous. He finished school and then left academia to find the girl of his dreams. Physically, Kellan is in pretty good shape. He is average-height with pale skin, dirty blonde hair and green eyes. He grew up in a working class neighborhood. Kellan grew up as the 2nd child in a litter of 6. His parents are lovely. Though divine wisdom they provided a happy and stable home.</p>\n      <p>He is married to Elizabeth Flossie Ryan. Beth is 2 years older than him and works as a saint, raising this man's (currently) only child Ariana Josephine Ryan . (There are signs of another to come. Yay!) Ariana is 1 year old and thriving! Kellan's best friend is a genius named Jesus! They get on well most of the time. He also hangs around with Aaron and Kade Ryan his 2 brothers. They enjoy eating food together as all humans should! Kellan currently lives in the Dakotas where he is trying to escape from a really cramped apartment.</p>\n      <p>-Kellan</p>\n    </div>\n    <div class=\"col-6\">\n        <img id=\"profilepic2\" src=\"../../assets/sam.png\" alt=\"Sam\">\n        <h3>Sam</h3>\n        <p>Sam is the team’s sole Canadian, growing up just outside of Vancouver, BC. He did his first round of post-secondary at the age of 20, studying Media Arts while enduring the sub-zero temperatures of the Saskatchewan winters. Shortly after, he got married, had four kids, and decided it would be just great to do another round of post-secondary, this time in the area of web development. Sam now lives on Vancouver Island and spends his time finding a good balance between hanging out with his family, creating videos, and learning how to code.</p>\n        <p>-Sam</p>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n        <img id=\"profilepic2\" src=\"../../assets/heidi.jpeg\" alt=\"heidi\">\n        <h3>Heidi</h3>\n        <p>Kellan Ryan is a 25-year-old culinary artist whom also enjoys swimming, going to the movies and eating out. He is brave and inspiring, but can also be very boring and a bit beautiful. He is an US Citizen Jedi who also defines himself as gorgeous. He finished school and then left academia to find the girl of his dreams. Physically, Kellan is in pretty good shape. He is average-height with pale skin, dirty blonde hair and green eyes. He grew up in a working class neighborhood. Kellan grew up as the 2nd child in a litter of 6. His parents are lovely. Though divine wisdom they provided a happy and stable home.</p>\n        <p>He is married to Elizabeth Flossie Ryan. Beth is 2 years older than him and works as a saint, raising this man's (currently) only child Ariana Josephine Ryan . (There are signs of another to come. Yay!) Ariana is 1 year old and thriving! Kellan's best friend is a genius named Jesus! They get on well most of the time. He also hangs around with Aaron and Kade Ryan his 2 brothers. They enjoy eating food together as all humans should! Kellan currently lives in the Dakotas where he is trying to escape from a really cramped apartment.</p>\n        <p>-Heidi</p>\n      </div>\n      <div class=\"col-6\">\n          <img id=\"profilepic2\" src=\"../../assets/Lewis.jpeg\" alt=\"lewis\">\n          <h3>Lewis</h3>\n          <p>Kellan Ryan is a 25-year-old culinary artist whom also enjoys swimming, going to the movies and eating out. He is brave and inspiring, but can also be very boring and a bit beautiful. He is an US Citizen Jedi who also defines himself as gorgeous. He finished school and then left academia to find the girl of his dreams. Physically, Kellan is in pretty good shape. He is average-height with pale skin, dirty blonde hair and green eyes. He grew up in a working class neighborhood. Kellan grew up as the 2nd child in a litter of 6. His parents are lovely. Though divine wisdom they provided a happy and stable home.</p>\n          <p>He is married to Elizabeth Flossie Ryan. Beth is 2 years older than him and works as a saint, raising this man's (currently) only child Ariana Josephine Ryan . (There are signs of another to come. Yay!) Ariana is 1 year old and thriving! Kellan's best friend is a genius named Jesus! They get on well most of the time. He also hangs around with Aaron and Kade Ryan his 2 brothers. They enjoy eating food together as all humans should! Kellan currently lives in the Dakotas where he is trying to escape from a really cramped apartment.</p>\n          <p>-Lewis</p>\n      </div>\n  </div>\n</div>\n<footer class=\"site-footer\" role=\"contentinfo\">\n    <div class=\"container\">\n        <div class=\"footernav\">\n            <h3 class=\"mb-4\">Navigation</h3>\n            <ul class=\"list-unstyled footer-link\">\n                <li><a href=\"\">Home</a></li>\n                <li><a href=\"blog\">Blog</a></li>\n                <li><a href=\"about-us\">About Us</a></li>\n                <li><a href=\"forum\">Forum</a></li>\n                <li><a href=\"login\">Login</a></li>\n            </ul>\n        </div>\n        <div class=\"socialmedia\">\n            <ul class=\"list-unstyled footer-link d-flex footer-social\">\n                <li><a href=\"https://www.facebook.com/bethelschooloftechnology\" class=\"p-2\"><span class=\"fa fa-facebook fa-lg\"></span></a></li>\n                <li><a href=\"https://twitter.com/bethelredding\" class=\"p-2\"><span class=\"fa fa-twitter fa-lg\"></span></a></li>\n                <li><a href=\"https://www.instagram.com/betheltech/\" class=\"p-2\"><span class=\"fa fa-instagram fa-lg\"></span></a></li>\n            </ul>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/add-post/add-post.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/blog/add-post/add-post.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 70%;\n    height: auto;\n    margin: 0 auto;\n    color: white;\n}\n#dreaminput {\n    background-color:rgba(0, 0, 0, 0.075); \n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2FkZC1wb3N0L2FkZC1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9hZGQtcG9zdC9hZGQtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2RyZWFtaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjA3NSk7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/blog/add-post/add-post.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/add-post/add-post.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<form id=\"container\">\n    <div class=\"form-group\">\n        <label for=\"dreaminput\">Dream input space...</label>\n        <textarea class=\"form-control transparent-input\" id=\"dreaminput\" rows=\"3\"></textarea>\n    </div>\n    <button type=\"submit\" (click)=\"addPost(content)\" class=\"btn btn-outline-light my-2 my-sm-0\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/components/blog/add-post/add-post.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/blog/add-post/add-post.component.ts ***!
  \****************************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddPostComponent = /** @class */ (function () {
    function AddPostComponent() {
        this.posts = [];
    }
    AddPostComponent.prototype.ngOnInit = function () {
    };
    AddPostComponent.prototype.addPost = function (content) {
        var post = { "content": content.value };
        if (localStorage.getItem("posts")) {
            this.posts = JSON.parse(localStorage.getItem("posts"));
        }
        this.posts.push(post);
        localStorage.setItem("posts", JSON.stringify(this.posts));
        content.value = "";
    };
    AddPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/components/blog/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/components/blog/add-post/add-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 70%;\n    height: auto;\n    margin: 0 auto;\n    color: white;\n    background-color:rgba(0, 0, 0, 0.075); \n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350); \n}\nh1 {\n    text-align: center;\n    color: white;\n}\n.post {\n    padding: 20px;\n}\n.dropdown-menu {\n    background-color:  rgba(0, 0, 0, 0.85);\n    color: white;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n}\n.form-control {\n    background-color: rgba(0, 0, 0, 0);\n    color: white;\n}\n.site-footer {\n    position: auto;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.349);\n    color: blue;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.fa {\n    padding: 30px;\n    font-size: 28px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n}\n.fa:hover {\n    opacity: 0.7;\n}\n/* Facebook */\n.fa-facebook {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n/* Instagram */\n.fa-instagram {\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1oseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUdBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLGFBQWE7QUFDYjtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFFQSxjQUFjO0FBQ2Q7SUFDSSw4R0FBOEc7SUFDOUcsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMDc1KTsgXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDksIDYyLCAyMzUsIDAuMzUwKTsgXG59XG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5wb3N0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDksIDYyLCAyMzUsIDAuMzUwKTtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnNpdGUtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cblxuLmZhIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5mYS1mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg5LCA2MiwgMjM1LCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFR3aXR0ZXIgKi9cbi5mYS10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDksIDYyLCAyMzUsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogSW5zdGFncmFtICovXG4uZmEtaW5zdGFncmFtIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h1>Our Blog...</h1>\n  <div class=\"post\" *ngFor = \"let post of posts; let i = index\">\n    <div id= \"container\">\n      <div class=\"card-body\">\n        <div>\n          <button class='btn' style=\"float: right; color: red\" (click)=\"onClickDelete()\">X</button>\n          <h5 class=\"card-user\">{{user.name}}</h5>\n        </div>\n        <div>\n          <p class=\"card-text\">{{post.content}}</p>\n        </div>\n        <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" style= \"color: white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Add Comment\n            </button>\n            <div class=\"dropdown-menu\">\n                <div>\n                  <textarea id=\"comment\" class=\"form-control\"></textarea>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n                <div>\n                  <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0 btn-sm\">Comment</button>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"post\">\n    <div id= \"container\" >\n      <div class=\"card-body\">\n        <div> \n          <button class='btn' style=\"float: right; color: red\" (click)=\"onClickDelete()\">X</button>\n          <h5 class=\"card-user\">KellanRyan</h5>\n        </div>\n        <div>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tempus magna, ut ullamcorper neque viverra sagittis. Maecenas cursus accumsan justo vitae dapibus. Vivamus tincidunt luctus laoreet. In sit amet orci ut ex aliquet pulvinar. Praesent nec tempus libero. Nulla ac lacinia leo. Maecenas vulputate orci est, tincidunt eleifend dui efficitur aliquam. Proin tempor ultricies libero. Maecenas tincidunt ex eu mauris fringilla egestas. Suspendisse ornare ligula sit amet diam pulvinar convallis. Maecenas facilisis dignissim nisi, eget ultrices odio efficitur non. Etiam convallis metus dui, a convallis massa ultrices vel. Vivamus convallis tincidunt dui, vel consectetur lectus placerat ac. Sed non elit a urna cursus ornare. Quisque at ex quis ex efficitur ornare non quis justo. Mauris dapibus, ligula eu eleifend dignissim, justo nibh aliquet ex, ut varius nisl diam sed leo.</p>\n          <p>Morbi viverra mi velit, sit amet tristique magna hendrerit ut. Curabitur vel tellus sem. Curabitur tellus tellus, iaculis sed libero vitae, egestas efficitur leo. Mauris id justo et est congue porta. Mauris mollis aliquam lacus, pretium auctor orci tincidunt a. Aenean ut lacus turpis. Suspendisse rutrum ut ex non laoreet. Fusce eget lobortis libero. Praesent volutpat nisl vitae tortor aliquam luctus. Aliquam id lacus in quam condimentum egestas sit amet at leo.</p>\n          <p>Nam est nibh, pretium at tristique et, consectetur a dui. Mauris eu dolor ultrices, scelerisque eros nec, fermentum nunc. Etiam varius a arcu et laoreet. Sed viverra magna quis ipsum iaculis auctor. Etiam vel bibendum erat. Nunc sed risus nec leo maximus pellentesque vitae a dolor. Praesent nec justo vitae leo finibus blandit ac sed sapien. Ut blandit sem ante, id consequat libero feugiat et. Nunc maximus laoreet augue, eu tincidunt velit consequat quis. Cras tristique nunc non leo efficitur finibus. Cras quis finibus nunc, sed varius nunc. Aliquam ut facilisis felis. Quisque congue, turpis quis ornare ultrices, nibh magna tincidunt nunc, ut congue odio eros non mi. Nulla viverra, nibh eget tempor bibendum, ligula mi vehicula quam, a varius odio ex nec nunc. Aenean aliquet neque est, quis viverra sapien sodales vitae.</p>\n          <p>estibulum lacinia iaculis metus, ut volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque accumsan eleifend odio, ac imperdiet dolor viverra eget. Nulla et orci a enim fermentum malesuada quis ac tortor. Proin ex tellus, aliquet eget ultrices sed, congue ac urna. Nunc vel mi viverra, pharetra diam non, finibus lectus. Phasellus congue tortor luctus urna cursus, sit amet ullamcorper mauris eleifend. Ut magna leo, pellentesque non tortor sed, pellentesque feugiat lectus. Nam feugiat scelerisque felis, sed vehicula lorem dictum et.</p>\n          <p>Nam dapibus vel ex vitae elementum. Phasellus sodales purus nec vulputate dignissim. Integer est nunc, rhoncus et feugiat ut, rutrum eget libero. Proin porttitor ex eget sapien commodo, sed ultricies ante rhoncus. Maecenas vel mi quis lorem cursus maximus. Vivamus pellentesque malesuada tellus, eget mollis nulla. Proin ultricies ex ut fermentum elementum. Aliquam blandit non lacus vitae pellentesque. Donec ac ante lacus. Quisque semper nisl sed accumsan interdum.</p>\n          <p>-Kellan</p>\n        </div>\n        <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" style= \"color: white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Add Comment\n            </button>\n            <div class=\"dropdown-menu\">\n                <div>\n                  <textarea id=\"comment\" class=\"form-control\"></textarea>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n                <div>\n                  <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0 btn-sm\">Comment</button>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"post\">\n    <div id= \"container\">\n      <div class=\"card-body\">\n        <div>\n          <button class='btn' style=\"float: right; color: red\" (click)=\"onClickDelete()\">X</button>\n          <h5 class=\"card-user\">LewisHylton</h5>\n        </div>\n        <div>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tempus magna, ut ullamcorper neque viverra sagittis. Maecenas cursus accumsan justo vitae dapibus. Vivamus tincidunt luctus laoreet. In sit amet orci ut ex aliquet pulvinar. Praesent nec tempus libero. Nulla ac lacinia leo. Maecenas vulputate orci est, tincidunt eleifend dui efficitur aliquam. Proin tempor ultricies libero. Maecenas tincidunt ex eu mauris fringilla egestas. Suspendisse ornare ligula sit amet diam pulvinar convallis. Maecenas facilisis dignissim nisi, eget ultrices odio efficitur non. Etiam convallis metus dui, a convallis massa ultrices vel. Vivamus convallis tincidunt dui, vel consectetur lectus placerat ac. Sed non elit a urna cursus ornare. Quisque at ex quis ex efficitur ornare non quis justo. Mauris dapibus, ligula eu eleifend dignissim, justo nibh aliquet ex, ut varius nisl diam sed leo.</p>\n            <p>Morbi viverra mi velit, sit amet tristique magna hendrerit ut. Curabitur vel tellus sem. Curabitur tellus tellus, iaculis sed libero vitae, egestas efficitur leo. Mauris id justo et est congue porta. Mauris mollis aliquam lacus, pretium auctor orci tincidunt a. Aenean ut lacus turpis. Suspendisse rutrum ut ex non laoreet. Fusce eget lobortis libero. Praesent volutpat nisl vitae tortor aliquam luctus. Aliquam id lacus in quam condimentum egestas sit amet at leo.</p>\n            <p>Nam est nibh, pretium at tristique et, consectetur a dui. Mauris eu dolor ultrices, scelerisque eros nec, fermentum nunc. Etiam varius a arcu et laoreet. Sed viverra magna quis ipsum iaculis auctor. Etiam vel bibendum erat. Nunc sed risus nec leo maximus pellentesque vitae a dolor. Praesent nec justo vitae leo finibus blandit ac sed sapien. Ut blandit sem ante, id consequat libero feugiat et. Nunc maximus laoreet augue, eu tincidunt velit consequat quis. Cras tristique nunc non leo efficitur finibus. Cras quis finibus nunc, sed varius nunc. Aliquam ut facilisis felis. Quisque congue, turpis quis ornare ultrices, nibh magna tincidunt nunc, ut congue odio eros non mi. Nulla viverra, nibh eget tempor bibendum, ligula mi vehicula quam, a varius odio ex nec nunc. Aenean aliquet neque est, quis viverra sapien sodales vitae.</p>\n            <p>estibulum lacinia iaculis metus, ut volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque accumsan eleifend odio, ac imperdiet dolor viverra eget. Nulla et orci a enim fermentum malesuada quis ac tortor. Proin ex tellus, aliquet eget ultrices sed, congue ac urna. Nunc vel mi viverra, pharetra diam non, finibus lectus. Phasellus congue tortor luctus urna cursus, sit amet ullamcorper mauris eleifend. Ut magna leo, pellentesque non tortor sed, pellentesque feugiat lectus. Nam feugiat scelerisque felis, sed vehicula lorem dictum et.</p>\n            <p>Nam dapibus vel ex vitae elementum. Phasellus sodales purus nec vulputate dignissim. Integer est nunc, rhoncus et feugiat ut, rutrum eget libero. Proin porttitor ex eget sapien commodo, sed ultricies ante rhoncus. Maecenas vel mi quis lorem cursus maximus. Vivamus pellentesque malesuada tellus, eget mollis nulla. Proin ultricies ex ut fermentum elementum. Aliquam blandit non lacus vitae pellentesque. Donec ac ante lacus. Quisque semper nisl sed accumsan interdum.</p>\n            <p>-Lewis</p>\n          </div>\n        <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" style= \"color: white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Add Comment\n            </button>\n            <div class=\"dropdown-menu\">\n                <div>\n                  <textarea id=\"comment\" class=\"form-control\"></textarea>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n                <div>\n                  <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0 btn-sm\">Comment</button>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"post\">\n    <div id= \"container\">\n      <div class=\"card-body\">\n        <div>\n          <button class='btn' style=\"float: right; color: red\" (click)=\"onClickDelete()\">X</button>\n          <h5 class=\"card-user\">SamMcGrew</h5>\n        </div>\n        <div>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tempus magna, ut ullamcorper neque viverra sagittis. Maecenas cursus accumsan justo vitae dapibus. Vivamus tincidunt luctus laoreet. In sit amet orci ut ex aliquet pulvinar. Praesent nec tempus libero. Nulla ac lacinia leo. Maecenas vulputate orci est, tincidunt eleifend dui efficitur aliquam. Proin tempor ultricies libero. Maecenas tincidunt ex eu mauris fringilla egestas. Suspendisse ornare ligula sit amet diam pulvinar convallis. Maecenas facilisis dignissim nisi, eget ultrices odio efficitur non. Etiam convallis metus dui, a convallis massa ultrices vel. Vivamus convallis tincidunt dui, vel consectetur lectus placerat ac. Sed non elit a urna cursus ornare. Quisque at ex quis ex efficitur ornare non quis justo. Mauris dapibus, ligula eu eleifend dignissim, justo nibh aliquet ex, ut varius nisl diam sed leo.</p>\n            <p>Morbi viverra mi velit, sit amet tristique magna hendrerit ut. Curabitur vel tellus sem. Curabitur tellus tellus, iaculis sed libero vitae, egestas efficitur leo. Mauris id justo et est congue porta. Mauris mollis aliquam lacus, pretium auctor orci tincidunt a. Aenean ut lacus turpis. Suspendisse rutrum ut ex non laoreet. Fusce eget lobortis libero. Praesent volutpat nisl vitae tortor aliquam luctus. Aliquam id lacus in quam condimentum egestas sit amet at leo.</p>\n            <p>Nam est nibh, pretium at tristique et, consectetur a dui. Mauris eu dolor ultrices, scelerisque eros nec, fermentum nunc. Etiam varius a arcu et laoreet. Sed viverra magna quis ipsum iaculis auctor. Etiam vel bibendum erat. Nunc sed risus nec leo maximus pellentesque vitae a dolor. Praesent nec justo vitae leo finibus blandit ac sed sapien. Ut blandit sem ante, id consequat libero feugiat et. Nunc maximus laoreet augue, eu tincidunt velit consequat quis. Cras tristique nunc non leo efficitur finibus. Cras quis finibus nunc, sed varius nunc. Aliquam ut facilisis felis. Quisque congue, turpis quis ornare ultrices, nibh magna tincidunt nunc, ut congue odio eros non mi. Nulla viverra, nibh eget tempor bibendum, ligula mi vehicula quam, a varius odio ex nec nunc. Aenean aliquet neque est, quis viverra sapien sodales vitae.</p>\n            <p>estibulum lacinia iaculis metus, ut volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque accumsan eleifend odio, ac imperdiet dolor viverra eget. Nulla et orci a enim fermentum malesuada quis ac tortor. Proin ex tellus, aliquet eget ultrices sed, congue ac urna. Nunc vel mi viverra, pharetra diam non, finibus lectus. Phasellus congue tortor luctus urna cursus, sit amet ullamcorper mauris eleifend. Ut magna leo, pellentesque non tortor sed, pellentesque feugiat lectus. Nam feugiat scelerisque felis, sed vehicula lorem dictum et.</p>\n            <p>Nam dapibus vel ex vitae elementum. Phasellus sodales purus nec vulputate dignissim. Integer est nunc, rhoncus et feugiat ut, rutrum eget libero. Proin porttitor ex eget sapien commodo, sed ultricies ante rhoncus. Maecenas vel mi quis lorem cursus maximus. Vivamus pellentesque malesuada tellus, eget mollis nulla. Proin ultricies ex ut fermentum elementum. Aliquam blandit non lacus vitae pellentesque. Donec ac ante lacus. Quisque semper nisl sed accumsan interdum.</p>\n            <p>-Sam</p>\n        </div>\n        <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" style= \"color: white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Add Comment\n            </button>\n            <div class=\"dropdown-menu\">\n                <div>\n                  <textarea id=\"comment\" class=\"form-control\"></textarea>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n                <div>\n                  <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0 btn-sm\">Comment</button>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"post\">\n    <div id= \"container\">\n      <div class=\"card-body\">\n        <div>\n          <button class='btn' style=\"float: right; color: red\" (click)=\"onClickDelete()\">X</button>\n          <h5 class=\"card-user\">HeidiShelbyKay</h5>\n        </div>\n        <div>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tempus magna, ut ullamcorper neque viverra sagittis. Maecenas cursus accumsan justo vitae dapibus. Vivamus tincidunt luctus laoreet. In sit amet orci ut ex aliquet pulvinar. Praesent nec tempus libero. Nulla ac lacinia leo. Maecenas vulputate orci est, tincidunt eleifend dui efficitur aliquam. Proin tempor ultricies libero. Maecenas tincidunt ex eu mauris fringilla egestas. Suspendisse ornare ligula sit amet diam pulvinar convallis. Maecenas facilisis dignissim nisi, eget ultrices odio efficitur non. Etiam convallis metus dui, a convallis massa ultrices vel. Vivamus convallis tincidunt dui, vel consectetur lectus placerat ac. Sed non elit a urna cursus ornare. Quisque at ex quis ex efficitur ornare non quis justo. Mauris dapibus, ligula eu eleifend dignissim, justo nibh aliquet ex, ut varius nisl diam sed leo.</p>\n            <p>Morbi viverra mi velit, sit amet tristique magna hendrerit ut. Curabitur vel tellus sem. Curabitur tellus tellus, iaculis sed libero vitae, egestas efficitur leo. Mauris id justo et est congue porta. Mauris mollis aliquam lacus, pretium auctor orci tincidunt a. Aenean ut lacus turpis. Suspendisse rutrum ut ex non laoreet. Fusce eget lobortis libero. Praesent volutpat nisl vitae tortor aliquam luctus. Aliquam id lacus in quam condimentum egestas sit amet at leo.</p>\n            <p>Nam est nibh, pretium at tristique et, consectetur a dui. Mauris eu dolor ultrices, scelerisque eros nec, fermentum nunc. Etiam varius a arcu et laoreet. Sed viverra magna quis ipsum iaculis auctor. Etiam vel bibendum erat. Nunc sed risus nec leo maximus pellentesque vitae a dolor. Praesent nec justo vitae leo finibus blandit ac sed sapien. Ut blandit sem ante, id consequat libero feugiat et. Nunc maximus laoreet augue, eu tincidunt velit consequat quis. Cras tristique nunc non leo efficitur finibus. Cras quis finibus nunc, sed varius nunc. Aliquam ut facilisis felis. Quisque congue, turpis quis ornare ultrices, nibh magna tincidunt nunc, ut congue odio eros non mi. Nulla viverra, nibh eget tempor bibendum, ligula mi vehicula quam, a varius odio ex nec nunc. Aenean aliquet neque est, quis viverra sapien sodales vitae.</p>\n            <p>estibulum lacinia iaculis metus, ut volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque accumsan eleifend odio, ac imperdiet dolor viverra eget. Nulla et orci a enim fermentum malesuada quis ac tortor. Proin ex tellus, aliquet eget ultrices sed, congue ac urna. Nunc vel mi viverra, pharetra diam non, finibus lectus. Phasellus congue tortor luctus urna cursus, sit amet ullamcorper mauris eleifend. Ut magna leo, pellentesque non tortor sed, pellentesque feugiat lectus. Nam feugiat scelerisque felis, sed vehicula lorem dictum et.</p>\n            <p>Nam dapibus vel ex vitae elementum. Phasellus sodales purus nec vulputate dignissim. Integer est nunc, rhoncus et feugiat ut, rutrum eget libero. Proin porttitor ex eget sapien commodo, sed ultricies ante rhoncus. Maecenas vel mi quis lorem cursus maximus. Vivamus pellentesque malesuada tellus, eget mollis nulla. Proin ultricies ex ut fermentum elementum. Aliquam blandit non lacus vitae pellentesque. Donec ac ante lacus. Quisque semper nisl sed accumsan interdum.</p>\n            <p>-Heidi</p>\n          </div>\n        <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" style= \"color: white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Add Comment\n            </button>\n            <div class=\"dropdown-menu\">\n                <div>\n                  <textarea id=\"comment\" class=\"form-control\"></textarea>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n                <div>\n                  <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0 btn-sm\">Comment</button>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"site-footer\" role=\"contentinfo\">\n      <div class=\"container\">\n          <div class=\"footernav\">\n              <h3 class=\"mb-4\">Navigation</h3>\n              <ul class=\"list-unstyled footer-link\">\n                  <li><a href=\"\">Home</a></li>\n                  <li><a href=\"blog\">Blog</a></li>\n                  <li><a href=\"about-us\">About Us</a></li>\n                  <li><a href=\"forum\">Forum</a></li>\n                  <li><a href=\"login\">Login</a></li>\n              </ul>\n          </div>\n          <div class=\"socialmedia\">\n              <ul class=\"list-unstyled footer-link d-flex footer-social\">\n                  <li><a href=\"https://www.facebook.com/bethelschooloftechnology\" class=\"p-2\"><span class=\"fa fa-facebook fa-lg\"></span></a></li>\n                  <li><a href=\"https://twitter.com/bethelredding\" class=\"p-2\"><span class=\"fa fa-twitter fa-lg\"></span></a></li>\n                  <li><a href=\"https://www.instagram.com/betheltech/\" class=\"p-2\"><span class=\"fa fa-instagram fa-lg\"></span></a></li>\n              </ul>\n          </div>\n      </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.posts = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.posts = JSON.parse(localStorage.getItem("post"));
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/forum/forum.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/forum/forum.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-footer {\n    position: auto;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.349);\n    color: blue;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.fa {\n    padding: 30px;\n    font-size: 28px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n}\n\n\n.fa:hover {\n    opacity: 0.7;\n}\n\n\n/* Facebook */\n\n\n.fa-facebook {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n\n\n/* Twitter */\n\n\n.fa-twitter {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n\n\n/* Instagram */\n\n\n.fa-instagram {\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3J1bS9mb3J1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBLGFBQWE7OztBQUNiO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7OztBQUVBLFlBQVk7OztBQUNaO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7OztBQUVBLGNBQWM7OztBQUNkO0lBQ0ksOEdBQThHO0lBQzlHLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuXG4uZmEge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4vKiBGYWNlYm9vayAqL1xuLmZhLWZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDksIDYyLCAyMzUsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVHdpdHRlciAqL1xuLmZhLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOSwgNjIsIDIzNSwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBJbnN0YWdyYW0gKi9cbi5mYS1pbnN0YWdyYW0ge1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/forum/forum.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/forum/forum.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"site-footer\" role=\"contentinfo\">\n    <div class=\"container\">\n        <div class=\"footernav\">\n            <h3 class=\"mb-4\">Navigation</h3>\n            <ul class=\"list-unstyled footer-link\">\n                <li><a href=\"\">Home</a></li>\n                <li><a href=\"blog\">Blog</a></li>\n                <li><a href=\"about-us\">About Us</a></li>\n                <li><a href=\"forum\">Forum</a></li>\n                <li><a href=\"login\">Login</a></li>\n            </ul>\n        </div>\n        <div class=\"socialmedia\">\n            <ul class=\"list-unstyled footer-link d-flex footer-social\">\n                <li><a href=\"https://www.facebook.com/bethelschooloftechnology\" class=\"p-2\"><span class=\"fa fa-facebook fa-lg\"></span></a></li>\n                <li><a href=\"https://twitter.com/bethelredding\" class=\"p-2\"><span class=\"fa fa-twitter fa-lg\"></span></a></li>\n                <li><a href=\"https://www.instagram.com/betheltech/\" class=\"p-2\"><span class=\"fa fa-instagram fa-lg\"></span></a></li>\n            </ul>\n        </div>\n    </div>\n</footer> -->"

/***/ }),

/***/ "./src/app/components/forum/forum.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/forum/forum.component.ts ***!
  \*****************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/components/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.css */ "./src/app/components/forum/forum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    text-align: center;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 20px;\n}\n.col-6  {\n    color: white;\n    border-radius: 25px;\n    background-color:rgba(0, 0, 0, 0.342);\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px;\n}\n.col-12 {\n    color: white;\n    border-radius: 25px;\n    background-color:rgba(0, 0, 0, 0.342);\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px;\n}\n.visiondescription {\n    text-align: center;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif; \n    width: 79%;\n    height: auto;\n    margin: 0 auto;\n    background-color:rgba(0, 0, 0, 0.342); \n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px; \n}\n.site-footer {\n    position: auto;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.349);\n    color: blue;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.fa {\n    padding: 30px;\n    font-size: 28px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n}\n.fa:hover {\n    opacity: 0.7;\n}\n/* Facebook */\n.fa-facebook {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: rgba(9, 62, 235, 0);\n    color: white;\n}\n/* Instagram */\n.fa-instagram {\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6QyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekMsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksY0FBYztJQUNkLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUdBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLGFBQWE7QUFDYjtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFFQSxjQUFjO0FBQ2Q7SUFDSSw4R0FBOEc7SUFDOUcsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuLmNvbC02ICB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDksIDYyLCAyMzUsIDAuMzUwKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbC0xMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDksIDYyLCAyMzUsIDAuMzUwKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udmlzaW9uZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxuICAgIHdpZHRoOiA3OSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjM0Mik7IFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg5LCA2MiwgMjM1LCAwLjM1MCk7XG4gICAgcGFkZGluZzogMjBweDsgXG59XG5cbi5zaXRlLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0OSk7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5mYSB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIEZhY2Vib29rICovXG4uZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOSwgNjIsIDIzNSwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUd2l0dGVyICovXG4uZmEtdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg5LCA2MiwgMjM1LCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEluc3RhZ3JhbSAqL1xuLmZhLWluc3RhZ3JhbSB7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDM1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<!-- HOME\n1. Dreamscape logo\n2. image in background\n3. Brief description of what the site is about\n4. dream\n4. Links to social media at bottom\n5. Footer -->\n<header>\n    <h1>Our Vision</h1>\n</header>\n<div class=\"visiondescription\">\n    <h5>Did you know The average person spends six years of their life dreaming?</h5>\n    <h5> We all have had dreams that we thought about for days with no idea what it meant for our life. Our Goal was to create an opportunity for you to share those dreams! We believe you build community by relating to other people. We wanted to open up a space for you to build community with others that are dreaming the same thing.</h5>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 col-md-8\">\n            <h3>Dream Theory!</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac volutpat ex. Vestibulum vitae tincidunt lectus, sed maximus nisl. Curabitur pharetra sagittis felis, consequat vulputate tellus finibus in. Vestibulum vitae pretium risus. Suspendisse eget pharetra orci. In hac habitasse platea dictumst. Curabitur placerat molestie est, vitae suscipit sapien luctus vitae. Maecenas feugiat nunc lectus, a facilisis lectus ultricies id. Cras elit sem, malesuada sed purus nec, eleifend lacinia nisi. Praesent interdum vel lorem non auctor. Ut in neque et nisi cursus vehicula. Duis non est condimentum, pulvinar ipsum et, faucibus mi. Nullam tristique nulla condimentum ornare laoreet. Morbi porta efficitur sem, ut egestas tortor tristique nec. Mauris accumsan at arcu eget vestibulum.</p><br>\n            <p>Sed lobortis urna non urna pellentesque, eget hendrerit metus volutpat. Donec vulputate nisl at pulvinar ultricies. Phasellus fringilla risus dui, at consectetur tortor pulvinar ac. Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n            <p>Phasellus fringilla risus dui, at consectetur tortor pulvinar ac. Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n            <p>Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n            <p>In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n            <p>-Dr. Dreamy</p>\n        </div>\n        <div class=\"col-6 col-md-4\">\n            <h3>Celebrate Dreams 2019!</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac volutpat ex. Vestibulum vitae tincidunt lectus, sed maximus nisl. Curabitur pharetra sagittis felis, consequat vulputate tellus finibus in. Vestibulum vitae pretium risus. Suspendisse eget pharetra orci. In hac habitasse platea dictumst. Curabitur placerat molestie est, vitae suscipit sapien luctus vitae. Maecenas feugiat nunc lectus, a facilisis lectus ultricies id. Cras elit sem, malesuada sed purus nec, eleifend lacinia nisi. Praesent interdum vel lorem non auctor. Ut in neque et nisi cursus vehicula. Duis non est condimentum, pulvinar ipsum et, faucibus mi. Nullam tristique nulla condimentum ornare laoreet. Morbi porta efficitur sem, ut egestas tortor tristique nec. Mauris accumsan at arcu eget vestibulum.</p><br>\n            <p>Sed lobortis urna non urna pellentesque, eget hendrerit metus volutpat. Donec vulputate nisl at pulvinar ultricies. Phasellus fringilla risus dui, at consectetur tortor pulvinar ac. Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-6 col-md-4\">\n            <h3>What your dreams are really about!</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac volutpat ex. Vestibulum vitae tincidunt lectus, sed maximus nisl. Curabitur pharetra sagittis felis, consequat vulputate tellus finibus in. Vestibulum vitae pretium risus. Suspendisse eget pharetra orci. In hac habitasse platea dictumst. Curabitur placerat molestie est, vitae suscipit sapien luctus vitae. Maecenas feugiat nunc lectus, a facilisis lectus ultricies id. Cras elit sem, malesuada sed purus nec, eleifend lacinia nisi. Praesent interdum vel lorem non auctor. Ut in neque et nisi cursus vehicula. Duis non est condimentum, pulvinar ipsum et, faucibus mi. Nullam tristique nulla condimentum ornare laoreet. Morbi porta efficitur sem, ut egestas tortor tristique nec. Mauris accumsan at arcu eget vestibulum.</p><br>\n            <p>Sed lobortis urna non urna pellentesque, eget hendrerit metus volutpat. Donec vulputate nisl at pulvinar ultricies. Phasellus fringilla risus dui, at consectetur tortor pulvinar ac. Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n        </div>\n        <div class=\"col-6 col-md-4\">\n            <h3>Who's dreaming today and why?</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac volutpat ex. Vestibulum vitae tincidunt lectus, sed maximus nisl. Curabitur pharetra sagittis felis, consequat vulputate tellus finibus in. Vestibulum vitae pretium risus. Suspendisse eget pharetra orci. In hac habitasse platea dictumst. Curabitur placerat molestie est, vitae suscipit sapien luctus vitae. Maecenas feugiat nunc lectus, a facilisis lectus ultricies id. Cras elit sem, malesuada sed purus nec, eleifend lacinia nisi. Praesent interdum vel lorem non auctor. Ut in neque et nisi cursus vehicula. Duis non est condimentum, pulvinar ipsum et, faucibus mi. Nullam tristique nulla condimentum ornare laoreet. Morbi porta efficitur sem, ut egestas tortor tristique nec. Mauris accumsan at arcu eget vestibulum.</p><br>\n            <p>Sed lobortis urna non urna pellentesque, eget hendrerit metus volutpat. Donec vulputate nisl at pulvinar ultricies. Phasellus fringilla risus dui, at consectetur tortor pulvinar ac. Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n        </div>\n        <div class=\"col-6 col-md-4\">\n            <h3>How to dream correctly?</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac volutpat ex. Vestibulum vitae tincidunt lectus, sed maximus nisl. Curabitur pharetra sagittis felis, consequat vulputate tellus finibus in. Vestibulum vitae pretium risus. Suspendisse eget pharetra orci. In hac habitasse platea dictumst. Curabitur placerat molestie est, vitae suscipit sapien luctus vitae. Maecenas feugiat nunc lectus, a facilisis lectus ultricies id. Cras elit sem, malesuada sed purus nec, eleifend lacinia nisi. Praesent interdum vel lorem non auctor. Ut in neque et nisi cursus vehicula. Duis non est condimentum, pulvinar ipsum et, faucibus mi. Nullam tristique nulla condimentum ornare laoreet. Morbi porta efficitur sem, ut egestas tortor tristique nec. Mauris accumsan at arcu eget vestibulum.</p><br>\n            <p>Sed lobortis urna non urna pellentesque, eget hendrerit metus volutpat. Donec vulputate nisl at pulvinar ultricies. Phasellus fringilla risus dui, at consectetur tortor pulvinar ac. Nulla facilisi. In ornare viverra elementum. Donec eget iaculis tortor. Vestibulum nec orci lacus. Sed id tellus non enim facilisis varius id non augue. Pellentesque eu vulputate augue, ac bibendum nunc. In fringilla ligula in condimentum imperdiet. Etiam dolor dui, dapibus faucibus consequat a, faucibus at mauris. Pellentesque euismod tortor nec vehicula fermentum. Nullam efficitur, libero non sagittis volutpat, nisi mi finibus urna, id dapibus elit risus ac massa.</p>\n        </div>\n    </div>\n</div>\n<footer class=\"site-footer\" role=\"contentinfo\">\n    <div class=\"container\">\n        <div class=\"footernav\">\n            <h3 class=\"mb-4\">Navigation</h3>\n            <ul class=\"list-unstyled footer-link\">\n                <li><a href=\"\">Home</a></li>\n                <li><a href=\"blog\">Blog</a></li>\n                <li><a href=\"about-us\">About Us</a></li>\n                <li><a href=\"forum\">Forum</a></li>\n                <li><a href=\"login\">Login</a></li>\n            </ul>\n        </div>\n        <div class=\"socialmedia\">\n            <ul class=\"list-unstyled footer-link d-flex footer-social\">\n                <li><a href=\"https://www.facebook.com/bethelschooloftechnology\" class=\"p-2\"><span class=\"fa fa-facebook fa-lg\"></span></a></li>\n                <li><a href=\"https://twitter.com/bethelredding\" class=\"p-2\"><span class=\"fa fa-twitter fa-lg\"></span></a></li>\n                <li><a href=\"https://www.instagram.com/betheltech/\" class=\"p-2\"><span class=\"fa fa-instagram fa-lg\"></span></a></li>\n            </ul>\n        </div>\n    </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/subscriber-form/subscriber-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home/subscriber-form/subscriber-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 70%;\n    height: auto;\n    margin: 0 auto;\n    color: white;\n    background-color:rgba(0, 0, 0, 0.075); \n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px; \n}\n#check{\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N1YnNjcmliZXItZm9ybS9zdWJzY3JpYmVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N1YnNjcmliZXItZm9ybS9zdWJzY3JpYmVyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wNzUpOyBcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOSwgNjIsIDIzNSwgMC4zNTApO1xuICAgIHBhZGRpbmc6IDIwcHg7IFxufVxuI2NoZWNre1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/subscriber-form/subscriber-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/home/subscriber-form/subscriber-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sams subscriber form -->\n<form id=\"container\">\n    <div class=\"form-group\">\n      <label for=\"subscriberform\">Please enter your email...</label>\n      <input type=\"text\" class=\"form-control\" id=\"subscriberform\" placeholder=\"Email\">\n    </div>\n    <div id=\"check\" class=\"form-check\">\n      <input class=\"subscriberformcheckbox\" type=\"checkbox\" value=\"\" id=\"checkbox\">\n      <label class=\"form-check-label\" for=\"subscriberformcheckbox\">\n        Check here to receive dreamtastic emails!\n      </label>\n    </div>\n    <div class=\"btn-toolbar justify-content-between\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\">Submit</button>\n    </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/components/home/subscriber-form/subscriber-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/subscriber-form/subscriber-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: SubscriberFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberFormComponent", function() { return SubscriberFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubscriberFormComponent = /** @class */ (function () {
    function SubscriberFormComponent() {
    }
    SubscriberFormComponent.prototype.ngOnInit = function () {
    };
    SubscriberFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscriber-form',
            template: __webpack_require__(/*! ./subscriber-form.component.html */ "./src/app/components/home/subscriber-form/subscriber-form.component.html"),
            styles: [__webpack_require__(/*! ./subscriber-form.component.css */ "./src/app/components/home/subscriber-form/subscriber-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubscriberFormComponent);
    return SubscriberFormComponent;
}());



/***/ }),

/***/ "./src/app/components/login/forgot-password/forgot-password.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/login/forgot-password/forgot-password.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 70%;\n    height: auto;\n    margin: 0 auto;\n    color: white;\n    background-color:rgba(0, 0, 0, 0.075); \n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px; \n}\n#check{\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjA3NSk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg5LCA2MiwgMjM1LCAwLjM1MCk7XG4gICAgcGFkZGluZzogMjBweDsgXG59XG4jY2hlY2t7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/forgot-password/forgot-password.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/login/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"container\">\n  <div class=\"form-group\">\n    <label for=\"forgotform\">Please enter your email...</label>\n    <input type=\"text\" class=\"form-control\" id=\"forgot\" placeholder=\"Email\">\n  </div>\n  <div id=\"check\" class=\"form-check\">\n    <input class=\"forgotformcheckbox\" type=\"checkbox\" value=\"\" id=\"forgotcheckbox\">\n    <label class=\"form-check-label\" for=\"forgotform\">\n      Check here for us to send you an email and reset your password!\n    </label>\n  </div>\n  <div class=\"btn-toolbar justify-content-between\">\n    <button class=\"btn btn-outline-light my-2 my-sm-0\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/login/forgot-password/forgot-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/login/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/login/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/login/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 70%;\n    height: auto;\n    margin: 0 auto;\n    color: white;\n    background-color:rgba(0, 0, 0, 0.075); \n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMDc1KTsgXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDksIDYyLCAyMzUsIDAuMzUwKTtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"container\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n      </div>\n      <div class=\"btn-toolbar justify-content-between\">\n        <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0\">Submit</button>\n        <a href=\"sign-up\" class=\"btn btn-outline-light my-2 my-sm-0\" role=\"button\">I'm new here? Sign Me Up!</a>\n        <a href=\"forgot-password\" class=\"btn btn-outline-light my-2 my-sm-0\" role=\"button\">Forgot Password?</a>\n      </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/sign-up/sign-up.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login/sign-up/sign-up.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 70%;\n    height: auto;\n    margin: 0 auto;\n    color: white;\n    background-color:rgba(0, 0, 0, 0.075); \n    border-radius: 25px;\n    border: 2px solid rgba(9, 62, 235, 0.350);\n    padding: 20px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wNzUpOyBcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOSwgNjIsIDIzNSwgMC4zNTApO1xuICAgIHBhZGRpbmc6IDIwcHg7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/sign-up/sign-up.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login/sign-up/sign-up.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id= container>\n  <form class=\"needs-validation\" novalidate>\n      <div class=\"form-row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationTooltip01\">First name</label>\n          <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"First name\" value=\"\" required>\n          <div class=\"valid-tooltip\">\n          Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n         <label for=\"validationTooltip02\">Last name</label>\n         <input type=\"text\" class=\"form-control\" id=\"validationTooltip02\" placeholder=\"Last name\" value=\"\" required>\n         <div class=\"valid-tooltip\">\n            Looks good!\n         </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationTooltipUsername\">Username</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"validationTooltipUsernamePrepend\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"validationTooltipUsername\" placeholder=\"Username\" aria-describedby=\"validationTooltipUsernamePrepend\" required>\n            <div class=\"invalid-tooltip\">\n             Please choose a unique and valid username.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputEmail4\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group col-md-6\">\n            <label for=\"inputPassword4\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationTooltip03\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" placeholder=\"City\" required>\n          <div class=\"invalid-tooltip\">\n            Please provide a valid city.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationTooltip04\">State</label>\n          <input type=\"text\" class=\"form-control\" id=\"validationTooltip04\" placeholder=\"State\" required>\n          <div class=\"invalid-tooltip\">\n           Please provide a valid state.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n         <label for=\"validationTooltip05\">Zip</label>\n         <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" placeholder=\"Zip\" required>\n         <div class=\"invalid-tooltip\">\n           Please provide a valid zip.\n         </div>\n        </div>\n      </div>\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Sign Me Up Already!</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/sign-up/sign-up.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login/sign-up/sign-up.component.ts ***!
  \***************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/login/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/login/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/DeathStroke/Documents/GitHub/dreamscape-stories-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map