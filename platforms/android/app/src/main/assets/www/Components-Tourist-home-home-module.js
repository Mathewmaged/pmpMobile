(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-Tourist-home-home-module"],{

/***/ "6Y6T":
/*!*********************************************!*\
  !*** ./src/app/Services/tourist.service.ts ***!
  \*********************************************/
/*! exports provided: TouristService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristService", function() { return TouristService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");





let TouristService = class TouristService {
    constructor(http, http1) {
        this.http = http;
        this.http1 = http1;
    }
    GetTouristNews() {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'News/Index/1/1', {}, {});
    }
    GetFirstCities() {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'City/Index/1', {}, {});
    }
    GetCityDetails(id) {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'City/Details/' + id, {}, {});
    }
    GetHotels(index) {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'Directory/Index/2/' + index, {}, {});
    }
    GetAirborts(index) {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'Directory/Index/1024/' + index, {}, {});
    }
    GetRestaurants(index) {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'Directory/Index/1025/' + index, {}, {});
    }
    GetTourismCompany(index) {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'Directory/Index/1023/' + index, {}, {});
    }
    GetDivingCenter(index) {
        return this.http1.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"] + 'Directory/Index/5/' + index, {}, {});
    }
};
TouristService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] }
];
TouristService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TouristService);



/***/ }),

/***/ "A7dj":
/*!********************************************************!*\
  !*** ./src/app/Components/Tourist/home/home.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mySlider {\n  height: 240px;\n}\n\n#mySlider ion-slide img {\n  object-fit: cover;\n  width: 100%;\n}\n\n#mySlider ion-slide {\n  width: 100%;\n  object-fit: cover;\n}\n\n#mySlider .myCard {\n  width: 100%;\n  margin: 0px;\n  object-fit: cover;\n}\n\n#mySlider .myCard img {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n}\n\n.mainLabels {\n  width: 100%;\n  text-align: start;\n  margin-top: 20px;\n  color: #042359;\n  font-size: 14pt;\n}\n\n#mySlider .myOverlaySLider {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-right: 2%;\n  text-align: right;\n  position: absolute;\n  z-index: 99;\n  bottom: 20%;\n  opacity: 0.8;\n  color: white;\n  background-color: black;\n}\n\n.mainLabels ion-label {\n  margin-inline-start: 10px;\n  font-size: 1rem;\n}\n\n#slideWithNav2 {\n  height: 120px;\n  margin-top: 10px;\n}\n\n#slideWithNav2 ion-slide {\n  height: 105px;\n  width: 27% !important;\n  margin-inline-end: 10px;\n}\n\n#slideWithNav2 img {\n  height: 120px;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 9px;\n}\n\n.myOverlay {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  color: white;\n  font-size: 12px;\n}\n\n.learnAboutCol {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.learnAbout {\n  border: 0.4pt #042359 solid;\n  border-radius: 50%;\n  padding: 11px;\n  height: 10vh;\n}\n\n.attractiosAlbum .mainimage {\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  display: flex;\n}\n\n.attractiosAlbum2 {\n  background-color: #F1F2F5;\n  padding-block: 10px;\n}\n\n.attractiosAlbum2 ion-card {\n  width: 80%;\n  margin: auto;\n  margin-bottom: 20px;\n  border-radius: 15px;\n}\n\n.attractiosAlbum2 ion-card img {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n}\n\n.attractiosAlbum2 ion-card-header {\n  padding: 10px;\n}\n\nion-card-subtitle {\n  text-align: center;\n}\n\n#slideWithNav3 {\n  height: 120px;\n  margin-top: 10px;\n}\n\n#slideWithNav3 ion-slide {\n  height: 105px;\n  width: 39% !important;\n  margin-inline-end: 10px;\n}\n\n#slideWithNav3 img {\n  height: 120px;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 9px;\n}\n\n.myOverlayWeather {\n  display: grid;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  color: white;\n  font-size: 15px;\n}\n\n.video {\n  width: 100%;\n  margin-top: 15px;\n}\n\n.shadow {\n  filter: blur(20px);\n  /* this is the magic part */\n  height: 100%;\n  left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWFKOztBQVhBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWVKOztBQVpBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGFBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBb0JKOztBQWxCQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBcUJKOztBQW5CQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0JBQUE7RUFBbUIsMkJBQUE7RUFDbkIsWUFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF5QkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlTbGlkZXJ7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcbiNteVNsaWRlciBpb24tc2xpZGUgaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jbXlTbGlkZXIgaW9uLXNsaWRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4jbXlTbGlkZXIgLm15Q2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4jbXlTbGlkZXIgLm15Q2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubWFpbkxhYmVsc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwNDIzNTk7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuI215U2xpZGVyIC5teU92ZXJsYXlTTGlkZXJ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJvdHRvbTogMjAlO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4ubWFpbkxhYmVscyBpb24tbGFiZWx7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbiNzbGlkZVdpdGhOYXYye1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3NsaWRlV2l0aE5hdjIgaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICAgIHdpZHRoOiAyNyUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG59XHJcbiNzbGlkZVdpdGhOYXYyIGltZ3tcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcbi5teU92ZXJsYXl7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubGVhcm5BYm91dENvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbn1cclxuLmxlYXJuQWJvdXR7XHJcbiAgICBib3JkZXI6IC40cHQgIzA0MjM1OSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLmF0dHJhY3Rpb3NBbGJ1bSAubWFpbmltYWdle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gZmlsdGVyOiBkcm9wLXNoYWRvdygxbW0gLTJtbSA0bW0gIzdEODI3QSk7XHJcbn1cclxuLmF0dHJhY3Rpb3NBbGJ1bTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY1O1xyXG4gICAgcGFkZGluZy1ibG9jazogMTBweDtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtMiBpb24tY2FyZHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtMiBpb24tY2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtMiBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNzbGlkZVdpdGhOYXYze1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3NsaWRlV2l0aE5hdjMgaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICAgIHdpZHRoOiAzOSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG59XHJcbiNzbGlkZVdpdGhOYXYzIGltZ3tcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcbi5teU92ZXJsYXlXZWF0aGVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi52aWRlb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luLWlubGluZTogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5zaGFkb3cge1xyXG4gICAgZmlsdGVyOiBibHVyKDIwcHgpOy8qIHRoaXMgaXMgdGhlIG1hZ2ljIHBhcnQgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "Sp2C":
/*!****************************************************************!*\
  !*** ./src/app/Components/Tourist/home/home-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "ZiU+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "ZiU+":
/*!******************************************************!*\
  !*** ./src/app/Components/Tourist/home/home.page.ts ***!
  \******************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "ohhh");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "A7dj");
/* harmony import */ var _Services_tourist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/tourist.service */ "6Y6T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/register.service */ "3Y40");









let HomePage = class HomePage {
    constructor(router, touristService, registerService) {
        this.router = router;
        this.touristService = touristService;
        this.registerService = registerService;
        this.slideOptsTwo = {
            initialSlide: 0,
            slidesPerView: 3,
            loop: true,
            centeredSlides: false,
            spaceBetween: 5
        };
        this.slideOpts = {
            effect: 'flip',
            autoplay: {
                delay: 4000
            }
        };
        this.albumDisplay = false;
        this.sliderData = [];
        this.photoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["Images"];
        this.cities = [];
    }
    ionViewWillEnter() {
        this.slider.startAutoplay();
        this.touristService.GetTouristNews().then(res => {
            this.sliderData = JSON.parse(res.data);
        });
        this.touristService.GetFirstCities().then(res => {
            this.cities = JSON.parse(res.data);
        });
    }
    ngOnInit() {
    }
    getAlbumList() {
        this.albumDisplay = true;
    }
    ionViewWillLeave() {
        this.slider.stopAutoplay();
    }
    slidesDidLoad(slides) {
        this.slider.startAutoplay();
    }
    goToCity(id) {
        this.router.navigate(['tabs/city-details', id]);
    }
    goToLearnList(id) {
        this.router.navigate(['./tabs/learn-about', id]);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_tourist_service__WEBPACK_IMPORTED_MODULE_3__["TouristService"] },
    { type: src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"] }
];
HomePage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"], { static: true },] }],
    slideWithNav2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['slideWithNav2', { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



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

/***/ "gXtJ":
/*!********************************************************!*\
  !*** ./src/app/Components/Tourist/home/home.module.ts ***!
  \********************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "Sp2C");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "ZiU+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "ohhh":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Tourist/home/home.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-slides #mySlider id=\"mySlider\" (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" pager loop=\"true\" [options]=\"slideOpts\" >\n        <!-- <ion-slide *ngFor=\"let item of sliderData\" (click)=\"navigat(item.id)\">\n          <ion-card class=\"myCard\"> \n            <img src=\"{{photoPath}}News/Photo/{{item.id}}/{{item.photo}}\" /> \n              <div class=\"myOverlaySLider\"  >\n                <div class=\"card-subtitle\">{{item.title}}</div>\n              </div>\n          </ion-card>\n          </ion-slide> -->\n          <ion-slide>\n            <img src=\"../../../../assets/images/55@2x.png\">\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../../../assets/images/Mask Group 70@2x.png\">\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../../../assets/images/Mask Group 71@2x.png\">\n          </ion-slide>\n    </ion-slides> \n\n\n    <div class=\"mainLabels\">\n      <ion-label>{{\"Home.cittLable\" | translate}}</ion-label>\n    </div>\n\n    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2 id=\"slideWithNav2\"\n    (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n    <ion-slide (click)=\"goToCity(item.id)\" *ngFor=\"let item of cities\">\n      <img src=\"{{photoPath}}City/Photo/{{item.id}}/{{item.photo}}\">\n      <!-- <img src=\"../../../assets/images/Group 364.png\"> -->\n      <div class=\"myOverlay\">\n      <ion-label>{{item.name}}</ion-label>\n    </div>\n    </ion-slide>\n    </ion-slides>\n\n    <div class=\"mainLabels\">\n        <ion-label>{{\"Home.Learnabout\" | translate}}</ion-label>\n    </div>\n\n    <ion-grid style=\"width: 90%;\">\n        <ion-row size=\"12\" >\n            <ion-col size=\"3\" class=\"learnAboutCol\" (click)=\"goToLearnList('airborts')\">\n                <ion-img src=\"../../../assets/icon/Group 195.svg\" class=\"learnAbout\"></ion-img>\n                <ion-label>{{\"Home.airborts\" | translate}}</ion-label>\n            </ion-col>\n            <ion-col size=\"3\"  class=\"learnAboutCol\" (click)=\"goToLearnList('hotels')\">\n                <ion-img src=\"../../../assets/icon/hotel (4).svg\" class=\"learnAbout\"></ion-img>\n                <ion-label>{{\"Home.hotels\" | translate}}</ion-label>\n            </ion-col>\n            <ion-col size=\"3\"  class=\"learnAboutCol\" (click)=\"goToLearnList('restaurants')\">\n                <ion-img src=\"../../../assets/icon/Group 197.svg\" class=\"learnAbout\"></ion-img>\n                <ion-label>{{\"Home.restaurant\" | translate}}</ion-label>\n            </ion-col>\n            <ion-col size=\"3\"  class=\"learnAboutCol\" (click)=\"goToLearnList(0)\">\n                <ion-img src=\"../../../assets/icon/Group 199.svg\" class=\"learnAbout\"></ion-img>\n                <ion-label>{{\"Home.more\" | translate}}</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div class=\"mainLabels\">\n        <ion-label>{{\"Home.mostattractions\" | translate}}</ion-label>\n    </div>\n\n    <div class=\"attractiosAlbum\" (click)=\"getAlbumList()\" *ngIf=\"albumDisplay == false\">\n        <img src=\"../../../assets/images/Group 363.png\" class=\"mainimage\">\n        <!-- <img class=\"shadow\" src=\"../../../assets/images/Group 363.png\" alt=\"\"> -->\n    </div>\n\n    <div class=\"attractiosAlbum2\" *ngIf=\"albumDisplay == true\">\n        <ion-card>\n          <img src=\"../../../assets/images/Group 364.png\" />\n          <ion-card-header>\n            <ion-card-subtitle>سانت كاثرين</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n        <ion-card>\n          <img src=\"../../../assets/images/Group 366.png\" />\n          <ion-card-header>\n            <ion-card-subtitle>راس محمد</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n        <ion-card>\n          <img src=\"../../../assets/images/Group 363.png\" />\n          <ion-card-header>\n            <ion-card-subtitle>محمية نبق</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n    </div>\n\n    <div class=\"mainLabels\">\n        <ion-label>{{\"Home.weather\" | translate}}</ion-label>\n    </div>\n    \n    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2 id=\"slideWithNav3\"\n    *ngIf=\"registerService.setDir == 'ltr'\"\n    (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 440.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 441.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 439.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 438.png\">\n    </ion-slide>\n    </ion-slides>\n\n    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2 id=\"slideWithNav3\"\n    *ngIf=\"registerService.setDir == 'rtl'\"\n    (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 422.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 423.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 424.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/images/Group 425.png\">\n    </ion-slide>\n    </ion-slides>\n\n\n    <div class=\"mainLabels\">\n        <ion-label>{{\"Home.videoLib\" | translate}}</ion-label>\n    </div>\n\n    <a href=\"https://www.youtube.com/embed/Grog7CvhzEs\" ><img src=\"https://img.youtube.com/vi/Grog7CvhzEs/hqdefault.jpg\" class=\"video\"/></a>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=Components-Tourist-home-home-module.js.map