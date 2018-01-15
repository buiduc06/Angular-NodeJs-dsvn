import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timve',
  templateUrl: './timve.component.html',
  styleUrls: ['./timve.component.css']
})
export class TimveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 ShowTuoi=['1','2','3','4'];

 arrWords=[
  {	id: 1, en: 'action', vn: 'Hanh Dong', Memorized: true },
  {	id: 2, en: 'movie', vn: 'Phim', Memorized: true },
  {	id: 3, en: 'girl', vn: 'con gai', Memorized: true },
  {	id: 4, en: 'sexy', vn: 'Quyen du', Memorized: false },
  {	id: 5, en: 'baby', vn: 'tre em', Memorized: false }
  ];
  
}
