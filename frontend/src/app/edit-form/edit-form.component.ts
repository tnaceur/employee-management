import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeApiService } from '../employee-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="firstName">First Name</label>
      <input type="text" id="first-name" formControlName="firstName">
      
      <label for="lastName">Last Name</label>
      <input type="text" id="last-name" formControlName="lastName">
      
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      
      <label for="phoneNumber">Phone Number</label>
      <input type="tel" id="phone-number" formControlName="phoneNumber">
      
      <label for="position">Position</label>
      <input type="text" id="position" formControlName="position">
      
      <label for="salary">Salary</label>
      <input type="number" id="salary" formControlName="salary">
      
      <button type="submit" class="primary">Submit</button>
    </form>
  `,
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  employeeId = this.route.snapshot.paramMap.get('id');
  employeeService: EmployeeApiService = inject(EmployeeApiService);
  applyForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      position: new FormControl(''),
      salary: new FormControl('')
    }
  );
  submitApplication() {
    this.employeeService.editEmployee(
      this.employeeId?.toString() ?? '',
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.phoneNumber ?? '',
      this.applyForm.value.position ?? '',
    );
  };
}
