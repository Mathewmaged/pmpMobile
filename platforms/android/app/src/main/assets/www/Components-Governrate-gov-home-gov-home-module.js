(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-Governrate-gov-home-gov-home-module"],{

/***/ "JvyQ":
/*!***************************************************************************!*\
  !*** ./src/app/Components/Governrate/gov-home/gov-home-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GovHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovHomePageRoutingModule", function() { return GovHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gov_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gov-home.page */ "n9ZJ");




const routes = [
    {
        path: '',
        component: _gov_home_page__WEBPACK_IMPORTED_MODULE_3__["GovHomePage"]
    }
];
let GovHomePageRoutingModule = class GovHomePageRoutingModule {
};
GovHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GovHomePageRoutingModule);



/***/ }),

/***/ "RdSS":
/*!*******************************************************************!*\
  !*** ./src/app/Components/Governrate/gov-home/gov-home.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mySlider {\n  height: 240px;\n}\n\n#mySlider ion-slide {\n  width: 100%;\n  object-fit: cover;\n}\n\n#mySlider .myCard {\n  width: 100%;\n  margin: 0px;\n  object-fit: cover;\n}\n\n#mySlider .myCard img {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n}\n\n#mySlider .myOverlaySLider {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-right: 2%;\n  text-align: right;\n  position: absolute;\n  z-index: 99;\n  bottom: 20%;\n  opacity: 0.8;\n  color: white;\n  background-color: black;\n}\n\n.mainLabels ion-label {\n  margin-inline-start: 10px;\n  font-size: 1rem;\n}\n\n.mainLabels {\n  width: 100%;\n  text-align: start;\n  margin-top: 20px;\n  color: #042359;\n  font-size: 14pt;\n}\n\n#slideWithNav3 {\n  height: 120px;\n  margin-top: 10px;\n}\n\n#slideWithNav3 ion-slide {\n  height: 110px;\n  width: 38% !important;\n  margin-inline: 10px;\n  box-shadow: 0 4px 11px -2px #ccc;\n  border-radius: 15px;\n  margin-top: 5px;\n}\n\n#slideWithNav3 img {\n  height: 70px;\n  width: 80%;\n}\n\n.learnAboutCol {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.learnAbout {\n  border: 0.4pt #042359 solid;\n  border-radius: 50%;\n  padding: 11px;\n  height: 9vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ292LWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBWUoiLCJmaWxlIjoiZ292LWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215U2xpZGVye1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG4jbXlTbGlkZXIgaW9uLXNsaWRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4jbXlTbGlkZXIgLm15Q2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4jbXlTbGlkZXIgLm15Q2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4jbXlTbGlkZXIgLm15T3ZlcmxheVNMaWRlcntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MiU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm90dG9tOiAyMCU7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYWluTGFiZWxzIGlvbi1sYWJlbHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLm1haW5MYWJlbHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjMDQyMzU5O1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcbiNzbGlkZVdpdGhOYXYze1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3NsaWRlV2l0aE5hdjMgaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHdpZHRoOiAzOCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMXB4IC0ycHggI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuI3NsaWRlV2l0aE5hdjMgaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4ubGVhcm5BYm91dENvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbn1cclxuLmxlYXJuQWJvdXR7XHJcbiAgICBib3JkZXI6IC40cHQgIzA0MjM1OSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDl2aDtcclxufSJdfQ== */");

/***/ }),

/***/ "cjGG":
/*!************************************************!*\
  !*** ./src/app/Services/governrate.service.ts ***!
  \************************************************/
/*! exports provided: GovernrateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernrateService", function() { return GovernrateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");





let GovernrateService = class GovernrateService {
    constructor(http, http1) {
        this.http = http;
        this.http1 = http1;
    }
    GetGovNews() {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'News/Index/3/1');
    }
};
GovernrateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] }
];
GovernrateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GovernrateService);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment, SERVER_URL, Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
const environment = {
    production: true
};
const SERVER_URL = 'http://41.128.217.116:10087/';
const Images = 'http://41.128.217.177:10085/Upload/';


/***/ }),

/***/ "ipf8":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Governrate/gov-home/gov-home.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-slides #mySlider id=\"mySlider\" (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" pager loop=\"true\" [options]=\"slideOpts\" >\n    <ion-slide *ngFor=\"let item of sliderData\" (click)=\"navigat(item.id)\">\n      <ion-card class=\"myCard\"> \n        <img src=\"{{photoPath}}News/Photo/{{item.id}}/{{item.photo}}\" /> \n          <div class=\"myOverlaySLider\"  >\n            <div class=\"card-subtitle\">{{item.title}}</div>\n          </div>\n      </ion-card>\n      </ion-slide>\n  </ion-slides>\n\n  <div class=\"mainLabels\">\n    <ion-label>{{\"GovHome.nationalProject\" | translate}}</ion-label>\n  </div>\n\n  <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2 id=\"slideWithNav3\"\n    (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 364.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 364.png\">\n    </ion-slide>\n    <ion-slide style=\"background: #F2F3F6;\">\n      <ion-label style=\"color: #C19F67;\">المـزيـد</ion-label>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"mainLabels\">\n    <ion-label>دليل الخدمات الالكترونية</ion-label>\n  </div>\n\n  <ion-grid>\n    <ion-row size=\"12\" >\n        <ion-col size=\"3\" class=\"learnAboutCol\">\n            <ion-img src=\"../../../assets/icon/social-care.svg\" class=\"learnAbout\"></ion-img>\n            <ion-label>دليل الخدمات</ion-label>\n        </ion-col>\n        <ion-col size=\"3\"  class=\"learnAboutCol\">\n            <ion-img src=\"../../../assets/icon/embassy.svg\" class=\"learnAbout\"></ion-img>\n            <ion-label>خدمات المديريات</ion-label>\n        </ion-col>\n        <ion-col size=\"3\"  class=\"learnAboutCol\">\n            <ion-img src=\"../../../assets/icon/emergency-call (1).svg\" class=\"learnAbout\"></ion-img>\n            <ion-label>ارقم الطوارئ</ion-label>\n        </ion-col>\n        <ion-col size=\"3\"  class=\"learnAboutCol\">\n            <ion-img src=\"../../../assets/icon/Group 199.svg\" class=\"learnAbout\"></ion-img>\n            <ion-label>{{\"Home.more\" | translate}}</ion-label>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "mNC5":
/*!*******************************************************************!*\
  !*** ./src/app/Components/Governrate/gov-home/gov-home.module.ts ***!
  \*******************************************************************/
/*! exports provided: GovHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovHomePageModule", function() { return GovHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _gov_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gov-home-routing.module */ "JvyQ");
/* harmony import */ var _gov_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gov-home.page */ "n9ZJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let GovHomePageModule = class GovHomePageModule {
};
GovHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gov_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["GovHomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_gov_home_page__WEBPACK_IMPORTED_MODULE_6__["GovHomePage"]]
    })
], GovHomePageModule);



/***/ }),

/***/ "n9ZJ":
/*!*****************************************************************!*\
  !*** ./src/app/Components/Governrate/gov-home/gov-home.page.ts ***!
  \*****************************************************************/
/*! exports provided: GovHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovHomePage", function() { return GovHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gov_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gov-home.page.html */ "ipf8");
/* harmony import */ var _gov_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gov-home.page.scss */ "RdSS");
/* harmony import */ var _Services_governrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Services/governrate.service */ "cjGG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");







let GovHomePage = class GovHomePage {
    constructor(govService) {
        this.govService = govService;
        this.slideOpts = {
            effect: 'flip',
            autoplay: {
                delay: 4000
            }
        };
        this.slideOptsTwo = {
            initialSlide: 1,
            slidesPerView: 3,
            loop: true,
            centeredSlides: false,
            spaceBetween: 5
        };
        this.sliderData = [];
        this.photoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["Images"];
    }
    ionViewWillEnter() {
        this.slider.startAutoplay();
        this.govService.GetGovNews().subscribe(res => {
            this.sliderData = res;
        });
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.slider.stopAutoplay();
    }
    slidesDidLoad(slides) {
        this.slider.startAutoplay();
    }
};
GovHomePage.ctorParameters = () => [
    { type: _Services_governrate_service__WEBPACK_IMPORTED_MODULE_3__["GovernrateService"] }
];
GovHomePage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"], { static: true },] }],
    slideWithNav2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slideWithNav2', { static: false },] }]
};
GovHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-gov-home',
        template: _raw_loader_gov_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gov_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GovHomePage);



/***/ })

}]);
//# sourceMappingURL=Components-Governrate-gov-home-gov-home-module.js.map