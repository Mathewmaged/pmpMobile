(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Components-Tourist-city-details-city-details-module~Modals-city-details-modal-city-details-m~de511d95"],{

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

/***/ "8Stk":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modals/city-details-modal/city-details-modal.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [dir]=\"registerService.setDir\">\n  <ion-toolbar>\n    <div (click)=\"close()\" class=\"modalButton\">\n      <ion-grid>\n        <ion-row size=\"12\">\n          <ion-col size=\"3\">\n            <ion-img src=\"../../../assets/icon/guide.svg\"></ion-img>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-label>{{\"CityDetails.plantrip\" | translate}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-icon name=\"chevron-down-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row size=\"12\">\n          <ion-col size=\"3\">\n            <ion-img src=\"../../../assets/icon/XMLID_119_.svg\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-label>{{\"CityDetails.entertainement\" | translate}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [dir]=\"registerService.setDir\" >\n  <ion-scroll direction=\"y\" style=\"height: 100px;\">\n  <div class=\"mainLabels\">\n    <ion-label>{{\"Home.hotels\" | translate}}</ion-label>\n  </div>\n  <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2 id=\"slideWithNav2\"\n    (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n    <ion-slide *ngFor=\"let item of cityData.hotels\">\n      <ion-card>\n        <img src=\"../../../assets/images/Mask Group 60@2x.png\" />\n        <ion-card-header>\n          <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"mainLabels\" *ngIf=\"cityData.tourismSites != null\">\n    <ion-label>{{\"Home.mostattractions\" | translate}}</ion-label>\n  </div>\n\n  <div class=\"attractiosAlbum\" (click)=\"getAlbumList()\" *ngIf=\"cityData.tourismSites != null && albumDisplay == false\">\n    <ion-img src=\"../../../assets/images/Group 363.png\"></ion-img>\n  </div>\n\n  <div class=\"attractiosAlbum2\" *ngIf=\"albumDisplay == true\">\n    <ion-card>\n      <img src=\"../../../assets/images/Group 364.png\" />\n      <ion-card-header>\n        <ion-card-subtitle class=\"attractionsTitle\">سانت كاثرين</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <img src=\"../../../assets/images/Group 366.png\" />\n      <ion-card-header>\n        <ion-card-subtitle  class=\"attractionsTitle\">راس محمد</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <img src=\"../../../assets/images/Group 363.png\" />\n      <ion-card-header>\n        <ion-card-subtitle  class=\"attractionsTitle\">محمية نبق</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n  </div>\n</ion-scroll>\n</ion-content>\n");

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

/***/ "mOMK":
/*!************************************************************************!*\
  !*** ./src/app/Modals/city-details-modal/city-details-modal.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 0px;\n}\n\nion-toolbar {\n  padding: 0px !important;\n}\n\n.toolbar-container {\n  padding: 0px !important;\n}\n\nion-grid {\n  background: white;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 0px !important;\n}\n\n.modalButton {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\nion-row {\n  border-bottom: 2px #f3f3f3 solid;\n}\n\nion-col {\n  align-self: center;\n}\n\nion-img {\n  width: 40px;\n}\n\nion-icon {\n  color: red;\n}\n\n.mainLabels {\n  width: 100%;\n  text-align: start;\n  margin-top: 20px;\n  color: #042359;\n  font-size: 14pt;\n}\n\n.mainLabels ion-label {\n  margin-inline-start: 10px;\n}\n\n#slideWithNav2 {\n  height: 120px;\n  margin-top: 10px;\n}\n\n#slideWithNav2 ion-slide {\n  height: 120px;\n  width: 30% !important;\n  margin-inline-end: 10px;\n}\n\n#slideWithNav2 img {\n  height: 70px;\n  width: 100%;\n}\n\n#slideWithNav2 ion-slide ion-label {\n  color: black;\n  font-size: 10px;\n}\n\n.myOverlay {\n  display: grid;\n}\n\n.attractiosAlbum ion-img {\n  width: 90%;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.attractiosAlbum2 {\n  background-color: #F1F2F5;\n  padding-block: 10px;\n}\n\n.attractiosAlbum2 ion-img {\n  width: 90%;\n  margin: auto;\n  padding-block-start: 20px;\n}\n\n.attractiosAlbum2 ion-card {\n  width: 80%;\n  margin: auto;\n  margin-bottom: 20px;\n  border-radius: 15px;\n}\n\n.attractiosAlbum2 ion-card img {\n  width: 100%;\n  height: 120px;\n}\n\nion-card-title {\n  text-align: center;\n  color: #042359;\n  padding: 10px;\n}\n\nion-card-subtitle {\n  text-align: center;\n  color: #042359;\n  font-size: 10px;\n}\n\nion-card-header {\n  padding: 0px;\n}\n\nion-slide ion-card {\n  width: 100%;\n  margin: 0px;\n  height: 110px;\n  margin-top: 5px;\n  box-shadow: 4px 5px 6px 1px #f3f3f3;\n}\n\n.attractionsTitle {\n  text-align: center;\n  color: #042359;\n  font-size: 15px;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaXR5LWRldGFpbHMtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBRUEsdUJBQUE7QUFHSjs7QUFEQTtFQUtJLDRCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFFQTtFQUNJLGdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFRSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtBQVVKOztBQVJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVRBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWFKOztBQVhBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQWVKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFpQko7O0FBZkE7RUFDSSxZQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQW9CSiIsImZpbGUiOiJjaXR5LWRldGFpbHMtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4udG9vbGJhci1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZ3JpZHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogIDNweCAzcHggNXB4IDZweCAjY2NjOyBcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbEJ1dHRvbntcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vIGJvdHRvbTogMHB4O1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5pb24tcm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNmM2YzZjMgc29saWQ7XHJcbn1cclxuaW9uLWNvbHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5pb24taW1ne1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5tYWluTGFiZWxze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzA0MjM1OTtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxufVxyXG4ubWFpbkxhYmVscyBpb24tbGFiZWx7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xyXG59XHJcbiNzbGlkZVdpdGhOYXYye1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3NsaWRlV2l0aE5hdjIgaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuI3NsaWRlV2l0aE5hdjIgaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3NsaWRlV2l0aE5hdjIgaW9uLXNsaWRlIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ubXlPdmVybGF5e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtIGlvbi1pbWd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjU7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xyXG59XHJcbi5hdHRyYWN0aW9zQWxidW0yIGlvbi1pbWd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMjBweDtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtMiBpb24tY2FyZHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYXR0cmFjdGlvc0FsYnVtMiBpb24tY2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzA0MjM1OTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzA0MjM1OTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuaW9uLXNsaWRlIGlvbi1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDsgXHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDVweCA2cHggMXB4ICNmM2YzZjM7XHJcbn1cclxuLmF0dHJhY3Rpb25zVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzA0MjM1OTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufSJdfQ== */");

/***/ }),

/***/ "uuCv":
/*!**********************************************************************!*\
  !*** ./src/app/Modals/city-details-modal/city-details-modal.page.ts ***!
  \**********************************************************************/
/*! exports provided: CityDetailsModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailsModalPage", function() { return CityDetailsModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_city_details_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./city-details-modal.page.html */ "8Stk");
/* harmony import */ var _city_details_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city-details-modal.page.scss */ "mOMK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Models_city_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/city-details */ "vUrX");
/* harmony import */ var src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/register.service */ "3Y40");
/* harmony import */ var src_app_Services_tourist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/tourist.service */ "6Y6T");








let CityDetailsModalPage = class CityDetailsModalPage {
    constructor(modalCtr, registerService, touristService) {
        this.modalCtr = modalCtr;
        this.registerService = registerService;
        this.touristService = touristService;
        this.slideOptsTwo = {
            initialSlide: 1,
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 5
        };
        this.albumDisplay = false;
        this.cityData = new src_app_Models_city_details__WEBPACK_IMPORTED_MODULE_5__["CityDetails"]();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.touristService.GetCityDetails(this.id).then(res => {
            this.cityData = JSON.parse(res.data);
        });
        // console.log(this.id,'asdas')
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const closeModal = "Modal Closed";
            yield this.modalCtr.dismiss(closeModal);
        });
    }
    getAlbumList() {
        this.albumDisplay = true;
    }
};
CityDetailsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"] },
    { type: src_app_Services_tourist_service__WEBPACK_IMPORTED_MODULE_7__["TouristService"] }
];
CityDetailsModalPage.propDecorators = {
    slideWithNav2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slideWithNav2', { static: false },] }]
};
CityDetailsModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-city-details-modal',
        template: _raw_loader_city_details_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_city_details_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CityDetailsModalPage);



/***/ }),

/***/ "vUrX":
/*!****************************************!*\
  !*** ./src/app/Models/city-details.ts ***!
  \****************************************/
/*! exports provided: CityDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetails", function() { return CityDetails; });
class CityDetails {
}


/***/ })

}]);
//# sourceMappingURL=default~Components-Tourist-city-details-city-details-module~Modals-city-details-modal-city-details-m~de511d95.js.map