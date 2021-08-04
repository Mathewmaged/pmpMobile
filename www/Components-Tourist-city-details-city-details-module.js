(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-Tourist-city-details-city-details-module"],{

/***/ "86XF":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Tourist/city-details/city-details.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-slides #mySlider id=\"mySlider\" (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" pager loop=\"true\" [options]=\"slideOpts\" >\n    <ion-slide *ngFor=\"let item of sliderPhotos\">\n<img src=\"{{photoPath}}PhotoLibraryPhoto/Photo/{{item.id}}/{{item.photo}}\">\n      </ion-slide>\n</ion-slides>\n<div class=\"innerDiv\" >\n  <p>{{disc}}</p>\n</div>\n<div (click)=\"initModal()\" class=\"modalButton\">\n<ion-grid>\n  <ion-row size=\"12\">\n    <ion-col size=\"3\">\n      <ion-img src=\"../../../assets/icon/guide.svg\"></ion-img>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-label>{{\"CityDetails.plantrip\" | translate}}</ion-label>\n    </ion-col>\n    <ion-col size=\"1\"><ion-icon name=\"chevron-up-outline\"></ion-icon></ion-col>\n  </ion-row>\n  <ion-row size=\"12\" >\n    <ion-col size=\"3\">\n      <ion-img src=\"../../../assets/icon/XMLID_119_.svg\"></ion-img>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-label>{{\"CityDetails.entertainement\" | translate}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "DfZM":
/*!**********************************************************************!*\
  !*** ./src/app/Components/Tourist/city-details/city-details.page.ts ***!
  \**********************************************************************/
/*! exports provided: CityDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailsPage", function() { return CityDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_city_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./city-details.page.html */ "86XF");
/* harmony import */ var _city_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city-details.page.scss */ "FFEO");
/* harmony import */ var _Services_tourist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Services/tourist.service */ "6Y6T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Modals_city_details_modal_city_details_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Modals/city-details-modal/city-details-modal.page */ "uuCv");
/* harmony import */ var src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/register.service */ "3Y40");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_Models_city_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Models/city-details */ "vUrX");












let CityDetailsPage = class CityDetailsPage {
    constructor(modalController, actRoute, touristService, registerService) {
        this.modalController = modalController;
        this.actRoute = actRoute;
        this.touristService = touristService;
        this.registerService = registerService;
        this.slideOpts = {
            effect: 'flip',
            autoplay: {
                delay: 4000
            }
        };
        this.photoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["Images"];
        this.sliderPhotos = [];
        this.cityData = new src_app_Models_city_details__WEBPACK_IMPORTED_MODULE_10__["CityDetails"]();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.id = this.actRoute.snapshot.params.id;
        this.touristService.GetCityDetails(this.id).then(res => {
            this.cityData = JSON.parse(res.data);
            this.registerService.title = this.cityData.name;
            this.sliderPhotos = this.cityData.photos.slice(0, 8);
            this.disc = this.cityData.description.replace(/<[^>]+>/g, '');
        });
        this.slider.startAutoplay();
    }
    initModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _Modals_city_details_modal_city_details_modal_page__WEBPACK_IMPORTED_MODULE_7__["CityDetailsModalPage"],
                cssClass: 'my-custom-modal-css',
                componentProps: {
                    'id': this.id
                }
            });
            modal.onDidDismiss().then((modalDataResponse) => {
                if (modalDataResponse !== null) {
                    this.modalDataResponse = modalDataResponse.data;
                    console.log('Modal Sent Data : ' + modalDataResponse.data);
                }
            });
            return yield modal.present();
        });
    }
    ionViewWillLeave() {
        this.slider.stopAutoplay();
    }
    slidesDidLoad(slides) {
        this.slider.startAutoplay();
    }
};
CityDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _Services_tourist_service__WEBPACK_IMPORTED_MODULE_3__["TouristService"] },
    { type: src_app_Services_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"] }
];
CityDetailsPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"], { static: true },] }]
};
CityDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-city-details',
        template: _raw_loader_city_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_city_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CityDetailsPage);



/***/ }),

/***/ "FFEO":
/*!************************************************************************!*\
  !*** ./src/app/Components/Tourist/city-details/city-details.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mySlider {\n  height: 240px;\n}\n\n#mySlider img {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n}\n\n.innerDiv {\n  margin-bottom: 114px;\n}\n\nion-grid {\n  background: white;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  box-shadow: 3px 3px 5px 6px #ccc;\n}\n\n.modalButton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  margin: 0px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  height: 112px;\n}\n\nion-row {\n  border-bottom: 2px #f3f3f3 solid;\n}\n\nion-col {\n  align-self: center;\n}\n\nion-img {\n  width: 40px;\n}\n\nion-icon {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2l0eS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLG9CQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxnQ0FBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7QUFTSiIsImZpbGUiOiJjaXR5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215U2xpZGVye1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG4jbXlTbGlkZXIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmlubmVyRGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTE0cHg7XHJcbn1cclxuaW9uLWdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6ICAzcHggM3B4IDVweCA2cHggI2NjYzsgXHJcbn1cclxuLm1vZGFsQnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTJweDtcclxufVxyXG5pb24tcm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNmM2YzZjMgc29saWQ7XHJcbn1cclxuaW9uLWNvbHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5pb24taW1ne1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "Pv7W":
/*!********************************************************************************!*\
  !*** ./src/app/Components/Tourist/city-details/city-details-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CityDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailsPageRoutingModule", function() { return CityDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _city_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city-details.page */ "DfZM");




const routes = [
    {
        path: '',
        component: _city_details_page__WEBPACK_IMPORTED_MODULE_3__["CityDetailsPage"]
    }
];
let CityDetailsPageRoutingModule = class CityDetailsPageRoutingModule {
};
CityDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CityDetailsPageRoutingModule);



/***/ }),

/***/ "rlbP":
/*!************************************************************************!*\
  !*** ./src/app/Components/Tourist/city-details/city-details.module.ts ***!
  \************************************************************************/
/*! exports provided: CityDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailsPageModule", function() { return CityDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _city_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-details-routing.module */ "Pv7W");
/* harmony import */ var _city_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-details.page */ "DfZM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let CityDetailsPageModule = class CityDetailsPageModule {
};
CityDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _city_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CityDetailsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_city_details_page__WEBPACK_IMPORTED_MODULE_6__["CityDetailsPage"]]
    })
], CityDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=Components-Tourist-city-details-city-details-module.js.map