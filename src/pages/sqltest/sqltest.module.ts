import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqltestPage } from './sqltest';

@NgModule({
  declarations: [
    SqltestPage,
  ],
  imports: [
    IonicPageModule.forChild(SqltestPage),
  ],
})
export class SqltestPageModule {}
