import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';

@Component({
  selector: 'app-timeline-presentation',
  templateUrl: './timeline-presentation.component.html',
  styleUrls: ['./timeline-presentation.component.scss']
})
export class TimelinePresentationComponent implements OnInit {
  public diff: number
  public prevTask: any
  public latestTask: any
  public array:any= [];
  public monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
constructor() { this.prevTask = new Date('1/01/2022')
this.latestTask  = new Date('2/25/2022') 
}
counter = Array
ngOnInit(): void {
    
    this.diff = Math.ceil(Math.abs(this.latestTask.getTime() - this.prevTask.getTime())/(1000*60*60*24))
    console.log(this.diff/30)
    // this.getallDates(prevTask, latestTask)
    this.getallDates() 
    console.log(this.array.length);
    
    
  }

  getallDates(){
    const initMonth = this.prevTask.getMonth()
    const initYear = this.prevTask.getFullYear()
    const lastMonth = this.latestTask.getMonth()
    const lastYear = this.latestTask.getFullYear()
    console.log(initMonth, "initmonth");
    
    
    // let array= [];
    for(let i = initMonth, j=initYear; i <= lastMonth || j < lastYear; i++){
      if(i == 12) {

        j++;
        i = 0
      }
      // console.log(i, " ", )
      this.array.push([this.monthNames[new Date(j, i + 1, 0).getMonth()], new Date(j, i + 1, 0).getDate()])
      console.log(i, " ", j, " last day", new Date(j, i + 1, 0).getDate(), this.monthNames[new Date(j, i + 1, 0).getMonth()] );
      
    }
    // console.log(new Date(this.latestTask.getFullYear(), this.latestTask.getMonth() + 1, 0).getDate())
    // console.log(array.length);
    // return array
    // if() {

    // }
  }
  

}
