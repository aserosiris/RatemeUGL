webpackJsonp([8],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescargaListasPageModule", function() { return DescargaListasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descarga_listas__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DescargaListasPageModule = /** @class */ (function () {
    function DescargaListasPageModule() {
    }
    DescargaListasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__descarga_listas__["a" /* DescargaListasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__descarga_listas__["a" /* DescargaListasPage */]),
            ],
        })
    ], DescargaListasPageModule);
    return DescargaListasPageModule;
}());

//# sourceMappingURL=descarga-listas.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescargaListasPage; });
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














var DescargaListasPage = /** @class */ (function () {
    function DescargaListasPage(navCtrl, navParams, sqlite, cliente, producto, precioClientes, toastCtrl, loadingCtrl, alertCtrl, Storage, precioCtrl, rutaProvider, TbUsuarios, revolventes, arreglosJSON, cargaInicial, view, promosiones) {
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
        this.fechaActual = new Date();
        this.folioIni = '';
        this.dia = this.fechaActual.getDate();
        this.mes = this.fechaActual.getMonth() + 1;
        this.anio = this.fechaActual.getFullYear();
        this.diaStr = this.dia.toString();
        this.mesStr = this.mes.toString();
        this.anioStr = this.anio.toString();
        this.rutaStr = '';
        this.nombresVendedores = [];
        this.datos = [];
        this.clientes = this.navParams.get('clientes');
        this.productos = this.navParams.get('productos');
        this.precios = this.navParams.get('precios');
        this.precioCliente = this.navParams.get('precioCliente');
        this.ruta = this.navParams.get('ruta');
        this.tb_hh_usuarios = this.navParams.get('tb_hh_usuarios');
        this.tb_hh_revolventes = this.navParams.get('tb_hh_revolventes');
        this.arreglos = this.navParams.get('arreglos');
        this.cargasIniciales = this.navParams.get('cargasIniciales');
        this.promos = this.navParams.get('promos');
    }
    DescargaListasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescargaListasPage');
        //this.getData()
        this.getAsistencia();
    };
    DescargaListasPage.prototype.ionViewDidEnter = function () {
        //this.getJSON();
    };
    DescargaListasPage.prototype.ionViewWillEnter = function () {
        this.obtenerRuta();
    };
    DescargaListasPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Bajando Datos..',
            duration: 36000
        });
        this.loading.present();
    };
    DescargaListasPage.prototype.obtenerRuta = function () {
        var _this = this;
        this.Storage.get('useremail').then(function (val) {
            _this.rutamail = parseInt(val);
            console.log(_this.rutamail);
            _this.rutaStr = _this.rutamail.toString(); //la manda a una variable string para formar el folio de la ruta
            _this.Storage.get('asistencia').then(function (val) {
                _this.asistencias = val;
            });
        });
    };
    DescargaListasPage.prototype.doSQL = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getData()];
                    case 1:
                        _a.sent();
                        this.getusuarios();
                        //await this.showLoading();
                        return [4 /*yield*/, this.navCtrl.setRoot("HomePage", { email: this.rutamail })];
                    case 2:
                        //await this.showLoading();
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1) {
                            alert_1 = this.alertCtrl.create({
                                title: 'Error',
                                subTitle: error_1,
                                buttons: ['Ok']
                            });
                            alert_1.present();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DescargaListasPage.prototype.getAsistencia = function () {
        var _this = this;
        //return new Promise(function(resolve, reject)
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.db = db;
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_asistencia(AS_RUTA INT,AS_FECHA DATE, AS_NUMERO_VENDEDOR INT, AS_NOMBRE_VENDEDOR TEXT, AS_NUMERO_AYUDANTE INT, AS_NOMBRE_AYUDANTE TEXT, AS_NUMERO_AYUDANTE2 INT, AS_NOMBRE_AYUDANTE2 TEXT )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_usuarios(EM_NUMERO INT, EM_NOMBRE TEXT, EM_SUCURSAL INT, EM_EMPRESA INT)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            for (var i = 0; i < _this.tb_hh_usuarios.length; i++) {
                console.log("primer parte jala chida");
                var EM_NUMERO = _this.tb_hh_usuarios[i].EM_NUMERO;
                var EM_NOMBRE = _this.tb_hh_usuarios[i].EM_NOMBRE;
                var EM_SUCURSAL = _this.tb_hh_usuarios[i].EM_SUCURSAL;
                var EM_EMPRESA = _this.tb_hh_usuarios[i].EM_EMPRESA;
                var query6 = "INSERT INTO tb_hh_usuarios(EM_NUMERO, EM_NOMBRE, EM_SUCURSAL, EM_EMPRESA) VALUES (?,?,?,?)";
                db.executeSql(query6, [EM_NUMERO, EM_NOMBRE, EM_SUCURSAL, EM_EMPRESA]).then(function (res) {
                }, function (err) {
                    console.error(err);
                    //this.presentToast(err)
                });
            }
        });
    };
    DescargaListasPage.prototype.getusuarios = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            console.log(_this.asistencias[0]);
            var sql = "SELECT EM_NUMERO, EM_NOMBRE FROM tb_hh_usuarios WHERE EM_NUMERO =?";
            return _this.db.executeSql(sql, [_this.asistencias[0]]);
        })
            .then(function (res) {
            console.log(res.rows.item(0).EM_NOMBRE);
            _this.nombresVendedores[0] = { EM_NOMBRE: res.rows.item(0).EM_NOMBRE, EM_NUMERO: res.rows.item(0).EM_NUMERO };
            var sql = "SELECT EM_NUMERO, EM_NOMBRE FROM tb_hh_usuarios WHERE EM_NUMERO =?";
            return _this.db.executeSql(sql, [_this.asistencias[1]]);
        }).then(function (res1) {
            console.log(res1.rows.item(0).EM_NOMBRE);
            _this.nombresVendedores[1] = { EM_NOMBRE: res1.rows.item(0).EM_NOMBRE, EM_NUMERO: res1.rows.item(0).EM_NUMERO };
            var sql = "SELECT EM_NUMERO, EM_NOMBRE FROM tb_hh_usuarios WHERE EM_NUMERO =?";
            return _this.db.executeSql(sql, [_this.asistencias[2]]);
        }).then(function (res2) {
            _this.nombresVendedores[2] = { EM_NOMBRE: res2.rows.item(0).EM_NOMBRE, EM_NUMERO: res2.rows.item(0).EM_NUMERO };
            console.log(_this.nombresVendedores);
            _this.consulta2 = "INSERT  INTO tb_hh_asistencia  (AS_RUTA,AS_FECHA, AS_NUMERO_VENDEDOR, AS_NOMBRE_VENDEDOR, AS_NUMERO_AYUDANTE, AS_NOMBRE_AYUDANTE, AS_NUMERO_AYUDANTE2, AS_NOMBRE_AYUDANTE2) VALUES (?,?,?,?,?,?,?,?)  ";
            _this.db.executeSql(_this.consulta2, [_this.rutamail, Date(), _this.nombresVendedores[0].EM_NUMERO, _this.nombresVendedores[0].EM_NOMBRE, _this.nombresVendedores[1].EM_NUMERO, _this.nombresVendedores[1].EM_NOMBRE, _this.nombresVendedores[2].EM_NUMERO, _this.nombresVendedores[2].EM_NOMBRE])
                .catch(function (e) { return console.log("las cosas se fuero a la shit aqui"); });
        });
        //}
    };
    //this.insertAssist();
    // }
    DescargaListasPage.prototype.insertAssist = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.consulta2 = "INSERT  INTO tb_hh_asistencia  (AS_RUTA,AS_FECHA, AS_NUMERO_VENDEDOR, AS_NOMBRE_VENDEDOR, AS_NUMERO_AYUDANTE, AS_NOMBRE_AYUDANTE, AS_NUMERO_AYUDANTE2, AS_NOMBRE_AYUDANTE2) VALUES (?,?,?,?,?,?,?,?)  ";
            db.executeSql(_this.consulta2, [_this.rutamail, Date(), _this.nombresVendedores[0].EM_NOMBRE, _this.nombresVendedores[0].EM_NUMERO, _this.nombresVendedores[1].EM_NOMBRE, _this.nombresVendedores[1].EM_NUMERO, _this.nombresVendedores[2].EM_NOMBRE, _this.nombresVendedores[2].EM_NUMERO,])
                .catch(function (e) { return console.log("las cosas se fuero a la shit aqui"); });
        });
    };
    DescargaListasPage.prototype.getData = function () {
        // this.showLoading();
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS clientes(CL_CLIENTE INTEGER PRIMARY KEY,CL_NOMNEGOCIO TEXT, CL_PUNTOVENTA TEXT, CL_RFC TEXT, CL_DIRNEGOCIO TEXT, CL_COLNEGOCIO TEXT, CL_CPCLIE INT, CL_CIUDADNEGOCIO TEXT, CL_CORPORACION INT, CL_RUTA INT, CL_LUNES TEXT, CL_MARTES TEXT, CL_MIERCOLES TEXT, CL_JUEVES TEXT, CL_VIERNES TEXT, CL_SABADO TEXT, CL_DOMINGO TEXT, CL_BAJA TEXT, CL_SUCURSAL INT, CL_EMPRESA INT  )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_productos(PD_CLAVE INT, PD_NOMBRE TEXT, PD_UM TEXT, PD_GRUPO INT, PD_CANTXCAJA INT, PD_BAJA TEXT, PD_SUCURSAL INT, PD_EMPRESA INT, UM_CANTIDAD REAL)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_precios(PR_TIPO_PRECIO INT, PR_CLAVE INT, PR_PRECIO REAL, PR_IVA REAL, PR_IEPS REAL, PR_SUCURSAL INT, PR_EMPRESA INT)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_precio_cliente(PRC_RUTA_CLIE INT, PRC_CLIENTE INT, PRC_CLAVE INT, PRC_NOM_CLAVE TEXT, PRC_GRUPO INT, PRC_PRECIO_ESPECIAL REAL, PRC_IVA REAL, PRC_IEPS REAL, PRC_CORPO INT, PRC_SUCURSAL INT, PRC_EMPRESA INT)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_rutas(RT_RUTA INT, RT_NOMBRE TEXT, RT_TIPOPRECIO INT, RT_IDENTIFICADOR_EQUIPO INT, RT_SUCURSAL INT, RT_EMPRESA INT)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_revolventes(RV_CLIENTE INT, RV_NOM_CLIENTE TEXT, RV_RUTA INT, RV_FECHA_NOTA DATE,RV_NOTA_REVOLVENTE TEXT,RV_TOTAL_NOTA REAL, RV_IVA_NOTA REAL, RV_IEPS_NOTA REAL, RV_SUCURSAL INT, RV_EMPRESA INT )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_arreglos(AR_CLIENTE INT, AR_NOM_CLIENTE TEXT, AR_RUTA INT, AR_SALDO_PENDIENTE REAL,AR_COMPLETO TEXT,AR_SUCURSAL INT, AR_EMPRESA INT )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_carga_iniciales(DM_RUTA INT, DM_CLAVE INT, DM_GRUPO INT, DM_CANTIDAD INT,DM_TIPO_MOV INT,DM_USUARIO_REGISTRO INT, DM_SUCURSAL INT, DM_EMPRESA INT )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_promos(PM_CLAVE_PROMO INT, PM_CLAVE_PRODUCTO INT, PM_CANTIDAD INT, PM_PRECIOXUNIDAD_PROMO REAL,PM_APLICAR_RUTAS TEXT,PM_ESTATUS TEXT, PM_SUCURSAL INT,PM_EMPRESA INT )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_inventario(IN_RUTA INT, IN_CLAVE INT, IN_GRUPO INT, IN_CANTIDAD INT,IN_TIPO_MOV INT,IN_USUARIO_REGISTRO INT, IN_SUCURSAL INT, IN_EMPRESA INT )', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('CREATE TABLE IF NOT EXISTS tb_hh_folio(FL_ULTIMO_FOLIO TEXT)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            /*****************************insertar JSON  en SQLITE********************************** */
            for (var i = 0; i < _this.clientes.length; i++) {
                if (_this.clientes[i].CL_RUTA == _this.rutamail) {
                    var CL_CLIENTE = _this.clientes[i].CL_CLIENTE;
                    var CL_NOMNEGOCIO = _this.clientes[i].CL_NOMNEGOCIO;
                    var CL_PUNTOVENTA = _this.clientes[i].CL_PUNTOVENTA;
                    var CL_RFC = _this.clientes[i].CL_RFC;
                    var CL_DIRNEGOCIO = _this.clientes[i].CL_DIRNEGOCIO;
                    var CL_COLNEGOCIO = _this.clientes[i].CL_COLNEGOCIO;
                    var CL_CPCLIE = _this.clientes[i].CL_CPCLIE;
                    var CL_CIUDADNEGOCIO = _this.clientes[i].CL_CIUDADNEGOCIO;
                    var CL_CORPORACION = _this.clientes[i].CL_CORPORACION;
                    var CL_RUTA = _this.clientes[i].CL_RUTA;
                    var CL_LUNES = _this.clientes[i].CL_LUNES;
                    var CL_MARTES = _this.clientes[i].CL_MARTES;
                    var CL_MIERCOLES = _this.clientes[i].CL_MIERCOLES;
                    var CL_JUEVES = _this.clientes[i].CL_JUEVES;
                    var CL_VIERNES = _this.clientes[i].CL_VIERNES;
                    var CL_SABADO = _this.clientes[i].CL_SABADO;
                    var CL_DOMINGO = _this.clientes[i].CL_DOMINGO;
                    var CL_BAJA = _this.clientes[i].CL_BAJA;
                    var CL_SUCURSAL = _this.clientes[i].CL_SUCURSAL;
                    var CL_EMPRESA = _this.clientes[i].CL_EMPRESA;
                    var query1 = "INSERT INTO clientes  (CL_CLIENTE,CL_NOMNEGOCIO,CL_PUNTOVENTA,CL_RFC,CL_DIRNEGOCIO,CL_COLNEGOCIO,CL_CPCLIE,CL_CIUDADNEGOCIO,CL_CORPORACION,CL_RUTA,CL_LUNES,CL_MARTES,CL_MIERCOLES,CL_JUEVES,CL_VIERNES,CL_SABADO,CL_DOMINGO,CL_BAJA,CL_SUCURSAL, CL_EMPRESA ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    db.executeSql(query1, [CL_CLIENTE, CL_NOMNEGOCIO, CL_PUNTOVENTA, CL_RFC, CL_DIRNEGOCIO, CL_COLNEGOCIO,
                        CL_CPCLIE, CL_CIUDADNEGOCIO, CL_CORPORACION, CL_RUTA, CL_LUNES, CL_MARTES, CL_MIERCOLES, CL_JUEVES,
                        CL_VIERNES, CL_SABADO, CL_DOMINGO, CL_BAJA, CL_SUCURSAL, CL_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                    });
                }
            }
            for (var i = 0; i < _this.productos.length; i++) {
                var PD_CLAVE = _this.productos[i].PD_CLAVE;
                var PD_NOMBRE = _this.productos[i].PD_NOMBRE;
                var PD_UM = _this.productos[i].PD_UM;
                var PD_GRUPO = _this.productos[i].PD_GRUPO;
                var PD_CANTXCAJA = _this.productos[i].PD_CANTXCAJA;
                var PD_BAJA = _this.productos[i].PD_BAJA;
                var PD_SUCURSAL = _this.productos[i].PD_SUCURSAL;
                var PD_EMPRESA = _this.productos[i].PD_EMPRESA;
                var UM_CANTIDAD = _this.productos[i].UM_CANTIDAD;
                var query2 = "INSERT INTO tb_hh_productos(PD_CLAVE,PD_NOMBRE,PD_UM,PD_GRUPO,PD_CANTXCAJA, PD_BAJA, PD_SUCURSAL, PD_EMPRESA, UM_CANTIDAD ) VALUES (?,?,?,?,?,?,?,?,?)";
                db.executeSql(query2, [PD_CLAVE, PD_NOMBRE, PD_UM, PD_GRUPO, PD_CANTXCAJA, PD_BAJA,
                    PD_SUCURSAL, PD_EMPRESA, UM_CANTIDAD]).then(function (res) {
                }, function (err) {
                    console.error(err);
                });
            }
            for (var i = 0; i < _this.precios.length; i++) {
                var PR_TIPO_PRECIO = _this.precios[i].PR_TIPO_PRECIO;
                var PR_CLAVE = _this.precios[i].PR_CLAVE;
                var PR_PRECIO = _this.precios[i].PR_PRECIO;
                var PR_IVA = _this.precios[i].PR_IVA;
                var PR_IEPS = _this.precios[i].PR_IEPS;
                var PR_SUCURSAL = _this.precios[i].PR_SUCURSAL;
                var PR_EMPRESA = _this.precios[i].PR_EMPRESA;
                var query3 = "INSERT INTO tb_hh_precios(PR_TIPO_PRECIO, PR_CLAVE, PR_PRECIO, PR_IVA, PR_IEPS, PR_SUCURSAL, PR_EMPRESA ) VALUES (?,?,?,?,?,?,?)";
                db.executeSql(query3, [PR_TIPO_PRECIO, PR_CLAVE, PR_PRECIO, PR_IVA, PR_IEPS, PR_SUCURSAL, PR_EMPRESA]).then(function (res) {
                }, function (err) {
                    console.error(err);
                });
            }
            for (var i = 0; i < _this.precioCliente.length; i++) {
                if (_this.precioCliente[i].PRC_RUTA_CLIE === _this.rutamail) {
                    var PRC_RUTA_CLIE = _this.precioCliente[i].PRC_RUTA_CLIE;
                    var PRC_CLIENTE = _this.precioCliente[i].PRC_CLIENTE;
                    var PRC_CLAVE = _this.precioCliente[i].PRC_CLAVE;
                    var PRC_NOM_CLAVE = _this.precioCliente[i].PRC_NOM_CLAVE;
                    var PRC_GRUPO = _this.precioCliente[i].PRC_GRUPO;
                    var PRC_PRECIO_ESPECIAL = _this.precioCliente[i].PRC_PRECIO_ESPECIAL;
                    var PRC_IVA = _this.precioCliente[i].PRC_IVA;
                    var PRC_IEPS = _this.precioCliente[i].PRC_IEPS;
                    var PRC_CORPO = _this.precioCliente[i].PRC_CORPO;
                    var PRC_SUCURSAL = _this.precioCliente[i].PRC_SUCURSAL;
                    var PRC_EMPRESA = _this.precioCliente[i].PRC_EMPRESA;
                    var query4 = "INSERT INTO tb_hh_precio_cliente(PRC_RUTA_CLIE, PRC_CLIENTE, PRC_CLAVE, PRC_NOM_CLAVE, PRC_GRUPO, PRC_PRECIO_ESPECIAL, PRC_IVA, PRC_IEPS, PRC_CORPO, PRC_SUCURSAL, PRC_EMPRESA) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                    db.executeSql(query4, [PRC_RUTA_CLIE, PRC_CLIENTE, PRC_CLAVE, PRC_NOM_CLAVE, PRC_GRUPO, PRC_PRECIO_ESPECIAL, PRC_IVA, PRC_IEPS, PRC_CORPO, PRC_SUCURSAL, PRC_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                        //this.presentToast(err)
                    });
                }
            }
            for (var i = 0; i < _this.ruta.length; i++) {
                if (_this.ruta[i].RT_RUTA === _this.rutamail) {
                    var RT_RUTA = _this.ruta[i].RT_RUTA;
                    var RT_NOMBRE = _this.ruta[i].RT_NOMBRE;
                    var RT_TIPOPRECIO = _this.ruta[i].RT_TIPOPRECIO;
                    var RT_IDENTIFICADOR_EQUIPO = _this.ruta[i].RT_IDENTIFICADOR_EQUIPO;
                    var RT_SUCURSAL = _this.ruta[i].RT_SUCURSAL;
                    var RT_EMPRESA = _this.ruta[i].RT_EMPRESA;
                    var query5 = "INSERT INTO tb_hh_rutas(RT_RUTA, RT_NOMBRE, RT_TIPOPRECIO, RT_IDENTIFICADOR_EQUIPO, RT_SUCURSAL, RT_EMPRESA) VALUES (?,?,?,?,?,?)";
                    db.executeSql(query5, [RT_RUTA, RT_NOMBRE, RT_TIPOPRECIO, RT_IDENTIFICADOR_EQUIPO, RT_SUCURSAL, RT_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                        //this.presentToast(err)
                    });
                }
            }
            for (var i = 0; i < _this.tb_hh_revolventes.length; i++) {
                if (_this.tb_hh_revolventes[i].RV_RUTA == _this.rutamail) {
                    var RV_CLIENTE = _this.tb_hh_revolventes[i].RV_CLIENTE;
                    var RV_NOM_CLIENTE = _this.tb_hh_revolventes[i].RV_NOM_CLIENTE;
                    var RV_RUTA = _this.tb_hh_revolventes[i].RV_RUTA;
                    var RV_FECHA_NOTA = _this.tb_hh_revolventes[i].RV_FECHA_NOTA;
                    var RV_NOTA_REVOLVENTE = _this.tb_hh_revolventes[i].RV_NOTA_REVOLVENTE;
                    var RV_TOTAL_NOTA = _this.tb_hh_revolventes[i].RV_TOTAL_NOTA;
                    var RV_IVA_NOTA = _this.tb_hh_revolventes[i].RV_IVA_NOTA;
                    var RV_IEPS_NOTA = _this.tb_hh_revolventes[i].RV_IEPS_NOTA;
                    var RV_SUCURSAL = _this.tb_hh_revolventes[i].RV_SUCURSAL;
                    var RV_EMPRESA = _this.tb_hh_revolventes[i].RV_EMPRESA;
                    var query7 = "INSERT INTO tb_hh_revolventes(RV_CLIENTE, RV_NOM_CLIENTE, RV_RUTA, RV_FECHA_NOTA, RV_NOTA_REVOLVENTE, RV_TOTAL_NOTA,RV_IVA_NOTA,RV_IEPS_NOTA,RV_SUCURSAL,RV_EMPRESA) VALUES (?,?,?,?,?,?,?,?,?,?)";
                    db.executeSql(query7, [RV_CLIENTE, RV_NOM_CLIENTE, RV_RUTA, RV_FECHA_NOTA, RV_NOTA_REVOLVENTE, RV_TOTAL_NOTA, RV_IVA_NOTA, RV_IEPS_NOTA, RV_SUCURSAL, RV_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                        //this.presentToast(err)
                    });
                }
            }
            for (var i = 0; i < _this.arreglos.length; i++) {
                if (_this.arreglos[i].AR_RUTA == _this.rutamail) {
                    var AR_CLIENTE = _this.arreglos[i].AR_CLIENTE;
                    var AR_NOM_CLIENTE = _this.arreglos[i].AR_NOM_CLIENTE;
                    var AR_RUTA = _this.arreglos[i].AR_RUTA;
                    var AR_SALDO_PENDIENTE = _this.arreglos[i].AR_SALDO_PENDIENTE;
                    var AR_COMPLETO = _this.arreglos[i].AR_COMPLETO;
                    var AR_SUCURSAL = _this.arreglos[i].AR_SUCURSAL;
                    var AR_EMPRESA = _this.arreglos[i].AR_EMPRESA;
                    var query8 = "INSERT INTO tb_hh_arreglos(AR_CLIENTE, AR_NOM_CLIENTE, AR_RUTA, AR_SALDO_PENDIENTE, AR_COMPLETO, AR_SUCURSAL,AR_EMPRESA)VALUES (?,?,?,?,?,?,?)";
                    db.executeSql(query8, [AR_CLIENTE, AR_NOM_CLIENTE, AR_RUTA, AR_SALDO_PENDIENTE, AR_COMPLETO, AR_SUCURSAL, AR_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                        //this.presentToast(err)
                    });
                }
            }
            for (var i = 0; i < _this.cargasIniciales.length; i++) {
                if (_this.cargasIniciales[i].DM_RUTA === _this.rutamail) {
                    var DM_RUTA = _this.cargasIniciales[i].DM_RUTA;
                    var DM_CLAVE = _this.cargasIniciales[i].DM_CLAVE;
                    var DM_GRUPO = _this.cargasIniciales[i].DM_GRUPO;
                    var DM_CANTIDAD = _this.cargasIniciales[i].DM_CANTIDAD;
                    var DM_TIPO_MOV = _this.cargasIniciales[i].DM_TIPO_MOV;
                    var DM_USUARIO_REGISTRO = _this.cargasIniciales[i].DM_USUARIO_REGISTRO;
                    var DM_SUCURSAL = _this.cargasIniciales[i].DM_SUCURSAL;
                    var DM_EMPRESA = _this.cargasIniciales[i].DM_EMPRESA;
                    var query9 = "INSERT INTO tb_hh_carga_iniciales(DM_RUTA, DM_CLAVE, DM_GRUPO, DM_CANTIDAD, DM_TIPO_MOV, DM_USUARIO_REGISTRO,DM_SUCURSAL,DM_EMPRESA)VALUES (?,?,?,?,?,?,?,?)";
                    db.executeSql(query9, [DM_RUTA, DM_CLAVE, DM_GRUPO, DM_CANTIDAD, DM_TIPO_MOV, DM_USUARIO_REGISTRO, DM_SUCURSAL, DM_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                        //this.presentToast(err)
                    });
                }
            }
            //PROMOCIONES
            for (var i = 0; i < _this.promos.length; i++) {
                var PM_CLAVE_PROMO = _this.promos[i].PM_CLAVE_PROMO;
                var PM_CLAVE_PRODUCTO = _this.promos[i].PM_CLAVE_PRODUCTO;
                var PM_CANTIDAD = _this.promos[i].PM_CANTIDAD;
                var PM_PRECIOXUNIDAD_PROMO = _this.promos[i].PM_PRECIOXUNIDAD_PROMO;
                var PM_APLICAR_RUTAS = _this.promos[i].PM_APLICAR_RUTAS;
                var PM_ESTATUS = _this.promos[i].PM_ESTATUS;
                var PM_SUCURSAL = _this.promos[i].PM_SUCURSAL;
                var PM_EMPRESA = _this.promos[i].PM_EMPRESA;
                var query10 = "INSERT INTO tb_hh_promos(PM_CLAVE_PROMO,PM_CLAVE_PRODUCTO,PM_CANTIDAD,PM_PRECIOXUNIDAD_PROMO,PM_APLICAR_RUTAS,PM_ESTATUS,PM_SUCURSAL,PM_EMPRESA)VALUES (?,?,?,?,?,?,?,?)";
                db.executeSql(query10, [PM_CLAVE_PROMO, PM_CLAVE_PRODUCTO, PM_CANTIDAD, PM_PRECIOXUNIDAD_PROMO, PM_APLICAR_RUTAS, PM_ESTATUS, PM_SUCURSAL, PM_EMPRESA]).then(function (res) {
                }, function (err) {
                    console.error(err);
                });
                //}
            }
            //TABLA INVENTARIO:La primera vez sera igual a la tabla de cargas iniciales
            for (var i = 0; i < _this.cargasIniciales.length; i++) {
                if (_this.cargasIniciales[i].DM_RUTA === _this.rutamail) {
                    var IN_RUTA = _this.cargasIniciales[i].DM_RUTA;
                    var IN_CLAVE = _this.cargasIniciales[i].DM_CLAVE;
                    var IN_GRUPO = _this.cargasIniciales[i].DM_GRUPO;
                    var IN_CANTIDAD = _this.cargasIniciales[i].DM_CANTIDAD;
                    var IN_TIPO_MOV = _this.cargasIniciales[i].DM_TIPO_MOV;
                    var IN_USUARIO_REGISTRO = _this.cargasIniciales[i].DM_USUARIO_REGISTRO;
                    var IN_SUCURSAL = _this.cargasIniciales[i].DM_SUCURSAL;
                    var IN_EMPRESA = _this.cargasIniciales[i].DM_EMPRESA;
                    var query11 = "INSERT INTO tb_hh_inventario(IN_RUTA, IN_CLAVE, IN_GRUPO, IN_CANTIDAD, IN_TIPO_MOV, IN_USUARIO_REGISTRO,IN_SUCURSAL,IN_EMPRESA)VALUES (?,?,?,?,?,?,?,?)";
                    db.executeSql(query11, [IN_RUTA, IN_CLAVE, IN_GRUPO, IN_CANTIDAD, IN_TIPO_MOV, IN_USUARIO_REGISTRO, IN_SUCURSAL, IN_EMPRESA]).then(function (res) {
                    }, function (err) {
                        console.error(err);
                        //this.presentToast(err)
                    });
                }
            }
            //GENERA EL PRIMER FOLIO
            //Agrega un cero al numero de dia cuando sea menor a 10
            if (_this.dia < 10) {
                _this.diaStr = '0' + _this.dia;
            }
            //Agrega un cero al numero de mes cuando sea menor a 10
            if (_this.mes < 10) {
                _this.mesStr = '0' + _this.mes;
            }
            //Extrae solo los ultimos dos digitos del año en curso
            _this.anioStr = _this.anio.toString().substring(2);
            //Concatena ceros al numero de ruta segun la cantidad de carasteres en el numero
            if (_this.rutaStr.length == 1) {
                _this.rutaStr = '000' + _this.rutaStr;
            }
            if (_this.rutaStr.length == 2) {
                _this.rutaStr = '00' + _this.rutaStr;
            }
            if (_this.rutaStr.length == 3) {
                _this.rutaStr = '0' + _this.rutaStr;
            }
            //Guarda el folio en variable
            _this.folioIni = _this.rutaStr + _this.diaStr + _this.mesStr + _this.anioStr + '000';
            console.log(_this.folioIni + '      ->folio Inicializado');
            var query12 = "INSERT INTO tb_hh_folio(FL_ULTIMO_FOLIO)VALUES (?)";
            db.executeSql(query12, [_this.folioIni]);
            /***************************************************************** */
        });
    };
    DescargaListasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-descarga-listas',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\descarga-listas\descarga-listas.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Descarga De Datos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <ion-card class="card1">\n    <ion-icon name="log-in"></ion-icon>\n    <ion-card-header class="header" >\n      Descargar Todo\n    </ion-card-header>\n    <ion-card-content>\n      <p class="text-content">\n        Descargar todas las listas\n      </p>\n\n      <button class="btn1" ion-button block (click)=\'doSQL()\'>Descargar</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="card2">\n    <ion-icon name="search"></ion-icon>\n    <ion-card-header class="header">\n      Descarga de Clientes\n    </ion-card-header>\n    <ion-card-content>\n      <p class="text-content">\n        Descargar solo clientes\n      </p>\n\n      <button class="btn2" ion-button block>Descargar</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="card3">\n    <ion-icon name="star"></ion-icon>\n    <ion-card-header class="header">\n      Descargar de precios\n    </ion-card-header>\n    <ion-card-content>\n      <p class="text-content">\n        Descargar solo precios\n      </p>\n\n      <button class="btn3" ion-button block>Descargar</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\descarga-listas\descarga-listas.html"*/,
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
    ], DescargaListasPage);
    return DescargaListasPage;
}());

//# sourceMappingURL=descarga-listas.js.map

/***/ })

});
//# sourceMappingURL=8.js.map