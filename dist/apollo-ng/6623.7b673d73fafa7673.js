"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[6623],{6623:(z,C,n)=>{n.r(C),n.d(C,{CiclosModule:()=>tt});var r=n(6814),_=n(4104),a=n(6223),x=n(9552),v=n(707),c=n(3714),F=n(6804),m=n(4480),u=n(4055),d=n(3965),h=n(1230),b=n(6760),w=n(6651),B=n(7902),M=n(6022),N=n(3722),I=n(1494),D=n(6218),Z=n(3259),Y=n(3904),y=n(8007),U=n(3519),f=n.n(U),t=n(8926),T=n(5118),S=n(4067),J=n(375),E=n(5219);function O(o,p){if(1&o&&(t.TgZ(0,"span",2),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ","add"===e.acciones?"Agregar ciclos":"ver"===e.acciones?"Ver ciclos":"Editar ciclos"," ")}}function L(o,p){1&o&&(t.TgZ(0,"div")(1,"small",17),t._uU(2," El Nombre es requerido "),t.qZA()())}function H(o,p){1&o&&(t.TgZ(0,"div")(1,"small",17),t._uU(2," El campo orden es requerido y debe ser un n\xfamero entero "),t.qZA()())}function G(o,p){1&o&&t._UZ(0,"button",18)}function R(o,p){1&o&&t._UZ(0,"button",19)}function P(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.guardarCiclos())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"Nombre"),t.qZA()(),t.YNc(8,L,3,0,"div",10),t.qZA()()(),t.TgZ(9,"div",4)(10,"div",5)(11,"div",6)(12,"span",7),t._UZ(13,"input",11),t.TgZ(14,"label",9),t._uU(15,"Orden"),t.qZA()(),t.YNc(16,H,3,0,"div",10),t.qZA()()(),t.TgZ(17,"div",4)(18,"div",12)(19,"div",13),t.YNc(20,G,1,0,"button",14),t.YNc(21,R,1,0,"button",15),t.TgZ(22,"button",16),t.NdJ("click",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.closeModal(s))}),t.qZA()()()()()}if(2&o){const e=t.oxw();let i,s;t.Q6J("formGroup",e.parametroForm),t.xp6(8),t.Q6J("ngIf",(null==(i=e.parametroForm.get("nombre"))?null:i.invalid)&&(null==(i=e.parametroForm.get("nombre"))?null:i.touched)),t.xp6(8),t.Q6J("ngIf",(null==(s=e.parametroForm.get("orden"))?null:s.invalid)&&(null==(s=e.parametroForm.get("orden"))?null:s.touched)),t.xp6(4),t.Q6J("ngIf","add"===e.acciones),t.xp6(1),t.Q6J("ngIf","actualizar"===e.acciones)}}let A=(()=>{class o{constructor(e,i,s,l,g){this.fb=e,this.ref=i,this.config=s,this.parametroService=l,this.helpersService=g,this.loading=!1,this.domain_id=this.helpersService.getDominioId(),this.acciones=this.config.data.acciones,this.parametroForm=this.fb.group({nombre:["",a.kI.required],color:[""],orden:["",[a.kI.required,a.kI.pattern("^[0-9]*$"),a.kI.min(1)]]})}ngOnInit(){("ver"===this.acciones||"actualizar"===this.acciones)&&this.parametroForm.patchValue({nombre:this.config.data.data.nombre,color:this.config.data.data.color,orden:this.config.data.data.orden})}guardarCiclos(){if(this.parametroForm.valid){const e=this.parametroForm.value;if("actualizar"===this.acciones){const i={...e,id:this.config.data.data.id};this.parametroService.actualizarCiclos(i).subscribe(s=>{this.ref?.close(),f().fire({title:"\xa1\xc9xito!",text:"Los Datos se actualizaron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},s=>{console.log(s.error.status),(s.error.status="exists")&&this.helpersService.showConfirmDialog("El orden ya existe, \xbfDesea actualizarlo?",()=>{this.updateOrden({...i,domain_id:this.domain_id}),this.ref?.close()}),console.error("Error al actualizar el parametro",s)})}else this.parametroService.guardarCiclos(e).subscribe(i=>{this.ref?.close(),f().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},i=>{console.log(i.status),(i.error.status="exists")&&this.helpersService.showConfirmDialog("El orden ya existe, \xbfDesea actualizarlo?",()=>{this.updateOrden(e),this.ref?.close()}),console.error("Error al guardar el parametro",i)})}else console.error("Formulario inv\xe1lido")}updateOrden(e){this.parametroService.updateOrdenCiclos(e).subscribe(i=>{f().fire({title:"\xa1\xc9xito!",text:"Los Datos se actualizaron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},i=>{console.error("Error al actualizar el parametro",i)})}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(a.qu),t.Y36(T.E7),t.Y36(T.S),t.Y36(S.m),t.Y36(J.$))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-ae-ciclos"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12"],[1,"p-float-label"],["type","text","pInputText","","formControlName","nombre"],[1,"required"],[4,"ngIf"],["type","number","step","1","min","0","pInputText","","formControlName","orden"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","class","p-button-success p-button-sm","type","submit",4,"ngIf"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","class","p-button-warning p-button-sm","type","submit",4,"ngIf"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],[2,"color","brown"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","type","submit",1,"p-button-warning","p-button-sm"]],template:function(i,s){1&i&&(t.TgZ(0,"p-panel"),t.YNc(1,O,2,1,"ng-template",0),t.YNc(2,P,23,5,"ng-template",1),t.qZA())},dependencies:[r.O5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.qQ,v.Hq,E.jx,c.o,h.s,a.sg,a.u]})}return o})();function j(o,p){1&o&&(t.TgZ(0,"span",2),t._uU(1,"Listado de ciclos"),t.qZA())}function K(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onGlobalFilter(s))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.navigateAddCurso())}),t.qZA()()()}}function V(o,p){1&o&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"Acciones"),t.qZA(),t.TgZ(3,"th",19),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th",19),t._uU(6,"Color"),t.qZA()())}function Q(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",20),t.NdJ("click",function(){const l=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.navigateToDetalle(l))}),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){const l=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.navigateToEdit(l))}),t.qZA(),t.TgZ(4,"button",22),t.NdJ("click",function(){const l=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.navigateToDelete(l.id))}),t.qZA()(),t.TgZ(5,"td")(6,"span",23),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._UZ(9,"span",24),t._uU(10),t.qZA()()}if(2&o){const e=p.$implicit;t.xp6(7),t.Oqu(e.nombre),t.xp6(2),t.Udp("background-color",e.color),t.xp6(1),t.hij(" ",e.color," ")}}function q(o,p){1&o&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"No se encontraron registros"),t.qZA()())}function $(o,p){1&o&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function W(o,p){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,K,7,0,"ng-template",8),t.YNc(6,V,7,0,"ng-template",0),t.YNc(7,Q,11,4,"ng-template",9),t.YNc(8,q,3,0,"ng-template",10),t.YNc(9,$,3,0,"ng-template",11),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("value",e.ciclosList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let X=(()=>{class o{constructor(e,i){this.dialogService=e,this.areasDeFormacionService=i,this.loading=!1,this.ciclosList=[],this.originalciclosList=[]}ngOnInit(){this.listarCiclos()}listarCiclos(){this.areasDeFormacionService.getCiclos().subscribe(e=>{this.ciclosList=e,this.originalciclosList=[...e]})}navigateAddCurso(){this.ref=this.dialogService.open(A,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add"}}),this.ref.onClose.subscribe(e=>{this.listarCiclos()})}navigateToDetalle(e){this.ref=this.dialogService.open(A,{width:"80%",styleClass:"custom-dialog-header",data:{acciones:"ver",data:e}}),this.ref.onClose.subscribe(i=>{this.listarCiclos()})}navigateToEdit(e){this.ref=this.dialogService.open(A,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"actualizar",data:e}}),this.ref.onClose.subscribe(i=>{this.listarCiclos()})}navigateToDelete(e){f().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const i=document.querySelector(".swal2-container");i&&i.setAttribute("style","z-index: 2147483647 !important")}}).then(i=>{i.isConfirmed&&this.areasDeFormacionService.eliminarCiclos(e).subscribe(s=>{f().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const l=document.querySelector(".swal2-container");l&&l.setAttribute("style","z-index: 2147483647 !important")}}),this.listarCiclos()},s=>{f().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")})})}onGlobalFilter(e){const i=e.target.value.toLowerCase();this.ciclosList=i?this.originalciclosList.filter(s=>s.nombre.toLowerCase().includes(i)):[...this.originalciclosList]}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(T.xA),t.Y36(S.m))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-ciclos"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar listado de ciclos",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pTooltip","Nombre del \xe1rea","tooltipPosition","top"],[1,"color-box"],["colspan","3"]],template:function(i,s){1&i&&(t.TgZ(0,"p-panel"),t.YNc(1,j,2,0,"ng-template",0),t.YNc(2,W,10,5,"ng-template",1),t.qZA())},dependencies:[v.Hq,E.jx,c.o,h.s,Z.u,x.iA]})}return o})(),k=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[y.Bz.forChild([{path:"",component:X}]),y.Bz]})}return o})(),tt=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[r.ez,k,a.u5,b._8,M.Xt,v.hJ,B.JH,c.j,D.A,F.KZ,m.T,u.q4,d.kW,h.Q,w.q,N.O,Z.z,_.EV,x.U$,I.n,Y.D,a.UX]})}return o})()},6218:(z,C,n)=>{n.d(C,{A:()=>v,g:()=>x});var r=n(8926),_=n(6814),a=n(6223);let x=(()=>{class c{el;ngModel;control;cd;autoResize;onResize=new r.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(m,u,d,h){this.el=m,this.ngModel=u,this.control=d,this.cd=h}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(m){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(m){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(m||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(u){return new(u||c)(r.Y36(r.SBq),r.Y36(a.On,8),r.Y36(a.a5,8),r.Y36(r.sBO))};static \u0275dir=r.lG2({type:c,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(u,d){1&u&&r.NdJ("input",function(b){return d.onInput(b)}),2&u&&r.ekj("p-filled",d.filled)("p-inputtextarea-resizable",d.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return c})(),v=(()=>{class c{static \u0275fac=function(u){return new(u||c)};static \u0275mod=r.oAB({type:c});static \u0275inj=r.cJS({imports:[_.ez]})}return c})()}}]);