import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../service/general.service';
import { catchError, of, tap } from 'rxjs';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-registra-oferta-laboral',
  templateUrl: './registra-oferta-laboral.component.html',
  styleUrls: ['./registra-oferta-laboral.component.scss']
})
export class RegistraOfertaLaboralComponent {

  visible: boolean = false;
  id: number = 0;
  estado: string = '';
  empresa: string = '';
  telefono: string = '';
  nombre_puesto: string = '';
  requisitos:string = '';
  public Editor = ClassicEditor as any;
  @ViewChild('ckeditor', { static: false }) ckeditor!: ElementRef;

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private empresaService: GeneralService,
    public config: DynamicDialogConfig
  ) {

    if (this.config.data) {
      this.id = this.config.data.id;
      this.estado = this.config.data.estado;
      this.empresa = this.config.data.empresa;
      this.telefono = this.config.data.telefono;
      this.nombre_puesto = this.config.data.nombre_puesto;
      this.requisitos = this.config.data.requisitos;
    } else {
      this.id = 0
      this.estado = '';
      this.empresa = '';
      this.telefono = '';
      this.nombre_puesto = '';
      this.requisitos = '';
    }

  }


  Guardaruser() {
    // this.ref.close();
    const ofertaLaboral = {
      id: this.id,
      estado: this.estado,
      empresa: this.empresa,
      telefono: this.telefono,
      nombre_puesto: this.nombre_puesto,
      requisitos: this.requisitos
    }

    if (this.id > 0) {
      this.empresaService.actualizarOfertaLaboral(ofertaLaboral, this.id).pipe(
        tap((response: any) => {
          this.closeModal();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            // Aquí puedes agregar lógica adicional después de cerrar el modal.
          });
        }),
        catchError((error: any) => {
          console.error('Error al guardar la oferta laboral', error);
          return of(error);  // Devuelve un observable para mantener la cadena viva si es necesario.
        })
      ).subscribe();

    } else {
      this.empresaService.guardarOfertaLaboral(ofertaLaboral).pipe(
        tap((response: any) => {
          this.closeModal();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            // Aquí puedes agregar lógica adicional después de cerrar el modal.
          });
        }),
        catchError((error: any) => {
          console.error('Error al guardar la oferta laboral', error);
          return of(error);  // Devuelve un observable para mantener la cadena viva si es necesario.
        })
      ).subscribe();

      Swal.fire({
        title: '¡Éxito!',
        text: 'Los Datos se registraron correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {});
    }
  }

  closeDialog() {
    this.visible = false;
  }


  closeModal() {
    this.ref.close({ register: false });
  }
}
