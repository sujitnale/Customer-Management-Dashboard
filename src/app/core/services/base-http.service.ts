import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseHttpService {
  private custInfo = [
    {
      id: 0,
      firstName: 'Rohit',
      lastName: 'Sharma',
      email: 'Rohit@d.com',
      phoneNumber: '456783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 1,
      firstName: 'Virat',
      lastName: 'Kohali',
      email: 'Virat@d.com',
      phoneNumber: '734283',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 2,
      firstName: 'Shubhaman',
      lastName: 'Gill',
      email: 'Shubhaman@d.com',
      phoneNumber: '236783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 3,
      firstName: 'Shreyas',
      lastName: 'Iyer',
      email: 'Shreyas@d.com',
      phoneNumber: '106783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 4,
      firstName: 'Hardik',
      lastName: 'Pandya',
      email: 'Hardik@d.com',
      phoneNumber: '456734',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 5,
      firstName: 'Lokesh',
      lastName: 'Rahul',
      email: 'Lokesh@d.com',
      phoneNumber: '409083',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 6,
      firstName: 'Ravindra',
      lastName: 'Jadeja',
      email: 'Ravindra@d.com',
      phoneNumber: '455083',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 7,
      firstName: 'Neeraj',
      lastName: 'Chopra',
      email: 'Neeraj@d.com',
      phoneNumber: '045783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 8,
      firstName: 'Jaspreet',
      lastName: 'Bumrah',
      email: 'Jaspreet@d.com',
      phoneNumber: '345783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 9,
      firstName: 'Mohhamad',
      lastName: 'Shami',
      email: 'Mohhamad@d.com',
      phoneNumber: '555483',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 10,
      firstName: 'Sriraj',
      lastName: 'Mohhamad',
      email: 'Sriraj@d.com',
      phoneNumber: '567883',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 11,
      firstName: 'Kuldeep',
      lastName: 'Yadav',
      email: 'Kuldeep@d.com',
      phoneNumber: '454453',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 12,
      firstName: 'Suryakumar',
      lastName: 'Yadav',
      email: 'Suryakumar@d.com',
      phoneNumber: '667783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 13,
      firstName: 'Sindhu',
      lastName: 'PV',
      email: 'Sindhu@d.com',
      phoneNumber: '999783',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 14,
      firstName: 'Saina',
      lastName: 'Nehwal',
      email: 'Saina@d.com',
      phoneNumber: '400980',
      edit: "Edit",
      delete: "Delete"
    },
    {
      id: 15,
      firstName: 'Rohan',
      lastName: 'Bopanna',
      email: 'Rohan@d.com',
      phoneNumber: '556783',
      edit: "Edit",
      delete: "Delete"
    }
  
  ];
  
  basePath: string = "../../../dummyData/customer.ts";
  constructor() { }

    getcustomerDetails(): Observable<any> {
      return of(this.custInfo);
    }

    setNewCustomerDetails(form: any, id?: number){
      let newCustomer = form.value;
      if(id){
      this.custInfo.map(x => {
          if(x.id == id){
            x.firstName = newCustomer.firstName;
            x.lastName = newCustomer.lastName;
            x.email = newCustomer.email;
            x.phoneNumber = newCustomer.phoneNumber;
          }
          });
      }
      else{
        newCustomer.id = this.custInfo.length;
        newCustomer.edit = "Edit";
        newCustomer.delete = "Delete";
        this.custInfo.push(newCustomer);
      }
     return of(this.custInfo);
    }

    getNewCustomerDetails(id: number){
      const filtered =  this.custInfo.filter(x => {
       return(x.id == id);
       });
       return of(filtered);
    }

 
    // public getByID(id: number): Observable<any> {
    //   return this.httpClient.get(`${SERVER_API_URL}/${this.basePath}/${id}`);
    // }

    // public getExternal(url): Observable<any> {
    //   return this.httpClient.get(url);
    // }
  }
