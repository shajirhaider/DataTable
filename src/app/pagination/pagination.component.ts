import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() recordsPerPage: number = 0;  
  rowPerPageList = [1, 2, 3, 40, 50];
  data = [
    { firstName: "Shajir", lastName: "Haider", pNum: "010101", date: "14/02/2020", time: "2:00 PM", age:"3" },
    { firstName: "Shajir", lastName: "Haider", pNum: "010101", date: "14/02/2020", time: "2:00 PM", age:"" },
    { firstName: "Shajir", lastName: "Haider", pNum: "010101", date: "14/02/2020", time: "2:00 PM", age:"5" }
  ]
  
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();  
  
    public pages: number [] = [];  
    activePage:number = 1;  
  
  ngOnInit() {  
      this.recordsPerPage = this.rowPerPageList[0]
      const pageCount = this.getPageCount();  
      this.pages = this.getArrayOfPage(pageCount);  
      this.activePage = 1;  
      this.onPageChange.emit(1);  
    }  
  
    private  getPageCount(): number {  
      let totalPage:number = 0;  
        
      if(this.data.length > 0 && this.recordsPerPage > 0){  
        const pageCount = this.data.length / this.recordsPerPage;  
        const roundedPageCount = Math.floor(pageCount);  
        totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;  
      }  
  
      return totalPage;  
    }  
  
    private getArrayOfPage(pageCount : number) : number [] {  
      let pageArray : number [] = [];  
  
      if(pageCount > 0){  
          for(var i=1 ; i<= pageCount ; i++){  
            pageArray.push(i);  
          }  
      }  
  
      return pageArray;  
    }  
  
    onClickPage(pageNumber:number){  
        if(pageNumber < 1) return;
        if(pageNumber > this.pages.length) return;
        this.activePage = pageNumber;  
        this.onPageChange.emit(this.activePage);  
    }  
}
