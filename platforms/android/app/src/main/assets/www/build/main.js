webpackJsonp([16],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/carrito-vt/carrito-vt.module": [
		302,
		14
	],
	"../pages/clientes/clientes.module": [
		301,
		13
	],
	"../pages/companies/companies.module": [
		303,
		12
	],
	"../pages/create-cliente/create-cliente.module": [
		304,
		11
	],
	"../pages/createcompany/createcompany.module": [
		305,
		10
	],
	"../pages/createproducto/createproducto.module": [
		306,
		9
	],
	"../pages/descarga-listas/descarga-listas.module": [
		308,
		8
	],
	"../pages/home/home.module": [
		307,
		7
	],
	"../pages/inicio-dia/inicio-dia.module": [
		309,
		6
	],
	"../pages/login/login.module": [
		310,
		5
	],
	"../pages/modal-promos/modal-promos.module": [
		311,
		4
	],
	"../pages/modal/modal.module": [
		313,
		3
	],
	"../pages/printer-list-modal/printer-list-modal.module": [
		312,
		15
	],
	"../pages/productos/productos.module": [
		314,
		2
	],
	"../pages/register/register.module": [
		315,
		1
	],
	"../pages/ticket/ticket.module": [
		316,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteProvider = /** @class */ (function () {
    function ClienteProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ClienteProvider.prototype.getUserData = function () {
        this.getEmail();
        return this.http.get("https://rateapiugl.herokuapp.com/api/home/" + this.email);
    };
    ClienteProvider.prototype.getEmail = function () {
        var _this = this;
        this.storage.get('useremail').then(function (value) {
            _this.email = value;
        });
    };
    ClienteProvider.prototype.createCliente = function (num_cliente, nombre_negocio, razon_social, direccion, colonia_negocio, ciudad_negocio, corporacion, ruta, lunes, martes, miercoles, juevez, viernes, sabado, domingo, estatus, userId) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/cliente/create', {
            num_cliente: num_cliente,
            nombre_negocio: nombre_negocio,
            razon_social: razon_social,
            direccion: direccion,
            colonia_negocio: colonia_negocio,
            ciudad_negocio: ciudad_negocio,
            corporacion: corporacion,
            ruta: ruta,
            lunes: lunes,
            martes: martes,
            miercoles: miercoles,
            juevez: juevez,
            viernes: viernes,
            sabado: sabado,
            domingo: domingo,
            estatus: estatus,
            userId: userId
        });
    };
    ClienteProvider.prototype.getClientes = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/clientes/all');
    };
    ClienteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ClienteProvider);
    return ClienteProvider;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoProvider = /** @class */ (function () {
    function ProductoProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ProductoProvider.prototype.createProducto = function (PD_CLAVE, PD_NOMBRE, PD_UM, PD_GRUPO, PD_CANTXCAJA, PD_BAJA, PD_SUCURSAL, PD_EMPRESA) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/productos/create', {
            PD_CLAVE: PD_CLAVE,
            PD_NOMBRE: PD_NOMBRE,
            PD_UM: PD_UM,
            PD_GRUPO: PD_GRUPO,
            PD_CANTXCAJA: PD_CANTXCAJA,
            PD_BAJA: PD_BAJA,
            PD_SUCURSAL: PD_SUCURSAL,
            PD_EMPRESA: PD_EMPRESA
        });
    };
    ProductoProvider.prototype.getProductos = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/productos/all');
    };
    ProductoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProductoProvider);
    return ProductoProvider;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PrecioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrecioProvider = /** @class */ (function () {
    function PrecioProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello PrecioProvider Provider');
    }
    PrecioProvider.prototype.getPrecios = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/precios/all');
    };
    PrecioProvider.prototype.getClave = function (clave, tipoPrecio) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/precios/consulta', {
            clave: clave,
            tipoPrecio: tipoPrecio
        });
    };
    PrecioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PrecioProvider);
    return PrecioProvider;
}());

//# sourceMappingURL=precio.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromosProvider = /** @class */ (function () {
    function PromosProvider(http) {
        this.http = http;
        console.log('Hello PromosProvider Provider');
    }
    PromosProvider.prototype.getPromos = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/promos/all');
    };
    PromosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PromosProvider);
    return PromosProvider;
}());

//# sourceMappingURL=promos.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargaInicialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CargaInicialProvider = /** @class */ (function () {
    function CargaInicialProvider(http) {
        this.http = http;
        console.log('Hello CargaInicialProvider Provider');
    }
    CargaInicialProvider.prototype.getCargaInicial = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/cargasIniciales/all');
    };
    CargaInicialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CargaInicialProvider);
    return CargaInicialProvider;
}());

//# sourceMappingURL=carga-inicial.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArregloProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ArregloProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ArregloProvider = /** @class */ (function () {
    function ArregloProvider(http) {
        this.http = http;
        console.log('Hello ArregloProvider Provider');
    }
    ArregloProvider.prototype.getArreglo = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/arreglos/all');
    };
    ArregloProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ArregloProvider);
    return ArregloProvider;
}());

//# sourceMappingURL=arreglo.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevolventesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RevolventesProvider = /** @class */ (function () {
    function RevolventesProvider(http) {
        this.http = http;
    }
    RevolventesProvider.prototype.getRevolventes = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/revolventes/all');
    };
    RevolventesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RevolventesProvider);
    return RevolventesProvider;
}());

//# sourceMappingURL=revolventes.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbHhUsuariosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TbHhUsuariosProvider = /** @class */ (function () {
    function TbHhUsuariosProvider(http) {
        this.http = http;
        console.log('Hello TbHhUsuariosProvider Provider');
    }
    TbHhUsuariosProvider.prototype.getUsuarios = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/vendedores/all');
    };
    TbHhUsuariosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TbHhUsuariosProvider);
    return TbHhUsuariosProvider;
}());

//# sourceMappingURL=tb-hh-usuarios.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RutaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RutaProvider = /** @class */ (function () {
    function RutaProvider(http) {
        this.http = http;
        console.log('Hello RutaProvider Provider');
    }
    RutaProvider.prototype.getRutas = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/rutas/all');
    };
    RutaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RutaProvider);
    return RutaProvider;
}());

//# sourceMappingURL=ruta.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecioClienteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrecioClienteProvider = /** @class */ (function () {
    function PrecioClienteProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello PrecioClienteProvider Provider');
    }
    PrecioClienteProvider.prototype.getPrecioClientes = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/precioCliente/all', {});
    };
    PrecioClienteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PrecioClienteProvider);
    return PrecioClienteProvider;
}());

//# sourceMappingURL=precio-cliente.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(http) {
        this.http = http;
        console.log('Hello RegisterProvider Provider');
    }
    RegisterProvider.prototype.registerUser = function (fullname, email, password) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/singup/user', {
            fullname: fullname,
            email: email,
            password: password
        });
    };
    RegisterProvider.prototype.loginUser = function (email, password) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/login/user', {
            email: email,
            password: password
        });
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterProvider);
    return RegisterProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterListModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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
 * Generated class for the PrinterListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrinterListModalPage = /** @class */ (function () {
    function PrinterListModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.printerList = [];
    }
    PrinterListModalPage.prototype.ionViewDidLoad = function () {
        this.printerList = this.navParams.get('data');
        this.viewCtrl.dismiss(this.printerList[0]); //solo lee el primer elemento del arreglo asi que solo debe tener una impresora vinculada
    };
    PrinterListModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-printer-list-modal',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\printer-list-modal\printer-list-modal.html"*/'<!--\n  Generated template for the PrinterListModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <!--Recorre la lista de dispositivos vinculados (Solo deberia existir uno-->\n   <!---- <ion-item *ngFor="let item of printerList"></ion-item>-->\n   \n  </ion-list>\n  </ion-content>'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\printer-list-modal\printer-list-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PrinterListModalPage);
    return PrinterListModalPage;
}());

//# sourceMappingURL=printer-list-modal.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyProvider = /** @class */ (function () {
    function CompanyProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    CompanyProvider.prototype.getUserData = function () {
        this.getEmail();
        return this.http.get("https://rateapiugl.herokuapp.com/api/home/" + this.email);
    };
    CompanyProvider.prototype.getEmail = function () {
        var _this = this;
        this.storage.get('useremail').then(function (value) {
            _this.email = value;
        });
    };
    CompanyProvider.prototype.createCompany = function (name, address, city, country, sector, website, userId) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/company/create', {
            name: name,
            address: address,
            city: city,
            country: country,
            sector: sector,
            website: website,
            userId: userId
        });
    };
    CompanyProvider.prototype.getCompanies = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/companies/all');
    };
    CompanyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], CompanyProvider);
    return CompanyProvider;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotaVentaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NotaVentaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotaVentaProvider = /** @class */ (function () {
    function NotaVentaProvider(http) {
        this.http = http;
        console.log('Hello NotaVentaProvider Provider');
    }
    NotaVentaProvider.prototype.createNotaVenta = function (NV_NOTA, NV_CLIENTE, NV_RAZON_SOCIAL, NV_NOMBRE_CLIENTE, NV_FECHA, NV_RUTA, NV_TIPO_VENTA, NV_SUBTOTAL, NV_IVA, NV_IEPS, NV_RECONOCIMIENTO, NV_TOTAL, NV_CORPO_CLIENTE, NV_ESTATUS_NOTA, NV_KILOLITROS_VENDIDOS) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/notaVenta/create', {
            NV_NOTA: NV_NOTA,
            NV_CLIENTE: NV_CLIENTE,
            NV_RAZON_SOCIAL: NV_RAZON_SOCIAL,
            NV_NOMBRE_CLIENTE: NV_NOMBRE_CLIENTE,
            NV_FECHA: NV_FECHA,
            NV_RUTA: NV_RUTA,
            NV_TIPO_VENTA: NV_TIPO_VENTA,
            NV_SUBTOTAL: NV_SUBTOTAL,
            NV_IVA: NV_IVA,
            NV_IEPS: NV_IEPS,
            NV_RECONOCIMIENTO: NV_RECONOCIMIENTO,
            NV_TOTAL: NV_TOTAL,
            NV_CORPO_CLIENTE: NV_CORPO_CLIENTE,
            NV_ESTATUS_NOTA: NV_ESTATUS_NOTA,
            NV_KILOLITROS_VENDIDOS: NV_KILOLITROS_VENDIDOS
        });
    };
    NotaVentaProvider.prototype.getNotaVenta = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/notaVenta/all');
    };
    NotaVentaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotaVentaProvider);
    return NotaVentaProvider;
}());

//# sourceMappingURL=nota-venta.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintProvider = /** @class */ (function () {
    function PrintProvider(btSerial, alertCtrl) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
        this.printParteClaves = '';
        this.printParteReconocimiento = '';
        this.printParteLeyenda = '';
        this.TotalLetra = '';
        this.TotalParcial = 0;
        this.resto = 0;
        this.fechaActual = new Date();
        //variables para mostrar el horario
        this.Hora = this.fechaActual.getHours();
        this.Minutos = this.fechaActual.getMinutes();
        this.Segundos = this.fechaActual.getSeconds();
        //variables tipo string para mostrar el horario
        this.h = '';
        this.m = '';
        this.s = '';
        this.horaFinal = ''; //concatenado de todas las partes que conforman la hora
    }
    PrintProvider.prototype.searchBt = function () {
        return this.btSerial.list();
    };
    PrintProvider.prototype.connectBT = function (address) {
        return this.btSerial.connect(address);
    };
    PrintProvider.prototype.ProveedorimpresionNotaVta = function (address, cliente, clavesVta, tipoVentaCliente, reconocimientoVta, subtotalVta, IVAVta, totalFinal, KLAcumVta, IEPSVta, rutamail, tipoImpresion) {
        var _this = this;
        console.log(cliente.CL_CLIENTE);
        // Si la Hora, los Minutos o los Segundos son Menores o igual a 9, le añadimos un 0 */
        if (this.Hora <= 9) {
            this.h = "0" + this.Hora;
        }
        else {
            this.h = this.Hora.toString();
        }
        if (this.Minutos <= 9) {
            this.m = "0" + this.Minutos;
        }
        else {
            this.m = this.Minutos.toString();
        }
        if (this.Segundos <= 9) {
            this.s = "0" + this.Segundos;
        }
        else {
            this.s = this.Segundos.toString();
        }
        this.horaFinal = this.h + ":" + this.m + ":" + this.s;
        this.TotalParcial = subtotalVta + IVAVta + IEPSVta;
        this.TotalLetra = this.NumeroALetras(totalFinal);
        console.log(this.TotalLetra);
        var printParteCliente = "  UNION DE GANADEROS LECHEROS" +
            "\r\n" + "      DE JUAREZ SA DE CV" +
            "\r\n" + "         UGL870209DL0 " +
            "\r\n" + " RAMON RAYON #1351, WATERFILL " +
            "\r\n" + " RIO BRAVO, CD. JUAREZ, CHIH. " +
            "\r\n" + "          C.P. 32553" +
            "\r\n" + " " +
            "\r\n" + "    NOTA DE VENTA " + tipoImpresion +
            "\r\n" + " " +
            "\r\n" + "RUTA: " + rutamail +
            "\r\n" + "FOLIO: " +
            "\r\n" + "FECHA: " + this.fechaActual.toLocaleDateString('en-GB') + " " + this.horaFinal +
            "\r\n" + "TIPO DE VENTA:" + tipoVentaCliente +
            "\r\n" + " " +
            "\r\n" + "# CLIENTE: " + cliente.CL_CLIENTE +
            "\r\n" + cliente.CL_NOMNEGOCIO +
            "\r\n" + cliente.CL_PUNTOVENTA +
            "\r\n" + "R.F.C:" + cliente.CL_RFC +
            "\r\n" + cliente.CL_DIRNEGOCIO + ", " + cliente.CL_COLNEGOCIO +
            "\r\n" + cliente.CL_CIUDADNEGOCIO + ", C.P. " + cliente.CL_CPCLIE +
            "\r\n" + "CORPORACION: " + cliente.CL_CORPORACION +
            "\r\n" + "===============================" +
            "\r\n" + "Clave  Producto" +
            "\r\n" + "===============================";
        for (var i = 0; i < clavesVta.length; i++) {
            //Concatena ceros al numero de clave para que todos sean  de 4 digitos
            var guardaClave = "\r\n" + clavesVta[i]['clave'] + " " + clavesVta[i]['nombre'] +
                "\r\n" + "  Cant:" + clavesVta[i]['cantidad'] + " Precio:$" + clavesVta[i]['precio'] +
                "\r\n" + "  IVA:$" + parseFloat(clavesVta[i]['iva']).toFixed(2) + " IEPS:$" + parseFloat(clavesVta[i]['ieps']).toFixed(2) +
                "\r\n" + "  Importe:$" + parseFloat(clavesVta[i]['importe']).toFixed(2) +
                "\r\n" + "===============================";
            this.printParteClaves = this.printParteClaves + guardaClave;
        }
        var printParteImportes = "\r\n" + " " +
            "\r\n" + "      Subtotal: $" + parseFloat(subtotalVta).toFixed(2) +
            "\r\n" + "           IVA: $" + parseFloat(IVAVta).toFixed(2) +
            "\r\n" + "          IEPS: $" + parseFloat(IEPSVta).toFixed(2);
        if (parseFloat(reconocimientoVta) > 0) {
            this.printParteReconocimiento = "\r\n" + "Reconocimiento:$" + parseFloat(reconocimientoVta).toFixed(2);
        }
        else {
            this.printParteReconocimiento = '';
        }
        var printParteTotales = "\r\n" + " Total a Pagar: $" + parseFloat(totalFinal).toFixed(2) +
            "\r\n" + " " +
            "\r\n" + this.TotalLetra +
            "\r\n" + "===============================" +
            "\r\n" + "* KILOLITROS VENDIDOS: " + parseFloat(KLAcumVta).toFixed(2) +
            "\r\n" + "===============================" +
            "\r\n" + " ";
        if (tipoVentaCliente == 'CREDITO') {
            this.printParteLeyenda =
                "\r\n" + "POR ESTE PAGARE ME(NOS) OBLIGO" +
                    "\r\n" + "(MOS) PAGAR INCONDICIONALMENTE" +
                    "\r\n" + "A LA ORDEN DE UNION DE GANADEROS" +
                    "\r\n" + "LECHEROS DE JUAREZ SA DE CV " +
                    "\r\n" + "LA CANTIDAD DE " + this.TotalLetra +
                    "\r\n" + "POR MERCANCIAS RECIBIDAS A MI " +
                    "\r\n" + "(NUESTRA) ENTERA SATISFACCION. " +
                    "\r\n" + " " +
                    "\r\n" + " " +
                    "\r\n" + "ACEPTO(AMOS)___________________ " +
                    "\r\n" + " " +
                    "\r\n" + "  ESTA REMISION SE PAGA EN UNA  " +
                    "\r\n" + "        SOLA EXHIBICION" +
                    "\r\n" + " " +
                    "\r\n" + " ";
        }
        else {
            this.printParteLeyenda = '';
        }
        var printParteFinal = "\r\n" + " ATENDIDO POR: 0000" +
            "\r\n" + " AQUI NOMBRE DEL EMPLEADO" +
            "\r\n" + " " +
            "\r\n" + "  VISITE NUESTRA PAGINA WEB:" +
            "\r\n" + "     WWW.LECHELUCERNA.COM" +
            "\r\n" + " TEL. 8925000 EXT.VENTAS 2112" +
            "\r\n" + " APPVENTAS Ver.1.0.D-RLHDFO19" +
            "\r\n" + " " +
            "\r\n" + " " +
            "\r\n" + " ";
        var xyz = this.connectBT(address).subscribe(function (data) {
            _this.btSerial.write(printParteCliente + _this.printParteClaves + printParteImportes + _this.printParteReconocimiento + printParteTotales + _this.printParteLeyenda + printParteFinal).then(function (dataz) {
                console.log("IMPRESION REALIZADA", dataz);
                _this.LimpiarVariables();
                /*  let mno=this.alertCtrl.create({
                    title:"Impresion en Curso!",
                    buttons:['Aceptar']
                  });
                  mno.present();*/
                xyz.unsubscribe();
            }, function (errx) {
                console.log("FALLO DE IMPRESION", errx);
                var mno = _this.alertCtrl.create({
                    title: "Error de Impresion debido a  " + errx,
                    buttons: ['Aceptar']
                });
                mno.present();
            });
        }, function (err) {
            console.log("ERROR DE CONEXION IMPRESORA", err);
            var mno = _this.alertCtrl.create({
                title: "Error de conexión con impresora debido a " + err,
                buttons: ['Aceptar']
            });
            mno.present();
        });
    };
    //CODIGO PARA CONVERTIR EL TOTAL DE NUMERO A LETRA
    PrintProvider.prototype.NumeroALetras = function (num) {
        var data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: "",
            letrasMonedaPlural: "PESOS",
            letrasMonedaSingular: "PESOS"
        };
        if (data.centavos > 0)
            data.letrasCentavos = "CON " + data.centavos + "/100";
        if (data.enteros == 0)
            return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
        if (data.enteros == 1)
            return this.Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
        else
            return this.Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    };
    PrintProvider.prototype.Unidades = function (num) {
        switch (num) {
            case 1: return "UN";
            case 2: return "DOS";
            case 3: return "TRES";
            case 4: return "CUATRO";
            case 5: return "CINCO";
            case 6: return "SEIS";
            case 7: return "SIETE";
            case 8: return "OCHO";
            case 9: return "NUEVE";
        }
        return "";
    };
    PrintProvider.prototype.Decenas = function (num) {
        var decena = Math.floor(num / 10);
        var unidad = num - (decena * 10);
        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0: return "DIEZ";
                    case 1: return "ONCE";
                    case 2: return "DOCE";
                    case 3: return "TRECE";
                    case 4: return "CATORCE";
                    case 5: return "QUINCE";
                    default: return "DIECI" + this.Unidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0: return "VEINTE";
                    default: return "VEINTI" + this.Unidades(unidad);
                }
            case 3: return this.DecenasY("TREINTA", unidad);
            case 4: return this.DecenasY("CUARENTA", unidad);
            case 5: return this.DecenasY("CINCUENTA", unidad);
            case 6: return this.DecenasY("SESENTA", unidad);
            case 7: return this.DecenasY("SETENTA", unidad);
            case 8: return this.DecenasY("OCHENTA", unidad);
            case 9: return this.DecenasY("NOVENTA", unidad);
            case 0: return this.Unidades(unidad);
        }
    };
    PrintProvider.prototype.DecenasY = function (strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + " Y " + this.Unidades(numUnidades);
        return strSin;
    };
    PrintProvider.prototype.Centenas = function (num) {
        var centenas = Math.floor(num / 100);
        var decenas = num - (centenas * 100);
        switch (centenas) {
            case 1:
                if (decenas > 0)
                    return "CIENTO " + this.Decenas(decenas);
                return "CIEN";
            case 2: return "DOSCIENTOS " + this.Decenas(decenas);
            case 3: return "TRESCIENTOS " + this.Decenas(decenas);
            case 4: return "CUATROCIENTOS " + this.Decenas(decenas);
            case 5: return "QUINIENTOS " + this.Decenas(decenas);
            case 6: return "SEISCIENTOS " + this.Decenas(decenas);
            case 7: return "SETECIENTOS " + this.Decenas(decenas);
            case 8: return "OCHOCIENTOS " + this.Decenas(decenas);
            case 9: return "NOVECIENTOS " + this.Decenas(decenas);
        }
        return this.Decenas(decenas);
    };
    PrintProvider.prototype.Seccion = function (num, divisor, strSingular, strPlural) {
        var cientos = Math.floor(num / divisor);
        var letras = "";
        if (cientos > 0)
            if (cientos > 1)
                letras = this.Centenas(cientos) + " " + strPlural;
            else
                letras = strSingular;
        if (this.resto > 0)
            letras += "";
        return letras;
    };
    PrintProvider.prototype.Miles = function (num) {
        var divisor = 1000;
        var cientos = Math.floor(num / divisor);
        this.resto = num - (cientos * divisor);
        var strMiles = this.Seccion(num, divisor, "UN MIL", "MIL");
        var strCentenas = this.Centenas(this.resto);
        if (strMiles == "")
            return strCentenas;
        return strMiles + " " + strCentenas;
    };
    PrintProvider.prototype.Millones = function (num) {
        var divisor = 1000000;
        var cientos = Math.floor(num / divisor);
        var resto = num - (cientos * divisor);
        var strMillones = this.Seccion(num, divisor, "UN MILLON", "MILLONES");
        var strMiles = this.Miles(resto);
        if (strMillones == "")
            return strMiles;
        return strMillones + " " + strMiles;
    };
    PrintProvider.prototype.LimpiarVariables = function () {
        this.printParteLeyenda = '';
        this.printParteReconocimiento = '';
        this.printParteReconocimiento = '';
        this.printParteClaves = '';
    };
    PrintProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrintProvider);
    return PrintProvider;
}()); //fin

//# sourceMappingURL=print.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_register_register__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_company_company__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_cliente_cliente__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_producto_producto__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_carrito_carrito__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_precio_precio__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_precio_cliente_precio_cliente__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_ruta_ruta__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_tb_hh_usuarios_tb_hh_usuarios__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_revolventes_revolventes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_promos_promos__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_carga_inicial_carga_inicial__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_arreglo_arreglo__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_nota_venta_nota_venta__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_detalle_nota_detalle_nota__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_print_print__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_printer_list_modal_printer_list_modal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_bluetooth_serial__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























 //PARA IMPRIMIR SE DEBE AGREGAR ESTA LINEA
 //PARA IMPRIMIR SE DEBE AGREGAR ESTA LINEA
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_27__pages_printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */] //PARA IMPRIMIR SE DEBE AGREGAR ESTA LINEA
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/clientes/clientes.module#ClientesPageModule', name: 'ClientesPage', segment: 'clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrito-vt/carrito-vt.module#CarritoVtPageModule', name: 'CarritoVtPage', segment: 'carrito-vt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companies/companies.module#CompaniesPageModule', name: 'CompaniesPage', segment: 'companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-cliente/create-cliente.module#CreateClientePageModule', name: 'CreateClientePage', segment: 'create-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createcompany/createcompany.module#CreatecompanyPageModule', name: 'CreatecompanyPage', segment: 'createcompany', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createproducto/createproducto.module#CreateproductoPageModule', name: 'CreateproductoPage', segment: 'createproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descarga-listas/descarga-listas.module#DescargaListasPageModule', name: 'DescargaListasPage', segment: 'descarga-listas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-dia/inicio-dia.module#InicioDiaPageModule', name: 'InicioDiaPage', segment: 'inicio-dia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-promos/modal-promos.module#ModalPromosPageModule', name: 'ModalPromosPage', segment: 'modal-promos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/printer-list-modal/printer-list-modal.module#PrinterListModalPageModule', name: 'PrinterListModalPage', segment: 'printer-list-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket/ticket.module#TicketPageModule', name: 'TicketPage', segment: 'ticket', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_27__pages_printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */] //PARA IMPRIMIR SE DEBE AGREGAR ESTA LINEA
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_company_company__["a" /* CompanyProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_cliente_cliente__["a" /* ClienteProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_producto_producto__["a" /* ProductoProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_carrito_carrito__["a" /* CarritoProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_precio_precio__["a" /* PrecioProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_precio_cliente_precio_cliente__["a" /* PrecioClienteProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_18__providers_ruta_ruta__["a" /* RutaProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_tb_hh_usuarios_tb_hh_usuarios__["a" /* TbHhUsuariosProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_revolventes_revolventes__["a" /* RevolventesProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_promos_promos__["a" /* PromosProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_carga_inicial_carga_inicial__["a" /* CargaInicialProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_arreglo_arreglo__["a" /* ArregloProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_nota_venta_nota_venta__["a" /* NotaVentaProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_detalle_nota_detalle_nota__["a" /* DetalleNotaProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_print_print__["a" /* PrintProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */] //PARA IMPRIMIR SE DEBE AGREGAR ESTA LINEA
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //AGREGAR PARA USAR SQL
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, sqlite //Agregar para usar SQL
    ) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.sqlite = sqlite; //Agregar para usar SQL
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: 'HomePage', icon: 'home' },
            { title: 'Descarga de Listas', component: 'InicioDiaPage', icon: 'create' },
            { title: 'Lista Clientes', component: 'ClientesPage', icon: 'list-box' },
            { title: 'Crear Nota TEST', component: 'CreatecompanyPage', icon: 'search' },
            { title: 'Leaderboard', component: 'HomePage', icon: 'archive' }
        ];
    }
    MyApp.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('useremail').then(function (val) {
            _this.rutamail = val;
            console.log(_this.rutamail);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.get('useremail').then(function (loggedIn) {
                if (loggedIn === null) {
                    _this.nav.setRoot("LoginPage");
                }
                if (loggedIn !== null) {
                    _this.nav.setRoot("HomePage");
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component === "HomePage") {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.storage.remove('useremail');
        this.nav.setRoot("LoginPage");
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            _this.LimpiarClientes = "DROP TABLE clientes";
            db.executeSql(_this.LimpiarClientes, []);
            _this.LimpiarArreglos = "DROP TABLE tb_hh_arreglos";
            db.executeSql(_this.LimpiarArreglos, []);
            _this.LimpiarCargaInicial = "DROP TABLE tb_hh_carga_iniciales";
            db.executeSql(_this.LimpiarCargaInicial, []);
            _this.LimpiarPrecios = "DROP TABLE tb_hh_precios";
            db.executeSql(_this.LimpiarPrecios, []);
            _this.LimpiarPreciosCliente = "DROP TABLE tb_hh_precio_cliente";
            db.executeSql(_this.LimpiarPreciosCliente, []);
            _this.LimpiarProductos = "DROP TABLE  tb_hh_productos";
            db.executeSql(_this.LimpiarProductos, []);
            _this.LimpiarRevolvente = "DROP TABLE tb_hh_revolventes";
            db.executeSql(_this.LimpiarRevolvente, []);
            _this.LimpiarRutas = "DROP TABLE tb_hh_rutas";
            db.executeSql(_this.LimpiarRutas, []);
            _this.LimpiarUsuarios = "DROP TABLE tb_hh_usuarios";
            db.executeSql(_this.LimpiarUsuarios, []);
            _this.LimpiarPromos = "DROP TABLE tb_hh_promos";
            db.executeSql(_this.LimpiarPromos, []);
            _this.LimpiarFolios = "DROP TABLE tb_hh_folio";
            db.executeSql(_this.LimpiarFolios, []);
            _this.LimpiarInventario = "DROP TABLE tb_hh_inventario ";
            db.executeSql(_this.LimpiarInventario, []);
        });
    };
    MyApp.prototype.obtenerRuta = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title class="sidebarmenu">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        \n        <ion-icon name="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n      <button ion-button menuClose (click)="logout()"> \n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */] //Agregar para usar SQL
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CarritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CarritoProvider = /** @class */ (function () {
    function CarritoProvider(http) {
        this.http = http;
        console.log('Hello CarritoProvider Provider');
    }
    CarritoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CarritoProvider);
    return CarritoProvider;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleNotaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DetalleNotaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DetalleNotaProvider = /** @class */ (function () {
    function DetalleNotaProvider(http) {
        this.http = http;
        console.log('Hello DetalleNotaProvider Provider');
    }
    DetalleNotaProvider.prototype.createDetalleNota = function (DN_FECHA, DN_NOTA, DN_CLAVE, DN_DESCRIPCION, DN_CANTIDAD_PIEZAS, DN_PRECIO, DN_IVA, DN_IEPS, DN_IMPORTE) {
        return this.http
            .post('https://rateapiugl.herokuapp.com/api/detalleNota/create', {
            DN_FECHA: DN_FECHA,
            DN_NOTA: DN_NOTA,
            DN_CLAVE: DN_CLAVE,
            DN_DESCRIPCION: DN_DESCRIPCION,
            DN_CANTIDAD_PIEZAS: DN_CANTIDAD_PIEZAS,
            DN_PRECIO: DN_PRECIO,
            DN_IVA: DN_IVA,
            DN_IEPS: DN_IEPS,
            DN_IMPORTE: DN_IMPORTE
        });
    };
    DetalleNotaProvider.prototype.getDetalleNota = function () {
        return this.http
            .get('https://rateapiugl.herokuapp.com/api/detalleNota/all');
    };
    DetalleNotaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DetalleNotaProvider);
    return DetalleNotaProvider;
}());

//# sourceMappingURL=detalle-nota.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map