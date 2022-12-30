import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { ListFilterPipe } from 'ng-multiselect-dropdown/list-filter.pipe';
import { Observable } from 'rxjs/internal/Observable';
import { NewProject } from 'src/app/shared/models/new-project';
import { TaskForm } from 'src/app/shared/models/task-form';

@Component({
  selector: 'app-timeline-presentation',
  templateUrl: './timeline-presentation.component.html',
  styleUrls: ['./timeline-presentation.component.scss']
})
export class TimelinePresentationComponent implements OnInit, AfterViewInit {
  public diff: number
  public prevTask: any
  public latestTask: any
  public array:any= [];
  public monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

@Input() projectData: Observable<NewProject>
constructor(private renderer: Renderer2,
  @Inject(DOCUMENT) private document: Document) { 
}
counter = Array
@ViewChild('hello', { static: false }) timeline: ElementRef;
ngOnInit(): void {
    this.projectData.subscribe(x => {this.calculate(x.taskList)
    })
    
    // this.diff = Math.ceil(Math.abs(this.latestTask.getTime() - this.prevTask.getTime())/(1000*60*60*24))
    // console.log(this.diff/30)
    // this.getallDates(prevTask, latestTask)
    // this.getallDates() 
    console.log(this.array.length);
    const child = this.document.createElement('div');
    
    this.renderer.appendChild(this.timeline.nativeElement, child);
    
  }
  

  calculate(list: any) {
    const startDateArray = list.map((x: { taskStartDate: any; }) => new Date(x.taskStartDate))
    const maxDate = new Date(Math.max(...startDateArray))
    const minDate = new Date(Math.min(...startDateArray))
    this.diff = Math.ceil(Math.abs(maxDate.getTime() - minDate.getTime())/(1000*60*60*24))
    this.getallDates(maxDate, minDate)
    console.log(maxDate, minDate, this.diff)
    // const minDate = new Date(Math.min.apply(null, list.map(x => x.taskStartDate)))
    // console.log(maxDate, minDate)
  }
  
  ngAfterViewInit() {
    // console.log(this.timeline.nativeElement.innerHTML); 
    // console.log(this.timeline.nativeElement); 
    // const child = this.document.createElement('div');
    // this.renderer.appendChild(this.timeline.nativeElement, child);
    // this.timeline.nativeElement.innerHTML = "DOM updated succesfully!!!";
    
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Inserted at bottom');
 
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.timeline.nativeElement, div);
  }

  getallDates(maxDate:Date, minDate:Date){
    const initMonth = minDate.getMonth()
    const initYear = minDate.getFullYear()
    const lastMonth = maxDate.getMonth()
    const lastYear = maxDate.getFullYear()
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
