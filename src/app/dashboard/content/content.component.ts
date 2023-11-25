import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  form!:FormGroup;

  constructor(private fb: FormBuilder) {
    this.form=new FormGroup({
      name:new FormControl('sneha'),
      email:new FormControl('')

    })
    // USING FormBuilder
    
    // this.form=this.fb.group({
    //   name:['kk'],
    //   email:['dfghj']
    // })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.get('name')?.valueChanges.pipe(map(data=>{
        console.log(data);
       
      })));
      window.alert("Submitted");
      this.form.reset();
    }
  }

}
