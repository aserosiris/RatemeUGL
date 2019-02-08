webpackJsonp([11],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientePageModule", function() { return CreateClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_cliente__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateClientePageModule = /** @class */ (function () {
    function CreateClientePageModule() {
    }
    CreateClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_cliente__["a" /* CreateClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_cliente__["a" /* CreateClientePage */]),
            ],
        })
    ], CreateClientePageModule);
    return CreateClientePageModule;
}());

//# sourceMappingURL=create-cliente.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cliente_cliente__ = __webpack_require__(205);
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



var CreateClientePage = /** @class */ (function () {
    function CreateClientePage(navCtrl, navParams, cliente, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = cliente;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    CreateClientePage.prototype.ionViewDidLoad = function () {
    };
    CreateClientePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.cliente.getUserData().subscribe(function (res) {
            if (res.user !== null) {
                _this.userId = res.user._id;
            }
        });
    };
    CreateClientePage.prototype.register = function () {
        var _this = this;
        this.cliente.createCliente(this.num_cliente, this.nombre_negocio, this.razon_social, this.direccion, this.colonia_negocio, this.ciudad_negocio, this.corporacion, this.ruta, this.lunes, this.martes, this.miercoles, this.juevez, this.viernes, this.sabado, this.domingo, this.estatus, this.userId)
            .subscribe(function (res) {
            console.log(res);
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
        this.num_cliente = '';
        this.nombre_negocio = '';
        this.razon_social = '';
        this.direccion = '';
        this.colonia_negocio = '';
        this.ciudad_negocio = '';
        this.corporacion = '';
        this.ruta = '';
        this.lunes = '';
        this.martes = '';
        this.miercoles = '';
        this.juevez = '';
        this.viernes = '';
        this.sabado = '';
        this.domingo = '';
        this.estatus = '';
    };
    CreateClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-create-cliente',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\create-cliente\create-cliente.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Capturar Cliente Nuevo</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n    <div>\n      <ion-item>\n        <ion-label color ="primary" stacked>Numero Cliente</ion-label>\n        <ion-input type="text" [(ngModel)]="num_cliente"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color ="primary" stacked>Nombre Negocio</ion-label>\n          <ion-input type="text"[(ngModel)]="nombre_negocio"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Razon Social</ion-label>\n            <ion-input type="text" [(ngModel)]="razon_social"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Direccion</ion-label>\n            <ion-input type="text" [(ngModel)]="direccion"></ion-input>\n        </ion-item>\n        <ion-item>\n             <ion-label color ="primary" stacked>Colonia Negocio</ion-label>\n             <ion-input type="text"  [(ngModel)]="colonia_negocio"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Corporacion</ion-label>\n            <ion-input type="text"  [(ngModel)]="corporacion"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Ruta</ion-label>\n            <ion-input type="text"  [(ngModel)]="ruta"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Lunes</ion-label>\n            <ion-input type="text"  [(ngModel)]="lunes"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Martes</ion-label>\n            <ion-input type="text"  [(ngModel)]="martes"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Miercoles</ion-label>\n            <ion-input type="text"  [(ngModel)]="miercoles"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Jueves</ion-label>\n            <ion-input type="text"  [(ngModel)]="juevez"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>viernes</ion-label>\n            <ion-input type="text"  [(ngModel)]="viernes"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Sabado</ion-label>\n            <ion-input type="text"  [(ngModel)]="sabado"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Domingo</ion-label>\n            <ion-input type="text"  [(ngModel)]="domingo"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color ="primary" stacked>Estatus</ion-label>\n            <ion-input type="text"  [(ngModel)]="estatus"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button block (click)="register()">Registrar</button>\n        </ion-item>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\create-cliente\create-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_cliente_cliente__["a" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], CreateClientePage);
    return CreateClientePage;
}());

//# sourceMappingURL=create-cliente.js.map

/***/ })

});
//# sourceMappingURL=11.js.map