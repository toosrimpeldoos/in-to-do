import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  Tasks: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetTasks().subscribe((res) => {
      console.log(res);
      this.Tasks = res;
    });
  }

  completeTask(id: any, i: any) {
    console.log(id);

    this.crudService.completeTask(id,{completed: true}).subscribe((res) => {
//      this.Tasks.splice(i, 1);
    });

  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteTask(id).subscribe((res) => {
        this.Tasks.splice(i, 1);
      });
    }
  }
}
