import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeApiService } from '../employee-api.service';
import { Employee } from '../employees-list';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="employee">
      <div class="employee-card">
          <h2>Employee Information</h2>
          <p><strong>First Name: </strong> <span id="firstName">{{ employee?.firstName }}</span></p>
          <p><strong>Last Name: </strong> <span id="lastName">{{ employee?.lastName }}</span></p>
          <p><strong>Email: </strong> <span id="email">{{ employee?.email }}</span></p>
          <p><strong>Phone Number: </strong> <span id="phoneNumber">{{ employee?.phoneNumber }}</span></p>
          <p><strong>Position: </strong> <span id="position">{{ employee?.position }}</span></p>
          <p><strong>Salary: </strong> <span id="salary">{{ '$' + employee?.salary }}</span></p>
          <div class="button-group">
              <button class="edit-button" [routerLink]="['/edit', employee?.id]">Edit</button>
              <button class="delete-button" (click)="deleteEmployee(employee?.id)">Delete</button>
          </div>
      </div>
    </div>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  employeeService: EmployeeApiService = inject(EmployeeApiService);
  employee: any | undefined;

  ngOnInit(): void {
    this.fetchData();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  fetchData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getById(Number(id)).subscribe((data: any) => {
        this.employee = data;
      });
    }
  }

  constructor() {
  }
}
