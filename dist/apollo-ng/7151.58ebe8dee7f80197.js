"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[7151],{7151:(j,x,l)=>{l.r(x),l.d(x,{BandejaAlumnoModule:()=>ye});var o=l(6814),s=l(6223),b=l(8007),I=l(2538),v=l(5219),d=l(3519),_=l.n(d),e=l(8926),f=l(5118),A=l(4067),y=l(3999),Z=l(9862),H=l(5516);let J=(()=>{class i{constructor(t,n,a){this.http=t,this.httpClientFormData=n,this.handler=a,this.baseUrl=`${H.N.API_BASE}`,this.urlparametro=`${H.N.API_BASE}`,this.httpOptions={headers:new Z.WM({"Content-Type":"application/json"})},this.httpClientFormData=new Z.eN(this.handler)}saveAlumno(t){return this.http.post(`${this.baseUrl}alumnos`,t)}getAlumnos(t){return this.http.get(`${this.baseUrl}alumnos/${t}`)}getLoggedAlumno(t,n){return this.http.get(`${this.baseUrl}alumnos/logged/${t}/${n}`)}deleteAlumno(t){return this.http.delete(`${this.baseUrl}alumnos/${t.id}/${t.domain_id}`)}editAlumno(t,n){return this.http.put(`${this.baseUrl}alumnos/${n.id}/${n.domain_id}`,t)}showAlumno(t){return this.http.get(`${this.baseUrl}alumnos/${t.id}/${t.domain_id}`)}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(Z.eN),e.LFG(Z.eN),e.LFG(Z.jN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var q=l(4474),D=l(8672),N=l(375),T=l(6760),w=l(707),F=l(3714),$=l(3965),Y=l(1230),L=l(4104),G=l(3722);function p(i,g){1&i&&(e.TgZ(0,"span",2),e._uU(1,"Registrar Alumno"),e.qZA())}function C(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function r(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function m(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function u(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function S(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function z(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function X(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function ee(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function te(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function ne(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Formato inv\xe1lido *"),e.qZA())}function oe(i,g){1&i&&(e.TgZ(0,"small",42),e._uU(1,"Campo obligatorio *"),e.qZA())}function ie(i,g){1&i&&e._UZ(0,"ngx-spinner",43)}function le(i,g){if(1&i){const t=e.EpF();e.TgZ(0,"form",3),e.NdJ("ngSubmit",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.saveAlumno())}),e.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),e._UZ(5,"i",8)(6,"input",9),e.TgZ(7,"label",10),e._uU(8,"C\xf3digo de Estudiante"),e.qZA()(),e.YNc(9,C,2,0,"small",11),e.qZA(),e.TgZ(10,"div",6)(11,"span",12),e._UZ(12,"p-dropdown",13),e.TgZ(13,"label",14),e._uU(14,"Tipo de documento de identidad"),e.qZA(),e.YNc(15,r,2,0,"small",11),e.qZA()()()(),e.TgZ(16,"div",4)(17,"div",5)(18,"div",6)(19,"span",7),e._UZ(20,"i",8)(21,"input",15),e.TgZ(22,"label",16),e._uU(23,"Numero de Documento"),e.qZA()(),e.YNc(24,m,2,0,"small",11),e.qZA(),e.TgZ(25,"div",6)(26,"span",7),e._UZ(27,"i",8)(28,"input",17),e.TgZ(29,"label",18),e._uU(30,"Nombres"),e.qZA()(),e.YNc(31,u,2,0,"small",11),e.qZA(),e.TgZ(32,"div",6)(33,"span",7),e._UZ(34,"i",8)(35,"input",19),e.TgZ(36,"label",20),e._uU(37,"Apellidos"),e.qZA()(),e.YNc(38,S,2,0,"small",11),e.qZA(),e.TgZ(39,"div",6)(40,"span",7),e._UZ(41,"i",8)(42,"input",21),e.TgZ(43,"label",22),e._uU(44,"Correo"),e.qZA()(),e.YNc(45,z,2,0,"small",11),e.qZA(),e.TgZ(46,"div",6)(47,"span",7),e._UZ(48,"i",8)(49,"input",23),e.TgZ(50,"label",24),e._uU(51,"Clave"),e.qZA()(),e.YNc(52,X,2,0,"small",11),e.qZA()()(),e.TgZ(53,"div",25)(54,"div",5)(55,"div",6)(56,"span",7),e._UZ(57,"i",8)(58,"input",26),e.TgZ(59,"label",27),e._uU(60,"Direccion"),e.qZA()(),e.YNc(61,ee,2,0,"small",11),e.qZA(),e.TgZ(62,"div",6)(63,"span",7),e._UZ(64,"i",8)(65,"input",28),e.TgZ(66,"label",29),e._uU(67,"Nro de Celular"),e.qZA()(),e.YNc(68,te,2,0,"small",11),e.YNc(69,ne,2,0,"small",11),e.qZA()()(),e.TgZ(70,"div",25)(71,"div",5)(72,"div",6)(73,"span",12),e._UZ(74,"p-dropdown",30),e.TgZ(75,"label",31),e._uU(76,"Carrera Profesional"),e.qZA()()(),e.TgZ(77,"div",6)(78,"span",12),e._UZ(79,"p-dropdown",32),e.TgZ(80,"label",33),e._uU(81,"Ciclos acad\xe9micos"),e.qZA()()()()(),e.TgZ(82,"div",25)(83,"div",5)(84,"div",6)(85,"span",12)(86,"p-calendar",34),e.NdJ("onSelect",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.capturarFecha(a))}),e.qZA(),e.TgZ(87,"label",35),e._uU(88,"Fecha de nacimiento"),e.qZA()(),e.YNc(89,oe,2,0,"small",11),e.qZA()()(),e.TgZ(90,"div",4)(91,"div",5)(92,"div",6),e._UZ(93,"p-toast"),e.TgZ(94,"p-fileUpload",36),e.NdJ("onUpload",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onUpload(a))})("onSelect",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onPerfilSelect(a))}),e.qZA()(),e.TgZ(95,"div",6),e._UZ(96,"p-toast"),e.TgZ(97,"p-fileUpload",37),e.NdJ("onUpload",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onUpload(a))})("onSelect",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onCarnetSelect(a))}),e.qZA()()()(),e.TgZ(98,"div",38),e._UZ(99,"button",39),e.TgZ(100,"button",40),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.closeModal())}),e.qZA()()(),e.YNc(101,ie,1,0,"ngx-spinner",41)}if(2&i){const t=e.oxw();let n,a,c,h,U,E,M,O,R,B,P;e.Q6J("formGroup",t.alumnoForm),e.xp6(9),e.Q6J("ngIf",(null==(n=t.alumnoForm.get("codigo"))?null:n.invalid)&&(null==(n=t.alumnoForm.get("codigo"))?null:n.touched)),e.xp6(3),e.Q6J("autoDisplayFirst",!1)("options",t.tipodocu),e.xp6(3),e.Q6J("ngIf",(null==(a=t.alumnoForm.get("tipoDocumento"))?null:a.invalid)&&(null==(a=t.alumnoForm.get("tipoDocumento"))?null:a.touched)),e.xp6(9),e.Q6J("ngIf",(null==(c=t.alumnoForm.get("numeroDocumento"))?null:c.invalid)&&(null==(c=t.alumnoForm.get("numeroDocumento"))?null:c.touched)),e.xp6(7),e.Q6J("ngIf",(null==(h=t.alumnoForm.get("nombres"))?null:h.invalid)&&(null==(h=t.alumnoForm.get("nombres"))?null:h.touched)),e.xp6(7),e.Q6J("ngIf",(null==(U=t.alumnoForm.get("apellidos"))?null:U.invalid)&&(null==(U=t.alumnoForm.get("apellidos"))?null:U.touched)),e.xp6(7),e.Q6J("ngIf",(null==(E=t.alumnoForm.get("email"))?null:E.invalid)&&(null==(E=t.alumnoForm.get("email"))?null:E.touched)),e.xp6(7),e.Q6J("ngIf",(null==(M=t.alumnoForm.get("contrase\xf1a"))?null:M.invalid)&&(null==(M=t.alumnoForm.get("contrase\xf1a"))?null:M.touched)),e.xp6(9),e.Q6J("ngIf",(null==(O=t.alumnoForm.get("direccion"))?null:O.invalid)&&(null==(O=t.alumnoForm.get("direccion"))?null:O.touched)),e.xp6(7),e.Q6J("ngIf",(null==(R=t.alumnoForm.get("nroCelular"))?null:R.invalid)&&(null==(R=t.alumnoForm.get("nroCelular"))?null:R.touched)),e.xp6(1),e.Q6J("ngIf",(null==(B=t.alumnoForm.get("nroCelular"))?null:B.hasError("pattern"))&&(null==(B=t.alumnoForm.get("nroCelular"))?null:B.touched)),e.xp6(5),e.Q6J("options",t.carrerasList),e.xp6(5),e.Q6J("options",t.ciclosList),e.xp6(7),e.Q6J("showTime",!1)("showSeconds",!1),e.xp6(3),e.Q6J("ngIf",(null==(P=t.alumnoForm.get("fechaNacimiento"))?null:P.invalid)&&(null==(P=t.alumnoForm.get("fechaNacimiento"))?null:P.touched)),e.xp6(12),e.Q6J("ngIf",t.loading)}}let Q=(()=>{class i{constructor(t,n,a,c,h,U,E,M,O,R,B,P){this.router=t,this.ref=n,this.cdr=a,this.config=c,this.parametroService=h,this.translate=U,this.messageService=E,this.alumnoService=M,this.commonService=O,this.fb=R,this.spinner=B,this.helpersService=P,this.carrerasList=[],this.ciclosList=[],this.fechanacimiento=new Date,this.calendarOptions={initialView:"dayGridMonth",locale:I.Z},this.loading=!1,this.domain_id=1,this.alumnoForm=this.fb.group({codigo:["",s.kI.required],tipoDocumento:["",s.kI.required],numeroDocumento:["",s.kI.required],nombres:["",s.kI.required],apellidos:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],contrase\u00f1a:["",s.kI.required],nroCelular:["",[s.kI.required,s.kI.pattern(/^[0-9]{9}$/)]],carreraId:["",s.kI.required],cicloId:["",s.kI.required],direccion:[""],fechaNacimiento:[this.fechanacimiento,s.kI.required],fotoPerfil:[null],fotoCarnet:[null]}),this.domain_id=this.helpersService.getDominioId()}onGlobalFilter(t,n){t.filterGlobal(n.target.value,"contains")}ngOnInit(){this.tipodocu=[{name:"DNI",value:1,code:"NY"},{name:"PASAPORTE",value:2,code:"RM"}],this.translate?this.translateChange("es"):console.error("TranslateService is not initialized."),this.config.data&&(this.alumno=this.config.data.alumno,this.alumno&&this.alumnoForm.patchValue({codigo:this.alumno.codigo,tipoDocumento:1,numeroDocumento:this.alumno.dni,nombres:this.alumno.nombres,apellidos:this.alumno.apellidos,email:this.alumno.email,nroCelular:this.alumno.celular,carreraId:this.alumno.carrera_id,cicloId:this.alumno.ciclo_id,contrase\u00f1a:this.alumno.contrase\u00f1a,direccion:this.alumno.direccion,fechaNacimiento:new Date(this.alumno.fecha_nacimiento),fotoPerfil:this.alumno.foto_perfil,fotoCarnet:this.alumno.foto_carnet})),this.getCarrerasDropdown(),this.getCiclosDropdown()}getAge(t){const n=new Date,a=new Date(t);let c=n.getFullYear()-a.getFullYear();const h=n.getMonth()-a.getMonth();return(h<0||0===h&&n.getDate()<a.getDate())&&c--,c}onCarnetSelect(t){this.alumnoForm.patchValue({fotoCarnet:t.files[0]})}onPerfilSelect(t){this.alumnoForm.patchValue({fotoPerfil:t.files[0]})}getCarrerasDropdown(){this.commonService.getCarrerasDropdown(this.domain_id).subscribe(t=>{console.log("Carreras",t),this.carrerasList=t.map(n=>({name:n.nombres,value:n.id}))},t=>{console.error("Error obteniendo carreras",t)})}getCiclosDropdown(){this.commonService.getCiclosDropdown(this.domain_id).subscribe(t=>{console.log("ciclos",t),this.ciclosList=t.map(n=>({name:n.nombre,value:n.id})),console.log("Ciclos",t)},t=>{console.error("Error obteniendo ciclos",t)})}cambiarIdioma(){this.translateService.use("es")}translateChange(t){this.translate?this.translate.use(t):console.error("TranslateService is not initialized.")}onUpload(t){this.messageService.add({severity:"info",summary:"Success",detail:"Archivo cargado correctamente"})}saveAlumno(){if(this.alumnoForm.valid){const t=new FormData;if(t.append("codigo",this.alumnoForm.get("codigo")?.value),t.append("tipoDocumento",this.alumnoForm.get("tipoDocumento")?.value),t.append("numeroDocumento",this.alumnoForm.get("numeroDocumento")?.value),t.append("nombres",this.alumnoForm.get("nombres")?.value),t.append("apellidos",this.alumnoForm.get("apellidos")?.value),t.append("nroCelular",this.alumnoForm.get("nroCelular")?.value),t.append("carreraId",this.alumnoForm.get("carreraId")?.value),t.append("cicloId",this.alumnoForm.get("cicloId")?.value),t.append("email",this.alumnoForm.get("email")?.value),t.append("direccion",this.alumnoForm.get("direccion")?.value),this.alumnoForm.get("fotoCarnet")?.value&&t.append("fotoCarnet",this.alumnoForm.get("fotoCarnet")?.value),this.alumnoForm.get("fotoPerfil")?.value&&t.append("fotoPerfil",this.alumnoForm.get("fotoPerfil")?.value),this.alumno){t.append("id",this.alumno.id),t.append("domain_id",this.domain_id.toString());const n=this.alumnoForm.get("fechaNacimiento")?.value;if(n instanceof Date){const a=n.toISOString().split("T")[0];t.append("fechaNacimiento",a)}else console.error("Fecha de nacimiento no es una instancia de Date")}else t.append("domain_id",this.domain_id.toString());this.loading=!0,this.spinner.show(),this.alumnoService.saveAlumno(t).subscribe(n=>{this.loading=!1,this.spinner.hide(),this.ref.close({register:!0}),_().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},n=>{this.loading=!1,this.spinner.hide(),this.helpersService.showErrorMessage(n.error.message)})}else console.error("Formulario inv\xe1lido")}capturarFecha(t){console.log("Fecha",t);let n=new Date(t),a="";n instanceof Date&&(a=n.toISOString().split("T")[0]),console.log("Fecha",a),this.alumnoForm.patchValue({fechaNacimiento:n})}closeModal(){this.ref.close({register:!1})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(b.F0),e.Y36(f.E7),e.Y36(e.sBO),e.Y36(f.S),e.Y36(A.m),e.Y36(y.sK),e.Y36(v.ez),e.Y36(J),e.Y36(q.v),e.Y36(s.qu),e.Y36(D.t2),e.Y36(N.$))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-reg-alumno"]],features:[e._Bn([v.ez])],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-6"],[1,"p-float-label","p-input-icon-left"],[1,"pi","pi-user-edit"],["type","text","id","codigo","pInputText","","formControlName","codigo"],["for","codigo"],["style","color: brown;",4,"ngIf"],[1,"p-float-label"],["inputId","tipoDocumento","formControlName","tipoDocumento","optionLabel","name","optionValue","value",3,"autoDisplayFirst","options"],["for","tipoDocumento"],["type","text","id","numeroDocumento","pInputText","","formControlName","numeroDocumento"],["for","numeroDocumento"],["type","text","id","nombres","pInputText","","formControlName","nombres"],["for","nombres"],["type","text","id","apellidos","pInputText","","formControlName","apellidos"],["for","apellidos"],["type","text","id","email","pInputText","","formControlName","email"],["for","email"],["type","text","id","contrase\xf1a","pInputText","","formControlName","contrase\xf1a"],["for","contrase\xf1a"],[1,"row"],["type","text","id","direccion","pInputText","","formControlName","direccion"],["for","direccion"],["type","text","id","nroCelular","pInputText","","formControlName","nroCelular"],["for","nroCelular"],["inputId","carreraId","formControlName","carreraId","optionLabel","name","optionValue","value","placeholder","Selecciona una carrera",3,"options"],["for","carreraId"],["inputId","cicloId","formControlName","cicloId","optionLabel","name","optionValue","value","placeholder","Selecciona un ciclo",3,"options"],["for","cicloId"],["inputId","fechaNacimiento","formControlName","fechaNacimiento","dateFormat","dd-mm-yy",3,"showTime","showSeconds","onSelect"],["for","fechaNacimiento"],["mode","basic","chooseLabel","Adjunte foto de Perfil","chooseIcon","pi pi-upload","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*",3,"onUpload","onSelect"],["mode","basic","chooseLabel","Adjunte foto tama\xf1o carnet","chooseIcon","pi pi-upload","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*",3,"onUpload","onSelect"],[1,"row","mb-5","text-right"],["pButton","","label","Guardar","icon","pi pi-plus","id","btnGuardar","type","submit",1,"p-button-success","mr-2"],["pButton","","label","Cancelar","icon","pi pi-times","id","btnCancelar",1,"p-button-danger",3,"click"],["bdColor","rgba(0,0,0,0.5)","size","large","color","#fff","type","ball-spin",4,"ngIf"],[2,"color","brown"],["bdColor","rgba(0,0,0,0.5)","size","large","color","#fff","type","ball-spin"]],template:function(n,a){1&n&&(e.TgZ(0,"p-panel"),e.YNc(1,p,2,0,"ng-template",0),e.YNc(2,le,102,19,"ng-template",1),e.qZA())},dependencies:[o.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,T.f,w.Hq,v.jx,F.o,$.Lt,Y.s,L.FN,G.p,D.Ro]})}return i})();var K=l(9552);const ae=["filter"],re=["dt1"];function se(i,g){1&i&&(e.TgZ(0,"span",2),e._uU(1,"Bandeja de Alumno"),e.qZA())}function ce(i,g){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),e.NdJ("input",function(a){e.CHM(t),e.oxw();const c=e.MAs(4),h=e.oxw();return e.KtG(h.onGlobalFilter(c,a))}),e.qZA()()(),e.TgZ(5,"div",17)(6,"button",18),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.navigateToNuevo())}),e.qZA()()()}}function pe(i,g){1&i&&(e.TgZ(0,"tr")(1,"th",19)(2,"div",20),e._uU(3," Nombres de Alumno "),e.qZA()(),e.TgZ(4,"th",19)(5,"div",20),e._uU(6," Instituci\xf3n "),e.qZA()(),e.TgZ(7,"th",19)(8,"div",20),e._uU(9," Carrera T\xe9cnica "),e.qZA()(),e.TgZ(10,"th",19)(11,"div",20),e._uU(12," Siglo "),e.qZA()(),e.TgZ(13,"th",19)(14,"div",20),e._uU(15," Acciones "),e.qZA()()())}function me(i,g){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",20)(11,"button",21),e.NdJ("click",function(){const c=e.CHM(t).$implicit,h=e.oxw(2);return e.KtG(h.navigateToEditar(c))}),e.qZA(),e.TgZ(12,"button",22),e.NdJ("click",function(){const c=e.CHM(t).$implicit,h=e.oxw(2);return e.KtG(h.eliminarAlumno(c))}),e.qZA()()()()}if(2&i){const t=g.$implicit;e.xp6(2),e.AsE("",t.nombres," ",t.apellidos,""),e.xp6(2),e.Oqu(t.institucion),e.xp6(2),e.Oqu(t.carrera_nombre),e.xp6(2),e.Oqu(t.ciclo_nombre)}}function ue(i,g){1&i&&(e.TgZ(0,"tr")(1,"td",23),e._uU(2,"No se encontraron registros"),e.qZA()())}function de(i,g){1&i&&(e.TgZ(0,"tr")(1,"td",23),e._uU(2,"Cargando registros. Por favor espere."),e.qZA()())}const ge=function(){return["nombres","institucion","carrera_nombre","ciclo_nombre"]};function he(i,g){if(1&i&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),e.YNc(5,ce,7,0,"ng-template",8),e.YNc(6,pe,16,0,"ng-template",0),e.YNc(7,me,13,5,"ng-template",9),e.YNc(8,ue,3,0,"ng-template",10),e.YNc(9,de,3,0,"ng-template",11),e.qZA()()()()),2&i){const t=e.oxw();e.xp6(3),e.Q6J("value",t.instituciones)("rows",10)("loading",t.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",e.DdM(6,ge))}}let fe=(()=>{class i{constructor(t,n,a,c,h){this.dialogService=t,this.maestroService=n,this.alumnoService=a,this.helpersService=c,this.router=h,this.instituciones=[],this.loading=!1,this.domain_id=1}ngOnInit(){this.domain_id=this.helpersService.getDominioId(),this.cargaInicial()}cargaInicial(){const t=12===this.helpersService.getRolId();if(this.loading=!0,t){const n=this.helpersService.getAlumnoId();n&&this.alumnoService.getLoggedAlumno(n,this.domain_id).subscribe(a=>{this.instituciones=[a],this.loading=!1},a=>{this.loading=!1,_().fire({title:"Error",text:"Error al cargar los datos del alumno",icon:"error"})})}else this.alumnoService.getAlumnos(this.domain_id).subscribe(n=>{this.instituciones=n,this.loading=!1},n=>{this.loading=!1})}eliminarAlumno(t){_().fire({title:"Desea eliminar el alumno?",text:"No podr\xe1 revertir esta acci\xf3n",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed",cancelButtonText:"No"}).then(n=>{n.isConfirmed&&this.alumnoService.deleteAlumno({domain_id:t.domain_id??1,id:t.id}).subscribe(c=>{_().fire({title:"\xa1\xc9xito!",text:"eliminado correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{this.cargaInicial()},h=>{this.loading=!1,_().fire({title:"\xa1Error!",text:"Error al eliminar",icon:"error",confirmButtonText:"Aceptar"})})})})}navigateToEditar(t){this.alumnoService.showAlumno({domain_id:t.domain_id??1,id:t.id}).subscribe(a=>{this.ref=this.dialogService.open(Q,{data:{alumno:a},width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(c=>{console.log(c),c&&c.register&&(console.log("Organo-colegaido-sect"),this.cargaInicial()),this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})},a=>{this.loading=!1})}navigateToNuevo(){this.ref=this.dialogService.open(Q,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(t=>{t&&t.register&&this.cargaInicial(),this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})}onGlobalFilter(t,n){t&&(console.log("Organo-colegaido-sect"),t.filterGlobal(n.target.value,"contains"))}onRowSelect(t){console.log("Organo-colegaido-sect")}onRowUnselect(t){}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(f.xA),e.Y36(A.m),e.Y36(J),e.Y36(N.$),e.Y36(b.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-bandeja-alumno"]],viewQuery:function(n,a){if(1&n&&(e.Gf(ae,5),e.Gf(re,5)),2&n){let c;e.iGM(c=e.CRH())&&(a.filter=c.first),e.iGM(c=e.CRH())&&(a.tabledt1=c.first)}},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar Alumno",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],["pButton","","icon","pi pi-pencil",1,"p-button-info","p-button-sm",3,"click"],["pButton","","icon","pi pi-trash",1,"p-button-danger","p-button-sm",3,"click"],["colspan","8"]],template:function(n,a){1&n&&(e.TgZ(0,"p-panel"),e.YNc(1,se,2,0,"ng-template",0),e.YNc(2,he,10,7,"ng-template",1),e.qZA())},dependencies:[w.Hq,v.jx,K.iA,F.o,Y.s]})}return i})(),_e=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[b.Bz.forChild([{path:"",component:fe}]),b.Bz]})}return i})();var ve=l(6804),V=l(4480),W=l(4055),be=l(6651),Ce=l(7902),xe=l(6022),k=l(1494),Ae=l(6218),Te=l(3259),Ze=l(3904),Se=l(3530),Ie=l(6860);let ye=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({providers:[v.ez],imports:[o.ez,_e,s.UX,s.u5,T._8,K.U$,xe.Xt,w.hJ,Ce.JH,F.j,Ae.A,ve.KZ,V.T,W.q4,$.kW,Y.Q,be.q,L.EV,k.n,G.O,Te.z,L.EV,k.n,Ze.D,G.O,Se.S,f.DL,y.aw,V.T,W.q4,Ie.Z_,D.ef]})}return i})()},4474:(j,x,l)=>{l.d(x,{v:()=>I});var o=l(9862),s=l(5516),b=l(8926);let I=(()=>{class v{constructor(_,e,f){this.http=_,this.httpClientFormData=e,this.handler=f,this.baseUrl=`${s.N.API_BASE}`,this.urlparametro=`${s.N.API_BASE}`,this.httpOptions={headers:new o.WM({"Content-Type":"application/json"})},this.httpClientFormData=new o.eN(this.handler)}getCarrerasDropdown(_){return this.http.get(`${this.baseUrl}carreras-dropdown/${_}`)}getCiclosDropdown(_){return this.http.get(`${this.baseUrl}ciclos-dropdown/${_}`)}getRolesDropdown(){return this.http.get(`${this.baseUrl}roles-dropdown`)}getDocentesDropdown(_){return this.http.get(`${this.baseUrl}docentes-dropdown/${_}`)}getInstitutionsDropdown(){return this.http.get(`${this.baseUrl}institutions-dropdown`)}static#e=this.\u0275fac=function(e){return new(e||v)(b.LFG(o.eN),b.LFG(o.eN),b.LFG(o.jN))};static#t=this.\u0275prov=b.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},2538:(j,x,l)=>{l.d(x,{Z:()=>o});var o={code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",year:"A\xf1o",month:"Mes",week:"Semana",day:"D\xeda",list:"Agenda"},buttonHints:{prev:"$0 antes",next:"$0 siguiente",today:s=>"D\xeda"===s?"Hoy":("Semana"===s?"Esta":"Este")+" "+s.toLocaleLowerCase()},viewHint:s=>"Vista "+("Semana"===s?"de la":"del")+" "+s.toLocaleLowerCase(),weekText:"Sm",weekTextLong:"Semana",allDayText:"Todo el d\xeda",moreLinkText:"m\xe1s",moreLinkHint:s=>`Mostrar ${s} eventos m\xe1s`,noEventsText:"No hay eventos para mostrar",navLinkHint:"Ir al $0",closeHint:"Cerrar",timeHint:"La hora",eventHint:"Evento"}},8672:(j,x,l)=>{l.d(x,{Ro:()=>Y,ef:()=>L,t2:()=>w});var o=l(8926),s=l(5619),b=l(8645),I=l(2181),v=l(9773),d=l(6825),_=l(6593),e=l(6814);const f=["overlay"];function A(p,C){1&p&&o._UZ(0,"div")}function y(p,C){if(1&p&&(o.TgZ(0,"div"),o.YNc(1,A,1,0,"div",6),o.qZA()),2&p){const r=o.oxw(2);o.Tol(r.spinner.class),o.Udp("color",r.spinner.color),o.xp6(1),o.Q6J("ngForOf",r.spinner.divArray)}}function Z(p,C){if(1&p&&(o._UZ(0,"div",7),o.ALo(1,"safeHtml")),2&p){const r=o.oxw(2);o.Q6J("innerHTML",o.lcZ(1,1,r.template),o.oJD)}}function H(p,C){if(1&p&&(o.TgZ(0,"div",1,2),o.YNc(2,y,2,5,"div",3),o.YNc(3,Z,2,3,"div",4),o.TgZ(4,"div",5),o.Hsn(5),o.qZA()()),2&p){const r=o.oxw();o.Udp("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),o.Q6J("@.disabled",r.disableAnimation)("@fadeIn","in"),o.xp6(2),o.Q6J("ngIf",!r.template),o.xp6(1),o.Q6J("ngIf",r.template),o.xp6(1),o.Udp("z-index",r.spinner.zIndex)}}const J=["*"],q={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},N="primary";class T{constructor(C){Object.assign(this,C)}static create(C){return!C?.template&&!C?.type&&console.warn('[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component\n        and ensure css is added to angular.json file'),new T(C)}}let w=(()=>{class p{constructor(){this.spinnerObservable=new s.X(null)}getSpinner(r){return this.spinnerObservable.asObservable().pipe((0,I.h)(m=>m&&m.name===r))}show(r=N,m){return new Promise((u,S)=>{setTimeout(()=>{m&&Object.keys(m).length?(m.name=r,this.spinnerObservable.next(new T({...m,show:!0})),u(!0)):(this.spinnerObservable.next(new T({name:r,show:!0})),u(!0))},10)})}hide(r=N,m=10){return new Promise((u,S)=>{setTimeout(()=>{this.spinnerObservable.next(new T({name:r,show:!1})),u(!0)},m)})}static#e=this.\u0275fac=function(m){return new(m||p)};static#t=this.\u0275prov=o.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();const F=new o.OlP("NGX_SPINNER_CONFIG");let $=(()=>{class p{constructor(r){this._sanitizer=r}transform(r){if(r)return this._sanitizer.bypassSecurityTrustHtml(r)}static#e=this.\u0275fac=function(m){return new(m||p)(o.Y36(_.H7,16))};static#t=this.\u0275pipe=o.Yjl({name:"safeHtml",type:p,pure:!0,standalone:!0})}return p})(),Y=(()=>{class p{constructor(r,m,u,S){this.spinnerService=r,this.changeDetector=m,this.elementRef=u,this.globalConfig=S,this.disableAnimation=!1,this.spinner=new T,this.ngUnsubscribe=new b.x,this.setDefaultOptions=()=>{const{type:z}=this.globalConfig??{};this.spinner=T.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??z,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor="rgba(51,51,51,0.8)",this.zIndex=99999,this.color="#fff",this.size="large",this.fullScreen=!0,this.name=N,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe((0,v.R)(this.ngUnsubscribe)).subscribe(r=>{this.setDefaultOptions(),Object.assign(this.spinner,r),r.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(r){return r===this.elementRef.nativeElement.parentElement||r.parentNode&&this.isSpinnerZone(r.parentNode)}ngOnChanges(r){for(const m in r)if(m){const u=r[m];if(u.isFirstChange())return;typeof u.currentValue<"u"&&u.currentValue!==u.previousValue&&""!==u.currentValue&&(this.spinner[m]=u.currentValue,"showSpinner"===m&&(u.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),"name"===m&&this.initObservable())}}getClass(r,m){this.spinner.divCount=q[r],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((S,z)=>z);let u="";switch(m.toLowerCase()){case"small":u="la-sm";break;case"medium":u="la-2x";break;case"large":u="la-3x"}return"la-"+r+" "+u}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static#e=this.\u0275fac=function(m){return new(m||p)(o.Y36(w),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(F,8))};static#t=this.\u0275cmp=o.Xpm({type:p,selectors:[["ngx-spinner"]],viewQuery:function(m,u){if(1&m&&o.Gf(f,5),2&m){let S;o.iGM(S=o.CRH())&&(u.spinnerDOM=S.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[o.TTD,o.jDz],ngContentSelectors:J,decls:1,vars:1,consts:[["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],["overlay",""],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(m,u){1&m&&(o.F$t(),o.YNc(0,H,6,12,"div",0)),2&m&&o.Q6J("ngIf",u.spinner.show)},dependencies:[$,e.O5,e.ax],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[(0,d.X$)("fadeIn",[(0,d.SB)("in",(0,d.oB)({opacity:1})),(0,d.eR)(":enter",[(0,d.oB)({opacity:0}),(0,d.jt)(300)]),(0,d.eR)(":leave",(0,d.jt)(200,(0,d.oB)({opacity:0})))])]},changeDetection:0})}return p})(),L=(()=>{class p{static forRoot(r){return{ngModule:p,providers:[{provide:F,useValue:r}]}}static#e=this.\u0275fac=function(m){return new(m||p)};static#t=this.\u0275mod=o.oAB({type:p});static#n=this.\u0275inj=o.cJS({imports:[e.ez]})}return p})()},6218:(j,x,l)=>{l.d(x,{A:()=>v,g:()=>I});var o=l(8926),s=l(6814),b=l(6223);let I=(()=>{class d{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(e,f,A,y){this.el=e,this.ngModel=f,this.control=A,this.cd=y}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(f){return new(f||d)(o.Y36(o.SBq),o.Y36(b.On,8),o.Y36(b.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:d,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(f,A){1&f&&o.NdJ("input",function(Z){return A.onInput(Z)}),2&f&&o.ekj("p-filled",A.filled)("p-inputtextarea-resizable",A.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return d})(),v=(()=>{class d{static \u0275fac=function(f){return new(f||d)};static \u0275mod=o.oAB({type:d});static \u0275inj=o.cJS({imports:[s.ez]})}return d})()}}]);