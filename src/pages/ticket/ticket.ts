import { Component } from '@angular/core';
import {IonicPage, NavController,ModalController,AlertController, NavParams,ToastController,  ViewController} from 'ionic-angular';
import {PrintProvider} from '../../providers/print/print';
import {PrinterListModalPage} from '../printer-list-modal/printer-list-modal';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import{Storage} from '@ionic/storage'

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  selectedPrinter:any=[];

  //Variables para recibir la informacion desde el carrito
  cliente: any;  //variable que recibe arreglo
  clavesVta:any;  //variable que recibe arreglo
 
  tipoVentaCliente:String; //datos del total de la venta
  reconocimientoVta:Number;
  subtotalVta:Number;
  IVAVta:Number;
  IEPSVta:Number;
  totalFinal:Number;
  KLAcumVta:Number;
 
  rutamail:number;

  tipoImpresion:string;

   //VARIABLES***********

   producto: any;
   consulta: string;
   consulta1: string;
   cantidadVenta: number[];
   cantidadActual: number[];
   cantidadNUeva: number[];
   claveProd: Number[];
   cantNum:number;
   largoArreglos: Number;
   clavenum: Number;
 //****************** */
 
 

  constructor(public navCtrl: NavController,private modalCtrl:ModalController,
    private printProvider:PrintProvider,  private view: ViewController,
    private alertCtrl:AlertController,
    public navParams: NavParams,  private toastCtrl: ToastController,
    public Storage:Storage, private sqlite: SQLite) {
      
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
      this.tipoImpresion='';

      this.producto = JSON.parse(JSON.stringify(this.navParams.get('producto')));
  
  }
  ionViewDidEnter(){
    this.obtenerCantidades();
   }


   obtenerCantidades(){
    console.log(this.producto.length)
    this.claveProd = []
      this.cantidadVenta = []
    for(var i = 0;i<this.producto.length; i++ ){
      //console.log(this.producto.cantidad)
      this.claveProd.push(parseInt(this.producto[i]['clave'])) 
      this.cantidadVenta.push(parseInt(this.producto[i]['cantidad']))
      console.log(this.cantidadVenta)
      
    }
    this.getCantidad(this.claveProd, this.cantidadVenta)
    //console.log(this.cantidadVenta)

  }

  getCantidad(clave, cant){
    //return new Promise(function(resolve, reject)
     this.sqlite.create({
       name: 'ionicdb.db',
       location: 'default'
     }).then((db: SQLiteObject) => {
      console.log(clave,"Claves")
      console.log(cant, "cantidad de ventas")
      this.cantidadActual = []; 
         for(var e =0; e<clave.length; e++){
          
        this.consulta = `select IN_CANTIDAD FROM tb_hh_inventario WHERE IN_CLAVE =?`
        this.clavenum = clave[e];
        console.log(this.clavenum)
                
        db.executeSql(this.consulta,[this.clavenum])
        .then(res => {
          
          for(var a=0; a<res.rows.length; a++) {
            this.cantidadActual.push(res.rows.item(a).IN_CANTIDAD) 
            console.log(this.cantidadActual, "cantidad en int")
          }
        
          
          }).catch(e => console.log(e));
          
          
      }
     
    }).then(res =>{
     

      })
    
   }

   restar(){
     this.cantidadNUeva =[]
    for(var p=0; p<this.cantidadActual.length; p++){
      console.log("segundo for")
      this.cantidadNUeva.push(this.cantidadActual[p]- this.cantidadVenta[p])
      console.log(this.cantidadNUeva,"cantidades nuevas")
    }
    //return new Promise(function(resolve, reject)
     this.sqlite.create({
       name: 'ionicdb.db',
       location: 'default'
     }).then((db: SQLiteObject) => {
      console.log("update")

      console.log(this.cantidadNUeva,this.claveProd)
      for(var i=0; i<this.cantidadNUeva.length; i++){
        this.consulta1 = `UPDATE tb_hh_inventario SET IN_CANTIDAD = ? WHERE IN_CLAVE = ?`

        db.executeSql(this.consulta1, [this.cantidadNUeva[i],this.claveProd[i]])
        .catch(e => console.log(e));
          console.log(this.cantidadNUeva)
        
      }
        
      })
    // })
     
   }

   showPrompt(){   //ventana emergente para agregar cantidad de piezas
          
    const prompt = this.alertCtrl.create({
         

      title:'Confirmar Venta',
      message:"Desea finalizar venta?",
      buttons:[
        {
          text: 'Cancelar',
          handler: data =>{
            console.log('cancelado');
          }
      },
      {
        
        text:'Guardar',
        handler: data=>{
          this.restar();
          this.imprimirNotaVta();
       
        }
        
      }
      ]
    });
    prompt.present();
  }










//-----
  ionViewDidLoad() {
    console.log("Entro a ticket");
    console.log(this.cliente);
    console.log(this.clavesVta);
    console.log(this.tipoVentaCliente);
    this.obtenerRuta();
    this.listBTDevice(); //Buscar impresora conectada por Bluetooth
  }

  obtenerRuta(){
    this.Storage.get('useremail').then((val) =>{
      this.rutamail = parseInt(val);
    })
  }

  listBTDevice()
  {
    this.printProvider.searchBt().then(datalist=>{
      
      //1. Open printer select modal
      let abc=this.modalCtrl.create(PrinterListModalPage,{data:datalist});
      
      //2. Printer selected, save into this.selectedPrinter
      abc.onDidDismiss(data=>{
        this.selectedPrinter=data;

        /*let xyz=this.alertCtrl.create({
          title: data.name+" selected",
          buttons:['Dismiss']
        });
        xyz.present();*/

      });
      
      //0. Present Modal
      abc.present();

    },err=>{
      console.log("ERROR",err);
      let mno=this.alertCtrl.create({
        title:"ERROR "+err,
        buttons:['Dismiss']
      });
      mno.present();
    })

  }

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
  

  imprimirNotaVta()
  {
    var id=this.selectedPrinter.id;
    if(id==null||id==""||id==undefined)
    {
      //nothing happens, you can put an alert here saying no printer selected
    }
    else
    {
      this.tipoImpresion='[ORIGINAL]';                // id es la direccion de la impresora conectada
      let foo=this.printProvider.ProveedorimpresionNotaVta(id,this.cliente, this.clavesVta,this.tipoVentaCliente, this.reconocimientoVta, this.subtotalVta,this.IVAVta, this.totalFinal,this.KLAcumVta, this.IEPSVta,   this.rutamail, this.tipoImpresion);  

    //reimprimir nota infinita cantidad de veces hasta que seleccione No
    let alert = this.alertCtrl.create({
      title: 'Desea otra impresión de la venta?',
      buttons: [
          {
              text: 'SI',
              handler: () => {
                  alert.dismiss(true);
                this.tipoImpresion='[REIMPRESION]';
                  let foo=this.printProvider.ProveedorimpresionNotaVta(id,this.cliente, this.clavesVta,this.tipoVentaCliente, this.reconocimientoVta, this.subtotalVta,this.IVAVta, this.totalFinal,this.KLAcumVta, this.IEPSVta,   this.rutamail, this.tipoImpresion);  
                  return false;
              }
          }, {
              text: 'No',
              handler: () => {
                  alert.dismiss(false);
                  return false;
              }
          }
      ]
  });

  alert.present();

    }
  }

}//fin1
