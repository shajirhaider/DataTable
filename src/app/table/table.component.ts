import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() header;
  @Input('redirectPath') redirectTo; 

  constructor(  private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
  }
  goRoute() {
    console.log(this.redirectTo)
    this.router.navigate([this.redirectTo])   
  }
}
