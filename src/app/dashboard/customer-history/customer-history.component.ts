import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BaseHttpService } from 'src/app/core/services/base-http.service';

@Component({
  selector: 'customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {
  getFormStackHistory: any;
  searchParam: any;
  custInfo: any[] = [];
  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'edit',
    'delete'
  ];

  
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private baseHttpService : BaseHttpService
  ) {}

  ngOnInit() {
     this.baseHttpService.getcustomerDetails().subscribe(res => {
      this.custInfo = res;
      this.dataSource = new MatTableDataSource(this.custInfo);
     });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getSearchValue(searchParam: string) {
    this.searchParam = searchParam;
  }

  search() {
    const searchRequest = {
      searchParam: this.searchParam,
    };
    if (searchRequest.searchParam != '' ) {
      //this.data.authorizationVerification(searchRequest).subscribe(res => {
      //  this.authVerifiedSearch = res.json();
      const filtered =  this.custInfo.filter(x => {
       return (x.firstName).toLowerCase().includes(searchRequest.searchParam) ||
        (x.lastName).toLowerCase().includes(searchRequest.searchParam) ||
        (x.email).toLowerCase().includes(searchRequest.searchParam) ||
        (x.phoneNumber).toLowerCase().includes(searchRequest.searchParam)
      });
        this.dataSource = new MatTableDataSource(filtered);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      //});
    } else {
      this.dataSource = new MatTableDataSource(this.custInfo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  createCustomer() {
    this.router.navigate(['/customer-create']); 
  }

  editCustomer(id: number) {
    this.router.navigate(['/customer-create', id]);
  }
  deleteItem(id: number){
    this.custInfo.filter((x, index) => {
      x.id === id ? this.custInfo.splice(index, 1) : this.custInfo;
      this.dataSource = new MatTableDataSource(this.custInfo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
