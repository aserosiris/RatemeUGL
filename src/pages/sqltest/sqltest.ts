import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SqltestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var SqlServer: any;


 
@IonicPage()
@Component({
  selector: 'page-sqltest',
  templateUrl: 'sqltest.html',
})
export class SqltestPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

    SqlServer.init("172.16.22.8", "SQLSERVER", "sa", "TuLucernita2017", "SistemaComercial", function(event) {
      alert(JSON.stringify(event));
    }, function(error) {
      alert(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SqltestPage');
  }
  test(){
    SqlServer.executeQuery("SELECT * from TB_CLIENTE where CL_CLIENTE=13000", function(event) {
     // alert(JSON.stringify(event));

    var  items: any;
     var result: JSON;
     var allData: any;
     var newString: any;
    
     result = event;
     items = JSON.stringify(result);
     allData = JSON.parse(items)
     newString = allData.replace("[","")
     newString = newString.replace("]","")
     result = JSON.parse(newString);
     console.log(result)

    }, function(error) {
      alert("Error : " + JSON.stringify(error));
    });				
  }


}
