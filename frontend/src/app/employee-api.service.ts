import { Injectable, OnInit, inject } from "@angular/core";
import { Employee } from "./employees-list";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const apiEndpoint = "http://127.0.0.1:5142/employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeApiService {
  private httpClient: HttpClient = inject(HttpClient);
  data: any = [];
  getAll() {
    return this.httpClient.get(apiEndpoint);
  }

  getById(id: number) {
    return this.httpClient.get(apiEndpoint + "/" + id.toString());
  }

  addEmployee(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    position: string,
    salary: string
  ) {
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
        (response) => alert("Employee added successfully"),
        (error) => {
          if (error.status === 409) alert("Employee already exists");
          else alert("Error adding employee");
        }
      );
  }

  editEmployee(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    position: string,
    salary: string
  ) {
    this.httpClient
      .put(apiEndpoint + "/" + id, {
        id: Number(id),
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        position: position,
        salary: Number(salary),
      })
      .subscribe(
        (response) => alert("Employee edited successfully"),
        (error) => alert("Error editing employee")
      );
  }

  deleteEmployee(id: number) {
    this.httpClient.delete(apiEndpoint + "/" + id).subscribe(
      (response) => alert("Employee deleted successfully"),
      (error) => alert("Error deleting employee")
    );
  }
}
