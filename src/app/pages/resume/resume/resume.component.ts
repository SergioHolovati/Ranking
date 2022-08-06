import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume/resume.service';
import { Resume } from 'src/app/models/resume.model';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'victories', 'defeats','matches'];
  dataSource!: Resume[];

  constructor(private service : ResumeService) { }



  getResume(){
    this.service.GetResume().subscribe((response) => {
      console.log(response)
      this.dataSource = response;
    })
  }


  ngOnInit(): void {
    this.getResume();
  }
}
