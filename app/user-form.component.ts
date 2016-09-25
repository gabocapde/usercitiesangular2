import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';
import { emailValidator, matchingPasswords } from './validators';

@Component({
	selector: 'user-form',
	templateUrl: 'templates/_user-form.component.html',
})
export class UserFormComponent {
    public myForm: FormGroup;
	submitted = false;
	active = true;

	constructor(private _fb: FormBuilder) { } 
	
	ngOnInit() {
		this.initForm();
    }
	
	initForm() {
		this.myForm = this._fb.group({
			email: ['', Validators.compose([Validators.required,  emailValidator])],
			password: ['', Validators.compose([Validators.required,  Validators.minLength(8)])],
			confirmPassword: ['', Validators.compose([Validators.required,  Validators.minLength(8)])]
		}, {validator: matchingPasswords('password', 'confirmPassword')});
	}
	
	onSubmit() {
		this.submitted = true;
	}
	
	cleanForm(){
		this.submitted = false;
		this.initForm();
	}
  
}
