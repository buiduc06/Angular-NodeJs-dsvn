import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  addtv='';
  adden='';

  arrWords=[
    {	id: 1, en: 'action', vn: 'Hanh Dong', Memorized: true },
    {	id: 2, en: 'movie', vn: 'Phim', Memorized: true },
    {	id: 3, en: 'girl', vn: 'con gai', Memorized: true },
    {	id: 4, en: 'sexy', vn: 'Quyen du', Memorized: false },
    {	id: 5, en: 'baby', vn: 'tre em', Memorized: false }
    ];

    addTV(){
      this.arrWords.unshift({
        id: this.arrWords.length + 1,
        en: this.adden,
        vn: this.addtv,
        Memorized : false
     
     });
     this.addtv='';
     this.adden='';
    }

}
