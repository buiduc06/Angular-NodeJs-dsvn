import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TimveComponent } from './component/timve/timve.component';
import { ThongtingiaodichComponent } from './component/thongtingiaodich/thongtingiaodich.component';
import { KiemtraveComponent } from './component/kiemtrave/kiemtrave.component';
import { ThongtinhanhtrinhComponent } from './component/thongtinhanhtrinh/thongtinhanhtrinh.component';
import { KhuyenmaiComponent } from './component/khuyenmai/khuyenmai.component';
import { CacquydinhComponent } from './component/cacquydinh/cacquydinh.component';
import { HuongdanComponent } from './component/huongdan/huongdan.component';
import { LienheComponent } from './component/lienhe/lienhe.component';
import { HomeComponent } from './component/home/home.component';
import { IpComponent } from './component/ip/ip.component';



@NgModule({
  declarations: [
    AppComponent,
    TimveComponent,
    ThongtingiaodichComponent,
    KiemtraveComponent,
    ThongtinhanhtrinhComponent,
    KhuyenmaiComponent,
    CacquydinhComponent,
    HuongdanComponent,
    LienheComponent,
    HomeComponent,
    IpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //phần làm router cho web
    RouterModule.forRoot([
      {
        path: '',
        component : TimveComponent
      },{
        path: 'home',
        component : TimveComponent
      },
      {
        path: 'timve',
        component : TimveComponent
      },
      {
        path: 'thongtingiaodich',
        component : ThongtingiaodichComponent
      },
      {
        path: 'kiemtrave',
        component : KiemtraveComponent
      },
      {
        path: 'thongtinhanhtrinh',
        component : ThongtinhanhtrinhComponent
      },
      {
        path: 'khuyenmai',
        component : KhuyenmaiComponent
      },
      {
        path: 'cacquydinh',
        component : CacquydinhComponent
      },
      {
        path: 'huongdan',
        component : HuongdanComponent
      },
      {
        path: 'lienhe',
        component : LienheComponent
      },
      {
        path: 'tudien',
        component : HomeComponent
      }
      ,{
        path: 'ip',
        component : IpComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
