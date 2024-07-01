import { Injectable, OnInit, inject } from '@angular/core';
import { Employee } from './employees-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiEndpoint = 'http://127.0.0.1:5142/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  private httpClient: HttpClient = inject(HttpClient);
  data: any = [];
  getAll() {
    return this.httpClient.get(apiEndpoint);
  }
  getById(id: number) {
    return this.httpClient.get(apiEndpoint + '/' + id.toString());
  }
  addEmployee(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    position: string,
    salary: string
  ) {
    console.log('addEmployee', firstName, lastName, email, phoneNumber);
    this.httpClient
      .post(apiEndpoint, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        position: position,
        salary: Number(salary),
      })
      .subscribe(
        (response) => console.log('Employee added successfully', response),
        (error) => console.error('Error adding employee:', error)
      );
  }
  editEmployee(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    position: string
  ) {
    this.httpClient
      .put(apiEndpoint + "/"+ id, {
        id:Number(id),
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        position: position,
      })
      .subscribe(
        (response) => console.log('Employee edited successfully', response),
        (error) => console.error('Error editing employee:', error)
      );
  }
  deleteEmployee(id: number) {
    this.httpClient.delete(apiEndpoint + "/" + id)
    .subscribe(
      (response) => console.log('Employee deleted successfully', response),
      (error) => console.error('Error deleting employee:', error)
    );
  }
}
