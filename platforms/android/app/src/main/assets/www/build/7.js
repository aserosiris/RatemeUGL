webpackJsonp([7],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cliente_cliente__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, 
        //public sqlite: SQLite,
        cliente, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = cliente;
        this.loadingCtrl = loadingCtrl;
        this.clientes = [];
        this.clientesSQL = [];
        this.rutaNum = navParams.get('email');
    }
    /*
      getData() {
        
        this.sqlite.create({
          name: 'ionicdb.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('CREATE TABLE IF NOT EXISTS clientes(CL_CLIENTE INTEGER PRIMARY KEY,CL_NOMNEGOCIO TEXT, CL_PUNTOVENTA TEXT, CL_RFC TEXT, CL_DIRNEGOCIO TEXT, CL_COLNEGOCIO TEXT, CL_CPCLIE INT, CL_CUIDADNEGOCIO TEXT, CL_CORPORACION INT, CL_RUTA INT, CL_LUNES TEXT, CL_MARTES TEXT, CL_MIERCOLES TEXT, CL_JUEVES TEXT, CL_VIERNES TEXT, CL_SABADO TEXT, CL_DOMINGO TEXT, CL_BAJA TEXT, CL_SUCURSAL INT, CL_EMPRESA INT  )', [])
          .then(res => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
          db.executeSql('SELECT CL_CLIENTE, CL_NOMNEGOCIO, CL_PUNTOVENTA, CL_RFC, CL_DIRNEGOCIO, CL_COLNEGOCIO  FROM clientes', [])
          .then(res => {
            this.clientesSQL = [];
            for(var i=0; i<res.rows.length; i++) {
              this.clientesSQL.push({CL_CLIENTE:res.rows.item(i).CL_CLIENTE,CL_NOMNEGOCIO:res.rows.item(i).CL_NOMNEGOCIO,razon_social:res.rows.item(i).CL_NOMNEGOCIO,
                CL_PUNTOVENTA:res.rows.item(i).CL_PUNTOVENTA,CL_RFC:res.rows.item(i).CL_RFC,CL_DIRNEGOCIO:res.rows.item(i).CL_DIRNEGOCIO,
                CL_COLNEGOCIO:res.rows.item(i).CL_COLNEGOCIO,
                })
            }
          })
          .catch(e => console.log(e));
      });
    
     
    }
    */
    HomePage.prototype.ionViewDidLoad = function () {
        // this.getAllClientes();
        // this.getData();
    };
    /*
      getAllClientes(){
        this.cliente.getClientes()
        .subscribe(res =>{
          console.log(res);
          this.clientes = res.result;
          this.getData();
        });
      }
    */
    HomePage.prototype.carritoVentas = function (event, cliente) {
        this.navCtrl.push("CarritoVtPage", {
            cliente: cliente
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ruta: {{rutaNum}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-item *ngFor="let cliente of clientesSQL; let i=index">\n    <ion-row>\n      <ion-col col-2>\n        <ion-avatar item-start>\n          <img src="http://placehold.it/10x10">\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-10 class="rowCol">\n        <h2 (click)="carritoVentas($event, cliente)" class="companyname" text-wrap>\n          {{cliente.CL_NOMNEGOCIO}}\n        </h2>\n        <ion-col class="dataCol">\n          <ion-row>\n            <ion-col col-12>\n              <span>\n                <ion-icon name="ios-grid-outline" class="iconClass"> </ion-icon>\n                {{cliente.CL_CLIENTE}}\n              </span>\n            </ion-col>\n            <ion-col col-12>\n              <span>\n                <ion-icon name="contact" class="iconClass"> </ion-icon>\n                {{cliente.CL_PUNTOVENTA}}\n              </span>\n            </ion-col>\n            <ion-col col-12 text-wrap>\n              <ion-icon name="pin" class="iconClass"></ion-icon>\n              {{cliente.CL_DIRNEGOCIO}}, {{cliente.CL_COLNEGOCIO}}\n            </ion-col>\n            <ion-col col-12 class="rating">\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              (4.5)\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>\n  '/*ion-inline-end:"D:\Documents\Ionic\LucernaHH\Rateme-master\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cliente_cliente__["a" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map