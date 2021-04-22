import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Supplier } from './Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService{


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }




  getSuppliersList() {
    return this.httpClient.get('http://mobilewebapitest-env.eba-nf3miwxn.ap-south-1.elasticbeanstalk.com/api/v1/web_jobcard/supplier_dashboard?workshop_id=4315&search_keywords')
      .pipe(map((data: any) => data.supplier ));
  }


  // not in use
  getSuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>('http://mobilewebapitest-env.eba-nf3miwxn.ap-south-1.elasticbeanstalk.com/api/v1/web_jobcard/supplier_dashboard?workshop_id=4315&search_keywords')
      .pipe(
        //  console.log(this);
      );
  }
}

