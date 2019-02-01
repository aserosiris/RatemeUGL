webpackJsonp([3],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]
            ]
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_producto_producto__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, view, producto, alertCtrl, toastCtrl, Storage, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.producto = producto;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.Storage = Storage;
        this.sqlite = sqlite;
        this.productosSQL = [];
        this.searchQuery = '';
        this.myitem = [];
        //tipRuta
        this.carrito = []; //arreglo de objetos
        // this.producto.getProductos().subscribe(res =>{
        // this.productos = res.result;}) 
        this.getData();
    }
    ModalPage.prototype.showPrompt = function (producto) {
        var _this = this;
        if (producto.PD_NOMBRE.toString() == "PROMOCION PAQUETES") {
            this.getPromos(producto.PD_CLAVE);
        }
        var prompt = this.alertCtrl.create({
            title: 'Cantidad',
            message: "Agrege cantidad a vender",
            inputs: [
                {
                    name: 'cantidad',
                    placeholder: '#'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('cancelado');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        if (Number(data.cantidad)) {
                            if (data.cantidad > producto.EXISTENCIA) {
                                _this.inventarioIn();
                                _this.closeModal();
                            }
                            else {
                                _this.objeto = {
                                    clave: producto.PD_CLAVE,
                                    nombre: producto.PD_NOMBRE,
                                    precio: producto.PRECIO_FINAL,
                                    cantidad: data.cantidad,
                                    iva: producto.IVA_FINAL * producto.PRECIO_FINAL * data.cantidad,
                                    ieps: producto.IEPS_FINAL * producto.PRECIO_FINAL * data.cantidad,
                                    importe: (data.cantidad * producto.PRECIO_FINAL) + (producto.IEPS_FINAL * producto.PRECIO_FINAL * data.cantidad) + producto.IVA_FINAL * producto.PRECIO_FINAL * data.cantidad,
                                    equivalencia: producto.UM_CANTIDAD * data.cantidad
                                };
                            }
                            // }
                            _this.carrito.push(_this.objeto); //agrega la seleccion especifica de producto. 
                            console.log(_this.carrito);
                            _this.closeModal();
                        }
                        else {
                            _this.presentToast();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ModalPage.prototype.initializeItems = function () {
        this.items = this.productosSQL;
    };
    ModalPage.prototype.getItems = function (ev) {
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
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        this.obtenerRuta();
        //this.getTipoPrecio()
        this.cliente = this.navParams.get('cliente');
        this.tipoPrecioRuta = this.navParams.get('tipoRuta');
    };
    ModalPage.prototype.closeModal = function () {
        /*
        let data = {
         'carrito': this.carrito
        };
        */
        this.view.dismiss(this.carrito); //se envia el arreglo del carrito
        // console.log(producto);
    };
    ModalPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Error: Captura no vailida',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ModalPage.prototype.inventarioIn = function () {
        var toast = this.toastCtrl.create({
            message: 'Error: Insuficiente Inventario',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ModalPage.prototype.presentCosto = function () {
        var toast = this.toastCtrl.create({
            message: this.tipoPrecioRuta.toString(),
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ModalPage.prototype.ionViewWillEnter = function () {
    };
    ModalPage.prototype.obtenerRuta = function () {
        var _this = this;
        this.Storage.get('useremail').then(function (val) {
            _this.rutamail = parseInt(val);
            _this.inruta = _this.rutamail;
        });
    };
    ModalPage.prototype.getPromos = function (clave) {
        var _this = this;
        //return new Promise(function(resolve, reject)
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.consulta = "select PM_CLAVE_PROMO, PM_CLAVE_PRODUCTO, PM_CANTIDAD, PM_PRECIOXUNIDAD_PROMO FROM tb_hh_promos WHERE PM_CLAVE_PROMO = ? AND PM_ESTATUS = \"VIGENTE\" ";
            //db.executeSql(this.consulta, [this.rutamail, this.cliente.CL_CLIENTE, this.tipoPrecioRuta])
            console.log(clave);
            db.executeSql(_this.consulta, [clave])
                .then(function (res) {
                _this.promoSQL = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.promoSQL.push({ PM_CLAVE_PRODUCTO: res.rows.item(i).PM_CLAVE_PRODUCTO, PM_CLAVE_PROMO: res.rows.item(i).PM_CLAVE_PROMO,
                        PM_CANTIDAD: res.rows.item(i).PM_CANTIDAD, PM_PRECIOXUNIDAD_PROMO: res.rows.item(i).PM_PRECIOXUNIDAD_PROMO });
                }
                console.log(_this.promoSQL);
            })
                .catch(function (e) { return console.log(e); });
        });
        // })
    };
    ModalPage.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.consulta = "select * from(\n        SELECT PD_CLAVE, PD_NOMBRE, PD_UM, PD_GRUPO, CASE WHEN PRC_PRECIO_ESPECIAL IS NOT NULL THEN PRC_PRECIO_ESPECIAL ELSE PR_PRECIO END AS PRECIO_FINAL, CASE WHEN  PRC_IVA IS NOT NULL THEN PRC_IVA ELSE PR_IVA END IVA_FINAL, CASE WHEN PRC_IEPS IS NOT NULL THEN PRC_IEPS ELSE PR_IEPS END AS IEPS_FINAL, PR_SUCURSAL, PR_EMPRESA,UM_CANTIDAD, IN_CANTIDAD AS EXISTENCIA/**/\n                  FROM (SELECT Cve.PD_CLAVE, Cve.PD_NOMBRE, Cve.PD_UM, Cve.PD_GRUPO, Cve.PRC_PRECIO_ESPECIAL, Cve.PRC_IVA, Cve.PRC_IEPS, Cve.PR_PRECIO, Cve.PR_IVA, Cve.PR_IEPS, Cve.PR_SUCURSAL, Cve.PR_EMPRESA, Cve.UM_CANTIDAD, Inv.IN_CANTIDAD\n              \n          FROM( SELECT A.PD_CLAVE, A.PD_NOMBRE, A.PD_UM, A.PD_GRUPO,A.PRC_PRECIO_ESPECIAL, A.PRC_IVA, A.PRC_IEPS, B.PR_PRECIO, B.PR_IVA, B.PR_IEPS, B.PR_SUCURSAL, B.PR_EMPRESA, A.UM_CANTIDAD /**/\n                               FROM (SELECT Y.PD_CLAVE, Y.PD_NOMBRE, Y.PD_UM, Y.PD_GRUPO, X.PRC_CLAVE, X.PRC_PRECIO_ESPECIAL, X.PRC_IVA, X.PRC_IEPS, Y.UM_CANTIDAD /**/\n                                    FROM (SELECT PD_CLAVE, PD_NOMBRE, PD_UM, PD_GRUPO, UM_CANTIDAD/**/ FROM tb_hh_productos  WHERE (PD_BAJA <> 'B')) AS Y\n                                                    LEFT JOIN\n                                           (SELECT  PRC_CLAVE, PRC_PRECIO_ESPECIAL, PRC_IVA, PRC_IEPS FROM tb_hh_precio_cliente WHERE  (PRC_RUTA_CLIE = ?) AND (PRC_CLIENTE = ?)) AS X \n                                                           ON Y.PD_CLAVE = X.PRC_CLAVE) AS A\n                                                     LEFT JOIN\n                                           (SELECT PR_CLAVE, PR_PRECIO, PR_IVA, PR_IEPS, PR_SUCURSAL, PR_EMPRESA FROM  tb_hh_precios WHERE (PR_TIPO_PRECIO = ?)) AS B\n                                                           ON A.PD_CLAVE = B.PR_CLAVE) AS Cve\n                               INNER JOIN\n                          (SELECT IN_CLAVE, IN_CANTIDAD FROM tb_hh_inventario) AS Inv   \n                                          ON Cve.PD_CLAVE=Inv.IN_CLAVE ) AS P) F where PRECIO_FINAL is not null AND EXISTENCIA is not null ORDER BY PD_CLAVE DESC";
            //db.executeSql(this.consulta, [this.rutamail, this.cliente.CL_CLIENTE, this.tipoPrecioRuta])
            db.executeSql(_this.consulta, [_this.rutamail, _this.cliente.CL_CLIENTE, _this.tipoPrecioRuta])
                .then(function (res) {
                _this.productosSQL = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.productosSQL.push({ PD_CLAVE: res.rows.item(i).PD_CLAVE, PD_NOMBRE: res.rows.item(i).PD_NOMBRE,
                        PD_UM: res.rows.item(i).PD_UM,
                        PD_GRUPO: res.rows.item(i).PD_GRUPO,
                        PRECIO_FINAL: res.rows.item(i).PRECIO_FINAL,
                        IVA_FINAL: res.rows.item(i).IVA_FINAL,
                        IEPS_FINAL: res.rows.item(i).IEPS_FINAL,
                        PR_SUCURSAL: res.rows.item(i).PR_SUCURSAL,
                        PR_EMPRESA: res.rows.item(i).PR_EMPRESA,
                        UM_CANTIDAD: res.rows.item(i).UM_CANTIDAD,
                        EXISTENCIA: res.rows.item(i).EXISTENCIA
                    });
                }
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Productos de ruta: {{rutamail}}</ion-title>\n    <button ion-button  medium (click)="closeModal()">\n      Terminar Captura\n    </button>\n    <button ion-button  medium (click)="presentCosto()">\n      ver tipo\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  \n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-item *ngFor="let item of items">\n    <ion-row>\n      <ion-col col-2>\n        <ion-avatar item-start>\n          <img src="http://placehold.it/10x10">\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-10 class="rowCol">\n        <h2  class="companyname" text-wrap>\n          {{item.PD_NOMBRE}}\n        </h2>\n        <ion-col class="dataCol">\n          <ion-row>\n            <ion-col col-12>\n              <span>\n                  <p><ion-icon name="ios-grid-outline" class="iconClass"> </ion-icon>\n                  Clave: {{item.PD_CLAVE}} </p>\n                <p> <ion-icon name="logo-usd" class="iconClass"> </ion-icon> \n                   PRECIO: ${{item.PRECIO_FINAL}} </p>\n                 <p> <ion-icon name="md-pricetags" class="iconClass"> </ion-icon> \n                 EQUIVALENCIA: {{item.UM_CANTIDAD}} </p>\n\n                 <p><ion-icon name="filing" class="iconClass"></ion-icon>\n                  Existencia: {{item.EXISTENCIA}}</p>\n              </span>\n            </ion-col>\n             \n            <button ion-button round small (click)="showPrompt(item)">\n              <ion-icon name="md-add-circle"></ion-icon>\n            </button>\n          </ion-row>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_producto_producto__["a" /* ProductoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map