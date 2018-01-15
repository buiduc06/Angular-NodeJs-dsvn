import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Injectable()

export class TestsvService {

  constructor(private http: Http) { }
  fetchData(){
    this.http.get('http://localhost:8000/api/apm').map(
      (Response) => Response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }

}
