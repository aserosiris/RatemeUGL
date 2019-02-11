webpackJsonp([0],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPageModule", function() { return TicketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketPageModule = /** @class */ (function () {
    function TicketPageModule() {
    }
    TicketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ticket__["a" /* TicketPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ticket__["a" /* TicketPage */]),
            ],
        })
    ], TicketPageModule);
    return TicketPageModule;
}());

//# sourceMappingURL=ticket.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_print_print__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__printer_list_modal_printer_list_modal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(26);
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
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketPage = /** @class */ (function () {
    //****************** */
    function TicketPage(navCtrl, modalCtrl, printProvider, view, alertCtrl, navParams, toastCtrl, Storage, sqlite) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.printProvider = printProvider;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.Storage = Storage;
        this.sqlite = sqlite;
        this.selectedPrinter = [];
        //proceso para recibir la informacion desde el carrito
        this.cliente = navParams.get('cliente'); //arreglo para datos del cliente
        this.clavesVta = navParams.get('productos'); //arreglo para datos de la venta
        this.tipoVentaCliente = navParams.get('tipoVentaCliente'); //informacion del total de la venta
        this.reconocimientoVta = navParams.get('reconocimientoVta');
        this.subtotalVta = navParams.get('subtotalVta');
        this.IVAVta = navParams.get('IVAVta');
        this.totalFinal = navParams.get('totalFinal');
        this.KLAcumVta = navParams.get('KLAcumVta');
        this.IEPSVta = navParams.get('IEPSVta');
        this.tipoImpresion = '';
        this.producto = JSON.parse(JSON.stringify(this.navParams.get('producto')));
    }
    TicketPage.prototype.ionViewDidEnter = function () {
        this.obtenerCantidades();
    };
    TicketPage.prototype.obtenerCantidades = function () {
        console.log(this.producto.length);
        this.claveProd = [];
        this.cantidadVenta = [];
        for (var i = 0; i < this.producto.length; i++) {
            //console.log(this.producto.cantidad)
            this.claveProd.push(parseInt(this.producto[i]['clave']));
            this.cantidadVenta.push(parseInt(this.producto[i]['cantidad']));
            console.log(this.cantidadVenta);
        }
        this.getCantidad(this.claveProd, this.cantidadVenta);
        //console.log(this.cantidadVenta)
    };
    TicketPage.prototype.getCantidad = function (clave, cant) {
        var _this = this;
        //return new Promise(function(resolve, reject)
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            console.log(clave, "Claves");
            console.log(cant, "cantidad de ventas");
            _this.cantidadActual = [];
            for (var e = 0; e < clave.length; e++) {
                _this.consulta = "select IN_CANTIDAD FROM tb_hh_inventario WHERE IN_CLAVE =?";
                _this.clavenum = clave[e];
                console.log(_this.clavenum);
                db.executeSql(_this.consulta, [_this.clavenum])
                    .then(function (res) {
                    for (var a = 0; a < res.rows.length; a++) {
                        _this.cantidadActual.push(res.rows.item(a).IN_CANTIDAD);
                        console.log(_this.cantidadActual, "cantidad en int");
                    }
                }).catch(function (e) { return console.log(e); });
            }
        }).then(function (res) {
        });
    };
    TicketPage.prototype.restar = function () {
        var _this = this;
        this.cantidadNUeva = [];
        for (var p = 0; p < this.cantidadActual.length; p++) {
            console.log("segundo for");
            this.cantidadNUeva.push(this.cantidadActual[p] - this.cantidadVenta[p]);
            console.log(this.cantidadNUeva, "cantidades nuevas");
        }
        //return new Promise(function(resolve, reject)
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            console.log("update");
            console.log(_this.cantidadNUeva, _this.claveProd);
            for (var i = 0; i < _this.cantidadNUeva.length; i++) {
                _this.consulta1 = "UPDATE tb_hh_inventario SET IN_CANTIDAD = ? WHERE IN_CLAVE = ?";
                db.executeSql(_this.consulta1, [_this.cantidadNUeva[i], _this.claveProd[i]])
                    .catch(function (e) { return console.log(e); });
                console.log(_this.cantidadNUeva);
            }
        });
        // })
    };
    TicketPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Confirmar Venta',
            message: "Desea finalizar venta?",
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
                        _this.restar();
                        _this.imprimirNotaVta();
                    }
                }
            ]
        });
        prompt.present();
    };
    //-----
    TicketPage.prototype.ionViewDidLoad = function () {
        console.log("Entro a ticket");
        console.log(this.cliente);
        console.log(this.clavesVta);
        console.log(this.tipoVentaCliente);
        this.obtenerRuta();
        this.listBTDevice(); //Buscar impresora conectada por Bluetooth
    };
    TicketPage.prototype.obtenerRuta = function () {
        var _this = this;
        this.Storage.get('useremail').then(function (val) {
            _this.rutamail = parseInt(val);
        });
    };
    TicketPage.prototype.listBTDevice = function () {
        var _this = this;
        this.printProvider.searchBt().then(function (datalist) {
            //1. Open printer select modal
            var abc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */], { data: datalist });
            //2. Printer selected, save into this.selectedPrinter
            abc.onDidDismiss(function (data) {
                _this.selectedPrinter = data;
                /*let xyz=this.alertCtrl.create({
                  title: data.name+" selected",
                  buttons:['Dismiss']
                });
                xyz.present();*/
            });
            //0. Present Modal
            abc.present();
        }, function (err) {
            console.log("ERROR", err);
            var mno = _this.alertCtrl.create({
                title: "ERROR " + err,
                buttons: ['Dismiss']
            });
            mno.present();
        });
    };
    /*  testConnectPrinter()
      {
        var id=this.selectedPrinter.id;
        if(id==null||id==""||id==undefined)
        {
          //nothing happens, you can put an alert here saying no printer selected
        }
        else
        {
          let foo=this.printProvider.connectBT(id).subscribe(data=>{
            console.log("CONNECT SUCCESSFUL",data);
    
            let mno=this.alertCtrl.create({
              title:"Connect successful",
              buttons:['Dismiss']
            });
            mno.present();
    
          },err=>{
            console.log("Not able to connect",err);
            let mno=this.alertCtrl.create({
              title:"ERROR "+err,
              buttons:['Dismiss']
            });
            mno.present();
          });
        }
      }*/
    TicketPage.prototype.imprimirNotaVta = function () {
        var _this = this;
        var id = this.selectedPrinter.id;
        if (id == null || id == "" || id == undefined) {
            //nothing happens, you can put an alert here saying no printer selected
        }
        else {
            this.tipoImpresion = '[ORIGINAL]'; // id es la direccion de la impresora conectada
            var foo = this.printProvider.ProveedorimpresionNotaVta(id, this.cliente, this.clavesVta, this.tipoVentaCliente, this.reconocimientoVta, this.subtotalVta, this.IVAVta, this.totalFinal, this.KLAcumVta, this.IEPSVta, this.rutamail, this.tipoImpresion);
            //reimprimir nota infinita cantidad de veces hasta que seleccione No
            var alert_1 = this.alertCtrl.create({
                title: 'Desea otra impresión de la venta?',
                buttons: [
                    {
                        text: 'SI',
                        handler: function () {
                            alert_1.dismiss(true);
                            _this.tipoImpresion = '[REIMPRESION]';
                            var foo = _this.printProvider.ProveedorimpresionNotaVta(id, _this.cliente, _this.clavesVta, _this.tipoVentaCliente, _this.reconocimientoVta, _this.subtotalVta, _this.IVAVta, _this.totalFinal, _this.KLAcumVta, _this.IEPSVta, _this.rutamail, _this.tipoImpresion);
                            return false;
                        }
                    }, {
                        text: 'No',
                        handler: function () {
                            alert_1.dismiss(false);
                            return false;
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    TicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ticket',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\ticket\ticket.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Verificar Ticket de Venta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-item>\n<p> UNION DE GANADEROS LECHEROS </p>\n<p> DE JUAREZ SA DE CV </p>\n<p> UGL870209DL0 </p>\n<p> RAMON RAYON #1351, WATERFILL</p>\n<p> RIO BRAVO, CD. JUAREZ, CHIH.</p>\n<p> C.P. 32553</p>\n<p>. </p>\n<p> NOTA DE VENTA ORIGINAL</p>\n<p>. </p>\n<p> RUTA:{{rutamail}} </p>\n<p> FOLIO:</p>\n<p> FECHA: {{today | date: \'dd/MM/yyyy H:mm\'}}</p>\n<p> TIPO DE VENTA:{{tipoVentaCliente}} </p>\n<p>. </p>\n<p> <b># CLIENTE: {{cliente.CL_CLIENTE}}</b></p>\n<p> {{cliente.CL_NOMNEGOCIO}}   </p> \n<p> {{cliente.CL_PUNTOVENTA}}</p>\n<p> {{cliente.CL_RFC}} </p>\n<p> {{cliente.CL_DIRNEGOCIO}} </p>\n<p> {{cliente.CL_COLNEGOCIO}} </p>\n<p> {{cliente.CL_CIUDADNEGOCIO}} C.P. {{cliente.CL_CPCLIE}} </p>\n<p> CORPORACION:{{cliente.CL_CORPORACION}} </p>\n========================================\n<p>CLAVE   PRODUCTO</p> \n\n    <!--Codigo de lista de claves en venta-->\n <ion-grid>\n<ion-list *ngFor= "let cve of clavesVta">\n<ion-row>\n  <ion-col>\n========================================\n<p><b> {{cve.clave}}  {{cve.nombre}}</b></p> \n<p> Cant: {{cve.cantidad}}   Precio:${{cve.precio| number:\'1.2-2\'}}</p>\n<p> IVA:${{cve.iva| number:\'1.2-2\'}}   IEPS:${{cve.ieps| number:\'1.2-2\'}}</p>\n<p> Importe:${{cve.importe| number:\'1.2-2\'}}</p>\n</ion-col>\n</ion-row>\n</ion-list>\n</ion-grid>\n ========================================\n<p> <b>Subtotal:</b>${{subtotalVta| number:\'1.2-2\'}}</p>\n<p> <b>IVA:</b>${{IVAVta| number:\'1.2-2\'}}</p>\n<p> <b>IEPSVta</b>S:${{IEPSVta| number:\'1.2-2\'}}</p>\n<p> <b>Reconocimiento</b>:${{reconocimientoVta| number:\'1.2-2\'}}</p>\n<p> <b>Total a Pagar:</b>${{totalFinal| number:\'1.2-2\'}}</p>\n<p>. </p>\n========================================\n<p> <b>KILOLITROS VENDIDOS:</b>{{KLAcumVta| number:\'1.3-3\'}}</p>\n========================================\n<p>. </p>\n<p> ATENDIDO POR: 0000</p>\n<p> AQUI NOMBRE DEL EMPLEADO</p>\n<p>. </p>\n\n\n\n\n<ion-item>\n  <button color="primary" ion-item (tap)="showPrompt()">\n    FINALIZAR VENTA\n  </button>\n</ion-item>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\ticket\ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_print_print__["a" /* PrintProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]])
    ], TicketPage);
    return TicketPage;
}()); //fin1

//# sourceMappingURL=ticket.js.map

/***/ })

});
//# sourceMappingURL=0.js.map