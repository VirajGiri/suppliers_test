import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../supplier.service';

import { Supplier } from '../Supplier';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

   term: string;
   supplier: Supplier [] = [];

  constructor(public supService: SupplierService) { }

  ngOnInit(): void {

    this.supService.getSuppliersList().subscribe((data: Supplier[]) => {
       this.supplier = data;
      console.log(this.supplier);
    });
  }

}
