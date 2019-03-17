import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  public playerForm: FormGroup;  // Define FormGroup to player's form


  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
  ) { }

  ngOnInit() {
    this.crudApi.GetPlayersList();  // Call GetPlayerssList() before main form is being called
    //this.playerForm();              // Call player form when component is ready
  }

  // Reactive form
  studenForm() {
    this.playerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })  
  }

  // Accessing form control using getters
  get firstName() {
    return this.playerForm.get('firstName');
  }

  get lastName() {
    return this.playerForm.get('lastName');
  }  

  get email() {
    return this.playerForm.get('email');
  }

  get mobileNumber() {
    return this.playerForm.get('mobileNumber');
  }

  // Reset student form's values
  ResetForm() {
    this.playerForm.reset();
  }  
 
  submitStudentData() {
    this.crudApi.AddPlayer(this.playerForm.value); // Submit student data using CRUD API
    //this.toastr.success(this.playerForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}


