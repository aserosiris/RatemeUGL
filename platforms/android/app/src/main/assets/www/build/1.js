webpackJsonp([1],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqltestPageModule", function() { return SqltestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sqltest__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SqltestPageModule = /** @class */ (function () {
    function SqltestPageModule() {
    }
    SqltestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sqltest__["a" /* SqltestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sqltest__["a" /* SqltestPage */]),
            ],
        })
    ], SqltestPageModule);
    return SqltestPageModule;
}());

//# sourceMappingURL=sqltest.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqltestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqltestPage = /** @class */ (function () {
    function SqltestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        SqlServer.init("172.16.22.8", "SQLSERVER", "sa", "TuLucernita2017", "SistemaComercial", function (event) {
            alert(JSON.stringify(event));
        }, function (error) {
            alert(JSON.stringify(error));
        });
    }
    SqltestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SqltestPage');
    };
    SqltestPage.prototype.test = function () {
        SqlServer.executeQuery("SELECT * from TB_CLIENTE where CL_CLIENTE=13000", function (event) {
            // alert(JSON.stringify(event));
            var items;
            var result;
            var allData;
            var newString;
            result = event;
            items = JSON.stringify(result);
            allData = JSON.parse(items);
            newString = allData.replace("[", "");
            newString = newString.replace("]", "");
            result = JSON.parse(newString);
            console.log(result);
        }, function (error) {
            alert("Error : " + JSON.stringify(error));
        });
    };
    SqltestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sqltest',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\sqltest\sqltest.html"*/'<!--\n  Generated template for the SqltestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sqltest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <button (click)="test()" >TEST</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\sqltest\sqltest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SqltestPage);
    return SqltestPage;
}());

//# sourceMappingURL=sqltest.js.map

/***/ })

});
//# sourceMappingURL=1.js.map