import { Component , OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/core/models/deparment';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';

@Component({
  selector: 'app-list-deparments',
  templateUrl: './list-deparments.component.html',
  styleUrls: ['./list-deparments.component.scss']
})
export class ListDeparmentsComponent implements OnInit {


  department: Department[] = []
  public currentPage: number = 1

  constructor(
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private departmentServices: DepartmentService,
    private toastService: ToastrService,
    ){}


  ngOnInit(): void {
    this.getData()

    
    this.generalStateServices.getEvent().subscribe({
      next: () => {
        this.getData()
      }
    })

  }
  
  public getData() {
    this.departmentServices.list().subscribe({
      next: (data) => {
        console.log(data);
        
        this.department = data
      }
    })
  }

  public open() {
    this.dialogServices.openAddEditDeparments()
  }

  public update(item: Department) {
    this.dialogServices.openAddEditDeparments(item)
  }

  public delete(id: number) {
    this.dialogServices.confirmDelete(id).subscribe((data) => {

      if (data) {
        this.departmentServices.delete(id).subscribe(() => {
          this.toastService.success('Eliminado')
          this.generalStateServices.dispachEvent()
        })
      }

    })
  }

}
