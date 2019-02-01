webpackJsonp([2],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function() { return ProductosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductosPageModule = /** @class */ (function () {
    function ProductosPageModule() {
    }
    ProductosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productos__["a" /* ProductosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productos__["a" /* ProductosPage */]),
            ],
        })
    ], ProductosPageModule);
    return ProductosPageModule;
}());

//# sourceMappingURL=productos.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
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



var ProductosPage = /** @class */ (function () {
    function ProductosPage(navCtrl, navParams, producto) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.producto = producto;
        this.searchQuery = '';
        this.myitem = [];
        this.producto.getProductos().subscribe(function (res) {
            _this.productos = res.result;
        });
    }
    ProductosPage.prototype.initializeItems = function () {
        this.items = this.productos;
    };
    ProductosPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.PD_NOMBRE.toUpperCase().indexOf(val.toUpperCase()) > -1);
            });
        }
    };
    ProductosPage.prototype.carritoVentas = function (producto) {
        this.navCtrl.push("CarritoVtPage", {
            producto: producto
        });
        console.log(producto);
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-productos',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\productos\productos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Productos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-item *ngFor="let item of items">\n    <ion-row>\n      <ion-col col-2>\n        <ion-avatar item-start>\n          <img src="http://placehold.it/10x10">\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-10 class="rowCol">\n        <h2  class="companyname" text-wrap>\n          {{item.PD_NOMBRE}}\n        </h2>\n        <ion-col class="dataCol">\n          <ion-row>\n            <ion-col col-12>\n              <span>\n                <ion-icon name="ios-grid-outline" class="iconClass"> </ion-icon>\n                {{item.PD_CLAVE}}            \n              </span>\n            </ion-col>\n             \n            <button ion-button round small (click)="carritoVentas(item)">\n              <ion-icon name="md-add-circle"></ion-icon>\n            </button>\n          </ion-row>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_producto_producto__["a" /* ProductoProvider */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map