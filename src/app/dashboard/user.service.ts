import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSection, User } from './user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUsers():Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getFormConfig(): FormSection[] {
    return [
      {
        label: 'Personal Information',
        fields: [
          {
            type: 'text',
            label: 'First Name',
            name: 'first_name',
            placeholder: 'Enter your first name',
            validations: { isRequired: true, pattern: '^[A-Za-z\'-]+$' },
          },
          {
            type: 'text',
            label: 'Last Name',
            name: 'last_name',
            placeholder: 'Enter your last name',
            validations: { isRequired: true, pattern: '^[A-Za-z\'-]+$' },
          },
          {
            type: 'date',
            label: 'Date of Birth',
            name: 'dob',
            validations: { isRequired: true },
          },
          {
            type: 'radio',
            label: 'Gender',
            name: 'gender',
            options: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ],
            validations: { isRequired: true },
          },
        ],
      },
      {
        label: 'General Information',
        fields: [
          {
            type: 'checkbox',
            label: 'Interests',
            name: 'interests',
            options: [
              { label: 'Reading', value: 'reading' },
              { label: 'Sports', value: 'sports' },
              { label: 'Cooking', value: 'cooking' },
            ],
          },
          {
            type: 'select',
            label: 'State',
            name: 'state',
            options: [
              { label: 'Karnataka', value: 'karnataka' },
              { label: 'Maharashtra', value: 'maharashtra' },
              { label: 'Kerala', value: 'kerala' },
            ],
            validations: { isRequired: false },
          },
        ],
      },
      {
        label: 'Company Information',
        fields: [
          {
            type: 'select',
            label: 'Skills',
            name: 'skill',
            options: [
              { label: 'Angular', value: 'angular' },
              { label: 'Nodejs', value: 'nodejs' },
              { label: 'Flutter', value: 'flutter' },
            ],
            validations: { isRequired: true },
          },
          {
            type: 'date',
            label: 'Date of Joining',
            name: 'doj',
            validations: { isRequired: true },
          },
        ],
      },
    ];
  }
}
