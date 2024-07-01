import { Component, Input } from '@angular/core';
import { Employee } from '../employees-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="employees">
    <div class="employee-list">
        <div class="employee-summary">
            <p>
              <strong>Name: </strong>
              {{ employee.firstName}} {{ employee.lastName }}
            </p>
            <p><strong>Position: </strong>{{ employee.position }}</p>
            <a class="learn-more" [routerLink]="['details', employee.id]">Learn more</a>
        </div>
    </div>
    </section>
  `,
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  @Input() employee!:Employee;
}
