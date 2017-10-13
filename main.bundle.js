webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_login_page_login_page_component__["a" /* LoginPageComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_table_table_component__ = __webpack_require__("../../../../../src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_material_module__ = __webpack_require__("../../../../../src/app/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_error_bundle_error_bundle_component__ = __webpack_require__("../../../../../src/app/components/error-bundle/error-bundle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_error_card_error_card_component__ = __webpack_require__("../../../../../src/app/components/error-card/error-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// libraries






// services


// components











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_error_bundle_error_bundle_component__["a" /* ErrorBundleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_error_card_error_card_component__["a" /* ErrorCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__modules_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */],
                __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/error-bundle/error-bundle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-bundle\"\r\n     (mouseenter)=\"showHistogram = !showHistogram\"\r\n     (mouseleave)=\"showHistogram = !showHistogram\"\r\n     [ngStyle]=\"{'margin-bottom.px': !isCollapsed ? -10 : 0 }\">\r\n  <div class=\"bundle-message col-md-8\">\r\n    <span title=\"count ({{item.countUnique || 0}})\" class=\"count {{item.level.toLowerCase()}}\">\r\n      {{item.countTotal || 0}}\r\n    </span>\r\n    <button\r\n      class=\"btn-link button-label\"\r\n      (click)=\"viewList(item.message)\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls='sublist'>\r\n        {{item.message}}\r\n    </button>\r\n  </div>\r\n\r\n  <div\r\n    class=\"error-bundle-stats col-md-2\"\r\n    [ngStyle]=\"{'opacity': showHistogram || !isCollapsed ? 1 : .3}\">\r\n\r\n    <div class=\"histogram\" [ngStyle]=\"{'height': !isCollapsed ? 45 + 'px' : 1.5 + 'em'}\">\r\n      <div class=\"first--server histogram__column\" [ngStyle]=\"{'width': item.server.drum + 'pc'}\" title=\"DRUM\">\r\n        <span *ngIf=\"item.server.drum > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.server.drum}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.server)[0]}}</div>\r\n        </span>\r\n      </div>\r\n      <div class=\"second--server histogram__column\" [ngStyle]=\"{'width': item.server.srv12 + 'pc'}\" title=\"SRV12\">\r\n        <span *ngIf=\"item.server.srv12 > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.server.srv12}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.server)[1]}}</div>\r\n        </span>\r\n      </div>\r\n      <div class=\"third--server histogram__column\" [ngStyle]=\"{'width': item.server.srv17 + 'pc'}\" title=\"SRV17\">\r\n        <span *ngIf=\"item.server.srv17 > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.server.srv17}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.server)[2]}}</div>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"error-bundle-stats col-md-2\"\r\n    [ngStyle]=\"{'opacity': showHistogram || !isCollapsed ? 1 : .3}\">\r\n\r\n    <div class=\"histogram\" [ngStyle]=\"{'height': !isCollapsed ? 45 + 'px' : 1.5 + 'em'}\">\r\n      <div class=\"first--site histogram__column\" [ngStyle]=\"{'width': item.site.main + 'pc'}\" title=\"Main\">\r\n        <span *ngIf=\"item.site.main > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.site.main}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.site)[0]}}</div>\r\n        </span>\r\n      </div>\r\n      <div class=\"second--site histogram__column\" [ngStyle]=\"{'width': item.site.mobile + 'pc'}\" title=\"Mobile\">\r\n        <span *ngIf=\"item.site.mobile > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.site.mobile}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.site)[1]}}</div>\r\n        </span>\r\n      </div>\r\n      <div class=\"third--site histogram__column\" [ngStyle]=\"{'width': item.site.api + 'pc'}\" title=\"Api\">\r\n        <span *ngIf=\"item.site.api > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.site.api}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.site)[2]}}</div>\r\n        </span>\r\n      </div>\r\n      <div class=\"fourth--site histogram__column\" [ngStyle]=\"{'width': item.site.others + 'pc'}\" title=\"Others\">\r\n        <span *ngIf=\"item.site.others > 0 && !isCollapsed\" class=\"histogram__value\">\r\n          <span>{{item.site.others}}</span>\r\n          <div class=\"histogram__label\">{{Object.keys(item.site)[3]}}</div>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div id=\"sublist\" [ngbCollapse]=\"isCollapsed\">\r\n  <div *ngFor=\"let error of detailedList; let i = index\" class=\"error-list\">\r\n    <app-error-card [error]=\"error\" [number]=\"i\" ></app-error-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/error-bundle/error-bundle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-bundle {\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start; }\n\n.bundle-message {\n  font-size: 16px;\n  font-weight: 500;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.cell-data {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  color: #fff; }\n\n.error-list {\n  margin-left: 32px; }\n  .error-list:nth-child(even) {\n    background: #f7f7f7; }\n\n.error-bundle-stats {\n  padding: 0; }\n\n.button-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  color: #333333; }\n\n.count {\n  display: inline-table;\n  width: 22px;\n  height: 22px;\n  border-radius: 2px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF; }\n\n.warning {\n  background: #FF9800; }\n\n.error {\n  background: #dc3545; }\n\n.histogram {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 5px;\n  margin: 0;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 1.5em;\n  opacity: .85; }\n  .histogram__column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center; }\n  .histogram__value {\n    color: #FFFFFF;\n    font-size: 16px; }\n  .histogram__label {\n    font-size: 12px;\n    padding: 0 2px; }\n  .histogram .first--server {\n    background: #4DD0E1; }\n  .histogram .first--site {\n    background: #5C6BC0; }\n  .histogram .second--server {\n    background: #29B6F6; }\n  .histogram .second--site {\n    background: #1976D2; }\n  .histogram .third--server {\n    background: #42A5F5; }\n  .histogram .third--site {\n    background: #0288D1; }\n  .histogram .fourth--server {\n    background: #311B92; }\n  .histogram .fourth--site {\n    background: #9575CD; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-bundle/error-bundle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorBundleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorBundleComponent = /** @class */ (function () {
    function ErrorBundleComponent() {
        this.detailedList = [];
        this.isCollapsed = true;
        this.showHistogram = false;
        this.Object = Object;
    }
    ErrorBundleComponent.prototype.ngOnInit = function () {
    };
    ErrorBundleComponent.prototype.viewList = function (message) {
        this.detailedList = this.data
            .filter(function (item) { return item.message === message; })
            .sort(function (a, b) {
            return new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf();
        });
        this.isCollapsed = !this.isCollapsed;
        this.showHistogram = !this.showHistogram;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ErrorBundleComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ErrorBundleComponent.prototype, "data", void 0);
    ErrorBundleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-bundle',
            template: __webpack_require__("../../../../../src/app/components/error-bundle/error-bundle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error-bundle/error-bundle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorBundleComponent);
    return ErrorBundleComponent;
}());

//# sourceMappingURL=error-bundle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/error-card/error-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-card {{error.level.toLowerCase()}}\">\n  <!--<span>{{number+1}}</span>-->\n  <div class=\"error-card-title\">\n    <button\n      type=\"button\"\n      class=\"btn btn-link button-label\"\n      (click)=\"expandStackTrace()\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls='stackTrace'>\n\n      {{error.exceptionMessage || 'none'}}\n    </button>\n    <div>\n      <span class=\"cell-data\">{{getDate(error.timestamp)}}</span>\n      <span class=\"cell-data\">{{error.machinename || 'none'}}</span>\n    </div>\n  </div>\n\n  <div class=\"flex-center\">\n    <span class=\"error-card-type\">{{error.exceptionType}}</span>\n    <span class=\"cell-data\">{{error.userHostAddress || 'none'}}</span>\n  </div>\n\n  <div class=\"flex-center\">\n    <a class=\"error-card-link\" href=\"{{getSiteUrl(error.requestUrl) + error.requestPath}}\" target=\"_blank\">\n      {{getSiteUrl(error.requestUrl) + error.requestPath}}\n    </a>\n    <span class=\"cell-data\">{{error.user || 'none'}}</span>\n  </div>\n\n  <div id=\"stackTrace\" [ngbCollapse]=\"isCollapsed\">\n    <span *ngIf=\"hiddenAmount > 0\" class=\"stack-trace__info\" >\n      {{hiddenAmount}} items were hidden\n    </span>\n    <div *ngIf=\"stackTrace\" class=\"stack-trace__content\" [innerHTML]=\"stackTrace\"></div>\n    <div *ngIf=\"!stackTrace\" class=\"stack-trace__info\">\n      Stack Trace is empty\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/error-card/error-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-card-title {\n  font-size: 16px;\n  font-weight: 500;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.error-card-link {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #004B9C; }\n\n.cell-label {\n  text-transform: lowercase;\n  font-style: italic;\n  font-size: 12px;\n  color: #aaa;\n  margin-right: 2px; }\n\n.cell-data {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  color: #575E6B;\n  min-width: 236px;\n  padding-left: 20px;\n  text-align: end; }\n\n.stack-trace__content {\n  margin: 0 5px;\n  white-space: pre;\n  text-overflow: initial;\n  padding-bottom: 16px;\n  overflow: overlay; }\n\n.stack-trace__info {\n  font-size: 13px;\n  font-style: italic;\n  margin: 7px 0 0 20px;\n  font-weight: 500;\n  color: #85889a; }\n\n.stack-trace__content::-webkit-scrollbar {\n  height: 8px;\n  background: #F1F1F1;\n  padding-bottom: 10px; }\n\n.stack-trace__content::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding-bottom: 10px; }\n\n.stack-trace__content::-webkit-scrollbar-thumb {\n  background-color: #d1d7d7;\n  outline: 1px solid slategrey;\n  border-radius: 5px;\n  padding-bottom: 10px; }\n\n.error-card-type {\n  font-weight: inherit;\n  color: #FF9800;\n  font-size: 15px;\n  font-weight: 500; }\n\n.error-card {\n  background: inherit;\n  margin: 5px 0 0 0px;\n  padding: 6px;\n  font-size: 14px; }\n\n.button-label {\n  white-space: normal;\n  text-align: start;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  max-width: 84%;\n  color: #4d545d;\n  font-size: 15px;\n  padding: 0 0 5px 0;\n  font-weight: inherit; }\n  .button-label:hover {\n    color: #444444; }\n\n.warning {\n  border-left: 5px solid #FF9800;\n  border-radius: 1px; }\n\n.error {\n  border-left: 5px solid #dc3545; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-card/error-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorCardComponent = /** @class */ (function () {
    function ErrorCardComponent() {
        this.isCollapsed = true;
        this.hiddenAmount = 0;
    }
    ErrorCardComponent.prototype.ngOnInit = function () {
    };
    ErrorCardComponent.prototype.expandStackTrace = function () {
        var _this = this;
        this.isCollapsed = !this.isCollapsed;
        // todo array of objects?
        // todo optimize
        var flag = !this.error.stackTrace.includes(':line ');
        this.stackTrace = this.error.stackTrace
            .split('\n')
            .map(function (line) {
            var cls = 'normal';
            if (line.indexOf(' at System.') !== -1) {
                if (flag) {
                    cls = 'lightgrey';
                }
                else {
                    cls = 'hide';
                    _this.hiddenAmount++;
                }
            }
            else if (line.indexOf(':line ') !== -1) {
                cls = 'highlight';
                flag = true;
            }
            if (line.match(/\S/g)) {
                return "<span class=\"" + cls + "\">" + line.replace(/\ +(at )/, 'at ') + "</span>";
            }
        })
            .join('');
        // if ()
        console.log(!!this.stackTrace);
    };
    ErrorCardComponent.prototype.getDate = function (date) {
        return new Date(date).toLocaleTimeString();
    };
    ErrorCardComponent.prototype.getSiteUrl = function (url) {
        return url.match(/https?:\/\/([^\/]+)/)[0];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ErrorCardComponent.prototype, "error", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ErrorCardComponent.prototype, "number", void 0);
    ErrorCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-card',
            template: __webpack_require__("../../../../../src/app/components/error-card/error-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error-card/error-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorCardComponent);
    return ErrorCardComponent;
}());

//# sourceMappingURL=error-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-wrapper {\r\n  margin: 6px 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"statsData.length\">\n\n  <div *ngFor=\"let item of statsData\" class=\"table-wrapper\">\n    <app-error-bundle\n      [item]=\"item\"\n      [data]=\"initData\"></app-error-bundle>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.initData = [];
        this.statsData = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.loadData().subscribe(function (data) {
            _this.initData = data;
            data = data.map(function (item) {
                item.message = item.exceptionMessage
                    .replace(/\d+/gi, '0')
                    .replace(/'[^']+'/gi, '\'...\'')
                    .replace(/\([^)]+\)/gi, '\(...\)')
                    .replace(/Stored procedure .+ failed./, 'Stored procedure X failed.');
                return item;
            });
            _this.statsData = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a
                .uniqBy(data, 'message')
                .map(function (statsItem) { return _this.getStatsByMessage(data, statsItem.message); })
                .sort(function (a, b) { return b.countTotal - a.countTotal; });
        }, function (error) {
            if (error.status === 401) {
                localStorage.removeItem('token');
                return _this.router.navigateByUrl('/login');
            }
            console.log('ERR', error);
        });
    };
    TableComponent.prototype.getStatsByMessage = function (data, message) {
        var groupedByMessage = data.filter(function (value) { return value.message === message; });
        return {
            message: message,
            countTotal: groupedByMessage.length,
            countUnique: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(groupedByMessage, 'userHostAddress').length,
            level: groupedByMessage[0].level,
            server: {
                drum: this.getPercentage(groupedByMessage, function (item) { return item.machinename === 'DRUM'; }),
                srv12: this.getPercentage(groupedByMessage, function (item) { return item.machinename === 'SRV12'; }),
                srv17: this.getPercentage(groupedByMessage, function (item) { return item.machinename === 'SRV17'; })
            },
            site: {
                main: this.getPercentage(groupedByMessage, function (item) { return item.requestUrl.indexOf('/rabota.ua') > 0; }),
                mobile: this.getPercentage(groupedByMessage, function (item) { return item.requestUrl.indexOf('/m.rabota.ua') > 0; }),
                api: this.getPercentage(groupedByMessage, function (item) { return item.requestUrl.indexOf('/api.rabota.ua') > 0; }),
                others: this.getPercentage(groupedByMessage, function (item) {
                    return !['/rabota.ua', '/m.rabota.ua', '/api.rabota.ua'].some(function (mask) { return item.requestUrl.includes(mask); });
                })
            }
        };
    };
    TableComponent.prototype.getPercentage = function (array, callback) {
        return Math.round(array.filter(callback).length / array.length * 100);
    };
    // alt variants to calculate percentage
    TableComponent.prototype.getServerPercentage = function (array, mask) {
        return Math.round(array.filter(function (item) { return item.machinename === mask; }).length / array.length * 100);
    };
    TableComponent.prototype.getSitePercentage = function (array, mask) {
        return Math.round(array.filter(function (item) {
            var res = mask.some(function (val) { return item.requestUrl.includes(val); });
            return mask.length > 1 ? !res : res;
        }).length / array.length * 100);
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/components/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], TableComponent);
    return TableComponent;
    var _a, _b;
}());

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return !!localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].token);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import & export each material feature/component below

var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table></app-table>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent() {
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
    };
    DashboardPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());

//# sourceMappingURL=dashboard-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.column {*/\r\n  /*max-width: 450px;*/\r\n  /*margin-top: -70px;*/\r\n/*}*/\r\n\r\n/*.grid {*/\r\n  /*height: 100vh;*/\r\n/*}*/\r\n\r\n/*.ui.form .error.message {*/\r\n  /*display: block;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid\">\r\n  <div class=\"column\">\r\n    <div class=\"ui large form\">\r\n      <div class=\"ui stacked segment\">\r\n        <form (submit)=\"submit()\" [formGroup]=\"loginForm\" autocomplete=\"off\" novalidate>\r\n          <div class=\"field\" [ngClass]=\"{'error':loginForm.controls.username.touched && loginForm.controls.username.errors?.required }\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"user icon\"></i>\r\n              <input type=\"text\" formControlName=\"username\" placeholder=\"Username\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\" [ngClass]=\"{'error':loginForm.controls.password.touched && loginForm.controls.password.errors?.required }\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"lock icon\"></i>\r\n              <input type=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n          <button class=\"ui teal large submit fluid button \" type=\"submit\" [disabled]=\"!loginForm.valid\">Submit</button>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"loginForm.touched && !loginForm.valid\" class=\"ui error message\">\r\n        <ul class=\"list\">\r\n            <li *ngIf=\"loginForm.controls.username.touched && loginForm.controls.username.errors?.required\">Username is required</li>\r\n            <li *ngIf=\"loginForm.controls.password.touched && loginForm.controls.password.errors?.required\">Password is required</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<button (click)=\"refresh()\">Refresh</button>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(fb, mainService, api) {
        this.fb = fb;
        this.mainService = mainService;
        this.api = api;
        this.loginForm = fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]]
        });
    }
    LoginPageComponent.prototype.submit = function () {
        if (!this.loginForm.valid) {
            return;
        }
        var _a = this.loginForm.value, username = _a.username, password = _a.password;
        this.mainService.login(username, password);
    };
    LoginPageComponent.prototype.refresh = function () {
        this.api.refreshToken();
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/not-found-page/not-found-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/not-found-page/not-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Oops! Page was not found =(\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/not-found-page/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());

//# sourceMappingURL=not-found-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__queryRequest__ = __webpack_require__("../../../../../src/app/services/queryRequest.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
        this.api = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api.trim().replace(/\/$/, '');
        this.queryApi = __WEBPACK_IMPORTED_MODULE_5__queryRequest__["a" /* query */].api;
        this.queryPayload = { query: __WEBPACK_IMPORTED_MODULE_5__queryRequest__["a" /* query */].bigQuery };
        this.token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token);
    }
    ApiService.prototype.url = function (path) {
        return "" + this.api + path;
    };
    ApiService.prototype.options = function (bearer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token);
        if (token) {
            token = !bearer ? token : 'Bearer ' + token;
            headers.append('Authorization', token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: params });
    };
    ApiService.prototype.responseHandler = function (response) {
        if (response.status === 401) {
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token);
            return this.router.navigateByUrl('/login');
        }
        return response.json();
    };
    ApiService.prototype.login = function (username, password) {
        return this.http
            .post(this.url('/token'), { username: username, password: password }, this.options())
            .map(this.responseHandler);
    };
    // Todo: use the bitch / cases are events, timeout ..?
    ApiService.prototype.refreshToken = function () {
        var _this = this;
        return this.http
            .post(this.url('/Refresh'), {}, this.options(true))
            .map(function (response) { return _this.responseHandler(response); })
            .subscribe(function (data) {
            console.log('refresh', data);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token, data);
            _this.token = data;
        });
    };
    ApiService.prototype.getBigQuery = function () {
        return this.http
            .post(this.queryApi, this.queryPayload, this.options(true))
            .map(this.responseHandler);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], ApiService);
    return ApiService;
    var _a, _b;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__queryRequest__ = __webpack_require__("../../../../../src/app/services/queryRequest.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainService = /** @class */ (function () {
    function MainService(api, router) {
        this.api = api;
        this.router = router;
        this.queryString = { query: __WEBPACK_IMPORTED_MODULE_5__queryRequest__["a" /* query */].bigQuery };
        this.token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token);
        if (this.token) {
        }
        else {
            router.navigateByUrl('/login');
        }
    }
    MainService.prototype.login = function (username, password) {
        var _this = this;
        this.api.login(username, password).subscribe(function (data) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token, data);
            _this.token = data;
            return _this.router.navigateByUrl('/dashboard');
        });
    };
    MainService.prototype.loadData = function () {
        return this.api.getBigQuery();
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], MainService);
    return MainService;
    var _a, _b;
}());

//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/queryRequest.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return query; });
var query = {
    api: 'https://bigquery.azurewebsites.net/query',
    bigQuery: 'select *' +
        'from data.asp where (_PARTITIONTIME IS NULL OR _PARTITIONTIME=TIMESTAMP(CURRENT_DATE()))' +
        'AND timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 120 MINUTE)'
};
//# sourceMappingURL=queryRequest.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    api: 'https://adjwt-api.rabota.ua',
    token: 'token'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map