import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentForm: FormGroup
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      age:['', Validators.required],
      address: ['', Validators.required],
      phoneNum: ['', [Validators.required, Validators.minLength(11)]],
      date: ['', Validators.required],
      time : ['', Validators.required]
    })
  }

}
