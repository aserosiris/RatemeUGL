webpackJsonp([10],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateproductoPageModule", function() { return CreateproductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createproducto__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateproductoPageModule = /** @class */ (function () {
    function CreateproductoPageModule() {
    }
    CreateproductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createproducto__["a" /* CreateproductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createproducto__["a" /* CreateproductoPage */]),
            ],
        })
    ], CreateproductoPageModule);
    return CreateproductoPageModule;
}());

//# sourceMappingURL=createproducto.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_producto_producto__ = __webpack_require__(206);
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



var CreateproductoPage = /** @class */ (function () {
    function CreateproductoPage(navCtrl, navParams, producto, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.producto = producto;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    CreateproductoPage.prototype.ionViewDidLoad = function () {
    };
    CreateproductoPage.prototype.register = function () {
        var _this = this;
        this.producto.createProducto(this.PD_CLAVE, this.PD_NOMBRE, this.PD_UM, this.PD_GRUPO, this.PD_CANTXCAJA, this.PD_BAJA, this.PD_SUCURSAL, this.PD_EMPRESA)
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
    };
    CreateproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-createproducto',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\createproducto\createproducto.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Capturar Cliente Nuevo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div>\n    <ion-item>\n      <ion-label color ="primary" stacked>clave</ion-label>\n      <ion-input type="text" [(ngModel)]="PD_CLAVE"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color ="primary" stacked>nombres</ion-label>\n        <ion-input type="text"[(ngModel)]="PD_NOMBRE"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>UM</ion-label>\n          <ion-input type="text" [(ngModel)]="PD_UM"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>grupo</ion-label>\n          <ion-input type="text" [(ngModel)]="PD_GRUPO"></ion-input>\n      </ion-item>\n      <ion-item>\n           <ion-label color ="primary" stacked>cantidad</ion-label>\n           <ion-input type="text"  [(ngModel)]="PD_CANTXCAJA"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>baja</ion-label>\n          <ion-input type="text"  [(ngModel)]="PD_BAJA"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color ="primary" stacked>sucursal</ion-label>\n        <ion-input type="text"  [(ngModel)]="PD_SUCURSAL"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color ="primary" stacked>empresa</ion-label>\n      <ion-input type="text"  [(ngModel)]="PD_EMPRESA"></ion-input>\n  </ion-item>\n      <ion-item>\n        <button ion-button block (click)="register()">Register</button>\n      </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\createproducto\createproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_producto_producto__["a" /* ProductoProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], CreateproductoPage);
    return CreateproductoPage;
}());

//# sourceMappingURL=createproducto.js.map

/***/ })

});
//# sourceMappingURL=10.js.map