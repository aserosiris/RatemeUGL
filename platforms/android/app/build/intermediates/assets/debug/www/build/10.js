webpackJsonp([10],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecompanyPageModule", function() { return CreatecompanyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createcompany__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatecompanyPageModule = /** @class */ (function () {
    function CreatecompanyPageModule() {
    }
    CreatecompanyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createcompany__["a" /* CreatecompanyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createcompany__["a" /* CreatecompanyPage */]),
            ],
        })
    ], CreatecompanyPageModule);
    return CreatecompanyPageModule;
}());

//# sourceMappingURL=createcompany.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_nota_venta_nota_venta__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatecompanyPage = /** @class */ (function () {
    function CreatecompanyPage(navCtrl, navParams, notaVenta, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notaVenta = notaVenta;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.NV_FECHA = Date.now();
    }
    CreatecompanyPage.prototype.ionViewDidLoad = function () {
    };
    CreatecompanyPage.prototype.ionViewDidEnter = function () {
    };
    CreatecompanyPage.prototype.register = function () {
        var _this = this;
        this.notaVenta.createNotaVenta(this.NV_NOTA, this.NV_CLIENTE, this.NV_RAZON_SOCIAL, this.NV_NOMBRE_CLIENTE, this.NV_FECHA, this.NV_RUTA, this.NV_TIPO_VENTA, this.NV_SUBTOTAL, this.NV_IVA, this.NV_IEPS, this.NV_RECONOCIMIENTO, this.NV_TOTAL, this.NV_CORPO_CLIENTE, this.NV_ESTATUS_NOTA, this.NV_KILOLITROS_VENDIDOS)
            .subscribe(function (res) {
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: res.error,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
        this.NV_NOTA = '';
        this.NV_CLIENTE = 0;
        this.NV_RAZON_SOCIAL = '';
        this.NV_NOMBRE_CLIENTE = '';
        this.NV_RUTA = 0;
        this.NV_TIPO_VENTA = '';
        this.NV_SUBTOTAL = 0;
        this.NV_IVA = 0;
        this.NV_IEPS = 0;
        this.NV_RECONOCIMIENTO = 0;
        this.NV_TOTAL = 0;
        this.NV_CORPO_CLIENTE = 0;
        this.NV_ESTATUS_NOTA = '';
        this.NV_KILOLITROS_VENDIDOS = 0;
    };
    CreatecompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-createcompany',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\createcompany\createcompany.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Captura nota TEST</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div>\n    <ion-item>\n      <ion-label color ="primary" stacked>NV_NOTA</ion-label>\n      <ion-input type="text" [(ngModel)]="NV_NOTA"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color ="primary" stacked>NV_CLIENTE</ion-label>\n        <ion-input type="text"[(ngModel)]="NV_CLIENTE"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>NV_RAZON_SOCIAL</ion-label>\n          <ion-input type="text" [(ngModel)]="NV_RAZON_SOCIAL"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>NV_NOMBRE_CLIENTE</ion-label>\n          <ion-input type="text" [(ngModel)]="NV_NOMBRE_CLIENTE"></ion-input>\n      </ion-item>\n      <ion-item>\n           <ion-label color ="primary" stacked>NV_FECHA</ion-label>\n           <ion-input type="text"  [(ngModel)]="NV_FECHA"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>NV_RUTA</ion-label>\n          <ion-input type="text"  [(ngModel)]="NV_RUTA"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color ="primary" stacked>NV_TIPO_VENTA</ion-label>\n        <ion-input type="text"  [(ngModel)]="NV_TIPO_VENTA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color ="primary" stacked>NV_SUBTOTAL</ion-label>\n      <ion-input type="text"  [(ngModel)]="NV_SUBTOTAL"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color ="primary" stacked>NV_IVA</ion-label>\n    <ion-input type="text"  [(ngModel)]="NV_IVA"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label color ="primary" stacked>NV_IEPS</ion-label>\n  <ion-input type="text"  [(ngModel)]="NV_IEPS"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label color ="primary" stacked>NV_RECONOCIMIENTO</ion-label>\n  <ion-input type="text"  [(ngModel)]="NV_RECONOCIMIENTO"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label color ="primary" stacked>NV_TOTAL</ion-label>\n  <ion-input type="text"  [(ngModel)]="NV_TOTAL"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label color ="primary" stacked>NV_CORPO_CLIENTE</ion-label>\n  <ion-input type="text"  [(ngModel)]="NV_CORPO_CLIENTE"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label color ="primary" stacked>NV_ESTATUS_NOTA</ion-label>\n  <ion-input type="text"  [(ngModel)]="NV_ESTATUS_NOTA"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label color ="primary" stacked>NV_KILOLITROS_VENDIDOS</ion-label>\n  <ion-input type="text"  [(ngModel)]="NV_KILOLITROS_VENDIDOS"></ion-input>\n</ion-item>\n      <ion-item>\n        <button ion-button block (click)="register()">Registrar</button>\n      </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\createcompany\createcompany.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_nota_venta_nota_venta__["a" /* NotaVentaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], CreatecompanyPage);
    return CreatecompanyPage;
}());

//# sourceMappingURL=createcompany.js.map

/***/ })

});
//# sourceMappingURL=10.js.map