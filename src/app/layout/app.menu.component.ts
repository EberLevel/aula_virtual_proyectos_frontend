import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { OptionsDto } from '../seguridad/options-dto';
import { SeguridadService } from '../seguridad/service/seguridad.service';
import { Router } from '@angular/router';
import { PL_TOKEN, VAR_URL } from '../components/onlineclasses/utils/Utils';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    optionsDtos: OptionsDto[] = [];
    model: any[] = [];
    menuOpciones: any[] = [];
    authUser: any;
    elementosOcultos: any[] = [];
    lstOpciones: any[] = [];

    constructor(
        public seguridadService: SeguridadService,
        private router: Router
    ) { }
    ngOnInit() {
        this.model = [
            {
                label: 'Instituciones',
                icon: 'pi pi-building',
                items: [
                    
                    {
                        label: 'Registro',
                        icon: 'pi pi-file-edit',
                        routerLink: ['/pl-virtual/registro-instituciones']
                    },
                    {
                        label: 'Bandeja',
                        icon: 'pi pi-bars',
                        routerLink: ['/pl-virtual/bandeja-instituciones']
                    },
                    {
                        label: 'Carreras técnicas',
                        icon: 'pi pi-book',
                        routerLink: ['/pl-virtual/carrera-tecnica']
                    },
                    {
                        label: 'Ciclos',
                        icon: 'pi pi-palette',
                        routerLink: ['/pl-virtual/ciclos-academicos']
                    },          
                    
                    {
                        label: 'Áreas de Formación',
                        icon: 'pi pi-briefcase',
                        routerLink: ['/pl-virtual/area-formacion']
                    },
                    {
                        label: 'Unidades Formativas',
                        icon: 'pi pi-credit-card',
                        routerLink: ['/pl-virtual/unidades-formativas']
                    },
                    {
                        label: 'Unidades Didácticas',
                        icon: 'pi pi-envelope',
                        routerLink: ['/pl-virtual/unidades-didacticas']
                    },
                    {
                        label: 'Estado de Cursos',
                        icon: 'pi pi-id-card',
                        routerLink: ['/']
                    },
                    {
                        label: 'Tipo de Materia',
                        icon: 'pi pi-inbox',
                        routerLink: ['/']
                    },
                    {
                        label: 'Configuraciones',
                        icon: 'pi pi-wrench',
                        routerLink: ['/pl-virtual/configuraciones']
                    },
                    
                ]
            },
            {
                label: 'Alumno',
                icon: 'pi pi-users',
                items: [
                    {
                        label: 'Bandeja',
                        icon: 'pi pi-bars',
                        routerLink: ['/pl-virtual/bandeja-alumno']
                        
                    },
                    {
                        label: 'Registrar',
                        icon: 'pi pi-user-edit',
                        routerLink: ['/pl-virtual/registro-alumno']
                    },
                    {
                        label: 'Reuniones',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar']
                    },
                    
                    {
                        label: 'Cursos',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/apps/files']
                    },
                    {
                        label: 'Foros',
                        icon: 'pi pi-sitemap',
                        routerLink: ['/apps/kanban']
                    },
                    
                    {
                        label: 'Calificaiones',
                        icon: 'pi pi-id-card',
                        routerLink: ['/apps/tasklist']
                    }
                ]
            },
            
            {
                label: 'Docente',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Datos personales',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: ['/']
                        
                    },
                    {
                        label: 'Capacitaciones',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Cursos',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Curso 1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Curso 2',
                                        icon: 'pi pi-fw pi-align-left',
                                    }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
           
        ];
    }




    private configuracionInicial(): void {
        if (window.location.href.includes(VAR_URL) && (localStorage.getItem(PL_TOKEN) === 'invalid' || localStorage.getItem(PL_TOKEN))) {
            let loadUser = decodeURIComponent(window.location.href.split('?')[1]);
            this.seguridadService.LoadUser(loadUser)
                .subscribe({
                    next: (modelResponse: any) => {
                        console.log('modelResponse', modelResponse);
                        this.lstOpciones.push(modelResponse.data.options);
                        localStorage.setItem(PL_TOKEN, loadUser);
                        localStorage.setItem('consejo-idPersona', modelResponse.data.idPersona);
                        localStorage.setItem('consejo-correo', modelResponse.data.correo);
                        localStorage.setItem('consejo-name', modelResponse.data.name);
                        localStorage.setItem('consejo-username', modelResponse.data.username);
                        localStorage.setItem('consejo-perfil', modelResponse.data.perfil);
                        localStorage.setItem('consejo-opciones', JSON.stringify(modelResponse.data.options));
                    },
                    error: (errorResponse: any) => {
                        console.log('LoadUser:observable subscribe error', errorResponse);

                    },
                    complete: () => {
                        this.router.navigate(['/consejo-directivo']);
                       // console.log("this.LoadUser complete");
                    }
                })
        }
    }
}
