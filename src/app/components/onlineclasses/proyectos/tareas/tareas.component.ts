import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, of, switchMap } from 'rxjs';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
  ref: DynamicDialogRef | undefined;
  tareas: any[] = [];
  tarea: any = {};
  proyectoId: string | null = null;

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private proyectosService: GeneralService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Accede al `proyecto_id` desde los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.proyectoId = params.get('proyecto_id');
      console.log('Proyecto ID:', this.proyectoId);
      if (this.proyectoId) {
        this.proyectosService.getTareas(this.proyectoId).subscribe((response: any) => {
          console.log('Lista de tareas: ', response);
          this.tareas = response.data.data;
        });
      }
    });
  }

  navigateToNuevo(id: number) {
    if (id > 0) {
      this.proyectosService.getOfertaLaboral(id).subscribe((response: any) => {
        this.tarea = response.data;
        // this.ref = this.dialogService.open(RegistraOfertaLaboralComponent, {
        //   width: '60%',
        //   styleClass: 'custom-dialog-header',
        //   data: this.ofertaLaboral
        // });
        // this.ref.onClose.subscribe((dataFromDialog) => {
        //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //   this.router.onSameUrlNavigation = 'reload';
        // });
        console.log(this.tarea)
      });
    } else {
      // this.ref = this.dialogService.open(RegistraOfertaLaboralComponent, {
      //   width: '60%',
      //   styleClass: 'custom-dialog-header',
      //   data: this.ofertaLaboral
      // });

      // this.ref.onClose.subscribe((dataFromDialog) => {
      //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      //   this.router.onSameUrlNavigation = 'reload';
      // })
    }
  }

  verTareas(id: number) { }

  eliminar(id: number) {
    this.proyectosService.eliminarOfertaLaboral(id).pipe(
      switchMap(() => {
        console.log('Oferta laboral eliminada');
        return this.proyectosService.getOfertasLaborales();
      }),
      catchError((error) => {
        console.error('Error eliminando oferta laboral:', error);
        // Manejo del error, puedes retornar un array vacío o un valor alternativo
        return of({ data: [] });
      })
    ).subscribe(
      (response: any) => {
        console.log("Lista de ofertas laborales", response);
        this.tareas = response.data;
      }
    );
  }
}


