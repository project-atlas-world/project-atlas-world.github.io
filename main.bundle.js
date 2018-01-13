webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_home_home_component__ = __webpack_require__("../../../../../src/app/ui/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_all_bills_all_bills_component__ = __webpack_require__("../../../../../src/app/ui/all-bills/all-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_individual_bill_individual_bill_component__ = __webpack_require__("../../../../../src/app/ui/individual-bill/individual-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_current_issues_current_issues_component__ = __webpack_require__("../../../../../src/app/ui/current-issues/current-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_individual_issue_individual_issue_component__ = __webpack_require__("../../../../../src/app/ui/individual-issue/individual-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_admin_new_issues_admin_new_issues_component__ = __webpack_require__("../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_admin_current_issues_admin_current_issues_component__ = __webpack_require__("../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_admin_mp_msgs_admin_mp_msgs_component__ = __webpack_require__("../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_admin_new_arguments_admin_new_arguments_component__ = __webpack_require__("../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Admin Components




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__ui_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__ui_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'all-bills', component: __WEBPACK_IMPORTED_MODULE_6__ui_all_bills_all_bills_component__["a" /* AllBillsComponent */] },
    { path: 'bill/:billId', component: __WEBPACK_IMPORTED_MODULE_7__ui_individual_bill_individual_bill_component__["a" /* IndividualBillComponent */] },
    { path: 'current-issues', component: __WEBPACK_IMPORTED_MODULE_8__ui_current_issues_current_issues_component__["a" /* CurrentIssuesComponent */] },
    { path: 'issue/:issueId', component: __WEBPACK_IMPORTED_MODULE_9__ui_individual_issue_individual_issue_component__["a" /* IndividualIssueComponent */] },
    // Admin Components
    { path: 'admin/newIssues', component: __WEBPACK_IMPORTED_MODULE_10__ui_admin_new_issues_admin_new_issues_component__["a" /* AdminNewIssuesComponent */] },
    { path: 'admin/currentIssues', component: __WEBPACK_IMPORTED_MODULE_11__ui_admin_current_issues_admin_current_issues_component__["a" /* AdminCurrentIssuesComponent */] },
    { path: 'admin/mpMsgs', component: __WEBPACK_IMPORTED_MODULE_12__ui_admin_mp_msgs_admin_mp_msgs_component__["a" /* AdminMpMsgsComponent */] },
    { path: 'admin/newArguments', component: __WEBPACK_IMPORTED_MODULE_13__ui_admin_new_arguments_admin_new_arguments_component__["a" /* AdminNewArgumentsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<top-nav></top-nav>\n\n<div class=\"content columns\">\n\n  <aside class=\"column is-12\">\n    <router-outlet></router-outlet>\n  </aside>\n\n</div>\n\n<footer-nav></footer-nav>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FireStarter app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__items_shared_item_module__ = __webpack_require__("../../../../../src/app/items/shared/item.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_shared_ui_module__ = __webpack_require__("../../../../../src/app/ui/shared/ui.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





///// Start FireStarter


var firebaseConfig = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebaseConfig;
// Core

// Shared/Widget

// Feature Modules


///// End FireStarter
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__items_shared_item_module__["a" /* ItemModule */],
                __WEBPACK_IMPORTED_MODULE_10__ui_shared_ui_module__["a" /* UiModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.authState = null;
        this.logoutFromDash = false;
        this.authChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            _this.authChange.emit(auth);
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            // this.updateUserData()
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            // this.updateUserData()
        })
            .catch(function (error) { return console.log(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        var _this = this;
        console.log("Signing out");
        this.afAuth.auth.signOut().then(function (success) {
            _this.logoutFromDash = true;
            _this.router.navigate(['/']);
        });
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], AuthService.prototype, "authChange", void 0);
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */]]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 [ngClass]=\"{ 'strike-out': !item.active }\">\n  {{ item.title || 'missing title' }}\n</h3>\n\n\n<div class=\"card-content\">\n\n  Task Active?: {{ item.active }}<br>\n  {{ item.timeStamp | date: 'medium' }}\n\n</div>\n\n<div class=\"card-footer\">\n  <span class=\"button is-small is-info card-footer-item\" (click)='updateTimeStamp()'>Update Timestamp</span>\n  <span class=\"button is-small is-success card-footer-item\" *ngIf='item.active' (click)='updateActive(false)'>Mark Complete</span>\n  <span class=\"button is-small is-warning card-footer-item\" *ngIf='!item.active' (click)='updateActive(true)'>Mark Incomplete</span>\n  <span class=\"button is-small is-danger card-footer-item\" (click)='deleteItem()'>Delete</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  border-radius: 0;\n  margin: 10px 5px; }\n\n.strike-out {\n  text-decoration: line-through;\n  color: darkred; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemSvc) {
        this.itemSvc = itemSvc;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.prototype.updateTimeStamp = function () {
        var date = new Date().getTime();
        this.itemSvc.updateItem(this.item.$key, { timeStamp: date });
    };
    ItemDetailComponent.prototype.updateActive = function (value) {
        this.itemSvc.updateItem(this.item.$key, { active: value });
    };
    ItemDetailComponent.prototype.deleteItem = function () {
        this.itemSvc.deleteItem(this.item.$key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */]) === "function" && _a || Object)
    ], ItemDetailComponent.prototype, "item", void 0);
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'item-detail',
            template: __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]) === "function" && _b || Object])
    ], ItemDetailComponent);
    return ItemDetailComponent;
    var _a, _b;
}());

//# sourceMappingURL=item-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Task Form</h3>\n\n    <label class=\"label\">Name: </label>\n\n    <input placeholder=\"Item Title\" class=\"input\"\n    [(ngModel)]=\"item.title\"\n    required minlength=\"2\" maxlength=\"23\"\n    #title='ngModel' autofocus>\n\n    <div *ngIf=\"title.dirty\">\n      <span *ngIf='title.errors; then errors else valid'>template renders here...</span>\n    </div>\n\n\n    <button class=\"button is-primary\" (click)='createItem()' [disabled]=\"!title.valid\">Create</button>\n\n\n<ng-template #valid>\n  <p class=\"help is-success\">looks good!</p>\n</ng-template>\n\n<ng-template #errors>\n  <p class=\"help is-danger\">form contains errors!</p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemFormComponent = (function () {
    function ItemFormComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */]();
    }
    ItemFormComponent.prototype.ngOnInit = function () {
    };
    ItemFormComponent.prototype.createItem = function () {
        this.itemSvc.createItem(this.item);
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */](); // reset item
    };
    ItemFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'item-form',
            template: __webpack_require__("../../../../../src/app/items/item-form/item-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/item-form/item-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */]) === "function" && _a || Object])
    ], ItemFormComponent);
    return ItemFormComponent;
    var _a;
}());

//# sourceMappingURL=item-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Items</h1>\n\n<p>This page is a demo of a very basic todo list in Angular, using the Firebase Realtime DB on the backend.</p>\n\n<div *ngFor=\"let item of items | async\" class=\"card\">\n  <item-detail [item]='item'></item-detail>\n</div>\n\n<loading-spinner *ngIf=\"showSpinner\"></loading-spinner>\n\n\n\n<button type=\"button\" class=\"button is-danger\" (click)='deleteItems()'>Delete Entire List</button>\n\n<hr>\n\n<item-form></item-form>\n"

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 10px;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsListComponent = (function () {
    function ItemsListComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.showSpinner = true;
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemSvc.getItemsList({ limitToLast: 5 });
        this.items.subscribe(function () { return _this.showSpinner = false; });
    };
    ItemsListComponent.prototype.deleteItems = function () {
        this.itemSvc.deleteAll();
    };
    ItemsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'items-list',
            template: __webpack_require__("../../../../../src/app/items/items-list/items-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/items-list/items-list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]) === "function" && _a || Object])
    ], ItemsListComponent);
    return ItemsListComponent;
    var _a;
}());

//# sourceMappingURL=items-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_form_item_form_component__ = __webpack_require__("../../../../../src/app/items/item-form/item-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ItemModule = (function () {
    function ItemModule() {
    }
    ItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__items_list_items_list_component__["a" /* ItemsListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__item_form_item_form_component__["a" /* ItemFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__["a" /* ItemDetailComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__item_service__["a" /* ItemService */]
            ]
        })
    ], ItemModule);
    return ItemModule;
}());

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.basePath = '/items';
        this.items = null; //  list of objects
        this.item = null; //   single object
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function (query) {
        if (query === void 0) { query = {}; }
        this.items = this.db.list('/items', {
            query: query
        });
        return this.items;
    };
    // Return a single observable item
    ItemService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        this.item = this.db.object(itemPath);
        return this.item;
    };
    // Create a bramd new item
    ItemService.prototype.createItem = function (item) {
        var _this = this;
        this.items.push(item)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Update an exisiting item
    ItemService.prototype.updateItem = function (key, value) {
        var _this = this;
        this.items.update(key, value)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Deletes a single item
    ItemService.prototype.deleteItem = function (key) {
        var _this = this;
        this.items.remove(key)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Deletes the entire list of items
    ItemService.prototype.deleteAll = function () {
        var _this = this;
        this.items.remove()
            .catch(function (error) { return _this.handleError(error); });
    };
    // Default error handling for all actions
    ItemService.prototype.handleError = function (error) {
        console.log(error);
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], ItemService);
    return ItemService;
    var _a;
}());

//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
        this.active = true;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"has-text-centered column is-10 is-offset-1\">\n    <h2>Current Issues By Users</h2>\n    <br>\n\n    <div class=\"currentIssues\">\n      <div class=\"currentIssue\">\n\n      </div>\n    </div>\n  </aside>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCurrentIssuesComponent; });
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

var AdminCurrentIssuesComponent = (function () {
    function AdminCurrentIssuesComponent() {
    }
    AdminCurrentIssuesComponent.prototype.ngOnInit = function () {
    };
    AdminCurrentIssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-current-issues',
            template: __webpack_require__("../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminCurrentIssuesComponent);
    return AdminCurrentIssuesComponent;
}());

//# sourceMappingURL=admin-current-issues.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"has-text-centered column is-10 is-offset-1\">\n    <h2>New Msgs By Users</h2>\n    <hr class=\"topHr\">\n\n    <div class=\"content columns msg\" *ngFor=\"let msg of newMsgsArr\">\n      <aside class=\"column is-4 leftCol\">\n        <label for=\"\">Sender Name</label>\n        <p>{{msg.senderName}}</p> \n        <label for=\"\">Sender Email</label>\n        <p>{{msg.senderEmail}}</p> \n      </aside>\n      <aside class=\"column is-8 rightCol\">\n        <label for=\"\">Msg Subject</label>\n        <p>{{msg.mpMsgSubject}}</p> \n        <label for=\"\">Msg</label>\n        <p [innerHTML]=\"msg.mpMsgHTML\"></p> \n      </aside>\n    </div>\n  </aside>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 1em; }\n\n.topHr {\n  width: 30%;\n  display: block;\n  margin: auto;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  height: 2px;\n  background-color: #949494; }\n\n.msg {\n  background-color: #ececec;\n  margin-top: 1em;\n  margin-bottom: 2em !important;\n  transition: background-color ease 0.4s;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .msg label {\n    font-weight: 600; }\n  .msg .leftCol {\n    border-right: 1px solid #d2d2d2; }\n\n.msg:hover {\n  background-color: #c5c5c5; }\n\n/* START: MODAL */\n.modalBg {\n  background-size: cover;\n  top: 12px;\n  position: fixed;\n  left: 12px;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(29, 29, 29, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modalMain {\n  width: 50%;\n  margin: auto;\n  background: #4a4a4a;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n  .modalMain * {\n    color: white; }\n  .modalMain .button {\n    color: black; }\n\n.modalClose {\n  display: block;\n  margin-left: auto;\n  border-radius: 4px;\n  color: white;\n  padding: 0px 10px;\n  height: 1.5em;\n  line-height: 1;\n  background: #c1c1c1; }\n\n.approvalModal .issueName, .rejectModal .issueName {\n  display: block;\n  width: 100%;\n  margin-top: 0.5em;\n  margin-bottom: 2em;\n  padding: 5px 5px;\n  font-size: 13px;\n  color: black; }\n\n.approvalModal .issueDescription, .rejectModal .issueDescription {\n  display: block;\n  width: 100%;\n  margin-top: 0.5em;\n  height: 6em;\n  padding: 5px 5px;\n  font-size: 13px;\n  color: black; }\n\n/* END: MODAL */\n.spinnerDiv {\n  display: block;\n  height: 40px; }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMpMsgsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminMpMsgsComponent = (function () {
    function AdminMpMsgsComponent(_webSrv) {
        this._webSrv = _webSrv;
        this.newMsgsArr = [];
    }
    AdminMpMsgsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newMsgs = this._webSrv.getList('msgs/new');
        this.newMsgs.subscribe(function (snapshots) {
            _this.newMsgsArr = [];
            snapshots.forEach(function (snapshot) {
                var tempObj = snapshot.val();
                tempObj['msgKey'] = snapshot.key;
                tempObj['mpMsgHTML'] = tempObj['mpMessage'].split('\n').join('<br>');
                _this.newMsgsArr.push(tempObj);
            });
            console.log(_this.newMsgsArr);
        });
    };
    AdminMpMsgsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-mp-msgs',
            template: __webpack_require__("../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_ui_shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_ui_shared_web_service__["a" /* WebService */]) === "function" && _a || Object])
    ], AdminMpMsgsComponent);
    return AdminMpMsgsComponent;
    var _a;
}());

//# sourceMappingURL=admin-mp-msgs.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-new-arguments works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNewArgumentsComponent; });
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

var AdminNewArgumentsComponent = (function () {
    function AdminNewArgumentsComponent() {
    }
    AdminNewArgumentsComponent.prototype.ngOnInit = function () {
    };
    AdminNewArgumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-new-arguments',
            template: __webpack_require__("../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminNewArgumentsComponent);
    return AdminNewArgumentsComponent;
}());

//# sourceMappingURL=admin-new-arguments.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"has-text-centered column is-10 is-offset-1\">\n    <h2>New Issues By Users</h2>\n    <hr class=\"topHr\">\n\n    <div class=\"content columns issue\" *ngFor=\"let issue of newIssuesArr\">\n      <aside class=\"column is-8 leftCol\">\n        <label for=\"\">Issue Name</label>\n        <p>{{issue.issueName}}</p> \n        <label for=\"\">Issue Description</label>\n        <p>{{issue.issueDescription}}</p>\n      </aside>\n      <aside class=\"column is-4 rightCol\">\n        <label for=\"\">User UID</label>\n        <p>{{issue.userUid}}</p>\n        <div class=\"issueBtns\">\n          <button class=\"button\" (click)=\"toggleApprovalModal(issue)\">Approve</button>\n          <button class=\"button\" (click)=\"toggleRejectModal(issue)\">Reject</button>\n        </div>\n      </aside>\n    </div>\n  </aside>\n</div>\n  \n\n<!-- APPROVAL MODAL -->\n<div class=\"columns modalBg approvalModal\" *ngIf=\"approvalModal\">\n  <div class=\"column is-12 modalMain has-text-centered\">\n    <button (click)=\"closeApprovalModal()\" class=\"button modalClose\">Close</button>\n    <h4>Review The Issue</h4>\n    <label for=\"\">Issue Statement</label>\n    <input class=\"issueName\" type=\"text\" [(ngModel)]=\"currentObj.issueName\" placeholder=\"In 1 sentence, what is the issue?\">\n    <label for=\"\">Issue Description</label>\n    <textarea class=\"issueDescription\" type=\"text\" [(ngModel)]=\"currentObj.issueDescription\" placeholder=\"Why is this important? Whom does it affect? What do you think we should do about it?\"></textarea>\n    <label for=\"\">Issue Image URL</label>\n    <input class=\"issueImage\" type=\"text\" [(ngModel)]=\"issueImageUrl\">\n    <div class=\"spinnerDiv\" *ngIf=\"approvalModalPreloader\">\n      <span class=\"spinner\"></span>\n    </div>\n    <button (click)=\"approveIssue()\" *ngIf=\"!approvalModalPreloader\" class=\"button approveIssue\">Approve</button>\n  </div>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 1em; }\n\n.topHr {\n  width: 30%;\n  display: block;\n  margin: auto;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  height: 2px;\n  background-color: #949494; }\n\n.issue {\n  background-color: #ececec;\n  margin-top: 1em;\n  margin-bottom: 2em !important;\n  transition: background-color ease 0.4s;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .issue label {\n    font-weight: 600; }\n  .issue .leftCol {\n    border-right: 1px solid #d2d2d2; }\n\n.issue:hover {\n  background-color: #c5c5c5; }\n\n/* START: MODAL */\n.modalBg {\n  background-size: cover;\n  top: 12px;\n  position: fixed;\n  left: 12px;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(29, 29, 29, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modalMain {\n  width: 50%;\n  margin: auto;\n  background: #4a4a4a;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n  .modalMain * {\n    color: white; }\n  .modalMain .button {\n    color: black; }\n\n.modalClose {\n  display: block;\n  margin-left: auto;\n  border-radius: 4px;\n  color: white;\n  padding: 0px 10px;\n  height: 1.5em;\n  line-height: 1;\n  background: #c1c1c1; }\n\n.approvalModal .issueName, .approvalModal .issueImage, .rejectModal .issueName, .rejectModal .issueImage {\n  display: block;\n  width: 100%;\n  margin-top: 0.5em;\n  margin-bottom: 2em;\n  padding: 5px 5px;\n  font-size: 13px;\n  color: black; }\n\n.approvalModal .issueDescription, .rejectModal .issueDescription {\n  display: block;\n  width: 100%;\n  margin-top: 0.5em;\n  margin-bottom: 1em;\n  height: 6em;\n  padding: 5px 5px;\n  font-size: 13px;\n  color: black; }\n\n/* END: MODAL */\n.spinnerDiv {\n  display: block;\n  height: 40px; }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNewIssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminNewIssuesComponent = (function () {
    function AdminNewIssuesComponent(_webSrv) {
        this._webSrv = _webSrv;
        this.newIssuesArr = [];
        this.issueImageUrl = '';
        // Booleans
        this.approvalModal = false;
        this.approvalModalPreloader = false;
        this.rejectModal = false;
        this.msgMpModal = false;
    }
    AdminNewIssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newIssues = this._webSrv.getList('issues/new');
        this.newIssues.subscribe(function (snapshots) {
            _this.newIssuesArr = [];
            snapshots.forEach(function (snapshot) {
                var tempObj = snapshot.val();
                tempObj['issueKey'] = snapshot.key;
                _this.newIssuesArr.push(tempObj);
            });
            console.log(_this.newIssuesArr);
        });
    };
    AdminNewIssuesComponent.prototype.toggleApprovalModal = function (issueObj) {
        this.currentObj = JSON.parse(JSON.stringify(issueObj));
        this.approvalModal = !this.approvalModal;
    };
    AdminNewIssuesComponent.prototype.closeApprovalModal = function () {
        this.currentObj = null;
        this.approvalModal = !this.approvalModal;
    };
    AdminNewIssuesComponent.prototype.approveIssue = function () {
        var _this = this;
        // TODO: Validation (image url? something req'd for issue name, description, etc?)
        var submissionObj = {
            issueKey: this.currentObj.issueKey,
            issueName: this.currentObj.issueName,
            issueDescription: this.currentObj.issueDescription,
            creationDate: this.currentObj.creationDate,
            userUid: this.currentObj.userUid,
            issueImgUrl: this.issueImageUrl
        };
        console.log(submissionObj);
        this.approvalModalPreloader = true;
        this._webSrv.approveIssue(submissionObj).subscribe(function (res) {
            _this.approvalModalPreloader = false;
            console.log(res);
            _this.closeApprovalModal();
        });
    };
    AdminNewIssuesComponent.prototype.toggleRejectModal = function (issueObj) {
        this.rejectModal = !this.rejectModal;
        this.currentObj = issueObj;
    };
    AdminNewIssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-new-issues',
            template: __webpack_require__("../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_ui_shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_ui_shared_web_service__["a" /* WebService */]) === "function" && _a || Object])
    ], AdminNewIssuesComponent);
    return AdminNewIssuesComponent;
    var _a;
}());

//# sourceMappingURL=admin-new-issues.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/all-bills/all-bills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"column is-10 is-offset-1\">\n    <div class=\"bills\">\n      <h3 class=\"has-text-centered topTitle\">Bills in Parliament (Current Session)</h3>\n\n      <!-- View Recent 10 Current Issues -->\n      <div [routerLink]=\"['/bill', bill.number]\" class=\"bill content columns\" *ngFor=\"let bill of bills\">\n        <aside class=\"has-text-centered column leftCol is-12\">\n          \n          <p class=\"keywords\">\n            <span *ngFor=\"let keyword of bill.keywords\">\n              <span class=\"styling\" *ngIf=\"keyword\">\n                {{keyword | uppercase}}\n              </span>\n            </span>\n          </p> \n          <p><label for=\"\">Bill Name: </label>{{bill.name.en}}</p> \n          <hr class=\"stubbyHr\">\n          <p><label for=\"\">Bill Number: </label>{{bill.number}}<label class=\"labelMargin\" for=\"\">Bill Introduced: </label>{{bill.introduced}}</p> \n          <!-- <label for=\"\">Parliamentary Session</label>\n          <p>{{bill.session}}</p>  -->\n        </aside>\n      </div>\n    </div>\n\n    <div class=\"paginationBtns\">\n      <button class=\"button previous\" *ngIf=\"showPreviousBtn\" (click)=\"previousSet()\">Back</button>\n      <!-- <span > -->\n        <button class=\"button next\" *ngIf=\"showNextBtn\" (click)=\"nextSet()\">Next</button>\n      <!-- </span> -->\n    </div>\n  </aside>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/all-bills/all-bills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bills {\n  background: #f3f3f3;\n  padding: 10px;\n  border-radius: 3px;\n  margin-top: 2em; }\n  .bills .topTitle {\n    font-size: 30px;\n    margin: 12px 0 20px 0; }\n  .bills .bill {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    transition: background-color 0.4s ease, border 0.4s ease;\n    padding: 5px;\n    margin-bottom: 0.5em;\n    margin-right: 1em;\n    margin-left: 1em;\n    margin-top: 0; }\n    .bills .bill .keywords .styling {\n      margin-right: 10px;\n      margin-left: 10px; }\n    .bills .bill label {\n      font-weight: 700; }\n    .bills .bill .labelMargin {\n      margin-left: 2em; }\n    .bills .bill .stubbyHr {\n      width: 20%;\n      display: block;\n      margin: auto;\n      margin-bottom: 10px; }\n\n.paginationBtns {\n  background: #f3f3f3;\n  padding-bottom: 1.5em;\n  padding-left: 37%; }\n  .paginationBtns .button {\n    display: inline-block;\n    margin: auto;\n    padding-left: 4em;\n    padding-right: 4em;\n    border-radius: 30px;\n    font-weight: 100; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/all-bills/all-bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllBillsComponent = (function () {
    function AllBillsComponent(_webSrv, _authSrv) {
        this._webSrv = _webSrv;
        this._authSrv = _authSrv;
        this.billsPreloader = true;
        this.offset = 0;
        this.showPreviousBtn = false;
        this.showNextBtn = false;
    }
    AllBillsComponent.prototype.ngOnInit = function () {
        this.updateBillsHelper(this.offset);
    };
    AllBillsComponent.prototype.previousSet = function () {
        this.offset -= 5;
        this.updateBillsHelper(this.offset);
    };
    AllBillsComponent.prototype.nextSet = function () {
        this.offset += 5;
        this.updateBillsHelper(this.offset);
    };
    AllBillsComponent.prototype.updateBillsHelper = function (offset) {
        var _this = this;
        if (offset == 0) {
            // This is the first all (on load of page)
            this._webSrv.getRecentBills(5).subscribe(function (res) {
                var result = JSON.parse(res['_body']);
                console.log("Get Bills Response: ", result.objects);
                console.log("Pagination: ", result.pagination);
                if (result.pagination.previous_url != null) {
                    _this.showPreviousBtn = true;
                }
                else {
                    _this.showPreviousBtn = false;
                }
                if (result.pagination.next_url != null) {
                    _this.showNextBtn = true;
                }
                else {
                    _this.showNextBtn = false;
                }
                _this.offset = 0;
                _this.bills = result.objects;
                _this.billsPreloader = false;
                // Now that the bills are updated, let's get the indico keywords
                _this.getIndicoKeywords(_this.bills);
            });
        }
        else {
            this._webSrv.getRecentBills(5, offset).subscribe(function (res) {
                var result = JSON.parse(res['_body']);
                console.log("Get Bills Response: ", result.objects);
                console.log("Pagination: ", result.pagination);
                if (result.pagination.previous_url != null) {
                    _this.showPreviousBtn = true;
                }
                else {
                    _this.showPreviousBtn = false;
                }
                if (result.pagination.next_url != null) {
                    _this.showNextBtn = true;
                }
                else {
                    _this.showNextBtn = false;
                }
                _this.bills = result.objects;
                _this.billsPreloader = false;
                // Now that the bills are updated, let's get the indico keywords
                _this.getIndicoKeywords(_this.bills);
            });
        }
    };
    AllBillsComponent.prototype.getIndicoKeywords = function (bills) {
        var _this = this;
        // console.log(bills);
        var billsArr = [];
        for (var _i = 0, bills_1 = bills; _i < bills_1.length; _i++) {
            var bill = bills_1[_i];
            billsArr.push(bill.name.en);
        }
        console.log(billsArr);
        this._webSrv.getBillsKeywords(billsArr).subscribe(function (res) {
            // console.log(res);
            // console.log(JSON.parse(res['_body']));
            _this.updateKeywords(JSON.parse(res['_body']));
        });
    };
    AllBillsComponent.prototype.updateKeywords = function (keywordsArr) {
        for (var billKeywordsIndex in keywordsArr) {
            var billKeywords = Object.keys(keywordsArr[billKeywordsIndex]);
            // if(billKeywords.length > 2) {
            //   billKeywords = billKeywords.slice(0,2);
            // }
            billKeywords = this.cleanKeywordsList(billKeywords);
            // console.log(billKeywords);
            this.bills[billKeywordsIndex]['keywords'] = billKeywords;
        }
        // console.log(this.bills);
    };
    AllBillsComponent.prototype.cleanKeywordsList = function (keywords) {
        console.log(keywords);
        for (var keywordIndex in keywords) {
            if (keywords[keywordIndex] == "right_politics" ||
                keywords[keywordIndex] == "left_politics" ||
                keywords[keywordIndex] == "conspiracy" ||
                keywords[keywordIndex] == "economic_discussion" ||
                keywords[keywordIndex] == "atheism" ||
                keywords[keywordIndex] == "political_discussion" ||
                keywords[keywordIndex] == "individualist_politics") {
                delete keywords[keywordIndex];
            }
        }
        return keywords;
    };
    AllBillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'all-bills',
            template: __webpack_require__("../../../../../src/app/ui/all-bills/all-bills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/all-bills/all-bills.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], AllBillsComponent);
    return AllBillsComponent;
    var _a, _b;
}());

//# sourceMappingURL=all-bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/current-issues/current-issues.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"has-text-centered column is-10 is-offset-1\">\n    <h2>Current Issues</h2>\n    <hr class=\"topHr\">\n\n    <div class=\"content columns issue\" *ngFor=\"let issue of currentIssuesArr\" [routerLink]=\"['/issue', issue.issueKey]\">\n      <aside class=\"column is-12\">\n        <label for=\"\">Issue Name</label>\n        <p>{{issue.issueName}}</p> \n        <label for=\"\">Issue Description</label>\n        <p>{{issue.issueDescription}}</p>\n      </aside>\n    </div>\n  </aside>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/current-issues/current-issues.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 1em; }\n\n.topHr {\n  width: 30%;\n  display: block;\n  margin: auto;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  height: 2px;\n  background-color: #949494; }\n\n.issue {\n  background-color: #ececec;\n  margin-top: 1em;\n  margin-bottom: 1em !important;\n  transition: background-color ease 0.4s;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .issue label {\n    font-weight: 600; }\n  .issue .leftCol {\n    border-right: 1px solid #d2d2d2; }\n\n.issue:hover {\n  background-color: #c5c5c5; }\n\n/* START: MODAL */\n.modalBg {\n  background-size: cover;\n  top: 12px;\n  position: fixed;\n  left: 12px;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(29, 29, 29, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modalMain {\n  width: 50%;\n  margin: auto;\n  background: #4a4a4a;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n  .modalMain * {\n    color: white; }\n  .modalMain .button {\n    color: black; }\n\n.modalClose {\n  display: block;\n  margin-left: auto;\n  border-radius: 4px;\n  color: white;\n  padding: 0px 10px;\n  height: 1.5em;\n  line-height: 1;\n  background: #c1c1c1; }\n\n.approvalModal .issueName, .rejectModal .issueName {\n  display: block;\n  width: 100%;\n  margin-top: 0.5em;\n  margin-bottom: 2em;\n  padding: 5px 5px;\n  font-size: 13px;\n  color: black; }\n\n.approvalModal .issueDescription, .rejectModal .issueDescription {\n  display: block;\n  width: 100%;\n  margin-top: 0.5em;\n  height: 6em;\n  padding: 5px 5px;\n  font-size: 13px;\n  color: black; }\n\n/* END: MODAL */\n.spinnerDiv {\n  display: block;\n  height: 40px; }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/current-issues/current-issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentIssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentIssuesComponent = (function () {
    function CurrentIssuesComponent(_webSrv, _authSrv) {
        this._webSrv = _webSrv;
        this._authSrv = _authSrv;
        this.currentIssuesArr = [];
    }
    CurrentIssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentIssues = this._webSrv.getList('issues/current');
        this.currentIssues.subscribe(function (snapshots) {
            _this.currentIssuesArr = [];
            snapshots.forEach(function (snapshot) {
                var tempObj = snapshot.val();
                _this.currentIssuesArr.push(tempObj);
            });
            console.log(_this.currentIssuesArr);
        });
    };
    CurrentIssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'current-issues',
            template: __webpack_require__("../../../../../src/app/ui/current-issues/current-issues.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/current-issues/current-issues.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], CurrentIssuesComponent);
    return CurrentIssuesComponent;
    var _a, _b;
}());

//# sourceMappingURL=current-issues.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"column is-10 is-offset-1\">\n\n    <p class=\"jumbo_text\">Welcome to Project Atlas</p>\n\n    <!-- PRELOADER -->\n    <div class=\"spinnerDiv mpDataPreloader\" *ngIf=\"preloaderBoolean\">\n      <span class=\"spinner\"></span>\n    </div>\n\n\n\n    <!-- START: If User hasn't been onboarded, onboard -->\n      <!-- Get postal code -->\n    <div class=\"onboarding\" *ngIf=\"onboardingBoolean\">\n      <hr>\n\n      <p class=\"t1\">Let's get started.</p>\n      <p class=\"t2\">What's your postal code?</p>\n      <input (keypress)=\"_keyPress($event)\" class=\"postalInput\" type=\"text\" [(ngModel)]=\"postalCode\">\n      <p *ngIf=\"greenBorderBoolean\" class=\"t2\">Great!</p>\n      <div>\n        <button *ngIf=\"!toggleSubmitPreloaderBoolean\" class=\"button\" (click)=\"submitPostalCodeValidation()\">Submit</button>\n      </div>\n      <div class=\"spinnerDiv\" *ngIf=\"toggleSubmitPreloaderBoolean\">\n        <span class=\"spinner\"></span>\n      </div>\n\n    </div>\n    \n    <div class=\"myMp\" *ngIf=\"myMpBoolean\">\n      <div class=\"content columns has-text-centered\">\n\n        <!-- Left Col  -->\n        <aside class=\"column leftCol is-4\">\n          <div class=\"imgDiv\">\n            <img src=\"{{mpData.photo_url}}\" alt=\"\">\n          </div>\n        </aside>\n\n        <!-- Right Col -->\n        <aside class=\"column rightCol is-8\">\n          <h4>Your MP: {{mpData.name}}</h4>\n          <p class=\"mpPartyName\">{{mpData.party_name}}  |  {{mpData.district_name}}</p>\n          <button (click)=\"toggleSendMpMsgModal()\" class=\"button\">Send {{mpData.first_name}} a Msg</button>\n          <!-- TODO: Create fnc to show modal; get user's msg, user's name; send to BE; BE to send email to MP -->\n         <a href=\"{{mpData.personal_url}}\" target=\"_blank\"><button class=\"button my_bill_btn\">{{mpData.first_name}}'s Website</button></a>\n        </aside>\n\n      </div>\n    </div>\n\n\n    <div class=\"issues\">\n\n      <h3 class=\"has-text-centered topTitle\">Current Issues</h3>\n\n      <div class=\"suggestAnIssue content columns\">\n        <!-- User Suggest An Issue Form -->\n        <aside class=\"column is-8\">\n          <h4>Suggest a New Issue</h4>\n          <p>Start a conversation on issues you care about.</p>\n        </aside>\n        <aside class=\"column is-4\">\n          <button (click)=\"toggleNewIssueModal()\" class=\"button\">Suggest Issue</button>\n        </aside>\n      </div>\n\n      <div class=\"currentIssues\">\n        <!-- View Recent 10 Current Issues -->\n        <div class=\"issue content columns\" *ngFor=\"let issue of currentIssuesArr\" [routerLink]=\"['/issue', issue.issueKey]\">\n          <aside class=\"has-text-centered column leftCol is-4\">\n            <label for=\"\">Issue Name</label>\n            <p>{{issue.issueName}}</p> \n          </aside>\n          <aside class=\"has-text-centered column is-8\">\n            <label for=\"\">Issue Description</label>\n            <div class=\"issueDescrip\" [innerHTML]=\"issue.issueDescriptionShort\"></div>\n          </aside>\n        </div>\n\n        <button class=\"button showMore\" routerLink=\"/current-issues\">Show More</button>\n      </div>\n\n    </div>\n\n    <recent-bills></recent-bills>\n\n  </aside>\n</div>\n\n<!-- New Issue Form MODAL -->\n<div class=\"columns modalBg newIssueModal\" *ngIf=\"newIssueModal\">\n  <div class=\"column is-12 modalMain has-text-centered\">\n    <button (click)=\"toggleNewIssueModal()\" class=\"button modalClose\">Close</button>\n    <h4>Submit a New Issue</h4>\n    <br>\n    <label for=\"\">Issue Statement</label>\n    <input class=\"newIssueName\" type=\"text\" [(ngModel)]=\"newIssueName\" placeholder=\"In 1 sentence, what is the issue?\">\n    <label for=\"\">Issue Description</label>\n    <textarea class=\"newIssueDescription\" type=\"text\" [(ngModel)]=\"newIssueDescription\" placeholder=\"Why is this important? Whom does it affect? What do you think we should do about it?\"></textarea>\n    <br>\n\n    <div class=\"spinnerDiv\" *ngIf=\"newIssuePreloaderBoolean\">\n      <span class=\"spinner\"></span>\n    </div>\n    <button *ngIf=\"!newIssuePreloaderBoolean\" (click)=\"submitNewIssue()\" class=\"button newIssueSubmit\">Submit</button>\n\n  </div>\n</div>\n  \n\n<!-- Send MP Msg Form MODAL -->\n<div class=\"columns modalBg msgMpModal\" *ngIf=\"msgMpModal\">\n  <div class=\"column is-12 modalMain has-text-centered\">\n    <button (click)=\"toggleSendMpMsgModal()\" class=\"button modalClose\">Close</button>\n    <h4>Send A Message To {{mpData.first_name}}</h4>\n    <br>\n    <label for=\"\">Your Name:</label>\n    <input class=\"senderName\" type=\"text\" [(ngModel)]=\"senderName\">\n    <label for=\"\">Your Email:</label>\n    <input class=\"senderEmail\" disabled type=\"text\" [(ngModel)]=\"senderEmail\">\n    <label for=\"\">Subject</label>\n    <input class=\"mpMsgSubject\" type=\"text\" [(ngModel)]=\"mpMsgSubject\">\n    <label for=\"\">Message</label>\n    <textarea class=\"mpMessage\" type=\"text\" [(ngModel)]=\"mpMessage\"></textarea>\n    <br>\n\n    <div class=\"spinnerDiv\" *ngIf=\"sendMpMsgPreloaderBoolean\">\n      <span class=\"spinner\"></span>\n    </div>\n    <button (click)=\"sendMpMsg()\" *ngIf=\"!sendMpMsgPreloaderBoolean\" class=\"button mpMsgSubmit\">Submit</button>\n\n  </div>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbo_text {\n  font-weight: 200;\n  font-size: 45px;\n  margin-bottom: 0px !important; }\n\n.onboarding {\n  font-family: 'Barlow', sans-serif;\n  padding-bottom: 2em; }\n  .onboarding p {\n    color: grey; }\n  .onboarding .t1 {\n    font-size: 35px;\n    margin-bottom: 10px;\n    font-weight: 300; }\n  .onboarding .t2 {\n    margin-bottom: 5px;\n    font-size: 20px;\n    font-weight: 300; }\n  .onboarding .postalInput {\n    font-size: 16px;\n    font-weight: 200;\n    padding: 5px 5px;\n    color: grey;\n    margin-bottom: 10px; }\n  .onboarding hr {\n    margin-top: 10px; }\n\n.myMp {\n  background: #f3f3f3;\n  border-radius: 3px;\n  margin-top: 2em;\n  margin-bottom: 2em; }\n  .myMp .column {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .myMp .leftCol {\n    border-right: 1px solid #c5a3a3; }\n    .myMp .leftCol .imgDiv {\n      height: 130px;\n      width: 130px;\n      overflow: hidden;\n      display: block;\n      margin: auto;\n      margin-top: 1em;\n      margin-bottom: 1em;\n      border-radius: 50%; }\n      .myMp .leftCol .imgDiv img {\n        min-height: 100%;\n        min-width: 100%;\n        margin-top: -1.1em; }\n  .myMp .rightCol {\n    padding-top: 1em; }\n    .myMp .rightCol h4 {\n      font-size: 1.5em;\n      margin-bottom: 0.3em; }\n    .myMp .rightCol .button {\n      display: block;\n      margin: auto;\n      width: 13em;\n      margin-top: 0.8em;\n      border-radius: 30px;\n      font-size: 14px;\n      font-weight: 400; }\n\n.issues {\n  background: #f3f3f3;\n  padding: 10px;\n  border-radius: 3px; }\n  .issues .topTitle {\n    font-size: 30px;\n    margin: 12px 0 20px 0; }\n  .issues .suggestAnIssue {\n    background: #fffbfb;\n    border: solid 1px #d4d4d4;\n    margin: 30px;\n    margin-bottom: 2em;\n    margin-top: 10px;\n    padding: 7px;\n    border-radius: 80px; }\n    .issues .suggestAnIssue h4 {\n      margin-bottom: 5px;\n      margin-left: 10px; }\n    .issues .suggestAnIssue p {\n      margin-left: 10px;\n      margin-bottom: 0; }\n    .issues .suggestAnIssue .button {\n      display: block;\n      margin: auto;\n      margin-top: 5px;\n      border-radius: 23px;\n      padding: 10px 26px;\n      line-height: 0;\n      height: 2.5em;\n      font-size: 15px;\n      font-weight: 100; }\n  .issues .issue {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    transition: background-color 0.4s ease, border 0.4s ease;\n    margin-bottom: 1.2em;\n    padding: 5px;\n    margin-right: 1em;\n    margin-left: 1em; }\n    .issues .issue label {\n      font-weight: 700; }\n    .issues .issue .leftCol {\n      border-right: solid 1px #c5a3a3; }\n  .issues .issue:hover {\n    background-color: #dedede;\n    border: 1px solid white; }\n  .issues .showMore {\n    display: block;\n    margin: auto;\n    padding-left: 4em;\n    padding-right: 4em;\n    border-radius: 30px;\n    font-weight: 100;\n    margin-bottom: 1em; }\n\n/* START: MODAL */\n.modalBg {\n  background-size: cover;\n  top: 12px;\n  position: fixed;\n  left: 12px;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(29, 29, 29, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modalMain {\n  width: 50%;\n  margin: auto;\n  background: #4a4a4a;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n  .modalMain * {\n    color: white; }\n  .modalMain .button {\n    color: black; }\n\n.modalClose {\n  display: block;\n  margin-left: auto;\n  border-radius: 4px;\n  color: white;\n  padding: 0px 10px;\n  height: 1.5em;\n  line-height: 1;\n  background: #c1c1c1; }\n\n.newIssueModal .newIssueName {\n  display: block;\n  width: 100%;\n  margin-bottom: 2em;\n  margin-top: 1em;\n  font-size: 14px;\n  padding: 5px 7px;\n  background: #dedede;\n  border: 1px solid white;\n  color: #545454; }\n\n.newIssueModal .newIssueDescription {\n  display: block;\n  width: 100%;\n  height: 8em;\n  margin-bottom: 2em;\n  margin-top: 1em;\n  font-size: 14px;\n  padding: 5px 7px;\n  background: #dedede;\n  border: 1px solid white;\n  color: #545454; }\n\n.newIssueModal .newIssueSubmit {\n  padding: 0px 15px;\n  line-height: 0;\n  border-radius: 24px;\n  width: 9em;\n  background: #e8e8e8;\n  border: white solid 1px;\n  color: #464646; }\n\n.msgMpModal .mpMsgSubject, .msgMpModal .senderEmail, .msgMpModal .senderName {\n  display: block;\n  width: 100%;\n  margin-bottom: 1em;\n  margin-top: 1em;\n  text-align: center;\n  font-size: 14px;\n  padding: 5px 7px;\n  background: #dedede;\n  border: 1px solid white;\n  color: #545454; }\n\n.msgMpModal .mpMessage {\n  display: block;\n  width: 100%;\n  height: 8em;\n  margin-bottom: 1Mem;\n  margin-top: 1em;\n  font-size: 14px;\n  padding: 5px 7px;\n  background: #dedede;\n  border: 1px solid white;\n  color: #545454; }\n\n.msgMpModal .mpMsgSubmit {\n  padding: 0px 15px;\n  line-height: 0;\n  border-radius: 24px;\n  width: 9em;\n  background: #e8e8e8;\n  border: white solid 1px;\n  color: #464646; }\n\n/* END: MODAL */\n.spinnerDiv {\n  display: block;\n  height: 40px;\n  margin-top: -4em; }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n\n.mpDataPreloader {\n  margin-top: 2em; }\n  .mpDataPreloader .spinner:before {\n    top: 20%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_webSrv, _authSrv) {
        this._webSrv = _webSrv;
        this._authSrv = _authSrv;
        // Variables
        this.postalCode = '';
        this.mpImgUrl = '';
        this.mpMsgSubject = '';
        this.mpMessage = '';
        this.senderName = '';
        this.senderEmail = '';
        this.currentIssues = null;
        this.currentIssuesArr = [];
        // Booleans
        this.preloaderBoolean = true;
        this.myMpBoolean = false;
        this.onboardingBoolean = false;
        this.greenBorderBoolean = false;
        this.toggleSubmitPreloaderBoolean = false;
        this.newIssuePreloaderBoolean = false;
        this.sendMpMsgPreloaderBoolean = false;
        this.newIssueModal = false;
        this.msgMpModal = false;
        // New Issue Modal
        this.newIssueName = '';
        this.newIssueDescription = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make call to get dashboard data (if auth data, else setup authChange listener)
        if (this._authSrv.authState) {
            this.getDashCall();
        }
        else {
            this._authSrv.authChange.subscribe(function (res) {
                _this.getDashCall();
            });
        }
    };
    DashboardComponent.prototype.toggleSendMpMsgModal = function () {
        this.msgMpModal = !this.msgMpModal;
        this.senderEmail = this._authSrv.authState.email;
    };
    DashboardComponent.prototype.sendMpMsg = function () {
        var _this = this;
        console.log(this.mpMsgSubject);
        console.log(this.mpMessage);
        console.log(this.senderName);
        console.log(this.senderEmail);
        var msgObj = {
            mpMsgSubject: this.mpMsgSubject,
            mpMessage: this.mpMessage,
            senderName: this.senderName,
            senderEmail: this.senderEmail
        };
        this.sendMpMsgPreloaderBoolean = true;
        this._webSrv.submitMpMsg(msgObj).subscribe(function (res) {
            console.log(res);
            _this.mpMsgSubject = '';
            _this.mpMessage = '';
            // this.senderName = '';
            _this.msgMpModal = !_this.msgMpModal;
        });
    };
    DashboardComponent.prototype._keyPress = function (event) {
        if (this.postalCode != undefined && this.postalCode.split(" ").join("").length >= 6) {
            // console.log("gotta chop and get:")
            // console.log(this.postalCode.split(" ").join("").substring(0,6));
            event.preventDefault();
        }
        else {
            this.greenBorderBoolean = false;
        }
    };
    DashboardComponent.prototype.submitPostalCodeValidation = function () {
        var _this = this;
        if (this.postalCode.split(" ").join("").length == 6) {
            this.toggleSubmitPreloaderBoolean = true;
            this._webSrv.setUserMp(this.postalCode.split(" ").join("").toUpperCase()).subscribe(function (res) {
                // console.log(res);
                var mpData = JSON.parse(res['_body']);
                console.log(mpData);
                _this.mpData = mpData;
                _this.toggleSubmitPreloaderBoolean = false;
                _this.onboardingBoolean = false;
                _this.myMpBoolean = true;
            });
        }
        else {
            alert("The postal code must be 6 characters (not counting spaces).");
        }
    };
    DashboardComponent.prototype.submitNewIssue = function () {
        var _this = this;
        console.log(this.newIssueName);
        console.log(this.newIssueDescription);
        // TODO: validate issue name, descrip, etc.
        var newIssueObj = {
            issueName: this.newIssueName,
            issueDescription: this.newIssueDescription,
            creationDate: Date.now()
        };
        this.newIssuePreloaderBoolean = !this.newIssuePreloaderBoolean;
        this._webSrv.newIssueSubmission(newIssueObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                alert("Great! We've submit your issue for approval.");
                _this.newIssueName = '';
                _this.newIssueDescription = '';
                _this.newIssuePreloaderBoolean = !_this.newIssuePreloaderBoolean;
                _this.toggleNewIssueModal();
            }
        });
    };
    DashboardComponent.prototype.toggleNewIssueModal = function () {
        this.newIssueModal = !this.newIssueModal;
    };
    // Helper Functions
    DashboardComponent.prototype.getDashCall = function () {
        var _this = this;
        // HTTP CALL TO GET USER"S DASH DATA
        this._webSrv.dashboardCall().subscribe(function (res) {
            var result = JSON.parse(res['_body']);
            // console.log("\'getDashCall\' Response: ", result);
            if (result == false || result == 'false') {
                _this.preloaderBoolean = false;
                _this.onboardingBoolean = true;
            }
            else {
                // update dash
                _this.preloaderBoolean = false;
                _this.mpData = result;
                _this.myMpBoolean = true;
            }
        });
        // SUBSCRIBE TO /issues/current
        this.currentIssues = this._webSrv.getList('issues/current');
        this.currentIssues.subscribe(function (snapshots) {
            _this.currentIssuesArr = [];
            snapshots.forEach(function (snapshot) {
                var tempObj = snapshot.val();
                // console.log(tempObj.issueDescription)
                tempObj['issueDescriptionHTML'] = tempObj['issueDescription'].toString().split('\n').join('<br>').split('Pros:').join('<span class="pros">Pros:</span><br>').split('Cons:').join('<span class="cons">Cons:</span>');
                tempObj['issueDescriptionShort'] = tempObj['issueDescriptionHTML'].substring(0, 90) + '...';
                _this.currentIssuesArr.push(tempObj);
            });
            console.log(_this.currentIssuesArr);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAdminBtns\" class=\"adminNav content columns\">\n    <aside class=\"column is-10 is-offset-1\">\n        <p>ADMIN PAGES</p>\n        <p class=\"adminBtns\">\n            <a routerLink=\"/admin/newIssues\">\n                New Issues\n            </a>\n            <a routerLink=\"/admin/currentIssues\">\n                Current Issues\n            </a>\n            <a routerLink=\"/admin/newArguments\">\n                New Arguments\n            </a>\n            <a routerLink=\"/admin/mpMsgs\">\n                MP Msgs\n            </a>\n        </p>\n    </aside>\n</div>\n\n<div class=\"footer content columns\">\n    <aside class=\"column is-10 is-offset-1\">\n        <p class=\"has-text-right\">Project Atlas is an open, not-for-profit project<br>intended to create better tools for political change.</p>\n    </aside>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminNav {\n  background: whitesmoke;\n  border-bottom: solid 1px #c57575;\n  padding-top: 1em; }\n  .adminNav .adminBtns a {\n    margin-right: 10px;\n    color: #b13737;\n    transition: color 0.3s ease; }\n  .adminNav .adminBtns a:hover {\n    color: #3c3c3c; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
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

var FooterNavComponent = (function () {
    function FooterNavComponent() {
        this.showAdminBtns = false;
    }
    FooterNavComponent.prototype.ngOnInit = function () {
        console.log('ls-atlas_is_admin: ', localStorage.getItem('atlas_is_admin'));
        if (localStorage.getItem("atlas_is_admin") == 'true') {
            this.showAdminBtns = true;
        }
    };
    FooterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'footer-nav',
            template: __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterNavComponent);
    return FooterNavComponent;
}());

//# sourceMappingURL=footer-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/home/bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.68ec6060add423f6eddf.png";

/***/ }),

/***/ "../../../../../src/app/ui/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"column is-12\">\n    <div class=\"jumboBg\">\n      <div class=\"copy has-text-centered\">\n        <h2>Project Atlas</h2>\n        <h4>Your Social Network for everything government.</h4>\n      </div>\n    </div>\n  </aside>\n</div>\n\n<!-- About -->\n<div id=\"about\" class=\"content columns\">\n  <aside class=\"column is-6 is-offset-3 has-text-centered\">\n    <h4>About Project Atlas</h4>\n    <p><span class=\"line2\">Project Atlas is an initiative to create better tools for political discussion.</span><br><br>Facebook and Twitter prove to be weak platforms for rational, meaningful discussion on political issues. Facebook's algorithim is especially designed to provide an echo-chamber around it's 2.07 Billion users. And when there is mass discussion/engagement with political content on FB (virial videos and articles), you often see likes and comments being driven by emotional responses via comments hurled between opposing groups of the derogetory nature.<br><br>This often leads to members of these communities hermitting into their own communities/beliefs/ideologies... and we never get a chance to rationally hear the valid<sup>*</sup> arguments on opinions we may not hold/understand.</p>\n    <br>\n    <button routerLink=\"/login\" class=\"button signup\">Start Meaningful Discussions!</button>\n  </aside>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumboBg {\n  background-image: url(" + __webpack_require__("../../../../../src/app/ui/home/bg.png") + ");\n  background-size: 100%;\n  height: 32em; }\n  .jumboBg .copy {\n    display: block;\n    padding-top: 9em; }\n    .jumboBg .copy h2 {\n      font-size: 72px;\n      font-family: 'Dosis', sans-serif;\n      color: #ffffff;\n      font-weight: 300; }\n    .jumboBg .copy h4 {\n      font-size: 32px;\n      color: #eeeded; }\n\n#about {\n  padding-top: 6em;\n  padding-bottom: 6em; }\n  #about h4 {\n    font-size: 26px; }\n  #about .line2 {\n    font-size: 18px; }\n  #about button.signup {\n    padding: 20px 30px 37px 30px;\n    border: 1px solid red;\n    border-radius: 45px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_authSrv, _router) {
        this._authSrv = _authSrv;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._authSrv.logoutFromDash);
        if (this._authSrv.authState) {
            this._router.navigate(['/dashboard']);
        }
        else {
            this._authSrv.authChange.subscribe(function (res) {
                _this._router.navigate(['/dashboard']);
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/ui/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/individual-bill/individual-bill.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"column is-10 is-offset-1\">\n    <div class=\"billDetails\">\n      <h3 class=\"has-text-centered topTitle\">About Bill {{billName}}</h3>\n\n\n    </div>\n  </aside>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/individual-bill/individual-bill.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".billDetails {\n  background: #f3f3f3;\n  padding: 10px;\n  border-radius: 3px;\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/individual-bill/individual-bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualBillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndividualBillComponent = (function () {
    function IndividualBillComponent(_webSrv, _authSrv, _route) {
        this._webSrv = _webSrv;
        this._authSrv = _authSrv;
        this._route = _route;
    }
    IndividualBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params);
            if (params.billId) {
                _this._webSrv.getBillData(params.billId).subscribe(function (response) {
                    var billData = JSON.parse(response['_body']);
                    console.log(billData);
                });
            }
        });
    };
    IndividualBillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'individual-bill',
            template: __webpack_require__("../../../../../src/app/ui/individual-bill/individual-bill.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/individual-bill/individual-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], IndividualBillComponent);
    return IndividualBillComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=individual-bill.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/individual-issue/individual-issue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <aside class=\"column is-10 is-offset-1\">\n    <div class=\"aboutSection\">\n      <p class=\"heading has-text-centered\">{{issueName}}</p>\n      <hr>\n      <p class=\"description has-text-centered\">{{issueDescription}}</p>\n    </div>\n  </aside>\n</div>\n<div class=\"prosAndCons content columns\">\n  <aside class=\" column is-5 is-offset-1\">\n    <div class=\"pros\">\n      <h2>Pros</h2>\n      <hr>\n  \n      <!-- Loading / 'No arguments' msg goes here -->\n      <div class=\"noArgs\">\n        <p>No Pros yet!</p>\n        <button (click)=\"toggleProConModal('Pro')\" class=\"button\">+ Add a Pro</button>\n      </div>\n  \n      <!-- THE ARGUMENTS GO HERE -->\n      <div class=\"args\">\n      </div>\n\n    </div>\n  </aside>\n  <aside class=\" column is-5\">\n    <div class=\"cons\">\n      <h2>Cons</h2>\n      <hr>\n\n      <!-- Loading / 'No arguments' msg goes here -->\n      <div class=\"noArgs\">\n        <p>No Cons yet!</p>\n        <button (click)=\"toggleProConModal('Con')\" class=\"button\">+ Add a Con</button>\n      </div>\n\n      <!-- THE ARGUMENTS GO HERE -->\n      <div class=\"args\">\n      </div>\n\n    </div>\n  </aside>\n</div>\n\n\n\n<!-- Submit a Pro/Con -->\n<div class=\"columns modalBg newProCon\" *ngIf=\"proConModal\">\n  <div class=\"column is-12 modalMain has-text-centered\">\n    <button (click)=\"toggleProConModal()\" class=\"button modalClose\">Close</button>\n    <h4>Add a New {{proConType}}</h4>\n    <br>\n    <label for=\"\">Please enter your argument:</label>\n    <input class=\"proConText\" type=\"text\" [(ngModel)]=\"proConText\">\n    <br>\n\n    <div class=\"spinnerDiv\" *ngIf=\"proConModalSpinner\">\n      <span class=\"spinner\"></span>\n    </div>\n    <button (click)=\"submitProCon()\" *ngIf=\"!proConModalSpinner\" class=\"button proConSubmit\">Submit</button>\n    <!-- <button (click)=\"submitProCon()\" class=\"button proConSubmit\">Submit</button> -->\n\n  </div>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/ui/individual-issue/individual-issue.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aboutSection {\n  background: #e6e6e6;\n  border-radius: 5px;\n  margin-top: 1.5em;\n  padding: 2em 13em; }\n  .aboutSection .heading {\n    font-size: 22px; }\n  .aboutSection .description {\n    font-family: 'Barlow', sans-serif !important;\n    font-size: 15px;\n    color: #636363; }\n\n.prosAndCons .pros, .prosAndCons .cons {\n  background-color: #e6e6e6;\n  padding: 7px 7px; }\n  .prosAndCons .pros h2, .prosAndCons .cons h2 {\n    font-size: 23px;\n    color: grey;\n    margin-left: 3px;\n    margin-top: 1px; }\n  .prosAndCons .pros hr, .prosAndCons .cons hr {\n    margin-top: 1px;\n    margin-bottom: 5px; }\n  .prosAndCons .pros .noArgs p, .prosAndCons .cons .noArgs p {\n    color: grey;\n    margin-left: 2px;\n    margin-top: 2em;\n    margin-bottom: 7px;\n    text-align: center;\n    font-size: 18px; }\n  .prosAndCons .pros .noArgs button, .prosAndCons .cons .noArgs button {\n    display: block;\n    margin: auto;\n    font-size: 13px;\n    margin-bottom: 3em;\n    background: #f1f1f1;\n    color: #6b6b6b; }\n\n.prosAndCons .pros h2 {\n  color: #7ad27a; }\n\n.prosAndCons .cons h2 {\n  color: #f37c7c; }\n\n/* START: MODAL */\n.modalBg {\n  background-size: cover;\n  top: 12px;\n  position: fixed;\n  left: 12px;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(29, 29, 29, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modalMain {\n  width: 50%;\n  margin: auto;\n  background: #4a4a4a;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n  .modalMain * {\n    color: white; }\n  .modalMain .button {\n    color: black; }\n  .modalMain .proConText {\n    display: block;\n    width: 80%;\n    margin: auto;\n    margin-top: 1em;\n    height: 29px;\n    color: grey;\n    font-size: 15px;\n    padding-left: 4px; }\n\n.modalClose {\n  display: block;\n  margin-left: auto;\n  border-radius: 4px;\n  color: white;\n  padding: 0px 10px;\n  height: 1.5em;\n  line-height: 1;\n  background: #c1c1c1; }\n\n/* END: MODAL */\n.spinnerDiv {\n  display: block;\n  height: 40px;\n  margin-top: 0em; }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n\n.mpDataPreloader {\n  margin-top: 2em; }\n  .mpDataPreloader .spinner:before {\n    top: 20%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/individual-issue/individual-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualIssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndividualIssueComponent = (function () {
    function IndividualIssueComponent(_webSrv, _route) {
        this._webSrv = _webSrv;
        this._route = _route;
        this.currentIssue = null;
        this.currentIssueVal = {};
        this.issueId = '';
        this.issueName = 'Loading...';
        this.issueDescription = '';
        this.proConModal = false;
        this.proConModalSpinner = false;
        this.proConType = '';
        this.proConText = '';
    }
    IndividualIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params);
            if (params.issueId) {
                _this.issueId = params.issueId;
                // Get the current issue
                _this.currentIssue = _this._webSrv.getList('issues/current/' + params.issueId);
                _this.currentIssue.subscribe(function (snapshots) {
                    console.log(snapshots.val());
                    _this.issueName = snapshots.val().issueName;
                    _this.issueDescription = snapshots.val().issueDescription;
                });
            }
        });
    };
    IndividualIssueComponent.prototype.toggleProConModal = function (type) {
        if (type) {
            this.proConType = type;
        }
        this.proConModal = !this.proConModal;
        this.proConText = '';
    };
    IndividualIssueComponent.prototype.submitProCon = function () {
        var _this = this;
        this.proConModalSpinner = true;
        var argObj = {
            proConType: this.proConType,
            proConText: this.proConText,
            issueId: this.issueId
        };
        this._webSrv.newIssueArgument(argObj).subscribe(function (res) {
            console.log(res);
            _this.toggleProConModal();
            alert("Great! Your input has been submit for approval.");
        });
    };
    IndividualIssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'individual-issue',
            template: __webpack_require__("../../../../../src/app/ui/individual-issue/individual-issue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/individual-issue/individual-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], IndividualIssueComponent);
    return IndividualIssueComponent;
    var _a, _b;
}());

//# sourceMappingURL=individual-issue.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
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

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'loading-spinner',
            template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"FireStarter__Angular4__Firebase_Starter_App_0\"></a>FireStarter - Angular4 + Firebase Starter App</h1>\n<p>FireStarter is designed to handle the basic features most Angular+Firebase apps need. It can serve as a foundation to quickly roll out more complex features.</p>\n<p><a href=\"https://angularfirebase.com\">Lessons and Screencasts</a></p>\n<p><a href=\"https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg\">Let's talk about Angular+Firebase on Slack</a></p>\n<h2><a id=\"Features_7\"></a>Features</h2>\n<ul>\n<li>Authentication w/ Router Guard</li>\n<li>Realtime Database CRUD Demo</li>\n<li>File Uploads to Firebase Storage Demo</li>\n<li>SASS + Bulma + FontAwesome</li>\n<li>Reactive Form Validation</li>\n</ul>\n\n<h2>Installation</h2>\n\nGet the latest Firestarter build on <a href=\"https://github.com/codediodeio/angular-firestarter\">Github</a>\n\n<h2><a id=\"Apps_Using_FireStarter_in_Production_49\"></a>Apps Using FireStarter in Production</h2>\n<ul>\n<li><a href=\"https://app.artifilter.com\">ArtiFilter</a> - Neural Art Generator</li>\n<li><a href=\"https://flashlawyer.com\">FlashLawyer</a> - Legal Document Builder and Chatbot</li>\n</ul>\n\n\n<!-- <a href=\"https://github.com/codediodeio/angular-firestarter\"><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 999999;\" src=\"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\"></a> -->\n"

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmePageComponent; });
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

var ReadmePageComponent = (function () {
    function ReadmePageComponent() {
    }
    ReadmePageComponent.prototype.ngOnInit = function () {
    };
    ReadmePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'readme-page',
            template: __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReadmePageComponent);
    return ReadmePageComponent;
}());

//# sourceMappingURL=readme-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/recent-bills/recent-bills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"recentBills\">\n  <h3 class=\"has-text-centered topTitle\">Recent Bills in Parliament</h3>\n\n  <!-- View Recent 10 Current Issues -->\n  <div class=\"bill content columns\" *ngFor=\"let bill of recentBills\" [routerLink]=\"['/bill', bill.number]\">\n    <aside class=\"has-text-centered column leftCol is-12\">\n      \n      <p><label for=\"\">Bill Name: </label>{{bill.name.en}}</p> \n      <hr class=\"stubbyHr\">\n      <p><label for=\"\">Bill Number: </label>{{bill.number}}<label class=\"labelMargin\" for=\"\">Bill Introduced: </label>{{bill.introduced}}</p> \n      <!-- <label for=\"\">Parliamentary Session</label>\n      <p>{{bill.session}}</p>  -->\n    </aside>\n  </div>\n</div>\n\n<div class=\"showMoreDiv\">\n  <button class=\"button showMore\" routerLink=\"/all-bills\">Show More</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/recent-bills/recent-bills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recentBills {\n  background: #f3f3f3;\n  padding: 10px;\n  border-radius: 3px;\n  margin-top: 2em; }\n  .recentBills .topTitle {\n    font-size: 30px;\n    margin: 12px 0 20px 0; }\n  .recentBills .bill {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    transition: background-color 0.4s ease, border 0.4s ease;\n    padding: 5px;\n    margin-bottom: 0.5em;\n    margin-right: 1em;\n    margin-left: 1em;\n    margin-top: 0; }\n    .recentBills .bill label {\n      font-weight: 700; }\n    .recentBills .bill .labelMargin {\n      margin-left: 2em; }\n    .recentBills .bill .stubbyHr {\n      width: 20%;\n      display: block;\n      margin: auto;\n      margin-bottom: 10px; }\n  .recentBills .bill:hover {\n    background-color: #dedede;\n    border: 1px solid white; }\n\n.showMoreDiv {\n  background: #f3f3f3;\n  padding-bottom: 1.5em; }\n  .showMoreDiv .showMore {\n    display: block;\n    margin: auto;\n    padding-left: 4em;\n    padding-right: 4em;\n    border-radius: 30px;\n    font-weight: 100; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/recent-bills/recent-bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentBillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecentBillsComponent = (function () {
    function RecentBillsComponent(_webSrv, _authSrv) {
        this._webSrv = _webSrv;
        this._authSrv = _authSrv;
        this.recentBillsPreloader = true;
    }
    RecentBillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // HTTP CALL TO GET USER"S DASH DATA
        this._webSrv.getRecentBills(4).subscribe(function (res) {
            var result = JSON.parse(res['_body']);
            console.log("Get Recent Bills Response: ", result.objects);
            _this.recentBills = result.objects;
            _this.recentBillsPreloader = false;
        });
    };
    RecentBillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'recent-bills',
            template: __webpack_require__("../../../../../src/app/ui/recent-bills/recent-bills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/recent-bills/recent-bills.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], RecentBillsComponent);
    return RecentBillsComponent;
    var _a, _b;
}());

//# sourceMappingURL=recent-bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_nav_footer_nav_component__ = __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/ui/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recent_bills_recent_bills_component__ = __webpack_require__("../../../../../src/app/ui/recent-bills/recent-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__all_bills_all_bills_component__ = __webpack_require__("../../../../../src/app/ui/all-bills/all-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__individual_bill_individual_bill_component__ = __webpack_require__("../../../../../src/app/ui/individual-bill/individual-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__current_issues_current_issues_component__ = __webpack_require__("../../../../../src/app/ui/current-issues/current-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__individual_issue_individual_issue_component__ = __webpack_require__("../../../../../src/app/ui/individual-issue/individual-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_new_issues_admin_new_issues_component__ = __webpack_require__("../../../../../src/app/ui/admin-new-issues/admin-new-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_current_issues_admin_current_issues_component__ = __webpack_require__("../../../../../src/app/ui/admin-current-issues/admin-current-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_mp_msgs_admin_mp_msgs_component__ = __webpack_require__("../../../../../src/app/ui/admin-mp-msgs/admin-mp-msgs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_new_arguments_admin_new_arguments_component__ = __webpack_require__("../../../../../src/app/ui/admin-new-arguments/admin-new-arguments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// Admin Components




var UiModule = (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__readme_page_readme_page_component__["a" /* ReadmePageComponent */],
                // MKTG SITE Components
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                // MAIN APP Components
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__recent_bills_recent_bills_component__["a" /* RecentBillsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__all_bills_all_bills_component__["a" /* AllBillsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__individual_bill_individual_bill_component__["a" /* IndividualBillComponent */],
                __WEBPACK_IMPORTED_MODULE_18__current_issues_current_issues_component__["a" /* CurrentIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__individual_issue_individual_issue_component__["a" /* IndividualIssueComponent */],
                // ADMIN Components
                __WEBPACK_IMPORTED_MODULE_20__admin_new_issues_admin_new_issues_component__["a" /* AdminNewIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_current_issues_admin_current_issues_component__["a" /* AdminCurrentIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_mp_msgs_admin_mp_msgs_component__["a" /* AdminMpMsgsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_new_arguments_admin_new_arguments_component__["a" /* AdminNewArgumentsComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            ]
        })
    ], UiModule);
    return UiModule;
}());

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebService = (function () {
    function WebService(_http, _authSrv, db) {
        this._http = _http;
        this._authSrv = _authSrv;
        this.db = db;
        // private firebaseList: FirebaseListObservable<any[]> = null;
        this.firebaseList = null;
        this.baseURL = 'https://us-central1-project-atlas-dev1.cloudfunctions.net';
        this.authUid = null;
    }
    WebService.prototype.getList = function (url, query) {
        if (query === void 0) { query = {}; }
        this.firebaseList = this.db.object('/' + url, {
            preserveSnapshot: true
        });
        return this.firebaseList;
    };
    WebService.prototype.dashboardCall = function () {
        this.authUid = this._authSrv.currentUserId;
        return this._http.get(this.baseURL + '/getDashboard?uid=' + this.authUid)
            .map(function (res) { return res; });
    };
    WebService.prototype.setUserMp = function (postalCode) {
        this.authUid = this._authSrv.currentUserId;
        return this._http.get(this.baseURL + '/setUserMp?postalCode=' + postalCode + '&uid=' + this.authUid)
            .map(function (res) { return res; });
    };
    WebService.prototype.newIssueSubmission = function (issueObj) {
        this.authUid = this._authSrv.currentUserId;
        return this._http.post(this.baseURL + '/newIssue?uid=' + this.authUid, issueObj)
            .map(function (res) { return res; });
    };
    WebService.prototype.newIssueArgument = function (argumentObj) {
        this.authUid = this._authSrv.currentUserId;
        argumentObj['userUid'] = this.authUid;
        return this._http.post(this.baseURL + '/newArgument?uid=' + this.authUid, argumentObj)
            .map(function (res) { return res; });
    };
    WebService.prototype.submitMpMsg = function (mpMsgObj) {
        this.authUid = this._authSrv.currentUserId;
        return this._http.post(this.baseURL + '/newMpMsg?uid=' + this.authUid, mpMsgObj)
            .map(function (res) { return res; });
    };
    // Admin Fncs
    WebService.prototype.approveIssue = function (submissionObj) {
        this.authUid = this._authSrv.currentUserId;
        return this._http.post(this.baseURL + '/approveNewIssue?uid=' + this.authUid, submissionObj)
            .map(function (res) { return res; });
    };
    // External API Fncs
    WebService.prototype.getRecentBills = function (limit, offset) {
        if (offset) {
            return this._http.get('https://api.openparliament.ca/bills/?private_member_bill=false&session=42-1&limit=' + limit + '&offset=' + offset + '&format=json')
                .map(function (res) { return res; });
        }
        return this._http.get('https://api.openparliament.ca/bills/?private_member_bill=false&session=42-1&limit=' + limit + '&format=json')
            .map(function (res) { return res; });
    };
    WebService.prototype.getBillData = function (billNumber) {
        return this._http.get('https://api.openparliament.ca/bills/42-1/' + billNumber + '/?format=json')
            .map(function (res) { return res; });
    };
    WebService.prototype.getBillsKeywords = function (billsArr) {
        this.authUid = this._authSrv.currentUserId;
        return this._http.post(this.baseURL + '/getIndicoKeywords?uid=' + this.authUid, billsArr)
            .map(function (res) { return res; });
    };
    WebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], WebService);
    return WebService;
    var _a, _b, _c;
}());

//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"nav-left\">\n    <a class=\"nav-item\" routerLink=\"/\">\n      <!-- <img src=\"assets/images/.png\" alt=\"\"/> -->\n      <p class=\"logo\">Project Atlas</p>\n    </a>\n  </div>\n\n\n  <!-- This \"nav-toggle\" hamburger menu is only visible on mobile -->\n  <!-- You need JavaScript to toggle the \"is-active\" class on \"nav-menu\" -->\n  <span class=\"nav-toggle\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </span>\n\n  <!-- This \"nav-menu\" is hidden on mobile -->\n  <!-- Add the modifier \"is-active\" to display it on mobile -->\n  <div class=\"nav-right nav-menu\" [ngClass]=\"{'is-active': show}\">\n    <a *ngIf=\"!isLoggedIn\" class=\"nav-item\" routerLink=\"/\">\n      Home\n    </a>\n    <a *ngIf=\"!isLoggedIn\" class=\"nav-item\" routerLink=\"/login\">\n      Login\n    </a>\n\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"dashboard\">\n      Dashboard\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/all-bills\">\n      Bills\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/current-issues\">\n      Issues\n    </a>\n    <!-- <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/uploads\">\n      Uploads\n    </a> -->\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" (click)=\"logout()\">\n      Logout\n    </a>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dosis:300,400);", ""]);

// module
exports.push([module.i, "nav {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  margin-bottom: 25px;\n  padding: 0 3vw;\n  height: 4.5rem; }\n\n.logo {\n  font-family: 'Dosis', sans-serif;\n  font-size: 29px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopNavComponent = (function () {
    function TopNavComponent(_authSrv, _router) {
        this._authSrv = _authSrv;
        this._router = _router;
        // collapse:string = "closed";
        this.show = false;
        this.isLoggedIn = false;
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authSrv.authChange.subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
                // this._router.navigate(['login']);
            }
        });
    };
    TopNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
        // this.collapse = this.collapse == "open" ? 'closed' : 'open';
    };
    TopNavComponent.prototype.logout = function () {
        this._authSrv.signOut();
        // this._authSrv.authChange.subscribe
    };
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'top-nav',
            template: __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('collapse', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: '1',
                        display: 'block',
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: '0',
                        display: 'none',
                        transform: 'translate3d(0, -100%, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('closed => open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open => closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], TopNavComponent);
    return TopNavComponent;
    var _a, _b;
}());

//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user_form content columns\">\n  <aside class=\"column is-4 is-offset-4\">\n\n    <form class=\"newUserForm\" [formGroup]=\"userForm\"  *ngIf=\"!newUser\"  (ngSubmit)=\"signup()\">\n\n      <h3>New User Signup</h3>\n      <p class=\"btn btn-sm btn-secondary\" (click)=\"toggleForm()\">Already Registered?</p>\n      <hr>\n\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n            formControlName=\"email\" required >\n\n      <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n        {{ formErrors.email }}\n      </div>\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n            formControlName=\"password\" required >\n\n      <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n        {{ formErrors.password }}\n      </div>\n\n      <div *ngIf=\"userForm.valid\" class=\"notification is-success\">Form is valid</div>\n      <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n    </form>\n\n\n    <form class=\"loginForm\" [formGroup]=\"userForm\"  *ngIf=\"newUser\"  (ngSubmit)=\"login()\">\n\n      <h3>Login</h3>\n      <hr>\n\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n            formControlName=\"email\" required >\n\n      <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n      </div>\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n            formControlName=\"password\" required >\n\n      <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n      </div>\n\n      <button type=\"submit\" class=\"button submit\" [disabled]=\"!userForm.valid\">Submit</button>\n\n      <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n      <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n      <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n      <br>\n      <p class=\"new_user btn btn-sm btn-secondary\" (click)=\"toggleForm()\">New User?</p>\n\n    </form>\n  </aside>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user_form {\n  margin-top: 3em;\n  margin-bottom: 5em; }\n\n.loginForm button.submit {\n  margin-top: 1em; }\n\n.loginForm .new_user {\n  color: #f16f7f;\n  border-bottom: solid 1px #f16f7f;\n  transition: color ease 0.3s, border-bottom ease 0.3s;\n  width: 75px;\n  display: block;\n  margin: auto;\n  margin-top: 1em;\n  font-weight: 400;\n  font-size: 14px;\n  cursor: pointer; }\n\n.loginForm .new_user:hover {\n  color: #dc3e50;\n  border-bottom: solid 1px #dc3e50; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email'
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            }
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email
                ]
            ],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-form',
            template: __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-form/user-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], UserFormComponent);
    return UserFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"has-text-centered\" *ngIf=\"!auth.currentUser; else alreadyLoggedIn\">\n  <user-form></user-form>\n</div>\n\n\n\n<ng-template #alreadyLoggedIn>\n  <p class=\"text-success\">\n    Already logged in!\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authChange.subscribe(function (res) {
            if (res) {
                console.log("Logged In");
                _this.router.navigate(['/']);
            }
            else {
                console.log("Not Logged In");
            }
        });
    };
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.facebookLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.twitterLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.anonymousLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        this.router.navigate(['/']);
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-login',
            template: __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- User logged in -->\n    <div class=\"box\" *ngIf=\"auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <img class=\"card-img-top\" [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n        <p class=\"text-truncate\">UID: {{ auth.currentUserId }}</p>\n        <button class=\"button\" (click)=\"logout()\">Logout</button>\n\n   </div>\n\n    <!-- User NOT logged in -->\n    <div class=\"box\" *ngIf=\"!auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <p class=\"card-text\">Login to get started...</p>\n        <button class=\"button\" routerLink=\"/login\">Login</button>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-profile',
            template: __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDP0RrViWiM6q7LAG6CLGX8uTYJPbWe_j4",
        authDomain: "project-atlas-dev1.firebaseapp.com",
        databaseURL: "https://project-atlas-dev1.firebaseio.com",
        projectId: "project-atlas-dev1",
        storageBucket: "project-atlas-dev1.appspot.com",
        messagingSenderId: "207423511127"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map