webpackJsonp([13],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientesPageModule = /** @class */ (function () {
    function ClientesPageModule() {
    }
    ClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */]),
            ],
        })
    ], ClientesPageModule);
    return ClientesPageModule;
}());

//# sourceMappingURL=clientes.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cliente_cliente__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientesPage = /** @class */ (function () {
    function ClientesPage(navCtrl, navParams, cliente, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = cliente;
        this.sqlite = sqlite;
        this.clientes = [];
        this.clientesSQL = [];
    }
    ClientesPage.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT CL_CLIENTE, CL_NOMNEGOCIO, CL_PUNTOVENTA, CL_RFC, CL_DIRNEGOCIO, CL_COLNEGOCIO, CL_CPCLIE, CL_CORPORACION , CL_CIUDADNEGOCIO FROM clientes', [])
                .then(function (res) {
                _this.clientesSQL = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.clientesSQL.push({ CL_CLIENTE: res.rows.item(i).CL_CLIENTE, CL_NOMNEGOCIO: res.rows.item(i).CL_NOMNEGOCIO, CL_CIUDADNEGOCIO: res.rows.item(i).CL_CIUDADNEGOCIO, CL_CPCLIE: res.rows.item(i).CL_CPCLIE,
                        CL_PUNTOVENTA: res.rows.item(i).CL_PUNTOVENTA, CL_RFC: res.rows.item(i).CL_RFC, CL_DIRNEGOCIO: res.rows.item(i).CL_DIRNEGOCIO,
                        CL_COLNEGOCIO: res.rows.item(i).CL_COLNEGOCIO, CL_CORPORACION: res.rows.item(i).CL_CORPORACION,
                    });
                }
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ClientesPage.prototype.ionViewDidLoad = function () {
        // this.getAllClientes();
        this.getData();
    };
    ClientesPage.prototype.getAllClientes = function () {
        var _this = this;
        this.cliente.getClientes()
            .subscribe(function (res) {
            console.log(res);
            _this.clientes = res.result;
            _this.getData();
        });
    };
    ClientesPage.prototype.carritoVentas = function (event, clientesSQL) {
        this.navCtrl.push("CarritoVtPage", {
            cliente: clientesSQL
        });
    };
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-clientes',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\clientes\clientes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Clientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-item *ngFor="let cliente of clientesSQL; let i=index">\n    <ion-row>\n      <ion-col col-2>\n        <ion-avatar item-start>\n          <img src="http://placehold.it/10x10">\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-10 class="rowCol">\n        <h2 (click)="carritoVentas($event, cliente)" class="companyname" text-wrap>\n          {{cliente.CL_NOMNEGOCIO}}\n        </h2>\n        <ion-col class="dataCol">\n          <ion-row>\n            <ion-col col-12>\n              <span>\n                <ion-icon name="ios-grid-outline" class="iconClass"> </ion-icon>\n                {{cliente.CL_CLIENTE}}\n              </span>\n            </ion-col>\n            <ion-col col-12>\n              <span>\n                <ion-icon name="contact" class="iconClass"> </ion-icon>\n                {{cliente.CL_PUNTOVENTA}}\n              </span>\n            </ion-col>\n            <ion-col col-12 text-wrap>\n              <ion-icon name="pin" class="iconClass"></ion-icon>\n              {{cliente.CL_DIRNEGOCIO}}, {{cliente.CL_COLNEGOCIO}}\n            </ion-col>\n            <ion-col col-12 class="rating">\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              (4.5)\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\clientes\clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_cliente_cliente__["a" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], ClientesPage);
    return ClientesPage;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

});
//# sourceMappingURL=13.js.map