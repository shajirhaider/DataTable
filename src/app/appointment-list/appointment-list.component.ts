import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  path = "appointment"
  data = [
    { firstName: "Shajir", lastName: "Haider", pNum: "010101", date: "14/02/2020", time: "2:00 PM", age:"3" },
    { firstName: "Shajir", lastName: "Haider", pNum: "010101", date: "14/02/2020", time: "2:00 PM", age:"" },
    { firstName: "Shajir", lastName: "Haider", pNum: "010101", date: "14/02/2020", time: "2:00 PM", age:"5" }
  ]
  header = [
    {text:"First name", value:"firstName"},
    {text:"Last name", value:"lastName"},
    {text:"#Phone", value:"pNum"},
    {text:"Date", value:"date"},
    { text: "Time", value: "time" },
    {text: "Age", value:"age"}

  ]

  constructor() { }

  ngOnInit() {
  }

}
