webpackJsonp([14],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoVtPageModule", function() { return CarritoVtPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrito_vt__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarritoVtPageModule = /** @class */ (function () {
    function CarritoVtPageModule() {
    }
    CarritoVtPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carrito_vt__["a" /* CarritoVtPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrito_vt__["a" /* CarritoVtPage */]),
            ],
        })
    ], CarritoVtPageModule);
    return CarritoVtPageModule;
}());

//# sourceMappingURL=carrito-vt.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoVtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_precio_precio__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//IMPRIME BASE TICKET///// 23-09-2019 a las 16:56 hrs
var CarritoVtPage = /** @class */ (function () {
    //version final
    function CarritoVtPage(navCtrl, navParams, alertCtrl, modal, toastCtrl, precioCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.toastCtrl = toastCtrl;
        this.precioCtrl = precioCtrl;
        this.sqlite = sqlite;
        this.clavesVenta = [];
        this.productos = [];
        this.precios = [];
        this.NotaVta = [];
        this.today = Date.now();
        this.productos;
        this.cliente = navParams.get('cliente');
        this.numCliente = 49;
        this.nombreCliente = ' ';
        this.tipoVentaCliente = 'CONTADO';
        this.reconocimientoCte = 0.00;
        this.revolventeCliente = "236.96";
        this.subtotalVta = 0.00;
        this.IVAVta = 0.00;
        this.IEPSVta = 0.00;
        this.KLAcumVta = 0.00;
        this.totalSumaVta = 0.00;
        this.totalFinal = 0.00;
        this.reconocimientoSobrante = 0.00;
    }
    CarritoVtPage.prototype.ionViewDidLoad = function () {
        //this.getAllClientes();
        this.getTipoPrecio();
    };
    CarritoVtPage.prototype.ionViewWillEnter = function () {
        this.getReconocimientoClie();
    };
    //FUNCION PARA AGREGAR PRODUCTO
    CarritoVtPage.prototype.addClave = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Producto:',
            inputs: [{
                    name: 'ClaveAdd' //variable que trae el valor agregado
                }],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Agregar',
                    handler: function (data) {
                        _this.clavesVenta.push(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    //FUNCION PARA BORRAR PRODUCTO
    CarritoVtPage.prototype.deleteClave = function (cve) {
        var index = this.productos.indexOf(cve);
        if (index > -1) {
            this.productos.splice(index, 1);
        }
        /*let toast = this.toastCtrl.create({ //muestra un mensaje
            message: index+'  ' +cve,
            duration: 3000
          });
          toast.present();*/
        //inicializar en cero antes de recalcular
        this.subtotalVta = 0;
        this.IVAVta = 0;
        this.IEPSVta = 0;
        this.totalSumaVta = 0;
        this.KLAcumVta = 0;
        for (var i = 0, len = this.productos.length; i < len; i++) {
            //recalcula los valores finales de la venta despues de borrar un elemento. 
            this.subtotalVta = this.subtotalVta + (this.productos[i].importe - (this.productos[i].iva + this.productos[i].ieps));
            this.IVAVta = this.IVAVta + this.productos[i].iva;
            this.IEPSVta = this.IEPSVta + this.productos[i].ieps;
            this.totalSumaVta = this.totalSumaVta + (this.productos[i].importe);
            //Recalculo para kilolitros
            this.KLAcumVta = this.KLAcumVta + this.productos[i].equivalencia;
        }
        this.totalFinal = this.totalSumaVta - this.reconocimientoCte;
        if (this.totalFinal < 0) {
            this.reconocimientoSobrante = this.totalFinal * (-1); //multiplica el valor por -1 para guardar el valor del sobrante
            this.totalFinal = 0.00; //el  total  a pagar sera 0 mientras haya sobrante 
            this.reconocimientoVta = this.totalSumaVta; //el reconocimiento en los importes va a ser igual al total de la venta
        }
        if (this.totalFinal > 0 || this.reconocimientoCte == (this.subtotalVta + this.IVAVta + this.IEPSVta)) {
            this.reconocimientoSobrante = 0.00; //el reconocimiento  sobrante sera cero
            this.reconocimientoVta = this.reconocimientoCte; //el reconocimiento en los importes va a ser igual al reconocimiento total del cliente
        }
    };
    CarritoVtPage.prototype.listaProductos = function () {
        this.navCtrl.push("ProductosPage", {
            cliente: this.cliente
        });
    };
    CarritoVtPage.prototype.openModal = function () {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: false // ocultar el fragmento
        };
        var myModal = this.modal.create('ModalPage', { cliente: this.cliente, tipoRuta: this.tipRuta, reconoClie: this.reconocimientoCte }, myModalOptions);
        myModal.present(); //abre el modal
        myModal.onDidDismiss(function (producto) {
            if (_this.productos.length === 0) {
                for (var i = 0, len = producto.length; i < len; i++) {
                    _this.productos[i] = producto[i];
                    //calcula los valores finales de la venta
                    _this.subtotalVta = producto[i].importe - (producto[i].iva + producto[i].ieps);
                    _this.IVAVta = producto[i].iva;
                    _this.IEPSVta = producto[i].ieps;
                    _this.totalSumaVta = producto[i].importe;
                    //calculo para kilolitros
                    _this.KLAcumVta = producto[i].equivalencia;
                }
                //calculo del total a pagar 
                _this.totalFinal = _this.totalSumaVta - _this.reconocimientoCte;
                //calculos para el reconocimiento
                if (_this.totalFinal < 0) {
                    _this.reconocimientoSobrante = _this.totalFinal * (-1);
                    _this.totalFinal = 0.00;
                    _this.reconocimientoVta = _this.totalSumaVta; //el reconocimiento en los importes va a ser igual al total de la venta
                }
                if (_this.totalFinal > 0 || _this.reconocimientoCte == (_this.subtotalVta + _this.IVAVta + _this.IEPSVta)) {
                    _this.reconocimientoSobrante = 0.00;
                    _this.reconocimientoVta = _this.reconocimientoCte; //el reconocimiento en los importes va a ser igual al reconocimiento total del cliente
                }
            }
            else {
                var j = _this.productos.length;
                for (var i = 0, len = producto.length; i < len; i++) {
                    _this.productos[j] = producto[i];
                    //recalcula los valores finales de la venta por cada producto que se va agregando. (se suma lo anterior + lo nuevo)
                    _this.subtotalVta = _this.subtotalVta + (producto[i].importe - (producto[i].iva + producto[i].ieps));
                    _this.IVAVta = _this.IVAVta + producto[i].iva;
                    _this.IEPSVta = _this.IEPSVta + producto[i].ieps;
                    _this.totalSumaVta = _this.totalSumaVta + (producto[i].importe);
                    //calculo para kilolitros
                    _this.KLAcumVta = _this.KLAcumVta + producto[i].equivalencia;
                    j++;
                }
                //calculo del total a pagar 
                _this.totalFinal = _this.totalSumaVta - _this.reconocimientoCte;
                //calculos para el reconocimiento
                if (_this.totalFinal < 0) {
                    _this.reconocimientoSobrante = _this.totalFinal * (-1);
                    _this.totalFinal = 0.00;
                    _this.reconocimientoVta = _this.totalSumaVta; //el reconocimiento en los importes va a ser igual al total de la venta
                }
                if (_this.totalFinal > 0 || _this.reconocimientoCte == (_this.subtotalVta + _this.IVAVta + _this.IEPSVta)) {
                    _this.reconocimientoSobrante = 0.00;
                    _this.reconocimientoVta = _this.reconocimientoCte; //el reconocimiento en los importes va a ser igual al reconocimiento total del cliente
                }
            }
            console.log(_this.productos.reverse()); //ver la  info del arreglo (el ultimo producto agregado siempre aparece al inicio de la lista)      
        });
    };
    CarritoVtPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Error: Captura repetida',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    //funcion para obtener el tipo de precio  segun la ruta
    CarritoVtPage.prototype.getTipoPrecio = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.consulta2 = 'SELECT RT_TIPOPRECIO FROM tb_hh_rutas';
            db.executeSql(_this.consulta2, [])
                .then(function (res) {
                _this.tipRuta;
                if (res.rows.length > 0) {
                    _this.tipRuta = parseInt(res.rows.item(0).RT_TIPOPRECIO);
                    //this.tipRuta = parseInt(this.tipoPrecioRuta.RT_TIPOPRECIO)
                }
                //this.tipoPrecioRuta(parseInt(res))
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    //funcion para buscar y mostrar el valor del reconocimiento (arreglo)
    CarritoVtPage.prototype.getReconocimientoClie = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.consulta3 = 'SELECT AR_SALDO_PENDIENTE FROM tb_hh_arreglos where AR_CLIENTE= ?';
            db.executeSql(_this.consulta3, [_this.cliente.CL_CLIENTE])
                .then(function (res) {
                _this.reconocimientoCte;
                if (res.rows.length > 0) {
                    _this.reconocimientoCte = parseFloat(res.rows.item(0).AR_SALDO_PENDIENTE);
                }
                else {
                    _this.reconocimientoCte = 0.00;
                } //si no encuentra un valor del arreglo para el cliente envia el valor en cero.
                console.log(_this.reconocimientoCte);
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    CarritoVtPage.prototype.goTicket = function () {
        //Envia los datos para la pagina del ticket
        this.navCtrl.push("TicketPage", {
            cliente: this.cliente,
            productos: this.productos,
            tipoVentaCliente: this.tipoVentaCliente,
            reconocimientoVta: this.reconocimientoVta,
            subtotalVta: this.subtotalVta,
            IVAVta: this.IVAVta,
            IEPSVta: this.IEPSVta,
            totalFinal: this.totalFinal,
            KLAcumVta: this.KLAcumVta,
            producto: this.productos
        });
    };
    CarritoVtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-carrito-vt',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\carrito-vt\carrito-vt.html"*/'<ion-header>\n  <ion-navbar>\n\n      <ion-title>Nota de venta</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" large (click)="goTicket()"> \n          <ion-icon md="md-cart"></ion-icon>\n        </button>\n      </ion-buttons>\n   \n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n    \n  <!--Codigo de Lista de info del Cliente-->\n    <ion-list no-lines>\n        <ion-item>\n                <ion-img item-start src="assets/imgs/oxxo.jpg"  width="70" height="75"></ion-img>\n                <ion-label color="primary" no_line><b>{{cliente.CL_CLIENTE}} {{cliente.CL_NOMNEGOCIO}}</b>\n                                                 <p><b>Venta Tipo: {{tipoVentaCliente}} </b></p>\n                                                 <p><b>Reconocimiento: {{reconocimientoCte}} </b></p>\n                                                <!---- <p><b>Revolvente: {{revolventeCliente}}</b></p>-->\n                                                 <p><b>Fecha: {{ today | date: \'medium\' }}</b></p>\n                                                <!----<p><b>Reconocimiento sobrante: {{ reconocimientoSobrante | number:\'1.2-2\' }}</b></p>-->\n                                               \n                </ion-label>                    \n          </ion-item>\n    </ion-list>\n\n<!--Codigo para suma de importes finales-->\n<ion-grid no-padding >\n    <ion-row>\n     <!---- <ion-col col-6 style="background:#d93f8c">-->\n        <ion-col col-6 >\n       <ion-list no-lines>\n        <ion-item>               \n            <ion-label no_line><div text-right><p>Subtotal: $</p>\n                               <p>IVA: $<p>  \n                               <p>IEPS: $</p>\n                               <p>Reconocimiento: $</p>\n                           <b><p>Total a Pagar: $</p></b>\n                           <b><p>Kilolitros Acumulados: </p></b></div>\n            </ion-label>                    \n        </ion-item>\n      </ion-list>\n     </ion-col>\n     <ion-col col-6>\n        <ion-list no-lines>\n         <ion-item>               \n             <ion-label no_line><div class="item no-padding" text-left>\n                                <p>{{subtotalVta | number:\'1.2-2\' }}<p>  \n                                <p>{{IVAVta | number:\'1.2-2\' }}</p>\n                                <p>{{IEPSVta | number:\'1.2-2\' }}</p>\n                                <p>{{reconocimientoVta | number:\'1.2-2\' }}</p>\n                                <b><p>{{totalFinal | number:\'1.2-2\' }}</p></b>\n                                <p>{{KLAcumVta | number:\'1.3-3\' }}</p></div>\n             </ion-label>                    \n         </ion-item>\n       </ion-list>\n      </ion-col>\n    </ion-row>\n </ion-grid>\n   \n\n\n  <!--Codigo de Boton para agregar-->\n    <ion-buttons>    <!-- abre la ventana temporal para ver los productos-->\n        <button full ion-button icon-only (click)="openModal()"><ion-icon name="add"></ion-icon> Catalogo de Productos </button>\n    </ion-buttons>\n\n<ion-card>\n  <ion-card-content>\n      <ion-scroll scrollY="true"> \n          <ion-list> \n    <ion-item-sliding *ngFor="let producto of productos">\n        <ion-item>\n      <ion-row>\n        <ion-col col-2>\n          <ion-avatar item-start>\n            <img src="http://placehold.it/10x10">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-10 class="rowCol">\n          <ion-col class="dataCol">\n            <ion-row >\n              <ion-col col-12>\n                <span>\n                  <b>{{producto.clave}} {{producto.nombre}}</b>\n                </span>\n              </ion-col>\n            </ion-row>\n              <ion-row>\n                  <ion-col col-12>\n                    <span>\n                      Cantidad: <b>{{producto.cantidad}}</b> \n                    </span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-12>\n\n                      <span>\n                        Precio: <b>${{producto.precio}}</b>\n                      </span>\n                    </ion-col>\n                  </ion-row>\n              <ion-row>\n                  <ion-col col-12>\n                     <span>\n                        IVA: <b>${{producto.iva | number:\'1.2-2\' }}</b>\n                     </span>\n                   </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-12>\n                     <span>\n                        IEPS: <b>${{producto.ieps | number:\'1.2-2\' }}</b>\n                     </span>\n                   </ion-col>\n              </ion-row>\n             <ion-row>\n                 <ion-col col-12>\n                    <span>\n                        Importe: <b>${{producto.importe | number:\'1.2-2\' }}         </b>\n                    </span>   \n                   </ion-col>\n               </ion-row>  \n               </ion-col>\n        </ion-col>\n      </ion-row> \n               </ion-item>\n                    <ion-item-options> <!--Codigo para Eliminar claves de la venta-->\n                     <button ion-button icon-only (click)="deleteClave(producto)" danger>\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-item-options>\n              \n    </ion-item-sliding>  \n  </ion-list>      \n  </ion-scroll> \n  </ion-card-content>\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\carrito-vt\carrito-vt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_precio_precio__["a" /* PrecioProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], CarritoVtPage);
    return CarritoVtPage;
}()); //FIN1

//# sourceMappingURL=carrito-vt.js.map

/***/ })

});
//# sourceMappingURL=14.js.map