(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2b6":
/*!**********************************************************!*\
  !*** ./src/app/Components/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "Lo1d");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\New_folder\South Sinia\src\main.ts */"zUnb");


/***/ }),

/***/ "3Y40":
/*!**********************************************!*\
  !*** ./src/app/Services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let RegisterService = class RegisterService {
    constructor() {
        this.setDir = 'rtl';
        this.openMenuFromRight = 'end';
    }
};
RegisterService.ctorParameters = () => [];
RegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "3dCt":
/*!**************************************************!*\
  !*** ./src/app/Components/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('Group 414@2x.png') no-repeat center/cover;\n  --padding-top: 0px;\n}\n\n.TitleAr {\n  display: grid;\n  color: white;\n  text-align: center;\n  position: relative;\n  top: 20vh;\n}\n\n.TitleEn {\n  display: grid;\n  color: white;\n  text-align: center;\n  position: relative;\n  top: 25vh;\n}\n\n.smallTitle {\n  font-size: 12pt;\n}\n\n.mainTitle {\n  font-size: 18pt;\n}\n\n.lang {\n  display: grid;\n  color: white;\n  text-align: center;\n  position: relative;\n  top: 35vh;\n}\n\n.selectLang {\n  position: relative;\n  top: 38vh;\n  width: 90%;\n  margin: auto;\n  background: white;\n  border-radius: 10px;\n  height: 35px;\n  padding: 10px;\n  color: black;\n}\n\nion-fab-button {\n  --background: transparent;\n  --box-shadow: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0REFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFRSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwXFwgNDE0QDJ4LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLlRpdGxlQXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHZoO1xyXG59XHJcbi5UaXRsZUVue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjV2aDtcclxufVxyXG4uc21hbGxUaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxufVxyXG4ubWFpblRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxOHB0O1xyXG59XHJcbi5sYW5ne1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzV2aDtcclxufVxyXG4uc2VsZWN0TGFuZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzh2aDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1mYWItYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Lo1d":
/*!************************************************!*\
  !*** ./src/app/Components/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "vmZe");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "3dCt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/register.service */ "3Y40");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let LoginPage = class LoginPage {
    constructor(router, registerService, translate, menuCtrl, stora) {
        this.router = router;
        this.registerService = registerService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.stora = stora;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
        this.stora.get('lang').then((val) => {
            console.log(val);
            if (val == 1) {
                this.registerService.title = 'الصفحة الرئيسية';
                this.registerService.setDir = 'rtl';
                this.registerService.openMenuFromRight = 'end';
                this.translate.setDefaultLang('ar');
                this.translate.use('ar');
                this.router.navigate(['tabs/home']);
            }
            else if (val == 2) {
                this.registerService.title = 'Home';
                this.registerService.openMenuFromRight = 'start';
                this.registerService.setDir = 'ltr';
                this.translate.setDefaultLang('en');
                this.translate.use('en');
                this.router.navigate(['tabs/home']);
                this.stora.set('lang', this.selectedValues);
            }
        });
    }
    setLang() {
        if (this.selectedValues == 1) {
            this.registerService.title = 'الصفحة الرئيسية';
            this.registerService.setDir = 'rtl';
            this.registerService.openMenuFromRight = 'end';
            this.translate.setDefaultLang('ar');
            this.translate.use('ar');
            this.stora.set('lang', this.selectedValues);
            this.router.navigate(['tabs/home']);
        }
        else if (this.selectedValues == 2) {
            this.registerService.title = 'Home';
            this.registerService.openMenuFromRight = 'start';
            this.registerService.setDir = 'ltr';
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            this.router.navigate(['tabs/home']);
            this.stora.set('lang', this.selectedValues);
        }
    }
    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_Services_translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/translate-config.service */ "yNuy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_register_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/register.service */ "3Y40");










let AppComponent = class AppComponent {
    constructor(network, alertController, translate, selectlang, router, platform, registerService) {
        this.network = network;
        this.alertController = alertController;
        this.translate = translate;
        this.selectlang = selectlang;
        this.router = router;
        this.platform = platform;
        this.registerService = registerService;
        this.initializeApp();
    }
    initializeApp() {
        // this.lang = 'ar';
        this.platform.ready().then(() => {
            this.router.navigateByUrl('login');
            this.registerService.title = 'الصفحة الرئيسية';
            this.registerService.setDir = 'rtl';
            this.registerService.openMenuFromRight = 'end';
            this.translate.setDefaultLang('ar');
            this.translate.use('ar');
        });
        this.network.onDisconnect().subscribe(() => {
            this.presentAlertDone();
        });
    }
    presentAlertDone() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'لايوجد إتصال بلإنترنت',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_Services_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _Services_register_service__WEBPACK_IMPORTED_MODULE_9__["RegisterService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"router.url.split('/')[1] != 'login' \" dir=\"rtl\"> \n  <ion-toolbar>\n  <ion-row size=\"12\" class=\"rowbackground\">\n    <ion-col size=\"2\">\n      <ion-buttons >\n        <ion-menu-button style=\"color: black;\"></ion-menu-button>\n        </ion-buttons>\n    </ion-col>\n   <ion-col size=\"8\" class=\"colTitle\" [dir]=\"registerService.setDir\">\n     <label class=\"title\">{{registerService.title}}</label>\n   </ion-col>\n   <ion-col size=\"2\">\n     <ion-back-button defaultHref=\"{{registerService.backbtn}}\" style=\"--color:black;\" *ngIf=\"router.url.split('/')[2] != 'home'\"></ion-back-button>\n   </ion-col>\n  </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-app>\n<ion-menu contentId=\"main-content\" type=\"overlay\"  [side]=\"openMenuFromRight\">\n\n  <ion-content>\n    <ion-list id=\"inbox-list\">\n      <ion-list-header [dir]=\"registerService.setDir\">{{'SideMenu.Title' | translate}}</ion-list-header> \n       <ion-menu-toggle auto-hide=\"false\" >\n        <ion-item routerDirection=\"root\"  routerLink=\"/home\" lines=\"none\" detail=\"false\" >\n          <ion-img [slot]=\"openMenuFromRight\" src=\"../assets/icon/home_b.png\"></ion-img>\n          <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.home'| translate}}</ion-label>\n        </ion-item>\n        <ion-item routerDirection=\"root\"  routerLink=\"/login\" lines=\"none\" detail=\"false\" >\n          <ion-img [slot]=\"openMenuFromRight\" src=\"../assets/icon/login.png\"></ion-img>\n          <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.signin'| translate}}</ion-label>\n        </ion-item>\n        <ion-item routerDirection=\"root\"  routerLink=\"/news\" lines=\"none\" detail=\"false\" >\n          <ion-img [slot]=\"openMenuFromRight\" src=\"../assets/icon/news-0١.png\"></ion-img>\n          <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.news'| translate}}</ion-label>\n        </ion-item>\n        <ion-item routerDirection=\"root\"  routerLink=\"/profile\" lines=\"none\" detail=\"false\" >\n          <ion-img [slot]=\"openMenuFromRight\" src=\"../assets/icon/personal_page-0١-0١.png\"></ion-img>\n          <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.profile'| translate}}</ion-label>\n        </ion-item>\n        <ion-item routerDirection=\"root\"  routerLink=\"/about-us\" lines=\"none\" detail=\"false\" >\n          <ion-img [slot]=\"openMenuFromRight\" src=\"../assets/icon/brief.png\"></ion-img>\n          <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.about'| translate}}</ion-label>\n        </ion-item>\n        <ion-item (click)=\"logout()\" routerDirection=\"root\" lines=\"none\" detail=\"false\" >\n          <ion-img [slot]=\"openMenuFromRight\" src=\"../assets/icon/login.png\"></ion-img>\n          <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.logout'| translate}}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n\n    <ion-list id=\"labels-list\">\n      <ion-item [dir]=\"registerService.setDir\" style=\"--border-style: none;\">\n        <ion-radio-group (ionChange)=\"radioSelect($event)\" [value]=\"'ar'\">\n          <ion-list-header>\n            <ion-icon md=\"md-settings\" ></ion-icon>\n            <ion-label>{{'SideMenu.Language'| translate}}</ion-label>\n          </ion-list-header>\n          <ion-item  style=\"--border-style: none;\">\n            <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.ArLanguage'| translate}}</ion-label>\n            <ion-radio value=\"ar\" [slot]=\"openMenuFromRight\"></ion-radio>\n          </ion-item>\n          <ion-item  style=\"--border-style: none;\">\n            <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.EnLanguage'| translate}}</ion-label>\n            <ion-radio value=\"en\" [slot]=\"openMenuFromRight\"></ion-radio>\n          </ion-item>\n          <ion-item  style=\"--border-style: none;\">\n            <ion-label [dir]=\"registerService.setDir\">{{'SideMenu.FrLanguage'| translate}}</ion-label>\n            <ion-radio value=\"fr\" [slot]=\"openMenuFromRight\"></ion-radio>\n          </ion-item>\n          </ion-radio-group>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu> \n\n  <ion-router-outlet></ion-router-outlet>\n</ion-app> -->\n\n<ion-app>\n  <ion-menu contentId=\"content1\" [side]=\"registerService.openMenuFromRight\">\n\n    <ion-content>\n      <ion-img src=\"../assets/images/download.png\" class=\"govImg\"></ion-img>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-img src=\"../assets/icon/home (1)gold.svg\" class=\"rowImg\"></ion-img>\n          <ion-label>الرئيسية</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-img src=\"../assets/icon/handshakegold.svg\" class=\"rowImg\"></ion-img>\n          <ion-label>الاستثمار</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-img src=\"../assets/icon/travel (4)gold.svg\" class=\"rowImg\"></ion-img>\n          <ion-label>السياحة</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"menuItems\" style=\"margin-top: 40px;\">\n        <ion-col>\n          <ion-label>عن المحافظة</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"menuItems\">\n        <ion-col>\n          <ion-label>الطلبات العامة والشكاوي</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"menuItems\">\n        <ion-col>\n          <ion-label>اتصل بنا</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"menuItems\">\n        <ion-col>\n          <ion-label>الاعدادات</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content1\" main [dir]=\"registerService.setDir\"></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _app_Components_login_login_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/Components/login/login-routing.module */ "+2b6");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_Components_login_login_routing_module__WEBPACK_IMPORTED_MODULE_12__["LoginPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            }),
        ],
        providers: [
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__["HTTP"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | Components-login-login-module */ "Components-login-login-module").then(__webpack_require__.bind(null, /*! ./Components/login/login.module */ "CE70")).then(m => m.LoginPageModule)
    },
    {
        path: 'city-details-modal',
        loadChildren: () => Promise.all(/*! import() | Modals-city-details-modal-city-details-modal-module */[__webpack_require__.e("default~Components-Tourist-city-details-city-details-module~Modals-city-details-modal-city-details-m~de511d95"), __webpack_require__.e("Modals-city-details-modal-city-details-modal-module")]).then(__webpack_require__.bind(null, /*! ./Modals/city-details-modal/city-details-modal.module */ "6RZ8")).then(m => m.CityDetailsModalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vmZe":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<div class=\"TitleAr\">\n  <ion-label class=\"smallTitle\">مرحبا بك في التطبيق الرسمي</ion-label>\n  <ion-label class=\"mainTitle\">لمحافظة جنوب سيناء</ion-label>\n</div>\n<div class=\"TitleEn\">\n  <ion-label class=\"smallTitle\">Welcome to</ion-label>\n  <ion-label class=\"mainTitle\">South of Sinai Official App</ion-label>\n</div>\n<div class=\"lang\">\n  <ion-label class=\"smallTitle\">اختار اللغة</ion-label>\n  <ion-label class=\"smallTitle\">choose langauge</ion-label>\n</div>\n<ion-select placeholder=\"Select Language\" class=\"selectLang\"\ninterface=\"popover\" [(ngModel)]=\"selectedValues\">\n  <!-- <ion-select-option value=\"0\">select</ion-select-option> -->\n  <ion-select-option value=\"1\">العربية</ion-select-option>\n  <ion-select-option value=\"2\">ُEnglish</ion-select-option>\n</ion-select>\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"setLang()\">\n  <ion-fab-button>\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "yNuy":
/*!******************************************************!*\
  !*** ./src/app/Services/translate-config.service.ts ***!
  \******************************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
        this.dirLang = " asd";
    }
    static switchLanguage(value) {
        throw new Error("Method not implemented.");
    }
    getDefaultLanguage() {
        const language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        return language;
    }
    setLanguage(setLang) {
        this.translate.use(setLang);
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslateConfigService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colTitle {\n  align-self: center;\n}\n\nion-header {\n  height: 45px;\n}\n\nion-col {\n  text-align: center;\n}\n\n.govImg {\n  height: 120px;\n}\n\n.rowImg {\n  height: 55px;\n  width: 55px;\n  padding: 10px;\n  margin: auto;\n  border-radius: 50%;\n  border: 1px solid #C19F67;\n  background: #F9F7F2;\n}\n\n.menuItems {\n  background: #F9F7F2;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBTUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbFRpdGxle1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuaW9uLWNvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ292SW1ne1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG4ucm93SW1ne1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MxOUY2NztcclxuICAgIGJhY2tncm91bmQ6ICNGOUY3RjI7XHJcbn1cclxuLm1lbnVJdGVtc3tcclxuICAgIGJhY2tncm91bmQ6ICNGOUY3RjI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map