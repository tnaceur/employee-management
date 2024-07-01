import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employees-list';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { EmployeeApiService } from '../employee-api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeesListComponent, CommonModule],
  template: `
    <section class="result">
        <app-employees-list
          *ngFor="let employee of employeesList"
          [employee]="employee" >
        </app-employees-list>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  employeesList : any = [];
  employeeService : EmployeeApiService = inject(EmployeeApiService);

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.employeeService.getAll().subscribe((data) => {
      this.employeesList = data;
    });
  }

  constructor() {
  }
}
