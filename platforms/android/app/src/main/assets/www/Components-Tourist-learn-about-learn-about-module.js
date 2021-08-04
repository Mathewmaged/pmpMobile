(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-Tourist-learn-about-learn-about-module"],{

/***/ "55PC":
/*!********************************************************************!*\
  !*** ./src/app/Components/Tourist/learn-about/learn-about.page.ts ***!
  \********************************************************************/
/*! exports provided: LearnAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnAboutPage", function() { return LearnAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_learn_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./learn-about.page.html */ "5hGy");
/* harmony import */ var _learn_about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learn-about.page.scss */ "lC9W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_tourist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/tourist.service */ "6Y6T");






let LearnAboutPage = class LearnAboutPage {
    constructor(touristService, actRoute) {
        this.touristService = touristService;
        this.actRoute = actRoute;
        this.hotels = [];
        this.airborts = [];
        this.restaurants = [];
        this.divingCenter = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.id = this.actRoute.snapshot.params.id;
        console.log(this.id);
        this.segmentValue =
            this.index = 1;
        if (this.id == '0' || this.id == 'hotels') {
            this.segmentValue = 'hotels';
            this.touristService.GetHotels(this.index).then(res => {
                this.hotels = JSON.parse(res.data);
            });
        }
        else if (this.id == 'airborts') {
            this.segmentValue = 'airborts';
            this.touristService.GetAirborts(this.index).then(res => {
                this.airborts = JSON.parse(res.data);
            });
        }
        else if (this.id == 'restaurants') {
            this.segmentValue = 'restaurants';
            this.touristService.GetRestaurants(this.index).then(res => {
                this.restaurants = JSON.parse(res.data);
            });
        }
        else if (this.id == 'companies') {
            this.segmentValue = 'companies';
            this.touristService.GetTourismCompany(this.index).then(res => {
                this.companies = JSON.parse(res.data);
            });
        }
        else if (this.id == 'divingCenter') {
            this.segmentValue = 'divingCenter';
            this.touristService.GetDivingCenter(this.index).then(res => {
                this.divingCenter = JSON.parse(res.data);
            });
        }
    }
    loadData(event) {
        setTimeout(() => {
            event.target.complete();
            this.index = this.index + 1;
            if (this.segmentValue == 'hotels') {
                this.touristService.GetHotels(this.index).then(res => {
                    this.hotels.push.apply(this.hotels, JSON.parse(res.data));
                });
            }
            else if (this.segmentValue == 'airborts') {
                this.touristService.GetAirborts(this.index).then(res => {
                    this.airborts.push.apply(this.airborts, JSON.parse(res.data));
                });
            }
            else if (this.segmentValue == 'restaurants') {
                this.touristService.GetRestaurants(this.index).then(res => {
                    this.restaurants.push.apply(this.restaurants, JSON.parse(res.data));
                });
            }
            else if (this.segmentValue == 'companies') {
                this.touristService.GetTourismCompany(this.index).then(res => {
                    this.companies.push.apply(this.companies, JSON.parse(res.data));
                });
            }
            else if (this.segmentValue == 'divingCenter') {
                this.touristService.GetDivingCenter(this.index).then(res => {
                    this.divingCenter.push.apply(this.divingCenter, JSON.parse(res.data));
                });
            }
        }, 500);
    }
    segmentChanged(ev) {
        this.index = 1;
        this.segmentValue = ev.detail.value;
        console.log(this.segmentValue);
        if (this.segmentValue == 'hotels') {
            this.segmentValue = 'hotels';
            this.touristService.GetHotels(this.index).then(res => {
                this.hotels = JSON.parse(res.data);
            });
        }
        else if (this.segmentValue == 'airborts') {
            this.touristService.GetAirborts(this.index).then(res => {
                this.airborts = JSON.parse(res.data);
            });
        }
        else if (this.segmentValue == 'restaurants') {
            this.touristService.GetRestaurants(this.index).then(res => {
                this.restaurants = JSON.parse(res.data);
            });
        }
        else if (this.segmentValue == 'companies') {
            this.touristService.GetTourismCompany(this.index).then(res => {
                this.companies = JSON.parse(res.data);
            });
        }
        else if (this.segmentValue == 'divingCenter') {
            this.touristService.GetDivingCenter(this.index).then(res => {
                this.divingCenter = JSON.parse(res.data);
            });
        }
    }
};
LearnAboutPage.ctorParameters = () => [
    { type: src_app_Services_tourist_service__WEBPACK_IMPORTED_MODULE_5__["TouristService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LearnAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-learn-about',
        template: _raw_loader_learn_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_learn_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LearnAboutPage);



/***/ }),

/***/ "5hGy":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Tourist/learn-about/learn-about.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <ion-segment  scrollable (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"airborts\">\n        <ion-img src=\"../../../assets/icon/Group 195.svg\" class=\"learnAbout\"></ion-img>\n        <ion-label>{{\"Home.airborts\" | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"hotels\">\n        <ion-img src=\"../../../assets/icon/hotel (4).svg\" class=\"learnAbout\"></ion-img>\n        <ion-label>{{\"Home.hotels\" | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"restaurants\">\n        <ion-img src=\"../../../assets/icon/Group 197.svg\" class=\"learnAbout\"></ion-img>\n        <ion-label>{{\"Home.restaurant\" | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"companies\">\n        <ion-img src=\"../../../assets/icon/Group 198.svg\" class=\"learnAbout\"></ion-img>\n        <ion-label>{{\"Home.Tourismcompanies\" | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"divingCenter\">\n        <ion-img src=\"../../../assets/icon/Group 198.svg\" class=\"learnAbout\"></ion-img>\n        <ion-label>{{\"Home.divingcenter\" | translate}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <ion-searchbar placeholder=\"بحث\" [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar>\n\n  <div *ngIf=\"segmentValue == 'hotels'\">\n    <ion-list>\n        <ion-card *ngFor=\"let item of hotels | filter:term\">\n          <ion-label class=\"rate\">{{item.directoryCategoryName}}</ion-label>\n          <div style=\"display: flex;\">\n          <div class=\"cardTitle\">\n            <ion-label class=\"hotelName\">{{item.name}}</ion-label>\n            <div class=\"hotelData\">\n            <ion-img src=\"../../../assets/icon/cityscape (1).svg\"></ion-img>\n            <ion-label>{{item.cityName}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.address != null\">\n              <ion-img src=\"../../../assets/icon/google-maps (1).svg\"></ion-img>\n              <ion-label>{{item.address}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/phone-call.svg\"></ion-img>\n              <ion-label>{{item.telephone}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/map (3).svg\"></ion-img>\n              <ion-label style=\"opacity: .8;\">{{\"CityDetails.onMap\" | translate}}</ion-label>\n            </div>\n          </div>\n          <div class=\"vl\"></div>\n          <div class=\"imgContainer\">\n          <img src=\"../../../assets/images/Group 366.png\"/>\n          <div class=\"myOverlay\">\n            <ion-img src=\"../../../assets/icon/Component11.svg\"></ion-img>\n          </div>\n        </div>\n        </div>\n        </ion-card>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"segmentValue == 'airborts'\">\n    <ion-list>\n        <ion-card *ngFor=\"let item of airborts | filter:term\">\n          <ion-label class=\"rate\">{{item.directoryCategoryName}}</ion-label>\n          <div style=\"display: flex;\">\n          <div class=\"cardTitle\">\n            <ion-label class=\"hotelName\">{{item.name}}</ion-label>\n            <div class=\"hotelData\">\n            <ion-img src=\"../../../assets/icon/cityscape (1).svg\"></ion-img>\n            <ion-label>{{item.cityName}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.address != null\">\n              <ion-img src=\"../../../assets/icon/google-maps (1).svg\"></ion-img>\n              <ion-label>{{item.address}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/phone-call.svg\"></ion-img>\n              <ion-label>{{item.telephone}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/map (3).svg\"></ion-img>\n              <ion-label style=\"opacity: .8;\">{{\"CityDetails.onMap\" | translate}}</ion-label>\n            </div>\n          </div>\n          <div class=\"vl\"></div>\n          <div class=\"imgContainer\">\n          <img src=\"../../../assets/images/Group 366.png\"/>\n          <div class=\"myOverlay\">\n            <ion-img src=\"../../../assets/icon/Component11.svg\"></ion-img>\n          </div>\n        </div>\n        </div>\n        </ion-card>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"segmentValue == 'restaurants'\">\n    <ion-list>\n        <ion-card *ngFor=\"let item of restaurants | filter:term\">\n          <ion-label class=\"rate\">{{item.directoryCategoryName}}</ion-label>\n          <div style=\"display: flex;\">\n          <div class=\"cardTitle\">\n            <ion-label class=\"hotelName\">{{item.name}}</ion-label>\n            <div class=\"hotelData\">\n            <ion-img src=\"../../../assets/icon/cityscape (1).svg\"></ion-img>\n            <ion-label>{{item.cityName}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.address != null\">\n              <ion-img src=\"../../../assets/icon/google-maps (1).svg\"></ion-img>\n              <ion-label>{{item.address}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/phone-call.svg\"></ion-img>\n              <ion-label>{{item.telephone}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/map (3).svg\"></ion-img>\n              <ion-label style=\"opacity: .8;\">{{\"CityDetails.onMap\" | translate}}</ion-label>\n            </div>\n          </div>\n          <div class=\"vl\"></div>\n          <div class=\"imgContainer\">\n          <img src=\"../../../assets/images/Group 366.png\"/>\n          <div class=\"myOverlay\">\n            <ion-img src=\"../../../assets/icon/Component11.svg\"></ion-img>\n          </div>\n        </div>\n        </div>\n        </ion-card>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"segmentValue == 'companies'\">\n    <ion-list>\n        <ion-card *ngFor=\"let item of companies | filter:term\">\n          <ion-label class=\"rate\">{{item.directoryCategoryName}}</ion-label>\n          <div style=\"display: flex;\">\n          <div class=\"cardTitle\">\n            <ion-label class=\"hotelName\">{{item.name}}</ion-label>\n            <div class=\"hotelData\">\n            <ion-img src=\"../../../assets/icon/cityscape (1).svg\"></ion-img>\n            <ion-label>{{item.cityName}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.address != null\">\n              <ion-img src=\"../../../assets/icon/google-maps (1).svg\"></ion-img>\n              <ion-label>{{item.address}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/phone-call.svg\"></ion-img>\n              <ion-label>{{item.telephone}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/map (3).svg\"></ion-img>\n              <ion-label style=\"opacity: .8;\">{{\"CityDetails.onMap\" | translate}}</ion-label>\n            </div>\n          </div>\n          <div class=\"vl\"></div>\n          <div class=\"imgContainer\">\n          <img src=\"../../../assets/images/Group 366.png\"/>\n          <div class=\"myOverlay\">\n            <ion-img src=\"../../../assets/icon/Component11.svg\"></ion-img>\n          </div>\n        </div>\n        </div>\n        </ion-card>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"segmentValue == 'divingCenter'\">\n    <ion-list>\n        <ion-card *ngFor=\"let item of divingCenter | filter:term\">\n          <ion-label class=\"rate\">{{item.directoryCategoryName}}</ion-label>\n          <div style=\"display: flex;\">\n          <div class=\"cardTitle\">\n            <ion-label class=\"hotelName\">{{item.name}}</ion-label>\n            <div class=\"hotelData\">\n            <ion-img src=\"../../../assets/icon/cityscape (1).svg\"></ion-img>\n            <ion-label>{{item.cityName}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.address != null\">\n              <ion-img src=\"../../../assets/icon/google-maps (1).svg\"></ion-img>\n              <ion-label>{{item.address}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/phone-call.svg\"></ion-img>\n              <ion-label>{{item.telephone}}</ion-label>\n            </div>\n            <div class=\"hotelData\" *ngIf=\"item.telephone != null\">\n              <ion-img src=\"../../../assets/icon/map (3).svg\"></ion-img>\n              <ion-label style=\"opacity: .8;\">{{\"CityDetails.onMap\" | translate}}</ion-label>\n            </div>\n          </div>\n          <div class=\"vl\"></div>\n          <div class=\"imgContainer\">\n          <img src=\"../../../assets/images/Group 366.png\"/>\n          <div class=\"myOverlay\">\n            <ion-img src=\"../../../assets/icon/Component11.svg\"></ion-img>\n          </div>\n        </div>\n        </div>\n        </ion-card>\n    </ion-list>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"circular\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

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

/***/ "lC9W":
/*!**********************************************************************!*\
  !*** ./src/app/Components/Tourist/learn-about/learn-about.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F1F2F5;\n}\n\nion-segment {\n  background: white;\n  box-shadow: 0 4px 11px -2px #ccc;\n  margin-top: 3px;\n}\n\nion-segment-button {\n  text-align: center;\n  font-size: 0.8rem;\n  --background-checked: #F9F7F2;\n  margin-top: 5px;\n  --background-opacity: .5;\n  --color: #ccc;\n  --color-checked:#C19F67;\n  --background-focused-opacity: .9;\n}\n\n.learnAbout {\n  border: 0.4pt #f1d7ad solid;\n  border-radius: 50%;\n  padding: 11px;\n  height: 10vh;\n  margin-top: 10px;\n}\n\nion-searchbar {\n  --border-radius: 10px;\n  --background: #f3f3f3;\n  border: 1px solid #C19F67;\n  padding: 0px;\n  border-radius: 10px;\n  margin: auto;\n  margin-top: 10px;\n  width: 90%;\n  --icon-color: #C19F67;\n  height: 40px;\n  --box-shadow: none;\n}\n\nion-list {\n  margin-top: 15px;\n  box-shadow: 0 4px 11px -2px #ccc;\n  padding: 0px;\n  background: #F1F2F5;\n}\n\nion-card {\n  margin: 0px;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n}\n\n.cardTitle {\n  width: 50%;\n  padding-inline-start: 5px;\n}\n\nion-card img {\n  width: 100%;\n  margin: auto;\n  height: 140px;\n  box-shadow: 4px 5px 6px 2px #eee;\n}\n\n.imgContainer {\n  width: 48%;\n  margin-inline-start: auto;\n}\n\n.vl {\n  border-left: 1px solid #00000029;\n  height: 110px;\n  margin-top: 15px;\n}\n\n.myOverlay {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  top: 15px;\n  inset-inline-end: 20px;\n}\n\n.rate {\n  margin-inline-start: 10px;\n  opacity: 0.8;\n}\n\n.hotelName {\n  color: #C19F67;\n  font-size: 13px;\n}\n\n.hotelData {\n  display: flex;\n  margin-top: 8px;\n}\n\n.hotelData ion-label {\n  font-size: 10px;\n  margin-inline-start: 10px;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGVhcm4tYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQVVKOztBQVBBO0VBQ0ksZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBV0o7O0FBVEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFlSiIsImZpbGUiOiJsZWFybi1hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YxRjJGNTtcclxufVxyXG5pb24tc2VnbWVudHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTFweCAtMnB4ICNjY2M7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRjlGN0YyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLW9wYWNpdHk6IC41O1xyXG4gICAgLS1jb2xvcjogI2NjYztcclxuICAgIC0tY29sb3ItY2hlY2tlZDojQzE5RjY3O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogLjk7XHJcbn1cclxuLmxlYXJuQWJvdXR7XHJcbiAgICBib3JkZXI6IC40cHQgI2YxZDdhZCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzE5RjY3O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLS1pY29uLWNvbG9yOiAjQzE5RjY3O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDExcHggLTJweCAjY2NjO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjJGNTtcclxufVxyXG5pb24tY2FyZHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jYXJkVGl0bGV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweDtcclxufVxyXG5pb24tY2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNXB4IDZweCAycHggI2VlZTtcclxufVxyXG4uaW1nQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XHJcbiAgICBcclxufVxyXG4udmwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwMjk7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4ubXlPdmVybGF5e1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAyMHB4O1xyXG59XHJcbi5yYXRle1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG59XHJcbi5ob3RlbE5hbWV7XHJcbiAgICBjb2xvcjogI0MxOUY2NztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uaG90ZWxEYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uaG90ZWxEYXRhIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "nAI+":
/*!******************************************************************************!*\
  !*** ./src/app/Components/Tourist/learn-about/learn-about-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LearnAboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnAboutPageRoutingModule", function() { return LearnAboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _learn_about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learn-about.page */ "55PC");




const routes = [
    {
        path: '',
        component: _learn_about_page__WEBPACK_IMPORTED_MODULE_3__["LearnAboutPage"]
    }
];
let LearnAboutPageRoutingModule = class LearnAboutPageRoutingModule {
};
LearnAboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LearnAboutPageRoutingModule);



/***/ }),

/***/ "niSh":
/*!**********************************************************************!*\
  !*** ./src/app/Components/Tourist/learn-about/learn-about.module.ts ***!
  \**********************************************************************/
/*! exports provided: LearnAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnAboutPageModule", function() { return LearnAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _learn_about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learn-about-routing.module */ "nAI+");
/* harmony import */ var _learn_about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learn-about.page */ "55PC");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");









let LearnAboutPageModule = class LearnAboutPageModule {
};
LearnAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _learn_about_routing_module__WEBPACK_IMPORTED_MODULE_5__["LearnAboutPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
        ],
        declarations: [_learn_about_page__WEBPACK_IMPORTED_MODULE_6__["LearnAboutPage"]]
    })
], LearnAboutPageModule);



/***/ })

}]);
//# sourceMappingURL=Components-Tourist-learn-about-learn-about-module.js.map