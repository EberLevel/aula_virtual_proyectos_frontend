import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { GeneralService } from '../../service/general.service';
import { Router } from '@angular/router';
import { RegDocenteComponent } from '../dialog/reg-docente/reg-docente.component';
import { DocenteService } from '../../service/docentes.service';
import { EditDocenteComponent } from '../dialog/edit-docente/edit-docente.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bandeja-docente',
  templateUrl: './bandeja-docente.component.html',
  styleUrls: ['./bandeja-docente.component.scss']
})
export class BandejaDocenteComponent {


  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  public docentes = [];
  loading: boolean = false;
  public idDocente:number = 0;
  ref: DynamicDialogRef | undefined;
  constructor(
    private dialogService: DialogService,
    private maestroService: GeneralService,
    private router: Router,
    private docenteService: DocenteService
  
  ) { }

  ngOnInit() {
    // console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO");
    // this.cargaInicial();
    this.listarDocente();
  }

  listarDocente() {

    this.docenteService.listarDocentes().subscribe(
      (res:any) => {
        this.docentes = res.Datos;
        console.log(res);
      },(error:any)=>{
        console.log(error);
      });

       // Convertir las imágenes a base64
    this.docentes.forEach((item:any) => {
      this.convertImageToBase64(item.foto, (base64: string) => {
        item.fotoBase64 = base64;
      });
    });

    console.log(this.docentes)
  }

  buscarDocente(){
    // this.docenteService.buscarDocentes(this).subscribe((res:any)=>{},(error:any)=>{});
  }

  eliminarDocente(id: number){
      Swal.fire({
        title: "Deseas eliminar el docente?",
        text: "Estos cambios son inreversibles!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          this.docenteService.eliminarDocentes(id).subscribe(
            (res:any)=>{
              console.log(res);
              this.listarDocente();
              Swal.fire({
                title: "Eliminado correctamente!",
                // text: ".",
                icon: "success"
              });
            },(error:any)=>{
              console.log(error);
            });
        }
      });

    console.log(id)
  }
  convertImageToBase64(url: string, callback: (base64: string) => void): void {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      const reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result as string);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

   // Convertir las imágenes a base64
  
  actualizarDocente(datos: any){

    this.ref = this.dialogService.open(EditDocenteComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: {
        "id": datos.id,
        "codigo": datos.codigo,
        "nombres": datos.nombres,
        "usuario": datos.usuario,
        "clave": datos.clave,
        "celular": datos.celular,
        "profesion": datos.profesion,
        "vinculo_laboral": datos.vinculo_laboral,
        "tipo_documento": datos.tipo_documento,
        "doc_identidad": datos.doc_identidad,
        "fecha_nacimiento": datos.fecha_nacimiento,
        "edad": datos.edad,
        "genero": datos.genero,
        "foto": datos.foto,
        "roles": 'seguridad,aula_virtual'
      }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.listarDocente();
    });
  }
  cargaInicial(): void {
   
  }

  navigateToNuevo() {
    this.ref = this.dialogService.open(RegDocenteComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((data: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.listarDocente();
    });
  }

  editarDocente(){
    this.ref = this.dialogService.open(EditDocenteComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    // this.ref.onClose.subscribe((data: any) => {
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //   this.router.onSameUrlNavigation = 'reload';
    // });
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }

  onRowSelect(event: any) {
    
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    
    
  }

}
