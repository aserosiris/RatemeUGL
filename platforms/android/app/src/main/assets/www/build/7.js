webpackJsonp([7],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioDiaPageModule", function() { return InicioDiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_dia__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioDiaPageModule = /** @class */ (function () {
    function InicioDiaPageModule() {
    }
    InicioDiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio_dia__["a" /* InicioDiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio_dia__["a" /* InicioDiaPage */]),
            ],
        })
    ], InicioDiaPageModule);
    return InicioDiaPageModule;
}());

//# sourceMappingURL=inicio-dia.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioDiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_promos_promos__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_carga_inicial_carga_inicial__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_arreglo_arreglo__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_revolventes_revolventes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tb_hh_usuarios_tb_hh_usuarios__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ruta_ruta__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cliente_cliente__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_producto_producto__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_precio_precio__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_precio_cliente_precio_cliente__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














/**
 * Generated class for the InicioDiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioDiaPage = /** @class */ (function () {
    function InicioDiaPage(navCtrl, navParams, sqlite, cliente, producto, precioClientes, toastCtrl, loadingCtrl, alertCtrl, Storage, precioCtrl, rutaProvider, TbUsuarios, revolventes, arreglosJSON, cargaInicial, view, promosiones) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.cliente = cliente;
        this.producto = producto;
        this.precioClientes = precioClientes;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Storage = Storage;
        this.precioCtrl = precioCtrl;
        this.rutaProvider = rutaProvider;
        this.TbUsuarios = TbUsuarios;
        this.revolventes = revolventes;
        this.arreglosJSON = arreglosJSON;
        this.cargaInicial = cargaInicial;
        this.view = view;
        this.promosiones = promosiones;
        this.clientes = [];
        this.clientesSQL = [];
        this.productosSQL = [];
        this.precios = [];
        this.preciosSQL = [];
        this.precioCliente = [];
        this.precioClienteSQL = [];
        this.ruta = [];
        this.rutaSQL = [];
        this.tb_hh_usuarios = [];
        this.tb_hh_revolventes = [];
        this.arreglos = [];
        this.cargasIniciales = [];
        this.promos = [];
        this.getJSON();
    }
    InicioDiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioDiaPage');
    };
    //******************************************************************************* */
    InicioDiaPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cantidad',
            message: "Agrege cantidad a vender",
            inputs: [
                {
                    name: 'idVendedor',
                    placeholder: '# Numero de Reloj Vendedor',
                    type: 'number',
                }, {
                    name: 'idAyudante',
                    placeholder: '# Numero de Reloj Ayudante',
                    type: 'number',
                }, {
                    name: 'idAyudante2',
                    placeholder: '# Numero de Reloj Ayudante2',
                    type: 'number',
                }
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
                        _this.objeto = [
                            _this.AS_NUMERO_VENDEDOR = data.idVendedor,
                            _this.AS_NUMERO_AYUDANTE = data.idAyudante,
                            _this.AS_NUMERO_AYUDANTE2 = data.idAyudante2
                        ];
                        //this.objeto = [this.AS_NUMERO_VENDEDOR,this.AS_NUMERO_AYUDANTE, this.AS_NUMERO_AYUDANTE2]
                        console.log(_this.objeto);
                        _this.Storage.set('asistencia', _this.objeto);
                        _this.navCtrl.setRoot("DescargaListasPage", { clientes: _this.clientes,
                            productos: _this.productos,
                            precios: _this.precios,
                            precioCliente: _this.precioCliente,
                            ruta: _this.ruta,
                            tb_hh_usuarios: _this.tb_hh_usuarios,
                            tb_hh_revolventes: _this.tb_hh_revolventes,
                            arreglos: _this.arreglos,
                            cargasIniciales: _this.cargasIniciales,
                            promos: _this.promos });
                    }
                }
            ]
        });
        prompt.present();
    };
    //******************************************************************************* */
    InicioDiaPage.prototype.getJSON = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cliePromise, prodPromise, precioPromise, precliePromise, rutaPromise, vendedoresPromise, revolver, arregloPromise, cargaPromise, PromoPromise, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        cliePromise = this.cliente.getClientes().subscribe(function (res) {
                            console.log(res);
                            _this.clientes = res.result;
                        });
                        prodPromise = this.producto.getProductos().subscribe(function (res) {
                            console.log(res);
                            _this.productos = res.result;
                        });
                        precioPromise = this.precioCtrl.getPrecios().subscribe(function (res) {
                            console.log(res);
                            _this.precios = res.result;
                        });
                        precliePromise = this.precioClientes.getPrecioClientes().subscribe(function (res) {
                            console.log(res);
                            _this.precioCliente = res.result;
                        });
                        rutaPromise = this.rutaProvider.getRutas().subscribe(function (res) {
                            console.log(res);
                            _this.ruta = res.result;
                        });
                        vendedoresPromise = this.TbUsuarios.getUsuarios().subscribe(function (res) {
                            console.log(res);
                            _this.tb_hh_usuarios = res.result;
                        });
                        revolver = this.revolventes.getRevolventes().subscribe(function (res) {
                            console.log(res);
                            _this.tb_hh_revolventes = res.result;
                        });
                        arregloPromise = this.arreglosJSON.getArreglo().subscribe(function (res) {
                            console.log(res);
                            _this.arreglos = res.result;
                        });
                        cargaPromise = this.cargaInicial.getCargaInicial().subscribe(function (res) {
                            console.log(res);
                            _this.cargasIniciales = res.result;
                        });
                        PromoPromise = this.promosiones.getPromos().subscribe(function (res) {
                            console.log(res);
                            _this.promos = res.result;
                        });
                        return [4 /*yield*/, Promise.all([cliePromise, prodPromise, precioPromise, precliePromise, rutaPromise,
                                vendedoresPromise, revolver, arregloPromise, cargaPromise, PromoPromise])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1) {
                            alert_1 = this.alertCtrl.create({
                                title: 'Error',
                                subTitle: error_1,
                                buttons: ['Ok']
                            });
                            alert_1.present();
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InicioDiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-inicio-dia',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\inicio-dia\inicio-dia.html"*/'<!--\n  Generated template for the InicioDiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inicioDia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-card class="card1">\n    <ion-icon name="log-in"></ion-icon>\n    <ion-card-header class="header" >\n      Registro de Numero de Reloj\n    </ion-card-header>\n    <ion-card-content>\n      <p class="text-content">\n        Registrar vendedores\n      </p>\n\n      <button class="btn1" ion-button block (click)=\'showPrompt()\'>Inici de Dia</button>\n    </ion-card-content>\n  </ion-card>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\inicio-dia\inicio-dia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_9__providers_cliente_cliente__["a" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_producto_producto__["a" /* ProductoProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_precio_cliente_precio_cliente__["a" /* PrecioClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_11__providers_precio_precio__["a" /* PrecioProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ruta_ruta__["a" /* RutaProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tb_hh_usuarios_tb_hh_usuarios__["a" /* TbHhUsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_revolventes_revolventes__["a" /* RevolventesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_arreglo_arreglo__["a" /* ArregloProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_carga_inicial_carga_inicial__["a" /* CargaInicialProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_promos_promos__["a" /* PromosProvider */]])
    ], InicioDiaPage);
    return InicioDiaPage;
}());

//# sourceMappingURL=inicio-dia.js.map

/***/ })

});
//# sourceMappingURL=7.js.map